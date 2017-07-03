<template>
    <div class="second" @click="dosomething">
        {{hhe}}
        {{this.$route.params.userId}}
    </div>
</template>
<script>
    import bus from '../bus'
    import router from '../router/router'
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
                hhe:'fuck',
                userId:this.$route.params.userId
            }
        },
        mounted () {
             console.log(this.$route);  
         },
        ready: function(){   
            console.log('deviceid: ' + this.$route.params.userId);  
        },
        methods:{
        dosomething (){
            router.push({ path: '/x' , params: { userId: 123 }})//栈导航
        }
    } 

    }    
</script>
<style lang="sass" scoped>
     .second{
         background:#03ccbb;
     }
</style>