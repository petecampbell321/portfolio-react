(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/profile.f74e0255.JPG"},30:function(e,t,a){e.exports=a(56)},35:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),i=a.n(c),r=(a(35),a(2)),s=a(3),o=a(5),m=a(4),u=a(6),d=a(15),p=a(11),h=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),b=Object(p.k)(h),E=a(28),f=(a(24),a(44),a(12)),v=a(13),j=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"landing-container"},l.a.createElement("div",{className:"landing-content"},l.a.createElement("svg",{id:"logo","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 982 500"},l.a.createElement("defs",null,l.a.createElement("style",null,".cls-1{fill:#53c9b4;}",".cls-2{fill:#c95a36;}")),l.a.createElement("title",null,"Artboard 1"),l.a.createElement("path",{id:"Ellipse_Green","data-name":"Ellipse Green",className:"cls-1",d:"M254.6,9.08C385.16,9.08,491,114.9,491,245.44S385.16,481.8,254.6,481.8,18.2,376,18.2,245.44,124,9.08,254.6,9.08Z"}),l.a.createElement("circle",{id:"Ellipse_Orange_","data-name":"Ellipse Orange ",className:"cls-2",cx:"727.41",cy:"245.45",r:"236.41"})),l.a.createElement("p",null,"Hi! I'm ",l.a.createElement("span",{className:"heavy-font"},"Pete Campbell"),"!"),l.a.createElement("p",null,l.a.createElement("span",{className:"green-font heavy-font"},"Designer")," & ",l.a.createElement("span",{className:"orange-font heavy-font"},"Developer")),l.a.createElement("p",{className:"small-font"},"(Of this site and some others)"),l.a.createElement(E.HashLink,{to:"#choice"},l.a.createElement("p",{className:"small-font",id:"scroller"},"Dive deeper ",l.a.createElement(f.a,{icon:v.c,id:"arrow"})))))}}]),t}(n.Component),O=(a(48),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"choice-container",id:"choice"},l.a.createElement("h2",{className:"section-title"},"Choose Your Path..."),l.a.createElement("div",{className:"option-container"},l.a.createElement("div",{className:"option",id:"projects"},l.a.createElement(d.Link,{to:"/projects"},l.a.createElement(f.a,{icon:v.b,size:"3x"}),l.a.createElement("h3",null,"Projects"))),l.a.createElement("div",{className:"option",id:"about"},l.a.createElement(d.Link,{to:"/about"},l.a.createElement(f.a,{icon:v.d,size:"3x"}),l.a.createElement("h3",null,"About Me")))))}}]),t}(n.Component)),g=(a(49),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(O,null))}}]),t}(n.Component)),y=[{id:1,name:"Harron Framing",type:["Website Design","Website Development","Ad Design"],desc:"Harron Framing is a local business that specialise in\n            framing anything from artwork to sports jerseys. I designed\n            and developed a website for them to help them with their online\n            presence. I also produced an advertisment for them to place in\n            a local news magazine."},{id:2,name:"Allied Financial Consultancy",type:["Website Design","Website Development"],desc:"A website that I designed and developed for Allied Financial\n            Consultancy so that people could go online and learn more about\n            their business and what they offer."},{id:3,name:"This Website!",type:["Website Design","Website Development"],desc:"This website was built using React to dynamically generate\n                content based on project objects that contained the required data."},{id:4,name:"Test Project",type:["Test"],desc:"This is a test project!!"},{id:5,name:"Test Project",type:["Test"],desc:"This is a test project!!"},{id:6,name:"Test Project",type:["Test"],desc:"This is a test project!!"}],N=function(){function e(){Object(r.a)(this,e),this.data=y}return Object(s.a)(e,[{key:"getList",value:function(){for(var e=0;e<this.data.length;e++);}}]),e}(),w=a(17),C=(a(50),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={id:"",name:"",type:"",desc:""},a.handleIdChange=a.handleIdChange.bind(Object(w.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(w.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleIdChange",value:function(e){this.setState({id:e.target.value})}},{key:"handleSubmit",value:function(e){alert("ID is: "+this.state.value),console.log("ID is: "+this.state.id),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"addFormWrapper"},l.a.createElement("h2",null,"Add Project"),l.a.createElement("form",{onSubmit:this.handleIdChange},l.a.createElement("label",null,"ID:",l.a.createElement("input",{type:"text",name:"id",value:this.state.id,onChange:this.handleIdChange})),l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleIdChange})),l.a.createElement("label",null,"Type:",l.a.createElement("input",{type:"text",name:"type",value:this.state.type,onChange:this.handleIdChange})),l.a.createElement("label",null,"Description:",l.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:this.handleIdChange})),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component)),k=(a(51),a(52),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).id=e.id,a.name=e.name,a.type=e.type,a.desc=e.desc,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"project-container"},l.a.createElement("div",{className:"project-header"},l.a.createElement("h1",null,this.name),l.a.createElement("hr",null)),l.a.createElement("div",{className:"project-desc"},l.a.createElement("p",null,this.desc)))}}]),t}(n.Component)),D=(a(53),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=y.map(function(e){return l.a.createElement(k,{key:e.id,name:e.name,type:e.type,desc:e.desc})});return l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"section-title"},"My Projects"),l.a.createElement("div",{className:"list-container"},e))}}]),t}(n.Component)),I=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).controller=new N,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"admin-wrapper"},l.a.createElement("h1",null,"Admin Page"),l.a.createElement("p",null,"Admin stuffs..."),l.a.createElement("div",{className:"add-form"},l.a.createElement(C,null)),l.a.createElement("div",{className:"admin-project-view"},l.a.createElement(D,null)))}}]),t}(n.Component),P=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(D,null)}}]),t}(n.Component),x=(a(54),a(18)),T=a(29),A=a.n(T),W=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tempor ex. Suspendisse at lacinia mi. Praesent tempor nulla vel tristique posuere. Donec urna velit, mattis vel ante eget, volutpat mollis odio. Proin eget mattis eros, non sollicitudin sapien. Nulla ultricies sagittis est, ac venenatis lorem rhoncus sed. Cras tincidunt eleifend est, vel porttitor tellus dignissim sed. Curabitur sodales lobortis nisi, eget fermentum turpis vehicula sed. Etiam interdum consequat nisi. Aenean placerat ornare nisi nec efficitur. Suspendisse faucibus libero sem, cursus finibus urna ultrices luctus.";return l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"about-sidebar"},l.a.createElement("img",{src:A.a,alt:"profile"}),l.a.createElement("h1",null,"Pete Campbell"),l.a.createElement("h2",null,"Freelance developer"),l.a.createElement("div",{className:"about-socials"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:contact@petecampbell.me.uk"},l.a.createElement(f.a,{icon:v.a,className:"icon",size:"sm"})),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/petecamp.design/"},l.a.createElement(f.a,{icon:x.a,className:"icon",size:"sm"})),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/petecampbell321"},l.a.createElement(f.a,{icon:x.b,className:"icon",size:"sm"})))),l.a.createElement("div",{className:"about-content"},l.a.createElement("div",{className:"about-profile"},l.a.createElement("h1",null,"Profile"),l.a.createElement("h2",null,"Personal Info:"),l.a.createElement("p",null,e)),l.a.createElement("div",{className:"about-qualifications"},l.a.createElement("h1",null,"Qualifications"),l.a.createElement("p",null,e)),l.a.createElement("div",{className:"about-tech"},l.a.createElement("h1",null,"Experience"),l.a.createElement("h2",null,"Technologies"),l.a.createElement("p",null,e),l.a.createElement("h2",null,"Companies"),l.a.createElement("p",null,e)),l.a.createElement("div",{className:"about-projects"})))}}]),t}(n.Component),S=(a(55),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.BrowserRouter,null,l.a.createElement(b,null,l.a.createElement("div",null,l.a.createElement(p.g,null,l.a.createElement(p.d,{path:"/",exact:!0,component:g}),l.a.createElement(p.d,{path:"/admin",component:I}),l.a.createElement(p.d,{path:"/projects",component:P}),l.a.createElement(p.d,{path:"/about",component:W})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.e9784597.chunk.js.map