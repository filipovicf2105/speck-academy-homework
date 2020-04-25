import styled from 'styled-components';

export const HeaderMain = styled.header`
    position: fixed;
    top: 0;
    z-index: 1000;
    background: #fff;
    width: 100%;
    height: 80px;
`;

export const HeaderInner = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;

export const HeaderLogo = styled.div`
    width: 80px;
    height: 70px;
    margin-top: 5px;
    float: left;
`;

export const HeaderLogoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const HeaderNav = styled.nav`
    display: none;

    @media only screen and (min-width: 1024px) {
        & {
            display: block;
            float: right;
        }
    }
`;

export const HeaderNavList = styled.ul`
    list-style: none;
    margin: auto 0;
`;

export const HeaderNavListItem = styled.li`
    display: inline-block;
    line-height: 80px;
    margin-right: 50px;

    &last-child {
        margin-right: 0;
    }
`;

export const HeaderNavLink = styled.div`
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.02em;
    transition: color 0.3s ease-out;
    text-decoration: none;
    color: #000;

    &:hover {
        color: #c59613;
    }
`;
