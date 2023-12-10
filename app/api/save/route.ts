import {NextRequest, NextResponse} from "next/server";
import {writeData} from "@/lib/update";

export async function POST(request: NextRequest) {
    console.log(`request: ${request}`);
    const data = await request.json();
    await writeData(data);
    return NextResponse.json({message: 'Data saved successfully'});
}