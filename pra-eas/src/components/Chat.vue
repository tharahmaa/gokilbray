<template>
    <div>
      <h2>Chat</h2>
  
      <!-- Display chat messages -->
      <div>
        <div v-for="(message, index) in chatMessages" :key="index">
          <strong>{{ message.sender }}:</strong> {{ message.text }}
        </div>
      </div>
  
      <!-- Form send chat message -->
      <form @submit.prevent="sendMessage">
        <label for="messageText">Your Message:</label>
        <input type="text" id="messageText" v-model="newMessage" required>
  
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        chatMessages: [],
        newMessage: '',
      };
    },
    methods: {
      sendMessage() {
        // Implement your chat logic here
        // You can access the newMessage with this.newMessage
        // For example, you can add the new message to the chatMessages array
  
        // Dummy example (replace with your actual chat logic):
        if (this.newMessage.trim() !== '') {
          this.chatMessages.push({
            sender: 'You',
            text: this.newMessage
          });
          this.newMessage = ''; // Clear the input field after sending the message
        }
      }
    }
  };
  </script>
  