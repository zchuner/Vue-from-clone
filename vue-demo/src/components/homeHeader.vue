<template>
  <div class="head">
    <div class="header">
      <h4 class="header-cont">主页</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 h4 {
  font-weight: normal;
}
.head{
  width:100%;
  height:2rem;
}
.header{
  width:100%;
  height:2rem;
  position:fixed;
  left:0;
  top:0;
  background-color:#fff;
  border-bottom:2px solid #ff8000;
}
.hesder h4{
  width:100%;
  text-align:center;
  line-height:2rem;
  font-size:1.4rem;
}
</style>
