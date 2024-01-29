<template>
  <div class="SectionTwoHome w-full min-h-[1200px] bg-[#25303b] pb-[80px]">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div
        class="BtnSectionTwoRight flex gap-2 h-16 items-center justify-center md:justify-start p-2 w-2/3"
      >
        <span>همه</span>
        <span>داغ ترین ها</span>
        <span>بیشترین سود</span>
        <span>بیشترین ضرر</span>
      </div>
      <div
        class="BtnSectionTwoLeft flex justify-center gap-2 h-16 md:justify-end p-2 w-1/3 items-center"
      >
        <span>USDT</span>
        <span>BTC</span>
        <span>تومان</span>
      </div>
      <div></div>
    </div>
   <div class="flex flex-wrap w-[80%] justify-center items-center mx-auto my-5">
    <div class="p-4"  v-for="crypto in CryptoData" :key="crypto.id">
      <div class="cardSectionTwoHome w-[280px] md:w-[330px] h-[315px] rounded-xl bg-[#1c2733]">
        <div class="w-full p-4 flex items-center justify-between">
          <div class="flex gap-1 justify-center items-center">
            <div>
              <img src="../assets/imgae/bit.png" alt="" />
            </div>
            <div>
              <p class="text-[#f7f7f7] text-xs">{{ crypto.name }}</p>
              <p class="text-[#989EA5] text-xs">{{ crypto.pair }} </p>
            </div>
          </div>
          <div>
            <p style="direction: ltr" class="text-[#63db45] text-xs">
              <span>{{ crypto.value }}</span>
              <span class="text-[#989EA5] text-[10px]">USDT</span>
            </p>
            <p style="direction: ltr" class="text-[#c94a4a] text-xs">
              <span>{{ crypto.percentage }}</span>
              <span class="text-[#989EA5] text-[10px]">%</span>
            </p>
          </div>
        </div>
        <div class="p-4">
          <span class="text-[#989EA5] text-sm">معاملات 24 ساعت اخیر : </span>
          <span class="text-[#c5dd5c] text-sm">{{ crypto.transactions }}</span>
          <span class="pl-1 text-sm text-[#989EA5]">B</span>
        </div>
        <div class="p-4 flex justify-between items-center">
          <div class="w-2/6">
            <span class="text-[#989EA5] text-sm"> نمودار ساعتی : </span>
          </div>
          <div>
            <div >
              <Line :data="chartData" :options="chartOptions" style="width: 200px; height: 100px;"/>
          <!-- نمودار -->
       
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center gap-3">
            <button class="border-2 w-[130px] h-10 rounded-xl p-2 flex items-center justify-center text-sm text-[#989ea5] hover:bg-[#FFA115] hover:text-white">معامله سریع</button>
            <button class="border-2 w-[130px] h-10 rounded-xl p-2 flex items-center justify-center text-sm text-[#989ea5] hover:bg-[#FFA115] hover:text-white">معامله حرفه ای</button>
        </div>
      </div>
    </div>
   </div>
   <div class="flex items-center justify-center h-32">
        <button class="flex w-[200px] h-12 border-2  rounded-xl p-2  items-center justify-center text-sm text-[#989ea5] hover:bg-[#FFA115] hover:text-white">نمایش بیشتر</button>
   </div>
  </div>
</template>


<script>

 import CryptoData from "../../CryptoData";



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import * as chartConfig from '../../chart.config.js';
console.log(chartConfig.data);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Line
  },
  data : function () {
    
    return {
      chartData: chartConfig.data,
      chartOptions: chartConfig.options,
      CryptoData: CryptoData
    };
    

  }
  
}
</script>
<style scoped>
.SectionTwoHome {
  direction: rtl;
}
.cardSectionTwoHome {
  box-shadow: 0px 2px 6px 2px rgba(245, 245, 245, 0.11),
    0px 1px 2px 0px rgba(245, 245, 245, 0.11);
   
}

.BtnSectionTwoRight span {
  border-radius: 20px;
  border: 1px solid #808080;
  background: #25303b;
  display: flex;
  width: 104.22px;
  height: 41px;
  padding: 11px 13.8px 11px 14px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  cursor: pointer;
}
.BtnSectionTwoRight span:hover {
  border-radius: 20px;
  border: 1px solid #ffb115;
  background: #ffb115;
  color: #25303b;
  border: 2px solid #253038;
}
.BtnSectionTwoLeft span {
  border-radius: 20px;
  border: 1px solid #808080;
  background: #25303b;
  display: flex;
  width: 80.22px;
  height: 41px;
  padding: 11px 13.8px 11px 14px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: white;
  font-size: 12px;
  cursor: pointer;
}
.BtnSectionTwoLeft span:hover {
  border-radius: 20px;
  border: 1px solid #ffb115;
  background: #ffb115;
  color: #25303b;
  border: 2px solid #253038;
}
</style>
