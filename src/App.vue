<template>
  <div id="app">
    <light-bulb :bulbs="bulbs"/>
    <timer :countDown="time" />
  </div>
</template>

<script>
import LightBulb from './components/LightBulb'
import Timer from './components/Timer'

class State {
  constructor (path, duration, next) {
    this.path = path
    this.duration = duration
    this.next = next
  }
}

export default {
  name: 'App',
  components: {
    LightBulb,
    Timer,
  },
  data() {
    return {
      bulbs: [
        { id: 1, color: 'red', path: '/red', duration: 10 },
        { id: 2, color: 'yellow', path: '/yellow', duration: 3 },
        { id: 3, color: 'green', path: '/green', duration: 15 },
      ],
      time: 0,
    };
  },
  methods: {
    trigger(state, callback) {
      callback(state);
      this.time = state.duration
      setTimeout(() => {
        this.trigger(state.next, callback);
      }, state.duration * 1000)
    }
  },
  mounted () {
    const red = new State(this.bulbs[0].path, this.bulbs[0].duration)
    const yellowRed = new State(this.bulbs[1].path, this.bulbs[1].duration)
    const green = new State(this.bulbs[2].path, this.bulbs[2].duration)
    const yellowGreen = new State(this.bulbs[1].path, this.bulbs[1].duration)
    let startState = red

    red.next = yellowRed
    yellowRed.next = green
    green.next = yellowGreen
    yellowGreen.next = red

    if (this.$route.path === '/yellow') {
      startState = yellowRed
    } else if (this.$route.path === '/green') {
      startState = green
    }

    this.trigger(startState, (state) => {
      this.$router.push({ path: state.path, component: LightBulb })
    })
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  background-color: #f4f5f7;
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
