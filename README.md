# mysql
daily collection for mysql


# 创建表//创建表//创建表//创建表//创建表//创建表//创建表//创建表//创建表//创建表//创建表
// createTable().then(res=>{
//   console.log(res)
// })

#  插入数据到ori// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据
// insertData(100000).then(res => {
//     console.log(res)
// })

#  初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表
// initDest().then(res => {
//     console.log("update success", res)
//     process.exit(0)
// })

# 一定时间内 不间断 推送数据到数据库//一定时间内 不间断 推送数据到数据库//一定时间内 不间断 推送数据到数据库//一定时间内 不间断 推送数据到数据库
// simulationOrder(5 * 60 * 1000).then(res => {
//     console.log(res)
// })


# 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表

// pubDataIntoDest().then(res => {
//     console.log(res)
//     process.exit(0)
// })


# 随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori
// updateOriByRandom().then(res=>{
//     console.log(res)
// })


# 处理ori变化的数据 sync into dest//////处理ori变化的数据 sync into dest//////处理ori变化的数据 sync into dest//////处理ori变化的数据 sync into dest
// updateDataIntoDest().then(res => {
//     console.log(res)
// })
