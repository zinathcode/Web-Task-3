<template>
  <div class="input-container">
    <input
      v-model="task"
      type="text"
      placeholder="Enter a task"
      @keyup.enter="submitTodo"
    />
    <button @click="submitTodo">Add</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TodoInput',
  emits: ['addTodo'],
  setup(props, { emit }) {
    const task = ref('');

    const submitTodo = () => {
      if (task.value.trim()) {
        emit('addTodo', task.value);
        task.value = ''; // Clear the input after adding
      }
    };

    return { task, submitTodo };
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

button {
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
