/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Start_page_start_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _pages_settings_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _pages_reports_reports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _pages_tasks_list_tasks_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _pages_timer_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* eslint-disable max-len */
/* root component starts here */
__webpack_require__(1); // include general styles

__webpack_require__(4); // include router

/* example of including header component */
__webpack_require__(8);









if(location.pathname === '/') {
    Object(_pages_Start_page_start_page__WEBPACK_IMPORTED_MODULE_0__["startPage"])()
    _router__WEBPACK_IMPORTED_MODULE_5__["default"].init();
}
if(location.pathname === '/static/task-list.html') {
    Object(_pages_tasks_list_tasks_list__WEBPACK_IMPORTED_MODULE_3__["taskListPage"])();
}
if(location.pathname === '/static/settings.html') {
    Object(_pages_settings_settings__WEBPACK_IMPORTED_MODULE_1__["settingsPage"])()
}
if(location.pathname === '/static/report.html') {
    Object(_pages_reports_reports__WEBPACK_IMPORTED_MODULE_2__["reportsPage"])()
}
if(location.pathname === '/static/timer.html') {
    Object(_pages_timer_timer__WEBPACK_IMPORTED_MODULE_4__["timerPage"])()
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StartPageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


function  getRouteInfo() {
    const hash = location.hash ? location.hash.slice(1) : 'home';
    return hash;
}

function handleHash() {
    const hash = getRouteInfo();
    return _StartPageController__WEBPACK_IMPORTED_MODULE_0__["default"][hash]();
}

/* harmony default export */ __webpack_exports__["default"] = ({
    init() {
        window.addEventListener('hashchange', function() {
          handleHash()
        })
        handleHash()
    }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Start_page_start_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["default"] = ({
    presentation() {
        _pages_Start_page_start_page__WEBPACK_IMPORTED_MODULE_0__["default"].presentation()
    },
    home() {
        _pages_Start_page_start_page__WEBPACK_IMPORTED_MODULE_0__["default"].home()
    },
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startPage", function() { return startPage; });
/* harmony import */ var _components_common_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);


function startPageActions(e) {
    const targetElement = e.target;
    if(targetElement.closest('.start-page__access-button')) {
        return location.href = "/static/task-list.html";
    }
}
function startPage() {
    location.hash = 'home';
    document.addEventListener("click", startPageActions);
}


/* harmony default export */ __webpack_exports__["default"] = ({
    home() {
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('start-page__image', 'hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('start-page__text', 'hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('instruction-block', 'hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('start-page__instruction-button', 'hide');
    },
    presentation() {
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('start-page__image', 'hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('start-page__text', 'hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('instruction-block', 'hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('start-page__instruction-button', 'hide');
    }
});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFirstTask", function() { return addFirstTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openGlobalList", function() { return openGlobalList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutesToHours", function() { return minutesToHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDomClass", function() { return deleteDomClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoverText", function() { return hoverText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDomClass", function() { return addDomClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetModifiers", function() { return resetModifiers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllElements", function() { return removeAllElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findCheckedRadioButton", function() { return findCheckedRadioButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputValue", function() { return getInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearArrays", function() { return clearArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unCheckAllRadioButtons", function() { return unCheckAllRadioButtons; });
function addFirstTask() { 
    document.querySelector('.tabs-header').classList.add('hide');
    document.querySelector('.global-list').classList.add('hide');
    document.querySelector('.main__tasks').classList.add('hide');
    document.querySelector('.add-task-main').classList.remove('hide');
}
function openGlobalList() {
    document.querySelector('.global-list__sections').classList.toggle('hide');
    document.querySelector('.top-global-list__tabs').classList.toggle('hide');
}
function minutesToHours(time) {
  let min = time % 60;
  let hours = (time-min) / 60;
  if(hours >= 1 && min >= 1) {
    return `${hours}h ${min}m`;
  } else if ( hours < 1 && min >=1 ) {
    return `${min}m`
  } else if ( hours >= 1 && min < 1) {
    return `${hours}h`;
}     
}
function deleteDomClass(htmlElementClass, className) {
    if(document.querySelector(`.${htmlElementClass}`).classList.contains(className)) {
        document.querySelector(`.${htmlElementClass}`).classList.remove(className)
    }
}
function addDomClass(htmlElementClass, className) {
    if(!document.querySelector(`.${htmlElementClass}`).classList.contains(className)) {
        document.querySelector(`.${htmlElementClass}`).classList.add(className)
    }
}
function hoverText(targetElement, text, tasksNumber) {
    let hoverDiv = document.createElement('div');
    hoverDiv.innerHTML = `
    <p>${text}</p>
    <p>Tasks:${tasksNumber}</p>
    `;
    hoverDiv.classList.add('hover');
    hoverDiv.style.display = 'none';
    targetElement.prepend(hoverDiv);

    targetElement.onmouseover = function(event) {
        let target = event.target;
        target.style.position = 'relative';
        hoverDiv.style.display = 'block';
    };
    targetElement.onmouseout = function(event) {
        let target = event.target;
        target.style.position = 'static';
        hoverDiv.style.display = 'none';
    };
}
function resetModifiers(selector, modifier) {
    document.querySelectorAll(selector).forEach(el => {
            if(el.classList.contains(modifier)){
                el.classList.remove(modifier)
            }
        })
}
function removeAllElements(selector) {
    document.querySelectorAll(selector).forEach(el => {
            el.remove();
    })
}
function findCheckedRadioButton(classOfElements) { 
    let checkedElementId = '';
    document.querySelectorAll(classOfElements).forEach(el => {
        if(el.checked === true) {
            checkedElementId = el.id
        }
 })
 return checkedElementId;
}
function getInputValue(elementId) {
    return document.getElementById(elementId).value
}
function clearArrays(...arrays){
    arrays.forEach(array => {
      array.length = 0;
})
}
function unCheckAllRadioButtons(selector){
    document.querySelectorAll(selector).forEach( input => {
        if(input.checked === true) {
            input.checked = false;
        }
    })
}



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9); // example of including component's styles


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsPage", function() { return settingsPage; });
/* harmony import */ var _components_common_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _components_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _components_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);




function settingsActions(e) {
    const targetElement = e.target;
    if(targetElement.closest('.items-tabs-header__item')) {
        if(targetElement.closest('#settings-tabs-header-item__categories')) {
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('main-settings__overview-categories', 'hide');
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('graph-main-settings', 'hide');
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('main-settings__categories', 'hide');
        }
        if(targetElement.closest('#settings-tabs-header-item__pomodoros')) {
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('main-settings__overview-categories', 'hide');
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('graph-main-settings', 'hide');
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('main-settings__categories', 'hide');
        }
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["resetModifiers"])('.items-tabs-header__item','items-tabs-header__item_active')
        targetElement.closest('.items-tabs-header__item').classList.add('items-tabs-header__item_active');
    }
    if(targetElement.closest('.graph-main-settings-save-button')) {
        _components_controller__WEBPACK_IMPORTED_MODULE_2__["default"].sendSettingsData()
        Object(_components_notifications__WEBPACK_IMPORTED_MODULE_1__["notificationCreator"])('success','Settings saved successfully.')
    }
    if(targetElement.closest('.notification-message__close-icon')) {
        document.querySelector('.notification-message').remove();
    }
}
function settingsPage() {
_components_controller__WEBPACK_IMPORTED_MODULE_2__["default"].settingsLoadRegulator().then(function(value){
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
                Object(_components_notifications__WEBPACK_IMPORTED_MODULE_1__["notificationCreator"])('error',`Error! The value cannot be more than ${this.maxValue}.`);
                return
            }
            this.currentValue += 1;
        }
        subtract () {
            if(this.currentValue <= this.minValue) {
                Object(_components_notifications__WEBPACK_IMPORTED_MODULE_1__["notificationCreator"])('error',`Error! The value cannot be less than ${this.minValue}.`);
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
            
            return Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["minutesToHours"])(time);
        }
        getFullTime() {
            let time = (workTimeAdjuster.currentValue*workIterationAdjuster.currentValue + 
            shortBreakAdjuster.currentValue*(workIterationAdjuster.currentValue-1))*2 +longBreakAdjuster.currentValue;
            return Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["minutesToHours"])(time);
        }
        getFullTimeInMinutes() {
            let time = (workTimeAdjuster.currentValue*workIterationAdjuster.currentValue + 
            shortBreakAdjuster.currentValue*(workIterationAdjuster.currentValue-1))*2 +longBreakAdjuster.currentValue;
            return time;
        }
        graphItemsCreator() {
        if(document.querySelector('.body-graph-main-settings__item')) {
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["removeAllElements"])('.body-graph-main-settings__item')
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
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["removeAllElements"])('.body-graph-main-settings__bottom_time')
            }
            for (let n = 1; n <= this.getFullTimeInMinutes(); n++) {
                if(n % number === 0) {
                    let item = document.createElement('span');
                    item.innerHTML = Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["minutesToHours"])(n);
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



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationCreator", function() { return notificationCreator; });
function postponedNotificationDelete(type) {
    if(type === 'error') {
        return;
    } else {
        setTimeout(() => {
            if(document.querySelector('.notification-message__close-icon')) {
                document.querySelectorAll('.notification-message').forEach(mess => {
                    mess.remove();
                })
            }
        }, 3000);
    }
}

function notificationCreator(type,text) {
    let color;
    if(type === 'info') {
        color = 'rgba(89, 171, 227, 1)';
    }
    if(type === 'error') {
        color = 'rgba(247, 92, 76, 1)';
    }
    if(type === 'warning') {
        color = 'rgba(255, 168, 65, 1)';
    }
    if(type === 'success') {
        color = 'rgba(26, 188, 156, 1)';
    }
    if(document.querySelector('.notification-message')) {
        return
    }
    let notification = document.createElement('div');
    notification.className = 'notification-message'
    notification.innerHTML = `
    <div class="notification-message__image" style="background-color:${color}">&#128172</div>
    <div class="notification-message__main" style="background-color:${color}">
      <div class="notification-message__container">
        <div class="notification-message__text">${text}</div>
        <div class="notification-message__close-icon">×</div>
      </div>
    </div>`
    document.querySelector('body').append(notification);
    postponedNotificationDelete(type);
}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _taskView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);




let sortedTasks = {
    allArray: [],
    lowArray: [],
    middleArray: [],
    highArray: [],
    urgentArray: [],
    fiveSelectedArrayToDo: [],
    doneArray: [],
    deletedArray: []
}
/* harmony default export */ __webpack_exports__["default"] = ({
    async reportsLoadRegularot() {
    let result = await _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('GET','http://localhost:3000/tasks').then(responseData => {
        return responseData
    })
    const tasksQuantity = {
        today: {
        urgent: 0,
        high: 0,
        middle: 0,
        low: 0,
        Failed: 0
        },
        1: {
            urgent: 0,
            high: 0,
            middle: 0,
            low: 0,
            Failed: 0
        },
        2: {
            urgent: 0,
            high: 0,
            middle: 0,
            low: 0,
            Failed: 0
        },
        3: {
            urgent: 0,
            high: 0,
            middle: 0,
            low: 0,
            Failed: 0
        },
        4: {
            urgent: 0,
            high: 0,
            middle: 0,
            low: 0,
            Failed: 0
        },
        5: {
            urgent: 0,
            high: 0,
            middle: 0,
            low: 0,
            Failed: 0
        },
        monthreport: {
            1: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            2: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            3: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            4: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            5: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            6: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            7: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            8: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            9: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            10: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            11: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            12: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            13: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            14: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            15: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            16: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            17: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            18: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            19: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            20: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            21: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            22: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            23: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            24: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            25: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            26: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            27: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            28: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            29: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            },
            30: {
                urgent: 0,
                high: 0,
                middle: 0,
                low: 0,
                Failed: 0
            }
        }
    }
    let date = new Date();
    result.forEach(el => { 
        let doneDate = new Date(el.doneDate);
        if(el.status === 'ToDo' || el.status === 'Deleted') {
            return
        }
        if(doneDate.getDate() === date.getDate() && doneDate.getMonth() === date.getMonth() && doneDate.getFullYear() === date.getFullYear()) {
        if(el.status === 'Done') {
        tasksQuantity.today[`${el.priority}`] += 1;
        }
        tasksQuantity.today[`${el.status}`] += 1;
        }
        if(el.status === 'Done' && doneDate.getMonth() === date.getMonth() && doneDate.getFullYear() === date.getFullYear()) {
            if(Math.abs(date.getDate()-doneDate.getDate()) < 5 && doneDate.getDay() <= 5 && doneDate.getDay() !== 0) {
                tasksQuantity[`${doneDate.getDay()}`][`${el.priority}`] += 1;
            }
                tasksQuantity.monthreport[`${doneDate.getDate()}`][`${el.priority}`] += 1;
            }
        if(el.status === 'Failed' && doneDate.getMonth() === date.getMonth() && doneDate.getFullYear() === date.getFullYear()) {
            if(Math.abs(date.getDate()-doneDate.getDate() < 5) && doneDate.getDay() <= 5 && doneDate.getDay() !== 0) {
                tasksQuantity[`${doneDate.getDay()}`][`${el.status}`] += 1;
            }
            tasksQuantity.monthreport[`${doneDate.getDate()}`][`${el.status}`] += 1;
        }
    })
    return tasksQuantity;
    },
    async settingsLoadRegulator() {
    let result = await _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('GET','http://localhost:3000/settings').then(responseData => {
        return responseData
    })
    let responseObj = {
        workTime: result.workTime,
        workIteration: result.workIteration,
        shortBreak: result.shortBreak,
        longBreak: result.longBreak
    }
    return responseObj
    },
    async taskListLoadRegulator(url) {
        let result = await _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('GET', url).then(responseData => {
            return responseData
        })
    return result
    },
    async loadTaskById(currentId) {
        let result = await _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('GET',`http://localhost:3000/tasks/${currentId}`)
        .then (task => {
            return task;
        })
        return result;
    },
    async loadCurrentId() {
    let result = await _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('GET',`http://localhost:3000/current`)
    .then(responseData => {
        return responseData.id;
    })
    return result
    },
    sendSettingsData() {
    _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('POST', 'http://localhost:3000/settings', {
        workTime: document.querySelector('#settings__work-time').innerText,
        workIteration: document.querySelector('#settings__work-iteration').innerText,
        shortBreak: document.querySelector('#settings__short-break').innerText,
        longBreak: document.querySelector('#settings__long-break').innerText
    }).then(responseData => {
        return responseData;
    });
    },
    sendTaskListData() {
        _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('POST', 'http://localhost:3000/tasks', {
            title: Object(_common_functions__WEBPACK_IMPORTED_MODULE_0__["getInputValue"])('task-title-input'),
            description: Object(_common_functions__WEBPACK_IMPORTED_MODULE_0__["getInputValue"])('task-description-input'),
            category: Object(_common_functions__WEBPACK_IMPORTED_MODULE_0__["findCheckedRadioButton"])('.modal-category-input'),
            deadline: Object(_common_functions__WEBPACK_IMPORTED_MODULE_0__["getInputValue"])('task-deadline-input'),
            estimation: 'estimation (unused)',
            priority: Object(_common_functions__WEBPACK_IMPORTED_MODULE_0__["findCheckedRadioButton"])('.modal-priority-input'),
            status: 'ToDo',
            selected: false,
        }).then(responseData => {
            return responseData;
        }
        );
    },
    sendCurrentId(id) {
        _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('POST', 'http://localhost:3000/current', {
            id: id
        }).then(responseData => {
            return responseData;
        }
        );
    },
    determineTaskStatus(status) {
    _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('GET', `http://localhost:3000/current`)
        .then(current => {
            _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('PATCH', `http://localhost:3000/tasks/${current.id}`, {
                selected: false,
                status: status,
                doneDate: new Date()
            }).then(responseData => {
                return responseData;
            });
        });
    },
    deleteTask(id) {
        _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('PATCH',`http://localhost:3000/tasks/${id}`, {
             status: 'Deleted'
        }).then(responseData => {
             return responseData;
        })
    },
    editTask(id) {
    _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('PATCH',`http://localhost:3000/tasks/${id}`, {
            title: Object(_common_functions__WEBPACK_IMPORTED_MODULE_0__["getInputValue"])('task-title-input'),
            description: Object(_common_functions__WEBPACK_IMPORTED_MODULE_0__["getInputValue"])('task-description-input'),
            category: Object(_common_functions__WEBPACK_IMPORTED_MODULE_0__["findCheckedRadioButton"])('.modal-category-input'),
            deadline: Object(_common_functions__WEBPACK_IMPORTED_MODULE_0__["getInputValue"])('task-deadline-input'),
            priority: Object(_common_functions__WEBPACK_IMPORTED_MODULE_0__["findCheckedRadioButton"])('.modal-priority-input')
        }).then(responseData => {
            return responseData;
        }
    )
    },
    selectTask(id) {
    _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('PATCH',`http://localhost:3000/tasks/${id}`, {
            selected: true
        }).then(responseData => {
            return responseData;
        })
    },
    restoreTask(id) {
    _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('PATCH',`http://localhost:3000/tasks/${id}`, {
            status: 'ToDo'
    }).then(responseData => {
            return responseData;
       })
    },
    deleteTaskPermanently(id) {
    _model__WEBPACK_IMPORTED_MODULE_1__["default"].sendHttpRequest('DELETE',`http://localhost:3000/tasks/${id}`).then(responseData => {
        return responseData;
    }
    )
    },
    mainTasksDistributionInArrays(value) {
    value.forEach(dbObject => {
        if(dbObject.selected === true && dbObject.status === 'ToDo') {
            sortedTasks.fiveSelectedArrayToDo.push(dbObject)
        }
        if(dbObject.status === 'Done') {
            sortedTasks.doneArray.push(dbObject)
        }
        if(dbObject.status === 'Deleted') {
            sortedTasks.deletedArray.push(dbObject);
        }
    })
    },
    globalListTasksDistributionInArrays(value) {
    value.forEach(dbObject => {
        if(dbObject.status === 'ToDo') {
            sortedTasks.allArray.push(dbObject);
            if(dbObject.priority === 'urgent') {
                sortedTasks.urgentArray.push(dbObject)
            }
            if(dbObject.priority === 'high') {
                sortedTasks.highArray.push(dbObject)
            }
            if(dbObject.priority === 'middle') {
                sortedTasks.middleArray.push(dbObject)
            }
            if(dbObject.priority === 'low') {
                sortedTasks.lowArray.push(dbObject)
            }
        }
    })
    },
    updateTasksData() {
        this.taskListLoadRegulator('http://localhost:3000/tasks')
        .then((value) => {
            Object(_common_functions__WEBPACK_IMPORTED_MODULE_0__["clearArrays"])(sortedTasks.fiveSelectedArrayToDo,sortedTasks.allArray,sortedTasks.doneArray,sortedTasks.lowArray,sortedTasks.middleArray,sortedTasks.highArray,sortedTasks.urgentArray,sortedTasks.deletedArray)
            this.mainTasksDistributionInArrays(value);
            _taskView__WEBPACK_IMPORTED_MODULE_2__["default"].createMainTask(sortedTasks.fiveSelectedArrayToDo);
            this.globalListTasksDistributionInArrays(value);
            _taskView__WEBPACK_IMPORTED_MODULE_2__["default"].createGlobalListTask(sortedTasks.allArray);
            _taskView__WEBPACK_IMPORTED_MODULE_2__["default"].setDeletedTasksNumber(sortedTasks.deletedArray.length)
        })
    },
    sortedTasks
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


/* harmony default export */ __webpack_exports__["default"] = ({
    sendHttpRequest(method, url, data = null) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (this.status === 200) {
                resolve(xhr.response);
            } else if (this.status === 404) {
                Object(_components_notifications__WEBPACK_IMPORTED_MODULE_0__["notificationCreator"])('error', `No connection with server. There is an error in URL ${url}`);
            }
        };
        xhr.onerror = function () {
            Object(_components_notifications__WEBPACK_IMPORTED_MODULE_0__["notificationCreator"])('error', 'Error! No connection with server.');
        };
        if (data) {
            xhr.send(JSON.stringify(data));
        }
        if (!data) {
            xhr.send();
        }
    });
    return promise;
    }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function taskInnerHtml(dbObject) {
    let taskInnerHtml = `
            <div class="task__category"></div>
            <div class="task__body body-task">
            <div class="body-task__content content-body-task">
            <div class="content-body-task__deadline"><span>${dbObject.deadline}</span></div>
            <div class="content-body-task__task-text">
              <p class="content-body-task__title">${dbObject.title}</p>
              <p class="content-body-task__text">${dbObject.description}</p>
            </div>
            </div>
            <div class="body-task__edit-block edit-block">
            <div class="edit-block__restore">🔙</div>
            <div class="edit-block__select"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"/></svg></div> 
            <div class="edit-block__edit"><svg xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2501 4.73113C13.1485 4.62453 13.0073 4.5648 12.8601 4.56613C12.7096 4.56285 12.5645 4.62268 12.4601 4.73113L2.64011 14.5631C2.41489 14.81 2.24449 15.1017 2.14011 15.4191L1.02011 19.5481C0.980196 19.6612 0.99497 19.7864 1.06011 19.8871C1.12207 19.9607 1.21398 20.0022 1.31011 20.0001C1.35747 19.9999 1.40457 19.9931 1.45011 19.9801L5.57011 18.8541C5.89057 18.7539 6.18446 18.583 6.43011 18.3541L16.2501 8.52113C16.4655 8.29796 16.4655 7.94431 16.2501 7.72113L13.2501 4.73113ZM19.2001 1.77313C18.7056 1.27813 18.0347 1 17.3351 1C16.6354 1 15.9645 1.27813 15.4701 1.77313L15.0501 2.19513C14.8755 2.33973 14.7672 2.54909 14.7501 2.77513C14.7471 2.86033 14.7797 2.94293 14.8401 3.00313L17.9401 6.10913C18.0162 6.17862 18.1171 6.21464 18.2201 6.20913C18.4373 6.19179 18.6387 6.08892 18.7801 5.92313L19.2001 5.50113C20.2268 4.47056 20.2268 2.80371 19.2001 1.77313Z" fill="#CACACA" /></svg></div>
            <div class="edit-block__delete"><svg xmlns="http://www.w3.org/2000/svg"><rect x="4" y="6" width="12" height="13" stroke="#CACACA" stroke-width="2" /><rect x="7" y="9" width="2" height="7" fill="#CACACA" /><rect x="18" y="1" width="2" height="16" transform="rotate(90 18 1)" fill="#CACACA" /><path d="M7.14286 0L6 1H14L12.8571 0H7.14286Z" fill="#CACACA" /><rect x="11" y="9" width="2" height="7" fill="#CACACA" /></svg></div>
            </div>
            </div>
            <div class="task__estimation estimation-task">
              <div class="estimation-task__pomodoro">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"y="0px" viewBox="0 0 326 309.6" style="enable-background:new 0 0 326 309.6;" xml:space="preserve"><style type="text/css">.st0 {fill: url(#SVGID_1_);}</style><g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="163.5972" y1="309.5705" x2="163.5972" y2="-4.529284e-10"><stop offset="0" style="stop-color:#F05D4E" /><stop offset="0.33" style="stop-color:#F27421" /><stop offset="0.66" style="stop-color:#FCDB43" /><stop offset="0.9335" style="stop-color:#27B899" /></linearGradient><path class="st0" d="M206.3,39.7c-11.1,0-22.1,1.4-32.6,4.3V0l-19.3,10.4c-0.5,0.3-0.9,0.8-0.9,1.4V44c-10.6-2.8-21.5-4.3-32.6-4.3 C54.4,39.7,0.3,91.1,0.3,154.3c0,41.5,17,80.4,47.8,109.8c30.7,29.1,72.1,45.5,115.4,45.5c43.6,0,84.6-16.1,115.5-45.5 c30.8-29.3,47.8-68.3,47.8-109.8C326.9,91.1,272.8,39.7,206.3,39.7z M163.3,69.1L218,84.7l-2.3-1.6L185.4,61 c6.8-1.4,13.8-2.1,20.9-2.1c55.3,0,100.3,42.8,100.3,95.4c0,75-64.2,136-143.1,136s-143.1-61-143.1-136c0-52.6,45-95.4,100.3-95.4 c7.1,0,14.1,0.7,20.9,2.1l-33.1,24.1L163.3,69.1z M153.5,76.7" /></g></svg>
              </div>
            </div>
`
return taskInnerHtml;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  createGlobalListTask(arrayOfTasks) {
    arrayOfTasks.forEach(dbObject => {
        let task = document.createElement('div');
        task.classList.add('section__task');
        task.classList.add('task');
        task.id = `${dbObject.id}`;
        task.innerHTML = taskInnerHtml(dbObject);
        document.querySelector(`#section-${dbObject.category}`).classList.remove('hide');
        document.querySelector(`#section-${dbObject.category}`).append(task);
    })
  },
  createMainTask(arrayOfTasks) {
    arrayOfTasks.forEach(dbObject => {
        let task = document.createElement('div');
        task.classList.add('task');
        task.classList.add('main__task');
        task.id = `${dbObject.id}`;
        task.innerHTML = taskInnerHtml(dbObject);
        task.querySelector('.task__category').classList.add(`task__category_${dbObject.category}`);
        document.querySelector('.main__tasks').prepend(task);
    })
  },
  setDeletedTasksNumber(number) {
    return document.querySelector('.delete-menu-top-header__number').innerText = number;
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportsPage", function() { return reportsPage; });
/* harmony import */ var _components_common_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _components_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);



let periodClickedTime;
const topHeaderContainer = document.querySelector('.top-header__container');
const dailyTaskList = document.querySelector('.daily-task-list');

function dayGraphCreator(value) {
    document.getElementById('day-graph-urgent').style.height = `${value.today.urgent*10}%`;
    document.getElementById('day-graph-high').style.height = `${value.today.high*10}%`;
    document.getElementById('day-graph-middle').style.height = `${value.today.middle*10}%`;
    document.getElementById('day-graph-low').style.height = `${value.today.low*10}%`;
    document.getElementById('day-graph-failed').style.height = `${value.today.Failed*10}%`;

    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(document.getElementById('day-graph-urgent'), 'Urgent', value.today.urgent);
    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(document.getElementById('day-graph-high'), 'High', value.today.high);
    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(document.getElementById('day-graph-middle'), 'Middle', value.today.middle);
    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(document.getElementById('day-graph-low'), 'Low', value.today.low);
    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(document.getElementById('day-graph-failed'), 'Failed', value.today.Failed);
}
function weekGraphCreator(value) {
    let doneArray = Array.from(document.querySelectorAll('.week-columns__done'));
    let failedArray = Array.from(document.querySelectorAll('.week-columns__day'));
    for(let i = 1; i < doneArray.length+1; i++) {
            Array.from(doneArray[i-1].children).forEach(el => {
                if(el.id === 'week-graph-urgent'){
                    el.style.height = `${value[i].urgent*10}%`
                    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(el, 'Urgent', value[i].urgent);
                }
                if(el.id === 'week-graph-high'){
                    el.style.height = `${value[i].high*10}%`
                    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(el, 'High', value[i].high);
                }
                if(el.id === 'week-graph-middle'){
                    el.style.height = `${value[i].middle*10}%`
                    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(el, 'Middle', value[i].middle);
                }
                if(el.id === 'week-graph-low'){
                    el.style.height = `${value[i].low*10}%`
                    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(el, 'Low', value[i].low);
                }
            })
            Array.from(failedArray[i-1].children).forEach(el => {
                if(el.id === 'week-graph-failed') {
                    el.style.height = `${value[i].Failed*10}%`
                    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(el, 'Failed', value[i].Failed);
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
                    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(el, 'Urgent', value.monthreport[i].urgent);
                }
                if(el.id === 'month-graph-high'){
                    el.style.height = `${value.monthreport[i].high*10}%`
                    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(el, 'High', value.monthreport[i].high);
                }
                if(el.id === 'month-graph-middle'){
                    el.style.height = `${value.monthreport[i].middle*10}%`
                    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(el, 'Middle', value.monthreport[i].middle);
                }
                if(el.id === 'month-graph-low'){
                    el.style.height = `${value.monthreport[i].low*10}%`
                    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(el, 'Low', value.monthreport[i].low);
                }
                if(el.id === 'month-graph-failed'){
                    el.style.height = `${value.monthreport[i].Failed*10}%`
                    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["hoverText"])(el, 'Failed', value.monthreport[i].Failed);
                }
            })
        }
}
function reportActions(e) {
    const targetElement = e.target;
    if(targetElement.closest('.items-tabs-header__item')) {
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["resetModifiers"])('.items-tabs-header__item','items-tabs-header__item_active')
        targetElement.closest('.items-tabs-header__item').classList.add('items-tabs-header__item_active');
        periodClickedTime = document.querySelector('.items-tabs-header__item_active').id;

        if(periodClickedTime === 'day') {
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('day-columns', 'hide' )
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('week-columns', 'hide')
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('month-columns', 'hide')
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('graph-main-report__day-rows-names-day', 'hide')
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('graph-main-report__day-rows-names-week', 'hide')
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('graph-main-report__day-rows-names-month', 'hide')
        }
        if(periodClickedTime === 'week') {
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('day-columns', 'hide' )
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('week-columns', 'hide')
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('month-columns', 'hide')
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('graph-main-report__day-rows-names-day', 'hide')
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('graph-main-report__day-rows-names-week', 'hide')
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('graph-main-report__day-rows-names-month', 'hide')
        }
        if(periodClickedTime === 'month') {
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('day-columns', 'hide' )
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('week-columns', 'hide')
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('month-columns', 'hide')
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('graph-main-report__day-rows-names-day', 'hide')
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('graph-main-report__day-rows-names-week', 'hide')
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('graph-main-report__day-rows-names-month', 'hide')
        }
    }
    if(targetElement.closest('.tabs-report__items')) {
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["resetModifiers"])('.tabs-report__item','tabs-report__item_active')
        targetElement.closest('.tabs-report__item').classList.add('tabs-report__item_active');
        
    }
}
function reportsPage() {
    _components_controller__WEBPACK_IMPORTED_MODULE_1__["default"].reportsLoadRegularot().then(function(value){
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



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskListPage", function() { return taskListPage; });
/* harmony import */ var _components_common_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _components_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _components_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _components_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _components_taskView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);






const topHeaderContainer = document.querySelector('.top-header__container');
const dailyTaskList = document.querySelector('.daily-task-list');
const topHeader_menu = document.querySelector('.menu-top-header');
let top_global_list__Clickedtab;
let header_tabs__Clickedtab;
let currentId;

function resetTaskListView() {
        document.querySelectorAll('.global-list__section').forEach(section => {
            if(section.childElementCount < 2) {
                section.classList.add('hide')
            }
            })
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["resetModifiers"])('.top-global-list__tab','top-global-list__tab_active');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["resetModifiers"])('.items-tabs-header__item','items-tabs-header__item_active');
        document.querySelector('#ToDo').classList.add('items-tabs-header__item_active');
        document.querySelector('#all').classList.add('top-global-list__tab_active');
}
function cleanInputs() {
    document.querySelector('#task-title-input').value = null;
    document.querySelector('#task-description-input').value = null;
    document.querySelector('#task-deadline-input').value = null;
    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["unCheckAllRadioButtons"])('.modal-category-input');
    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["unCheckAllRadioButtons"])('.modal-priority-input');
}
function taskListActions(e) {
    const targetElement = e.target;
    if(!document.querySelector('.modal').classList.contains('hide') && !targetElement.closest('.modal')) {
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('modal','hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('tabs-header','hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('global-list','hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('main__tasks','hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('add-task-main','hide');
    }
    if(targetElement.closest('.daily-task-list__add-icon')) {
    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addFirstTask"])()
    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('delete-modal-body','hide')
    e.preventDefault();
    }
    if(targetElement.closest('.top-global-list__header')) {
    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["openGlobalList"])();
    e.preventDefault();
    }
    if(targetElement.closest('.edit-block__edit')) {
        document.querySelector('.modal').classList.toggle('hide');
        document.querySelector('.body-modal-header__title').textContent = 'Edit Task';
        document.querySelector('.modal').classList.add('modal-edit');
        currentId = targetElement.closest('.edit-block__edit').closest('.task').id;
        _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].taskListLoadRegulator(`http://localhost:3000/tasks/${currentId}`).then(function(value){
            document.querySelector('#task-title-input').value = value.title;
            document.querySelector('#task-description-input').value = value.description;
            document.querySelector(`#${value.category}`).checked = true;
            document.querySelector('#task-deadline-input').value = value.deadline;
            document.querySelector(`.section__item>#${value.priority}`).checked = true;
        })
    }
    if(targetElement.closest('.add-task-main__icon') || targetElement.closest('.add-task-main__text')) {
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('body-modal__sections','hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('top-modal-header__accept-icon', 'hide');
        document.querySelector('.modal').classList.toggle('hide');
        document.querySelector('.modal').classList.add('modal-add');
        document.querySelector('.body-modal-header__title').textContent = 'Add Task';
    }
    if(targetElement.closest('.edit-block__delete')) {
        document.querySelector('.modal').classList.toggle('hide');
        document.querySelector('.body-modal-header__title').textContent = 'Remove Task';
        document.querySelector('.body-modal__sections').classList.add('hide');
        document.querySelector('.top-modal-header__accept-icon').classList.add('hide');
        document.querySelector('.body-modal__detele').classList.remove('hide');
        document.querySelector('.modal').classList.add('modal-delete'); 
        currentId = targetElement.closest('.edit-block__delete').closest('.task').id;
    }
    if(targetElement.closest('.edit-block__select')) {
        if(_components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].sortedTasks.fiveSelectedArrayToDo.length >= 5) {
            Object(_components_notifications__WEBPACK_IMPORTED_MODULE_1__["notificationCreator"])('error','Error! It can be only 5 selected tasks.')
            return
        }
        currentId = targetElement.closest('.edit-block__select').closest('.task').id;
        _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].sortedTasks.fiveSelectedArrayToDo.forEach(task => {
            if(+task.id === +currentId) {
                    Object(_components_notifications__WEBPACK_IMPORTED_MODULE_1__["notificationCreator"])('error','Error! This task is already selected.')
                    return
            }
        })
        async function sequenceRegulator() {
            _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].selectTask(currentId);
        }
        sequenceRegulator().then(function (){
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["removeAllElements"])('.task');
                _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasksData();
                resetTaskListView();
                Object(_components_notifications__WEBPACK_IMPORTED_MODULE_1__["notificationCreator"])('info','Task was added to selected list.')
        })
    }
    if(targetElement.closest('.items-tabs-header__item')) {
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["resetModifiers"])('.items-tabs-header__item', 'items-tabs-header__item_active');
        targetElement.closest('.items-tabs-header__item').classList.add('items-tabs-header__item_active');
        header_tabs__Clickedtab = document.querySelector('.items-tabs-header__item_active').id;
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["removeAllElements"])('.main__task')
        if(header_tabs__Clickedtab === 'Done') {
            _components_taskView__WEBPACK_IMPORTED_MODULE_4__["default"].createMainTask(_components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].sortedTasks.doneArray)
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('global-list', 'hide')
            document.querySelectorAll('.main__task').forEach(task => {
            task.classList.add('task_done')
            })
        }
        if(header_tabs__Clickedtab === 'ToDo') {
            _components_taskView__WEBPACK_IMPORTED_MODULE_4__["default"].createMainTask(_components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].sortedTasks.fiveSelectedArrayToDo)
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('global-list','hide')
            if(document.querySelector('.task_done')) {
                document.querySelectorAll('.main__task').forEach(task => {
                task.classList.remove('task_done')
            })
            }
        }
    }
    if(targetElement.closest('.top-modal-header__accept-icon')) {
        if(Object(_components_validation__WEBPACK_IMPORTED_MODULE_2__["formValidation"])()) {
            if(document.querySelector('.modal').classList.contains('modal-add')) {
            async function sequenceRegulator() {
                _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].sendTaskListData();
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('modal','modal-edit')
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('modal','modal-delete')
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('modal','modal-add')
            }
            sequenceRegulator().then(function (){
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["removeAllElements"])('.task');
                _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasksData();
                resetTaskListView();
                document.querySelector('.tabs-header').classList.remove('hide');
                document.querySelector('.global-list').classList.remove('hide');
                document.querySelector('.main__tasks').classList.remove('hide');
                document.querySelector('.add-task-main').classList.add('hide');
                Object(_components_notifications__WEBPACK_IMPORTED_MODULE_1__["notificationCreator"])('success','Task was successfully created.')
            })
        }
        if(document.querySelector('.modal').classList.contains('modal-edit')) {
            async function sequenceRegulator() {
                _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].editTask(currentId)
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('modal','modal-edit')
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('modal','modal-delete')
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('modal','modal-add')
            }
            sequenceRegulator().then(function (){
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["removeAllElements"])('.task');
                _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasksData();
                resetTaskListView();
                Object(_components_notifications__WEBPACK_IMPORTED_MODULE_1__["notificationCreator"])('success','Task was successfully edited.');
            })
        }
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('modal','hide');
        cleanInputs();
        } else {
            Object(_components_validation__WEBPACK_IMPORTED_MODULE_2__["formValidation"])()
        }
    }
    if(targetElement.closest('.top-modal-header__decline-icon') || targetElement.closest('.delete-modal-body__cancel-button')) {
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('body-modal__sections','hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('top-modal-header__accept-icon','hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('body-modal__detele','hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('modal','modal-edit');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('modal','modal-delete');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('modal','modal-add');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('modal','hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('tabs-header','hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('global-list','hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('main__tasks','hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('add-task-main','hide');
        currentId = '';
        cleanInputs();
    }
    if(targetElement.closest('.delete-modal-body__remove-button')) {
            async function sequenceRegulator() {
                _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTask(currentId);
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('modal','modal-edit')
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('modal','modal-delete')
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('modal','modal-add')
            }
            sequenceRegulator().then(function (){
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["removeAllElements"])('.task');
                _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasksData();
                resetTaskListView();
                Object(_components_notifications__WEBPACK_IMPORTED_MODULE_1__["notificationCreator"])('info','Task was removed.')
            })
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('modal','hide');
    }
    if(targetElement.closest('.top-global-list__tab')) {
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["resetModifiers"])('.top-global-list__tab','top-global-list__tab_active')
        targetElement.closest('.top-global-list__tab').classList.add('top-global-list__tab_active');
        top_global_list__Clickedtab = document.querySelector('.top-global-list__tab_active').id;
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["removeAllElements"])('.section__task');
        document.querySelectorAll('.global-list__section').forEach(section => {
            if(section.childElementCount < 2) {
                section.classList.add('hide')
            }
        })
        
        if(top_global_list__Clickedtab === 'all') {
            _components_taskView__WEBPACK_IMPORTED_MODULE_4__["default"].createGlobalListTask(_components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].sortedTasks.allArray)
        }
        if(top_global_list__Clickedtab === 'urgent') {
            _components_taskView__WEBPACK_IMPORTED_MODULE_4__["default"].createGlobalListTask(_components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].sortedTasks.urgentArray)
        }
        if(top_global_list__Clickedtab === 'high') {
            _components_taskView__WEBPACK_IMPORTED_MODULE_4__["default"].createGlobalListTask(_components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].sortedTasks.highArray)
        }
        if(top_global_list__Clickedtab === 'middle') {
            _components_taskView__WEBPACK_IMPORTED_MODULE_4__["default"].createGlobalListTask(_components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].sortedTasks.middleArray)
        }
        if(top_global_list__Clickedtab === 'low') {
            _components_taskView__WEBPACK_IMPORTED_MODULE_4__["default"].createGlobalListTask(_components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].sortedTasks.lowArray)
        }
    }
    if(targetElement.closest('.estimation-task__pomodoro')) {
        if(targetElement.closest('.estimation-task__pomodoro').closest('.task').classList.contains('task_done')) {
            return
        }
        if(targetElement.closest('.estimation-task__pomodoro').closest('.task').classList.contains('task_deleted')) {
            async function sequenceRegulator() {
            currentId = targetElement.closest('.estimation-task__pomodoro').closest('.task').id;
            _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTaskPermanently(currentId);
            }
            sequenceRegulator().then(function (){
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["removeAllElements"])('.task');
                _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasksData();
                resetTaskListView();
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('global-list','hide');
                Object(_components_notifications__WEBPACK_IMPORTED_MODULE_1__["notificationCreator"])('info','Task was removed permanently.')
                return
            })
        } else {
        async function sequenceRegulator() {
            currentId = targetElement.closest('.estimation-task__pomodoro').closest('.task').id;
            _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].sendCurrentId(currentId);
        }
        sequenceRegulator().then(function (){
            return location.href = 'timer.html';
        })
        }
    }
    if(targetElement.closest('.notification-message__close-icon')) {
        document.querySelector('.notification-message').remove();
    }
    if(targetElement.closest('.delete-menu-top-header')){
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["resetModifiers"])('.items-tabs-header__item','items-tabs-header__item_active');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["removeAllElements"])('.main__task')
        _components_taskView__WEBPACK_IMPORTED_MODULE_4__["default"].createMainTask(_components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].sortedTasks.deletedArray)
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('global-list', 'hide')
        document.querySelectorAll('.main__task').forEach(task => {
            task.classList.add('task_deleted')
        })
    }
    if (targetElement.closest('.edit-block__restore')) {
        currentId = targetElement.closest('.edit-block__restore').closest('.task').id;
        async function sequenceRegulator() {
                _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].restoreTask(currentId);
            }
            sequenceRegulator().then(function (){
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["removeAllElements"])('.task');
                _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasksData();
                resetTaskListView();
                Object(_components_notifications__WEBPACK_IMPORTED_MODULE_1__["notificationCreator"])('info','Task was restored.')
            })
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["deleteDomClass"])('global-list', 'hide');
        Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('items-tabs-header__item', 'items-tabs-header__item_active');
    }
}
function taskListPage() {
    _components_controller__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasksData();
    document.addEventListener('click', taskListActions);
    const taskListObserver = new ResizeObserver( entries => {
    const boxElement = entries[0];
    const isDesktop = boxElement.contentRect.width >= 1025;
    const isTablet = boxElement.contentRect.width < 1025;

    if(isTablet) {
        
        if(!document.querySelector('.top-header__daily-task-list') && 
        document.querySelector('.top-header__fixed-header-icon').classList.contains('hide')){
        let topHeader__dailyTaskList = document.createElement('div');
        topHeader__dailyTaskList.className = 'top-header__daily-task-list';
        topHeader__dailyTaskList.innerHTML = dailyTaskList.innerHTML;
        topHeaderContainer.prepend(topHeader__dailyTaskList);
        } 
    } else if(isDesktop){
            if(document.querySelector('.top-header__daily-task-list')) {
                document.querySelector('.top-header__daily-task-list').remove();
            }
    }
    })
    taskListObserver.observe(document.querySelector('#task-list'));
    window.addEventListener('scroll', () => { 
        const body = document.querySelector('body');
        const scrollTop = window.scrollY;
        const header_top = document.querySelector('.top-header');
        const header_topHeight = header_top.clientHeight;
        if(scrollTop > 20) {
            header_top.classList.add('top-header_fixed');
            if(document.querySelector('.main__add-task').classList.contains('hide')) {
                header_top.classList.add('top-header_shadow');
            }

            body.style.paddingTop = `${header_topHeight}px`;

            if(dailyTaskList) {
            dailyTaskList.classList.add('hide');
            }
            if(document.querySelector('.top-header__daily-task-list')) {
                document.querySelector('.top-header__daily-task-list').classList.add('hide');
            }


            if(document.querySelector('.top-header__fixed-header-icon')){
                document.querySelector('.top-header__fixed-header-icon').classList.remove('hide');
                topHeaderContainer.classList.remove('top-header__container_flex-end');
                topHeaderContainer.classList.add('top-header__container_space-beetween');
            }

            if(!document.querySelector('.menu-top-header__add-button')) {
            const topHeaderMenu_addButton = document.createElement('div');
            topHeaderMenu_addButton.className = 'menu-top-header__add-button';
            topHeaderMenu_addButton.innerHTML = document.querySelector('.daily-task-list__add-icon').outerHTML;
            topHeader_menu.prepend(topHeaderMenu_addButton);
            
            document.querySelector('.daily-task-list__add-icon').addEventListener('click', (e) => {
            Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addFirstTask"])();
            header_top.classList.remove('top-header_fixed');
            document.querySelector('.top-header__fixed-header-icon').classList.add('hide');
            e.preventDefault();
            })
            
            
            }
        } else {
            header_top.classList.remove('top-header_fixed');
            header_top.classList.remove('top-header_shadow');
            body.style.paddingTop = `0px`;

            dailyTaskList.classList.remove('hide');
            if(document.querySelector('.top-header__daily-task-list')) {
                document.querySelector('.top-header__daily-task-list').classList.remove('hide');
            }

            if(document.querySelector('.top-header__fixed-header-icon')){
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_0__["addDomClass"])('top-header__fixed-header-icon','hide');
                topHeaderContainer.classList.add('top-header__container_flex-end');
                topHeaderContainer.classList.remove('top-header__container_space-beetween');
            }


            if(document.querySelector('.menu-top-header__add-button')) {
                document.querySelector('.menu-top-header__add-button').remove();
            }
        }
})
}



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formValidation", function() { return formValidation; });
/* harmony import */ var _components_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


