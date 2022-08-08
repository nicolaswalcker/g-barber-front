<template>
  <button
    class="button"
    :class="`button${getButtonState}`"
    :disabled="!buttonActive"
    @click="handleButtonAction"
  >
    <p class="button__text">
      {{ buttonText }}
    </p>
  </button>
</template>

<script>
  export default {
    name: 'ButtonElement',
    props: {
      buttonText: {
        type: String,
        required: true
      },
      buttonActive: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      getButtonState(){
        return this.buttonActive ? '--primary' : '--disabled';
      }
    },
    methods: {
      handleButtonAction(){
        this.$emit('button-action');
      }
    }
  };
</script>

<style lang="scss" scoped>
.button {
  min-width: 100%;
  min-height: 3.125rem;
  border-radius: 0.625rem;
  border: none;
  background-color: $orange;

  &__text {
    font-weight: 500;
    font-size: 1rem;
    color: $background;
  }

  &--primary {
    cursor: pointer;
    transition: all ease 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>