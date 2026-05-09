<template>
  <nav class="w-full py-4 px-8 flex items-center justify-between bg-shifa-bg text-shifa-dark font-sans" dir="rtl">
    
    <div class="flex items-center gap-2">
      <div class="flex flex-col items-end">
        <span class="text-2xl font-bold leading-none">شِفاء</span>
        <span class="text-[10px] tracking-tighter">للإستشارات الطبية</span>
      </div>
      <div class="w-8 h-8 bg-shifa-dark rounded-full flex items-center justify-center text-white">
        <UIcon name="i-heroicons-lock-closed" />
      </div>
    </div>

    <ul class="hidden md:flex items-center gap-6 font-medium">
      <li>
        <NuxtLink to="/" class="border-b-2 border-shifa-dark pb-1">الرئيسية</NuxtLink>
      </li>
      <li><NuxtLink to="/specialists" class="hover:opacity-70 transition">الأخصائيين</NuxtLink></li>
      <li><NuxtLink to="/contact" class="hover:opacity-70 transition">تواصل معنا</NuxtLink></li>
      <li><NuxtLink to="/privacy" class="hover:opacity-70 transition">سياسات الخصوصية</NuxtLink></li>
    </ul>

    <div class="flex items-center gap-3">
      <NuxtLink 
        to="/login" 
        class="px-5 py-1.5 border border-shifa-dark rounded-full hover:bg-shifa-dark hover:text-white transition"
      >
        تسجيل الدخول
      </NuxtLink>
      <NuxtLink 
        to="/register" 
        class="px-5 py-1.5 border border-shifa-dark rounded-full hover:bg-shifa-dark hover:text-white transition"
      >
        مستخدم جديد
      </NuxtLink>
    </div>

  </nav>
</template>

<script setup>
// في Nuxt 4 لا تحتاج لاستيراد أي شيء خاص للروابط البسيطة
</script>

<style scoped>
/* إضافة خط مناسب يدعم العربية مثل Tajawal أو Cairo */
nav {
  font-family: 'Tajawal', sans-serif;
}
</style>