(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(t,n,a){},225:function(t,n,a){"use strict";var e=a(98),r=a(111)(5),i=!0;"find"in[]&&Array(1).find(function(){i=!1}),e(e.P+e.F*i,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a(153)("find")},253:function(t,n,a){"use strict";var e=a(150);a.n(e).a},261:function(t,n,a){"use strict";a.r(n);a(225),a(132);var e={components:{Workspace:a(176).a},props:["examplePage"],computed:{exampleData:function(){return this.findPageByHtmlOrMarkdownPath().frontmatter.parsedExample},normalizedPath:function(){return this.$props.examplePage.replace(/\.(html|md)$/,"")+".html"}},methods:{findPageByHtmlOrMarkdownPath:function(){var t=this,n=this.$site.pages.find(function(n){return console.log(n.regularPath),n.regularPath===t.normalizedPath});if(null==n)throw new Error("Page ".concat(normalizedPath," not found"));return n}}},r=(a(253),a(3)),i=Object(r.a)(e,function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("router-link",{staticClass:"example-show-in-playground",attrs:{to:this.normalizedPath}},[this._v("Open in interactive playground!")]),this._v(" "),n("workspace",{attrs:{parsedExample:this.exampleData}})],1)},[],!1,null,null,null);n.default=i.exports}}]);