<script setup>
import Chat from './components/Chat.vue';
import ChatForm from './components/ChatForm.vue';
import { useChatStore } from './stores/chat';
import { ref, onMounted } from 'vue'

const chatStore = useChatStore();
const allChat = ref([]);

onMounted(async() => {
  await chatStore.fetchChat();
})
</script>

<template>
  <h1>Comment-App</h1>
  <div>
    <ChatForm />
  </div>
  <div v-for="chat in chatStore.chats" :key="chat.id">
    <Chat :chat="chat"/>
  </div>
</template>

<style>

</style>
