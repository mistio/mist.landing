import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/polymer/polymer-legacy.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { scroll } from '@polymer/app-layout/helpers/helpers.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-media-query/iron-media-query.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-styles/color.js';
import '@polymer/paper-styles/default-theme.js';
import '@polymer/paper-styles/shadow.js';
import '@polymer/paper-styles/typography.js';
import '@polymer/paper-styles/paper-styles.js';
import '@polymer/paper-material/paper-material.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/iron-meta/iron-meta.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/hardware-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/places-icons.js';
import '@polymer/iron-icons/editor-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import './landing-pages.js';
import './landing-page.js';
import './landing-category-data.js';
import './shared-styles.js';
import './landing-footer.js';
import './landing-social.js';
import './landing-person.js';
import './landing-fold.js';
import './landing-testimonials.js';
import './landing-zoom-in.js';
import './landing-get-started.js';
import './landing-sign-in.js';
import './landing-sign-up.js';

import './landing-home.js';
import './landing-about.js';
import './landing-pricing.js';
import './landing-product.js';
import './landing-rbac.js';
import './landing-get-started.js';

import './landing-forgot-password.js';
import './styles/mist-theme.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import 'fingerprintjs2/fingerprint2.js';
// performance logging
window.performance && performance.mark && performance.mark('landing-app - before register');

