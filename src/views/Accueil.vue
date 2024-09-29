<template>
    <div class="transition flex justify-center items-center" ref="change">
        <img src="/src/assets/ban.jpg" class="ban h-screen bg-no-repeat object-cover grayscale opacity-50">

        <p class="absolute md:text-4xl text-3xl z-10 mb-72 text-center">
            <b>Etudiant développeur Full-Stack</b><br>
            <span class="md:text-3xl text-2xl">Mohamed A.T.</span>
        </p>

        <button
            @click="skills"
            class="plus absolute overflow-hidden rounded-2xl text-3xl px-6 py-3 hover:text-white text-blue-800 border-4 border-black
                  before:h-1 before:absolute before:bottom-0 before:w-full before:bg-blue-800 hover:bg-blue-800 "
        >
            Voir plus
        </button>
    </div>
</template>




<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const change = ref(null)



const skills = () => {
    if (change.value) {
        change.value.classList.add('fade')
        setTimeout(() => {
            router.push('/Skills')
        }, 500)
    }
}

</script>



<style scoped>
.plus {
    transition: background-color .3s, color .3s;
}
.plus:hover {
    transition-delay: 0.3s;
}

.plus::before {
    content: '';
    left: -100%;
    transition: transform 0.4s;
}
.plus:hover::before {
    transform: translateX(100%);
}



.transition {
    transition: opacity 1.9s ease;
}
.transition.fade {
    opacity: 0;
}
</style>