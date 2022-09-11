export interface blockStructure {
    name: string;
    content: blockStructure[] | string;
    attributes: Map<string, string>;
    idEvents: Map<string, ()=>void>;
}

export class Block {
    protected attributes: Map<string, string>;
    protected idEvents: Map<string, ()=>void>;
    constructor(
        protected name: string,
        protected content: Block[] | string,
        atts: object = {},
        events: object = {}
    ) {
        this.attributes = new Map();
        for (const key in atts) {
            if (atts[key] && typeof atts[key] == 'string') {
                this.attributes.set(key, atts[key])
            }
        }
        this.idEvents = new Map();
        for (const key in events) {
            if (events[key] && typeof events[key] == 'function') {
                this.idEvents.set(key, events[key])
            }
        }
    }

    addClass(className: string): void {
        if (className) {
            this.attributes.set('class',
                this.attributes.has('class') ? this.attributes.get('class') + ' ' + className : className);
        }
    }

    // getters

    getName(): string {
        return this.name;
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
            attributes: this.attributes,
            idEvents: this.idEvents,
        }
    }
    
    getIdEvents():Map<string,()=>void> {
        return this.idEvents
    }

    // setters

    setContent(content: Block[]): void {
        this.content = content;
    }
}