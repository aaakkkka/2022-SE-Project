<script>
export default {
    inject:['GlobalState'],
    data(){
        return {
            pic:{
                Roger: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                Lipton:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                SomChai: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
                Lillie: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                Light: "https://images.unsplash.com/photo-1601583789200-96cd7f385315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
            },
            msg:""
        }
    },
    methods:{
        comment(){
            if(this.msg.length === 0){
                alert('you need to tell something to this person...')
                return 
            }
            const comment = {
                id:this.GlobalState.vaccinatedPerson.id,
                comment_pic: this.pic[this.GlobalState.doctorName],
                comment_by: this.GlobalState.doctorName,
                comment: this.msg,
            }
            this.GlobalState.vaccinatedPerson.doctor_comment.push(comment);
            this.GlobalState.doctorComment.push(comment)
        }
    } 
}
</script>
<template>
    <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-3xl font-semibold text-left text-gray-800 dark:text-white">Doctor. {{GlobalState.doctorName}} comment</h2>
        
        <div class="mt-6 ">
            <div class="w-full mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>

                <textarea v-model="msg" class="block w-full h-20 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>

            <div class="flex justify-center mt-6">
                <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" @click="comment()">Send Comment</button>
            </div>
        </div>
    </section>
</template>