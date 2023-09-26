import React from "react";
import pdf from "../assets/cv.pdf";

export default function CV() {
    return (
        <div className="h-full">
            <object
                data={pdf}
                type="application/pdf"
                width="100%"
                height="100%"
            ></object>
        </div>
    );
};
