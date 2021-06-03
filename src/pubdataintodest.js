var test=require('./test')

test.pubDataIntoDest().then(res => {
    console.log(res)
    process.exit(0)
})