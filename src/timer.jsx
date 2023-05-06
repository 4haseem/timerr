import React, {useState, useEffect} from "react";
import styled from "styled-components";

export default function Timer() {

    const [time, setTime] = useState(0);

    const [count, setCount] = useState(false);

    function startStop() {
        setCount(!count);
    }

    function reset() {
        setTime(0);
    }

    useEffect(() => {

        let gapId = (count) ? setInterval(() => {
            setTime((startTime) => startTime + 10);
        }, 10) :
        (!count) ? clearInterval(count) : "";

        return () => clearInterval(gapId);
    }, [count]);

    return(
        <>
        <div>
            <span>
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
        </div>

        <div>
            <StartStop onClick={startStop}>
                {count ? "stop" : "start"}
            </StartStop>
                &nbsp;
            <Reset onClick={reset}>reset</Reset>
        </div>
        </>
    );
}

const StartStop = styled.button`
    all: unset;
    padding: 3px;
    border-radius: 3px;
    font-size: 20px;
    background: green;
    outline: none;
`;
    
const Reset = styled.button`
    all: unset;
    padding: 3px;
    border-radius: 3px;
    font-size: 20px;
    background: red;
    outline: none;
`;