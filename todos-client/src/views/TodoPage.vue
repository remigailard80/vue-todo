<template>
    <div class="container">
         <h2> Todo List </h2>
         <!-- https://simplevue.gitbook.io/intro/04.-loop-condition -->
         <TodoInput :handleOnClick="addTodo"/>
         <TodoList :todos="todos" />
    </div>
</template>
<script>
    import Vue from 'vue';
    import TodoInput from '@/components/TodoInput';
    import TodoList from '@/components/TodoList';
    
    // Vue Component 등록
    Vue.component(TodoInput.name, TodoInput);
    Vue.component(TodoList.name, TodoList);

    export default {
        name: 'TodoPage',
        data() {
            return {
                todos: [
                    {
                        name: '청소하기'
                    },
                    {
                        name: 'JS 공부하기'
                    },
                    {
                        name: 'Vue 공부하기'
                    }
                ],
                msg: 'Example Vue'
            };
        },
        methods: {
            addTodo(data) {
                console.log(data);
                this.todos.push({'name' : data})
            }
        },
        mounted() {
            console.log("Component Mounted");
        }
    }
</script>
<style lang='scss'>
@import '~@/assets/scss/pages/TodoPage';
</style>
