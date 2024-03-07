<script setup>
const props = defineProps({
  chat:Object
})

</script>

<template>
  <div class="chat_card">
    <h2 class="chat_title">{{ props.chat.title }}</h2>
    <p class="chat_content">{{ props.chat.content }}</p>
  </div>
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
