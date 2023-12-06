<template>
    <div>
      <h2>Login</h2>
      <!-- Form login -->
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const res = await fetch('http://localhost:3000/api/chat/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password,
            }),
          });
  
          const json = await res.json();
  
          // Check the response or handle accordingly
          if (res.ok) {
            alert('Login successful!');
          } else {
            alert('Login failed. Please check your credentials.');
          }
        } catch (error) {
          console.error('Error during login:', error);
          alert('An error occurred during login. Please try again later.');
        }
      }
    }
  };
  </script>
  