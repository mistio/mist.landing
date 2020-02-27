import '../node_modules/@polymer/polymer/polymer-legacy.js';
import '../node_modules/@polymer/iron-icons/iron-icons.js';
import '../node_modules/@polymer/iron-icons/social-icons.js';
import '../node_modules/@polymer/iron-icons/communication-icons.js';
import '../node_modules/@polymer/paper-button/paper-button.js';
import { Polymer } from '../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../node_modules/@polymer/polymer/lib/utils/html-tag.js';

// var POSTS = [
//     {
//         url: "https://blog.mist.io/post/190791092481/multicloud-has-the-edge",
//         image: "https://66.media.tumblr.com/f4dbacbc11344567ce08f85a9a3f0312/7bd114e80c91d67d-f3/s500x750/3a4d45af1dc9d1188d9088bfb26b6201e6b6a565.jpg",
//         title: 'Multi-cloud has the edge',
//         author: 'Christos Psaltis',
//         text: '\<p\>A spectre is haunting the clouds - the spectre of edge computing. Blazingly fast 5G networks, AI applications and data sovereignty concerns are inevitably pushing workloads to the edge.\<\/p\>\<p\>Vendors have seen the writing on the wall and race to deliver mashups of hardware, software and/or professional services. Are you an AWS customer? Get Outposts to have EC2 in your office. Get Wavelength to create a mini AWS zone at the edge of your telco\'s network. Similar stories from Microsoft with Azure Stack and Google with Anthos.\<\/p\>'
//     }
// ]

Polymer({
  _template: html`
    <style include="shared-styles">
        :host {
            height: 300px;
        }
    </style>
    <template is="dom-if" if="[[posts.length]]" restamp>
        <div class="grid-row blogposts">
            <template is="dom-repeat" items="[[posts]]" as="post">
                <div class="xs12 s6 m4 l4 margin-top margin-bottom padding-bottom">
                    <paper-material class="blogpost">
                        <a href\$="[[post.url]]">
                            <div class="postimage"><img src\$="[[post.image]]"/></div>
                            <div class="content">
                                <div class="text">
                                    <h4>[[post.title]]</h4>
                                    <p class="secondary">by [[post.author]]</p>
                                    [[post.text]]
                                </div>
                                <p class="post-link">Learn more <iron-icon icon="icons:arrow-forward"></iron-icon></p>
                            </div>
                        </a>
                    </paper-material>
                </div>
            </template>
        </div>
    </template>
    <!-- <iron-ajax id="getPosts" auto method="GET" loading="{{loading}}" url\$="https://mist.io/blog/api/read/json?callback=response&num=[[number]]" on-request="" on-response="_response"></iron-ajax> -->

`,

  is: 'landing-blog-posts',
  properties: {
    posts: {
        // type: Array,
        // value: function(){
        //     return POSTS;
        // }
    },
    number: {
        type: Number,
        value: 3
    },
    loading: {
        type: Boolean,
        value: false
    }
  },
  attached: function() {
    // this.$.getPosts.headers =  document.getElementsByTagName("head")[0];
    // this.$.getPosts.headers["Content-Type"] = 'application/json';
  },
  detached: function() {

  },
  _response: function(response) {
    //   console.log('response',response)
    //   this.set('posts', response.posts)
  },
  finishLoading: function() {
  }
});