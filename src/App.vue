<template>
  <div id="app">
    <h1>Vue To-Do App</h1>
    <!-- Todo Input Component -->
    <TodoInput @addTodo="addTodo" />
    <!-- Todo List Component -->
    <TodoList :todos="todos" @removeTodo="removeTodo" />
  </div>
</template>

<script>
import { ref } from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList,
  },
  setup() {
    const todos = ref([]);

    const addTodo = (task) => {
      if (task.trim()) {
        todos.value.push(task);
      }
    };

    const removeTodo = (index) => {
      todos.value.splice(index, 1);
    };

    return { todos, addTodo, removeTodo };
  },
};
</script>

<style scoped>
#app {
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
}

h1 {
  color: #333;
}
</style>
