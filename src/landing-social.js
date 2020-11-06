import '@polymer/polymer/polymer-legacy.js';
import 'social-media-icons/social-media-icons.js';
import './shared-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style include="shared-styles">
        :host([hidden]) {
            display: none;
        }
        .social {
            text-align: center;
            justify-content: center;
        }
        .social-link {
            display: inline-block;
        }
        social-media-icons {
            display: var(--social-icons-display);
            width: var(--social-icons-size);
            height: var(--social-icons-size);
            line-height: var(--social-icons-line-height);
            border-radius: var(--social-icons-border-radius);
            border: var(--social-icons-border);
            background: var(--app-accent-color);
            color: var(--app-primary-color);
        }
    </style>
    <template is="dom-if" if="[[data.social]]" restamp="">
        <div class="section grey">
            <div class="contains">
                <div class="grid-row social">
                    <div class="margin-top margin-bottom padding-bottom">
                        <template is="dom-repeat" items="[[data.social]]" as="item">
                            <div class="social-link">
                                <a href="[[item.href]]" target="_blank" rel="noopener noreferrer">
                                    <social-media-icons icon="[[item.icon]]" size="[[item.size]]" color="[[item.color]]" href="[[item.href]]" new-tab=""></social-media-icons>
                                </a>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </template>
`,

  is: 'landing-social',

  properties: {
      data: {
          type: Array,
          notify: true
      }
  }
});
