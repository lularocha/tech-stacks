document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "preferred-language";
  const menuTransitionMs = 520;
  const body = document.body;
  const locale = body?.dataset.locale;
  const pageKind = body?.dataset.pageKind;
  const preferredLocale = window.localStorage.getItem(storageKey);
  const backToTopButton = document.querySelector(".back-to-top");

  if (preferredLocale && pageKind === "home" && locale && preferredLocale !== locale) {
    const target = preferredLocale === "pt" ? "/pt.html" : "/";

    if (window.location.pathname !== target) {
      window.location.replace(target);
      return;
    }
  }

  document.querySelectorAll("[data-lang-switch]").forEach((link) => {
    link.addEventListener("click", () => {
      const nextLocale = link.getAttribute("data-lang-switch");

      if (nextLocale) {
        window.localStorage.setItem(storageKey, nextLocale);
      }
    });
  });

  const menus = document.querySelectorAll(".menu");

  function finishMenuClose(menu) {
    menu.classList.remove("is-open", "is-closing");
    menu.removeAttribute("open");
  }

  function closeMenu(menu) {
    if (!menu.hasAttribute("open")) {
      return;
    }

    menu.classList.remove("is-open");
    menu.classList.add("is-closing");

    window.setTimeout(() => {
      if (menu.classList.contains("is-open")) {
        return;
      }

      finishMenuClose(menu);
    }, menuTransitionMs);
  }

  function openMenu(menu) {
    closeOtherMenus(menu);
    menu.setAttribute("open", "");
    menu.classList.remove("is-closing");

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        menu.classList.add("is-open");
      });
    });
  }

  function closeOtherMenus(currentMenu) {
    menus.forEach((menu) => {
      if (menu !== currentMenu) {
        finishMenuClose(menu);
      }
    });
  }

  menus.forEach((menu) => {
    const summary = menu.querySelector(".menu-summary");
    const overlay = menu.querySelector(".menu-overlay");
    const panel = menu.querySelector(".menu-panel");

    if (!summary || !overlay || !panel) {
      return;
    }

    summary.addEventListener("click", (event) => {
      event.preventDefault();

      if (menu.classList.contains("is-open")) {
        closeMenu(menu);
        return;
      }

      openMenu(menu);
    });

    overlay.addEventListener("click", () => {
      closeMenu(menu);
    });

    document.addEventListener("click", (event) => {
      if (!menu.hasAttribute("open")) {
        return;
      }

      if (menu.contains(event.target)) {
        return;
      }

      closeMenu(menu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu(menu);
      }
    });
  });

  if (backToTopButton) {
    const toggleBackToTop = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const threshold = scrollableHeight * 0.25;
      const shouldShow = scrollableHeight > 0 && window.scrollY >= threshold;

      backToTopButton.classList.toggle("is-visible", shouldShow);
    };

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();
  }
});
