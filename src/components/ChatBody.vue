<script setup>
import { ref } from 'vue';
import { useCommentStore } from '../stores/comment.js';

const props = defineProps({
  chat:Object
})

const comment = ref({
  content: '',
  chatId: ''
})

const commentStore = useCommentStore();

const submitComment = async() => {
  try{
    await commentStore.addComment(comment.value);
    comment.value = {content: '', chatId: ''}
  }catch(error){
    console.log('コメントの保存に失敗しました');
  }
}

</script>

<template>
  <div class="chat_title">
    <h3>タイトル</h3>
    <p>{{ props.chat.title }}</p>
  </div>

  <div class="chat_content">
    <h3>内容</h3>
    <p>{{ props.chat.content }}</p>
  </div>

  <form>
    <label for="comment">コメント</label>
    <textarea v-model="comment.content" id="comment" placeholder="コメントを入力してください"></textarea>
    <div class="button-container">
      <button @click="submitComment">送信</button>
    </div>
  </form>
</template>

<style scoped>
textarea {
  width: 100%;
}

.chat_title,
.chat_content {
  margin-bottom: 16px;
}

h3{
  margin: 0;
}

p {
  margin: 8px 0;
}

.button-container {
  text-align: right;
}
</style>
