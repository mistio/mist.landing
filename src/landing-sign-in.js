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
import './landing-icons.js';
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
        width: 305px;
        padding-left: 4px;
      }

      paper-button > iron-icon {
        padding: 7px;
        background-color: #fff;
        float: left;
        margin-top: -7px;
      }

      .textBtn {
        padding-left: 7px;
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

      paper-button.white.ldap-selected.true:not([disabled]) {
        background-color: transparent;
        box-shadow: 0 0 0 0 transparent;
        background-color: transparent;
        padding-left: 0;
        margin: 0 0 0 -3px;
      }

      paper-button > span > iron-icon.users {
        color: #444;
        background-color: transparent;
        padding: 7px 2px 7px 12px;
        float: left;
        margin-top: -5px;
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
        @apply (--layout-fit);
        z-index: -1;
      }

      paper-material {
        background-color: var(--form-background);
        display: block;
        padding: 8px 32px 32px;
        @apply (--form-elevation);
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
      <div class="logo-solo">
        <a href="/"><paper-button id="logo" on-tap="_logoClicked"></paper-button></a>
      </div>

      <h1>Sign in to your account</h1>
      <iron-form id="signInForm">
        <paper-material elevation="1">
          <div
            hidden$="[[_canSignIn(signInGoogle, signInGithub, signInEmail,
            signInLdap, signInAD, signInMs365)]]"
          >
            Sign In has been disabled.
          </div>
          <div hidden="[[_ldapSelected]]">
            <paper-button
              raised=""
              class="white"
              on-tap="_socialAuthGoogle"
              id="signInBtnGoogle"
              hidden$="[[!signInGoogle]]"
              ><iron-icon icon="landing:google"></iron-icon>Sign in with Google</paper-button
            >
            <paper-button
              raised=""
              class="white"
              on-tap="_socialAuthGithub"
              id="signInBtnGithub"
              hidden$="[[!signInGithub]]"
              ><iron-icon icon="landing:github"></iron-icon>Sign in with Github</paper-button
            >
            <paper-button
              raised=""
              class="white"
              on-tap="_socialAuthMs365"
              id="signInBtnMs365"
              hidden$="[[!signInMs365]]"
              ><iron-icon icon="landing:ms"></iron-icon>Sign in with Microsoft 365</paper-button
            >
            <paper-button
              raised=""
              class="white"
              on-tap="_socialAuthCILogon"
              id="signInBtnCILogon"
              hidden$="[[!signInCILogon]]"
              ><iron-icon icon="landing:cilogon"></iron-icon>Sign in with CI Logon</paper-button
            >
          </div>
          <paper-button
            raised
            class$="white ldap-selected [[_ldapSelected]]"
            on-tap="_toggleLdap"
            id="signInBtnAd"
            hidden$="[[!signInAD]]"
          >
            <span hidden$="[[_ldapSelected]]"
              ><iron-icon class="users" icon="landing:users"></iron-icon
              ><span class="textBtn"> Sign in with Active Directory</span></span
            >
            <span hidden$="[[!_ldapSelected]]"
              ><iron-icon class="back" icon="arrow-back"></iron-icon
            ></span>
          </paper-button>
          <paper-button
            raised
            class$="white ldap-selected [[_ldapSelected]]"
            on-tap="_toggleLdap"
            id="signInBtnLdap"
            hidden$="[[!signInLdap]]"
          >
            <span hidden$="[[_ldapSelected]]"
              ><iron-icon class="users" icon="landing:users"></iron-icon
              ><span class="textBtn"> Sign in with LDAP </span></span
            >
            <span hidden$="[[!_ldapSelected]]"
              ><iron-icon class="back" icon="arrow-back"></iron-icon
            ></span>
          </paper-button>
          <div hidden="[[_ldapSelected]]">
            <div
              class="or"
              hidden$="[[!_hasSeparator(signInGoogle, signInGithub, signInEmail, signInLdap)]]"
            >
              or
            </div>
          </div>
          <form
            method="post"
            action="/login"
            enctype="application/json"
            id="form"
            hidden$="[[!_canShowForm(signInEmail,_ldapSelected)]]"
          >
            <paper-input
              name="username"
              id="signin-username"
              label="Username"
              required$="[[_ldapSelected]]"
              auto-validate
              autofocus
              on-focus="_autoSelect"
              hidden="[[!_ldapSelected]]"
            >
            </paper-input>
            <paper-input
              name="email"
              id="signin-email"
              label="Email"
              required$="[[!_ldapSelected]]"
              auto-validate
              autofocus
              type="email"
              on-focus="_autoSelect"
              hidden="[[_ldapSelected]]"
            >
            </paper-input>
            <paper-input
              name="password"
              id="signin-password"
              label="Password"
              type="password"
              required=""
              auto-validate=""
              on-focus="_autoSelect"
            ></paper-input>
            <paper-button raised="" on-tap="_submitButtonHandler" disabled="" id="signInSubmit">
              <paper-spinner
                id="spinner"
                hidden$="[[!loading]]"
                active="[[loading]]"
              ></paper-spinner>
              <div class="output" hidden$="[[loading]]">
                Sign in with [[loginMethod]]
              </div>
            </paper-button>
            <div class="forbidden-error" hidden$="[[!showRequestWhitelist]]">
              <span id="forbidden"></span>
              <a id="forbiddenlink" href="/request-whitelist-ip" on-tap="_requestWhitelist"></a>
              <paper-spinner
                id="spinner"
                hidden$="[[!showRequestWhitelist]]"
                active="[[loadingIp]]"
              ></paper-spinner>
            </div>
            <div class="forgot" hidden="[[_ldapSelected]]">
              <a href="/forgot-password" id="forgotPasswordLink" on-tap="_forgotPasswordClicked"
                ><span>Forgot password?</span></a
              >
            </div>
          </form>
        </paper-material>
      </iron-form>

      <iron-ajax
        id="requestWhitelist"
        url="/request-whitelist-ip"
        method="POST"
        loading="{{loadingIp}}"
        on-error="_handleRequestError"
        on-response="_handleRequestResponse"
      ></iron-ajax>

      <div class="sign-up">
        <a href="/sign-up" on-tap="_createAccountClicked">Create account</a>
      </div>
    </div>
  `,

  is: 'landing-sign-in',

  properties: {
    loading: {
      type: Boolean,
      value: false,
    },

    loadingIp: {
      type: Boolean,
      value: false,
    },

    signInGoogle: {
      type: Boolean,
      value: false,
    },

    signInGithub: {
      type: Boolean,
      value: false,
    },

    signInLdap: {
      type: Boolean,
      value: false,
    },

    signInAD: {
      type: Boolean,
      value: false,
    },
    signInMs365: {
      type: Boolean,
      value: false,
    },
    signInCILogon: {
      type: Boolean,
      value: false,
    },
    defaultMethod: {
      type: String,
      value: 'email',
    },

    signInEmail: {
      type: Boolean,
      value: false,
    },

    _ldapSelected: {
      type: Boolean,
      value: false,
    },

    loginMethod: {
      type: String,
      value: 'your email',
    },

    showRequestWhitelist: {
      type: Boolean,
      value: false,
    },
    invitoken: String,
    returnTo: String,

    csrfToken: {
      type: String,
      value: '',
    },
  },

  observers: ['_invitokenExists(invitoken)', '_returntoExists(returnTo)'],

  listeners: {
    'iron-form-error': 'handleError',
  },

  attached() {
    if (
      (this.defaultMethod === 'ad' || this.defaultMethod === 'ldap') &&
      (this.signInAD || this.signInLdap)
    )
      this._toggleLdap();
    const that = this;
    const validate = event => {
      console.warn('validating', event);
      // Validate the entire form to see if we should enable the `Submit` button.
      const ret = that.$.signInForm.validate();
      that.$.signInSubmit.disabled = !ret;
      return ret;
    };
    this.$.signInForm.addEventListener('change', validate);
    this.$.signInForm.addEventListener('keyup', event => {
      const submitDisabled = that.$.signInSubmit.disabled;
      if (validate(event) && !submitDisabled && event.key === 'Enter') that._submitButtonHandler();
    });
    this.$.signInForm.addEventListener('iron-form-error', event => {
      console.warn('GOT ERROR!', event.detail);
      that.loading = false;
      let { msg } = event.detail.error;
      if (event.detail.request.xhr.status === 401) msg = 'Unauthorized';
      else if (event.detail.request.xhr.status === 403) msg = 'Forbidden';
      that.$.signInForm.querySelector('.output').innerHTML = msg;
    });
    this.$.signInForm.addEventListener('iron-form-response', event => {
      that.loading = false;
      that.$.signInForm.querySelector('.output').innerHTML = 'SUCCESS!';
      window.location = event.detail.response.redirect;
    });
    this.$.signInForm.addEventListener('iron-form-presubmit', () => {
      that.$.signInForm.headers['Csrf-Token'] = this.csrfToken;
    });
  },

  handleError(event) {
    if (event.detail.request.xhr.status === 403) {
      this.set('showRequestWhitelist', true);
      this.$.signInForm.querySelector('#forbidden').innerHTML =
        '<span class="error"><strong>Error</strong>:</span><br/> Trying to login from a non-whitelisted IP address. You can request ';
      this.$.signInForm.querySelector('#forbiddenlink').innerHTML =
        'whitelisting your current IP via email.';
    }
  },

  _submitButtonHandler() {
    // this.set('showRequestWhitelist', false);
    this.loading = true;
    this.$.signInSubmit.disabled = true;
    this.$.signInForm.querySelector('.output').innerHTML = '';
    this.$.signInForm.submit();
  },

  _logoClicked() {
    this.fire('user-action', 'logo click on sign-in');
  },

  _socialAuthGoogle() {
    this.fire('user-action', 'google sign in');
    window.location = '/social_auth/login/google-oauth2';
  },

  _socialAuthGithub() {
    this.fire('user-action', 'github sign in');
    window.location = '/social_auth/login/github';
  },

  _socialAuthMs365() {
    this.fire('user-action', 'ms365 sign in');
    window.location = '/social_auth/login/azuread-oauth2';
  },

  _socialAuthCILogon() {
    this.fire('user-action', 'cilogon sign in');
    window.location = '/social_auth/login/cilogon-oauth2';
  },

  _toggleLdap() {
    this.set('_ldapSelected', !this._ldapSelected);
    const method = this.signInAD ? 'Active Directory' : 'LDAP';
    this.loginMethod = this._ldapSelected ? method : 'your email';
  },

  _canShowForm(signInEmail, _ldapSelected) {
    return signInEmail || _ldapSelected;
  },

  _createAccountClicked() {
    this.fire('user-action', 'create account click');
  },

  _requestWhitelist(event) {
    event.preventDefault();

    const userEmail = this.$['signin-email'].value;
    this.$.requestWhitelist.headers['Content-Type'] = 'application/json';
    this.$.requestWhitelist.headers['Csrf-Token'] = this.csrfToken;
    this.$.requestWhitelist.body = { email: userEmail };
    this.$.requestWhitelist.generateRequest();
    this.fire('user-action', 'request whitelist click');
  },

  _handleRequestResponse() {
    this.$.signInForm.querySelector('#forbidden').innerHTML =
      '<span class="success"><strong>Request Sent</strong></span>:<br/>Check you email to confirm whitelisting of current IP.';
    this.$.signInForm.querySelector('#forbiddenlink').innerHTML = '';
  },

  _handleRequestError(e) {
    this.$.signInForm.querySelector('#forbidden').innerHTML =
      '<span class="error"><strong>Error</strong>:</span><br/> Service unavailable';
    this.$.signInForm.querySelector('#forbiddenlink').innerHTML = '';
    console.warn('Sign in error', e);
  },

  _forgotPasswordClicked() {
    this.fire('user-action', 'forgot password click');
  },

  _hasSeparator(signInGoogle, signInGithub, signInEmail, signInLdap, signInAD) {
    return (signInGoogle || signInGithub || signInLdap || signInAD) && signInEmail;
  },

  _canSignIn(
    signInGoogle,
    signInGithub,
    signInEmail,
    signInLdap,
    signInAD,
    signInMs365,
    signInCILogon,
  ) {
    return (
      signInGoogle ||
      signInGithub ||
      signInLdap ||
      signInEmail ||
      signInAD ||
      signInMs365 ||
      signInCILogon
    );
  },

  _invitokenExists(tok) {
    if (tok) {
      this._createHiddenFormElement('invitoken', this.invitoken);
    }
  },

  _returntoExists(ret) {
    if (ret) {
      this._createHiddenFormElement('return_to', this.returnTo);
    }
  },

  _createHiddenFormElement(name, value) {
    const element = document.createElement('input');
    element.type = 'hidden';
    element.name = name;
    element.value = value;
    this.$.form.appendChild(element);
  },

  _autoSelect(event) {
    event.target._focusableElement.select();
  },
});
