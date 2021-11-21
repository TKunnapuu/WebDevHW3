<template>
<div class="home">
    <Head/>
    <Post/>
    <Foot/>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "@/components/header.vue";
import Post from "@/components/post.vue";
import Foot from "@/components/footer.vue";

export default {
  name: "home",
  components: {
    Post,Head,Foot
  },
};
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
        display: flex;
        justify-content: center;
        box-shadow: 5px 5px 5px gray;
        margin: 20px;
        flex-direction: column;
        border: wheat;
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