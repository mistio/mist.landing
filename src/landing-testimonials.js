import '@polymer/polymer/polymer-legacy.js';
import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style include="shared-styles">
        :host {
            position: relative;
            display: block;
            padding: 24px;
        } 
        .client {
            font-size: 16px;
        }
        img.client-image {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: #fefefe;
            border: 3px solid #444;
        }
        .job-title {
            color: #7f7f7f;
            line-height: 130%;
            font-weight: 300;
            margin: 0;
        }
        h5.client-name {
            font-weight: 400; 
        }
        h6.job-title {
            line-height: 130%;
            color: #7f7f7f;
            font-weight: 400;
        }
        hr {
            max-width: 66%;
            margin-top: 20px;
            margin-bottom: 20px; 
            opacity: .3;
        }
        .client-testimonial {
            max-width: 75%;
            margin: 0 auto;
        }
        #testimonials {
            position: relative;
            min-height: 300px;
        }
        .testimonial {
            position: absolute;
            width: 100%;
            top: 0;
            padding-bottom: 48px;
            transition: 100ms opacity ease-in;
            opacity: 0;
        }
        .testimonial[active] {
            opacity: 1;
        }
        #controls {
            text-align: center;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
        }
        #controls .control-item {
            display: inline-block;
            height: 16px;
            width: 16px;
            margin: 0 12px;
            background-color: #e0e0e0;
            transition: background-color .3s;
            border-radius: 50%;
            font-size: 0;
        }
        #controls .control-item[active] {
            background-color: #09c;
        }
    </style>
    
    <div id="testimonials">
        <slot id="clients" name="testimonials"></slot>
    </div>

    <div id="controls">
        <template id="controlsRepeater" is="dom-repeat" items="[[clients]]" as="client">
            <div data-index="[[index]]" class="control-item" on-tap="_selectTestimonial" active\$="{{isEqual(index, activeIndex)}}">[[index]]</div>
        </template>
    </div>
`,

  is: 'landing-testimonials',

  behaviors: [
      IronResizableBehavior
  ],

  properties: {
      activeIndex: {
          type: Number,
          value: 0
      }
  },

  listeners: {
      'iron-resize': 'updateHeights'
  },

  attached: function (e) {
      if (this.$.clients.assignedNodes().length)
          this.$.clients.assignedNodes()[0].setAttribute('active', true);
      this.$.controlsRepeater.items = this.$.clients.assignedNodes();
      var that = this;
      this.async(function(){
          that.updateHeights();
      }, 200);
  },

  updateHeights: function(){
      var testimonials = this.$.clients.assignedNodes();
      var heights = [];
      [].forEach.call(testimonials, function(t){
          heights.push(t.offsetHeight);
      })
      var height = heights.reduce(function(a,b){
          return Math.max(a,b);
      });
      this.$.testimonials.style.height = height+'px';
  },

  _selectTestimonial: function(e) {
      this.set('activeIndex',e.model.index);
      var testimonials = this.$.clients.assignedNodes();
      [].forEach.call(testimonials, function(t){
          t.removeAttribute('active');
      })
      this.$.clients.assignedNodes()[e.model.index].setAttribute('active', true);
  },

  isEqual: function(ind, activeIndex){
      return ind == this.activeIndex;
  }
});
