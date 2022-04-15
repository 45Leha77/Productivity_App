import Controller from "./StartPageController";

function  getRouteInfo() {
    const hash = location.hash ? location.hash.slice(1) : 'home';
    return hash;
}

function handleHash() {
    const hash = getRouteInfo();
    return Controller[hash]();
}

export default {
    init() {
        window.addEventListener('hashchange', function() {
          handleHash()
        })
        handleHash()
    }
}