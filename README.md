[slack]: https://aframevr.slack.com/join/shared_invite/zt-f6rne3ly-ekVaBU~Xu~fsZHXr56jacQ

<img src="http://i.imgur.com/7ddbE0q.gif" width="300">


Networked-Aframe
=======

<span class="badge-npmversion"><a href="https://npmjs.org/package/networked-aframe" title="View this project on NPM"><img src="https://img.shields.io/npm/v/networked-aframe.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/networked-aframe" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/networked-aframe.svg" alt="NPM downloads" /></a></span>

**Multi-user VR on the Web**

A framework for writing multi-user VR apps in HTML and JS.

Built on top of [A-Frame](https://aframe.io/).

<div>
  <a href="#features">Features</a>
  &mdash;
  <a href="#getting-started">Getting Started</a>
  &mdash;
  <a href="#more-examples">Examples</a>
  &mdash;
  <a href="#documentation">Documentation</a>
  &mdash;
  <a href="#stay-in-touch">Contact</a>
</div>

<br>


Features
--------
* Support for WebRTC and/or WebSocket connections.
* Voice chat. Audio streaming to let your users talk in-app (WebRTC only).
* Video chat. See video streams in-app.
* Bandwidth sensitive. Only send network updates when things change.
* Cross-platform. Works on all modern Desktop and Mobile browsers. Oculus Rift, Oculus Quest, HTC Vive and Google Cardboard.
* Extendable. Sync any A-Frame component, including your own, without changing the component code at all.


Release notes
-------------

You can read [the release notes](https://github.com/networked-aframe/networked-aframe/blob/master/docs/RELEASE_NOTES.md) to know what changed in the latest releases.


Getting Started
---------------

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/naf-project)

Follow [the NAF Getting Started tutorial](https://github.com/networked-aframe/networked-aframe/blob/master/docs/getting-started-local.md) to build your own example from scratch, including setting up a local server.

To run the examples on your own PC:

 ```sh
git clone https://github.com/networked-aframe/networked-aframe.git  # Clone the repository.
cd networked-aframe
npm install  # Install dependencies.
npm run dev  # Start the local development server.
```
With the server running, browse the examples at `http://localhost:8080`. Open another browser tab and point it to the same URL to see the other client.

For info on how to host your experience on the internet, see the [NAF Hosting Guide](https://github.com/networked-aframe/networked-aframe/blob/master/docs/hosting-networked-aframe-on-a-server.md).
