(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b41b72c"],{"06cd":function(t,e,n){"use strict";var a=n("8fb7"),o=n.n(a);o.a},"0c99":function(t,e){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>columns</td>\n<td></td>\n<td>TableColumn[]</td>\n<td></td>\n</tr>\n<tr>\n<td>dataSource</td>\n<td></td>\n<td>any[]</td>\n<td></td>\n</tr>\n<tr>\n<td>emptyText</td>\n<td></td>\n<td>string | VNode</td>\n<td></td>\n</tr>\n<tr>\n<td>locale</td>\n<td></td>\n<td>object</td>\n<td></td>\n</tr>\n<tr>\n<td>pagination</td>\n<td></td>\n<td>any</td>\n<td>false</td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>striped</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n</tbody></table>\n"},"3f7f":function(t,e,n){"use strict";var a=n("6717"),o=n.n(a);o.a},"3f8d":function(t,e){t.exports="<p>基本用法</p>\n"},"4f8a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-box"},[n("section",{staticClass:"code-box-demo"},[t._t("demo")],2),n("markdown",{staticClass:"code-box-meta",attrs:{source:t.markdown}}),n("pre",{directives:[{name:"hljs",rawName:"v-hljs"},{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],staticClass:"code-box-code markdown-body clearfix"},[t._v("    "),n("ae-layout",[t._v("\n      "),n("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),t._v("\n      "),n("code",{domProps:{textContent:t._s(t.code)}}),t._v("\n    ")],1),t._v("\n  ")],1),n("div",{staticClass:"show-code-btn"},[n("d-button",{staticStyle:{border:"none"},attrs:{block:"",icon:"plus"},on:{click:function(e){t.showCode=!t.showCode}}},[n("span",{domProps:{textContent:t._s(t.showCode?"隐藏代码":"显示代码")}})])],1)],1)},o=[],r=n("d225"),s=n("b0b4"),d=n("308d"),c=n("6bb5"),i=n("4e2b"),l=n("9ab4"),u=n("5365"),p=n("2f23"),m=n("e722"),b=n("8bbf"),f=n.n(b),v=n("65d9"),h=n.n(v),w=n("60a3");f.a.use(m["a"]),f.a.use(p["a"]),f.a.use(u["a"]);var y=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(d["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.showCode=!1,t}return Object(i["a"])(e,t),Object(s["a"])(e,[{key:"copied",value:function(){this.$message.success("已复制")}}]),e}(f.a);l["a"]([Object(w["d"])(String)],y.prototype,"code",void 0),l["a"]([Object(w["d"])(String)],y.prototype,"markdown",void 0),y=l["a"]([h()({name:"CodeBox"})],y);var x=y,j=x,k=(n("06cd"),n("2877")),C=Object(k["a"])(j,a,o,!1,null,null,null);e["a"]=C.exports},6717:function(t,e,n){},"7b19":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"toc-affix"},[n("d-anchor",{attrs:{"get-container":t.getContainer,"offset-top":20}},[n("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),n("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),n("d-anchor-link",{attrs:{href:"#demo1",title:"基本用法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{href:"#props",title:"属性"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:t.title}})],1),t._m(0),n("demo1",{attrs:{id:"demo1"}}),t._m(1),n("markdown",{attrs:{source:t.props}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[t._v("示例代码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body",attrs:{id:"props"}},[n("span"),n("h2",[t._v("属性说明")])])}],r=n("d225"),s=n("b0b4"),d=n("308d"),c=n("6bb5"),i=n("4e2b"),l=n("9ab4"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:t.code,markdown:t.md}},[n("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},p=[],m="<template>\n  <div>\n    <d-table :columns=\"columns\"\n             :data-source=\"[]\"/>\n    <d-table bordered striped\n             :columns=\"columns\"\n             :data-source=\"dataSource\"\n             :row-key=\"rowKey\">\n      <template slot=\"opts\"\n                slot-scope=\"record\">\n        <div>{{record}}</div>\n      </template>\n    </d-table>\n  </div>\n</template>\n<script lang=\"ts\">\n  import Vue from 'vue';\n  import Component from 'vue-class-component';\n  import DTable from '../../index';\n\n  Vue.use(DTable);\n  @Component({\n    name: 'Demo1'\n  })\n  export default class Demo1 extends Vue {\n    public columns = [{title: '序号', dataType: 'index'}, {\n      title: '标题',\n      dataIndex: 'title'\n    }, {\n      title: '数量',\n      dataType: 'number',\n      dataIndex: 'count'\n    }, {\n      title: '时间',\n      dataIndex: 'time',\n      dataType: 'date'\n    }, {\n      title: '操作',\n      scopedSlots: {\n        customRender: 'opts'\n      }\n    }];\n\n    public dataSource = [];\n\n    public created() {\n      for (let i = 0; i < 30; i++) {\n        this.dataSource.push({\n          title: '列' + i,\n          count: i + 10,\n          time: new Date()\n        });\n      }\n    }\n\n    public rowKey(row) {\n      return row.title;\n    }\n  }\n<\/script>\n",b=n("3f8d"),f=n.n(b),v=n("8bbf"),h=n.n(v),w=n("65d9"),y=n.n(w),x=n("4f8a"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("d-table",{attrs:{columns:t.columns,"data-source":[]}}),n("d-table",{attrs:{bordered:"",striped:"",columns:t.columns,"data-source":t.dataSource,"row-key":t.rowKey},scopedSlots:t._u([{key:"opts",fn:function(e){return[n("div",[t._v(t._s(e))])]}}])})],1)},k=[],C=n("16e1");h.a.use(C["a"]);var _=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(d["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.columns=[{title:"序号",dataType:"index"},{title:"标题",dataIndex:"title"},{title:"数量",dataType:"number",dataIndex:"count"},{title:"时间",dataIndex:"time",dataType:"date"},{title:"操作",scopedSlots:{customRender:"opts"}}],t.dataSource=[],t}return Object(i["a"])(e,t),Object(s["a"])(e,[{key:"created",value:function(){for(var t=0;t<30;t++)this.dataSource.push({title:"列"+t,count:t+10,time:new Date})}},{key:"rowKey",value:function(t){return t.title}}]),e}(h.a);_=l["a"]([y()({name:"Demo1"})],_);var O=_,g=O,S=n("2877"),D=Object(S["a"])(g,j,k,!1,null,null,null),T=D.exports,N=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(d["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.code=m,t.md=f.a,t}return Object(i["a"])(e,t),e}(h.a);N=l["a"]([y()({name:"Demo1",components:{CodeBox:x["a"],DemoComp:T}})],N);var E=N,I=E,$=Object(S["a"])(I,u,p,!1,null,null,null),K=$.exports,V=n("847c"),B=n("f0c2"),J=n.n(B),P=n("0c99"),R=n.n(P);h.a.use(V["a"]),h.a.use(C["a"]);var q=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(d["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.title=J.a,t.props=R.a,t}return Object(i["a"])(e,t),Object(s["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(h.a);q=l["a"]([y()({name:"ComponentDemo",components:{demo1:K}})],q);var z=q,A=z,F=(n("3f7f"),Object(S["a"])(A,a,o,!1,null,"530a3e09",null));e["default"]=F.exports},"8fb7":function(t,e,n){},f0c2:function(t,e){t.exports='<h1 id="表格--d-table">表格  d-table</h1>\n'}}]);
//# sourceMappingURL=chunk-8b41b72c.94ec581a.js.map