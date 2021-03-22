import React from "react";

interface Props {
    displayNumber: number;
}
const Display = (props: Props) => {
    return (
        <div className="m-3 bg-gray-200 rounded-lg flex justify-end items-end p-2.5 text-gray-800  h-24">
            <p className="text-4xl">{props.displayNumber}</p>
        </div>
    );
};

export default Display;
