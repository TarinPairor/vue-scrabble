<template>
  <div>
    <h1>Game</h1>
    <ul>
      <li v-for="(item, index) in nameList" :key="index">
        {{ item.name }} - Won: {{ item.won }} - Score: {{ item.score }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameList: this.loadFromLocalStorage() || [], // Load data from local storage
    };
  },
  methods: {
    loadFromLocalStorage() {
      // Load data from local storage
      const storedData = localStorage.getItem("nameList");
      return storedData ? JSON.parse(storedData) : [];
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
