import React from 'react';
import { NavLink } from 'react-router-dom';

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

import './Header.scss';

const links = {
    speakers: 'Sudionici',
    events: 'Događanja',
    contact: 'Kontakt',
    apply: 'Prijavi se'
}

const Header = () => {
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
                            <HeaderNavLink>
                                <NavLink to="/speakers" activeClassName="ActiveLink">
                                    {links.speakers}
                                </NavLink>
                            </HeaderNavLink>
                        </HeaderNavListItem>
                        <HeaderNavListItem>
                            <HeaderNavLink>
                                <NavLink to="/events" activeClassName="ActiveLink">
                                    {links.events}
                                </NavLink>
                            </HeaderNavLink>
                        </HeaderNavListItem>
                        <HeaderNavListItem>
                            <HeaderNavLink>
                                <NavLink to="/">
                                    {links.contact}
                                </NavLink>
                            </HeaderNavLink>
                        </HeaderNavListItem>
                        <HeaderNavListItem>
                            <HeaderNavLink>
                                <NavLink to="/">
                                    {links.apply}
                                </NavLink>
                            </HeaderNavLink>
                        </HeaderNavListItem>
                    </HeaderNavList>
                </HeaderNav>
            </HeaderInner>
        </HeaderMain>
    );
}

export default Header;
