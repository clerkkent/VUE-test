<template>
    <div class="first">
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
     .first{
         background:red;
     }
</style>