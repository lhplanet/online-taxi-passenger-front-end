<template>
    <web-view :src="url" />
</template>
<script setup>
import { onLoad } from "@dcloudio/uni-app"
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { ShowToast } from "../utils";
const $store = useStore()

let url = ref()
onLoad((option)=>{
    url.value = `${$store.state.serverConf.pay}/alipay/pay?subject=${decodeURIComponent('车费')}&outTradeNo=${option.id}&totalAmount=${option.price}`;

// #ifdef H5
  window.location.href = url.value;
  // endif

  // 支付成功的回调函数
  function handlePaymentSuccess() {
    ShowToast("支付成功");
    // 跳转到你的页面
    uni.navigateTo({
      url: "/pages/evaluate.vue" // 根据你的页面路径来修改
    });
  }

  // 注册支付成功回调
  window.handlePaymentSuccess = handlePaymentSuccess;


})

</script>
