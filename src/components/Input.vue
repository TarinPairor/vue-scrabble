<!-- input.vue -->
<template>
  <div>
    <textarea v-model="newName" placeholder="Enter a name"></textarea>
    <button @click="saveName">Save</button>
    <ul>
      <li v-for="(item, index) in nameList" :key="index">
        <div>
          <span
            @click="editName(index, 'name')"
            class="editable"
            title="Click to edit"
            >{{ item.name }}</span
          >
          <span
            @click="editName(index, 'won')"
            class="editable"
            title="Click to edit"
          >
            Won: {{ item.won }}</span
          >
          <span
            @click="editName(index, 'score')"
            class="editable"
            title="Click to edit"
            >Score: {{ item.score }}</span
          >
          <span class="remove-icon" @click="removeName(index)">🗑️</span>
        </div>
      </li>
    </ul>
    <router-link to="/game">
      <button>Go to Game</button>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newName: "",
      nameList: this.loadFromLocalStorage() || [], // Load data from local storage
    };
  },
  methods: {
    saveName() {
      if (this.newName.trim() !== "") {
        const newItem = {
          id: Date.now(), // Assign a unique ID (timestamp in this case)
          name: this.newName.trim(),
          won: 0,
          score: 0,
        };
        this.nameList.push(newItem);
        this.saveToLocalStorage(); // Save data to local storage
        this.newName = ""; // Clear the input field after saving
      }
    },
    removeName(index) {
      this.nameList.splice(index, 1);
      this.saveToLocalStorage(); // Save data to local storage after removal
    },
    editName(index, field) {
      const valueToAdd = prompt(`Enter value to add to ${field}:`, "0");
      if (valueToAdd !== null) {
        // Use parseFloat to handle numeric input
        const parsedValue = parseFloat(valueToAdd);
        if (!isNaN(parsedValue)) {
          // Update the field by adding the parsed value
          this.nameList[index][field] += parsedValue;
        }
      }
    },
    saveToLocalStorage() {
      // Save the current nameList to local storage
      localStorage.setItem("nameList", JSON.stringify(this.nameList));
    },
    loadFromLocalStorage() {
      // Load data from local storage
      const storedData = localStorage.getItem("nameList");
      return storedData ? JSON.parse(storedData) : null;
    },
  },
};
</script>
<style scoped>
/* Add your component-specific styles here */
.remove-icon {
  cursor: pointer;
  margin-left: 5px;
}
.editable {
  cursor: pointer;
  text-decoration: underline;
}
.editable:hover {
  font-weight: bold;
}
</style>
