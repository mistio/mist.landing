import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="landing-common-styles">
  <template>
    <style>

      [hidden] {
        display: none !important;
      }

      header {
        text-align: center;
      }

      header > h1 {
        margin: 0 0 4px 0;
        font-size: 1.3em;
        font-weight: 500;
      }

      header > span {
        color: var(--app-secondary-color);
        font-size: 12px;
      }

      header > landing-button[responsive] {
        margin-top: 20px;
      }

      @media (max-width: 767px) {

        header > h1 {
          font-size: 1.1em;
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
