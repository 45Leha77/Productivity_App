import { addFirstTask, openGlobalList, deleteDomClass, addDomClass, 
        resetModifiers, removeAllElements, unCheckAllRadioButtons } from "../../components/common-functions";
import { notificationCreator } from "../../components/notifications";
import { formValidation } from "../../components/validation";
import Controller from "../../components/controller";
import TaskView from "../../components/taskView";

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
        resetModifiers('.top-global-list__tab','top-global-list__tab_active');
        resetModifiers('.items-tabs-header__item','items-tabs-header__item_active');
        document.querySelector('#ToDo').classList.add('items-tabs-header__item_active');
        document.querySelector('#all').classList.add('top-global-list__tab_active');
}
function cleanInputs() {
    document.querySelector('#task-title-input').value = null;
    document.querySelector('#task-description-input').value = null;
    document.querySelector('#task-deadline-input').value = null;
    unCheckAllRadioButtons('.modal-category-input');
    unCheckAllRadioButtons('.modal-priority-input');
}
function taskListActions(e) {
    const targetElement = e.target;
    if(!document.querySelector('.modal').classList.contains('hide') && !targetElement.closest('.modal')) {
        addDomClass('modal','hide');
        deleteDomClass('tabs-header','hide');
        deleteDomClass('global-list','hide');
        deleteDomClass('main__tasks','hide');
        addDomClass('add-task-main','hide');
    }
    if(targetElement.closest('.daily-task-list__add-icon')) {
    addFirstTask()
    addDomClass('delete-modal-body','hide')
    e.preventDefault();
    }
    if(targetElement.closest('.top-global-list__header')) {
    openGlobalList();
    e.preventDefault();
    }
    if(targetElement.closest('.edit-block__edit')) {
        document.querySelector('.modal').classList.toggle('hide');
        document.querySelector('.body-modal-header__title').textContent = 'Edit Task';
        document.querySelector('.modal').classList.add('modal-edit');
        currentId = targetElement.closest('.edit-block__edit').closest('.task').id;
        Controller.taskListLoadRegulator(`http://localhost:3000/tasks/${currentId}`).then(function(value){
            document.querySelector('#task-title-input').value = value.title;
            document.querySelector('#task-description-input').value = value.description;
            document.querySelector(`#${value.category}`).checked = true;
            document.querySelector('#task-deadline-input').value = value.deadline;
            document.querySelector(`.section__item>#${value.priority}`).checked = true;
        })
    }
    if(targetElement.closest('.add-task-main__icon') || targetElement.closest('.add-task-main__text')) {
        deleteDomClass('body-modal__sections','hide');
        deleteDomClass('top-modal-header__accept-icon', 'hide');
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
        if(Controller.sortedTasks.fiveSelectedArrayToDo.length >= 5) {
            notificationCreator('error','Error! It can be only 5 selected tasks.')
            return
        }
        currentId = targetElement.closest('.edit-block__select').closest('.task').id;
        Controller.sortedTasks.fiveSelectedArrayToDo.forEach(task => {
            if(+task.id === +currentId) {
                    notificationCreator('error','Error! This task is already selected.')
                    return
            }
        })
        async function sequenceRegulator() {
            Controller.selectTask(currentId);
        }
        sequenceRegulator().then(function (){
                removeAllElements('.task');
                Controller.updateTasksData();
                resetTaskListView();
                notificationCreator('info','Task was added to selected list.')
        })
    }
    if(targetElement.closest('.items-tabs-header__item')) {
        resetModifiers('.items-tabs-header__item', 'items-tabs-header__item_active');
        targetElement.closest('.items-tabs-header__item').classList.add('items-tabs-header__item_active');
        header_tabs__Clickedtab = document.querySelector('.items-tabs-header__item_active').id;
        removeAllElements('.main__task')
        if(header_tabs__Clickedtab === 'Done') {
            TaskView.createMainTask(Controller.sortedTasks.doneArray)
            addDomClass('global-list', 'hide')
            document.querySelectorAll('.main__task').forEach(task => {
            task.classList.add('task_done')
            })
        }
        if(header_tabs__Clickedtab === 'ToDo') {
            TaskView.createMainTask(Controller.sortedTasks.fiveSelectedArrayToDo)
            deleteDomClass('global-list','hide')
            if(document.querySelector('.task_done')) {
                document.querySelectorAll('.main__task').forEach(task => {
                task.classList.remove('task_done')
            })
            }
        }
    }
    if(targetElement.closest('.top-modal-header__accept-icon')) {
        if(formValidation()) {
            if(document.querySelector('.modal').classList.contains('modal-add')) {
            async function sequenceRegulator() {
                Controller.sendTaskListData();
                deleteDomClass('modal','modal-edit')
                deleteDomClass('modal','modal-delete')
                deleteDomClass('modal','modal-add')
            }
            sequenceRegulator().then(function (){
                removeAllElements('.task');
                Controller.updateTasksData();
                resetTaskListView();
                document.querySelector('.tabs-header').classList.remove('hide');
                document.querySelector('.global-list').classList.remove('hide');
                document.querySelector('.main__tasks').classList.remove('hide');
                document.querySelector('.add-task-main').classList.add('hide');
                notificationCreator('success','Task was successfully created.')
            })
        }
        if(document.querySelector('.modal').classList.contains('modal-edit')) {
            async function sequenceRegulator() {
                Controller.editTask(currentId)
                deleteDomClass('modal','modal-edit')
                deleteDomClass('modal','modal-delete')
                deleteDomClass('modal','modal-add')
            }
            sequenceRegulator().then(function (){
                removeAllElements('.task');
                Controller.updateTasksData();
                resetTaskListView();
                notificationCreator('success','Task was successfully edited.');
            })
        }
        addDomClass('modal','hide');
        cleanInputs();
        } else {
            formValidation()
        }
    }
    if(targetElement.closest('.top-modal-header__decline-icon') || targetElement.closest('.delete-modal-body__cancel-button')) {
        deleteDomClass('body-modal__sections','hide');
        deleteDomClass('top-modal-header__accept-icon','hide');
        addDomClass('body-modal__detele','hide');
        deleteDomClass('modal','modal-edit');
        deleteDomClass('modal','modal-delete');
        deleteDomClass('modal','modal-add');
        addDomClass('modal','hide');
        deleteDomClass('tabs-header','hide');
        deleteDomClass('global-list','hide');
        deleteDomClass('main__tasks','hide');
        addDomClass('add-task-main','hide');
        currentId = '';
        cleanInputs();
    }
    if(targetElement.closest('.delete-modal-body__remove-button')) {
            async function sequenceRegulator() {
                Controller.deleteTask(currentId);
                deleteDomClass('modal','modal-edit')
                deleteDomClass('modal','modal-delete')
                deleteDomClass('modal','modal-add')
            }
            sequenceRegulator().then(function (){
                removeAllElements('.task');
                Controller.updateTasksData();
                resetTaskListView();
                notificationCreator('info','Task was removed.')
            })
            addDomClass('modal','hide');
    }
    if(targetElement.closest('.top-global-list__tab')) {
        resetModifiers('.top-global-list__tab','top-global-list__tab_active')
        targetElement.closest('.top-global-list__tab').classList.add('top-global-list__tab_active');
        top_global_list__Clickedtab = document.querySelector('.top-global-list__tab_active').id;
        removeAllElements('.section__task');
        document.querySelectorAll('.global-list__section').forEach(section => {
            if(section.childElementCount < 2) {
                section.classList.add('hide')
            }
        })
        
        if(top_global_list__Clickedtab === 'all') {
            TaskView.createGlobalListTask(Controller.sortedTasks.allArray)
        }
        if(top_global_list__Clickedtab === 'urgent') {
            TaskView.createGlobalListTask(Controller.sortedTasks.urgentArray)
        }
        if(top_global_list__Clickedtab === 'high') {
            TaskView.createGlobalListTask(Controller.sortedTasks.highArray)
        }
        if(top_global_list__Clickedtab === 'middle') {
            TaskView.createGlobalListTask(Controller.sortedTasks.middleArray)
        }
        if(top_global_list__Clickedtab === 'low') {
            TaskView.createGlobalListTask(Controller.sortedTasks.lowArray)
        }
    }
    if(targetElement.closest('.estimation-task__pomodoro')) {
        if(targetElement.closest('.estimation-task__pomodoro').closest('.task').classList.contains('task_done')) {
            return
        }
        if(targetElement.closest('.estimation-task__pomodoro').closest('.task').classList.contains('task_deleted')) {
            async function sequenceRegulator() {
            currentId = targetElement.closest('.estimation-task__pomodoro').closest('.task').id;
            Controller.deleteTaskPermanently(currentId);
            }
            sequenceRegulator().then(function (){
                removeAllElements('.task');
                Controller.updateTasksData();
                resetTaskListView();
                deleteDomClass('global-list','hide');
                notificationCreator('info','Task was removed permanently.')
                return
            })
        } else {
        async function sequenceRegulator() {
            currentId = targetElement.closest('.estimation-task__pomodoro').closest('.task').id;
            Controller.sendCurrentId(currentId);
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
        resetModifiers('.items-tabs-header__item','items-tabs-header__item_active');
        removeAllElements('.main__task')
        TaskView.createMainTask(Controller.sortedTasks.deletedArray)
        addDomClass('global-list', 'hide')
        document.querySelectorAll('.main__task').forEach(task => {
            task.classList.add('task_deleted')
        })
    }
    if (targetElement.closest('.edit-block__restore')) {
        currentId = targetElement.closest('.edit-block__restore').closest('.task').id;
        async function sequenceRegulator() {
                Controller.restoreTask(currentId);
            }
            sequenceRegulator().then(function (){
                removeAllElements('.task');
                Controller.updateTasksData();
                resetTaskListView();
                notificationCreator('info','Task was restored.')
            })
        deleteDomClass('global-list', 'hide');
        addDomClass('items-tabs-header__item', 'items-tabs-header__item_active');
    }
}
function taskListPage() {
    Controller.updateTasksData();
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
            addFirstTask();
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
                addDomClass('top-header__fixed-header-icon','hide');
                topHeaderContainer.classList.add('top-header__container_flex-end');
                topHeaderContainer.classList.remove('top-header__container_space-beetween');
            }


            if(document.querySelector('.menu-top-header__add-button')) {
                document.querySelector('.menu-top-header__add-button').remove();
            }
        }
})
}

export {taskListPage}