function validateInputLength(selector, minLength, maxLength) {
    let input = document.querySelector(`${selector}`);
    if(input.value.length >= +minLength && input.value.length <= +maxLength) {
        return true
    }
    return false;
}
function isAtLeastOneRadioButtonChecked(selector) {
    let state = false;
    document.querySelectorAll(`${selector}`).forEach(input => {
        if(input.checked === true) {
            state = true;
        }
    })
    return state;
}
function isTitleValid() {
    return validateInputLength('#task-title-input',3,25);
}
function isDescriptionValid() {
    return validateInputLength('#task-description-input',4,50);
}
function isCategoryValid() {
    return isAtLeastOneRadioButtonChecked('.modal-category-input');
}
function isPriorityValid() {
    return isAtLeastOneRadioButtonChecked('.modal-priority-input');
}
function formValidation() {
    if(!isTitleValid()) {
        Object(_components_notifications__WEBPACK_IMPORTED_MODULE_0__["notificationCreator"])('warning','Title must contain from 3 to 25 characters')
        return false
    }
    if(!isDescriptionValid()) {
        Object(_components_notifications__WEBPACK_IMPORTED_MODULE_0__["notificationCreator"])('warning','Description must contain from 5 to 50 characters')
        return false
    }
    if(!isCategoryValid()) {
        Object(_components_notifications__WEBPACK_IMPORTED_MODULE_0__["notificationCreator"])('warning','Choose task category')
        return false
    }
    if(!isPriorityValid()) {
        Object(_components_notifications__WEBPACK_IMPORTED_MODULE_0__["notificationCreator"])('warning','Choose task priority')
        return false
    }
    return true;
}



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerPage", function() { return timerPage; });
/* harmony import */ var _components_notifications_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _components_common_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _components_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);





