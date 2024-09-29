<template>
    <div class="flex flex-wrap justify-center items-center p-4 gap-14">
        
        <div class="relative largeur" @mouseover="hover = 1" @mouseleave="hover = null">
            <img src="../assets/projets/nahla.png" class="largeur rounded-2xl">
            <div v-if="hover === 1" class="absolute top-0 h-full w-full flex flex-col justify-center items-center bg-black bg-opacity-70 rounded-2xl">
                <h2 class="text-sm text-white mb-1 text-center">Nahla Délices</h2>
                <p class="text-white text-xs mb-3 text-center px-4">
                    Création d'un site E-commerce avec le CMS Shopify pour la vente de miels avec une identité visuelle
                    et numérique.<br>
                    Référencement web avec le SEO ( backlinks, mot-clés ) et le SEA ( Google Ades & Meta Ads ) et
                    amélioration infographique avec paint.NET.
                </p>
                <button class="mb-4 hover:bg-blue-800 hover:rounded-2xl">
                    <a href="https://www.nahladelices.com" target="_blank" class="px-2 py-1 text-xs text-white border-2 border-white hover:border-none rounded-2xl">
                        Visiter
                    </a>
                </button>
                <div class="flex text-white gap-2">
                    <p class="text-xs border-2 border-green-500 rounded-2xl px-2 xl:py-1  ">Shopify</p>
                    <p class="text-xs border-2 border-orange-500 rounded-2xl px-2 xl:py-1 ">HTML & CSS </p>
                    <p class="text-xs border-2 border-yellow-500 rounded-2xl px-2 xl:py-1 ">JavaScript </p>
                    <p class="text-xs border-2 border-blue-500 rounded-2xl px-2 xl:py-1 ">SEO & SEA</p>
                </div>
            </div>
        </div>

        <div class="relative largeur" @mouseover="hover = 2" @mouseleave="hover = null">
            <img src="../assets/projets/amorre.png" class="largeur rounded-2xl">
            <div v-if="hover === 2" class="absolute top-0 h-full w-full flex flex-col justify-center items-center bg-black bg-opacity-70 rounded-2xl">
                <h2 class="text-sm text-white mb-1 text-center">Amorre d'Italia</h2>
                <p class="text-white text-xs mb-3 text-center px-2">
                    Création d'un site web responsive avec du HTML, CSS et JavaScript pour un restaurant de luxe avec une identité visuelle
                    et numérique.
                    Gestion de projet avec Trello, Gantt et la méthode Agile et Scrum.
                </p>
                <button class="mb-4 hover:bg-blue-800 hover:rounded-2xl">
                    <a href="https://navalnorth.github.io/amorre-d-italia-html-css-javascript/" target="_blank" class="px-2 py-1 text-sm text-white border-2 border-white hover:border-none rounded-2xl">Visiter</a>
                </button>
                <div class="flex text-white gap-2">
                    <p class="text-xs border-2 border-orange-500 rounded-2xl px-2 xl:py-1">HTML & CSS</p>
                    <p class="text-xs border-2 border-yellow-500 rounded-2xl px-2 xl:py-1">JavaScript</p>
                    <p class="text-xs border-2 border-blue-500 rounded-2xl px-2 xl:py-1">Méthode Agile & Scrum</p>
                </div>
            </div>
        </div>

        <div class="relative largeur" @mouseover="hover = 3" @mouseleave="hover = null">
            <img src="../assets/projets/quiz.png" class="largeur rounded-2xl">
            <div v-if="hover === 3" class="absolute top-0 h-full w-full flex flex-col justify-center items-center bg-black bg-opacity-70 rounded-2xl">
                <h2 class="text-sm text-white mb-1 text-center">QuizApp</h2>
                <p class="text-white text-xs mb-2 text-center px-2">
                    Création d'une application web et mobile d'un quiz avec création de compte pour l'user, login, manipulation de l'admin
                    pour créer, modifier et supprimer les quiz. Développement du projet avec VueJs 3 et TailwindCSS pour le front et 
                    NodeJs ( ExpressJs ) et SQL ( Xamp & PhpMyAdmin ) pour le back<br>
                </p>
                <button class="mb-2 hover:bg-blue-800 hover:rounded-2xl">
                    <a href="https://github.com/navalnorth/quiz-vuejs-nodejs" target="_blank" class="px-2 py-1 text-sm text-white border-2 border-white hover:border-none rounded-2xl">Visiter</a>
                </button>
                <div class="flex text-white gap-1">
                    <p class="text-xs border-2 border-green-600 rounded-2xl px-2 xl:py-1 ">VueJs</p>
                    <p class="text-xs border-2 border-blue-400 rounded-2xl px-2 xl:py-1">TypeScript</p>
                    <p class="text-xs border-2 border-blue-600 rounded-2xl px-2 xl:py-1">TailwindCSS</p>
                    <p class="text-xs border-2 border-red-500 rounded-2xl px-2 xl:py-1">NodeJs</p>
                    <p class="text-xs border-2 border-orange-600 rounded-2xl px-2 xl:py-1">SQL</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const hover = ref(null);
</script>

<style scoped>
.largeur {
    width: 420px;
}
</style>
