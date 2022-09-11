import { Block } from '../base/block.js';
import { ImgAndTextBlock } from './imgAndText.js';
import { imgInterface } from '../interfaces/imgInterface';

export class ImgAndTextPost extends Block {
    constructor(title:string, img:imgInterface, text:string[]){
        super('div', [])
        const content = [
            new Block('h2', title),
            new ImgAndTextBlock(img,text)
        ];

        this.setContent(content);
    }
}
