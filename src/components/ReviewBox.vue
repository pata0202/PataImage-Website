<template>
    <div class="pb-10">{{ props.review }}</div>
    <div class="flex items-center gap-4">
        <div class="bg-gray-600 rounded-full w-12 h-12 overflow-hidden"
             :class="[imageLoaded ? '' : 'bg-gray-300 animate-pulse']">
            <img :src="props.image" 
                 @load="imageLoaded = true"
                 @error="imageLoaded = true"
                 :class="['transition-opacity duration-300', imageLoaded ? 'opacity-100' : 'opacity-0']" />
        </div>
        <div class="flex flex-col justify-center items-start">
            <div class="pt-1 text-md">{{ props.name }}</div>
            <div class="pb-1 text-sm text-gray-500">{{ props.title }}</div>
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    review: {
        type: String,
        required: true
    }
})

const imageLoaded = ref(false)

// 當圖片 URL 改變時，重置載入狀態
watch(() => props.image, () => {
    imageLoaded.value = false
})
</script>