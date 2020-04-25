import React from 'react';

import {
    SectionHeroWrapper,
    SectionHeroDataContainer,
    SectionHeroTitle,
    SectionHeroOrganizer,
    SectionHeroDate,
    SectionHeroButton
} from './SectionHeroStyle';

const SectionHero = () => {
    return (
        <SectionHeroWrapper>
            <SectionHeroDataContainer>
                <SectionHeroTitle>Tjedan karijera</SectionHeroTitle>
                <SectionHeroOrganizer>FOI</SectionHeroOrganizer>
                <SectionHeroDate>20.10.2020. - 26.10.2020.</SectionHeroDate>
                <SectionHeroButton href="#">Prijavi se</SectionHeroButton>
            </SectionHeroDataContainer>
        </SectionHeroWrapper>
    );
}

export default SectionHero;
