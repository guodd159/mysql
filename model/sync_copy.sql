/*
 Navicat MySQL Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50723
 Source Host           : localhost:3306
 Source Schema         : oms

 Target Server Type    : MySQL
 Target Server Version : 50723
 File Encoding         : 65001

 Date: 19/05/2021 10:28:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sync_copy
-- ----------------------------
/*1621785600000*/
DROP TABLE IF EXISTS `sync_copy_00`;
CREATE TABLE `sync_copy_00`  (
  `tid` bigint(20) NOT NULL,
  `status` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `seller_nick` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `buyer_nick` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `created` datetime NULL DEFAULT NULL,
  `modified` datetime NULL DEFAULT NULL,
  `jdp_hashcode` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `jdp_response` json NULL,
  `jdp_created` datetime NULL DEFAULT NULL,
  `jdp_modified` datetime NULL DEFAULT NULL,
  `customization` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`tid`) USING BTREE,
  INDEX `ind_jdp_tb_trade_jdp_modified`(`jdp_modified`) USING BTREE,
  INDEX `ind_jdp_tb_trade_modified`(`modified`) USING BTREE,
  INDEX `ind_buyer_nick`(`buyer_nick`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sync_copy
-- ----------------------------
-- INSERT INTO `sync_copy` VALUES (1604615437261148287, 'TRADE_CLOSED_BY_TAOBAO', 'fixed', '白食王', 'relax313', '2021-03-01 10:30:14', '2021-03-02 10:30:01', '-239917646', '{\"trade_fullinfo_get_response\": {\"trade\": {\"num\": 1, \"sid\": \"1604615437261148287\", \"tid\": 1604615437261148287, \"type\": \"fixed\", \"is_3D\": false, \"is_wt\": false, \"price\": \"20.00\", \"title\": \"d[s66595438]\", \"orders\": {\"order\": [{\"cid\": 50023728, \"num\": 1, \"oid\": 1604615437261148287, \"price\": \"20.00\", \"title\": \"派样魔方教程商品\", \"status\": \"TRADE_CLOSED_BY_TAOBAO\", \"num_iid\": 635433327168, \"payment\": \"50.00\", \"end_time\": \"2021-03-02 10:30:01\", \"pic_path\": \"https://img.alicdn.com/bao/uploaded/i1/555657275/O1CN01zrQve623c01SJdsS8_!!555657275.jpg\", \"total_fee\": \"20.00\", \"adjust_fee\": \"0.00\", \"buyer_rate\": false, \"is_daixiao\": false, \"order_from\": \"WAP,WAP\", \"is_oversold\": false, \"seller_rate\": false, \"seller_type\": \"C\", \"discount_fee\": \"0.00\", \"snapshot_url\": \"t:1604615437261148287_1\", \"customization\": \"{\\\"groupId\\\":14703}\", \"refund_status\": \"NO_REFUND\"}]}, \"pcc_af\": 0, \"status\": \"TRADE_CLOSED_BY_TAOBAO\", \"cod_fee\": \"0.00\", \"created\": \"2021-03-01 10:30:14\", \"is_gift\": false, \"num_iid\": 635433327168, \"payment\": \"50.00\", \"q_r_pay\": false, \"tid_str\": \"1604615437261148287\", \"end_time\": \"2021-03-02 10:30:01\", \"modified\": \"2021-03-02 10:30:01\", \"pic_path\": \"https://img.alicdn.com/bao/uploaded/i1/555657275/O1CN01zrQve623c01SJdsS8_!!555657275.jpg\", \"post_fee\": \"30.00\", \"alipay_no\": \"2021030122001198121409211929\", \"is_lgtype\": false, \"point_fee\": 0, \"total_fee\": \"20.00\", \"adjust_fee\": \"0.00\", \"buyer_area\": \"重庆重庆电信\", \"buyer_nick\": \"relax313\", \"buyer_rate\": false, \"cod_status\": \"NEW_CREATED\", \"coupon_fee\": 0, \"is_daixiao\": false, \"is_sh_ship\": false, \"trade_from\": \"WAP,WAP\", \"buyer_email\": \"mima*****@163.com\", \"new_presell\": false, \"seller_flag\": 0, \"seller_name\": \"胡涛\", \"seller_nick\": \"白食王\", \"seller_rate\": false, \"alipay_point\": 0, \"discount_fee\": \"0.00\", \"has_post_fee\": true, \"is_force_wlb\": false, \"receiver_zip\": \"401120\", \"seller_email\": \"814078490@qq.com\", \"seller_phone\": \"--\", \"service_tags\": {\"logistics_tag\": [{\"order_id\": \"1604615437261148287\", \"logistic_service_tag_list\": {\"logistic_service_tag\": [{\"service_tag\": \"origAreaId=500112;consignDate=48\", \"service_type\": \"TB_CONSIGN_DATE\"}, {\"service_tag\": \"lgType=-4\", \"service_type\": \"FAST\"}]}}, {\"order_id\": \"1604615437261148287\", \"logistic_service_tag_list\": {\"logistic_service_tag\": [{\"service_tag\": \"consignDate=48\", \"service_type\": \"TB_CONSIGN_DATE\"}]}}]}, \"service_type\": \"\", \"snapshot_url\": \"t:1604615437261148287_1\", \"buyer_cod_fee\": \"0.00\", \"is_brand_sale\": false, \"receiver_city\": \"重庆市\", \"receiver_name\": \"张**\", \"receiver_town\": \"龙溪街道\", \"seller_mobile\": \"15223386057\", \"shipping_type\": \"express\", \"commission_fee\": \"0.00\", \"real_point_fee\": 0, \"receiver_state\": \"重庆\", \"seller_cod_fee\": \"0.00\", \"buyer_alipay_no\": \"***a*****@163.com\", \"is_part_consign\": false, \"receiver_mobile\": \"*******5552\", \"seller_can_rate\": false, \"consign_interval\": 48, \"nr_shop_guide_id\": \"\", \"received_payment\": \"0.00\", \"receiver_address\": \"龙*街道花**路**号黄金堡高级住宅区**-*-*\", \"receiver_country\": \"\", \"seller_alipay_no\": \"***aoyouxiang@aliyun.com\", \"receiver_district\": \"渝北区\", \"nr_shop_guide_name\": \"\", \"platform_subsidy_fee\": \"0.00\", \"available_confirm_fee\": \"20.00\", \"buyer_obtain_point_fee\": 0}}}', '2021-04-07 17:35:17', '2021-04-07 17:35:17');
-- INSERT INTO `sync_copy` VALUES (1705934485238538259, 'TRADE_CLOSED_BY_TAOBAO', 'fixed', '白食王', 'liang102938', '2021-04-07 17:33:16', '2021-04-07 17:45:29', '-822150227', '{\"trade_fullinfo_get_response\": {\"trade\": {\"num\": 1, \"sid\": \"1705934485238538259\", \"tid\": 1705934485238538259, \"type\": \"fixed\", \"is_3D\": false, \"is_wt\": false, \"price\": \"155.00\", \"title\": \"d[s66595438]\", \"orders\": {\"order\": [{\"cid\": 50023728, \"num\": 1, \"oid\": 1705934485238538259, \"price\": \"155.00\", \"title\": \"3CE四色眼影盘4色全闪金钻粉钻彩妆盘珠光便携\", \"status\": \"TRADE_CLOSED_BY_TAOBAO\", \"num_iid\": 632683596330, \"payment\": \"185.00\", \"end_time\": \"2021-04-07 17:45:29\", \"pic_path\": \"https://img.alicdn.com/bao/uploaded/i3/555657275/O1CN01mO4Qk823c02LGs2KD_!!555657275.jpg\", \"total_fee\": \"155.00\", \"adjust_fee\": \"0.00\", \"buyer_rate\": false, \"is_daixiao\": false, \"order_from\": \"WAP,WAP\", \"is_oversold\": false, \"seller_rate\": false, \"seller_type\": \"C\", \"discount_fee\": \"0.00\", \"snapshot_url\": \"t:1705934485238538259_1\", \"refund_status\": \"NO_REFUND\"}]}, \"pcc_af\": 0, \"status\": \"TRADE_CLOSED_BY_TAOBAO\", \"cod_fee\": \"0.00\", \"created\": \"2021-04-07 17:33:16\", \"is_gift\": false, \"num_iid\": 632683596330, \"payment\": \"185.00\", \"q_r_pay\": false, \"tid_str\": \"1705934485238538259\", \"end_time\": \"2021-04-07 17:45:29\", \"modified\": \"2021-04-07 17:45:29\", \"pic_path\": \"https://img.alicdn.com/bao/uploaded/i3/555657275/O1CN01mO4Qk823c02LGs2KD_!!555657275.jpg\", \"post_fee\": \"30.00\", \"alipay_no\": \"2021040722001189451409950077\", \"is_lgtype\": false, \"point_fee\": 0, \"total_fee\": \"155.00\", \"adjust_fee\": \"0.00\", \"buyer_area\": \"重庆重庆电信\", \"buyer_nick\": \"liang102938\", \"buyer_rate\": false, \"cod_status\": \"NEW_CREATED\", \"coupon_fee\": 0, \"is_daixiao\": false, \"is_sh_ship\": false, \"trade_from\": \"WAP,WAP\", \"buyer_email\": \"17140*****@qq.com\", \"new_presell\": false, \"seller_flag\": 0, \"seller_name\": \"胡涛\", \"seller_nick\": \"白食王\", \"seller_rate\": false, \"alipay_point\": 0, \"discount_fee\": \"0.00\", \"has_post_fee\": true, \"is_force_wlb\": false, \"receiver_zip\": \"401120\", \"seller_email\": \"814078490@qq.com\", \"seller_phone\": \"--\", \"service_tags\": {\"logistics_tag\": [{\"order_id\": \"1705934485238538259\", \"logistic_service_tag_list\": {\"logistic_service_tag\": [{\"service_tag\": \"origAreaId=500112;consignDate=48\", \"service_type\": \"TB_CONSIGN_DATE\"}, {\"service_tag\": \"lgType=-4\", \"service_type\": \"FAST\"}]}}, {\"order_id\": \"1705934485238538259\", \"logistic_service_tag_list\": {\"logistic_service_tag\": [{\"service_tag\": \"consignDate=48\", \"service_type\": \"TB_CONSIGN_DATE\"}]}}]}, \"service_type\": \"\", \"snapshot_url\": \"t:1705934485238538259_1\", \"buyer_cod_fee\": \"0.00\", \"is_brand_sale\": false, \"receiver_city\": \"重庆市\", \"receiver_name\": \"梁**\", \"receiver_town\": \"龙溪街道\", \"seller_mobile\": \"15223386057\", \"shipping_type\": \"express\", \"commission_fee\": \"0.00\", \"real_point_fee\": 0, \"receiver_state\": \"重庆\", \"seller_cod_fee\": \"0.00\", \"buyer_alipay_no\": \"***40*****@qq.com\", \"is_part_consign\": false, \"receiver_mobile\": \"*******3055\", \"seller_can_rate\": false, \"consign_interval\": 48, \"nr_shop_guide_id\": \"\", \"received_payment\": \"0.00\", \"receiver_address\": \"龙*街道**路**号上海大**栋**-**\", \"receiver_country\": \"\", \"seller_alipay_no\": \"***aoyouxiang@aliyun.com\", \"receiver_district\": \"渝北区\", \"nr_shop_guide_name\": \"\", \"platform_subsidy_fee\": \"0.00\", \"available_confirm_fee\": \"155.00\", \"buyer_obtain_point_fee\": 0}}}', '2021-04-07 17:33:17', '2021-04-07 17:45:30');

SET FOREIGN_KEY_CHECKS = 1;
