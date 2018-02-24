<template>
  <div class="hello">
    <h1>
      {{mental.text}}
    </h1>
    <input type="text" placeholder="Equal" @keydown.enter="validate" v-model.number="answer"/>
    <div id="controls">
      <button @click="setLevel(-1)" id="down">
        <svg version="1.1" id="Capa_1" width="25px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 28 28" style="enable-background:new 0 0 30 30;" xml:space="preserve">
          <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
          c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
          c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
        </svg>
      </button>

      <button id="refresh" @click="updateMental()">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 489.711 489.711" style="enable-background:new 0 0 489.711 489.711;" xml:space="preserve">
          <g>
            <g>
              <path d="M112.156,97.111c72.3-65.4,180.5-66.4,253.8-6.7l-58.1,2.2c-7.5,0.3-13.3,6.5-13,14c0.3,7.3,6.3,13,13.5,13
                c0.2,0,0.3,0,0.5,0l89.2-3.3c7.3-0.3,13-6.2,13-13.5v-1c0-0.2,0-0.3,0-0.5v-0.1l0,0l-3.3-88.2c-0.3-7.5-6.6-13.3-14-13
                c-7.5,0.3-13.3,6.5-13,14l2.1,55.3c-36.3-29.7-81-46.9-128.8-49.3c-59.2-3-116.1,17.3-160,57.1c-60.4,54.7-86,137.9-66.8,217.1
                c1.5,6.2,7,10.3,13.1,10.3c1.1,0,2.1-0.1,3.2-0.4c7.2-1.8,11.7-9.1,9.9-16.3C36.656,218.211,59.056,145.111,112.156,97.111z"/>
              <path d="M462.456,195.511c-1.8-7.2-9.1-11.7-16.3-9.9c-7.2,1.8-11.7,9.1-9.9,16.3c16.9,69.6-5.6,142.7-58.7,190.7
                c-37.3,33.7-84.1,50.3-130.7,50.3c-44.5,0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-0.7,12.9-7.2,12.2-14.7s-7.2-12.9-14.7-12.2l-88.9,8
                c-7.4,0.7-12.9,7.2-12.2,14.7l8,88.9c0.6,7,6.5,12.3,13.4,12.3c0.4,0,0.8,0,1.2-0.1c7.4-0.7,12.9-7.2,12.2-14.7l-4.8-54.1
                c36.3,29.4,80.8,46.5,128.3,48.9c3.8,0.2,7.6,0.3,11.3,0.3c55.1,0,107.5-20.2,148.7-57.4
                C456.056,357.911,481.656,274.811,462.456,195.511z"/>
            </g>
          </g>
        </svg>
      </button>

      <button @click="setLevel(1)" id="up">
        <svg version="1.1" id="Capa_1" width="25px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 28 28" style="enable-background:new 0 0 30 30;" xml:space="preserve">
          <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
          c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
          c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
        </svg>
      </button>
    </div>
    <div id="states">
      <div id="wins" v-if="numbers < maxNumbers">
        Up in {{maxWins - wins}} wins
      </div>
      <div id="fails" v-if="numbers > minNumbers">
        Down in {{maxFails - fails}} fails
      </div>
    </div>
  </div>
</template>

<script>
import generator from '../script/generator'

export default {
  name: 'Mental',
  data () {
    let minNumbers = 2
    return {
      answer: null,
      maxNumbers: 10,
      minNumbers: minNumbers,
      numbers: minNumbers,
      fails: 0,
      maxFails: 3,
      maxWins: 3,
      wins: 0,
      update: true,
      timer: 0
    }
  },
  methods: {
    validate: function () {
      if (this.answer === this.mental.result) {
        this.fails = 0
        this.wins++
        if (this.wins >= this.maxWins) {
          this.wins = 0
          this.setLevel(1)
        } else {
          this.updateMental()
        }
      } else {
        this.wins = 0
        this.fails++
        if (this.fails >= this.maxFails) {
          this.fails = 0
          if (this.numbers > this.minNumbers) {
            this.setLevel(-1)
          }
        }
      }
      this.answer = null
    },
    updateMental: function () {
      this.update = !this.update
    },
    setLevel (value) {
      this.resetStates()
      let newValue = this.numbers + value
      if (newValue >= this.minNumbers && newValue <= this.maxNumbers) {
        this.numbers = newValue
      }
    },
    resetStates () {
      this.fails = 0
      this.wins = 0
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
