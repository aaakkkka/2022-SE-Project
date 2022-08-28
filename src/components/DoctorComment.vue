<script>
import dayjs from 'dayjs'
export default {
    props:['doctor'],
    data(){
        return {
            date:''
        }
    },

    created() {
        const d = dayjs(this.doctor.comment_date);
        this.date = d.format('dddd MMMM D, YYYY');
    }
}
</script>
<template>
        <div class="flex max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <img class="w-1/5 bg-cover" :src="doctor.comment_pic" />

        <div class="w-4/5 p-4 md:p-4">
            <h1 class="text-2xl font-bold text-gray-800">{{doctor.comment_by}}</h1>

            <p class="mt-5 text-lg font-medium text-gray-600">{{doctor.comment}}</p>

            <p class="mt-5 text-sm font-normal text-gray-700">comment on : {{this.date}}</p>
        </div>
    </div>
</template>