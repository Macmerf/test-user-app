<template>
  <div v-if="user" class="user">
    <p class="user-title">
      <span><b>id:</b> {{user.id}}</span>
      <span class="name"><b>NickName:</b> {{user.nickname}}</span>
    </p>
    <div @click="deleteUser" class="user-icon-holder">
      <img src="@/assets/delete.png" alt="delete user" width="24" height="24">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { User } from '@/types/user'
import store from "@/store";
export default defineComponent({
  name:'UserItem',
  props:{
    user:{
      type: Object as PropType<User>
    }
  },
  setup(props){
    const deleteUser =()=>{
      store.commit('deleteUser', props.user?.id as number)
    }
    return {deleteUser}
  }
})
</script>

<style>
.user{
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 1px 7px 1px rgb(179 189 184);
  width: calc(50% - 15px);
  max-width: 100%;
  padding: 5px 15px;
  box-sizing: border-box;
  border-radius: 5px;
}
.name{
  margin-left: 10px;
}
.user-icon-holder{
  cursor: pointer;
}

@media (max-width: 768px) {
  .user{
    width: 100%;
  }
}
</style>