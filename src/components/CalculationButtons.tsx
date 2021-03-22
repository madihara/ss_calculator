import React from "react";

interface Props {
    button: string;
}

const CalculationButtons: React.FC<Props> = ({ button }) => {
    return (
        <div className="bg-gray-200 flex h-14  m-1 justify-center items-center text-3xl text-gray-800 rounded-md">
            {button}
        </div>
    );
};

export default CalculationButtons;
