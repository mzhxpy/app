<template>
  <div>
    <StoreHeader></StoreHeader>
    <router-view></router-view>
    <!--在Home、Search显示，在登录、注册隐藏-->
    <StoreFooter v-show="$route.meta.show"></StoreFooter>
  </div>


</template>

<script>
//引入
import StoreHeader from "@/components/StoreHeader";
import StoreFooter from "@/components/StoreFooter";

export default {
  name: '',
  components: {
    StoreHeader,
    StoreFooter,
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>