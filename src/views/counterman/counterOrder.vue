<!--
 * @Date: 2022-12-25 18:15:28
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-26 13:26:59
 * @FilePath: /ztoSupplyPlat/src/views/counterman/counterOrder.vue
-->
<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import { getTest } from "@/api/home";
import logo from "@/assets/logo.png";

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
    ],
    activeTab: 'wait'
  });
  return toRefs(state);
};
const { list, activeTab } = useShowList();
const tabsList = [
  { title: '待取件', name: 'wait'},
  { title: '已取件', name: 'already'}
]
const router = useRouter()

function goToDetail() {
  router.push({
    name: 'counterGoodDetail'
  })
}

onMounted(() => {
});
</script>

<template>
  <div>
    <CustomHeader title="订单" />
    <van-tabs class="tabs-wrapper" v-model:active="activeTab" title-active-color="#3693FF" line-height="0px" sticky>
      <van-tab v-for="(item, index) in tabsList" :key="index" :title="item.title" :name="item.name">
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
                <p class="desc-text">地址: 上海市青浦区南城路8号</p>
                <p class="desc-text">联系人：黄科</p>
                <p class="desc-text">联系电话：18432341235</p>
              </div>
            </div>

            <div class="bottom-area" v-if="activeTab === 'wait'">
              <van-tag color="#FEFAE8" text-color="#FF9900" size="large">待取件</van-tag>
              <van-button type="primary" size="small">上传图片</van-button>
            </div>
            <div class="bottom-area" v-else>
              <van-tag color="#EBFFF4" text-color="#19BE6B" size="large">已取件</van-tag>
              <van-button type="primary" plain size="small">查看图片</van-button>
            </div>
          </section>
        </van-list>
      </van-tab>
    </van-tabs>
    <div class="py-10"></div>
  </div>
</template>



<style lang="scss" scoped>
.top-nav{
  display: inline-block;
  width: 100%;
  height: 42px;
  line-height: 42px;
  font-size: 15px;
  text-align: center;
  &.active{
    color: #3693FF;
  }
}
.item-section{
  padding: 0px 16px;
  margin: 10px 0;
  background: #fff;
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
      .desc-text{
        font-size: 12px;
        color: #909399;
        line-height: 20px;
      }
    }
  }
  .bottom-area{
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    .state-tag{
      width: 52px;
      height: 18px;
      font-size: 12px;
      font-weight: 400;
      color: #FF9900;
      line-height: 18px;
    }
  }
}
</style>