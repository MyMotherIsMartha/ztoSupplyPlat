<!--
 * @Date: 2022-12-25 18:15:28
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-26 14:44:57
 * @FilePath: /ztoSupplyPlat/src/views/counterman/counterGoodDetail.vue
-->
<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRefs } from "vue";
import testImg from '@/assets/images/apple-item.png';

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
});
</script>

<template>
  <div>
    <CustomHeader title="商品详情" />
    <section
      class="good-section"
    >
      <div class="top-area">
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
    </section>

    <section class="image-area">
      <p class="area-title">取货图片</p>
      <ul class="image-list">
        <li class="image-upload">
          <img src="@/assets/images/image-upload.png">
        </li>
        <li class="image-item" v-for="(item, index) in imageList" :key="index">
          <van-icon name="clear" class="close-icon" color="#ccc" size="20px" />
          <img :src="item.url">
        </li>
      </ul>
    </section>
  </div>
</template>



<style lang="scss" scoped>
.good-section{
  padding: 0px 16px;
  margin: 10px 0;
  background: #fff;
  .top-area{
    display: flex;
    padding: 13px 0px;
    justify-content: flex-start;
    /* border-bottom: 0.5px solid #DCDCDC; */
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
}

.image-area{
  padding: 13px 16px;
  background: #fff;
  .area-title{
    font-size: 14px;
    color: #333;
    line-height: 20px;
    font-weight: 500;
  }
  .image-list{
    padding: 8px 0;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    .image-upload{
      img{
        width: 100%;
        height: 100%;
      }
    }
    .image-item{
      position: relative;
      .close-icon{
        position: absolute;
        left: -6px;
        top: -6px;
      }
      img{
        width: 100%;
      }
    }
  }
}
</style>