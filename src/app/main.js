import Router from './core/router';
import testComponent1 from './test-component1';
import testComponent2 from './test-component2';

// register route's
const router = new Router();
router.set('/', testComponent1);
router.set('/home', testComponent2)

// load the currently matching route
router.init();
