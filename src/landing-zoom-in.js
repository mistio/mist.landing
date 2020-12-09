import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
      img {
        max-width: 100%;
      }
      img:not(#zoomimage) {
        margin: 20px auto;
        transform: scale(2);
      }
      paper-dialog {
        display: block;
        overflow: hidden;
        background-color: #424242;
      }

      paper-dialog iron-icon {
        background-color: #424242;
        position: absolute;
        right: 0;
        top: -24px;
        width: 24px;
        height: 24px;
        color: #fff;
        padding: 16px;
        z-index: 1;
        cursor: pointer;
      }

      paper-dialog img {
        max-width: 100%;
      }
    </style>
    <img src="[[src]]" on-tap="zoomInImage" />
    <paper-dialog id="zoomArea" with-backdrop="">
      <iron-icon icon="close" dialog-dismiss=""></iron-icon>
      <paper-dialog-scrollable>
        <img id="zoomimage" />
      </paper-dialog-scrollable>
    </paper-dialog>
  `,

  is: 'landing-zoom-in',

  properties: {
    src: {
      type: String,
    },
  },

  zoomInImage(e) {
    console.log('zoomInImage', e);
    if (e.path[0] && e.path[0].tagName === 'IMG') {
      console.log('zoomInImage', e.path[0], this.$.zoomimage);
      this.$.zoomimage.setAttribute('src', e.path[0].src);
      this.$.zoomArea.open();
    }
  },

  closeZoomIn() {
    this.$.zoomArea.close();
  },
});
