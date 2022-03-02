import {fetch} from "../src/index";

describe('sample run and not a test case', () => {
    it('invokes api and processes data', async () => {
        const data = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        console.log(data)
    })
})