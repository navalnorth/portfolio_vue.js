<template>
    <div class="bg-blue-800 h-screen p-4 mx-auto max-w-screen-md">
        <h2 class="mb-2 text-4xl font-extrabold text-center text-white">
            Contactez-moi
        </h2>
        
        <form class="space-y-8" @submit.prevent="sendEmail">
            <div>
                <label for="message" class="block mb-1 text-sm font-medium text-white">
                    Votre nom
                </label>
                <input v-model="name" type="text" id="message"
                    class="block py-2 px-4 w-full text-sm text-black rounded-2xl" required>
            </div>

            <div>
                <label for="email" class="block mb-1 text-sm font-medium text-white">
                    Votre email
                </label>
                <input v-model="email" type="email" id="email"
                    class="text-black text-sm rounded-2xl block w-full py-2 px-4"
                    required>
            </div>

            <div>
                <label for="message" class="block mb-1 text-sm font-medium text-white dark:text-gray-400">
                    Votre message
                </label>
                <textarea v-model="message" id="message" rows="4" class="block py-2 px-4 w-full text-sm rounded-2xl" required>
                </textarea>
            </div>

            <div class="flex justify-center">
                <button type="submit" class="p-2 text-center text-white border-2 border-white rounded-2xl hover:bg-white hover:text-blue-800">
                    Envoyer message
                </button>
            </div>
        </form>

        <div v-if="sent" class="flex justify-center text-green-400 mt-4">Message envoyé avec succès !</div>
        <div v-if="error">{{ error }}</div>

        <div class="flex justify-center mt-8 gap-8">
            <a href="https://github.com/navalnorth" target="_blank"><img src="../assets/github.png" class="w-32 rounded-2xl"></a>
            <a href="https://www.linkedin.com/in/mohamed-navalnorth-10061626b/" target="_blank"><img src="../assets/linkedin.png" class="w-32 rounded-2xl"></a>
        </div>
    </div>
</template>



<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const name = ref('');
const email = ref('');
const message = ref('');

const sent = ref(false);
const error = ref('');



const sendEmail = () => {
    const templateParams = {
        name: name.value,
        email: email.value,
        message: message.value,
    };

    emailjs.send("service_fsok5eu", "template_rfr0vme", templateParams, "Dvmw4RAOvCYz-eifk")
        .then(() => {
            sent.value = true;
            error.value = '';

            name.value= ""
            email.value= ""
            message.value= ""
        }, (err) => {
            console.error('FAILED...', err);
            error.value = "Une erreur s'est produite lors de l'envoi du message.";
        });
};
</script>