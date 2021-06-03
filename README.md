# mysql
daily collection for mysql

###### 数据库信息
```
host: 'localhost',
port: '3306',
database: 'test00',
user: 'root',
password: 'mysqlgmkj',
```
###### 创建表
```
 createTable().then(res=>{
   console.log(res)
 })
```
######  插入数据到源表
```
 insertData(n).then(res => {
     console.log(res)
 })
 
 n 代表插入的数据数量
```
######  初始化目标表
```
 initDest().then(res => {
     console.log("update success", res)
     process.exit(0)
 })
```
###### 一定时间内 不间断 推送数据到源表
```
 simulationOrder(time).then(res => {
     console.log(res)
 })
 
 time 5 * 60 * 1000 //毫秒数
```
###### 增量数据填充到目标表
```
 pubDataIntoDest().then(res => {
     console.log(res)
     process.exit(0)
 })
```
###### 随机更新源表
```
 updateOriByRandom().then(res=>{
     console.log(res)
 })
```
###### 处理源表变化的数据 sync into 目标表
```
 updateDataIntoDest().then(res => {
     console.log(res)
 })
```

### 注意

src/test.js 文件下 包含上述的各种方法 执行某个方法只需要解除注释就可以