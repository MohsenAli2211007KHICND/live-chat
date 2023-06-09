<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Display Name" required v-model="displayName">
    <input type="email" placeholder="Email" required v-model="email">
    <input type="password" placeholder="Password" required v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
export default {
    
    setup (probs, context) {
        const { error, singup } = useSignup()
        // refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await singup(email.value, password.value, displayName.value)
            if (!error.value) {
              context.emit('signchat')
            }
        }

        return { displayName, email, password, handleSubmit, error}
    }
}
</script>

<style>

</style>