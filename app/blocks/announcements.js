import { IconTitle } from './basics/iconTitle.js';
import { Block } from './block.js';
//Los precios incluyen 
export class Annoucements extends Block {
    constructor(icon, scheduledEventsList, schedule, promos, specials) {
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
            ]);
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
