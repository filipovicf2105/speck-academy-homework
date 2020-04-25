import React, { useEffect } from 'react';
import Progress from 'rsup-progress';

import SectionHero from '../components/SectionHero/SectionHero';
import SectionMore from '../components/SectionMore/SectionMore';
import SectionLastYear from '../components/SectionLastYear/SectionLastYear';

const Home = () => {
    const progress = new Progress({
        height: 5,
        color: '#D0003E'
    });

    useEffect(() => {
        progress.start();
        setTimeout(() => {
            progress.end();
        }, 1000);
    }, []);

    return (
        <>
            <SectionHero />
            <SectionMore />
            <SectionLastYear />
        </>
    );
}

export default Home;
