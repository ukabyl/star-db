import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';
 

const PersonDetails = (props) => {
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
        getData: swapi.getPerson,
        getImageUrl: swapi.getPersonImage
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);