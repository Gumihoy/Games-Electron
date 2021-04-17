<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <LocaleChanger/>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import LocaleChanger from '@/components/LocaleChanger.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    LocaleChanger,
  },
})
export default class Home extends Vue {}
</script>
