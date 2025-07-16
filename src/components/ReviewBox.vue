<template>
    <div class="pb-10">{{ props.review }}</div>
    <div class="flex items-center gap-4">
        <div class="bg-gray-600 rounded-full w-9 h-9"><img :src="props.image" /></div>
        <div class="flex flex-col justify-center items-start">
            <div class="pt-1 text-md">{{ props.name }}</div>
            <div class="pb-1 text-sm text-gray-500">{{ props.title }}</div>
        </div>
    </div>
</template>
<script setup>
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
</script>