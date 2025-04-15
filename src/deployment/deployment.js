import "../user_guide/user_guide.css";
import { pageContent } from "../index";

export default function createDeployment() {
  // After everything is appended:
  setTimeout(() => {
    const tocEvent = new Event("DOMContentLoaded");
    document.dispatchEvent(tocEvent);
    window.dispatchEvent(new Event("scroll")); // retrigger scroll tracking
  }, 1000);
  fetch("deployment.html")
    .then((response) => response.text())
    .then((data) => {
      const deployment = document.createElement("div");
      deployment.innerHTML = data;

      const header = document.createElement("h1");
      header.classList.add("deployment-header");
      pageContent.appendChild(header);

      const scripts = deployment.querySelectorAll('script[type="module"]');
      scripts.forEach(script => deployment.removeChild(script));

      while (deployment.firstChild) {
        const element = deployment.firstChild;

        
        // Re-execute scripts
        if (element.tagName === "SCRIPT") {
          const script = document.createElement("script");
          if (element.src) {
            console.log("src", element.src);
            script.src = element.src;
          } else {
            console.log("textContent", element.textContent);
            script.textContent = element.textContent;
          }
          try{
            script.setAttribute("data-loaded-by", "quarto");
          document.head.appendChild(script);
          } catch (error) {
            deployment.removeChild(element);
            continue
          }
        }
        try{
        pageContent.appendChild(element);
        } catch (error) {
          deployment.removeChild(element);

        }
      }
    })
    .catch((error) => {
      console.error("Error deployment guide:", error, script);
    });
}

