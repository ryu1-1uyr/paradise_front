<template>
  <div id="app">

    <a href="/#/" class="nav">home</a>
    <a href="/#/about" class="nav">about</a>
    <a href="/#/login" class="nav ">login</a>
    <a href="/#/register" class="nav">register</a>

    <!--<a href="/#/test">test</a>-->

    <br>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      data: {
        childData: '',
      },
      methods: {
      }
    }
  },
  components: {child: require('./components/login')}
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
  a {
    text-decoration: none;
  }
  .nav {
    color : #7f7f7f;
  }
  .nav:hover {
    color: #2b81af;
  }

</style>
