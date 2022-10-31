<template>
<div>
  搜索
  <h1>params---{{$route.params.keyword}}====={{keyword}}</h1>
<!--  <h1>query参数-&#45;&#45;{{$router.query.k}}====={{k}}</h1>-->
</div>
</template>

<script>
export default {
  name: "index",
  props:['keyword','k'],
}
</script>

<style scoped>

</style>