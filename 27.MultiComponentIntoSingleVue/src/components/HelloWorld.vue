<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Here is how to call muliple vue components inside single vue</h2>
    <first></first>
    <second></second>
  </div>
</template>

<script>
import First from './First.vue'
import Second from './Second.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World!!!!'
    }
  },
  components: { 'first': First, 'second': Second }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
