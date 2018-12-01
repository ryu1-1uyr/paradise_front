<template>
  <div>
    <p>test</p>
    <p>{{hoge}}</p>
    <p>{{huga}}</p>
    <button v-on:click="this.getSumple" class="hoge"></button>
    <button v-on:click="this.getSumple2" class="hoge"></button>
  </div>

</template>

<script>

  import axios from 'axios'


    export default {
        name: "test",
      data () {
          return {
            hoge:"",
            huga:"hogehoge"
        }
      },
      methods : {
        getSumple : function () {
          axios.get('http://13.113.3.4:3000/users')
            .then((res)=>{ this.huga = res['data'][0]})

          },
        getSumple2 : function () {
          axios.get('http://13.113.3.4:3000/users')
            .then((res)=>{ this.huga = res['data'][0]})

        },
      }

    }
</script>

<style scoped>
  .hoge {
    background-color: #2e2e2e;
    width: 100px;
    height: 100px;
  }

</style>
