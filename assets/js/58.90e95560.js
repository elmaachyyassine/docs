(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{449:function(a,t,s){"use strict";s.r(t);var e=s(3),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"partials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partials"}},[a._v("#")]),a._v(" Partials")]),a._v(" "),s("p",[a._v("Handlebars allows for template reuse through partials. Partials are normal Handlebars templates that may be called\ndirectly by other templates.")]),a._v(" "),s("h2",{attrs:{id:"basic-partials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-partials"}},[a._v("#")]),a._v(" Basic Partials")]),a._v(" "),s("p",[a._v("In order to use a partial, it must be registered via "),s("code",[a._v("Handlebars.registerPartial")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("Handlebars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("registerPartial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myPartial"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{{name}}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("This call will register the "),s("code",[a._v("myPartial")]),a._v(" partial. Partials may be precompiled and the precompiled template passed into\nthe second parameter.")]),a._v(" "),s("p",[a._v("Calling the partial is done through the partial call syntax:")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("myPartial")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("p",[a._v("Will render the partial named "),s("code",[a._v("myPartial")]),a._v(". When the partial executes, it will be run under the current execution\ncontext.")]),a._v(" "),s("h2",{attrs:{id:"dynamic-partials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-partials"}},[a._v("#")]),a._v(" Dynamic Partials")]),a._v(" "),s("p",[a._v("It's possible to dynamically select the partial to be executed by using sub expression syntax.")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("whichPartial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("p",[a._v("Will evaluate "),s("code",[a._v("whichPartial")]),a._v(" and then render the partial whose name is returned by this function.")]),a._v(" "),s("p",[a._v("Subexpressions do not resolve variables so "),s("code",[a._v("whichPartial")]),a._v(" must be a function. If a simple variable has the partial name,\nit's possible to resolve it via the "),s("code",[a._v("lookup")]),a._v(" helper.")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("lookup")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'myVariable'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("h2",{attrs:{id:"partial-contexts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partial-contexts"}},[a._v("#")]),a._v(" Partial Contexts")]),a._v(" "),s("p",[a._v("It's possible to execute partials on a custom context by passing in the context to the partial call.")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("myPartial")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("myOtherContext")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("h2",{attrs:{id:"partial-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partial-parameters"}},[a._v("#")]),a._v(" Partial Parameters")]),a._v(" "),s("p",[a._v("Custom data can be passed to partials through hash parameters.")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("myPartial")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("parameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("value")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("p",[a._v("Will set parameter to "),s("code",[a._v("value")]),a._v(" when the partial runs.")]),a._v(" "),s("p",[a._v("This is particularly useful for exposing data from parent contexts to the partial:")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("myPartial")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("h2",{attrs:{id:"partial-blocks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partial-blocks"}},[a._v("#")]),a._v(" Partial Blocks")]),a._v(" "),s("p",[a._v("The normal behavior when attempting to render a partial that is not found is for the implementation to throw an error.\nIf failover is desired instead, partials may be called using the block syntax.")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("myPartial")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n  Failover content\n"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/myPartial")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("p",[a._v("Which will render "),s("code",[a._v("Failover content")]),a._v(" if the "),s("code",[a._v("myPartial")]),a._v(" partial is not registered.")]),a._v(" "),s("p",[a._v("This block syntax may also be used to pass templates to the partial, which can be executed by the specially named\npartial, "),s("code",[a._v("@partial-block")]),a._v(". A template of")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("layout")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n  My Content\n"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/layout")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("p",[a._v("with the "),s("code",[a._v("layout")]),a._v(" partial containing")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[a._v("Site Content\n"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("@")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("partial-block")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("p",[a._v("Would render")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v("Site Content My Content\n")])])]),s("p",[a._v("When called in this manner, the block will execute under the context of the partial at the time of the call. Depthed\npaths and block parameters operate relative to the partial block rather than the partial template.")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#each")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("children")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("as")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("childEntry")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/childEntry")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/each")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("p",[a._v("Will render "),s("code",[a._v("child.value")]),a._v(" from this template, not the partial.")]),a._v(" "),s("h2",{attrs:{id:"inline-partials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inline-partials"}},[a._v("#")]),a._v(" Inline Partials")]),a._v(" "),s("p",[a._v("Templates may define block scoped partials via the "),s("code",[a._v("inline")]),a._v(" decorator.")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#*inline")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myPartial"')]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n  My Content\n"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/inline")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#each")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("children")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("myPartial")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/each")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("p",[a._v("Which will render the "),s("code",[a._v("myPartial")]),a._v(" partial for each child.")]),a._v(" "),s("p",[a._v("Each inline partial is available to the current block and all children, including execution of other partials. This\nallows for layout templates and similar functionality:")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("layout")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#*inline")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"nav"')]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n    My Nav\n  "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/inline")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#*inline")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"content"')]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n    My Content\n  "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/inline")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/layout")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("p",[a._v("Where the "),s("code",[a._v("layout")]),a._v(" partial may be:")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("div")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("nav"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  {{> nav}}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("div")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  {{> content}}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);