import "./licensing.css";
import { pageContent } from "../index";
export default function createLicensing() {
  const licensing = document.createElement("div");
  licensing.classList.add("licensing-container");
  const privacyPolicy = document.createElement("div");
  const privacyPolicyHeader = document.createElement("h1");
  privacyPolicyHeader.textContent = "Privacy Policy";
  privacyPolicyHeader.classList.add("licensing-header");
  privacyPolicy.appendChild(privacyPolicyHeader);
  const ppContent = document.createElement("p");
  ppContent.textContent =
    'Last updated April 03, 2025\n\
This Privacy Notice for Vet Scientia ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:\
\n\
Visit our website at https://gray-bush-0c1bf981e.6.azurestaticapps.net, or any website of ours that links to this Privacy Notice\
\n\
Use Vet Scientia. Vet Scientia is an educational simulation that teaches animal anesthesiology to veterinary medicine students through an immersive and interactive anesthesia administration simulation. Unlike currently available software, such as VetSim, our product is widely accessible and available on both computers and tablets.​\
\n\
Engage with us in other related ways, including any sales, marketing, or events\
\n\
Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at vetscientia@gmail.com.';
  privacyPolicy.appendChild(ppContent);
  licensing.appendChild(privacyPolicy);
  pageContent.appendChild(licensing);
}
