(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{310:function(e,t,n){var content=n(682);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("4514cd46",content,!0,{sourceMap:!1})},680:function(e,t,n){"use strict";n.r(t);n(139),n(32),n(91),n(66),n(67),n(17);var r={A:"01",B:"1000",C:"1010",D:"100",E:"0",F:"0010",G:"110",H:"0000",I:"00",J:"0111",K:"101",L:"0100",M:"11",N:"10",O:"111",P:"0110",Q:"1101",R:"010",S:"000",T:"1",U:"001",V:"0001",W:"011",X:"1001",Y:"1011",Z:"1100",0:"11111",1:"01111",2:"00111",3:"00011",4:"00001",5:"00000",6:"10000",7:"11000",8:"11100",9:"11110",".":"010101",",":"110011","?":"001100","'":"011110","!":"101011","/":"10010","(":"10110",")":"101101","&":"01000",":":"111000",";":"101010","=":"10001","+":"01010","-":"100001",_:"001101",'"':"010010",$:"0001001","@":"011010"},o={};for(var l in r)o[r[l]]=l;function c(option){return[(option=option||{}).space||"/",option.short||".",option.long||"-"]}function f(e){for(var t=[],i=0;i<e.length;i++)t[i]=("00"+e.charCodeAt(i).toString(16)).slice(-4);return t=t.join(""),t=parseInt(t,16).toString(2)}function d(e){return e=parseInt(e,2),isNaN(e)?"":unescape("%u"+e.toString(16))}t.default={encode:function(e,option){option=c(option);for(var t,n,o=[],i=0,l=(e=e.replace(/\s+/g,"").toLocaleUpperCase().split("")).length;i<l;i++)t=e[i],(n=r[t])||(n=f(t)),o.push(n.replace(/0/g,option[1]).replace(/1/g,option[2]));return o.join(option[0])},decode:function(e,option){option=c(option);for(var t,n,r=[],i=0,l=(e=e.split(option[0])).length;i<l;i++)t=e[i].replace(/\s+/g,"").replace(new RegExp("\\"+option[1],"g"),"0").replace(new RegExp("\\"+option[2],"g"),"1"),(n=o[t])||(n=d(t)),r.push(n);return r.join("")}}},681:function(e,t,n){"use strict";var r=n(310);n.n(r).a},682:function(e,t,n){(e.exports=n(8)(!1)).push([e.i,".morse .nya-input{width:100%}.morse .nya-checkbox{margin-top:.9375rem}",""])},802:function(e,t,n){"use strict";n.r(t);var r=n(680).default,o={name:"Morse",head:function(){return this.$store.state.currentTool.head},data:function(){return{value:"",downloadUrl:"",requestIn:!1,type:!1}},computed:{result:function(){return this.type?r.decode(this.value):r.encode(this.value)}},methods:{}},l=(n(681),n(2)),component=Object(l.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"morse"},[n("nya-container",{attrs:{title:"摩斯电码转换"}},[n("nya-input",{attrs:{label:"请输入摩斯电码",placeholder:"...././.-../.-../---/--/../-.-/..-/-/---/---/.-../...",autocomplete:"off",autofocus:""},model:{value:e.value,callback:function(t){e.value="string"==typeof t?t.trim():t},expression:"value"}}),e._v(" "),n("nya-checkbox",{attrs:{label:"解码"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1),e._v(" "),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:e.result,expression:"result"}],attrs:{title:"转换结果"}},[n("pre",[e._v(e._s(e.result))])]),e._v(" "),n("nya-container",{attrs:{title:"Explain"}},[n("ul",{staticClass:"nya-list"},[n("li",[n("b",[e._v("如果内容包含中文，仅在本平台使用，可能其他人将无法识别")])])])])],1)},[],!1,null,null,null);t.default=component.exports}}]);