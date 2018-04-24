<template>
  <div>
    <p class="footer-sec">There are some text before calling footer slot</p>
    <!-- This slot is used when rendring html content dynamically, similar to props -->
    <slot name="header"></slot>
    <slot name="footer"></slot>
    <p class="footer-sec">Some other text after footer slot</p> 
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style>
  .footer-sec {
    color: #110496;
  }
</style>