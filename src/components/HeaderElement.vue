<template>
  <header class="header">
    <router-link :to="{ name: 'Home' }">
      <svg-element
        name="GBarberLogo"
        type="logo"
        title="GBarberLogo"
        class="header__logo"
      />
    </router-link>
    <article class="header__content">
      <div class="header__content-profile">
        <img
          src="@/assets/img/profile.jpg"
          alt="Amagiri Ayato"
          class="header__content-profile__image"
        >
        <p class="header__content-profile__infos">
          Bem vindo,
          <span class="header__content-profile__infos-name">{{ barberName }}</span>
        </p>
      </div>
      <a
        href="#"
        class="header__content-profile__logout"
      >
        <power-icon size="1.5x" />
      </a>
    </article>
  </header>
</template>

<script>
import { PowerIcon } from 'vue-feather-icons';
export default {
  name: 'HeaderElement',
  components: {
    PowerIcon,
  },
  props: {
    barberName: {
      type: String,
      default: 'Nicolas Walcker',
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  max-height: 144px;
  background: $black-medium;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
  padding: 1rem;

  @include breakpoint(medium-up) {
    padding: 0 160px;
  }

  &__logo {
    max-width: 140px;
    display: none;

    @include breakpoint(medium-up) {
      display: block;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &-profile {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      &__image {
        max-width: 60px;
        border-radius: $radius-full;
      }

      &__infos {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.75rem;
        color: $gray;

        &-name {
          color: $orange;
        }
      }

      &__logout {
        color: $gray;
        transition:
          transform 800ms $transition-function-elastic,
          color 300ms $transition-duration-entrance,
          filter 300ms $transition-duration-entrance;
        filter: drop-shadow(0 0 0 $white);

        &:hover {
          transform: rotate(360deg);
          color: $white;
          text-shadow: 2px 2px;
          filter: drop-shadow(0 0 3px $white);
        }
      }
    }
  }
}
</style>
