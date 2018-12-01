<template>
    <div>this is my page

      <p>{{this.id}}</p>

    </div>
</template>

<script>
  var user_id
  setInterval(function(){user_id=location.href.match(/[^\/]*$/)[0]},1000)
//初期で取得する必要はなくて、post するときに取得すればいい
    export default {
        name: "mypage",
      data(){
          return {
            id : user_id
          }
      }
    }
</script>

<style scoped>

</style>
