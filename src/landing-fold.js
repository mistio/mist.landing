import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import './shared-styles.js';
import './landing-image.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style include="shared-styles"></style>
    <style>
      paper-material {
        @apply (--shadow-elevation-2dp);
      }

      :host {
        display: block;
      }

      .item {
        display: block;
        text-decoration: none;
      }

      .text-center {
        text-align: center;
      }

      .item:nth-of-type(3),
      .item:nth-of-type(4) {
        display: inline-block;
        width: 50%;
      }

      .item:nth-of-type(3) > .title,
      .item:nth-of-type(4) > .title {
        font-size: 1.1em;
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

      a {
        text-decoration: none;
      }

      typed-text {
        display: inline-block;
        font-weight: 500;
        margin: 0 14px;
      }

      .col {
        width: 50%;
        box-sizing: border-box;
      }

      .pad {
        padding: 16px;
      }

      img.with-shadow {
        max-width: 100%;
        display: block;
      }

      img {
        width: 100%;
        height: auto;
      }

      @media only screen and (max-width: 943px) {
        typed-text {
          display: block;
        }
      }

      #placeholder {
        opacity: 0;
        background-color: grey;
        @apply (--layout-fit);
        z-index: -1;
      }

      .image-block {
        padding: 60px;
      }

      /* very small mobile screens */
      @media only screen and (max-width: 600px) {
        .title.typed {
          font-size: 2.56rem !important;
        }
        ::slotted(h1[slot='title']) {
          margin: 0 0 1.424rem 0 !important;
        }
      }

      .faqitem {
        margin: 0 auto;
        position: relative;
      }
      .markdown-html a {
        text-decoration: none !important;
        color: #09c !important;
      }
      .markdown-html a {
        text-decoration: none !important;
        color: #09c !important;
      }

      .image-link {
        outline: none;
      }

      .image-link > landing-image::after {
        display: block;
        content: '';
        position: absolute;
        transition-property: opacity;
        transition-duration: 0s;
        transition-delay: 90ms;
        pointer-events: none;
        opacity: 0;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        outline: #2196f3 auto 5px;
        outline: -moz-mac-focusring auto 5px;
        outline: -webkit-focus-ring-color auto 5px;
      }

      .image-link:focus > landing-image::after {
        opacity: 1;
      }

      landing-image {
        position: relative;
        margin-bottom: -48px;
        height: 50vw;
        max-height: 920px;
        overflow: hidden;
        --landing-image-img: {
          position: absolute;
          top: 0;
          bottom: 0;
          left: -9999px;
          right: -9999px;
          max-width: none;
        }
        margin-top: 40px;
      }

      @media (max-width: 767px) {
        landing-image {
          height: 240px;
        }

        .title {
          margin: 24px 0;
        }
      }

      .framed-image {
        position: relative;
        margin-bottom: -54px;
      }

      .framed-image .image-frame {
        position: relative;
        z-index: 0;
      }
      ::slotted(h1[slot='title']) {
        font-size: 4.2rem !important;
        line-height: 110% !important;
      }
      ::slotted(h2[slot='subtitle']) {
        line-height: 140% !important;
        font-weight: 300 !important;
        font-size: 1.64rem !important;
        margin: 0.82rem 0 0.656rem !important;
      }

      ::slotted(div[slot='badges']) {
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      .badges img {
        margin: 0 10px;
      }
    </style>

    <div class="hero text-center">
      <slot name="title"></slot>
      <slot name="subtitle"></slot>
      <slot name="badges" class="badges"></slot>
      <br />
      <slot name="button"></slot>
      <dom-if if="[[frame]]" restamp="">
        <template>
          <a href="[[href]]" target="_blank">
            <div class="framed-image">
              <img
                class="image-content"
                style="position: absolute; top: 3.97%; left: 8.2%; width: 84%; height: 58.9%; z-index: 0;"
                src="[[video]]"
              />
              <picture>
                <source type="image/webp" srcset="[[frame]]" />
                <img
                  src="[[fallbackFrame]]"
                  alt="Image frame"
                  width="[[imgWidth]]"
                  height="[[imgHeight]]"
                  class="image-frame"
                />
              </picture>
            </div>
          </a>
        </template>
      </dom-if>

      <dom-if if="[[!frame]]" restamp="">
        <template>
          <landing-image src="[[image]]" alt="[[alt]]" placeholder-img=""></landing-image>
        </template>
      </dom-if>
    </div>
  `,

  is: 'landing-fold',

  properties: {
    video: {
      type: String,
      reflectToAttribute: true,
    },
    fallbackVideo: {
      type: String,
      reflectToAttribute: true,
    },
    frame: {
      type: String,
      reflectToAttribute: true,
      value: false,
    },
    fallbackFrame: {
      type: String,
      reflectToAttribute: true,
      value: false,
    },
    href: {
      type: String,
      reflectToAttribute: true,
      value: '',
    },
    printTyped: {
      type: Boolean,
      value: false,
    },
    imgHeight: {
      type: Number,
    },
    imgWidth: {
      type: Number,
    },
  },

  _hasNoFrame() {
    return !((this.frame && this.frame.length > 0) || false);
  },
});
