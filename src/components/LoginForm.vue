<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="Email" required v-model="email">
    <input type="password" placeholder="Password" required v-model="password">
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'
export default {
    
    setup (probs, context) {
        // refs
        const email = ref('')
        const password = ref('')
        const {error, login} = useLogin()
        const handleSubmit = async () => {
            await login(email.value, password.value)
            if (!error.value) {
              context.emit('loginchat')
            }
        }

        return {email, password, handleSubmit, error}
    }
}
</script>

<style>

</style>