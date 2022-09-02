import { Router } from '../api/router.js';
export class App {
    constructor() {
        this.router = new Router();
    }
    run() {
        this.router.load(false);
    }
    reload() {
        this.router.load(false);
    }
}
