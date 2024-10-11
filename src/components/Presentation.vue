<template>

        <div>
            <p class="text-4xl">Bienvenue ! </p>

            <ul class="flex justify-center gap-1">
                <li @click="section = 'presentation'"
                    class="cursor-pointer xl:text-xl text-xs xl:mx-4 mx-2 xl:my-6 my-4 border-white border hover:text-blue-800 hover:bg-white rounded-lg xl:px-6 px-2 py-1">
                    Présentation
                </li>
                <li @click="section = 'langues'"
                    class="cursor-pointer xl:text-xl text-xs xl:mx-4 mx-2 xl:my-6 my-4 border-white border hover:text-blue-800 hover:bg-white rounded-lg xl:px-6 px-2 py-1">
                    Langues
                </li>
                <li @click="section = 'softskills'"
                    class="cursor-pointer xl:text-xl text-xs xl:mx-4 mx-2 xl:my-6 my-4 border-white border hover:text-blue-800 hover:bg-white rounded-lg xl:px-6 px-4 py-1">
                    Qualités
                </li>
            </ul>

            <p v-if="section === 'presentation'" class="xl:text-xl text-xs mt-2">
                Actuellement en formation CDA (Concepteur et Développeur d'Applications), je
                concrétise ma passion pour le développement web et applications mobiles, que je pratique en
                autodidacte depuis longtemps. Je suis en train non seulement d'obtenir mon diplôme, mais aussi de 
                développer des projets à côté pour améliorer mes compétences.
            </p>

            <div v-if="section === 'langues'" class="xl:text-xl text-md flex gap-12 justify-center mt-5 ">
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/france.png" class="w-28">
                    <p>Français</p>
                    <p>Bilingue</p>
                </div>

                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/espagne.png" class="w-28">
                    <p>Espagnol</p>
                    <p>Bilingue</p>
                </div>

                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/angleterre.png" class="w-28 height">
                    <p>Anglais</p>
                    <p>Courant</p>
                </div>

                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/maroc.png" class="w-28">
                    <p>Arabe</p>
                    <p>Courant</p>
                </div>
            </div>

            <div v-if="section === 'softskills'" class="xl:text-xl text-xs flex flex-col items-center px-8 mt-3">
                <ul class="text-left list-disc">
                    <li><strong>Getion du temps: </strong>&nbsp; Je sais m'organiser et gérer mon temps dans la journée </li>
                    <li><strong>Communniation: </strong>&nbsp; La communication est mon point fort au sein de mon équipe</li>
                    <li><strong>Créatif: </strong>&nbsp; J'ai la touche créative pour troiver la solution à une faille </li>
                    <li><strong>Le détail: </strong>&nbsp; Je passe du temps à essayer d'améliorer mon code et de le simplifier
                    </li>
                </ul>
            </div>
        </div>

</template>


<script setup>
import { ref } from 'vue';

const section = ref('presentation')

</script>

<style scoped></style>