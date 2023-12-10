import {NextResponse} from "next/server";
import {getData} from "@/lib/fetch";

export async function GET() {
    const data = await getData();
    console.log(data)
    return NextResponse.json(
        data
    )
}