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

export {addFirstTask, openGlobalList, minutesToHours, deleteDomClass, 
    hoverText, addDomClass, resetModifiers, removeAllElements, findCheckedRadioButton, 
    getInputValue, clearArrays, unCheckAllRadioButtons };