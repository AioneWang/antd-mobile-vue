(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-661e247d"],{"19dd":function(t,e,n){},2713:function(t,e){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>cancelText</td>\n<td>取消按钮文本</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>closeOnClickingMask</td>\n<td>是否在点击遮罩层时关闭</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>closeOnClickingMenu</td>\n<td>是否在点击按钮后关闭</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>menus</td>\n<td></td>\n<td>any[]</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>showCancel</td>\n<td>是否显示取消按钮</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>theme</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td></td>\n<td>&#39;normal&#39; | &#39;share&#39;</td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td></td>\n<td>boolean</td>\n<td></td>\n</tr>\n</tbody></table>\n"},3094:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:t.title}})],1),t._m(0),t._m(1),n("markdown",{attrs:{source:t.props}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[t._v("示例代码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body",attrs:{id:"props"}},[n("span"),n("h2",[t._v("属性说明")])])}],s=n("d225"),o=n("b0b4"),r=n("308d"),c=n("6bb5"),u=n("4e2b"),d=n("9ab4"),l=n("8bbf"),h=n.n(l),v=n("65d9"),f=n.n(v),b=n("902f"),p=n("79b5"),m=n.n(p),y=n("2713"),g=n.n(y);h.a.use(b["a"]);var k=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.title=m.a,t.props=g.a,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(h.a);k=d["b"]([f()({name:"ComponentDemo"})],k);var O=k,C=O,j=(n("7ad7"),n("2877")),w=Object(j["a"])(C,i,a,!1,null,"56a5d6dd",null);e["default"]=w.exports},5176:function(t,e,n){t.exports=n("51b6")},"51b6":function(t,e,n){n("a3c3"),t.exports=n("584a").Object.assign},"658b":function(t,e,n){"use strict";n("f5df"),n("19dd")},"79b5":function(t,e){t.exports='<h1 id="动作面板--m-action-sheet">动作面板  m-action-sheet</h1>\n<p>目前还存在问题，不建议使用</p>\n'},"7ad7":function(t,e,n){"use strict";var i=n("7cd7"),a=n.n(i);a.a},"7cd7":function(t,e,n){},"902f":function(t,e,n){"use strict";var i=n("bd86"),a=n("f499"),s=n.n(a),o=n("7618"),r=n("d225"),c=n("b0b4"),u=n("308d"),d=n("6bb5"),l=n("4e2b"),h=n("9ab4"),v=n("8bbf"),f=n.n(v),b=n("65d9"),p=n.n(b),m=n("60a3"),y=n("c3a6"),g=n("d5e7"),k=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(u["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.$tabbar=null,t.hasHeaderSlot=!1,t.show=t.value||!1,t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"cancelClick",value:function(){this.$emit("input",!1),this.show=!1}},{key:"showChanged",value:function(t){var e=this;this.$emit("input",t),t?this.fixIos(-1):setTimeout(function(){e.fixIos(100)},200)}},{key:"valueChanged",value:function(t){this.show=t}},{key:"mounted",value:function(){var t=this;this.hasHeaderSlot=!!this.$slots.header,this.$nextTick(function(){t.$tabbar=document.querySelector(".weui-tabbar"),t.$refs.iOSMenu&&t.$refs.iOSMenu.addEventListener("transitionend",t.onTransitionEnd)})}},{key:"beforeDestroy",value:function(){this.fixIos(100),this.$refs.iOSMenu&&this.$refs.iOSMenu.removeEventListener("transitionend",this.onTransitionEnd)}},{key:"emitEvent",value:function(t,e,n){if("on-click-menu"===t&&!/.noop/.test(e)){var i=n;"object"===Object(o["a"])(i)&&(i=JSON.parse(s()(i))),this.$emit(t,e,i),this.$emit("".concat(t,"-").concat(e)),this.closeOnClickingMenu&&(this.show=!1)}}},{key:"fixIos",value:function(t){this.$el.parentNode&&-1!==this.$el.parentNode.className.indexOf("v-transfer-dom")||this.$tabbar&&/iphone/i.test(navigator.userAgent)&&(this.$tabbar.style.zIndex=t)}},{key:"onClickingMask",value:function(){this.$emit("click-mask"),this.closeOnClickingMask&&(this.show=!1)}},{key:"onMenuClick",value:function(t,e){"string"===typeof t?this.emitEvent("click-menu",e,t):"disabled"!==t.type&&"info"!==t.type&&(t.value||0===t.value?this.emitEvent("click-menu",t.value,t):(this.emitEvent("click-menu","",t),this.show=!1))}},{key:"onTransitionEnd",value:function(){this.$emit(this.show?"on-after-show":"on-after-hide")}},{key:"renderSheet",value:function(){var t=this,e=this.$createElement;return"android"===this.theme?e("div",{class:"weui-skin_android"},[e("transition",{attrs:{name:"vux-android-actionsheet"},on:{afterEnter:function(){t.$emit("after-show")},afterLeave:function(){t.$emit("after-hide")}}},[e("div",{style:this.showStyle,class:"weui-actionsheet"},[e("div",{class:"weui-actionsheet__menu"},[this.renderButtons()])])])]):e("div",{ref:"iOSMenu"},[e("div",{class:"am-action-sheet-content"},[e("div",{class:"am-action-sheet-body"},[e("div",[this.renderTitle(),this.renderButtons()])])])])}},{key:"render",value:function(){var t=arguments[0],e="am-action-sheet am-action-sheet-"+this.type;return t(y["a"],{attrs:{value:this.show,wrapClassName:e},on:{cancel:this.cancelClick}},[t("div",[this.renderSheet()])])}},{key:"renderButtons",value:function(){var t=this,e=this.$createElement;return e("div",{class:this.listClassPrefix,attrs:{role:"group"}},[this.menus.map(function(e){return t.renderMenu(e)}),this.showCancel?this.renderCancelButton():null])}},{key:"renderTitle",value:function(){var t=this.$createElement;return this.title?t("div",{class:this.prefixCls+"-message"},[this.title]):null}},{key:"renderMenu",value:function(t){var e,n=this.$createElement,a=g["a"],s=this.listClassPrefix+"-item",o=(e={},Object(i["a"])(e,s,!0),Object(i["a"])(e,this.listClassPrefix+"-badge",t.badge),e);return n(a,{attrs:{activeClassName:s+"-active"}},[n("div",{class:o,attrs:{role:"button"}},[n("span",{class:s+"-content"},[t.label]),this.renderBadge(t.badge)])])}},{key:"renderBadge",value:function(t){var e=this.$createElement;if(t){var n="boolean"===typeof t?"am-badge-dot":"am-badge-text";return t?e("span",{class:"am-badge am-badge-not-a-wrapper"},[e("sup",{class:n},["boolean"===typeof t?null:t])]):null}}},{key:"renderCancelButton",value:function(){var t=this.$createElement,e=g["a"],n=this.listClassPrefix+"-item",i=n+" ".concat(this.prefixCls,"-cancel-button");return t(e,{attrs:{activeClassName:n+"-active"}},[t("div",{class:i,attrs:{role:"button"},on:{click:this.cancelClick}},[t("span",{class:n+"-content"},["取消"]),t("span",{class:this.prefixCls+"-cancel-button-mask"})])])}},{key:"showStyle",get:function(){var t={};return this.show||(t.display="none"),t}},{key:"listClassPrefix",get:function(){return this.prefixCls+"-button-list"}}]),e}(f.a);h["b"]([Object(m["d"])({type:String,default:"am-action-sheet"})],k.prototype,"prefixCls",void 0),h["b"]([Object(m["d"])({type:String,default:"取消"})],k.prototype,"cancelText",void 0),h["b"]([Object(m["d"])({type:Boolean,default:!0})],k.prototype,"closeOnClickingMask",void 0),h["b"]([Object(m["d"])({type:Boolean,default:!0})],k.prototype,"closeOnClickingMenu",void 0),h["b"]([Object(m["d"])({type:[Object,Array],default:function(){return[]}})],k.prototype,"menus",void 0),h["b"]([Object(m["d"])({type:Boolean,default:!0})],k.prototype,"showCancel",void 0),h["b"]([Object(m["d"])({type:String,default:"ios"})],k.prototype,"theme",void 0),h["b"]([Object(m["d"])(Boolean)],k.prototype,"value",void 0),h["b"]([Object(m["d"])({type:String,default:"normal"})],k.prototype,"type",void 0),h["b"]([Object(m["d"])({type:String})],k.prototype,"title",void 0),h["b"]([Object(m["g"])("show")],k.prototype,"showChanged",null),h["b"]([Object(m["g"])("value",{immediate:!0})],k.prototype,"valueChanged",null),k=h["b"]([p()({name:"ActionSheet"})],k);var O=k;n("658b"),n("931f"),n("9372");O.install=function(t){t.component("MActionSheet",O)};e["a"]=O},9306:function(t,e,n){"use strict";var i=n("c3a1"),a=n("9aa9"),s=n("355d"),o=n("241e"),r=n("335c"),c=Object.assign;t.exports=!c||n("294c")(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=i})?function(t,e){var n=o(t),c=arguments.length,u=1,d=a.f,l=s.f;while(c>u){var h,v=r(arguments[u++]),f=d?i(v).concat(d(v)):i(v),b=f.length,p=0;while(b>p)l.call(v,h=f[p++])&&(n[h]=v[h])}return n}:c},"931f":function(t,e,n){"use strict";n("658b"),n("eb40")},9372:function(t,e,n){},a21f:function(t,e,n){var i=n("584a"),a=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},a371:function(t,e,n){"use strict";var i=n("5176"),a=n.n(i),s=n("d225"),o=n("b0b4"),r=n("308d"),c=n("6bb5"),u=n("4e2b"),d=n("9ab4"),l=n("8bbf"),h=n.n(l),v=n("65d9"),f=n.n(v),b=n("60a3"),p=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.active=!1,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"updated",value:function(){this.disabled&&this.active&&(this.active=!1)}},{key:"triggerEvent",value:function(t,e,n){var i="on".concat(t),a=this.$slots.default&&this.$slots.default[0];a[i]&&a[i](n),e!==this.active&&(this.active=e)}},{key:"onTouchStart",value:function(t){this.triggerEvent("TouchStart",!0,t)}},{key:"onTouchMove",value:function(t){this.triggerEvent("TouchMove",!1,t)}},{key:"onTouchEnd",value:function(t){this.triggerEvent("TouchEnd",!1,t)}},{key:"onTouchCancel",value:function(t){this.triggerEvent("TouchCancel",!1,t)}},{key:"onMouseDown",value:function(t){this.triggerEvent("MouseDown",!0,t)}},{key:"onMouseUp",value:function(t){this.triggerEvent("MouseUp",!1,t)}},{key:"onMouseLeave",value:function(t){this.triggerEvent("MouseLeave",!1,t)}},{key:"render",value:function(){var t=this.disabled,e=(this.activeClassName,this.activeStyle,t?void 0:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchCancel,mousedown:this.onMouseDown,mouseup:this.onMouseUp,mouseleave:this.onMouseLeave}),n=this.$slots.default[0];if(!t&&this.active){if(n.elm){var i=n.elm;i.classList.contains(this.activeClassName)||i.classList.add(this.activeClassName)}}else if(n.elm){var s=n.elm;s.classList.contains(this.activeClassName)&&s.classList.remove(this.activeClassName)}return n.data.on=n.data.on?a()(n.data.on,e):e,n}}]),e}(h.a);d["b"]([Object(b["d"])({type:Boolean,default:!1})],p.prototype,"disabled",void 0),d["b"]([Object(b["d"])({type:String})],p.prototype,"activeClassName",void 0),d["b"]([Object(b["d"])()],p.prototype,"activeStyle",void 0),p=d["b"]([f()({name:"TouchFeedback"})],p),e["a"]=p},a3c3:function(t,e,n){var i=n("63b6");i(i.S+i.F,"Object",{assign:n("9306")})},bd86:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("85f2"),a=n.n(i);function s(t,e,n){return e in t?a()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},d5e7:function(t,e,n){"use strict";var i=n("a371");n.d(e,"a",function(){return i["a"]})},eb40:function(t,e,n){},f499:function(t,e,n){t.exports=n("a21f")},f5df:function(t,e,n){}}]);
//# sourceMappingURL=chunk-661e247d.7e82be41.js.map