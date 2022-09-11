import { Block } from '../block.js';

export class ParagraphBlock extends Block{
    constructor(content:string[]){
        super('div', content.map((p:string)=> new Block('p', p)));
    }
}