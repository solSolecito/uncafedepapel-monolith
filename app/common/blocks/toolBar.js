import { IconButton } from './iconButton.js';
import { Block } from '../base/block.js';
export class ToolBar extends Block {
    constructor(toolList) {
        super('div', new Array(), { class: 'tool-bar' });
        //La tool bar es una barra de herramientas que consiste en botones con iconos. Estos botones abren un modal
        const content = toolList.map((tool) => {
            return new IconButton(tool.src, tool.name, tool.id, tool.class, tool.onclick);
        });
        this.setContent(content);
    }
}
