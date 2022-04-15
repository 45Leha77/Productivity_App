import { findCheckedRadioButton, getInputValue, clearArrays } from "./common-functions";
import Model from "../model";
import TaskView from "./taskView";

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
export default {
    async reportsLoadRegularot() {
    let result = await Model.sendHttpRequest('GET','http://localhost:3000/tasks').then(responseData => {
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
    let result = await Model.sendHttpRequest('GET','http://localhost:3000/settings').then(responseData => {
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
        let result = await Model.sendHttpRequest('GET', url).then(responseData => {
            return responseData
        })
    return result
    },
    async loadTaskById(currentId) {
        let result = await Model.sendHttpRequest('GET',`http://localhost:3000/tasks/${currentId}`)
        .then (task => {
            return task;
        })
        return result;
    },
    async loadCurrentId() {
    let result = await Model.sendHttpRequest('GET',`http://localhost:3000/current`)
    .then(responseData => {
        return responseData.id;
    })
    return result
    },
    sendSettingsData() {
    Model.sendHttpRequest('POST', 'http://localhost:3000/settings', {
        workTime: document.querySelector('#settings__work-time').innerText,
        workIteration: document.querySelector('#settings__work-iteration').innerText,
        shortBreak: document.querySelector('#settings__short-break').innerText,
        longBreak: document.querySelector('#settings__long-break').innerText
    }).then(responseData => {
        return responseData;
    });
    },
    sendTaskListData() {
        Model.sendHttpRequest('POST', 'http://localhost:3000/tasks', {
            title: getInputValue('task-title-input'),
            description: getInputValue('task-description-input'),
            category: findCheckedRadioButton('.modal-category-input'),
            deadline: getInputValue('task-deadline-input'),
            estimation: 'estimation (unused)',
            priority: findCheckedRadioButton('.modal-priority-input'),
            status: 'ToDo',
            selected: false,
        }).then(responseData => {
            return responseData;
        }
        );
    },
    sendCurrentId(id) {
        Model.sendHttpRequest('POST', 'http://localhost:3000/current', {
            id: id
        }).then(responseData => {
            return responseData;
        }
        );
    },
    determineTaskStatus(status) {
    Model.sendHttpRequest('GET', `http://localhost:3000/current`)
        .then(current => {
            Model.sendHttpRequest('PATCH', `http://localhost:3000/tasks/${current.id}`, {
                selected: false,
                status: status,
                doneDate: new Date()
            }).then(responseData => {
                return responseData;
            });
        });
    },
    deleteTask(id) {
        Model.sendHttpRequest('PATCH',`http://localhost:3000/tasks/${id}`, {
             status: 'Deleted'
        }).then(responseData => {
             return responseData;
        })
    },
    editTask(id) {
    Model.sendHttpRequest('PATCH',`http://localhost:3000/tasks/${id}`, {
            title: getInputValue('task-title-input'),
            description: getInputValue('task-description-input'),
            category: findCheckedRadioButton('.modal-category-input'),
            deadline: getInputValue('task-deadline-input'),
            priority: findCheckedRadioButton('.modal-priority-input')
        }).then(responseData => {
            return responseData;
        }
    )
    },
    selectTask(id) {
    Model.sendHttpRequest('PATCH',`http://localhost:3000/tasks/${id}`, {
            selected: true
        }).then(responseData => {
            return responseData;
        })
    },
    restoreTask(id) {
    Model.sendHttpRequest('PATCH',`http://localhost:3000/tasks/${id}`, {
            status: 'ToDo'
    }).then(responseData => {
            return responseData;
       })
    },
    deleteTaskPermanently(id) {
    Model.sendHttpRequest('DELETE',`http://localhost:3000/tasks/${id}`).then(responseData => {
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
            clearArrays(sortedTasks.fiveSelectedArrayToDo,sortedTasks.allArray,sortedTasks.doneArray,sortedTasks.lowArray,sortedTasks.middleArray,sortedTasks.highArray,sortedTasks.urgentArray,sortedTasks.deletedArray)
            this.mainTasksDistributionInArrays(value);
            TaskView.createMainTask(sortedTasks.fiveSelectedArrayToDo);
            this.globalListTasksDistributionInArrays(value);
            TaskView.createGlobalListTask(sortedTasks.allArray);
            TaskView.setDeletedTasksNumber(sortedTasks.deletedArray.length)
        })
    },
    sortedTasks
}