Polymer({
  _template: html`
    <style include="shared-styles">
      :host {
        display: block;
        position: relative;
        background-color: var(--app-background-color);
        color: var(--app-primary-color);
        @apply --layout-fullbleed;
        @apply --paper-font-common-base;
      }

      app-header {
        @apply --layout-fixed-top;
        z-index: 1;
        background-color: var(--white-opaque-95);
        box-shadow: var(--app-header-box-shadow);
        height: 74px;
      }

      app-toolbar {
        max-width: 1180px;
        margin: 0 auto;
        width: 90%;
        box-sizing: border-box;
      }

      landing-pages {
        min-height: var(--landing-pages-min-height);
      }

      .large {
        width: 100%
      }

      .button {
        text-align: center;
        width: 120px;
        height: 32px;
        line-height: 32px;
        border-radius: 2px;
        font-size: 0.9em;
        background-color: var(--white-color);
        color: #646464;
      }

      .button.blue {
        background-color: #4285f4;
        color: var(--white-color);
      }

      .button.raised {
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
      }

      .button.back {
        position: fixed;
        top: 30px;
        left: 30px;
      }

      .card-contents {
        @apply --layout-vertical;
        @apply --layout-center-center;
        @apply --layout-fit;
      }

      .button-container {
        @apply --layout-flex;
        @apply --layout-horizontal;
        @apply --layout-around-justified;
      }

      paper-icon-button {
        color: var(--app-primary-color);
        margin-top: 12px;
      }

      .logo {
        text-align: left;
        padding-top: 20px;
      }

      .logo a {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.3em;
        color: var(--app-primary-color);
        text-decoration: none;
        height: var(--logo-height); /*53px;*/
        width: var(--logo-width); /*119px;*/
        background-image: var(--logo-image);  /*url('../images/logo.svg'); */
        background-repeat: no-repeat;
        /* required for IE 11, so this <a> can receive pointer events */
        display: inline-block;
        pointer-events: auto;
      }

      .menu-btn {
        display: none;
      }

      .announcer {
        position: fixed;
        height: 0;
        overflow: hidden;
      }

      :host([page=set-password]),
      :host([page=reset-password]),
      :host([page=forgot-password]),
      :host([page=sign-in]),
      :host([page=sign-up]) {
        padding-top: 0px;
      }

      :host([page=set-password]) .logo,
      :host([page=reset-password]) .logo,
      :host([page=forgot-password]) .logo,
      :host([page=sign-in]) .logo,
      :host([page=sign-up]) .logo {
        display: none;
      }

      :host([page=set-password]) > app-header,
      :host([page=reset-password]) > app-header,
      :host([page=forgot-password]) > app-header,
      :host([page=sign-in]) > app-header,
      :host([page=sign-up]) > app-header,
      :host([page=request-pricing]) > app-header,
      :host([page=get-started]) > app-header,
      :host([page=buy-license]) > app-header {
        z-index: -1;
      }

      .signin-btn-container {
        position: absolute;
        right: 16px;
      }

      .signin-btn-container.true {
        position: relative;
        right: 0px;
      }

      [hidden] {
        display: none !important;
      }

      #tabContainer {
        position: relative;
        height: 66px;
        width: var(--tab-ontainer-width);
        text-align: right;
        margin: 12px 16px 0 0;
      }

      landing-tabs, landing-tab {
        --landing-tab-overlay: {
          border-bottom: 2px solid var(--app-accent-color);
        };
      }

      landing-tabs {
        height: 100%;
        float: right;
      }

      landing-tab {
        margin: 0 5px;
      }

      landing-tab a {
        display: inline-block;
        outline: none;
        padding: 27px 9px;
        font-size: 15px;
        font-weight: 400;
        color: var(--tab-color) !important;
        text-decoration: none;
        text-transform: uppercase;
      }

      app-drawer a {
        color: var(--app-primary-color) !important;
      }

      .drawer-list {
        margin: 0 20px;
      }

      .drawer-list a {
        display: block;
        padding: 0 16px;
        line-height: 40px;
        text-decoration: none;
        color: var(--app-secondary-color);
      }

      .drawer-list a.iron-selected {
        color: black;
        font-weight:   bold;
      }

      app-drawer {
        z-index: 3;
      }

      footer {
        line-height: 24px;
      }

      footer > a {
        color: var(--app-secondary-color);
        text-decoration: none;
      }

      footer > a:hover {
        text-decoration: underline;
      }

      .demo-label {
        box-sizing: border-box;
        width: 120px;
        padding: 6px;
        margin: 8px auto 0;
        background-color: var(--app-primary-color);
        color: white;
        text-transform: uppercase;
      }

      paper-button {
        background-color: #2196F3;
        font-weight: 500;
        color: var(--white-color);
      }

      div.signin-btn-container paper-button {
        background-color: #444;
        font-size: 15px;
        margin-right: 0;
        margin-left: 0px;
        padding: 2px 18px;
        font-weight: 400;
        margin-top: 12px;
        line-height: 36px;
        white-space: nowrap;
      }

      a {
        text-decoration: none;
      }

      paper-dialog h2 {
        font-size: 1.5em;
        font-weight: bold;
      }

      /* small screen */
      @media (max-width: 767px) {
        .menu-btn {
          display: block;
        }

        :host([page=detail]) .menu-btn {
          display: none;
        }

        .logo {
          display: none;
        }
      }

      @media (min-width: 766px) and (max-width: 876px) {
        landing-tab:first-child {
          display: none;
        }
      }

    </style>

    <!--
      app-location and app-route elements provide the state of the URL for the app.
    -->
    <app-location route="{{route}}" id="appLocation"></app-location>
    <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>

    <iron-media-query query="max-width: 767px" query-matches="{{smallScreen}}"></iron-media-query>

    <!--
      landing-category-data provides the list of categories.
    -->
    <landing-category-data categories="[[categories]]" category-name="[[page]]" category="{{category}}"></landing-category-data>

    <app-header role="navigation" id="header" effects="waterfall" fixed="">
      <app-toolbar>
        <div class="left-bar-item">
          <paper-icon-button class="menu-btn" icon="menu" on-tap="_toggleDrawer" aria-label="Categories">
          </paper-icon-button>
          <div class="logo">
            <a href="/" aria-label="Mist.io Home" on-tap="_logoClicked">
              <!-- <img src="images/logo.svg"> -->
            </a>
          </div>
        </div>

        <!-- Lazy-create the tabs for larger screen sizes. -->
        <div id="tabContainer" sticky\$="[[_shouldShowTabs]]" hidden\$="[[!_shouldShowTabs]]">
          <dom-if if="[[_shouldRenderTabs]]" restamp="">
            <template>
              <landing-tabs selected="{{page}}" attr-for-selected="name">
                <dom-repeat items="[[categories]]" as="category" initial-count="4">
                  <template>
                    <landing-tab name="[[category.name]]" on-tap="_tabClicked" hidden\$="[[category.hiddenFromMenu]]">
                      <a name="[[category.name]]" href="[[category.href]]" target="new">[[category.title]]</a>
                    </landing-tab>
                  </template>
                </dom-repeat>
              </landing-tabs>
            </template>
          </dom-if>
        </div>

        <div class\$="signin-btn-container [[_shouldShowTabs]]">
          <a href="/sign-in" tabindex="-1" aria-label="Sign in to Mist.io">
            <paper-button raised="" on-tap="_signInClick">Sign In</paper-button>
          </a>
        </div>
      </app-toolbar>
    </app-header>

    <!-- Lazy-create the drawer for small screen sizes. -->
    <dom-if if="[[_shouldRenderDrawer]]" restamp="">
      <template>
      <!-- Two-way bind \`drawerOpened\` since app-drawer can update \`opened\` itself. -->
      <app-drawer opened="{{drawerOpened}}" swipe-open="" tabindex="0">
        <iron-selector role="navigation" class="drawer-list" selected="{{page}}" attr-for-selected="name">
          <dom-repeat items="[[categories]]" as="category" initial-count="4">
            <template>
              <a name="[[category.name]]" href="[[category.href]]" hidden\$="[[category.hiddenFromMenu]]">[[category.title]]</a>
            </template>
          </dom-repeat>
        </iron-selector>
      </app-drawer>
      </template>
    </dom-if>

    <dom-if if="[[_hasCategories(categories, categories.length)]]" restamp="">
      <template>

        <landing-pages id="pages" role="main" attr-for-selected="name" fallback-selection="not-found" selected\$="[[page]]">
          <dom-repeat items="{{categories}}" as="cat">
            <template>
              <landing-page name\$="[[cat.name]]" title="[[cat.title]]" id="page-[[cat.name]]" data="[[category.items]]" route="[[subroute]]" offline="[[offline]]">
                <dom-if if="[[_isEqual(cat.name,page)]]">
                  <template>
                    <slot name="content"></slot>
                  </template>
                </dom-if>
              </landing-page>
            </template>
          </dom-repeat>

          <landing-sign-in name="sign-in" route="[[subroute]]" offline="[[offline]]" id="sign-in" sign-in-google="[[config.features.signin_google]]" sign-in-github="[[config.features.signin_github]]" sign-in-email="[[config.features.signin_email]]" invitoken="[[invitoken]]" return-to="[[returnTo]]"></landing-sign-in>
          <landing-sign-up name="sign-up" route="[[subroute]]" offline="[[offline]]" id="sign-up" sign-up-google="[[config.features.signup_google]]" sign-up-github="[[config.features.signup_github]]" sign-up-email="[[config.features.signup_email]]" invitoken="[[invitoken]]" plan="[[plan]]"></landing-sign-up>

          <landing-get-started name="get-started" categories="[[categories]]" id="get-started" data="[[category.items]]"></landing-get-started>
          <landing-buy-license name="buy-license" route="[[subroute]]" offline="[[offline]]" id="buy-license" stripe-public-apikey="[[config.stripeKey]]"></landing-buy-license>
          <landing-request-pricing name="request-pricing" route="[[subroute]]" offline="[[offline]]" id="request-pricing"></landing-request-pricing>

          <landing-forgot-password name="forgot-password" route="[[subroute]]" offline="[[offline]]" id="forgot-password" support-email="[[config.email.support]]"></landing-forgot-password>
          <landing-set-password name="set-password" route="[[subroute]]" offline="[[offline]]" id="set-password" invitoken="[[invitoken]]"></landing-set-password>
          <landing-reset-password name="reset-password" route="[[subroute]]" offline="[[offline]]" id="reset-password"></landing-reset-password>

          <landing-error name="error" route="[[subroute]]" offline="[[offline]]"></landing-error>
          <landing-not-found name="not-found" id="not-found"></landing-not-found>
        </landing-pages>
      </template>
    </dom-if>


    <landing-social id="social" categories="[[categories]]" data="[[category.items]]" hidden\$="[[!_hasFooter(page)]]"></landing-social>
    <footer hidden\$="[[!config.features.landing_footer]]">
      <landing-footer id="footer" hidden\$="[[!_hasFooter(page)]]"></landing-footer>
    </footer>

    <!-- a11y announcer -->
    <div class="announcer" aria-live="assertive">[[_a11yLabel]]</div>
`,

  is: 'landing-app',

  properties: {

    page: {
      type: String,
      reflectToAttribute: true,
      observer: '_pageChanged'
    },

    numItems: {
      type: Number,
      value: 0
    },

    category: {
      type: Object
    },

    gaId: {
      type: String
    },

    _shouldShowTabs: {
      computed: '_computeShouldShowTabs(page, smallScreen)'
    },

    _shouldRenderTabs: {
      computed: '_computeShouldRenderTabs(_shouldShowTabs, loadComplete)'
    },

    _shouldRenderDrawer: {
      computed: '_computeShouldRenderDrawer(smallScreen, loadComplete)'
    },

    animated: {
      type: Boolean,
      value: ANIMATIONS
    },
    
    scrollThresholdReached: {
      type: Boolean,
      value: false
    },

    fingerprint: {
      type: String,
      value: ''
    },

    categories: {
      type: Array,
      value: function() {
        return CATEGORIES;
      }
    },
    invitoken: {
      type: String,
      value: ''
    },
    returnTo: {
      type: String,
      value: ''
    },
    config: Object
  },

  observers: [
    '_routePageChanged(routeData.page, route.__queryParams)',
    '_categoryChanged(category.content)'
  ],

  listeners: {
    'change-section': '_onChangeSection',
    'announce': '_onAnnounce',
    'dom-change': '_domChange',
    'show-invalid-url-warning': '_onFallbackSelectionTriggered',
    'user-action': '_onUserAction',
    'open-dialog': '_openDialog',
    'go-to': '_goToPage'
  },

  created: function() {
    window.performance && performance.mark && performance.mark('landing-app.created');
    // Custom elements polyfill safe way to indicate an element has been upgraded.
    this.removeAttribute('unresolved');
  },

  attached: function() {
    var content = this.querySelector('[slot="content"]') ? this.querySelector('[slot="content"]').innerHTML : '';
    this.category = {'name': this.page, 'content': content};
    //this.$.pages._selection.selection = []
    // listen for online/offline
    afterNextRender(this, function() {
      // this.listen(window, 'online', '_notifyNetworkStatus');
      // this.listen(window, 'offline', '_notifyNetworkStatus');
    });

    var that = this;
    window.onbeforeunload = function(e) {
      that.fire('user-action', 'exit from ' + that.page);
    };
    this.fire('user-action', 'entry at ' + that.page);

    document.addEventListener("scroll", function(e) {
      var scrollPercent = 1 - (document.body.scrollHeight - window.scrollY - window.innerHeight) / document.body.scrollHeight;
      if (document.body.scrollHeight <= window.innerHeight)
        return;
      if (scrollPercent > 0.8 && !this.scrollThresholdReached){
        that.fire('user-action', 'scroll to bottom');
        this.scrollThresholdReached = true;
        if (that.config.features && that.config.features.landing_footer){
          that.async(function() {
            this.$.footer.finishLoading();
          }, 50);
        }
      }
    });

    this._ensureLazyLoaded();
  },

  _goToPage: function(event) {
    this.$.appLocation.set('path', event.detail);
  },

  _routePageChanged: function(page, params) {
    if (params){
      this.set('invitoken', params.invitoken || this.invitoken);
      this.set('returnTo', params.return_to);
      this.set('plan', params.plan);
    }
    // HACK(keanulee): Need to check if `page` actually changed due to polymer#3935.
    if (this.page === 'list' && this.page !== page) {
      this._listScrollTop = window.pageYOffset;
    }

    this.page = page || 'home';

    // Close the drawer - in case the *route* change came from a link in the drawer.
    this.drawerOpened = false;
  },

  _pageChanged: function(page, oldPage) {
    if (page != null) {
      // in docs and blog case reset page to the oldPage
      if (['docs', 'blog'].indexOf(page) > -1){
        this.set('page', oldPage);
      // home route is eagerly loaded
      } else if (page == 'home') {
        this._pageLoaded(Boolean(oldPage));
      // other routes are lazy loaded
      } else {
        // When a load failed, it triggered a 404 which means we need to
        // eagerly load the 404 page definition
        var cb = this._pageLoaded.bind(this, Boolean(oldPage));
        var category = this.categories && this.categories.find(function(c){ return c.name == page});
        if (!category)
          category = category && this.categories.find(function(c){ return c.href == "/" + page});
        if (category && category.template) {
          this.importHref(
            this.resolveUrl('landing-' + category.template + '.html'),
            cb, cb, true
          );
          // import('landing-' + category.template + '.html').then(cb,cb);
        } else if (['buy-license', 'request-pricing'].indexOf(page) > -1) {
          this.importHref(
            this.resolveUrl('landing-' + page + '.html'),
            cb, cb, true
          );
          // import('landing-' + page + '.html').then(cb,cb);
        }
      }
    }
  },

  _pageLoaded: function(shouldResetLayout) {
    if (shouldResetLayout) {
      // The size of the header depends on the page (e.g. on some pages the tabs
      // do not appear), so reset the header's layout only when switching pages.
      this.async(function() {
        this.$.header.resetLayout();
      }, 1);
    }
    console.log('Loaded page ', this.page);
  },

  _ensureLazyLoaded: function() {
    // load lazy resources after render and set `loadComplete` when done.
    if (!this.loadComplete) {
      afterNextRender(this, function() {
        this.importHref(this.resolveUrl('lazy-resources.html'), function() {
          // Register service worker if supported.
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/landing/service-worker.js');
          }
          // this._notifyNetworkStatus();
          this.loadComplete = true;
        });
      });
    }
  },

  // _notifyNetworkStatus: function() {
  //   var oldOffline = this.offline;
  //   this.offline =  !navigator.onLine;
  //   // Show the snackbar if the user is offline when starting a new session
  //   // or if the network status changed.
  //   if (this.offline || (!this.offline && oldOffline === true)) {
  //     if (!this._networkSnackbar) {
  //       this._networkSnackbar = document.createElement('landing-snackbar');
  //       dom(this.root).appendChild(this._networkSnackbar);
  //     }
  //     dom(this._networkSnackbar).innerHTML = this.offline ?
  //         'You are offline' : 'You are online';
  //     this._networkSnackbar.open();
  //   }
  // },

  _toggleDrawer: function() {
    this.drawerOpened = !this.drawerOpened;
  },

  // Elements in the app can notify section changes.
  // Response by a11y announcing the section and syncronizing the category.
  _onChangeSection: function(event) {
    if (this.page == 'home' && this.config.features.signin_home)
      this.page = 'sign-in';
    console.warn('change section', event);
    var detail = event.detail;

    // Scroll to the top of the page when navigating to a non-list page. For list view,
    // scroll to the last saved position only if the category has not changed.
    var scrollTop = 0;
    if (this.page === 'list') {
      if (this.category.name === detail.category) {
        scrollTop = this._listScrollTop;
      } else {
        // Reset the list view scrollTop if the category changed.
        this._listScrollTop = 0;
      }
    }
    // Use `Polymer.AppLayout.scroll` with `behavior: 'silent'` to disable header scroll
    // effects during the scroll.
    scroll({ top: scrollTop, behavior: 'silent' });

    // Announce the page's title
    if (detail.title) {
      document.title = detail.title + ' - ' + this.config.portalName;
      this._announce(detail.title + ', loaded');
    }
  },

  // Elements in the app can notify a change to be a11y announced.
  _onAnnounce: function(e) {
    this._announce(e.detail);
  },

  // A11y announce the given message.
  _announce: function(message) {
    this._a11yLabel = '';
    this.debounce('_a11yAnnouncer', function() {
      this._a11yLabel = message;
    }, 100);
  },

  // This is for performance logging only.
  _domChange: function(e) {
    /*if (window.performance && performance.mark && !this.__loggedDomChange) {
      var target = Polymer.dom(e).rootTarget;
      if (target.domHost.is.match(this.page)) {
        this.__loggedDomChange = true;
        performance.mark(target.domHost.is + '.domChange');
      }
    }*/
  },

  _onFallbackSelectionTriggered: function() {
    if (this.route.path.match('insights|clouds|machines|images|networks|teams|keys|templates|stacks|tunnels|zones|scripts|schedules|account|incidents')) {
      this.route.__queryParams.return_to = this.route.path;
      this.page = 'sign-in';
      window.history.pushState({}, null, '/sign-in?return_to='+this.route.path);
      window.dispatchEvent(new CustomEvent('location-changed'));
    } else
      this.page = 'not-found';
  },

  _computeShouldShowTabs: function(page, smallScreen) {
    return ((page === 'home' || page === 'list' || page === 'detail') ||
            this.categories && this.categories.map(function(c){return c.name}).indexOf(page) > -1) && !smallScreen;
  },

  _computeShouldRenderTabs: function(_shouldShowTabs, loadComplete) {
    return _shouldShowTabs && loadComplete;
  },

  _computeShouldRenderDrawer: function(smallScreen, loadComplete) {
    return smallScreen && loadComplete;
  },

  _computePluralizedQuantity: function(quantity) {
    return quantity + ' ' + (quantity === 1 ? 'item' : 'items');
  },

  _hasFooter: function(page) {
    var unfootedPages = ['sign-in', 'sign-up', 'set-password', 'reset-password', 'forgot-password', 'request-pricing', 'buy-license']
    if (unfootedPages.indexOf(page) > -1)
      return false;
    return true;
  },

  _signInClick: function(event) {
    this.fire('user-action', 'sign in click from ' + this.page);
    event.preventDefault();
    new Wave(event.detail.x, event.detail.y, window.getComputedStyle(event.currentTarget).backgroundColor, 1);
    this.async(
      function() {
        this.fire('go-to', '/sign-in');
        waves.forEach(function(wave) { wave.up(); })
        window.scrollTo(0, 0);
      }, 200 );
  },

  _signUpClick: function(event) {
    this.fire('user-action', 'sign up click from ' + this.page);
    event.preventDefault();
    new Wave(event.detail.x, event.detail.y, '#333', 1);
    this.async(
      function() {
        waves.forEach(function(wave) { wave.up(); });
        this.fire('go-to', event.target.parentElement.href);
        window.scrollTo(0, 0);
      }, 200 );
  },

  _onUserAction: function(event) {
    console.debug('user-action', event);
    if (typeof gtag == 'function') {
      gtag('event', event.detail, {
        'event_category': 'landing'
      });
    }
    if (!this.config || !this.config.features || !this.config.features.ab)
      return;
    var xhr = new XMLHttpRequest();
    if (!this.fingerprint){
      var that = this;
      new Fingerprint2().get(function(result, components){
        // this will use all available fingerprinting sources
        that.fingerprint = result;
        var componentMap = {};
        components.forEach(function(e){componentMap[e.key] = e.value});
        var payload = {'action': event.detail,
                       'fingerprint': result,
                       'resolution': componentMap.resolution,
                       'platform': componentMap.navigator_platform,
                       'browser': that._getBrowser(),
                       'tz': componentMap.timezone_offset};
        if (document.referrer)
          payload['referrer'] = document.referrer;
        xhr.open('GET', '/api/v1/logs/ui?b=' + btoa(JSON.stringify(payload)));
        xhr.send();
      });
    } else {
      var payload = {'action': event.detail,
                     'fingerprint': this.fingerprint};
      xhr.open('GET', '/api/v1/logs/ui?b=' + btoa(JSON.stringify(payload)));
      xhr.send();
    }
  },

  _getBrowser: function() {
    var userAgent = navigator.userAgent.toLowerCase();
    var productSub = navigator.productSub;

    //we extract the browser from the user agent (respect the order of the tests)
    var browser;
    if(userAgent.indexOf("firefox") >= 0){
      browser = "Firefox";
    } else if(userAgent.indexOf("opera") >= 0 || userAgent.indexOf("opr") >= 0){
      browser = "Opera";
    } else if(userAgent.indexOf("chrome") >= 0){
      browser = "Chrome";
    } else if(userAgent.indexOf("safari") >= 0){
      browser = "Safari";
    } else if(userAgent.indexOf("trident") >= 0){
      browser = "Internet Explorer";
    } else {
      browser = "Other";
    }
    return browser;
  },

  _tabClicked: function(event) {
    this.fire('user-action', 'tab click ' + event.target.textContent);
  },

  _logoClicked: function(event) {
    this.fire('user-action', 'header logo click');
  },

  _openDialog: function(e) {
    console.log(e.detail.content);
      var content = e.detail.content;
      this.$["show-"+content].open();
  },

  _isEqual: function(catName,page) {
    return catName == page;
  },

  _categoryChanged: function(content) {
    var htmlContent = this.querySelector('[slot="content"]') ? this.querySelector('[slot="content"]').innerHTML : '';
    if (!this.category["content"] || htmlContent == this.category["content"]) {
      return;
    }
    if (this.querySelector('[slot="content"]')) {
      this.querySelector('[slot="content"]').innerHTML = this.category["content"];
      window.scrollTo(0, 0);
    }
  },

  _hasCategories: function (categories, length) {
    return this.categories && this.categories.length > 0 || false;
  }
});

