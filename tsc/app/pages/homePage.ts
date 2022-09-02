import { attribute, Block, blockStructure } from '../blocks/block.js';
import { Header } from '../blocks/header.js';
import { Page } from './page.js';

export class HomePage extends Page {
    constructor(
        name: string,
        attributes: attribute[],
        title: string
    ){
        const content = [];
        content.push(new Header([]));
        super( name, content, attributes, title );
    }
    getBlueprints(): blockStructure {
        let content;
        if(typeof this.content == 'string'){
            content = this.content;
        } else {
            try {
                content = this.content.map(block => {
                    block.getBlueprints();
                });
            } catch (error) {
                console.log(error);
                content = [];
            }
        }
        const blueprints = {
            name: this.name,
            attributes: this.attributes,
           content: content
        }
        return blueprints
    }
    afterRender(): void {
        //xd
    }
} 