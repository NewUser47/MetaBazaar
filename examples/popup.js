import { modelLink } from "./treeman";

export function popup(name, componentName, url) {
  let qrBtn = document.getElementById("qr_btn");
  let redirectBtn = document.getElementById("redirect");

  let qr = `<img class="qrImg" src="/asset/qr_codes/${name}" alt="ERROR! Can't load QR!">`;
  redirectBtn.addEventListener("click", (e) => {
    modelLink(componentName, url);
  });

  qrBtn.appendChild(qr);
}
