<template>
    <div class="flex flex-wrap justify-center items-center p-4 gap-10">
        
        <div class="relative largeur" @mouseover="hover = 3" @mouseleave="hover = null">
            <img src="../assets/projets/quiz.png" class="largeur rounded-lg">
            <div v-if="hover === 3" class="absolute top-0 h-full w-full flex flex-col justify-center items-center bg-black bg-opacity-70 rounded-lg">
                <h2 class="titre text-white mb-1 text-center">QuizApp</h2>
                <p class="text-white texte mb-2 text-center px-2">
                    Application web d'un quiz avec création de compte pour l'user, login, manipulation de l'admin
                    pour créer, modifier et supprimer les quiz. Développement avec VueJs 3 et TailwindCSS pour le front et 
                    NodeJs et SQL pour le back<br>
                </p>
                <button class="mb-2 hover:bg-blue-800 hover:rounded-lg">
                    <a href="https://github.com/navalnorth/quiz-vuejs-nodejs" target="_blank" class="boutton px-2 text-white border-2 border-white hover:border-none rounded-lg">Visiter</a>
                </button>
                <div class="flex text-white gap-1">
                    <p class="taille border-2 border-green-600 rounded-lg px-2 xl:py-1 ">VueJs</p>
                    <p class="taille border-2 border-blue-400 rounded-lg px-2 xl:py-1">TypeScript</p>
                    <p class="taille border-2 border-blue-600 rounded-lg px-2 xl:py-1">TailwindCSS</p>
                    <p class="taille border-2 border-red-500 rounded-lg px-2 xl:py-1">NodeJs</p>
                    <p class="taille border-2 border-orange-600 rounded-lg px-2 xl:py-1">SQL</p>
                </div>
            </div>
        </div>
        <div class="relative largeur" @mouseover="hover = 1" @mouseleave="hover = null">
            <img src="../assets/projets/nahla.png" class="largeur rounded-lg">
            <div v-if="hover === 1" class="absolute top-0 h-full w-full flex flex-col justify-center items-center bg-black bg-opacity-70 rounded-lg">
                <h2 class="titre text-white mb-1 text-center">Nahla Délices</h2>
                <p class="text-white texte mb-3 text-center px-4">
                    Site E-commerce avec un CMS pour la vente de miels avec identité visuelle.
                    Référencement web avec le SEO et le SEA et
                    amélioration graphique avec paint.NET.
                </p>
                <button class="mb-4 hover:bg-blue-800 hover:rounded-lg">
                    <a href="https://www.nahladelices.com" target="_blank" class="boutton px-2 text-white border-2 border-white hover:border-none rounded-lg">
                        Visiter
                    </a>
                </button>
                <div class="flex text-white gap-2">
                    <p class="taille border-2 border-green-500 rounded-lg px-2 xl:py-1  ">Shopify</p>
                    <p class="taille border-2 border-orange-500 rounded-lg px-2 xl:py-1 ">HTML & CSS </p>
                    <p class="taille border-2 border-yellow-500 rounded-lg px-2 xl:py-1 ">JavaScript </p>
                    <p class="taille border-2 border-blue-500 rounded-lg px-2 xl:py-1 ">SEO & SEA</p>
                </div>
            </div>
        </div>

        <div class="relative largeur" @mouseover="hover = 2" @mouseleave="hover = null">
            <img src="../assets/projets/amorre.png" class="largeur rounded-lg">
            <div v-if="hover === 2" class="absolute top-0 h-full w-full flex flex-col justify-center items-center bg-black bg-opacity-70 rounded-lg">
                <h2 class="titre text-white mb-1 text-center">Amorre d'Italia</h2>
                <p class="text-white texte mb-3 text-center px-2">
                    Création d'un site web responsive avec HTML, CSS et JS pour un restaurant avec une identité visuelle.
                    Gestion de projet avec Trello, Gantt et la méthode Agile et Scrum.
                </p>
                <button class="mb-4 hover:bg-blue-800 hover:rounded-lg">
                    <a href="https://navalnorth.github.io/amorre-d-italia-html-css-javascript/" target="_blank" class="boutton px-2 text-white border-2 border-white hover:border-none rounded-lg">Visiter</a>
                </button>
                <div class="flex text-white gap-2">
                    <p class="taille border-2 border-orange-500 rounded-lg px-2 xl:py-1">HTML & CSS</p>
                    <p class="taille border-2 border-yellow-500 rounded-lg px-2 xl:py-1">JavaScript</p>
                    <p class="taille border-2 border-blue-500 rounded-lg px-2 xl:py-1">Méthode Agile & Scrum</p>
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

.taille {
    font-size: 9px;
}
.texte {
    font-size: 11px;
}

@media (min-width: 1280px) {
    .taille {
        font-size: 14px;
    }
    .texte {
        font-size: 12px;
    }
    .bouton {
        font-size: 14px;
    }
    .titre {
        font-size: 16px;
    }
}
</style>
