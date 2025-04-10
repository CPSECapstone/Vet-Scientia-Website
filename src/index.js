import "./styles.css";
import createHome from "./home/home.js";
import createUserGuide from "./user_guide/user_guide.js";
import createLicensing from "./licensing/licensing.js";

function removeClickedStylingFromTabs() {
  for (const tab of document.querySelectorAll("nav>*")) {
    tab.classList.remove("last-clicked");
  }
}

export const pageContent = document.querySelector("#content");

let lastTabClicked = "home";
function clearPageContent() {
  while (pageContent.firstChild) {
    pageContent.removeChild(pageContent.lastChild);
  }
}

const homeButton = document.querySelector("#home-tab");
homeButton.addEventListener("click", () => {
  if (lastTabClicked !== "home") {
    lastTabClicked = "home";
    removeClickedStylingFromTabs();
    homeButton.classList.add("last-clicked");
    clearPageContent();
    createHome();
  }
});

const userGuideButton = document.querySelector("#user-guide-tab");
userGuideButton.addEventListener("click", () => {
  if (lastTabClicked !== "user-guide") {
    lastTabClicked = "user-guide";
    removeClickedStylingFromTabs();
    userGuideButton.classList.add("last-clicked");
    clearPageContent();
    createUserGuide();
  }
});

const licensingButton = document.querySelector("#licensing-tab");
licensingButton.addEventListener("click", () => {
  if (lastTabClicked !== "licensing") {
    lastTabClicked = "licensing";
    removeClickedStylingFromTabs();
    licensingButton.classList.add("last-clicked");
    clearPageContent();
    createLicensing();
  }
});

function domReady(cb) {
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    cb();
  } else {
    document.addEventListener("DOMContentLoaded", cb);
  }
}

domReady(() => {
  document.body.style.visibility = "visible";
});

homeButton.classList.add("last-clicked");
createHome();
