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
                font-weight: var(--form-h1-weight);
                font-family: Roboto, sans;
                font-size: 36px;
            }

            h2 {
                text-align: center;
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
                color: var(--form-output-color);
                text-align: left;
                white-space: pre-wrap;
                margin-top: 16px;
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
                background-color: #0099cc;
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

            <h1>Create your account 
                <template is="dom-if" if="[[plan]]">
                    <br> to purchase the [[plan]] prepaid plan.
                </template>
            </h1>
            <iron-form id="signUpForm">
                <paper-material elevation="1">
                    <div hidden\$="[[_canSignUp(signUpGoogle, signUpGithub, signUpEmail)]]">Account creation has been disabled.</div>
                    <paper-button raised="" class="white" on-tap="_socialAuthGoogle" id="signUpBtnGoogle" hidden\$="[[!signUpGoogle]]"><iron-icon icon="landing:google"></iron-icon>Sign up with Google</paper-button>
                    <paper-button raised="" class="white" on-tap="_socialAuthGithub" id="signUpBtnGithub" hidden\$="[[!signUpGithub]]"><iron-icon icon="landing:github"></iron-icon>Sign up with Github</paper-button>
                    <div class="or" hidden\$="[[!_hasSeparator(signUpGoogle, signUpGithub, signUpEmail)]]">
                        or
                    </div>
                    <form method="post" action="/register" enctype="application/json" id="form" hidden\$="[[!signUpEmail]]">
                        <paper-input name="name" id="name" label="Full name" required="" auto-validate="" autofocus=""></paper-input>
                        <paper-input name="email" id="signUp-email" label="Email" required="" auto-validate="" autofocus="" type="email"></paper-input>
                        <paper-button raised="" on-tap="_submitButtonHandler" disabled="" id="signUpSubmit">
                            <paper-spinner id="spinner" hidden\$="[[!loading]]" active="[[loading]]"></paper-spinner>
                            <div hidden\$="[[loading]]">Sign up with your email</div>
                        </paper-button>
                    </form>
                    <div class="output"></div>
                </paper-material>
            </iron-form>

            <div class="sign-up"><a href="/sign-in" on-tap="_signInClicked">Sign in</a></div></div>
`,

  is: 'landing-sign-up',

  properties: {
      loading: {
          type: Boolean,
          value: false
      },

      signUpGoogle: {
          type: Boolean,
          value: false
      },

      signUpGithub: {
          type: Boolean,
          value: false
      },

      signUpEmail: {
          type: Boolean,
          value: false
      },
      invitoken: String,
      plan: String
  },

  observers: [
      '_invitokenExists(invitoken)',
      '_planExists(plan)'
  ],

  attached: function() {
      var that = this,
          validate = function(event) {
          // Validate the entire form to see if we should enable the `Submit` button.
          var ret = that.$.signUpForm.validate();
          that.$.signUpSubmit.disabled = !ret;
          return ret;
      }
      this.$.signUpForm.addEventListener('keyup', function(event) {
          var submitDisabled = that.$.signUpSubmit.disabled;
          that.$.signUpForm.querySelector('paper-button > div').innerHTML = "Sign up with your email";
          if (validate(event) && !submitDisabled && event.key == "Enter")
              that._submitButtonHandler();
      });
      this.$.signUpForm.addEventListener('change', validate);

      this.$.signUpForm.addEventListener('iron-form-error', function(event) {
          console.warn("GOT ERROR!", event.detail);
          that.loading = false;
          var msg = event.detail.error.msg;
          if (event.detail.request.xhr.status == 409)
              msg = 'Conflict';
          that.$.signUpForm.querySelector('paper-button > div').innerHTML = msg;
      });
      this.$.signUpForm.addEventListener('iron-form-response', function(event) {
          console.warn("SIGNUP SUCCESS!", event);
          that.loading = false;
          that.$.signUpForm.querySelector('form').hidden = true;
          that.$.signUpForm.querySelector('.output').innerHTML = event.detail.response.msg;
      });
      this.$.signUpForm.addEventListener('iron-form-presubmit', function(event) {
          that.$.signUpForm.headers['Csrf-Token'] = CSRF_TOKEN;
      });
  },

  _submitButtonHandler:  function(event) {
      this.loading = true;
      this.$.signUpSubmit.disabled = true;
      this.$.signUpForm.querySelector('.output').innerHTML = '';
      this.$.signUpForm.submit();
  },

  _logoClicked: function(event) {
      this.fire('user-action', 'logo click on sign-up');
  },

  _socialAuthGoogle: function(event){
      this.fire('user-action', 'google sign up');
      window.location = '/social_auth/login/google-oauth2';
  },

  _socialAuthGithub: function(event){
      this.fire('user-action', 'github sign up');
      window.location = '/social_auth/login/github';
  },

  _signInClicked: function(event) {
      this.fire('user-action', 'sign-in click')
  },

  _hasSeparator: function(signUpGoogle, signUpGithub, signUpEmail) {
      return (signUpGoogle || signUpGithub) && signUpEmail;
  },

  _canSignUp: function(signUpGoogle, signUpGithub, signUpEmail) {
      return signUpGoogle || signUpGithub || signUpEmail;
  },

  _invitokenExists: function(tok){
      if (tok) {
          this._createHiddenFormElement('invitoken', this.invitoken);
      }
  },

  _planExists: function(plan){
      if (plan) {
          this._createHiddenFormElement('plan', this.plan);
      }
  },

  _createHiddenFormElement: function(name, value){
      var element = document.createElement('input');
          element.type = 'hidden';
          element.name = name;
          element.value = value;
          this.$.form.appendChild(element);
  }
});
