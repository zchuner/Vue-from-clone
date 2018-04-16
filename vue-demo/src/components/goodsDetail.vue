<template>
  <div class="detail">
    <detail-header></detail-header>
    <p class="site-title">树懒果园 泰国进口大金煌芒果</p>
    <p  class="site-cont">5斤装，约2-4个果，大！！！甜！！！</p>
  </div>
</template>

<script>
import DetailHeader from 'components/DetailHeader'
import commonFooter from 'components/commonFooter'
export default {
  data () {
    return {
      
    }
  },
  components:{
  DetailHeader,
    commonFooter
  }
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
.detail{
  padding:0.25rem;
}
.detail > img{
  display:block;
  width:80%;
  margin:0 auto 0.5rem;
}
.detail > p{
  font-size: 1.1rem;
  line-height: 1.5rem;
  text-align: left;
  padding-bottom: 0.5rem;
}
.detail > p .site-title{
  color:#ff8000;
}
.detail > p .site-cont{
  color:#666;
  font-size:0.9rem;
}
</style>
