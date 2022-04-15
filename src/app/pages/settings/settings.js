import { minutesToHours, addDomClass, deleteDomClass, resetModifiers, removeAllElements} from "../../components/common-functions";
import { notificationCreator } from "../../components/notifications";
import Controller from "../../components/controller";

function settingsActions(e) {
    const targetElement = e.target;
    if(targetElement.closest('.items-tabs-header__item')) {
        if(targetElement.closest('#settings-tabs-header-item__categories')) {
            deleteDomClass('main-settings__overview-categories', 'hide');
            addDomClass('graph-main-settings', 'hide');
            addDomClass('main-settings__categories', 'hide');
        }
        if(targetElement.closest('#settings-tabs-header-item__pomodoros')) {
            addDomClass('main-settings__overview-categories', 'hide');
            deleteDomClass('graph-main-settings', 'hide');
            deleteDomClass('main-settings__categories', 'hide');
        }
        resetModifiers('.items-tabs-header__item','items-tabs-header__item_active')
        targetElement.closest('.items-tabs-header__item').classList.add('items-tabs-header__item_active');
    }
    if(targetElement.closest('.graph-main-settings-save-button')) {
        Controller.sendSettingsData()
        notificationCreator('success','Settings saved successfully.')
    }
    if(targetElement.closest('.notification-message__close-icon')) {
        document.querySelector('.notification-message').remove();
    }
}
function settingsPage() {
Controller.settingsLoadRegulator().then(function(value){
document.querySelectorAll('.value-body-category-main-settings__number').forEach(Element => {
    if(Element.id === 'settings__work-time') {
        Element.innerText = `${value.workTime}`
    }
    if(Element.id === 'settings__work-iteration') {
        Element.innerText = `${value.workIteration}`
    }
    if(Element.id === 'settings__short-break') {
        Element.innerText = `${value.shortBreak}`
    }
    if(Element.id === 'settings__long-break') {
        Element.innerText = `${value.longBreak}`
    }
})
document.addEventListener('click', settingsActions);
const settingsObserver = new ResizeObserver( entries => {
const boxElement = entries[0]
const isDesktop = boxElement.contentRect.width >= 1025;
const isTablet = boxElement.contentRect.width < 1025;
// const isPhone = boxElement.contentRect.width < 721;
// const isMinPhone = boxElement.contentRect.width < 542;


    class SettingsAdjuster {
        constructor(elem,minValue,maxValue){
            this.elem = elem;
            this.minValue = +minValue;
            this.maxValue = +maxValue;
            this.value = elem.querySelector('.value-body-category-main-settings__number');
            this.currentValue = +elem.querySelector('.value-body-category-main-settings__number').innerHTML;
            this.plus = elem.querySelector('.value-body-category-main-settings__plus');
            this.minus = elem.querySelector('.value-body-category-main-settings__minus');
        }

        add() {
            if(this.currentValue >= this.maxValue) {
                notificationCreator('error',`Error! The value cannot be more than ${this.maxValue}.`);
                return
            }
            this.currentValue += 1;
        }
        subtract () {
            if(this.currentValue <= this.minValue) {
                notificationCreator('error',`Error! The value cannot be less than ${this.minValue}.`);
                return
            }
            this.currentValue -= 1;
        }
    }
    const workTimeAdjuster = new SettingsAdjuster(document.getElementById('work-time-category-settings'),15,25);
    const workIterationAdjuster = new SettingsAdjuster(document.getElementById('work-iteration-category-settings'),2,5);
    const shortBreakAdjuster = new SettingsAdjuster(document.getElementById('short-break-category-settings'),3,5);
    const longBreakAdjuster = new SettingsAdjuster(document.getElementById('long-break-category-settings'),15,30);

    let settingsArr = [workTimeAdjuster,workIterationAdjuster,shortBreakAdjuster,longBreakAdjuster];

    class GraphConstructor {
        constructor() {
        this.graph = document.querySelector('.body-graph-main-settings__items');
        this.timeCheckFrequency = 30;
        }
        getFirstCycleTime() {
            let time = workTimeAdjuster.currentValue*workIterationAdjuster.currentValue + 
            shortBreakAdjuster.currentValue*(workIterationAdjuster.currentValue-1) + longBreakAdjuster.currentValue;
            
            return minutesToHours(time);
        }
        getFullTime() {
            let time = (workTimeAdjuster.currentValue*workIterationAdjuster.currentValue + 
            shortBreakAdjuster.currentValue*(workIterationAdjuster.currentValue-1))*2 +longBreakAdjuster.currentValue;
            return minutesToHours(time);
        }
        getFullTimeInMinutes() {
            let time = (workTimeAdjuster.currentValue*workIterationAdjuster.currentValue + 
            shortBreakAdjuster.currentValue*(workIterationAdjuster.currentValue-1))*2 +longBreakAdjuster.currentValue;
            return time;
        }
        graphItemsCreator() {
        if(document.querySelector('.body-graph-main-settings__item')) {
            removeAllElements('.body-graph-main-settings__item')
        }
        let workTimeValue = workTimeAdjuster.currentValue*workIterationAdjuster.currentValue;
        let shortBreakValue = shortBreakAdjuster.currentValue*workIterationAdjuster.currentValue;
        let sumOfValues = workTimeValue + shortBreakValue + longBreakAdjuster.currentValue;

        let workTimeWidthPercent = workTimeAdjuster.currentValue/sumOfValues*100;
        let shortBreakWidthPercent = shortBreakAdjuster.currentValue/sumOfValues*100;
        let longBreakWidthPercent = longBreakAdjuster.currentValue/sumOfValues*100;

        for(let n = 0; n <= workIterationAdjuster.currentValue*4; n++) {
            let item = document.createElement('div');
            item.className = 'body-graph-main-settings__item';
            if(n % 2 === 0 && n!==workIterationAdjuster.currentValue*2) {
                item.classList.add('body-graph-main-settings__item_work-time')
                item.style.width = `${workTimeWidthPercent}%`;
            } else if(n % 2 !== 0 && n!==workIterationAdjuster.currentValue*2 
                && n!==workIterationAdjuster.currentValue*2-1 
                && n!==workIterationAdjuster.currentValue*2+1) {
                item.classList.add('body-graph-main-settings__item_short-break')
                item.style.width = `${shortBreakWidthPercent}%`;
            } else if(n === workIterationAdjuster.currentValue*2) {
                item.classList.add('body-graph-main-settings__item_long-break')
                item.style.width = `${longBreakWidthPercent}%`;
            }
        this.graph.append(item);
        }
        }
        graphTopTimeCreator() {
            for (let n = 0; n < 3; n++) {
                let timeDot = document.createElement('div');
                    timeDot.className = 'body-graph-main-settings__item_time-icon';
                if (n === 0) {
                    timeDot.innerHTML = '0m';
                    timeDot.classList.add('body-graph-main-settings__item_work-time_time-icon');
                    document.querySelector('.body-graph-main-settings__item_work-time').append(timeDot); // first Element
                } else if (n === 1) {
                    timeDot.innerHTML = `First cycle: ${this.getFirstCycleTime()}`;
                    timeDot.classList.add('body-graph-main-settings__item_long-break_time-icon');
                    document.querySelector('.body-graph-main-settings__item_long-break').append(timeDot);
                } else if (n === 2) {
                    timeDot.innerHTML = `${this.getFullTime()}`;
                    timeDot.classList.add('body-graph-main-settings__item_work-time_time-icon-last');
                    document.querySelector('.body-graph-main-settings__items').lastElementChild.append(timeDot); //last element
                }
            }
        }
        graphBottomTimeCreator(number) {
            if(document.querySelector('.body-graph-main-settings__bottom_time')) {
                removeAllElements('.body-graph-main-settings__bottom_time')
            }
            for (let n = 1; n <= this.getFullTimeInMinutes(); n++) {
                if(n % number === 0) {
                    let item = document.createElement('span');
                    item.innerHTML = minutesToHours(n);
                    item.className = `body-graph-main-settings__bottom_time`;
                    item.style.width = `${n/this.getFullTimeInMinutes()*100 +100000}%`;
                    document.querySelector('.body-graph-main-settings__bottom').append(item);
                }
            }
        }
    }
    const graph = new GraphConstructor();
    graph.graphItemsCreator();
    graph.graphTopTimeCreator();
    graph.graphBottomTimeCreator(30);


    settingsArr.forEach(el => {
    el.minus.addEventListener('click', function() {
        el.subtract();
        el.value.innerHTML = el.currentValue;
        graph.graphItemsCreator();
        graph.graphTopTimeCreator();
        graph.graphBottomTimeCreator(30);

    })
    el.plus.addEventListener('click', function() {
        el.add();
        el.value.innerHTML = el.currentValue;
        graph.graphItemsCreator();
        graph.graphTopTimeCreator();
        graph.graphBottomTimeCreator(30);
    })
})

if(isTablet) {
    graph.graphBottomTimeCreator(60);
    settingsArr.forEach(el => {
    el.minus.addEventListener('click', function() {
        graph.graphBottomTimeCreator(60);

    })
    el.plus.addEventListener('click', function() {
        graph.graphBottomTimeCreator(60);
    })
})
    
    if(!document.querySelector('.top-header__daily-task-list')){
    let topHeader__dailyTaskList = document.createElement('div');
    topHeader__dailyTaskList.className = 'top-header__daily-task-list';
    topHeader__dailyTaskList.innerHTML = dailyTaskList.innerHTML;
    topHeaderContainer.prepend(topHeader__dailyTaskList);

    document.querySelector('.body-header').classList.add('hide');
    } 
} else if(isDesktop){
        if(document.querySelector('.top-header__daily-task-list')) {
            document.querySelector('.top-header__daily-task-list').remove();
            document.querySelector('.body-header').classList.remove('hide');
        }
}
})
settingsObserver.observe(document.querySelector('#settings'));
})
}

export {settingsPage}