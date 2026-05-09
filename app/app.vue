<template>
  <div class="min-h-screen flex flex-col bg-black text-white font-tajawal" dir="rtl">
    
    <NuxtRouteAnnouncer />

    <AppHeader />

    <main >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>

    <AppFooter />
    
  </div>
</template>

<script setup>
// تأكد أن أسماء المكونات AppHeader و AppFooter تطابق الملفات الموجودة في مجلد components
</script>

<style>
/* تأكد من أن الـ body لا يحتوي على هوامش تخرب التصميم */
body {
  margin: 0;
  padding: 0;
}
</style>