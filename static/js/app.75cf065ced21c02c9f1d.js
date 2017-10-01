webpackJsonp([1],{"4fwg":function(t,e){},M93x:function(t,e,l){"use strict";function n(t){l("4fwg")}var o=l("xJD8"),s=l("Oz8N"),a=l("VU/8"),u=n,i=a(o.a,s.a,u,null,null);e.a=i.exports},NHnr:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l("7+uW"),o=l("M93x"),s=l("YaEn"),a=l("q8zI"),u=(l.n(a),l("zL8q")),i=l.n(u);n.default.use(i.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:s.a,render:function(t){return t(o.a)}})},Oz8N:function(t,e,l){"use strict";var n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"app"}},[l("h1",[t._v("\n      Markdown Table Generator\n    ")]),t._v(" "),l("el-radio-group",{staticStyle:{"margin-bottom":"10px"},attrs:{size:"small"},on:{change:t.changeLayout},model:{value:t.labelPosition,callback:function(e){t.labelPosition=e},expression:"labelPosition"}},[l("el-radio-button",{attrs:{label:"left"}},[t._v("Left")]),t._v(" "),l("el-radio-button",{attrs:{label:"center"}},[t._v("Center")]),t._v(" "),l("el-radio-button",{attrs:{label:"right"}},[t._v("Right")])],1),t._v(" "),l("div",[l("el-input-number",{attrs:{min:2,size:"small"},on:{change:t.changeRow},model:{value:t.rowNum,callback:function(e){t.rowNum=e},expression:"rowNum"}}),t._v(" "),l("el-input-number",{attrs:{min:2,size:"small"},on:{change:t.changeCol},model:{value:t.colNum,callback:function(e){t.colNum=e},expression:"colNum"}}),t._v(" "),l("el-button",{attrs:{type:"small"},on:{click:t.clearTable}},[t._v("Clear Table")])],1),t._v(" "),l("div",[l("el-button",{attrs:{type:"small"},on:{click:t.insertColumnLeft}},[t._v("Insert Column to the Left")]),t._v(" "),l("el-button",{attrs:{type:"small"},on:{click:t.insertColumnRight}},[t._v("Insert Column to the Right")])],1),t._v(" "),l("table",[l("tr",[l("td",{staticClass:"outline header"}),t._v(" "),t._l(t.rowNum,function(t){return l("td",{staticClass:"outline header"})})],2),t._v(" "),t._l(t.currentValue,function(e,n){return l("tr",[l("td",{staticClass:"outline"}),t._v(" "),t._l(e,function(e,o){return l("td",{class:{active:e.select},on:{click:function(l){t.selectValue(e,n,o)},keyup:function(l){if(!("button"in l)&&t._k(l.keyCode,"enter",13))return null;t.submit(e)}}},[e.edit?t._e():l("div",{staticClass:"display",domProps:{textContent:t._s(e.text)},on:{click:function(t){e.edit=!0}}}),t._v(" "),e.edit?l("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"cell.text"},{name:"focus",rawName:"v-focus"}],ref:"textInput",refInFor:!0,attrs:{onfocus:"this.style.width = ((this.value.length + 1) * 8) + 'px';",type:"text"},domProps:{value:e.text},on:{input:[function(t){t.target.composing||(e.text=t.target.value)},t.inputCell],blur:function(t){e.edit=!1},keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"tab",9))return null;t.nextCell(e)}}}):t._e()])})],2)})],2),t._v(" "),l("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",icon:"document"},on:{click:t.copyToClipBoard}},[t._v("Copy to ClipBoard")]),t._v(" "),l("div",[l("pre",[t._v("        "),l("code",{attrs:{id:"mdArea"}},[t._v("\n          "+t._s(t.generateMdTable)+"\n        ")]),t._v("\n      ")])])],1)},o=[],s={render:n,staticRenderFns:o};e.a=s},YaEn:function(t,e,l){"use strict";var n=l("7+uW"),o=l("/ocq"),s=l("qSdX");n.default.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Hello",component:s.a}]})},exPH:function(t,e){},iZUp:function(t,e,l){"use strict";var n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"hello"},[l("h1",[t._v(t._s(t.msg))]),t._v(" "),l("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),l("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},o=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",[l("li",[l("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),l("br"),t._v(" "),l("li",[l("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",[l("li",[l("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),l("li",[l("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),l("li",[l("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],s={render:n,staticRenderFns:o};e.a=s},pMZz:function(t,e,l){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},q8zI:function(t,e){},qSdX:function(t,e,l){"use strict";function n(t){l("exPH")}var o=l("pMZz"),s=l("iZUp"),a=l("VU/8"),u=n,i=a(o.a,s.a,u,"data-v-42216f61",null);e.a=i.exports},xJD8:function(t,e,l){"use strict";var n=l("7+uW"),o=l("DAYN"),s=l.n(o),a={inserted:function(t){n.default.nextTick(function(){t.focus()})}};e.a={name:"app",components:{draggable:s.a},data:function(){return{labelPosition:"center",beforeRowNum:3,beforeColNum:3,rowNum:3,colNum:3,curSelectRowNum:0,curSelectColNum:0,cellSelectStatus:0,values:[[{text:"",edit:!1,select:!1},{text:"",edit:!1,select:!1},{text:"",edit:!1,select:!1}],[{text:"",edit:!1,select:!1},{text:"",edit:!1,select:!1},{text:"",edit:!1,select:!1}],[{text:"",edit:!1,select:!1},{text:"",edit:!1,select:!1},{text:"",edit:!1,select:!1}]],valuesCache:[]}},computed:{currentValue:function(){return this.values},generateMdTable:function(){for(var t="\n",e="|",l=0;l<this.values[0].length;l++)e+=" "+this.values[0][l].text+" |";t+=e+"\n";for(var n="left"===this.labelPosition?"|:":"|",o=0;o<this.values[0].length;o++)switch(this.labelPosition){case"left":n+=o>0?":":"",n+="-".repeat(this.values[0][o].text.length+1)+"--|";break;case"center":n+="-".repeat(this.values[0][o].text.length+1)+"--|";break;case"right":n+="-".repeat(this.values[0][o].text.length+1)+"--:|"}t+=n+"\n";for(var s=1;s<this.values.length;s++){for(var a="|",u=0;u<this.values[s].length;u++)a+=" "+this.values[s][u].text+" |";t+=a+"\n"}return t+=""}},methods:{changeLayout:function(){console.log(this.labelPosition)},changeRow:function(t){if(this.beforeRowNum=this.rowNum,t>this.beforeRowNum)for(var e=0;e<t-this.beforeRowNum;e++){for(var l=[],n=0;n<this.colNum;n++)l.push({text:"",edit:!1,select:!1});this.values.push(l)}else for(var o=0;o<this.beforeRowNum-t;o++)this.values.pop()},changeCol:function(t){var e=this;this.beforeColNum=this.colNum,t>this.beforeColNum?this.values.forEach(function(l){for(var n=0;n<t-e.beforeColNum;n++)l.push({text:"",edit:!1,select:!1})}):(this.curSelectColNum===t&&(this.curSelectColNum-=1,this.values[this.curSelectRowNum][t-1].select=!0),this.values.forEach(function(l){for(var n=0;n<e.beforeColNum-t;n++)l.pop()}))},importCSV:function(t){console.log(t);var e=new XMLHttpRequest;e.open("get",t,!0),e.send(null),e.onload=function(){console.log(e.responseText)}},clearTable:function(){this.values.forEach(function(t){t.map(function(t){t.text="",t.edit=!1})})},insertColumnLeft:function(){var t=this;this.values.forEach(function(e){0===t.curSelectColNum?e.unshift({text:"",edit:!1,select:!1}):e.splice(t.curSelectColNum,0,{text:"",edit:!1,select:!1})}),this.curSelectColNum++,this.colNum++},insertColumnRight:function(){var t=this;this.values.forEach(function(e){e.splice(t.curSelectColNum+1,0,{text:"",edit:!1,select:!1})}),this.colNum++},nextCell:function(t){},selectValue:function(t,e,l){if(e===this.curSelectRowNum&&l===this.curSelectColNum||(this.cellSelectStatus=0,this.values[this.curSelectRowNum][this.curSelectColNum].select=!1),0===this.cellSelectStatus)return this.curSelectRowNum=e,this.curSelectColNum=l,this.cellSelectStatus++,t.select=!0,void(t.edit=!1);e===this.curSelectRowNum&&l===this.curSelectColNum?(this.cellSelectStatus++,""===t.text&&2===this.cellSelectStatus&&(t.edit=!0)):this.cellSelectStatus=0},inputCell:function(t){var e=(t.type,t.target),l=8*(e.value.length+1)+"px";e.style.width=l,e.parentNode.style.width=l},submit:function(t){t.edit=!t.edit},copyToClipBoard:function(){var t=document.querySelector("#mdArea"),e=document.createRange();e.selectNode(t),window.getSelection().removeAllRanges(),window.getSelection().addRange(e),document.execCommand("copy"),this.$message({message:"Copy Success",type:"success",duration:1e3})}},directives:{focus:a}}}},["NHnr"]);
//# sourceMappingURL=app.75cf065ced21c02c9f1d.js.map