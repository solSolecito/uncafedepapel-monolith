import { attribute, Block } from '../blocks/block.js';

export abstract class Page extends Block {
    constructor(
        name: string,
        content: Block[],
        attributes: Map<string,string>,
        private title: string
    ){
        super( name, content, attributes );
    }
    
} 