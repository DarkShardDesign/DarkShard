import { createTemplate } from './utils/globalUtils';
import WebComponent from './core/web-component';
import template from './test-component-2.template.html';
import testComponent1 from './test-component1';


export default class testComponent2 extends WebComponent {
    constructor() {
        super();
        this.componentName = 'test-component-2';
        this.usedComponents = [testComponent1];
        this.template = createTemplate(template);
    }
}