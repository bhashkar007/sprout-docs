(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{220:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",[t._v("Entries")]),a("code-toggle",{attrs:{languages:["craft3"]}},[a("template",{slot:"craft3"},[a("div",{staticClass:"language-craft3 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n  {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Entry",\n    "attributes": {\n      "sectionId": 1,\n      "typeId": 1,\n      "authorId": 1,\n      "slug": "entry-slug",\n      "postDate": "2015-02-27 16:43:52",\n      "expiryDate": null,\n      "enabled": true\n    },\n    "content": {\n      "title": "Entry title",\n      "fields": {\n        "body": "Body content"\n      }\n    }\n  }\n]\n')])])])])],2),t._m(0),a("p",[t._v("Often, it's a good idea to import existing Users into Craft first, as they frequently have no relations to other content that needs to exist before their Elements are created.")]),a("p",[t._v("When importing Entries, the Authors of those Entries will already need to exist in Craft as Users.")]),a("p",[t._v("If you know the authorId, you can use it when you are importing your entries. In many cases, it may be easier to refer to identify the author with some other value such as an email or username.")]),a("p",[t._v("See "),a("router-link",{attrs:{to:"./related-attributes.html"}},[t._v("Related Attributes")]),t._v(" for more information on how to match authors and other attributes as you import your content. Below, are three examples with common author scenarios:")],1),t._m(1),a("code-toggle",{attrs:{languages:["craft3","craft2"]}},[a("template",{slot:"craft3"},[a("div",{staticClass:"language-craft3 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n    {\n        "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Entry",\n        "attributes": {\n            "authorId": 1\n        },\n        "content": { ... }\n    }\n]\n')])])])]),a("template",{slot:"craft2"},[a("div",{staticClass:"language-craft2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n    {\n        "@model": "EntryModel",\n        "attributes": {\n            "authorId": 1\n        },\n        "content": { ... }\n    }\n]\n')])])])])],2),t._m(2),a("code-toggle",{attrs:{languages:["craft3","craft2"]}},[a("template",{slot:"craft3"},[a("div",{staticClass:"language-craft3 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n    {\n        "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Entry",\n        "attributes": {\n          "related": {\n            "authorId": {\n              "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\User",\n              "params" {\n                "email": "hello@website.com"\n              }\n            }\n          }\n        }\n        "content": { ... }\n    }\n]\n')])])])]),a("template",{slot:"craft2"},[a("div",{staticClass:"language-craft2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n    {\n        "@model": "EntryModel",\n        "attributes": {\n            "authorId": "hello@website.com"\n        },\n        "content": { ... }\n    }\n]\n')])])])])],2),t._m(3),a("code-toggle",{attrs:{languages:["craft3","craft2"]}},[a("template",{slot:"craft3"},[a("div",{staticClass:"language-craft3 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n    {\n        "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Entry",\n        "attributes": {\n          "related": {\n            "authorId": {\n              "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\User",\n              "params" {\n                "username": "targetUsername"\n              }\n            }\n          }\n        }\n        "content": { ... }\n    }\n]\n')])])])]),a("template",{slot:"craft2"},[a("div",{staticClass:"language-craft2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n    {\n        "@model": "EntryModel",\n        "attributes": {\n            "authorId": "anotheruser"\n        },\n        "content": { ... }\n    }\n]\n')])])])])],2),t._m(4),a("code-toggle",{attrs:{languages:["json"]}},[a("template",{slot:"json"},[a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"@model"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Entry"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"attributes"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"content"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"title"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"In quaerat maiores sit est rerum iusto."')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"fields"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"body"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<p>Et dolor consectetur quo ea recusandae aut aperiam. Deleniti at quisquam facere enim est est ea dignissimos. Et aspernatur perspiciatis iusto enim. Rem quas rerum quam incidunt.</p><p>Qui ut impedit nesciunt tempore doloribus. Sed culpa repellendus et maiores quisquam. Enim necessitatibus quos placeat pariatur ut.</p><p>Dolorem iure ratione consectetur dolores. Velit harum dolorem est fuga sunt. Iusto voluptatum eum quo ad nisi qui facere. Aut voluptas repudiandae quam expedita sunt.</p><p>Nulla voluptatem consequuntur laborum est earum eos voluptatem. Qui architecto autem consequatur est. Eveniet veniam sint autem exercitationem minima.</p><p>Sint soluta dolores dicta. Exercitationem ipsum et rerum laborum qui. Et sed possimus ut est quos sit.</p>"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"testTable"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"col1"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"row 1 col 1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"col2"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"row 1 col 2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"col3"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"row 1 col 3"')]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"col1"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"row 2 col 1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"col2"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"row 2 col 2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"col3"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"row 2 col 3"')]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"related"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"categoryHandle"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"@model"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Category"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"params"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"slug"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"slug-1"')]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"featureImage"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"@model"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Asset"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"params"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{attrs:{class:"token property"}},[t._v('"filename"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"filename.png"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"newElements"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{attrs:{class:"token property"}},[t._v('"@model"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Category"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{attrs:{class:"token property"}},[t._v('"attributes"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token property"}},[t._v('"groupId"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token property"}},[t._v('"enabled"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n              "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{attrs:{class:"token property"}},[t._v('"content"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token property"}},[t._v('"title"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"San Francisco"')]),t._v("\n              "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"updateElement"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"matchBy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"id"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"matchValue"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"matchCriteria"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"section"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"news"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"defaults"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"authorId"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("76")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])],2),t._m(5),a("code-toggle",{attrs:{languages:["craft3"]}},[a("template",{slot:"craft3"},[a("div",{staticClass:"language-craft3 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n  {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Entry",\n    "attributes": {\n      "sectionId": 2,\n      "typeId": 2,\n      "authorId": 1,\n      "slug": "entry-slug",\n      "postDate": "2016-02-26 08:02:39",\n      "expiryDate": null,\n      "enabled": true\n    },\n    "content": {\n      "title": "Entry title",\n      "fields": {\n        "body": "Body content",\n        "longformContentMatrix": {\n          "new1": {\n            "type": "headingBlock",\n            "enabled": 1,\n            "fields": {\n              "heading": "Lorem ipsum dolor"\n            }\n          },\n          "new2": {\n            "type": "imageBlock",\n            "enabled": 1,\n            "fields": {\n              "image": [\n                72\n              ],\n              "caption": "Deserunt quam cupiditate fugit et dolorem saepe."\n            }\n          }\n        }\n      }\n    }\n  }\n]\n')])])])])],2),t._m(6),a("code-toggle",{attrs:{languages:["craft3"]}},[a("template",{slot:"craft3"},[a("div",{staticClass:"language-craft3 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n  {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Entry",\n    "attributes": {\n      "sectionId": 1,\n      "typeId": 1,\n      "authorId": 1,\n      "slug": "entry-slug",\n      "postDate": "2015-02-27 16:43:52",\n      "expiryDate": null,\n      "enabled": true\n    },\n    "content": {\n      "title": "Entry title",\n      "fields": {\n        "body": "Body content"\n      }\n    },\n    "enableVersioning": true\n  },\n  {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Entry",\n    "attributes": {\n      "sectionId": 1,\n      "typeId": 1,\n      "authorId": 1,\n      "slug": "entry-slug",\n      "postDate": "2015-02-27 16:43:52",\n      "expiryDate": null,\n      "enabled": true\n    },\n    "content": {\n      "title": "Entry title two",\n      "fields": {\n        "body": "Body content two",\n        "plainText": "plain text version 2"\n      }\n    },\n    "settings": {\n      "updateElement": {\n        "matchBy": "slug",\n        "matchValue": "entry-slug",\n        "matchCriteria": {\n          "section": "blog"\n        }\n      }\n    },\n    "enableVersioning": true\n  },\n  {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Entry",\n    "attributes": {\n      "sectionId": 1,\n      "typeId": 1,\n      "authorId": 1,\n      "slug": "entry-slug",\n      "postDate": "2015-02-27 16:43:52",\n      "expiryDate": null,\n      "enabled": true\n    },\n    "content": {\n      "title": "Entry title three",\n      "fields": {\n        "body": "Body content three",\n        "testTable": [\n          {\n            "col1": "row 1 col 1",\n            "col2": "row 1 col 2",\n            "col3": "row 1 col 3"\n          },\n          {\n            "col1": "row 2 col 1",\n            "col2": "row 2 col 2",\n            "col3": "row 2 col 3"\n          }\n        ]\n      }\n    },\n    "settings": {\n      "updateElement": {\n        "matchBy": "slug",\n        "matchValue": "entry-slug",\n        "matchCriteria": {\n          "section": "blog"\n        }\n      }\n    },\n    "enableVersioning": true\n  }\n]\n')])])])])],2)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"authors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authors","aria-hidden":"true"}},[this._v("#")]),this._v(" Authors")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"match-by-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#match-by-id","aria-hidden":"true"}},[this._v("#")]),this._v(" Match by ID")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"match-by-email"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#match-by-email","aria-hidden":"true"}},[this._v("#")]),this._v(" Match by Email")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"match-by-username"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#match-by-username","aria-hidden":"true"}},[this._v("#")]),this._v(" Match by Username")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"relations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relations","aria-hidden":"true"}},[this._v("#")]),this._v(" Relations")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"matrix-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#matrix-fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Matrix Fields")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"versions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#versions","aria-hidden":"true"}},[this._v("#")]),this._v(" Versions")])}],!1,null,null,null);e.options.__file="entries.md";s.default=e.exports}}]);