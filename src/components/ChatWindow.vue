<template>
  <div class="chat-window">
    <div v-if="error" class="error">{{ error }}</div>
    <div class="message" v-if="documents" ref="messages">
        <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
            <span class="created-At">{{ doc.createdAt }}</span>
            <span class="name">{{ doc.name }}</span>
            <span class="message">{{ doc.message }}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { computed, onUpdated, ref } from 'vue'
import getCollection from '../composables/getCollection'
import {formatDistanceToNow} from 'date-fns'
export default{
    setup ()  {
        const {error, documents} = getCollection('Messages')

        const formattedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map((doc) => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return {...doc, createdAt: time}
                })
            }
        })

        // scrole Auto

        const messages = ref('')
        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight
        })
        return { error, documents, formattedDocuments, messages }
    }
}
</script>

<style>
    .chat-window {
        background: #fafafa;
        padding: 30px 20px;
    }
    .single {
        margin: 18px 0;
    }
    .created-At {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
    }
    .name {
        font-weight: bold;
        margin-right: 6px;
    }
    .message {
        max-height: 400px;
        overflow: auto;
    }
</style>