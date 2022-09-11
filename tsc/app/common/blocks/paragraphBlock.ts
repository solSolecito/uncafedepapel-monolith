import { Block } from '../base/block.js';

export class ParagraphBlock extends Block{
    constructor(content:string[], atts:object = {}){
        super('div', content.map((p:string)=> new Block('p', p)), atts);
    }
}
