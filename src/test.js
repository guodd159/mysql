var mysql = require('mysql');
var moment = require('moment')

// mysql=>
//     show tables;
// +------------------------------------------------------+
// | Tables_in_mysql                                      |
// +------------------------------------------------------+
// | columns_priv                                         |
// | component                                            |
// | db                                                   |
// | default_roles                                        |
// | engine_cost                                          |
// | func                                                 |
// | general_log                                          |
// | global_grants                                        |
// | gtid_executed                                        |
// | help_category                                        |
// | help_keyword                                         |
// | help_relation                                        |
// | help_topic                                           |
// | innodb_index_stats                                   |
// | innodb_table_stats                                   |
// | password_history                                     |
// | plugin                                               |
// | procs_priv                                           |
// | proxies_priv                                         |
// | replication_asynchronous_connection_failover         |
// | replication_asynchronous_connection_failover_managed |
// | role_edges                                           |
// | server_cost                                          |
// | servers                                              |
// | slave_master_info                                    |
// | slave_relay_log_info                                 |
// | slave_worker_info                                    |
// | slow_log                                             |
// | sync_copy                                            |
// | tables_priv                                          |
// | time_zone                                            |
// | time_zone_leap_second                                |
// | time_zone_name                                       |
// | time_zone_transition                                 |
// | time_zone_transition_type                            |
// | user                                                 |
// +------------------------------------------------------+
// alter user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysqlgmkj';

// max_allowed_packet
// show variables like 'max_allowed_packet'
// set global max_allowed_packet=512*1024*1024
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'test00',
    user: 'root',
    password: 'mysqlgmkj',
    multipleStatements: true
});
// var pool  = mysql.createPool({
//     connectionLimit : 10,
//     host            : 'example.org',
//     user            : 'bob',
//     password        : 'secret',
//     database        : 'my_db'
// });
//
// pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });
// pool.getConnection(function(err, connection) {
//     if (err) throw err; // not connected!
//
//     // Use the connection
//     connection.query('SELECT something FROM sometable', function (error, results, fields) {
//         // When done with the connection, release it.
//         connection.release();
//
//         // Handle error after the release.
//         if (error) throw error;
//
//         // Don't use the connection here, it has been returned to the pool.
//     });
// });

// mysql.escape()
// mysql.format()


function generateRandomNum(n) {
    let code = "";
    for (var i = 1; i <= n; i++) {
        const num = Math.floor(Math.random() * 10);
        code += num;
    }
    return code
}

function generateUniqueNum(curr_time) {
    return Number(curr_time + "" + generateRandomNum(6))
}

// console.log(generateUniqueNum())
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    // console.log('connected as id ' + connection.threadId, JSON.stringify(connection.config));
});

