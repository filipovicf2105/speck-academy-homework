import React from 'react';

import './SectionHero.scss';

const SectionHero = () => {
    return (
        <section className="SectionHero">
            <div className="SectionHero-DataContainer">
                <h1 className="SectionHero-Title">Tjedan karijera</h1>
                <span className="SectionHero-Organizer">FOI</span>
                <p className="SectionHero-Date">20.10.2020. - 26.10.2020.</p>
                <a href="#" className="Button">Prijavi se</a>
            </div>
        </section>
    );
}

export default SectionHero;
