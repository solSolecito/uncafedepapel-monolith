import { blockStructure } from '../common/base/block.js';

export const builder = (blocks: blockStructure[], parent: HTMLElement) => {
    // El builder se encarga de interpretar las instrucciones y construir los nodos necesarios
    blocks.forEach(block => {
        const container = document.createElement(block.name);
        for (const keyval of block.attributes.entries()) {
            try {
                container.setAttribute(keyval[0], keyval[1]);
            } catch (error) {
                console.log(error)
            }
        }

        if (typeof block.content == 'string') {
            container.appendChild(document.createTextNode(block.content))
        } else {
            builder(block.content, container);
        }
        parent.appendChild(container);
    });
}

export const afterRender = (blocks: blockStructure[]) => {
    blocks.forEach(block => {
        for (const keyval of block.idEvents.entries()) {
            try {
                const element = document.getElementById(keyval[0]);
                console.log(element)
                element ? element.addEventListener('click', () => { keyval[1]() }) : console.log('El elemento no existe');
            } catch (error) {
                console.log(error)
            }
        }
        if (typeof block.content != 'string') {
            afterRender(block.content);
        }
    });

}