import "./licensing.css";
import { pageContent } from "../index";
import privacyPolicy from "../assets/privacy_policy.pdf";
import eula from "../assets/EULA.pdf";
export default function createLicensing() {
  const template = document.querySelector("#licensing-template");
  const licensingContent = template.content.cloneNode(true);
  pageContent.appendChild(licensingContent);
  const privacyPolicyDownloadLink = document.querySelector("a.privacy-policy");
  privacyPolicyDownloadLink.href = privacyPolicy;
  const eulaDownloadLink = document.querySelector("a.eula");
  eulaDownloadLink.href = eula;
}