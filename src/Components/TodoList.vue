<template>
  <ul>
    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      @removeTodo="removeTodo(index)"
    />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    TodoItem,
  },
  emits: ['removeTodo'],
  setup(props, { emit }) {
    const removeTodo = (index) => {
      emit('removeTodo', index);
    };

    return { removeTodo };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
