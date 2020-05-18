import React, { useState, useEffect } from 'react';

import { getEvents } from '../api/events';
import PageTitle from '../components/PageTitle/PageTitle';
import SearchBar from '../components/SearchBar/SearchBar';
import SectionInfo from '../components/SectionInfo/SectionInfo';
import InfoBox from '../components/InfoBox/InfoBox';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

const Events = () => {
    const [search, setSearch] = useState('');
    const [events, setEvents] = useState('');

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const result = await getEvents(localStorage.getItem('token').split(' ')[1]);
            result.events
                ? setEvents(result.events)
                : console.log(result);
        } catch (err) {
            console.log(err);
        }
    }

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
