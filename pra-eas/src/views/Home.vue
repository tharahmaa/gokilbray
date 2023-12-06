<template>
  <div class="home-container">
    <div v-if="!$store.state.user">
      <Login />
      <p>Please log in to access the chat features</p>
    </div>
    <div v-else>
      <div class="user-actions">
        <CreateChannel v-if="$store.state.user" />
        <JoinChannel v-if="$store.state.user" />
        <button @click="logout">Logout</button>
      </div>
      <div v-if="$store.state.user && !$store.state.currentChannel">
        <p>No channel selected. Choose or create a channel to start chatting.</p>
      </div>
      <Chat v-if="$store.state.user && $store.state.currentChannel" />
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import CreateChannel from '@/components/CreateChannel.vue';
import JoinChannel from '@/components/JoinChannel.vue';
import Chat from '@/components/Chat.vue';

export default {
  components: {
    Login,
    CreateChannel,
    JoinChannel,
    Chat,
  },
  methods: {
    logout() {
      this.$store.commit('clearState');
    },
  },
};
</script>

<style scoped>
.home-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.user-actions {
  margin-bottom: 20px;
}

button {
  margin-left: 10px;
}
</style>
