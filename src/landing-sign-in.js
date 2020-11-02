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
                font-weight: var(--form-h1-weight);
                font-family: Roboto, sans;
                font-size: 36px;
            }

            a {
                color: var(--link-color);
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
                text-align: center;
            }

            div.forgot {
                text-align: right;
                font-size: 12px;
            }

            a#signUpLink {
                float: left;
            }

            a#forgotPasswordLink {
            }

            #placeholder {
                opacity: 0;
                background-color: #424242;
                @apply(--layout-fit);
                z-index: -1;
            }

            paper-material {
                background-color: var(--form-background);
                display: block;
                padding: 8px 32px 32px;
                @apply(--form-elevation);
                width: 300px;
                margin: 0 auto;
                box-shadow: var(--form-box-shadow);
            }

            div.sign-up {
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
            .error {
                color: #d96557;
            }
            .success {
                color: #69b46c;
            }
            .forbidden-error {
                font-size: 0.9em;
                margin-bottom: 24px;
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

            <h1>Sign in to your account</h1>
            <iron-form id="signInForm">
                <paper-material elevation="1">
                    <div hidden\$="[[_canSignIn(signInGoogle, signInGithub, signInEmail)]]">Sign In has been disabled.</div>
                    <paper-button raised="" class="white" on-tap="_socialAuthGoogle" id="signInBtnGoogle" hidden\$="[[!signInGoogle]]"><iron-icon icon="landing:google"></iron-icon>Sign in with Google</paper-button>
                    <paper-button raised="" class="white" on-tap="_socialAuthGithub" id="signInBtnGithub" hidden\$="[[!signInGithub]]"><iron-icon icon="landing:github"></iron-icon>Sign in with Github</paper-button>
                    <div class="or" hidden\$="[[!_hasSeparator(signInGoogle, signInGithub, signInEmail)]]">
                        or
                    </div>
                    <form method="post" action="/login" enctype="application/json" id="form" hidden\$="[[!signInEmail]]">
                        <paper-input name="email" id="signin-email" label="Email" required="" auto-validate="" autofocus="" type="email" on-focus="_autoSelect"></paper-input>
                        <paper-input name="password" id="signin-password" label="Password" type="password" required="" auto-validate="" on-focus="_autoSelect"></paper-input>
                        <paper-button raised="" on-tap="_submitButtonHandler" disabled="" id="signInSubmit">
                            <paper-spinner id="spinner" hidden\$="[[!loading]]" active="[[loading]]"></paper-spinner>
                            <div class="output" hidden\$="[[loading]]">Sign in with your email</div>
                        </paper-button>
                        <div class="forbidden-error" hidden\$="[[!showRequestWhitelist]]">
                            <span id="forbidden"></span>
                            <a id="forbiddenlink" href="/request-whitelist-ip" on-tap="_requestWhitelist"></a>
                            <paper-spinner id="spinner" hidden\$="[[!showRequestWhitelist]]" active="[[loadingIp]]"></paper-spinner>
                        </div>
                        <div class="forgot"><a href="/forgot-password" id="forgotPasswordLink" on-tap="_forgotPasswordClicked"><span>Forgot password?</span></a></div>
                    </form>
                </paper-material>
            </iron-form>

            <iron-ajax id="requestWhitelist" url="/request-whitelist-ip" method="POST" loading="{{loadingIp}}" on-error="_handleRequestError" on-response="_handleRequestResponse"></iron-ajax>

            <div class="sign-up"><a href="/sign-up" on-tap="_createAccountClicked">Create account</a></div></div>
`,

  is: 'landing-sign-in',

  properties: {
      loading: {
          type: Boolean,
          value: false
      },

      loadingIp: {
          type: Boolean,
          value: false
      },

      signInGoogle: {
          type: Boolean,
          value: false
      },

      signInGithub: {
          type: Boolean,
          value: false
      },

      signInEmail: {
          type: Boolean,
          value: false
      },

      showRequestWhitelist: {
          type: Boolean,
          value: false
      },
      invitoken: String,
      returnTo: String
  },

  observers: [
      '_invitokenExists(invitoken)',
      '_returntoExists(returnTo)'
  ],

  listeners: {
      'iron-form-error': 'handleError'
  },

  attached() {
      const that = this;
          const validate = function(event) {
              console.warn('validating');
              // Validate the entire form to see if we should enable the `Submit` button.
              const ret = that.$.signInForm.validate();
              that.$.signInSubmit.disabled = !ret;
              return ret;
          };
      this.$.signInForm.addEventListener('change', validate);
      this.$.signInForm.addEventListener('keyup', (event) => {
          const submitDisabled = that.$.signInSubmit.disabled;
          that.$.signInForm.querySelector('.output').innerHTML = "Sign in with your email";
          if (validate(event) && !submitDisabled && event.key == "Enter")
              that._submitButtonHandler();
      });
      this.$.signInForm.addEventListener('iron-form-error', (event) => {
          console.warn("GOT ERROR!", event.detail);
          that.loading = false;
          let {msg} = event.detail.error;
          if (event.detail.request.xhr.status == 401)
              msg = 'Unauthorized';
          else if (event.detail.request.xhr.status == 403)
              msg = 'Forbidden';
          that.$.signInForm.querySelector('.output').innerHTML = msg;
      });
      this.$.signInForm.addEventListener('iron-form-response', (event) => {
          that.loading = false;
          that.$.signInForm.querySelector('.output').innerHTML = "SUCCESS!";
          window.location = event.detail.response.redirect;
      });
      this.$.signInForm.addEventListener('iron-form-presubmit', (event) => {
          that.$.signInForm.headers['Csrf-Token'] = CSRF_TOKEN;
      });
  },

  handleError(event){
      if (event.detail.request.xhr.status == 403){
          this.set('showRequestWhitelist', true);
          this.$.signInForm.querySelector('#forbidden').innerHTML = '<span class="error"><strong>Error</strong>:</span><br/> Trying to login from a non-whitelisted IP address. You can request ';
          this.$.signInForm.querySelector('#forbiddenlink').innerHTML = 'whitelisting your current IP via email.';
      }
  },

  _submitButtonHandler(event) {
      // this.set('showRequestWhitelist', false);
      this.loading = true;
      this.$.signInSubmit.disabled = true;
      this.$.signInForm.querySelector('.output').innerHTML = '';
      this.$.signInForm.submit();
  },

  _logoClicked(event) {
      this.fire('user-action', 'logo click on sign-in');
  },

  _socialAuthGoogle(event){
      this.fire('user-action', 'google sign in');
      window.location = '/social_auth/login/google-oauth2';
  },

  _socialAuthGithub(event){
      this.fire('user-action', 'github sign in');
      window.location = '/social_auth/login/github';
  },

  _createAccountClicked(event) {
      this.fire('user-action', 'create account click');
  },

  _requestWhitelist(event) {
      event.preventDefault();

      const userEmail = this.$['signin-email'].value;
      this.$.requestWhitelist.headers["Content-Type"] = 'application/json';
      this.$.requestWhitelist.headers["Csrf-Token"] = CSRF_TOKEN;
      this.$.requestWhitelist.body = {email: userEmail};
      this.$.requestWhitelist.generateRequest();
      this.fire('user-action', 'request whitelist click');
  },

  _handleRequestResponse(e){
      this.$.signInForm.querySelector('#forbidden').innerHTML = '<span class="success"><strong>Request Sent</strong></span>:<br/>Check you email to confirm whitelisting of current IP.'
      this.$.signInForm.querySelector('#forbiddenlink').innerHTML = '';
  },

  _handleRequestError(e) {
      this.$.signInForm.querySelector('#forbidden').innerHTML = '<span class="error"><strong>Error</strong>:</span><br/> Service unavailable'
      this.$.signInForm.querySelector('#forbiddenlink').innerHTML = '';
  },

  _forgotPasswordClicked(event) {
      this.fire('user-action', 'forgot password click');
  },

  _hasSeparator(signInGoogle, signInGithub, signInEmail) {
      return (signInGoogle || signInGithub) && signInEmail;
  },

  _canSignIn(signInGoogle, signInGithub, signInEmail) {
      return signInGoogle || signInGithub || signInEmail;
  },

  _invitokenExists(tok){
      if (tok) {
          this._createHiddenFormElement('invitoken', this.invitoken);
      }
  },

  _returntoExists(ret){
      if (ret) {
          this._createHiddenFormElement('return_to', this.returnTo);
      }
  },

  _createHiddenFormElement(name, value){
      const element = document.createElement('input');
          element.type = 'hidden';
          element.name = name;
          element.value = value;
          this.$.form.appendChild(element);
  },

  _autoSelect(event) {
      event.target._focusableElement.select();
  }
});
