<template>
  <div id="app">
    <Main />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Main from './components/Main.vue'

@Component({
  components: {
    Main
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: linear-gradient(
    to top right,
    #005caf 10%,
    #346fbc 50%,
    #51a8dd 90%
  );
}
</style>
