import "../user_guide/user_guide.css";
import { pageContent } from "../index";

export default function createUserGuide() {
  // After everything is appended:
  setTimeout(() => {
    const tocEvent = new Event("DOMContentLoaded");
    document.dispatchEvent(tocEvent);
    window.dispatchEvent(new Event("scroll")); // retrigger scroll tracking
  }, 1000);
  fetch("Deployment.html")
    .then((response) => response.text())
    .then((data) => {
      const userGuide = document.createElement("div");
      userGuide.innerHTML = data;

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
          document.head.appendChild(script);
        }
        pageContent.appendChild(element);
      }
    })
    .catch((error) => {
      console.error("Error deployment guide:", error);
    });
}

