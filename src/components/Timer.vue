<template>
  <div class="timer">
    {{ countDown }}
  </div>
</template>

<script>
export default {
  name: 'timer',
  props: ['countDown'],
  mounted () {
    setInterval(() => {
      const blink = document.querySelector('.active')
      if (this.countDown - 1 <= 3 ) {
        blink.classList.add('blink')
      }
      this.countDown--
    }, 1000)
  }
}
</script>

<style scoped>

.timer {
  padding: 16px 24px;
  width: 100px;
  position: fixed;
  top: 24px;
  right: 24px;
  border-radius: 4px;
  background-color: #172b4d;
  color: #fff;
}
</style>
