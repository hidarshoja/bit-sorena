
<template>
   
        <div class="min-h-[800px] " dir="rtl">
        <h1 class=" h-[150px] flex items-center text-center text-xl justify-center font-semibold px-2 md:text-2xl text-[#313131]  bg-gray-300">بهترین امکانات خرید و فروش ارزهای دیجیتال  و  قیمت لحظه ای  ارزها</h1>
        <div
      class="w-full min-h-[600px] flex flex-col  md:flex-row md:py-12 items-center justify-center gap-10 bg-gray-300"
    >
      <div
        class="flex flex-col px-2 md:flex-row md:py-12 items-center justify-center gap-10 lg:w-[80%] lg:mx-auto"
      >
        <div class="w-full md:w-1/2 px-3 md:px-10 flex flex-col justify-start items-start gap-4">
        <div class="flex gap-3 items-center justify-center">
            <div class="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center">
                <img src="../assets/imgae/download1.webp" alt="">
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="text-lg font-semibold text-[#302f2f]">مدیریت موجودی کیف پول</h1>
                <p class="text-sm font-semibold text-[#3d3d3d]">
                    رمزارزهای دیجیتال محبوب را خرید و فروش کنید و در یکجا وضعیت موجودی خود را دنبال کنید
                </p>
            </div>
        </div>
        <div class="flex gap-3 items-center justify-center">
            <div class="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center">
                <img src="../assets/imgae/download2.webp" alt="">
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="text-lg font-semibold text-[#302f2f]">پرداخت با کارت‌های شتاب   </h1>
                <p class="text-sm font-semibold text-[#3d3d3d]">
                    معامله انواع رمزارز با تومان از طریق واریز و برداشت با کارت‌های بانکی عضو شتاب
                </p>
            </div>
        </div>
        <div class="flex gap-3 items-center justify-center">
            <div class="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center">
                <img src="../assets/imgae/download3.webp" alt="">
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="text-lg font-semibold text-[#302f2f]">مدیریت موجودی کیف پول</h1>
                <p class="text-sm font-semibold text-[#3d3d3d]">
                    رمزارزهای دیجیتال محبوب را خرید و فروش کنید و در یکجا وضعیت موجودی خود را دنبال کنید
                </p>
            </div>
        </div>
        <div class="flex gap-3 items-center justify-center">
            <div class="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center">
                <img src="../assets/imgae/download4.webp" alt="">
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="text-lg font-semibold text-[#302f2f]"> کارمزد رقابتی</h1>
                <p class="text-sm font-semibold text-[#3d3d3d]">
                    کارمزد خرید و فروش در نوبیتکس بسیار کم است و با بالاتر رفتن حجم معاملات کاهش می‌یابد
                </p>
            </div>
        </div>
        </div>
        <div class=" w-full md:w-1/2 h-96">
            <img src="../assets/imgae/app.webp" alt="">
        </div>
      </div>
    </div>
      <!-- <div class="color-picker" id="cp">
        <div data-color="a88832" data-type="one" @click="handleColorClick('a88832', 'one')"></div>
        <div data-color="262e3e" data-type="two" @click="handleColorClick('262e3e', 'two')"></div>
        <div data-color="323846" data-type="three" @click="handleColorClick('323846', 'three')"></div>
      </div> -->
      <div class="color-picker" id="cp">
           <div data-color="a88832" data-type="one" @click="handleColorClick('a88832', 'one')"></div>
           <div data-color="262e3e" data-type="two" @click="handleColorClick('262e3e', 'two')"></div>
           <div data-color="323846" data-type="three" @click="handleColorClick('323846', 'three')"></div>
     </div>
      <div class="table-container" :class="selectedType">
        
        <div class="inner">
            <div class="table__caption flex items-center justify-between">
          <div>
            <h2 class="text-lg font-semibold text-[#dad9d9]">قیمت لحظه ای  </h2>
          <p class="table__header--sub text-[#dad9d9]">ارز </p>
          </div>
        
          <div class="flex gap-2 border-2 border-[#fff] rounded-md">
    <span
      :class="{ 'active': activeTab === 'mostPopular' }"
      @click="setActiveTab('mostPopular')"
      class="text-[#cfc9c9] cursor-pointer text-sm rounded-md w-[100px] flex items-center justify-center h-[40px] hover:bg-green-700"
    >
      محبوب ترین ها
    </span>

    <span
      :class="{ 'active': activeTab === 'newest' }"
      @click="setActiveTab('newest')"
      class="text-[#cfc9c9] cursor-pointer text-sm rounded-md w-[100px] flex items-center justify-center h-[40px] hover:bg-green-700"
    >
      جدید ترین ها
    </span>

    <span
      :class="{ 'active': activeTab === 'highestRevenue' }"
      @click="setActiveTab('highestRevenue')"
      class="text-[#cfc9c9] cursor-pointer text-sm rounded-md w-[100px] flex items-center justify-center h-[40px] hover:bg-green-700"
    >
      پرسود ترین ها
    </span>
  </div>
          
        </div>
          <table class="text-[#dad9d9]">
            <thead>
              <tr>
                <th>#</th>
                <th>ارز</th>
                <th>قیمت (دلار)</th>
                <th>قیمت فروش(تومان)</th>
                <th>قیمت خرید (تومان)</th>
                <th>تغییرات</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="flex items-center justify-center">
                    <img src="../assets/imgae/bit.png" width="30px" alt="">
                </td>
                <td>بیت کوین</td>
                <td>49800800$</td>
                <td>2656788980</td>
                <td>2134059678</td>
                <td>28%</td>
                <td>
                    <span class="px-4 py-3 cursor-pointer border border-[#b3b53b] rounded-md block hover:bg-[#8a8b3d]">خرید و فروش</span>
                </td>
              </tr>
              <tr>
                <td class="flex items-center justify-center">
                    <img src="../assets/imgae/tetr.svg" width="30px" alt="">
                </td>
                <td> تتر</td>
                <td>49800800$</td>
                <td>2656788980</td>
                <td>2134059678</td>
                <td>28%</td>
                <td>
                    <span class="px-4 py-3 cursor-pointer border border-[#b3b53b] rounded-md block hover:bg-[#8a8b3d]">خرید و فروش</span>
                </td>
              </tr>
              <tr>
                <td class="flex items-center justify-center">
                    <img src="../assets/imgae/ripple.png" width="30px" alt="">
                </td>
                <td> ریپل</td>
                <td>49800800$</td>
                <td>2656788980</td>
                <td>2134059678</td>
                <td>28%</td>
                <td>
                    <span class="px-4 py-3 cursor-pointer border border-[#b3b53b] rounded-md block hover:bg-[#8a8b3d]">خرید و فروش</span>
                </td>
              </tr>
              <tr>
                <td class="flex items-center justify-center">
                    <img src="../assets/imgae/eth.png" width="30px" alt="">
                </td>
                <td> اتریوم</td>
                <td>49800800$</td>
                <td>2656788980</td>
                <td>2134059678</td>
                <td>28%</td>
                <td>
                    <span class="px-4 py-3 cursor-pointer border border-[#b3b53b] rounded-md block hover:bg-[#8a8b3d]">خرید و فروش</span>
                </td>
              </tr>
              <tr>
                <td class="flex items-center justify-center">
                    <img src="../assets/imgae/lite.png" width="30px" alt="">
                </td>
                <td>لایت کوین</td>
                <td>49800800$</td>
                <td>2656788980</td>
                <td>2134059678</td>
                <td>28%</td>
                <td>
                    <span class="px-4 py-3 cursor-pointer border border-[#b3b53b] rounded-md block hover:bg-[#8a8b3d]">خرید و فروش</span>
                </td>
              </tr>
              <tr>
                <td class="flex items-center justify-center">
                    <img src="../assets/imgae/bin.png" width="30px" alt="">
                </td>
                <td>بین کوین</td>
                <td>49800800$</td>
                <td>2656788980</td>
                <td>2134059678</td>
                <td>28%</td>
                <td>
                    <span class="px-4 py-3 cursor-pointer border border-[#b3b53b] rounded-md block hover:bg-[#8a8b3d]">خرید و فروش</span>
                </td>
              </tr>
              <tr>
                <td class="flex items-center justify-center">
                    <img src="../assets/imgae/ter.svg" width="30px" alt="">
                </td>
                <td> ترون</td>
                <td>49800800$</td>
                <td>2656788980</td>
                <td>2134059678</td>
                <td>28%</td>
                <td>
                    <span class="px-4 py-3 cursor-pointer border border-[#b3b53b] rounded-md block hover:bg-[#8a8b3d]">خرید و فروش</span>
                </td>
              </tr>
              <tr>
                <td class="flex items-center justify-center">
                    <img src="../assets/imgae/dog.svg" width="30px" alt="">
                </td>
                <td>دوج کوین</td>
                <td>49800800$</td>
                <td>2656788980</td>
                <td>2134059678</td>
                <td>28%</td>
                <td>
                    <span class="px-4 py-3 cursor-pointer border border-[#b3b53b] rounded-md block hover:bg-[#8a8b3d]">خرید و فروش</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
  
    
    </div>
   
  </template>
  
