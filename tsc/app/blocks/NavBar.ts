import { navItemInterface } from '../interfaces/navItemInterface.js';
import { Block } from './block.js';

class NavListItem extends Block {
    constructor(href: string, text: string, id: string, className: string = '') {
        super('li', [], { class: 'nav-btn', id });
        this.setContent([new Block('a', text, { href })]);
        this.addClass(className);
    }
}

export class NavBar extends Block {
    //Una navbar de toda la vida
    constructor(toolList: navItemInterface[]) {
        super('nav', [], { class: 'nav-bar' })
        const content = toolList.map((tool: navItemInterface) => {
            return new NavListItem(tool.href, tool.name, tool.id, tool.class)
        })
        this.setContent([new Block('ul', content, {})]);
    }
}
