<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpeg" height="350" width="350">
    <HelloLion msg="LionWeb：手机体验更好哦！ "/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloLion from '@/components/HelloLion.vue'

export default {
  name: 'home',
  components: {
    HelloLion
  }
}
</script>
