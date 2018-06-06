(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{205:function(e,t,n){"use strict";n.r(t);var a=n(0),i=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",[e._v("Matrix Field")]),n("p",[e._v("Sprout Import supports importing Matrix fields on any supported Element using the Matrix; any number of block types; all supported fields used on those block types; and matching relational content and resolving relationships on block types. Hooray!")]),e._m(0),e._m(1),n("code-toggle",{attrs:{languages:["craft3","craft2"]}},[n("template",{slot:"craft3"},[n("div",{staticClass:"language-craft3 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[  \n\t{\n    "@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Entry",\n    "attributes": { ... },\n    "content": {\n      "title": "Aliquid vero ut libero nostrum soluta.",\n      "fields": {\n        "subheading": "Unde ut enim sed maxime.",\n        "articleBody": {\n          "new1": {\n            "type": "heading",\n            "enabled": 1,\n            "fields": {\n              "heading": "Hic suscipit esse temporibus quia."\n            }\n          },\n          "new2": {\n            "type": "image",\n            "enabled": 1,\n            "fields": {\n              "image": [223],\n              "caption": "Deserunt quam cupiditate fugit et dolorem saepe."\n            }\n          }\n        }\n      }\n    }\n  }\n]\n')])])])]),n("template",{slot:"craft2"},[n("div",{staticClass:"language-craft2 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[  \n\t{\n    "@model": "EntryModel",\n    "attributes": { ... },\n    "content": {\n      "title": "Aliquid vero ut libero nostrum soluta.",\n      "fields": {\n        "subheading": "Unde ut enim sed maxime.",\n        "articleBody": {\n          "new1": {\n            "type": "heading",\n            "enabled": 1,\n            "fields": {\n              "heading": "Hic suscipit esse temporibus quia."\n            }\n          },\n          "new2": {\n            "type": "image",\n            "enabled": 1,\n            "fields": {\n              "image": [223],\n              "caption": "Deserunt quam cupiditate fugit et dolorem saepe."\n            }\n          }\n        }\n      }\n    }\n  }\n]\n')])])])])],2),e._m(2),e._m(3),n("code-toggle",{attrs:{languages:["craft3","craft2"]}},[n("template",{slot:"craft3"},[n("div",{staticClass:"language-craft3 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[  \n\t{\n    "@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Entry",\n    "attributes": { ... },\n    "content": {\n      "title": "Aliquid vero ut libero nostrum soluta.",\n      "fields": {\n        "subheading": "Unde ut enim sed maxime.",\n        "articleBody": {\n          "new1": {\n            "type": "heading",\n            "enabled": 1,\n            "fields": {\n              "heading": "Hic suscipit esse temporibus quia."\n            }\n          },\n          "new2": {\n            "type": "image",\n            "enabled": 1,\n            "fields": {\n              "caption": "Deserunt quam cupiditate fugit et dolorem saepe."\n            },\n\t\t\t\t\t\t"related": {\n\t\t\t\t\t\t\t"assetsFieldHandle": {\n                "@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Asset",\n                "matchBy": "filename",\n                "matchValue": ["ImageName03.jpg"],\n                "matchCriteria": {\n                  "source": "images",\n                  "folderId": 8\n                }\n              }\n\t\t\t\t\t\t}\t\t\t\n          }\n        }\n      }\n    }\n  }\n]\n')])])])]),n("template",{slot:"craft2"},[n("div",{staticClass:"language-craft2 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[  \n\t{\n    "@model": "EntryModel",\n    "attributes": { ... },\n    "content": {\n      "title": "Aliquid vero ut libero nostrum soluta.",\n      "fields": {\n        "subheading": "Unde ut enim sed maxime.",\n        "articleBody": {\n          "new1": {\n            "type": "heading",\n            "enabled": 1,\n            "fields": {\n              "heading": "Hic suscipit esse temporibus quia."\n            }\n          },\n          "new2": {\n            "type": "image",\n            "enabled": 1,\n            "fields": {\n              "caption": "Deserunt quam cupiditate fugit et dolorem saepe."\n            },\n\t\t\t\t\t\t"related": {\n\t\t\t\t\t\t\t"assetsFieldHandle": {\n                "@model": "AssetModel",\n                "matchBy": "filename",\n                "matchValue": ["ImageName03.jpg"],\n                "matchCriteria": {\n                  "source": "images",\n                  "folderId": 8\n                }\n              }\n\t\t\t\t\t\t}\t\t\t\n          }\n        }\n      }\n    }\n  }\n]\n')])])])])],2),n("div",{pre:!0},[n("p",[e._v("See "),n("router-link",{attrs:{to:"./resolve-relationships.html"}},[e._v("Resolving Relationships")]),e._v(" for more examples of how to use the "),n("code",[e._v("related")]),e._v(" key.")],1)])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"matrix-syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#matrix-syntax","aria-hidden":"true"}},[this._v("#")]),this._v(" Matrix Syntax")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{pre:!0},[n("p",[e._v("Here is an example of an Entry Model with a Matrix field and two blocks. When importing matrix blocks you will need to name each item in the matrix block array with the "),n("code",[e._v("new")]),e._v(" prefix and increment each block by one: "),n("code",[e._v("new1")]),e._v(", "),n("code",[e._v("new2")]),e._v(", "),n("code",[e._v("new3")]),e._v(":")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"matrix-with-relationships"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#matrix-with-relationships","aria-hidden":"true"}},[this._v("#")]),this._v(" Matrix with Relationships")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{pre:!0},[t("p",[this._v("If you have Relations on your Matrix Blocks, you can also use the "),t("code",[this._v("related")]),this._v(" key:")])])}],!1,null,null,null);t.default=i.exports}}]);