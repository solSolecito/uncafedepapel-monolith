import { Block } from './block.js'

interface tool {
  name:string;
  id:string;
  href:string;
  class:string;
}

class NavListItem extends Block {
  constructor( href:string, name:string, id:string, class:string = '' ){
    super('li', [], { class: 'nav-btn', id, name })
    this.setContent([new Block( 'a', '', { href })])
    this.addClass( class ) 
  }
}

export class NavBar extends Block {
  //Una navbar de toda la vida
  constructor( toolList:tool[] ){
    super('nav', [], { class= 'nav-bar'})
    //Estos botones tienen hipervinculos
    const content = toolList.map( (tool:tool) => {
      new NavListItem( tool.href, tool.name, tool.id, tool.class )
    })
    this.setContent( [new Block('ul', content, {})] );
  }
}
