import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

import './Header.scss';

const links = {
    speakers: 'Sudionici',
    events: 'Događanja',
    contact: 'Kontakt',
    apply: 'Prijavi se'
}

const Header = () => {
    return (
        <header className="HeaderMain">
            <div className="HeaderMain-Inner">
                <Link to="/" className="LogoContainer">
                    <img className="LogoContainer-Image" src={Logo} alt="Logo" />
                </Link>
                <nav className="HeaderMain-Nav">
                    <ul className="HeaderMain-NavList">
                        <li className="HeaderMain-NavListItem">
                            <Link className="HeaderMain-NavLink" to="/speakers">
                                {links.speakers}
                            </Link>
                        </li>
                        <li className="HeaderMain-NavListItem">
                            <Link className="HeaderMain-NavLink" to="/events">
                                {links.events}
                            </Link>
                        </li>
                        <li className="HeaderMain-NavListItem">
                            <Link className="HeaderMain-NavLink" to="/">
                                {links.contact}
                            </Link>
                        </li>
                        <li className="HeaderMain-NavListItem">
                            <Link className="HeaderMain-NavLink" to="/">
                                {links.apply}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
