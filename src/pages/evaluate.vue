<template>
  <view class="evaluate">
    <text class="title">请填写评价</text>
    <textarea
        v-model="evaluation"
        class="textarea"
        placeholder="请输入评价内容（100字以内）"
        maxlength="100"
    ></textarea>
    <text class="title">请评分</text>
    <view class="stars">
      <text
          v-for="(star, index) in 5"
          :key="index"
          @click="rate(index + 1)"
          :class="{'star-icon': true, 'star-icon-selected': index < rateValue}"
      >
        ★
      </text>
    </view>
    <button @click="submit" class="submit-button">提交评价</button>
  </view>
</template>

<script>
import { ref } from 'vue';
import { ApiPostEvaluate } from '../api/evaluate';
import {HandleApiError} from "../utils";

export default {
  setup() {
    const evaluation = ref('');
    const rateValue = ref(0);

    // 在这里获取URL查询参数
    const orderId = ref(null); // 假设你要获取名为orderId的参数

    // 获取当前页面的 URL
    const currentUrl = window.location.href;

    // 解析查询参数
    const urlSearchParams = new URLSearchParams(currentUrl.split('?')[1]);
    const queryParams = Object.fromEntries(urlSearchParams.entries());

    // 获取特定参数的值
    const out_trade_no = queryParams.out_trade_no;
    const total_amount = queryParams.total_amount;

    console.log('out_trade_no:', out_trade_no);
    // console.log('total_amount:', total_amount);

    orderId.value = parseInt(out_trade_no);



    // 在mounted之前获取参数
    // const routeQuery = new URLSearchParams(location.search);

    // console.log('routeQuery:');
    // console.log(routeQuery);

    // if (routeQuery.has('out_trade_no')) {
    //   orderId.value = routeQuery.get('out_trade_no');
    // }


    const rate = (value) => {
      // 更新星级评分
      rateValue.value = value;
    };

    const submit = async () => {
      // 在提交评价时可以使用orderId
      console.log('orderId:', orderId.value);

      // 调用后端接口保存评价和分数
      const {error, result} = await ApiPostEvaluate({
        orderId: orderId.value,
        evaluation: evaluation.value,
        rating: rateValue.value,
      });

      if (!HandleApiError(error)) {
        uni.redirectTo({url: '/pages/index/index'});
        // getPassengerInfo();
      } else {
        uni.showToast({
          title: '评价失败，请重试',
          icon: 'none',
        });
      }
    };

    return {
      evaluation,
      rateValue,
      rate,
      submit,
    };
  },
};
</script>

<style scoped>
.evaluate {
  padding: 20px;
}

.title {
  font-size: 18px;
  margin-bottom: 10px;
}

.textarea {
  width: 100%;
  height: 120px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.stars {
  display: flex;
  justify-content: flex-start;
}

.star-icon {
  font-size: 24px;
  cursor: pointer;
}

.star-icon-selected {
  color: #ffdb00;
}

.submit-button {
  width: 100%;
  margin-top: 20px;
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
}
</style>
