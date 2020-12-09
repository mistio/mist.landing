import '../node_modules/@polymer/polymer/polymer-legacy.js';

const documentContainer = document.createElement('template');

documentContainer.innerHTML = `<dom-module id="landing-select">
  <template>
    <style>

      landing-select {
        display: inline-block;
        position: relative;
        /* create a layer to avoid invalidation from other controls*/
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
      }

      landing-select > landing-md-decorator {
        display: block;
        border-top: 1px solid #ccc;
        height: 1px;
        speak: none;
      }

      landing-select > landing-md-decorator::after {
        content: '\\25BC';
        display: block;
        position: absolute;
        bottom: calc(50% - 0.75em);
        right: 8px;
        speak: none;
        -webkit-transform: scaleY(.6);
        transform: scaleY(.6);
        color: var(--app-secondary-color);
        pointer-events: none;
      }

      landing-select > select {
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding: 8px 24px 8px 0;
        border: none;
        background-color: transparent;
        border-radius: 0;
        font-size: 1em;
        font-weight: 300;
        color: var(--app-primary-color);
        overflow: hidden;
        margin: 0;
        outline: none;
      }

      landing-select > select::-ms-expand {
        display: none;
      }

      landing-select > landing-md-decorator > landing-underline {
        display: block;
        background-color: var(--app-accent-color);
        height: 2px;
        position: relative;
        top: -1px;
        width: 100%;
        margin: auto;
        -webkit-transform: scale3d(0, 1, 1);
        transform: scale3d(0, 1, 1);
        transition: -webkit-transform 0.2s ease-in;
        transition: transform 0.2s ease-in;
      }

      landing-select > select:focus + landing-md-decorator > landing-underline {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        transition: -webkit-transform 0.2s ease-out;
        transition: transform 0.2s ease-out;
      }

      landing-select > select:focus + landing-md-decorator::before,
      landing-select > select:focus + landing-md-decorator::after,
      landing-select > select:focus {
        color: black;
      }

      /* hide the focus ring in firefox */
      landing-select > select:focus:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
      }

      landing-select > [prefix] {
        position: absolute;
        left: 0px;
        top: calc(50% - 8px);
        line-height: 16px;
        color: var(--app-secondary-color);
        pointer-events: none;
      }

    </style>
  </template>
</dom-module>`;

document.head.appendChild(documentContainer.content);
