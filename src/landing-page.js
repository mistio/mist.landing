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
import '../node_modules/@polymer/marked-element/marked-element.js';
import { Polymer } from '../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../node_modules/@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="shared-styles">

      :host {
        display: block;
        color: var(--app-secondary-color);
      }

      iron-icon {
        display: inline-block;
        width: 60px;
        height: 60px;
      }

      h1 {
        margin: 50px 0 50px 0;
        font-weight: 300;
      }
      #placeholder {
          opacity: 0;
          background-color: grey;
          @apply(--layout-fit);
      }

      .title {
        text-transform: capitalize;
      }

      #content {
        padding-top: 16px;
        padding-bottom: 80px;
      }

    </style>
    <div>
      <slot>
      </slot>
    </div>
`,

  is: 'landing-page',

  properties: {
    name: {
      type: String,
      reflectToAttribute: true
    },
    title: {
      type: String
    },
    data: {
      type: Object
    }
  },

  listeners: {
    'tap': '_onTap'
  },

  _signUpClick: function(event) {
    window.scrollTo(0, 0);
    console.log('user-action');
    this.fire('user-action', 'sign up button 1 click in '+name);
    //new Wave(event.detail.x, event.detail.y, window.getComputedStyle(event.currentTarget).backgroundColor, 1);
  },

  _signUpClick2: function(event) {
    window.scrollTo(0, 0);
    console.log('user-action');
    this.fire('user-action', 'sign up button 2 click in '+name);
  },

  _downloadClick: function(event) {
    window.scrollTo(0, 0);
    console.log('user-action');
    this.fire('user-action', 'download button click in '+name);
  },

  _chooseEditionClick: function(event) {
    window.scrollTo(0, 0);
    console.log('user-action');
    this.fire('user-action', 'choose edition button click in '+name);
  },

  _onTap: function (e) {
    if (e.target.tagName == 'PAPER-BUTTON') {
      if (e.target.id == 'signUpBtn1') {
        this.parentNode.parentNode.host._signUpClick(e);
      } else if (e.target.id == 'signUpBtn2') {
        this._signUpClick2();
      } else {
        debugger;
      }
    } else {
      console.log("click", e);
      // Toggle edition pricing
      if (e.path.find(element => element.id == "eeBtn")){
        document.querySelector("#eeBtn").classList.add('active');
        document.querySelector("#ee").removeAttribute('hidden');

        document.querySelector("#hsBtn").classList.remove('active');
        document.querySelector("#hs").setAttribute('hidden', true);
      } else if (e.path.find(element => element.id == "hsBtn")){
        document.querySelector("#hsBtn").classList.add('active');
        document.querySelector("#hs").removeAttribute('hidden');
        
        document.querySelector("#eeBtn").classList.remove('active');
        document.querySelector("#ee").setAttribute('hidden', true);
      }
      // Collapse pricing faq
      if (e.path.find(element => element.classList && element.classList.contains("faqitem"))){
        var faqItem = e.path.find(element => element.classList.contains("faqitem"));
        var collapseElement = faqItem.querySelector("iron-collapse");
        if (collapseElement && collapseElement.hasAttribute("opened")) {
          collapseElement.removeAttribute("opened");
        } else {
          collapseElement.setAttribute("opened", true);
        }
      }
    }
  }
});
