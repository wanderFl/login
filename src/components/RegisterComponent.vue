<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <label for="username">Username</label>
        <input type="text" v-model="username" required />
        
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
        
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name:'RegisterComponent',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      register() {
        // For now, we will mock registration. Save to localStorage for simplicity
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ username: this.username, password: this.password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('User registered');
        this.$router.push('/login');
      },
    },
  };
  </script>
  