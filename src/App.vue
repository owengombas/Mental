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

input[type="text"]
	background: rgb(231, 231, 231)
	border: none
	color: rgb(99, 99, 99)
	border-radius: 10px
	font-weight: bold
	font-size: 1.6em
	padding: 10px 20px
	width: 25%
	min-width: 150px

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
