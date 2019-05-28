import BCopy from './BCopy.vue';
import { VueConstructor } from 'vue';

const BCopyPlugin = {
  install(Vue: VueConstructor) {
    // TODO: remove the need to casting BCopy to any
    Vue.component((BCopy as any).options.name, BCopy);
  }
};
export default BCopy;
export { BCopyPlugin, BCopy };
