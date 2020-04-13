import React from 'react';

import PageTitle from '../components/PageTitle/PageTitle';
import SectionInfo from '../components/SectionInfo/SectionInfo';
import InfoBox from '../components/InfoBox/InfoBox';

const Speakers = () => {
    return (
        <>
            <PageTitle>Sudionici</PageTitle>
            <SectionInfo>
                <InfoBox
                    type="speaker"
                    title="Johann Bach">
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        a Latin professor at Hampden-Sydney College in Virginia, looked up one.
                </InfoBox>
                <InfoBox
                    type="speaker"
                    title="Sebastian Bach">
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        a Latin professor at Hampden-Sydney College in Virginia, looked up one.
                </InfoBox>
                <InfoBox
                    type="speaker"
                    title="Johann Franck">
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        a Latin professor at Hampden-Sydney College in Virginia, looked up one.
                </InfoBox>
                <InfoBox
                    type="speaker"
                    title="Johann Speck">
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        a Latin professor at Hampden-Sydney College in Virginia, looked up one.
                </InfoBox>
                <InfoBox
                    type="speaker"
                    title="Joe Boe">
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        a Latin professor at Hampden-Sydney College in Virginia, looked up one.
                </InfoBox>
                <InfoBox
                    type="speaker"
                    title="El Bow">
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        a Latin professor at Hampden-Sydney College in Virginia, looked up one.
                </InfoBox>
            </SectionInfo>
        </>
    );
}

export default Speakers;
