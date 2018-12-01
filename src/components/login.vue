<template>
  <div class=" textarea">
    <h1>ログイン</h1>
    <form action="http://13.113.3.4:3000/login" method="post">
      <p><label for="mail-field">メールアドレス</label><br>
        <input class="rad" type="email" name="addles" id="addles" v-model="addles" required/>
      </p>
      <p><label for="password-field">パスワード</label><br>
        <input class="rad" type="password" name="pwd" id="pwd" v-model="pwd" required/>
      </p>

      <p>{{this.pwd}}</p>
      <p>{{this.addles}}</p>

      <a v-on:click="sendUserData" class="hoge" >send</a>
    </form>
  </div>

</template>

<script>

  import axios from 'axios'
  export default {
        name: "login",
    data () {
      return {
        addles:"" ,
        pwd:""
      }
    },
    methods: {
      sendUserData : function () {
        axios.post('http://13.113.3.4:3000/login', {
          addles: this.addles,
          pwd: this.pwd
        })
          .then((response)=>{
            console.log(response.data.id)
            window.location.href ='/#/mypage/'+ response.data.id
          })


      }
    }
    }
</script>

<style scoped>

  .login-for{
    margin-top: 100px;
  }

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


</style>
