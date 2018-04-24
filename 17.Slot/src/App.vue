<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Alert>
      <template slot="alert-danger">This is first error message</template>
      <template slot="alert-danger">This is first error message</template>
      <template slot="alert-danger">This is first error message</template>
      <template slot="alert-success">This is first error message</template>
    </Alert>
    <Footer>
      <p class="footer-sec" slot="header">Terms & Conditions Applied</p>
      <p class="footer-sec" slot="footer">copyright @2018</p>
    </Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Alert from './components/alert.vue'

export default {
  name: 'App',
  components: {
    Alert,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
