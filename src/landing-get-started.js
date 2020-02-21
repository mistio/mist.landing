import '../node_modules/@polymer/polymer/polymer-legacy.js';
import '../node_modules/@polymer/paper-button/paper-button.js';
import '../node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js';
//import '../node_modules/typed-text/typed-text.js';
import '../node_modules/@polymer/paper-styles/shadow.js';
import '../node_modules/@polymer/iron-icons/iron-icons.js';
import '../node_modules/@polymer/iron-icons/hardware-icons.js';
import '../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js';
import '../node_modules/@polymer/paper-tooltip/paper-tooltip.js';
import './shared-styles.js';
import { Polymer } from '../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../node_modules/@polymer/polymer/lib/utils/html-tag.js';
import '../node_modules/@polymer/iron-collapse/iron-collapse.js';

Polymer({
  _template: html`
        <custom-style>
            <style is="custom-style" include="iron-flex"></style>
        </custom-style>
        <style include="shared-styles"></style>
        <style>
        paper-material {
            @apply(--shadow-elevation-2dp);
        }
        
        .hero {
            padding: 48px 0;
        }
        
        :host {
            display: block;
        }

        :host {
            --paper-tooltip: {
                font-size: 16px;
                line-height: 24px;
            }
        }
        :host paper-tooltip {
            max-width: 400px;
        }
        .center {
            margin: 0 auto;
        }
        
        .text-center {
            text-align: center;
        }
        
        paper-button {
            background-color: var(--app-accent-color);
            color: #fff;
            font-size: 18px;
            height: 54px;
            font-weight: 500;
        }
        paper-button a {
            color: #fff !important;
        }
        .plan paper-button {
            width: 80% !important;
            margin-top: 24px;
        }
        
        a {
            text-decoration: none;
        }
        
        .col {
            width: 50%;
            box-sizing: border-box;
        }
        
        .pad {
            padding: 16px;
        }
        
        @media only screen and (max-width: 943px) {
            typed-text {
                display: block;
            }
        }

        .contains > .grid-row {
            align-items: flex-start;
        }
        
        #placeholder {
            opacity: 0;
            background-color: grey;
            @apply(--layout-fit);
            z-index: -1;
        }
        
        .plan {
            margin-top: 50px;
            margin-bottom: 50px;
            overflow: auto;
            background-color: #fff;
            @apply(--shadow-elevation-4dp);
        }
        .plan .icon {
            border-radius: 50%;
            background-color: #fff;
            width: 48px;
            padding: 8px;
            height: 48px;
        }
        .plan-head {
            padding: 2rem 0;
            border-bottom: 4px solid;
        }

        .green .plan-head  {
            border-color: green;
        }

        .purple .plan-head {
            border-color: purple;
        }

        .blue .plan-head {
            border-color: #3F51B5;
        }
        .plan, .plan > * {
            box-sizing: border-box;
            margin: 0;
        }

        .title {
            color: #fff;
            text-transform: uppercase;
            padding: 20px 0;
            font-size: 24px;
        }
        
        .plan-body-item {
            padding: 16px;
        }
        
        @media only screen and (max-width: 600px) {
            .plan-body-item {
                min-height: 50px;
            }
        }
        
        .plan-body-item + .plan-body-item {
            border-top: 1px solid #d4d4d4;
        }
        
        .plan-body-item:last-child {
            border-bottom: 1px solid #d4d4d4;
        }
        
        .plan-body-item.highlight {
            background-color: var(--app-background-color);
        }

        .plan-body-item:first-child{
            min-height: 115px;
            max-height: 120px;
        }
        
        .plan-body-item > * {
            width: 100%;
        }
        
        .valign {
            display: block;
        }
        
        .price {
            font-weight: 700;
            line-height: 1;
            padding: 0;
            margin: 8px 0;
        }
        
        .price sub,
        .price sup {
            font-size: 18px;
            font-weight: 300;
            vertical-align: middle;
        }

        sub > sub {
            font-size: 12px !important;
            display: block;
            margin-top: 8px;
        }
        
        .price sup {
            font-size: 24px;
            padding: 0 5px;
        }

        .price sub.month {
            margin-left: -54px;
            top: 6px;
        }

        .price sup.vcpu {
            top: -15px;
        }

        .plan-head sub iron-icon {
            width: 32px;
            height: 32px;
            top: -2px;
            left: -2px;
        }
        
        paper-button#enterpriseBtn {
            background-color: #4caf50;
            /*green*/
            display: block-inline;
            line-height: 54px;
            margin-left: 0 !important;
            margin-right: 0 !important;
        }
        ul {
            padding: 0;
            margin: 0;
        }
        ul li {
            margin-left: 15px;
            clear: both;
            list-style: none;
        }
        .bold {
            font-weight: 500;
        }
        ul.feature-list {
            display: block;
            margin: 1em auto;
        }
        ul.feature-list li {
            margin-left: 0;
            text-align: left;
            cursor: pointer;
            line-height: 1.8em;
            display: flex;
            align-items: center;
            margin-bottom: 16px;
        }
        ul.feature-list li .li-text {
            line-height: 1.4em
        }
        ul.feature-list li p {
            height: 0;
            opacity: 0;
            margin: 0;
            font-size: 0.8em;
            padding-left: 55px;
            transform: translate3d(-100%, 0);
            transition: all 100ms ease-in;
        }
        ul.feature-list li p.visible {
            height: auto;
            margin-top: 4px;
            margin-bottom: 16px;
            opacity: 0.87;
            transform: translate3d(0, 0);
            transition: all 300ms linear;
        }
        ul.feature-list li iron-icon {
            opacity: 0.54;
            margin: 0 16px;
            width: 1em;
            height: 1em;
        }
        @media screen and (min-width: 768px) and (max-width: 1024px) {
            ul.feature-list li {
                font-size: 0.9em;
            }
            ul.feature-list li iron-icon {
                margin: 0 16px;
            }
        }
        @media screen and (max-width: 768px){
            .includes > div {
                text-align: center;
            }
            .includes ul, .includes li {
                margin: 0;
                padding: 0;
            }
        }

        h4.pricetext {
            line-height: 2.36em;
        }

        .grey {
            background-color: var(--app-background-color);
        }

        div.back {
            float: left;
            margin-top: 24px;
            text-transform: uppercase;
            font-size: 0.8em;
            cursor: pointer;
        }

        div.back span {
            line-height: 4.5em;
            vertical-align: middle;
            color: #000 !important;
        }

        h2.decorated {
            margin-left: 32px;
            margin-right: 32px;
        }
        .expand-btns {
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #eee;
        }
        .expand {
            transition: transform 100ms;
        }
        .expand.true {
            transform: rotate(-180deg);
        }
        .grid-cell iron-icon[icon="done"]{
            color: #fff;
            background-color: var(--green-color);
            border-radius: 50%;
            padding: 4px;
        }
        .grid-cell iron-icon[icon="clear"]{
            color: #fff;
            background-color: var(--red-color);
            padding: 4px;
            border-radius: 50%;
        }
        </style>
        <div id="placeholder"></div>
        <div id="container">
            <div class="section grey">
                <div class="hero text-center">
                    <div class="back">
                        <span><iron-icon icon="icons:arrow-back" on-tap="goBack"></iron-icon></span>
                    </div>
                    <!-- <h2 class="decorated">Choose your Mist</h2> -->
                    <!-- <br/> -->
                    <h4>Try all Mist features - <strong>free for 14 days</strong></h4>
                    <h4>Community Edition - <strong>free forever</strong></h4>
                </div>
            </div>
            <div class="section grey">
                <div class="contains">
                    <div class="grid-row items-center">

                        <!-- saas -->
                        <div class="xs12 s6 m4 l4 margin-bottom valign-top">
                            <div class="plan blue text-center">
                                <div class="plan-head">
                                    <h4>Hosted Solution<br><sub>
                                        <!-- <iron-icon icon="icons:cloud-circle"></iron-icon> -->
                                        mist-HS</sub></h4>
                                </div>
                                <div class="plan-body">
                                    <div class="plan-body-item">
                                        <p class="valign">Mist SaaS ideal for highly dynamic infrastructures &amp; teams. Easy to get started. <strong>14 days free trial.</strong> </p>
                                    </div>
                                    <div class="plan-body-item grey">
                                        <div>
                                            <a aria-label="Sign up" href="https://mist.io/sign-up" tabindex="-1">
                                                <paper-button raised="" on-tap="_signUpClick">Sign up</paper-button>
                                            </a>
                                            <p class="secondary">No installation. Start right away.</p>
                                        </div>
                                    </div>
                                    <div class="plan-body-item">
                                        <div class="valign bold" id="premium-support-saas">
                                            Premium Support
                                            <paper-tooltip for="premium-support-saas" animation-delay="0" position="top">Next business day.<br>24/7 for service emergencies.</paper-tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- community -->
                        <div class="xs12 s6 m4 l4 margin-bottom valign-top">
                            <div class="plan green text-center">
                                <div class="plan-head">
                                    <h4>Community Edition<br><sub>
                                        <!-- <iron-icon icon="social:share"></iron-icon> -->
                                        mist-CE</sub></h4>
                                </div>
                                <div class="plan-body">
                                    <div class="plan-body-item">
                                        <p class="valign">Ideal for personal projects and small teams with a DIY approach. Download from Github. <strong>Free forever.</strong></p>
                                    </div>
                                    <div class="plan-body-item grey">
                                        <div>
                                            <a aria-label="Clone github repo" target="new" href="https://github.com/mistio/mist.io/releases/latest" tabindex="-1">
                                                <paper-button raised="" on-tap="_downloadClick">Download</paper-button>
                                            </a>
                                            <p class="secondary">Install on premises.</p>
                                        </div>
                                    </div>
                                    <div class="plan-body-item">
                                        <div class="valign bold">Community Support</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- enterprise -->
                        <div class="xs12 s6 m4 l4 margin-bottom valign-top">
                            <div class="plan purple text-center">
                                <div class="plan-head">
                                    <h4>Enterprise Edition<br><sub>
                                        <!-- <iron-icon icon="icons:account-balance"></iron-icon> -->
                                        mist-EE</sub></h4>
                                </div>
                                <div class="plan-body">
                                    <div class="plan-body-item">
                                        <p class="valign">Ideal for medium and large teams with advanced needs around orchestration &amp; access control.</p>
                                    </div>
                                    <div class="plan-body-item grey">
                                        <div>
                                            <a aria-label="Buy Licence" href="https://mist.io/buy-license" tabindex="-1">
                                                <paper-button raised="" on-tap="_purchaseClick">Purchase Licence</paper-button>
                                            </a>
                                            <p class="secondary">Install on premises.</p>
                                        </div>
                                    </div>
                                    <div class="plan-body-item">
                                        <div class="valign bold" id="premium-support">
                                            Premium Support
                                            <paper-tooltip for="premium-support" animation-delay="0" position="top">Next business day.</paper-tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        <div class="section white">
            <div class="contains">
                <div class="row text-center">
                    <h3 class="decorated">Compare features</h3>
                    <br/>
                    <p>Compare the supported features of the different Mist.io editions.</p>
                </div>
                <div class="row text-center">
                    <span class="expand-btns">
                        <paper-icon-button id="expand" class\$="expand [[openedFeatures]]" icon="expand-more" on-tap="toggleExpand"></paper-icon-button>
                        <paper-tooltip for="expand" animation-delay="0" position="bottom">
                            <span hidden\$="[[openedFeatures]]"> See features </span> <span hidden\$="[[!openedFeatures]]"> Hide features </span>
                        </paper-tooltip>
                    </span>   
                </div>
                <iron-collapse id="collapse" opened="[[openedFeatures]]">
                    <div id="features" style="position:relative;">
                        <table id="table" class="grid-container">
                            <tr>
                                <td class="grid-cell h secondary">FEATURES</td>
                                <td class="grid-cell h c"><strong>Mist HS</strong></td>
                                <td class="grid-cell h c"><strong>Mist CE</strong></td>
                                <td class="grid-cell h c"><strong>Mist EE</strong></td>
                        
                                <!-- all -->
                            </tr><tr>
                                <td class="grid-cell"><strong>Unlimited clouds &amp; machines </strong><br/><span class="secondary">Manage all of your infrastructure.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>Unlimited users &amp; teams </strong><br/><span class="secondary">Invite unlimited users and organize them in teams.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>Monitoring &amp; Alerting</strong><br/><span class="secondary"> Configure rules that trigger alerts &amp; automated responses.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>Script &amp; Key management</strong><br/><span class="secondary">Generate and store SSH keys associated to machines, to run scripts and playbooks.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>Scheduled actions</strong><br/><span class="secondary">Multi-cloud crontab to schedule script executions and machine actions </span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>Web shell</strong><br/><span class="secondary">Connect interactively to machines through the browser. Record all shell sessions.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>REST API</strong><br/><span class="secondary">Issue revokable tokens and build robust automations. Mist API provides uniform abstraction on top of the cloud provider API's.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>Audit logs</strong><br/><span class="secondary">All actions leave audit trails. All infrastructure changes observed are being logged.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>Google and Github SSO</strong><br/><span class="secondary">Allow users to sign in with their Google or Github credentials.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <!-- non ce -->

                                <td class="grid-cell"><strong>Role based Access Control</strong><br/><span class="secondary">Delegate access with fine grained controls. Use tags to enforce policies across clouds.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>Cost Insights</strong><br/><span class="secondary">Understand your infrastructure costs, broken down by tags and clouds. Corellate with utilization to start optimizing performance vs money spent.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>Orchestration</strong><br/><span class="secondary">Streamline the deployment and lifecycle of complex architectures across clouds. Define topologies and workflows with TOSCA blueprints. Use Mist to deploy and manage your stacks.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>MSP / reseller accounts<sup>beta</sup></strong><br/><span class="secondary">Resell hybrid infrastructure to your customers. Contact us to join private beta.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <!-- non ee -->
                                
                                <td class="grid-cell"><strong>VPN tunnels</strong><br/><span class="secondary">Manage infrastructure that's only addressable through private networks by establishing point-to-point VPN connections.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>Recommendation engine<sup>beta</sup></strong><br/><span class="secondary">Generates automatic recommendations to optimize QoS, security and cost.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>Anomaly detection<sup>beta</sup></strong><br/><span class="secondary">Get alerted of irregularities before they affect your uptime. Contact us for more info.</span></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                            </tr><tr>
                                <!-- extras -->

                                <td class="grid-cell"><strong>White label option</strong><br/><span class="secondary">Rebrand Mist.io with your company logo, color palette, product info and own documentation.</span></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>LDAP Integration</strong><br/><span class="secondary"></span></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>Active Directory Integration</strong><br/><span class="secondary"></span></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="clear" title="not supported"></iron-icon></td>
                                <td class="grid-cell c"><iron-icon icon="done" title="supported"></iron-icon></td>
                            </tr><tr>
                                <td class="grid-cell"><strong>Support</strong><br/><span class="secondary"></span></td>
                                <td class="grid-cell c t"><strong>Premium</strong><br><span class="secondary">Next business day. <br>24/7 for service emergencies.</span></td>
                                <td class="grid-cell c t"><strong>Community Support</strong></td>
                                <td class="grid-cell c t"><strong>Premium</strong><br><span class="secondary">Next business day.</span></td>
                            </tr>
                        </table>
                        <table id="fixedTableHeader" class="grid-container" hidden\$="[[!fixedTableHeader]]">
                            <tr>
                                <td class="grid-cell h secondary">FEATURES</td>
                                <td class="grid-cell h c"><strong>Mist HS</strong></td>
                                <td class="grid-cell h c"><strong>Mist CE</strong></td>
                                <td class="grid-cell h c"><strong>Mist EE</strong></td>
                            </tr>
                        </table>
                    </div>
                    <br/>
                    <br/>
                    <div class="row text-center contact">
                        <a aria-label="See pricing" href="/pricing" tabindex="-1">
                            <paper-button class="btn-bordered" on-tap="_seePricingClick" id="enterpriseBtn">See Pricing</paper-button>
                        </a>
                    </div>
                </iron-collapse>
            </div>
        </div>

        <div class="section grey">
            <div class="contains text-center">
                <div class="row">
                    <h3 class="decorated">Trusted by
                    </h3>
                </div>
                <div class="grid-row providers">
                    <div class="xs2 s2 m2 l2 margin-top margin-bottom padding-bottom">
                        <div class="provider">
                            <img src="/static/landing/images/customers/nbg.png" alt="National Bank of Greece" title="National Bank of Greece">
                        </div>
                    </div>
                    <div class="xs2 s2 m2 l2 margin-top margin-bottom padding-bottom">
                        <div class="provider">
                            <img src="/static/landing/images/customers/ep.png" alt="European Parliament" title="European Parliament">
                        </div>
                    </div>
                    <div class="xs2 s2 m2 l2 margin-top margin-bottom padding-bottom">
                        <div class="provider">
                            <img src="/static/landing/images/customers/sevone.png" alt="Sev One" title="Sev One">
                        </div>
                    </div>
                    <div class="xs2 s2 m2 l2 margin-top margin-bottom padding-bottom">
                        <div class="provider">
                            <img src="/static/landing/images/customers/pccc.png" alt="Pccc" title="Pccc">
                        </div>
                    </div>
                    <div class="xs2 s2 m2 l2 margin-top margin-bottom padding-bottom">
                        <div class="provider">
                            <img src="/static/landing/images/customers/shoprite.png" alt="Shoprite" title="Shoprite">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section white">
            <div class="contains">
                <div class="row text-center">
                    <h2 class="decorated">Need more help?</h2>
                </div>
                <div class="grid-row text-center">
                    <div class="xs12 s12 m12 l12">
                        <p> We are working hands on with our customers to help them be successful. 
                            <br/>We would love to learn more about your needs and deliver solutions to your daily problems. 
                        </p>                    
                        <a aria-label="Get enterprise" href="/contact-sales" tabindex="-1">
                            <paper-button raised="" on-tap="_requestInfoClick" id="enterpriseBtn">Contact Sales</paper-button>
                        </a>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
`,

  is: 'landing-get-started',

  properties: {
      categories: {
          type: Array
      },

      data: {
          type: Object,
          notify: true
      },

      visible: {
          type: Boolean,
          observer: '_visibleChanged'
      },

      openedFeatures:  {
        type: Boolean,
        value: false
      },

      fixedTableHeader: {
        type: Boolean,
        value: false
    },
  },

  attached: function() {
    var that = this;
    document.addEventListener('scroll', that.toggleFixedTableHeader.bind(this))
  },

  toggleExpand: function() {
      this.set('openedFeatures', !this.openedFeatures);
      // closing features-table behavior, scroll to top
    //   if (!this.openedFeatures) {
    //     this.set('fixedTableHeader', false);
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //       })
    //   }
  },

  detached: function() {
    var that = this;
    document.removeEventListener('scroll', that.toggleFixedTableHeader.bind(this))
  },

  _visibleChanged: function(visible) {
      if (visible) {
          this.fire('change-section', {
              title: 'Pricing'
          });
      }
  },

  toggleFixedTableHeader: function() {
      var that = this;
      var tableIsInView = this.$.table.getBoundingClientRect().y < 0 && this.$.table.getBoundingClientRect().bottom > 68;
      if (this.openedFeatures && this.fixedTableHeader != tableIsInView) {
        this.debounce( 'toggleFixedTableHeader',function(){
                    that.set('fixedTableHeader', tableIsInView);
            }, 10)
        }
  },

  showInfo: function(e) {
      var li = e.path.find(function(el,index){
          return el.tagName.toLowerCase() == 'li';
      });
      if (li && li.querySelector('p'))
          li.querySelector('p').classList.toggle("visible");
  },

  goBack: function(e){
      e.stopImmediatePropagation();
      this.fire('go-to','/');
      this.fire('user-action', 'back click in get-started');
  },

  _downloadClick: function(event) {
      this.fire('user-action', 'download ce button click in get-started');
  },

  _purchaseClick: function(event) {
      window.scrollTo(0, 0);
      this.fire('user-action', 'purchase license button click in get-started');
  },

  _signUpClick: function(event) {
      window.scrollTo(0, 0);
      this.fire('user-action', 'sign-up button click in get-started');
  },

  _pricingClick: function(event) {
      window.scrollTo(0, 0);
      this.fire('user-action', 'pricing click in get-started');
  },

  _requestInfoClick: function(event) {
      window.scrollTo(0, 0);
      this.fire('user-action', 'contact sales click button click in get-started');
  },

  _computeClass: function(index) {
      return "bg-" + index + " title";
  }
});
