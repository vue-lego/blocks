import BCopy from './BCopy.vue';
import { VueConstructor } from 'vue';

const BCopyPlugin = {
  install(Vue: VueConstructor) {
    Vue.component(BCopy.name, BCopy);
  }
};
export default BCopy;
export { BCopyPlugin };
