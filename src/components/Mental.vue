<template>
  <div class="hello">
    <h1>
      {{mental.text}}
    </h1>

    <input
    v-model.number="answer"
    @input="type"
    @blur="type"
    @keydown.enter="validate"
    :class="{'win': winned === 1, 'loose': winned === -1}"
    type="number"
    placeholder="equal..."
    />

    <div id="controls">
      <button @click="setLevel(-1)" id="down" :disabled="level <= minLevel">
        <svg version="1.1" id="Capa_1" width="25px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 28 28" style="enable-background:new 0 0 30 30;" xml:space="preserve">
          <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
          c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
          c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
        </svg>
      </button>
      <button id="refresh" @click="regenerate">
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
      <button @click="setLevel(1)" id="up" :disabled="level >= maxLevel">
        <svg version="1.1" id="Capa_1" width="25px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 28 28" style="enable-background:new 0 0 30 30;" xml:space="preserve">
          <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
          c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
          c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
        </svg>
      </button>
    </div>

    <div class="states">
      <h2>
        {{actualTime.toFixed(0)}} s
      </h2>
      <!--<div id="wins" v-if="level < maxLevel">
        Up in {{maxWins - wins}} wins
      </div>
      <div id="fails" v-if="level > minLevel">
        Down in {{maxFails - fails}} fails
      </div>-->
    </div>

    <div class="states">
      <div>
        level: <b>{{level - 1}}</b>
      </div>
      <div>
        Wins: <b>{{totalWins}}</b>
      </div>
      <div>
        Fails: <b>{{totalFails}}</b>
      </div>
    </div>

    <div v-for="(difficulty, index) in historyLevels" :key="index" class="history">
      <div v-if="history[difficulty] && difficulty" class="history-container">
        <h1>History for difficulty {{ difficulty }}</h1>
        <table class="history-table">
          <thead>
            <tr class="history-item-header">
              <th class="history-item-text">
                Calculus
              </th>
              <th class="history-item-fails">
                Fails
              </th>
              <th class="history-item-time">
                Total time (s)
              </th>
              <th class="history-item-time">
                Thinking time (s)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="history-item" v-for="(item, index) in sortedHistory[difficulty]" :key="index">
              <td class="history-item-text">
                <div v-if="!item.giveup" class="indicator" :style="{opacity: (item.time / sortedHistory[difficulty][0].time)}"/>
                <div v-else class="indicator give-up"/>
                {{ item.text }} = {{ item.result }}
              </td>
              <td class="history-item-fails">
                {{ item.fails }}
              </td>
              <td class="history-item-time">
                {{ item.time.toFixed(2) }}
              </td>
              <td class="history-item-time">
                {{ item.thinkingTime.toFixed(2) }}
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="historyTimeAverage[difficulty].time > 0" class="states">
          <div>
            average time: <b>{{historyTimeAverage[difficulty].time.toFixed(2)}}</b>
          </div>
          <div>
            average thinking time: <b>{{historyTimeAverage[difficulty].thinkingTime.toFixed(2)}}</b>
          </div>
        </div>
      </div>
    </div>
    <div v-if="historyLevels.length > 0" class="clear">
      <button @click="clearHistory" class="btn">Clear history</button>
    </div>
    <div class="note">
      <div v-if="historyLevels.length > 0" class="italic">
        thinking time is the respone time without the typing time
      </div>
    </div>
  </div>
</template>

<script>
import generator from '../script/generator'

let typingTimer
let typingTimeout

