export class Block {
    constructor(name, content, attributes) {
        this.name = name;
        this.content = content;
        this.attributes = attributes;
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
    ;
}
