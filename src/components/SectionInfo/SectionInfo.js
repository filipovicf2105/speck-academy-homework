import React from 'react';

import './SectionInfo.scss';

const SectionInfo = (props) => {
    return (
        <section className="SectionInfo">{props.children}</section>
    );
}

export default SectionInfo;
