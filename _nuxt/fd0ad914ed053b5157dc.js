(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{276:function(t,e){},277:function(t,e){},315:function(t,e,n){"use strict";n.r(e);n(17);var r=n(356);e.default=function(t){return new Promise(function(e,n){var image=new Image;image.onload=function(){var canvas=document.createElement("canvas"),t=canvas.getContext("2d");canvas.width=image.width,canvas.height=image.height,t.drawImage(image,0,0);try{var o=t.getImageData(0,0,image.width,image.height),c=r(o.data,o.width,o.height);e(c)}catch(t){n(t)}},image.src=t})}},316:function(t,e,n){var content=n(696);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("d21af4aa",content,!0,{sourceMap:!1})},695:function(t,e,n){"use strict";var r=n(316);n.n(r).a},696:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,".qrcode_generation .upfile{width:100%}.qrcode_generation .qrcode{display:block;max-width:100%;margin:0 auto}",""])},810:function(t,e,n){"use strict";n.r(e);n(66),n(67),n(17);var r=n(273),o=n(315).default,c={name:"QrcodeGeneration",head:function(){return this.$store.state.currentTool.head},data:function(){return{n:"",qrcodeText:"",dataUrl:"",rdata:"",requestIn:!1}},methods:{readerQrcode:function(t){var e=this;this.dataUrl="",this.rdata="";var n=t.target.files;if(!n.length)return!1;var r=URL.createObjectURL(n[0]);o(r).then(function(t){e.rdata=t.data}).catch(function(){e.$modal.show("dialog",{title:"识别失败",text:"ERROR: 可能不是一个二维码，或由于二维码内容过于复杂"})})},generation:function(){if(this.requestIn=!0,this.dataUrl="",this.rdata="",this.qrcodeText)try{var t=r.imageSync(this.qrcodeText,{type:"png",size:10});this.dataUrl="data:image/png;base64,"+t.toString("base64"),this.requestIn=!1}catch(t){this.requestIn=!1,this.$modal.show("dialog",{title:"生成失败",text:"ERROR: ".concat(t)})}else this.requestIn=!1,this.$modal.show("dialog",{title:"生成失败",text:"ERROR: 请输入内容"})}}},l=(n(695),n(2)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qrcode_generation"},[n("nya-container",{attrs:{title:"二维码生成/识别"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{label:"请输入要生成的内容",placeholder:"https://imiku.me",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.generation(e)}},model:{value:t.qrcodeText,callback:function(e){t.qrcodeText="string"==typeof e?e.trim():e},expression:"qrcodeText"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.generation}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1),t._v(" "),n("br"),t._v(" "),n("nya-input",{staticClass:"upfile",attrs:{type:"file",name:"qrcode",accept:"image/*",label:"请选择要识别的二维码图片",placeholder:"点击这里上传文件"},on:{change:t.readerQrcode},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}})],1),t._v(" "),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.dataUrl||t.rdata,expression:"dataUrl || rdata"}],attrs:{title:"获取成功"}},[t.rdata?n("pre",[t._v(t._s(t.rdata))]):n("img",{staticClass:"qrcode",attrs:{src:t.dataUrl,alt:"QRCode"}})]),t._v(" "),n("nya-container",{attrs:{title:"Explain"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("本站仅提供简单的二维码生成，如有其他样式需求可自行选择其他工具")]),t._v(" "),n("li",[t._v("二维码识别若出现错误，可能由于二维码内容过于复杂或不是一个二维码")])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);