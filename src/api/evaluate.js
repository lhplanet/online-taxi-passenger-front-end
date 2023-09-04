import { MsbRequest } from '../plugins/request';

/**
 * @Description: 保存评价和分数到数据库
 * @param {*} data - 包含评价内容和分数的数据
 * @return {*} - 返回保存结果
 */
// const ApiPostEvaluate = (data) => {
//     return MsbRequest.post('/evaluate/add', data);
// };
const ApiPostEvaluate = (
    data = {
        orderId,
        evaluation,
        rating,
    }
) => MsbRequest.post("/evaluate/add", data);

export {
    ApiPostEvaluate,
};
