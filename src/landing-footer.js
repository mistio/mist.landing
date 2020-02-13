
import '../node_modules/@polymer/polymer/polymer-legacy.js';
import '../node_modules/@polymer/iron-icons/iron-icons.js';
import '../node_modules/@polymer/iron-icons/social-icons.js';
import '../node_modules/@polymer/iron-icons/communication-icons.js';
import '../node_modules/@polymer/paper-button/paper-button.js';
import { Polymer } from '../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../node_modules/@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style include="shared-styles">
      :host {
        display: block;
      }
      ul.footer-nav {
        list-style: none;
        margin: 0;
        padding: 0;
        display: inline-block;
      }
      ul.footer-nav li {
        display: inline-block;
        line-height: 1.5em;
        padding-right: 8px;
      }
      .subfoot {
        background-color: #212121;
        overflow: hidden;
        font-size: 14px !important;
      }
      .subfoot .contains {
        padding: 1rem;
      }
      a, .a {
        text-decoration: none;
        color: rgba(255,255,255,0.87) !important;
        cursor: pointer;
      }
      .footer-nav.right {
        text-align: right;
        float: right;
      }

      .address{
        font-size: 14px;
      }

      #tweets {
        display: block;
        border-radius: 3px;
        width: 100%;
        max-width: 300px;
      }
      @media only screen and (max-width: 600px) {
        .footer-nav.right {
          text-align: left;
          float: none;
        }
      }

      #tumblr {
        height: auto;
        min-height: 300px;
        overflow: hidden;
      }

      #tumblr a {
        color: #444 !important;
      }

      #tumblr-badge {
        float: right;
        position: relative;
        width: 300px;
        max-width: 100%;
        background: #fff;
        line-height: 1.34em;
        border-radius: 5px;
        font-size: 12px;
        color: #707070;
      }

      #tumblr-badge div#tumblr-header {
        border-bottom: 1px solid #E8E8E8;
        padding: 8px;
      }

      #tumblr-badge div#tumblr-header h1 {
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0;
        margin-top: 0;
        margin-bottom: 0;
      }

      #tumblr-badge ul {
        padding: 8px;
        margin: 0;
      }

      #tumblr-badge ul, .fa-ul, ul li {
        list-style-type: none;
      }

      #tumblr-badge li {
        margin-bottom: 10px;
      }

      #tumblr-badge .tumblr-post-title {
        color: #333;
        font-weight: 700;
        text-decoration: none;
      }
    </style>
    
    <div class="section dark">
      <div class="contains">
        <div class="grid-row">
          <!-- <div class="xs12 s12 m3 l3 margin-top margin-bottom padding-bottom address">
            <img src="images/logo-white.svg" width="125px">
            <p>Made with <iron-icon icon="icons:favorite"></iron-icon> in Greece &amp; California<br><br></p>
          </div>
          <div class="xs12 s12 m3 l3 margin-top margin-bottom padding-bottom address">
            <p>Contact us</p>
            <p><iron-icon icon="communication:email"></iron-icon> info@mist.io &nbsp;<br><iron-icon icon="communication:phone"></iron-icon> +1-650-605-3299</p>
          </div>
          <div class="xs12 s12 m3 l3 margin-top margin-bottom padding-bottom address">
            <p> Mist.io Inc </p>
            <p>
              1103 Earnest Street, <br>
              Hercules, CA 94547
            </p>
          </div>
          <div class="xs12 s12 m3 l3 margin-top margin-bottom padding-bottom address">
            <p>Athens HQ</p>
            <p>
              Filaretou 86, <br>
              Kallithea 176 73, Greece<br>
            </p>
          </div> -->
          <div class="xs12 s12 m4 l4 margin-top margin-bottom padding-bottom address">
            <img src="images/logo-white.svg" width="125px">
            <p>Made with <iron-icon icon="icons:favorite"></iron-icon> in Greece &amp; California<br><br></p>
            <p><iron-icon icon="communication:email"></iron-icon> info@mist.io &nbsp;<br><iron-icon icon="communication:phone"></iron-icon> +1-650-605-3299</p>
            <p></p>
            <p> Mist.io Inc <br>
              1103 Earnest Street, <br>
              Hercules, CA 94547
            </p>
            <p>Athens HQ<br>
              Filaretou 86, <br>
              Kallithea 176 73, <br>
              Greece
            </p>
          </div>
          <div class="xs12 s12 m4 l4 margin-top margin-bottom padding-bottom">
            <a id="tweets" class="twitter-timeline" data-dnt="true" href="https://twitter.com/mist_io" data-widget-id="328880614860259329"></a>
          </div>
          <div class="xs12 s12 m4 l4 margin-top margin-bottom padding-bottom">
            <div id="tumblr">
              <div id="tumblr-badge" class="box-round">
                <div id="tumblr-header"><h1><a title="mist.io blog" href="http://blog.mist.io" target="_blank">Blog</a></h1></div>
                <div id="tumblr-content">
                  <script type="text/javascript" id="tumblr-script"></script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section subfoot">
      <div class="contains">
        <ul class="footer-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/product">Product</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="http://docs.mist.io/" target="new">Docs</a></li>
          <li><a href="http://blog.mist.io/" target="new">Blog</a></li>
          <li><a href="/about">About</a></li>
        </ul>
        <ul class="footer-nav right">
          <li><a href="/tos">Terms of Service</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/pledge">Pledge</a></li>
        </ul>
      </div>
    </div>
`,

  is: 'landing-footer',

  attached: function () {
    // Twitter widget
    window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    }(document, "script", "twitter-wjs"));
  },

  finishLoading: function() {
    window.twttr.widgets && window.twttr.widgets.createTimeline({
      sourceType: 'profile',
      screenName: 'mist_io'
    }, this.$.tweets, {width: '300', height: '400'});
    this.$['tumblr-script'].src = "tumblrBadge-1.1.js";
  }
});
