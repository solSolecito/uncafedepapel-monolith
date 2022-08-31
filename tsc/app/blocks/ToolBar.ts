import { Block } from './block.js'

interface tool {
  name:string;
  id:string;
  src:string;
  class:string;
  onclick:string;
}

class IconButton extends Block {
  constructor( src:string, name:string, id:string, class:string = '' ){
    super('button', [], { class: 'icon-btn', id, name })
    this.setContent([new Block( 'img', '', { src })])
    this.addClass( class ) 
  }
}

export class ToolBar extends Block {
  constructor( toolList:tool[] ){
    super('div', [], { class= 'tool-bar'})
    //La tool bar es una barra de herramientas que consiste en botones con iconos. Estos botones abren un modal
    const content = toolList.map( (tool:tool) => {
      new IconButton( tool.src, tool.name, tool.id, tool.class )
    })
    this.setContent(content)
  }
}
