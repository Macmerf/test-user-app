import { State } from "@/types/user";
import { createStore } from "vuex";
import axios from 'axios'

export default createStore<State>({
  state: {
    users:[]
  },
  getters:{
    // трансформируем данные под наши нужды
    getUserList(state){
      return state.users.map(user => {
        return{
          id: user.id, 
          nickname: user.username
        }
      })
    }
  },
  mutations: {
    // пробрасываем юзеров в state
    setUsers(state, newUsers){
      state.users = [...state.users, ...newUsers]
    },
    //удаляем юзера на клиенте
    deleteUser(state, id:number){
      state.users = state.users.filter(elem => elem.id !== id)
    }
  },
  actions: {
    //получаем данные с сервера
    async fetchUsers(){
      await axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
        this.commit('setUsers', res.data)
      })
    }
  },
});
