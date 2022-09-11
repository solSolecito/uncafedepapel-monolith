import { Block } from '../blocks/block.js';
import { Header } from '../blocks/header.js';
import { Page } from './page.js';
import { announcementsConstants, headerConstants, welcomeConstants } from '../utils/constants.js';
import { ImgAndTextPost } from '../blocks/imgAndTextPost.js';
import { Annoucements } from '../blocks/announcements.js';
export class HomePage extends Page {
    constructor(title) {
        super([], title);
        const content = [
            new Header(headerConstants.titleTaller, headerConstants.img.src, headerConstants.img.altText, headerConstants.toolList, headerConstants.navItemList, {}),
            new Block('main', [
                new ImgAndTextPost(welcomeConstants.title, welcomeConstants.img, welcomeConstants.text),
                new Annoucements(announcementsConstants.icon, [], [], [], []),
                //new Gallery( ),
            ])
        ];
        this.setContent(content);
    }
}
