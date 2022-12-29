<!--
 * @Date: 2022-12-25 18:15:28
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-28 14:27:02
 * @FilePath: /ztoSupplyPlat/src/views/counterman/counterWithdraw.vue
-->
<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import { getTest } from "@/api/home";
import logo from "@/assets/logo.png";

const useShowList = () => {
  const state = reactive({
    routeType: 'today',
    list: [
      { title: "vite" },
      { title: "rem移动端适配" },
      { title: "VantUI 组件按需加载" },
      { title: "Sass 全局样式" },
      { title: "Vuex 状态管理" },
      { title: "Pinia 状态管理" },
      { title: "Axios 封装及接口管理" },
      { title: "Vue-router" },
      { title: "vite.config.ts 基础配置" },
      { title: "检查文件中的env路径" },
      { title: "配置 proxy 跨域" },
      { title: "配置 alias 别名" },
      { title: "Eslint+Pettier 统一开发规范" },
      { title: "批量全局注册公共组件" },
    ],
    selectChannel: 1
  });
  return toRefs(state);
};
const { routeType, list, selectChannel } = useShowList();

const router = useRouter()


let currentType = computed(() => {
  return router.currentRoute.value.params.type || 'today'
})

onMounted(() => {
  console.log(router.currentRoute.value)
  // routeType.value = router.currentRoute.value.params.type || 'today'
});
</script>

<template>
  <div>
    <CustomHeader title="提现" />
    <section class="total-row">
      总计：<span class="total-number">454.00</span>
    </section>
    

    <section class="withdraw-area">
      <p class="area-title">提现渠道</p>
      <van-radio-group v-model="selectChannel">
       
        <van-cell-group :border="false">
          <van-cell value="已绑定">
            <template #icon>
              <van-radio :name="1"></van-radio>
            </template>
            <template #title>
              <span class="icon-wrapper">
                <img src="@/assets/images/wechat.png">
              </span>
              <span class="custom-title">提现到微信</span>
            </template>
          </van-cell>
          <van-cell value="已绑定">
            <template #icon>
              <van-radio :name="2"></van-radio>
            </template>
            <template #title>
              <span class="icon-wrapper">
                <img src="@/assets/images/alipay.png">
              </span>
              <span class="custom-title">提现到支付宝</span>
            </template>
          </van-cell>
          <van-cell value="已绑定">
            <template #icon>
              <van-radio :name="3"></van-radio>
            </template>
            <template #title>
              <span class="icon-wrapper">
                <img src="@/assets/images/bankcard.png">
              </span>
              <span class="custom-title">提现到银行卡</span>
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>

      <div class="bottom-btn">
        <div class="withdraw-btn">提现</div>
      </div>
    </section>
  </div>
</template>



<style lang="scss" scoped>
.total-row{
  margin: 10px 0;
  padding: 12px 15px;
  font-size: 12px;
  background: #fff;
  color: #333;
  .total-number{
    font-size: 18px;
    color: #3693FF;
  }
}

.withdraw-area{
  padding: 13px 10px;
  margin-top: 8px;
  background: #fff;
  .area-title{
    margin-left: 10px;
    font-size: 14px;
    color: #333;
    line-height: 20px;
    font-weight: 500;
  }
  .icon-wrapper{
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin: 0 10px;
    img{
      width: 100%;
    }
  }
}
.bottom-btn{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 15px 60px;
  background: #fff;
  .withdraw-btn{
    height: 40px;
    width: 100%;
    background: #3693FF;
    border-radius: 4px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    color: #fff;
  }
}
</style>