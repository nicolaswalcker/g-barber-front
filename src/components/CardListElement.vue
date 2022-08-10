<template>
  <section class="cards-container">
    <slot />
  </section>
</template>

<script>
  export default {
    name: 'CardListElement',
  };
</script>

<style lang="scss" scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: 117px;
  gap: 20px 70px;
}
</style>