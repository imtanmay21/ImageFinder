(this["webpackJsonprecat-splash"]=this["webpackJsonprecat-splash"]||[]).push([[0],{15:function(e,t,n){e.exports={container:"Signup_container__3AIhA","signup-card":"Signup_signup-card__2zEA4",signup:"Signup_signup__6fKP5",error:"Signup_error__3EGML"}},16:function(e,t,n){e.exports={container:"Login_container__3xkM8","login-card":"Login_login-card__nKoA_",login:"Login_login__3zrGq",error:"Login_error__1A0-V"}},17:function(e,t,n){e.exports={"nav-container":"Navbar_nav-container__28X3g",navbar:"Navbar_navbar__1d7-H"}},22:function(e,t,n){e.exports={gallery:"Gallery_gallery__GbGNu",error:"Gallery_error__1WE7t"}},26:function(e,t,n){e.exports={bar:"SearchBar_bar__32esQ","search-btn":"SearchBar_search-btn__3nDFe"}},29:function(e,t,n){e.exports={button:"Button_button__3IfGz"}},32:function(e,t,n){e.exports={container:"Hero_container__T67Bz"}},33:function(e,t,n){e.exports={card:"Card_card__2HWLR"}},34:function(e,t,n){e.exports={button:"FormButton_button__1SreS"}},35:function(e,t,n){e.exports={link:"Link_link__1g9xl"}},41:function(e,t,n){},42:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(28),s=n.n(c),i=(n(41),n(42),n(8)),o=n.n(i),u=n(11),l=n(9),j=n(0),b=a.a.createContext(),d="22739805-bacc797b2dd224ccde2e7da7b";function p(){return Object(r.useContext)(b)}function h(e){var t=Object(r.useState)([]),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(!1),i=Object(l.a)(s,2),p=i[0],h=i[1],x={hits:a,isLoading:p,getImages:function(e){return O.apply(this,arguments)}};function O(){return(O=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),h(!0),e.next=5,fetch("https://pixabay.com/api/?key=".concat(d,"&q=").concat(t,"&image_type=photo&pretty=true"));case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,c(r.hits),console.log(a),h(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),c([]);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}return Object(j.jsx)(b.Provider,{value:x,children:e.children})}var x=n(22),O=n.n(x);function f(){var e=p(),t=e.hits,n=e.isLoading,r=t.map((function(e){return e.largeImageURL}));return Object(j.jsxs)("section",{children:[Object(j.jsx)("div",{className:O.a.gallery,children:!n&&t.length>0&&r.map((function(e,t){return Object(j.jsx)("img",{src:e,alt:e},t)}))}),!n&&0===t.length&&Object(j.jsx)("div",{className:O.a.error,children:Object(j.jsx)("h1",{children:"No results Found"})})]})}var v=n(3),m=n(29),g=n.n(m);function _(e){return Object(j.jsx)("button",{onClick:e.onClick,className:"".concat(g.a.button," ").concat(e.className),children:e.children})}var k=n(30),w=(n(45),k.a.initializeApp({apiKey:"AIzaSyAxfp0SY5KqTzQvpkG2PhgiJj2BnJqpE5Q",authDomain:"reactsplashdev.firebaseapp.com",projectId:"reactsplashdev",storageBucket:"reactsplashdev.appspot.com",messagingSenderId:"621896057242",appId:"1:621896057242:web:82c592a647021814e73a23"})),y=w.auth(),S=a.a.createContext();function N(){return Object(r.useContext)(S)}function I(e){var t=Object(r.useState)(),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(!0),i=Object(l.a)(s,2),o=i[0],u=i[1];Object(r.useEffect)((function(){return y.onAuthStateChanged((function(e){c(e),u(!1)}))}));var b={currentUser:a,signup:function(e,t){return y.createUserWithEmailAndPassword(e,t)},login:function(e,t){return y.signInWithEmailAndPassword(e,t)},logout:function(){return y.signOut()}};return Object(j.jsx)(S.Provider,{value:b,children:!o&&e.children})}var E=n(17),L=n.n(E);function A(){var e=N().logout,t=Object(v.g)();function n(){return(n=Object(u.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e();case 3:t.push("/login"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log("Something went wrong");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}return Object(j.jsx)("div",{className:L.a["nav-container"],children:Object(j.jsxs)("nav",{className:L.a.navbar,children:[Object(j.jsx)("h4",{children:"ReactSplash"}),Object(j.jsx)("div",{className:L.a["nav-links"],children:Object(j.jsx)(_,{onClick:function(){return n.apply(this,arguments)},children:"Logout"})})]})})}var P=n(26),C=n.n(P);function F(){var e=p().getImages,t=Object(r.useRef)();return Object(j.jsxs)("div",{className:C.a.bar,children:[Object(j.jsx)("input",{ref:t,type:"text",id:"search",placeholder:"Search over 4B+ photos..."}),Object(j.jsx)(_,{onClick:function(){t.current.value.replace(" ","+"),e(t.current.value),t.current.value=""},className:C.a["search-btn"],children:Object(j.jsx)("i",{className:"fas fa-search"})})]})}var B=n(32),R=n.n(B);function G(){return Object(j.jsxs)("section",{children:[Object(j.jsx)(A,{}),Object(j.jsx)("div",{className:R.a.container,children:Object(j.jsxs)(h,{children:[Object(j.jsx)(F,{}),Object(j.jsx)(f,{})]})})]})}var z=n(33),U=n.n(z);function D(e){return Object(j.jsx)("div",{className:"".concat(U.a.card," ").concat(e.className),children:e.children})}var W=n(34),q=n.n(W);function J(e){return Object(j.jsx)("button",{type:"submit",className:q.a.button,disabled:e.disabled,children:e.children})}var K=n(35),H=n.n(K);function M(e){return Object(j.jsx)("a",{href:e.to,className:H.a.link,children:e.children})}var Q=n(15),T=n.n(Q);function V(){var e=Object(r.useRef)(""),t=Object(r.useRef)(""),n=Object(r.useRef)(""),a=N().signup,c=Object(r.useState)(""),s=Object(l.a)(c,2),i=s[0],b=s[1],d=Object(r.useState)(!1),p=Object(l.a)(d,2),h=p[0],x=p[1],O=Object(v.g)();function f(){return(f=Object(u.a)(o.a.mark((function r(c){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(c.preventDefault(),t.current.value===n.current.value){r.next=3;break}return r.abrupt("return",b("Passwords do not match"));case 3:return r.prev=3,b(""),x(!0),r.next=8,a(e.current.value,t.current.value);case 8:O.push("/"),r.next=24;break;case 11:r.prev=11,r.t0=r.catch(3),r.t1=r.t0.code,r.next="auth/invalid-email"===r.t1?16:"auth/weak-password"===r.t1?18:"auth/email-already-in-use"===r.t1?20:22;break;case 16:return b("Invalid Email"),r.abrupt("break",24);case 18:return b("Password should contain at least 6 characters"),r.abrupt("break",24);case 20:return b("Email already exists"),r.abrupt("break",24);case 22:return b("Failed to create account"),r.abrupt("break",24);case 24:x(!1);case 25:case"end":return r.stop()}}),r,null,[[3,11]])})))).apply(this,arguments)}return Object(j.jsx)("div",{className:T.a.container,children:Object(j.jsx)(D,{className:T.a["signup-card"],children:Object(j.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},className:T.a.signup,children:[Object(j.jsx)("h1",{children:"SignUp"}),i&&Object(j.jsx)("label",{className:T.a.error,children:i}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",id:"email",ref:e})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",id:"password",ref:t})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"confirm-password",children:"Confirm Password"}),Object(j.jsx)("input",{type:"password",id:"confirm-password",ref:n})]}),Object(j.jsx)(J,{disabled:h,children:"SignUp"}),Object(j.jsxs)("p",{children:["Already have an account ? ",Object(j.jsx)(M,{to:"/login",children:"Log In"})," "]})]})})})}var X=n(16),Y=n.n(X);function Z(){var e=Object(r.useRef)(""),t=Object(r.useRef)(""),n=N().login,a=Object(r.useState)(""),c=Object(l.a)(a,2),s=c[0],i=c[1],b=Object(r.useState)(!1),d=Object(l.a)(b,2),p=d[0],h=d[1],x=Object(v.g)();function O(){return(O=Object(u.a)(o.a.mark((function r(a){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),r.prev=1,i(""),h(!0),r.next=6,n(e.current.value,t.current.value);case 6:x.push("/"),r.next=22;break;case 9:r.prev=9,r.t0=r.catch(1),r.t1=r.t0.code,r.next="auth/invalid-email"===r.t1?14:"auth/user-not-found"===r.t1?16:"auth/wrong-password"===r.t1?18:20;break;case 14:return i("Invalid Email"),r.abrupt("break",22);case 16:return i("Email does not exist"),r.abrupt("break",22);case 18:return i("Wrong Password"),r.abrupt("break",22);case 20:return i("Failed to log in"),r.abrupt("break",22);case 22:h(!1);case 23:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return Object(j.jsx)("div",{className:Y.a.container,children:Object(j.jsx)(D,{className:Y.a["login-card"],children:Object(j.jsxs)("form",{onSubmit:function(e){return O.apply(this,arguments)},className:Y.a.login,children:[Object(j.jsx)("h1",{children:"Log In"}),s&&Object(j.jsx)("label",{className:Y.a.error,children:s}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",id:"email",ref:e})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",id:"password",ref:t})]}),Object(j.jsx)(J,{disabled:p,children:"Login"}),Object(j.jsxs)("p",{children:["Don't have an account ? ",Object(j.jsx)(M,{to:"/signup",children:"Sign Up"})," "]})]})})})}var $=n(13),ee=n(18),te=n(36),ne=["component"];function re(e){var t=e.component,n=Object(te.a)(e,ne),r=N().currentUser;return Object(j.jsx)(v.b,Object(ee.a)(Object(ee.a)({},n),{},{render:function(e){return r?Object(j.jsx)(t,Object(ee.a)({},e)):Object(j.jsx)(v.a,{to:"/login"})}}))}var ae=function(){return Object(j.jsx)($.a,{children:Object(j.jsx)(I,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(v.d,{children:[Object(j.jsx)(re,{exact:!0,path:"/",component:G}),Object(j.jsx)(v.b,{path:"/signup",component:V}),Object(j.jsx)(v.b,{path:"/login",component:Z})]})})})})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(ae,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.b2cd54a6.chunk.js.map