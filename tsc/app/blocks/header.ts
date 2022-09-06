import { Block } from './block.js';
import { MainTitleBlock } from './titleBlock.js';

export class Header extends Block {
    constructor(title:string, src:string, altText:string,
        attributes: Map<string,string>
    ){
        super('header', [], attributes);
        const content = [
            new MainTitleBlock(title, src, altText),
            
        ]
        this.setContent(content)
    }
}
