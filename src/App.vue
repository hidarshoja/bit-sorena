

<template>
  <div id="app">
    <Header />

    <RouterView />

    <InvitaionComponent dir="rtl" />
    <Footer />
  
    <div>
    <div
      class="flex gap-3 items-center justify-center bottom-5 left-5 fixed rounded-lg bg-[#ebda40] px-3 cursor-pointer py-1"
      dir="rtl"
      @click="toggleChat"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"
          />
        </svg>
      </div>
      <div>
        <span class="text-[#2b2929] font-semibold">پشتیبانی</span>
      </div>
    </div>
    <!-- <div v-if="showChat" class="chat w-[450px] h-[600px] left-2 fixed bottom-16 bg-[#aaa8a8] z-50 rounded-md shadow-2xl"> -->
      <div v-if="showChat" class="chat w-[450px] h-[600px] left-2 fixed bottom-16 bg-gradient-to-r from-[#181f24] to-[#051220] z-50 rounded-md shadow-2xl p-4">
      
       <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-full">
   <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200" dir="rtl">
      <div class="relative flex items-center space-x-4">
         <div class="relative">
            <span class="absolute text-green-500 right-0 bottom-0">
               <svg width="20" height="20">
                  <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
               </svg>
            </span>
         <img src="./assets/imgae/pho.jpg" alt="" class="w-10 sm:w-16 h-10 sm:h-16 rounded-full">
         </div>
         <div class="flex flex-col gap-1 leading-tight">
            <div class="text-xl mt-1 flex items-center">
               <span class="text-gray-200 mr-3"> حیدر شجاع </span>
            </div>
            <span class="text-sm text-gray-200 mr-3">فرانت اند  </span>
         </div>
      </div>
      <div class="flex items-center space-x-2 gap-1">       
         <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
         </button>
         <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
         </button>
      </div>
   </div>
   <div id="messages" ref="messages" class="flex flex-col  space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch" dir="rtl">
      <div class="chat-message">
         <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">می توان در هر پلتفرمی با استفاده از داکر تأیید کرد</span></div>
            </div>
            <img src="./assets/imgae/pho.jpg" alt="My profile" class="w-6 h-6 rounded-full order-1">
         </div>
      </div>
      <div class="chat-message">
         <div class="flex items-end justify-end gap-2">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div>
                <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                پیغام خطای شما می گوید مجوز رد شد، نصب های جهانی npm باید دارای امتیازات ریشه باشند
               </span>
              </div>
            </div>
            <div class="order-2 w-[45px]  flex items-center justify-end">
              <img src="./assets/imgae/pho1.jpg" alt="My profile" class="w-6 h-6 rounded-full">
            </div>
         </div>
      </div>
     
      <div class="chat-message">
         <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">ممنون از پیامت دیوید فکر می کردم با این موضوع تنها هستم</span></div>
            </div>
            <img src="./assets//imgae/pho.jpg" alt="My profile" class="w-6 h-6 rounded-full order-1">
         </div>
      </div>
      <div class="chat-message">
         <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span class="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">آیا از sudo استفاده می کنید؟</span></div>
             
            </div>
            <div class="order-2 w-[45px] flex items-center justify-end">
              <img src="./assets/imgae/pho1.jpg" alt="My profile" class="w-6 h-6 rounded-full">
            </div>
         </div>
      </div>
      <div class="chat-message">
         <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">به نظر می رسد شما از دنیای سیستم عامل مک هستید.  </span></div>
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                من هیچ مشکلی با سایر بسته های نصب شده با مجوز روت در سطح جهانی ندارم.
               </span></div>
            </div>
            <img src="./assets/imgae/pho.jpg" alt="My profile" class="w-6 h-6 rounded-full order-1">
         </div>
      </div>
      <div class="chat-message">
         <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                بله من مک دارم من هرگز با مجوز root مشکل نداشتم، اما این به من کمک کرد تا مشکل را حل کنم
               </span></div>
            </div>
            <div class="order-2 w-[45px]  flex items-center justify-end">
              <img src="./assets/imgae/pho1.jpg" alt="My profile" class="w-6 h-6 rounded-full">
            </div>
           
         </div>
      </div>
      <div class="chat-message">
         <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
             
               <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                من هم این مشکل را دارم، این چیزی است که من انجام می دادم  
              </span></div>
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  سوالی هست در خدمتم
               </span></div>
            </div>
            <img src="./assets/imgae/pho.jpg" alt="My profile" class="w-6 h-6 rounded-full order-1">
         </div>
      </div>
   </div>
   <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <div class="relative flex" dir="rtl">
         <span class="absolute inset-y-0 flex left-[74px] items-center">
            <button type="button" class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
               </svg>
            </button>
         </span>
         <input type="text" placeholder="لطفا پیام  خود را بنویسید" class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pr-2 bg-gray-200 rounded-md py-3">
       
         <div class="absolute left-[-20px] items-center inset-y-0 hidden sm:flex">
    <button type="button" class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none gap-2">
        <span>ارسال</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
          <path fill="#ffffff" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
        </svg>
    </button>
</div>
      </div>
     
   </div>
       </div>
    </div>
  </div>
    </div>
</template>
<script>
// import { RouterLink, RouterView } from "vue-router";
import Header from "./components/HeaderComponent.vue";
import Footer from "./components/FooterComponent.vue";
import InvitaionComponent from "./components/InvitationComponent.vue";

export default {
  data() {
    return {
      showChat: false,
    };
  },
  components:{
    Header,
    Footer
  },
  mounted() {
    this.scrollToBottom();
  },
  methods: {
    toggleChat() {
      this.showChat = !this.showChat;
      if (this.showChat) {
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }
    },
    scrollToBottom() {
      const el = this.$refs.messages;
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    }
  },
};
</script>
<style scoped>
.scrollbar-w-2::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: #edf2f7;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}

@font-face {
  font-family: "shabnam";
  src: url("./assets/fonts/shabnam/Shabnam-Medium.woff") format("woff"),
    url("./assets/fonts/shabnam/Shabnam-Medium.eot") format("eot");
}

body {
  font-family: "shabnam", sans-serif;
}

#app {
  max-width: 100%;

  font-family: "shabnam", sans-serif;
  font-weight: normal;
}
</style>
