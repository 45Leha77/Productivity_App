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
export default {
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
}