'use client'
import {DataType} from "@/lib/type";
import React, {useState} from "react";

interface BrainDumpProps {
    data: DataType
}

export default function BrainDump({data}: BrainDumpProps) {
    const [thisData, setThisData] = useState(data)
    const [content, setContent] = useState(thisData.brainDump)

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
        setThisData({...thisData, brainDump: event.target.value});
        handleSave().then(r =>
            console.log(`handleSave: ${r}`)
        );
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

    return (
        <div className="flex flex-col bg-pink-300">
            <h1>Brain Dump</h1>
            <div className="">
                <textarea
                    className="w-full h-96"
                    placeholder="Brain Dump"
                    value={content}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    )
}