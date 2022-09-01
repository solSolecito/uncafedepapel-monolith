class Footer extends Block {
  constructor(){
    super('footer', [], {});
    const content = [
      new ContactBlock(),
      new LicenceBlock()
    ];
    this.setContent(content);
  }
}

class ContactBlock extends Block {
  constructor(contact:string[], rrss:iconHref[]){
    super('div', [], {});
    const content = [
      new Block('div', contact.map((line:string) => {
        new Block('p', line, { class:'contact-line'} );
      }), {}),
      new Block('img', '', { src: map.src} ),
      new Block( 'div', rrss.map((rrssLine:iconHref) => {
        new Block( 'p', new Block('img')
      }))
    ];
    this.setContent(content);
  }
}

class ImgBlock extends Block {
  constructor(src:string, altText:string = "No hay texto alterno disponible"){
    super('img', '', {src, altText})
  }
}

class IconHref extends Block {
  constructor(src:string, href:string, text:string){
    super('p', [], {});
    const content = [
      new Block('img', '', {src: src}),
    ]
  }
}
