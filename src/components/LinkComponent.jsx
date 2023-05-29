import React from "react";

const LinkComponent = ({ imgSrc, imgAlt, link }) => {
    return (
        <div className="flex-shrink-0 p-3">
            <a href={link} target="_blank">
                <img src={imgSrc} className="h-14" alt={imgAlt} />
            </a>
        </div>
    );
};

export default LinkComponent;
