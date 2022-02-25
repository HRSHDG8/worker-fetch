const {workerData, parentPort, threadId} = require('worker_threads')
const {url, init} = workerData
import('node-fetch')
    .then((fetch) => {
        fetch.default(url, init)
            .then(res => res.json())
            .then(res => parentPort.postMessage(res))
    })
