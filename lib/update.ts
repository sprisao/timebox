import path from "node:path";
import * as fs from "fs";
import {DataType} from "@/lib/type";


export async function writeData(data: DataType) {
    console.log(`data: ${data}`);
    const filePath = path.join(process.cwd(), '/lib/data/data.json');
    const rawData = JSON.stringify(data);
    try {
        fs.writeFileSync(filePath, rawData);
    } catch (error) {
        console.error('Error writing data to file:', error);
        throw error;
    }
    return rawData;
}