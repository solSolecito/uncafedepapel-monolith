import { Modal } from '../../common/base/modal.js';
export const header = {
    title: 'Un Taller de Papel',
    img: {
        src: 'app/assets/logoTaller_cl_120.png',
        altText: 'Logotipo Un Taller de Papel'
    },
    toolList: [
        {
            name: 'Ayuda',
            id: 'tool-help',
            src: 'app/assets/icons/24/picture.png',
            class: 'tool',
            onclick: () => Modal.open('help'),
        },
        {
            name: 'Configuración',
            id: 'icon-settings',
            src: 'app/assets/icons/24/settings.png',
            class: 'tool',
            onclick: () => Modal.open('accesibility'),
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
};
export const home = {
    welcome: {
        title: 'Construimos un mundo en papel',
        img: {
            src: 'app/assets/logoTaller_cl_120.png',
            altText: 'Logotipo Un Taller de Papel'
        },
        text: ['Esto es un parrafo pero ni idea de que escribirle']
    },
    news: {
        icon: {
            src: 'app/assets/logoTaller_cl_120.png',
            altText: 'Logotipo Un Taller de Papel'
        }
    },
};
export const footer = {};
