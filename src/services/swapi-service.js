export default class SwapiService {

    _baseUrl = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        const res = await fetch(`${this._baseUrl}${url}`);

        if ( !res.ok ) {
            throw new Error(`${url} came with ${res.status}`)
        }

        return res.json();
    }

    getAllPeople = async () => {
        const people =  await this.getResource('/people');
        return people.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person =  await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }

    getAllStarships = async () => {
        const starships =  await this.getResource('/starships');
        return starships.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship =  await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    }

    getAllPlanets = async () => {
        const planets =  await this.getResource('/planets');
        return planets.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet =  await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    _extractId = (item) => {
        const regExp = /\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            diameter: planet.diameter,
            orbitalPeriod: planet.orbital_period,
            population: planet.population,
            rotationPeriod: planet.rotation_period
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            eyeColor: person.eye_color,
            gender: person.gender,
            birthYear: person.birth_year
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            cargoCapacity: starship.cargo_capacity,
            length: starship.length,
            model: starship.model,
            costInCredits: starship.cost_in_credits    
        }
    }

    getPersonImage = ({ id }) => {
        return `${this._imageBase}/characters/${id}.jpg`
    }
    getStarshipImage = ({ id }) => {
        return `${this._imageBase}/starships/${id}.jpg`
    }
    getPlanetImage = ({ id }) => {
        return `${this._imageBase}/planets/${id}.jpg`
    }
}
