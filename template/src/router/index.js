import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/README.md'], resolve){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    {
      path: '/overview',
      component: resolve => require(['../pages/README.md'], resolve){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    {
      path: '/article',
      component: resolve => require(['../pages/article.md'], resolve){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
    if (to.hash) {
      return { selector: to.hash }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
