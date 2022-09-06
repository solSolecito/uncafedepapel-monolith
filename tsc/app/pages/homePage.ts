import { attribute, Block, blockStructure } from '../blocks/block.js';
import { Header } from '../blocks/header.js';
import { Page } from './page.js';
import { headerConstants } from '../utils/constants.js';

export class HomePage extends Page {
    constructor(
        name: string,
        attributes: Map<string,string>,
        title: string
    ){
        super( name, [], attributes, title );
        const content = [
            new Header( 
                headerConstants.titleTaller,
                headerConstants.img.src,
                headerConstants.img.altText,
                new Map()
            )
        ];
        this.setContent(content)
    }
} 
