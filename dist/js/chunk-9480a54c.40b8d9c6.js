(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9480a54c"],{"06cd":function(e,t,n){"use strict";var o=n("8fb7"),l=n.n(o);l.a},"15b8":function(e,t,n){e.exports=n("e1b7")},"4f8a":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code-box"},[n("section",{staticClass:"code-box-demo"},[e._t("demo")],2),n("markdown",{staticClass:"code-box-meta",attrs:{source:e.markdown}}),n("pre",{directives:[{name:"hljs",rawName:"v-hljs"},{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],staticClass:"code-box-code markdown-body clearfix"},[e._v("    "),n("ae-layout",[e._v("\n      "),n("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),e._v("\n      "),n("code",{domProps:{textContent:e._s(e.code)}}),e._v("\n    ")],1),e._v("\n  ")],1),n("div",{staticClass:"show-code-btn"},[n("d-button",{staticStyle:{border:"none"},attrs:{block:"",icon:"plus"},on:{click:function(t){e.showCode=!e.showCode}}},[n("span",{domProps:{textContent:e._s(e.showCode?"隐藏代码":"显示代码")}})])],1)],1)},l=[],a=n("d225"),s=n("b0b4"),i=n("308d"),d=n("6bb5"),r=n("4e2b"),c=n("9ab4"),u=n("5365"),p=n("2f23"),m=n("e722"),v=n("8bbf"),b=n.n(v),f=n("65d9"),h=n.n(f),y=n("60a3");b.a.use(m["a"]),b.a.use(p["a"]),b.a.use(u["a"]);var w=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(i["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.showCode=!1,e}return Object(r["a"])(t,e),Object(s["a"])(t,[{key:"copied",value:function(){this.$message.success("已复制")}}]),t}(b.a);c["a"]([Object(y["d"])(String)],w.prototype,"code",void 0),c["a"]([Object(y["d"])(String)],w.prototype,"markdown",void 0),w=c["a"]([h()({name:"CodeBox"})],w);var x=w,g=x,k=(n("06cd"),n("2877")),O=Object(k["a"])(g,o,l,!1,null,null,null);t["a"]=O.exports},"522e":function(e,t,n){var o=n("f772"),l=n("ebfd").onFreeze;n("ce7e")("freeze",function(e){return function(t){return e&&o(t)?e(l(t)):t}})},"59d3":function(e,t,n){},"8fb7":function(e,t,n){},"93c1":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"toc-affix"},[n("d-anchor",{attrs:{"get-container":e.getContainer,"offset-top":20}},[n("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),n("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),n("d-anchor-link",{attrs:{href:"#demo1",title:"基本用法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{href:"#props",title:"属性"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:e.title}})],1),e._m(0),n("demo1",{attrs:{id:"demo1"}}),e._m(1),n("markdown",{attrs:{source:e.props}})],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[e._v("示例代码")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown-body",attrs:{id:"props"}},[n("span"),n("h2",[e._v("属性说明")])])}],a=n("d225"),s=n("b0b4"),i=n("308d"),d=n("6bb5"),r=n("4e2b"),c=n("9ab4"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:e.code,markdown:e.md}},[n("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},p=[],m='<template>\n  <d-form label-width="180px">\n    <a-select :options="createOptions(5000)"></a-select>\n    <a-select :options="createOptions(5000, true)"></a-select>\n    <d-form-item label="可清除的">\n      <d-select clearable\n                v-model="value1"\n                placeholder="请选择选项"\n                style="width:200px;"\n                :default-value="2"\n                :options="options"\n                @change="valueChanged"/>\n      {{value1}}\n    </d-form-item>\n    <d-form-item label="简单选项">\n      <d-select searchable\n                v-model="value8"\n                :options="[\'选项1\', \'选项2\']"></d-select>\n    </d-form-item>\n    <d-form-item label="可搜索的(自定义选项)">\n      <d-select searchable\n                v-model="value2"\n                placeholder="请选择"\n                style="min-width:100px;">\n        <d-select-option value="1">abc</d-select-option>\n        <d-select-option value="2">def</d-select-option>\n      </d-select>\n    </d-form-item>\n    <d-form-item label="可搜索的">\n      <d-select searchable\n                v-model="value3"\n                placeholder="请选择"\n                style="min-width:100px;"\n                :label-property="(option) => option.label + \'(\' + option.value + \')\'"\n                :options="options"/>\n    </d-form-item>\n    <d-form-item label="默认选项">\n      <d-select searchable\n                v-model="value3"\n                default-option-label="---请选择---"\n                placeholder="请选择"\n                style="min-width:100px;"\n                :default-option-value=" - 1"\n                :label-property="(option) => option.label + \'(\' + option.value + \')\'"\n                :options="options">\n      </d-select>\n    </d-form-item>\n    <d-form-item label="自定义选项">\n      <d-select label-property="name"\n                placeholder="请选择"\n                style="min-width:100px;"\n                value-property="id"\n                :options="options2"/>\n    </d-form-item>\n    <d-form-item label="选项分组">\n      <d-select v-model="value4"\n                placeholder="请选择"\n                style="min-width:100px;">\n        <d-select-option-group label="分组1">\n          <d-select-option value="1">选项1</d-select-option>\n          <d-select-option value="2">选项2</d-select-option>\n        </d-select-option-group>\n        <d-select-option-group label="分组2">\n          <d-select-option value="3">选项3</d-select-option>\n          <d-select-option value="4">选项4</d-select-option>\n        </d-select-option-group>\n      </d-select>\n    </d-form-item>\n    <d-form-item label="异步加载选项">\n      <d-button class="m-r"\n                @click="loadOptions">加载选项\n      </d-button>\n      <d-select v-model="value5"\n                placeholder="请选择"\n                style="min-width:100px;">\n        <d-select-option v-for="option in options3"\n                         :key="option.value"\n                         :value="option.value">{{option.label}}\n        </d-select-option>\n      </d-select>\n    </d-form-item>\n    <d-form-item label="自定义显示标签">\n      <d-select v-model="value6"\n                placeholder="请选择"\n                style="min-width:100px;"\n                value-property="id"\n                :label-property="getLabel"\n                :options="options2">\n      </d-select>\n    </d-form-item>\n    <d-form-item label="多选">\n      <d-select v-model="value7"\n                mode="multiple"\n                style="min-width: 100px;">\n        <ae-icon slot="menuItemSelectedIcon"\n                 type="edit"></ae-icon>\n        <d-select-option :value="1">\n          选项1\n        </d-select-option>\n        <d-select-option :value="2">\n          选项2\n        </d-select-option>\n      </d-select>\n    </d-form-item>\n  </d-form>\n</template>\n<script lang="ts">\n  import Icon from \'@/packages/ae-icon\';\n  import Form from \'@/packages/d-form\';\n  import Vue from \'vue\';\n  import Component from \'vue-class-component\';\n  import DSelect from \'../../index\';\n\n  Vue.use(Form);\n  Vue.use(Icon);\n  Vue.use(DSelect);\n  @Component({\n    name: \'Demo1\'\n  })\n  export default class Demo1 extends Vue {\n\n    public options = [{\n      label: \'选项1\', value: 1\n    }, {\n      label: \'选项2\', value: 2, disabled: true\n    }, {\n      label: \'选项3\', value: 3\n    }];\n    public options2 = [{\n      name: \'自定义选项1\', id: 1\n    }, {\n      name: \'自定义选项2\', id: 2\n    }];\n\n    public options3 = [];\n    public options4 = [];\n\n    public value1 = null;\n    public value2 = null;\n    public value3 = null;\n    public value4 = 2;\n    public value5 = null;\n    public value6 = null;\n    public value7 = [];\n    public value8 = null;\n\n    public created() {\n      const options = [];\n      for (let i = 0; i < 400; i++) {\n        options.push({\n          label: \'选项\' + (i + 1), value: i + 1\n        });\n      }\n      this.options4 = options;\n    }\n\n    public createOptions(count: number, freeze: boolean = false) {\n      console.log(1);\n      const options = [];\n      for (let i = 0; i < count; i++) {\n        options.push({\n          label: \'选项\' + (i + 1), value: i + 1\n        });\n      }\n      if (freeze) {\n        return options.map(it => Object.freeze(it));\n      } else {\n        return options;\n      }\n    }\n\n    public filter(input, option) {\n      console.log(input);\n      console.log(option);\n      return true;\n    }\n\n    public getLabel(option) {\n      return option.name + \'(\' + option.id + \')\';\n    }\n\n    public loadOptions() {\n      const options = [];\n      for (let i = 0; i < 300; i++) {\n        options.push({\n          label: \'选项\' + (i + 1), value: i + 1\n        });\n      }\n      this.options3 = options;\n    }\n\n    public valueChanged() {\n    }\n  }\n<\/script>\n<style scoped lang="less">\n</style>\n',v=n("f035"),b=n.n(v),f=n("8bbf"),h=n.n(f),y=n("65d9"),w=n.n(y),x=n("4f8a"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d-form",{attrs:{"label-width":"180px"}},[n("a-select",{attrs:{options:e.createOptions(5e3)}}),n("a-select",{attrs:{options:e.createOptions(5e3,!0)}}),n("d-form-item",{attrs:{label:"可清除的"}},[n("d-select",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请选择选项","default-value":2,options:e.options},on:{change:e.valueChanged},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),e._v("\n    "+e._s(e.value1)+"\n  ")],1),n("d-form-item",{attrs:{label:"简单选项"}},[n("d-select",{attrs:{searchable:"",options:["选项1","选项2"]},model:{value:e.value8,callback:function(t){e.value8=t},expression:"value8"}})],1),n("d-form-item",{attrs:{label:"可搜索的(自定义选项)"}},[n("d-select",{staticStyle:{"min-width":"100px"},attrs:{searchable:"",placeholder:"请选择"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}},[n("d-select-option",{attrs:{value:"1"}},[e._v("abc")]),n("d-select-option",{attrs:{value:"2"}},[e._v("def")])],1)],1),n("d-form-item",{attrs:{label:"可搜索的"}},[n("d-select",{staticStyle:{"min-width":"100px"},attrs:{searchable:"",placeholder:"请选择","label-property":function(e){return e.label+"("+e.value+")"},options:e.options},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),n("d-form-item",{attrs:{label:"默认选项"}},[n("d-select",{staticStyle:{"min-width":"100px"},attrs:{searchable:"","default-option-label":"---请选择---",placeholder:"请选择","default-option-value":-1,"label-property":function(e){return e.label+"("+e.value+")"},options:e.options},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),n("d-form-item",{attrs:{label:"自定义选项"}},[n("d-select",{staticStyle:{"min-width":"100px"},attrs:{"label-property":"name",placeholder:"请选择","value-property":"id",options:e.options2}})],1),n("d-form-item",{attrs:{label:"选项分组"}},[n("d-select",{staticStyle:{"min-width":"100px"},attrs:{placeholder:"请选择"},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}},[n("d-select-option-group",{attrs:{label:"分组1"}},[n("d-select-option",{attrs:{value:"1"}},[e._v("选项1")]),n("d-select-option",{attrs:{value:"2"}},[e._v("选项2")])],1),n("d-select-option-group",{attrs:{label:"分组2"}},[n("d-select-option",{attrs:{value:"3"}},[e._v("选项3")]),n("d-select-option",{attrs:{value:"4"}},[e._v("选项4")])],1)],1)],1),n("d-form-item",{attrs:{label:"异步加载选项"}},[n("d-button",{staticClass:"m-r",on:{click:e.loadOptions}},[e._v("加载选项\n    ")]),n("d-select",{staticStyle:{"min-width":"100px"},attrs:{placeholder:"请选择"},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}},e._l(e.options3,function(t){return n("d-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label)+"\n      ")])}),1)],1),n("d-form-item",{attrs:{label:"自定义显示标签"}},[n("d-select",{staticStyle:{"min-width":"100px"},attrs:{placeholder:"请选择","value-property":"id","label-property":e.getLabel,options:e.options2},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}})],1),n("d-form-item",{attrs:{label:"多选"}},[n("d-select",{staticStyle:{"min-width":"100px"},attrs:{mode:"multiple"},model:{value:e.value7,callback:function(t){e.value7=t},expression:"value7"}},[n("ae-icon",{attrs:{slot:"menuItemSelectedIcon",type:"edit"},slot:"menuItemSelectedIcon"}),n("d-select-option",{attrs:{value:1}},[e._v("\n        选项1\n      ")]),n("d-select-option",{attrs:{value:2}},[e._v("\n        选项2\n      ")])],1)],1)],1)},k=[],O=(n("7f7f"),n("15b8")),_=n.n(O),C=n("5365"),j=n("5919"),S=n("3634");h.a.use(j["a"]),h.a.use(C["a"]),h.a.use(S["a"]);var D=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(i["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.options=[{label:"选项1",value:1},{label:"选项2",value:2,disabled:!0},{label:"选项3",value:3}],e.options2=[{name:"自定义选项1",id:1},{name:"自定义选项2",id:2}],e.options3=[],e.options4=[],e.value1=null,e.value2=null,e.value3=null,e.value4=2,e.value5=null,e.value6=null,e.value7=[],e.value8=null,e}return Object(r["a"])(t,e),Object(s["a"])(t,[{key:"created",value:function(){for(var e=[],t=0;t<400;t++)e.push({label:"选项"+(t+1),value:t+1});this.options4=e}},{key:"createOptions",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];console.log(1);for(var n=[],o=0;o<e;o++)n.push({label:"选项"+(o+1),value:o+1});return t?n.map(function(e){return _()(e)}):n}},{key:"filter",value:function(e,t){return console.log(e),console.log(t),!0}},{key:"getLabel",value:function(e){return e.name+"("+e.id+")"}},{key:"loadOptions",value:function(){for(var e=[],t=0;t<300;t++)e.push({label:"选项"+(t+1),value:t+1});this.options3=e}},{key:"valueChanged",value:function(){}}]),t}(h.a);D=c["a"]([w()({name:"Demo1"})],D);var I=D,N=I,E=n("2877"),V=Object(E["a"])(N,g,k,!1,null,"a266d676",null),$=V.exports,z=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(i["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.code=m,e.md=b.a,e}return Object(r["a"])(t,e),t}(h.a);z=c["a"]([w()({name:"Demo1",components:{CodeBox:x["a"],DemoComp:$}})],z);var L=z,F=L,P=Object(E["a"])(F,u,p,!1,null,null,null),B=P.exports,q=n("847c"),J=n("98c1"),A=n.n(J),G=n("af23"),H=n.n(G);h.a.use(q["a"]),h.a.use(S["a"]);var K=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(i["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.title=A.a,e.props=H.a,e}return Object(r["a"])(t,e),Object(s["a"])(t,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),t}(h.a);K=c["a"]([w()({name:"ComponentDemo",components:{demo1:B}})],K);var M=K,Q=M,R=(n("a635"),Object(E["a"])(Q,o,l,!1,null,"0848bdfb",null));t["default"]=R.exports},"98c1":function(e,t){e.exports='<h1 id="下拉选择--dselect">下拉选择  DSelect</h1>\n'},a635:function(e,t,n){"use strict";var o=n("59d3"),l=n.n(o);l.a},af23:function(e,t){e.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>clearable</td>\n<td>是否支持清除</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>defaultOptionLabel</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>defaultOptionValue</td>\n<td></td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>filter</td>\n<td>是否根据输入项进行筛选。类型为函数，接收 <code>inputValue</code>，<code>option</code> 两个参数， 当 <code>option</code> 符合筛选条件时，应返回 <code>true</code>，反之则返回 <code>false</code>。 仅对<code>options</code>进行过滤，如果选项为子组件时，请通过监听<code>search</code>事件获取输入值并自行实现过滤逻辑</td>\n<td>(input: string, option: any) =&gt; boolean</td>\n<td></td>\n</tr>\n<tr>\n<td>labelProperty</td>\n<td>选项对象中作为标签的属性名称</td>\n<td>string | ((option) =&gt; any)</td>\n<td></td>\n</tr>\n<tr>\n<td>multiple</td>\n<td>为true时等同于mode=&quot;multiple&quot;</td>\n<td>boolean</td>\n<td></td>\n</tr>\n<tr>\n<td>notFoundContent</td>\n<td>当下拉列表为空时显示的内容</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>options</td>\n<td>选项数据</td>\n<td>any[]</td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>占位提示信息</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>searchable</td>\n<td>是否支持选项搜索</td>\n<td>boolean</td>\n<td></td>\n</tr>\n<tr>\n<td>valueProperty</td>\n<td>选项对象中作为值的属性名称</td>\n<td>string | ((option) =&gt; any)</td>\n<td></td>\n</tr>\n</tbody></table>\n"},e1b7:function(e,t,n){n("522e"),e.exports=n("584a").Object.freeze},f035:function(e,t){e.exports="<p>基本用法</p>\n"}}]);
//# sourceMappingURL=chunk-9480a54c.40b8d9c6.js.map