import React from "react";
import Display from "./Display";
import NumberButton from "./NumberButton";
import UtilityButtons from "./UtilityButtons";

const Calculator = () => {
    return (
        <>
            <div className="w-80 bg-gray-800 h-96 place-self-center">
                <Display />
                <div className=" grid grid-cols-2 m-3">
                    <UtilityButtons utility="clear" />
                    <UtilityButtons utility="backspace" />
                </div>
                <div className="h-3/6 ">
                    <div className="grid grid-cols-3 w-2/3 h-full m-3 ">
                        <NumberButton number="1" />
                        <NumberButton number="2" />
                        <NumberButton number="3" />
                        <NumberButton number="4" />
                        <NumberButton number="5" />
                        <NumberButton number="6" />
                        <NumberButton number="7" />
                        <NumberButton number="8" />
                        <NumberButton number="9" />
                        <NumberButton number="0" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Calculator;
