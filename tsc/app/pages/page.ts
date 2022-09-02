import { attribute, Block } from '../blocks/block.js';

export abstract class Page extends Block {
    constructor(
        name: string,
        content: Block[],
        attributes: attribute[],
        private title: string
    ){
        super( name, content, attributes );
    }
    
} 