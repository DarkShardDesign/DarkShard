const componentName = 'ds-main-app';
if (!customElements.get(componentName)) {
    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            section {
                display: flex;,
                flex: 1 1 100%;
                flex-direction: column;
                color: white;
                background-color: blue;
                padding: 5px;
            }
        </style>
        <section>
            <slot name="head">default header</slot>
            <slot name="body">default body</slot>
            <slot name="tail">default footer</slot>
        </section>`;

    customElements.define(componentName,
        class extends HTMLElement {
            constructor () {
                super();
                console.log('main-app', template.innerHTML);
                this.attachShadow({mode: 'open'}).appendChild(
                    template.content.cloneNode(true)
                );
            }
        }
    );
}