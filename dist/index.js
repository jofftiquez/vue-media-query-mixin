module.exports=function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=i(o),d=n(2),u=i(d);t.default={install:function(e,t){e.mixin({data:function(){return{windowWidth:0,windowHeight:0,wXS:!1,wSM:!1,wMD:!1,wLG:!1,wXL:!1}},mounted:function(){this.$nextTick(function(){window.addEventListener("resize",this.getWindowWidth),window.addEventListener("resize",this.getWindowHeight),this.getWindowWidth(),this.getWindowHeight()})},methods:{getWindowWidth:function(e){var n=document.documentElement.clientWidth;this.windowWidth=n;var i={};t||(i=r.default),"vuetify"===t.framework&&(i=r.default),"bootstrap"===t.framework&&(i=u.default),this.wXS=i.xs.max>n,this.wSM=n>=i.sm.min&&i.sm.max>n,this.wMD=n>=i.md.min&&i.md.max>n,this.wLG=n>=i.lg.min&&i.lg.max>n,this.wXL=n>=i.xl.min},getWindowHeight:function(e){this.windowHeight=document.documentElement.clientHeight}},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth),window.removeEventListener("resize",this.getWindowHeight)}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={xs:{max:599},sm:{min:600,max:1023},md:{min:1024,max:1439},lg:{min:1440,max:1919},xl:{min:1920}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={xs:{max:575},sm:{min:576,max:767},md:{min:768,max:991},lg:{min:992,max:1999},xl:{min:1200}}}]);