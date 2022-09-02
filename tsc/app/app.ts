import { Router } from '../api/router.js';

export class App {
    private router:Router;

    constructor(){
        this.router = new Router();
    }

    run():void{
        this.router.load(false);
    }
    reload():void{
        this.router.load(false);
    }
}