import '@polymer/polymer/polymer-legacy.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-media-query/iron-media-query.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-tooltip/paper-tooltip.js';

import '@polymer/paper-styles/color.js';
import '@polymer/paper-styles/default-theme.js';
import '@polymer/paper-styles/shadow.js';
import '@polymer/paper-styles/typography.js';

import '@polymer/app-layout/app-drawer/app-drawer.js';
import './landing-testimonials.js';
import './landing-icons.js';
import './landing-pages.js';
import './landing-page.js';
import './landing-category-data.js';
import './shared-styles.js';
import './landing-fold.js';
import './landing-sign-in.js';
import './landing-sign-up.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
import { Wave, waves } from './wave.js';

// performance logging
// eslint-disable-next-line babel/no-unused-expressions
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
        width: 100%;
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
        background-image: var(--logo-image); /*url('../images/logo.svg'); */
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

      :host([page='set-password']),
      :host([page='reset-password']),
      :host([page='forgot-password']),
      :host([page='sign-in']),
      :host([page='sign-up']) {
        padding-top: 0px;
      }

      :host([page='set-password']) .logo,
      :host([page='reset-password']) .logo,
      :host([page='forgot-password']) .logo,
      :host([page='sign-in']) .logo,
      :host([page='sign-up']) .logo {
        display: none;
      }

      :host([page='set-password']) > app-header,
      :host([page='reset-password']) > app-header,
      :host([page='forgot-password']) > app-header,
      :host([page='sign-in']) > app-header,
      :host([page='sign-up']) > app-header,
      :host([page='request-pricing']) > app-header,
      :host([page='get-started']) > app-header,
      :host([page='buy-license']) > app-header {
        z-index: -1;
      }

      .signin-btn-container {
        width: 120px;
        position: absolute;
        right: 0;
      }
      .signin-btn-container > paper-button {
        float: right;
      }

      [hidden] {
        display: none !important;
      }

      #tabContainer {
        position: absolute;
        left: 0px;
        height: 66px;
        width: 100%;
        text-align: center;
        margin: 12px 0px 0px 0px;
      }

      landing-tabs,
      landing-tab {
        --landing-tab-overlay: {
          border-bottom: 2px solid var(--app-accent-color);
        }
      }

      landing-tabs {
        height: 100%;
        width: 100%;
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
        font-weight: bold;
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
        background-color: #2196f3;
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

      div.left-bar-item {
        z-index: 1;
      }

      /* small screen */
      @media (max-width: 767px) {
        .menu-btn {
          display: block;
        }

        :host([page='detail']) .menu-btn {
          display: none;
        }

        .logo {
          display: none;
        }
        app-toolbar {
          width: 99%;
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
    <app-route
      route="{{route}}"
      pattern="/:page"
      data="{{routeData}}"
      tail="{{subroute}}"
    ></app-route>
    <app-route
      route="{{subroute}}"
      pattern="/:subpage"
      data="{{subrouteData}}"
    ></app-route>
    <iron-media-query query="max-width: 767px" query-matches="{{smallScreen}}"></iron-media-query>

    <!--
      landing-category-data provides the list of categories.
    -->
    <landing-category-data
      categories="[[categories]]"
      category-name="[[page]]"
      category="{{category}}"
    ></landing-category-data>

    <app-header role="navigation" id="header" effects="waterfall" fixed="">
      <app-toolbar>
        <div class="left-bar-item">
          <paper-icon-button
            class="menu-btn"
            icon="menu"
            on-tap="_toggleDrawer"
            aria-label="Categories"
          >
          </paper-icon-button>
          <div class="logo">
            <a href="/" aria-label="Mist.io Home" on-tap="_logoClicked">
              <!-- <img src="images/logo.svg"> -->
            </a>
          </div>
        </div>

        <!-- Lazy-create the tabs for larger screen sizes. -->
        <div id="tabContainer" sticky$="[[_shouldShowTabs]]" hidden$="[[!_shouldRenderTabs]]">
          <dom-if if="[[_shouldRenderTabs]]" restamp="">
            <template>
              <landing-tabs selected="{{page}}" attr-for-selected="name">
                <dom-repeat items="[[categories]]" as="category" initial-count="4">
                  <template>
                    <landing-tab
                      name="[[category.name]]"
                      on-tap="_tabClicked"
                      hidden$="[[category.hiddenFromMenu]]"
                    >
                      <a name="[[category.name]]" href="[[category.href]]" target="new"
                        >[[category.title]]</a
                      >
                    </landing-tab>
                  </template>
                </dom-repeat>
              </landing-tabs>
            </template>
          </dom-if>
        </div>
        <div class$="signin-btn-container [[_shouldShowTabs]]">
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
          <iron-selector
            role="navigation"
            class="drawer-list"
            selected="{{page}}"
            attr-for-selected="name"
          >
            <dom-repeat items="[[categories]]" as="category" initial-count="4">
              <template>
                <a
                  name="[[category.name]]"
                  href="[[category.href]]"
                  hidden$="[[category.hiddenFromMenu]]"
                  >[[category.title]]</a
                >
              </template>
            </dom-repeat>
          </iron-selector>
        </app-drawer>
      </template>
    </dom-if>

    <dom-if if="[[_hasCategories(categories)]]" restamp="">
      <template>
        <landing-pages
          id="pages"
          role="main"
          attr-for-selected="name"
          fallback-selection="not-found"
          selected$="[[page]]"
        >
          <dom-repeat items="{{categories}}" as="cat">
            <template>
              <landing-page
                name$="[[cat.name]]"
                title="[[cat.title]]"
                id="page-[[cat.name]]"
                data="[[category.items]]"
                route="[[subroute]]"
                offline="[[offline]]"
              >
                <dom-if if="[[_isEqual(cat.name,page)]]">
                  <template>
                    <slot name="content"></slot>
                  </template>
                </dom-if>
              </landing-page>
            </template>
          </dom-repeat>
          </landing-page>

          <landing-sign-in
            name="sign-in"
            route="[[subroute]]"
            offline="[[offline]]"
            id="sign-in"
            sign-in-google=[[config.features.signin_google]]
            sign-in-github=[[config.features.signin_github]]
            sign-in-email=[[config.features.signin_email]]
            sign-in-ldap=[[config.features.signin_ldap]]
            sign-in-a-d=[[config.features.signin_ad]]
            sign-in-ms365=[[config.features.signin_ms365]]
            sign-in-c-i-logon=[[config.features.signin_cilogon]]
            default-method=[[config.features.default_signin_method]]
            invitoken="[[invitoken]]"
            return-to="[[returnTo]]"
            csrf-token="[[csrfToken]]"
          ></landing-sign-in>
          <landing-sign-up
            name="sign-up"
            route="[[subroute]]"
            offline="[[offline]]"
            id="sign-up"
            sign-up-google="[[config.features.signup_google]]"
            sign-up-github="[[config.features.signup_github]]"
            sign-up-email="[[config.features.signup_email]]"
            sign-up-ms365="[[config.features.signup_ms365]]"
            sign-up-c-i-logon="[[config.features.signup_cilogon]]"
            invitoken="[[invitoken]]"
            plan="[[plan]]"
            csrf-token="[[csrfToken]]"
          ></landing-sign-up>

          <landing-get-started
            name="get-started"
            categories="[[categories]]"
            id="get-started"
            data="[[category.items]]"
          ></landing-get-started>

          <landing-buy-license
            name="buy-license"
            route="[[subroute]]"
            offline="[[offline]]"
            id="buy-license"
            stripe-public-apikey="[[config.stripeKey]]"
            csrf-token="[[csrfToken]]"
          ></landing-buy-license>

          <landing-request-pricing
            name="request-pricing"
            route="[[subroute]]"
            offline="[[offline]]"
            id="request-pricing"
            csrf-token="[[csrfToken]]"
          ></landing-request-pricing>

          <landing-forgot-password
            name="forgot-password"
            route="[[subroute]]"
            offline="[[offline]]"
            id="forgot-password"
            support-email="[[config.email.support]]"
            csrf-token="[[csrfToken]]"
          ></landing-forgot-password>

          <landing-set-password
            name="set-password"
            route="[[subroute]]"
            offline="[[offline]]"
            id="set-password"
            invitoken="[[invitoken]]"
            csrf-token="[[csrfToken]]"
          ></landing-set-password>

          <landing-reset-password
            name="reset-password"
            route="[[subroute]]"
            offline="[[offline]]"
            id="reset-password"
            csrf-token="[[csrfToken]]"
          ></landing-reset-password>

          <landing-error name="error" route="[[subroute]]" offline="[[offline]]"></landing-error>
          <landing-not-found name="not-found" id="not-found"></landing-not-found>
        </landing-pages>
      </template>
    </dom-if>

    <footer hidden$="[[!config.features.landing_footer]]">
      <landing-footer id="footer" hidden$="[[!_hasFooter(page)]]"></landing-footer>
    </footer>

    <!-- a11y announcer -->
    <div class="announcer" aria-live="assertive">[[_a11yLabel]]</div>
  `,

  is: 'landing-app',

  properties: {
    page: {
      type: String,
      reflectToAttribute: true,
      observer: '_pageChanged',
    },

    numItems: {
      type: Number,
      value: 0,
    },

    category: {
      type: Object,
    },

    gaId: {
      type: String,
    },

    _shouldShowTabs: {
      computed: '_computeShouldShowTabs(page, smallScreen)',
    },

    _shouldRenderTabs: {
      computed: '_computeShouldRenderTabs(_shouldShowTabs, loadComplete)',
    },

    _shouldRenderDrawer: {
      computed: '_computeShouldRenderDrawer(smallScreen, loadComplete)',
    },

    animated: {
      type: Boolean,
      value: true,
    },

    scrollThresholdReached: {
      type: Boolean,
      value: false,
    },

    fingerprint: {
      type: String,
      value: '',
    },

    categories: {
      type: Array,
      value() {
        return [];
      },
    },

    invitoken: {
      type: String,
      value: '',
    },

    returnTo: {
      type: String,
      value: '',
    },

    config: Object,

    csrfToken: {
      type: String,
      value: '',
    },
  },

  observers: [
    '_routePageChanged(routeData.page, route.__queryParams)',
    '_subroutePathChanged(subroute.path, subroute.__queryParams)',
    '_categoryChanged(category.content)',
  ],

  listeners: {
    announce: '_onAnnounce',
    'dom-change': '_domChange',
    'show-invalid-url-warning': '_onFallbackSelectionTriggered',
    'user-action': '_onUserAction',
    'open-dialog': '_openDialog',
    'go-to': '_goToPage',
    wave: '_createWave',
  },

  created() {
    // eslint-disable-next-line babel/no-unused-expressions
    window.performance && performance.mark && performance.mark('landing-app.created');
    // Custom elements polyfill safe way to indicate an element has been upgraded.
    this.removeAttribute('unresolved');
  },

  attached() {
    const content = this.querySelector('[slot="content"]')
      ? this.querySelector('[slot="content"]').innerHTML
      : '';
    this.category = { name: this.page, content };
    // listen for online/offline
    afterNextRender(this, function listenNetworkStatus() {
      this.listen(window, 'online', '_notifyNetworkStatus');
      this.listen(window, 'offline', '_notifyNetworkStatus');
    });

    const that = this;
    window.onbeforeunload = function logUserExit() {
      that.fire('user-action', `exit from ${that.page}`);
    };
    this.fire('user-action', `entry at ${that.page}`);

    this._ensureLazyLoaded();
    // eslint-disable-next-line
    if (!CONFIG.theme) {
      import('./mist-theme.js').then(console.log('Loaded default theme'));
    }
  },

  _goToPage(event) {
    this.$.appLocation.set('path', event.detail);
  },

  _routePageChanged(page, params) {
    if (params) {
      this.set('invitoken', params.invitoken || this.invitoken);
      this.set('returnTo', params.return_to);
      this.set('plan', params.plan);
    }

    if (this.page !== page) {
      this._listScrollTop = window.pageYOffset;
    }
    this.page = page || 'home';

    if (this.page === 'home' && this.config.features.signin_home) {
      this.page = 'sign-in';
    }
    // Close the drawer - in case the *route* change came from a link in the drawer.
    this.drawerOpened = false;
  },

  // eslint-disable-next-line no-unused-vars
  _subroutePathChanged(path, params) {
    const oldSubpage = this.subpage;
    const subpage = path.replace('/', '');
    if (subpage === oldSubpage) {
      return;
    }
    this.subpage = subpage;
    if (this.page === 'blog') {
      let url = '/api/v1/section/landing--blog';
      if (subpage) {
        url = `/api/v1/section/landing--blog--${subpage}`;
      }
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('load', e => {
        document.querySelector('landing-app').querySelector('.page').innerHTML =
          e.currentTarget.response;
        if (subpage) {
          window.scrollTo(0, 0);
        } else {
          const el = document.querySelector(`a[href='/blog/${oldSubpage}']`);
          el.scrollIntoView();
        }
      });
      xhr.addEventListener('error', e => {
        console.error(e);
      });
      xhr.open('GET', url);
      xhr.send();
    } else {
      console.warn(`Subpage changed: ${subpage} / ${oldSubpage} | ${this.page}`);
    }
  },

  _pageChanged(page, oldPage) {
    if (page != null) {
      // in docs reset page to the oldPage
      if (['docs'].indexOf(page) > -1) {
        this.set('page', oldPage);
        // home route is eagerly loaded
      } else if (page === 'home') {
        this._pageLoaded(Boolean(oldPage));
        // other routes are lazy loaded
      } else if (page === 'request-pricing') {
        import('./landing-request-pricing.js').then(() => {
          console.warn('Request-pricing page imported');
        });
      } else if (page === 'buy-license') {
        import('./landing-buy-license.js').then(() => {
          console.warn('Buy-license page imported');
        });
      }
    }
  },

  _pageLoaded(shouldResetLayout) {
    if (shouldResetLayout) {
      // The size of the header depends on the page (e.g. on some pages the tabs
      // do not appear), so reset the header's layout only when switching pages.
      this.async(() => {
        this.$.header.resetLayout();
      }, 1);
    }
    console.log('Loaded page ', this.page);
  },

  _ensureLazyLoaded() {
    const that = this;
    // load lazy resources after render and set `loadComplete` when done.
    if (!this.loadComplete) {
      afterNextRender(this, () => {
        import('./lazy-resources.js').then(() => {
          console.warn('Lazy resources imported');
          document.addEventListener('scroll', function onScroll() {
            const scrollPercent =
              1 -
              (document.body.scrollHeight - window.scrollY - window.innerHeight) /
                document.body.scrollHeight;
            if (document.body.scrollHeight <= window.innerHeight) return;
            if (scrollPercent > 0.8 && !this.scrollThresholdReached) {
              that.fire('user-action', 'scroll to bottom');
              this.scrollThresholdReached = true;
              if (that.config.features && that.config.features.landing_footer) {
                that.async(function loadFooter() {
                  this.$.footer.finishLoading();
                }, 50);
              }
            }
          });
        });
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/landing/service-worker.js');
        }
        this._notifyNetworkStatus();
        this.loadComplete = true;
      });
    }
  },

  _notifyNetworkStatus() {
    const oldOffline = this.offline;
    this.offline = !navigator.onLine;
    // Show the snackbar if the user is offline when starting a new session
    // or if the network status changed.
    if (this.offline || (!this.offline && oldOffline === true)) {
      if (!this._networkSnackbar) {
        this._networkSnackbar = document.createElement('landing-snackbar');
        dom(this.root).appendChild(this._networkSnackbar);
      }
      dom(this._networkSnackbar).innerHTML = this.offline ? 'You are offline' : 'You are online';
      this._networkSnackbar.open();
    }
  },

  _toggleDrawer() {
    this.drawerOpened = !this.drawerOpened;
  },

  // Elements in the app can notify a change to be a11y announced.
  _onAnnounce(e) {
    this._announce(e.detail);
  },

  // A11y announce the given message.
  _announce(message) {
    this._a11yLabel = '';
    this.debounce(
      '_a11yAnnouncer',
      () => {
        this._a11yLabel = message;
      },
      100,
    );
  },

  // This is for performance logging only.
  _domChange(e) {
    if (window.performance && performance.mark && !this.__loggedDomChange) {
      const target = dom(e).rootTarget;
      if (target.domHost && target.domHost.is.match(this.page)) {
        this.__loggedDomChange = true;
        performance.mark(`${target.domHost.is}.domChange`);
      }
    }
  },

  _onFallbackSelectionTriggered() {
    if (
      this.route.path.match(
        'insights|clouds|machines|images|networks|teams|keys|templates|stacks|tunnels|zones|scripts|schedules|account|incidents',
      )
    ) {
      this.route.__queryParams.return_to = this.route.path;
      this.page = 'sign-in';
      window.history.pushState({}, null, `/sign-in?return_to=${this.route.path}`);
      window.dispatchEvent(new CustomEvent('location-changed'));
    } else {
      this.page = 'not-found';
    }
  },

  _computeShouldShowTabs(page, smallScreen) {
    return (
      (page === 'home' ||
        (this.categories && this.categories.map(c => c.name).indexOf(page) > -1)) &&
      !smallScreen
    );
  },

  _computeShouldRenderTabs(_shouldShowTabs, loadComplete) {
    return _shouldShowTabs && loadComplete;
  },

  _computeShouldRenderDrawer(smallScreen, loadComplete) {
    return smallScreen && loadComplete;
  },

  _computePluralizedQuantity(quantity) {
    return `${quantity} ${quantity === 1 ? 'item' : 'items'}`;
  },

  _hasFooter(page) {
    const unfootedPages = [
      'sign-in',
      'sign-up',
      'set-password',
      'reset-password',
      'forgot-password',
      'request-pricing',
      'buy-license',
    ];
    if (unfootedPages.indexOf(page) > -1) return false;
    return true;
  },

  _signInClick(event) {
    this.fire('user-action', `sign in click from ${this.page}`);
    event.preventDefault();
    const _w = new Wave(
      event.detail.x,
      event.detail.y,
      window.getComputedStyle(event.currentTarget).backgroundColor,
      1,
    );
    this.async(() => {
      this.fire('go-to', '/sign-in');
      waves.forEach(wave => {
        wave.up();
      });
      window.scrollTo(0, 0);
    }, 200);
  },

  _signUpClick(event) {
    this.fire('user-action', `sign up click from ${this.page}`);
    event.preventDefault();
    const _w = new Wave(event.detail.x, event.detail.y, '#333', 1);
    this.async(() => {
      waves.forEach(wave => {
        wave.up();
      });
      this.fire('go-to', event.target.parentElement.href);
      window.scrollTo(0, 0);
    }, 200);
  },

  _onUserAction(event) {
    console.debug('user-action', event);
    // If Google Analytics is configured, emit a landing event
    if (typeof gtag === 'function') {
      // eslint-disable-next-line no-undef
      gtag('event', event.detail, {
        event_category: 'landing',
      });
    }

    // Emit UI log event
    if (!this.config || !this.config.features || !this.config.features.ab) return;
    const xhr = new XMLHttpRequest();
    if (!this.fingerprint) {
      const that = this;
      import('@fingerprintjs/fingerprintjs').then(FingerprintJS => {
        FingerprintJS.load().then(fp => {
          // The FingerprintJS agent is ready.
          // Get a visitor identifier when you'd like to.
          fp.get().then(result => {
            // This is the visitor identifier:
            const { visitorId } = result;
            console.log(visitorId);

            // this will use all available fingerprinting sources
            that.fingerprint = result.visitorId;
            const payload = {
              action: event.detail,
              fingerprint: result.visitorId,
              resolution: result.components.screenResolution.value,
              platform: result.components.platform.value,
              browser: that._getBrowser(),
              tz: result.components.timezoneOffset,
            };
            if (document.referrer) payload.referrer = document.referrer;
            xhr.open('GET', `/api/v1/logs/ui?b=${btoa(JSON.stringify(payload))}`);
            xhr.send();
          });
        });
      });
    } else {
      const payload = { action: event.detail, fingerprint: this.fingerprint };
      xhr.open('GET', `/api/v1/logs/ui?b=${btoa(JSON.stringify(payload))}`);
      xhr.send();
    }
  },

  _getBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();

    // we extract the browser from the user agent (respect the order of the tests)
    let browser;
    if (userAgent.indexOf('firefox') >= 0) {
      browser = 'Firefox';
    } else if (userAgent.indexOf('opera') >= 0 || userAgent.indexOf('opr') >= 0) {
      browser = 'Opera';
    } else if (userAgent.indexOf('chrome') >= 0) {
      browser = 'Chrome';
    } else if (userAgent.indexOf('safari') >= 0) {
      browser = 'Safari';
    } else if (userAgent.indexOf('trident') >= 0) {
      browser = 'Internet Explorer';
    } else {
      browser = 'Other';
    }
    return browser;
  },

  _tabClicked(event) {
    this.fire('user-action', `tab click ${event.target.textContent}`);
  },

  _logoClicked() {
    this.fire('user-action', 'header logo click');
  },

  _openDialog(e) {
    console.log(e.detail.content);
    const { content } = e.detail;
    this.$[`show-${content}`].open();
  },

  _isEqual(catName, page) {
    return catName === page;
  },

  _categoryChanged() {
    const htmlContent = this.querySelector('[slot="content"]')
      ? this.querySelector('[slot="content"]').innerHTML
      : '';
    if (!this.category.content || htmlContent === this.category.content) {
      return;
    }
    if (this.querySelector('[slot="content"]')) {
      const setInnerHTML = (elm, code) => {
        // eslint-disable-next-line no-param-reassign
        elm.innerHTML = code;
        Array.from(elm.querySelectorAll('script')).forEach(oldScript => {
          const newScript = document.createElement('script');
          Array.from(oldScript.attributes).forEach(attr =>
            newScript.setAttribute(attr.name, attr.value),
          );
          newScript.appendChild(document.createTextNode(oldScript.innerHTML));
          oldScript.parentNode.replaceChild(newScript, oldScript);
        });
      };
      setInnerHTML(this.querySelector('[slot="content"]'), this.category.content);
      window.scrollTo(0, 0);
    }
  },

  _hasCategories(categories) {
    return (categories && categories.length > 0) || false;
  },

  _createWave(event) {
    const _w = new Wave(event.detail.x, event.detail.y, event.detail.color, event.detail.opacity);
    this.async(() => {
      waves.forEach(wave => {
        wave.up();
      });
      this.fire('go-to', event.detail.href);
      window.scrollTo(0, 0);
    }, 200);
  },
});
