<template>    
    <div id="foot" 
    padless
    color="primary lighten-1"
>
      <router-link to="/contact">Contact</router-link>
      <p> 2021 </p>
    </div>
</template>

<style lang="scss">
    #foot {
        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
            color: #42b983;
            }
        }
    }

    p{
        font-size: 10px;
    }
</style>