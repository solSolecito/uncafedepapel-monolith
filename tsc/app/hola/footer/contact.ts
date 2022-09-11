import { Block } from '../../common/base/block.js';
import { IconHref } from '../../common/blocks/iconHref.js';
import { iconInterface } from '../../common/interfaces/iconHrefInterface.js';
import { mapInterface } from '../interfaces/mapInterface.js';

export class ContactBlock extends Block {
    constructor(contact: string[], rrss: iconInterface[], map: mapInterface) {
        super('div', [], {});
        const content = [
            new Block(
                'div',
                contact.map((line: string) => {
                    return new Block('p', line, { class: 'contact-line' });
                }),
                {}
            ),
            new Block(
                'div',
                rrss.map((rrssLine: iconInterface) => {
                    return new IconHref(rrssLine.src, rrssLine.href, rrssLine.altText);
                }), {})
        ];
        this.setContent(content);
    }
}
