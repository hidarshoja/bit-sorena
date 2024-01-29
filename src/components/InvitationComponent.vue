<template>
    <div :class="flag ? 'hidden' : ''">
        <div
      class="w-full min-h-[400px] md:h-[300px] flex flex-col  md:flex-row md:py-12 items-center justify-center gap-10 bg-[#9371da]"
    >
      <div
        class="flex flex-col px-2 md:flex-row md:py-12 items-center justify-center gap-10 lg:w-[80%] lg:mx-auto"
      >
        <div class="w-full md:w-1/2 px-3 md:px-10 flex flex-col justify-start items-start gap-4">
        <div class="flex gap-3 items-center justify-center">
            
            <div class="flex flex-col gap-2">
                <h1 class="text-lg md:text-2xl font-semibold text-[#302f2f] pt-10 md:pt-0">   در سود سورنا بیت سهیم شوید</h1>
                <p class="text-sm font-semibold text-[#3d3d3d]">
                    با دعوت از دوستانتان با لینک اختصاصی خود، هر بار که معامله می‌کنند برای 
                    همیشه تا 30% از کارمزد معاملاتشان از طرف نوبیتکس به شما تعلق می‌گیرد
                </p>
               <div class="flex items-start mt-7">
                
                <button class="custom-btn btn-3"><span> بیشتر بدانید </span></button>
                <!-- <button class="border px-4 py-2 rounded-md  border-[#f4f5f3] text-[#d4d2d2] hover:bg-[#fafaf9] hover:text-[#302f2f] hover:border-[#302f2f]">بیشتر بدانید</button> -->
               </div>
            </div>
        </div>
       
        </div>
        <div class="w-full md:w-1/2 h-96 relative">
            <img src="../assets/imgae/pro.webp" alt="" class="md:w-full xl: xl:w-[90%] md:h-[400px] md:absolute md:top-[-60px]">
        </div>
      </div>
    </div>
    </div>
</template>
<script>
// const paths = ['/register','/login']
// const pathname = window.location.pathname;
// let flag = false
// if (paths.includes(pathname)) {
//   flag = true
// }

export default {
  data() {
    return {
      flag: false,
    };
  },
  watch: {
    '$route.path': 'updateFlag',
  },
  methods: {
    updateFlag() {
      const paths = ['/register','/login' , '/ForgotPasswordView' , "/GetCodeView"];
      const pathname = this.$route.path;
      this.flag = paths.includes(pathname) || pathname === '*' ;
    },
  },
  mounted() {
    this.updateFlag(); // Initial call to set the flag based on the current route
  },
};

</script>
<style>

.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.5s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
              7px 7px 20px 0px rgba(0, 0, 0, 0.1),
              4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

.btn-3 {
  background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
  }

.btn-3 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transition: 0.5s;
}

.btn-3:before,
.btn-3:after,
.btn-3 span:before,
.btn-3 span:after {
  position: absolute;
  content: "";
  background: rgba(2, 126, 251, 1);
  transition: all 0.5s ease;
}

.btn-3:before {
  height: 0%;
  width: 2px;
  right: 0;
  top: 0;
}

.btn-3:after {
  width: 0%;
  height: 2px;
  right: 0;
  top: 0;
}

.btn-3:hover {
  background: transparent;
  box-shadow: none;
}

.btn-3:hover:before {
  height: 100%;
}

.btn-3:hover:after {
  width: 100%;
}

.btn-3 span:hover {
  color: rgba(2, 126, 251, 1);
}

.btn-3 span:before {
  width: 2px;
  height: 0%;
  left: 0;
  bottom: 0;
}

.btn-3 span:after {
  width: 0%;
  height: 2px;
  left: 0;
  bottom: 0;
}

.btn-3 span:hover:before {
  height: 100%;
}

.btn-3 span:hover:after {
  width: 100%;
}



/* 13 */

</style>