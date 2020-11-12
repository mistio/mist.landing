/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';

import '@polymer/iron-flex-layout/iron-flex-layout.js';
import './landing-ripple-container.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';

const documentContainer = document.createElement('template');

documentContainer.innerHTML = `<dom-module id="landing-tab">
  <template strip-whitespace="">
    <style>
      [hidden] {
        display: none !important;
      }

      :host {
        display: inline-block;
        position: relative;
      }

      #overlay {
        pointer-events: none;
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        @apply --landing-tab-overlay;
      }

      :host(.landing-tabs-overlay-static-above) #overlay {
        display: block;
      }
    </style>
    <div id="overlay"></div>
    <landing-ripple-container>
      <slot></slot>
    </landing-ripple-container>
  </template>
  
</dom-module>`;

document.head.appendChild(documentContainer.content);
Polymer({
  is: 'landing-tab',
});
