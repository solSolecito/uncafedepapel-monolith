import { Block, blockStructure } from './block.js';

export abstract class Page {
    constructor(
        private content: Block[],
        private title: string
    ) { }

    addTitle(): void {
        document.title = this.title;
    }

    // getters

    getBlueprints(): blockStructure[] {
        return this.content.map((block:Block) => { return block.getBlueprints()});
    }

    // setters

     setContent(content: Block[]): void {
        this.content = content;
    }
} 