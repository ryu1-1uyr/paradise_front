<template>
    <div>this is my page

      <p>{{this.id}}</p>

    </div>
</template>

<script>
  const user_id=location.href.match(/[^\/]*$/)[0]
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
