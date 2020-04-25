import React from 'react';

import {
    CardAnchor,
    CardFigure,
    CardImage,
    CardTitle
} from './CardStyle';

const Card = (props) => {
    return (
        <CardAnchor href="#">
            <CardFigure>
                <CardImage
                    src={props.image}
                    alt={props.alt}
                />
            </CardFigure>
            <CardTitle>{props.children}</CardTitle>
        </CardAnchor>
    );
}

export default Card;
