'use client'
import { useState } from 'react';
import TodoLibraryExample from "@/components/ui/TodoLibraryExample";

export type TItemStatus = 'todo' | 'doing';

export type TItem = {
    id: string;
    status: TItemStatus;
    title: string;
};

export type TItems = {
    [key in TItemStatus]: TItem[];
};

export default function TodoPage() {
    const [items, setItems] = useState<TItems>({
        todo: [...Array(5)].map((_, i) => ({
            id: `${i}${i}${i}`,
            title: `Title ${i + 1}000`,
            status: 'todo',
        })),
        doing: [],
    });
    console.log(`items: ${JSON.stringify(items)}`)

    return (
        <>
            <TodoLibraryExample items={items} setItems={setItems} />
        </>
    );
}