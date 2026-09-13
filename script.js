"use strict";

// Offer a visible choice instead of relying on a configured mailto handler.
// Without dialog support or JavaScript, the original links still open Gmail.
const emailDialog = document.querySelector("#email-dialog");
if (emailDialog && typeof emailDialog.showModal === "function") {
  const emailAddress = emailDialog.querySelector(".email-address");
  const emailStatus = emailDialog.querySelector(".email-status");
  let emailOpener;
  document.querySelectorAll("[data-email-options]").forEach((link) => {
    link.setAttribute("role", "button");
    link.setAttribute("aria-haspopup", "dialog");
    link.setAttribute("aria-controls", "email-dialog");
    link.setAttribute("aria-label", link.classList.contains("contact-arrow")
      ? "Choose how to email Areen"
      : "areenali98@gmail.com — choose email options");
    link.addEventListener("click", (event) => {
      // Keep standard modified-click behavior for the Gmail fallback link.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      emailOpener = link;
      emailStatus.textContent = "";
      emailDialog.showModal();
      document.documentElement.classList.add("email-dialog-open");
    });
    link.addEventListener("keydown", (event) => {
      if (event.key === " ") {
        event.preventDefault();
        link.click();
      }
    });
  });
  emailDialog.addEventListener("close", () => {
    document.documentElement.classList.remove("email-dialog-open");
    emailOpener?.focus();
  });
  emailDialog.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const controls = emailDialog.querySelectorAll("a[href], button, input");
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  emailDialog.addEventListener("click", (event) => {
    if (event.target !== emailDialog) return;
    const bounds = emailDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      emailDialog.close();
    }
  });
  emailDialog.querySelector(".copy-email").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(emailAddress.value);
      emailStatus.textContent = "Email address copied.";
    } catch {
      emailAddress.focus();
      emailAddress.select();
      emailStatus.textContent = "Select Copy on your device, or press Ctrl+C (⌘C on Mac).";
    }
  });
}

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
if (menuButton && navigation) {
  document.documentElement.classList.add("js");
  menuButton.hidden = false;
  const setMenu = (isOpen) => {
    navigation.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.querySelector("span").textContent = isOpen ? "−" : "+";
  };
  menuButton.addEventListener("click", () =>
    setMenu(menuButton.getAttribute("aria-expanded") !== "true"),
  );
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      setMenu(false);
      menuButton.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) setMenu(false);
  });
  window
    .matchMedia("(min-width: 801px)")
    .addEventListener("change", () => setMenu(false));
}

// The direct demo link works without JavaScript. Load Google's player only on request.
const demoButton = document.querySelector(".inline-demo-button");
if (demoButton) {
  const container = document.querySelector(".video-container");
  const project = demoButton.closest("details");
  const closeDemo = () => {
    container.replaceChildren();
    container.hidden = true;
    demoButton.setAttribute("aria-expanded", "false");
    demoButton.textContent = "Play demo here ▷";
  };
  demoButton.hidden = false;
  demoButton.setAttribute("aria-expanded", "false");
  demoButton.addEventListener("click", () => {
    const isOpen = !container.hidden;
    if (isOpen) {
      closeDemo();
    } else {
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://drive.google.com/file/d/1sHNVjFjrPdqvWSs9DqRC5s-tk4BaKvtF/preview";
      iframe.title =
        "Optimal Route API with Cost-Effective Fuel Stops — project demo";
      iframe.allow = "fullscreen";
      iframe.allowFullscreen = true;
      container.append(iframe);
    }
    container.hidden = isOpen;
    demoButton.setAttribute("aria-expanded", String(!isOpen));
    demoButton.textContent = isOpen ? "Play demo here ▷" : "Close demo ×";
  });
  // Collapsing the project must also stop a playing video.
  project.addEventListener("toggle", () => {
    if (!project.open) closeDemo();
  });
}
