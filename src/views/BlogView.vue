<template>
  <div class="blog">
    <div class="max-w-screen-lg mx-auto">
      <main class="mt-12">
        <!-- featured section -->
        <div class="flex flex-wrap md:flex-no-wrap mb-16">
          <!-- main post -->
          <div
            class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 relative rounded block lg:border-2"
          >
            <img
              src="../assets/imgae/photo1.jpg"
              class="rounded-md object-cover w-full opacity-80 h-64"
            />
            <div class="p-4" style="direction: rtl">
              <span class="text-green-700 text-sm hidden md:block mt-4">
                فن آوری
              </span>
              <h1
                class="text-gray-800 text-2xl font-bold mt-2 mb-2 leading-tight"
              >
                فن آوری و ارتباطات این سایت در زمینه خرید بیت کویین و ارز
                دیجیتال
              </h1>
              <p class="text-gray-600 mb-4">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <div class="text-left">
                <RouterLink to="/blog/BlogPageView"  class="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">مشاهده بیشتر</RouterLink>
                <!-- <a
                  href="#"
                  class="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100"
                >
                  مشاهده بیشتر
                </a> -->
              </div>
            </div>
          </div>

          <!-- sub-main posts -->
          <div class="w-full md:w-4/7 mt-5" dir="rtl">
            <h1
              class="md:mt-0 text-gray-800 font-semibold text-2xl mb-2 px-2 lg:px-0 py-10"
            >
              مطالب ارز دیجیتال
            </h1>
            <!-- post 1 -->
            <div
              class="rounded w-full flex flex-col md:flex-row mb-10 lg:border-2"
            >
              <img
                src="../assets/imgae/photo2.jpg"
                class="block md:block rounded-md h-64 md:h-32 m-4 md:m-0"
              />
              <div class="bg-white rounded px-4">
                <a href="#">
                  <span class="text-green-700 text-sm hidden md:block">
                    ابزار ها
                  </span>
                </a>
                <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                </div>
                <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </div>

            <!-- post 2 -->
            <div
              class="rounded w-full flex flex-col md:flex-row mb-10 lg:border-2"
            >
              <img
                src="../assets/imgae/photo5.jpg"
                class="block md:block rounded-md h-64 md:h-32 m-4 md:m-0"
              />
              <div class="bg-white rounded px-4">
                <span class="text-green-700 text-sm hidden md:block">
                  بیت کویین
                </span>
                <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                </div>
                <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </div>
            <!-- post 3 -->
            <div
              class="rounded w-full flex flex-col md:flex-row mb-10 lg:border-2"
            >
              <img
                src="../assets/imgae/photo6.jpg"
                class="block md:block rounded-md h-64 md:h-32 m-4 md:m-0"
              />
              <div class="bg-white rounded px-4">
                <span class="text-green-700 text-sm hidden md:block">
                  بینش ها
                </span>
                <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                </div>
                <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </div>
            <!-- post 4 -->
            <div
              class="rounded w-full flex flex-col md:flex-row mb-10 lg:border-2"
            >
              <img
                src="../assets/imgae/photo7.jpg"
                class="block md:block rounded-md h-64 md:h-32 m-4 md:m-0"
              />
              <div class="bg-white rounded px-4">
                <span class="text-green-700 text-sm hidden md:block">
                  ارز دیجیتال
                </span>
                <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                </div>
                <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- end featured section -->

        <!-- recent posts -->
        <div
          class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between"
          dir="rtl"
        >
          <h2 class="font-bold text-3xl">آخرین خبرها</h2>
          <a
            class="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer"
          >
            مشاهده همه
          </a>
        </div>
        <div class="block space-x-0 lg:flex lg:space-x-6">
          <div class="rounded w-full lg:w-1/3 p-4 lg:p-0 lg:border-2">
            <img
              src="../assets/imgae/photo3.jpg"
              class="rounded"
              alt="technology"
            />
            <div class="p-4 pl-0">
              <div dir="rtl">
                <h2 class="font-bold text-2xl text-gray-800">
                  قرار دادن همه صحبت کردن ظریف او ممکن است.
                </h2>
                <p class="text-gray-700 mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای
                </p>
              </div>

              <div class="pl-1">
                <a
                  href="#"
                  class="inline-block px-6 py-2 mt-2 rounded-md text-green-500"
                >
                  مشاهده بیشتر
                </a>
              </div>
            </div>
          </div>

          <div class="rounded w-full lg:w-1/3 p-4 lg:p-0 lg:border-2">
            <img
              src="../assets/imgae/photo8.jpg"
              class="rounded"
              alt="technology"
            />
            <div class="p-4 pl-0">
              <div dir="rtl">
                <h2 class="font-bold text-2xl text-gray-800">
                  نحوه خرید و فروش ارز دیجیتال
                </h2>
                <p class="text-gray-700 mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای
                </p>
              </div>

              <div class="pl-1">
                <a
                  href="#"
                  class="inline-block px-6 py-2 mt-2 rounded-md text-green-500"
                >
                  مشاهده بیشتر
                </a>
              </div>
            </div>
          </div>

          <div class="rounded w-full lg:w-1/3 p-4 lg:p-0 lg:border-2">
            <img
              src="../assets/imgae/photo9.jpg"
              class="rounded"
              alt="technology"
            />
            <div class="p-4 pl-0">
              <div dir="rtl">
                <h2 class="font-bold text-2xl text-gray-800">
                  نحوه ساخت حساب کاربری
                </h2>
                <p class="text-gray-700 mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای
                </p>
              </div>

              <div class="pl-1">
                <a
                  href="#"
                  class="inline-block px-6 py-2 mt-2 rounded-md text-green-500"
                >
                  مشاهده بیشتر
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- end recent posts -->

        <!-- subscribe -->
        <div class="rounded flex md:shadow mt-12" dir="rtl">
          <img
            src="../assets/imgae/photo4.jpg"
            class="w-0 md:w-1/4 object-cover rounded-l"
          />
          <div class="px-4 py-2">
            <h3 class="text-3xl text-gray-800 font-bold">
              مشترک شدن در خبرنامه
            </h3>
            <p class="text-xl text-gray-700">
              ما آخرین اخبار و پست ها را هر هفته یک بار، تازه ارسال می کردیم
            </p>
            <form class="mt-4 mb-10">
              <input
                type="email"
                class="rounded bg-gray-100 px-4 py-2 border focus:border-green-400"
                placeholder="john@tech.com"
              />
              <button class="px-4 py-2 rounded bg-green-800 text-gray-100">
                اشتراک در
                <i class="bx bx-right-arrow-alt"></i>
              </button>
              <p class="text-green-900 opacity-50 text-sm mt-1">بدون تبلیغات</p>
            </form>
          </div>
        </div>
        <!-- ens subscribe section -->

        <!-- popular posts -->
        <div
          class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between"
          dir="rtl"
        >
          <h2 class="font-bold text-3xl">پربازید ترین خبرها</h2>
          <a
            class="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer"
          >
            مشاهده همه
          </a>
        </div>
        <div class="block space-x-0 lg:flex lg:space-x-6 pb-10">
          <div class="rounded w-full lg:w-1/3 p-4 lg:p-0 lg:border-2">
            <img
              src="../assets/imgae/photo10.jpg"
              class="rounded"
              alt="technology"
            />
            <div class="p-4 pl-0">
              <div dir="rtl">
                <h2 class="font-bold text-2xl text-gray-800">
                  نحوه ساخت حساب کاربری
                </h2>
                <p class="text-gray-700 mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای
                </p>
              </div>

              <div class="pl-1">
                <a
                  href="#"
                  class="inline-block px-6 py-2 mt-2 rounded-md text-green-500"
                >
                  مشاهده بیشتر
                </a>
              </div>
            </div>
          </div>

          <div class="rounded w-full lg:w-1/3 p-4 lg:p-0 lg:border-2">
            <img
              src="../assets/imgae/photo8.jpg"
              class="rounded"
              alt="technology"
            />
            <div class="p-4 pl-0">
              <div dir="rtl">
                <h2 class="font-bold text-2xl text-gray-800">
                  نحوه ساخت حساب کاربری
                </h2>
                <p class="text-gray-700 mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای
                </p>
              </div>

              <div class="pl-1">
                <a
                  href="#"
                  class="inline-block px-6 py-2 mt-2 rounded-md text-green-500"
                >
                  مشاهده بیشتر
                </a>
              </div>
            </div>
          </div>

          <div class="rounded w-full lg:w-1/3 p-4 lg:p-0 lg:border-2">
            <img
              src="../assets/imgae/photo9.jpg"
              class="rounded"
              alt="technology"
            />
            <div class="p-4 pl-0">
              <div dir="rtl">
                <h2 class="font-bold text-2xl text-gray-800">
                  نحوه ساخت حساب کاربری
                </h2>
                <p class="text-gray-700 mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای
                </p>
              </div>

              <div class="pl-1">
                <a
                  href="#"
                  class="inline-block px-6 py-2 mt-2 rounded-md text-green-500"
                >
                  مشاهده بیشتر
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- end popular posts -->
      </main>
      <InvitaionComponent />
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div
            class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8"
            dir="rtl"
          >
            <h2
              class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-800 dark:text-white"
            >
              سایر خبرها
            </h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              ما از یک رویکرد چابک برای آزمایش مفروضات و ارتباط زودهنگام و اغلب
              با نیازهای مخاطبان شما استفاده می کنیم.
            </p>
          </div>
          <div class="grid gap-8 lg:grid-cols-2">
            <article
              class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              dir="rtl"
            >
              <div class="flex justify-between items-center mb-5 text-gray-500">
                <span
                  class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
                >
                  <svg
                    class="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                    ></path>
                  </svg>
                  آموزش
                </span>
                <span class="text-sm">14 روز قبل</span>
              </div>
              <h2
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                <a href="#"> نحوه استقرار سریع یک وب سایت استاتیک </a>
              </h2>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                وب‌سایت‌های استاتیک اکنون برای راه‌اندازی بسیاری از وب‌سایت‌ها
                استفاده می‌شوند و در حال تبدیل شدن به پایه‌ای برای ابزارهای
                مختلفی هستند که حتی بر طراحان وب و توسعه‌دهندگان هم بر طراحان وب
                و هم بر توسعه‌دهندگان تأثیر می‌گذارند.
              </p>
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                  <img
                    class="w-7 h-7 rounded-full"
                    src="../assets/imgae/photo10.png"
                    alt="Jese Leos avatar"
                  />
                  <span class="font-medium dark:text-white">
                    میلاد فاضلیان
                  </span>
                </div>
                <a
                  href="#"
                  class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                 مشاهده بیشتر
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
            <article
              class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              dir="rtl"
            >
              <div class="flex justify-between items-center mb-5 text-gray-500">
                <span
                  class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
                >
                  <svg
                    class="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                    ></path>
                  </svg>
                  مقاله
                </span>
                <span class="text-sm">ماه گذشته  </span>
              </div>
              <h2
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                <a href="#">
                  اولین پروژه ما با React
                </a>
              </h2>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                وب سایت های استاتیک در حال حاضر برای بوت استرپ بسیاری از وب سایت ها و
                در حال تبدیل شدن به پایه ای برای انواع ابزارهایی هستند که حتی
                هم طراحان وب و هم توسعه دهندگان وب را تحت تأثیر قرار می دهند
                طراحان و توسعه دهندگان
              </p>
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                  <img
                    class="w-7 h-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Green avatar"
                  />
                  <span class="font-medium dark:text-white">
                    خانوم گل محمدی
                  </span>
                </div>
                <a
                  href="#"
                  class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                 مشاهده بیشتر
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      
    </div>

  </div>
</template>
<script>
  import { RouterLink } from 'vue-router';

</script>
<style scoped>


</style>