let breakTime;
let time;
let iteration;
let stop = false;
let forcedStop = false;
let shortBreak = false;

function finishTimer() {
    document.querySelector('#timer-minutes').classList.add('hide');
    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_1__["addDomClass"])('timer-main__number','hide');
    document.querySelector('#buttons-timer__fail-pomodora').classList.add('hide');
    document.querySelector('#buttons-timer__finish-pomodora').classList.add('hide');
    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_1__["deleteDomClass"])('timer-main__completed','hide');
    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_1__["addDomClass"])('timer-main__circle-inner','timer-main__circle-inner_one-number');
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
                    _components_controller__WEBPACK_IMPORTED_MODULE_2__["default"].determineTaskStatus('Failed');
                }
                Object(_components_notifications_js__WEBPACK_IMPORTED_MODULE_0__["notificationCreator"])('info', 'Oops, time is up!');
                clearInterval(timer); // stop timer
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_1__["addDomClass"])('timer-main__break', 'hide')
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
                    Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_1__["deleteDomClass"])('timer-main__break', 'hide')
                    Object(_components_notifications_js__WEBPACK_IMPORTED_MODULE_0__["notificationCreator"])('info','It is time to take a break');
                }
            }
            if(workTime <= 0 && iteration > 0 && shortBreak === true) {
                shortBreak = false;
                workTime = time + 1;
                Object(_components_common_functions__WEBPACK_IMPORTED_MODULE_1__["addDomClass"])('timer-main__break', 'hide');
                timerDesignRegulator();
                Object(_components_notifications_js__WEBPACK_IMPORTED_MODULE_0__["notificationCreator"])('info','Break is over. Let`s keep working');
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
        _components_controller__WEBPACK_IMPORTED_MODULE_2__["default"].determineTaskStatus('Done');
        finishTimer();
        Object(_components_notifications_js__WEBPACK_IMPORTED_MODULE_0__["notificationCreator"])('success', 'Congratulations! Task is performed.');
        forcedStop = true;
        e.preventDefault();
    }
    if(targetElement.closest('#buttons-timer__fail-pomodora')) {
        _components_controller__WEBPACK_IMPORTED_MODULE_2__["default"].determineTaskStatus('Failed');
        finishTimer();
        Object(_components_notifications_js__WEBPACK_IMPORTED_MODULE_0__["notificationCreator"])('error', 'Task is failed. Good luck next time!');
        forcedStop = true;
        e.preventDefault();
    }
    if(targetElement.closest('.notification-message__close-icon')) {
        document.querySelector('.notification-message').remove();
    }
}
function timerPage() {
    _components_controller__WEBPACK_IMPORTED_MODULE_2__["default"].loadCurrentId().then((currentId) => {
        _components_controller__WEBPACK_IMPORTED_MODULE_2__["default"].loadTaskById(currentId).then((task) => {
            document.querySelector('#timer-minutes').classList.remove('hide');
            document.querySelector('.daily-task-list__subtitle').innerText = task.title;
    })
    })
    _components_controller__WEBPACK_IMPORTED_MODULE_2__["default"].settingsLoadRegulator().then(function(responseObj){
        time = +responseObj.workTime;
        iteration = +responseObj.workIteration;
        breakTime = +responseObj.shortBreak;
        document.querySelector('.timer-main__number').innerText = time;
        pomodoroCreator(iteration);
    })
    document.addEventListener('click', timerActions);
}



/***/ })
/******/ ]);