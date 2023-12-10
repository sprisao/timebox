//
import path from "node:path";
import * as fs from "fs";

export async function getData() {
    const filePath = path.join(process.cwd(), '/lib/data/data.json');
    const rawData = fs.readFileSync(filePath, 'utf-8');
    console.log(`rawData: ${rawData}`)
    return JSON.parse(rawData);
}
