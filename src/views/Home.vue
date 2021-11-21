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