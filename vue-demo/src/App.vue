<template>
  <div class="main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/home" v-tap>
          <span class="icon-home"></span>
          <h4>首页</h4>
        </router-link>
      </div>
      
      
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
 
  export default {
    
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
body
  width 100%
  height 100%
  .main
    width: 100%
    .tab
      display: flex
      position: fixed
      z-index 9
      left: 0
      bottom: 0
      width: 100%
      height: 40px
      padding: 5px 0
      background: #f9f9f9
      text-align: center
      .tab-item
        flex: 1
        height: 40px
        color: #999
        font-size: 10px
        h4
          margin-top 5px
        & > a
          display: inline-block
          width: 100%
          padding-top: 3px
          & > span
            font-size: 20px
        .active
          color: #0199ca
      .cartCount
        position: relative
        .countNum
          position: absolute
          top 0
          right 0
          width: 24px
          height: 16px
          line-height: 16px
          text-align: center
          border-radius: 16px
          font-size: 9px
          font-weight: 700
          color: #fff
          background: rgb(240, 20, 20)
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7)
</style>
