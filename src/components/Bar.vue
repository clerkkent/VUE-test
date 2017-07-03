<template>
    <div class="first" @click="dosomething">
        {{hhe}}{{count}}  
        <div>
            {{content}}
        </div>
    </div>
</template>
<script>
import bus from '../bus'
import store from '../store/state'
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
            content:'x',
            num:200,
            hhe:'fuck'
        }
    },
    methods:{
        dosomething (){
            this.content="混合"
            router.push({ path: '/second' })//栈导航
        }
    },
    computed: {
            count () {
            return store.state.count
        }
    }
    }    
</script>
<style lang="sass" scoped>
     .first{
         background:#eee;
     }
</style>