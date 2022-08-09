<template>
  <div class="home main">
    <title-element title-text="Cabeleireiros" />
    <card-list-element>
      <card-element
        v-for="(card, index) in 10"
        :key="index"
        barber-name="Nicolas"
      />
    </card-list-element>
  </div>
</template>

<script>
import CardElement from '@/components/CardElement.vue';
import CardListElement from '@/components/CardListElement.vue';
import TitleElement from '@/components/TitleElement.vue';
  export default {
    name: 'Home',
    components: {
        CardElement,
        CardListElement,
        TitleElement
    },
  };
</script>
