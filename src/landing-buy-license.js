import '@polymer/polymer/polymer-legacy.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-textarea.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-spinner/paper-spinner.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-material/paper-material.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/communication-icons.js';
import '@polymer/gold-cc-input/gold-cc-input.js';
import '@polymer/gold-cc-cvc-input/gold-cc-cvc-input.js';
import '@polymer/gold-phone-input/gold-phone-input.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import './shared-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style>
    :host {
        background-color: #fff;
        padding-top: 100px;
        padding-bottom: 120px;
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
        width: 24px;
        height: 24px;
        margin: 0 auto;
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
        color: var(--red-color);
        white-space: pre-wrap;
        margin-top: 16px;
        margin-bottom: 16px;
        color: var(--error-color);
        text-align: center;
    }

    div.forgot {
        text-align: right;
        font-size: 12px;
    }

    a#signUpLink {
        float: left;
    }

    paper-material {
        background-color: #f7f7f7;
        display: block;
        padding: 8px 32px 32px;
        @apply(--shadow-elevation-2dp);
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

    div.head {
        max-width: 650px;
        margin: 0 auto;
        position: relative;
    }

    div.head h1 {
        display: block;
        text-align: center;
    }

    div.back {
        position: absolute;
        left: 0;
        text-transform: uppercase;
        font-size: 0.8em;
    }

    div.back a {
        line-height: 4.5em;
        vertical-align: middle;
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
    .total-cost {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        background-color: #eee;
        padding: 8px;
        text-align: center;
    }
    .cost {
        font-size: 0.9em;
    }

    @media screen and (max-width: 700px) {
        #name, #signUp-email {
            width: auto;
            display: block;
        }   
    }
    paper-input#vcpus {
        width: 100px;
        text-align: center;
        --paper-input-container-input: {
            font-size: 18px;
            padding-top: 8px;
        };
    }

    paper-input#dockerhubid {
        width: 50%;
    }

    span.exp {
        display: inline-block;
        line-height: 2em;
        vertical-align: bottom;
        font-size: 1.2em;
        padding: 1px 4px;
    }

    gold-cc-cvc-input {
        display: inline-block;
        padding-left: 29px;
    }

    gold-cc-input {
        width: 250px;
    }

    paper-radio-button {
      display: block;
      --paper-radio-button-checked-color: var(--app-accent-color);
      --paper-radio-button-checked-ink-color: var(--app-accent-color);
      /*--paper-checkbox-unchecked-color: var(--paper-green-900);
      --paper-checkbox-unchecked-ink-color: var(--paper-green-900);
      --paper-checkbox-label-color: var(--paper-green-500);*/
      --paper-radio-button-label-spacing: 0;
      /*--paper-radio-button-margin: 8px 16px 8px 0;*/
      --paper-radio-button-vertical-align: top;
      --paper-radio-button-radio-container: {
            margin-right: 24px;
            float: left;
      }
    }

    paper-radio-button .subtitle {
      display: block;
      font-size: 0.8em;
      margin-top: 2px;
      max-width: 150px;
      opacity: 0.54;
    }

    paper-radio-button {
        vertical-align: text-top;
    }

    .field {
        padding-right: 24px;
        display: inline-block;
        margin-bottom: 24px;
    }

    iron-icon[slot="prefix"] {
        margin-right: 16px;
    }

    #exp-month, #exp-year {
        width: 54px;
        display: inline-block;
    }

    #cc-cvc {
        width: 80px;
        display: inline-block;
    }

    #address-zip {
        width: 100px;
    }

    #contact-info {
        width: 250px;
        display: inline-block;
        margin-right: 64px;
        margin-bottom: 32px;
    }

    #payment-info {
        width: 250px;
        display: inline-block;
        position: relative;
        vertical-align: top;
        margin-bottom: 32px;
    }

    #order-details {
        margin-top: 32px;
        margin-bottom: 32px;
    }

    paper-checkbox {
        --paper-checkbox-ink-size: 48px;
        --paper-checkbox-label-color: #666;
        --paper-checkbox-checked-color: var(--app-accent-color);
        text-align: center;
        width: 100%;
        font-size: 12px;
    }

    textarea#instructions {
        background-color: rgb(40, 44, 52);
        color: rgb(226, 229, 233);
        overflow: auto;
        padding: 12px;
        font-size: 12px;
        font-family: monospace;
        text-align: left;
        white-space: pre;
        border: none;
        outline: none;
    }

    div#success {
        margin-top: 16px;
        margin-bottom: 16px;
    }

    div#notice {
        font-size: 13px;
        color: #444;
    }
