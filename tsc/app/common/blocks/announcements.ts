import { imgInterface } from '../interfaces/imgInterface.js';
import { IconTitle } from './iconTitle';
import { Block } from '../base/block.js';

interface interfaceScheduledEvent {
    //Nombre
    //Inicio
    //Final
    //Costo
    //Información
    //Flyer
}

interface schedule {
    //Dia
    //Abierto?
    //Hora Apertura
    //Hora Cierre
}

interface promo {
    //Producto
    //Promo
    //Foto
}

interface special {
    //Producto
    //Foto
    //Descripción
    //Precios
}

//Los precios incluyen 

export class Annoucements extends Block {
    constructor(icon: imgInterface, scheduledEventsList: interfaceScheduledEvent[], schedule: schedule[], promos: promo[], specials: special[]) {
        super('div', []);
        const content = [
            new IconTitle(icon, 'Anuncios'),
            //Eventos
            //Horarios
            //Promociones
            //Especial de la semana
        ];

        if (scheduledEventsList.length > 0) {
            new Block('div', [
                new Block('h3', 'Eventos')
            ])
        }

        this.setContent(content);
    }
}

/*class ScheduledEvents extends Block {
    constructor(scheduledEventsList: interfaceScheduledEvent[]) {
        super('div', [])

        let sEvents = scheduledEventsList.length > 0 ? 
        scheduledEventsList.map((sE:interfaceScheduledEvent) => new ScheduledEvent(sE))
        if (scheduledEventsList.length > 0) {
            new Block('div', [
                new Block('h3', 'Eventos')
            ])
        }
        const content = [
            new Block('h3', 'Eventos'),

        ];

        

        this.setContent(content);
    }
}*/