import React from 'react';

import Card from '../Card/Card';

import {
    SectionMoreWrapper,
    SectionMoreAbout,
    SectionMoreText,
    SectionMoreButton,
    SectionMoreCardsContainer
} from './SectionMoreStyle';

import About from '../../assets/images/about.jpg';
import Speakers from '../../assets/images/speakers.jpg';
import Calendar from '../../assets/images/calendar.jpg';
import Partner from '../../assets/images/partner.jpg';

const SectionMore = () => {
    return (
        <SectionMoreWrapper>
            <SectionMoreAbout>
                <SectionMoreText>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                    Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                </SectionMoreText>
                <SectionMoreButton href="#">Saznaj više</SectionMoreButton>
            </SectionMoreAbout>
            <SectionMoreCardsContainer>
                <Card image={About} alt="About">O tjednu karijera</Card>
                <Card image={Speakers} alt="Speakers">Izlagači</Card>
                <Card image={Calendar} alt="Agenda">Raspored događanja</Card>
                <Card image={Partner} alt="Partners">Partneri</Card>
            </SectionMoreCardsContainer>
        </SectionMoreWrapper>
    );
}

export default SectionMore;
