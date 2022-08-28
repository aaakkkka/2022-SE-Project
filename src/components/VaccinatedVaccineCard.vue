<script>
import VaccineType from '../components/VaccineType.vue'
export default {
    props: ['vaccinatedPerson'],
    components: {
        VaccineType,
    },
}
</script>
<template>
    <div>
        <h1 class="text-3xl font-bold pt-8 lg:pt-0">Receieved Vaccine</h1>

        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

        <div class="pt-6 pb-8">
            <VaccineType v-for="vaccine in this.vaccinatedPerson.vaccine" :key="vaccine.title" :vaccine="vaccine" />
        </div>
    </div>
</template>