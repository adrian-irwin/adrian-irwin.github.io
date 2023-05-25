import React from "react";

const LinkComponent = ({ imgSrc, imgAlt, link }) => {
    return (
        <div className="flex-grow flex-shrink-0 px-3">
            <a href={link} target="_blank">
                <img src={imgSrc} className="h-14" alt={imgAlt} />
            </a>
        </div>
    );
};

export default LinkComponent;
