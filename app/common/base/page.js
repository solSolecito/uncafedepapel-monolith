export class Page {
    constructor(content, title) {
        this.content = content;
        this.title = title;
    }
    addTitle() {
        document.title = this.title;
    }
    // getters
    getBlueprints() {
        return this.content.map((block) => { return block.getBlueprints(); });
    }
    // setters
    setContent(content) {
        this.content = content;
    }
}
