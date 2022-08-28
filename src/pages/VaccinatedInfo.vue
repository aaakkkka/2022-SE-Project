<script>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import VaccinatedDeatails from '../layouts/VaccinatedDetails.vue'
import DoctorComment from '../components/DoctorComment.vue'
import DoctorCommentBox from '../components/DoctorCommentBox.vue'
export default {
    inject:['GlobalState'],
    components: {
        DefaultLayout,
        VaccinatedDeatails,
        DoctorComment,
        DoctorCommentBox
    },
}
</script>

<template>
    <DefaultLayout>
        <div class="divide-x-2 divide-green-500">
            <router-link :to="{name:'VaccinatedAllInfo'}" class="text-2xl px-2 font-medium hover:text-green-300">{{GlobalState.vaccinatedPerson.name}} </router-link>
            <router-link :to="{name:'VaccinatedInfo'}"  class="text-2xl px-2 font-medium hover:text-green-300"> Info </router-link>
            <router-link :to="{name:'VaccinatedVaccine'}"  class="text-2xl px-2 font-medium hover:text-green-300"> Vaccine </router-link>
            <span></span>
        </div>
    </DefaultLayout> 
    
    <VaccinatedDeatails :vaccinatedPerson="GlobalState.vaccinatedPerson"/>

    <DefaultLayout>
        <p class="text-3xl text-green-800">Doctor Comment</p>
    </DefaultLayout>

    <DefaultLayout v-if="GlobalState.vaccinatedPerson.doctor_comment.length != 0">
        <DoctorComment v-for="comment in GlobalState.vaccinatedPerson.doctor_comment" :key="comment.comment_date" :doctor="comment"/>
    </DefaultLayout>

    <DefaultLayout v-else>
        <p class="flex item-center justify-center text-1xl mx-auto text-green-800">No comment yet.</p>
        <br />
    </DefaultLayout>

    <DefaultLayout v-if="GlobalState.isdoctor">
        <DoctorCommentBox />
    </DefaultLayout>
    <DefaultLayout v-else>
        <p class="flex item-center justify-center text-1xl mx-auto text-green-800">You need to login as a doctor to comment on this person</p>
        <br />
    </DefaultLayout>
</template>

