(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(t,e,n){"use strict";n.r(e),e.default={pages:[{id:"2",emoji:"🏡",img:"https://images.unsplash.com/photo-1547280528-5f9e9bfdef9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},{id:"1",emoji:"🎉"}],blocks:[{id:"1",order:1,page:"2",html:"Home",placeholder:"Untitled",forcePlaceholder:!0,noCommands:!0,tag:"h4"},{id:"asdf2",order:1.1,page:"2",html:"👋 Welcome to my notion clone!",tag:"p"},{id:"fg3h5",order:1.14,page:"2",html:"This was the result of a one-day build challenge. Most buttons haven't been implemented, but the base functionality is all here. Have a look around 😎",tag:"p"},{id:"fg3h5",order:1.15,page:"2",html:"",tag:"p"},{id:"f2f2",order:1.2,page:"2",html:"Examples",tag:"h2"},{id:"a4a4g",order:1.5,page:"2",html:"Try typing '/' then 'heading' and pressing enter 👇",tag:"p"},{id:"j4j4j",order:2,page:"2",html:"",tag:"p",forcePlaceholder:!0},{id:"j5j5j",order:2.5,page:"2",html:"",tag:"p"},{id:"1af",order:3,page:"2",html:"Try clicking the page below 👇",tag:"p"},{id:"2",order:4,page:"2",toPage:"1",tag:"div"},{id:"1",order:1,page:"1",html:"My First Page!",placeholder:"Untitled",forcePlaceholder:!0,noCommands:!0,tag:"h4"},{id:"2",order:2,page:"1",html:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque mi, volutpat id aliquam hendrerit, viverra vel erat. Praesent vel ipsum est. Duis malesuada auctor luctus. Nulla faucibus sodales risus, in hendrerit massa.",tag:"p"},{id:"3",order:3,page:"1",html:"Donec Sit Amet",tag:"h2"},{id:"4",order:4,page:"1",html:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque mi, volutpat id aliquam hendrerit, viverra vel erat. ",tag:"p"},{id:"6",order:6,page:"1",html:"Proin Sagittis Ultricies",tag:"h2"},{id:"7",order:7,page:"1",html:"Pellentesque quis ultrices justo, eget feugiat magna. Fusce interdum euismod lorem in porta. Aliquam quis commodo tellus, eget scelerisque nisl. Aenean sit amet turpis tristique est tempor iaculis. Phasellus vel enim eu nibh sagittis luctus. Aliquam quis nisi non mi auctor ultricies.",tag:"p"},{id:"8",order:8,page:"1",html:"Pellentesque Consectetur",tag:"h3"},{id:"9",order:9,page:"1",html:"Vestibulum posuere, tortor a vestibulum ultrices, ex justo sodales nisi, id porttitor massa sapien egestas ipsum.",tag:"p"},{id:"342",order:10,page:"1",html:"",forcePlaceholder:!0,tag:"p"}]}},130:function(t,e,n){"use strict";n.r(e);var r={mixins:[],components:{},props:{text:String,dense:{type:Boolean,default:!1},block:{type:Boolean,default:!1},icon:String,textColor:String},validations:{},data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{},provide:function(){return{}},inject:[]},o=(n(266),n(34)),c=n(35),l=n.n(c),d=n(162),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({staticClass:"rounded n-button d-flex align-center",class:!t.dense&&"px-2 py-1",style:{width:t.block?"auto":"fit-content",color:t.textColor}},t.$listeners),[t.$props.icon?n("v-icon",{attrs:{left:"",size:"16",color:t.textColor}},[t._v("\n    "+t._s(t.icon)+"\n  ")]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VIcon:d.a})},159:function(t,e,n){"use strict";n.r(e);var r=n(130),o=n(204),c=n.n(o),l={mixins:[],components:{"n-button":r.default},props:{},validations:{},data:function(){return{}},created:function(){},mounted:function(){},computed:{items:function(){var t=[],e=this.$store.getters.getPageById(this.$route.params.page);if(e){for(;e.parent;)e=this.$store.getters.getPageById(e.parent),t.push({text:this.$store.getters.getPageTitleById(e.id),id:e.id});t=c.a.reverse(t)}return t.push({text:this.$store.getters.getPageTitleById(this.$route.params.page),id:this.$route.params.page}),t}},methods:{},watch:{},provide:function(){return{}},inject:[]},d=n(34),m=n(35),f=n.n(m),v=n(351),h=n(352),_=n(162),y=n(347),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",flat:"",height:"45",color:"transparent"}},[n("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.items},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[n("n-button",{on:{click:function(e){return t.$router.push({name:"page",params:{page:r.id}})}}},[t._v(t._s(r.text))])]}}])}),t._v(" "),n("v-spacer"),t._v(" "),n("n-button",[t._v("Share")]),t._v(" "),n("n-button",{attrs:{icon:"mdi-check"}},[n("span",[t._v("Updates")])]),t._v(" "),n("n-button",[t._v("Favourite")]),t._v(" "),n("n-button",[n("v-icon",[t._v("mdi-dots-horizontal")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{NButton:n(130).default}),f()(component,{VAppBar:v.a,VBreadcrumbs:h.a,VIcon:_.a,VSpacer:y.a})},160:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(69);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={mixins:[],components:{},props:{},validations:{},data:function(){return{selectedItem:null,items:[{icon:"mdi-magnify",text:"Quick Find"},{icon:"mdi-clock-time-three-outline",text:"All Updates"},{icon:"mdi-cog",text:"Settings & Members"}],extraItems:[{icon:"mdi-shape",text:"Templates"},{icon:"mdi-arrow-collapse-down",text:"Import"},{icon:"mdi-trash-can",text:"Trash"}]}},created:function(){},mounted:function(){},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["getPages"])),methods:{pageTitle:function(t){return this.$store.getters.getPageTitleById(t)}},watch:{},provide:function(){return{}},inject:[]},d=n(34),m=n(35),f=n.n(m),v=n(162),h=n(127),_=n(158),y=n(100),x=n(52),k=n(161),w=n(80),j=n(350),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{app:"",stateless:"",floating:"",width:"240",color:"rgb(55, 60, 63)",value:!0}},[r("v-list",{attrs:{dense:""}},[r("v-list-item-group",{attrs:{"active-class":"command-menu-active"}},[r("v-list-item",{staticClass:"py-3",attrs:{link:"",ripple:!1}},[r("div",{staticClass:"mr-1"},[r("v-img",{staticClass:"rounded-circle",attrs:{width:"24",height:"24",src:n(298)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticStyle:{color:"rgba(255, 255, 255, 0.9)"}},[t._v("\n            deanmikan\n          ")])],1)],1),t._v(" "),t._l(t.items,(function(e){return r("v-list-item",{key:e.text,attrs:{link:"",ripple:!1}},[r("v-list-item-icon",{staticClass:"mr-1"},[r("v-icon",{attrs:{size:"17",color:"rgba(255, 255, 255, 0.6)"}},[t._v("\n            "+t._s(e.icon)+"\n          ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticStyle:{color:"rgba(255, 255, 255, 0.6)"}},[t._v("\n            "+t._s(e.text)+"\n          ")])],1)],1)}))],2)],1),t._v(" "),r("v-list",{attrs:{dense:""}},[r("v-list-item-group",{attrs:{"active-class":"command-menu-active"}},[r("div",{staticClass:"px-4 py-2 font-weight-bold text--disabled",staticStyle:{"font-size":"11.5px !important","letter-spacing":"0.03em"}},[t._v("\n        PRIVATE\n      ")]),t._v(" "),t._l(t.getPages,(function(e){return r("v-list-item",{key:e.id,attrs:{link:"",to:e.id,ripple:!1}},[r("v-list-item-icon",{staticClass:"mr-0"},[r("v-icon",{attrs:{size:"20",color:"rgba(255, 255, 255, 0.6)"}},[t._v("\n            mdi-menu-right\n          ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticStyle:{color:"rgba(255, 255, 255, 0.6)"}},[t._v("\n            "+t._s(t.pageTitle(e.id))+"\n          ")])],1)],1)}))],2)],1),t._v(" "),r("v-list",{attrs:{dense:""}},[r("v-list-item-group",{attrs:{"active-class":"command-menu-active"}},t._l(t.extraItems,(function(e){return r("v-list-item",{key:e.text,attrs:{link:"",ripple:!1}},[r("v-list-item-icon",{staticClass:"mr-1"},[r("v-icon",{attrs:{size:"17",color:"rgba(255, 255, 255, 0.6)"}},[t._v("\n            "+t._s(e.icon)+"\n          ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticStyle:{color:"rgba(255, 255, 255, 0.6)"}},[t._v("\n            "+t._s(e.text)+"\n          ")])],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VIcon:v.a,VImg:h.a,VList:_.a,VListItem:y.a,VListItemContent:x.a,VListItemGroup:k.a,VListItemIcon:w.a,VListItemTitle:x.c,VNavigationDrawer:j.a})},165:function(t,e,n){"use strict";var r=n(0),o=n(227),c=n.n(o);r.a.use(c.a)},200:function(t,e,n){var content=n(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("f886975e",content,!0,{sourceMap:!1})},229:function(t,e,n){"use strict";n(70);var r=n(14),o=n(159),c=n(160),l={components:{AppBar:o.default,NavDrawer:c.default},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("init");case 2:case"end":return e.stop()}}),e)})))()}},d=n(34),m=n(35),f=n.n(m),v=n(348),h=n(353),_=n(349),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("AppBar"),this._v(" "),e("NavDrawer"),this._v(" "),e("v-main",[e("v-container",{staticStyle:{position:"relative"},attrs:{"fill-height":"","pa-0":""}},[e("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{AppBar:n(159).default,NavDrawer:n(160).default}),f()(component,{VApp:v.a,VContainer:h.a,VMain:_.a})},230:function(t,e,n){n(231),t.exports=n(232)},247:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.route,n=t.redirect;"/"==e.path&&n("/2")}},266:function(t,e,n){"use strict";n(200)},267:function(t,e,n){(e=n(9)(!1)).push([t.i,".v-btn{letter-spacing:normal;text-transform:none}html{overflow-y:auto}h4{font-size:40px;font-weight:700}.n-button{font-size:14px;transition:background 50ms ease-in 0s;cursor:pointer;-webkit-user-select:none}.n-button:active{background:red}.n-button:hover{background:#474c50}",""]),t.exports=e},298:function(t,e,n){t.exports=n.p+"img/headshot.b2ff302.jpg"},319:function(t,e,n){"use strict";n.r(e);n(17),n(49),n(84),n(156),n(157);var r=n(0),o=n(126);e.default={state:{pages:[],blocks:[]},mutations:{SET_STATE:function(t,e){var n=e.key,r=e.value;t[n]=r},ADD_PAGE:function(t,e){t.pages.push(e)},EDIT_PAGE:function(t,e){var n=t.pages.findIndex((function(p){return p.id==e.id}));r.a.set(t.pages,n,e)},ADD_BLOCK:function(t,e){t.blocks.push(e)},EDIT_BLOCK:function(t,e){var n=t.blocks.findIndex((function(b){return b.id==e.id}));r.a.set(t.blocks,n,e)},DELETE_BLOCK:function(t,e){t.blocks.splice(t.blocks.findIndex((function(b){return b.id==e.id})),1)}},actions:{init:function(t){var e=t.commit;e("SET_STATE",{key:"pages",value:o.default.pages}),e("SET_STATE",{key:"blocks",value:o.default.blocks})},editBlock:function(t,e){(0,t.commit)("EDIT_BLOCK",e)},addBlock:function(t,e){(0,t.commit)("ADD_BLOCK",e)},deleteBlock:function(t,e){(0,t.commit)("DELETE_BLOCK",e)},addPage:function(t,e){(0,t.commit)("ADD_PAGE",e)}},getters:{getBlocksByPageId:function(t){return function(e){return t.blocks.filter((function(b){return b.page==e}))}},getPageById:function(t){return function(e){return t.pages.find((function(p){return p.id==e}))}},getPageTitleById:function(t,e){return function(n){var r=t.blocks.filter((function(b){return b.page==n}))[0];return r?"".concat(e.getPageById(n).emoji||""," ").concat(r.html||"Untitled"):"Untitled"}},getPages:function(t){return t.pages}}}},62:function(t,e,n){"use strict";var r={mixins:[],components:{},props:["error"],validations:{},data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{},provide:function(){return{}},inject:[]},o=n(34),c=n(35),l=n.n(c),d=n(345),m=n(346),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{staticClass:"align-self-start",attrs:{justify:"center"}},[e("v-col",{staticClass:"text-center",staticStyle:{"margin-top":"200px"},attrs:{cols:"auto"}},[e("h2",[this._v("Oops... something went wrong 😖")]),this._v(" "),e("p",[this._v("Sorry about that, click a page on the left nav bar")])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCol:d.a,VRow:m.a})}},[[230,3,1,4]]]);