<template>

    <div class="mx-6  lg:mx-auto px-0 md:px-5 max-w-7xl my-20">
        <form class="space-y-8" @submit.prevent="store">

            <!-- personal information -->
            <div class="space-y-2">
                <h2 class="font-semibold text-xl text-gray-700">Information</h2>
                <div class="space-y-4 md:space-y-0 md:grid gap-4 grid-cols-12">
                    <div class="space-y-2 col-span-6">
                        <label class="form-label" for="">Name</label>
                        <input v-model="resume.name" placeholder="Applicant's name" type="text" class="form-input"
                               required/>
                    </div>

                    <div class="space-y-2 col-span-6">
                        <label class="form-label" for="">Position</label>
                        <input v-model="resume.position" placeholder="Apply Position" type="text" class="form-input"
                               required/>
                    </div>

                    <div class="space-y-2 col-span-4">
                        <label class="form-label" for="">Email</label>
                        <input v-model="resume.email" placeholder="Your Contact Email" type="email" class="form-input"
                               required/>
                    </div>

                    <div class="space-y-2 col-span-4">
                        <label class="form-label" for="">Phone</label>
                        <input v-model="resume.phone" placeholder="Your Contact Number" type="text" class="form-input"
                               required/>
                    </div>

                    <div class="space-y-2 col-span-4">
                        <label class="form-label" for="">Location</label>
                        <input v-model="resume.location" placeholder="your Location" type="text" class="form-input"
                               required/>
                    </div>

                    <div class="space-y-2 col-span-6">
                        <label class="form-label" for="">About</label>
                        <AppTextarea
                            :body="resume.about"
                            @update:body="newValue => resume.about = newValue"
                            class="js-textarea form-textarea w-full overflow-hidden"
                            placeholder="Describe Your Self"
                            required
                            rows="3"
                            id="about"
                        />
                    </div>


                </div>

            </div>

            <!-- experience -->
            <div class="space-y-4">
                <h2 class="font-semibold text-xl text-gray-700">Experiences</h2>
                <ExperienceCollection :experiences="resume.experiences" @remove="remove" @add="add"/>
            </div>

            <!-- skills -->
            <div class="space-y-4">
                <h2 class="font-semibold text-xl text-gray-700">Skills</h2>
                <SkillCollection :skills="resume.skills" @remove="remove" @add="add"/>
            </div>

            <!-- education -->
            <div class="space-y-4">
                <h2 class="font-semibold text-xl text-gray-700">Educations</h2>
                <EducationCollection :educations="resume.educations" @remove="remove" @add="add"/>
            </div>

            <!-- file name -->
            <div class="space-y-4">
                <h2 class="font-semibold text-xl text-gray-700">File Name</h2>
                <div class="space-y-4 md:space-y-0 md:grid gap-4 grid-cols-12">
                    <div class="space-y-2 col-span-4">
                        <input v-model="resume.fileName" placeholder="Resume File Name Without Extension" type="text"
                               class="form-input"
                               required/>
                    </div>
                </div>
            </div>

            <div class="bg-gray-300 h-1 rounded my-5"></div>

            <div class="flex justify-end">
                <SubmitButton :loading="false"/>
            </div>
        </form>

    </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import SubmitButton from '@/components/forms/SubmitButton.vue'
import SkillCollection from "@/components/resume/SkillCollection.vue";
import EducationCollection from "@/components/resume/EducationCollection.vue";
import ExperienceCollection from "@/components/resume/ExperienceCollection.vue";
import AppTextarea from "@/components/AppTextarea.vue";
import {useRouter} from 'vue-router'

const router = useRouter();
const resume = ref({
    name: null,
    fileName: null,
    position: '',
    email: '',
    location: '',
    phone: '',
    about: '',
    experiences: [],
    educations: [],
    skills: []
});
const defaultSection = ref([
    {
        section: 'skills',
        value: {name: ''}
    },
    {
        section: 'educations',
        value: {
            from: '',
            to: '',
            school: '',
            degree: '',
            about: '',
        }
    },
    {
        section: 'experiences',
        value: {
            position: '',
            from: '',
            to: '',
            company: '',
            experience: '',
        }
    },
])

resume.value.educations[0] = getDefault('educations')
resume.value.skills[0] = getDefault('skills')
resume.value.experiences[0] = getDefault('experiences')

function add(section) {
    resume.value[section].push(
        getDefault(section)
    );
}

function remove(section, index) {
    resume.value[section].splice(index, 1);
}

function getDefault(section) {
    return defaultSection.value.filter(sectionLookup => {
        return sectionLookup.section === section
    })[0].value;
}

onMounted(() => {

    let storeResume = JSON.parse(localStorage.getItem('resume'))
    if (storeResume) {
        resume.value = storeResume
    }
})

function store() {
    localStorage.setItem('resume', JSON.stringify(resume.value))
    router.push('resume')
}
</script>

<style scoped>

</style>