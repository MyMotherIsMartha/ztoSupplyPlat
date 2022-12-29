<!--
 * @Date: 2022-12-25 18:15:28
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-29 15:36:28
 * @FilePath: /ztoSupplyPlat/src/views/customer/customerIndex.vue
-->
<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";

const useShowList = () => {
  const state = reactive({
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
    ]
  });
  return toRefs(state);
};
const { list } = useShowList();
const router = useRouter()

onMounted(() => {
});
</script>

<template>
  <div>
    <CustomHeader title="首页" />
    <section class="network-area">
      <div class="network-name">
        <van-icon name="location" color="#3693FF" />
        网点名称网点名称网点名称 >
      </div>
      <div class="network-address">
        地址地址地址地址地址地址地址
      </div>
    </section>
    <van-list finished-text="没有更多了">
      <section
        class="item-section"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="top-area">
          <div class="left-image">
            <img src="@/assets/images/apple-item.png">
          </div>
          <div class="right-desc">
            <p class="header-text">苹果 3kg</p>
            <div class="desc-wrapper">
              <div class="desc-text" style="width: 30%">数量：10个</div>
              <div class="desc-text">地址: 上海市青浦区南城路8号</div>
            </div>
            
          </div>
        </div>

        <div class="bottom-area">
          <span class="money-text">¥35.60</span>
          <div class="right-item">
            <van-icon name="shopping-cart-o" color="#3B95FA" size="24px" class="shopping-icon"/>
            <van-button type="primary" size="mini">立即购买</van-button>
          </div>
        </div>
      </section>
    </van-list>
    <div class="py-10"></div>
  </div>
</template>



<style lang="scss" scoped>
.network-area{
  height: 70px;
  background: #fff;
  width: 100%;
  padding: 14px 16px;
  .network-name{
    font-size: 15px;
    color: #303133;
    line-height: 24px;
    font-weight: 500;
  }
  .network-address {
    padding-left: 20px;
    font-size: 11px;
    color: #909399;
    line-height:24px;
  }
}
.item-section{
  padding: 0px 16px;
  margin: 10px 0;
  background: #fff;
  .top-area{
    display: flex;
    padding: 13px 0px 5px;
    justify-content: flex-start;
    /* border-bottom: 0.5px solid #DCDCDC; */
    .left-image{
      width: 44px;
      height: 44px;
      margin-right: 8px;
      img{
        width: 100%;
      }
    }
    .right-desc{
      width: 100%;
      .header-text{
        font-size: 15px;
        font-weight: 600;
        line-height: 24px;
        color: #303133;
      }
      .desc-wrapper{
        display: flex;
        justify-content: flex-start;
      }
      .desc-text{
        font-size: 12px;
        color: #909399;
        line-height: 20px;
      }
    }
  }
  .bottom-area{
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    .money-text{
      color: #FFA60D;
      font-size: 17px;
    }
    .right-item{
      .shopping-icon{
        transform: translateY(8px);
        margin-right: 10px;
      }
    }
  }
}
</style>