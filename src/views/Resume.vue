<template>


    <div class="mx-auto max-w-7xl my-10 space-y-10" style="width: 795px">

        <div class="resume-header">
            <div class="text-right ">
                <p class="text-5xl font-bold text-gray-600">{{ resume.name }}</p>
                <p class="text-gray-400 mt-2">{{ resume.position }}</p>
                <div class="mt-4">
                    <div class="flex space-x-2 items-center justify-end">
                        <p class="text-gray-400">{{ resume.phone }}</p>
                        <div class="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path
                                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="flex space-x-2 items-center justify-end">
                        <p class="text-gray-400">{{ resume.email }}</p>
                        <div class="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="flex space-x-2 items-center justify-end">
                        <p class="text-gray-400">{{ resume.location }}</p>
                        <div class="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fill-rule="evenodd"
                                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-400 resume-header-divider"></div>

            <div>
                <p class="text-gray-500 text-xl font-semibold">Statement</p>
                <p class="text-gray-400 tracking-wide ">{{ resume.about }}</p>
            </div>

        </div>

        <div class="resume-experience space-y-4">
            <div class="resume-content-header">
                <div>
                    <p class="text-2xl font-bold text-gray-600">Skills</p>
                </div>
                <div class="bg-gray-300 resume-content-divider"></div>
            </div>

            <div class="space-y-8">

                <div class="resume-content">
                    <div class="">
                        <ul class="flex flex-col items-end space-y-3">
                            <li class="space-x-2 flex items-center" v-for="(skill,index) in skillOne" :key="index">
                                <div class="text-gray-400 font-semibold">
                                    {{ skill.name }}
                                </div>
                                <span class="skill-icon p-1 bg-green-400 text-white rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor"
                                         stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                                    </svg>
                                </span>
                            </li>

                        </ul>
                    </div>

                    <div class="resume-header-divider"></div>

                    <div class="">
                        <ul class="flex flex-col space-y-3">
                            <li class="space-x-2 flex items-center" v-for="(skill,index) in skillTwo" :key="index">
                                <span class="skill-icon p-1 bg-green-400 text-white rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                         stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                                    </svg>
                                </span>
                                <div class="text-gray-400 font-semibold">
                                    {{ skill.name }}
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>

        <div class="resume-experience space-y-4">
            <div class="resume-content-header">
                <div>
                    <p class="text-2xl font-bold text-gray-600">Experiences</p>
                </div>
                <div class="bg-gray-300 resume-content-divider"></div>
            </div>


            <div class="space-y-8">

                <div class="resume-content" v-for="(experience,index) in resume.experiences" :key="index">
                    <div class="text-right">
                        <p class="text-gray-600 font-semibold">{{ experience.position }}</p>
                        <p class="text-gray-400">{{ experience.from }} to {{ experience.to }}</p>
                    </div>
                    <div class="resume-header-divider"></div>
                    <div>
                        <p class="text-gray-500 font-semibold">{{ experience.company }}</p>
                        <p class="text-gray-400">{{ experience.experience }}</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="resume-experience space-y-4">
            <div class="resume-content-header">
                <div>
                    <p class="text-2xl font-bold text-gray-600">Education</p>
                </div>
                <div class="bg-gray-300 resume-content-divider"></div>
            </div>

            <div class="space-y-8">

                <div class="resume-content" v-for="(education,index) in resume.educations" :key="index">
                    <div class="text-right">
                        <p class="text-gray-600 font-semibold">{{ education.degree }}</p>
                        <p class="text-gray-400">{{ education.from }} to {{ education.to }}</p>
                    </div>
                    <div class="resume-header-divider"></div>
                    <div>
                        <p class="text-gray-500 font-semibold">{{ education.school }}</p>
                        <p class="text-gray-400">{{ education.experience }}</p>
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>

<script setup>

import {computed, ref} from "vue";

const resume = ref({
    name: 'Jonie Milans',
    position: 'Web Developer',
    email: 'xxx@exampple.com',
    location: 'Bangsar South, Kuala Lumpur',
    phone: '13-110-4589',
    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim magnam nesciunt omnis repellendus voluptatibus. Cumque debitis deserunt error harum impedit necessitatibus, sint velit. Consequuntur dolor dolorem excepturi harum iure nam omnis sint? Alias culpa reprehenderit ullam? Dolorem doloremque neque quam! Architecto asperiores at commodi consequuntur cum cumque debitis delectus',
    experiences: [
        {
            position: 'Web Developer',
            from: '2000-10',
            to: '2005-10',
            company: 'Gooogle Inc',
            experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque ea ex id illo nobis non obcaecati placeat quae quas quis saepe sequi soluta suscipit, ullam unde ut vitae voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque ea ex id illo nobis non obcaecati placeat quae quas quis saepe sequi soluta suscipit, ullam unde ut vitae voluptatum.',
        },
        {
            position: 'Web Developer',
            from: '2005-10',
            to: '2006-10',
            company: 'Twitter Inc',
            experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque ea ex id illo nobis non obcaecati placeat quae quas quis saepe sequi soluta suscipit, ullam unde ut vitae voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque ea ex id illo nobis non obcaecati placeat quae quas quis saepe sequi soluta suscipit, ullam unde ut vitae voluptatum.',
        },
        {
            position: 'Web Developer',
            from: '2007-10',
            to: '2022-10',
            company: 'Chatime Inc',
            experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque ea ex id illo nobis non obcaecati placeat quae quas quis saepe sequi soluta suscipit, ullam unde ut vitae voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque ea ex id illo nobis non obcaecati placeat quae quas quis saepe sequi soluta suscipit, ullam unde ut vitae voluptatum.',
        },
    ],
    educations: [
        {
            degree: 'bachelor\'s',
            from: '2000-10',
            to: '2005-10',
            school: 'University of Malaysia',
            experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque ',
        },
        {
            degree: 'master',
            from: '2005-10',
            to: '2006-10',
            school: 'University of India',
            experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        }
    ],
    skills: [
        {name:'database: mysql , redis'},
        {name:'framework: laravel, vue-js, codeigniter'},
        {name:'language: php , javascript , css'},
        {name:'version controller : git'},
        {name:'server: nginx , apache'},
        {name:'deployment: ci,cd , ubuntu , digitalocean'},
        {name:'laravel: ioc container, macro, collection, eloquent'},
        {name: 'oop php: oop fundamental , abstraction , interface, encapsulate'},
        {name:'TDD and DDD development'},
    ]
});

const skillOne = computed(() => {
    let {skillOne} = getSubsetSkills();
    return skillOne;
})

const skillTwo = computed(() => {
    let {skillTwo} = getSubsetSkills();
    return skillTwo;
})

function getSubsetSkills(){
    let skills = resume.value.skills;
    let length = skills.length;
    let result = length / 2;

    if(!Number.isInteger(result)   ){
        result = Math.floor(result)
    }
    let skillOne = skills.filter( (skill,index) => index < result)
    let skillTwo = skills.filter( (skill,index) => index >= result)

    return {
        skillOne,skillTwo
    }
}

let storedResume = JSON.parse(localStorage.getItem('resume'))
if(storedResume){
    resume.value = storedResume
}
</script>