import { createTemplate } from './utils/globalUtils';
import WebComponent from './core/web-component';

export default class testComponent1 extends WebComponent {
    constructor() {
        super();
        this.componentName = 'test-component-1';
        this.isolated = true;
        this.template = createTemplate(`
            <style>
                p {
                    color: var(--test-color);
                    background-color: var(--test-background-color);
                    padding: 5px;
                }
            </style>
            <p class="my-text">test-component-1</p>
        `);
    }
}