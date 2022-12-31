<!--
 * @Date: 2022-12-25 18:15:28
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-31 10:38:36
 * @FilePath: /ztoSupplyPlat/src/views/customer/customerGoodsDetail.vue
-->
<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";

const useShowList = () => {
  const state = reactive({
    checkedGoods: [],
    totalAmount: 600
  });
  return toRefs(state);
};
const { checkedGoods, totalAmount } = useShowList();
const checkboxRefs = ref([]);
const checkboxGroup = ref(null);
const isSelectAll = ref(false)
const themeVars = {
  CheckboxBorderColor: '#3693FF',
  CheckboxLabelColor: '#3693FF',
}

const router = useRouter()

const goPage = (name: string) => {
  router.push({
    name
  })
}

onMounted(() => {
});
</script>

<template>
  <div>
    <CustomHeader title="商品详情" />

    <div class="background-area"></div>

    <div class="bottom-tool">
      <!-- <div class="select-all-bar">
        <van-config-provider :theme-vars="themeVars">
          <van-checkbox
          v-model="isSelectAll"
          >
            是否需要精美包装
          </van-checkbox>
        </van-config-provider>
      </div> -->

      <div class="summary-bar">
        <div class="delete-wrapper" @click="goPage('customerCart')">
          <van-icon name="shopping-cart-o"  color="#303133" size="24px" />
          <p>购物车</p>
        </div>
        <div class="money-wrapper">
          <van-button plain style="padding: 0 30px;font-size: 16px;margin-right: 8px" type="primary" size="small">加入购物车</van-button>
          <van-button style="padding: 0 30px;font-size: 16px;" type="primary" size="small" @click="goPage('customerSubmitOrder')">立即购买</van-button>
        </div>
        
      </div>
    </div>
    
    <div class="py-10"></div>
  </div>
</template>



<style lang="scss" scoped>
.background-area{
  width: 100%;
  margin-top: 10px;
  height: 700px;
  background: url('@/assets/images/customerOrder/goods-detail-bg.png') 0 0 no-repeat;
  background-size: 100%;
}

.bottom-tool{
  position: fixed;
  bottom: 50px;
  left: 0;
  width: 100%;
  background: #fff;
  .select-all-bar{
    height: 36px;
    line-height: 36px;
    background: #F5FAFF;
    color: #3693FF;
    display: flex;
    align-items: center;
    padding-left: 16px;
    font-size: 14px;
  }
  .summary-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    padding: 5px;
    padding-left: 16px;
    .delete-wrapper{
      text-align: center;
      font-size: 10px;
    }
    .money-wrapper{
      display: flex;
      align-items: center;
    }
    .money-text{
      font-size: 12px;
      color: #FF9900;
      margin-right: 10px;
      strong{
        font-size: 20px;
      }
    }
  }
}
</style>