const {workerData, parentPort, threadId, isMainThread} = require('worker_threads')
const {url, init} = workerData
process.env.ENABLE_LOG ? console.log(`Running on main thread :: ${isMainThread} , threadId :: ${threadId}` ): ''
import('node-fetch')
    .then((fetch) => {
        fetch.default(url, init)
            .then(res => res.json())
            .then(res => parentPort.postMessage(res))
    })
