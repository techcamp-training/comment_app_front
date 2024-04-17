<script setup>
import { ref } from 'vue';
import ChatBody from './ChatBody.vue';

const showModal = ref(false);

</script>

<template>
  <div class="chat_card" @click="showModal = true">
    <h2 class="chat_title">タイトル</h2>
    <p class="chat_content">内容</p>
  </div>
  <Modal v-model="showModal">
    <ChatBody/>
  </Modal>
</template>

<style scoped>
.chat_card {
  border: 1px solid lightgray;
  padding: 8px;
  margin-bottom: 16px
}
.chat_title {
  margin: 8px 0;
}
.chat_content {
  margin: 0;
}
</style>
