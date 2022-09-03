import { Block } from './block.js';
export class Header extends Block {
    constructor(attributes) {
        super('header', 'HEADER', attributes);
    }
}
