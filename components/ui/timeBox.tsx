'use client'
import {DataType} from "@/lib/type";
import {useEffect, useState} from "react";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";
import {$} from "@/utils";

interface TimeBoxProps {
    data: DataType
}

export type TimeBoxStatus = 'firstHalf' | 'secondHalf';

export type TItems = {
    [key in TimeBoxStatus]: {
        task: string
    }[]
};


export default function TimeBox({data}: TimeBoxProps) {
    const [wakeUpTime, setWakeUpTime] = useState(6);
    const [sleepTime, setSleepTime] = useState(22);
    const [thisData, setThisData] = useState(data)
    const [items, setItems] = useState<TItems>(
        {
            firstHalf: thisData.timebox.firstHalf,
            secondHalf: thisData.timebox.secondHalf
        }
    )

    const handleWakeUpTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWakeUpTime(Number(event.target.value));
    };

    const handleSleepTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSleepTime(Number(event.target.value));
    };

    // --- requestAnimationFrame 초기화
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));

        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);

    if (!enabled) {
        return null;
    }

    // --- requestAnimationFrame 초기화 END

    const onDragEnd = ({source, destination}: DropResult) => {
        if (!destination) return;

        const scourceKey = source.droppableId as TimeBoxStatus;
        const destinationKey = destination.droppableId as TimeBoxStatus;

        const _items = JSON.parse(JSON.stringify(items)) as typeof items;
        const [targetItem] = _items[scourceKey].splice(source.index, 1);
        _items[destinationKey].splice(destination.index, 0, targetItem);
        setItems(_items);
    }

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
        <div className="bg-amber-200">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex">
                    <div>
                        <span>Time</span>
                        {/*{thisData.timebox.map((timeData, index) => (*/}
                        {/*    <div key={index}>*/}
                        {/*        <span>{timeData.time}</span>*/}
                        {/*    </div>*/}
                        {/*))}*/}
                    </div>

                    <div className="grid grid-cols-2">
                        {Object.keys(items).map((key) => (
                            <Droppable key={key} droppableId={key}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={$("flex flex-col gap-3 rounded-xl bg-gray-200 p-4 ring-1 ring-gray-300 transition-shadow dark:bg-[#000000]",
                                            snapshot.isDraggingOver ? 'shadow-lg' : 'shadow',)}

                                    >
                                        <span>{key.toLocaleUpperCase()}</span>
                                        {items[key as TimeBoxStatus].map((item, index) => (
                                            <Draggable draggableId={index + item.task} index={index}
                                                       key={index + item.task}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className="bg-blue-200"
                                                    >
                                                        <span>{index}</span>
                                                        <span>{item.task}</span>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>))
                        }
                    </div>
                </div>

            </DragDropContext>
        </div>
    )

}