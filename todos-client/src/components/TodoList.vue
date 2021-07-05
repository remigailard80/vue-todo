<template>
    <ul class="list-group">
        <li class="todo-list-item" v-for="(todo, idx) in todos" :key="{idx}">
            {{todo.name}}
            <span v-on:click="onClickDelete(idx)"> 삭제 </span>
            <!-- <div class="list-dropdown" v-if="modal === true">
                <span> 삭제 </span>
            </div> -->
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
                msg: "Hello, Input",
                modal: false
            }
        },
        methods: {
            onClickModal: function() {
                this.modal = !this.modal;
            },
            onClickDelete: function(idx) {
                this.$props.todos.splice(idx,1);
            },
        },
    }
</script>

<style lang="scss">
@import '~@/assets/scss/components/TodoList';
</style>