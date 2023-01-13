<template>
  <q-page class="flex flex-center">
    <h1 class="indexTitle">Bonjour ! 👋</h1>
    <h2 class="campaign-head">Bienvenue dans les vote de la campagne {{campaign.value}}</h2>
    <div v-if="hasVoted">
      <ul>
        <li v-for="vote in voteList">
          {{ vote.choice }} : {{ vote.current }}
        </li>
      </ul>
    </div>
    <form @submit="formSubmit" v-else class="flex flex-center column">
      <label for="choice">Séléction du vote !</label>
      <select v-model="choice">
        <option v-for="vote in voteList" :value="vote">{{ vote.choice }}</option>
      </select>
      <label for="voter">Nom du votant :</label>
      <input type="text" v-model="username" placeholder="Antoine" required>

      <q-btn type="submit" color="primary" label="Je vote !" class="btn-form"  />
    </form>
  </q-page>
</template>

<script setup allow>
import {onMounted, ref } from "vue";
import { api } from "../boot/axios";
import { useRoute } from 'vue-router'

const voteList = ref([])
const campaign = ref({})
const choice = ref({})
const username = ref('')
const hasVoted = ref(false)
const campaignId = useRoute().params.id


onMounted(() => {
    api.get("/vote").then((res) => {
        const votes = res.data
        voteList.value = votes.filter(vote => vote.campaign === campaignId)
        console.log(voteList.value);
    });

    api.get("/campaign/" + campaignId).then((res) => {
        campaign.value = res.data
        console.log(campaign.value);
    });
});

const formSubmit = () => {
    const sendVote = {
      choice: choice.value.choice,
      current: choice.value.current + 1
    }

    console.log(sendVote);

    api.put("/vote/" + choice.value._id, sendVote).then((res) => {
        api.get("/vote").then((res) => {
            const votes = res.data
            voteList.value = votes.filter(vote => vote.campaign === campaignId)
        });
        hasVoted.value = true
    });
}

</script>

<style>
.subtitle{
  font-size: 2rem;
  text-align: center;
}

.btn-form{
  margin-top: 30px;
}

.list-container{
  width: 75%;
  border-radius: 15px;
}
</style>