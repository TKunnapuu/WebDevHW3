<template>
    <div class="about">
    <Head/>
    <h1>This is an about page</h1>
    <Foot/>
  </div>
</template>
<script>
// @ is an alias to /src
import Head from "@/components/header.vue";
import Foot from "@/components/footer.vue";

export default {
  name: "about",
  components: {
    Head,Foot
  },
};
</script>