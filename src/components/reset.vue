<template>    
    <div id="rst" 
    color="primary lighten-1"
    >

        <div class="contentFooter">
                <input class="reset" type="image" :src="require('@/assets/images/reset.png')" style="width:76;height:48px;"/>
            </div>

    </div>
</template>

<script>
    export default {
        name: "post",
        data: function(){
            return {}
        },
        computed: {
            postList() {return this.$store.state.postList}
        }
    }
</script>

<style>
    input[type="image"] {
        width: 50%;
        height: 40px;
        border-radius: 6px;
        background: #0c5899;
        color: white;
        margin-bottom: 10px;
    }
    .reset:hover {
    box-shadow: 2px 2px 2px 2px gray;}
</style>