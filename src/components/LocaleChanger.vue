<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="lang in $t('languages')" :value="lang.value">
        {{ lang.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LocaleChanger extends Vue {
    @Prop() private msg!: string;

    onChange(value: string): void {
      console.log('onChange:', value);
    }
}
</script>

<style scoped>

</style>
