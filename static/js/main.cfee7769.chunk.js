(this.webpackJsonpignat_hw=this.webpackJsonpignat_hw||[]).push([[0],[,,,,function(e,n,t){e.exports={superInput:"SuperInputText_superInput__1qmdT",errorInput:"SuperInputText_errorInput__3uBVc",error:"SuperInputText_error__1Dzcw"}},,function(e,n,t){e.exports={blue:"HW4_blue__2PSjJ",column:"HW4_column__1Pd64",testSpanError:"HW4_testSpanError__1T1Z5"}},function(e,n,t){e.exports={default:"SuperButton_default__1gYbg",red:"SuperButton_red__1pLp4"}},function(e,n,t){e.exports={checkbox:"SuperCheckbox_checkbox__2dgU4",spanClassName:"SuperCheckbox_spanClassName__1-5Kp"}},,,function(e,n,t){e.exports={App:"App_App__3NnBl"}},,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),r=t(10),s=t.n(r),o=(t(16),t(11)),u=t.n(o),l=t(9),i=t(2),h=t(3),j=t(4),p=t.n(j),d=t(0),b=function(e){e.type;var n=e.onChange,t=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,s=(e.className,e.spanClassName),o=Object(h.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(p.a.error," ").concat(s||""),l="".concat(r?p.a.errorInput:p.a.superInput);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(i.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:l,value:o.value},o)),r&&Object(d.jsx)("span",{className:u,children:r})]})},x=t(6),m=t.n(x),_=t(7),O=t.n(_),g=function(e){var n=e.red,t=e.className,c=Object(h.a)(e,["red","className"]),a="".concat(n?O.a.red:O.a.default," ").concat(t);return Object(d.jsx)("button",Object(i.a)({className:a},c))},C=t(8),f=t.n(C),k=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,c=e.className,a=(e.spanClassName,e.children),r=Object(h.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(f.a.checkbox," ").concat(c||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(i.a)({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),n&&n(e)},className:s,checked:r.checked},r)),a&&Object(d.jsx)("span",{className:f.a.spanClassName,children:a})]})};var N=function(){var e=Object(c.useState)(""),n=Object(l.a)(e,2),t=n[0],a=n[1],r=t?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(c.useState)(!1),u=Object(l.a)(o,2),i=u[0],h=u[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:m.a.column,children:[Object(d.jsx)(b,{value:t,onChangeText:a,onEnter:s,error:r}),Object(d.jsx)(b,{className:m.a.blue}),Object(d.jsx)(g,{children:"default"}),Object(d.jsx)(g,{red:!0,onClick:s,children:"delete"}),Object(d.jsx)(g,{disabled:!0,children:"disabled"}),Object(d.jsx)(k,{checked:i,onChangeChecked:h,children:"some text "}),Object(d.jsx)(k,{checked:i,onChange:function(e){return h(e.currentTarget.checked)},children:"some text -2"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var v=function(){return Object(d.jsxs)("div",{className:u.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(N,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.cfee7769.chunk.js.map