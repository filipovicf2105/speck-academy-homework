import React from 'react';

import './PageTitle.scss';

const PageTitle = (props) => {
    return (
        <h1 className="PageTitle">{props.children}</h1>
    );
}

export default PageTitle;
