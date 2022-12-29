<!--
 * @Date: 2022-12-12 14:42:02
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-29 13:34:40
 * @FilePath: /ztoSupplyPlat/src/layout/index.vue
-->
<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
import { RouteComponent, useRouter } from "vue-router";

//底部tab栏相关
const useTabBar = () => {
  const state = reactive({
    tabBar: [
      {
        title: "首页",
        to: {
          name: "Home",
        },
        icon: "home-o",
      },
      {
        title: "我",
        to: {
          name: "About",
        },
        icon: "user-o",
      },
    ],
  });
  return toRefs(state);
};
const { tabBar } = useTabBar();

const counterTabs = [
  {
    title: "订单",
    to: {
      name: "counterOrder",
    },
    icon: "home-o",
  },
  {
    title: "钱包",
    to: {
      name: "counterWallet",
    },
    icon: "user-o",
  }
]
const customerTabs = [
  {
    title: "首页",
    to: {
      name: "customerIndex",
    },
    icon: "home-o",
  },
  {
    title: "我的",
    to: {
      name: "customerMine",
    },
    icon: "user-o",
  }
]

const router = useRouter()
  const routerPath = router.currentRoute.value.fullPath
  router.beforeEach((to: any, from: any, next) => {
    if (to.fullPath.includes('counter')) {
      tabBar.value = counterTabs
    } else if (to.fullPath.includes('customer')) {
      tabBar.value = customerTabs
    }
    next()
  })
  

onMounted(() => {
  
});
</script>

<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
      <RequestLoading></RequestLoading>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabBar" @chang="handleChange"></TabBar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>