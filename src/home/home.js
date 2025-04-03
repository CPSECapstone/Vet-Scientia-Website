import "./home.css";
import { pageContent } from "../index";
export default function createHome() {
  const home = document.createElement("div");
  home.classList.add("home-container");
  const header = document.createElement("h1");
  header.textContent =
    "Train Vet Students for Anesthesia Administration With a Virtual Interface";
  header.classList.add("home-header");
  home.appendChild(header);
  pageContent.appendChild(home);
}
