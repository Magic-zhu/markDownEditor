(function(t){function e(e){for(var i,a,c=e[0],l=e[1],o=e[2],f=0,d=[];f<c.length;f++)a=c[f],s[a]&&d.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var l=n[c];0!==s[l]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02b1":function(t,e,n){},"3e74":function(t,e){class n{constructor(){this.titleReg=/#+\s.*/,this.listReg=/\-\s.*/,this.quote=/>\s.*/,this.code=/```/}match(t){let e=t.match(this.titleReg);if(e)return"title";let n=t.match(this.listReg);if(n)return"list";let i=t.match(this.quote);if(i)return"quote";let s=t.match(this.code);return!!s&&"code"}}t.exports=new n},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a=(n("7c55"),n("2877")),c={},l=Object(a["a"])(c,s,r,!1,null,null,null),o=l.exports,u=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",on:{click:function(e){t.ifShowMenu=!1}}},[n("div",{staticClass:"filetree"},[n("el-tree",{attrs:{data:t.filetree,"highlight-current":""},on:{"node-click":t.handleNodeClick}})],1),n("div",{staticClass:"home"},[n("div",{staticClass:"tool_bar"},[n("div",{staticClass:"mr10"},[n("el-button-group",t._l(t.funcMap_title,function(e){return n("el-button",{key:e,attrs:{type:"default",size:"small"},on:{click:function(n){return t.funcBtn(e)}}},[t._v(t._s(e)+"\n                    ")])}),1)],1),n("div",{staticClass:"mr10"},[n("el-button-group",t._l(t.funcMap_group2,function(e){return n("el-button",{key:e,attrs:{type:"default",size:"small"},on:{click:function(n){return t.funcBtn(e)}}},[n("i",{class:"fa fa-"+e})])}),1)],1),n("div",{staticClass:"mr10"},[n("el-button-group",[n("el-button",{attrs:{type:"default",size:"small"},on:{click:function(e){return t.funcBtn("red")}}},[n("i",{staticClass:"fa fa-font",staticStyle:{color:"red"}})]),n("el-button",{attrs:{type:"default",size:"small"},on:{click:function(e){return t.funcBtn("marked")}}},[n("i",{staticClass:"fa fa-font",staticStyle:{"background-color":"yellow"}})]),n("el-button",{attrs:{type:"default",size:"small"},on:{click:function(e){return t.funcBtn("link")}}},[n("i",{staticClass:"fa fa-chain"})])],1)],1),n("div",[n("el-button-group",[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"保存文件",placement:"bottom-start"}},[n("el-button",{attrs:{type:"default",size:"small"},on:{click:function(e){return t.funcBtn("save")}}},[n("i",{staticClass:"fa fa-save"})])],1),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑视图",placement:"bottom-start"}},[n("el-button",{attrs:{type:"default",size:"small"},on:{click:function(e){return t.funcBtn("view")}}},[n("i",{staticClass:"fa fa-columns"})])],1),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"预览视图",placement:"bottom-start"}},[n("el-button",{attrs:{type:"default",size:"small"},on:{click:function(e){return t.funcBtn("eye")}}},[n("i",{staticClass:"fa fa-eye"})])],1),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"清除全部",placement:"bottom-start"}},[n("el-button",{attrs:{type:"default",size:"small"},on:{click:function(e){return t.funcBtn("clear")}}},[n("i",{staticClass:"fa fa-eraser"})])],1)],1)],1)]),n("div",{staticClass:"content",style:t.content_style},[2!=t.view?n("div",{staticClass:"left_side"},[n("textarea",{staticClass:"inputArea",on:{input:function(e){return t.tr(e)}}})]):t._e(),1==t.view||2==t.view?n("div",{staticClass:"right_side",style:t.right_side_style,domProps:{innerHTML:t._s(t.result)}}):t._e()])]),t.ifShowMenu?n("div",{staticClass:"contextMenu",style:t.menuPosition},t._l(t.contextMenuList,function(e,i){return n("div",{key:i,on:{click:function(n){return t.handleContextMenuClick(e)}}},[t._v(t._s(e)+"\n        ")])}),0):t._e()])},d=[],h=n("1487"),p=n.n(h),b=n("d4cd")({html:!0,linkify:!0,typographer:!0,highlight:function(t,e){if(e&&p.a.getLanguage(e))try{return'<pre class="hljs"><code>'+p.a.highlight(e,t,!0).value+"</code></pre>"}catch(n){}}}).use(n("4bb9")).use(n("cf2b")),y={editor:["删除该行"],fileTree:["新建目录","新建文件","删除文件"]},m=(n("3e74"),{name:"home",data(){return{funcMap_title:["h1","h2","h3","h4","h5","h6","br"],funcMap_group2:["bold","italic","strikethrough","underline","list-ul"],funcMap_group3:[],result:"",inputValue:"",outValue:"",view:1,filetree:[],nowPath:"",content_style:"",right_side_style:"",menuPosition:"",contextMenuList:[],ifShowMenu:!1,nowFocus:null,inputList:[""]}},created(){this.listenKeyDown(),document.oncontextmenu=t=>{let e=t.clientX,n=t.clientY;return this.menuPosition=` left:${e}px;top:${n}px`,"inputArea"==t.target.className&&(this.contextMenuList=y.editor),"filetree"==t.target.className&&(this.contextMenuList=y.fileTree),this.ifShowMenu=!0,"right_side"==t.target.className&&(this.ifShowMenu=!1),!1}},mounted(){},methods:{tr(t){this.result=b.render(t.target.value)},funcBtn(t){switch(t){case"h1":this.insertText("#");break;case"h2":this.insertText("##");break;case"h3":this.insertText("###");break;case"h4":this.insertText("####");break;case"h5":this.insertText("#####");break;case"h6":this.insertText("######");break;case"br":this.insertText("<br>");break;case"bold":this.replaceSelectedWords("**");break;case"italic":this.replaceSelectedWords("*");break;case"strikethrough":this.replaceSelectedWords("~~");break;case"underline":this.replaceSelectedWords("++");break;case"marked":this.replaceSelectedWords("==");break;case"list-ul":this.insertText("- ");break;case"red":this.replaceSelectedWords("<span style='color: red'>","</span>");break;case"link":this.replaceSelectedWords("[","](https://)");break;case"view":this.view=1==this.view?0:1;break;case"eye":this.view=2==this.view?1:2;break;case"clear":this.inputValue="",this.tr();break;case"save":ipcRenderer.send("saveFile",{fileContent:this.inputValue,path:this.nowPath});break}},replaceSelectedWords(t,e){let n=window.getSelection().toString();e?document.execCommand("insertText",!1,t+n+e):document.execCommand("insertText",!1,t+n+t)},listenKeyDown(){document.addEventListener("keypress",t=>{return t.ctrlKey&&"enter"==t.key?(this.replaceSelectedWords("**"),!1):t.ctrlKey&&"b"==t.key?(this.replaceSelectedWords("**"),!1):t.ctrlKey&&"u"==t.key?(this.replaceSelectedWords("++"),!1):t.ctrlKey&&"i"==t.key?(this.funcBtn("italic"),!1):t.ctrlKey&&"s"==t.key?(this.funcBtn("save"),!1):t.ctrlKey&&"1"==t.key?(this.funcBtn("h1"),!1):t.ctrlKey&&"2"==t.key?(this.funcBtn("h2"),!1):t.ctrlKey&&"3"==t.key?(this.funcBtn("h3"),!1):t.ctrlKey&&"4"==t.key?(this.funcBtn("h4"),!1):t.ctrlKey&&"5"==t.key?(this.funcBtn("h5"),!1):t.ctrlKey&&"6"==t.key?(this.funcBtn("h6"),!1):t.ctrlKey&&"]"==t.key?(this.funcBtn("view"),!1):void 0})},handleNodeClick(t,e,n){0==t.isDir&&ipcRenderer.send("getFileData",t.filepath)},insertText(t){document.execCommand("insertText",!1,t)},handleContextMenuClick(t){}}}),k=m,v=(n("b415"),Object(a["a"])(k,f,d,!1,null,"4667cb82",null)),g=v.exports;i["default"].use(u["a"]);var w=new u["a"]({routes:[{path:"/",name:"home",component:g}]}),_=n("2f62");i["default"].use(_["a"]);var x=new _["a"].Store({state:{},mutations:{},actions:{}}),C=n("5c96"),S=n.n(C);n("0fae");i["default"].config.productionTip=!1,i["default"].use(S.a),new i["default"]({router:w,store:x,render:function(t){return t(o)}}).$mount("#app")},"5c48":function(t,e,n){},"7c55":function(t,e,n){"use strict";var i=n("5c48"),s=n.n(i);s.a},b415:function(t,e,n){"use strict";var i=n("02b1"),s=n.n(i);s.a}});
//# sourceMappingURL=app.js.map