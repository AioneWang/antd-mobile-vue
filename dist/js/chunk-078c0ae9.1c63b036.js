(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-078c0ae9"],{"19dd":function(t,n,a){},"1cbb":function(t,n){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>animating</td>\n<td></td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>className</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>size</td>\n<td></td>\n<td>&#39;large&#39; | &#39;small&#39;</td>\n<td></td>\n</tr>\n<tr>\n<td>text</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>toast</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n</tbody></table>\n"},"3f6a":function(t,n,a){"use strict";var e=a("bd86"),r=a("d225"),i=a("b0b4"),d=a("308d"),s=a("6bb5"),c=a("4e2b"),o=a("9ab4"),l=a("4d26"),b=a.n(l),u=a("8bbf"),p=a.n(u),f=a("65d9"),h=a.n(f),v=a("60a3"),m=function(t){function n(){return Object(r["a"])(this,n),Object(d["a"])(this,Object(s["a"])(n).apply(this,arguments))}return Object(c["a"])(n,t),Object(i["a"])(n,[{key:"render",value:function(){var t,n=arguments[0],a=this.prefixCls,r=this.className,i=this.animating,d=this.toast,s=this.size,c=this.text,o=b()(a,r,(t={},Object(e["a"])(t,"".concat(a,"-lg"),"large"===s),Object(e["a"])(t,"".concat(a,"-sm"),"small"===s),Object(e["a"])(t,"".concat(a,"-toast"),d),t)),l=b()("".concat(a,"-spinner"),Object(e["a"])({},"".concat(a,"-spinner-lg"),d||"large"===s));return i?n("div",{class:o},d?[n("div",{class:"".concat(a,"-content")},c?[n("span",{class:l,attrs:{"aria-hidden":"true"}}),n("span",{class:"".concat(a,"-toast")},[c])]:[n("span",{class:l,attrs:{"aria-label":"Loading"}})])]:c?[n("span",{class:l,attrs:{"aria-hidden":"true"}}),n("span",{class:"".concat(a,"-tip")},[c])]:[n("span",{class:l,attrs:{"aria-label":"loading"}})]):null}}]),n}(p.a);o["b"]([Object(v["d"])({type:String,default:"am-activity-indicator"})],m.prototype,"prefixCls",void 0),o["b"]([Object(v["d"])({type:String})],m.prototype,"className",void 0),o["b"]([Object(v["d"])({type:Boolean,default:!0})],m.prototype,"animating",void 0),o["b"]([Object(v["d"])({type:Boolean,default:!1})],m.prototype,"toast",void 0),o["b"]([Object(v["d"])({default:"small"})],m.prototype,"size",void 0),o["b"]([Object(v["d"])({type:String})],m.prototype,"text",void 0),m=o["b"]([h()({name:"ActivityIndicator"})],m);var y=m;a("658b"),a("f66e");y.install=function(t){t.component("MActivityIndicator",y)};n["a"]=y},"4d26":function(t,n,a){var e,r;
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
(function(){"use strict";var a={}.hasOwnProperty;function i(){for(var t=[],n=0;n<arguments.length;n++){var e=arguments[n];if(e){var r=typeof e;if("string"===r||"number"===r)t.push(e);else if(Array.isArray(e)&&e.length){var d=i.apply(null,e);d&&t.push(d)}else if("object"===r)for(var s in e)a.call(e,s)&&e[s]&&t.push(s)}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):(e=[],r=function(){return i}.apply(n,e),void 0===r||(t.exports=r))})()},"658b":function(t,n,a){"use strict";a("f5df"),a("19dd")},"944d":function(t,n,a){},b18f:function(t,n){t.exports='<hr>\n<h1 id="活动指示器--activityindicator">活动指示器  ActivityIndicator</h1>\n<hr>\n<p>活动指示器。\n表明某个任务正在进行中。</p>\n<h3 id="规则">规则</h3>\n<ul>\n<li>不要让活动指示器静止，用户会以为该任务停滞了。</li>\n<li>在某些特定场景下，提供有意义的文案，帮助用户明白哪个任务正在进行中，eg：正在上传照片。</li>\n<li>如果能知道用户的等待时间，可以使用组件 Progress 来替代。</li>\n</ul>\n'},b2f6:function(t,n,a){"use strict";var e=a("944d"),r=a.n(e);r.a},bd86:function(t,n,a){"use strict";a.d(n,"a",function(){return i});var e=a("85f2"),r=a.n(e);function i(t,n,a){return n in t?r()(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}},d298:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{attrs:{id:"basic"}},[a("markdown",{attrs:{source:t.title}})],1),t._m(0),t._m(1),a("markdown",{attrs:{source:t.props}})],1)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[a("span"),a("h2",[t._v("示例代码")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"markdown-body",attrs:{id:"props"}},[a("span"),a("h2",[t._v("属性说明")])])}],i=a("d225"),d=a("b0b4"),s=a("308d"),c=a("6bb5"),o=a("4e2b"),l=a("9ab4"),b=a("8bbf"),u=a.n(b),p=a("65d9"),f=a.n(p),h=a("3f6a"),v=a("b18f"),m=a.n(v),y=a("1cbb"),g=a.n(y);u.a.use(h["a"]);var j=function(t){function n(){var t;return Object(i["a"])(this,n),t=Object(s["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.title=m.a,t.props=g.a,t}return Object(o["a"])(n,t),Object(d["a"])(n,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),n}(u.a);j=l["b"]([f()({name:"ComponentDemo"})],j);var O=j,w=O,x=(a("b2f6"),a("2877")),_=Object(x["a"])(w,e,r,!1,null,"626d3c8b",null);n["default"]=_.exports},f5df:function(t,n,a){},f66e:function(t,n,a){}}]);
//# sourceMappingURL=chunk-078c0ae9.1c63b036.js.map