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
      console.log('コメント保存ができませんでした')
    }
  }

  const fetchComment = async() => {
    try{
      const response = await apiClient.get('/comments');
      const allComments = response.data;
      comments.value = allComments;
    }catch(error){
      console.log('コメントの取得ができませんでした');
    }
  }

  const removeComment = async(comment) => {
    try{
      const response = await apiClient.delete(`/comments/${comment.id}`);
      const index = comments.value.findIndex(c => c.id === response.data.id);
      if(index !== -1){
        comments.value.splice(index, 1);
      }
    }catch(error){
      console.log("タスクの削除に失敗しました")
    }
  }
  return { comments, addComment, fetchComment,removeComment }
})
