<template>
  <section class="main dashboard">
    <title-element title-text="Dashboard" />
    <dashboard-cards-list v-if="getAllSchedules">
      <dashboard-card-element
        v-for="schedule in filterSchedules"
        :key="schedule.id"
        :schedule="schedule"
      />
    </dashboard-cards-list>
    <p
      v-else
      class="dashboard__no-schedules"
    >
      Nenhum agendamento encontrado
    </p>
  </section>
</template>

<script>
import TitleElement from '@/components/TitleElement.vue';
import DashboardCardsList from '@/components/DashboardCardsList.vue';
import DashboardCardElement from '@/components/DashboardCardElement.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Dashboard',
  components: { TitleElement, DashboardCardsList, DashboardCardElement },
  computed: {
    ...mapGetters(['getAllSchedules', 'getUser']),
    getActualDate() {
      let date = new Date();

      let day = date.toLocaleString('pt-BR', {
        weekday: 'long',
      });

      return `${day}`;
    },

    filterSchedules() {
      if(this.getAllSchedules.data) {
       return this.getAllSchedules.data.filter(schedule => schedule.user_id === this.getUser.data[0].id);
      }

      return [];
    },
  },

  created() {
    this.getSchedules();
  },

  methods: {
    ...mapActions(['getSchedules']),
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  padding: 1rem;

  &__hour {
    color: $orange;
  }
}
</style>
