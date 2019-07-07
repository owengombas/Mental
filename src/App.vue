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

button
	background: none
	outline: none
	border: none
	cursor pointer
	&:disabled
		opacity .5

h1
	padding-bottom 25px
	font-family 'Roboto Mono', monospace
	font-size 2.5em
	font-weight 700
</style>
