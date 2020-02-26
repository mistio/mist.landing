import '../node_modules/@polymer/polymer/polymer-legacy.js';
import '../node_modules/@polymer/paper-button/paper-button.js';
import '../node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js';
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
  <style include="shared-styles">

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
  <iron-collapse id="collapse" opened="[[opened]]">
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
        <table id="fixedTableHeader" class="grid-container" style\$="top: [[fixedTableHeaderTopOffset]]px" hidden\$="[[!fixedTableHeader]]">
            <tr>
                <td class="grid-cell h secondary">FEATURES</td>
                <td class="grid-cell h c"><strong>Mist HS</strong></td>
                <td class="grid-cell h c"><strong>Mist CE</strong></td>
                <td class="grid-cell h c"><strong>Mist EE</strong></td>
            </tr>
        </table>
        <br/>
        <br/>
        <slot name="cta"></slot>
    </div>
</iron-collapse>
`,

is: 'landing-compare-features',

properties: {
    opened: {
        type: Boolean,
        value: true,
        reflectToAttribute: true
    },
    fixedTableHeader: {
        type: Boolean,
        value: false
    },
    fixedTableHeaderTopOffset: {
        type: Number,
        value: 0
    }
},

attached: function() {
  var that = this;
  document.addEventListener('scroll', that.toggleFixedTableHeader.bind(this))
},
detached: function() {
    var that = this;
    document.removeEventListener('scroll', that.toggleFixedTableHeader.bind(this))
},

toggleFixedTableHeader: function() {
    var that = this;
    var tableIsInView = this.$.table.getBoundingClientRect().y < 0 && this.$.table.getBoundingClientRect().bottom > 68;
    if (this.opened && this.fixedTableHeader != tableIsInView) {
    this.debounce( 'toggleFixedTableHeader',function(){
                that.set('fixedTableHeader', tableIsInView);
        }, 10)
    }
}  
});