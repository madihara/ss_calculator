import React from "react";

interface Props {
    number: string;
}

const NumberButton = (props: Props) => {
    return <div className="bg-yellow-500 m-0.5 rounded-md">{props.number}</div>;
};

export default NumberButton;
