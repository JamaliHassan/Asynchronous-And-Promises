"use strict";
// Question # 1
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
function greeting() {
    return __awaiter(this, void 0, void 0, function* () {
        setTimeout(() => {
            console.log(`Hello World`);
        }, 2000);
    });
}
// greeting()
// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
let simulateTask = () => {
    console.log('Task started');
    setTimeout(() => {
        console.log('Task Completed');
    }, 1000);
};
// simulateTask()
// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
//  "Data fetched successfully!" after a delay of 1 second.
let fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        resolve('"Data fetched successfully!"');
    });
    return setTimeout(() => {
        promise.then(function (response) {
            console.log(response);
        });
    }, 1000);
};
// fetchData()
// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
function fetchWithError() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            if (Math.random() <= 0.5) {
                resolve(' "Data fetched successfully!"');
            }
            else {
                reject(' "Data fetch failed!"');
            }
        }, 1000);
    });
    return promise;
}
// fetchWithError().then((response)=> {
//     console.log(response)
// }).catch((error:string)=> {
//     console.log(error)
// })
// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.
const fetchData1 = () => {
    return new Promise((resolve, reject) => {
        resolve('data fetched successfully ');
    });
};
const processData = () => {
    return new Promise((resolve, reject) => {
        reject('data is being processed');
    });
};
// async function executeSequentially() {
//     try {
//         let dataFetched = await fetchData1();
//         console.log(dataFetched);
//         let dataProcess = await processData();
//         console.log(dataProcess);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('All Data collected successfully');
//     }
// }
// executeSequentially();
function executeSequentially() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let dataFetched = yield fetchData1();
            console.log(dataFetched);
            let dataProcess = yield processData();
            console.log(dataProcess);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            console.log('All Data collected successfully');
        }
    });
}
executeSequentially();
