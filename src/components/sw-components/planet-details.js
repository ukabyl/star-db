import React from 'react';


import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record label="gender" field="gender" />
            <Record label="Birth Year" field="birthYear" />
            <Record label="Eye Color" field="eyeColor" />
        </ItemDetails>
    );
}

const mapMethodsToProps = (swapi) => {
    return {
        getData: swapi.getPlanet,
        getImageUrl: swapi.getPlanetImage
    }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);