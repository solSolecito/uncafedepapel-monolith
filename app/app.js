import { Router } from '../api/router.js';
export class App {
    constructor() {
        this.router = new Router();
    }
    static getInstance() {
        if (!App.instance) {
            App.instance = new App();
        }
        return App.instance;
    }
    run() {
        this.router.load(false);
    }
    reload() {
        this.router.load(false);
    }
}
