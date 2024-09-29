<template>

    <div class="h-full 2xl:h-screen p-2">
        <div class="box-border flex flex-col justify-evenly h-full border-8 border-blue-800 p-2">
            <h1 class="text-4xl text-center my-1">Mes projets</h1>

            <ImagesProjets />

            <div class="flex justify-center">
                <a href="#contact">
                    <div
                        class="w-48 px-6 py-1 text-xl rounded-2xl bg-blue-800 text-white hover:bg-white hover:border hover:border-blue-800 hover:text-blue-800">
                        <button class="w-full">
                            Me contacter
                        </button>
                    </div>
                </a>
            </div>
        </div>


    </div>
    <div class="bg-blue-800">
        <Contact id="contact"/>
    </div>

</template>



<script setup>
import ImagesProjets from '../components/ImagesProjets.vue'
import Contact from '../components/Contact.vue'

</script>
