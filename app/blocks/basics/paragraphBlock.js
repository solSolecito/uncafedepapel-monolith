import { Block } from '../block.js';
export class ParagraphBlock extends Block {
    constructor(content) {
        super('div', content.map((p) => new Block('p', p)));
    }
}
