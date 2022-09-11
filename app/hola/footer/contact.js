import { Block } from '../../common/base/block.js';
import { IconHref } from '../../common/blocks/iconHref.js';
export class ContactBlock extends Block {
    constructor(contact, rrss, map) {
        super('div', [], {});
        const content = [
            new Block('div', contact.map((line) => {
                return new Block('p', line, { class: 'contact-line' });
            }), {}),
            new Block('div', rrss.map((rrssLine) => {
                return new IconHref(rrssLine.src, rrssLine.href, rrssLine.altText);
            }), {})
        ];
        this.setContent(content);
    }
}
