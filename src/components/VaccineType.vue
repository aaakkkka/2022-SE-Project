<script>
import dayjs from 'dayjs';

export default {
    props:['vaccine'],
    data(){
        return {
            date:''
        }
    },

    created() {
        const d = dayjs(this.vaccine.vaccinated_date);
        this.date = d.format('dddd MMMM D, YYYY');
    }

}
</script>
<template>
    <div class="flex w-full max-w-sm mx-auto mt-5 overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg">
        <div class="flex items-center justify-center w-12 bg-green-500">
            <p class="text-white font-bold">{{vaccine.short}}</p>
        </div>
        
        <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
                <span class="font-semibold text-green-500 dark:text-green-400">{{vaccine.title}}</span>
                <p class="text-sm text-gray-600 dark:text-gray-200">{{this.date}}</p>
            </div>
        </div>
    </div>
</template>