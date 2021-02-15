import '../node_modules/@polymer/polymer/polymer-legacy.js';
import '../node_modules/@polymer/paper-input/paper-input.js';
import '../node_modules/@polymer/paper-input/paper-textarea.js';
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
        color: var(--black-opaque-87);
        text-align: center;
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

      paper-material {
        background-color: var(--form-background);
        display: block;
        padding: 8px 32px 32px;
        @apply (--shadow-elevation-2dp);
        max-width: 600px;
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

      #name,
      #signUp-email {
        width: 49%;
        display: inline-block;
      }
      @media screen and (max-width: 700px) {
        #name,
        #signUp-email {
          width: auto;
          display: block;
        }
      }
    </style>

    <div class="logo-solo">
      <a href="/"
        ><paper-icon-button
          src="images/logo-vertical.svg"
          on-tap="_logoClicked"
          id="logoButton"
        ></paper-icon-button
      ></a>
    </div>

    <h1>Request information</h1>
    <iron-form id="signUpForm">
      <paper-material elevation="1">
        <form method="post" action="/api/v1/request-info" enctype="application/json" id="form">
          <paper-input
            name="name"
            id="name"
            label="Full name"
            required
            auto-validate
            autofocus
          ></paper-input>
          <paper-input
            name="email"
            id="signUp-email"
            label="Email"
            required
            auto-validate
            autofocus
            type="email"
          ></paper-input>
          <paper-input
            name="details"
            id="signUp-details"
            label="Company / Job description"
            auto-validate
            autofocus
          ></paper-input>
          <paper-textarea
            name="comments"
            id="signUp-comments"
            label="Describe your infrastructure and the problem you want to solve"
            auto-validate
            autofocus
            rows="7"
          ></paper-textarea>
          <paper-button raised on-tap="_submitButtonHandler" disabled id="signUpSubmit">
            <paper-spinner id="spinner" hidden$="[[!loading]]" active="[[loading]]"></paper-spinner>
            <div hidden$="[[loading]]">Send request</div>
          </paper-button>
        </form>
        <div class="output"></div>
      </paper-material>
    </iron-form>
  `,
  is: 'landing-request-pricing',

  properties: {
    loading: {
      type: Boolean,
      value: false,
    },

    invitoken: String,

    csrfToken: {
      type: String,
      value: '',
    },
  },

  observers: ['_invitokenExists(invitoken)'],

  attached() {
    const that = this;
    const validate = () => {
      // Validate the entire form to see if we should enable the `Submit` button.
      const ret = that.$.signUpForm.validate();
      that.$.signUpSubmit.disabled = !ret;
      return ret;
    };
    this.$.signUpForm.addEventListener('keyup', event => {
      const submitDisabled = that.$.signUpSubmit.disabled;
      that.$.signUpForm.querySelector('paper-button > div').innerHTML = 'Send request';
      if (validate(event) && !submitDisabled && event.key === 'Enter') that._submitButtonHandler();
    });
    this.$.signUpForm.addEventListener('change', validate);

    this.$.signUpForm.addEventListener('iron-form-error', event => {
      console.warn('GOT ERROR!', event.detail);
      that.loading = false;
      that.$.signUpForm.querySelector('paper-button > div').innerHTML =
        event.detail.request.xhr.statusText || event.detail.error.message;
    });
    this.$.signUpForm.addEventListener('iron-form-response', event => {
      console.warn('REQUEST SUCCESS!', event);
      that.loading = false;
      that.$.signUpForm.querySelector('form').hidden = true;
      that.$.signUpForm.querySelector('.output').innerHTML =
        "Thank you for contacting us! We will get back to you as soon as possible. <br/> <a href='/pricing'>Back to pricing page</a>";
    });
    this.$.signUpForm.addEventListener('iron-form-presubmit', () => {
      that.$.signUpForm.request.headers['Csrf-Token'] = this.csrfToken;
      that.fire('user-action', 'request-pricing submit');
    });
  },
  _submitButtonHandler() {
    this.loading = true;
    this.$.signUpSubmit.disabled = true;
    this.$.signUpForm.querySelector('.output').innerHTML = '';
    this.$.signUpForm.submit();
  },
  _logoClicked() {
    this.fire('user-action', 'logo click on request-pricing');
  },
  _signInClicked() {
    this.fire('user-action', 'request-pricing click');
  },
  _invitokenExists(tok) {
    console.log('tok', tok);
    if (tok) {
      const element = document.createElement('input');
      element.type = 'hidden';
      element.name = 'invitoken';
      element.value = this.invitoken;
      this.$.form.appendChild(element);
    }
  },
});
