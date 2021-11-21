<template>
    <div id="post-list">
    <div class="contentBox" v-for = "post in postList" :key ="post.id">
            <div class="contentHeader">
                <img src="@/assets/images/user.png">
                <p class=date>
                    {{post.date}}
                </p>
            </div>
            <div class="contentContent">
                <img class="imagePost" :src="require('@/assets/images/' + post.image + '.jpg')" alt=""/>

                <p class = "caption">
                    {{post.caption}} 
                </p>
            </div>
            <div class="contentFooter">
                <input class="like" type="image" :src="require('@/assets/images/like.jpg')" style="width:76;height:48px;"/>
            </div>
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
