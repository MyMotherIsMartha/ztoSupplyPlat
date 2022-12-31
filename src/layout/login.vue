<!--
 * @Date: 2022-12-23 16:26:04
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-30 16:46:43
 * @FilePath: /ztoSupplyPlat/src/layout/login.vue
-->
<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRefs } from "vue";
import { getTest } from "@/api/home";
import { useRouter } from 'vue-router'
import logo from "@/assets/logo.png";

const useShowList = () => {
  const state = reactive({
    username: 'conuter',
    password: '123',
    isRemember: false
  });
  return toRefs(state);
};
const { username, password, isRemember } = useShowList();
const router = useRouter()


const onSubmit = () => {
  console.log(username.value)
  if (username.value === 'conuter') {
    router.push({
      name: 'counterOrder'
    })
  } else if(username.value === 'customer') {
    router.push({
      name: 'customerIndex'
    })
  }
}

onMounted(() => {
  // getTestData();
});
</script>

<template>
  <div class="login-wrapper">
    <div class="login-form">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="宝盒账号"
            label="宝盒账号"
            placeholder="宝盒账号"
            :rules="[{ required: true, message: '请填写宝盒账号' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <p class="remember-account">
            <van-checkbox v-model="isRemember">记住账号密码</van-checkbox>
          </p>
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>

    </div>
  </div>
</template>



<style lang="scss" scoped>
.login-wrapper{
  width:100%;
  height: 100vh;
  background: url('@/assets/images/login-bg.png') no-repeat 0 0;
  background-size: 100%;
  .login-form{
    padding-top: 30vh;
  }
  .remember-account{
    height: 40px;
    color: #B1B1BB;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
h1 {
  display: block;
  font-size: 40px;
  text-align: center;
  padding: 20px 0;
}
ul {
  li {
    display: block;
    font-size: 20px;
    padding: 20px 0;
    text-align: center;
  }
}
</style>