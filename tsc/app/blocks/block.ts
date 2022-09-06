export interface attribute {
    name: string,
    value: string
}

export interface blockStructure {
    name: string;
    content: blockStructure[] | string;
    attributes: Map<string, string>;
}

export class Block {
    protected attributes: Map<string, string>;
    constructor(
        protected name: string,
        protected content: Block[] | string,
        atts: Object
    ) {
        this.attributes = new Map();
        for (const key in atts) {
            if (atts[key] && typeof atts[key] == 'string') {
                this.attributes.set(key, atts[key])
            }
        }
    }

    getBlueprints(): blockStructure {
        let content;
        if (typeof this.content == 'string') {
            content = this.content;
        } else {
            content = this.content.map((b: Block) => b.getBlueprints());
        }
        return {
            name: this.name,
            content: content,
            attributes: this.attributes
        }
    }

    afterRender(): void {
        //xd
    }

    addClass(className: string): void {
        if (className) {
            this.attributes.set('class',
                this.attributes.has('class') ? this.attributes.get('class') + className : className);
        }
    }

    // getters

    getName(): string {
        return this.name;
    }

    // setters

    setContent(content: Block[]): void {
        this.content = content;
    }
}