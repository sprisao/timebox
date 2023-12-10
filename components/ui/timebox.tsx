'use client'
import React, { useState, useEffect } from "react";

export default function TimeBox({data}) {
    const [wakeUpTime, setWakeUpTime] = useState(6);
    const [sleepTime, setSleepTime] = useState(22);
    const [timeBoxData, setTimeBoxData] = useState(data)

    const handleWakeUpTimeChange = (event) => {
        setWakeUpTime(event.target.value);
    };

    const handleSleepTimeChange = (event) => {
        setSleepTime(event.target.value);
    };

    const handleInputChange = (hour, task, event) => {
        setTimeBoxData(prevData => ({
            ...prevData,
            [hour]: { ...prevData[hour], [task]: event.target.value }
        }));
    };

    const generateTableRows = () => {
        let rows = [];
        for(let i = wakeUpTime; i < sleepTime; i++) {
            rows.push(
                <tr key={i}>
                    <td>{i}:00</td>
                    <td>
                        <input
                            type="text"
                            value={timeBoxData[i]?.task1 || ""}
                            onChange={event => handleInputChange(i, "task1", event)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={timeBoxData[i]?.task2 || ""}
                            onChange={event => handleInputChange(i, "task2", event)}
                        />
                    </td>
                </tr>
            );
        }
        return rows;
    };

    return (
        <div className="flex flex-col bg-amber-500">
            <h1>TimeBox</h1>
            <div className="flex flex-row">
                <label>
                    기상시간:
                    <input placeholder="기상시간: " type="number" value={wakeUpTime}
                           onChange={handleWakeUpTimeChange}/>
                </label>
                <label>
                    취침예정 시간:
                    <input type="number" value={sleepTime} onChange={handleSleepTimeChange}/>
                </label>
            </div>
            <table className="">
                <thead>
                <tr className="border-b">
                    <th>Time</th>
                    <th>30</th>
                    <th>59</th>
                </tr>
                </thead>
                <tbody>
                {generateTableRows()}
                </tbody>
            </table>
        </div>
    )
}