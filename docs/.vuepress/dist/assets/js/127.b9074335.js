(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{263:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",[t._v("Object Syntax")]),t._m(0),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("You'll run into Object Syntax in Sprout Email as you "),a("router-link",{attrs:{to:"./personalization.html"}},[t._v("Personalize")]),t._v(" your "),a("router-link",{attrs:{to:"./custom-email-templates.html"}},[t._v("Email Templates")]),t._v(".")],1)]),a("p",[t._v("In Craft you can use Object Syntax in the Entry URI Format field of your Section's Site Settings and the Title Format setting of your Entry Types.")]),t._m(1),a("p",[t._v("Below we'll look at a comparison of how Craft processes templates and settings that support Object Syntax.")]),t._m(2),t._m(3),t._m(4),t._m(5),a("p",[t._v("In this example, our Template and Variables are processed and create our page.")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),a("p",[t._v("In this example, our Template and Variables are processed and create our Title.")]),t._m(12),t._m(13),t._m(14),a("p",[t._v("If you have a simple scenario, Object Syntax allows you to use a Shorthand Syntax as well.")]),t._m(15),t._m(16)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In several places within Craft and Sprout plugins, you are able to customize a setting with a dynamic value. For lack of a better term, we refer to this as "),e("strong",[this._v("Object Syntax")]),this._v(" and this documentation page aims to serve as a general guide.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("In each of these scenarios we can think of the settings field as a mini Twig template. Settings that allow for Object Syntax will be parsed like a Twig template and, just like a Twig template, they may have some variables available to them for you to use (like an individual Entry page has the "),e("code",[this._v("entry")]),this._v(" variable available).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"entry-pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entry-pages","aria-hidden":"true"}},[this._v("#")]),this._v(" Entry Pages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("When you setup a Section with URLs, Craft makes an "),e("code",[this._v("entry")]),this._v(" variable available to the Entry Template you define in the settings (such as "),e("code",[this._v("news/_entry")]),this._v("). In this case, you can then access your "),e("code",[this._v("entry")]),this._v(" object and all of it's available properties in your entry template:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"news-entry-twig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#news-entry-twig","aria-hidden":"true"}},[this._v("#")]),this._v(" news/_entry.twig")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("entry")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("title")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("entry")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("slug")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table"},[e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Template")]),e("th",{staticStyle:{"text-align":"left"}},[this._v("Variables")]),e("th",{staticStyle:{"text-align":"left"}},[this._v("Output")])])]),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("news/_entry.twig")]),e("td",{staticStyle:{"text-align":"left"}},[this._v("entry")]),e("td",{staticStyle:{"text-align":"left"}},[this._v("news/my-page")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"title-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title-format","aria-hidden":"true"}},[this._v("#")]),this._v(" Title Format")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When you setup an Entry Type, you can choose to not display the Title Field and generate your Title using the "),e("strong",[this._v("Title Format")]),this._v(" setting.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("While this is a setting in the Control Panel, a very similar thing is happening as we have seen in the templates. Rather than a file being used as the Twig template ("),e("code",[this._v("news/_entry.twig")]),this._v("), the value of the Title Format setting is being used as the template.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("When an Entry Element is saved, Craft makes the Entry Element available to that setting to allow the Title Format setting to use any property on the Entry Object when the Title is saved. While Craft gives you access to an Entry Element in the Title Format Setting, the variable is not named "),e("code",[this._v("entry")]),this._v(" – it is named "),e("code",[this._v("object")]),this._v(".")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("object")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("title")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("object")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("slug")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table"},[e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Template")]),e("th",{staticStyle:{"text-align":"left"}},[this._v("Variables")]),e("th",{staticStyle:{"text-align":"left"}},[this._v("Output")])])]),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("Title Format Setting")]),e("td",{staticStyle:{"text-align":"left"}},[this._v("object")]),e("td",{staticStyle:{"text-align":"left"}},[this._v("Entry Title")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[e("strong",[this._v("Why does Craft name the variable "),e("code",[this._v("object")]),this._v(" instead of something more appropriate like "),e("code",[this._v("entry")]),this._v("?")])]),e("p",[this._v("Object Syntax is supported by many different Elements and Settings within Craft and within plugins. As all of these features use the same code behind the scenes, Craft named the variable that gets created something generic so that it could apply to many scenarios.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"shorthand-syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shorthand-syntax","aria-hidden":"true"}},[this._v("#")]),this._v(" Shorthand Syntax")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{pre:!0},[a("div",{attrs:{class:"table"}},[a("table",[a("thead",[a("tr",[a("th",{attrs:{style:"text-align:left"}},[t._v("Object Syntax")]),a("th",{attrs:{style:"text-align:left"}},[t._v("Shorthand Syntax")])])]),a("tbody",[a("tr",[a("td",{attrs:{style:"text-align:left"}},[a("code",[t._v("{{ object.title }}")])]),a("td",{attrs:{style:"text-align:left"}},[a("code",[t._v("{title}")])])]),a("tr",[a("td",{attrs:{style:"text-align:left"}},[a("code",[t._v("{{ object.customField }}")])]),a("td",{attrs:{style:"text-align:left"}},[a("code",[t._v("{customField}")])])]),a("tr",[a("td",{attrs:{style:"text-align:left"}},[a("code",[t._v("{% if object.customField is not empty %}{{ object.title }}{% endif %}")])]),a("td",{attrs:{style:"text-align:left"}},[a("code",[t._v("{% if object.customField is not empty %}{title}{% endif %}")])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("Use Object Syntax in conditional logic like an if statement.")])])}],!1,null,null,null);e.default=n.exports}}]);