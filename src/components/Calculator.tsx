import React, { useState, useEffect } from "react";
import CalculationButtons from "./CalculationButtons";
import Display from "./Display";
import NumberButton from "./NumberButton";
import UtilityButtons from "./UtilityButtons";

const Calculator = () => {
    const [displayNumber, setDisplayNumber] = useState(0);
    console.log(displayNumber);

    const [prevValue, setPrevValue] = useState<number | null>(null);
    const [nextValue, setNextValue] = useState<number>(0);
    /* null or what?--I'm not sure yet--going with string for now? */
    const [operation, setOperation] = useState<string | null>(null);
    const [result, setResult] = useState<number>(0);

    return (
        <>
            <div className="w-72 bg-gray-800 h-96 place-self-center">
                <Display displayNumber={displayNumber} />
                <div className=" grid grid-cols-2 m-3">
                    <UtilityButtons
                        onClick={() => setDisplayNumber(0)}
                        utility="clear "
                    />
                    <UtilityButtons utility="backspace" />
                </div>
                <div className="h-3/6 grid grid-cols-4 ">
                    <div className="grid grid-cols-3 col-span-3  h-full mx-3">
                        <NumberButton
                            onClick={() => setDisplayNumber(1)}
                            number="1"
                        />
                        <NumberButton number="2" />
                        <NumberButton number="3" />
                        <NumberButton number="4" />
                        <NumberButton number="5" />
                        <NumberButton number="6" />
                        <NumberButton number="7" />
                        <NumberButton number="8" />
                        <NumberButton number="9" />
                        <NumberButton number="0" className="col-span-3" />
                    </div>
                    <div className="col-span-1 mr-3">
                        <CalculationButtons button="+" />
                        <CalculationButtons button="-" />
                        <CalculationButtons button="=" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Calculator;
