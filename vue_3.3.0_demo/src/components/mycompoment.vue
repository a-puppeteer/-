<template id='mycompoment'>
  <div>
    {{content}}
  </div>
</template>
<script>
export default {
props: ['content'],
  data (){
    return {
      // content:this.content?this.content:'暂无'
    }
  }
}
</script>
<style scoped>
  div{
    width: 100%;
    height: 300px;
    text-align: center;
    font-size: 20px;
    background-color: pink;
    color: yellowgreen;
  }
</style>