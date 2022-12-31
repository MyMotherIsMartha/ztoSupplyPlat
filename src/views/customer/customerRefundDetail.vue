<!--
 * @Date: 2022-12-25 18:15:28
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-31 10:18:34
 * @FilePath: /ztoSupplyPlat/src/views/customer/customerRefundDetail.vue
-->
<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRefs } from "vue";
import testImg from '@/assets/images/apple-item.png';
import * as echarts from "echarts"; 

const useShowList = () => {
  const state = reactive({
  });
  return toRefs(state);
};
const orderInfoList = [
  { label: '订单号', value: '3456789797807890'},
  { label: '支付时间', value: '2022-03-23  12:00:00'},
  { label: '取货时间', value: '2022-03-23  12:00:00'},
  { label: '数量', value: '3个'},
  { label: '客户信息', value: '张三丰'},
]


onMounted(() => {
});

</script>

<template>
  <div>
    <CustomHeader title="退款详情" />
    <section
      class="income-section"
    >
      <span class="refund-status">
        <van-icon name="passed" size="24px" style="margin-right: 10px" />
        退款审核中</span>
    </section>

    <section class="order-info">
      <div class="left-img">
        <img src="@/assets/images/apple-item.png">
      </div>
      <div class="right-info">
        <p class="order-name">订单名称订单名称订单名称</p>
        <p class="order-desc">描述描述描述描述描述描述描述描述</p>
        <p class="order-money">¥234.00</p>
      </div>
    </section>

    <section class="order-area">
      <p class="area-title">订单信息</p>
      <ul class="order-info-list">
        <li class="order-info-list-item" v-for="(item, index) in orderInfoList" :key="index">
          <span class="label-text">{{item.label}}</span>
          <span class="value-text">{{ item.value }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>



<style lang="scss" scoped>
.income-section{
  width: 100%;
  height: 100px;
  position: relative;
  background: linear-gradient(90deg, #F5BB92 0%, #FF933E 100%);
  .refund-status{
    display: inline-block;
    color: #fff;
    height: 28px;
    line-height: 28px;
    text-align: center;
    font-size: 24px;
    border-radius: 4px;
    position: absolute;
    left: 20px;
    bottom: 20px;
  }
}

.order-info{
  width: 100%;
  padding: 12px;
  background: #fff;
  display: flex;
  align-items: center;
  margin: 8px 0;
  .left-img{
    width: 60px;
    margin-right: 10px;
    img{
      width: 60px;
    }
  }
  .right-info{
    width: 100%;
    .order-name{
      font-size: 15px;
      color: #303133;
    }
    .order-desc{
      font-size: 11px;
      line-height: 30px;
      color: #909399;
    }
    .order-money{
      font-size: 15px;
      color: #303133;
    }
  }
}

.order-area{
  padding: 13px 16px;
  margin-top: 8px;
  background: #fff;
  .area-title{
    font-size: 17px;
    color: #333;
    line-height: 20px;
    font-weight: 500;
  }
  .order-info-list{
    margin-top: 10px;
    padding: 0;
    width: 100%;
    &-item{
      width: 100%;
      display: flex;
      justify-content: space-between;
      line-height: 30px;
      .label-text{
        font-size: 15px;
        color: #909399;
      }
      .value-text{
        font-size: 15px;
        color: #303133;
      }
    }
  }

}
</style>