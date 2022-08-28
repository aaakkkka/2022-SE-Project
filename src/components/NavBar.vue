<script>
export default {
    inject:['GlobalState'],
    data(){
       return {
           toggle:false,
           doctors:[
               "Roger",
               "Lipton",
               "SomChai",
               "Lillie",
               "Light"
           ]
       }
   }, 
   methods: {
       show(){
           this.toggle = !this.toggle
       }
   },
}
</script>
<template>
    <nav class="bg-white shadow dark:bg-gray-800">
        <div  class="container px-6 py-4 mx-auto">
            <div v-if="GlobalState.isdoctor" class="md:flex md:items-center md:justify-between">
                
                <div class="flex items-center justify-between">
                    <div class="text-xl font-semibold text-gray-700">
                        <router-link class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700" :to="{name:'Doctor',params:{name:GlobalState.doctorName}}">SE331</router-link>
                    </div>
                </div>

                <div class="flex-1 md:flex md:items-center md:justify-between">
                    <div class="flex flex-row -mx-4 md:flex-row md:items-center md:mx-8">
                        <router-link :to="{name:'Doctor',params:{name:GlobalState.doctorName}}" class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 hover:bg-gray-300">Home</router-link>
                    </div>

                    <div class="flex items-right mt-4 md:mt-0 relative">
                        <button class="relative z-10 block p-2 bg-white rounded-md" @click="show">
                            Welcome Doctor. {{GlobalState.doctorName}} 
                        </button>
                        <div v-if="toggle" class="absolute right-0 z-20 w-48 py-4 md:mt-10 bg-white rounded-md shadow-xl">
                            <router-link to="/" @click="show" 
                            class="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform hover:bg-blue-500 hover:text-white">
                                Logout 
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="md:flex md:items-center md:justify-between">
                
                <div class="flex items-center justify-between">
                    <div class="text-xl font-semibold text-gray-700">
                        <router-link class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700" to="/">SE331</router-link>
                    </div>
                </div>

                <div class="flex-1 md:flex md:items-center md:justify-between">
                    <div class="flex flex-row -mx-4 md:flex-row md:items-center md:mx-8">
                        <router-link to="/" class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 hover:bg-gray-300">Home</router-link>
                    </div>

                    <div class="flex items-right mt-4 md:mt-0 relative">
                        <button class="relative z-10 block p-2 bg-white rounded-md" @click="show">
                           Doctor Login 
                        </button>
                        <div v-if="toggle" class="absolute right-0 z-20 w-48 py-4 md:mt-10 bg-white rounded-md shadow-xl">
                            <router-link v-for="doctor in doctors" :key="doctor" :to="{name:'Doctor',params:{name:doctor}}" @click="show" 
                            class="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform hover:bg-blue-500 hover:text-white">
                                 Login as Dr. {{ doctor }} 
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>