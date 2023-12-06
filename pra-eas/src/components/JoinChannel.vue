<template>
    <div>
      <h2>Join Channel</h2>
      <!-- Form join channel -->
      <form @submit.prevent="joinChannel">
        <label for="channelName">Channel Name:</label>
        <input type="text" id="channelName" v-model="channelName" required>
  
        <button type="submit">Join</button>
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
      joinChannel() {
        // Implement your join channel logic here
        // You can access the channelName with this.channelName
        // For example, you can send a request to your backend API to join the specified channel
  
        // Dummy example (replace with your actual join channel logic):
        if (this.channelName.trim() !== '') {
          alert(`Joined channel: ${this.channelName}`);
        } else {
          alert('Please enter a valid channel name');
        }
      }
    }
  };
  </script>
  