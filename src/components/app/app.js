import React, { Component } from 'react'

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, StarshipPage, PlanetPage, SecretPage, LoginPage } from '../pages';
import { StarshipDetails } from '../sw-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SwapiProvider } from '../swapi-context';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorIndicator from '../error-indicator';

export default class App extends Component{

    

    state = {
        swapi: new SwapiService(),
        isLogin: false
    }

    onLogin = () => {
        this.setState({ isLogin: true })
    }

    onChangeService = () => {
        this.setState(({ swapi }) => {
            const Service = swapi instanceof SwapiService ? 
                                    DummySwapiService : SwapiService;
            return {
                swapi: new Service()
            }
        })
    }
    
    render() {
        return (
            <SwapiProvider value={this.state.swapi}>
                <div className="container">
                    <Router>
                            <Header onChangeService={this.onChangeService} />
                            <RandomPlanet />
                        <Switch>
                            <Route path="/" exact render={() => <h1>Welcome to the STAR WAR website</h1>} />
                            <Route path="/people/:id?" component={PeoplePage} />
                            <Route path="/planets" component={PlanetPage} />
                            <Route path="/starships" exact component={StarshipPage} />
                            <Route path="/starships/:id" render={({ match }) => {
                                const { id } = match.params;
                                return <StarshipDetails itemId={id} />
                            }} />
                            <Route path="/secret" render={() => {
                                return <SecretPage isLogin={this.state.isLogin} />
                            }} />
                            <Route path="/login" render={() => {
                                return <LoginPage onLogin={this.onLogin} isLogin={this.state.isLogin} />
                            }} />
                            <Route render={() => {
                                return <ErrorIndicator />
                            }} />
                        </Switch>
                    </Router>
                </div>
            </SwapiProvider>
        );
    }
}