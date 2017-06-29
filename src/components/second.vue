<template>
    <div class="second">
        {{hhe}}
    </div>
</template>
<script>
    import bus from '../bus'
    export default{
        props:{
            id:{
                type:Number
            }
        },
        data(){
            return {
                show:false,
                content:'',
                num:200,
                hhe:'fuck'
            }
        }
    }    
</script>
<style lang="sass" scoped>
     .second{
         background:#03ccbb;
     }
</style>