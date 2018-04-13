webpackJsonp([4],{"3B/7":function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s("WT6e"),p=s("HZoP"),o={sections:[{description:s("ReA0"),component:p.a,files:[{file:"buttons-basic.component.ts",content:s("Z245")}]}]},e=function(){},c=s("9pkN"),l=s("NfKk"),r=s("aw/f"),i=s("gk/o"),u=s("VJIW"),k=s("v7sp"),d=s("WmKA"),m=s("Xjw4"),_=s("7DMc"),f=s("/CuN"),g=s("F6a+"),b=s("oZUJ"),w=s("EhhW"),v=s("Yi4Z"),y=s("bfOx"),h=s("g/oT"),O=s("xvT5"),x=s("o/kJ"),j=s("0iYE"),S=s("E/IV"),A=s("8bQ4"),C=s("O88U"),T=s("4oT2"),B=s("lSkH"),E=s("WHxf"),W=s("rkTs"),J=s("55By"),N=s("Y3NR"),R=s("XBw/"),Z=s("SGGu"),H=s("h+R6"),M=s("lS/x"),V=s("RaSy"),z=s("l+PT"),G=s("GKJs");s.d(a,"ButtonsBasicConfigModuleNgFactory",function(){return K});var K=t._1(e,[],function(n){return t._12([t._13(512,t.j,t.X,[[8,[c.a,l.e,r.b,r.a,r.d,r.e,r.f,r.c,r.i,r.g,r.j,r.h,r.k,i.a,u.a,k.a,d.a]],[3,t.j],t.v]),t._13(4608,m.m,m.l,[t.s,[2,m.r]]),t._13(4608,_.A,_.A,[]),t._13(4608,_.g,_.g,[]),t._13(4608,f.a,f.a,[]),t._13(4608,g.a,g.a,[t.j,t.x,t.p,f.a,t.g]),t._13(4608,b.a,b.a,[]),t._13(4608,w.a,w.a,[]),t._13(4608,v.d,v.d,[v.i]),t._13(4608,v.j,v.j,[]),t._13(4608,v.g,v.g,[v.d,v.j]),t._13(512,m.c,m.c,[]),t._13(512,y.n,y.n,[[2,y.s],[2,y.k]]),t._13(512,_.x,_.x,[]),t._13(512,_.l,_.l,[]),t._13(512,_.t,_.t,[]),t._13(512,h.b,h.b,[]),t._13(512,h.d,h.d,[]),t._13(512,h.c,h.c,[]),t._13(512,h.g,h.g,[]),t._13(512,h.e,h.e,[]),t._13(512,h.a,h.a,[]),t._13(512,h.f,h.f,[]),t._13(512,O.a,O.a,[]),t._13(512,x.a,x.a,[]),t._13(512,j.a,j.a,[]),t._13(512,S.a,S.a,[]),t._13(512,A.a,A.a,[]),t._13(512,C.a,C.a,[]),t._13(512,T.a,T.a,[]),t._13(512,B.a,B.a,[]),t._13(512,E.a,E.a,[]),t._13(512,W.a,W.a,[]),t._13(512,J.a,J.a,[]),t._13(512,N.a,N.a,[]),t._13(512,v.h,v.h,[]),t._13(512,R.a,R.a,[]),t._13(512,Z.a,Z.a,[]),t._13(512,H.a,H.a,[]),t._13(512,M.a,M.a,[]),t._13(512,e,e,[]),t._13(256,V.a,{autoClose:!0},[]),t._13(1024,v.i,function(){return[{types:[{name:"formly-group",component:v.k}]},{types:[{name:"input",component:R.c,wrappers:["fieldset","label"]},{name:"checkbox",component:R.b,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:R.e,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:R.f,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:R.g,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:R.d,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:R.j},{name:"description",component:R.h},{name:"validation-message",component:R.k},{name:"fieldset",component:R.i},{name:"addons",component:R.l}],manipulators:[{class:R.m,method:"run"},{class:R.n,method:"run"},{class:R.o,method:"run"}]},{types:[{name:"formly-group",component:v.k}]},{types:[{name:"inputHorizontal",extends:"input",wrappers:["fieldset","horizontalWrapper"]}],wrappers:[{name:"horizontalWrapper",component:z.a},{name:"wrapper",component:z.a}],validators:[],validationMessages:[{name:"email",message:"The email address does not seem to be valid."},{name:"required",message:"This field is required."}]}]},[]),t._13(1024,y.i,function(){return[[{path:"",component:G.a,data:o}]]},[])])})},ReA0:function(n,a){n.exports='<h2 id="basic-buttons">Basic buttons</h2>\n<p>The <code>ui-button</code> component allows you to generate buttons.</p>\n'},Z245:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'app-buttons\'</span><span class="token punctuation" >,</span>\n  template<span class="token punctuation" >:</span> `\n    <span class="token operator" >&lt;</span>div <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"row"</span><span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>div <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"col"</span><span class="token operator" >></span>\n        <span class="token operator" >&lt;</span>ui<span class="token operator" >-</span>buttons <span class="token punctuation" >[</span>config<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"buttons"</span> <span class="token punctuation" >(</span>action<span class="token punctuation" >)</span><span class="token operator" >=</span><span class="token string" >"handleAction($event)"</span><span class="token operator" >></span><span class="token operator" >&lt;</span><span class="token operator" >/</span>ui<span class="token operator" >-</span>buttons<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>div <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"col"</span><span class="token operator" >></span>\n        <span class="token operator" >&lt;</span>app<span class="token operator" >-</span>docs<span class="token operator" >-</span>json <span class="token punctuation" >[</span>model<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"action"</span><span class="token operator" >></span><span class="token operator" >&lt;</span><span class="token operator" >/</span>app<span class="token operator" >-</span>docs<span class="token operator" >-</span>json<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n  `<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >ButtonsBasicComponent</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >public</span> action <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span>\n  <span class="token keyword" >public</span> buttons <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'success\'</span><span class="token punctuation" >,</span>\n      label<span class="token punctuation" >:</span> <span class="token string" >\'Save\'</span><span class="token punctuation" >,</span>\n      event<span class="token punctuation" >:</span> <span class="token string" >\'SAVE\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'outline-success\'</span><span class="token punctuation" >,</span>\n      label<span class="token punctuation" >:</span> <span class="token string" >\'Save and close\'</span><span class="token punctuation" >,</span>\n      event<span class="token punctuation" >:</span> <span class="token string" >\'SAVE_CLOSE\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'outline-secondary\'</span><span class="token punctuation" >,</span>\n      label<span class="token punctuation" >:</span> <span class="token string" >\'Close\'</span><span class="token punctuation" >,</span>\n      event<span class="token punctuation" >:</span> <span class="token string" >\'CLOSE\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span>\n\n  <span class="token function" >handleAction</span><span class="token punctuation" >(</span>$event<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>action <span class="token operator" >=</span> $event\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'}});