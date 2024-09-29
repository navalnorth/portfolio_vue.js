<template>
    <div class="flex flex-wrap justify-center p-8 gap-14">
      <div v-for="(project, index) in projects" :key="index" @mouseover="isHover[index] = true" @mouseleave="isHover[index] = false" class="relative largeur">
  
        <img :src="project.image" class="largeur rounded-2xl" />
  

        <div v-if="isHover[index]" class="absolute top-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 rounded-2xl">
          <h2 class="text-lg text-white mb-1 text-center">{{ project.title }}</h2>
          <p class="text-white text-xs mb-3 text-center px-4">
            {{ project.description }}
          </p>
          <button class="mb-6 hover:bg-blue-800 hover:rounded-2xl">
            <a :href="project.link" target="_blank" class="px-2 py-1 text-sm text-white border-2 border-white hover:border-none rounded-2xl">
              Visiter
            </a>
          </button>
          <div class="flex text-white gap-4">
            <p v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="text-xs border-2 rounded-2xl px-2 py-1" :class="tech.color">
              {{ tech.name }}
            </p>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  


  const projects = ref([
    {
      image: 'src/assets/projets/nahla.png',
      title: 'Nahla Délices',
      description: 'Création d\'un site E-commerce avec le CMS Shopify pour la vente de miels.',
      link: 'https://www.nahladelices.com',
      technologies: [
        { name: 'Shopify', color: 'border-green-500' },
        { name: 'HTML, CSS & JS', color: 'border-orange-500' },
        { name: 'SEO & SEA', color: 'border-blue-500' }
      ]
    },
    {
      image: 'src/assets/projets/amorre.png',
      title: 'Amorre Project',
      description: 'Un site vitrine pour une agence spécialisée dans le conseil amoureux.',
      link: 'https://www.amorre.com',
      technologies: [
        { name: 'WordPress', color: 'border-purple-500' },
        { name: 'JavaScript', color: 'border-yellow-500' },
        { name: 'SEO', color: 'border-blue-500' }
      ]
    },
    {
      image: 'src/assets/projets/nahla.png',
      title: 'Projet 3',
      description: 'Description détaillée du projet 3.',
      link: 'https://www.projet3.com',
      technologies: [
        { name: 'React', color: 'border-teal-500' },
        { name: 'TailwindCSS', color: 'border-pink-500' }
      ]
    },
    {
      image: 'src/assets/projets/nahla.png',
      title: 'Projet 4',
      description: 'Description détaillée du projet 4.',
      link: 'https://www.projet4.com',
      technologies: [
        { name: 'Vue.js', color: 'border-green-500' },
        { name: 'Node.js', color: 'border-gray-500' }
      ]
    },
    {
      image: 'src/assets/projets/nahla.png',
      title: 'Projet 5',
      description: 'Description détaillée du projet 5.',
      link: 'https://www.projet5.com',
      technologies: [
        { name: 'Angular', color: 'border-red-500' },
        { name: 'TypeScript', color: 'border-blue-500' }
      ]
    },
    {
      image: 'src/assets/projets/nahla.png',
      title: 'Projet 6',
      description: 'Description détaillée du projet 6.',
      link: 'https://www.projet6.com',
      technologies: [
        { name: 'PHP', color: 'border-purple-500' },
        { name: 'MySQL', color: 'border-gray-500' }
      ]
    },
  ]);
  

  const isHover = ref([false, false, false, false, false, false]);
  </script>
  
  <style scoped>
  .largeur {
    width: 420px;
  }
  </style>
  