<template>
    <div>
      <h2>Welcome to the Dashboard</h2>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    name:'DashboardComponent',

    created() {
      const auth = localStorage.getItem('auth');
      if (!auth) {
        this.$router.push('/login');
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('auth');
        this.$router.push('/login');
      },
    },
  };
  </script>
  