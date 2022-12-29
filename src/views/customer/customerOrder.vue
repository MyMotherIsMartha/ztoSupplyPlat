<!--
 * @Date: 2022-12-25 18:15:28
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-29 16:46:47
 * @FilePath: /ztoSupplyPlat/src/views/customer/customerOrder.vue
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
const themeVars = {
  // fieldInputTextColor: '#ccc'
  // fieldLabelColor: '#ccc',
}
const router = useRouter()

onMounted(() => {
});
</script>

<template>
  <div>
    <CustomHeader title="我的订单" />
    <section class="search-filter-area">
      <van-config-provider :theme-vars="themeVars">
        <van-field
          label=""
          left-icon="search"
          placeholder="请输入名称"
        />
      </van-config-provider>
      <div class="filter-wrapper">
        <div class="filter-item">
          <span>查询时间</span><img src="@/assets/images/customerOrder/arrrow-down.png">
        </div>
        <div class="filter-item">
          <span>订单金额</span><img src="@/assets/images/customerOrder/arrrow-down.png">
        </div>
        <div class="filter-item">
          <span>交易状态</span><img src="@/assets/images/customerOrder/arrrow-down.png">
        </div>
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
            <div class="money-text">¥345.00</div>
            <div class="desc-wrapper">
              <div class="desc-text">订单编号：PDD_869882305</div>
            </div>
            
          </div>
        </div>

        <div class="bottom-area">
          <van-tag color="#FEFAE8" text-color="#FF9900" size="large">待客户取货</van-tag>
          <div class="right-item">
            <van-button type="primary" size="mini">申请退款</van-button>
          </div>
        </div>
      </section>
    </van-list>
    <div class="py-10"></div>
  </div>
</template>



<style lang="scss" scoped>
.search-filter-area{
  /* height: 70px; */
  background: #fff;
  width: 100%;
  padding: 14px 16px;
  :deep(.van-cell){
    background: #EEF0F6;
    border-radius: 8px;
  }
  .filter-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0 4px;
    .filter-item{
      font-size: 15px;
      img{
        width: 12px;
      }
    }
  }
}
.item-section{
  padding: 0px 16px;
  margin: 10px 0;
  background: #fff;
  position: relative;
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
      .money-text{
        position: absolute;
        right: 16px;
        top: 10px;
        font-size: 15px;
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