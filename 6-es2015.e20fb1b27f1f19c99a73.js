(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/hoW":function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("lJxs"),l=e("8Y7J"),a=e("IheW");let o=(()=>{class n{constructor(n){this.http=n}getConfirmed(n){return this.http.get(`https://coronavirus-tracker-api.herokuapp.com/${n}`).pipe(Object(r.a)(n=>n.locations))}getAllEffect(){return this.http.get("https://coronavirus-tracker-api.herokuapp.com/all").pipe(Object(r.a)(n=>n.latest))}}return n.ngInjectableDef=l.Qb({factory:function(){return new n(l.Rb(a.c))},token:n,providedIn:"root"}),n})()},NvT6:function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return i}));var r=e("8Y7J"),l=(e("W5yJ"),e("SVse"));e("IP0z"),e("Xd0L"),e("cUpR"),e("/HVE"),e("omvX");var a=r.pb({encapsulation:2,styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],data:{}});function o(n){return r.Mb(0,[(n()(),r.rb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"animation-name",null],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,(function(n,t){var e=t.component;n(t,0,0,e._circleRadius,"mat-progress-spinner-stroke-rotate-"+e.diameter,e._strokeDashOffset,e._strokeCircumference,e._circleStrokeWidth)}))}function s(n){return r.Mb(0,[(n()(),r.rb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,(function(n,t){var e=t.component;n(t,0,0,e._circleRadius,e._strokeDashOffset,e._strokeCircumference,e._circleStrokeWidth)}))}function i(n){return r.Mb(2,[(n()(),r.rb(0,0,null,null,5,":svg:svg",[["focusable","false"],["preserveAspectRatio","xMidYMid meet"]],[[4,"width","px"],[4,"height","px"],[1,"viewBox",0]],null,null,null,null)),r.qb(1,16384,null,0,l.n,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),r.gb(16777216,null,null,1,null,o)),r.qb(3,278528,null,0,l.o,[r.N,r.K,l.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),r.gb(16777216,null,null,1,null,s)),r.qb(5,278528,null,0,l.o,[r.N,r.K,l.n],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(n,t){n(t,1,0,"indeterminate"===t.component.mode),n(t,3,0,!0),n(t,5,0,!1)}),(function(n,t){var e=t.component;n(t,0,0,e.diameter,e.diameter,e._viewBox)}))}},"uP/6":function(n,t,e){"use strict";e.r(t);var r=e("8Y7J");class l{}var a=e("pMnS"),o=e("NvT6"),s=e("W5yJ"),i=e("/HVE"),u=e("SVse"),c=e("omvX");class b{constructor(n){this.corona=n}ngOnInit(){this.corona.getAllEffect().subscribe(n=>{this.coronaData=n})}}var p=e("/hoW"),d=r.pb({encapsulation:0,styles:[[".heroes[_ngcontent-%COMP%]{max-width:960px;margin:0 auto}.heroes__title[_ngcontent-%COMP%]{text-align:center}.heroes__spinner[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:center;justify-content:center;margin-bottom:30px}"]],data:{}});function m(n){return r.Mb(0,[(n()(),r.rb(0,0,null,null,2,"div",[["class","heroes__spinner"]],null,null,null,null,null)),(n()(),r.rb(1,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,o.b,o.a)),r.qb(2,114688,null,0,s.d,[r.k,i.a,[2,u.d],[2,c.a],s.a],null,null)],(function(n,t){n(t,2,0)}),(function(n,t){n(t,1,0,r.Db(t,2)._noopAnimations,r.Db(t,2).diameter,r.Db(t,2).diameter)}))}function f(n){return r.Mb(0,[(n()(),r.rb(0,0,null,null,20,"div",[["class","heroes"]],null,null,null,null,null)),(n()(),r.rb(1,0,null,null,0,"div",[["class","heroes__title"]],null,null,null,null,null)),(n()(),r.gb(16777216,null,null,1,null,m)),r.qb(3,16384,null,0,u.k,[r.N,r.K],{ngIf:[0,"ngIf"]},null),(n()(),r.rb(4,0,null,null,11,"div",[["class","jumbotron"]],null,null,null,null,null)),(n()(),r.rb(5,0,null,null,1,"h1",[["class","display-4"]],null,null,null,null,null)),(n()(),r.Kb(-1,null,["Coronavirus Tracker"])),(n()(),r.rb(7,0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(n()(),r.Kb(-1,null,["This application lists out the current number of cases reported across the globe"])),(n()(),r.rb(9,0,null,null,0,"hr",[["class","my-4"]],null,null,null,null,null)),(n()(),r.rb(10,0,null,null,1,"button",[["class","btn btn-outline-primary btn-lg disabled"],["type","button"]],null,null,null,null,null)),(n()(),r.Kb(11,null,["Confirmed Cases ",""])),(n()(),r.rb(12,0,null,null,1,"button",[["class","btn btn-outline-danger btn-lg disabled"],["style","margin: 0px 15px;"],["type","button"]],null,null,null,null,null)),(n()(),r.Kb(13,null,["Death Tolls ",""])),(n()(),r.rb(14,0,null,null,1,"button",[["class","btn btn-outline-secondary btn-lg disabled"],["type","button"]],null,null,null,null,null)),(n()(),r.Kb(15,null,["Recovered Cases ",""])),(n()(),r.rb(16,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),r.rb(17,0,null,null,3,"h6",[["class","heroes__title"]],null,null,null,null,null)),(n()(),r.Kb(-1,null,[" CORONAVIRUS TRACKER "])),(n()(),r.rb(19,0,null,null,1,"small",[["class","text-muted"]],null,null,null,null,null)),(n()(),r.Kb(-1,null,[" ALL RIGHTS RESERVED TO VISHAL SINGH"]))],(function(n,t){n(t,3,0,!!t.component.loadingHeroes)}),(function(n,t){var e=t.component;n(t,11,0,null==e.coronaData?null:e.coronaData.confirmed),n(t,13,0,null==e.coronaData?null:e.coronaData.deaths),n(t,15,0,null==e.coronaData?null:e.coronaData.recovered)}))}function g(n){return r.Mb(0,[(n()(),r.rb(0,0,null,null,1,"app-dashboard",[],null,null,null,f,d)),r.qb(1,114688,null,0,b,[p.a],null,null)],(function(n,t){n(t,1,0)}),null)}var h=r.nb("app-dashboard",b,g,{},{},[]),k=e("t68o"),B=e("NcP4"),x=e("POq0"),v=e("Xd0L"),w=e("QQfA"),y=e("IP0z"),_=e("s6ns"),C=e("JjoW"),D=e("Mz6y"),O=e("cUpR"),S=e("OIZN"),I=e("7kcP"),M=e("iInd");class R{}var K=e("02hT"),N=e("Q+lL"),X=e("Fwaw"),j=e("oapL"),A=e("HsOI"),P=e("ZwOa"),E=e("zMNK"),J=e("hOhj"),T=e("Gi4r"),z=e("zQui"),H=e("8rEH"),W=e("5GAg"),q=e("PCNd");e.d(t,"DashboardModuleNgFactory",(function(){return L}));var L=r.ob(l,[],(function(n){return r.Ab([r.Bb(512,r.j,r.Z,[[8,[a.a,h,k.a,B.a]],[3,r.j],r.v]),r.Bb(4608,u.m,u.l,[r.s,[2,u.y]]),r.Bb(4608,x.c,x.c,[]),r.Bb(4608,v.d,v.d,[]),r.Bb(4608,w.c,w.c,[w.i,w.e,r.j,w.h,w.f,r.p,r.x,u.d,y.b,[2,u.g]]),r.Bb(5120,w.j,w.k,[w.c]),r.Bb(5120,_.b,_.c,[w.c]),r.Bb(135680,_.d,_.d,[w.c,r.p,[2,u.g],[2,_.a],_.b,[3,_.d],w.e]),r.Bb(5120,C.a,C.b,[w.c]),r.Bb(5120,D.b,D.c,[w.c]),r.Bb(4608,O.e,v.e,[[2,v.i],[2,v.n]]),r.Bb(5120,S.c,S.a,[[3,S.c]]),r.Bb(5120,I.d,I.a,[[3,I.d]]),r.Bb(1073742336,u.c,u.c,[]),r.Bb(1073742336,M.m,M.m,[[2,M.r],[2,M.k]]),r.Bb(1073742336,R,R,[]),r.Bb(1073742336,y.a,y.a,[]),r.Bb(1073742336,v.n,v.n,[[2,v.f],[2,O.f]]),r.Bb(1073742336,v.o,v.o,[]),r.Bb(1073742336,i.b,i.b,[]),r.Bb(1073742336,v.w,v.w,[]),r.Bb(1073742336,v.u,v.u,[]),r.Bb(1073742336,K.a,K.a,[]),r.Bb(1073742336,N.c,N.c,[]),r.Bb(1073742336,X.c,X.c,[]),r.Bb(1073742336,s.c,s.c,[]),r.Bb(1073742336,j.c,j.c,[]),r.Bb(1073742336,x.d,x.d,[]),r.Bb(1073742336,A.d,A.d,[]),r.Bb(1073742336,P.b,P.b,[]),r.Bb(1073742336,E.g,E.g,[]),r.Bb(1073742336,J.c,J.c,[]),r.Bb(1073742336,w.g,w.g,[]),r.Bb(1073742336,_.g,_.g,[]),r.Bb(1073742336,T.c,T.c,[]),r.Bb(1073742336,z.p,z.p,[]),r.Bb(1073742336,H.m,H.m,[]),r.Bb(1073742336,v.s,v.s,[]),r.Bb(1073742336,C.d,C.d,[]),r.Bb(1073742336,W.a,W.a,[]),r.Bb(1073742336,D.e,D.e,[]),r.Bb(1073742336,S.d,S.d,[]),r.Bb(1073742336,I.e,I.e,[]),r.Bb(1073742336,q.a,q.a,[]),r.Bb(1073742336,l,l,[]),r.Bb(1024,M.i,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);