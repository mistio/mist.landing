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

import { PaperRippleBehavior } from '@polymer/paper-behaviors/paper-ripple-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="landing-ripple-container">
  <template strip-whitespace="">
    <style>
      :host {
        display: inline-block;
        position: relative;
      }

      paper-ripple {
        color: var(--app-accent-color);
      }
    </style>
    <slot></slot>
  </template>
  
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
  is: 'landing-ripple-container',

  behaviors: [
    PaperRippleBehavior
  ],

  listeners: {
    'down': '_rippleDown',
    'up': '_rippleUp',
  },

  created: function() {
    this.addEventListener('focus', this._onFocus.bind(this), true);
    this.addEventListener('blur', this._onBlur.bind(this), true);
    this._isDown = false;
  },

  _onFocus: function(event) {
    // Prevent second ripple when clicking causes both focus and down.
    if (!this._isDown) {
      this._rippleDown(event);
    }
  },

  _onBlur: function(event) {
    this._rippleUp(event);
  },

  _rippleDown: function(event) {
    this._isDown = true;
    this.getRipple().downAction(event);
  },

  _rippleUp: function(event) {
    this._isDown = false;
    this.getRipple().upAction(event);
  },
});
