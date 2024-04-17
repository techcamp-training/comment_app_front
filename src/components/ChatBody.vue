<script setup>
import Comment from './Comment.vue';
</script>

<template>
  <div class="chat_title">
    <h3>タイトル</h3>
    <p></p>
  </div>

  <div class="chat_content">
    <h3>内容</h3>
    <p></p>
  </div>

  <form>
    <label for="comment">コメント</label>
    <textarea id="comment" placeholder="コメントを入力してください"></textarea>
    <div class="button-container">
      <button>送信</button>
    </div>
  </form>
  <h2>コメント一覧</h2>
  <div>
    <Comment/>
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
