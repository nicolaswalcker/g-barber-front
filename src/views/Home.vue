<template>
  <div class="scheduling main">
    <title-element title-text="Agendamento" />
    <section class="scheduling__container">
      <a
        v-for="service in getAllServices"
        :key="service.id"
        :class="{ 'active': service.id === selectedService }"
        class="scheduling__barber-card"
        href="#"
        @click.prevent="selectService(service)"
      >
        <p class="schedling__barber-card__name">
          {{ service.name }}
        </p>
      </a>
    </section>
    <section class="scheduling__fields">
      <label
        class="scheduling__fields-label"
        for="date"
      >
        Data
        <input
          id="date"
          v-model="date"
          class="scheduling__fields-input"
          type="date"
          name="date"
        >
      </label>
      <label
        class="scheduling__fields-label"
        for="hour"
      >
        Horário
        <input
          id="hour"
          v-model="hour"
          class="scheduling__fields-input"
          type="time"
          name="hour"
        >
      </label>
      <button-element
        :button-text="'Agendar'"
        @button-action="createNewSchedule()"
      />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ButtonElement from '../components/ButtonElement.vue';
import TitleElement from '../components/TitleElement.vue';
export default {
  name: 'Scheduling',
  components: { TitleElement, ButtonElement },
  data() {
    return {
      selectedService: '',
      date: '',
      hour: '',
    };
  },
  computed: {
    ...mapGetters(['getAllServices', 'getUser', 'getUserIsLoggedIn']),
  },
  created() {
    this.getService();

    if(!this.getUserIsLoggedIn) {
      this.$router.push('/login');
    }
  },
  methods: {
    ...mapActions(['getService', 'createSchedule']),
    selectService(service) {
      this.selectedService = service.id;
    },

    async createNewSchedule() {
     await this.createSchedule({
        user_id: this.getUser.data[0].id,
        service_id: this.selectedService,
        init: `${this.date} ${this.hour}`,
      });
      this.$router.push('/success-scheduling');
    },
  },
};
</script>

<style lang="scss" scoped>
.scheduling {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  &__container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  &__barber-card {
    background: $orange;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    gap: 0.5rem;
    border-radius: 10px;
    min-width: 175px;
    min-height: 50px;
    text-decoration: none;
    color: $black-medium;
    transition: all 0.2s ease;

    &.active {
      background: $black-medium;
      color: $white;
    }

    &__image {
      max-width: 32px;
      border-radius: $radius-full;
    }
  }

  &__fields {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;

    &-label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 0.5rem;
      color: $white;
      font-size: 1.5rem;
    }

    &-input {
      border: none;
      border-radius: $radius-full;
      padding: 0.5rem;
      width: 100%;
      background: $shape;
      color: $white;

      &::-webkit-calendar-picker-indicator {
        filter: invert(1);
      }
    }
  }
}
</style>
