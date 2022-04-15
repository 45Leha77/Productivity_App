import { notificationCreator } from "../../components/notifications.js";
import { deleteDomClass, addDomClass } from "../../components/common-functions";
import Controller from "../../components/controller"


let breakTime;
let time;
let iteration;
let stop = false;
let forcedStop = false;
let shortBreak = false;

function finishTimer() {
    document.querySelector('#timer-minutes').classList.add('hide');
    addDomClass('timer-main__number','hide');
    document.querySelector('#buttons-timer__fail-pomodora').classList.add('hide');
    document.querySelector('#buttons-timer__finish-pomodora').classList.add('hide');
    deleteDomClass('timer-main__completed','hide');
    addDomClass('timer-main__circle-inner','timer-main__circle-inner_one-number');
    stop = true;
}
function addFilledPomodoro() {
    let emptyPomodoros = [];
    document.querySelectorAll('.pomodoros-timer-header__item').forEach(item => {
        if(!item.classList.contains('pomodoros-timer-header__item_filled')) {
            emptyPomodoros.push(item);
        }
    })
    emptyPomodoros[0].classList.add('pomodoros-timer-header__item_filled');
}
function pomodoroCreator(iteration) {
    for(let n = 0; n < iteration; n++) {
        let div = document.createElement('div');
        div.className = 'pomodoros-timer-header__item';
        document.querySelector('.pomodoros-timer-header__items').prepend(div);
    }
}
function timerDesignRegulator(...arg) {
    arg.forEach(arg => {
        document.querySelector('.timer-main__circle').style[`border${arg}Color`] = '#8DA5B8';
    })
    if(arg.length < 1) {
        document.querySelector('.timer-main__circle').style[`borderColor`] = 'transparent';
    }
}
function clockRegulator(workTime, partTime) {
            if(workTime === partTime*3) {
                timerDesignRegulator('Top');
            }
            if(workTime === partTime*2) {
                timerDesignRegulator('Right');
            }
            if(workTime === partTime) {
                timerDesignRegulator('Bottom');
            }
}
function startTask() {
    let workTime = time;
        let partTime = Math.round(workTime/4);
        let timer = setInterval(function() {
            if((workTime <= 0 && iteration <= 0) || stop === true) {
                finishTimer();
                timerDesignRegulator('Top','Right', 'Bottom', 'Left');
                if(forcedStop === false) {
                    Controller.determineTaskStatus('Failed');
                }
                notificationCreator('info', 'Oops, time is up!');
                clearInterval(timer); // stop timer
                addDomClass('timer-main__break', 'hide')
                return
            }
            if(workTime <= 0 && iteration > 0 && shortBreak === false) {
                timerDesignRegulator('Top','Right', 'Bottom', 'Left');
                iteration -= 1;
                addFilledPomodoro();
                if(iteration === 0) {
                    stop = true
                } else {
                    shortBreak = true;
                    workTime = breakTime + 1;
                    deleteDomClass('timer-main__break', 'hide')
                    notificationCreator('info','It is time to take a break');
                }
            }
            if(workTime <= 0 && iteration > 0 && shortBreak === true) {
                shortBreak = false;
                workTime = time + 1;
                addDomClass('timer-main__break', 'hide');
                timerDesignRegulator();
                notificationCreator('info','Break is over. Let`s keep working');
            }
            clockRegulator(workTime, partTime);
            if(stop === false) {
                workTime -= 1;
                document.querySelector('.timer-main__number').innerText = workTime;
            }
        }, 1000)
        document.querySelector('#buttons-timer__start').classList.add('hide');
        document.querySelector('#buttons-timer__fail-pomodora').classList.remove('hide');
        document.querySelector('#buttons-timer__finish-pomodora').classList.remove('hide');
}
function timerActions(e) {
    const targetElement = e.target;
    if(targetElement.closest('#buttons-timer__start')) {
        startTask();
        e.preventDefault();
    }
    if(targetElement.closest('#buttons-timer__finish-pomodora')) {
        Controller.determineTaskStatus('Done');
        finishTimer();
        notificationCreator('success', 'Congratulations! Task is performed.');
        forcedStop = true;
        e.preventDefault();
    }
    if(targetElement.closest('#buttons-timer__fail-pomodora')) {
        Controller.determineTaskStatus('Failed');
        finishTimer();
        notificationCreator('error', 'Task is failed. Good luck next time!');
        forcedStop = true;
        e.preventDefault();
    }
    if(targetElement.closest('.notification-message__close-icon')) {
        document.querySelector('.notification-message').remove();
    }
}
function timerPage() {
    Controller.loadCurrentId().then((currentId) => {
        Controller.loadTaskById(currentId).then((task) => {
            document.querySelector('#timer-minutes').classList.remove('hide');
            document.querySelector('.daily-task-list__subtitle').innerText = task.title;
    })
    })
    Controller.settingsLoadRegulator().then(function(responseObj){
        time = +responseObj.workTime;
        iteration = +responseObj.workIteration;
        breakTime = +responseObj.shortBreak;
        document.querySelector('.timer-main__number').innerText = time;
        pomodoroCreator(iteration);
    })
    document.addEventListener('click', timerActions);
}

export {timerPage};