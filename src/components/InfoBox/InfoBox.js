import React from 'react';

import Location from '../../assets/images/location-icon.png';
import Time from '../../assets/images/time-icon.png';

import './InfoBox.scss';

const InfoBox = (props) => {
    const displaySubheader = () => {
        if (props.location != null && props.time != null && props.type === "event") {
            return (
                <div className="InfoBox-Subheader">
                    <div className="InfoBox-SubheaderBox">
                        <figure className="InfoBox-SubheaderFigure">
                            <img className="InfoBox-SubheaderImage" src={Location} alt="Location icon" />
                        </figure>
                        <span className="InfoBox-SubheaderBoxText">{props.location}</span>
                    </div>
                    <div className="InfoBox-SubheaderBox">
                        <figure className="InfoBox-SubheaderFigure">
                            <img className="InfoBox-SubheaderImage" src={Time} alt="Time icon" />
                        </figure>
                        <span className="InfoBox-SubheaderBoxText">{props.time}</span>
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="InfoBox">
                <div className="InfoBox-Header">
                <div className={"InfoBox-Icon " + (props.type === "speaker" ? "InfoBox-Icon_typeSpeaker" : "InfoBox-Icon_typeEvent")} />
                    <h2 className="InfoBox-Title">{props.title}</h2>
                </div>
                {displaySubheader()}
                <p className="InfoBox-About">{props.children}</p>
                <div className="InfoBox-Footer">
                    <a href="#" className="InfoBox-ButtonJoin">{props.type === "speaker" ? "Prati sudionika" : "Prijavi se na predavanje"}</a>
                </div>
            </div>
    );
}

export default InfoBox;