let jsonData = `{"trade_fullinfo_get_response": {"trade": {"num": 1, "sid": "1604615437261148287", "tid": 1604615437261148287, "type": "fixed", "is_3D": false, "is_wt": false, "price": "20.00", "title": "d[s66595438]", "orders": {"order": [{"cid": 50023728, "num": 1, "oid": 1604615437261148287, "price": "20.00", "title": "派样魔方教程商品", "status": "TRADE_CLOSED_BY_TAOBAO", "num_iid": 635433327168, "payment": "50.00", "end_time": "2021-03-02 10:30:01", "pic_path": "https://img.alicdn.com/bao/uploaded/i1/555657275/O1CN01zrQve623c01SJdsS8_!!555657275.jpg", "total_fee": "20.00", "adjust_fee": "0.00", "buyer_rate": false, "is_daixiao": false, "order_from": "WAP,WAP", "is_oversold": false, "seller_rate": false, "seller_type": "C", "discount_fee": "0.00", "snapshot_url": "t:1604615437261148287_1", "customization": {"groupId":14703}, "refund_status": "NO_REFUND"}]}, "pcc_af": 0, "status": "TRADE_CLOSED_BY_TAOBAO", "cod_fee": "0.00", "created": "2021-03-01 10:30:14", "is_gift": false, "num_iid": 635433327168, "payment": "50.00", "q_r_pay": false, "tid_str": "1604615437261148287", "end_time": "2021-03-02 10:30:01", "modified": "2021-03-02 10:30:01", "pic_path": "https://img.alicdn.com/bao/uploaded/i1/555657275/O1CN01zrQve623c01SJdsS8_!!555657275.jpg", "post_fee": "30.00", "alipay_no": "2021030122001198121409211929", "is_lgtype": false, "point_fee": 0, "total_fee": "20.00", "adjust_fee": "0.00", "buyer_area": "重庆重庆电信", "buyer_nick": "relax313", "buyer_rate": false, "cod_status": "NEW_CREATED", "coupon_fee": 0, "is_daixiao": false, "is_sh_ship": false, "trade_from": "WAP,WAP", "buyer_email": "mima*****@163.com", "new_presell": false, "seller_flag": 0, "seller_name": "胡涛", "seller_nick": "白食王", "seller_rate": false, "alipay_point": 0, "discount_fee": "0.00", "has_post_fee": true, "is_force_wlb": false, "receiver_zip": "401120", "seller_email": "814078490@qq.com", "seller_phone": "--", "service_tags": {"logistics_tag": [{"order_id": "1604615437261148287", "logistic_service_tag_list": {"logistic_service_tag": [{"service_tag": "origAreaId=500112;consignDate=48", "service_type": "TB_CONSIGN_DATE"}, {"service_tag": "lgType=-4", "service_type": "FAST"}]}}, {"order_id": "1604615437261148287", "logistic_service_tag_list": {"logistic_service_tag": [{"service_tag": "consignDate=48", "service_type": "TB_CONSIGN_DATE"}]}}]}, "service_type": "", "snapshot_url": "t:1604615437261148287_1", "buyer_cod_fee": "0.00", "is_brand_sale": false, "receiver_city": "重庆市", "receiver_name": "张**", "receiver_town": "龙溪街道", "seller_mobile": "15223386057", "shipping_type": "express", "commission_fee": "0.00", "real_point_fee": 0, "receiver_state": "重庆", "seller_cod_fee": "0.00", "buyer_alipay_no": "***a*****@163.com", "is_part_consign": false, "receiver_mobile": "*******5552", "seller_can_rate": false, "consign_interval": 48, "nr_shop_guide_id": "", "received_payment": "0.00", "receiver_address": "龙*街道花**路**号黄金堡高级住宅区**-*-*", "receiver_country": "", "seller_alipay_no": "***aoyouxiang@aliyun.com", "receiver_district": "渝北区", "nr_shop_guide_name": "", "platform_subsidy_fee": "0.00", "available_confirm_fee": "20.00", "buyer_obtain_point_fee": 0}}}`

// let data = {
//     tid: generateUniqueNum(),
//     status: 'TRADE_CLOSED_BY_TAOBAO',
//     type: 'fixed',
//     seller_nick: '白石王',
//     buyer_nick: `relax${generateUniqueNum()}`,
//     created: `${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
//     modified: `${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
//     jdp_hashcode: `-${generateRandomNum(9)}`,
//     jdp_response: `${jsonData}`,
//     jdp_created: `${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
//     jdp_modified: `${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,

//
// }
// let data = `( ${generateUniqueNum()}, 'TRADE_CLOSED_BY_TAOBAO', 'fixed', '白石王', ` + `'relax${generateUniqueNum()}', '${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}', '${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}', '-${generateRandomNum(9)}', '${jsonData}','${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}', '${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}')`
function genData(curr_time) {
    return `( ${generateUniqueNum(curr_time)}, 'TRADE_CLOSED_BY_TAOBAO', 'fixed', '白石王', ` + `'relax${generateUniqueNum(curr_time)}', '${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}', '${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}', '-${generateRandomNum(9)}', '${jsonData}','${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}', '${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}')`

}


async function func1(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Date.now())
        }, n)
    })
}

let j = 0

async function generateData(data, data_00, n) {
    for (let i = 1; i <= n - 1; i++) {
        let curr_time = await func1(2)
        console.log(curr_time)
        console.log(i)
        data = data + "," + genData(curr_time)
    }
    return data
}


async function conQuery(sql, values) {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result, fields) => {
            if (err)
                reject(err)
            else
                resolve(result)
        })
    })
}

let ori=`SET NAMES utf8mb4; SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS \`sync_copy\`;
CREATE TABLE \`sync_copy\`  (
  \`tid\` bigint(20) NOT NULL,
  \`status\` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  \`type\` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  \`seller_nick\` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  \`buyer_nick\` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  \`created\` datetime NULL DEFAULT NULL,
  \`modified\` datetime NULL DEFAULT NULL,
  \`jdp_hashcode\` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  \`jdp_response\` json NULL,
  \`jdp_created\` datetime NULL DEFAULT NULL,
  \`jdp_modified\` datetime NULL DEFAULT NULL,
  PRIMARY KEY (\`tid\`) USING BTREE,
  INDEX \`ind_jdp_tb_trade_jdp_modified\`(\`jdp_modified\`) USING BTREE,
  INDEX \`ind_jdp_tb_trade_modified\`(\`modified\`) USING BTREE,
  INDEX \`ind_buyer_nick\`(\`buyer_nick\`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;
SET FOREIGN_KEY_CHECKS = 1;`

