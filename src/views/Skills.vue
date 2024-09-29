<template>
    <div class="h-screen overflow-y-scroll scroll-smooth">

        <div class="w-full h-2/5 flex justify-center items-end">
            <img src="../assets/ordis.png" class="xl:w-96 w-64">
        </div>
        
        <div class="flex flex-col justify-between w-full h-3/5 bg-blue-800 xl:px-52 xl:py-5 px-4 py-1 text-center text-white">
            <Presentation />
            <div class="flex justify-center">
                <button
                    class="xl:text-2xl text-md xl:mx-4 mx-2 xl:my-8 mb-4 rounded-2xl hover:rounded-2xl bg-white text-blue-800 hover:text-white hover:bg-blue-800 hover:border hover:border-white xl:px-6 px-2 py-1">
                    <a href="#webskills">
                        Mes skills du web 💪
                    </a>
                </button>
            </div>
        </div>
        <WebSkills id="webskills" />


    </div>

</template>


<script setup>
import WebSkills from "@/components/WebSkills.vue";
import Presentation from "../components/Presentation.vue";

</script>