<template>
  <div class="container">
    <home-header></home-header>
    <div class="content">
      <ul class="cont-ul">
        <list v-for="item in items" :price="item.price" :title="item.title" :img="item.img"></list>
      </ul>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import homeHeader from 'components/homeHeader'
import commonFooter from 'components/commonFooter'
import list from 'components/list'
export default {
  data () {
    return {
      items:[ ]
    }
  },
  components:{
    homeHeader,
    commonFooter,
    list
  },
  created () {
      this.$http.get('/api/goods').then((data) => {
      this.items = data.body.data;
      })
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
.container{
  width:100%;
  margin:0 auto;
}
.content{
  margin-bottom: 1.8rem;
}
.cont-ul {
    padding-top: 0.5rem;
    background-color: #ccc;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
