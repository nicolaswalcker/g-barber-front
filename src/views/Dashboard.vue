<template>
  <section class="main dashboard">
    <title-element />
    <p class="dashboard__hour">
      Dia 6 - Segunda-feira
    </p>
    <dashboard-cards-list>
      <dashboard-card-element />
    </dashboard-cards-list>
  </section>
</template>

<script>
import TitleElement from '@/components/TitleElement.vue';
import DashboardCardsList from '@/components/DashboardCardsList.vue';
import DashboardCardElement from '@/components/DashboardCardElement.vue';
export default {
  name: 'Dashboard',
  components: { TitleElement, DashboardCardsList, DashboardCardElement },
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
