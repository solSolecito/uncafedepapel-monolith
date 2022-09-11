import { Block } from '../../common/base/block.js';
import { NavBar } from '../../common/blocks/navBar.js';
import { MainTitleBlock } from '../../common/blocks/titleBlock.js';
import { ToolBar } from '../../common/blocks/toolBar.js';
import { toolInterface } from '../../common/interfaces/toolInterface.js';
import { navItemInterface } from '../../common/interfaces/navItemInterface.js'

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
            ])
            
        ]
        this.setContent(content)
    }
}
