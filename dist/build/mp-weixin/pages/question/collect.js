(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/question/collect"],{"78c8":function(t,e,n){"use strict";n.r(e);var o=n("adcf"),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=r.a},"93ed":function(t,e,n){"use strict";var o=n("9b85"),r=n.n(o);r.a},"9b85":function(t,e,n){t.exports={blue:"#4a6df3",gray:"#aaa",green:"#30b08f","light-blue":"#4674e5",panGreen:"#30b08f",pink:"#e96169",red:"#c03639","text-df":"28rpx","text-lg":"32rpx","text-sl":"80rpx","text-sm":"24rpx","text-xl":"36rpx","text-xs":"20rpx","text-xsl":"120rpx","text-xxl":"44rpx",tiffany:"#56ccf2",yellow:"#f2cf63"}},a5a8:function(t,e,n){"use strict";(function(t){n("6cdc");o(n("66fd"));var e=o(n("db0b"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},adcf:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("a34a"));n("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,o,r,c,i){try{var a=t[c](i),u=a.value}catch(l){return void n(l)}a.done?e(u):Promise.resolve(u).then(o,r)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){c(i,o,r,a,u,"next",t)}function u(t){c(i,o,r,a,u,"throw",t)}a(void 0)}))}}var a=function(){n.e("pages/question/components/QuestionList").then(function(){return resolve(n("8dce"))}.bind(null,n)).catch(n.oe)},u={components:{QuestionList:a},data:function(){return{questionList:[],isShowBorder:!1}},mounted:function(){this.getAllCollectList()},onPageScroll:function(t){this.isShowBorder=0!==t.scrollTop},methods:{getAllCollectList:function(){var e=i(o.default.mark((function e(){var n,r;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),n=new wx.BaaS.TableObject("question_collect"),e.next=4,n.expand(["question","paper"]).find();case 4:r=e.sent,r=r.data.objects.map((function(t){return Object.assign({collectId:t.id,paperTitle:t.paper.title,paperCreateAt:t.created_at},t.question)})),this.questionList=r,t.hideLoading();case 8:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),$_onCollectQuestion:function(e){console.log("%c 🦑 collectIndex: ","font-size:20px;background-color: #465975;color:#fff;",e);var n=new wx.BaaS.TableObject("question_collect");n.delete(this.questionList[e]["collectId"]),this.questionList.splice(e,1),t.showToast({title:"已取消收藏!",icon:"none"})}}};e.default=u}).call(this,n("543d")["default"])},db0b:function(t,e,n){"use strict";n.r(e);var o=n("e98a"),r=n("78c8");for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);n("93ed");var i,a=n("f0c5"),u=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=u.exports},e98a:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},c=[]}},[["a5a8","common/runtime","common/vendor"]]]);