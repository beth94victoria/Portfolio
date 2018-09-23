if (self.CavalryLogger) { CavalryLogger.start_js(["enn+x"]); }

__d("FeedBlacklistButton",["Arbiter","Event"],(function(a,b,c,d,e,f){__p&&__p();var g={BLACKLIST:"feed_blacklist",UNBLACKLIST:"feed_unblacklist",init:function(a,c,d,e){b("Event").listen(c,"click",function(){var a={profile_id:e};b("Arbiter").inform(g.BLACKLIST,a);b("Arbiter").inform("UnfollowingUser",a)}),b("Event").listen(d,"click",function(){var a={profile_id:e};b("Arbiter").inform(g.UNBLACKLIST,a);b("Arbiter").inform("FollowingUser",a)}),b("Arbiter").subscribe(g.BLACKLIST,function(b,c){e==c.profile_id&&a.swap()}),b("Arbiter").subscribe(g.UNBLACKLIST,function(b,c){e==c.profile_id&&a.unswap()})}};e.exports=a.FeedBlacklistButton||g}),null);
__d("FollowRequestResultEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({REVERT:"revert"})}),null);
__d("MenuStaticItem",["cx","DOM","MenuItemBase","React","ReactDOM","emptyFunction"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("MenuItemBase"));h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this),this._data=a}a.prototype._renderItemContent=function(){"use strict";var a=b("DOM").create("span",{className:"_54nc _54ah"});this._data.children?b("ReactDOM").render(b("React").createElement("span",{className:"_54nh"},this._data.children),a):b("DOM").setContent(a,b("DOM").create("span",{className:"_54nh"},this._data.markup));return a};Object.assign(a.prototype,{handleClick:b("emptyFunction")});e.exports=a}),null);
__d("ProfileSubFollowStatus",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({REGULAR_FOLLOW:"follow",RECAP:"recap",SEE_FIRST:"see_first",SEE_MORE:"see_more",HIGHLIGHTS_ONLY:"highlights_only",SUBSCRIBE_ALL_LIVE_NOTIFICATIONS:"subscribe_all_live_notifications",SUBSCRIBE_SUGGESTED_LIVE_NOTIFICATIONS:"subscribe_suggested_live_notifications",SUBSCRIBE_NONE_LIVE_NOTIFICATIONS:"subscribe_none_live_notifications",UNFOLLOW:"unfollow"})}),null);
__d("SeeFirstNuxEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SWITCHER_NUX_IMP:"switcher_nux_imp",SEE_FIRST_SELECTED:"see_first_selected",XOUT:"xout",NOT_NOW:"not_now",IMP:"imp",ENTER_DIALOG:"enter_dialog",BATCH_SEE_FIRST_SELECTED:"batch_see_first_selected"})}),null);
__d("XFeedSeeFirstNuxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/feed/control/see_first/nux/",{})}),null);
__d("ProfileHoverButton",["csx","cx","Arbiter","AsyncRequest","CSS","DOM","Event","FeedBlacklistButton","FollowRequestResultEnum","MenuStaticItem","ProfileSubFollowStatus","QE2Logger","Run","SeeFirstNuxEvents","SubscribeButton","SubscriptionsHandler","XFeedSeeFirstNuxController"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=1,j="live_notifs",k={follow:0,see_first:0,see_more:0,highlights_only:0,subscribe_all_live_notifications:j,subscribe_suggested_live_notifications:j,subscribe_none_live_notifications:j};function a(a,c,d,e,f){"use strict";__p&&__p();this.$1=c,this.$2=d,this.$3=f,this.$4=e,this.$5=a,this.$6=null,this.$7=new(b("SubscriptionsHandler"))(),this.$5.getPopover().subscribe("show",function(){b("QE2Logger").logExposureForUser("feed_control_highlight_only")}),this.$2.subscribe("itemclick",function(a,c){if(c.item instanceof b("MenuStaticItem"))return;a=c.item.getValue();a==="unfollow"?(b("Arbiter").inform(b("SubscribeButton").UNSUBSCRIBED,{profile_id:this.$3.id}),b("Arbiter").inform(b("FeedBlacklistButton").BLACKLIST,{profile_id:this.$3.id}),this.$4&&this.$4.hide(),this.$5.getPopover().hideLayer()):(this.setSelected(a),a===b("ProfileSubFollowStatus").SEE_FIRST?(this.$4&&(this.$4.hide(),this.logNux(b("SeeFirstNuxEvents").SEE_FIRST_SELECTED)),b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!0,see_more:!1,highlights_only:!1})):a===b("ProfileSubFollowStatus").SEE_MORE?b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!0,highlights_only:!1}):a===b("ProfileSubFollowStatus").HIGHLIGHTS_ONLY?b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!1,highlights_only:!0}):b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!1,highlights_only:!1}))}.bind(this)),this.$7.addSubscriptions(b("Arbiter").subscribe(b("SubscribeButton").SUBSCRIBED,function(a,c){if(this.$3.id!==c.profile_id)return;c.see_first?this.setSelected(b("ProfileSubFollowStatus").SEE_FIRST):c.see_more?this.setSelected(b("ProfileSubFollowStatus").SEE_MORE):c.highlights_only?this.setSelected(b("ProfileSubFollowStatus").HIGHLIGHTS_ONLY):this.setSelected(b("ProfileSubFollowStatus").REGULAR_FOLLOW)}.bind(this))),this.$7.addSubscriptions(b("Arbiter").subscribe(b("FollowRequestResultEnum").REVERT,this.handleResponse.bind(this))),this.$4&&(this.$4.show(),this.logNux(b("SeeFirstNuxEvents").IMP),this.$7.addSubscriptions(b("Event").listen(b("DOM").find(this.$4.getRoot(),"._50zy"),"click",this.logNux.bind(this,b("SeeFirstNuxEvents").XOUT)))),b("Run").onLeave(this.cleanUp.bind(this))}a.prototype.logNux=function(event){"use strict";var a=b("XFeedSeeFirstNuxController").getURIBuilder().getURI();new(b("AsyncRequest"))(a).setData({event:event,id:this.$3.id}).send()};a.prototype.getButtons=function(){"use strict";return b("DOM").scry(this.$1,"._3oz-")};a.prototype.getSelected=function(){"use strict";var a=this.getButtons(),c=null;a.forEach(function(a){var d=a.getAttribute("data-status");b("CSS").matchesSelector(a,"._52-0")&&(c=d)});return c};a.prototype.setSelected=function(a){"use strict";__p&&__p();this.$6=this.getSelected();var c=this.getButtons(),d=k[a];c.forEach(function(c){if(d===j)return;var e=c.getAttribute("data-status");e===a?b("CSS").addClass(c,"_52-0"):b("CSS").removeClass(c,"_52-0")});this.$2.forEachItem(function(c){if(!c.getValue)return;var e=c.getValue(),f=k[e];if(e==="unfollow")return;c=c.getRoot();e===a?b("CSS").addClass(c,"_52-0"):f===d&&b("CSS").removeClass(c,"_52-0")})};a.prototype.handleResponse=function(event,a){"use strict";if(a.id!==this.$3.id||a.location!==i)return;event===b("FollowRequestResultEnum").REVERT&&this.revert()};a.prototype.revert=function(){"use strict";if(this.$6===null)return;this.setSelected(this.$6)};a.prototype.cleanUp=function(){"use strict";this.$7&&this.$7.release(),this.$7=null,this.$1=null,this.$2=null,this.$3=null};e.exports=a}),null);
__d("SeeFirstProfilePopoverMenu",["PopoverMenu"],(function(a,b,c,d,e,f){var g;g=babelHelpers.inherits(a,b("PopoverMenu"));g&&g.prototype;a.prototype._onMenuDone=function(a){"use strict"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("PopoverMenuShowOnHover",["DOM","Event"],(function(a,b,c,d,e,f){__p&&__p();var g=250;function a(a){"use strict";this._handleOnSetMenu=function(){this._attachMouseListeners(this._popoverMenu.getPopover().getLayer().getRoot())}.bind(this),this._popoverMenu=a,this._listeners=[]}a.prototype.enable=function(){"use strict";this._attachMouseListeners(this._popoverMenu.getTriggerElem()),this._setMenuSubscription=this._popoverMenu.subscribe("setMenu",this._handleOnSetMenu)};a.prototype.disable=function(){"use strict";this._lastHoverEventTime=null;while(this._listeners.length)this._listeners.pop().remove();this._setMenuSubscription&&(this._setMenuSubscription.unsubscribe(),this._setMenuSubscription=null)};a.prototype._attachMouseListeners=function(a){"use strict";this._listeners.push(b("Event").listen(a,"mouseleave",function(a){var c=this._popoverMenu.getMenu();if(!c||b("DOM").contains(c.getRoot(),a.relatedTarget)||b("DOM").contains(this._popoverMenu.getTriggerElem(),a.relatedTarget))return;this._popoverMenu.getPopover().hideLayer(a)}.bind(this)),b("Event").listen(a,"mouseenter",function(a){this._lastHoverEventTime=Date.now(),this._popoverMenu.getPopover().showLayer()}.bind(this)),b("Event").listen(a,"click",function(a){Date.now()<this._lastHoverEventTime+g&&a.stop()}.bind(this)))};e.exports=a}),null);
__d("MenuSeparator",["cx","CSS","DOM","MenuItemInterface"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("MenuItemInterface"));h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this,a),this._data=a,this.showFn=this._data.should_show_fn}a.prototype.updateShownState=function(a){"use strict";this.showFn&&(this._isHidden=!this.showFn(a),this._root&&b("CSS").conditionShow(this._root,!this._isHidden))};a.prototype.isShown=function(a){"use strict";a=this.showFn?this.showFn(a):!0;return a};a.prototype.render=function(){"use strict";var a="_54ak";this._data.className&&(a+=" "+this._data.className);var c=this._data.label||"";a=b("DOM").create("li",{className:a,role:"separator"},c);this._isHidden&&b("CSS").hide(a);return a};e.exports=a}),null);