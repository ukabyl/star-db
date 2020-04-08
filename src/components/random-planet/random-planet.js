import React, { Component } from 'react'

import './random-planet.css';

import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';


export default class RandomPlanet extends Component {

    swapi = new SwapiService();

    state = {
        planet: null,
        image: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.updatePlanet();
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({ 
            planet, 
            image: this.swapi.getPlanetImage(planet),
            loading: false,
            error: false 
        });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17 + 2);
        this.swapi.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }
    
    render() {
        const { planet, image, loading, error } = this.state;

        const hasData = !(error || loading);

        const spinner = loading ? <Spinner /> : null;
        const errorIndicator = error ? <ErrorIndicator /> : null;
        const content = hasData ? <RandomPlanetView planet={planet} image={image} /> : null;

        return (
            <div className="jumbotron random-planet__jumbotron">
                {spinner}
                {errorIndicator}
                {content}
            </div>
        );
    }
}

const RandomPlanetView = ( { planet: { name, diameter, population, rotationPeriod}, image }) => {
    return (
        <React.Fragment>
            <div className="random-planet__img">
                <img alt={name} src={image} />
            </div>
            <div className="random-planet__details">
                <h1>{ name }</h1>
                <ul className="random-planet__list-group list-group">
                    <li className="list-group-item">
                        Diameter: { diameter }
                    </li>
                    <li className="list-group-item">
                        Population: { population }
                    </li>
                    <li className="list-group-item">
                        Rotation Period: { rotationPeriod }
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}