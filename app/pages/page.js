import { Block } from '../blocks/block.js';
export class Page extends Block {
    constructor(name, content, attributes, title) {
        super(name, content, attributes);
        this.title = title;
    }
    addTitle() {
        document.title = this.title;
    }
}
