(this["webpackJsonphorario-react"]=this["webpackJsonphorario-react"]||[]).push([[0],{39:function(e,t,s){},4:function(e){e.exports=JSON.parse('[["08:00 - 08:30","","","","","Proyectos Colaborativos"],["08:30 - 09:00","Ingl\xe9s B\xe1sico II","","Proyectos Colaborativos","","Proyectos Colaborativos"],["09:00 - 09:30","Ingl\xe9s B\xe1sico II","","Proyectos Colaborativos","","Proyectos Colaborativos"],["09:30 - 10:00","Arquitectura De Sistemas","","","","Proyectos Colaborativos"],["10:00 - 10:30","Arquitectura De Sistemas","Taller De Preparaci\xf3n Laboral","Arquitectura De Sistemas","","Ingl\xe9s B\xe1sico II"],["10:30 - 11:00","","Taller De Preparaci\xf3n Laboral","Arquitectura De Sistemas","","Ingl\xe9s B\xe1sico II"],["11:00 - 11:30","","Taller De Preparaci\xf3n Laboral","","","Ingl\xe9s B\xe1sico II"],["11:30 - 12:00","","","","",""],["12:00 - 12:30","","","","",""],["12:30 - 13:00","","","","",""],["13:00 - 13:30","Internet De Las Cosas","Internet De Las Cosas","","",""],["13:30 - 14:00","Internet De Las Cosas","Internet De Las Cosas","","",""],["14:00 - 14:30","Internet De Las Cosas","","","",""],["14:30 - 15:00","Internet De Las Cosas","","","",""],["15:00 - 15:30","","","","",""],["15:30 - 16:00","","","","",""],["16:00 - 16:30","Programaci\xf3n Android","","Programaci\xf3n Android","",""],["16:30 - 17:00","Programaci\xf3n Android","","Programaci\xf3n Android","",""],["17:00 - 17:30","Programaci\xf3n Android","","Programaci\xf3n Android","",""],["17:30 - 18:00","Programaci\xf3n Android","","","",""]]')},40:function(e,t,s){"use strict";s.r(t);var r=s(2),a=s(10),c=s.n(a),n=s(0),i=function(){return Object(n.jsx)("header",{className:"py-3 select-none",children:Object(n.jsx)("h1",{className:"font-retro text-2xl sm:text-3xl md:text-4xl text-center text-white",children:"Horario 4\xb0 Semestre"})})},o=s(5),l=s(11),d=s.n(l),m=s(4);var b=s(1),j=s.n(b),h=function(e){var t=e.dia,s=e.diaN,r=j()().format("HH:mm");return Object(n.jsxs)("table",{className:"table-fixed w-full",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{className:"border-b-2",children:[Object(n.jsx)("th",{className:"w-1/3 border-r-2"}),Object(n.jsx)("th",{className:"w-2/3 border-l-2",children:t})]})}),Object(n.jsx)("tbody",{children:m.map((function(e,t){return j()(r,"HH:mm").isBetween(j()(e[0].split("-")[0],"HH:mm"),j()(e[0].split("-")[1],"HH:mm"))||j()(r,"HH:mm").isSame(j()(e[0].split("-")[0],"HH:mm"))?Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"w-1/3 border-r-2 bg-white bg-opacity-20",children:e[0]}),Object(n.jsx)("td",{className:"w-2/3 border-l-2 bg-white bg-opacity-20",children:e[s]})]},t):Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"w-1/3 border-r-2",children:e[0]}),Object(n.jsx)("td",{className:"w-2/3 border-l-2",children:e[s]})]},t)}))})]})},x=function(){var e=function(){var e=Object(r.useState)({width:void 0,height:void 0}),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),s}(),t=["Lunes","Martes","Miercoles","Jueves","Viernes"],s=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"],a=Object(r.useState)(j()().format("HH:mm")),c=Object(o.a)(a,2),i=c[0],l=c[1],b=new Date;setInterval((function(){l(j()().format("HH:mm"))}),1e3);var x=-1!==t.indexOf(s[b.getDay()])?t.indexOf(s[b.getDay()]):0,u={height:"".concat(e.height/1.2,"px"),minHeight:"400px"};return Object(n.jsx)("div",{className:"mt-2 md:mt-5 mx-auto w-full 2xl:w-5/6 select-none",children:e.width>=768?Object(n.jsxs)("table",{className:"table-fixed w-full bg-black bg-opacity-70 text-center font-sans text-white",children:[Object(n.jsx)("thead",{className:"bg-indigo-500",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{className:"w-hora"}),Object(n.jsx)("th",{className:"w-ramo",children:"Lunes"}),Object(n.jsx)("th",{className:"w-ramo",children:"Martes"}),Object(n.jsx)("th",{className:"w-ramo",children:"Miercoles"}),Object(n.jsx)("th",{className:"w-ramo",children:"Jueves"}),Object(n.jsx)("th",{className:"w-ramo",children:"Viernes"})]})}),Object(n.jsx)("tbody",{children:m.map((function(e,t){return j()(i,"HH:mm").isBetween(j()(e[0].split("-")[0],"HH:mm"),j()(e[0].split("-")[1],"HH:mm"))||j()(i,"HH:mm").isSame(j()(e[0].split("-")[0],"HH:mm"))?Object(n.jsx)("tr",{className:"bg-white bg-opacity-25",children:e.map((function(e,t){return Object(n.jsx)("td",{className:"",children:e},t)}))},t):Object(n.jsx)("tr",{className:"hover:bg-white hover:bg-opacity-25",children:e.map((function(e,t){return Object(n.jsx)("td",{className:"",children:e},t)}))},t)}))})]}):Object(n.jsx)(d.a,{enableMouseEvents:!0,index:x,className:"w-full select-none",style:u,children:t.map((function(e,t){return Object(n.jsx)("div",{className:"p-10 w-full text-white text-sm sm:text-lg text-center bg-black bg-opacity-60 rounded-3xl",style:u,children:Object(n.jsx)(h,{dia:e,diaN:t+1})},t+1)}))})})},u=function(){return Object(n.jsxs)("div",{className:"h-screen pt-2 md:pt-5",children:[Object(n.jsx)(i,{}),Object(n.jsx)(x,{})]})};s(39);c.a.render(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(u,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.cf1f99e2.chunk.js.map