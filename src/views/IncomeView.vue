<template>
 <div dir="rtl">
    <div
      class="w-full min-h-96 flex flex-col md:flex-row md:py-12 items-center justify-center gap-10 bg-[#1a1c1f]"
    >
      <div
        class="flex flex-col md:flex-row md:py-12 items-center justify-center gap-10 lg:w-[80%] lg:mx-auto"
      >
        <div class="w-full md:w-1/2 px-3 md:px-10">
          <h1
            class="text-[#e1e3e6] text-2xl pr-3 md:text-3xl font-bold py-5 md:pl-8 md:pr-0 pb-12"
          >
            دعوت از دوستان
          </h1>
          <p class="text-[#e7dfdf] text-sm px-3 md:pl-8 md:pr-0 pb-12 md:pb-0">
            چشم انداز بیت لند کمک و سرعت بخشیدن به روند استفاده از ارزهای
            دیجیتال است ؛ تا شما و همه سرمایه گذاران در سرتاسر جهان بتوانند از
            قدرت فوق العاده ارزهای دیجیتال استفاده کنند. پلتفرم بیت لند ، با
            استفاده از مجموعه ابزار های فنی و تکنیک هایی مانند ذخیره سازی سرد و
            فرایند شناسایی دو عاملی به بهترین نحو از دارایی شما نگهداری خواهد
            کرد.
          </p>
          <div class="mt-10">
            <button
              class="inline-block px-4 py-2 text-green-500 font-semibold border-2 border-green-500 rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:outline-none focus:ring focus:ring-green-100"
            >
              دریافت کد دعوت
            </button>
          </div>
        </div>
        <div class="flex items-center justify-center w-full md:w-1/2 h-96">
          <img src="../assets/imgae/hero.svg" alt="" />
        </div>
      </div>
    </div>
    <div
      class="boxCard flex flex-col md:flex-row items-center justify-center gap-10 flex-wrap min-h-[600px]"
    >
      <div class="card w-[300px] md:w-[350px]">
        <div>
          <img src="../assets/imgae/get.svg" alt="" />
        </div>
        <div class="flex flex-col gap-3">
          <h3>لینک و کد دعوت را دریافت کنید</h3>
          <p>
            ثبت نام کنید و لینک دعوت خود را دریافت نمایید یا لینک سفارشی بسازید.
          </p>
        </div>
      </div>
      <div class="card w-[300px] md:w-[350px]">
        <div>
          <img src="../assets/imgae/step2.svg" alt="" />
        </div>
        <div class="flex flex-col gap-3">
          <h3> دوستان خود را دعوت کنید </h3>
          <p>
            لینک دعوت را برای دوستان خود بفرستید تا از طریق آن در تبدیل ثبت نام نمایند.
          </p>
        </div>
      </div>
      <div class="card w-[300px] md:w-[350px]">
        <div>
          <img src="../assets/imgae/step3.svg" alt="" />
        </div>
        <div class="flex flex-col gap-3">
          <h3>    درآمد کسب کنید!  </h3>
          <p>
            از هر معامله که دوستان‌تان انجام می‌دهند، درآمد کسب نمایید. می‌توانید این درآمد را به کیف پول خود انتقال دهید یا به خیریه اهدا نمایید.
          </p>
        </div>
      </div>
    </div>
    <div class="w-full h-[400px] bg-[#d1d3d6] flex flex-col items-center justify-center gap-10">
        <div>
            <h3 class="text-2xl font-semibold text-[#3f3d3d]">همین حالا شروع به کسب درآمد کنید</h3>
        </div>
        <div>
             <button class="inline-block px-10 py-2 text-green-500 font-semibold border-2 border-green-500 rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:outline-none focus:ring focus:ring-green-100">
                 ثبت نام و دریافت کد دعوت رایگان   
              </button>
        </div>
    </div>
  </div>
</template>
<style scoped>


.boxCard{
    overflow: hidden;
  background: -moz-linear-gradient(-45deg, #ffe0e3 32%, #a7e0e5 68%);
  background: -webkit-linear-gradient(-45deg, #ffe0e3 32%, #a7e0e5 68%);
  background: linear-gradient(135deg, #ffe0e3 32%, #a7e0e5 68%);
}
.card {
  height: 390px;
  padding: 1rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #b4b0b0b6;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.card:hover {

  transform: translateY(-0.7cm) rotateZ(-7deg);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease;
}

.card img {
  width: 100%;
  height: auto;
}

.card h3 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #302f2f;
  margin-top: 1.5rem;
}

.card p {
  font-size: 0.8rem;
  font-weight: bold;
  color: #3d3d3d;
}
</style>
<script>
 
</script>
