import { addDomClass, deleteDomClass } from '../../components/common-functions';

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
export {startPage}

export default {
    home() {
        deleteDomClass('start-page__image', 'hide');
        deleteDomClass('start-page__text', 'hide');
        addDomClass('instruction-block', 'hide');
        deleteDomClass('start-page__instruction-button', 'hide');
    },
    presentation() {
        addDomClass('start-page__image', 'hide');
        addDomClass('start-page__text', 'hide');
        deleteDomClass('instruction-block', 'hide');
        addDomClass('start-page__instruction-button', 'hide');
    }
}
