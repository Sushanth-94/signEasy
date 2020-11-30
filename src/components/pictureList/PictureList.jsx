import React from "react";
import "./PictureList.css";

const PictureList = ({
  id,
  url,
  desc,
  showZoom,
  zoomHandler,
  zoomInImg,
  imgStyle,
}) => {
  return (
    <div className="imgBorder" onClick={zoomHandler}>
      <img
        className={showZoom === id && imgStyle === "imgZoom" ? imgStyle : ""}
        src={url.regular}
        alt={desc}
      />
      {showZoom === id && (
        <i onClick={zoomInImg} className="fa fa-search icon"></i>
      )}
    </div>
  );
};

export default PictureList;
