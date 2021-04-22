import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/communication-icons.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

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
      a,
      .a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.87) !important;
        cursor: pointer;
      }
      .footer-nav.right {
        text-align: right;
        float: right;
      }

      .address {
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

      #blog {
        height: auto;
        min-height: 300px;
        overflow: hidden;
      }

      #blog a {
        color: #444 !important;
      }

      #blog-badge {
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

      #blog-badge div#blog-header {
        border-bottom: 1px solid #e8e8e8;
        padding: 8px;
      }

      #blog-badge div#blog-header h1 {
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0;
        margin-top: 0;
        margin-bottom: 0;
      }

      #blog-badge ul {
        padding: 8px;
        margin: 0;
      }

      #blog-badge ul,
      .fa-ul,
      ul li {
        list-style-type: none;
      }

      #blog-badge li {
        margin-bottom: 10px;
      }

      #blog-badge .blog-post-title {
        color: #333;
        font-weight: 700;
        text-decoration: none;
      }

      .light {
        opacity: 0.9;
        font-size: 12px;
      }
      .social-icon {
        width: 24px;
        display: inline;
        margin: 0 5px;
      }
    </style>

    <div class="section dark">
      <div class="contains">
        <div class="grid-row">
          <div class="xs12 s12 m4 l4 margin-top margin-bottom padding-bottom address">
            <img alt="Mist logo" src="/landing/images/logo-white.svg" width="160px" />
            <p>
              Made with <iron-icon style="color:#d64d4d;" icon="icons:favorite"></iron-icon> in
              Greece &amp; California<br />
            </p>
            <a href="https://twitter.com/mist_io" target="_blank">
              <img
                class="social-icon"
                loading="lazy"
                src="images/social/twitter.svg"
                alt="twitter logo"
                title="twitter"
              />
            </a>
            <a href="https://www.linkedin.com/company/mist-io/" target="_blank">
              <img
                style="background-color: white;"
                class="social-icon"
                loading="lazy"
                src="images/social/linkedin.png"
                alt="linkedin logo"
                title="linkedin"
              />
            </a>
            <a href="https://www.facebook.com/mistioinc" target="_blank">
              <img
                class="social-icon"
                loading="lazy"
                src="images/social/facebook.png"
                alt="facebook logo"
                title="facebook"
              />
            </a>
            <p class="light">
              <iron-icon icon="communication:email"></iron-icon> info@mist.io &nbsp;<br /><iron-icon
                icon="communication:phone"
              ></iron-icon>
              +1-650-605-3299
            </p>
            <p></p>
            <p class="light">
              Mist.io Inc <br />
              620 Folsom St, <br />
              San Francisco, CA 94107
            </p>
            <p class="light">
              Athens HQ<br />
              Filaretou 86, <br />
              176 73, Kalithea, Greece
            </p>
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
          <li><a href="/blog">Blog</a></li>
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
  finishLoading() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '/landing/blogBadge.js';
    this.$['blog-content'].appendChild(script);
  },
});
