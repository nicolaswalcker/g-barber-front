<template>
  <section class="main dashboard">
    <title-element title-text="Dashboard" />
    <p class="dashboard__hour">
      {{ getActualDate }}
    </p>
    <dashboard-cards-list>
      <dashboard-card-element
        v-for="schedule in getAllSchedules.data"
        :key="schedule.id"
        :schedule="schedule"
      />
    </dashboard-cards-list>
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
  },

  created() {
    this.getSchedules();

    if(this.getUser.data[0].is_admin === 0) {
      this.$router.push('/');
    }
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
