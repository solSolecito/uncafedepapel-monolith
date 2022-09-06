import { Block } from './block.js';
import { ImgBlock } from './imgBlock.js';
export class MainTitleBlock extends Block {
    constructor(title, src, altText) {
        super('div', [], { class: 'main-title' });
        const content = [
            new ImgBlock(src, altText),
            new Block('h1', title, {})
        ];
        this.setContent(content);
    }
}