</style>

<div class="logo-solo"><a href="/"><paper-icon-button src="images/logo-vertical.svg" on-tap="_logoClicked" id="logoButton"></paper-icon-button></a></div>

<div class="head">
    <div class="back">
        <a href="/get-started"><iron-icon icon="icons:arrow-back"></iron-icon></a>
    </div>
    <h1>Purchase Enterprise Edition License</h1>
</div>
<iron-form id="buyLicence">
    <paper-material elevation="1">
        <form method="POST" action="/api/v1/license" id='form' hidden=[[licenseKey]]>
            <div id="contact-info">
                <h4>Contact Information</h4>

                <paper-input id="name" name="name" label="Name" value="{{contact.name}}" pattern="[a-zA-Z0-9\. ]*" required auto-validate autocomplete="cc-name" always-float-label error-message="Alphanumerics allowed only." class="form-input" autofocus></paper-input>
                <paper-input id="email" name="email" label="Email" always-float-label type="email" value="{{contact.email}}" class="form-input" auto-validate>
                    <iron-icon icon="communication:email" slot="prefix"></iron-icon>
                </paper-input>
                <paper-textarea id="address" name="address" label="Address" value="{{contact.address}}" required auto-validate autocomplete="street-address" class="form-input" always-float-label></paper-textarea>
                <!--paper-input id="address" name="phone" label="Phone number" pattern="[0-9 \+\(\)]+" always-float-label class="form-input" value="{{contact.phone}}" auto-validate>
                    <iron-icon icon="communication:phone" slot="prefix"></iron-icon>
                </paper-input-->
            </div>
            <div id="payment-info">
                <h4>Payment information</h4>

                <gold-cc-input id="cc" required auto-validate class="form-input"
                    value="{{stripePayload.number}}"
                    label="Credit Card number"
                    card-type="{{cardType}}">
                </gold-cc-input>

                <paper-input id="exp-month" value="{{stripePayload.exp_month}}" pattern="0?[1-9]|1[012]" class="exp form-input" label="Expiration" always-float-label auto-validate></paper-input>
                <span class="exp">/</span>
                <paper-input id="exp-year" value="{{stripePayload.exp_year}}" class="exp form-input" pattern="[0-9][0-9]" auto-validate></paper-input>

                <gold-cc-cvc-input id="cc-cvc" required auto-validate class="form-input" card-type="[[cardType]]" value="{{stripePayload.cvc}}"></gold-cc-cvc-input>

                <paper-input id="address-zip" label="Zip Code" value="{{stripePayload.address_zip}}" class="form-input" pattern="[a-zA-Z0-9]*" error-message="Alphanumerical only." auto-validate></paper-input>
                <input type="hidden" name="token" id="token" />
            </div>
            <div id="order-details">
                <h4>Order details</h4>
                <paper-input id="vcpus" name="vcpus" label="Number of vcpus" type="number" min=300 value={{vcpus}} class="field form-input" required auto-validate always-float-label pattern="[0-9]*" error-message="Number of vcpus is wrong"></paper-input>

                <paper-radio-group name="interval">
                    <paper-radio-button checked="{{annualy}}" class="field" name="annual" value="annual">
                        Annual payment
                        <span class="subtitle">
                            $1/vcpu per month
                        </span>
                    </paper-radio-button>
                    <paper-radio-button checked="{{!annualy}}" class="field" name="monthly" value="monthly">
                        Monthly payment
                        <span class="subtitle">
                            $1.2/vcpu per month
                        </span>
                    </paper-radio-button>
                </paper-radio-group>
            </div>
            <paper-checkbox id="accept" checked={{accept}}>I accept the <a href="/privacy-policy" target="_blank">Privacy Policy</a> and the <a href="/tos" target="_blank">Terms of Service</a></paper-checkbox>
            <paper-button id="submitButton" on-tap="submit" disabled="[[_isSubmitDisabled(formReady, loading)]]">
                <paper-spinner id="spinner" hidden$="[[!loading]]" active="[[loading]]"></paper-spinner>
                <div hidden$="[[loading]]">
                    Purchase for $[[cost]] <span hidden$="[[annualy]]">/month</span> <span hidden$="[[!annualy]]">/year</span>
                </div>
            </paper-button>
            <div id="output" class="output"></div>
            <div id="notice">You will receive an email with your license key and download instructions after submitting this form.</div>
        </form>
        <div id="success" hidden$=[[!licenseKey]]><h2>Transaction successful</h2>
            <p>Congratulations for purchasing your Mist.io Enterprise Edition License!</p> <p>In order to install Mist.io EE, you will need a Linux machine with at least 6GB of free RAM. Docker and Docker Compose need to be preinstalled and port 80 needs to be available.</p>
            <p>Provided the above, use the following steps to complete the installation.</p>
            <textarea id="instructions" rows="8" cols="80" onclick="this.focus();if (typeof(textareaSelected) === 'undefined') { textareaSelected = true; this.select() }" readonly="readonly">[[instructions]]</textarea>
            <p hidden$=[[registryPassword]]>
                Your registry.ops.mist.io password was not changed. <a href="https://gitlab.ops.mist.io/users/password/new">Forgot password?</a>
            </p>
            <p>Also check out the <a href="https://github.com/mistio/mist.ee/#configuring-mistio" target="new">configuration guide</a>.</p>
        </div>
    </div>
    </paper-material>