let dest=`SET NAMES utf8mb4; SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS \`sync_copy_00\`;
CREATE TABLE \`sync_copy_00\`  (
  \`tid\` bigint(20) NOT NULL,
  \`status\` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  \`type\` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  \`seller_nick\` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  \`buyer_nick\` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  \`created\` datetime NULL DEFAULT NULL,
  \`modified\` datetime NULL DEFAULT NULL,
  \`jdp_hashcode\` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  \`jdp_response\` json NULL,
  \`jdp_created\` datetime NULL DEFAULT NULL,
  \`jdp_modified\` datetime NULL DEFAULT NULL,
  \`customization\` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  \`customization_json\` json NULL,
  PRIMARY KEY (\`tid\`) USING BTREE,
  INDEX \`ind_jdp_tb_trade_jdp_modified\`(\`jdp_modified\`) USING BTREE,
  INDEX \`ind_jdp_tb_trade_modified\`(\`modified\`) USING BTREE,
  INDEX \`ind_buyer_nick\`(\`buyer_nick\`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;
SET FOREIGN_KEY_CHECKS = 1;`
async function createTable() {
  await conQuery(ori)
  await conQuery(dest)
  return true
}
async function insertData(n) {
    let data = genData(Date.now() - 1)
    let genDataRes = await generateData(data, 0, n)
    let insertRes = await conQuery('insert into sync_copy values ' + genDataRes)
    return insertRes
}

// create table

// conQuery()

// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据
// insertData(100000).then(res => {
//     console.log(res)
// })

async function paraInsert(n) {
    let arrPromise = []
    for (let i = 0; i < n; i++) {
        let curr_time = await func1(2)
        // console.log(curr_time)
        arrPromise.push(await conQuery('insert into sync_copy values ' + genData(curr_time)))
    }
    return Promise.all(arrPromise)
}

// paraInsert(100).then(res => {
//     console.log(res)
// })


let start_time = Date.now()

// 一定时间内 不间断 推送数据到ori// 推送数据到ori// 推送数据到ori// 推送数据到ori// 推送数据到ori// 推送数据到ori// 推送数据到ori// 推送数据到ori

async function simulationOrder(time = 5 * 60 * 1000) {
    let curr_time
    let i = 0
    let randomForOrder
    let orderSum = 0
    do {
        let delay_curr = await func1(1000)
        randomForOrder = parseInt(Math.random(0, 1) * 20 + 1000)
        console.log(delay_curr, randomForOrder)
        orderSum += randomForOrder
        await paraInsert(randomForOrder)
        i++
        curr_time = Date.now()
        // console.log(curr_time)
    } while (curr_time - start_time - time < 0)
    return {i, orderSum}
}

//一定时间内 不间断 推送数据到数据库//一定时间内 不间断 推送数据到数据库//一定时间内 不间断 推送数据到数据库//一定时间内 不间断 推送数据到数据库
// simulationOrder(5 * 60 * 1000).then(res => {
//     console.log(res)
// })


//查询数据
let a = 0, b = 0
// 查询数据


// stream({highWaterMark: 100})

