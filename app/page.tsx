import TimeBox from "@/components/ui/timeBox";
import {getData} from "@/lib/fetch";
import BrainDump from "@/components/ui/brainDump";
import QuoteApp from "@/components/ui/example";
import TodoPage from "@/components/ui/test";

export default async function Home() {
    /*today's date in korea*/
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const week = today.getDay();
    const weekList = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = weekList[week];
    const date = `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;

    const data = await getData();

    return (
        <div className="text-2xl">
            <div className="text-center">
                <div>{date}</div>
            </div>
            <div className="grid grid-cols-2 gap-1">
                <div className="flex flex-col bg-amber-200">
                    <BrainDump data={data}/>
                    <div className="bg-purple-200">
                        <h1>Top Priority</h1>
                        <div>
                            <div>Task 1</div>
                            <div>Task 2</div>
                            <div>Task 3</div>
                        </div>
                    </div>
                </div>
                <div>
                    <TimeBox data={data}/>
                </div>
                <TodoPage/>
            </div>
        </div>
    )
}