<template>
  <main>
    <section id="index" class="pt-20 flex flex-col justify-start items-center px-section md:px-sectionlg h-auto">
      <div class="text-6xl lg:text-8xl mb-10 font-medium text-center md:flex gap-5">
        <div class="pb-3 md:pb-0">Pata&nbsp;Image</div>
        <div>拍打影像</div>
      </div>
      <div class="text-xl md:text-2xl text-gray-500 text-center"><span>
          致力於打造獨一無二，<br class="md:hidden" />令人<span
            class="font-bold bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">心馳神往</span>的影像體驗
        </span></div>
      <div class="mt-10 h-45 w-80 md:h-full md:w-full rounded-2xl md:rounded-4xl overflow-hidden shadow-md"
        :class="[videoLoaded ? '' : 'bg-gray-200']">
        <video class="w-full h-full" autoplay loop muted playsinline @loadeddata="videoLoaded = true"
          :class="['transition-opacity duration-300', videoLoaded ? 'opacity-100' : 'opacity-0']">
          <source :src="videoPath" type="video/webm" />
          瀏覽器不支援影片播放
        </video>
      </div>
    </section>

    <section id="about" class="區塊 px-section md:px-sectionlg bg-white h-auto">
      <div class="mb-3 段落標題">關於我</div>
      <div id="about_content" class="">
        <div class="flex md:justify-end md:pr-50">
          <div class="text-md mb-10 text-gray-500 md:pl-1">
            <p class="pb-5">嗨，我是&nbsp;Pata。</p>
            <p class="pb-5">我透過錄影與拍照，凝結每個動人瞬間，<br class="md:hidden" />捕捉屬於現場的溫度與故事。</p>
            <p class="">不論是一場演出、一個儀式，<br class="md:hidden" />或一段人與人之間的交流，<br class="md:hidden" />我相信影像可以讓時間暫停，讓回憶延續。</p>
          </div>
        </div>
        <div class="h-max w-full flex justify-evenly items-center gap-10 md:pt-10">
          <div class="">
            <img class="max-h-100 關於我圖片" :src="pataImage" alt="關於我圖片">
          </div>
          <div class="">
            <img class="max-h-100 關於我圖片" :src="pataImage2" alt="關於我圖片">
          </div>
        </div>
      </div>
    </section>


    <section id="works" class="區塊">
      <div class="px-section md:px-sectionlg mb-3 段落標題">作品錦集</div>
      <div class="px-section md:px-sectionlg text-xl mb-5 ">
        <div class="flex gap-10">
          <a class="transition duration-150 ease-in-out flex items-center gap-1 w-auto hover:border-b-amber-500 border-b-4 border-transparent"
            href="https://instagram.com/pata.image" target="_blank">
            <span>
              更多照片
            </span>
            <span class="material-symbols-outlined">
              arrow_right_alt
            </span>
          </a>
          <a class="transition duration-150 ease-in-out flex items-center gap-1 w-auto hover:border-b-amber-500 border-b-4 border-transparent"
            href="https://www.youtube.com/@pataimage" target="_blank">
            <span>
              更多影片
            </span>
            <span class="material-symbols-outlined">
              arrow_right_alt
            </span>
          </a>
        </div>
      </div>
      <div id="works_content">
        <div class="overflow-x-scroll md:flex md:justify-center">
          <div class="grid grid-rows-1 md:grid-rows-2 auto-rows-max grid-flow-col gap-5 md:gap-x-8 w-max">
            <div class="flex justify-center items-center h-[200px] w-[300px] md:h-80 md:w-auto"
              :class="[data.loaded ? '' : 'bg-gray-200 animate-pulse']" v-for="data in works" :key="data.seq">
              <img class="bg-white h-[200px] w-[300px] md:h-80 md:w-auto object-contain p-5"
                :class="['transition-opacity duration-700', data.loaded ? 'opacity-100' : 'opacity-0']"
                :src="data.image" @load="works[data.seq].loaded = true" />
            </div>
          </div>
        </div>
      </div>
    </section>
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
        <div class="h-80 flex flex-col bg-white pl-20 xl:pl-80 pr-20 xl:pr-80 pt-10 pb-20 md:text-2xl">
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
  createGsapFrom('about_content', 'index');
  createGsapFrom('works_content', 'works');
  createGsapFrom('feedback_content', 'feedback');
  createGsapFrom('contact_content', 'contact', '90%');


});

const videoLoaded = ref(false);

function createGsapFrom(elementId, trigger, triggerPosition = '65%') {
  gsap.from(`#${elementId}`, {
    duration: 0.5,
    y: 30,
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
    name: '詹喆麟',
    title: '創意公司 赤狐 創辦人',
    review: 'Pata 始終以他的細心、大方和博愛、客觀與理性，為我們提供著優秀品質、高度水準的作品與令人驚艷的影像創作。沛辰積極向上的精神為團隊帶來了顯著的激勵與正向影響；他的卓越技術更為每項經手的專案賦予令人驚艷的成果。',
    image: 'https://chelinchan.com/assets/profile-DnhaKpBs.jpg'
  }, {
    seq: 2,
    name: '少年大叔',
    title: '',
    review: '可靠與用心的動態夥伴，畫面中情緒的掌握、光線與構圖的細膩，將品牌透過作品的疊加，展現出品牌的價值。',
    image: new URL('./assets/reviews/alex.webp', import.meta.url).href
  },
  {
    seq: 3,
    name: '學影 ShareIn Taiwan',
    title: ' ',
    review: '擅長運用鏡頭特性並結合構圖與光線，將作品層次提升至卓越境界。',
    image: new URL('./assets/reviews/sharein.webp', import.meta.url).href
  }
])


const pataImage = new URL('./assets/pata.webp', import.meta.url).href;
const pataImage2 = new URL('./assets/pata2.webp', import.meta.url).href
const videoPath = "https://assets.pataimage.com/hero_vid.webm";

const works = ref([
  {
    seq: 0,
    title: '作品名稱',
    image: new URL('./assets/works/karcher.webp', import.meta.url).href,
    loaded: false,
  },
  {
    seq: 1,
    title: '作品名稱3',
    image: new URL('./assets/works/wedding1.webp', import.meta.url).href,
    loaded: false,
  },
  {
    seq: 2,
    title: '作品名稱4',
    image: new URL('./assets/works/nutrition.webp', import.meta.url).href,
    loaded: false,
  },
  {
    seq: 3,
    title: '作品名稱5',
    image: new URL('./assets/works/active1.webp', import.meta.url).href,
    loaded: false,
  },
  {
    seq: 4,
    title: '作品名稱6',
    image: new URL('./assets/works/active2.webp', import.meta.url).href,
    loaded: false,
  },
  {
    seq: 5,
    title: '作品名稱7',
    image: new URL('./assets/works/portrait.webp', import.meta.url).href,
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
  @apply text-3xl md:text-7xl md:pb-3 md:pt-5 font-medium;
}

.底部圓角 {
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
}

.區塊 {
  @apply py-15 md:pt-20;
}

.社群按鈕 {
  @apply hover:shadow-xl ease-in-out duration-150 border-solid hover:border-3 border-amber-500;
}

.關於我圖片 {
  @apply object-contain shadow-[10px_10px_0px_0px] shadow-amber-500 hover:shadow-amber-300 duration-150 hover:-translate-y-3 hover:-translate-x-3;
}
</style>