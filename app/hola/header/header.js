import { Block } from '../../common/base/block.js';
import { NavBar } from '../../common/blocks/navBar.js';
import { MainTitleBlock } from '../../common/blocks/titleBlock.js';
import { ToolBar } from '../../common/blocks/toolBar.js';
export class Header extends Block {
    constructor(title, src, altText, toolList, navList, attributes) {
        super('header', [], attributes);
        const content = [
            new MainTitleBlock(title, src, altText),
            new Block('div', [
                new ToolBar(toolList),
                new NavBar(navList)
            ])
        ];
        this.setContent(content);
    }
}
