import React from 'react';
import './PictureList.css';

const PictureList = ({url, desc}) => {
    return(
        <div className="imgBorder">
            <img src={url.regular} alt={desc} />
        </div>
    )
}

export default PictureList;