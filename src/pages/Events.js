import React, { useState, useEffect } from 'react';

import PageTitle from '../components/PageTitle/PageTitle';
import SearchBar from '../components/SearchBar/SearchBar';
import SectionInfo from '../components/SectionInfo/SectionInfo';
import InfoBox from '../components/InfoBox/InfoBox';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

import eventsMock from '../lib/events';

const Events = () => {
    const [search, setSearch] = useState('');
    const [events, setEvents] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setEvents(eventsMock);
        }, 1000);
    }, []);

    const showEvents = () => {
        return events.filter((event) => (
            event.title.toLowerCase().indexOf(search) !== -1
        )).map((event, index) => (
            <InfoBox
                key={index}
                type="event"
                title={event.title}
                location={event.location}
                time={event.dateTime}
                about={event.about}
            />
        ));
    }

    const searchBarHandler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <PageTitle>Događanja</PageTitle>
            <SearchBar onChange={searchBarHandler} placeholder="Search events..." disabled={!events} />
            <SectionInfo>
                {events ? showEvents() : <LoaderComponent />}
            </SectionInfo>
        </>
    );
}

export default Events;
