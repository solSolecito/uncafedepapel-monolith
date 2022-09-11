import { Block } from '../base/block.js';
export class ParagraphBlock extends Block {
    constructor(content, atts = {}) {
        super('div', content.map((p) => new Block('p', p)), atts);
    }
}
