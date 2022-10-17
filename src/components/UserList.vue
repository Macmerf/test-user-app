<template>
  <div class="user-list">
    <user-item :key="user.id" v-for="user in $store.getters.getUserList" :user="user"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import UserItem from "./UserItem.vue";

export default defineComponent({
  name:'UserList',
  components:{
    UserItem
  }
})
</script>

<style scoped>
.user-list{
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>