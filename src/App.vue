<template>
   <NavBar />
  <router-view/>
  <FotterMe />
</template>
<script>
  import NavBar from"./components/NavBar.vue";
  import FotterMe from"./components/FotterMe.vue";
  
  
  
  export default{
    name:"App",
    components:{
      NavBar,
      FotterMe,
      
    }
  }
</script>
<style lang="scss">
  @font-face {
    font-family: 'Cairo'; /* اسم الخط الذي تريد استخدامه */
    src: url('@/assets/Cairo/Cairo-VariableFont_slnt,wght.ttf') format('truetype'); /* رابط للخط وامتداده */
    font-weight: normal;
    font-style: normal;
}
*{
  font-family: 'Cairo',sans-serif;
font-size:20px;
font-weight:700;
}

  body{
   background:#330099;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media (min-width:768px){
  *{
    font-size:33px;
  }
}
.rounded , .rounded-lg{
  margin-top:5px;
  margin-bottom:5px;
}
h1{
  font-size:24px;
}
</style>
