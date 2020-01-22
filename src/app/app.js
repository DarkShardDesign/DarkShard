import { createTemplate } from './utils/globalUtils';
import './components/mainApp';

export default {
    launch: () => {
        // const componentName = 'the-darkshard';
        // if (!customElements.get(componentName)) {
        //     // create the template
        //     const template = createTemplate(`
        //         <style>
        //             p {
        //                 color: white;
        //                 background-color: #666;
        //                 padding: 5px;
        //             }
        //         </style>
        //         <p>
        //             <slot name="my-text">Sorry but your current browser doesnt appear to support current web technologies. This site requires support for the html shadow dom api. Please consider using a modern browser such as Chrome or Firefox</slot>
        //         </p>
        //     `);

        //     // define the component
        //     customElements.define(componentName,
        //         class extends HTMLElement {
        //             constructor () {
        //                 super();

        //                 // append the template contents to this component instance
        //                 this.attachShadow({mode: 'open'}).appendChild(
        //                     template.content.cloneNode(true)
        //                 );
        //             }
        //         }
        //     );

        //     // create an instance of the component
        //     const app = document.createElement(componentName);
        //     // add any needed HTML/Components
        //     app.innerHTML = `
        //         <ds-main-app slot='my-text'>
        //             <span slot='head'>This will be the head</span>
        //             <span slot='body'>This will be the body</span>
        //             <span slot='tail'>This will be the footer</span>
        //         </ds-main-app>
        //         `
        //     // append to the current dom
        //     document.body.appendChild(app);
        // }
    }
}
