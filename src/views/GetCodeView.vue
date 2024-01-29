

<template>



  
  <div class="login flex item-center justify-center">
  <div class="flex flex-col lg:flex-row">
    <div class="boxLogin">
      <div class="bg-[#f7f7f7] shadow-md  px-8 pt-12 pb-8 mb-4 flex flex-col lg:rounded-r-lg h-[500px]">
        <div class="flex items-center justify-center w-full h-24">
          <h1 class="text-2xl font-bold text-[#242323]">  رمز ارسال شده را وارد کنید</h1>
        </div>
     
      <div class="mb-6">
        <label
          class="block text-[#3c4852] text-sm font-bold mb-2"
          for="password"
        >
          کد یک بار مصرف
        </label>
        <input
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="text"
          placeholder="   کد ارسالی را وارد کنید"
        />
      
      </div>
    
      <div class="flex w-full items-center justify-between">
        <button
          class="bg-[#03b97c] w-full border text-[#f7f7f7] hover:bg-[#6bdbb6]  py-2 px-4 rounded"
          type="button"
        >
          ارسال
        </button>
      </div>
      <div class="w-full flex justify-between items-center h-14">
      <RouterLink to="/login">
        <a
          class="inline-block align-baseline text-sm text-[#ee5151]"
          href="#"
        >
         حساب کاربری دارید؟ <span class="text-[#3db63d]">ورود</span>
        </a>
      </RouterLink>
      </div>
    </div>
    </div>
    <div class="boxLogin hidden lg:block">
      <div class="bg-[#ffffff] shadow-md px-8 pt-6 pb-8 mb-4 flex  lg:rounded-l-lg h-[500px]">
       <img src="../assets/imgae/opt.svg" alt="">
      
    </div>
    </div>
  </div>
  </div>

</template>
<script>
   import { RouterLink } from 'vue-router';
</script>
<style scoped>
.login {
  direction: rtl;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 200px;
  background-color: rgb(51, 51, 51);
}
.boxLogin{
  width: 500px;
  max-height: 500px !important;
 
  padding-top: 100px;
}
</style>