"use strict";function _interopRequireDefault(a){return a&&a.__esModule?a:{"default":a}}var _ipc=require("ipc"),_ipc2=_interopRequireDefault(_ipc),website=document.getElementById("website"),host="https://support.jibo.com/login",ready=!1;website.addEventListener("dom-ready",function(){website.insertCSS("#logged_in_as_sp, #not_you_link_sp{display: none;}"),ready=!0}),document.title="Jibo SDK",setInterval(function(){ready&&"https://www.jibo.com/"===website.getUrl()&&_ipc2["default"].send("quit-app")},100);
