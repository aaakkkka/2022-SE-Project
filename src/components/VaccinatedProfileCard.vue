<script>
export default {
    props: ['vaccinatedPerson'],
    data() {
        return {
            age: 0,
        }
    },
    created() {
        const date = new Date()
        const current = new Date(this.vaccinatedPerson.birthday)
        this.age = parseInt(date.getFullYear()) - parseInt(current.getFullYear())
    },
}
</script>
<template>
    <div>
        <h1 class="text-3xl font-bold pt-8 lg:pt-0">
            <span v-if="vaccinatedPerson.sex == 'male'">Mr. </span>
            <span v-else>Ms.</span>
            {{ this.vaccinatedPerson.name }} {{ this.vaccinatedPerson.surname }}
        </h1>

        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

        <p class="pt-4 text-base font-medium flex items-center justify-center lg:justify-start">
            <span class="font-bold px-1">Sex: </span> {{ this.vaccinatedPerson.sex }}
        </p>

        <p class="pt-4 text-base font-medium flex items-center justify-center lg:justify-start">
            <span class="font-bold px-1">Hometown: </span> {{ this.vaccinatedPerson.hometown }}
        </p>

        <p class="pt-4 text-base font-medium flex items-center justify-center lg:justify-start">
            <span class="font-bold px-1">Age: </span> {{ this.age }}
        </p>
    </div>
</template>

