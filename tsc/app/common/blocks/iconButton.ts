import { Block } from '../base/block.js';

export class IconButton extends Block {
    constructor(src: string, name: string, id: string, className: string, onclick: () => void) {
        super('button', [], { class: 'icon-btn', id, name }, { [id]: onclick });
        this.setContent([new Block('img', '', { src })]);
        this.addClass(className);
    }
}