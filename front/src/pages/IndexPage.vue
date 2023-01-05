<template>
  <q-page class="flex flex-center">
    <h1 class="indexTitle">Bonjour ! 👋</h1>
    <div class="flex flex-center column">
      <div v-if="!campaignLists.length">
        <h2 class="subtitle">Il est temps d'ajouter des campagine de vote</h2>
      </div>
      <div class="flex flex-center list-container" v-else v-for="cl in campaignLists" :key="cl._id">
        <CampaignDetail :campaign="cl" />
        <h1>{{cl}}</h1>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import {onMounted, ref } from "vue";
import { api } from "../boot/axios";
import CampaignDetail from '../components/CampaignDetail.vue'
import { useCampaignStore } from '../stores/campaign-store'

const campaignStore = useCampaignStore()
const campaignLists = ref([])

onMounted(() => {
   api.get("/campaign").then((res) => {
    campaignLists.value = res.data
    campaignStore.$patch({campaignLists: campaignLists.value})
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