<script>



import { ref } from 'vue';

export default {
  data() {
    return {
      activeTab: 'mostPopular',
      selectedType: '',
      
    };
  },
  methods: {
    handleColorClick(color, type) {
      this.selectedType = type;

      this.$nextTick(() => {
        const innerTable = document.querySelector('.inner table');
        const tableHeader = document.querySelector('.table__header');

        if (innerTable) {
          innerTable.style.backgroundColor = `#${color}`;
        }

        if (tableHeader) {
          tableHeader.style.color = `#${color}`;
        }
      });
    },
    setActiveTab(tab) {
    this.activeTab = tab;
  },
  },
};



</script>
<style scoped>

.active {
  background-color: green;

}
.color-picker {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  margin: 2em auto 0.5em;
  height: 150px;
}
.color-picker .active {
  transform: scale(1.1);
}
.color-picker div {
  position: relative;
  height: 5em;
  width: 5em;
  border-radius: 0.5em;
  background: #fff;
  cursor: pointer;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
}
.color-picker div:before {
  content: "#3bb54b";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  font-family: inherit;
  font-size: 0.8em;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.5px;
  color: #797e8e;
  border-radius: 0 0 0.5em 0.5em;
}
.color-picker div:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 1em;
  height: 1em;
  background-color: #fff;
  border-radius: 100%;
  z-index: -1;
  box-shadow: 0 5px 30px -5px #a88832;
}
.color-picker div:nth-child(1):after {
  box-shadow: 0 5px 30px -5px #a88832;
}
.color-picker div:nth-child(2):after {
  box-shadow: 0 5px 30px -5px #262e3e;
}
.color-picker div:nth-child(3):after {
  box-shadow: 0 5px 30px -5px #323846;
}
.color-picker div:nth-child(1) {
  background-color: #a88832;
}
.color-picker div:nth-child(2) {
  background-color: #262e3e;
}
.color-picker div:nth-child(3) {
  background-color: #323846;
}

