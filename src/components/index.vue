<template >

<div class="background">

  <h1 class="textarea">this is へるすけあ</h1>
  <p class="textarea">ようこそ！</p>

</div>


</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  .background {
    width: 100%;
    height: 50em;
    padding-top: calc(300 / 1000 * 100%); /* calc(画像高さ ÷ 画像横幅 × 100%) */
    background: url('../assets/bg.png') center center / cover no-repeat;
  }
  .textarea {
    padding: 10px;
    background-color: rgba(0,0,0,0.7);
    margin: 15px;
    border-radius: 20px;
    color: #eee;
  }
</style>
