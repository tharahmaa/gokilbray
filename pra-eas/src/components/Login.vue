<template>
    <div>
      <h2>Login</h2>
      <!-- Form login -->
      <form v-on:submit.prevent="login">
        <label for="email">email:</label>
        <input type="text" id="email" v-model="email" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  // const email = ref("");
  // const password = ref ("");


  export default {
    data() {
      return {
        email: ref(""),
        password: ref("")
      };
    },
    methods: {
      async login() {
        try {
          const res = await fetch('http://localhost:3000/api/users/login', {
            credentials: "include",
            method: 'POST',

            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
            }),
          });
  
          const json = await res.json();
          console.log (json)
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
  