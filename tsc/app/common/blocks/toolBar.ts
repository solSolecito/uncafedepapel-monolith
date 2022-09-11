import { toolInterface } from '../interfaces/toolInterface.js';
import { IconButton } from './iconButton.js';
import { Block } from '../base/block.js';

export class ToolBar extends Block {
  constructor( toolList:toolInterface[] ){
    super('div', new Array(), { class: 'tool-bar'})
    //La tool bar es una barra de herramientas que consiste en botones con iconos. Estos botones abren un modal
    const content = toolList.map( (tool:toolInterface) => {
      return new IconButton( tool.src, tool.name, tool.id, tool.class, tool.onclick )
    })
    this.setContent(content)
  }
}
