export function modelLink(name, link) {
  AFRAME.registerComponent(name, {
    init: function () {
      let el = this.el;
      let self = this;
      self.trees = [];
      el.addEventListener("model-loaded", (e) => {
        let tree3D = el.getObject3D("mesh");
        if (!tree3D) {
          return;
        }
        //console.log('tree3D', tree3D);
        tree3D.traverse(function (node) {
          if (node.isMesh) {
            console.log(node);
            self.trees.push(node);
            // node.material = new THREE.MeshStandardMaterial({});
          }
        });
      });

      el.addEventListener("raycaster-intersected", (e) => {
        self.raycaster = e.detail.el;
        let intersection =
          self.raycaster.components.raycaster.getIntersection(el);
        console.log(
          "click",
          intersection.object.name,
          self.mouseOverObject,
          intersection.object.name != self.mouseOverObject
        );
        // if (self.mouseOverObject != intersection.object.name) {
        //   intersection.object.material.emissive = new THREE.Color(0xffff00);
        //   intersection.object.material.emissiveIntensity = 0.5;
        // } else {
        //   intersection.object.material.emissive = new THREE.Color(0x000000);
        //   intersection.object.material.emissiveIntensity = 0.0;
        // }
        self.mouseOverObject = intersection.object.name;
      });

      el.addEventListener("raycaster-intersected-cleared", (e) => {
        // self.trees.forEach(function (cloth1) {
        //   cloth1.material.emissive = new THREE.Color(0x000000);
        //   cloth1.material.emissiveIntensity = 0.0;
        // });
        self.mouseOverObject = null;
      });

      el.addEventListener("mouseenter", () => {
        let popup = document.getElementById("m3-o");
        popup.style.visibility = "visible";
      });

      el.addEventListener("click", function () {
        console.log(self.mouseOverObject);

        //POPUP SHOW/ HIDE MECHANISM

        console.log("here");
        // let qrId = `qr_${name}`;
        // let redirectId = `redirect_${name}`;
        let qrBtn = document.getElementById("qrImg");
        let redirectBtn = document.getElementById("redirect");
        // console.log(redirectBtn);

        qrBtn.setAttribute("src", `/asset/qr_codes/${name}`);
        // let qr = `<img class="qrImg" src="/asset/qr_codes/${name}" alt="ERROR! Can't load QR!">`;
        redirectBtn.addEventListener("click", (e) => {
          // modelLink(name, url);
          if (self.mouseOverObject) {
            // console.log("link");
            let url = link;
            let win = window.open(url, "_blank");
            win.focus();
          }
        });
        // qrBtn.appendChild(qr);

        // if (self.mouseOverObject === "defaultMaterial") {
        //   //console.log('link');
        //   let url = link;
        //   let win = window.open(url, "_blank");
        //   win.focus();
        // }
      });
    },
  });
}
