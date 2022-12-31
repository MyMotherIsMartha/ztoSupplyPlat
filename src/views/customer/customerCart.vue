<!--
 * @Date: 2022-12-25 18:15:28
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-30 11:14:59
 * @FilePath: /ztoSupplyPlat/src/views/customer/customerCart.vue
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
    ],
    checkedGoods: []
  });
  return toRefs(state);
};
const { list, checkedGoods } = useShowList();
const checkboxRefs = ref([]);
const checkboxGroup = ref(null);
const isSelectAll = ref(false)
const themeVars = {
  CheckboxBorderColor: '#3693FF',
  CheckboxLabelColor: '#3693FF',

}

const router = useRouter()

onMounted(() => {
});

let checkedAmount = computed(() => {
  return checkedGoods.value.length * 345
})

function toggleAll(checked: boolean) {
  if (checked) {
    checkboxGroup.value.toggleAll(true);
  } else {
    checkboxGroup.value.toggleAll();
  }
}
</script>

<template>
  <div>
    <CustomHeader title="购物车" />
    <van-list finished-text="没有更多了">
      <van-checkbox-group ref="checkboxGroup" v-model="checkedGoods">
        <section
          class="item-section"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="top-area">
            <div style="width: 40px">
              <van-checkbox
                :name="item"
                @click.stop
              />
            </div>
            <div class="left-image">
              <img src="@/assets/images/apple-item.png">
            </div>
            <div class="right-desc">
              <p class="header-text">苹果 3kg</p>
              <div class="desc-wrapper">
                <div class="desc-text">订单编号：PDD_869882305</div>
              </div>
            </div>
          </div>

          <div class="bottom-area">
            <van-tag color="#FEFAE8" text-color="#FF9900" size="large">¥345.00</van-tag>
            <div class="right-item">
              <van-button type="primary" size="mini">申请退款</van-button>
            </div>
          </div>
        </section>
      </van-checkbox-group>
    </van-list>

    <div class="bottom-tool">
      <div class="select-all-bar">
        <van-config-provider :theme-vars="themeVars">
          <van-checkbox
          v-model="isSelectAll"
          @change="toggleAll"
          >
            全选
          </van-checkbox>
        </van-config-provider>
      </div>

      <div class="summary-bar">
        <div class="delete-wrapper">
          <van-icon v-show="checkedGoods.length > 0" name="delete"  color="#3693FF" size="24px" />
          <p v-show="checkedGoods.length > 0">删除商品</p>
        </div>
        <div class="money-wrapper">
          <span class="money-text">合计: ¥<strong>{{ checkedAmount }}</strong></span>
          <van-button style="padding: 0 30px;font-size: 16px;" type="primary" size="small">结算</van-button>
        </div>
        
      </div>
    </div>
    
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
    align-items: center;
    /* border-bottom: 0.5px solid #DCDCDC; */
    .left-image{
      width: 54px;
      height: 44px;
      /* margin-right: 8px;
      box-sizing: content-box; */
      img{
        width: 100%;
        /* height: 100%; */
      }
    }
    .right-desc{
      width: 100%;
      margin-left: 8px;
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
    padding-left: 28px;
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