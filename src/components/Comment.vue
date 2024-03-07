<script setup>
const props = defineProps({
  comment: Object
})


</script>

<template>
  <div class="comment_wrapper">
    <p class="comment_content">{{ comment.content }}</p>
    <button class="btn">削除</button>
  </div>
</template>

<style scoped>
.comment_wrapper{
  display: flex;
  margin-bottom: 8px;
}

.comment_content {
  margin: 8px 0;
  width: 100%;
}

.btn {
  width: 80px;
  margin-left: 8px;
}
</style>
