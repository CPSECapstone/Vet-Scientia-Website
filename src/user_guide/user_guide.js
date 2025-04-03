import "./user_guide.css";
import { pageContent } from "../index";
export default function createUserGuide() {
  const userGuide = document.createElement("div");
  userGuide.classList.add("user-guide-container");
  const header = document.createElement("h1");
  header.textContent = "User Guide";
  header.classList.add("user-guide-header");
  userGuide.appendChild(header);
  pageContent.appendChild(userGuide);
  
}
