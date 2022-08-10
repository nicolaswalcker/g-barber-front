<template>
  <main class="section success">
    <svg-element
      name="IconCheck"
      type="icon"
      title="IconCheck"
    />
    <article class="success__content">
      <h2 class="success__content-title">
        Serviço agendado
      </h2>
      <p class="success__content-text">
        Agendamento cadastrado
      </p>
    </article>
    <button-element
      :button-active="true"
      :button-text="'Ok'"
      class="success__button"
      @button-action="toSucces()"
    />
  </main>
</template>

<script>
import ButtonElement from '../components/ButtonElement.vue';
export default {
  name: 'RegisterSuccess',
  components: { ButtonElement },
  methods: {
    toSucces() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.success {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 1rem;

    &-title {
      color: $white;
      font-size: 30px;
      font-weight: 500;
      max-width: 50%;
      line-height: 40px;
    }

    &-text {
      color: $gray;
      font-size: 14px;
      font-weight: 500;
      max-width: 70%;
      line-height: 24px;
    }
  }

  &__button {
    min-width: 100px;
  }
}
</style>
