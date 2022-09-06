export class Block {
    constructor(name, content, atts) {
        this.name = name;
        this.content = content;
        this.attributes = new Map();
        for (const key in atts) {
            if (atts[key] && typeof atts[key] == 'string') {
                this.attributes.set(key, atts[key]);
            }
        }
    }
    getBlueprints() {
        let content;
        if (typeof this.content == 'string') {
            content = this.content;
        }
        else {
            content = this.content.map((b) => b.getBlueprints());
        }
        return {
            name: this.name,
            content: content,
            attributes: this.attributes
        };
    }
    afterRender() {
        //xd
    }
    addClass(className) {
        if (className) {
            this.attributes.set('class', this.attributes.has('class') ? this.attributes.get('class') + className : className);
        }
    }
    // getters
    getName() {
        return this.name;
    }
    // setters
    setContent(content) {
        this.content = content;
    }
}
