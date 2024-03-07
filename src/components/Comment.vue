<script setup>
import { useCommentStore } from '@/stores/comment';
const props = defineProps({
  comment: Object
})

const commentStore = useCommentStore();

const deleteComment = async(commentId) => {
  try{
    await commentStore.removeComment(commentId);
  }catch(error){
    console.log("コメントの削除に失敗しました")
  }
}
</script>

<template>
  <div class="comment_wrapper">
    <p class="comment_content">{{ comment.content }}</p>
    <button class="btn" @click="deleteComment(comment)">削除</button>
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
