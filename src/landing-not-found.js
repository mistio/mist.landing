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

import '../node_modules/@polymer/paper-button/paper-button.js';
import './landing-button.js';
import { Polymer } from '../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../node_modules/@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style include="shared-styles">
      :host {
        display: block;
        text-align: center;
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

      paper-button {
        background-color: var(--app-accent-color);
        color: #fff;
        font-size: 18px;
        height: 54px;
        padding: 0 2rem;
        margin: 40px;
        font-weight: 500;
      }
      .content404 {
        margin-bottom: 400px;
      }
    </style>

    <div class="content404">
      <h1>404</h1>
      <p>Sorry, we couldn't find that page.</p>
      <a href="/">
        <paper-button raised="">Go to the home page</paper-button>
      </a>
    </div>
  `,

  is: 'landing-not-found',
});
