import * as request from 'request'

let res = request('https://us-central1-damien-s.cloudfunctions.net/starterMsg')

test('proper response from live function', () => {
    res.on('response', (r) => {
        expect(r.statusCode).toBe(200)
    })
})