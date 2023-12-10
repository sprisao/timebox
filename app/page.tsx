import {Button} from "@/components/ui/button";
import BR_InputBox from "@/components/ui/inputBox_template";

export default function Home() {
    return (
        <>
            <h1>
                Hello Bruce
            </h1>
            <BR_InputBox placeHolder="hi"/>
            <Button>
                <a>Shadcn</a>
            </Button>
        </>
    )
}
