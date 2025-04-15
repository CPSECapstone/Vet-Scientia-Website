import "./user_guide.css";
import { pageContent } from "../index";

export default function createUserGuide() {
  // After everything is appended:
  setTimeout(() => {
    const tocEvent = new Event("DOMContentLoaded");
    document.dispatchEvent(tocEvent);
    window.dispatchEvent(new Event("scroll")); // retrigger scroll tracking
  }, 1000);
  fetch("UserGuide.html")
    .then((response) => response.text())
    .then((data) => {
      const userGuide = document.createElement("div");
      userGuide.innerHTML = data;

      const header = document.createElement("h1");
      header.classList.add("user-guide-header");
      pageContent.appendChild(header);

      const scripts = userGuide.querySelectorAll('script[type="module"]');
      scripts.forEach(script => userGuide.removeChild(script));

      while (userGuide.firstChild) {
        const element = userGuide.firstChild;

        // Re-execute scripts
        if (element.tagName === "SCRIPT") {
          const script = document.createElement("script");
          if (element.src) {
            script.src = element.src;
          } else {
            script.textContent = element.textContent;
          }
          try{
            if (typeof window[scriptName] === "undefined") {
          script.setAttribute("data-loaded-by", "quarto");
          document.head.appendChild(script);
          console.log("script added", script);
            }
          } catch (error) {
            userGuide.removeChild(element);
            continue
          }
        }
        try{
        pageContent.appendChild(element);
        } catch (error) {
          userGuide.removeChild(element);
        }
      }
    })
    .catch((error) => {
      console.error("Error loading user guide:", error);
    });
}