import "../user_guide/user_guide.css";
import { pageContent } from "../index";

export default function createDeployment() {
  fetch("Deployment.html")
    .then((response) => response.text())
    .then((data) => {
      const deployment = document.createElement("div");
      deployment.innerHTML = data;
      const deploymentScripts = []

      const header = document.createElement("h1");
      header.classList.add("deployment-header");
      pageContent.appendChild(header);

      while (deployment.firstChild) {
        const element = deployment.firstChild;
        // Re-execute scripts
        if (element.tagName === "SCRIPT") {
          // Create a new script element
          const script = document.createElement("script");
          if (element.src) {
            script.src = element.src;
          } else {
            script.textContent = element.textContent;
          }
            // Check for module level scripts (Only one Quarto imports is  sectionChanged)
            if (typeof window["sectionChanged"] === "undefined") {
              script.setAttribute("data-loaded-by", "quarto");
              script.type = "module";
              deploymentScripts.push(script);
            }
            deployment.removeChild(element);
        }
        try{
          pageContent.appendChild(element);
        } catch (error) {
          deployment.removeChild(element);
        }
      }

      console.log("User guide scripts:", deploymentScripts);
      for(const s of deploymentScripts) {
        // console.log("Deployment script loaded:", s.src || s.textContent);
        document.head.appendChild(s);
      }

      setTimeout(() => {
        console.log("Dispatching scroll event2");
        const tocEvent = new Event("DOMContentLoaded");
        document.dispatchEvent(tocEvent);
        window.dispatchEvent(new Event("scroll")); // retrigger scroll tracking
      }, 100);
    })
    .catch((error) => {
      console.error("Error deployment guide:", error);
    });
}

