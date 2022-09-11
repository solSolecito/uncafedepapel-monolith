import { Block } from './block.js';
import { NavBar } from './navBar.js';
import { MainTitleBlock } from './titleBlock.js';
import { ToolBar } from './toolBar.js';
import { toolInterface } from '../interfaces/toolInterface.js';
import { navItemInterface } from '../interfaces/navItemInterface.js'

export class Header extends Block {
    constructor(
        title:string, 
        src:string, 
        altText:string,
        toolList: toolInterface[],
        navList: navItemInterface[],
        attributes: object
    ){
        super('header', [], attributes);
        const content = [
            new MainTitleBlock(title, src, altText),
            new Block('div', [ 
                new ToolBar(toolList),
                new NavBar(navList)
            ], {})
            
        ]
        this.setContent(content)
    }
}
