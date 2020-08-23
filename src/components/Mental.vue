<template>
  <div class="hello">
    <div v-if="!showSettings" @click="showSettings = true" class="settings-button">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <g>
          <g>
            <path d="M509.952,223.895c-1.685-12.864-8.96-24.021-19.989-30.677c-10.859-6.549-23.872-7.723-36.011-3.2
              c-9.813,3.712-21.077-1.387-25.6-11.499c-5.205-11.605-11.584-22.72-19.008-33.045c-6.613-9.173-5.376-21.205,2.859-27.989
              c9.813-8.064,15.296-19.989,15.04-32.683c-0.256-12.907-6.357-24.789-16.683-32.64c-17.024-12.907-35.584-23.616-55.189-31.872
              c-12.053-5.077-25.429-4.373-36.736,1.856c-11.115,6.144-18.667,16.811-20.757,29.333c-1.771,10.56-11.541,17.621-22.933,16.448
              c-12.459-1.323-25.429-1.323-37.867,0c-11.285,1.195-21.163-5.888-22.933-16.448c-2.091-12.523-9.643-23.211-20.757-29.333
              c-11.328-6.251-24.725-6.933-36.736-1.856c-19.627,8.256-38.187,18.965-55.211,31.872C91.115,60.012,85.035,71.895,84.779,84.78
              c-0.256,12.715,5.227,24.619,15.061,32.747c8.213,6.763,9.451,18.795,2.859,27.968c-7.445,10.325-13.824,21.44-19.029,33.045
              c-4.501,10.133-15.787,15.211-25.835,11.413c-11.861-4.416-24.896-3.243-35.776,3.285c-11.051,6.635-18.325,17.813-19.989,30.677
              C0.704,234.497,0,245.313,0,256.001c0,10.688,0.704,21.504,2.048,32.107c1.685,12.864,8.96,24.021,19.989,30.677
              c10.859,6.528,23.851,7.723,36.011,3.2c9.792-3.733,21.056,1.365,25.6,11.499c5.205,11.605,11.584,22.72,19.008,33.045
              c6.613,9.173,5.376,21.205-2.859,27.989c-9.813,8.064-15.296,19.989-15.04,32.683c0.256,12.907,6.357,24.789,16.683,32.64
              c17.024,12.907,35.584,23.616,55.189,31.872c12.053,5.077,25.408,4.373,36.736-1.856c11.115-6.144,18.667-16.811,20.757-29.333
              c1.771-10.56,11.627-17.621,22.933-16.448c12.437,1.323,25.408,1.323,37.867,0c11.413-1.131,21.163,5.888,22.933,16.448
              c2.091,12.523,9.643,23.211,20.757,29.333c6.315,3.477,13.227,5.227,20.224,5.227c5.589,0,11.179-1.131,16.491-3.371
              c19.605-8.256,38.165-18.987,55.189-31.872c10.347-7.829,16.427-19.733,16.683-32.619c0.256-12.715-5.227-24.64-15.04-32.725
              c-8.213-6.763-9.451-18.795-2.859-27.968c7.445-10.325,13.824-21.44,19.029-33.045c4.523-10.133,15.829-15.189,25.6-11.499
              l0.235,0.085c11.904,4.459,24.917,3.243,35.776-3.285c11.051-6.656,18.325-17.813,19.989-30.699
              c1.365-10.688,2.069-21.461,2.069-32.085C512,245.377,511.296,234.604,509.952,223.895z M488.768,285.377
              c-0.811,6.336-4.395,11.861-9.813,15.125c-5.227,3.179-11.541,3.733-17.515,1.493l-0.128-0.043
              c-20.352-7.531-43.328,2.475-52.437,22.827c-4.608,10.283-10.283,20.16-16.875,29.312c-13.248,18.432-10.389,42.901,6.635,56.896
              c4.736,3.904,7.381,9.664,7.253,15.808c-0.128,6.336-3.115,12.181-8.235,16.064c-15.573,11.819-32.597,21.653-50.581,29.205
              c-5.952,2.517-12.608,2.176-18.155-0.875c-5.355-2.965-9.003-8.107-10.005-14.144c-3.392-20.288-20.757-34.411-41.387-34.411
              c-1.579,0-3.2,0.064-4.821,0.192c-10.987,1.152-22.421,1.152-33.408,0c-22.699-2.581-42.56,12.309-46.208,34.155
              c-1.003,6.037-4.651,11.2-10.005,14.144c-5.568,3.072-12.203,3.392-18.176,0.875c-17.984-7.573-35.008-17.387-50.581-29.205
              c-5.12-3.861-8.107-9.728-8.235-16.043c-0.128-6.144,2.517-11.904,7.275-15.808c17.024-13.995,19.861-38.464,6.613-56.896
              c-6.592-9.173-12.245-19.029-16.853-29.312c-9.131-20.395-32.192-30.357-52.821-22.677c-5.696,2.133-12.032,1.6-17.259-1.579
              c-5.419-3.243-9.003-8.768-9.813-15.125c-1.259-9.685-1.899-19.584-1.899-29.355c0-9.771,0.64-19.669,1.92-29.376
              c0.811-6.336,4.395-11.861,9.813-15.125c5.205-3.157,11.541-3.733,17.493-1.493c20.373,7.595,43.435-2.368,52.565-22.784
              c4.608-10.283,10.283-20.139,16.875-29.291c13.248-18.432,10.389-42.901-6.635-56.896c-4.736-3.904-7.381-9.664-7.253-15.808
              c0.128-6.336,3.115-12.181,8.235-16.064c15.573-11.819,32.597-21.632,50.581-29.205c5.952-2.517,12.587-2.197,18.155,0.875
              c5.355,2.944,9.003,8.107,10.005,14.165c3.648,21.845,23.509,36.587,46.208,34.155c10.965-1.152,22.4-1.152,33.408,0
              c22.571,2.411,42.56-12.309,46.208-34.155c1.003-6.037,4.651-11.2,10.005-14.144c5.568-3.093,12.181-3.413,18.176-0.875
              c17.984,7.573,35.008,17.387,50.581,29.205c5.12,3.861,8.107,9.728,8.235,16.043c0.128,6.144-2.517,11.904-7.275,15.808
              c-17.024,13.995-19.861,38.464-6.613,56.896c6.592,9.173,12.245,19.029,16.853,29.312c9.131,20.395,32.213,30.379,52.821,22.677
              c5.717-2.155,12.011-1.579,17.259,1.579c5.419,3.264,9.003,8.789,9.813,15.125c1.259,9.792,1.899,19.669,1.899,29.376
              C490.667,265.708,490.027,275.585,488.768,285.377z"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M256,149.335c-58.816,0-106.667,47.851-106.667,106.667S197.184,362.668,256,362.668s106.667-47.851,106.667-106.667
              S314.816,149.335,256,149.335z M256,341.335c-47.061,0-85.333-38.272-85.333-85.333s38.272-85.333,85.333-85.333
              s85.333,38.272,85.333,85.333S303.061,341.335,256,341.335z"/>
          </g>
        </g>
      </svg>
    </div>
    <div class="settings-button" @click="showSettings = false" v-else>
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 512 512.001" style="enable-background:new 0 0 512 512.001;" xml:space="preserve">
      <g>
        <g>
          <path d="M284.284,256L506.142,34.142c7.811-7.81,7.811-20.474,0-28.284c-7.811-7.811-20.474-7.811-28.284,0L256,227.716
            L34.142,5.858c-7.811-7.811-20.474-7.811-28.284,0c-7.811,7.81-7.811,20.474,0,28.284L227.716,256L5.858,477.858
            c-7.811,7.811-7.811,20.474,0,28.284c7.81,7.81,20.473,7.811,28.284,0L256,284.284l221.858,221.858
            c7.81,7.81,20.473,7.811,28.284,0c7.811-7.811,7.811-20.474,0-28.284L284.284,256z"/>
        </g>
      </g>
      </svg>
    </div>
    <div v-if="showSettings" class="settings-wrapper">
      <div class="settings">
        <div>
          <input v-model="operations.times" type="checkbox"/>
          <label>Multiplications</label>
        </div>
        <div>
          <input v-model="operations.plus" type="checkbox"/>
          <label>Additions</label>
        </div>
        <div>
          <input v-model="operations.minus" type="checkbox"/>
          <label>Soustractions</label>
        </div>
        <div class="form-text">
          <label>
            Nombre maximum
          </label>
          <input
          v-model.number="maxNumber"
          type="number"
          placeholder="Nombre maximum"
          />
        </div>
        <div class="form-text">
          <label>
            Nombre minimum
          </label>
          <input
          v-model.number="minNumber"
          type="number"
          placeholder="Nombre minimum"
          />
        </div>
        <div class="form-button">
          <button @click="showSettings = false" class="btn">Sauvegarder</button>
        </div>
      </div>
    </div>

    <h1 :style="{fontSize}">
      {{mental.text}}
    </h1>

    <input
    v-model.number="answer"
    @input="type"
    @blur="type"
    @keydown.enter="validate"
    :class="{'win': winned === 1, 'loose': winned === -1}"
    type="number"
    placeholder="égale..."
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
        niveau: <b>{{level - 1}}</b>
      </div>
      <div>
        victoires: <b>{{totalWins}}</b>
      </div>
      <div>
        erreurs: <b>{{totalFails}}</b>
      </div>
    </div>

    <div v-for="(difficulty, index) in historyLevels" :key="index" class="history">
      <div v-if="history[difficulty] && difficulty" class="history-container">
        <h1>Stats du niveau {{ difficulty }}</h1>
        <div class="table-container">
          <table class="history-table">
            <thead>
              <tr class="history-item-header">
                <th class="history-item-text">
                  Calcul
                </th>
                <th class="history-item-fails">
                  Erreurs
                </th>
                <th class="history-item-time">
                  Temps total (en secondes)
                </th>
                <th class="history-item-time">
                  Temps de réflexion (en secondes)
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
        </div>
        <div v-if="historyTimeAverage[difficulty].time > 0" class="states">
          <div>
            Temps total moyen: <b>{{historyTimeAverage[difficulty].time.toFixed(2)}}</b>
          </div>
          <div>
            Temps de réflexion moyen: <b>{{historyTimeAverage[difficulty].thinkingTime.toFixed(2)}}</b>
          </div>
        </div>
      </div>
    </div>
    <div v-if="historyLevels.length > 0" class="clear">
      <button @click="clearHistory" class="btn">Supprimer l'historique de calcul</button>
    </div>
    <div class="note">
      <div v-if="historyLevels.length > 0" class="italic">
        <div class="indicator"/>Ce point indique ta difficulté pour ce calcul (plus c'est rouge, plus tu as mis du temps)
      </div>
      <div v-if="historyLevels.length > 0" class="italic">
        <div class="indicator give-up"/>Ce point indique que tu as abandonné ce calcul
      </div>
      <div v-if="historyLevels.length > 0" class="italic">
        Le temps de réflexion est le temps que tu as mis avant de tapper la réponse sur ton clavier
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
      maxLevel: 5,
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
      typingTimeTemp: 0,
      fontSize: '2em',
      minLevel: 0,
      minNumber: 1,
      showSettings: false,
      operations: {
        minus: true,
        plus: true,
        times: true
      }
    }
  },
  watch: {
    showSettings() {
      this.regenerate() 
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
      this.mental = generator(this.level, this.maxNumber, this.minNumber, this.operations)
      this.setFontSize()
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
    },
    setFontSize() {
      const fontSize = (window.innerWidth / this.mental.text.length / 10 - 0.05).toFixed(2)
      console.log(window.innerWidth, fontSize)
      if (fontSize < 3) {
        this.fontSize = `${fontSize}em`
      } else {
        this.fontSize = undefined
      }
    }
  },
  created () {
    this.generate()
    const history = localStorage.getItem('history')
    if (history) {
      this.history = JSON.parse(history)
    }
    window.addEventListener('resize', this.setFontSize)
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
.settings-button
  width: 40px
  position fixed
  top 20px
  right 20px
  opacity 0.5
  cursor pointer
  z-index 9999

input[type="checkbox"]
  height 20px
  width 20px
  margin-right 10px

label
  vertical-align top
  font-size 1.3rem
  font-weight bold
  text-align left
  width 100%

.form-button
  margin-top 50px

.settings
  display flex
  flex-direction column
  justify-content start
  align-items start
  input[type="number"]
    width 100%

.form-text
  align-items center
  display flex
  margin-top 10px
  
.settings-wrapper
  z-index 999
  width 100%
  height 100vh
  position fixed
  background rgba(255, 255, 255, 0.6)
  backdrop-filter blur(10px)
  display flex
  justify-content center
  align-items center

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
  div
    display inline-block
    margin 0.5em 0.4em
    vertical-align middle
  display flex
  flex-direction column
  text-align center
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

.table-container
  overflow-x auto

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
  min-width: 10px
  min-height 10px
  background red
  border-radius 20px

.give-up
  background-color: black

table
  width 100%
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
  letter-spacing 10px

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

#controls
  user-select none
</style>
