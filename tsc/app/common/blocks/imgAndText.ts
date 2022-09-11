import { imgInterface } from '../interfaces/imgInterface.js';
import { ImgBlock } from './imgBlock.js';
import { Block } from '../base/block.js';
import { ParagraphBlock } from './paragraphBlock.js';

export class ImgAndTextBlock extends Block {
    constructor(img:imgInterface, text:string[], inverted:boolean = false){
        super('div', [], {class: 'img-and-text'})
        const content = [
            new ImgBlock(img.src, img.altText),
            new ParagraphBlock(text)
        ];
        if(inverted){
            content.reverse();
        }
        this.setContent(content);
    }
}
