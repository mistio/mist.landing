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

            #name, #signUp-email {
                width: 49%;
                display: inline-block;
            }
            @media screen and (max-width: 700px) {
                #name, #signUp-email {
                    width: auto;
                    display: block;
                }   
            }
        </style>


        <div class="logo-solo"><a href="/"><paper-icon-button src="images/logo-vertical.svg" on-tap="_logoClicked" id="logoButton"></paper-icon-button></a></div>

        <h1>Request information</h1>
        <iron-form id="signUpForm">
            <paper-material elevation="1">
                <form method="post" action="/api/v1/request-info" enctype='application/json' id='form'>
                    <paper-input name="name" id="name" label="Full name" required auto-validate autofocus></paper-input>
                    <paper-input name="email" id="signUp-email" label="Email" required auto-validate autofocus type="email"></paper-input>
                    <paper-input name="details" id="signUp-details" label="Company name and job description" auto-validate autofocus></paper-input>
                    <paper-dropdown-menu name="company-size" id="company-size" label="Number of employees" required auto-validate autofocus>
                        <paper-listbox slot="dropdown-content" selected="-1">
                            <paper-item>1-99</paper-item>
                            <paper-item>100-999</paper-item>
                            <paper-item>1,000-9,999</paper-item>
                            <paper-item>10,000+</paper-item>
                        </paper-listbox>
                    </paper-dropdown-menu>
                    <paper-dropdown-menu name="country" id="country" label="Country" required auto-validate autofocus>
                        <paper-listbox slot="dropdown-content" selected="-1">
                            <paper-item>Afghanistan</paper-item>
                            <paper-item>Albania</paper-item>
                            <paper-item>Algeria</paper-item>
                            <paper-item>Andorra</paper-item>
                            <paper-item>Angola</paper-item>
                            <paper-item>Antigua and Barbuda</paper-item>
                            <paper-item>Argentina</paper-item>
                            <paper-item>Armenia</paper-item>
                            <paper-item>Australia</paper-item>
                            <paper-item>Austria</paper-item>
                            <paper-item>Azerbaijan</paper-item>
                            <paper-item>Bahamas</paper-item>
                            <paper-item>Bahrain</paper-item>
                            <paper-item>Bangladesh</paper-item>
                            <paper-item>Barbados</paper-item>
                            <paper-item>Belarus</paper-item>
                            <paper-item>Belgium</paper-item>
                            <paper-item>Belize</paper-item>
                            <paper-item>Benin</paper-item>
                            <paper-item>Bhutan</paper-item>
                            <paper-item>Bolivia</paper-item>
                            <paper-item>Bosnia and Herzegovina</paper-item>
                            <paper-item>Botswana</paper-item>
                            <paper-item>Brazil</paper-item>
                            <paper-item>Brunei</paper-item>
                            <paper-item>Bulgaria</paper-item>
                            <paper-item>Burkina Faso</paper-item>
                            <paper-item>Burundi</paper-item>
                            <paper-item>Cabo Verde</paper-item>
                            <paper-item>Cambodia</paper-item>
                            <paper-item>Cameroon</paper-item>
                            <paper-item>Canada</paper-item>
                            <paper-item>Central African Republic (CAR)</paper-item>
                            <paper-item>Chad</paper-item>
                            <paper-item>Chile</paper-item>
                            <paper-item>China</paper-item>
                            <paper-item>Colombia</paper-item>
                            <paper-item>Comoros</paper-item>
                            <paper-item>Congo, Democratic Republic of the</paper-item>
                            <paper-item>Congo, Republic of the</paper-item>
                            <paper-item>Costa Rica</paper-item>
                            <paper-item>Cote d'Ivoire</paper-item>
                            <paper-item>Croatia</paper-item>
                            <paper-item>Cuba</paper-item>
                            <paper-item>Cyprus</paper-item>
                            <paper-item>Czechia</paper-item>
                            <paper-item>Denmark</paper-item>
                            <paper-item>Djibouti</paper-item>
                            <paper-item>Dominica</paper-item>
                            <paper-item>Dominican Republic</paper-item>
                            <paper-item>Ecuador</paper-item>
                            <paper-item>Egypt</paper-item>
                            <paper-item>El Salvador</paper-item>
                            <paper-item>Equatorial Guinea</paper-item>
                            <paper-item>Eritrea</paper-item>
                            <paper-item>Estonia</paper-item>
                            <paper-item>Eswatini (formerly Swaziland)</paper-item>
                            <paper-item>Ethiopia</paper-item>
                            <paper-item>Fiji</paper-item>
                            <paper-item>Finland</paper-item>
                            <paper-item>France</paper-item>
                            <paper-item>Gabon</paper-item>
                            <paper-item>Gambia</paper-item>
                            <paper-item>Georgia</paper-item>
                            <paper-item>Germany</paper-item>
                            <paper-item>Ghana</paper-item>
                            <paper-item>Greece</paper-item>
                            <paper-item>Grenada</paper-item>
                            <paper-item>Guatemala</paper-item>
                            <paper-item>Guinea</paper-item>
                            <paper-item>Guinea-Bissau</paper-item>
                            <paper-item>Guyana</paper-item>
                            <paper-item>Haiti</paper-item>
                            <paper-item>Honduras</paper-item>
                            <paper-item>Hungary</paper-item>
                            <paper-item>Iceland</paper-item>
                            <paper-item>India</paper-item>
                            <paper-item>Indonesia</paper-item>
                            <paper-item>Iran</paper-item>
                            <paper-item>Iraq</paper-item>
                            <paper-item>Ireland</paper-item>
                            <paper-item>Israel</paper-item>
                            <paper-item>Italy</paper-item>
                            <paper-item>Jamaica</paper-item>
                            <paper-item>Japan</paper-item>
                            <paper-item>Jordan</paper-item>
                            <paper-item>Kazakhstan</paper-item>
                            <paper-item>Kenya</paper-item>
                            <paper-item>Kiribati</paper-item>
                            <paper-item>Kosovo</paper-item>
                            <paper-item>Kuwait</paper-item>
                            <paper-item>Kyrgyzstan</paper-item>
                            <paper-item>Laos</paper-item>
                            <paper-item>Latvia</paper-item>
                            <paper-item>Lebanon</paper-item>
                            <paper-item>Lesotho</paper-item>
                            <paper-item>Liberia</paper-item>
                            <paper-item>Libya</paper-item>
                            <paper-item>Liechtenstein</paper-item>
                            <paper-item>Lithuania</paper-item>
                            <paper-item>Luxembourg</paper-item>
                            <paper-item>Madagascar</paper-item>
                            <paper-item>Malawi</paper-item>
                            <paper-item>Malaysia</paper-item>
                            <paper-item>Maldives</paper-item>
                            <paper-item>Mali</paper-item>
                            <paper-item>Malta</paper-item>
                            <paper-item>Marshall Islands</paper-item>
                            <paper-item>Mauritania</paper-item>
                            <paper-item>Mauritius</paper-item>
                            <paper-item>Mexico</paper-item>
                            <paper-item>Micronesia</paper-item>
                            <paper-item>Moldova</paper-item>
                            <paper-item>Monaco</paper-item>
                            <paper-item>Mongolia</paper-item>
                            <paper-item>Montenegro</paper-item>
                            <paper-item>Morocco</paper-item>
                            <paper-item>Mozambique</paper-item>
                            <paper-item>Myanmar (formerly Burma)</paper-item>
                            <paper-item>Namibia</paper-item>
                            <paper-item>Nauru</paper-item>
                            <paper-item>Nepal</paper-item>
                            <paper-item>Netherlands</paper-item>
                            <paper-item>New Zealand</paper-item>
                            <paper-item>Nicaragua</paper-item>
                            <paper-item>Niger</paper-item>
                            <paper-item>Nigeria</paper-item>
                            <paper-item>North Korea</paper-item>
                            <paper-item>North Macedonia (formerly Macedonia)</paper-item>
                            <paper-item>Norway</paper-item>
                            <paper-item>Oman</paper-item>
                            <paper-item>Pakistan</paper-item>
                            <paper-item>Palau</paper-item>
                            <paper-item>Palestine</paper-item>
                            <paper-item>Panama</paper-item>
                            <paper-item>Papua New Guinea</paper-item>
                            <paper-item>Paraguay</paper-item>
                            <paper-item>Peru</paper-item>
                            <paper-item>Philippines</paper-item>
                            <paper-item>Poland</paper-item>
                            <paper-item>Portugal</paper-item>
                            <paper-item>Qatar</paper-item>
                            <paper-item>Romania</paper-item>
                            <paper-item>Russia</paper-item>
                            <paper-item>Rwanda</paper-item>
                            <paper-item>Saint Kitts and Nevis</paper-item>
                            <paper-item>Saint Lucia</paper-item>
                            <paper-item>Saint Vincent and the Grenadines</paper-item>
                            <paper-item>Samoa</paper-item>
                            <paper-item>San Marino</paper-item>
                            <paper-item>Sao Tome and Principe</paper-item>
                            <paper-item>Saudi Arabia</paper-item>
                            <paper-item>Senegal</paper-item>
                            <paper-item>Serbia</paper-item>
                            <paper-item>Seychelles</paper-item>
                            <paper-item>Sierra Leone</paper-item>
                            <paper-item>Singapore</paper-item>
                            <paper-item>Slovakia</paper-item>
                            <paper-item>Slovenia</paper-item>
                            <paper-item>Solomon Islands</paper-item>
                            <paper-item>Somalia</paper-item>
                            <paper-item>South Africa</paper-item>
                            <paper-item>South Korea</paper-item>
                            <paper-item>South Sudan</paper-item>
                            <paper-item>Spain</paper-item>
                            <paper-item>Sri Lanka</paper-item>
                            <paper-item>Sudan</paper-item>
                            <paper-item>Suriname</paper-item>
                            <paper-item>Sweden</paper-item>
                            <paper-item>Switzerland</paper-item>
                            <paper-item>Syria</paper-item>
                            <paper-item>Taiwan</paper-item>
                            <paper-item>Tajikistan</paper-item>
                            <paper-item>Tanzania</paper-item>
                            <paper-item>Thailand</paper-item>
                            <paper-item>Timor-Leste</paper-item>
                            <paper-item>Togo</paper-item>
                            <paper-item>Tonga</paper-item>
                            <paper-item>Trinidad and Tobago</paper-item>
                            <paper-item>Tunisia</paper-item>
                            <paper-item>Turkey</paper-item>
                            <paper-item>Turkmenistan</paper-item>
                            <paper-item>Tuvalu</paper-item>
                            <paper-item>Uganda</paper-item>
                            <paper-item>Ukraine</paper-item>
                            <paper-item>United Arab Emirates (UAE)</paper-item>
                            <paper-item>United Kingdom (UK)</paper-item>
                            <paper-item>United States of America (USA)</paper-item>
                            <paper-item>Uruguay</paper-item>
                            <paper-item>Uzbekistan</paper-item>
                            <paper-item>Vanuatu</paper-item>
                            <paper-item>Vatican City (Holy See)</paper-item>
                            <paper-item>Venezuela</paper-item>
                            <paper-item>Vietnam</paper-item>
                            <paper-item>Yemen</paper-item>
                            <paper-item>Zambia</paper-item>
                            <paper-item>Zimbabwe</paper-item>
                        </paper-listbox>
                    </paper-dropdown-menu>
                    <paper-textarea name="comments" id="signUp-comments" label="Describe your infrustructure and the problem you want to solve" auto-validate autofocus rows="7"></paper-textarea>
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
            value: false
        },
        invitoken: String
    },

    observers: [
        '_invitokenExists(invitoken)'
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
            that.$.signUpForm.querySelector('paper-button > div').innerHTML = "Send request";
            if (validate(event) && !submitDisabled && event.key == "Enter")
                that._submitButtonHandler();
        });
        this.$.signUpForm.addEventListener('change', validate);

        this.$.signUpForm.addEventListener('iron-form-error', function(event) {
            console.warn("GOT ERROR!", event.detail);
            that.loading = false;
            that.$.signUpForm.querySelector('paper-button > div').innerHTML = event.detail.request.xhr.statusText || event.detail.error.message;
        });
        this.$.signUpForm.addEventListener('iron-form-response', function(event) {
            console.warn("REQUEST SUCCESS!", event);
            that.loading = false;
            that.$.signUpForm.querySelector('form').hidden = true;
            that.$.signUpForm.querySelector('.output').innerHTML = "Thank you for contacting us! We will get back to you as soon as possible. <br/> <a href='/pricing'>Back to pricing page</a>";
        });
        this.$.signUpForm.addEventListener('iron-form-presubmit', function(event) {
            that.$.signUpForm.request.headers['Csrf-Token'] = CSRF_TOKEN;
            that.fire('user-action', 'request-pricing submit')
        });
    },
    _submitButtonHandler:  function(event) {
        this.loading = true;
        this.$.signUpSubmit.disabled = true;
        this.$.signUpForm.querySelector('.output').innerHTML = '';
        this.$.signUpForm.submit();
    },
    _logoClicked: function(event) {
        this.fire('user-action', 'logo click on request-pricing');
    },
    _signInClicked: function(event) {
        this.fire('user-action', 'request-pricing click')
    },
    _invitokenExists: function(tok){
        console.log('tok', tok);
        if (tok) {
            var element = document.createElement('input');
            element.type = 'hidden';
            element.name = 'invitoken';
            element.value = this.invitoken;
            this.$.form.appendChild(element);
        }
    },
});