</iron-form>`,

  is: 'landing-buy-license',

  properties: {
    loading: {
      type: Boolean,
      value: false,
    },

    contact: {
      type: Object,
      value() {
        return {
          name: undefined,
          address: undefined,
          email: '',
        };
      },
    },

    stripePayload: {
      type: Object,
      value() {
        return {
          number: '',
          exp_month: '',
          exp_year: '',
          cvc: '',
          address_zip: undefined,
        };
      },
    },

    vcpus: {
      type: Number,
      value: 300,
    },

    dockerhubid: String,

    cost: {
      type: Number,
      computed: '_computeCost(vcpus, annualy)',
    },

    annualy: {
      type: Boolean,
      value: true,
    },

    annualCost: {
      type: Number,
      value: 1,
    },

    monthlyCost: {
      type: Number,
      value: 1.2,
    },

    formReady: {
      type: Boolean,
      computed: '_computeFormReady(vcpus, dockerhubid, contact.*, stripePayload.*, accept)',
      value: true,
    },

    accept: {
      type: Boolean,
      value: false,
    },

    stripePublicApikey: {
      type: String,
      value: '',
    },

    instructions: {
      type: String,
      value: '',
    },

    registryUsername: {
      type: String,
      value: '',
    },

    licenseKey: {
      type: String,
      value: '',
    },

    registryPassword: {
      type: String,
      value: '',
    },

    csrfToken: {
      type: 'string',
      value: '',
    },
  },

  attached() {
    const that = this;
    this.$.buyLicence.addEventListener('iron-form-response', event => {
      that.loading = false;
      that.registryUsername = event.detail.xhr.response.username;
      that.registryPassword = event.detail.xhr.response.password;
      that.licenseKey = event.detail.xhr.response.license_key;
      that.instructions = event.detail.xhr.response.instructions;
      this.fire('user-action', 'purchase license sucess');
    });
    this.$.buyLicence.addEventListener('iron-form-presubmit', () => {
      that.$.buyLicence.request.headers['Csrf-Token'] = that.csrfToken;
    });
    this.$.buyLicence.addEventListener('iron-form-error', event => {
      that.loading = false;
      that.$.buyLicence.querySelector('div.output').innerHTML =
        event.detail.request.xhr.statusText || event.detail.error.message;
    });
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://js.stripe.com/v2/';
    document.getElementsByTagName('head')[0].appendChild(script);
  },

  submit() {
    this.fire('user-action', 'purchase license submit');
    if (this.formReady && typeof window.Stripe !== 'undefined') {
      this.formReady = false;
      this.loading = true;
      // extra stripe validation
      const isValid =
        window.Stripe.card.validateCardNumber(this.stripePayload.number) &&
        window.Stripe.card.validateExpiry(
          this.stripePayload.exp_month,
          this.stripePayload.exp_year,
        ) &&
        window.Stripe.card.validateCVC(this.stripePayload.cvc) &&
        this.stripePayload.address_zip !== '';

      if (isValid) {
        const that = this;
        window.Stripe.setPublishableKey(this.stripePublicApikey);
        window.Stripe.card.createToken(this.stripePayload, (status, response) => {
          if (response.error) {
            console.log('stripeResponseHandler failed', response.error.message);
            that.showError(response.error.message);
          } else {
            that.submitPayment(status, response);
          }
        });
        this.set('sendingData', true);
      } else {
        let errorText = 'There seems to be an error with the';
        if (!window.Stripe.card.validateCardNumber(this.stripePayload.number)) {
          errorText += ' card number';
          this.$['cc-cvc'].invalid = true;
        }

        if (
          !window.Stripe.card.validateExpiry(
            this.stripePayload.exp_month,
            this.stripePayload.exp_year,
          )
        ) {
          errorText += ' expiration date';
          this.$['exp-year'].invalid = true;
        }

        if (!window.Stripe.card.validateCVC(this.stripePayload.cvc)) {
          errorText += ' cvc';
          this.$['cc-cvc'].invalid = true;
        }

        errorText += '.';

        this.showError(errorText);
      }
    }
  },

  submitPayment(status, response) {
    this.$.buyLicence.headers['Csrf-Token'] = this.csrfToken;
    this.$.token.value = response.id;
    this.$.buyLicence.submit();
  },

  _computeFormReady(vcpus, dockerhubid, contact, stripePayload) {
    // move input focus for month/year if length == 2
    if (stripePayload.path.startsWith('stripePayload.')) this.moveFocus(stripePayload);

    // if vcpus empty not ready
    if (this.vcpus < 10) {
      return false;
    }
    // if any of contact or payload is empty, form not ready
    let keys = Object.keys(this.contact);
    for (let i = 0; i < keys.length; i++) {
      const prop = keys[i];
      if (
        Object.prototype.hasOwnProperty.call(this.contact, prop) &&
        (this.contact[prop] === '' || this.contact[prop] === undefined)
      ) {
        return false;
      }
    }
    keys = Object.keys(this.stripePayload);
    for (let i = 0; i < keys.length; i++) {
      const prop = keys[i];
      if (
        Object.prototype.hasOwnProperty.call(this.stripePayload, prop) &&
        (this.stripePayload[prop] === '' || this.stripePayload[prop] === undefined)
      ) {
        return false;
      }
    }
    // if any of the fields is invalid, form is not ready
    const fields = this.$.buyLicence.querySelectorAll('.form-input');
    for (let i = 0; i < fields.length; i++) {
      if (fields[i].invalid) {
        return false;
      }
    }

    // if user does not accept terms, form is not ready
    if (!this.accept) return false;

    // else form is ready
    console.log('form ready');
    return this.$.buyLicence.validate();
  },

  _computeCost(vcpus, annualy) {
    if (vcpus > 0 && annualy) {
      return (vcpus * 12 * this.annualCost).toFixed(2);
    }
    if (vcpus > 0 && !annualy) {
      return (vcpus * this.monthlyCost).toFixed(2);
    }
    this.set('vcpus', 0);
    return 0;
  },

  moveFocus(stripePayload) {
    // if exp_mont has 2 digits move to year
    if (stripePayload.path === 'stripePayload.exp_month' && stripePayload.value.length === 2) {
      this.$.form.querySelector('paper-input#exp-year').focus();
    }
    // if exp_year has 2 digits move to cvc
    if (stripePayload.path === 'stripePayload.exp_year' && stripePayload.value.length === 2) {
      this.$.form.querySelector('gold-cc-cvc-input').focus();
    }
    // if exp_year has 2 digits move to cvc
    if (stripePayload.path === 'stripePayload.cvc' && stripePayload.value.length === 3) {
      this.$.form.querySelector('paper-input#address-zip').focus();
    }
  },

  showError(result) {
    this.set('sendingData', false);
    this.set('formError', true);
    console.log(result);
    if (result.error) this.$.output.textContent = result.error.message;
    else if (!result) this.$.output.textContent = '';
    else this.$.output.textContent = result;
    this.loading = false;
  },

  _logoClicked() {
    /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "_" }] */
    this.fire('user-action', 'logo click');
  },

  _signInClicked() {
    this.fire('user-action', 'purchase-license click');
  },

  _isSubmitDisabled(formReady, loading) {
    return !formReady || loading;
  },
});
