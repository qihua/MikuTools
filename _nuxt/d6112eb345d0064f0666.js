(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{281:function(t,e,n){var content=n(582);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("2e27683a",content,!0,{sourceMap:!1})},581:function(t,e,n){"use strict";var o=n(281);n.n(o).a},582:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"",""])},775:function(t,e,n){"use strict";n.r(e);n(134);var o={name:"JypornVideoDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{videoLink:"",downloadUrl:"",requestIn:!1}},methods:{getVideo:function(){var t=this;if(this.requestIn)return!1;var e=/(view_video\.php)\?(viewkey=\w+)/;e.test(this.videoLink)?(this.requestIn=!0,this.downloadUrl="",this.$axios.post("/91porn_video_downloader",{url:"http://91porn.com/".concat(this.videoLink.match(e)[0])}).then(function(e){t.requestIn=!1,t.downloadUrl=e.data.data}).catch(function(e){t.requestIn=!1,t.$modal.show("dialog",{title:"下载失败",text:"ERROR: ".concat(e)})})):this.$modal.show("dialog",{title:"下载失败",text:"ERROR: 请输入正确的链接"})}}},r=(n(581),n(2)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_91porn_video_downloader"},[n("nya-container",{attrs:{title:"91porn视频下载"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{label:"请输入视频链接",placeholder:"http://91porn.com/view_video.php?viewkey=bbbc5513b4982d4d9c1a",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getVideo(e)}},model:{value:t.videoLink,callback:function(e){t.videoLink="string"==typeof e?e.trim():e},expression:"videoLink"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.getVideo}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),t.downloadUrl?n("nya-container",{attrs:{title:"获取成功"}},[n("a",{attrs:{href:t.downloadUrl,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.downloadUrl)+"\n        ")])]):t._e()],1)},[],!1,null,null,null);e.default=component.exports}}]);