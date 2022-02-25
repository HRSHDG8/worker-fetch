import {Worker} from 'worker_threads'
// @ts-ignore
import {RequestInfo, RequestInit} from 'node-fetch'
import path from "path";

export const fetch = <T>(url: RequestInfo, init?: RequestInit) : Promise<T> => {
    return new Promise<T>((resolve, reject) => {

        // import workerExample.js script..
        const worker = new Worker(path.join(__dirname,'worker','worker.js'), {workerData: {url, init}, eval: false});
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`stopped with  ${code} exit code`));
        })
    })
}
