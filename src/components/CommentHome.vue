<template>
    <div style="direction: rtl" class="bg-[#25303b] text-white min-h-[800px]">
    <div class="h-[100px] flex items-center justify-center">
      <h1 class="text-[#f7f7f7] text-2xl font-bold"> نظرات کاربران سورنا بیت</h1>
    </div>
    <div class="flex md:hidden  justify-center items-center">
      <carousel :items-to-show="1" :no-drag="true" :autoplay="1000" :transition="1000" :touchDrag="true" :wrap-around="true">
        <slide v-for="user in users" :key="user.id">

          <div class="slideBox w-[300px] h-96  bg-[#314252] pb-3">
          
            <div id="myCarousel" class="carousel slide" data-ride="carousel"  style="margin-top: 0px !important;">
              <div class="carousel-inner row w-100 mx-auto">
                <div class="carousel-item col-md-4">
                  <div class="card flex flex-col  gap-7 p-4 items-center justify-between">
                    <img
                        class="w-[70px] rounded-[50%] h-[70px]"
                        :src="user.img"
                        alt="Card image cap"
                      />
                    <div class="card-body">
                      <h2 class="text-xl   py-4 text-right"> {{ user.name }} </h2>
                      <p class="card-text text-right">
                       {{ user.dic }}
                      </p>
                      <p class="card-text text-left pl-4">
                        <small class="text-muted"> {{ user.data }}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
    <div class="hidden md:flex lg:hidden justify-center items-center">
      <carousel :items-to-show="1.3" :no-drag="true" :autoplay="1000" :transition="1800" :touchDrag="true"  :wrap-around="true">
        <slide v-for="user in users" :key="user.id">

          <div class="slideBox w-[550px] bg-[#314252] pb-3">
          
            <div id="myCarousel" class="carousel slide" data-ride="carousel"  style="margin-top: 0px !important;">
              <div class="carousel-inner row w-100 mx-auto">
                <div class="carousel-item col-md-4">
                  <div class="card flex flex-row-reverse h-48 items-center justify-center">
                    <div class="w-2/6 flex items-center justify-center">
                      <img
                        class="w-[70px] rounded-[50%] h-[70px]"
                        :src="user.img"
                        alt="Card image cap"
                      />
                    </div>
                    <div class="card-body w-4/6">
                      <h2 class="text-xl   py-4 text-right"> {{ user.name }} </h2>
                      <p class="card-text text-right">
                       {{ user.dic }}
                      </p>
                      <p class="card-text text-left pl-4">
                        <small class="text-muted"> {{ user.data }}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
   <div>
    <div class="hidden lg:flex justify-center items-center w-[80%] mx-auto">
      <carousel :items-to-show="2" :no-drag="true"  :wrap-around="true" :autoplay="1000" :transition="1000" :touchDrag="true" :pauseAutoplayOnHover="true">
        <slide v-for="user in users" :key="user.id">

          <div class="slideBox w-[600px]  bg-[#314252] pb-3">
          
            <div id="myCarousel" class="carousel slide" data-ride="carousel"  style="margin-top: 0px !important;">
              <div class="carousel-inner row w-100 mx-auto">
                <div class="carousel-item col-md-4">
                  <div class="card flex flex-row-reverse h-48 items-center justify-center">
                    <div class="w-2/6 flex items-center justify-center">
                      <img
                        class="w-[70px] rounded-[50%] h-[70px]"
                        :src="user.img"
                        alt="Card image cap"
                      />
                    </div>
                    <div class="card-body w-4/6">
                      <h2 class="text-xl   py-4 text-right"> {{ user.name }} </h2>
                      <p class="card-text text-right">
                       {{ user.dic }}
                      </p>
                      <p class="card-text text-left pl-4">
                        <small class="text-muted"> {{ user.data }}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
   </div>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data (){
    return {
      users: [
         { id: 1, name: "حسین رضایی", dic: "ممنون از سایت خوب شما من توانستم به راحتی ثبت نام کنم و خرید انجام بدهم بنظرم ایت سایت جهت خرید  بسیار عالی است", side: "کاربر", data: "1402/03/19"  , img:"/avatar-10.jpg" },
         { id: 2, name: "حسین احمدی", dic: "ممنون از سایت شما ولی سرعت لود خبلی کند است", side: "کاربر", data: "1402/01/13" , img:"/avatar-11.jpg" },
        { id: 3, name: "شاهین رضایی", dic: "ممنون از سایت خوب شما بسیار عالی است", side: "کاربر", data: "1402/07/23" , img:"/avatar-12.jpg" },
        { id: 4, name: "رضا رضایی", dic: "من نمی توانم ثبت نام انجام بدهم", side: "کاربر", data: "1402/07/13" , img:"/avatar-10.jpg" },
        { id: 5, name: "مینا غلامی", dic: "ممنون از سایت خوب شما بسیار عالی است", side: "کاربر", data: "1402/04/03" , img:"/avatar-11.jpg" },
         { id: 6, name: "پگاه رضایی", dic: "خرید بسیار ساده و بهترین روش برای سرمایه گذاری", side: "کاربر", data: "1402/11/20"  , img:"/avatar-12.jpg"},
      ],
    }
  }
};


</script>
<style scoped>

.carousel {
  margin-top: 100px;
  overflow: hidden !important;
}
.slideBox{
  border-radius: 10px;
  border-top: 10px solid #F85A2A;
   box-shadow: 0px 2px 6px 2px rgba(32, 32, 32, 0.856), 0px 1px 2px 0pxrgba(27, 27, 27, 0.87);
}
.carousel__pagination {
    margin: 70px 0 0 !important;
}


</style>