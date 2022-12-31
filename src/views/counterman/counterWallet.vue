<!--
 * @Date: 2022-12-25 18:15:28
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-30 17:28:27
 * @FilePath: /ztoSupplyPlat/src/views/counterman/counterWallet.vue
-->
<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRefs } from "vue";
import testImg from '@/assets/images/apple-item.png';
import { useRouter } from 'vue-router'
import * as echarts from "echarts"; 

const useShowList = () => {
  const state = reactive({
  });
  return toRefs(state);
};
const imageList = [
  { url: testImg, name: 'wait'},
  { url: testImg, name: 'already'},
  { url: testImg, name: 'wait'},
  { url: testImg, name: 'already'},
  { url: testImg, name: 'wait'},
  { url: testImg, name: 'already'}
]


onMounted(() => {
  initChart();
});

function initChart() {
  let chart = echarts.init(document.getElementById("trendChart"));
  // 把配置和数据放这里
  chart.setOption({
    xAxis: {
      type: "category",
      data: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
      ]
    },
    tooltip: {
      trigger: "axis"
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [
          820,
          932,
          901,
          934,
          1290,
          1330,
          1320,
          801,
          102,
          230,
          1321,
          1129
        ],
        barWidth: '14',
        itemStyle: {
          color: '#3693FF'
        },  
        type: "bar",
        smooth: true
      }
    ]
  });
  window.onresize = function() {
    //自适应大小
    chart.resize();
  };
}

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
    <CustomHeader title="钱包" />
    <section
      class="income-section"
    >
      <div class="income-wrapper">
        <div class="income-item" @click="goToIncomePage('today')">
          <p class="income-label">今日总收入(元）</p>
          <p class="income-value">454.00</p>
        </div>
        <div class="income-item" @click="goToIncomePage('month')">
          <p class="income-label">本月总收入(元）</p>
          <p class="income-value">356,454.00</p>
        </div>
      </div>

      <span class="withdraw-btn" @click="goToWithdrawPage">提现</span>
    </section>

    <section class="trend-area">
      <p class="area-title">收入趋势</p>
      <div class="trend-chart" id="trendChart"></div>
    </section>
  </div>
</template>



<style lang="scss" scoped>
.income-section{
  width: 100%;
  height: 160px;
  position: relative;
  background: linear-gradient(180deg, #85A3FF 0%, #3693FF 100%);
  .income-wrapper{
    position: absolute;
    top: 90px;
    left: 30px;
    display: flex;
    justify-content: flex-start;
    .income-item{
      margin-right: 20px;
      color: #fff;
      .income-label{
        font-size: 12px;
      }
      .income-value{
        margin-top: 16px;
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
  .withdraw-btn{
    display: inline-block;
    color: #fff;
    width: 64px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #fff;
    border-radius: 4px;
    position: absolute;
    right: 40px;
    bottom: 50px;
  }
}

.trend-area{
  padding: 13px 16px;
  margin-top: 8px;
  background: #fff;
  .area-title{
    font-size: 14px;
    color: #333;
    line-height: 20px;
    font-weight: 500;
  }
  .trend-chart{
    width: 100%;
    height: 340px;
  }

}
</style>