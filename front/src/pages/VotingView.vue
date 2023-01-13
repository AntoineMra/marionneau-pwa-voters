<template>
  <q-page class="flex flex-center">
    <h1 class="indexTitle">Bonjour ! 👋</h1>
    <h2 class="campaign-head">Bienvenue dans les campaigne de vote !</h2>
    <div class="flex flex-center column">

    </div>
  </q-page>
</template>

<script setup allow>
import {onMounted, ref } from "vue";
import { api } from "../boot/axios";
import { useRouter, useRoute } from 'vue-router'

const voteList = ref([])
const campaign = ref([])
const campaignId = useRoute().params.id
const $router = useRouter()


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

</script>

<style>
.subtitle{
  font-size: 2rem;
  text-align: center;
}

.list-container{
  width: 75%;
  border-radius: 15px;
}
</style>