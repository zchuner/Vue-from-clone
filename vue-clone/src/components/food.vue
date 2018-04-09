<template>
  <div class="">
  	<h4>some food</h4>
  
  <ul>
  	<li v-for="item in items">{{item}}</li>
  </ul>
  </div>
</template>

<script>
export default{
	props:{
		food:{
			type:object
		}
	},
	data(){
		return{
			items:[
				"appel","oringe","egg"
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
