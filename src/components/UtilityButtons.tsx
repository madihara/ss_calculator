import React from "react";

interface Props {
    utility: string;
}

const UtilityButtons = (props: Props) => {
    return (
        <div className="bg-gray-200 m-0.5 text-gray-800 rounded-md h-full flex justify-center items-center">
            {props.utility}
        </div>
    );
};

export default UtilityButtons;
