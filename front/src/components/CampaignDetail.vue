<template>
  <q-page class="flex flex-center campaign-container">
    <h1 class="campaign-head">Bienvenue dans la campaigne de vote !</h1>
    <h2 class="campaign-title">{{props.campaign.title}}</h2>

  </q-page>
</template>

<script allowJs="true" setup>
const props = defineProps({
  campaign: {type: Object, required: true},
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