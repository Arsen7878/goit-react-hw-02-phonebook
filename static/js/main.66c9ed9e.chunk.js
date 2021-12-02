(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__17yWm",input:"Filter_input__1eBLB"}},13:function(t,e,n){t.exports={item:"ContactList_item__1ESzm"}},14:function(t,e,n){t.exports={btn__item:"ContactListItem_btn__item__2nDfu"}},2:function(t,e,n){t.exports={form:"ContactForm_form__3iEZZ",input:"ContactForm_input__3fnkA",label:"ContactForm_label__3-AXe",form__btn:"ContactForm_form__btn__ojbwn"}},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(11),r=n.n(c),i=n(15),s=n(12),o=n(4),l=n(5),u=n(8),m=n(7),b=n(16),d=n(3),h=n(6),j=n(2),f=n.n(j),p=n(0),O=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){var n=Object(h.a)(t),a=n.props,c=n.reset,r=n.state;e.preventDefault(),a.onSubmit(r),c()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.form,children:[Object(p.jsxs)("label",{className:f.a.label,children:["Name",Object(p.jsx)("input",{className:f.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:this.state.name,onChange:this.handleChange,required:!0})]}),Object(p.jsxs)("label",{className:f.a.label,children:["Number",Object(p.jsx)("input",{className:f.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:this.state.number,onChange:this.handleChange,required:!0})]}),Object(p.jsx)("button",{type:"submit",className:f.a.form__btn,children:"Add contact"})]})})}}]),n}(a.Component),_=O,x=n(13),C=n.n(x),v=n(14),g=n.n(v),y=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDeleteContact;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{children:e+": "+n}),Object(p.jsx)("button",{type:"button",onClick:function(){return c(a)},className:g.a.btn__item,children:"Delete"})]})},N=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(p.jsx)("li",{className:C.a.item,children:Object(p.jsx)(y,{name:e,number:a,id:c,onDeleteContact:n})},c)}))})})},S=n(10),A=n.n(S),F=function(t){var e=t.value,n=t.changefilter;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("label",{className:A.a.label,children:["Find contacts by name",Object(p.jsx)("input",{className:A.a.input,type:"text",value:e,onChange:n})]})})},w=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){if(t.state.contacts.map((function(t){return t.name})).includes(e.name))alert("".concat(e.name," is already in contacts "));else{var n=Object(s.a)({id:Object(b.a)()},e);t.setState((function(t){var e=t.contacts;return{contacts:[n].concat(Object(i.a)(e))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changefilter=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.formSubmitHandler,n=this.deleteContact,a=this.changefilter,c=(0,this.getVisibleContacts)();return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(_,{onSubmit:e}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(F,{value:t,changefilter:a}),Object(p.jsx)(N,{contacts:c,onDeleteContact:n})]})}}]),n}(a.Component),k=w;n(22);r.a.render(Object(p.jsx)(k,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.66c9ed9e.chunk.js.map