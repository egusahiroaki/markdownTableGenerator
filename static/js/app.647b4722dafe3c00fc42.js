webpackJsonp([1],{"4fwg":function(t,e){},M93x:function(t,e,s){"use strict";function n(t){s("4fwg")}var l=s("xJD8"),i=s("Oz8N"),a=s("VU/8"),o=n,r=a(l.a,i.a,o,null,null);e.a=r.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),l=s("M93x"),i=s("YaEn"),a=s("q8zI"),o=(s.n(a),s("zL8q")),r=s.n(o);n.default.use(r.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:i.a,render:function(t){return t(l.a)}})},Oz8N:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("h1",[t._v("\n      Markdown Table Generator\n    ")]),t._v(" "),s("el-radio-group",{staticStyle:{"margin-bottom":"10px"},attrs:{size:"small"},on:{change:t.changeLayout},model:{value:t.labelPosition,callback:function(e){t.labelPosition=e},expression:"labelPosition"}},[s("el-radio-button",{attrs:{label:"left"}},[t._v("Left")]),t._v(" "),s("el-radio-button",{attrs:{label:"center"}},[t._v("Center")]),t._v(" "),s("el-radio-button",{attrs:{label:"right"}},[t._v("Right")])],1),t._v(" "),s("div",[s("el-input-number",{attrs:{min:2,size:"small"},on:{change:t.changeRow},model:{value:t.rowNum,callback:function(e){t.rowNum=e},expression:"rowNum"}}),t._v(" "),s("el-input-number",{attrs:{min:2,size:"small"},on:{change:t.changeCol},model:{value:t.colNum,callback:function(e){t.colNum=e},expression:"colNum"}}),t._v(" "),s("el-button",{attrs:{type:"small"},on:{click:t.clearTable}},[t._v("Clear Table")])],1),t._v(" "),s("div",[s("el-button",{attrs:{type:"small"},on:{click:t.insertColumnLeft}},[t._v("Insert Column to the Left")]),t._v(" "),s("el-button",{attrs:{type:"small"},on:{click:t.insertColumnRight}},[t._v("Insert Column to the Right")])],1),t._v(" "),s("table",[s("tr",[s("td",{staticClass:"outline header"}),t._v(" "),t._l(t.currentRowNum,function(e,n){return s("td",{staticClass:"outline header"},[t._v("\n            "+t._s(t._f("convertAlphabet")(n))+"\n          ")])})],2),t._v(" "),t._l(t.currentValue,function(e,n){return s("tr",[s("td",{staticClass:"outline"}),t._v(" "),t._l(e,function(e,l){return s("td",{class:{active:e.select},style:{width:t.columnWidths[l]+"px"},on:{click:function(s){t.selectValue(e,n,l)},keyup:function(s){if(!("button"in s)&&t._k(s.keyCode,"enter",13))return null;t.submit(e)}}},[e.edit?t._e():s("div",{staticClass:"display",domProps:{textContent:t._s(e.text)},on:{click:function(t){e.edit=!0}}}),t._v(" "),e.edit?s("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"cell.text"},{name:"focus",rawName:"v-focus"}],ref:"textInput",refInFor:!0,attrs:{onfocus:"this.style.width = ((this.value.length + 1) * 8) + 'px';",type:"text"},domProps:{value:e.text},on:{input:[function(t){t.target.composing||(e.text=t.target.value)},function(e){t.inputCell(e,n,l)}],blur:function(t){e.edit=!1},keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"tab",9))return null;t.nextCell(e)}}}):t._e()])})],2)})],2),t._v(" "),s("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",icon:"document"},on:{click:t.copyToClipBoard}},[t._v("Copy to ClipBoard")]),t._v(" "),s("div",[s("pre",[t._v("        "),s("code",{attrs:{id:"mdArea"}},[t._v("\n          "+t._s(t.generateMdTable)+"\n        ")]),t._v("\n      ")])])],1)},l=[],i={render:n,staticRenderFns:l};e.a=i},YaEn:function(t,e,s){"use strict";var n=s("7+uW"),l=s("/ocq"),i=s("qSdX");n.default.use(l.a),e.a=new l.a({routes:[{path:"/",name:"Hello",component:i.a}]})},exPH:function(t,e){},iZUp:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],i={render:n,staticRenderFns:l};e.a=i},pMZz:function(t,e,s){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},q8zI:function(t,e){},qSdX:function(t,e,s){"use strict";function n(t){s("exPH")}var l=s("pMZz"),i=s("iZUp"),a=s("VU/8"),o=n,r=a(l.a,i.a,o,"data-v-42216f61",null);e.a=r.exports},xJD8:function(t,e,s){"use strict";var n=s("7+uW"),l=s("DAYN"),i=s.n(l),a={inserted:function(t){n.default.nextTick(function(){t.focus()})}};e.a={name:"app",components:{draggable:i.a},data:function(){return{labelPosition:"center",beforeRowNum:3,beforeColNum:3,rowNum:3,colNum:3,selectY:0,selectX:0,cellSelectStatus:0,values:[[{text:"",edit:!1,width:20,select:!1},{text:"",edit:!1,width:20,select:!1},{text:"",edit:!1,width:20,select:!1}],[{text:"",edit:!1,width:20,select:!1},{text:"",edit:!1,width:20,select:!1},{text:"",edit:!1,width:20,select:!1}],[{text:"",edit:!1,width:20,select:!1},{text:"",edit:!1,width:20,select:!1},{text:"",edit:!1,width:20,select:!1}]],valuesCache:[]}},filters:{convertAlphabet:function(t){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[t]}},computed:{currentValue:function(){return this.values},currentRowNum:function(){return this.values[0]},columnWidths:function(){return this.values[0].map(function(t){return t.width})},generateMdTable:function(){for(var t="\n",e="|",s=0;s<this.values[0].length;s++)e+=" "+this.values[0][s].text+" |";t+=e+"\n";for(var n="left"===this.labelPosition?"|:":"|",l=0;l<this.values[0].length;l++)switch(this.labelPosition){case"left":n+=l>0?":":"",n+="-".repeat(this.values[0][l].text.length+1)+"--|";break;case"center":n+="-".repeat(this.values[0][l].text.length+1)+"--|";break;case"right":n+="-".repeat(this.values[0][l].text.length+1)+"--:|"}t+=n+"\n";for(var i=1;i<this.values.length;i++){for(var a="|",o=0;o<this.values[i].length;o++)a+=" "+this.values[i][o].text+" |";t+=a+"\n"}return t+=""}},methods:{changeLayout:function(){console.log(this.labelPosition)},changeRow:function(t){if(this.beforeRowNum=this.rowNum,t>this.beforeRowNum){for(var e=0;e<t-this.beforeRowNum;e++){for(var s=[],n=0;n<this.colNum;n++)s.push({text:"",edit:!1,width:20,select:!1});this.values.push(s)}this.rowNum++}else{for(var l=0;l<this.beforeRowNum-t;l++)this.values.pop();this.selectY>=t&&(this.values[t-1][this.selectX].select=!0,this.selectY=t-1),this.rowNum--}},changeCol:function(t){var e=this;this.beforeColNum=this.colNum,t>this.beforeColNum?this.values.forEach(function(s){for(var n=0;n<t-e.beforeColNum;n++)s.push({text:"",edit:!1,width:20,select:!1})}):(this.selectX===t&&(this.selectX-=1,this.values[this.selectY][t-1].select=!0),this.values.forEach(function(s){for(var n=0;n<e.beforeColNum-t;n++)s.pop()})),t<this.selectX&&(this.values[this.selectY][t].select=!0)},importCSV:function(t){console.log(t);var e=new XMLHttpRequest;e.open("get",t,!0),e.send(null),e.onload=function(){console.log(e.responseText)}},clearTable:function(){this.values.forEach(function(t){t.map(function(t){t.text="",t.edit=!1})})},insertColumnLeft:function(){var t=this;this.values.forEach(function(e){0===t.selectX?e.unshift({text:"",edit:!1,width:20,select:!1}):e.splice(t.selectX,0,{text:"",edit:!1,width:20,select:!1})}),this.selectX++,this.colNum++},insertColumnRight:function(){var t=this;this.values.forEach(function(e){e.splice(t.selectX+1,0,{text:"",edit:!1,width:20,select:!1})}),this.colNum++},nextCell:function(t){},selectValue:function(t,e,s){if(e===this.selectY&&s===this.selectX||(this.cellSelectStatus=0,this.values[this.selectY][this.selectX].select=!1),0===this.cellSelectStatus)return this.selectY=e,this.selectX=s,this.cellSelectStatus++,t.select=!0,void(t.edit=!1);e===this.selectY&&s===this.selectX?(this.cellSelectStatus++,""===t.text&&2===this.cellSelectStatus&&(t.edit=!0)):this.cellSelectStatus=0},inputCell:function(t,e,s){var n=8*(t.target.value.length+1),l=n+"px";t.target.style.width=l,t.target.parentNode.style.width=l,this.values[0].map(function(t,e){e===s&&(t.width=n)})},submit:function(t){t.edit=!t.edit},copyToClipBoard:function(){var t=document.querySelector("#mdArea"),e=document.createRange();e.selectNode(t),window.getSelection().removeAllRanges(),window.getSelection().addRange(e),document.execCommand("copy"),this.$message({message:"Copy Success",type:"success",duration:1e3})}},directives:{focus:a}}}},["NHnr"]);
//# sourceMappingURL=app.647b4722dafe3c00fc42.js.map