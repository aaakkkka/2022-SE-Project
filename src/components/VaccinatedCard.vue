<template>
    <router-link :to="{name:'VaccinatedAllInfo', params: { id: vaccinated.id } }">
        <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img class="object-cover w-full h-56" :src="vaccinated.image" alt="avatar">
            <div class="py-5 text-center">
                <router-link :to="{name:'VaccinatedInfo', params: { id: vaccinated.id }}" class="block text-2xl font-bold text-gray-800 hover:text-green-500">{{vaccinated.name}} {{vaccinated.surname}}</router-link>

                <router-link :to="{name:'VaccinatedVaccine', params: { id:vaccinated.id }}"
                  v-if="vaccinated.vaccine.length == 1" 
                  class="text-sm text-gray-700 hover:text-green-300">
                    only got 1 dose 
                </router-link>

                <router-link :to="{name:'VaccinatedVaccine', params: { id:vaccinated.id }}"
                  v-else-if="vaccinated.vaccine.length == 2" 
                  class="text-sm text-gray-700 hover:text-green-300">
                    already got 2 dose 
                </router-link>

                <router-link :to="{name:'VaccinatedVaccine', params: { id:vaccinated.id }}"
                  v-else-if="vaccinated.vaccine.length == 3" 
                  class="text-sm text-gray-700 hover:text-green-300">
                    got 3 dose (booster) 
                </router-link>

            </div>
        </div>
    </router-link>
</template>

<script>
export default {
  name: 'VaccinatedCard',
  props: {
      vaccinated: {
          type: Object,
          required: true,
      },
  },
}
</script>

<style scoped>
.passenger-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #145e1e;
  margin-bottom: 18px;
}
.passenger-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: green;
  text-decoration: none;
}
</style>