import React, { MouseEventHandler } from "react";

interface Props {
    number: string;
    onClick?: (event: MouseEvent) => void;
    className?: string;
}

const NumberButton = (props: Props) => {
    return (
        <div className="bg-yellow-500 m-0.5 h-5/6 flex justify-center text-3xl items-center rounded-md">
            {props.number}
        </div>
    );
};

export default NumberButton;
