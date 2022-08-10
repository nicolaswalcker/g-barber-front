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
    <template v-if="getUser.data[0].is_admin === 1">
      <router-link
        class="router-links"
        :to="{ name: 'Criar Serviço' }"
      >
        Criar serviço
      </router-link>
      <router-link
        class="router-links"
        :to="{ name: 'Dashboard' }"
      >
        Dashboard
      </router-link>
    </template>
    <article
      class="header__content"
    >
      <div class="header__content-profile">
        <img
          src="@/assets/img/profile.jpg"
          alt="Amagiri Ayato"
          class="header__content-profile__image"
        >
        <p class="header__content-profile__infos">
          Bem vindo,
          <span class="header__content-profile__infos-name">{{
            getUser.data ? getUser.data[0].name : "Nicolas Walcker"
          }}</span>
        </p>
      </div>
      <a
        href="#"
        class="header__content-profile__logout"
        @click.prevent="logOff()"
      >
        <power-icon size="1.5x" />
      </a>
    </article>
  </header>
</template>

<script>
import { PowerIcon } from 'vue-feather-icons';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'HeaderElement',
  components: {
    PowerIcon,
  },
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
    ...mapActions(['logoutUser']),
    logOff() {
      this.logoutUser();
      this.$router.push({ name: 'Login' });
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

  .router-links {
    color: $orange;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    width: auto;
    white-space: nowrap;

    &:hover {
      color: $white;
    }
  }

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
