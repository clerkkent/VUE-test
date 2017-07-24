<template>
    <div>
        <div class="popum">
            <input type="text" v-model="text">
            <p>取消</p>
            <p>确认</p>
        </div>
    </div>
</template>
<script>
    import store from '../store/state'
    import router from '../router/router'
    export default {
        name:"popum-first",
        data(){
            return {
                show:false,
                text:""
            }
        },
        methods:{
            confirm (){
                this.$store.dispatch("HIDEPOPUM");
                show=this.$store.index.show
            }
        },
    }
</script>
<style lang="sass" scoped>
     .popum{
         display:block;
         background:#03ccbb;
         width:300px;
         height:300px;
     }
</style>