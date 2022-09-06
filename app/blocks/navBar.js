import { Block } from './block.js';
class NavListItem extends Block {
    constructor(href, text, id, className = '') {
        super('li', [], { class: 'nav-btn', id });
        this.setContent([new Block('a', text, { href })]);
        this.addClass(className);
    }
}
export class NavBar extends Block {
    //Una navbar de toda la vida
    constructor(toolList) {
        super('nav', [], { class: 'nav-bar' });
        //Estos botones tienen hipervinculos
        const content = toolList.map((tool) => {
            return new NavListItem(tool.href, tool.name, tool.id, tool.class);
        });
        this.setContent([new Block('ul', content, {})]);
    }
}
