# mysql
daily collection for mysql


# 创建表
 createTable().then(res=>{
   console.log(res)
 })

#  插入数据到源表
 insertData(100000).then(res => {
     console.log(res)
 })

#  初始化目标表
 initDest().then(res => {
     console.log("update success", res)
     process.exit(0)
 })

# 一定时间内 不间断 推送数据到源表
 simulationOrder(5 * 60 * 1000).then(res => {
     console.log(res)
 })


# 增量数据填充到目标表

 pubDataIntoDest().then(res => {
     console.log(res)
     process.exit(0)
 })


# 随机更新源表
 updateOriByRandom().then(res=>{
     console.log(res)
 })


# 处理源表变化的数据 sync into 目标表
 updateDataIntoDest().then(res => {
     console.log(res)
 })
