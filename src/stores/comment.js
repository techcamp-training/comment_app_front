import { ref } from 'vue'
import { defineStore } from 'pinia'
import apiClient from '../api/axios.js'; 

export const useCommentStore = defineStore('comment', () => {
  const comments = ref([])

  const addComment = async(comment) => {
    try{
      const response = await apiClient.post('/comment', comment);
      const addedComment = response.data;
      comments.value.push(addedComment);
    }catch(error){
      console.log('つぶやき保存ができませんでした')
    }
  }

  const fetchComment = async() => {
    try{
      const response = await apiClient.get('/comments');
      const allComments = response.data;
      comments.value = allComments;
    }catch(error){
      console.log('つぶやきの取得ができませんでした');
    }
  }
  return { comments, addComment, fetchComment }
})
