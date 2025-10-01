/* ========== 多语言配置 ========== */
let currentLang = localStorage.getItem("language") || "zh";

const translations = {
  zh: {
    // 顶部按钮 / 工具
    musicTooltip: "单击播放/暂停 · 长按切歌",
    backHome: "返回大脑皮层",
    back: "返回",

    // 首页卡片
    commissionArea: "委托区",
    fanArea: "同人区",
    originalArea: "原创区",

    // 委托子分类
    bwCommission: "黑白委托",
    colorCommission: "彩色委托",
    commissionDetails: "委托明细",

    // 同人子分类
    illustration: "插画",
    mp100: "灵能百分百 - 茂灵",
    aot: "进击的巨人 - 老兵组",

    // 原创子分类
    originalWorks: "原创作品",
    characterBook: "角色设定集",
    illustrationBook: "插画合集"
  },

  en: {
    // 顶部按钮 / 工具
    musicTooltip: "Click to Play/Pause · Hold to Switch Track",
    backHome: "Return to Cortex",
    back: "Back",

    // 首页卡片
    commissionArea: "Commissions",
    fanArea: "Fanart",
    originalArea: "Original",

    // 委托子分类
    bwCommission: "B/W Commissions",
    colorCommission: "Color Commissions",
    commissionDetails: "Commission Details",

    // 同人子分类
    illustration: "Illustration",
    mp100: "Mob Psycho 100 - MobRei",
    aot: "Attack on Titan - Veterans",

    // 原创子分类
    originalWorks: "Original Works",
    characterBook: "OCs",
    illustrationBook: "Illustration"
  }
};


/* ========== 更新语言 ========== */
function updateLanguage() {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  const langToggle = document.getElementById("language-toggle");
  if (langToggle) {
    langToggle.style.backgroundImage =
      currentLang === "zh"
        ? "url('images/language-zh.png')"
        : "url('images/language-en.png')";
  }
}

/* ========== 切换语言 ========== */
function toggleLanguage() {
try { clickSound.currentTime = 0; clickSound.play(); } catch(e){}
  currentLang = currentLang === "zh" ? "en" : "zh";
  localStorage.setItem("language", currentLang);
  updateLanguage();
}

/* ========== 初始化 ========== */
window.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("language-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", toggleLanguage);
  }
  updateLanguage();
});