async function handleOriIntoDest(oriSql, destSql) {
  // connection.query(oriSql).on("result", async function (row, i) {
  //     console.log(row.tid, i, a++)
  //     let jdp_response_js = JSON.parse(row.jdp_response)
  //     let data00 = {
  //         tid: row.tid,
  //         status: row.status,
  //         type: row.type,
  //         seller_nick: row.seller_nick,
  //         buyer_nick: row.buyer_nick,
  //         created: row.created, //`${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
  //         modified: row.modified,//`${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
  //         // created: `${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
  //         // modified: `${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
  //         jdp_hashcode: row.jdp_hashcode, //`-${generateRandomNum(9)}`,
  //         jdp_response: row.jdp_response, //`${jsonData}`,
  //         jdp_created: row.jdp_created,// `${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
  //         jdp_modified: row.jdp_modified, //`${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`
  //         // jdp_created: `${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
  //         // jdp_modified: `${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
  //         customization: jdp_response_js.trade_fullinfo_get_response && jdp_response_js.trade_fullinfo_get_response.trade && jdp_response_js.trade_fullinfo_get_response.trade.orders && jdp_response_js.trade_fullinfo_get_response.trade.orders.order && jdp_response_js.trade_fullinfo_get_response.trade.orders.order[0] && jdp_response_js.trade_fullinfo_get_response.trade.orders.order[0].customization ? JSON.stringify(jdp_response_js.trade_fullinfo_get_response.trade.orders.order[0].customization) : NULL
  //     }
  //     // console.log(data00)
  //
  //     // await conQuery('insert into sync_copy_00 set ?',data00).then(res=>{
  //     //      console.log(res)
  //     //  })
  //     // connection.query(destSql, data00, (err, result, fields) => {
  //     //     // console.log('111111111111', '00000000000')
  //     //     // console.log(err, result, fields)
  //     //     console.log(b++)
  //     // })
  // })
  //
  let queryRes = await conQuery(oriSql)
  if (queryRes.length) {
    let i = 0
    for (let item of queryRes) {
      console.log("tid++++++++++==========+++++++++tid", item.tid, i++)
      let customization_arr = []
      let jdp_response_js = JSON.parse(item.jdp_response)
      if (jdp_response_js.trade_fullinfo_get_response && jdp_response_js.trade_fullinfo_get_response.trade && jdp_response_js.trade_fullinfo_get_response.trade.orders && jdp_response_js.trade_fullinfo_get_response.trade.orders.order) {
        for (let itm of jdp_response_js.trade_fullinfo_get_response.trade.orders.order) {
          customization_arr.push({
            oid: itm.oid,
            customization: itm.customization ? itm.customization : null
          })
        }
      }
      let customization_json = null
      if (customization_arr.length) {
        customization_json = JSON.stringify({
          customization_arr: customization_arr
        })
      }
      let data00 = {
        tid: item.tid,
        status: item.status,
        type: item.type,
        seller_nick: item.seller_nick,
        buyer_nick: item.buyer_nick,
        created: item.created, //`${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
        modified: item.modified,//`${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
        // created: `${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
        // modified: `${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
        jdp_hashcode: item.jdp_hashcode, //`-${generateRandomNum(9)}`,
        jdp_response: item.jdp_response, //`${jsonData}`,
        jdp_created: item.jdp_created,// `${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
        jdp_modified: item.jdp_modified, //`${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`
        // jdp_created: `${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
        // jdp_modified: `${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}`,
        customization: jdp_response_js.trade_fullinfo_get_response && jdp_response_js.trade_fullinfo_get_response.trade && jdp_response_js.trade_fullinfo_get_response.trade.orders && jdp_response_js.trade_fullinfo_get_response.trade.orders.order && jdp_response_js.trade_fullinfo_get_response.trade.orders.order[0] && jdp_response_js.trade_fullinfo_get_response.trade.orders.order[0].customization ? JSON.stringify(jdp_response_js.trade_fullinfo_get_response.trade.orders.order[0].customization) : null,
        customization_json: customization_json
      }
      try {
        await conQuery(destSql, data00)
      } catch (e) {
        continue
      } finally {
        continue
      }
    }
  }

}

// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表
// let oriSql=`select * from sync_copy limit ${900001},100000`
// let destSql=`insert into sync_copy_00 set ?`

// conQuery().then(res=>{
//     console.log(res,res[0].orderSum)
//
// })

async function initDest() {
    let queryArr = await conQuery(`select count(ori.tid) orderSum from sync_copy ori`)
    let orderSum = queryArr[0].orderSum
    let baseCnt = 1, inc = 100000
    do {
        console.log(baseCnt, inc)
        let oriSql = `select * from sync_copy limit ${baseCnt},${inc}`
        let destSql = `insert into sync_copy_00 set ?`
        await handleOriIntoDest(oriSql, destSql)
        baseCnt += inc
    } while (orderSum - baseCnt > 0)
    return true
}

// initDest().then(res => {
//     console.log("update success", res)
//     process.exit(0)
// })

// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表
//
// let oriSql=`select * from sync_copy ori where ori.tid not in(select dest.tid from sync_copy_00 dest)`
// let destSql=`insert into sync_copy_00 set ?`

async function pubDataIntoDest() {

    let baseCnt = 0, inc = 100000
    let isDo = false
    do {
        console.log(baseCnt, inc, a++)
        await func1(10000)
        let queryArr = await conQuery(`select count(ori.tid) orderSum from sync_copy ori where ori.tid not in(select dest.tid from sync_copy_00 dest)`)
        let orderSum = queryArr[0].orderSum
        console.log(orderSum)
        if (orderSum) {
            let oriSql = `select * from sync_copy ori where ori.tid not in(select dest.tid from sync_copy_00 dest) limit ${baseCnt},${inc}`
            let destSql = `insert into sync_copy_00 set ?`
            await handleOriIntoDest(oriSql, destSql)
            // isDo = true
        } else {
            // isDo = false
        }
    } while (true)
    return true
}

