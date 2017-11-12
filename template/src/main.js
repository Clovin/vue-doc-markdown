// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'highlight.js/styles/github-gist.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'github-markdown-css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import './assets/stylesheets/cssreset.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import './assets/stylesheets/common.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
