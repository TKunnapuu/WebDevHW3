<template>
<div class="home">
    <Head/>
    <Reset/>
    <Post/>
    <Foot/>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "@/components/header.vue";
import Reset from "@/components/reset.vue";
import Post from "@/components/post.vue";
import Foot from "@/components/footer.vue";

export default {
  name: "home",
  components: {
    Post, Reset, Head,Foot
  },
};
</script>