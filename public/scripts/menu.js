document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "preferred-language";
  const body = document.body;
  const locale = body?.dataset.locale;
  const pageKind = body?.dataset.pageKind;
  const preferredLocale = window.localStorage.getItem(storageKey);

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

  function closeOtherMenus(currentMenu) {
    menus.forEach((menu) => {
      if (menu !== currentMenu) {
        menu.removeAttribute("open");
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

    summary.addEventListener("click", () => {
      if (!menu.hasAttribute("open")) {
        closeOtherMenus(menu);
      }
    });

    overlay.addEventListener("click", () => {
      menu.removeAttribute("open");
    });

    document.addEventListener("click", (event) => {
      if (!menu.hasAttribute("open")) {
        return;
      }

      if (menu.contains(event.target)) {
        return;
      }

      menu.removeAttribute("open");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        menu.removeAttribute("open");
      }
    });
  });
});
