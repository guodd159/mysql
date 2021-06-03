var test=require('./test')

test.initDest().then(res => {
    console.log("init 目标表 success", res)
    process.exit(0)
})