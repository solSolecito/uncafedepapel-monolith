import { Modal } from './modal.js';

export const headerConstants = {
    titleTaller: 'Un Taller de Papel',
    titleCafe: 'Un Café de Papel',
    img: {
        src: 'app/assets/logoTaller_cl_120.png',
        altText: 'Logotipo Un Taller de Papel'
    },
    toolList: [
        {
            name:'Ayuda',
            id:'tool-help',
            src:'app/assets/icons/help.png',
            class:'tool',
            onclick: () => Modal.open('help'),
        },
        {
            name:'Accesibilidad',
            id:'icon-aria',
            src:'app/assets/icons/aria.png',
            class:'tool',
            onclick:() => Modal.open('accesibility'),
        },
    ],
    navItemList: [
        {
            name: 'Inicio',
            id: 'nav-home',
            href: '#/',
            class: 'nav',
        }
    ]
}

export const welcomeConstants = {
    title: 'Construimos un mundo de papel',
    img: {
        src: 'app/assets/logoTaller_cl_120.png',
        altText: 'Logotipo Un Taller de Papel'
    },
    text: [
        'p1',
        'p2'
    ]
}

export const announcementsConstants = {
    icon: {
        src: 'app/assets/logoTaller_cl_120.png',
        altText: 'Logotipo Un Taller de Papel'
    }
}