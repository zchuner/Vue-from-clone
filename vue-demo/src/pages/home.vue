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
      items:[
      { "price": "69.9", "title": "德芙", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t3688/270/776223567/128582/fa074fb3/58170f6dN6b9a12bf.jpg!q50.jpg.webp" },
        { "price": "63", "title": "费列罗", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t613/100/1264998035/221234/1a29d51f/54c34525Nb4f6581c.jpg!q50.jpg.webp"},
        { "price": "29.9", "title": "大米", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t1258/40/17387560/108696/aced445f/54e011deN3ae867ae.jpg!q50.jpg.webp"},
        { "price": "54.9", "title": "安慕希", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t2734/15/680373407/215934/3abaa748/572057daNc09b5da7.jpg!q50.jpg.webp"},
        { "price": "58", "title": "金典", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t2482/145/1424008556/91991/d62f5454/569f47a2N3f763060.jpg!q50.jpg.webp"},
        { "price": "60", "title": "味可滋", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t2368/3/874563950/70786/7b5e8edd/563074c8N4d535db4.jpg!q50.jpg.webp" },
        { "price": "248.00", "title": "泸州老窖", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t283/166/1424018055/189580/7c0792b7/543b4958N05fa2feb.jpg!q50.jpg.webp"},
        { "price": "328.8", "title": "剑南春", "img": "http://m.360buyimg.com/babel/s350x350_g15/M05/1A/0A/rBEhWlNeLAwIAAAAAAHyok3PZY0AAMl8gO8My0AAfK6307.jpg!q50.jpg.webp"},
        { "price": "49.00", "title": "蓝莓", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t2332/148/2952098628/94387/e64654e2/56f8d76aNb088c2ab.jpg!q50.jpg.webp" },
        { "price": "68", "title": "芒果", "img": "http://m.360buyimg.com/n0/jfs/t3709/334/1378702984/206759/5c100ab5/58253588Naaa05c5c.jpg!q70.jpg"}
      ]
    }
  },
  components:{
    homeHeader,
    commonFooter,
    list
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
