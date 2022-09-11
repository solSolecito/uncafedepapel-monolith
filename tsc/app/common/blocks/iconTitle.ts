import { imgInterface } from '../interfaces/imgInterface.js';
import { Block } from '../base/block.js';
import { ImgBlock } from './imgBlock';

export class IconTitle extends Block {
    constructor(icon:imgInterface, title:string){
        super('h2', [
            new ImgBlock(icon.src, icon.altText),
            new Block('span', title)
        ])
    }
}