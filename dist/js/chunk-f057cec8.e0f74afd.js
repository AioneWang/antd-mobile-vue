(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f057cec8"],{"06cd":function(t,n,e){"use strict";var a=e("8fb7"),o=e.n(a);o.a},"0acf":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"toc-affix"},[e("d-anchor",{attrs:{"get-container":t.getContainer,"offset-top":20}},[e("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),e("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),e("d-anchor-link",{attrs:{href:"#demo1",title:"基本用法"}}),e("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{href:"#props",title:"属性"}}),e("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),e("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),e("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),e("div",{attrs:{id:"basic"}},[e("markdown",{attrs:{source:t.title}})],1),t._m(0),e("demo1",{attrs:{id:"demo1"}}),t._m(1),e("markdown",{attrs:{source:t.props}})],1)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[e("span"),e("h2",[t._v("示例代码")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"markdown-body",attrs:{id:"props"}},[e("span"),e("h2",[t._v("属性说明")])])}],d=e("d225"),i=e("b0b4"),r=e("308d"),c=e("6bb5"),s=e("4e2b"),l=e("9ab4"),b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo"},[e("code-box",{attrs:{code:t.code,markdown:t.md}},[e("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},m=[],p='<template>\n  <div>\n    <ae-layout>\n      <ae-layout-content>\n        <div style="height:200px;">\n          {{activeTab}}\n          啊啊啊啊啊啊啊啊\n        </div>\n      </ae-layout-content>\n      <ae-layout-footer>\n        <m-tab-bar v-model="activeTab">\n          <m-tab-bar-item active-icon="close"\n                          title="选项1"\n                          @click="clicked">\n            <ae-icon slot="icon"\n                     type="home"></ae-icon>\n          </m-tab-bar-item>\n          <m-tab-bar-item title="选项2">\n            <ae-icon slot="icon"\n                     type="laptop"></ae-icon>\n          </m-tab-bar-item>\n          <m-tab-bar-item title="选项2">\n            <ae-icon slot="icon"\n                     type="tool"></ae-icon>\n          </m-tab-bar-item>\n          <m-tab-bar-item title="选项2">\n            <ae-icon slot="icon"\n                     type="user"></ae-icon>\n          </m-tab-bar-item>\n        </m-tab-bar>\n      </ae-layout-footer>\n    </ae-layout>\n    <div style="height:320px;width:240px;border: 1px solid lightgray;">\n      <m-tab-bar v-model="activeTab">\n        <m-tab-bar-item active-icon="close"\n                        title="选项1"\n                        @click="clicked">\n          <ae-icon slot="icon"\n                   type="home"></ae-icon>\n          <div>aaa</div>\n        </m-tab-bar-item>\n        <m-tab-bar-item title="选项2">\n          <ae-icon slot="icon"\n                   type="laptop"></ae-icon>\n          <div>bbb</div>\n        </m-tab-bar-item>\n        <m-tab-bar-item title="选项2">\n          <ae-icon slot="icon"\n                   type="tool"></ae-icon>\n          <div>cccc</div>\n        </m-tab-bar-item>\n        <m-tab-bar-item title="选项2">\n          <ae-icon slot="icon"\n                   type="user"></ae-icon>\n          <div>ddd</div>\n        </m-tab-bar-item>\n      </m-tab-bar>\n    </div>\n  </div>\n</template>\n<script lang="ts">\n  import Vue from \'vue\';\n  import Component from \'vue-class-component\';\n  import MTabbar from \'../../index\';\n\n  Vue.use(MTabbar);\n  @Component({\n    name: \'Demo1\'\n  })\n  export default class Demo1 extends Vue {\n\n    public activeTab = 0;\n\n    public clicked() {\n    }\n  }\n<\/script>\n<style scoped lang="less">\n</style>\n',u=e("e24b"),v=e.n(u),h=e("8bbf"),f=e.n(h),y=e("65d9"),w=e.n(y),x=e("4f8a"),k=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("ae-layout",[e("ae-layout-content",[e("div",{staticStyle:{height:"200px"}},[t._v("\n        "+t._s(t.activeTab)+"\n        啊啊啊啊啊啊啊啊\n      ")])]),e("ae-layout-footer",[e("m-tab-bar",{model:{value:t.activeTab,callback:function(n){t.activeTab=n},expression:"activeTab"}},[e("m-tab-bar-item",{attrs:{"active-icon":"close",title:"选项1"},on:{click:t.clicked}},[e("ae-icon",{attrs:{slot:"icon",type:"home"},slot:"icon"})],1),e("m-tab-bar-item",{attrs:{title:"选项2"}},[e("ae-icon",{attrs:{slot:"icon",type:"laptop"},slot:"icon"})],1),e("m-tab-bar-item",{attrs:{title:"选项2"}},[e("ae-icon",{attrs:{slot:"icon",type:"tool"},slot:"icon"})],1),e("m-tab-bar-item",{attrs:{title:"选项2"}},[e("ae-icon",{attrs:{slot:"icon",type:"user"},slot:"icon"})],1)],1)],1)],1),e("div",{staticStyle:{height:"320px",width:"240px",border:"1px solid lightgray"}},[e("m-tab-bar",{model:{value:t.activeTab,callback:function(n){t.activeTab=n},expression:"activeTab"}},[e("m-tab-bar-item",{attrs:{"active-icon":"close",title:"选项1"},on:{click:t.clicked}},[e("ae-icon",{attrs:{slot:"icon",type:"home"},slot:"icon"}),e("div",[t._v("aaa")])],1),e("m-tab-bar-item",{attrs:{title:"选项2"}},[e("ae-icon",{attrs:{slot:"icon",type:"laptop"},slot:"icon"}),e("div",[t._v("bbb")])],1),e("m-tab-bar-item",{attrs:{title:"选项2"}},[e("ae-icon",{attrs:{slot:"icon",type:"tool"},slot:"icon"}),e("div",[t._v("cccc")])],1),e("m-tab-bar-item",{attrs:{title:"选项2"}},[e("ae-icon",{attrs:{slot:"icon",type:"user"},slot:"icon"}),e("div",[t._v("ddd")])],1)],1)],1)],1)},g=[],C=e("a36e");f.a.use(C["a"]);var _=function(t){function n(){var t;return Object(d["a"])(this,n),t=Object(r["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.activeTab=0,t}return Object(s["a"])(n,t),Object(i["a"])(n,[{key:"clicked",value:function(){}}]),n}(f.a);_=l["a"]([w()({name:"Demo1"})],_);var j=_,O=j,T=e("2877"),N=Object(T["a"])(O,k,g,!1,null,"01d5d1f4",null),E=N.exports,$=function(t){function n(){var t;return Object(d["a"])(this,n),t=Object(r["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.code=p,t.md=v.a,t}return Object(s["a"])(n,t),n}(f.a);$=l["a"]([w()({name:"Demo1",components:{CodeBox:x["a"],DemoComp:E}})],$);var D=$,S=D,P=Object(T["a"])(S,b,m,!1,null,null,null),B=P.exports,V=e("847c"),I=e("8d18"),J=e.n(I),M=e("5627"),R=e.n(M);f.a.use(V["a"]),f.a.use(C["a"]);var q=function(t){function n(){var t;return Object(d["a"])(this,n),t=Object(r["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.title=J.a,t.props=R.a,t}return Object(s["a"])(n,t),Object(i["a"])(n,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),n}(f.a);q=l["a"]([w()({name:"ComponentDemo",components:{demo1:B}})],q);var z=q,A=z,F=(e("47c6"),Object(T["a"])(A,a,o,!1,null,"b7c6dc4a",null));n["default"]=F.exports},"37b3":function(t,n,e){},"47c6":function(t,n,e){"use strict";var a=e("37b3"),o=e.n(a);o.a},"4f8a":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"code-box"},[e("section",{staticClass:"code-box-demo"},[t._t("demo")],2),e("markdown",{staticClass:"code-box-meta",attrs:{source:t.markdown}}),e("pre",{directives:[{name:"hljs",rawName:"v-hljs"},{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],staticClass:"code-box-code markdown-body clearfix"},[t._v("    "),e("ae-layout",[t._v("\n      "),e("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),t._v("\n      "),e("code",{domProps:{textContent:t._s(t.code)}}),t._v("\n    ")],1),t._v("\n  ")],1),e("div",{staticClass:"show-code-btn"},[e("d-button",{staticStyle:{border:"none"},attrs:{block:"",icon:"plus"},on:{click:function(n){t.showCode=!t.showCode}}},[e("span",{domProps:{textContent:t._s(t.showCode?"隐藏代码":"显示代码")}})])],1)],1)},o=[],d=e("d225"),i=e("b0b4"),r=e("308d"),c=e("6bb5"),s=e("4e2b"),l=e("9ab4"),b=e("5365"),m=e("2f23"),p=e("e722"),u=e("8bbf"),v=e.n(u),h=e("65d9"),f=e.n(h),y=e("60a3");v.a.use(p["a"]),v.a.use(m["a"]),v.a.use(b["a"]);var w=function(t){function n(){var t;return Object(d["a"])(this,n),t=Object(r["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.showCode=!1,t}return Object(s["a"])(n,t),Object(i["a"])(n,[{key:"copied",value:function(){this.$message.success("已复制")}}]),n}(v.a);l["a"]([Object(y["d"])(String)],w.prototype,"code",void 0),l["a"]([Object(y["d"])(String)],w.prototype,"markdown",void 0),w=l["a"]([f()({name:"CodeBox"})],w);var x=w,k=x,g=(e("06cd"),e("2877")),C=Object(g["a"])(k,a,o,!1,null,null,null);n["a"]=C.exports},5627:function(t,n){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>animated</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>badge</td>\n<td></td>\n<td>string | number</td>\n<td></td>\n</tr>\n<tr>\n<td>barTintColor</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>dot</td>\n<td></td>\n<td>boolean</td>\n<td></td>\n</tr>\n<tr>\n<td>hidden</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>icon</td>\n<td></td>\n<td>string | IconResProps | VNode</td>\n<td></td>\n</tr>\n<tr>\n<td>noRenderContent</td>\n<td></td>\n<td>boolean</td>\n<td></td>\n</tr>\n<tr>\n<td>onPress</td>\n<td></td>\n<td>() =&gt; void</td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prerenderingSiblingsNumber</td>\n<td></td>\n<td>number</td>\n<td>1</td>\n</tr>\n<tr>\n<td>selected</td>\n<td></td>\n<td>boolean</td>\n<td>undefined</td>\n</tr>\n<tr>\n<td>selectedIcon</td>\n<td></td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>swipeable</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>tabBarPosition</td>\n<td></td>\n<td>&#39;top&#39; | &#39;bottom&#39;</td>\n<td></td>\n</tr>\n<tr>\n<td>tintColor</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>unselectedTintColor</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td></td>\n<td>string | number</td>\n<td></td>\n</tr>\n</tbody></table>\n"},"8d18":function(t,n){t.exports='<h1 id="标签栏--m-tab-bar">标签栏  m-tab-bar</h1>\n'},"8fb7":function(t,n,e){},e24b:function(t,n){t.exports="<p>基本用法</p>\n"}}]);
//# sourceMappingURL=chunk-f057cec8.e0f74afd.js.map