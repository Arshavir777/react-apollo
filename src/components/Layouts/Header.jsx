import React from 'react';
import { NavLink } from 'react-router-dom';
import SpaceXLogo from '../../assets/images/logo';

function Header() {
    return (
        <div>
            <nav className="level p-5 has-background-danger-warning">
                <div className="level-left">
                    <div className="level-item">
                        <NavLink to='/'>
                            <SpaceXLogo />
                        </NavLink>
                    </div>

                </div>

                <div className="level-right">
                    <p className="level-item">
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to="/missions">Missions</NavLink>
                    </p>
                    <p className="level-item">
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to="/dragons">Dragons</NavLink>
                    </p>
                    <p className="level-item">
                        <a className="button is-info">
                            Get Started
                            </a>
                    </p>
                </div>
            </nav>
        </div>


    )
}

export default Header;