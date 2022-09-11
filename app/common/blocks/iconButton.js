import { Block } from '../base/block.js';
export class IconButton extends Block {
    constructor(src, name, id, className, onclick) {
        super('button', [], { class: 'icon-btn', id, name }, { [id]: onclick });
        this.setContent([new Block('img', '', { src })]);
        this.addClass(className);
    }
}
