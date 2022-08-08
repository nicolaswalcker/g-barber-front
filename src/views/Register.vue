<template>
  <main class="section register">
    <article class="register__content">
      <svg-element
        name="GBarberLogo"
        type="logo"
        title="GBarberLogo"
      />
      <form class="register__content-form">
        <ul class="register__content-form__options">
          <li class="register__content-form__options-item">
            <a
              href="#"
              class="register__content-form__options-item__link"
              :class="{ 'active': !isRegisterAdmin }"
              @click.prevent="changeToClient()"
            >Sou cliente</a>
          </li>
          <li class="register__content-form__options-item">
            <a
              href="#"
              class="register__content-form__options-item__link"
              :class="{ 'active': isRegisterAdmin }"
              @click.prevent="changeToAdmin()"
            >Sou cabeleleiro</a>
          </li>
        </ul>
        <article class="register__content-form__fields">
          <input-element
            input-name="username"
            input-type="username"
            input-placeholder="Nome"
            input-icon="user"
            class="register__content-form__fields-input"
            autocomplete="current-password"
          />
          <input-element
            class="register__content-form__fields-input"
            autocomplete="username"
          />
          <input-element
            input-name="password"
            input-type="password"
            input-placeholder="Senha"
            input-icon="lock"
            class="register__content-form__fields-input"
            autocomplete="current-password"
          />
          <button-element
            class="register__content-form__button"
            button-type="submit"
            button-text="Cadastrar"
          />
        </article>
      </form>
      <a
        href="#"
        class="register__content-form__back"
      > <arrow-left-icon
        size="1.5x"
        class="custom-class"
      /> Voltar para o login</a>
    </article>
    <figure class="register__image" />
  </main>
</template>

<script>
import ButtonElement from '../components/ButtonElement.vue';
import InputElement from '../components/InputElement.vue';
import { ArrowLeftIcon } from 'vue-feather-icons';
export default {
  name: 'RegisterPage',
  components: { InputElement, ButtonElement, ArrowLeftIcon },
  data() {
    return {
      isRegisterAdmin: false
    };
  },
  methods: {
    changeToAdmin() {
      this.isRegisterAdmin = true;
    },
    changeToClient() {
      this.isRegisterAdmin = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  @include breakpoint(small-up) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  &__image {
    min-width: 50%;
    width: 780px;
    height: 100%;
    background-image: url('../assets/img/img-register.jpg');
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
      gap: 2.5rem;

      &__button {
        margin-top: 1rem;
      }

      &__options {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 24px;
        height: 100%;

        &-item {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          height: 50px;

          &__link {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            text-decoration: none;
            font-weight: 500;
            color: $gray;
            min-height: 100% !important;

            &::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              width: 0;
              height: 3px;
              background-color: $orange;
              transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
              transform: translate(-50%, -50%);
            }

            &.active::after {
              width: 100%;
            }

            &.active,
            &:hover {
              color: $white;
            }
          }
        }
      }

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

      &__back {
        color: $white;
        text-decoration: none;
        font-size: 14px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

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