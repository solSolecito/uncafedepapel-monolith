import { Block } from '../../common/base/block.js';
import { ContactBlock } from './contact.js';
import { ParagraphBlock } from '../../common/blocks/paragraphBlock.js';
class Footer extends Block {
    constructor(contact, rrss, map, info) {
        super('footer', [], {});
        const content = [
            new ContactBlock(contact, rrss, map),
            new ParagraphBlock(info, { class: 'licence' })
        ];
        this.setContent(content);
    }
}
