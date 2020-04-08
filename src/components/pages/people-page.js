import React from 'react'

import Row from '../row';
import { withRouter } from 'react-router-dom';

import {
    PeopleList,
    PersonDetails
} from '../sw-components';

const PeoplePage = ({ history, match }) => {

    const { id } = match.params;

    const personDetails = (<PersonDetails itemId={id} />);
    const peopleList = (
        <PeopleList onItemSelected={(id) => history.push(id)} />
    );
    
    return (
        <Row left={peopleList} right={personDetails} />
    );
}

export default withRouter(PeoplePage);