import { Block } from '../block.js';

export class ImgBlock extends Block {
    constructor(src: string, altText: string = 'No hay texto alterno disponible') {
        super('img', '', { src, altText })
    }
}
