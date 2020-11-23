import React from 'react';

const PictureList = ({url, desc}) => {
    return(
        <div>
            <img src={url.regular} alt={desc} />
        </div>
    )
}

export default PictureList;