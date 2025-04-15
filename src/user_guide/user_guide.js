import "./user_guide.css";
import { pageContent } from "../index";

export default function createUserGuide() {
  fetch("UserGuide.html")
    .then((response) => response.text())
    .then((data) => {
      const userGuide = document.createElement("div");
      userGuide.innerHTML = data;
      const userGuideScripts = []

      const header = document.createElement("h1");
      header.classList.add("user-guide-header");
      pageContent.appendChild(header);


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
              script.setAttribute("data-loaded-by", "quarto");
              userGuideScripts.push(script);
            userGuide.removeChild(element);
        }
        try{
        pageContent.appendChild(element);
        } catch (error) {
          userGuide.removeChild(element);
        }
      }
      for(const s of userGuideScripts) {
        document.head.appendChild(s);
      }

      setTimeout(() => {
        const tocEvent = new Event("DOMContentLoaded");
        document.dispatchEvent(tocEvent);
        window.dispatchEvent(new Event("scroll")); // retrigger scroll tracking
      }, 300);

    })
    .catch((error) => {
      console.error("Error loading user guide:", error);
    });
}