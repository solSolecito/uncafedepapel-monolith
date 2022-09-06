import { Router } from '../api/router.js';

export class App {
    private static instance: App;
    private router:Router;

    constructor(){
        this.router = new Router();
    }

    static getInstance():App{
        if(!App.instance){
            App.instance = new App();
        }
      return App.instance
    }

    run():void{
        this.router.load(false);
    }
    
    reload():void{
        this.router.load(false);
    }
}
