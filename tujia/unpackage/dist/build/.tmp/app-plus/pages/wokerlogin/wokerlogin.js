(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wokerlogin/wokerlogin"],{"02aa":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},"1c6a":function(e,t,n){"use strict";n.r(t);var o=n("739f"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},"739f":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a")),a=n("2340");function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,o,r,a,u){try{var i=e[a](u),s=i.value}catch(c){return void n(c)}i.done?t(s):Promise.resolve(s).then(o,r)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var a=e.apply(t,n);function u(e){i(a,o,r,u,s,"next",e)}function s(e){i(a,o,r,u,s,"throw",e)}u(void 0)})}}var c=function(){return n.e("pages/cnav/cnav").then(n.bind(null,"89bf"))},f=function(){return n.e("component/userphoto/userphoto").then(n.bind(null,"6f87"))},l={components:{cnav:c,userphoto:f},data:function(){return{userinfo:{tel:"",password:"",street:"重庆"},twopassword:""}},computed:{check:function(){return""===this.userinfo.tel||""===this.userinfo.password||""===this.twopassword}},methods:{submit:function(){var t=s(r.default.mark(function t(){var n,u;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.userinfo.password===this.twopassword){t.next=4;break}e.showToast({title:"输入密码不一致请重输",duration:2e3,icon:"none"}),t.next=10;break;case 4:return n=this.userinfo,t.next=7,(0,a.getstatic)("/register",n);case 7:u=t.sent,console.log(o(u," at pages\\wokerlogin\\wokerlogin.vue:58")),1==u.data.code?(e.showToast({title:"注册成功",icon:"none"}),setTimeout(function(){e.navigateTo({url:"../workerregister/workerregister"})},1e3)):e.showToast({title:"手机号已注册请直接登录",icon:"none"});case 10:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),change:function(){e.navigateTo({url:"../workerregister/workerregister"})},hanlecheck:function(){if(!/^1[3456789]\d{9}$/.test(this.userinfo.tel))return e.showToast({title:"请输入正确的电话",icon:"none"}),!1}}};t.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])},"7a0d":function(e,t,n){"use strict";var o=n("7ea7"),r=n.n(o);r.a},"7ea7":function(e,t,n){},af8a:function(e,t,n){"use strict";n.r(t);var o=n("02aa"),r=n("1c6a");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("7a0d");var u=n("2877"),i=Object(u["a"])(r["default"],o["a"],o["b"],!1,null,"0bc0299c",null);t["default"]=i.exports},ce40:function(e,t,n){"use strict";(function(e){n("6741"),n("921b");o(n("66fd"));var t=o(n("af8a"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["ce40","common/runtime","common/vendor"]]]);