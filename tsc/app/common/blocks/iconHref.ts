import { Block } from '../base/block.js';
  
export class IconHref extends Block {
    constructor(src:string, href:string, altText:string){
      super('p', [], {});
      const content = [
        new Block('img', '', {src: src}),
      ]
    }
}