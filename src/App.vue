<template>
  <div id="app">
    <section>
      <p>Times clicked: {{ count }}</p>
      <button @click="increment">increment</button>
    </section>
    <section>
      <br />
      <button @click="resetCount">Reset</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    resetCount() {
      this.count = 0;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
