<template>
  <div class="h-full w-full absolute bg-gray-100 text-3xl pt-20 pl-10 pr-10 選單" :class="{ '顯示': menu, '隱藏': !menu }">
    <div class="flex justify-end">
      <button @click.stop="toggleMenu()"
        class="cursor-pointer text-2xl font-bold text-gray-800 hover:text-gray-600">X</button>
    </div>
    <div class="flex flex-col justify-center ">
      <a @click="toggleMenu()" style="animation-delay: 1s" href="#index" class="按鈕 選單文字"
        :class="[isActive('index') ? '按鈕啟用' : '', menu ? '文字顯示' : '文字隱藏']">首頁</a>
      <a @click="toggleMenu()" style="animation-delay: 2s" href="#about" to="#about" class="按鈕 選單文字"
        :class="[isActive('about') ? '按鈕啟用' : '', menu ? '文字顯示' : '文字隱藏']">關於</a>
      <a @click="toggleMenu()" style="animation-delay: 3s" href="#services" class="按鈕 選單文字"
        :class="[isActive('services') ? '按鈕啟用' : '', menu ? '文字顯示' : '文字隱藏']">服務</a>
      <a @click="toggleMenu()" style="animation-delay: 4s" href="#works" class="按鈕 選單文字"
        :class="[isActive('works') ? '按鈕啟用' : '', menu ? '文字顯示' : '文字隱藏']">作品</a>
    </div>
  </div>
  <main v-if="!menu" :class="{ '顯示': !menu, '隱藏': menu }">
    <nav class="flex h-20 w-full sticky top-0 left-0 z-50 bg-white justify-start items-center">
      <!-- 電腦版 -->
      <div class="hidden md:flex justify-center items-center ml-30">
        <div class="flex justify-center gap-2">
          <a href="#index" class="按鈕" :class="isActive('index') ? '按鈕啟用' : ''">首頁</a>
          <a href="#about" to="#about" class="按鈕" :class="isActive('about') ? '按鈕啟用' : ''">關於</a>
          <a href="#services" class="按鈕" :class="isActive('services') ? '按鈕啟用' : ''">服務</a>
          <a href="#works" class="按鈕" :class="isActive('works') ? '按鈕啟用' : ''">作品</a>
        </div>
        <a href="#contact"
          class="cursor-pointer absolute right-30 top-5 group flex bg-orange-600 text-white font-bold px-8 py-2 ml-100 rounded-full ease-in-out duration-150"
          :class="isActive('contact') ? '聯絡按鈕啟用' : ''">聯絡我<div class="w-3 group-hover:w-5 ease-in-out duration-150">
          </div>{{ isActive('contact') ? '⋈' : '→' }}
        </a>
      </div>
      <!-- 手機版 -->
      <div class="flex md:hidden justify-center items-center ml-10"><button @click="toggleMenu()"
          class="cursor-pointer">展開</button>
      </div>
    </nav>

    <section id="index" class="bg-gray-100 flex justify-center h-80 py-10">
    </section>
    <section id="about" class="bg-gray-000 flex justify-center h-80 py-10">
      <div class="標題對齊">
        <div class="標題">關於</div>
      </div>
    </section>
    <section id="services" class="bg-gray-100 flex justify-center h-80 py-10">
      <div class="標題對齊">
        <div class="標題">服務</div>
      </div>
    </section>
    <section id="works" class="bg-gray-000 flex justify-center h-250 py-10 flex-wrap">
      <div class="標題對齊">
        <div class="標題">作品</div>
      </div>
      <div class="w-full">
        <div class="flex flex-wrap justify-center gap-10">
          <div v-for="work in works" :key="work.id" @click="showDialog(work)"
            class="cursor-pointer group bg-gray-200 w-80 h-80 rounded-lg hover:scale-110 hover:shadow-xl ease-in-out duration-200 flex flex-col justify-end">
            <div
              class="group-hover:bg-white group-hover:opacity-100 ease-in-out duration-200 py-10 flex justify-center items-center opacity-0">
              {{ work.name }}</div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="bg-gray-100 flex flex-wrap justify-center h-80 py-10">
      <div class="標題對齊">
        <div class="標題">聯絡我</div>
      </div>
      <div class="w-full" />
      <div class="flex flex-col gap-4">
        <input type="text" placeholder="姓名" class="border-2 border-gray-500 rounded-lg px-4 py-2" />
        <input type="text" placeholder="電子郵件" class="border-2 border-gray-500 rounded-lg px-4 py-2" />
        <input type="text" placeholder="訊息" class="border-2 border-gray-500 rounded-lg px-4 py-2" />
        <button class="bg-orange-600 text-white font-bold px-8 py-2 rounded-full ease-in-out duration-150">
          送出
        </button>
      </div>
    </section>
    <div class="h-[50vh]"></div>
  </main>
</template>

<script setup>
import { watch, onMounted, ref } from 'vue'

const dialog = ref({ show: false, data: {} })

const menu = ref(false)
function toggleMenu() {
  menu.value = !menu.value
}

function showDialog(data) {
  dialog.value.data = data;
  dialog.value.show = true;
}

function closeDialog() {
  dialog.value.show = false
}

const works = ref(
  [{ id: 0, name: 'test1', description: 'Test Desdescription', link: '' },
  { id: 1, name: 'test2', description: 'Test Desdescription', link: '' },
  { id: 2, name: 'test3', description: 'Test Desdescription', link: '' },
  { id: 3, name: 'test4', description: 'Test Desdescription', link: '' },
  { id: 4, name: 'test5', description: 'Test Desdescription', link: '' },
  { id: 5, name: 'test6', description: 'Test Desdescription', link: '' },
  ]);

const activePage = ref('index');
function isActive(name) {
  return activePage === name
}


onMounted(() => {
  const pages = ['index', 'about', 'works', 'services', 'contact']

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activePage.value = entry.target.id
        // emit('update:currentTab', entry.target.id)
      }
    })
  }, {
    rootMargin: '40% 0px 0% 0px', // 中間區塊為偵測點，可調整
    threshold: 0.1,
  })



  pages.forEach((page) => {
    const element = document.getElementById(page)
    if (element) {
      observer.observe(element)
    }
  })
})

</script>

<style scoped>
@import "tailwindcss";

html {
  scroll-behavior: smooth;
}

body {
  overflow: hidden;
}

section {
  scroll-margin-top: 80px;
  /* 根據你的 navbar 高度調整 */
}

.標題對齊
{
  /* @apply w-full flex md:justify-start md:ml-33 md:pb-0 justify-center pb-10 */
}

.標題 {
  @apply text-3xl md:text-5xl font-bold text-gray-800;
}

.按鈕 {
  @apply hover:bg-gray-200 rounded-lg px-4 py-2 ease-in-out duration-150 cursor-pointer
}

.按鈕啟用 {
  @apply bg-gray-200 rounded-lg
}

.聯絡按鈕啟用 {
  @apply bg-white border-3 border-orange-600 text-orange-600 ease-in-out duration-150
}

.選單.隱藏 {
  opacity: 0;
  height: 0;
}

.選單.顯示 {
  opacity: 1;
}

.文字顯示 {
  opacity: 1;
}

.文字隱藏 {
  opacity: 0;
}

.選單文字 {
  transition: all 0.3s ease-out;
}

.選單 {
  transition: all 0.3s ease-out;
}
</style>