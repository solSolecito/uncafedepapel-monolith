import { attribute, Block, blockStructure } from './block.js';

export class Header extends Block {
    constructor(
        attributes: Map<string,string>
    ){
        super('header', 'HEADER', attributes);

    }
}
