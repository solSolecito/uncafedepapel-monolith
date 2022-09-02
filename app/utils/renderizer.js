const renderizer = (blocks, parent) => {
    //¿Que hace el renderizer? recibe un objeto del estilo [{name, content, atributtes}]
    blocks.forEach(block => {
        const container = document.createElement(block.name);
        for (const key in block.attributes) {
            console.log(typeof block.attributes[key]);
            /* if(typeof block.attributes[key] == 'string' )
             try {
                 container.setAttribute( key, block.attributes[key] );
             } catch (error) {
                 console.log(error)
             }*/
        }
        return container;
    });
};
export {};
