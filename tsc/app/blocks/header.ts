import { attribute, Block, blockStructure } from './block.js';

export class Header extends Block {
    constructor(
        attributes:attribute[]
    ){
        super('header', 'HEADER', attributes);

    }
    afterRender():void{
    };
}