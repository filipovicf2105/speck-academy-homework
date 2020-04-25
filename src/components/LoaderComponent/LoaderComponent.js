import React from 'react';
import Loader from 'react-loader-spinner';

import './LoaderComponent.scss';

const LoaderComponent = () => {
    return (
        <div className="loader">
            <Loader
                type="Oval"
                color="#F7B322"
                height={75}
                width={75}
            />
        </div>
    );
}

export default LoaderComponent;
