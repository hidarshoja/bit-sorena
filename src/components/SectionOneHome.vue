<script></script>
<template>
  <div class="sectionOneHome">
    <div class="sectionOneHomeTwo flex flex-col md:flex-row">
      <div>
        <div
          class="flex flex-col gap-3 items-center justify-center mt-24 md:mt-0 text-center"
        >
          <h1 class="text-2xl md:text-3xl text-center px-4">
            خرید و فروش امن بیت کویین و ارزهای دیجیتال
          </h1>
          <p class="px-2 text-sm md:text-base">
            سرمایه خود را طی مدتی کوتاه با کمک تیم سورنا بیت چند برابر کنید
          </p>
        </div>
        <div class="flex gap-3 items-center justify-center mt-5">
          <RouterLink to="/register">
            <button class="BtnRegisterHome">ثبت نام</button>
          </RouterLink>
          <RouterLink to="/login">
            <button class="BtnLoginHome">ورود</button>
          </RouterLink>
        </div>
      </div>
      <div>
        <div className=" py-24 sm:py-32  text-left">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className="mx-auto  max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-4 lg:mx-0 lg:flex lg:max-w-none"
            >
              <div
                className="-mt-2  lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 border-[#1C2733] border-8 rounded-3xl"
              >
                <div
                  className="rounded-2xl bg-gray-50 py-4 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-8"
                >
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      یک عملیات را انتخاب کن!
                    </p>
                  </div>
                  <div className="flex gap-1 p-2 justify-center items-center">
                    <a
                      href="#"
                      className="mt-2 block w-full rounded-md border-[#1c2733] border-2  px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-[#FFB115] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      خرید
                    </a>
                    <a
                      href="#"
                      className="mt-2 block w-full rounded-md bg-[#1C2733] border-2 border-[#1c2733] px-3 py-2 text-center text-sm font-semibold text-[#fffefe] shadow-sm hover:bg-[#dad8d8] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      فروش
                    </a>
                  </div>
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      موجودی کیف پول
                    </p>
                    <p
                      className="mt-6 flex items-baseline justify-center gap-x-2"
                    >
                      <span
                        className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900"
                      >
                        2,301,110
                      </span>
                      <span
                        className="text-sm font-semibold leading-6 tracking-wide text-gray-600"
                      >
                        تومان
                      </span>
                    </p>

                    <div className="sm:col-span-2">
                      <div className="flex item-center justify-between mt-3">
                        <label
                          htmlFor="company"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          مبلغ را وارد کنید :
                        </label>
                      </div>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="company"
                          id="company"
                          autoComplete="organization"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex item-center justify-between mt-3">
                        <label
                          htmlFor="company"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          مقدار را وارد کنید :
                        </label>
                      </div>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="company"
                          id="company"
                          autoComplete="organization"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div
                      className="flex items-center justify-between border-b paid mt-3 py-2 px-1"
                    >
                      <span>مقدار پرداختی :</span>
                      <div>
                        <span className="mx-1 text-muted coin">USDT</span>
                        <span className="mx-1 text-muted amount-received"
                          >0</span
                        >
                      </div>
                    </div>

                    <div
                      className="flex items-center justify-between border-b paid mt-3 py-2 px-1"
                    >
                      <span>قیمت لحظه ای :</span>
                      <div>
                        <span className="mx-1 text-muted coin">USDT</span>
                        <span className="mx-1 text-muted amount-received"
                          >0</span
                        >
                      </div>
                    </div>

                    <div className="flex gap-1 p-2">
                      <a
                        href="#"
                        className="mt-2 block w-full rounded-md bg-[#080d11] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                      >
                        همین حالا شروع کن
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="w-[80%] mx-auto pb-[50px] flex gap-6 flex-wrap justify-center items-center" >
        <div class="w-[320px] h-[200px]  rounded-xl">
             <img src="../assets/imgae/1701.jpg" class="rounded-xl cursor-pointer" alt="">   
        </div>
        <div class="w-[320px] h-[200px]  rounded-xl">
          <img src="../assets/imgae/1702.jpg" class="rounded-xl cursor-pointer" alt="">
        </div>
        <div class=" w-[320px] h-[200px] rounded-xl">
            <img src="../assets/imgae/1703.jpg" class="rounded-xl cursor-pointer" alt="">
        </div>
        <div class=" w-[320px] h-[200px]  rounded-xl" >
           <img src="../assets/imgae/1704.jpg" class="rounded-xl cursor-pointer" alt="">
         </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sectionOneHome {
  width: 100%;
  min-height: 840px;
  opacity: 0.7;
  background: url(../assets/imgae/bg.png.png) lightgray;
  background-position: right top; /* Adjust the position as needed */
  background-size: 50% 100%;
  background-repeat: no-repeat;
}
.sectionOneHomeTwo {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
}

.BtnLoginHome {
  display: flex;
  width: 100px;
  height: 36px;
  padding: 7.38px 22.24px 7.37px 22.45px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: #784ed1;
  border-radius: 9px;
  color: white;
}
.BtnLoginHome:hover {
  background-color: rgb(212, 208, 208);
  color: #784ed1;
  border: 1px solid #784ed1;
}
.BtnRegisterHome {
  display: flex;
  width: 100px;
  height: 36px;
  padding: 7.38px 22.24px 7.37px 22.45px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid #784ed1;
  border-radius: 9px;
  color: #784ed1;
}
.BtnRegisterHome:hover {
  background-color: #784ed1;
  color: white;
}
</style>
