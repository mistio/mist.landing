import '../node_modules/@polymer/polymer/polymer-legacy.js';
import '../node_modules/@polymer/paper-button/paper-button.js';
import '../node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js';
// import '../node_modules/typed-text/typed-text.js';
import '../node_modules/@polymer/paper-styles/shadow.js';
import '../node_modules/@polymer/iron-icons/iron-icons.js';
import '../node_modules/@polymer/iron-icons/hardware-icons.js';
import '../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js';
import '../node_modules/@polymer/paper-tooltip/paper-tooltip.js';
import './shared-styles.js';
import { Polymer } from '../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../node_modules/@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <custom-style>
      <style is="custom-style" include="iron-flex"></style>
    </custom-style>
    <style include="shared-styles"></style>
    <style>
      paper-material {
        @apply (--shadow-elevation-2dp);
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
        font-weight: 400 !important;
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
        @apply (--layout-fit);
        z-index: -1;
      }

      .plan {
        margin-top: 50px;
        margin-bottom: 50px;
        overflow: auto;
        background-color: #fff;
        @apply (--shadow-elevation-4dp);
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

      .green .plan-head {
        border-color: green;
      }

      .purple .plan-head {
        border-color: purple;
      }

      .blue .plan-head {
        border-color: #3f51b5;
      }
      .plan,
      .plan > * {
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

      .plan-body-item:first-child {
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
        line-height: 1.4em;
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
      @media screen and (max-width: 768px) {
        .includes > div {
          text-align: center;
        }
        .includes ul,
        .includes li {
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

      h1.decorated {
        margin-left: 32px;
        margin-right: 32px;
      }

      h1,
      .custom-needs {
        font-size: 3.56rem;
        line-height: 110%;
        margin: 1.78rem 0 1.424rem 0;
        font-weight: 300;
      }

      h2 {
        font-size: 2.28rem;
        line-height: 110%;
        margin: 1.14rem 0 0.912rem 0;
      }

      h3 {
        font-size: 2.28rem;
        line-height: 110%;
        margin: 1.14rem 0 0.912rem 0;
      }

      .help-subheader {
        font-size: 1.64rem;
        margin: 0.82 rem 0 0.656rem;
      }

      #vcpus-ee {
        font-size: 3.56rem;
      }
    </style>
    <div id="placeholder"></div>
    <div id="container">
      <div class="section grey">
        <div class="hero text-center">
          <div class="back">
            <span><iron-icon icon="icons:arrow-back" on-tap="goBack"></iron-icon></span>
          </div>
          <h1 class="decorated">Choose your Mist</h1>
        </div>
      </div>
      <div class="section grey">
        <div class="contains">
          <div class="grid-row items-center">
            <!-- community -->
            <div class="xs12 s6 m4 l4 margin-bottom valign-top">
              <div class="plan green text-center">
                <div class="plan-head">
                  <h2>
                    Community Edition<br /><sub><iron-icon icon="social:share"></iron-icon>CE</sub>
                  </h2>
                </div>
                <div class="plan-body">
                  <div class="plan-body-item">
                    <p class="valign">
                      Ideal for personal projects and small teams with a DIY approach.
                    </p>
                  </div>
                  <div class="plan-body-item">
                    <div class="valign">
                      <h3>Free forever</h3>
                      <h4 class="price">
                        <sub
                          ><a
                            href="https://github.com/mistio/mist.io/blob/master/LICENSE"
                            target="new"
                            >Apache 2</a
                          >
                          licensed</sub
                        >
                      </h4>
                    </div>
                  </div>
                  <div class="plan-body-item grey">
                    <div>
                      <a
                        aria-label="Clone github repo"
                        target="new"
                        href="https://github.com/mistio/mist.io/releases/latest"
                        tabindex="-1"
                      >
                        <paper-button raised="" on-tap="_downloadClick">Download</paper-button>
                      </a>
                      <p>Install on premises.</p>
                    </div>
                  </div>
                  <div class="plan-body-item">
                    <div class="bold">Features:</div>
                    <ul class="feature-list">
                      <li id="unlimited-machines">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text">Unlimited clouds &amp; machines</span>
                        <paper-tooltip for="unlimited-machines" animation-delay="0" position="top"
                          >Manage all of you infrastructure.</paper-tooltip
                        >
                      </li>
                      <li id="unlimited-users">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text"> Unlimited users &amp; teams</span>
                        <paper-tooltip for="unlimited-users" animation-delay="0" position="top"
                          >Invite unlimited users and organize them in teams.</paper-tooltip
                        >
                      </li>
                      <li id="monitoring-alerting">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text"> Monitoring &amp; Alerting</span>
                        <paper-tooltip for="monitoring-alerting" animation-delay="0" position="top"
                          >Gather system, application &amp; custom business metrics. Configure rules
                          that trigger alerts &amp; automated responses.</paper-tooltip
                        >
                      </li>
                      <li id="script-key-management">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text"> Script &amp; Key management</span>
                        <paper-tooltip
                          for="script-key-management"
                          animation-delay="0"
                          position="top"
                        >
                          Generate and store SSH keys associated to machines.<br />Use them to run
                          your scripts and playbooks.
                        </paper-tooltip>
                      </li>
                      <li id="scheduled-actions">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text"> Scheduled actions</span>
                        <paper-tooltip for="scheduled-actions" animation-delay="0" position="top"
                          >Multicloud crontab to schedule script executions and machine
                          actions.</paper-tooltip
                        >
                      </li>
                      <li id="web-shell">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text"> Web shell</span>
                        <paper-tooltip for="web-shell" animation-delay="0" position="top"
                          >Connect interactively to machines through the browser. Record all shell
                          sessions.</paper-tooltip
                        >
                      </li>
                      <li id="rest-api">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text"> REST API </span>
                        <paper-tooltip for="rest-api" animation-delay="0" position="top"
                          >Issue revokable tokens and build robust automations.<br />
                          The Mist API provides a uniform abstraction on top of the cloud provider
                          API's.<br />
                        </paper-tooltip>
                      </li>
                      <li id="audit-logs">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text"> Audit logs</span>
                        <paper-tooltip for="audit-logs" animation-delay="0" position="top"
                          >All actions leave audit trails. All infrastructure changes observed are
                          being logged.</paper-tooltip
                        >
                      </li>
                    </ul>
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
                  <h2>
                    Enterprise Edition<br /><sub
                      ><iron-icon icon="icons:account-balance"></iron-icon>EE</sub
                    >
                  </h2>
                </div>
                <div class="plan-body">
                  <div class="plan-body-item">
                    <p class="valign">
                      Ideal for medium and large teams with advanced needs around orchestration
                      &amp; access control.
                    </p>
                  </div>
                  <div class="plan-body-item">
                    <div class="valign">
                      <h3 class="price" id="vcpus-ee">
                        <sup>$</sup>1<sup class="vcpu">/vcpu</sup><sub class="month">/month</sub>
                      </h3>
                      <paper-tooltip for="vcpus-ee" animation-delay="0" position="top"
                        >High water mark of physical and virtual cores under
                        management</paper-tooltip
                      >
                      <h4 class="price"><sub>if paid annually</sub></h4>
                    </div>
                  </div>
                  <div class="plan-body-item grey">
                    <div>
                      <a aria-label="Buy Licence" href="/buy-license" tabindex="-1">
                        <paper-button raised="" on-tap="_purchaseClick"
                          >Purchase Licence</paper-button
                        >
                      </a>
                      <p>Install on premises.</p>
                    </div>
                  </div>
                  <div class="plan-body-item">
                    <div class="bold">All features from CE plus:</div>
                    <ul class="feature-list">
                      <li id="rbac">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text"> Role based Access Control</span>
                        <paper-tooltip for="rbac" animation-delay="0" position="top"
                          >Delegate access with fine grained controls. Use tags to enforce policies
                          across clouds.</paper-tooltip
                        >
                      </li>
                      <li id="cost-insights">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text"> Cost Insights</span>
                        <paper-tooltip for="cost-insights" animation-delay="0" position="top"
                          >Understand your infrastructure costs, broken down by tags and clouds.
                          Corellate with utilization to start optimizing performance vs money
                          spent.</paper-tooltip
                        >
                      </li>
                      <li id="orchestration">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text"> Orchestration</span>
                        <paper-tooltip for="orchestration" animation-delay="0" position="top"
                          >Streamline the deployment and lifecycle of complex architectures across
                          clouds. <br />Define topologies and workflows with TOSCA blueprints. Use
                          Mist to deploy and manage your stacks.</paper-tooltip
                        >
                      </li>
                      <li id="msp-reseller">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text"> MSP / reseller accounts<sup>beta</sup></span>
                        <paper-tooltip for="msp-reseller" animation-delay="0" position="top"
                          >Resell hybrid infrastructure to your customers. Contact us to join
                          private beta.</paper-tooltip
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="plan-body-item">
                    <div class="valign bold" id="premium-support">
                      Premium Support
                      <paper-tooltip for="premium-support" animation-delay="0" position="top"
                        >Next business day.</paper-tooltip
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- saas -->
            <div class="xs12 s6 m4 l4 margin-bottom valign-top">
              <div class="plan blue text-center">
                <div class="plan-head">
                  <h2>
                    Hosted Edition<br /><sub
                      ><iron-icon icon="icons:cloud-circle"></iron-icon>HE</sub
                    >
                  </h2>
                </div>
                <div class="plan-body">
                  <div class="plan-body-item">
                    <p class="valign">
                      Mist as a Service. Ideal for highly dynamic infrastructures &amp; teams. Easy
                      to get started.
                    </p>
                  </div>
                  <div class="plan-body-item">
                    <div class="valign">
                      <div class="valign">
                        <a href="/pricing" on-tap="_pricingClick">
                          <h3>Pay As You Go</h3>
                          <h4 class="price"><sub>or prepaid plans.</sub></h4>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="plan-body-item grey">
                    <div>
                      <a aria-label="Sign up" href="/sign-up" tabindex="-1">
                        <paper-button raised="" on-tap="_signUpClick">Sign up</paper-button>
                      </a>
                      <p>No installation. Start right away.</p>
                    </div>
                  </div>
                  <div class="plan-body-item">
                    <div class="bold">All features from EE plus:</div>
                    <ul class="feature-list">
                      <li id="vpn-tunnels">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text"> VPN tunnels</span>
                        <paper-tooltip for="vpn-tunnels" animation-delay="0" position="top"
                          >Manage infrastructure that's only addressable through private networks by
                          establishing point-to-point VPN connections.</paper-tooltip
                        >
                      </li>
                      <li id="recommendation-engine">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text"> Recommendation engine<sup>beta</sup></span>
                        <paper-tooltip
                          for="recommendation-engine"
                          animation-delay="0"
                          position="top"
                          >Generates automatic recommendations to optimize QoS, security and
                          cost.</paper-tooltip
                        >
                      </li>
                      <li id="anomaly-detection">
                        <iron-icon icon="help"></iron-icon>
                        <span class="li-text"> Anomaly detection<sup>beta</sup></span>
                        <paper-tooltip for="anomaly-detection" animation-delay="0" position="top"
                          >Get alerted of irregularities before they affect your uptime. Contact us
                          for more info.</paper-tooltip
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="plan-body-item">
                    <div class="valign bold" id="premium-support-saas">
                      Premium Support
                      <paper-tooltip for="premium-support-saas" animation-delay="0" position="top"
                        >Next business day.<br />24/7 for service emergencies.</paper-tooltip
                      >
                    </div>
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
          <h2 class="decorated custom-needs">Help with custom needs?</h2>
        </div>
        <div class="grid-row">
          <div class="xs12 s12 m6 l8">
            <div class="left">
              <h3 class="w400 help-subheader">
                Do you have more than 300 machines? <br />Do you want to run Mist on premises?
              </h3>
              <p>
                We can provide custom pricing for businesses with a lot of infrastructure.
                <br />Also, we can work with you to run Mist on premises or to setup a proof of
                concept.
              </p>
            </div>
          </div>
          <div class="xs12 s12 m6 l4">
            <h3 class="w400 help-subheader">Contact us if you:</h3>
            <p>
              <iron-icon icon="check"></iron-icon> Have more than 300 machines
              <br />
              <iron-icon icon="check"></iron-icon> Want help optimizing your infrastructure
              <br />
              <iron-icon icon="check"></iron-icon> Require HA or 24/7 support
              <br />
              <iron-icon icon="check"></iron-icon> Want to whitelabel or extend Mist
              <br />
            </p>
            <p>
              <a aria-label="Get enterprise" href="/request-pricing" tabindex="-1">
                <paper-button raised="" on-tap="_requestInfoClick" id="enterpriseBtn"
                  >Request Pricing</paper-button
                >
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,

  is: 'landing-get-started',

  properties: {
    categories: {
      type: Array,
    },

    data: {
      type: Object,
      notify: true,
    },

    visible: {
      type: Boolean,
      observer: '_visibleChanged',
    },
  },

  _visibleChanged(visible) {
    if (visible) {
      this.fire('change-section', {
        title: 'Pricing',
      });
    }
  },

  showInfo(e) {
    const li = e.path.find(el => el.tagName.toLowerCase() === 'li');
    if (li && li.querySelector('p')) li.querySelector('p').classList.toggle('visible');
  },

  goBack(e) {
    e.stopImmediatePropagation();
    this.fire('go-to', '/');
    this.fire('user-action', 'back click in get-started');
  },

  _downloadClick() {
    this.fire('user-action', 'download ce button click in get-started');
  },

  _purchaseClick() {
    window.scrollTo(0, 0);
    this.fire('user-action', 'purchase license button click in get-started');
  },

  _signUpClick() {
    window.scrollTo(0, 0);
    this.fire('user-action', 'sign-up button click in get-started');
  },

  _pricingClick() {
    window.scrollTo(0, 0);
    this.fire('user-action', 'pricing click in get-started');
  },

  _requestInfoClick() {
    window.scrollTo(0, 0);
    this.fire('user-action', 'request info button click in get-started');
  },

  _computeClass(index) {
    return `bg-${index} title`;
  },
});
