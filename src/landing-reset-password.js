import '@polymer/polymer/polymer-legacy.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-spinner/paper-spinner.js';
import '@polymer/paper-material/paper-material.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import 'mist-password/mist-password.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
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
                color: #2196F3;
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
                @apply(--layout-fit);
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

            <div class="logo-solo"><a href="/"><paper-button id="logo" on-tap="_logoClicked"></paper-button></a></div>

            <h1 id="pageTitle">Set new password</h1>
            <iron-form id="resetPasswordForm">
                <paper-material elevation="1">
                    <form method="post" action="/reset-password" enctype="application/json">
                        <mist-password autofocus="" name="password" value="{{password}}" strength="{{strength}}"></mist-password>
                        <input type="hidden" name="password" value="[[password]]">
                        <input type="hidden" name="key" value="[[route.__queryParams.key]]">
                        <paper-button raised="" on-tap="_submitButtonHandler" disabled="" id="resetPasswordSubmit">
                            <paper-spinner id="spinner" hidden\$="[[!loading]]" active="[[loading]]"></paper-spinner>
                            <div hidden\$="[[loading]]">Enter</div>
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
          value: false
      }
  },

  attached: function() {
      var that = this,
          validate = function(event) {
          // Validate the entire form to see if we should enable the `Submit` button.
          var ret = that.$.resetPasswordForm.validate();
          that.$.resetPasswordSubmit.disabled = !ret;
          return ret;
      }
      this.$.resetPasswordForm.addEventListener('keyup', function(event) {
          var submitDisabled = that.$.resetPasswordSubmit.disabled;
          that.$.resetPasswordForm.querySelector('paper-button > div').innerHTML = "Enter";
          if (validate(event) && !submitDisabled && event.key == "Enter")
              that._submitButtonHandler();
      });
      this.$.resetPasswordForm.addEventListener('change', validate);

      this.$.resetPasswordForm.addEventListener('iron-form-error', function(event) {
          console.warn("GOT ERROR!", event.detail);
          that.loading = false;
          that.$.resetPasswordSubmit.querySelector('div').innerText = event.detail.request.statusText;
      });
      this.$.resetPasswordForm.addEventListener('iron-form-response', function(event) {
          console.warn("resetPassword SUCCESS!", event);
          that.loading = false;
          that.$.resetPasswordSubmit.querySelector('div').innerText = 'SUCCESS';
          window.location = '/';
      });
      this.$.resetPasswordForm.addEventListener('iron-form-presubmit', function(event) {
          that.$.resetPasswordForm.headers['Csrf-Token'] = CSRF_TOKEN;
      });
  },

  _submitButtonHandler:  function(event) {
      this.loading = true;
      this.$.resetPasswordSubmit.disabled = true;
      this.$.resetPasswordForm.querySelector('.output').innerHTML = '';
      this.$.resetPasswordForm.submit();
  },

  _logoClicked: function(event) {
      this.fire('user-action', 'logo click on reset-password');
  }
});
