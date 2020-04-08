import React, { Component } from 'react'

import Row from '../row';

import {
    PlanetList,
    PlanetDetails
} from '../sw-components';

export default class PlanetPage extends Component {

    state = {
        itemSelected: null
    };

    onItemSelected = (itemSelected) => {
        this.setState({ itemSelected })
    };

    render() {
        const personDetails = (<PlanetDetails itemId={this.state.itemSelected} />);
        const peopleList = (
            <PlanetList onItemSelected={this.onItemSelected} />
        );
        
        return (
            <Row left={peopleList} right={personDetails} />
        );
    }
}
