(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-question-result"],{"0a41":function(t,e,a){"use strict";var i=a("dc97"),n=a.n(i);n.a},1562:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"[data-v-a21051be]:export{blue:#4a6df3;gray:#aaa;green:#30b08f;light-blue:#4674e5;panGreen:#30b08f;pink:#e96169;red:#c03639;text-df:%?28?%;text-lg:%?32?%;text-sl:%?80?%;text-sm:%?24?%;text-xl:%?36?%;text-xs:%?20?%;text-xsl:%?120?%;text-xxl:%?44?%;tiffany:#56ccf2;yellow:#f2cf63}.count-num[data-v-a21051be]{display:inline-block;font-family:proximanova;text-align:center}",""]),t.exports=e},2418:function(t,e,a){var i=a("a271");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("493898fa",i,!0,{sourceMap:!1,shadowMode:!1})},3703:function(t,e,a){"use strict";a.r(e);var i=a("e51f"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"779d":function(t,e,a){"use strict";a.r(e);var i=a("beea"),n=a("dc21");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("f014");var s,o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"2c951afc",null,!1,i["a"],s);e["default"]=l.exports},"87eb":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("8e6e"),a("ac6a"),a("456d");var n=i(a("bd86")),r=i(a("8dce")),s=i(a("e046")),o=a("2f62");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){(0,n.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var c=null,f={components:{QuestionList:r.default,VCountTo:s.default},data:function(){return{isShowScore:!1,isShowBorder:!1,title:"----",score1:222}},onLoad:function(t){c=t.paperId,this.title=t.title,this.getPaperResult({resultId:t.resultId,paperId:c}),this.getFontFamily()},onPageScroll:function(t){this.isShowBorder=0!==t.scrollTop},computed:u({},(0,o.mapGetters)("question",["questionList","score"])),methods:u({},(0,o.mapActions)("question",["getPaperResult","onCollectQuestion"]),{$_onCollectQuestion:function(t){this.onCollectQuestion({questionIndex:t,paperId:c})},getFontFamily:function(){uni.loadFontFace({family:"proximanova",source:'url("https://656e-env-used-1258356576.tcb.qcloud.la/TTF/proximanova.ttf?sign=4c675cf35b03b250eab077d901177a87&t=1592722974")',success:function(){console.log("success")}})}})};e.default=f},a271:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"[data-v-2c951afc]:export{blue:#4a6df3;gray:#aaa;green:#30b08f;light-blue:#4674e5;panGreen:#30b08f;pink:#e96169;red:#c03639;text-df:%?28?%;text-lg:%?32?%;text-sl:%?80?%;text-sm:%?24?%;text-xl:%?36?%;text-xs:%?20?%;text-xsl:%?120?%;text-xxl:%?44?%;tiffany:#56ccf2;yellow:#f2cf63}.score[data-v-2c951afc]{font-family:Parsek;color:#e96169;margin-left:%?10?%}",""]),t.exports=e},beea:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("navbar",{attrs:{fixed:!0,transparent:"show",title:t.title,border:t.isShowBorder,backgroundColor:[224,229,236]}}),a("v-uni-view",{staticClass:"flex justify-center padding-lr margin-top-sm"},[a("v-count-to",{attrs:{"end-val":t.score,color:"#e74c3c"}}),a("v-uni-view",{staticClass:"margin-top-sm text-xxl text-bold"})],1),a("v-uni-view",{staticClass:"margin-lr"},[a("question-list",{attrs:{"question-list":t.questionList,canSelect:!1,"is-show-answer":!0},on:{collect:function(e){arguments[0]=e=t.$handleEvent(e),t.$_onCollectQuestion.apply(void 0,arguments)}}})],1)],1)},r=[]},dc21:function(t,e,a){"use strict";a.r(e);var i=a("87eb"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},dc97:function(t,e,a){var i=a("1562");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0af3cea6",i,!0,{sourceMap:!1,shadowMode:!1})},e046:function(t,e,a){"use strict";a.r(e);var i=a("e621"),n=a("3703");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("0a41");var s,o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"a21051be",null,!1,i["a"],s);e["default"]=l.exports},e51f:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a481"),a("28a5"),a("c5f6");var i={name:"count-to",props:{startVal:{type:[Number,String],default:0},endVal:{type:[Number,String],default:0,required:!0},duration:{type:[Number,String],default:3e3},autoplay:{type:Boolean,default:!0},decimals:{type:[Number,String],default:0},useEasing:{type:Boolean,default:!0},decimal:{type:[Number,String],default:"."},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:50},bold:{type:Boolean,default:!1},separator:{type:String,default:""}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:Number(this.duration),startTime:null,timestamp:null,remaining:null,rAF:null,lastTime:0}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start()},methods:{easingFn:function(t,e,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+e},requestAnimationFrame:function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-this.lastTime)),i=setTimeout((function(){t(e+a)}),a);return this.lastTime=e+a,i},cancelAnimationFrame:function(t){clearTimeout(t)},start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=this.requestAnimationFrame(this.count)},reStart:function(){this.paused?(this.resume(),this.paused=!1):(this.stop(),this.paused=!0)},stop:function(){this.cancelAnimationFrame(this.rAF)},resume:function(){this.startTime=null,this.localDuration=this.remaining,this.localStartVal=this.printVal,this.requestAnimationFrame(this.count)},reset:function(){this.startTime=null,this.cancelAnimationFrame(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=this.requestAnimationFrame(this.count):this.$emit("end")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=Number(t),t=t.toFixed(Number(this.decimals)),t+="";var e=t.split("."),a=e[0],i=e.length>1?this.decimal+e[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))while(n.test(a))a=a.replace(n,"$1"+this.separator+"$2");return a+i},destroyed:function(){this.cancelAnimationFrame(this.rAF)}}};e.default=i},e621:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"count-num",style:{fontSize:t.fontSize+"rpx",fontWeight:t.bold?"bold":"normal",color:t.color}},[t._v(t._s(t.displayValue))])},r=[]},f014:function(t,e,a){"use strict";var i=a("2418"),n=a.n(i);n.a}}]);