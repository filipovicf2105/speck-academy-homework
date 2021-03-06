import React, { useState, useEffect } from 'react';

import { getSpeakers } from '../api/speakers';
import PageTitle from '../components/PageTitle/PageTitle';
import SearchBar from '../components/SearchBar/SearchBar';
import SectionInfo from '../components/SectionInfo/SectionInfo';
import InfoBox from '../components/InfoBox/InfoBox';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

const Speakers = () => {
    const [search, setSearch] = useState('');
    const [speakers, setSpeakers] = useState('');

    useEffect(() => {
        fetchSpeakers();
    }, []);

    const fetchSpeakers = async () => {
        try {
            const result = await getSpeakers(localStorage.getItem('token').split(' ')[1]);
            result.speakers
                ? setSpeakers(result.speakers)
                : console.log(result);
        } catch (err) {
            console.log(err);
        }
    }

    const showSpeakers = () => {
        return speakers.filter((speaker) => (
            speaker.title.toLowerCase().indexOf(search) !== -1
        )).map((speaker, index) => (
            <InfoBox
                key={index}
                type="speaker"
                title={speaker.title}
                about={speaker.about}
            />
        ));
    }

    const searchBarHandler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <PageTitle>Sudionici</PageTitle>
            <SearchBar onChange={searchBarHandler} placeholder="Search speakers..." disabled={!speakers} />
            <SectionInfo>
                {speakers ? showSpeakers() : <LoaderComponent />}
            </SectionInfo>
        </>
    );
}

export default Speakers;
