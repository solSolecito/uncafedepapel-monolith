import { attribute, Block, blockStructure } from './block.js';

interface tool {
  name:string;
  id:string;
  href:string;
  class:string;
}

class NavListItem extends Block {
  constructor( href:string, text:string, id:string, className:string = '' ){
    super('li', [], { class: 'nav-btn', id });
    this.setContent([new Block( 'a', text, { href })]);
    this.addClass( className ) ;
  }
}

export class NavBar extends Block {
  //Una navbar de toda la vida
  constructor( toolList:tool[] ){
    super('nav', [], { class: 'nav-bar'})
    //Estos botones tienen hipervinculos
    const content = toolList.map( (tool:tool) => {
      return new NavListItem( tool.href, tool.name, tool.id, tool.class )
    })
    this.setContent( [new Block('ul', content, {})] );
  }
}
