import styled from 'styled-components';
import { Btn } from '../../lib/styles/GeneralStyles';

export const SectionMoreWrapper = styled.section`
    padding: 70px 0;
    overflow-y: hidden;
`;

export const SectionMoreAbout = styled.div`
    margin-bottom: 70px;
`;

export const SectionMoreText = styled.p`
    max-width: 750px;
    margin: 0 auto;
    margin-bottom: 40px;
    text-align: center;
`;

export const SectionMoreButton = styled(Btn)`
    margin: 0 auto;
`;

export const SectionMoreCardsContainer = styled.div`
    width: 1280px;
    margin: 0 auto;

    &::after {
        clear: both;
    }
`;
