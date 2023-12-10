import {Button} from "@/components/ui/button";
import BR_InputBox from "@/components/ui/inputBox_template";
import { HiHeart, HiOutlineBookmark } from "react-icons/hi2";

export default function Home() {
    return (
        <>
            <h1>
                Hello Bruce
            </h1>
            <h2>Classname Customizing Utils</h2>
            <BR_InputBox placeHolder="hi"/>
            <h2>Shadcn_Button</h2>
            <Button>
                <a>Shadcn</a>
            </Button>
            <h2>React Icons</h2>
            <HiHeart />
            <HiOutlineBookmark />
        </>

    )
}
