(function(t){function e(e){for(var a,n,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0024":function(t,e,s){},"0cd8":function(t,e,s){},"14eb":function(t,e,s){"use strict";s("d639")},2314:function(t,e,s){"use strict";s("6d48")},2913:function(t,e,s){},"33b2":function(t,e,s){t.exports=s.p+"static/img/4.0c280aef.png"},"3bb7":function(t,e,s){},"495f":function(t,e,s){"use strict";s("7a44")},5314:function(t,e,s){"use strict";s("0024")},"53ea":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"page"},[e("HeadBar"),e("router-view"),e("el-backtop",{attrs:{right:400,bottom:150}})],1)])},i=[],n=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("span",{staticClass:"logo",on:{click:t.goIndex}},[t._v("403实验室-PaperShare")]),e("div",{staticClass:"day-of-word"},[e("DayOfWord")],1),e("div",{staticClass:"btns"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}]},[e("a",{staticClass:"login-btn",on:{click:t.goLogin}},[t._v("登录")]),e("a",{staticClass:"login-btn",on:{click:t.goSignUp}},[t._v("注册")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"user-box"},[e("span",{staticClass:"user"},[t._v(t._s(t.currUsername))]),e("div",{staticClass:"dropdown-content"},[e("a",{on:{click:t.goLogout}},[t._v("登出")])])])])])},r=[],c=(s("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"word-of-day",attrs:{title:t.wordOfDay},on:{click:t.getWordOfDay}},[t._v(t._s(t.wordOfDay))])}),l=[],u={name:"DayOfWord",data(){return{wordOfDay:""}},created(){this.getWordOfDay()},methods:{async getWordOfDay(){console.log("执行了");let t=await this.$axios.get("https://v.api.aa1.cn/api/yiyan/index.php");const e="<p>(.*)</p>";this.wordOfDay=t.match(e)[1]}}},d=u,m=(s("14eb"),s("2877")),p=Object(m["a"])(d,c,l,!1,null,"239238a1",null),h=p.exports,g={name:"HeadBar",components:{DayOfWord:h},created(){this.$store.commit("init")},mounted(){this.$bus.$on("pageNumber",t=>{this.pageNumber=t}),this.$bus.$on("pageSize",t=>{this.pageSize=t})},computed:{isLogin(){return this.$store.getters.isLogin},currUsername(){return console.log(this.$store.getters.username),this.$store.getters.username}},methods:{goIndex(){this.$router.push({name:"Home"})},goLogin(){this.$router.push({name:"Login"})},goSignUp(){this.$router.push({name:"SignUp"})},goLogout(){this.$store.commit("logout")}}},v=g,f=(s("6730"),Object(m["a"])(v,n,r,!1,null,"6246f19d",null)),C=f.exports,_={components:{HeadBar:C}},y=_,b=(s("9cf6"),Object(m["a"])(y,o,i,!1,null,null,null)),w=b.exports,x=s("8c4f"),S=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("SideBar")],1),e("div",{staticClass:"center"},[e("div",{staticClass:"c-l-header"},[e("div",{staticClass:"new btn-iconfont",class:{active:t.timeOrder},on:{click:function(e){return t.selectOrder("time")}}},[e("i",{staticClass:"iconfont icon-polygonred"}),t._v("New ")]),e("div",{staticClass:"top btn-iconfont",class:{active:t.scoreOrder},on:{click:function(e){return t.selectOrder("score")}}},[e("i",{staticClass:"iconfont icon-top"}),t._v("Score ")]),e("div",{staticClass:"search"},[e("i",{staticClass:"search-icon el-icon-search",on:{click:t.searchPost}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"s-input",attrs:{type:"text",placeholder:"文章搜索"},domProps:{value:t.keyword},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchPost.apply(null,arguments)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),e("div",{staticClass:"publish-btn",on:{click:t.goPublish}},[t._v("发表")])]),e("ul",{staticClass:"c-l-list"},[t._l(t.postList,(function(s){return e("li",{key:s.post_id,staticClass:"c-l-item"},[e("div",{staticClass:"post"},[e("a",{staticClass:"vote"},[e("span",{staticClass:"iconfont icon-up",on:{click:function(e){return t.vote(s.post_id,1)}}})]),e("span",{staticClass:"text"},[t._v(t._s(s.vote_num))]),e("a",{staticClass:"vote"},[e("span",{staticClass:"iconfont icon-down",on:{click:function(e){return t.vote(s.post_id,-1)}}})])]),e("div",{staticClass:"l-container",on:{click:function(e){return t.goDetail(s.post_id)}}},[e("h4",{staticClass:"con-title"},[t._v(t._s(s.title))]),e("div",{staticClass:"con-memo"},[e("p",[t._v(t._s(s.content))])])])])})),e("div",{staticClass:"pagination-block"},[e("el-pagination",{attrs:{"current-page":1,"page-sizes":[5,10,20,30],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageTotal.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],2)]),e("div",{staticClass:"right"},[e("div",{staticClass:"run-time-container"},[e("TimeMeter")],1)])])])},k=[],O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-bar-container"},[e("div",{staticClass:"title"},[e("el-avatar",{attrs:{src:"https://p9.itc.cn/q_70/images03/20220616/67778138b9524df38d5204142dc93dec.jpeg"}}),e("el-divider",[e("i",{staticClass:"el-icon-user-solid"})])],1),e("el-carousel",{attrs:{"indicator-position":"outside"}},t._l(t.imgOptions,(function(t){return e("el-carousel-item",{key:t.id},[e("img",{staticStyle:{"object-fit":"cover",width:"100%",height:"100%"},attrs:{src:t.path,alt:"图片",width:"300px"}})])})),1),e("div",{staticClass:"message"},[e("ul",[e("li",[e("el-tag",{attrs:{type:"success"}},[e("i",{staticClass:"el-icon-grape"}),t._v(" 闽南师范大学计算机学院403实验室 ")])],1),e("li",[e("el-tag",{attrs:{type:"warning"}},[e("i",{staticClass:"el-icon-ice-tea"}),t._v(" https://cs.mnnu.edu.cn/ ")])],1),e("li")])]),e("div",{staticClass:"mine"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[e("span",[t._v("关于403")])]),e("div",{staticClass:"text item"},[t._v(" 闽南师范大学计算机学院砺志楼403 ")])])],1),e("el-calendar",{staticClass:"calendar",attrs:{width:"300px"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},L=[],P={name:"SideBar",data(){return{imgOptions:[{id:1,path:s("33b2")},{id:2,path:s("593c")},{id:3,path:s("6800")},{id:4,path:s("98a8")}],value:new Date,value2:null,colors:["#99A9BF","#F7BA2A","#FF9900"]}}},$=P,D=(s("751a"),Object(m["a"])($,O,L,!1,null,"58a6d263",null)),j=D.exports,z=function(){var t=this,e=t._self._c;return e("div",[e("el-card",[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"web-status"},[t._v("🚀 网站状况")])]),e("div",{staticClass:"run-time"})])],1)},T=[];function N(t,e){e=e||"";let s=new Date(t),a=s.getFullYear(),o=s.getMonth()+1,i=s.getDate(),n=s.getHours(),r=s.getMinutes(),c=s.getSeconds(),l=s.getMilliseconds(),u={year:a,month:o,day:i,hour:n,minute:r,second:c,milliSecond:l};return e?(e=e.trim(),"YYYY-MM-DD hh:mm:ss"===e?a+"-"+o+"-"+i+" "+n+":"+r+":"+c:"YYYY/MM/DD hh:mm:ss"===e?a+"/"+o+"/"+i+" "+n+":"+r+":"+c:"YYYY-MM-DD"===e?a+"-"+o+"-"+i:"YYYY/MM/DD"===e?a+"/"+o+"/"+i:"hh:mm:ss"===e?n+":"+r+":"+c:"hh-mm-ss"===e?n+"-"+r+"-"+c:t):u}function M(t,e,s){return s=s||0,(Array(e).join(s)+t).slice(-e)}function F(t,e){let s=new Array(0,0,0,0,0),a=31536e3,o=86400,i=3600,n=60,r=0;if(t)return e&&e.indexOf("Y")>-1&&t>=a&&(s[0]=parseInt(t/a),t%=a),t>=o&&(s[1]=parseInt(t/o),t%=o),t>=i&&(s[2]=parseInt(t/i),t%=i),t>=n&&(s[3]=parseInt(t/n),t%=n),t>r&&(s[4]=t),s}function I(t,e,s,a,o,i){let n=Math.round(new Date(Date.UTC(t,e-1,s,a,o,i)).getTime()/1e3),r=Math.round(((new Date).getTime()+288e5)/1e3);return F(r-n)}function Y(t,e){return e?"Y-D h:m:s"===e?t[0]+"年"+t[1]+"天"+t[2]+"时"+t[3]+"分"+t[4]+"秒":"D h:m:s"===e?t[1]+"天"+t[2]+"时"+t[3]+"分"+t[4]+"秒":void 0:t[1]+"天"+t[2]+"时"+t[3]+"分"+t[4]+"秒"}function R({el:t,timeStamp:e,desc:s,year:a,month:o,day:i,hour:n,minute:r,second:c,flag:l=!0,format:u}){if(s=s||"",e){let t=N(e);a=t.year,o=t.month,i=t.day,n=t.hour,r=t.minute,c=t.second}if(!l||!t)return I(a,o,i,n,r,c);{let e=document.querySelector(t);setInterval(()=>{let t=I(a,o,i,n,r,c);t[2]=M(t[2],2,0),t[3]=M(t[3],2,0),t[4]=M(t[4],2,0),e.innerText=s+Y(t,u)},1e3)}}var U={name:"TimeMeter",data(){return{runTime:new Date("2024-3-25")}},mounted(){this.init()},methods:{init(){R({el:".run-time",timeStamp:this.runTime.getTime(),desc:"运行时间："})}}},E=U,B=(s("2314"),Object(m["a"])(E,z,T,!1,null,"527adbe0",null)),A=B.exports,H={name:"Home",components:{TimeMeter:A,SideBar:j},data(){return{order:"time",postList:[],pageNumber:1,pageSize:5,pageTotal:{},keyword:"",isSearch:!1}},methods:{selectOrder(t){this.order=t,this.getPostList()},handleCurrentChange(t){this.pageNumber=t,this.isSearch?this.searchPost():this.getPostList()},handleSizeChange(t){this.pageSize=t,this.isSearch?this.searchPost():this.getPostList()},goDetail(t){this.$router.push({name:"Content",params:{id:t}})},getPostList(){this.$axios({method:"get",url:"/posts2",params:{page:this.pageNumber,size:this.pageSize,order:this.order}}).then(t=>{console.log(t.data,222),1e3==t.code?(this.postList=t.data.list,this.pageTotal=t.data.page):console.log(t.msg)}).catch(t=>{console.log(t)})},goPublish(){this.$router.push({name:"Publish"})},vote(t,e){this.$axios({method:"post",url:"/vote",data:{post_id:t,direction:e}}).then(t=>{1e3==t.code?(console.log("vote success"),this.getPostList()):1009==t.code?a["default"].prototype.$message.error("请勿重复投票"):1010==t.code?a["default"].prototype.$message.error("已过投票时间"):(console.log(t.msg),a["default"].prototype.$message.error("请先登录"))}).catch(t=>{console.log(t)})},async searchPost(){if(!this.keyword)return this.isSearch=!1,void this.getPostList();this.isSearch=!0;const t=await this.$axios({method:"get",url:"/search",params:{page:this.pageNumber,size:this.pageSize,search:this.keyword}});1e3===t.code?(console.log(t.data),this.postList=t.data.list,this.pageTotal=t.data.page):console.log(t.message)}},mounted:function(){this.getPostList()},computed:{timeOrder(){return"time"==this.order},scoreOrder(){return"score"==this.order}}},q=H,W=(s("5314"),Object(m["a"])(q,S,k,!1,null,"318ae9b2",null)),J=W.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("div",{staticClass:"container"},[e("div",{staticClass:"post"},[e("a",{staticClass:"vote"},[e("span",{staticClass:"iconfont icon-up",on:{click:function(e){return t.vote(t.post.post_id,1)}}})]),e("span",{staticClass:"text"},[t._v(t._s(t.post.vote_num))]),e("a",{staticClass:"vote"},[e("span",{staticClass:"iconfont icon-down",on:{click:function(e){return t.vote(t.post.post_id,-1)}}})])]),e("div",{staticClass:"l-container"},[e("h4",{staticClass:"con-title"},[t._v(t._s(t.post.title))]),e("div",{staticClass:"con-info markdown-body",domProps:{innerHTML:t._s(t.post.content)}})])]),e("div",[e("button",{on:{click:t.downloadFile}},[t._v("下载附件")])]),e("Comment",{attrs:{sourceId:this.$route.params.id}})],1),e("div",{staticClass:"right"},[e("div",{staticClass:"topic-info"},[e("h5",{staticClass:"t-header"}),e("div",{staticClass:"t-info"},[e("a",{staticClass:"avatar"}),e("span",{staticClass:"topic-name"},[t._v("b/"+t._s(t.post.community.community_name))])]),e("p",{staticClass:"t-desc"},[t._v(t._s(t.post.community.introduction))]),e("p",{staticClass:"t-create-time"},[t._v(t._s(t.post.community.create_time))]),e("div",{staticClass:"date"},[t._v(t._s(t.create_time))]),e("button",{staticClass:"topic-btn",on:{click:function(e){return t.goCommunityDetail(t.post.community.community_id)}}},[t._v("JOIN")])])])])},K=[],Q=(s("88a7"),s("271a"),s("5494"),function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"SOHUCS",sid:t.sourceId}}),e("a",{attrs:{href:"#SOHUCS",id:"changyan_count_unit"}}),e("a",{attrs:{href:"#SOHUCS",id:"changyan_parti_unit"}})])}),V=[],X={name:"Comment",props:{sourceId:{type:Number,require:!1,default:-1}},mounted(){(function(){var t="cywE58eoF",e="prod_287c236820392be64661bae328651187",s=window.innerWidth||document.documentElement.clientWidth;if(s<1e3){var a=document.getElementsByTagName("head")[0]||document.head||document.documentElement,o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.id="changyan_mobile_js",o.src="https://cy-cdn.kuaizhan.com/upload/mobile/wap-js/changyan_mobile.js?client_id="+t+"&conf="+e,a.appendChild(o)}else{var i=function(t,e){var s=document.getElementsByTagName("head")[0]||document.head||document.documentElement,a=document.createElement("script");a.setAttribute("type","text/javascript"),a.setAttribute("charset","UTF-8"),a.setAttribute("src",t),"function"===typeof e&&(window.attachEvent?a.onreadystatechange=function(){var t=a.readyState;"loaded"!==t&&"complete"!==t||(a.onreadystatechange=null,e())}:a.onload=e),s.appendChild(a)};i("https://cy-cdn.kuaizhan.com/upload/changyan.js",(function(){window.changyan.api.config({appid:t,conf:e})}))}})()}},Z=X,tt=Object(m["a"])(Z,Q,V,!1,null,null,null),et=tt.exports,st={name:"Content",components:{Comment:et},data(){return{post:{}}},methods:{getPostDetail(){this.$axios({method:"get",url:"/post/"+this.$route.params.id}).then(t=>{if(console.log(1,t.data),1e3==t.code){let e=s("d4cd"),a=new e;this.post=t.data,this.post.content=a.render(this.post.content)}else console.log(t.msg)}).catch(t=>{console.log(t)})},vote(t,e){this.$axios({method:"post",url:"/vote",data:{post_id:t,direction:e}}).then(t=>{1e3==t.code?(console.log("vote success"),this.getPostDetail()):1009==t.code?a["default"].prototype.$message.error("请勿重复投票"):1010==t.code?a["default"].prototype.$message.error("已过投票时间"):(console.log(t.msg),a["default"].prototype.$message.error("请先登录"))}).catch(t=>{console.log(t)})},goCommunityDetail(t){this.$router.push({name:"Community",params:{id:t}})},downloadFile(){this.$axios({method:"get",url:"/download/"+this.post.file_name,responseType:"blob"}).then(t=>{console.log(t);const e=document.createElement("a"),s=new Blob([t]);e.style.display="none",e.href=URL.createObjectURL(s),e.download=this.post.file_name,document.body.appendChild(e),e.click(),document.body.removeChild(e)})}},mounted(){this.getPostDetail()}},at=st,ot=(s("63da"),Object(m["a"])(at,G,K,!1,null,"67c85dab",null)),it=ot.exports,nt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"center"},[e("ul",{staticClass:"c-l-list"},[t._l(t.postList,(function(s){return e("li",{key:s.post_id,staticClass:"c-l-item"},[e("div",{staticClass:"post"},[e("a",{staticClass:"vote"},[e("span",{staticClass:"iconfont icon-up",on:{click:function(e){return t.vote(s.post_id,1)}}})]),e("span",{staticClass:"text"},[t._v(t._s(s.vote_num))]),e("a",{staticClass:"vote"},[e("span",{staticClass:"iconfont icon-down",on:{click:function(e){return t.vote(s.post_id,-1)}}})])]),e("div",{staticClass:"l-container",on:{click:function(e){return t.goDetail(s.post_id)}}},[e("h4",{staticClass:"con-title"},[t._v(t._s(s.title))]),e("div",{staticClass:"con-memo"},[e("p",[t._v(t._s(s.content))])])])])})),e("div",{staticClass:"pagination-block"},[e("el-pagination",{attrs:{"current-page":1,"page-sizes":[5,10,20,30],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageTotal.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],2)]),e("div",{staticClass:"right"},[e("div",{staticClass:"topic-info"},[e("h5",{staticClass:"t-header"}),e("div",{staticClass:"t-info"},[e("a",{staticClass:"avatar"}),e("span",{staticClass:"topic-name"},[t._v("b/"+t._s(t.community.community_name))]),e("span",{staticClass:"publish",on:{click:t.goPublish}},[t._v("发表")])]),e("p",{staticClass:"t-desc"},[t._v(t._s(t.community.introduction))]),e("p",{staticClass:"t-create-time"},[t._v(t._s(t.community.create_time))])])])])},rt=[],ct={name:"Community",data(){return{postList:[],pageTotal:{},community:{},pageNumber:1,pageSize:5}},methods:{handleCurrentChange(t){this.pageNumber=t,this.getCommunityPostList()},handleSizeChange(t){this.pageSize=t,this.getCommunityPostList()},getCommunityDetail(){this.$axios({method:"get",url:"/community/"+this.$route.params.id}).then(t=>{console.log(t.data),1e3==t.code?this.community=t.data:console.log(t.msg)}).catch(t=>{console.log(t)})},getCommunityPostList(){this.$axios({method:"get",url:"/posts2",params:{community_id:this.$route.params.id,page:this.pageNumber,size:this.pageSize,order:"score"}}).then(t=>{console.log(1,t.data),1e3==t.code?(this.postList=t.data.list,this.pageTotal=t.data.page):console.log(t.msg)}).catch(t=>{console.log(t)})},vote(t,e){this.$axios({method:"post",url:"/vote",data:{post_id:t,direction:e}}).then(t=>{1e3==t.code?(console.log("vote success"),this.getCommunityPostList()):1009==t.code?a["default"].prototype.$message.error("请勿重复投票"):console.log(t.msg)}).catch(t=>{console.log(t)})},goDetail(t){this.$router.push({name:"Content",params:{id:t}})},goPublish(){this.$router.push({name:"Publish"})}},mounted(){this.getCommunityDetail(),this.getCommunityPostList()}},lt=ct,ut=(s("cedc"),Object(m["a"])(lt,nt,rt,!1,null,"b0b57bec",null)),dt=ut.exports,mt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"message-container"},[e("Comment",{attrs:{sourceId:-1}})],1)},pt=[],ht={name:"Message",components:{Comment:et}},gt=ht,vt=(s("495f"),Object(m["a"])(gt,mt,pt,!1,null,"4566b347",null)),ft=vt.exports,Ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("div",{staticClass:"post-name"},[t._v("我好想写点什么")]),e("div",{staticClass:"post-type"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectCommunity.community_name,expression:"selectCommunity.community_name"}],staticClass:"post-type-value",attrs:{type:"text",placeholder:"选择一个频道"},domProps:{value:t.selectCommunity.community_name},on:{click:function(e){return t.showCommunity()},input:function(e){e.target.composing||t.$set(t.selectCommunity,"community_name",e.target.value)}}}),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.showCommunityList,expression:"showCommunityList"}],staticClass:"post-type-options"},t._l(t.communityList,(function(s,a){return e("li",{key:s.id,staticClass:"post-type-cell",on:{click:function(e){return t.selected(a)}}},[t._v(" "+t._s(s.community_name)+" ")])})),0),e("i",{staticClass:"p-icon"})]),e("div",{staticClass:"post-sub-container"},[e("div",{staticClass:"post-sub-header"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"post-title",attrs:{id:"",cols:"30",rows:"10",placeholder:"标题"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),e("span",{staticClass:"textarea-num"},[t._v("100")])]),e("div",{staticClass:"post-text-con"},[e("mavon-editor",{staticStyle:{"max-height":"600px"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)]),e("div",{staticClass:"btns"},[e("input",{staticClass:"btn",attrs:{type:"file"},on:{change:t.onFileChange}}),e("button",{staticClass:"btn",on:{click:t.uploadFile}},[t._v("上传")])]),e("div",{staticClass:"post-footer"},[e("div",{staticClass:"btns"},[e("button",{staticClass:"btn"},[t._v("取消")]),e("button",{staticClass:"btn",on:{click:function(e){return t.submit()}}},[t._v("发表")])])])]),t._m(0)])},_t=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"right"},[e("div",{staticClass:"post-rank"},[e("h5",{staticClass:"p-r-title"},[e("i",{staticClass:"p-r-icon"}),t._v("发帖规范 ")]),e("ul",{staticClass:"p-r-content"},[e("li",{staticClass:"p-r-item"},[t._v("1.主题明确：请确保您的主题与所在方向或话题相关，并且您的帖子内容明确、准确、具有实际意义。")]),e("li",{staticClass:"p-r-item"},[t._v("2.避免重复：在发布之前，请先搜索一下，看看是否有类似的论文已经存在，以避免重复发帖。")]),e("li",{staticClass:"p-r-item"},[t._v("3.保持格式整齐：请确保您的论文格式整齐、易于阅读，不要使用太多的格式化标记或过度的大写字母。")]),e("li",{staticClass:"p-r-item"},[t._v("4.附件管理：请保证上传的附件内容正确，包含论文PDF、PPT、源码等资料")])])])])}],yt={name:"Publish",data(){return{title:"",content:"",showCommunityList:!1,selectCommunity:{},communityList:[],selectedFile:null,file_name:""}},methods:{submit(){this.$axios({method:"post",url:"/post",data:{title:this.title,content:this.content,community_id:this.selectCommunity.community_id,file_name:this.file_name}}).then(t=>{console.log(t.data),1e3==t.code?this.$router.push({path:this.redirect||"/"}):console.log(t.msg)}).catch(t=>{console.log(t)})},getCommunityList(){this.$axios({method:"get",url:"/community"}).then(t=>{console.log(t.data),1e3==t.code?this.communityList=t.data:console.log(t.msg)}).catch(t=>{console.log(t)})},showCommunity(){this.showCommunityList=!this.showCommunityList},selected(t){this.selectCommunity=this.communityList[t],this.showCommunityList=!1,console.log(this.selectCommunity)},onFileChange(t){this.selectedFile=t.target.files[0]},uploadFile(){if(!this.selectedFile)return void alert("请选择文件！");const t=new FormData;t.append("file",this.selectedFile),this.$axios({method:"post",url:"/upload",data:t,headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log(t.data),1e3==t.code?(alert("文件上传成功！"),this.file_name=t.data):alert("文件上传失败："+t.msg)}).catch(t=>{console.error("上传失败:",t),alert("文件上传时发生错误，请重试。")})}},mounted:function(){this.getCommunityList()}},bt=yt,wt=(s("593b"),Object(m["a"])(bt,Ct,_t,!1,null,"768fc425",null)),xt=wt.exports,St=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"form-title"},[t._v("登录")]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("用户名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"name",placeholder:"用户名"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"pass"}},[t._v("密码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"pass",id:"pass",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("div",{staticClass:"form-btn"},[e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.submit}},[t._v("提交")])])])])},kt=[],Ot={name:"Login",data(){return{username:"",password:"",submitted:!1}},computed:{},created(){},methods:{submit(){this.$axios({method:"post",url:"/login",data:JSON.stringify({username:this.username,password:this.password})}).then(t=>{console.log(t.data),1e3==t.code?(localStorage.setItem("loginResult",JSON.stringify(t.data)),this.$store.commit("login",t.data),this.$router.push({path:this.redirect||"/"})):console.log(t.msg)}).catch(t=>{console.log(t)})}}},Lt=Ot,Pt=(s("5a61"),Object(m["a"])(Lt,St,kt,!1,null,"fefcb66e",null)),$t=Pt.exports,Dt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"form-title"},[t._v("注册")]),e("div",{staticClass:"form-group"},[t._m(0),e("el-input",{attrs:{type:"text",required:"",name:"name",id:"name",placeholder:"用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),e("div",{staticClass:"form-group"},[t._m(1),e("el-input",{attrs:{type:"email",required:"",name:"email",id:"email",placeholder:"请输入邮箱"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),e("div",{staticClass:"form-group"},[t._m(2),e("el-input",{attrs:{type:"password",required:"",name:"pass",id:"pass",placeholder:"密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),e("div",{staticClass:"form-group"},[t._m(3),e("el-input",{attrs:{type:"password",required:"",name:"re_pass",id:"re_pass",placeholder:"确认密码"},model:{value:t.confirm_password,callback:function(e){t.confirm_password=e},expression:"confirm_password"}})],1),e("div",{staticClass:"form-group"},[t._m(4),e("div",{attrs:{id:"gender"}},[e("el-radio",{attrs:{label:1},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[t._v("男")]),e("el-radio",{attrs:{label:2},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[t._v("女")])],1)]),e("div",{staticClass:"form-btn"},[e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.submit}},[t._v("提交")])])])])},jt=[function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"name"}},[e("span",{staticStyle:{color:"red"}},[t._v("* ")]),t._v("用户名")])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"email"}},[e("span",{staticStyle:{color:"red"}},[t._v("* ")]),t._v("邮箱")])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"pass"}},[e("span",{staticStyle:{color:"red"}},[t._v("* ")]),t._v("密码")])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"re_pass"}},[e("span",{staticStyle:{color:"red"}},[t._v("* ")]),t._v("确认密码")])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"gender"}},[e("span",{staticStyle:{color:"red"}},[t._v("* ")]),t._v("性别")])}],zt={name:"SignUp",data(){return{username:"",password:"",email:"",gender:1,confirm_password:"",submitted:!1}},computed:{},created(){},methods:{submit(){this.$axios({method:"post",url:"/signup",data:{username:this.username,email:this.email,gender:this.gender,password:this.password,confirm_password:this.confirm_password}}).then(t=>{console.log(t.data),1e3==t.code?(console.log("signup success"),this.$router.push({name:"Login"})):console.log(t.msg)}).catch(t=>{console.log(t)})}}},Tt=zt,Nt=(s("7171"),Object(m["a"])(Tt,Dt,jt,!1,null,"a7df9f26",null)),Mt=Nt.exports;const Ft=x["a"].prototype.push;x["a"].prototype.push=function(t){return Ft.call(this,t).catch(t=>t)},a["default"].use(x["a"]);const It=[{path:"/",name:"Home",component:J},{path:"/post/:id",name:"Content",component:it},{path:"/community/:id",name:"Community",component:dt},{path:"/message",name:"Message",component:ft},{path:"/publish",name:"Publish",component:xt,meta:{requireAuth:!0}},{path:"/login",name:"Login",component:$t},{path:"/signup",name:"SignUp",component:Mt}],Yt=new x["a"]({mode:"history",base:"/",routes:It});var Rt=Yt,Ut=s("2f62");a["default"].use(Ut["a"]);const Et={token:null,user_id:null,user_name:null};var Bt=new Ut["a"].Store({state:{isLogin:!1,loginResult:Et},mutations:{init(t){let e=JSON.parse(localStorage.getItem("loginResult"));console.log(localStorage.getItem("loginResult")),null!=e&&(t.loginResult=e)},login(t,e){t.loginResult=e},logout(t){localStorage.removeItem("loginResult"),t.loginResult=Et}},actions:{},getters:{isLogin:t=>null!==t.loginResult.user_id,userID:t=>t.loginResult.user_id,username:t=>t.loginResult.user_name,accessToken:t=>t.loginResult.token}}),At=s("bc3a"),Ht=s.n(At);Ht.a.defaults.baseURL="/api/v1/",Ht.a.interceptors.request.use(t=>{let e=JSON.parse(localStorage.getItem("loginResult"));if(e){const s=e.access_token;t.headers.Authorization="Bearer "+s}return t},t=>Promise.reject(t)),Ht.a.interceptors.response.use(t=>200===t.status?Promise.resolve(t.data):Promise.reject(t.data),t=>{console.log("error",t)});var qt=Ht.a,Wt=s("5c96"),Jt=s.n(Wt),Gt=(s("0fae"),s("b2d8")),Kt=s.n(Gt);s("64e1"),s("e4cb");a["default"].use(Jt.a),a["default"].use(Kt.a),a["default"].prototype.Free=window.Free,a["default"].prototype.$axios=qt,a["default"].config.productionTip=!1,Rt.beforeEach((t,e,s)=>{console.log(t),console.log(e),t.meta.requireAuth?localStorage.getItem("loginResult")||"/login"===t.path?s():s({path:"/login"}):s(),"/login"==t.fullPath&&(localStorage.getItem("loginResult")?s({path:e.fullPath}):s())}),Rt.afterEach(()=>{document.title="Gophers"}),new a["default"]({router:Rt,store:Bt,render:t=>t(w)}).$mount("#app")},"593b":function(t,e,s){"use strict";s("e202")},"593c":function(t,e,s){t.exports=s.p+"static/img/2.df9943aa.jpg"},"5a61":function(t,e,s){"use strict";s("8089")},"63da":function(t,e,s){"use strict";s("0cd8")},6730:function(t,e,s){"use strict";s("a1b2")},6800:function(t,e,s){t.exports=s.p+"static/img/3.c6df14eb.jpg"},"6d48":function(t,e,s){},"6dba":function(t,e,s){},7171:function(t,e,s){"use strict";s("53ea")},"751a":function(t,e,s){"use strict";s("6dba")},"7a44":function(t,e,s){},8089:function(t,e,s){},"98a8":function(t,e,s){t.exports=s.p+"static/img/1.3ce688cf.jpg"},"9cf6":function(t,e,s){"use strict";s("3bb7")},a1b2:function(t,e,s){},cedc:function(t,e,s){"use strict";s("2913")},d639:function(t,e,s){},e202:function(t,e,s){}});
//# sourceMappingURL=app.09c03d82.js.map