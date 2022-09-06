import { blockStructure } from '../blocks/block.js';

export const builder = (blocks:blockStructure[], parent:HTMLElement) => {
    // El builder se encarga de interpretar las instrucciones y construir los nodos necesarios
    blocks.forEach(block => {
        console.log(block)
        const container = document.createElement(block.name);
        for (const keyval of block.attributes.entries()) {
            try {
                container.setAttribute( keyval[0], keyval[1] );
            } catch (error) {
                console.log(error)
            }
        }

        if(typeof block.content == 'string'){
            container.appendChild( document.createTextNode(block.content))
        } else {
            builder(block.content, container);
        }
        parent.appendChild(container);
    });
}