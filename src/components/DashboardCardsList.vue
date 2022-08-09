<template>
  <div class="dashboard__section">
    <p class="dashboard-cards__container-title">
      Manhã
    </p>
    <section class="dashboard-cards__container">
      <slot />
    </section>
  </div>
</template>

<script>
  export default {
    name: 'DashboardCardsList',
    components: {
    },
  };
</script>

<style lang="scss" scoped>
.dashboard {
  &__section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
  }

  &-cards__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @include breakpoint (medium-up) {
      width: 50%;
    }

    &-title {
      color: $gray;
      font-size: 20px;
      position: relative;
      width: 50%;

      &::after {
        content: '';
        position: absolute;
        bottom: -1rem;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: $shape;
      }
    }
  }
}
</style>