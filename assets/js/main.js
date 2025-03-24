// 返回顶部按钮显示控制
window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  };
  
  // 返回顶部动作
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 主题切换（黑/白）
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-bs-theme", newTheme);
  }


  const translations = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_contact: "Contact",
      toggle_theme: "Toggle Theme",
  
      title_synopsis: "SYNOPSIS",
      title_skills: "Skills 🛠️",
      title_projects: "My Projects 💻",
  
      about_title: "About Me 💬",
      about_alias: "Alias",
      about_occupation: "Occupation",
      about_student: "Student",
      about_university: "University",
      about_uniname: "The University of Auckland",
      about_description: "Hi! I'm YDLZXZQY, currently pursuing Computer Systems Engineering at The University of Auckland. I love building things with code 🧠, exploring creative designs 🎨, and vibing with good music 🎵.",
  
      skill_java: "Java",
      skill_cpp: "C++",
      skill_web: "Web Dev",
      skill_git: "Git",
      skill_uiux: "UI/UX",
      skill_bootstrap: "Bootstrap",
      skill_python: "Python",
  
      proj_portfolio_title: "Portfolio Website 🌐",
      proj_portfolio_desc: "A personal website created using HTML, CSS, and Bootstrap. Designed to reflect both professionalism and personality, with a dark theme and responsive layout.",
      proj_portfolio_btn: "You're looking at it!",
  
      proj_mario_title: "Mario Platformer Game 🍄",
      proj_mario_desc: "A side-scrolling platformer inspired by Mario, developed in Java. Includes custom level design, enemy AI, gravity, and smooth character movement.",
      proj_mario_btn: "View Demo",
  
      footer_quote1: "Things change, roll with it.",
      footer_quote2: "Love 66, Love life!",
      footer_copyright: "© 2024 YDLZXZQY. All rights reserved."
    },
  
    zh: {
      nav_home: "首页",
      nav_about: "关于",
      nav_contact: "联系",
      toggle_theme: "切换主题",
  
      title_synopsis: "简介",
      title_skills: "技能 🛠️",
      title_projects: "我的项目 💻",
  
      about_title: "关于我 💬",
      about_alias: "昵称",
      about_occupation: "职业",
      about_student: "学生",
      about_university: "学校",
      about_uniname: "奥克兰大学",
      about_description: "你好！我是 YDLZXZQY，目前就读于奥克兰大学计算机系统工程专业。我热爱编码 🧠，喜欢创意设计 🎨，也享受音乐带来的快乐 🎵。",
  
      skill_java: "Java",
      skill_cpp: "C++",
      skill_web: "前端开发",
      skill_git: "Git",
      skill_uiux: "界面设计",
      skill_bootstrap: "Bootstrap",
      skill_python: "Python",
  
      proj_portfolio_title: "个人作品网站 🌐",
      proj_portfolio_desc: "使用 HTML、CSS 和 Bootstrap 构建的个人网站，黑暗主题、响应式布局，展示我的专业与个性。",
      proj_portfolio_btn: "你正在看！",
  
      proj_mario_title: "马里奥平台跳跃游戏 🍄",
      proj_mario_desc: "一款受马里奥启发的横版平台跳跃游戏，使用 Java 开发，包含自定义关卡、敌人 AI、重力和流畅动作。",
      proj_mario_btn: "查看演示",
  
      footer_quote1: "事物会改变，顺其自然。",
      footer_quote2: "爱 66，爱生活！",
      footer_copyright: "© 2024 YDLZXZQY. 保留所有权利。"
    },
  
  };

  // 语言切换逻辑
document.getElementById("languageSelect").addEventListener("change", function () {
    const selectedLang = this.value;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[selectedLang] && translations[selectedLang][key]) {
        el.textContent = translations[selectedLang][key];
      }
    });
  });
  
  
  
  