<template>
    <div class="contact">
    <Head/>
    <h1>This is the contact page</h1>
    <Foot/>
  </div>
</template>
<script>
// @ is an alias to /src
import Head from "@/components/header.vue";
import Foot from "@/components/footer.vue";

export default {
  name: "contact",
  components: {
    Head,Foot
  },
};
</script>