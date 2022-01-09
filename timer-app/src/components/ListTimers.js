import React from "react";
import { useSelector } from "react-redux";
// import { selectTimer } from "../actions";
import TimerView from "./TimerView";

export default function ListTimers() {
    // Need to get the timers array from the store. Pass this method a function that receives state and returns the piece of state you need.
    const timers = useSelector(state => state.timers);

    return (
        <div>
            {timers.map((timer, i) => {
                return (
                    <TimerView
                        key={`timer-${i}`}
                        timer={timer}
                        index={i}
                    />
                );
            })}
        </div>
    );
};