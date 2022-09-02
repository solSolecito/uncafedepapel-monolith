export interface attribute {
    name: string,
    value: string
}

export interface blockStructure {
    name:string;
    content: blockStructure [] | string;
    attributes: attribute[];
}

export abstract class Block {
    constructor(
        protected name:string,
        protected content: Block[] | string,
        protected attributes:attribute[]
    ){
    }
    getBlueprints():blockStructure{
        let content;
        if(typeof this.content == 'string'){
            content = this.content;
        } else{
            content = this.content.map((b:Block ) => b.getBlueprints()); 
        }
        return {
            name: this.name,
            content: content,
            attributes:this.attributes
        }
    };
    abstract afterRender():void;
}