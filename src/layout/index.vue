<!--
 * @Date: 2022-12-12 14:42:02
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-30 16:53:41
 * @FilePath: /ztoSupplyPlat/src/layout/index.vue
-->
<script lang="ts">
import { defineComponent, ComponentPublicInstance } from 'vue'

interface IInstance extends ComponentPublicInstance {
  judgePath(path: string): void
}
export default defineComponent({

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const instance = vm as IInstance
      console.log('instance:', instance)
      instance.judgePath(to.path)
    })
  },
})
</script>
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

const judgePath = (path: string) => {
  if (path.includes('counter')) {
    tabBar.value = counterTabs
  } else if (path.includes('customer')) {
    tabBar.value = customerTabs
  }
}

defineExpose({ judgePath })

const router = useRouter()
onMounted(() => {
  console.log('router', router)
  judgePath(router.currentRoute.value.path)
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
      <TabBar :data="tabBar"></TabBar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-footer{
  :deep(.van-tabbar){
    width: 100vw;
  }
}
</style>