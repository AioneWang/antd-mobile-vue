(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a28f322"],{"06cd":function(t,e,n){"use strict";var r=n("8fb7"),o=n.n(r);o.a},1173:function(t,e,n){"use strict";var r=n("cebc"),o=n("2638"),a=n.n(o),i=n("7618"),c=n("d225"),d=n("b0b4"),s=n("308d"),l=n("6bb5"),p=n("4e2b"),b=n("9ab4"),u=n("8bbf"),f=n.n(u),h=n("65d9"),v=n.n(h),y=n("60a3"),m=aegis.AeIcon,g=/^http(s)?:\/\//,x=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(p["a"])(e,t),Object(d["a"])(e,[{key:"render",value:function(){var t=arguments[0],e=this.type;if("string"===typeof e)return g.test(e)?t("img",{attrs:{src:e,alt:""}}):t(m,{attrs:{mobile:!0,type:e,size:"md"}});if("object"===Object(i["a"])(e)){if(e.context)return e;if("img"===e.iconType)return t("img",a()([{attrs:{src:e}},e,{attrs:{alt:""}}]));if("icon"===e.iconType)return t(m,{props:Object(r["a"])({},e)})}}}]),e}(f.a);b["b"]([Object(y["d"])({type:[String,Object]})],x.prototype,"type",void 0),x=b["b"]([v()({name:"IconRes"})],x),e["a"]=x},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),a=n("6821"),i=n("6a99"),c=n("69a8"),d=n("c69a"),s=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?s:function(t,e){if(t=a(t),e=i(e,!0),d)try{return s(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},"19dd":function(t,e,n){},"1af6":function(t,e,n){var r=n("63b6");r(r.S,"Array",{isArray:n("9003")})},"20d6":function(t,e,n){"use strict";var r=n("5ca1"),o=n("0a49")(6),a="findIndex",i=!0;a in[]&&Array(1)[a](function(){i=!1}),r(r.P+r.F*i,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(a)},"20fd":function(t,e,n){"use strict";var r=n("d9f6"),o=n("aebd");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},"24fa":function(t,e,n){"use strict";var r=n("9f11"),o=n.n(r);o.a},2638:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var r in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},r.apply(this,arguments)}var o=["attrs","props","domProps"],a=["class","style","directives"],i=["on","nativeOn"],c=function(t){return t.reduce(function(t,e){for(var n in e)if(t[n])if(-1!==o.indexOf(n))t[n]=r({},t[n],e[n]);else if(-1!==a.indexOf(n)){var c=t[n]instanceof Array?t[n]:[t[n]],s=e[n]instanceof Array?e[n]:[e[n]];t[n]=c.concat(s)}else if(-1!==i.indexOf(n))for(var l in e[n])if(t[n][l]){var p=t[n][l]instanceof Array?t[n][l]:[t[n][l]],b=e[n][l]instanceof Array?e[n][l]:[e[n][l]];t[n][l]=p.concat(b)}else t[n][l]=e[n][l];else if("hook"==n)for(var u in e[n])t[n][u]=t[n][u]?d(t[n][u],e[n][u]):e[n][u];else t[n]=e[n];else t[n]=e[n];return t},{})},d=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=c},"267e":function(t,e,n){},"26dd":function(t,e,n){"use strict";n("c5f6");var r=n("bd86"),o=n("d225"),a=n("b0b4"),i=n("308d"),c=n("6bb5"),d=n("4e2b"),s=n("9ab4"),l=n("4d26"),p=n.n(l),b=n("8bbf"),u=n.n(b),f=n("65d9"),h=n.n(f),v=n("60a3"),y=function(t){function e(){return Object(o["a"])(this,e),Object(i["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),Object(a["a"])(e,[{key:"render",value:function(){var t,e,n=arguments[0],o=this.overflowCount,a=this.text,i=this.prefixCls,c=this.size,d=this.dot,s=this.corner,l=this.hot;o=o,a="number"===typeof a&&a>o?"".concat(o,"+"):a,d&&(a="");var b=p()((t={},Object(r["a"])(t,"".concat(i,"-dot"),d),Object(r["a"])(t,"".concat(i,"-dot-large"),d&&"large"===c),Object(r["a"])(t,"".concat(i,"-text"),!d&&!s),Object(r["a"])(t,"".concat(i,"-corner"),s),Object(r["a"])(t,"".concat(i,"-corner-large"),s&&"large"===c),t)),u=p()(i,(e={},Object(r["a"])(e,"".concat(i,"-not-a-wrapper"),!this.$slots.default),Object(r["a"])(e,"".concat(i,"-corner-wrapper"),s),Object(r["a"])(e,"".concat(i,"-hot"),l),Object(r["a"])(e,"".concat(i,"-corner-wrapper-large"),s&&"large"===c),e));return n("span",{class:u},[this.$slots.default,(a||d)&&n("sup",{class:b,style:this.textStyle},[a])])}}]),e}(u.a);s["b"]([Object(v["d"])({default:"am-badge"})],y.prototype,"prefixCls",void 0),s["b"]([Object(v["d"])({type:Boolean,default:!1})],y.prototype,"hot",void 0),s["b"]([Object(v["d"])({type:String,default:"small"})],y.prototype,"size",void 0),s["b"]([Object(v["d"])({type:Number,default:99})],y.prototype,"overflowCount",void 0),s["b"]([Object(v["d"])({type:Boolean,default:!1})],y.prototype,"corner",void 0),s["b"]([Object(v["d"])({type:Boolean,default:!1})],y.prototype,"dot",void 0),s["b"]([Object(v["d"])({type:[String,Number]})],y.prototype,"text",void 0),s["b"]([Object(v["d"])({type:Object})],y.prototype,"textStyle",void 0),y=s["b"]([h()({name:"Badge"})],y);var m=y,g=(n("931f"),m);g.install=function(t){t.component("MBadge",m)};e["a"]=g},"300c":function(t,e,n){"use strict";var r=n("dfdd"),o=(n("dde9"),r["a"]);o.install=function(t){t.component("MTabs",r["a"])},e["a"]=o},3702:function(t,e,n){var r=n("481b"),o=n("5168")("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||a[o]===t)}},3727:function(t,e){t.exports='<h4 id="tabbar-在顶部">Tabbar 在顶部</h4>\n'},"40c3":function(t,e,n){var r=n("6b4c"),o=n("5168")("toStringTag"),a="Arguments"==r(function(){return arguments}()),i=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=i(e=Object(t),o))?n:a?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},"4d26":function(t,e,n){var r,o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&t.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):(r=[],o=function(){return a}.apply(e,r),void 0===o||(t.exports=o))})()},"4ee1":function(t,e,n){var r=n("5168")("iterator"),o=!1;try{var a=[7][r]();a["return"]=function(){o=!0},Array.from(a,function(){throw 2})}catch(i){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var a=[7],c=a[r]();c.next=function(){return{done:n=!0}},a[r]=function(){return c},t(a)}catch(i){}return n}},"4f8a":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-box code-box-target"},[n("markdown",{staticClass:"code-box-meta",attrs:{source:t.markdown}}),n("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),n("pre",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"code-box-code markdown-body clearfix"},[t._v("    "),n("ae-layout",[t._v("\n      "),n("code",{domProps:{textContent:t._s(t.code)}}),t._v("\n    ")]),t._v("\n  ")],1)],1)},o=[],a=n("d225"),i=n("b0b4"),c=n("308d"),d=n("6bb5"),s=n("4e2b"),l=n("9ab4"),p=n("8bbf"),b=n.n(p),u=n("65d9"),f=n.n(u),h=n("60a3"),v=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.showCode=!1,t}return Object(s["a"])(e,t),Object(i["a"])(e,[{key:"copied",value:function(){this.$message.success("已复制")}}]),e}(b.a);l["b"]([Object(h["d"])(String)],v.prototype,"code",void 0),l["b"]([Object(h["d"])(String)],v.prototype,"markdown",void 0),v=l["b"]([f()({name:"CodeBox"})],v);var y=v,m=y,g=(n("06cd"),n("2877")),x=Object(g["a"])(m,r,o,!1,null,null,null);e["a"]=x.exports},5176:function(t,e,n){t.exports=n("51b6")},"51b6":function(t,e,n){n("a3c3"),t.exports=n("584a").Object.assign},"549b":function(t,e,n){"use strict";var r=n("d864"),o=n("63b6"),a=n("241e"),i=n("b0dc"),c=n("3702"),d=n("b447"),s=n("20fd"),l=n("7cd6");o(o.S+o.F*!n("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,p,b=a(t),u="function"==typeof this?this:Array,f=arguments.length,h=f>1?arguments[1]:void 0,v=void 0!==h,y=0,m=l(b);if(v&&(h=r(h,f>2?arguments[2]:void 0,2)),void 0==m||u==Array&&c(m))for(e=d(b.length),n=new u(e);e>y;y++)s(n,y,v?h(b[y],y):b[y]);else for(p=m.call(b),n=new u;!(o=p.next()).done;y++)s(n,y,v?i(p,h,[o.value,y],!0):o.value);return n.length=y,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},"5dbc":function(t,e,n){var r=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var a,i=e.constructor;return i!==n&&"function"==typeof i&&(a=i.prototype)!==n.prototype&&r(a)&&o&&o(t,a),t}},"658b":function(t,e,n){"use strict";n("f5df"),n("19dd")},"7cd6":function(t,e,n){var r=n("40c3"),o=n("5168")("iterator"),a=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||a[r(t)]}},"8aa3":function(t,e){t.exports='<h4 id="app-型选项卡">APP 型选项卡</h4>\n'},"8b97":function(t,e,n){var r=n("d3f4"),o=n("cb7c"),a=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},"8f91":function(t,e,n){"use strict";n("c5f6");var r=n("5176"),o=n.n(r),a=n("d225"),i=n("b0b4"),c=n("308d"),d=n("6bb5"),s=n("013f"),l=n("4e2b"),p=n("9ab4"),b=n("8bbf"),u=n.n(b),f=n("65d9"),h=n.n(f),v=n("60a3"),y=n("300c"),m=n("2638"),g=n.n(m),x=(n("20d6"),n("1173")),j=n("26dd"),O=n("8e5c"),C=function(t){function e(){return Object(a["a"])(this,e),Object(c["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"renderIcon",value:function(){var t=this.$createElement,e=this.dot,n=this.badge,r=this.selected,o=this.selectedIcon,a=this.icon,i=(this.title,this.prefixCls),c=r?o:a,d=c?Object(O["b"])(c)?c:t(x["a"],g()([{class:"".concat(i,"-image")},{props:{type:c}}])):null;return n?t(j["a"],{attrs:{text:n},class:"".concat(i,"-badge tab-badge")},[" ",d," "]):e?t(j["a"],{attrs:{dot:!0},class:"".concat(i,"-badge tab-dot")},[d]):d}},{key:"onClick",value:function(){this.$emit("click")}},{key:"render",value:function(){var t=arguments[0],e=this.title,n=this.prefixCls,r=this.selected,o=this.unselectedTintColor,a=this.tintColor,i=r?a:o;return t("div",g()([{},this.dataAttrs,{on:{click:this.onClick},class:"".concat(n)}]),[t("div",{class:"".concat(n,"-icon"),style:{color:i}},[this.renderIcon()]),t("p",{class:"".concat(n,"-title"),style:{color:r?a:o}},[e])])}}]),e}(u.a);p["b"]([Object(v["d"])({type:Boolean})],C.prototype,"dot",void 0),p["b"]([Object(v["d"])({type:[String,Number]})],C.prototype,"badge",void 0),p["b"]([Object(v["d"])({type:Boolean})],C.prototype,"selected",void 0),p["b"]([Object(v["d"])()],C.prototype,"selectedIcon",void 0),p["b"]([Object(v["d"])()],C.prototype,"icon",void 0),p["b"]([Object(v["d"])({type:String})],C.prototype,"title",void 0),p["b"]([Object(v["d"])({type:String,default:"am-tab-item"})],C.prototype,"prefixCls",void 0),p["b"]([Object(v["d"])({type:String})],C.prototype,"unselectedTintColor",void 0),p["b"]([Object(v["d"])({type:String})],C.prototype,"tintColor",void 0),p["b"]([Object(v["d"])()],C.prototype,"dataAttrs",void 0),C=p["b"]([h()({name:"Tab"})],C);var k=C,w=n("f044"),T=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.index=-1,t}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"mounted",value:function(){var t=this,e=this.$parent.$children.filter(function(e){return e.$vnode.componentOptions.tag===t.$vnode.componentOptions.tag});this.index=e.findIndex(function(e){return e["_uid"]===t["_uid"]})}},{key:"render",value:function(){var t=this,e=arguments[0],n=this.tabBar,r=n.tintColor,a=n.unselectedTintColor,i=this.$slots.icon?this.$slots.icon[0]:this.icon,c=this.$slots.selectedIcon?this.$slots.selectedIcon:this.selectedIcon||i,d=o()({},this.$props,{prefixCls:"".concat(this.prefixCls,"-tab"),tintColor:r,unselectedTintColor:a,icon:i,selectedIcon:c,selected:this.sSelected});return e(k,g()([{},{props:d},{on:{click:function(e){t.tabBar.setCurrentTab(t.index),t.$emit("click")}},attrs:{dataAttrs:Object(w["a"])(this.$props)}}]),[this.$slots.default])}},{key:"sSelected",get:function(){return void 0!==this.selected?this.selected:this.index===this.store.currentTab}}]),e}(u.a);p["b"]([Object(v["d"])({type:[String,Number]})],T.prototype,"badge",void 0),p["b"]([Object(v["d"])({type:Boolean,default:void 0})],T.prototype,"selected",void 0),p["b"]([Object(v["d"])({type:[String,Object]})],T.prototype,"icon",void 0),p["b"]([Object(v["d"])({type:[String,Object]})],T.prototype,"selectedIcon",void 0),p["b"]([Object(v["d"])({type:String,default:""})],T.prototype,"title",void 0),p["b"]([Object(v["d"])({type:Boolean})],T.prototype,"dot",void 0),p["b"]([Object(v["d"])({type:String,default:"am-tab-bar"})],T.prototype,"prefixCls",void 0),p["b"]([Object(v["b"])("store")],T.prototype,"store",void 0),p["b"]([Object(v["b"])("tabBar")],T.prototype,"tabBar",void 0),T=p["b"]([h()({name:"Item"})],T);var I=T,S=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.tabBar=Object(s["a"])(t),t.store={currentTab:-1e4},t.content=[],t}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"valueChanged",value:function(t){this.store.currentTab=t}},{key:"setCurrentTab",value:function(t){this.store.currentTab=t}},{key:"currentTabChanged",value:function(t){this.$listeners.input&&this.$emit("input",t),console.log(this.store.currentTab)}},{key:"renderTabBar",value:function(){var t=this.$createElement,e="".concat(this.prefixCls,"-bar");return this.hidden&&(e+=" ".concat(this.prefixCls,"-bar-hidden-").concat(this.tabBarPosition)),t("div",{class:e,style:{backgroundColor:this.barTintColor}},[this.$slots.default])}},{key:"getTabs",value:function(){var t=this;return this.$slots.default.map(function(e,n){var r=o()({},e.componentOptions.propsData);return r.icon&&!r.selectedIcon&&(r.selectedIcon=r.icon),{props:r,onClick:function(){t.store.currentTab=n}}})}},{key:"mounted",value:function(){this.$slots.default&&(this.content=this.$slots.default.filter(function(t){return t.context}).map(function(t){return t.componentInstance.$slots.default||t.componentInstance.$slots.content||""}))}},{key:"render",value:function(){var t=arguments[0],e=this.prefixCls,n=this.animated,r=this.swipeable,o=this.noRenderContent,a=this.prerenderingSiblingsNumber,i=this.tabBarPosition,c=this.getTabs();return t("div",{class:e},[t(y["a"],{attrs:{tabs:c,renderTabBar:this.renderTabBar,tabBarPosition:i,page:this.store.currentTab<0?void 0:this.store.currentTab,animated:n,swipeable:r,noRenderContent:o,prerenderingSiblingsNumber:a}},[this.content])])}}]),e}(u.a);S.Item=I,p["b"]([Object(v["d"])({default:"am-tab-bar"})],S.prototype,"prefixCls",void 0),p["b"]([Object(v["d"])()],S.prototype,"className",void 0),p["b"]([Object(v["d"])({type:Boolean,default:!1})],S.prototype,"hidden",void 0),p["b"]([Object(v["d"])({type:String,default:"正在加载"})],S.prototype,"placeholder",void 0),p["b"]([Object(v["d"])()],S.prototype,"noRenderContent",void 0),p["b"]([Object(v["d"])({type:Number,default:1})],S.prototype,"prerenderingSiblingsNumber",void 0),p["b"]([Object(v["d"])({type:String,default:"white"})],S.prototype,"barTintColor",void 0),p["b"]([Object(v["d"])({type:String,default:"#108ee9"})],S.prototype,"tintColor",void 0),p["b"]([Object(v["d"])({type:String,default:"#888"})],S.prototype,"unselectedTintColor",void 0),p["b"]([Object(v["d"])({type:String,default:"bottom"})],S.prototype,"tabBarPosition",void 0),p["b"]([Object(v["d"])({type:Boolean,default:!1})],S.prototype,"animated",void 0),p["b"]([Object(v["d"])({type:Boolean,default:!1})],S.prototype,"swipeable",void 0),p["b"]([Object(v["e"])("tabBar")],S.prototype,"tabBar",void 0),p["b"]([Object(v["e"])("store")],S.prototype,"store",void 0),p["b"]([Object(v["d"])({type:[Number,String]})],S.prototype,"value",void 0),p["b"]([Object(v["g"])("value",{immediate:!0})],S.prototype,"valueChanged",null),p["b"]([Object(v["g"])("store.currentTab")],S.prototype,"currentTabChanged",null),S=p["b"]([h()({name:"MTabBar"})],S);var A=S,B=(n("658b"),n("dde9"),n("267e"),n("931f"),A);B.install=function(t){t.component("MTabBar",A),t.component("MTabBarItem",A.Item)};e["a"]=B},"8fb7":function(t,e,n){},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},9306:function(t,e,n){"use strict";var r=n("c3a1"),o=n("9aa9"),a=n("355d"),i=n("241e"),c=n("335c"),d=Object.assign;t.exports=!d||n("294c")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=d({},t)[n]||Object.keys(d({},e)).join("")!=r})?function(t,e){var n=i(t),d=arguments.length,s=1,l=o.f,p=a.f;while(d>s){var b,u=c(arguments[s++]),f=l?r(u).concat(l(u)):r(u),h=f.length,v=0;while(h>v)p.call(u,b=f[v++])&&(n[b]=u[b])}return n}:d},"931f":function(t,e,n){"use strict";n("658b"),n("eb40")},"95d5":function(t,e,n){var r=n("40c3"),o=n("5168")("iterator"),a=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||a.hasOwnProperty(r(e))}},"9f11":function(t,e,n){},a3c3:function(t,e,n){var r=n("63b6");r(r.S+r.F,"Object",{assign:n("9306")})},a745:function(t,e,n){t.exports=n("f410")},aa77:function(t,e,n){var r=n("5ca1"),o=n("be13"),a=n("79e5"),i=n("fdef"),c="["+i+"]",d="​",s=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),p=function(t,e,n){var o={},c=a(function(){return!!i[t]()||d[t]()!=d}),s=o[t]=c?e(b):i[t];n&&(o[n]=s),r(r.P+r.F*c,"String",o)},b=p.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(l,"")),t};t.exports=p},b0dc:function(t,e,n){var r=n("e4ae");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(i){var a=t["return"];throw void 0!==a&&r(a.call(t)),i}}},bd86:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("85f2"),o=n.n(r);function a(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},c5f6:function(t,e,n){"use strict";var r=n("7726"),o=n("69a8"),a=n("2d95"),i=n("5dbc"),c=n("6a99"),d=n("79e5"),s=n("9093").f,l=n("11e9").f,p=n("86cc").f,b=n("aa77").trim,u="Number",f=r[u],h=f,v=f.prototype,y=a(n("2aeb")(v))==u,m="trim"in String.prototype,g=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():b(e,3);var n,r,o,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var i,d=e.slice(2),s=0,l=d.length;s<l;s++)if(i=d.charCodeAt(s),i<48||i>o)return NaN;return parseInt(d,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof f&&(y?d(function(){v.valueOf.call(n)}):a(n)!=u)?i(new h(g(e)),n,f):g(e)};for(var x,j=n("9e1e")?s(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;j.length>O;O++)o(h,x=j[O])&&!o(f,x)&&p(f,x,l(h,x));f.prototype=v,v.constructor=f,n("2aba")(r,u,f)}},cd3f:function(t,e,n){},d16c:function(t,e){t.exports='<h1 id="标签栏--m-tab-bar">标签栏  m-tab-bar</h1>\n'},d25d:function(t,e){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>animated</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>badge</td>\n<td></td>\n<td>string | number</td>\n<td></td>\n</tr>\n<tr>\n<td>barTintColor</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>dot</td>\n<td></td>\n<td>boolean</td>\n<td></td>\n</tr>\n<tr>\n<td>hidden</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>icon</td>\n<td></td>\n<td>string | IconResProps | VNode</td>\n<td></td>\n</tr>\n<tr>\n<td>noRenderContent</td>\n<td></td>\n<td>boolean</td>\n<td></td>\n</tr>\n<tr>\n<td>onPress</td>\n<td></td>\n<td>() =&gt; void</td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prerenderingSiblingsNumber</td>\n<td></td>\n<td>number</td>\n<td>1</td>\n</tr>\n<tr>\n<td>selected</td>\n<td></td>\n<td>boolean</td>\n<td>undefined</td>\n</tr>\n<tr>\n<td>selectedIcon</td>\n<td></td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>swipeable</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>tabBarPosition</td>\n<td></td>\n<td>&#39;top&#39; | &#39;bottom&#39;</td>\n<td></td>\n</tr>\n<tr>\n<td>tintColor</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>unselectedTintColor</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td></td>\n<td>string | number</td>\n<td></td>\n</tr>\n</tbody></table>\n"},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},dde9:function(t,e,n){"use strict";n("658b"),n("cd3f")},eb40:function(t,e,n){},f044:function(t,e,n){"use strict";var r=n("a4bb"),o=n.n(r);e["a"]=function(t){return o()(t).reduce(function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=t[n]),e},{})}},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},f5df:function(t,e,n){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},feab:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:t.title}})],1),t._m(0),n("demo1",{attrs:{id:"demo1"}}),n("demo2",{attrs:{id:"demo2"}}),t._m(1),n("markdown",{attrs:{source:t.props}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[t._v("示例代码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body",attrs:{id:"props"}},[n("span"),n("h2",[t._v("属性说明")])])}],a=n("d225"),i=n("b0b4"),c=n("308d"),d=n("6bb5"),s=n("4e2b"),l=n("9ab4"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:t.code,markdown:t.md}})],1)},b=[],u="import Vue from 'vue';\nimport Component from 'vue-class-component';\nimport './demo1.less';\n\n@Component({\n  name: 'TabBarExample'\n})\nexport default class TabBarExample extends Vue {\n\n  public state = {\n    selectedTab: 0,\n    hidden: false,\n    fullScreen: false\n  };\n\n  public renderContent(pageText) {\n    return (\n      <div style={{backgroundColor: 'white', height: '100%', textAlign: 'center'}}>\n        <div style={{paddingTop: '60px'}}>Clicked “{pageText}” tab， show “{pageText}” information</div>\n        <a style={{display: 'block', marginTop: '40px', marginBottom: '20px', color: '#108ee9'}}\n           onClick={(e) => {\n             e.preventDefault();\n             this.state.hidden = !this.state.hidden;\n           }}\n        >\n          Click to show/hide tab-bar\n        </a>\n        <a style={{display: 'block', marginBottom: '600px', color: '#108ee9'}}\n           onClick={(e) => {\n             e.preventDefault();\n             this.state.fullScreen = !this.state.fullScreen;\n           }}>\n          Click to switch fullscreen\n        </a>\n      </div>\n    );\n  }\n\n  public render() {\n    return (\n      <div\n        style={this.state.fullScreen ? {position: 'fixed', height: '100%', width: '100%', top: 0} : {height: '400px'}}>\n        <m-tab-bar\n          unselectedTintColor=\"#949494\"\n          tintColor=\"#33A3F4\"\n          vModel={this.state.selectedTab}\n          barTintColor=\"white\"\n          hidden={this.state.hidden}>\n          <m-tab-bar-item\n            title=\"Life\"\n            key=\"Life\"\n            icon={<div style={{\n              width: '22px',\n              height: '22px',\n              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'\n            }}\n            />\n            }\n            selectedIcon={<div style={{\n              width: '22px',\n              height: '22px',\n              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'\n            }}\n            />\n            }\n            badge={1}\n            data-seed=\"logId\"\n          >\n            {this.renderContent('Life')}\n          </m-tab-bar-item>\n          <m-tab-bar-item\n            icon={\n              <div style={{\n                width: '22px',\n                height: '22px',\n                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'\n              }}\n              />\n            }\n            selectedIcon={\n              <div style={{\n                width: '22px',\n                height: '22px',\n                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'\n              }}\n              />\n            }\n            title=\"Koubei\"\n            key=\"Koubei\"\n            badge={'new'}\n            data-seed=\"logId1\"\n          >\n            {this.renderContent('Koubei')}\n          </m-tab-bar-item>\n          <m-tab-bar-item\n            icon={\n              <div style={{\n                width: '22px',\n                height: '22px',\n                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'\n              }}\n              />\n            }\n            selectedIcon={\n              <div style={{\n                width: '22px',\n                height: '22px',\n                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'\n              }}\n              />\n            }\n            title=\"Friend\"\n            key=\"Friend\"\n            dot\n          >\n            {this.renderContent('Friend')}\n          </m-tab-bar-item>\n          <m-tab-bar-item\n            icon={\n              <div style={{\n                width: '22px',\n                height: '22px',\n                background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  21px 21px no-repeat'\n              }}/>\n            }\n            selectedIcon={\n              <div style={{\n                width: '22px',\n                height: '22px',\n                background: 'url(https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg) center center /  21px 21px no-repeat'\n              }}/>\n            }\n            title=\"My\"\n            key=\"my\"\n          >\n            {this.renderContent('My')}\n          </m-tab-bar-item>\n        </m-tab-bar>\n      </div>\n    );\n  }\n}\n",f=n("8aa3"),h=n.n(f),v=n("8bbf"),y=n.n(v),m=n("65d9"),g=n.n(m),x=n("4f8a"),j=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.code=u,t.md=h.a,t}return Object(s["a"])(e,t),e}(y.a);j=l["b"]([g()({name:"Demo1",components:{CodeBox:x["a"]}})],j);var O=j,C=O,k=n("2877"),w=Object(k["a"])(C,p,b,!1,null,null,null),T=w.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:t.code,markdown:t.md}})],1)},S=[],A="import Vue from 'vue';\nimport Component from 'vue-class-component';\nimport './demo1.less';\n\n@Component({\n  name: 'TabBarExample'\n})\nexport default class TabBarExample extends Vue {\n\n  public state = {\n    selectedTab: 0,\n    hidden: false,\n    fullScreen: false\n  };\n\n  public renderContent(pageText) {\n    return (\n      <div style={{backgroundColor: 'white', height: '100%', textAlign: 'center'}}>\n        <div style={{paddingTop: '60px'}}>Clicked “{pageText}” tab， show “{pageText}” information</div>\n        <a style={{display: 'block', marginTop: '40px', marginBottom: '20px', color: '#108ee9'}}\n           onClick={(e) => {\n             e.preventDefault();\n             this.state.hidden = !this.state.hidden;\n           }}\n        >\n          Click to show/hide tab-bar\n        </a>\n        <a style={{display: 'block', marginBottom: '600px', color: '#108ee9'}}\n           onClick={(e) => {\n             e.preventDefault();\n             this.state.fullScreen = !this.state.fullScreen;\n           }}>\n          Click to switch fullscreen\n        </a>\n      </div>\n    );\n  }\n\n  public render() {\n    return (\n      <div\n        style={this.state.fullScreen ? {position: 'fixed', height: '100%', width: '100%', top: 0} : {height: '400px'}}>\n        <m-tab-bar\n          unselectedTintColor=\"#949494\"\n          tintColor=\"#33A3F4\"\n          tabBarPosition=\"top\"\n          vModel={this.state.selectedTab}\n          barTintColor=\"white\"\n          hidden={this.state.hidden}>\n          <m-tab-bar-item\n            title=\"Life\"\n            key=\"Life\"\n            icon={<div style={{\n              width: '22px',\n              height: '22px',\n              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'\n            }}\n            />\n            }\n            selectedIcon={<div style={{\n              width: '22px',\n              height: '22px',\n              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'\n            }}\n            />\n            }\n            badge={1}\n            data-seed=\"logId\"\n          >\n            {this.renderContent('Life')}\n          </m-tab-bar-item>\n          <m-tab-bar-item\n            icon={\n              <div style={{\n                width: '22px',\n                height: '22px',\n                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'\n              }}\n              />\n            }\n            selectedIcon={\n              <div style={{\n                width: '22px',\n                height: '22px',\n                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'\n              }}\n              />\n            }\n            title=\"Koubei\"\n            key=\"Koubei\"\n            badge={'new'}\n            data-seed=\"logId1\"\n          >\n            {this.renderContent('Koubei')}\n          </m-tab-bar-item>\n          <m-tab-bar-item\n            icon={\n              <div style={{\n                width: '22px',\n                height: '22px',\n                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'\n              }}\n              />\n            }\n            selectedIcon={\n              <div style={{\n                width: '22px',\n                height: '22px',\n                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'\n              }}\n              />\n            }\n            title=\"Friend\"\n            key=\"Friend\"\n            dot\n          >\n            {this.renderContent('Friend')}\n          </m-tab-bar-item>\n          <m-tab-bar-item\n            icon={\n              <div style={{\n                width: '22px',\n                height: '22px',\n                background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  21px 21px no-repeat'\n              }}/>\n            }\n            selectedIcon={\n              <div style={{\n                width: '22px',\n                height: '22px',\n                background: 'url(https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg) center center /  21px 21px no-repeat'\n              }}/>\n            }\n            title=\"My\"\n            key=\"my\"\n          >\n            {this.renderContent('My')}\n          </m-tab-bar-item>\n        </m-tab-bar>\n      </div>\n    );\n  }\n}\n",B=n("3727"),N=n.n(B),_=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.code=A,t.md=N.a,t}return Object(s["a"])(e,t),e}(y.a);_=l["b"]([g()({name:"Demo2",components:{CodeBox:x["a"]}})],_);var E=_,$=E,P=Object(k["a"])($,I,S,!1,null,null,null),M=P.exports,F=n("8f91"),z=n("d16c"),V=n.n(z),R=n("d25d"),L=n.n(R);y.a.use(F["a"]);var q=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.title=V.a,t.props=L.a,t}return Object(s["a"])(e,t),Object(i["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(y.a);q=l["b"]([g()({name:"ComponentDemo",components:{demo1:T,demo2:M}})],q);var U=q,K=U,X=(n("24fa"),Object(k["a"])(K,r,o,!1,null,"184caf60",null));e["default"]=X.exports}}]);
//# sourceMappingURL=chunk-3a28f322.c12561a9.js.map