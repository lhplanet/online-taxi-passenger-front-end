/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-12-19 15:33:58
 * @LastEditors: ch
 * @LastEditTime: 2022-12-30 16:48:20
 * @Description: file content
 */
import { MsbRequest } from "../plugins/request";

const ApiGetUserProgressOrder = () => MsbRequest.get("/UserProgressOrder");

/**
 * @Description: 获取价格
 * @param {*}
 * @return {*}
 */
const ApiGetPrice = (
  params = {
    depLongitude, //城市编码
    depLatitude, //出发地纬度
    destLongitude, //目的地纬度
    destLatitude, //目的地纬度
    cityCode, //城市编码
    vehicleType, //车辆类型
  }
) => MsbRequest.post("/forecast-price", params);

/**
 * @Description:乘客下单
 * @return {*}
 */
const ApiPostOrderAdd = (
  data = {
    address,
    departTime,
    orderTime,
    departure,
    depLongitude,
    depLatitude,
    destination,
    destLongitude,
    destLatitude,
    encrypt,
    fareType,
    fareVersion,
    passengerId,
    passengerPhone,
    vehicleType,
  }
) => MsbRequest.post("/order/add", data);

/**
 * @Description: 乘客取消订单
 * @param {*} orderId
 * @return {*}
 */
const ApiPostOrderCancel = ({orderId}) => MsbRequest.post('/order/cancel',{orderId},{
  'content-type':'application/x-www-form-urlencoded'
});
/**
 * @Description: 查询当前用户正在进行的订单
 * @return {*}
 */
const ApiGetCurrentOrder = () => MsbRequest.get('/order/current');

/**
 * 推送下单成功，刷新司机端
 * @param data
 * @returns {Promise<any>}
 * @constructor
 */
const ApiP2DBegin = (data = { driverId }) => MsbRequest.post('/order/pd-begin',data, {
    "content-type" : 'application/x-www-form-urlencoded'
})

export {
    ApiGetUserProgressOrder,
    ApiGetPrice,
    ApiPostOrderAdd,
    ApiPostOrderCancel,
    ApiGetCurrentOrder,
    ApiP2DBegin
};
