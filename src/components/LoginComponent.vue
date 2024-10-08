<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username</label>
        <input type="text" v-model="username" required />
        
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
        
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name:'LoginComponent',
    data() {
      return {
        username: ' ',
        password: ' ',
      };
    },
    methods: {
      login() {
        if (this.username === 'user' && this.password === 'password') {
          localStorage.setItem('auth', 'true');
          this.$router.push('/dashboard');
        } else {
          alert('Invalid login credentials');
        }
      },
    },
  };
  </script>
  