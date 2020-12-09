/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';

Polymer({
  is: 'landing-category-data',

  properties: {
    categoryName: String,

    itemName: String,

    categories: {
      type: Array,
    },

    builtinCategories: {
      type: Array,
      value: [
        'sign-up',
        'sign-in',
        'get-started',
        'buy-license',
        'set-password',
        'reset-password',
        'forgot-password',
        'error',
        'request-pricing',
        'docs',
      ],
    },

    categoryData: {
      type: Object,
      value() {
        return {};
      },
    },

    category: {
      type: Object,
      computed: '_computeCategory(categoryName)',
      notify: true,
    },

    item: {
      type: Object,
      computed: '_computeItem(category.items, itemName)',
      notify: true,
    },

    failure: {
      type: Boolean,
      notify: true,
      readOnly: true,
    },
  },

  _getCategoryObject(categoryName) {
    for (let i = 0; i < this.categories.length; i++) {
      const c = this.categories[i];
      if (c.name === categoryName) {
        return c;
      }
    }
    if (this.builtinCategories.indexOf(categoryName) === -1) {
      this.fire('show-invalid-url-warning');
    }
    return false;
  },

  _computeCategory(categoryName) {
    // Fetch the items of the category. Note that the fetch is asynchronous,
    // which means `category.items` may not be set initially (but that path
    // will be notified when the fetch completes).
    if (!this.categoryData[categoryName]) {
      this.categoryData[categoryName] = { name: categoryName };
    }
    const categoryObj = this.categoryData[categoryName];
    if (
      this.parentNode.host.category &&
      categoryName !== this.parentNode.host.category.name &&
      !this.categoryData[this.parentNode.host.category.name]
    ) {
      this.categoryData[this.parentNode.host.category.name] = {
        name: this.parentNode.host.category.name,
        content: this.parentNode.host.querySelector('[slot="content"]'),
      };
    }
    if (categoryObj && !categoryObj.content) this._fetchContent(categoryObj, 1);
    return categoryObj;
  },

  _computeItem(items, itemName) {
    if (!items || !itemName) {
      return false;
    }
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.name === itemName) {
        return item;
      }
    }
    if (this.builtinCategories.indexOf(itemName) === -1) this.fire('show-invalid-url-warning');
    return false;
  },

  _fetchContent(category, attempts) {
    if (
      !this.category ||
      this.category.name === category.name ||
      this.builtinCategories.indexOf(category.name) > -1
    )
      return;
    console.log('category.name', category.name);
    this._setFailure(false);
    // Only fetch the items of a category if it has not been previously set.
    if (!category) {
      return;
    }
    this._getResource(
      {
        url: `/api/v1/section/landing--${category.name}`,
        onLoad(e) {
          this.set('category.content', e.target.responseText);
        },
        onError(e) {
          this._setFailure(true);
          console.warn('Error fetching category', e);
        },
      },
      attempts,
    );
  },

  _getResource(rq, attempts) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', rq.onLoad.bind(this));
    xhr.addEventListener('error', e => {
      // Flaky connections might fail fetching resources
      if (attempts > 1) {
        this.debounce('_getResource', this._getResource.bind(this, rq, attempts - 1), 200);
      } else {
        rq.onError.call(this, e);
      }
    });

    xhr.open('GET', rq.url);
    xhr.send();
  },

  refresh() {
    if (this.categoryName) {
      // Try at most 3 times to get the items.
      this._fetchItems(this._getCategoryObject(this.categoryName), 3);
    }
  },
});
