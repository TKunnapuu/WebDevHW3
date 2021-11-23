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
                <input class="like" type="image" :src="require('@/assets/images/like.jpg')" style="width:48;height:48px;"/>
                <p class = "likes">
                    {{post.likes}} 
                </p>
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

<style scoped>
    .contentHeader{ /* Header of a post */
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
    }
    .contentHeader>p{
    padding: 10px;
    }
    .contentHeader>img{
        width: 50px;
        height: 50px;
    }
    .contentBox{ /* The container for the contents of a post */
        /*display: flex; */
        justify-content: center;
        box-shadow: 5px 5px 5px gray;
        margin: 20px;
        flex-direction: column;
        border: wheat;
    }

    .contentFooter{
        display: fixed;
        flex-direction: row;
    }

    input[type="submit"] {
        width: 50%;
        height: 40px;
        border-radius: 6px;
        background: #0c5899;
        color: white;
        margin-bottom: 10px;
    }
    .imagePost{ /* The post's image */
    width: 100%;}
    .like:hover {
    box-shadow: 2px 2px 2px 2px gray;}
</style>