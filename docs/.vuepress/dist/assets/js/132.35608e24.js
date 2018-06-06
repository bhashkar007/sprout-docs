(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{270:function(t,e,n){"use strict";n.r(e);var a=n(0),i=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",[t._v("Notification Events")]),n("p",[t._v("You can trigger Notification Emails via custom Notification Events in your own plugins. A Notification Event tells Sprout Email to watch for a particular Event (in Craft or another plugin) and provides validation rules that will be checked to determine when a Notification Email should be triggered.")]),n("p",[t._v("Adding custom events involves:")]),t._m(0),t._m(1),n("code-toggle",{attrs:{languages:["craft3","craft2"]}},[n("template",{slot:"craft3"},[n("div",{staticClass:"language-craft3 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("namespace company\\plugin\\folder;\n\nuse barrelstrength\\sproutbase\\app\\email\\base\\NotificationEvent;\n\nclass EntriesSave extends NotificationEvent\n{\n  ...\n}\n")])])])]),n("template",{slot:"craft2"},[n("div",{staticClass:"language-craft2 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<?php\nnamespace Craft;\n\nclass SproutEmailEvents_BeforeSaveEntryEvent extends SproutEmailBaseEvent\n{\n  /**\n   * Returns the qualified event name to use when registering with craft()->on\n   * \n   * @return string\n   */\n  public function getName()\n  {\n    return 'entries.onBeforeSaveEntry';\n  }\n  \n  /**\n   * Returns the event title to use when displaying a label or similar use case\n   *\n   * @return string\n   */\n  public function getTitle()\n  {\n    return Craft::t('Before an entry is saved');\n  }\n\n  /**\n   * Returns a short description of this event\n   *\n   * @return string\n   */\n  public function getDescription()\n  {\n    return Craft::t('Triggers before an entry is saved.');\n  }\n  \n  /**\n   * Validate your Event options\n   *\n   * @return bool\n   */\n  public function validateOptions()\n  {\n    return true;\n  }\n  \n  /**\n   * Returns the data passed in by the triggered event\n   *\n   * @param Event $event\n   *\n   * @return mixed\n   */\n  public function prepareParams(Event $event)\n  {\n    return array(\n      'value'      => array(\n        $event->params['entry'],\n        'isNewEntry' => $event->params['isNewEntry']\n      )\n  \n    );\n  }\n}\n")])])])])],2),t._m(2),n("p",[t._v("See the base NotificationEvent Class for documentation on usage:")]),t._m(3),n("p",[t._v("Examples can be found in:")]),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/barrelstrength/craft-sprout-email/tree/develop/src/events/notificationevents",target:"_blank",rel:"noopener noreferrer"}},[t._v("sprout-email/src/events/notificationevents/"),n("OutboundLink")],1)])]),t._m(4),t._m(5),n("div",{pre:!0},[n("p",[t._v("To demonstrate how to add a custom event via a plugin, we've created an example plugin that implements the Craft "),n("code",[t._v("onBeforeSaveEntry")]),t._v(" Event: "),n("a",{attrs:{href:"https://s3.amazonaws.com/sprout.barrelstrengthdesign.com-assets/content/docs/sproutemailevents.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sprout Email Events Plugin"),n("OutboundLink")],1)])]),t._m(6),t._m(7),n("p",[t._v("To tell Sprout Email that your event exists you need to register it in your plugin's Primary Class file.")]),n("code-toggle",{attrs:{languages:["craft3","craft2"]}},[n("template",{slot:"craft3"},[n("div",{staticClass:"language-craft3 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("namespace mycompany\\myplugin;\n\nuse mycompany\\myplugin\\integrations\\sproutemail\\events\\notificationevents\\MyNotificationEvent;\nuse barrelstrength\\sproutbase\\app\\email\\services\\NotificationEmailEvents;\nuse barrelstrength\\sproutbase\\app\\email\\events\\NotificationEmailEvent;\nuse yii\\base\\Event;\n\nclass MyPlugin extends Plugin\n{\n\n  public function init()\n  {\n    parent::init();\n    \n    Event::on(NotificationEmailEvents::class, NotificationEmailEvents::EVENT_REGISTER_EMAIL_EVENT_TYPES, function(NotificationEmailEvent $event) {\n        $event->events[] = MyNotificationEvent::class;\n    });\n  \n  }\n}\n")])])])]),n("template",{slot:"craft2"},[n("div",{staticClass:"language-craft2 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("/**\n * Defines events/rules for notification entries in Sprout Email\n *\n * @return array\n */\npublic function defineSproutEmailEvents()\n{\n  Craft::import('plugins.sproutemailevents.integrations.sproutemail.SproutEmailEvents_BeforeSaveEntryEvent');\n  \n  return array(\n    'entries.onBeforeSaveEntry' => new SproutEmailEvents_BeforeSaveEntryEvent()\n  );\n}\n")])])])])],2)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Extending Sprout Email's Notification Event class")]),e("li",[this._v("Registering your Notification Event")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"notification-event-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notification-event-class","aria-hidden":"true"}},[this._v("#")]),this._v(" Notification Event Class")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"craft-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 3")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"./https://github.com/barrelstrength/craft-sprout-base/blob/v2/src/app/email/base/NotificationEvent.php"}},[this._v("sprout-base/src/app/email/base/NotificationEvent.php")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"craft-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 2")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Extend SproutEmailBaseEvent with your custom event")]),e("li",[this._v("Register your event using the defineSproutEmailEvents() hook")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("Additional implementation examples can be seen in Sprout Email itself ("),e("code",[this._v("sproutemail/integrations/sproutemail")]),this._v(").")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"register-event"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#register-event","aria-hidden":"true"}},[this._v("#")]),this._v(" Register Event")])}],!1,null,null,null);e.default=i.exports}}]);