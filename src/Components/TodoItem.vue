<template>
  <li class="todo-item">
    {{ todo }}
    <button @click="removeTodo">Remove</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  emits: ['removeTodo'],
  setup(props, { emit }) {
    const removeTodo = () => {
      emit('removeTodo');
    };

    return { removeTodo };
  },
};
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}

button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: darkred;
}
</style>
