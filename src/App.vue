<template>
  <div id="app">
    <b-container class="justify-content-center">
      <b-row>
        <b-col offset-lg="3" lg="6" offset-md="2" md="8" xs="12">
          <TagForm/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TagForm from './components/TagForm.vue'

export default {
  name: 'App',
  components: {
    TagForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 60px;
  margin-top: 60px;
}
</style>
