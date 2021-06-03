var test=require('./test')

let time=parseInt(process.argv[2])
test.simulationOrder(time).then(res => {
  console.log("推送数据结束", res)
  // console.log(res)
  process.exit(0)

})