import { Block, blockStructure } from './block.js';

interface mapInterface {
  src: string,
}

interface iconInterface {
  src: string,
  altText: string,
  href: string
}

class IconHref extends Block {
  constructor(src:string, href:string, altText:string){
    super('p', [], {});
    const content = [
      new Block('img', '', {src: src}),
    ]
  }
}

class Footer extends Block {
  constructor(contact:string[], rrss:iconInterface[], map:mapInterface){
    super('footer', [], {});
    const content = [
      new ContactBlock(contact, rrss, map),
      new LicenceBlock()
    ];
    this.setContent(content);
  }
}

class ContactBlock extends Block {
  constructor(contact:string[], rrss:iconInterface[], map:mapInterface){
    super('div', [], {});
    const content = [
      new Block(
        'div', 
        contact.map( (line:string) => {
          return new Block('p', line, { class:'contact-line'} );
        }), 
        {}
      ),
      new Block( 
        'div', 
        rrss.map( (rrssLine:iconInterface) => {
        return new IconHref(rrssLine.src, rrssLine.href, rrss.altText);
      }), {})
    ];
    this.setContent(content);
  }
}

class LicenceBlock extends Block{
  constructor(){
    super('div', [], {})
  }
}
