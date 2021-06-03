var test=require('./test')

test.createTable().then(res=>{
  console.log("创建表成功",res)
  process.exit(0)
})