<template>
  <form>
    <textarea 
    @keypress.enter.prevent="handleSubmit" 
    placeholder="Type a message..." 
    v-model="message">
    </textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import useCollection from '@/composables/useCollection'
export default {
    setup () {
        const message = ref('')
        const {user} = getUser()
        const {error, addDoc} = useCollection('Messages')

        const handleSubmit = async () => {
            const chat = {
                message: message.value,
                name: user.value.displayName,
                createdAt: timestamp()
            }
            await addDoc(chat)
            if (!error.value) {
                message.value = ''
            }
           
        }
        return { message,handleSubmit, error }
    }
}
</script>

<style scoped>
 textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
 }
</style>