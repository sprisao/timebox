// {
//     "date": "2023-12-10 00:00:00",
//     "brainDump": "I'm a brain dump",
//     "topPriorities": {
//     "priority1": "I'm a top priority",
//         "priority2": "I'm a top priority",
//         "priority3": "I'm a top priority"
// },
//     "timebox": [
//     {
//         "time": "5:00",
//         "firstHalf": "I'm a first half",
//         "secondHalf": "I'm a second half"
//     },
//     {
//         "time": "6:00",
//         "firstHalf": "I'm a first half",
//         "secondHalf": "I'm a second half"
//     },
//     {
//         "time": "7:00",
//         "firstHalf": "I'm a first half",
//         "secondHalf": "I'm a second half"
//     },
//     {
//         "time": "8:00",
//         "firstHalf": "I'm a first half",
//         "secondHalf": "I'm a second half"
//     },
//     {
//         "time": "9:00",
//         "firstHalf": "I'm a first half",
//         "secondHalf": "I'm a second half"
//     },
//     {
//         "time": "10:00",
//         "firstHalf": "I'm a first half",
//         "secondHalf": "I'm a second half"
//     },
//     {
//         "time": "11:00",
//         "firstHalf": "I'm a first half",
//         "secondHalf": "I'm a second half"
//     },
//     {
//         "time": "12:00",
//         "firstHalf": "I'm a first half",
//         "secondHalf": "I'm a second half"
//     },
//     {
//         "time": "13:00",
//         "firstHalf": "I'm a first half",
//         "secondHalf": "I'm a second half"
//     },
//     {
//         "time": "14:00",
//         "firstHalf": "I'm a first half",
//         "secondHalf": "I'm a second half"
//     },
//     {
//         "time": "15:00",
//         "firstHalf": "I'm a first half",
//         "secondHalf": "I'm a second half"
//     },
//     {
//         "time": "16:00",
//         "firstHalf": "I'm a first half",
//         "secondHalf": "I'm a second half"
//     }
// ]
// }

export type DataType = {
    date: string;
    brainDump: string;
    topPriorities: {
        priority1: string;
        priority2: string;
        priority3: string;
    };
    timebox: {
        startTime: number;
        bedTime: number;
        firstHalf: {
            task: string
        }[];
        secondHalf: {
            task: string;
        }[];
    };
}