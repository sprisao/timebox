'use client'
import React, { useState, useEffect } from "react";
import {DataType} from "@/lib/type";

interface TimeBoxProps {
    data: DataType
}

export default function TimeBox({ data }: TimeBoxProps) {
    const [wakeUpTime, setWakeUpTime] = useState(6);
    const [sleepTime, setSleepTime] = useState(22);
    const [thisData, setThisData] = useState(data);

    const handleWakeUpTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWakeUpTime(Number(event.target.value));
    };

    const handleSleepTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSleepTime(Number(event.target.value));
    };

const handleInputChange = (index: number, field: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = {...thisData};
    let timeBoxItem = newData.timebox.find(item => item.time === `${index}:00`);

    if (!timeBoxItem) {
        timeBoxItem = {
            time: `${index}:00`,
            firstHalf: "",
            secondHalf: ""
        };
        newData.timebox.push(timeBoxItem);
    }

    (timeBoxItem as any)[field] = event.target.value;
    setThisData(newData);
};
    const handleSave = async () => {
        console.log(`timeBoxData: ${JSON.stringify(thisData)}`)
        await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(thisData)
        });
    };

    const generateTableRows = () => {
        let rows = [];
        for(let i = wakeUpTime; i < sleepTime; i++) {
            const timeBoxItem = thisData.timebox.find(item => item.time === `${i}:00`);
            rows.push(
                <tr key={i}>
                    <td>{i}:00</td>
                    <td>
                        <input
                            type="text"
                            value={timeBoxItem?.firstHalf || ""}
                            onChange={event => handleInputChange(i, "firstHalf", event)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={timeBoxItem?.secondHalf || ""}
                            onChange={event => handleInputChange(i, "secondHalf", event)}
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
            <button onClick={handleSave}>저장</button>
        </div>
    )
}