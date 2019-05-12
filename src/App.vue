<template>
  <div id="app">
    <BCopy content="Default Copy" @copy="onCopy"> </BCopy>
    <BCopy content="My Copy" @copy="onCopy">
      <template v-slot="{ copy }">
        <button @click="copy">
          My Copy Button
        </button>
      </template>
    </BCopy>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BCopy from '@/components/BCopy.vue';
@Component({
  components: { BCopy }
})
export default class App extends Vue {
  private onCopy() {
    alert('Content copied to clipboard');
  }
}
</script>
