<script setup>
import { ref } from 'vue';
import { useChatStore } from '../stores/chat'

// chatの初期値を設定
const chat = ref({
  title: '',
  content: '',
});

const chatStore = useChatStore();

const submitChat = async() => {
  console.log(chat.value)
  try{
    await chatStore.addChat(chat.value)
    chat.value = {title: '', content: ''};
  }catch(error){
    console.log("チャットの保存に失敗しました。")
  }
}

</script>

<template>
  <form>
    <input type="text" placeholder="タイトル" v-model="chat.title">
    <input type="text" placeholder="つぶやき" v-model="chat.content">
    <button type="submit" @click.prevent="submitChat">送信</button>
  </form>
</template>

<style>
form {
  margin-bottom: 16px;
}

input {
  margin-right: 8px;
  padding: 4px;
}
</style>
