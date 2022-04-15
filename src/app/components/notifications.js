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

export {notificationCreator};