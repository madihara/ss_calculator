import React from "react";

interface Props {
    number: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
    className?: string;
}

const NumberButton: React.FC<Props> = ({ onClick, number, className }) => {
    return (
        <button
            onClick={onClick}
            className={`${className} bg-yellow-500 m-0.5 h-5/6 flex justify-center text-3xl items-center rounded-md`}
        >
            {number}
        </button>
    );
};

export default NumberButton;
