(this["webpackJsonptic-tac-toe-react"]=this["webpackJsonptic-tac-toe-react"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(8),i=c.n(r),o=(c(14),c(9)),u=c(3),j=c(4),s=c(5),b=(c(15),c(0));var O=function(){var e=Object(n.useState)({x:[],o:[]}),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!0),i=Object(s.a)(r,2),O=i[0],l=i[1],f=Object(n.useState)({}),d=Object(s.a)(f,2),x=d[0],h=d[1],p=Object(n.useState)(null),v=Object(s.a)(p,2),m=v[0],g=v[1],S=[[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,6,9],[3,5,7],[4,5,6],[7,8,9]],C=function(){a({x:[],o:[]}),l(!0),h({}),g(null)};return Object(n.useEffect)((function(){var e=O?"o":"x";c[e].length>=3&&S.some((function(t){return t.every((function(t){return c[e].includes(t)}))}))&&g(e)}),[c]),Object(n.useEffect)((function(){m&&(alert("Player ".concat(m," won.")),C())}),[m]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Tic Tac Toe"}),Object(b.jsx)("button",{onClick:C,children:"Reset"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:[1,3,5].map((function(e,t){return Object(b.jsx)("div",{className:"squareRowWrapper",children:Array(3).fill(0).map((function(n,r){return Object(b.jsx)("div",{className:"square",onClick:function(){var n;x[n=e+t+r]||(h(Object(j.a)(Object(j.a)({},x),{},Object(u.a)({},n,O?"x":"o"))),a(Object(j.a)(Object(j.a)({},c),{},Object(u.a)({},O?"x":"o",[].concat(Object(o.a)(c[O?"x":"o"]),[n])))),l(!O))},children:x[e+t+r]||""})}))})}))})]})},l=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),l()}},[[17,1,2]]]);
//# sourceMappingURL=main.ed2e1d8a.chunk.js.map