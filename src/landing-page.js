import '@polymer/polymer/polymer-legacy.js';

import '@polymer/iron-flex-layout/iron-flex-layout.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

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
        @apply (--layout-fit);
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
      <slot> </slot>
    </div>
  `,

  is: 'landing-page',

  properties: {
    name: {
      type: String,
      reflectToAttribute: true,
    },
    title: {
      type: String,
    },
    data: {
      type: Object,
    },
  },
});
