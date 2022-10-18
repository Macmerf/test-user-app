import { Store } from 'vuex'
import {State} from './user'

declare module '@vue/runtime-core' {

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}