var test=require('./test')

let num=parseInt(process.argv[2])
test.insertData(num).then(res => {
  console.log("insert success",res)
  process.exit(0)
})