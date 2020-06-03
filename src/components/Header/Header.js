import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import {
    HeaderMain,
    HeaderInner,
    HeaderLogo,
    HeaderLogoImage,
    HeaderNav,
    HeaderNavList,
    HeaderNavListItem,
    HeaderNavLink
} from './HeaderStyle';
import Logo from '../../assets/images/logo.png';

const links = {
    speakers: 'Sudionici',
    events: 'Događanja',
    register: 'Registracija',
    login: 'Prijava',
    logout: 'Logout'
}

const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    }

    return (
        <HeaderMain>
            <HeaderInner>
                <NavLink to="/">
                    <HeaderLogo>
                        <HeaderLogoImage
                            src={Logo}
                            alt="Logo"
                        />
                    </HeaderLogo>
                </NavLink>
                <HeaderNav>
                    <HeaderNavList>
                        <HeaderNavListItem>
                            <HeaderNavLink to="/speakers" activeClassName="ActiveClass">
                                {links.speakers}
                            </HeaderNavLink>
                        </HeaderNavListItem>
                        <HeaderNavListItem>
                            <HeaderNavLink to="/events" activeClassName="ActiveClass">
                                {links.events}
                            </HeaderNavLink>
                        </HeaderNavListItem>
                        {!isLoggedIn
                            ? <>
                                <HeaderNavListItem>
                                    <HeaderNavLink to="/register" activeClassName="ActiveClass">
                                        {links.register}
                                    </HeaderNavLink>
                                </HeaderNavListItem>
                                <HeaderNavListItem>
                                    <HeaderNavLink to="/login" activeClassName="ActiveClass">
                                        {links.login}
                                    </HeaderNavLink>
                                </HeaderNavListItem>
                            </>
                            : <HeaderNavListItem>
                                <HeaderNavLink to="/logout" onClick={handleLogout}>
                                    {links.logout}
                                </HeaderNavLink>
                            </HeaderNavListItem>
                        }
                    </HeaderNavList>
                </HeaderNav>
            </HeaderInner>
        </HeaderMain>
    );
}

export default Header;
