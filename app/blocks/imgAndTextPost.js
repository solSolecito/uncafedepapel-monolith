import { Block } from './block.js';
import { ImgAndTextBlock } from './basics/imgAndText.js';
export class ImgAndTextPost extends Block {
    constructor(title, img, text) {
        super('div', []);
        const content = [
            new Block('h2', title),
            new ImgAndTextBlock(img, text)
        ];
        this.setContent(content);
    }
}
