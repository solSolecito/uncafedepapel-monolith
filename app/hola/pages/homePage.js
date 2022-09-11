import { Block } from '../../common/base/block.js';
import { Header } from '../header/header.js';
import { Page } from '../../common/base/page.js';
import { header, home } from '../utils/variables.js';
import { ImgAndTextPost } from '../../common/blocks/imgAndTextPost.js';
import { Annoucements } from '../../common/blocks/announcements.js';
export class HomePage extends Page {
    constructor(title) {
        super([], title);
        const content = [
            new Header(header.title, header.img.src, header.img.altText, header.toolList, header.navItemList, {}),
            new Block('main', [
                new ImgAndTextPost(home.welcome.title, home.welcome.img, home.welcome.text),
                new Annoucements(home.news.icon, [], [], [], []),
                //new Gallery( ),
            ])
        ];
        this.setContent(content);
    }
}
