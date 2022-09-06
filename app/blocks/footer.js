import { Block } from './block.js';
class IconHref extends Block {
    constructor(src, href, altText) {
        super('p', [], {});
        const content = [
            new Block('img', '', { src: src }),
        ];
    }
}
class Footer extends Block {
    constructor(contact, rrss, map) {
        super('footer', [], {});
        const content = [
            new ContactBlock(contact, rrss, map),
            new LicenceBlock()
        ];
        this.setContent(content);
    }
}
class ContactBlock extends Block {
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
class LicenceBlock extends Block {
    constructor() {
        super('div', [], {});
    }
}
