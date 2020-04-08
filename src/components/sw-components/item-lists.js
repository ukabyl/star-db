import React from 'react'

import ItemList from '../item-list';
import { withData, withChildFunction, compose } from '../hoc-helpers';

import { withSwapiService } from '../hoc-helpers';


const renderNameGenderBirthYear = ({ name, gender, birthYear }) => (<span>{name} ({ gender }, { birthYear})</span>);
const renderNameAndModel = ({ name, model }) => (<span>{name} ({ model })</span>);
const renderNameAndOrbitalPeriod = ({ name, orbitalPeriod }) => (<span>{name} ({ orbitalPeriod })</span>);


const mapPersonMethodsToPros = (swapi) => {
    return {
        getData: swapi.getAllPeople,
        getImageUrl: swapi.getPersonImage
    }
}

const mapStarshipMethodsToPros = (swapi) => {
    return {
        getData: swapi.getAllStarships,
        getImageUrl: swapi.getStarshipImage
    }
}

const mapPlanetMethodsToPros = (swapi) => {
    return {
        getData: swapi.getAllPlanets,
        getImageUrl: swapi.getPlanetImage
    }
}

const PeopleList = compose(
    withSwapiService(mapPersonMethodsToPros),
    withData,
    withChildFunction(renderNameGenderBirthYear)
)(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToPros),
    withData,
    withChildFunction(renderNameAndModel)
)(ItemList);

const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToPros),
    withData,
    withChildFunction(renderNameAndOrbitalPeriod)
)(ItemList);



export {
    PeopleList,
    StarshipList,
    PlanetList
}

