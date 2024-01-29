<template>
  <div id="helpPage" class="bg-[#141b23] w-full min-h-[800px]" dir="rtl">
    <div
      class="w-full py-10 flex flex-col justify-center items-center gap-10 md:w-[80%] md:flex-row md:justify-start mx-auto"
    >
      <div>
        <img src="../assets/imgae/help.svg" alt="" />
      </div>
      <h1 class="text-white text-xl px-2 md:text-2xl text-center">
        خوش آمدید ، چگونه می توانیم به شما کمک کنیم ؟
      </h1>
    </div>

    <div
      class="helpBox w-full md:bg-[#0e0d0d4f] rounded-lg mt-20 px-5 py-10 flex flex-col justify-center items-center gap-10 md:w-[80%] xl:w-[60%] md:flex-row md:justify-start mx-auto"
    >
      <div class="w-full md:w-1/3 hover-up">
        <img src="../assets/imgae/23982.jpg" alt="" />
        <router-link to="/QuestionsView">
          <h3>سوالات متداول</h3>
        </router-link>
      </div>
      <div class="w-full md:w-1/3 hover-up">
        <img src="../assets/imgae/20943790.jpg" alt="" />
        <router-link  to="/blog">

          <h3>بلاگ ها</h3>
        </router-link>
      </div>
      <div class="w-full md:w-1/3 hover-up">
        <img src="../assets/imgae/ghanon.jpg" alt="" />
        <router-link  to="/RulesView">

          <h3>شرایط و قوانین</h3>

         </router-link>

      </div>
    </div>
    <h3 class="text-center text-white py-6 text-2xl">
      راهنمای موضوعی سورنا بیت
    </h3>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
</script>
<style scoped>
.helpBox div {
  border-radius: 13px;
  box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
    0 3px 7px -3px rgba(0, 0, 0, 0.3);
  background-color: var(--dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px 0;
  transform: translateY(-100px);
  cursor: pointer;
  background-color: #25303b;
}
.helpBox div img {
  border-radius: 50%;
  width: 120px;
}
.helpBox div h3 {
  color: white;
  padding-top: 30px;
  font-size: 18px;
}
.hover-up {
  position: relative;
  transition: transform 0.3s ease;
}

.hover-up:hover {
  transform: translateY(-3cm);
}
</style>
