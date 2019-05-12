<template>
  <div id="app">
    <b-copy content="Default Copy" @copy="onCopy"> </b-copy>
    <b-copy content="My Copy" @copy="onCopy">
      <template v-slot="{ copy }">
        <button @click="copy">
          My Copy Button
        </button>
      </template>
    </b-copy>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  private onCopy() {
    alert('Content copied to clipboard');
  }
}
</script>
