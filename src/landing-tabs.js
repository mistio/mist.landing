import '@polymer/polymer/polymer-legacy.js';

import '@polymer/iron-flex-layout/iron-flex-layout.js';
import { IronSelectableBehavior } from '@polymer/iron-selector/iron-selectable.js';
import './landing-tabs-overlay.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';

const documentContainer = document.createElement('template');

documentContainer.innerHTML = `<dom-module id="landing-tabs">
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

document.head.appendChild(documentContainer.content);
Polymer({
  is: 'landing-tabs',

  behaviors: [IronSelectableBehavior],

  observers: ['_onSelectedItemChanged(selectedItem)'],

  _onSelectedItemChanged(selectedItem) {
    if (selectedItem === undefined && this.selected) return;
    if (['docs'].indexOf(this.selected) > -1) return;
    this.$.overlay.target = selectedItem;
  },
});
