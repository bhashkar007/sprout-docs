# Longform Content Matrix

Build a Longform Content Matrix and reuse it from project to project.

``` json
[
  {
    "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
    "groupId": 1,
    "name": "Longform Content Body",
    "handle": "longformContentBody",
    "instructions": "",
    "type": "craft\\fields\\Matrix",
    "settings": {
      "blockTypes": {
        "new1": {
          "name": "Heading",
          "handle": "headingBlock",
          "fields": {
            "new1": {
              "name": "Heading",
              "handle": "heading",
              "instructions": "",
              "type": "craft\\fields\\PlainText",
              "typesettings": {
                "placeholder": "",
                "multiline": false
              }
            }
          }
        },
        "new2": {
          "name": "Subheading",
          "handle": "subheadingBlock",
          "fields": {
            "new1": {
              "name": "Subheading",
              "handle": "subheading",
              "instructions": "",
              "type": "craft\\fields\\PlainText",
              "typesettings": {
                "placeholder": "",
                "multiline": false
              }
            }
          }
        },
        "new3": {
          "name": "Text",
          "handle": "textBlock",
          "fields": {
            "new1": {
              "name": "Text",
              "handle": "text",
              "instructions": "",
              "type": "craft\\fields\\RichText",
              "typesettings": {
                "cleanupHtml": true,
                "purifyHtml": true,
                "columnType": "text"
              }
            }
          }
        },
        "new4": {
          "name": "Quote",
          "handle": "quoteBlock",
          "fields": {
            "new1": {
              "name": "Quote",
              "handle": "quote",
              "instructions": "",
              "type": "craft\\fields\\PlainText",
              "typesettings": {
                "placeholder": "",
                "multiline": true,
                "initialRows": 4
              }
            },
            "new2": {
              "name": "Attribution",
              "handle": "attribution",
              "instructions": "",
              "type": "craft\\fields\\PlainText",
              "typesettings": {
                "placeholder": "",
                "multiline": false
              }
            }
          }
        }
      },
      "maxBlocks": null
    }
  }
]
```