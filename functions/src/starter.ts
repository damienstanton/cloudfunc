import * as functions from 'firebase-functions'

export let starterMsg = functions.https.onRequest((req, res) => {
    res.send('🔥  FIREBASE STARTER OK')
})