var waves = [];
var duration = 300;
function Wave(x, y, color, opacity) {
  waves.push(this);
  this.element = document.createElement('div');
  this.element.style.left = 'calc(' + x + 'px - 2000px)';
  this.element.style.top = 'calc(' + y + 'px - 2000px)';
  this.element.style.backgroundColor = color;
  this.element.style.opacity = opacity;
  this.element.setAttribute('touch-action', 'none');
  this.element.setAttribute('class', 'wave');
  this.element.addEventListener('up', up);

  document.body.appendChild(this.element);

  this.scale = this.element.animate([
    {transform: 'scale(0)'},
    {transform: 'scale(1)'},
  ], {
    duration: duration,
    easing: 'cubic-bezier(0.3, 0.2, 1.0, 0.2)',
    fill: 'forwards',
  });
}
Wave.prototype = {
  up: function() {
    this.up = function() {};
    this.opacity = this.element.animate([
      {opacity: 0.66},
      {opacity: 0},
    ], {
      duration: duration,
      fill: 'forwards',
    });
    this.opacity.onfinish = function() {
      this.element.remove();
      waves.splice(waves.indexOf(this), 1);
    }.bind(this);
  }
};

function up() {
  waves.forEach(function(wave) { wave.up(); });
}

document.body.addEventListener('up', up);
