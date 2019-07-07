<template>
  <div id="app">
    <Mental/>
  </div>
</template>

<script>
import Mental from './components/Mental'

export default {
  name: 'App',
  components: {
    Mental
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:700')

#app
	font-family: 'Roboto', Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	text-align: center
	color: #2c3e50
	margin-top: 30px
	overflow-x hidden
</style>
