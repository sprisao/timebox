import {cn} from "@/lib/utils";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    placeHolder?: string
}

export default function BR_InputBox({className, ...props}: Props) {
    return (
        <input className={cn(
            "px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 focus:outline-none",
            className
        )}
               placeholder={props.placeHolder}
               {...props}/>
    )
}