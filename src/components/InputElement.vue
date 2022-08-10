<template>
  <div class="input">
    <component
      :is="returnInputIcon"
      v-if="inputIcon"
      size="1.5x"
      class="input__icon"
    />
    <input
      :type="inputType"
      class="input__field"
      :placeholder="inputPlaceholder"
      :name="inputName"
      :value="value"
      v-bind="$attrs"
      @input="updateValue($event.target.value)"
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
  inheritAttrs: false,
  props: {
    inputType: {
      type: String,
      default: 'text',
    },
    inputPlaceholder: {
      type: String,
      default: 'E-mail',
    },
    inputIcon: {
      type: String,
      default: ''
    },
    inputName: {
      type: String,
      default: 'email',
    },
    value: {
      type: [String, Number],
      required: true
    },
  },

  computed: {
    returnInputIcon(){
      let icons = {
        lock: LockIcon,
        mail: MailIcon,
        user: UserIcon,
        default: null
      };

      return icons[this.inputIcon];
    },
  },
   methods: {
    updateValue(value) {
      this.$emit('input', value);
    }
  },
};
</script>

<style lang="scss" scoped>
.input {
  color: $gray-hard;
  position: relative;
  width: 100%;
  height: 100%;

  &__field {
    border-radius: $border-4;
    min-height: 60px;
    width: 100%;
    background: $inputs !important;
    border: none;
    outline: none;
    padding: 0 3rem;
    color: $gray-hard;
    font-weight: 500;
  }

  &__icon {
    position: absolute;
    transform: translate(0, -50%);
    top: 50%;
    left: 15px;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s;
}
</style>
