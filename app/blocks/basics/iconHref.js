import { Block } from '../block.js';
export class IconHref extends Block {
    constructor(src, href, altText) {
        super('p', [], {});
        const content = [
            new Block('img', '', { src: src }),
        ];
    }
}
