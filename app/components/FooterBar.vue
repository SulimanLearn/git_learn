<template>
  <footer class="footer" dir="rtl">
    <div class="footer-inner">
      <div class="footer-contact">
        <div class="footer-row"><span class="fi">✉</span><span>rewaa.mental@gmail.com</span></div>
        <div class="footer-row"><span class="fi">📍</span><span>Saudi Arabia, Alriad, 40 St.</span></div>
        <div class="footer-row"><span class="fi">📞</span><span>+96610002000</span></div>
      </div>
      <div class="footer-divider"></div>
      <div class="footer-social">
        <h4>تواصل معنا</h4>
        <div class="social-icons">
          <a href="#" class="social-btn">WhatsApp</a>
          <a href="#" class="social-btn">LinkedIn</a>
          <a href="#" class="social-btn">Instagram</a>
          <a href="#" class="social-btn">Facebook</a>
          <a href="#" class="social-btn">X</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer { background: #5a6b60; color: #fff; padding: 28px 24px; font-family: 'Tajawal','Cairo',sans-serif; }
.footer-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; gap: 40px; }
.footer-contact { flex: 1; }
.footer-row { display: flex; align-items: center; gap: 8px; font-size: 13px; margin-bottom: 6px; color: rgba(255,255,255,0.85); }
.fi { font-size: 14px; }
.footer-divider { width: 1px; height: 60px; background: rgba(255,255,255,0.3); }
.footer-social h4 { font-size: 14px; margin-bottom: 10px; }
.social-icons { display: flex; gap: 8px; flex-wrap: wrap; }
.social-btn { background: rgba(255,255,255,0.15); color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 12px; text-decoration: none; transition: background 0.2s; }
.social-btn:hover { background: rgba(255,255,255,0.3); }
</style>