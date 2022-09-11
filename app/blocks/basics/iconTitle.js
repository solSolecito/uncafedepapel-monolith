import { Block } from '../block.js';
import { ImgBlock } from './imgBlock.js';
export class IconTitle extends Block {
    constructor(icon, title) {
        super('h2', [
            new ImgBlock(icon.src, icon.altText),
            new Block('span', title)
        ]);
    }
}
