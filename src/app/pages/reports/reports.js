import { hoverText, deleteDomClass, addDomClass, resetModifiers } from "../../components/common-functions"
import Controller from "../../components/controller"

let periodClickedTime;
const topHeaderContainer = document.querySelector('.top-header__container');
const dailyTaskList = document.querySelector('.daily-task-list');

function dayGraphCreator(value) {
    document.getElementById('day-graph-urgent').style.height = `${value.today.urgent*10}%`;
    document.getElementById('day-graph-high').style.height = `${value.today.high*10}%`;
    document.getElementById('day-graph-middle').style.height = `${value.today.middle*10}%`;
    document.getElementById('day-graph-low').style.height = `${value.today.low*10}%`;
    document.getElementById('day-graph-failed').style.height = `${value.today.Failed*10}%`;

    hoverText(document.getElementById('day-graph-urgent'), 'Urgent', value.today.urgent);
    hoverText(document.getElementById('day-graph-high'), 'High', value.today.high);
    hoverText(document.getElementById('day-graph-middle'), 'Middle', value.today.middle);
    hoverText(document.getElementById('day-graph-low'), 'Low', value.today.low);
    hoverText(document.getElementById('day-graph-failed'), 'Failed', value.today.Failed);
}
function weekGraphCreator(value) {
    let doneArray = Array.from(document.querySelectorAll('.week-columns__done'));
    let failedArray = Array.from(document.querySelectorAll('.week-columns__day'));
    for(let i = 1; i < doneArray.length+1; i++) {
            Array.from(doneArray[i-1].children).forEach(el => {
                if(el.id === 'week-graph-urgent'){
                    el.style.height = `${value[i].urgent*10}%`
                    hoverText(el, 'Urgent', value[i].urgent);
                }
                if(el.id === 'week-graph-high'){
                    el.style.height = `${value[i].high*10}%`
                    hoverText(el, 'High', value[i].high);
                }
                if(el.id === 'week-graph-middle'){
                    el.style.height = `${value[i].middle*10}%`
                    hoverText(el, 'Middle', value[i].middle);
                }
                if(el.id === 'week-graph-low'){
                    el.style.height = `${value[i].low*10}%`
                    hoverText(el, 'Low', value[i].low);
                }
            })
            Array.from(failedArray[i-1].children).forEach(el => {
                if(el.id === 'week-graph-failed') {
                    el.style.height = `${value[i].Failed*10}%`
                    hoverText(el, 'Failed', value[i].Failed);
                }
            })
    }
}
function monthGraphCreator(value) {
    let daysArray = Array.from(document.querySelectorAll('.month-columns__column'))
        for(let i = 1; i < daysArray.length+1; i++) {
            Array.from(daysArray[i-1].children).forEach(el => {
                if(el.id === 'month-graph-urgent'){
                    el.style.height = `${value.monthreport[i].urgent*10}%`
                    hoverText(el, 'Urgent', value.monthreport[i].urgent);
                }
                if(el.id === 'month-graph-high'){
                    el.style.height = `${value.monthreport[i].high*10}%`
                    hoverText(el, 'High', value.monthreport[i].high);
                }
                if(el.id === 'month-graph-middle'){
                    el.style.height = `${value.monthreport[i].middle*10}%`
                    hoverText(el, 'Middle', value.monthreport[i].middle);
                }
                if(el.id === 'month-graph-low'){
                    el.style.height = `${value.monthreport[i].low*10}%`
                    hoverText(el, 'Low', value.monthreport[i].low);
                }
                if(el.id === 'month-graph-failed'){
                    el.style.height = `${value.monthreport[i].Failed*10}%`
                    hoverText(el, 'Failed', value.monthreport[i].Failed);
                }
            })
        }
}
function reportActions(e) {
    const targetElement = e.target;
    if(targetElement.closest('.items-tabs-header__item')) {
        resetModifiers('.items-tabs-header__item','items-tabs-header__item_active')
        targetElement.closest('.items-tabs-header__item').classList.add('items-tabs-header__item_active');
        periodClickedTime = document.querySelector('.items-tabs-header__item_active').id;

        if(periodClickedTime === 'day') {
            deleteDomClass('day-columns', 'hide' )
            addDomClass('week-columns', 'hide')
            addDomClass('month-columns', 'hide')
            deleteDomClass('graph-main-report__day-rows-names-day', 'hide')
            addDomClass('graph-main-report__day-rows-names-week', 'hide')
            addDomClass('graph-main-report__day-rows-names-month', 'hide')
        }
        if(periodClickedTime === 'week') {
            addDomClass('day-columns', 'hide' )
            deleteDomClass('week-columns', 'hide')
            addDomClass('month-columns', 'hide')
            addDomClass('graph-main-report__day-rows-names-day', 'hide')
            deleteDomClass('graph-main-report__day-rows-names-week', 'hide')
            addDomClass('graph-main-report__day-rows-names-month', 'hide')
        }
        if(periodClickedTime === 'month') {
            addDomClass('day-columns', 'hide' )
            addDomClass('week-columns', 'hide')
            deleteDomClass('month-columns', 'hide')
            addDomClass('graph-main-report__day-rows-names-day', 'hide')
            addDomClass('graph-main-report__day-rows-names-week', 'hide')
            deleteDomClass('graph-main-report__day-rows-names-month', 'hide')
        }
    }
    if(targetElement.closest('.tabs-report__items')) {
        resetModifiers('.tabs-report__item','tabs-report__item_active')
        targetElement.closest('.tabs-report__item').classList.add('tabs-report__item_active');
        
    }
}
function reportsPage() {
    Controller.reportsLoadRegularot().then(function(value){
        dayGraphCreator(value)
        weekGraphCreator(value)
        monthGraphCreator(value)
    })
document.addEventListener('click', reportActions);
const reportObserver = new ResizeObserver( entries => {
const boxElement = entries[0]
const isDesktop = boxElement.contentRect.width >= 1025;
const isTablet = boxElement.contentRect.width < 1025;
// const isPhone = boxElement.contentRect.width < 721;
// const isMinPhone = boxElement.contentRect.width < 542;

if(isTablet) {
    
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
reportObserver.observe(document.querySelector('#report'));
}

export {reportsPage};