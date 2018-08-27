<template>
  <div id="app">
    <router-view/>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
	import svgIcon from './common/svg';
export default {
  name: 'App',
  components:{
    	svgIcon
	},
}
</script>

<style lang="scss">
@import './style/reset';
body{
	position: relative;
	height:100%;
	width:100%;
}
</style>
