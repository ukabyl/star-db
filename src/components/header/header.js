import React from 'react'

import './header.css';

import { Link } from 'react-router-dom';

const Header = ({ onChangeService }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">StarWar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/people/">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/starships/">Starship</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/planets/">Planet</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/secret/">Secret</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login/">Login</Link>
                    </li>
                </ul>
                <button className="btn btn-primary btn-small" onClick={onChangeService}>
                    Change Service
                </button>
            </div>
        </nav>
    );
}

export default Header;