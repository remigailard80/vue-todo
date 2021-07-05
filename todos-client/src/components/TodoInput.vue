<template>
         <div class="input-group" style="margin-bottom: 10px;">
             <div class="input-wrapper">
                <input type="text" class="form-control" placeholder="할 일 입력" value=""/>
                <button v-on:click="handleOnClick(getContent())"> 추가 </button>
            </div>
         </div>
</template>
<script>
    export default {
        name: 'TodoInput',
        props: {
            handleOnClick: { type: Function, default: () => {}},
        },
        data () {
            return {
                todo: ""
            }
        },
        methods: {
            getContent() {
                let content = document.getElementsByClassName('form-control')[0];
                return content.value;
            }
        }
    }
</script>

<style lang="scss">
@import '~@/assets/scss/components/TodoInput';
</style>