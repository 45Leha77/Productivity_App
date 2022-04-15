import { notificationCreator } from "../components/notifications";

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
        notificationCreator('warning','Title must contain from 3 to 25 characters')
        return false
    }
    if(!isDescriptionValid()) {
        notificationCreator('warning','Description must contain from 5 to 50 characters')
        return false
    }
    if(!isCategoryValid()) {
        notificationCreator('warning','Choose task category')
        return false
    }
    if(!isPriorityValid()) {
        notificationCreator('warning','Choose task priority')
        return false
    }
    return true;
}

export {formValidation}