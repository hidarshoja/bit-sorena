<template>
    <div class="boxComments  flex items-start justify-between p-3 w-[80%] md:w-[440px] h-[137px] rounded-xl bg-[#1C2733]">
          
          <div class="flex flex-col   justify-between h-[100%] w-full">
           
           <div>
            <p class="text-[#f7f7f7] text-xs text-right">   
                 {{ dic }}
            </p>
           </div>
           <div class="flex items-start justify-end gap-2">
               <p class="text-[#f7f7f7] text-xs"> {{ username }}</p>
               <p  class="text-[#b4b2b2] text-xs"> {{ side }}</p>
               <p class="text-[#f7f7f7] text-xs">
               {{ data }}
              </p>
            </div>
            
                
            
          </div>
    </div>
</template>
<style scoped>
.boxComments{
box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.20);
border-top: 10px solid #F85A2A;
}
.boxImage img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
</style>
<script>

    export default {
     props :['username' , 'side' , 'data' , 'dic' ]
  }
</script>