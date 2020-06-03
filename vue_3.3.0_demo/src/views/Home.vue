<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <mycompoment :content='content'></mycompoment>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data (){
    return {
      content:'自定义组件'
    }
  },
  components: {
    HelloWorld
  }
}
</script>
