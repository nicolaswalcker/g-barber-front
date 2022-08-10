<template>
  <div id="app">
    <header-element v-if="showHeader" />
    <router-view />
  </div>
</template>
<script>
import HeaderElement from './components/HeaderElement.vue';
export default {
  name: 'App',
  components: { HeaderElement },
  computed: {
    getCurrentRoute() {
      return this.$route.name;
    },
    showHeader() {
      return {
        'Home': true,
        'Login': false,
        'Cadastro': false,
        'Sucesso': false,
        'Dashboard': true,
        'Agendamento': true,
      }[this.getCurrentRoute];
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/base/_global.scss";
</style>
