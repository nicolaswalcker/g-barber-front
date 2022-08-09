<template>
  <article class="dashboard-card">
    <p class="dashboard-card__hour">
      <clock-icon
        size="1.5x"
        class="dashboard-card__icon"
      /> 8:30
    </p>
    <section class="dashboard-card__content">
      <img
        src="@/assets/img/profile.jpg"
        alt="#"
        class="dashboard-card__content-image"
      >
      <h2 class="dashboard-card__content-name">
        Nicolas Walcker
      </h2>
    </section>
  </article>
</template>

<script>
import { ClockIcon } from 'vue-feather-icons';
  export default {
    name: 'DashboardCardElement',
    components: { ClockIcon },
  };
</script>

<style lang="scss" scoped>
.dashboard-card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;

  &__icon {
    color: $orange;
  }

  &__hour {
    color: $white;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__content {
    background: $shape;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    gap: 1rem;
    min-height: 88px;
    padding: 0 1rem;
    width: 100%;

    &-image {
      max-width: 50px;
      border-radius: $radius-full;

      @include breakpoint(medium-up) {
        max-width: 72px;
      }
    }

    &-name {
      color: $white;
      font-weight: 500;
      font-size: 18px;

      @include breakpoint(medium-up) {
        font-size: 24px;
      }
    }
  }
}
</style>