.table-container {
  /* position: relative;
  top: 5rem; */
  width: 100%;
  max-width: 1200px;
  min-width: 500px;
  margin: 0 auto 5em;
}
.table-container .inner {
  position: relative;
  background-color: #3b414e;
  border-radius: 0.6em;

  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
}
.table-container table {
  /* table-layout: fixed; */
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  background-color: #3b414e;
  overflow: hidden;
}
.table-container table tbody,
.table-container table thead {
  padding: 0 1em;
}
.table-container table tr:not(:last-child) {
  border-bottom: 1px solid #464c59;
}
.table-container tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.table-container thead tr {
  border-bottom: 1px solid #464c59;
}
.table-container thead th {
  padding: 4em 1em 1em;
}
.table-container th,
.table-container td {
  padding: 0.6em 1em;
  word-break: break-all;
}
.table-container.one tr:not(:last-child) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
.table-container.one thead tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
.table__caption {
  position: absolute;
  top: -2em;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  margin: 0 auto;
  max-width: 95%;
  margin: 0 auto;
  padding: 0.6em 1em;
  border-radius: 0.6em;
  background-color: #424959;
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.4);
  z-index: 10;
}

.table__header--sub {
  font-size: 0.9em;
}

::-moz-selection {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
}

::selection {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
}


</style>