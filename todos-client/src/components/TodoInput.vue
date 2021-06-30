<template>
         <div class="input-group" style="margin-bottom: 10px;">
             <div class="input-wrapper">
                <input type="text" class="form-control" placeholder="할 일 입력" />
                <button> 추가 </button>
            </div>
         </div>
</template>
<script>
    export default {
        name: 'TodoInput',
        data () {
            return {
                msg: "Hello, Input"
            }
        }
    }
</script>

<style lang="scss">
@import '~@/assets/scss/components/TodoInput';
</style>