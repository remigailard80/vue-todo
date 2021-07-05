<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import store from './store';

export default {
  name: 'App',
  store
}
</script>

<style lang="scss">
// this.getOptions is not a function 에러 해결법 : https://wotres.tistory.com/entry/vue-error-%ED%95%B4%EA%B2%B0%EB%B2%95-Syntax-Error-TypeError-thisgetOptions-is-not-a-function
// 버전 문제. vue 2.6 버전은 sass-loader 11버전 호환하지 않는다.
@import '~@/assets/scss/common';
</style>
