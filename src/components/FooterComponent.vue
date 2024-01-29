<script>
export default {
      data() {
    return {
      footerFlag: false,
    };
  },
  watch: {
    '$route.path': 'updateFlag',
  },
  methods: {
    updateFlag() {
      const paths = ['/register','/login' , '/ForgotPasswordView' , "/GetCodeView"];
      const pathname = this.$route.path;
      this.footerFlag = paths.includes(pathname) || pathname === '*' ;
    },
  },
  mounted() {
    this.updateFlag(); // Initial call to set the flag based on the current route
  },
};

</script>
<template>
     <div :class="footerFlag ? 'hidden' : ''">
        <div class="footer" id="footerTag">
         <div class="footer-item flex flex-wrap md:flex-no-wrap">
             <div class="w-full md:w-1/2 lg:w-1/12">
                 <img src="../assets/logo.svg" alt="" style="width: 40px; !important">
             </div>
             <div class="w-full md:w-1/2 lg:w-5/12">
                 <h3 class="text-amber-400 text-3xl py-3">
                     بیت سورنا
                 </h3>
                 <p class="pl-5">
                     بیت سورنا  محصول گروه مهندسی فناوری  بیت سورنا از گروه شرکت های مطرح در حوزه فناوری اطلاعات و ارتباطات،
                     مدیریت مالی و سرمایه گذاری و حقوقی به همراه تیمی از خبرگان حوزه ارز دیجیتال و فناوری است ، با توجه به
                     اینکه بیت کوین و سایر ارز های دیجیتال یک دارایی امن و مهم جهت سرمایه گذاری محسوب میشود، و از سوی
                     دیگر امنیت و سادگی این معاملات در کشور از اهمیت بالایی برخودار است، این تیم تصمیم به ایجاد یک سیستم
                     امن، ساده و حرفه ای با در نظر گرفتن الزامات قانونی و حقوقی برای سرمایه گذاران، بازرگانان و فعالین کسب و کار
                     جهت سرمایه گذاری و استفاده از ارز های دیجیتال گرفت.
                 </p>
             </div>
             <div  class="w-full md:w-1/3 lg:w-1/12">
                 <h3 class="text-amber-400 text-2xl py-3">خدمات</h3>
                 <ul>
                     <li>خربد تتر</li>
                     <li>فروش تتر</li>
                     <li>قیمت تتر</li>
                     <li>آموزش ارزها</li>
                 </ul>
             </div>
             <div  class="w-full md:w-1/3 lg:w-2/12">
                 <h3 class="text-amber-400 text-2xl py-3">درباره ما</h3>
                 <ul>
                     <li>درباره بیت لند</li>
                     <li>شرایط و قوانین</li>
                     <li>سوالات متداول</li>
                 </ul>
             </div>
             <div  class="w-full md:w-1/3 lg:w-2/12">
                 <h3  class="text-amber-400 text-2xl py-3">شبکه های اجتماعی</h3>
                 <ul>
                     <li class="flex gap-2"><img src="../assets/imgae/instagram.svg" alt=""><span>آدرس اینستاگرام</span></li>
                     <li class="flex gap-2"> <img src="../assets/imgae/phone.svg"/> <span>شماره تماس : 0583234656</span> </li>
                     <li class="flex gap-2"> <img src="../assets/imgae/telgram.svg" /><span>@sorena_bit</span></li>
                 </ul>
             </div>
         </div>
        </div>
    </div>
</template>
<style scoped>
.footer{
    background: #1C2733;
    width: 100%;
    min-height: 346.83px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 50px;
}
  .footer-item{
    color: white;
    direction: rtl;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }
  .footer-item div ul li {
    color: #FFF;
    text-align: right;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 5px;
  }
  .footer-item div p {
    color: #FFF;
    text-align: right;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
</style>