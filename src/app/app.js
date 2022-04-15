/* eslint-disable max-len */
/* root component starts here */
require('assets/less/main.less'); // include general styles

require('./router'); // include router

/* example of including header component */
require('./components/header/header');

import { startPage } from './pages/Start-page/start-page'
import { settingsPage } from './pages/settings/settings';
import { reportsPage } from './pages/reports/reports';
import { taskListPage } from './pages/tasks-list/tasks-list';
import { timerPage } from './pages/timer/timer';

import Router from './router'

if(location.pathname === '/') {
    startPage()
    Router.init();
}
if(location.pathname === '/static/task-list.html') {
    taskListPage();
}
if(location.pathname === '/static/settings.html') {
    settingsPage()
}
if(location.pathname === '/static/report.html') {
    reportsPage()
}
if(location.pathname === '/static/timer.html') {
    timerPage()
}
