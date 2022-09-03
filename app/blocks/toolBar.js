import { Block } from './block.js';
class IconButton extends Block {
    constructor(src, name, id, className = '') {
        super('button', [], { class: 'icon-btn', id, name });
        this.setContent([new Block('img', '', { src })]);
        this.addClass(className);
    }
}
export class ToolBar extends Block {
    constructor(toolList) {
        super('div', [], { class: 'tool-bar' });
        //La tool bar es una barra de herramientas que consiste en botones con iconos. Estos botones abren un modal
        const content = toolList.map((tool) => {
            new IconButton(tool.src, tool.name, tool.id, tool.class);
        });
        this.setContent(content);
    }
}
