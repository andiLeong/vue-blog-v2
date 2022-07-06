<template>

    <ComponentLayout title="Calculate distance between 2 locations" class="my-20">

        <form @submit.prevent="check" action="">

        <div class="space-y-8 md:space-y-0 md:grid gap-4 grid-cols-3">

            <div>
                <input v-model="target_latitude" type="text" class="form-input" placeholder="Target location Latitude"/>
            </div>
            <div>
                <input v-model="target_longitude" type="text" class="form-input" placeholder="Target location Longitude"/>
            </div>

            <div class="justify-self-end">
                <SubmitButton :loading="loading"/>
            </div>
        </div>

        <div class="space-y-8 md:space-y-0 md:grid gap-4 grid-cols-2">
            <div>
                <p>{{latitude}}</p>
            </div>
            <div>
                <p>{{longitude}}</p>
            </div>
        </div>

        </form>
        <div v-if="away">
            how many {{away}} km from ({{latitude}} , {{longitude}} ) to ( {{target_latitude}} , {{target_longitude}} )
        </div>
    </ComponentLayout>
</template>

<script setup>
import SubmitButton from "@/components/forms/SubmitButton.vue";
import ComponentLayout from "@/components/ComponentLayout.vue";
import {onMounted, ref, watch} from "vue";

const longitude = ref(null)
const latitude = ref(null)
const target_latitude = ref(null)
const target_longitude = ref(null)
const loading = ref(false)
const away = ref(null)

onMounted( () => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( (location) => {
            latitude.value = location.coords.latitude
            longitude.value = location.coords.longitude
        });
    } else {
        alert('geolocation is not supported')
    }
})

async function check (){

    loading.value = true
    await axios.get('/sanctum/csrf-cookie');
    await axios
        .post(`/api/location-distance`,{
            target_longitude:target_longitude.value,
            target_latitude:target_latitude.value,
            user_longitude:longitude.value,
            user_latitude:latitude.value,
        })
        .then(({data}) => {
            away.value = data
            loading.value = false
            console.log(data)
        })
        .catch(error => {
            console.log(error);
        });

}


</script>