(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gpeople/gpeople"],{"3a9c":function(t,e,n){},"40b3":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.isShow=!1})},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},5163:function(t,e,n){"use strict";n.r(e);var a=n("78bd"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a},"78bd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("2340"),i={data:function(){return{background:["color1","color2","color3"],indicatorDots:!1,autoplay:!1,interval:2e3,duration:500,isShow:!1,Base_Url:a.Base_Url,userlist:[],i:0,j:0,n:0}},methods:{handleShow:function(t){this.isShow=!0,this.j=t},invite:function(){t.navigateTo({url:"../gmessage/gmessage"})},gett:function(){var t=this,e={};(0,a.getstatic)("/userslist",e,"get").then(function(e){1==e.data.code&&(t.userlist=e.data.data,t.n=t.userlist.length,t.i=Math.ceil(t.userlist.length/8))})}},created:function(){this.gett()}};e.default=i}).call(this,n("6e42")["default"])},b06f:function(t,e,n){"use strict";var a=n("3a9c"),i=n.n(a);i.a},ef61:function(t,e,n){"use strict";n.r(e);var a=n("40b3"),i=n("5163");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("b06f");var o=n("2877"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"09ab8982",null);e["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/gpeople/gpeople-create-component',
    {
        'pages/gpeople/gpeople-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("ef61"))
        })
    },
    [['pages/gpeople/gpeople-create-component']]
]);                
