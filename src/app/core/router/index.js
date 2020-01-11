import { isString, isFunction } from '../utils/typechecks';

class Router {
    constructor () {
        this.routes = [];
    }

    /**
     * Register a new route uri and callback function
     * @param {string} uri the uri to match against for the given route
     * @param {Function} callback the callback to invoke when we match the route
     */
    set(uri, callback) {
        // we need to have values for both uri and callback
        if (!uri || !callback) throw new Error('uri and callback must be given');

        // they need to be the correct types
        if (!isString(uri)) throw new Error('uri must be a string');
        if (!isFunction(callback)) throw new Error('callback must be a function');

        // we dont want conflicting routes, so if we already have it throw and error
        if (this.routes.find(route => route.uri === uri)) throw new Error(`the uri ${uri} already exists`);

        // add the new route
        this.routes.push({
            uri,
            callback
        });
    }

    /**
     * initialise the router
     */
    init() {
        // process routes until we find a match
        this.routes.some(route => {
            // setup our regex to match with
            let regEx = new RegExp(`^${route.uri}$`);
            // get our current path
            let path = window.location.pathname;

            // if the path matches our route then invoke its callback
            if (path.match(regEx)) return route.callback.call(this, { path });
        });
    }
}

export default new Router();