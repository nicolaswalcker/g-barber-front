<template>
  <h1 class="section__title">
    {{ titleText }}
  </h1>
</template>

<script>
  export default {
    name: 'TitleElement',
    props: {
      titleText: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style lang="scss" scoped>
.section__title {
  font-size: 36px;
  font-weight: 500;
  color: $white;
}
</style>