(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{373:function(s,e,t){"use strict";t.r(e);var o=t(25),a=Object(o.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"hashed-passwords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashed-passwords"}},[s._v("#")]),s._v(" Hashed Passwords")]),s._v(" "),t("p",[s._v("When Alice logs into a host computer (or a telephone banking system, or any other type of terminal), how does the host know who she is? How does the host know she is not Eve trying to falsify Alice’s identity? Traditionally, passwords solve this problem. Alice enters her password, and the host confirms that it is correct. Both Alice and the host know this secret piece of knowledge, and the host requests it from Alice every time she tries to log in.")]),s._v(" "),t("p",[s._v("The host does not need to know the passwords; the host has to be able to differentiate valid passwords from invalid passwords. This is easy with one-way functions. Instead of storing passwords, the host stores hashes of the passwords.")]),s._v(" "),t("p",[s._v("Procedure")]),s._v(" "),t("ol",[t("li",[s._v("Alice sends the host her password.")]),s._v(" "),t("li",[s._v("The host performs a one-way function (hashing) on the password.")]),s._v(" "),t("li",[s._v("The host compares the result of the hashing to the value it previously stored.")])]),s._v(" "),t("p",[s._v("Since the host no longer stores a table of everybody’s valid passwords, the threat of someone breaking into the host and stealing the password list is mitigated.")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("The list of passwords operated on by hashing is useless because the hash cannot be reversed to recover the passwords.")])])])}),[],!1,null,null,null);e.default=a.exports}}]);