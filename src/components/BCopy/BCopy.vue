<template>
  <span class="b-copy">
    <slot :copy="onCopy">
      <button @click="onCopy">Copy</button>
    </slot>
  </span>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { copy as copyCmd } from '@/utils/commands';
@Component({
  name: 'BCopy'
})
export default class BCopy extends Vue {
  /**
   * The content that will get copied
   */
  @Prop({
    required: true
  })
  private content!: any;
  public onCopy() {
    copyCmd(this.content);
    this.$emit('copy');
  }
}
</script>
