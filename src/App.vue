<template>
  <main>
    <!-- <section id="top" class="h-20"></section> -->
    <section id="index" class="py-20 flex flex-col justify-start items-center px-section md:px-sectionlg">
      <div class="text-7xl mb-10 font-medium">Title-Text</div>
      <div class="text-xl text-gray-500 text-center"><span>
          Sitting in the sun,away from everyone who had done him harm in the past
        </span></div>
      <div class="mt-10 bg-gray-100 h-70 w-full">Video</div>
    </section>

    <section id="about" class="區塊 px-section md:px-sectionlg bg-white">
      <div class="mb-3 段落標題">關於我</div>
      <div id="about_content">
        <div class="text-md mb-5 text-gray-500">
          <p class="pb-1">嗨，我是Pata。</p>
          <p class="pb-1">我透過錄影與拍照，凝結每個動人瞬間，捕捉屬於現場的溫度與故事。</p>
          <p class="pb-1">不論是一場演出、一個儀式，或一段人與人之間的交流，我相信影像可以讓時間暫停，讓回憶延續。</p>
        </div>
        <div class="bg-red-100 h-70 w-full">關於我</div>
      </div>
    </section>


    <section id="works" class="區塊">
      <div class="px-section md:px-sectionlg mb-3 段落標題">近期作品</div>
      <div class="px-section md:px-sectionlg text-xl mb-5">
        <a class="transition duration-150 ease-in-out flex items-center gap-1 w-50 hover:border-b-amber-500 border-b-4 border-transparent"
          href="https://google.com" target="_blank">
          <span>
            看更多
          </span>
          <span class="material-symbols-outlined">
            arrow_right_alt
          </span>
        </a>
      </div>
      <div id="works_content">
        <div class="overflow-x-scroll">
          <div class="grid grid-rows-1 md:grid-rows-2 auto-rows-max grid-flow-col gap-5 w-max">
            <div class="bg-gray-200 h-[300px] w-[400px]" :class="[data.loaded ? '' : 'animate-pulse']"
              v-for="data in works" :key="data.seq">
              <img class="bg-gray-200 h-[300px] w-[400px]"
                :class="['transition-opacity duration-700', data.loaded ? 'opacity-100' : 'opacity-0']"
                :src="data.image" @load="works[data.seq].loaded = true" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section id="services" class="區塊 px-section bg-white">
      <div class="mb-3 段落標題">How Service Works</div>
      <div id="services_content">
        <div class="text-lg mb-10 text-gray-500">those who roamed by. He felt at peace in the moment, hoping it would
          last, but
          knowing the reprieve would soon come to an end. He closed his eyes,</div>
        <div class="bg-red-100 h-70 w-full">架構圖</div>
      </div>
    </section> -->
    <section id="feedback" class="區塊">
      <div class="px-section md:px-sectionlg mb-3 段落標題">大家都說讚</div>
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
      <div id="feedback_content">
        <div class="flex flex-col bg-white pl-20 xl:pl-80 pr-20 pt-15 pb-20 md:text-2xl">
          <review-box :name="currentReview.name" :title="currentReview.title" :review="currentReview.review"
            :image="currentReview.image"></review-box>
        </div>
      </div>
    </section>
    <section id="contact" class="bg-white pb-20 px-section md:px-sectionlg">
      <div class="段落標題">一起聊聊吧！</div>
      <div class="text-md mt-3 text-gray-500 mb-15">
        <p>有任何合作的想法，歡迎隨時聯絡我</p>
        <p>單純想交個朋友也非常歡迎。</p>
      </div>
      <div id="contact_content">
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
          <div class="grow h-1 bg-gray-200 ml-10"></div>
          <div class="text-xl">或是填寫需求表單</div>
          <div class="grow h-1 bg-gray-200 mr-10"></div>
        </div>
        <div class="flex justify-center">
          <a class="社群按鈕 text-white mouse-pointer rounded-full bg-amber-500 w-70 h-15 flex text-2xl font-bold justify-center items-center"
            href="https://pataimage.notion.site/2327d8c9060180cda86ae583d48666a6?pvs=105" target="_blank">
            前往填寫
          </a>
        </div>
      </div>
    </section>
    <section id="footer" class="bg-gray-100 pb-20">
      <div class="h-10 mb-10 bg-white 底部圓角"></div>
      <div class="text-center text-gray-500">
        <p>© 2025 Pata Image</p>
        <p class="text-sm">網站開發：我自己寫的</p>
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import ReviewBox from './components/ReviewBox.vue'
import * as types from './types'
import * as tools from './tools'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const animationDuration = 0.5;
  const sectionsDelay = 0.3;

  createGsapFrom('index', 'index');
  createGsapFrom('about_content', 'about');
  createGsapFrom('works_content', 'index');
  createGsapFrom('feedback_content', 'feedback');
  createGsapFrom('contact_content', 'contact', '90%');


});

function createGsapFrom(elementId, trigger, triggerPosition = '65%') {
  gsap.from(`#${elementId}`, {
    duration: 0.5,
    y: -50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: `#${trigger}`,
      start: `top ${triggerPosition}`,
      once: true
    }
  });
}

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

const works = ref([
  {
    seq: 0,
    title: '作品名稱',
    image: 'https://picsum.photos/id/1015/400/300',
    loaded: false,
  }, {
    seq: 1,
    title: '作品名稱2',
    image: 'https://picsum.photos/id/1016/400/300',
    loaded: false,
  },
  {
    seq: 2,
    title: '作品名稱3',
    image: 'https://picsum.photos/id/1018/400/300',
    loaded: false,
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


.段落標題 {
  @apply text-3xl md:text-4xl md:pb-3 md:pt-5 font-medium;
}

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