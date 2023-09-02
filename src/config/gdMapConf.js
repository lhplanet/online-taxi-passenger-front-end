/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-12-28 14:39:29
 * @LastEditors: ch
 * @LastEditTime: 2023-01-03 21:00:14
 * @Description: 高德地图配置，需要自行去高德开放平台申请
 */
export default {
    // 高德地图JS Api key
    key:'60daece4e0ae0ced0aff48d8a7d45a65',
    // 高德地图JS Api key对应的秘钥，正式环境最好不要放前端
    securityJsCode : 'd61010d02f21371741865152a6db8291',
    // 城市获取key
    cityKey : '78462a297c925d75cbfbf4e58c8e1b95',
    // 高德城市请求地址
    cityApiUrl : 'https://restapi.amap.com/v3/config/district',
    // 默认选中城市
    // city: {
    //     adcode: "110000",
    //     center: "116.407387,39.904179",
    //     citycode: "010",
    //     name: "北京市"
    // }
    city: {
        adcode: "250101",
        center: "117.140109,36.667382",
        citycode: "0531",
        name: "济南市"
    }

}
