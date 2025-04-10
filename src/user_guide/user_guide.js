import "./user_guide.css";
import { pageContent } from "../index";
export default function createUserGuide() {
  fetch("UserGuide.html")
    .then((response) => response.text())
    .then((data) => {
      const userGuide = document.createElement("div");
      userGuide.innerHTML = data;
      const header = document.createElement("h1");
      header.classList.add("user-guide-header");
      pageContent.appendChild(header);
      while (userGuide.firstChild) {
        pageContent.appendChild(userGuide.firstChild);
      }
    })
    .catch((error) => {
      console.error("Error loading user guide:", error);
    });
}
