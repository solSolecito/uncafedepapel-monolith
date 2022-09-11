import { Block } from './block.js';
import { NavBar } from './navBar.js';
import { MainTitleBlock } from './titleBlock.js';
import { ToolBar } from './toolBar.js';
export class Header extends Block {
    constructor(title, src, altText, toolList, navList, attributes) {
        super('header', [], attributes);
        const content = [
            new MainTitleBlock(title, src, altText),
            new Block('div', [
                new ToolBar(toolList),
                new NavBar(navList)
            ], {})
        ];
        this.setContent(content);
    }
}
