<template>
    <div class="rulesView flex w-full min-h-[1000px]  flex-col md:flex-row">
      
      <div class="hidden md:block w-1/3  lg:w-2/5 2xl:w-1/5  bg-zinc-200 px-2 lg:px-16 pt-20 pb-40" ref="ulContainer" style="position: relative">
        <ul
          :class="{ fixed: isUlFixed }"
          ref="fixedUl"
          class="flex flex-col gap-3"
        >
          <li
            v-for="law in laws"
            :key="law.id"
            @click="scrollToDescription(law.id)"
          >
            {{ law.title }}
          </li>
        </ul>
      </div>
  
      <div class="textDiv w-full md:w-2/3  lg:w-3/5 2xl:w-4/5 px-6 lg:px-16 pt-40 flex flex-col gap-12 pb-40" style="height: 100%">
        <h1 class="text-center text-2xl text-[#1e3a58] font-bold">قوانین سورنا بیت</h1>
        <div
          v-for="law in laws"
          :key="law.id"
          class="Description"
          :id="`lawDescription${law.id}`"
        >
          <h1 class="text-xl">{{ law.title }}</h1>
          <p>{{ law.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isUlFixed: true,
        laws: [
          {
            id: 1,
            title: "قوانین حساب کاربری",
            description:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
          },
          {
            id: 2,
            title: "قوانین پرداخت و بازپرداخت",
            description:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
          },
          {
            id: 3,
            title: "حذف حساب کاربری ",
            description:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
          },
          {
            id: 4,
            title: "تغییرات در سرویس و قیمت‌گذاری",
            description:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
          },
          {
            id: 5,
            title: "حقوق معنوی و مالکیت محتوا",
            description:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
          },
        ],
      };
    },
    methods: {
      handleScroll() {
        const fixedUl = this.$refs.fixedUl;
        const ulContainer = this.$refs.ulContainer;
  
        if (fixedUl && ulContainer) {
          const windowHeight = window.innerHeight;
          const ulHeight = fixedUl.offsetHeight;
          const ulContainerHeight = ulContainer.offsetHeight;
          const scrollTop = window.scrollY || window.pageYOffset;
  
          if (ulContainerHeight - ulHeight <= scrollTop) {
            this.isUlFixed = false;
          } else {
            this.isUlFixed = true;
          }
        }
      },
      scrollToDescription(lawId) {
        console.log(lawId);
  
        const descriptionId = `lawDescription${lawId}`;
        console.log(descriptionId);
        const descriptionElement = document.getElementById(descriptionId);
  
        if (descriptionElement) {
          const offset = descriptionElement.offsetTop;
  
          window.scrollTo({ top: offset - 100, behavior: "smooth" });
        }
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  .rulesView {
    direction: rtl;
  }

.textDiv {
  position: relative;
}

.textDiv::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(../assets/imgae/10492.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  content: '';
  z-index: -1;
}

.textDiv::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.7); 
  z-index: -1;
}

  .fixed {
    position: fixed;
    top: 100px;
  }
  
  .Description {
    color: #1e3a58;
    font-size: 24px;
    font-weight: 700;
  }
  
  .Description p {
    color: #242323;
    font-size: 14px;
    font-weight: 500;
    padding-left: 100px;
    padding-top: 30px;
  }
  ul li{
    border-bottom: 2px solid #8a8a8a;
    padding-top: 20px;
    font-size: 18px;
    font-weight: 600;
    color: #8a8a8a;
    cursor: pointer;
   padding-bottom: 10px;
  }
  @media only screen and (max-width : 950px){
    ul li{
    
    font-size: 14px;
   
  }
  .Description p {
    padding-left: 10px;
  }
  }
  @media only screen and (max-width : 600px){
    ul li{
    
    font-size: 12px;
   
  }
  }
  </style>