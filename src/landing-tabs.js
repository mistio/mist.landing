/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import '../node_modules/@polymer/polymer/polymer-legacy.js';

import '../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js';
import { IronSelectableBehavior } from '../node_modules/@polymer/iron-selector/iron-selectable.js';
import './landing-tabs-overlay.js';
import { Polymer } from '../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="landing-tabs">
  <template strip-whitespace="">
    <style>
      :host {
        @apply --layout;
        @apply --layout-center-center;
        text-align: center;
      }

      #container {
        position: relative;
      }

      landing-tabs-overlay {
        @apply --landing-tab-overlay;
      }
    </style>
    <div id="container">
      <landing-tabs-overlay id="overlay"></landing-tabs-overlay>
      <slot></slot>
    </div>
  </template>
  
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
  is: 'landing-tabs',

  behaviors: [
    IronSelectableBehavior
  ],

  observers: [
    '_onSelectedItemChanged(selectedItem)'
  ],

  _onSelectedItemChanged: function(selectedItem) {
    if (selectedItem === undefined && this.selected) return;
    if (['docs'].indexOf(this.selected) > -1) return;
    this.$.overlay.target = selectedItem;
  }
});
