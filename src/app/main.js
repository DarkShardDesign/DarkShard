import Router from './core/router';
import App from './app';

// register route's
Router.set('/home', route => console.log(route));

Router.init();

// launch the app
App.launch();