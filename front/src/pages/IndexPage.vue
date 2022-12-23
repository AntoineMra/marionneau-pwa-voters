<template>
  <q-page class="flex flex-center">
    <h1 class="indexTitle">Bonjour ! 👋</h1>
    <div class="flex flex-center column">
      <div v-if="!campaignLists.length">
        <h2 class="subtitle">Il est temps d'ajouter des listes</h2>
      </div>
      <div class="flex flex-center list-container" v-else v-for="tl in campaignLists" :key="tl._id">
        <TaskList :task-list="tl" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import {onMounted, ref } from "vue";
//import TaskList from "../components/index/TaskList.vue";
import { api } from "../boot/axios";
//import { useListStore } from '../stores/list-store'

// const listStore = useListStore() Campaign Store
const campaignList = ref([])

onMounted(() => {
/*   api.get("/lists").then((res) => {
    campaignLists.value = res.data
    listStore.$patch({campaignLists: campaignLists.value})
  }); */
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