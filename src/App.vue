<template>
  <div id="app">
    <CepPage/>
    <router-view></router-view>
  </div>
</template>

<script>
import CepPage from './components/cep/CepPage.vue'

export default {
  name: 'App',
  components: {
    CepPage
  }
}
</script>

<style>
</style>