export default {
  name: 'Mental',
  data () {
    let minLevel = 2
    return {
      mental: {
        text: null,
        result: null
      },
      history: {},
      answer: null,
      maxLevel: 11,
      minLevel: minLevel,
      level: minLevel,
      fails: 0,
      maxFails: 3,
      maxWins: 3,
      wins: 0,
      timer: null,
      actualTime: 0,
      passedTime: 0,
      maxNumber: 100,
      winned: 0,
      totalWins: 0,
      totalFails: 0,
      typingTime: 0,
      isTyping: false,
      typingWait: false,
      typingTimeTemp: 0
    }
  },
  methods: {
    type() {
      if (this.answer) {
        clearTimeout(typingTimeout)
        this.isTyping = true
        this.typingTimeTemp = this.typingTime
        typingTimer = setInterval(() => {
          if (this.isTyping) {
            this.typingTime += 1
          }
        }, 1)
        typingTimeout = setTimeout(() => {
          this.stopTyping()
        }, 1500)
      } else {
        this.stopTyping()
        this.typingTime = 0
      }
    },
    stopTyping() {
      this.isTyping = false
      clearInterval(typingTimer)
    },
    regenerate() {
      this.addHistory(true)
      this.generate(true)
    },
    addHistory(giveup = false) {
      if (!this.history[this.realLevel]) {
        this.$set(this.history, this.realLevel, [])
      }
      this.history[this.realLevel].push({
        ...this.mental,
        fails: this.fails,
        thinkingTime: !giveup ? (this.actualTime - this.typingTime / 1000) : 0,
        time: this.actualTime,
        giveup
      })
      this.cacheHistory()
    },
    cacheHistory() {
      localStorage.setItem('history', JSON.stringify(this.history))
    },
    validate () {
      this.stopTyping();
      this.typingTime = this.typingTimeTemp
      if (this.answer === this.mental.result) {
        this.addHistory()
        this.totalWins++
        this.fails = 0
        this.wins++
        this.maxNumber += 2
        this.winned = 1
        this.generate()
        // if (this.wins >= this.maxWins) {
        //   this.wins = 0
        //   this.setLevel(1)
        // } else {
        //   this.generate()
        // }
      } else {
        this.totalFails++
        this.wins = 0
        this.fails++
        this.maxNumber > 10 && --this.maxNumber
        this.winned = -1
        // if (this.fails >= this.maxFails) {
        //   this.fails = 0
        //   if (this.level > this.minLevel) {
        //     this.setLevel(-1)
        //   }
        // }
      }
      this.typingTime = 0
      this.typingTimeTemp = 0
      setTimeout(() => this.winned = 0, 1000)
      this.answer = null
    },
    updateMental () {
      this.update = !this.update
    },
    setLevel (value) {
      this.resetStates()
      let newValue = this.level + value
      if (newValue >= this.minLevel && newValue <= this.maxLevel) {
        this.level = newValue
        this.generate()
      }
    },
    resetStates () {
      this.fails = 0
      this.wins = 0
    },
    generate (forced = false) {
      if (!forced) {
        this.passedTime += this.actualTime
      }
      this.actualTime = 0
      this.timer && clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.actualTime += 0.1
      }, 100)
      this.mental = generator(this.level, this.maxNumber)
    },
    sort(a, b) {
      if (a.time > b.time) {
        return -1
      }
      if (a.time < b.time) {
        return 1
      }
      return 0
    },
    clearHistory() {
      localStorage.removeItem('history')
      this.history = {}
    }
  },
  created () {
    this.generate()
    const history = localStorage.getItem('history')
    if (history) {
      this.history = JSON.parse(history)
    }
  },
  computed: {
    totalResponse () {
      return this.totalWins + this.totalFails
    },
    averageTime () {
      return this.totalResponse > 0 ? (this.passedTime / this.totalResponse).toFixed(1) : 0
    },
    historyLevels () {
      return Object.keys(this.history)
    },
    sortedHistory () {
      return this.historyLevels.sort(this.sort).reduce((prev, difficulty) => {
        const items = this.history[difficulty].sort(this.sort).sort((a, b) => {
          if (!a.giveup && b.giveup) {
            return -1
          }
          if (a.giveup && !b.giveup) {
            return 1
          }
          return 0
        })
        return {
          ...prev,
          [difficulty]: items
        }
      }, {})
    },
    historyCountItems() {
      return this.historyLevels.reduce((prev, difficulty) => {
        return {
          ...prev,
          [difficulty]: this.history[difficulty].filter(item => !item.giveup).length
        }
      }, {})
    },
    historyTimeAverage () {
      return this.historyLevels.reduce((prev, difficulty) => {
        const sum = this.history[difficulty].reduce((prev, item) => {
          if (item.giveup) {
            return prev
          }
          return {
            time: prev.time + item.time,
            thinkingTime: prev.thinkingTime + item.thinkingTime
          }
        }, {
          time: 0,
          thinkingTime: 0
        })
        const itemsCount = this.historyCountItems[difficulty]
        return {
          ...prev,
          [difficulty]: {
            time: itemsCount ? (sum.time / itemsCount) : 0,
            thinkingTime: itemsCount ? (sum.thinkingTime / itemsCount) : 0
          }
        }
      }, {})
    },
    realLevel() {
      return this.level - 1
    }
  }
}
</script>

<style lang="stylus" scoped>
.clear
  display flex
  width 100%
  margin-top 80px
  margin-bottom 30px
  justify-content center
  .btn
    margin-right 1em
    margin-left 1em

.italic
  font-style italic

.note
  margin-top 100px
  margin-bottom 40px

.history
  margin-top 100px
  display flex
  justify-content center
  margin-bottom 35px

.history-item-header
  font-size 1.6em
  height: 2em
  font-weight bolder

.history-container
  width 95%

.history-table
  width 100%

.history-item
  font-size 1.5em
  margin-top 14px
  margin-bottom 14px

.history-item-text
  font-weight bold
  display flex
  align-items center

.history-item-time
  text-align right

.indicator
  margin-right 10px
  height 100%
  width: 10px
  height 10px
  background red
  border-radius 20px

.give-up
  background-color: black

table
  width 100%
  display block
  overflow-x auto
  white-space nowrap
  border-collapse collapse

td, th
  padding: .6em 1em;

tr:nth-child(2n)
  background rgba(44, 62, 80, 0.07)

#controls
  margin-top: 20px
  #refresh
    svg
      width: 25px
  #up
    transform: rotate(180deg)
  svg
    fill: rgb(150, 150, 150)

.states
  user-select none
  margin-top: 40px

.win
  border: 3px solid #53d397

.loose
  border: 3px solid #ff1f5a

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button
  -webkit-appearance: none
  margin: 0

input[type="number"]
  -moz-appearance:textfield;
  background: rgb(231, 231, 231)
  border: none
  color: rgb(99, 99, 99)
  border-radius: 10px
  font-weight: bold
  font-size: 1.6em
  padding: 10px 20px
  width: 25%
  min-width: 150px
  transition all .2s
  border 3px solid transparent
  outline: none
  &:focus
    outline: none

h2
  color #ccc
  font-size 2em

.btn
  font-size 1.2em
  border-radius 10px
  font-weight bold
  color white
  background #2c3e50
  padding 0.7em 1em
  transition all .2s
  &:active
    transform scale(0.9)
</style>
