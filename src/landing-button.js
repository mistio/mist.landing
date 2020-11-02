import '../node_modules/@polymer/polymer/polymer-legacy.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="landing-button">
  <template>
    <style>

      landing-button {
        display: inline-block;
      }

      landing-button > * {
        display: inline-block;
        box-sizing: border-box;
        border: 2px solid #000;
        background-color: #FFF;
        font-size: 14px;
        font-weight: 500;
        color: var(--app-primary-color);
        margin: 0;
        padding: 8px 44px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        border-radius: 0;
        outline: none;
        -webkit-appearance: none;
      }

      landing-button > *:focus {
        background-color: #c5cad3;
      }

      landing-button > *:active {
        background-color: #000;
        color: #FFF;
      }

      @media (max-width: 767px) {

        /* Responsive buttons are used in landing-detail */
        landing-button[responsive] {
          @apply --layout-fixed-bottom;
          height: 64px;
          z-index: 1;
        }

        landing-button[responsive] > * {
          background-color: var(--app-accent-color);
          border: none;
          color: white;
          padding: 20px;
          width: 100%;
          height: 100%;
          font-size: 15px;
        }

        landing-button[responsive] > *:focus {
          background-color: var(--app-accent-color);
        }

      }

    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