//
// pubDataIntoDest().then(res => {
//     console.log(res)
//     process.exit(0)
// })


//////处理ori变化的数据 sync into dest


async function updateOriIntoDest(oriSql, destSql) {
    let queryRes = await conQuery(oriSql)
    if (queryRes.length) {
        let i = 0
        for (let item of queryRes) {
            console.log("tid++++++++++==========+++++++++tid", item, i++)
            let newDestSql = `${destSql} jdp_hashcode=${JSON.stringify(item.ori_jdp_hashcode)} where dest.tid=${item.dest_tid}`
            console.log(newDestSql)
            try {
                await conQuery(newDestSql)
            } catch (e) {
                console.log(e)
                continue
            } finally {
                continue
            }
        }
    }

}

//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori

async function updateOriByRandom() {
  do {
    await func1(10000)
    let baseCnt = parseInt(Math.random(0, 1) * 100), inc = 1000
    let queryArr = await conQuery(`select tid from sync_copy limit ${baseCnt},${inc}`)
    console.log(queryArr.length)
    for (let itm of queryArr) {
      console.log("item.tid+++item.tid", itm, itm.tid)
      await conQuery(`update sync_copy as ori set jdp_hashcode='-${generateRandomNum(9)}' where ori.tid = ${itm.tid}`)
    }
  } while (true)
  return true
}

// updateOriByRandom().then(res=>{
//     console.log(res)
// })


//////处理ori变化的数据 sync into dest//////处理ori变化的数据 sync into dest//////处理ori变化的数据 sync into dest//////处理ori变化的数据 sync into dest
async function updateDataIntoDest() {
    let baseCnt = 0, inc = 100000
    let isDo = false
    do {
        console.log(baseCnt, inc, a++)
        await func1(10000)
        let queryArr = await conQuery(`select 
ori.tid as ori_tid,
ori.jdp_hashcode as ori_jdp_hashcode,
dest.tid as dest_tid,
dest.jdp_hashcode as dest_jdp_hashcode
from sync_copy as ori,sync_copy_00 as dest 
where ori.tid=dest.tid and ori.jdp_hashcode!=dest.jdp_hashcode
limit ${baseCnt},${inc}`)
        let orderSum = queryArr
        // console.log(orderSum)
        if (orderSum) {
            let oriSql = `select ori.tid as ori_tid,ori.jdp_hashcode as ori_jdp_hashcode,dest.tid as dest_tid,dest.jdp_hashcode as dest_jdp_hashcode
                          from sync_copy as ori,sync_copy_00 as dest 
                          where ori.tid=dest.tid and ori.jdp_hashcode!=dest.jdp_hashcode
                          limit ${baseCnt},${inc}`
            let destSql = `update sync_copy_00 as dest set `
            await updateOriIntoDest(oriSql, destSql)
            // isDo = true
        } else {
            // isDo = false
        }
    } while (true)
    return true
}

// updateDataIntoDest().then(res => {
//     console.log(res)
// })



//创建表//创建表//创建表//创建表//创建表//创建表//创建表//创建表//创建表//创建表//创建表
createTable().then(res=>{
  console.log("创建表成功",res)
  process.exit(0)
})
// 插入数据到ori// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据// 插入数据
// insertData(100000).then(res => {
//   console.log("insert success",res)
//   process.exit(0)
//
// })

// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表// 初始化目标表
// initDest().then(res => {
//     console.log("init 目标表 success", res)
//     process.exit(0)
// })

//一定时间内 不间断 推送数据到数据库//一定时间内 不间断 推送数据到数据库//一定时间内 不间断 推送数据到数据库//一定时间内 不间断 推送数据到数据库
// simulationOrder(5 * 60 * 1000).then(res => {
//   console.log("推送数据结束", res)
//   // console.log(res)
//   process.exit(0)
//
// })


// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表// 增量数据填充到目标表

// pubDataIntoDest().then(res => {
//     console.log(res)
//     process.exit(0)
// })


//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori//随机更新ori
// updateOriByRandom().then(res=>{
//     console.log(res)
// })


//////处理ori变化的数据 sync into dest//////处理ori变化的数据 sync into dest//////处理ori变化的数据 sync into dest//////处理ori变化的数据 sync into dest
// updateDataIntoDest().then(res => {
//     console.log(res)
// })















//     .on('end',function () {
// console.log("1111")
//
// })
// console.log("22222")
// connection.end()
// console.log("333333")
