import { App } from './app/app.js';
const app = App.getInstance();
document.addEventListener('DOMContentLoaded', () => {
    let trys = 0;
    do {
        app ? app.run() : trys++;
    } while (!app && trys < 5);
});
window.addEventListener('hashchange', () => {
    let trys = 0;
    do {
        app ? app.reload() : trys++;
    } while (!app && trys < 5);
});
