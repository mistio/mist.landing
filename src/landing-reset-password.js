import '../node_modules/@polymer/polymer/polymer-legacy.js';
import '../node_modules/@polymer/paper-input/paper-input.js';
import '../node_modules/@polymer/paper-button/paper-button.js';
import '../node_modules/@polymer/paper-icon-button/paper-icon-button.js';
import '../node_modules/@polymer/paper-spinner/paper-spinner.js';
import '../node_modules/@polymer/paper-material/paper-material.js';
import '../node_modules/@polymer/iron-form/iron-form.js';
import '../node_modules/@polymer/iron-icon/iron-icon.js';
import '../node_modules/@polymer/iron-icons/iron-icons.js';
import '../node_modules/@polymer/iron-icons/social-icons.js';
import '../node_modules/@polymer/iron-ajax/iron-ajax.js';
import '../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js';
import { Polymer } from '../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../node_modules/@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style>
      :host {
        background-color: #fff;
        padding-top: 100px;
      }

      [hidden] {
        display: none !important;
      }

      h1 {
        text-align: center;
        font-weight: 200;
        font-family: Roboto, sans;
        font-size: 36px;
      }

      a {
        color: #2196f3;
        cursor: pointer;
        text-decoration: none;
      }

      paper-button {
        width: 100%;
        margin-top: 8px;
        color: #bbb;
        font-weight: 500;
        font-size: 16px;
        margin: 24px auto 16px;
        text-align: center;
        height: 46px;
        display: block;
        width: 300px;
        padding-left: 4px;
      }

      paper-button > iron-icon {
        padding: 7px;
        background-color: #fff;
        float: left;
        margin-top: -7px;
      }

      paper-button > span {
        width: 100%;
      }

      paper-spinner {
        width: 16px;
        height: 16px;
        margin: 0 auto;
      }

      paper-button[disabled] {
        opacity: var(--form-button-opacity-disabled, 1);
      }

      paper-button:not([disabled]) {
        background-color: var(--app-accent-color);
        color: #fff;
      }

      paper-button.white:not([disabled]) {
        background-color: #fff;
        color: #424242;
      }

      div.output {
        color: var(--form-output-color);
        text-align: left;
        white-space: pre-wrap;
        margin-top: 16px;
      }

      a#resetPasswordLink {
        float: left;
      }

      a#resetPasswordLink {
      }

      #placeholder {
        opacity: 0;
        background-color: grey;
        @apply (--layout-fit);
        z-index: -1;
      }

      paper-material {
        background-color: var(--form-background);
        display: block;
        padding: 8px 32px 32px;
        box-shadow: var(--form-box-shadow);
        width: 300px;
        margin: 0 auto;
      }

      div.reset-password {
        text-align: center;
        padding: 32px;
        font-size: 15px;
      }

      div.logo-solo {
        width: 220px;
        display: block;
        margin: 0 auto;
        text-align: center;
      }

      div.logo-solo paper-icon-button {
        width: 160px;
        height: 160px;
        padding: 32px;
      }

      div.or {
        margin: 32px auto 0px;
        width: 100px;
        text-align: center;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 500;
        color: #888;
        display: block;
      }

      paper-button#logo {
        background-image: var(--vertical-logo);
        background-color: transparent !important;
        background-repeat: no-repeat;
        background-position: center center;
        width: 160px;
        height: 160px;
        padding: 32px;
        border-radius: 50%;
      }
    </style>

    <div id="placeholder"></div>
    <div id="container">
      <div class="logo-solo">
        <a href="/"><paper-button id="logo" on-tap="_logoClicked"></paper-button></a>
      </div>

      <h1 id="pageTitle">Set new password</h1>
      <iron-form id="resetPasswordForm">
        <paper-material elevation="1">
          <form method="post" action="/reset-password" enctype="application/json">
            <mist-password
              autofocus=""
              name="password"
              value="{{password}}"
              strength="{{strength}}"
            ></mist-password>
            <input type="hidden" name="password" value="[[password]]" />
            <input type="hidden" name="key" value="[[route.__queryParams.key]]" />
            <paper-button
              raised=""
              on-tap="_submitButtonHandler"
              disabled=""
              id="resetPasswordSubmit"
            >
              <paper-spinner
                id="spinner"
                hidden$="[[!loading]]"
                active="[[loading]]"
              ></paper-spinner>
              <div hidden$="[[loading]]">Enter</div>
            </paper-button>
          </form>
          <div class="output"></div>
        </paper-material>
      </iron-form>
    </div>
  `,

  is: 'landing-reset-password',

  properties: {
    loading: {
      type: Boolean,
      value: false,
    },

    csrfToken: {
      type: String,
      value: '',
    },
  },

  attached() {
    const that = this;
    const validate = () => {
      // Validate the entire form to see if we should enable the `Submit` button.
      const ret = that.$.resetPasswordForm.validate();
      that.$.resetPasswordSubmit.disabled = !ret;
      return ret;
    };
    this.$.resetPasswordForm.addEventListener('keyup', event => {
      const submitDisabled = that.$.resetPasswordSubmit.disabled;
      that.$.resetPasswordForm.querySelector('paper-button > div').innerHTML = 'Enter';
      if (validate(event) && !submitDisabled && event.key === 'Enter') that._submitButtonHandler();
    });
    this.$.resetPasswordForm.addEventListener('change', validate);

    this.$.resetPasswordForm.addEventListener('iron-form-error', event => {
      console.warn('GOT ERROR!', event.detail);
      that.loading = false;
      that.$.resetPasswordSubmit.querySelector('div').innerText = event.detail.request.statusText;
    });
    this.$.resetPasswordForm.addEventListener('iron-form-response', event => {
      console.warn('resetPassword SUCCESS!', event);
      that.loading = false;
      that.$.resetPasswordSubmit.querySelector('div').innerText = 'SUCCESS';
      window.location = '/';
    });
    this.$.resetPasswordForm.addEventListener('iron-form-presubmit', () => {
      that.$.resetPasswordForm.headers['Csrf-Token'] = this.csrfToken;
    });
    import('@mistio/mist-password/mist-password.js').then(() => {
      console.warn('mist-password imported');
    });
  },

  _submitButtonHandler() {
    this.loading = true;
    this.$.resetPasswordSubmit.disabled = true;
    this.$.resetPasswordForm.querySelector('.output').innerHTML = '';
    this.$.resetPasswordForm.submit();
  },

  _logoClicked() {
    this.fire('user-action', 'logo click on reset-password');
  },
});
