# Worker Fetch for Node

> make memory intensive api calls on a separate thread

[![NPM](https://img.shields.io/npm/v/worker-fetch.svg)](https://www.npmjs.com/package/worker-fetch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install worker-fetch

yarn add worker-fetch
```

# Usage

```ts
import { fetch } from 'worker-fetch'

async const api = ()=>{
    const data = await fetch('url')
    console.log(data)
}

api()
    .catch(err=>console.error(err))

```

note fetch() takes in same parameters as node-fetch

## License

MIT © [HRSHDG8](https://github.com/HRSHDG8)
