<template>
  <a
    href="#"
    class="barber-card"
  >
    <section class="barber-card__content">
      <h2 class="barber-card__content-name">
        {{ service.name }}
      </h2>
      <p class="barber-card__content-infos">
        <span class="barber-card__content-infos__text"><dollar-sign-icon
          size="1.5x"
          class="barber-card__content-infos__text__icon"
        />R${{ service.value }}</span>
        <span class="barber-card__content-infos__text"><clock-icon
          size="1.5x"
          class="barber-card__content-infos__text__icon"
        />{{ service.duration }} minutos</span>
      </p>
    </section>
  </a>
</template>

<script>
import {  ClockIcon, DollarSignIcon } from 'vue-feather-icons';
  export default {
    name: 'CardElement',
    components: {
      ClockIcon,
      DollarSignIcon
    },
    props: {
      service: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
.barber-card {
  background: $shape;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 0 0 rgba(0, 0, 0, 1);
  padding: 1rem;
  gap: 20px;
  height: 100%;
  width: 100%;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 1);
  }

  &__image {
    max-width: 72px;
    border-radius: $radius-full;
  }

  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: 12px;

    &-name {
      color: $white;
      font-weight: 500;
      font-size: 18px;
    }

    &-infos {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      color: $gray;
      font-size: 12px;
      gap: 6px;

      &__text {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        gap: 0.5rem;

        &__icon {
          color: $orange;
        }
      }
    }
  }
}
</style>