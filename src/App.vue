<template>
  <main>
    <section id="top" class="h-30"></section>
    <section id="index" class="bg-white flex flex-col justify-start h-180 px-10 py-10 items-center">
      <div class="text-7xl mb-10">Title-Text</div>
      <div class="text-xl text-gray-500">Sitting in the sun,</div>
      <div class="text-xl text-gray-500">away from everyone who had done him harm in the past</div>
      <div class="mt-10 bg-gray-100 h-70 w-full">Video</div>
    </section>
    <section id="works" class="py-10">
      <div class="px-10 text-4xl mb-3 font-medium">Works Title</div>
      <div class="px-10 text-xl mb-10">All Works -></div>
      <div class="bg-red-100 h-70 w-full">輪播</div>
    </section>
    <section id="services" class="px-10 bg-white py-10">
      <div class="text-4xl mb-3 font-medium">How Service Works</div>
      <div class="text-lg mb-10 text-gray-500">those who roamed by. He felt at peace in the moment, hoping it would
        last, but
        knowing the reprieve would soon come to an end. He closed his eyes,</div>
      <div class="bg-red-100 h-70 w-full">架構圖</div>
    </section>
    <section id="feedback" class="py-10">
      <div class="px-10 text-4xl mb-3 font-medium">屢獲肯定</div>
      <div class="flex justify-end pr-10">
        <div class="flex items-center gap-4">
          <span class="material-symbols-outlined" @click="readReview(types.ReviewAction.previous)">
            arrow_left_alt
          </span>
          <span class="text-md">{{ currentReview.seq }} / {{ reviews.length }}</span>
          <span class="material-symbols-outlined" @click="readReview(types.ReviewAction.next)">
            arrow_right_alt
          </span>
        </div>
      </div>
      <div class="flex flex-col bg-white px-20 py-20">
        <review-box :name="currentReview.name" :title="currentReview.title" :review="currentReview.review"
          :image="currentReview.image"></review-box>
      </div>
    </section>
    <section id="contact" class="py-10 bg-white pb-20">
      <div class="px-10 text-4xl mb-3 font-medium">立即展開聯絡！</div>
      <div class="flex justify-center mt-20 mb-10">
        <div
          class="mouse-pointer rounded-full bg-amber-500 w-70 h-15 flex text-2xl font-bold justify-center items-center">
          GOGO</div>
      </div>
    </section>
    <section id="footer" class="bg-gray-100 pb-20">
      <div class="h-10 mb-10 bg-white 底部圓角"></div>
      <div class="text-center text-gray-500">© 2025 Pata Image.</div>
    </section>
  </main>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import ReviewBox from './components/ReviewBox.vue'
import * as types from './types'
import * as tools from './tools'

const reviews = ref([
  {
    seq: 1,
    name: '名字字',
    title: '職稱職稱職稱',
    review: 'those who roamed by. He felt at peace in the moment, hoping it would last, but',
    image: 'https://via.placeholder.com/150'
  }, {
    seq: 2,
    name: '名字字2',
    title: '職稱職稱職稱2',
    review: 'those who roamed by. He felt at peace in the moment, hoping it would last, but',
    image: 'https://via.placeholder.com/150'
  },
  {
    seq: 3,
    name: '名字字3',
    title: '職稱職稱職稱3',
    review: 'those who roamed by. He felt at peace in the moment, hoping it would last, but',
    image: 'https://via.placeholder.com/150'
  }
])



const currentReview = ref(tools.deepClone(reviews.value[0]));


function readReview(action) {
  if (action === types.ReviewAction.previous) {
    // 第一個往前，到最後一個
    if (currentReview.value.seq === 1) {
      currentReview.value = reviews.value[reviews.value.length - 1];
    }
    else {
      currentReview.value = reviews.value[currentReview.value.seq - 2];
    }
  }

  if (action === types.ReviewAction.next) {
    // 最後一個往後，到第一個
    if (currentReview.value.seq === reviews.value.length) {
      currentReview.value = reviews.value[0];
    }
    else {
      currentReview.value = reviews.value[currentReview.value.seq];
    }
  }
}

</script>

<style scoped>
.底部圓角 {
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
}
</style>