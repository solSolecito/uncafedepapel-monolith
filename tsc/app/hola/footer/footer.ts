import { iconInterface } from '../../common/interfaces/iconHrefInterface';
import { Block } from '../../common/base/block.js';
import { ContactBlock } from './contact.js';
import { ParagraphBlock } from '../../common/blocks/paragraphBlock.js';
import { mapInterface } from '../interfaces/mapInterface.js';

class Footer extends Block {
    constructor(contact: string[], rrss: iconInterface[], map: mapInterface, info:string[]) {
        super('footer', [], {});
        const content = [
            new ContactBlock(contact, rrss, map),
            new ParagraphBlock(info, {class:'licence'})
        ];
        this.setContent(content);
    }
}
