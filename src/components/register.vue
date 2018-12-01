<template>
  <div class=" textarea">
    <h1>新規登録</h1>
    <form action="http://13.113.3.4:3000/users" method="post">
      <p><label for="mail-field">メールアドレス</label><br>
        <input class="rad" type="email" name="addles" id="addles" v-model="addles" required/>
      </p>
      <p><label for="password-field">パスワード</label><br>
        <input class="rad" type="password" name="pwd" id="pwd" v-model="pwd" required/>
      </p>

      <p>{{this.pwd}}</p>
      <p>{{this.addles}}</p>

      <a v-on:click="sendUserData" class="hoge" href="/#/login">send</a>
      <!--<button v-on:click="sendUserData" class="hoge"></button>-->

    </form>


  </div>
</template>

<script>

  import axios from 'axios'
  export default {
    name: "register",
    data () {
      return {
        addles:"" ,
        pwd:""
      }
    },
    methods: {
      sendUserData : function () {
        axios.post('http://13.113.3.4:3000/users', {
          addles: this.addles,
          pwd: this.pwd
        })


      }
    }
  }
</script>

<style scoped>
  .textarea {
    padding: 10px;
    background-color: rgba(0,0,0,0.7);
    margin: 15px;
    border-radius: 20px;
    color: #eee;
    margin-top: 40%;
    padding-top: 10%;
    padding-bottom: 10%;
  }
  .button {
    color: #fff;
    background: #777;
    border-radius: 5px;

  }

  .rad {
    border-radius: 5px;
  }
  .hoge {
    background-color: #2e2e2e;
    width: 100px;
    height: 100px;
  }

</style>
