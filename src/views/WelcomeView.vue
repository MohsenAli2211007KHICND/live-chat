<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
        <h1>Login</h1>
        <LoginForm @loginchat="showChatRoom"/>
        <p>No account yet? <span @click="showLogin = false">SignUp</span> instead</p>
    </div>
    <div v-else>
        <h1>SignUp</h1>
    <SignupForm @signchat="showChatRoom" />
    <p>Already registered? <span @click="showLogin = true">Login</span> instead</p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: { SignupForm, LoginForm },
  setup () {
    const showLogin = ref(true)
    const router = useRouter()
    const showChatRoom = () =>{
        router.push({name: 'ChatRoom'})
    }

    return { showLogin, showChatRoom }
  }
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
    width: 300px;
    margin: 20px auto;
}
.welcome label {
    display: block;
    margin: 20px 0 10px;
}
.welcome input{
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}
.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
.welcome button {
    margin: 20px auto;
}
</style>