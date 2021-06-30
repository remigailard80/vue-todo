<template>
    <ul class="list-group">
        <li class="todo-list-item" v-for="(todo, idx) in todos" :key="{idx}">
            {{todo.name}}
            <span> 더보기 ▼ </span>
        </li>
    </ul>
</template>
<script>
    export default {
        name: 'TodoList',
        props: {
            todos: { type: Array, default: () => [] }
        },
        data () {
            return {
                msg: "Hello, Input"
            }
        }
    }
</script>

<style lang="scss">
@import '~@/assets/scss/components/TodoList';
</style>