import "./styles.css";
import createHome from "./home/home.js";
import createUserGuide from "./user_guide/user_guide.js";
import createLicensing from "./licensing/licensing.js";
import createDeployment from "./deployment/deployment.js";

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

function clearDocumentHead(){
  // Filter for only scripts
  const scripts = document.head.querySelectorAll("script[data-loaded-by='quarto']")
  // Remove all scripts from the document head
  console.log("scripts", scripts)
  for (const script of scripts) {
    document.head.removeChild(script);
  }
  console.log("UU",document.head.querySelectorAll("script[data-loaded-by='quarto']"))
}

const homeButton = document.querySelector("#home-tab");
homeButton.addEventListener("click", () => {
  if (lastTabClicked !== "home") {
    lastTabClicked = "home";
    removeClickedStylingFromTabs();
    homeButton.classList.add("last-clicked");
    clearPageContent();
    clearDocumentHead();
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
    clearDocumentHead();
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
    clearDocumentHead();
    createLicensing();
  }
});

const deploymentButton = document.querySelector("#deployment-tab");
deploymentButton.addEventListener("click", () => {
  if (lastTabClicked !== "deployment") {
    lastTabClicked = "deployment";
    removeClickedStylingFromTabs();
    deploymentButton.classList.add("last-clicked");
    clearPageContent();
    clearDocumentHead();
    createDeployment();
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
