<template>
  <q-page class="flex flex-center campaign-container">
    <div>
      <h2 class="campaign-title">{{props.campaign.title}}</h2>
      <h4 class="campaign-subtitle">{{props.campaign.purpose}}</h4>
    </div>
    <q-btn color="white" text-color="black" label="Je vote !" :to="'/voter/' + props.campaign._id" />
  </q-page>
</template>

<script allowJs="true" setup>
const props = defineProps({
  campaign: {type: Object, required: true},
});

</script>

<style>
.campaign-container {
  padding: 15px;
  box-shadow: 3px 3px rgb(244, 244, 244);
  border-radius: 15px;
  border: 2px solid grey;
  margin-bottom: 30px;
}

.campaign-title {
  font-weight: 700;
  text-align: center;
}

.campaign-subtitle {
  text-align: center;
}

.campaign-btn {
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: rgb(228, 228, 228);
}

.subtitle{
  font-size: 2rem;
  text-align: center;
}

.list-container{
  width: 75%;
  border-radius: 15px;
}
</style>