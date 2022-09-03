// El router cambia el contenido de la vista según la URL

import { HomePage } from '../app/pages/homePage.js';
import { builder } from '../app/utils/builder.js';

export class Router { 
    constructor(){}

    load(user:boolean):void{
        // El router carga la página completa
        // const user = firebase.auth().currentUser;
        const url = window.location.hash;
        const container = document.getElementById('root');
        console.log(container);
        let content;
        if(user){
            switch(url){
                case '#/':
                    const page = new HomePage('a', new Map(), 'b');
                    content = [page.getBlueprints()];
                    break;
                default:
                    window.location.assign('#/');
                return;
            }
        } else {
            switch(url){
                case '#/':
                    const page = new HomePage('a', new Map(), 'b');
                    content = [page.getBlueprints()];
                    break;
                default:
                    window.location.assign('#/');
                return;
            }
        }
        container ? builder(content, container) : console.log('No se encontró donde renderizar');
    }
}

/*export const init = () => {
    const url = window.location.hash;
    const user = firebase.auth().currentUser;
    
  
    if (user) {
      // console.log('Has iniciado sesion');
      switch (url) {
        case '#/timeline':
          container.appendChild(renderTimeline());
          afterRenderTimeline();
          break;
        case '#/register':
          container.appendChild(renderRegister());
          afterRenderRegister();
          break;
        case '#/settings':
          container.appendChild(renderSettings());
          afterRenderSettings();
          break;
        case '#/profile':
          getUser().then((snapshot) => {
            snapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              const dataUser = doc.data();
              container.appendChild(renderProfile(dataUser));
              afterRenderProfile();
            });
          });
          break;
        default:
          window.location.assign('#/timeline');
          break;
      }
    } else {
      // console.log('No has iniciado sesion');
      switch (url) {
        case '#/login':
          container.appendChild(renderLogin());
          afterRenderLogin();
          break;
        case '#/recoverPassword':
          container.appendChild(renderRecover());
          afterRenderRecover();
          break;
        default:
          window.location.assign('#/login');
          break;
      }
    }
  };
const router = () => {
    const url = window.location;
}*/