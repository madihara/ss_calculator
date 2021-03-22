import React from "react";

interface Props {
    button: string;
}

const CalculationButtons = (props: Props) => {
    return (
        <div className="bg-gray-200 flex h-1/3 mb-2 justify-center items-center text-3xl text-gray-800 rounded-md">
            {props.button}
        </div>
    );
};

export default CalculationButtons;
