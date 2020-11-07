/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/*
Material design: [Meaningful transitions](https://www.google.com/design/spec/animation/meaningful-transitions.html)
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '../node_modules/@polymer/polymer/polymer-legacy.js';

import { IronResizableBehavior } from '../node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js';
import { IronSelectableBehavior } from '../node_modules/@polymer/iron-selector/iron-selectable.js';
import { Polymer } from '../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../node_modules/@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        padding-bottom: 0px;
        background-color: var(--app-background-color);
      }

      :host
        ::slotted(*:not(landing-sign-in):not(landing-sign-up):not(landing-sign-up):not(landing-get-started)) {
        padding-top: 130px;
      }

      :host ::content > *:not(landing-sign-in):not(landing-sign-up):not(landing-get-started) {
        padding-top: 130px;
      }

      :host > ::content > :not(.iron-selected) {
        display: none !important;
      }

      :host > ::slotted(:not(.iron-selected)) {
        display: none !important;
      }

      @media (max-width: 767px) {
        :host ::slotted(*:not(landing-sign-in):not(landing-sign-up)) {
          padding-top: 64px;
        }

        :host ::content > *:not(landing-sign-in):not(landing-sign-up) {
          padding-top: 64px;
        }
      }
    </style>

    <slot id="content"></slot>
  `,

  is: 'landing-pages',

  behaviors: [IronResizableBehavior, IronSelectableBehavior],

  properties: {
    activateEvent: {
      type: String,
      value: '',
    },
  },

  observers: ['_selectedPageChanged(selected)'],

  _selectedPageChanged(selected, old) {
    this.async(this.notifyResize);
    console.log('Page changed from ', old, 'to ', selected);
  },
});
