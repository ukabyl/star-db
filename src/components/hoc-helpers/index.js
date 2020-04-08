import withData from './with-data';
import withChildFunction from './with-child-funcition';
import withSwapiService from './with-swapi-service';

const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((prevResult, fn) => {
        return fn(prevResult);
    }, comp)
}

export {
    withData,
    withChildFunction,
    withSwapiService,
    compose
}