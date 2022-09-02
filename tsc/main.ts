import { App } from './app/app.js';

const app = new App();

document.addEventListener('DOMContentLoaded', app.run);
window.addEventListener('hashchange', app.reload);