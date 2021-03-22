import React from "react";
import Display from "./Display";
import NumberButton from "./NumberButton";

const Calculator = () => {
    return (
        <>
            <div className="w-80 bg-gray-800 h-96 place-self-center">
                <Display />
                <div className="grid grid-cols-3">
                    <NumberButton number="1" />
                    <NumberButton number="2" />
                    <NumberButton number="3" />
                    <NumberButton number="4" />
                </div>
            </div>
        </>
    );
};

export default Calculator;
