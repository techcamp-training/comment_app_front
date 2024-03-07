import { ref } from 'vue'
import { defineStore } from 'pinia'
import apiClient from '../api/axios.js'; 

export const useChatStore = defineStore('chat', () => {
  const chats = ref([])

  const addChat = async(chat) => {
    try{
      const response = await apiClient.post('/chat', chat);
      const addedChat = response.data;
      chats.value.push(addedChat);
    }catch(error){
      console.log('つぶやき保存ができませんでした')
    }
  }

  const fetchChat = async() => {
    try{
      const response = await apiClient.get('/chats');
      const allChat = response.data;
      chats.value = allChat;
    }catch(error){
      console.log('つぶやきの取得ができませんでした');
    }
  }
  return { chats, addChat, fetchChat }
})
