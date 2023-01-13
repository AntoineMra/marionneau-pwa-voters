<template>
    <q-page class="flex flex-center column">
        <h1 class="flex flex-center title">Créer une nouvelle campagne</h1>
        <form @submit.prevent="formSubmit" class="flex flex-center column">
            <label  for="title">Titre :</label>
            <input type="text" v-model="title" placeholder="Election Délégué" required>
            <label class="input-form" for="purpose">Objectif :</label>
            <input type="longtext" v-model="purpose" placeholder="Nous avons mis en place..." required>
            <form @submit.prevent="choiceSubmit" class="flex flex-center column input-form">
                <label for="title">Ajouter une possibilité de vote :</label>
                <input type="text" v-model="choice" placeholder="Théo" required @keyup.enter="choiceSubmit">
            </form>
            <ul v-for="ch in choices">
                <li>{{ ch }}</li>
            </ul>
            
            <q-btn type="submit" color="primary" label="Créer la Campagne" class="btn-form"  />
        </form>
    </q-page>
</template>

<script setup>
import { useCampaignStore } from '../stores/campaign-store'
import { ref } from "vue";
import { useRouter } from 'vue-router'


const title = ref('')
const purpose = ref('')
const choice = ref('')
const choices = ref([])
const $router = useRouter()
const campaignStore = useCampaignStore()

const choiceSubmit = () => {
    if (choice.value !== '') {
        choices.value.push(choice.value)
    }
    choice.value = ''
}

const formSubmit = () => {
    const campain = {
        title: title.value,
        purpose: purpose.value,
        choices: choices.value
    }
    campaignStore.addCampaign(campain)
    $router.push({path: '/'})
}

</script>

<style>
.title{
    font-size: 3.8rem;
  text-align: center;
}

.input-form{
    padding-top: 15px;
}

.btn-form{
    margin-top: 20px;
}
</style>