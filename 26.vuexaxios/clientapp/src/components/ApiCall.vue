<template>
  <div>
  <ul v-if="posts && posts.length">
    <li v-for="post of posts" :key="post.id">
      <p><strong>{{post.title}}</strong></p>
      <p>{{post.body}}</p>
    </li>
  </ul>

  <ul v-if="errors && errors.length">
    <li v-for="error of errors" :key="error.id">
      {{error.message}}
    </li>
  </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ApiCall',
  data () {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created () {
    axios.get('http://localhost:3000/posts')
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
