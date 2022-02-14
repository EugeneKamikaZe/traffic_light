<template>
  <div class="global">
    <div class="light__bulb-wrapper" v-for="bulb in bulbs" v-bind:key="bulb.id">
      <div class="light__bulb" :class="{active: bulb.path === isActive}" :path="bulb.path" :id="bulb.color">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bulbs: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isActive: function () {
      return this.$route.path
    }
  }
};
</script>

<style>
#red {
  background-color: #e64848;
}
#yellow {
  background-color: #fdfd2b;
}
#green {
  background-color: #1ad21a;
}

.light__bulb-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.light__bulb {
  width: 100px;
  height: 100px;
  border: 4px solid #091e42;
  border-radius: 50%;
  transition: .2s opacity;
  opacity: .5;
  margin-bottom: 16px;
}
.light__bulb.active {
  opacity: 1;
}
.blink {
  animation: blink 3s linear;
}
@keyframes blink {
  0% { opacity: 1; }
  20% { opacity: .2; }
  40% { opacity: 1; }
  60% { opacity: .2; }
  80% { opacity: 1; }
  100% { opacity: .2; }
}
</style>
