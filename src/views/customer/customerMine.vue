<!--
 * @Date: 2022-12-25 18:15:28
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-29 15:33:58
 * @FilePath: /ztoSupplyPlat/src/views/customer/customerMine.vue
-->
<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRefs } from "vue";
import { useRouter } from 'vue-router'
import * as echarts from "echarts"; 

const useShowList = () => {
  const state = reactive({
  });
  return toRefs(state);
};

onMounted(() => {
});

const router = useRouter()
function goToIncomePage(type: string) {
  router.push({
    name: 'counterIncome',
    params: {
      type
    }
  })
}

function goToWithdrawPage() {
  router.push({
    name: 'counterWithdraw'
  })
}
</script>

<template>
  <div>
    <CustomHeader title="我的" />
    <section
      class="customer-section"
    >
      <div class="customer-info">
        <div class="avatar-img">
          <img src="@/assets/images/apple-item.png">
        </div>
        <div class="info-detail">
          <p class="customer-name">客户姓名</p>
          <p>电话&nbsp;&nbsp;13460202865</p>
          <p>收件地址&nbsp;&nbsp;安徽省合肥市瑶海区瑶海大道1023号</p>
        </div>
      </div>
    </section>

    <section class="category-area">
      <div class="category-wrapper">
        <div class="category-item">
          <van-icon name="shopping-cart" color="#3B95FA" size="26px" class="shopping-icon"/>
          <p>购物车</p>
        </div>
        <div class="category-item">
          <img src="@/assets/images/customerMine/goods.png">
          <p>我的订单</p>
        </div>
        <div class="category-item">
          <img src="@/assets/images/customerMine/refund.png">
          <p>我的退款</p>
        </div>
        <div class="category-item">
          <img src="@/assets/images/customerMine/bankCard.png">
          <p>其他</p>
        </div>
      </div>
    </section>
  </div>
</template>



<style lang="scss" scoped>
.customer-section{
  width: 100%;
  height: 120px;
  position: relative;
  background: linear-gradient(180deg, #85A3FF 0%, #3693FF 100%);
  .customer-info{
    position: relative;
    top: 40px;
    left: 30px;
    display: flex;
    justify-content: flex-start;
    .avatar-img{
      width: 50px;
      height: 50px;
      img{
        width: 100%;
      }
    }
    .info-detail{
      margin-left: 10px;
      color: #fff;
      font-size: 12px;
      line-height: 28px;
      .customer-name{
        line-height: 1;
        font-size: 18px;
      }
    }
  }
}

.category-area{
  padding: 13px 16px;
  margin-top: 8px;
  background: #fff;
  .category-wrapper{
    display: flex;
    padding: 10px 0;
    justify-content: space-around;
    .category-item{
      text-align: center;
      width: 25%;
      font-size: 14px;
      img{
        width: 24px;
      }
      p{
        margin: 5px 0;
      }
    }
  }
}
</style>