<template>
    <div class="h-screen pb-2" ref="change">
        <div class="flex p-8 height_skills">
            <div class="w-1/3 border-blue-800 border-4 mr-4 p-4 flex flex-col justify-evenly">
                <p class="xl:text-3xl text-center font-bold">Front-End</p>
                <div class="flex flex-wrap justify-center">
                    <img src="../assets/html.png"
                        class="xl:w-44 w-14 my-4 xl:mr-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/css.png"
                        class="xl:w-36 w-14 my-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/js.png"
                        class="xl:w-36 w-14 my-4 xl:mr-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/vuejs.png"
                        class="xl:w-40 w-14 my-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/ts.png"
                        class="xl:w-36 w-14 my-4 xl:mr-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/tailwind.png"
                        class="xl:w-36 w-14 my-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                </div>
            </div>
            <div class="w-1/3 border-blue-800 border-4 mr-4 p-4 flex flex-col justify-evenly">
                <p class="xl:text-3xl text-center font-bold">Back-End</p>
                <div class="flex flex-wrap justify-center">
                    <img src="../assets/nodejs.png"
                        class="xl:w-36 w-14 my-4 xl:mr-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/sql.png"
                        class="xl:w-36 w-14 my-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/xamp.png"
                        class="xl:w-36 w-14 my-4 xl:mr-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/mongodb.png"
                        class="xl:w-36 w-14 my-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/postman.png"
                        class="xl:w-36 w-14 my-4 xl:mr-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/jest.png"
                        class="xl:w-36 w-14 my-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                </div>
            </div>
            <div class="w-1/3 border-blue-800 border-4 mr-4 p-4 flex flex-col justify-evenly">
                <p class="xl:text-3xl text-center font-bold">Autres</p>
                <div class="flex flex-wrap justify-center">
                    <img src="../assets/seo.png"
                        class="xl:w-36 w-14 my-4 xl:mr-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/git.png"
                        class="xl:w-36 w-14 my-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/swagger.png"
                        class="xl:w-44 w-14 my-4 xl:mr-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/figma.png"
                        class="xl:w-36 w-14 my-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/paint.png"
                        class="xl:w-36 w-14 my-4 xl:mr-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                    <img src="../assets/trello.png"
                        class="xl:w-36 w-14 my-4 hover:shadow-md hover:shadow-blue-800 rounded-2xl">
                </div>
            </div>

        </div>
        <div class="flex justify-center height_button">
            <button @click="projets"
                class="text-xl rounded-2xl hover:rounded-2xl bg-blue-800 text-white hover:bg-white hover:border hover:border-blue-800 hover:text-blue-800 xl:px-6 px-2 ">
                Mes projets 🤩
            </button>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const change = ref(null);

const projets = () => {
    if (change.value) {
        change.value.classList.add('slide');
        setTimeout(() => {
            router.push('/projets');
        }, 700);
    }
};
</script>



<style scoped>
.height_skills {
    height: 95%;
}
.height_button {
    height: 5%;
}

.slide {
    transform: translateX(-100%);
    transition: transform 1.1s ease, opacity 1.1s ease;
}
</style>