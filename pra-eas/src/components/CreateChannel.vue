<template>
    <div>
      <h2>Create Channel</h2>
      <!-- Form create channel -->
      <form @submit.prevent="createChannel">
        <label for="channelName">Channel Name:</label>
        <input type="text" id="channelName" v-model="channelName" required>
  
        <button type="submit">Create</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        channelName: '',
      };
    },
    methods: {
      createChannel() {
        // Implement your create channel logic here
        // You can access the channelName with this.channelName
        // For example, you can send a request to your backend API to create the specified channel
  
        // Dummy example (replace with your actual create channel logic):
        if (this.channelName.trim() !== '') {
          alert(`Channel created: ${this.channelName}`);
        } else {
          alert('Please enter a valid channel name');
        }
      }
    }
  };
  </script>
  