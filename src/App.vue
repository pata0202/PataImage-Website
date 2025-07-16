<template>
  <main>
    <section id="top" class="區塊 h-10"></section>
    <section id="index" class="pb-15 bg-white flex flex-col justify-start px-10 items-center">
      <div class="animate-fadeUp text-7xl mb-10 font-medium ">Title-Text</div>
      <div class="animate-fadeUp text-xl text-gray-500 text-center" style="animation-delay: 50ms;"><span>
          Sitting in the sun,away from everyone who had done him harm in the past
        </span></div>
      <div class="mt-10 bg-gray-100 h-70 w-full">Video</div>
    </section>
    <section id="works" class="區塊">
      <div class="px-10 text-4xl mb-3 font-medium">看看我的創作</div>
      <div class="px-10 text-xl mb-10">
        <a class="transition duration-150 ease-in-out flex items-center gap-1 w-35 hover:border-b-amber-500 border-b-4 border-transparent" href="https://google.com" target="_blank">
          <span>
            作品列表
          </span>
          <span class="material-symbols-outlined">
            arrow_right_alt
          </span>
        </a>
      </div>
      <div class="bg-red-100 h-70 w-full">輪播</div>
    </section>
    <section id="services" class="區塊 px-10 bg-white">
      <div class="text-4xl mb-3 font-medium">How Service Works</div>
      <div class="text-lg mb-10 text-gray-500">those who roamed by. He felt at peace in the moment, hoping it would
        last, but
        knowing the reprieve would soon come to an end. He closed his eyes,</div>
      <div class="bg-red-100 h-70 w-full">架構圖</div>
    </section>
    <section id="feedback" class="區塊">
      <div class="px-10 text-4xl mb-3 font-medium">屢獲肯定</div>
      <div class="flex justify-end pr-15 pt-10">
        <div class="flex items-center gap-4">
          <span class="material-symbols-outlined cursor-pointer" @click="readReview(types.ReviewAction.previous)">
            arrow_left_alt
          </span>
          <span class="text-md">{{ currentReview.seq }} / {{ reviews.length }}</span>
          <span class="material-symbols-outlined cursor-pointer" @click="readReview(types.ReviewAction.next)">
            arrow_right_alt
          </span>
        </div>
      </div>
      <div class="flex flex-col bg-white pl-20 pr-20 pt-15 pb-20">
        <review-box :name="currentReview.name" :title="currentReview.title" :review="currentReview.review"
          :image="currentReview.image"></review-box>
      </div>
    </section>
    <section id="contact" class="bg-white pb-20 px-10">
      <div class="text-4xl mb-15 font-medium">立即展開聯絡！</div>

      <div class="flex gap-10 justify-center items-center">
        <a class="社群按鈕 h-20 w-20 bg-gray-100 rounded-full flex justify-center items-center"
          href="https://www.instagram.com/pata.image/" target="_blank">
          <img src="./assets/ig.svg" class="w-10 h-10" />
        </a>
        <a class="社群按鈕 h-20 w-20 bg-gray-100 rounded-full flex justify-center items-center"
          href="mailto:pata@pataimage.com">
          <img src="./assets/mail.svg" class="w-10 h-10" />
        </a>
      </div>

      <div class="w-full flex justify-center items-center pt-20 pb-10 gap-5">
        <div class="w-20 h-1 bg-gray-200"></div>
        <div class="text-xl">或是填寫需求表單</div>
        <div class="w-20 h-1 bg-gray-200"></div>
      </div>
      <div class="flex justify-center">
        <a class="社群按鈕 text-white mouse-pointer rounded-full bg-amber-500 w-70 h-15 flex text-2xl font-bold justify-center items-center"
          href="https://pataimage.notion.site/2327d8c9060180cda86ae583d48666a6?pvs=105" target="_blank">
          前往填寫
        </a>
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
@import './style.css';

.底部圓角 {
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
}

.區塊 {
  @apply py-15;
}

.社群按鈕 {
  @apply hover:shadow-xl ease-in-out duration-150 border-solid hover:border-3 border-amber-500;
}
</style>