<template>
  <div class="hello">
    <h1>
      {{mental.text}}
    </h1>
    <input type="text" placeholder="Equal" @keydown.enter="validate" v-model.number="answer"/>
  </div>
</template>

<script>
import generator from '../script/generator'

export default {
  name: 'Mental',
  data () {
    return {
      answer: null,
      numbers: 2,
      fails: 0,
      wins: 0,
      update: true
    }
  },
  methods: {
    validate: function () {
      if (this.answer === this.mental.result) {
        this.fails = 0
        this.wins++
        if (this.wins >= 2) {
          this.wins = 0
          this.numbers++
        } else {
          this.updateMental()
        }
      } else {
        this.wins = 0
        this.fails++
        if (this.fails >= 3) {
          this.fails = 0
          if (this.numbers > 2) {
            this.numbers--
          } else {
            this.updateMental()
          }
        }
      }
      this.answer = null
    },
    updateMental: function () {
      this.update = !this.update
    }
  },
  computed: {
    mental: function () {
      this.update.toString()
      return generator.getRandom(this.numbers)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../style/mental.scss';
</style>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .15s ease-in-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
