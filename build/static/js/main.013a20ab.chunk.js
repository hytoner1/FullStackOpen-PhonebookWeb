(this.webpackJsonpcourseinfo=this.webpackJsonpcourseinfo||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var o=t(14),r=t.n(o),a=t(3),c=t(1),i=t(0),u=function(e){var n=e.person,t=e.handleDelete;return console.log("Person",n),Object(i.jsxs)("li",{children:[n.name,"\xa0 ",n.number,"\xa0 ",Object(i.jsx)("button",{onClick:function(){return t(n)},children:" delete "})]},n.name)},l=function(e){var n=e.persons,t=e.handleDelete;return console.log("Persons",n),Object(i.jsx)("ul",{children:n.map((function(e){return Object(i.jsx)(u,{person:e,handleDelete:t},e.name)}))})},s=function(e){var n=e.addPerson,t=e.newName,o=e.handleNameChange,r=e.newNumber,a=e.handleNumberChange;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:t,onChange:o})]}),Object(i.jsxs)("p",{children:["number: ",Object(i.jsx)("input",{value:r,onChange:a})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.filter,t=e.onChange;return Object(i.jsx)("form",{children:Object(i.jsxs)("div",{children:["filter shown: ",Object(i.jsx)("input",{value:n,onChange:t})]})})},f={Notification:function(e){var n=e.message;if(null===n)return null;return Object(i.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"},children:n})},ErrorNotification:function(e){var n=e.message;if(null===n)return null;return Object(i.jsx)("div",{style:{color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"},children:n})}},j=t(4),b=t.n(j),h="/api/persons",m={getAll:function(){return b.a.get(h)},create:function(e){return b.a.post(h,e)},update:function(e,n){return console.log("update: ",e,n),b.a.put(h+"/"+e,n)},deleteEntry:function(e){return console.log("deleteEntry",e),b.a.delete(h+"/"+e)}},g=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(null),u=Object(a.a)(r,2),j=u[0],b=u[1],h=Object(c.useState)(null),g=Object(a.a)(h,2),O=g[0],p=g[1],x=Object(c.useState)(""),v=Object(a.a)(x,2),w=v[0],C=v[1],y=Object(c.useState)("01-02-"),N=Object(a.a)(y,2),S=N[0],D=N[1],k=Object(c.useState)(""),A=Object(a.a)(k,2),E=A[0],L=A[1];Object(c.useEffect)((function(){console.log("effect"),m.getAll().then((function(e){console.log("promise fulfilled"),o(e.data)}))}),[]);var P=""===E?t:t.filter((function(e){return e.name.toLowerCase().includes(E.toLowerCase())}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(f.Notification,{message:j}),Object(i.jsx)(f.ErrorNotification,{message:O}),Object(i.jsx)(d,{filter:E,onChange:function(e){L(e.target.value)}}),Object(i.jsx)("h2",{children:"Add new"}),Object(i.jsx)(s,{addPerson:function(e){if(e.preventDefault(),t.map((function(e){return e.name.toLowerCase()})).includes(w.toLowerCase())){if(!window.confirm('"'+w+'" is already in the phonebook! Do you want to replace the old number with the new one?'))return C(""),void D("01-02-");var n=t.find((function(e){return e.name.toLowerCase()===w.toLowerCase()}));n.number=S,m.update(n).then((function(e){m.getAll().then((function(e){o(e.data)}))})).catch((function(e){p('Information of "'+n.name+'" has already been removed from server'),m.getAll().then((function(e){o(e.data)})),setTimeout((function(){p(null)}),5e3)}))}else{var r={name:w,number:S};m.create(r).then((function(e){o(t.concat(e.data)),b("Added "+e.data.name),setTimeout((function(){b(null)}),5e3)}))}C(""),D("01-02-")},newName:w,handleNameChange:function(e){C(e.target.value)},newNumber:S,handleNumberChange:function(e){D(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(l,{persons:P,handleDelete:function(e){console.log("handleDelete",e),window.confirm("Delete "+e.name+"?")&&m.deleteEntry(e.id).then((function(e){m.getAll().then((function(e){o(e.data)}))}))}})]})};t(38);r.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.013a20ab.chunk.js.map