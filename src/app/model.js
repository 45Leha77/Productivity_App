import { notificationCreator } from "./components/notifications";

export default {
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
                notificationCreator('error', `No connection with server. There is an error in URL ${url}`);
            }
        };
        xhr.onerror = function () {
            notificationCreator('error', 'Error! No connection with server.');
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
}