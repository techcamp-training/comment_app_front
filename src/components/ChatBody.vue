<script setup>
import { ref, onMounted } from 'vue';
import { useCommentStore } from '../stores/comment.js';
import Comment from './Comment.vue';

const props = defineProps({
  chat:Object
})

const comment = ref({
  content: '',
  chatId: ''
})

const commentStore = useCommentStore();

const submitComment = async(chatId) => {
  comment.value.chatId = chatId
  try{
    await commentStore.addComment(comment.value);
    comment.value = {content: '', chatId: ''}
  }catch(error){
    console.log('コメントの保存に失敗しました');
  }
}

onMounted(async()=> {
  await commentStore.fetchComment();
})

const filterComment = (chatId) => {
  //全コメントデータの中からchatIdが合致するものだけを取得する
  return commentStore.comments.filter(comment => comment.chatId == chatId)
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
      <button @click.prevent="submitComment(props.chat.id)">送信</button>
    </div>
  </form>
  <h2>コメント一覧</h2>
  <div v-for="comment in filterComment(props.chat.id)" :key="comment.id">
    <Comment :comment="comment"/>
  </div>
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
