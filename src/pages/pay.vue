<template>
    <web-view :src="url" />
</template>
<script setup>
import { onLoad } from "@dcloudio/uni-app"
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
const $store = useStore()

let url = ref("")

// 在页面加载后自动跳转到评价页面
const redirectUrl = '/evaluate'; // 替换成评价页面的路由

onLoad((option)=>{
    url.value = `${$store.state.serverConf.pay}/alipay/pay?subject=${decodeURIComponent('车费')}&outTradeNo=${option.id}&totalAmount=${option.price}`;

  // 将支付成功后的跳转链接设置为evaluate.vue
  const returnUrl = `${window.location.origin}/pages/evaluate.vue`; // 设置返回链接
  url.value += `&returnUrl=${encodeURIComponent(returnUrl)}`;

  // #ifdef H5
    window.location.href = url.value;
    // endif
})
</script>
