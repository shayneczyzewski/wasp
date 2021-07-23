(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{110:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=o.a.createContext({}),p=function(t){var e=o.a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},s=function(t){var e=p(t.components);return o.a.createElement(l.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,i=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),s=p(r),b=n,m=s["".concat(i,".").concat(b)]||s[b]||f[b]||a;return r?o.a.createElement(m,c(c({ref:e},l),{},{components:r})):o.a.createElement(m,c({ref:e},l))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},111:function(t,e,r){"use strict";var n=r(0),o=r(19);e.a=function(){const t=Object(n.useContext)(o.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},112:function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return i}));var n=r(111),o=r(113);function a(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(t,e,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return e+r;const i=r.startsWith(e)?r:e+r.replace(/^\//,"");return a?t+i:i}(e,t,r,n)}}function i(t,e={}){const{withBaseUrl:r}=a();return r(t,e)}},113:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!n(t)}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}))},91:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return c})),r.d(e,"metadata",(function(){return u})),r.d(e,"rightToc",(function(){return l})),r.d(e,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(110)),i=r(112),c={title:"Journey to YCombinator",author:"Martin Sosic",author_title:"Co-founder @ Wasp",author_url:"https://github.com/martinsos",tags:["startup","wasp"]},u={permalink:"/blog/2021/02/23/journey-to-ycombinator",source:"@site/blog/2021-02-23-journey-to-ycombinator.md",description:'<img alt="Martin & Matija at YCombinator HQ"',date:"2021-02-23T00:00:00.000Z",tags:[{label:"startup",permalink:"/blog/tags/startup"},{label:"wasp",permalink:"/blog/tags/wasp"}],title:"Journey to YCombinator",readingTime:3.185,truncated:!0,prevItem:{title:"Wasp - language for developing full-stack Javascript web apps with no boilerplate",permalink:"/blog/2021/03/02/wasp-alpha"},nextItem:{title:"Hello Wasp!",permalink:"/blog/2019/09/01/hello-wasp"}},l=[],p={rightToc:l};function s(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",{align:"center"},Object(a.b)("img",{alt:"Martin & Matija at YCombinator HQ",src:Object(i.a)("img/us-at-ycombinator.jpg"),height:"400px"})),Object(a.b)("p",null,"Wasp became part of Winter 2021 YCombinator batch!"),Object(a.b)("p",null,"Here we describe our journey and how we got in after applying for the third time."))}s.isMDXComponent=!0}}]);