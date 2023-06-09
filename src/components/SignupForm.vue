<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Display Name" required v-model="displayName">
    <input type="email" placeholder="Email" required v-model="email">
    <input type="password" placeholder="Password" required v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
    
    setup () {
        // refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
            console.log(displayName.value, email.value, password.value);
        }

        return { displayName, email, password, handleSubmit}
    }
}
</script>

<style>

</style>