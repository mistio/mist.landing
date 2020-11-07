import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-icons/hardware-icons.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
// import 'social-media-icons/social-media-icons.js';
import './shared-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import 'social-icon/dile-social-icon.js';

Polymer({
  _template: html`
    <style include="shared-styles"></style>
    <style>
      .person iron-icon {
        width: 48px;
        height: 48px;
      }
      .person {
        margin-bottom: 50px;
        overflow: auto;
        @apply (--shadow-elevation-4dp);
        position: relative;
        background-color: #fff;
      }
      .person iron-image {
        width: 271px;
        height: 350px;
      }
      .name {
        font-weight: 400;
      }
      .details {
        padding-top: 16px;
        padding-bottom: 24px;
      }
      .details h5,
      .details p {
        margin-top: 0;
        margin-bottom: 0;
      }
      h5,
      p,
      .social {
        padding-left: 24px;
        padding-right: 24px;
      }
      .social {
        border-top: 1px solid #eee;
        padding: 16px 24px;
        @apply (--layout-horizontal);
        align-items: center;
        justify-content: space-around;
      }
      .social a {
        transition: color 0.3s ease;
        text-transform: uppercase;
        padding: 4px;
      }

      img {
        width: 100%;
      }
    </style>

    <div class="person text-aligned">
      <slot name="person-image"></slot>
      <div class="details">
        <h5 class="name"><slot name="person-name"></slot></h5>
        <p class="secondary"><slot name="person-position"></slot></p>
      </div>
      <div class="social layout horizontal">
        <slot name="person-linkedin"></slot>
        <slot name="person-twitter"></slot>
        <slot name="person-github"></slot>
      </div>
    </div>
  `,

  is: 'landing-person',
});
