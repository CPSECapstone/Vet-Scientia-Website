import "./home.css";
import { pageContent } from "../index";
export default function createHome() {
  const template = document.querySelector("#home-template");
  const homeContent = template.content.cloneNode(true);
  pageContent.appendChild(homeContent);
}
