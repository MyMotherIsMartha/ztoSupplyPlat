<!--
 * @Date: 2022-12-25 18:15:28
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-28 10:28:36
 * @FilePath: /ztoSupplyPlat/src/views/counterman/counterIncome.vue
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
  });
  return toRefs(state);
};
const { routeType, list } = useShowList();

const router = useRouter()

function goToDetail() {
  router.push({
    name: 'counterGoodDetail'
  })
}

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
    <CustomHeader :title="currentType === 'today' ? '今日收入' : '本月收入'" />
    <section class="total-row">
      总计：<span class="total-number">454.00</span>
    </section>
    <van-list finished-text="没有更多了">
      <section
        class="item-section"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="top-area" @click="goToDetail">
          <div class="left-image">
            <img src="@/assets/images/apple-item.png">
          </div>
          <div class="right-desc">
            <p class="header-text">苹果 3kg</p>
            <span class="date-text">2022-12-26</span>
            <div class="desc-wrapper">
              <p class="desc-text">金额: <span class="desc-money">¥400</span></p>
              <p class="desc-text">利润分成：<span class="desc-money">¥100</span></p>
              <p class="desc-text">分成比例：<span class="desc-ratio">2%</span></p>
            </div>
          </div>
        </div>
      </section>
    </van-list>
    <div class="py-10"></div>
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
.item-section{
  padding: 0px 16px;
  margin: 10px 0;
  background: #fff;
  position: relative;
  .top-area{
    display: flex;
    padding: 13px 0px;
    justify-content: flex-start;
    border-bottom: 0.5px solid #DCDCDC;
    .left-image{
      width: 96px;
      height: 96px;
      margin-right: 8px;
      img{
        width: 100%;
      }
    }
    .right-desc{
      .header-text{
        font-size: 15px;
        font-weight: 600;
        line-height: 24px;
        color: #303133;
      }
      .date-text{
        font-size: 11px;
        color: #999;
        position: absolute;
        right: 12px;
        top: 16px;
      }
      .desc-wrapper{
        display: flex;
        flex-wrap: wrap;
      }
      .desc-text{
        width: 50%;
        font-size: 12px;
        color: #909399;
        line-height: 34px;
        .desc-money{
          color: #FF9900;
          font-size: 15px;
        }
        .desc-ratio{
          color: #333;
          font-size: 12px;
        }
      }
    }
  }
}
</style>