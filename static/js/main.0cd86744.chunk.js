(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),u=n(1),a=(n(13),n(14),n(4)),l=n.n(a),b=n(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var h=function(){var t=Object(u.useState)(0),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(u.useState)(!1),a=Object(i.a)(o,2),h=a[0],d=a[1],p=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(r.a)(t);return n===s.ALPHABET&&o.sort((function(t,e){return t.localeCompare(e)})),n===s.LENGTH&&o.sort((function(t,e){return t.length-e.length})),c?o.reverse():o}(j,{sortType:n,isReversed:h});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button","is-info",1===n?"":"is-light"),onClick:function(){return c(1)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-success",2===n?"":"is-light"),onClick:function(){return c(2)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-warning",h?"":"is-light"),onClick:function(){d((function(t){return!t}))},children:"Reverse"}),(h||0!==n)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(0),d(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:p.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0cd86744.chunk.js.map