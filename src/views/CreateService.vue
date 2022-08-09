<template>
  <section class="section login">
    <article class="login__content">
      <svg-element
        name="GBarberLogo"
        type="logo"
        title="GBarberLogo"
      />
      <form class="login__content-form">
        <h1 class="login__content-form__title">
          Criar novo serviço
        </h1>
        <article class="login__content-form__fields">
          <input-element
            class="login__content-form__fields-input"
            autocomplete="username"
            input-placeholder="Nome do serviço"
          />
          <input-element
            input-placeholder="Valor do serviço"
            class="login__content-form__fields-input"
            autocomplete="current-password"
          />
          <input-element
            input-placeholder="Duração do serviço do serviço"
            class="login__content-form__fields-input"
            autocomplete="current-password"
          />
        </article>
        <button-element
          class="login__content-form__button"
          button-type="submit"
          button-text="Criar serviço"
        />
      </form>
    </article>
    <figure class="login__image" />
  </section>
</template>

<script>
import ButtonElement from '../components/ButtonElement.vue';
import InputElement from '../components/InputElement.vue';
export default {
  name: 'LoginPage',
  components: { InputElement, ButtonElement },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  @include breakpoint(small-up) {
    flex-direction: row;
    justify-content: space-between;
  }

  &__image {
    min-width: 50%;
    width: 780px;
    height: 100%;
    background-image: url('../assets/img/img-login.png');
    background-repeat: no-repeat;
    background-size: cover;
    mix-blend-mode: hard-light;
    display: none;

    @include breakpoint(small-up) {
      display: block;
    }
  }

  &__content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    &-form {
      width: 80%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      @include breakpoint(medium-up) {
        width: 50%;
      }

      &__title {
        font-size: 20px;
        font-weight: 500;
        color: $white;
      }

      &__fields {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }

      &__forgot {
        color: $white;
        text-decoration: none;
        font-size: 14px;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          bottom: -20%;
          left: 0;
          width: 0;
          height: 2px;
          background-color: $white;
          opacity: 0.5;
          transition: width 0.3s ease-in-out;
        }

        &:hover::before {
          width: 100%;
        }
      }
    }

    &__create-password {
      justify-self: flex-end;
      text-decoration: none;
      color: $orange;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
}
</style>
