<script>
import { RouterLink } from 'vue-router';


</script>

<template>
  <div class="Register flex items-center justify-center">
    <div class="flex flex-col lg:flex-row">
    <div class="boxLogin">
      <div class="bg-[#f7f7f7] shadow-md  px-8 pt-6 pb-8 mb-4 flex flex-col lg:rounded-r-lg h-[600px]">
        <div class="flex items-center justify-center w-full h-24">
          <h1 class="text-2xl font-bold text-[#242323]">   ساخت حساب کاربری</h1>
        </div>
      <div class="mb-4">
        <label
          class="block text-[#3c4852] text-sm font-bold mb-2"
          for="username"
        >
        نام کاربری یا ایمیل
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="نام خود را وارد کنید "
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-[#3c4852] text-sm font-bold mb-2"
          for="password"
        >
          رمز عبور
        </label>
        <input
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="******************"
        />
        <p class="text-[#f34]  text-xs italic">لطفا یک رمز را وارد  کنید</p>
      </div>
      <div class="mb-6">
        <label
          class="block text-[#3c4852] text-sm font-bold mb-2"
          for="password"
        >
           تکرار رمز عبور
        </label>
        <input
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="******************"
        />
        <p class="text-[#f34] text-xs italic">لطفا تکرار رمز را وارد  کنید</p>
      </div>
      <div class="flex w-full items-center justify-between">
        <button
          class="bg-[#03b97c] w-full border text-[#f7f7f7] hover:bg-[#6bdbb6]  py-2 px-4 rounded"
          type="button"
        >
          ثبت نام
        </button>
      </div>
      <div class="w-full flex justify-between items-center h-14">
        <router-link to="/login">
          <a
          class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="#"
        >
          حساب کاربری دارید ؟
          <span class="text-[#03b97c]"> ورود</span>
        </a>
        </router-link>
      <router-link to="/ForgotPasswordView">

        <a
          class="inline-block align-baseline text-sm text-[#ee5151]"
          href="#"
        >
         رمز عبور خود را فراموش کرده اید ؟
        </a>
      </router-link>
      </div>
    </div>
    </div>
    <div class="boxLogin hidden lg:block">
      <div class="bg-[#ffffff] shadow-md px-8 pt-6 pb-8 mb-4 flex  lg:rounded-l-lg h-[600px]">
       <img src="../assets/imgae/register2.svg" alt="">
      
    </div>
    </div>
  </div>
  </div>
</template>
<style scoped>
 .Register {
  direction: rtl;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 300px;
  background-color: rgb(51, 51, 51);
}
.boxLogin{
  width: 500px;
  max-height: 500px !important;
 
  padding-top: 100px;
}
</style>