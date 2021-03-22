import React from "react";

interface Props {
    utility: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
}

const UtilityButtons: React.FC<Props> = ({ utility, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-gray-200 m-0.5 text-gray-800 rounded-md h-full flex justify-center items-center"
        >
            {utility}
        </button>
    );
};

export default UtilityButtons;
