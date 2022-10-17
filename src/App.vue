<template>
  <div class="container">
    <h1 class="title">User List</h1>
    <default-loader v-if="loader"/>
    <user-list v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import DefaultLoader from "./components/DefaultLoader.vue";
import UserList from "./components/UserList.vue";
import store from "./store";


export default defineComponent({
  name: "App",
  components: {
    UserList,
    DefaultLoader,
  },
  setup(){
    const loader = ref(false)
    async function fetchUsers() {
      loader.value = true
      try{
        await store.dispatch('fetchUsers')
        loader.value = false
      } catch{

        loader.value =false
      }
    }
    onMounted(()=>{
      fetchUsers()
    })
    return{loader}
  }
});
</script>

<style>
.title{
  text-align: center;
}
.container{
  max-width: 80%;
  margin: 0 auto;
  padding: 15px;
}
#app {
  font-family: 'Roboto', sans-serif;
  margin-top: 60px;
}
</style>
