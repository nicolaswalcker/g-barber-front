<template>
  <div class="input">
    <component
      :is="returnInputIcon"
      size="1.5x"
      class="input__icon"
    />
    <input
      :type="inputType"
      class="input__field"
      :placeholder="inputPlaceholder"
    >
  </div>
</template>

<script>
import { LockIcon, MailIcon, UserIcon } from 'vue-feather-icons';
export default {
  name: 'InputElement',
  components: {
    LockIcon,
    MailIcon,
    UserIcon,
  },
  props: {
    inputType: {
      type: String,
      default: 'text',
    },
    inputPlaceholder: {
      type: String,
      default: 'Email',
    },
    inputIcon: {
      type: String,
      default: 'mail',
    },
  },

  computed: {
    returnInputIcon(){
      switch (this.inputIcon) {
        case 'lock':
          return 'LockIcon';
        case 'mail':
          return 'MailIcon';
        case 'user':
          return 'UserIcon';
        default:
          return 'MailIcon';
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.input {
  color: $gray-hard;
  position: relative;

  &__field {
    border-radius: $border-4;
    min-height: 60px;
    width: 100%;
    background: $inputs;
    border: none;
    outline: none;
    padding: 0 3rem;
    color: $gray-hard;
    font-weight: 500;
  }

  &__icon {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 1%;
  }
}
</style>
