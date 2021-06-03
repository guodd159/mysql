# mysql
daily collection for mysql

###### 在本地创建数据库 详情如下

###### 数据库信息
```
host: 'localhost',
port: '3306',
database: 'test00',
user: 'root',
password: 'mysqlgmkj',
```


### 操作

### npm install

```
1 创建表

node src/createtable.js 
```

```
2 插入固定数量的数据到源表

node src/insertdata.js num // num 插入的数据数量
```

```
3 初始化目标表

node src/initdest.js
```


```
4 一定时间内 推送随机数据到源表

node src/simulationorder.js time  // time 毫秒数
```

```
5 增量数据填充到目标表

node src/pubdataintodest.js 
```

```
6 随机更新源表

node src/updateoribyrandom.js 
```


```
7 处理源表变化的数据 sync into 目标表

node src/updatedataintodest.js 
```
