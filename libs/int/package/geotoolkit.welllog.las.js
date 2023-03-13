/* eslint-disable */
import {Fb,G,hc,L,D,rb,Eg,qp,va} from './geotoolkit.base.js';var aa,ha=ha||{};ha.scope={};ha.Nqc=function(c){var a=0;return function(){return a<c.length?{done:!1,value:c[a++]}:{done:!0}}};ha.Moe=function(c){return{next:ha.Nqc(c)}};ha.qXc=!1;ha.URd=!1;ha.VRd=!1;ha.Mfe=!1;ha.Acc=!1;ha.defineProperty=ha.qXc||"function"==typeof Object.defineProperties?Object.defineProperty:function(c,a,b){if(c==Array.prototype||c==Object.prototype)return c;c[a]=b.value;return c};
ha.cod=function(c){c=["object"==typeof globalThis&&globalThis,c,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var a=0;a<c.length;++a){var b=c[a];if(b&&b.Math==Math)return b}return function(){throw Error("Cannot find global object");}()};ha.global=ha.cod(this);ha.nEb="function"===typeof Symbol&&"symbol"===typeof Symbol("x");ha.hje=!ha.Acc||ha.nEb;ha.r3b={};ha.L3b={};ha.S1c="$jscp$";
function aaa(c,a){var b=ha.L3b[a];if(null==b)return c[a];b=c[b];return void 0!==b?b:c[a]}ha.lKc=function(c,a,b,d){a&&(ha.Acc?ha.ZDd(c,a,b,d):ha.$Dd(c,a,b,d))};ha.$Dd=function(c,a,b,d){b=ha.global;c=c.split(".");for(d=0;d<c.length-1;d++){var e=c[d];if(!(e in b))return;b=b[e]}c=c[c.length-1];d=b[c];a=a(d);a!=d&&null!=a&&ha.defineProperty(b,c,{configurable:!0,writable:!0,value:a})};
ha.ZDd=function(c,a,b,d){var e=c.split(".");c=1===e.length;d=e[0];d=!c&&d in ha.r3b?ha.r3b:ha.global;for(var f=0;f<e.length-1;f++){var g=e[f];if(!(g in d))return;d=d[g]}e=e[e.length-1];b=ha.nEb&&"es6"===b?d[e]:null;a=a(b);null!=a&&(c?ha.defineProperty(ha.r3b,e,{configurable:!0,writable:!0,value:a}):a!==b&&(ha.L3b[e]=ha.nEb?ha.global.Symbol(e):ha.S1c+e,e=ha.L3b[e],ha.defineProperty(d,e,{configurable:!0,writable:!0,value:a})))};ha.Ise=function(){};
ha.lKc("Symbol",function(c){function a(f){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new b(d+(f||"")+"_"+e++,f)}function b(f,g){this.oXc=f;ha.defineProperty(this,"description",{configurable:!0,writable:!0,value:g})}if(c)return c;b.prototype.toString=function(){return this.oXc};var d="jscomp_symbol_",e=0;return a},"es6","es3");ha.Kse=function(){};
ha.lKc("Symbol.iterator",function(c){if(c)return c;c=Symbol("Symbol.iterator");for(var a="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),b=0;b<a.length;b++){var d=ha.global[a[b]];"function"===typeof d&&"function"!=typeof d.prototype[c]&&ha.defineProperty(d.prototype,c,{configurable:!0,writable:!0,value:function(){return ha.Nyd(ha.Nqc(this))}})}return c},"es6","es3");ha.Jse=function(){};
ha.Nyd=function(c){c={next:c};c[Symbol.iterator]=function(){return this};return c};var rP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(){}c.prototype.parse=Fb;c.prototype.WE=Fb;c.prototype.p4=Fb;c.prototype.cvc=function(a){return-1===a.search(/wrap\.\s*no\s*:/i)};c.prototype.khd=function(a){return(a=a.match(/strt\s*\.([^\s]*)/i)[1])?a:""};return c}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJnZXRTZWN0aW9ucyI6IldFIiwiZ2V0U2VjdGlvbkdyb3VwcyI6InA0IiwiZGV0ZWN0V3JhcCI6ImN2YyIsImRldGVjdEluZGV4VW5pdCI6ImtoZCJ9fX0g");var sP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(a,b,d,e){a=G(a,{mnemonic:"string"===typeof a?a:null,value:d,unit:b,description:e});this.Iab=a.mnemonic;this.xo=a.unit;this.value=a.value;this.description=a.description}c.prototype.Da=function(){return this.Iab};c.prototype.QFa=function(){return this.Iab};c.prototype.Wa=function(){return this.xo};c.prototype.$l=function(a){this.xo=a;return this};c.prototype.getValue=function(){return this.value};c.prototype.setValue=function(a){this.value=a;return this};c.prototype.kt=
function(){return this.description};c.prototype.mQ=function(a){this.description=a;return this};c.prototype.ia=function(){return{mnemonic:this.Iab,value:this.value,unit:this.xo,description:this.description}};c.prototype.fa=function(a){a=hc(a);if(null==a)return this;void 0!==a.mnemonic&&(this.Iab=a.mnemonic);void 0!==a.value&&(this.value=a.value);void 0!==a.unit&&(this.xo=a.unit);void 0!==a.description&&(this.description=a.description);return this};return c}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJnZXROYW1lIjoiRGEiLCJnZXRNbmVtb25pYyI6IlFGYSIsImdldFVuaXQiOiJXYSIsInNldFVuaXQiOiIkbCIsImdldERlc2NyaXB0aW9uIjoia3QiLCJzZXREZXNjcmlwdGlvbiI6Im1RIiwiZ2V0UHJvcGVydGllcyI6ImlhIiwic2V0UHJvcGVydGllcyI6ImZhIn19fSAg");var tP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(a,b,d,e){this.name=a;this.parameters=b;this.tua=e;this.curves=d;this.H$=null}c.prototype.Da=function(){if(!this.name){if(null==this.parameters)return null;this.name=this.parameters.split("_")[0]}return this.name};c.prototype.WE=function(){this.H$||(this.H$=this.afa());return{parameters:this.parameters,data:this.tua,curves:this.curves}};c.prototype.getParameters=function(){return this.parameters};c.prototype.gXb=function(a){"number"!==typeof a&&(this.H$||(this.H$=this.afa()),
a=this.H$.indexOf(a));return this.curves.data[a]};c.prototype.afa=function(){for(var a=[],b=0;b<this.curves.data.length;b++)a.push(this.curves.data[b].Iab);return a};c.prototype.Rxd=function(a){"number"!==typeof a&&(this.H$||(this.H$=this.afa()),a=this.H$.indexOf(a));return this.tua.numeric[a]};c.prototype.Zld=function(a){"number"!==typeof a&&(this.H$||(this.H$=this.afa()),a=this.H$.indexOf(a));return this.tua.data[a]};return c}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJnZXROYW1lIjoiRGEiLCJnZXRTZWN0aW9ucyI6IldFIiwiZ2V0Q3VydmVJbmZvIjoiZ1hiIiwiZ2V0Q3VydmVNbmVtb25pY3MiOiJhZmEiLCJpc0N1cnZlTnVtZXJpYyI6IlJ4ZCIsImdldEN1cnZlRGF0YSI6IlpsZCJ9fX0g");var uP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(a,b){"string"===typeof a?(this.data=b,this.name=a):a?(this.name=a.name,this.data=a.data):this.data=this.name=null}c.prototype.Da=function(){return this.name};c.prototype.kb=function(a){this.name=a;return this};c.prototype.getData=function(){return this.data};c.prototype.setData=function(a){this.data=a;return this};c.prototype.tWb=function(){return""};return c}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJnZXROYW1lIjoiRGEiLCJzZXROYW1lIjoia2IiLCJnZXRBc3NvY2lhdGlvbnMiOiJ0V2IifX19");var vP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(a){this.xve=a;this.Ssc={};this.O1b=this.S1b=this.Rsc=0}L(c,"geotoolkit.welllog.data.las.LasComments");c.prototype.Xta=function(a,b){this.Rsc++;this.Ssc[a]=b;this.S1b=Math.min(a,this.S1b);this.O1b=Math.max(a,this.O1b);return this};c.prototype.UWb=function(a){return this.Ssc[a]};c.prototype.xS=function(a){return this.S1b};c.prototype.tS=function(a){return this.O1b};c.prototype.empty=function(){return 0===this.Rsc};return c}(),1,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJhZGRDb21tZW50IjoiWHRhIiwiZ2V0Q29tbWVudCI6IlVXYiIsImdldE1pblBvc2l0aW9uIjoieFMiLCJnZXRNYXhQb3NpdGlvbiI6InRTIn19fSAg");var wP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(a){uP.call(this,a);this.Qsc=new vP(this.Da())}D(c,uP);c.prototype.Xta=function(a,b){this.Qsc.Xta(a,b);return this};c.prototype.vld=function(){return this.Qsc};c.prototype.XD=function(a,b,d,e){this.getData()||this.setData([]);if(!a)throw Error("Mnemonic is absent");b=b||"";d=void 0!==d&&null!==d?d:"";e=e||"";var f=this.nrd(a);-1===f?this.getData().push(new sP(a,b,d,e)):this.getData()[f].$l(b).setValue(d).mQ(e);return this};c.prototype.nrd=function(a){if(!this.getData())return-1;
for(var b=0;b<this.getData().length;b++)if(this.getData()[b].QFa()===a)return b;return-1};c.prototype.sCc=function(a){if(!this.getData())return"";for(var b=0;b<this.getData().length;b++)if(this.getData()[b].QFa()===a)return this.getData()[b].value;return""};c.prototype.getParameter=function(a){if(null==this.getData())return null;for(var b=0;b<this.getData().length;b++)if(this.getData()[b].QFa()===a)return this.getData()[b];return null};return c}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJhZGRDb21tZW50IjoiWHRhIiwic2V0UGFyYW1ldGVyIjoiWEQiLCJnZXRQYXJhbWV0ZXJWYWx1ZSI6InNDYyJ9fX0g");var xP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(a){uP.call(this,a);this.numeric=a?a.numeric:null;this.Pqc="";this.Da()&&-1!==this.Da().indexOf("|")&&(this.Pqc=this.Da().substring(this.Da().indexOf("|")+2))}D(c,uP);c.prototype.Mqd=function(){return this.numeric};c.prototype.tWb=function(){return this.Pqc};return c}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJnZXROdW1lcmljIjoiTXFkIiwiZ2V0QXNzb2NpYXRpb25zIjoidFdiIn19fSAg");var yP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(){rP.call(this);this.Tr=this.nC=null}D(c,rP);c.prototype.parse=function(a){this.z2b=null;var b=a.split(/\r?\n/),d=0,e=[],f={},g=!1;a=this.cvc(a);for(var h=[],k=1,l=null;d<b.length;){if(0!==b[d].trim().length&&"#"!==b[d].trim().charAt(0))if(-1!==b[d].indexOf("~")){f.name&&(a&&f.name&&0===f.name.toUpperCase().indexOf("C")&&(k=f.data.length),e.push({name:f.name,data:f.data}));var m=b[d].substring(b[d].indexOf("~")+1);f.data=[];if("A"===m.charAt(0)){g=!0;var n=!1}else"O"===
m.charAt(0)?(g=!1,n=!0):n=g=!1;f.name=m}else if(g){m=b[d].trim().split(/[\s]+/);var p;if(a){if(h.length>=k){for(p=0;p<h.length;p++)f.data[p]||(f.data[p]=[]),l&&+h[p]===l?f.data[p].push(Number.NaN):f.data[p].push(+h[p]);h=[]}h.push.apply(h,m)}else for(p=0;p<m.length;p++)f.data[p]||(f.data[p]=[]),l&&+m[p]===l&&(m[p]=Number.NaN),f.data[p].push(+m[p])}else n?f.data.push(b[d]):(m=/^([ ]*[^.^ ]*)[ ]*.([^:^ ]*)[ ]*([^:]*):(.*)/,m=b[d].match(m),null===m||5>m.length?rb("Malformed or unrecognized line at line "+
(d+1)+": "+b[d]):("NULL"===m[1].trim()&&(l=+m[3]),f.data.push(new sP(m[1].trim(),m[2].trim(),m[3].trim(),m[4].trim()))));d+=1}f.name&&e.push({name:f.name,data:f.data});return this.Tr=e};c.prototype.tEa=function(){if(!this.z2b){for(var a=[],b,d,e,f,g,h=0;h<this.Tr.length;h++)switch(this.Tr[h].name.charAt(0)){case "V":b=this.Tr[h];break;case "W":d=this.Tr[h];break;case "C":e=this.Tr[h];break;case "P":f=this.Tr[h];break;case "A":g=this.Tr[h]}e=new tP("LAS2",new wP(f),new wP(e),new xP(g));a.push(new wP(b));
a.push(new wP(d));a.push(e);this.z2b=a}return this.z2b};c.prototype.WE=function(){for(var a=[],b=this.tEa(),d=0;d<b.length;d++)b[d].afa||a.push(b[d]);return a};c.prototype.p4=function(){for(var a=[],b=this.tEa(),d=0;d<b.length;d++)b[d].afa&&a.push(b[d]);return a};return c}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJidWlsZFNlY3Rpb25zIjoidEVhIiwiZ2V0U2VjdGlvbnMiOiJXRSIsImdldFNlY3Rpb25Hcm91cHMiOiJwNCJ9fX0g");var zP=/*#__PURE__*/{CFb:"~",MZa:"~V",rGb:"~W",cYc:"~C",JYc:"~A",z1c:"~O",M1c:"~P",N1c:/^[ ]*([^.]*)[ ]*\.([^ ]*)[ ](.*):[ ]*(.*)[ ]*/,pXc:/(?![\x20-\x7E]|[\x0D]|[\x0A])./g,IYc:/[\s]+/,s1c:"NULL",i4c:"WRAP",j4c:"YES",M2c:"STEP",O2c:"STRT",N2c:"STOP",d4c:"VERS"};var AP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(){}L(c,"geotoolkit.welllog.data.las.LasStreamParser");c.prototype.open=Fb;c.prototype.WE=Fb;c.prototype.p4=Fb;c.prototype.jyb=Fb;return c}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJnZXRTZWN0aW9ucyI6IldFIiwiZ2V0U2VjdGlvbkdyb3VwcyI6InA0IiwicmVhZERhdGFJblJhbmdlIjoianliIn19fSAg");var CP=/*#__PURE__*/va(/*#__PURE__*/{p3c:function(c){c=function(a){var b=zP;a=a.WE();var d=BP.bsb(a,b.MZa);d=BP.NRa(d,b.i4c)===b.j4c;a=BP.bsb(a,b.rGb);var e=+BP.NRa(a,b.M2c,0),f=+BP.NRa(a,b.O2c,Number.NaN),g=+BP.NRa(a,b.N2c,Number.NaN);return isNaN(f)||isNaN(g)||0===e||!1!==d?null:function(h,k){return f>g&&0>e?h+Math.abs(Math.ceil((g-Math.min(k,g))/e)):f<g&&0<e?h+Math.abs(Math.floor((Math.max(k,f)-f)/e)):null}}();return{findIndex:c,n4b:function(a,b){}}},$cc:function(c){function a(e,f){d.push({d:e,Hu:f})}function b(e){for(var f=
null,g=0;g<d.length-1;g++)d[g].d<d[g+1].d&&d[g].d<=e&&(f=d[g]),d[g].d>d[g+1].d&&d[g].d>=e&&(f=d[g]);return f}var d=[];return{findIndex:function(e,f){f=b(f);return null==f?e:f.Hu},n4b:function(e,f){var g=b(e);null!=g&&g.Hu===f||a(e,f)}}},v1c:function(c){return{findIndex:function(a,b){return a},n4b:function(a,b){}}}},2,"eyJTdHJpY3RJbmRleCI6InAzYyIsIkxpdmVJbmRleCI6IiRjYyIsIk5vSW5kZXgiOiJ2MWMifSAg"),BP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(){}c.bsb=function(a,b){return a.filter(function(d){return d.Da().charAt(0)===b.charAt(1)})[0]};c.NRa=function(a,b,d){a=a.getData().filter(function(e){return e.QFa()===
b});if(0<a.length)return a[0].getValue();rb("Warning: Invalid LAS file, missing mandatory field: "+b);return d};c.T_c=CP;return c}(),1,"eyJmaW5kU2VjdGlvbkZvck1hcmtlciI6ImJzYiIsImZpbmRGaWVsZEZvcktleXdvcmQiOiJOUmEifSAg");var EP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(a,b,d){xP.call(this,a);this.stream=b;this.W3b=d}D(c,xP);c.prototype.hmd=function(a,b,d,e,f){null!=this.getData()&&rb("Warning: The stream has been fully loaded already. Using getDataInRange is not optimum.");a=this.stream.jyb(this.W3b,a,b,d);a.then(e,f);return a};c.prototype.imd=function(a,b,d,e,f){null!=this.getData()&&rb("Warning: The stream has been fully loaded already. Using getDataInRange is not optimum.");a=this.stream.TKc(this.W3b,a,b,d);a.then(e,f);return a};
c.prototype.xzd=function(a,b){var d=this,e=new Eg(function(f,g){null==d.getData()?d.stream.wbb(d.W3b).then(function(h){d.setData(h);f(d)},g):f(d)});e.then(a,b);return e};return c}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJnZXREYXRhSW5SYW5nZSI6ImhtZCIsImdldERhdGFJblJhbmdlQnlJbmRleCI6ImltZCJ9fX0g");var FP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(g,h){var k={};qp.CVb(k,g,0,new RegExp(h),new RegExp(f.CFb),!0);return null!=k.start?new wP({name:h,data:k.lines}):null}function a(g,h){var k={};qp.CVb(k,g,0,new RegExp(h),new RegExp(f.CFb),!0);return null!=k.start?new wP({name:k.lines[0].substring(k.lines[0].indexOf("~")+1),data:k.lines.slice(1).map(d).filter(b)}):null}function b(g){return null!=g}function d(g,h,k){g=g.trim();if(0===g.length||"#"===g.charAt(0))return null;h=g.match(f.N1c);return null==h||5>h.length?(rb("Malformed or unrecognized line: "+
g),null):new sP(h[1].trim(),h[2].trim(),h[3].trim(),h[4].trim())}function e(g){AP.call(this,g);g=G(g,{indexingmode:CP.$cc});this.PHa=g.reader;this.owd=g.indexingmode;this.Tr=[];this.J$a=null}var f=zP;D(e,AP);L(e,"geotoolkit.welllog.data.las.Las20Stream");e.prototype.open=function(g,h,k){var l=this,m=new Eg(function(n,p){p=new Eg(function(q,r){l.PHa.capture(f.MZa,f.JYc,0,-1,function(t){null!=t.error?r(t.error):l.PHa.kyb(t.end,1,function(u,w,y){null==u?(l.Tr.push(a(t.lines,f.MZa)),l.Tr.push(a(t.lines,
f.rGb)),l.Tr.push(c(t.lines,f.z1c)),l.Tr.push(new tP("LAS2",a(t.lines,f.M1c),a(t.lines,f.cYc),new EP({name:y[0].substring(y[0].indexOf("~")+1)},l,t.end+1))),l.Tr=l.Tr.filter(b),q(l)):r(u)})})});p.then(function(q){if(g){var r=q.p4()[0].WE().data;r.xzd().then(function(t){n(q)},k)}else n(q)},k)});m.then(h,k);return m};e.prototype.p4=function(){return this.Tr.filter(function(g){return g instanceof tP})};e.prototype.WE=function(){return this.Tr.filter(function(g){return g instanceof uP})};e.prototype.eYb=
function(){null==this.J$a&&(this.J$a=this.owd(this));return this.J$a};e.prototype.jyb=function(g,h,k,l,m,n){var p=null!=h?function(A){return A>=h}:null,q=null!=k?function(A){return A>k}:null,r=g,t=null;if(null!=l){t=this.p4()[0].afa();var u=[];for(var w=0;w<l.length;w++){var y=t.indexOf(l[w]);u.push(y)}t=function(A){return-1!==u.indexOf(A)}}if(null!=h){if(null==this.eYb())return g=Eg.reject("Indexing mode is not valid for current file, switch to a more permissive mode or fix LAS datasource."),g.then(m,
n),g;r=this.J$a.findIndex(g,h)}return this.wbb(r,p,q,t,m,n,u)};e.prototype.TKc=function(g,h,k,l,m,n){var p=null!=h?function(u){return u>=h}:null,q=null!=k?function(u){return u>k}:null,r=g,t=null;null!=l&&(t=function(u){return-1!==l.indexOf(u)});if(null!=h){if(null==this.eYb())return g=Eg.reject("Indexing mode is not valid for current file, switch to a more permissive mode or fix LAS datasource."),g.then(m,n),g;r=this.J$a.findIndex(g,h)}return this.wbb(r,p,q,t,m,n,l)};e.prototype.wbb=function(g,h,
k,l,m,n,p){var q=this,r=new Eg(function(t,u){var w=[],y=q.p4()[0].WE().curves.getData().length,A=BP.bsb(q.WE(),f.rGb),x=+BP.NRa(A,f.s1c,Number.NaN),C=!1,z=!1,v=0;q.PHa.baa(g,function N(E,H,F,I,J,K){if(E)u(E);else{var P=!1;F.forEach(function(Q){Q=Q.replace(f.pXc," ").trim();if(0!==Q.length&&"#"!==Q.charAt(0))if(Q=Q.split(f.IYc),0===v&&(P||(q.eYb().n4b(+Q[0],H),P=!0),C=C||(null!=h?h(+Q[0]):!0),z=z||(null!=k?k(+Q[0]):!1)),C)if(z)v=(v+Q.length)%y;else for(var R=0;R<Q.length;R++){if(null==l||l(v)){null==
w[v]&&(w[v]=[]);var Y=+Q[R];Y===x?w[v].push(Number.NaN):w[v].push(Y)}v=(v+1)%y}else v=(v+Q.length)%y});if(E=I||z){if(null!=p){F=[];for(E=0;E<p.length;E++)F.push(w[p[E]]);w=F}t(w)}else q.PHa.baa(H+F.length,N)}})});r.then(m,n);return r};e.byd=function(g,h,k){var l=new Eg(function(m,n){g.capture(f.MZa,f.CFb,0,50,function(p){if(null!=p.error)return n({isLAS20:!1,details:"Error, while parsing the stream: "+p.error});if(null==p.lines||0===p.lines.length)return n({isLAS20:!1,details:'Error, could not find the ~VERSION INFORMATION" section found in this filereader'});
var q=a(p.lines,f.MZa);if(null==q)return m({isLAS20:!1,details:'No "~VERSION INFORMATION" section found in this filereader'});q=q.sCc(f.d4c);return"2.0"===q?m({isLAS20:!0,details:"Version field match the LAS 2.0 standard"}):2===+q?m({isLAS20:!0,details:'Warning, the version field seems incorrect, should have been "2.0" but is: '+q}):null==q||""===q?m({isLAS20:!1,details:'Error, The "VERS" field/value is not present or incorrectly formatted: \n'+p.lines.join("\n")}):m({isLAS20:!1,details:'Error, The "VERS" field/value is not "2.00" but: '+
q})})});return l.then(h,k)};return e}(),2,"eyJpc0xBUzIwIjoiYnlkIiwicHJvdG90eXBlIjp7InMiOjAsImMiOnsiZ2V0U2VjdGlvbkdyb3VwcyI6InA0IiwiZ2V0U2VjdGlvbnMiOiJXRSIsInJlYWREYXRhSW5SYW5nZSI6Imp5YiIsInJlYWREYXRhSW5SYW5nZUJ5SW5kZXgiOiJUS2MifX19");var GP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(d){wP.call(this,"Version");this.tX(d);this.qTc(!1)}var a="VERS",b="WRAP";D(c,wP);L(c,"geotoolkit.welllog.data.las.LasVersionSection");c.prototype.tX=function(d,e){return this.XD(a,"",d,e)};c.prototype.qTc=function(d,e){return this.XD(b,"",d?"YES":"NO",e)};return c}(),1,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJzZXRWZXJzaW9uIjoidFgiLCJzZXRVc2VXcmFwIjoicVRjIn19fSAg");var HP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(y,A,x,C,z){wP.call(this,"Well");this.setStart(C,y);this.wSc(C,A);this.uSc(C,x);this.gRc(z)}var a="STRT",b="STOP",d="STEP",e="NULL",f="COMP",g="WELL",h="FLD",k="LOC",l="PROV",m="CNTY",n="STAT",p="CTRY",q="SRVC",r="DATE",t="UWI",u="API",w="LIC";D(c,wP);L(c,"geotoolkit.welllog.data.las.LasWellSection");c.prototype.setStart=function(y,A){return this.XD(a,y,A,"START DEPTH")};c.prototype.wSc=function(y,A){return this.XD(b,y,A,"STOP DEPTH")};c.prototype.uSc=function(y,A){return this.XD(d,
y,A,"STEP")};c.prototype.gRc=function(y){return this.XD(e,"",y,"NULL VALUE")};c.prototype.tzb=function(y){return this.XD(f,"",y,"COMPANY")};c.prototype.$Ab=function(y){return this.XD(g,"",y,"WELL")};c.prototype.Ezb=function(y){return this.XD(h,"",y,"FIELD")};c.prototype.qX=function(y){return this.XD(k,"",y,"LOCATION")};c.prototype.yAb=function(y){return this.XD(l,"",y,"PROVINCE")};c.prototype.vzb=function(y){return this.XD(m,"",y,"COUNTY")};c.prototype.setState=function(y){return this.XD(n,"",y,"STATE")};
c.prototype.uzb=function(y){return this.XD(p,"",y,"COUNTRY")};c.prototype.HAb=function(y){return this.XD(q,"",y,"SERVICE COMPANY")};c.prototype.setDate=function(y){return this.XD(r,"",y,"DATE")};c.prototype.UAb=function(y){return this.XD(t,"",y,"UNIQUE WELL ID")};c.prototype.azb=function(y){return this.XD(u,"",y,"API NUMBER")};c.prototype.Xzb=function(y){return this.XD(w,"",y,"LICENCE NUMBER")};return c}(),1,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJzZXRTdG9wIjoid1NjIiwic2V0U3RlcCI6InVTYyIsInNldE51bGwiOiJnUmMiLCJzZXRDb21wYW55TmFtZSI6InR6YiIsInNldFdlbGxOYW1lIjoiJEFiIiwic2V0RmllbGQiOiJFemIiLCJzZXRMb2NhdGlvbiI6InFYIiwic2V0UHJvdmluY2UiOiJ5QWIiLCJzZXRDb3VudHkiOiJ2emIiLCJzZXRDb3VudHJ5IjoidXpiIiwic2V0U2VydmljZUNvbXBhbnkiOiJIQWIiLCJzZXRVV0kiOiJVQWIiLCJzZXRBUElOdW1iZXIiOiJhemIiLCJzZXRMaWNlbmNlTnVtYmVyIjoiWHpiIn19fSAg");var IP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(l){if(!l)throw Error("There is no index data");this.mHa=a;this.dxd();this.gxd(l);this.I2b=new wP(g);this.xrb=new wP(h);this.tua={};this.Vpb(l)}var a=-999.25,b=" ",d="~",e="#",f="\r\n",g="Parameter",h="Curve",k="ASCII";L(c,"geotoolkit.welllog.data.las.Las20Writer");c.prototype.dxd=function(){this.XWc=new GP("2.0")};c.prototype.gxd=function(l){var m=l.toArray(!1);m=2>m.length?0:m[1]-m[0];var n=l.Wa();n=n?n.Tc():"";this.GT=new HP(l.sf(),l.kg(),m,n,a)};c.prototype.tzb=function(l){this.GT.tzb(l);
return this};c.prototype.$Ab=function(l){this.GT.$Ab(l);return this};c.prototype.Ezb=function(l){this.GT.Ezb(l);return this};c.prototype.qX=function(l){this.GT.qX(l);return this};c.prototype.yAb=function(l){this.GT.yAb(l);return this};c.prototype.vzb=function(l){this.GT.vzb(l);return this};c.prototype.setState=function(l){this.GT.setState(l);return this};c.prototype.uzb=function(l){this.GT.uzb(l);return this};c.prototype.HAb=function(l){this.GT.HAb(l);return this};c.prototype.setDate=function(l){this.GT.setDate(l);
return this};c.prototype.UAb=function(l){this.GT.UAb(l);return this};c.prototype.azb=function(l){this.GT.azb(l);return this};c.prototype.Xzb=function(l){this.GT.Xzb(l);return this};c.prototype.save=function(l){this.fId(l);this.gId(l);this.eId(l);this.aId(l);this.bId(l)};c.prototype.addParameter=function(l,m,n,p){this.I2b.XD(l,m,n,p);return this};c.prototype.Vpb=function(l,m,n,p,q){m=m||l.Da();n=n||(l.Wa()?l.Wa().Tc():"");this.xrb.XD(m,n,p,q);this.tua[m]=l;return this};c.prototype.Yad=function(l,m){this.XWc.Xta(l,
m);return this};c.prototype.Zad=function(l,m){this.GT.Xta(l,m);return this};c.prototype.Nad=function(l,m){this.I2b.Xta(l,m);return this};c.prototype.Bad=function(l,m){this.xrb.Xta(l,m);return this};c.prototype.JLd=function(l){this.mHa=l;return this};c.prototype.Bva=function(){return this.mHa};c.prototype.fId=function(l){l.ii(this.arb(this.XWc))};c.prototype.gId=function(l){l.ii(this.arb(this.GT))};c.prototype.eId=function(l){l.ii(this.arb(this.I2b))};c.prototype.aId=function(l){l.ii(this.arb(this.xrb))};
c.prototype.bId=function(l){var m=this.$jd();l.ii(m);m=[];for(var n in this.tua)this.tua.hasOwnProperty(n)&&m.push(this.tua[n].toArray());n=m[0].length;for(var p=0;p<n;p++)l.ii(this.Ftd(m,p))};c.prototype.Ftd=function(l,m){for(var n="",p,q=0;q<l.length;q++)p=l[q][m],p=isNaN(p)?this.mHa:p,n+=p+b;return n+=f};c.prototype.Jed=function(l){var m=l.QFa(),n=l.Wa(),p=l.getValue();l=l.kt();return m+"."+n+b+p+b+":"+b+l};c.prototype.arb=function(l){var m=l.vld(),n=m.xS(),p=m.tS();n=this.FFc(m,n,0);var q=l.Da();
q.charAt(0)!==d&&(q=d+q);n+=q+f;q=l.getData();for(var r=1,t=0;t<q.length;){if(r<=p&&(l=m.UWb(r))){n+=e+l+f;r++;continue}n+=this.Jed(q[t])+f;t++;r++}return n+=this.FFc(m,r,p)};c.prototype.FFc=function(l,m,n){var p,q="";if(l.empty())return"";for(;m<=n;m++)(p=l.UWb(m))&&(q+=e+p),q+=f;return q};c.prototype.$jd=function(){for(var l=d+k+b,m=this.xrb.getData(),n=0;n<m.length;n++)l+=m[n].QFa()+b;return l+=f};return c}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJzZXRDb21wYW55TmFtZSI6InR6YiIsInNldFdlbGxOYW1lIjoiJEFiIiwic2V0RmllbGQiOiJFemIiLCJzZXRMb2NhdGlvbiI6InFYIiwic2V0UHJvdmluY2UiOiJ5QWIiLCJzZXRDb3VudHkiOiJ2emIiLCJzZXRDb3VudHJ5IjoidXpiIiwic2V0U2VydmljZUNvbXBhbnkiOiJIQWIiLCJzZXRVV0kiOiJVQWIiLCJzZXRBUElOdW1iZXIiOiJhemIiLCJzZXRMaWNlbmNlTnVtYmVyIjoiWHpiIiwiYWRkQ3VydmUiOiJWcGIiLCJhZGRWZXJzaW9uQ29tbWVudCI6IllhZCIsImFkZFdlbGxDb21tZW50IjoiWmFkIiwiYWRkUGFyYW1ldGVyQ29tbWVudCI6Ik5hZCIsImFkZEN1cnZlQ29tbWVudCI6IkJhZCIsInNldE51bGxWYWx1ZSI6IkpMZCIsImdldE51bGxWYWx1ZSI6IkJ2YSJ9fX0g");var JP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(){rP.call(this);this.Tr=this.nC=null}var a=/^A\b|^ascii\b|_data\b|^core\b|^Inclinometry\b|^Tops\b|^Drilling\b|^Test\b/i,b=/^A\b|^ascii/i,d=/^V\b|^Version/i,e=/^W\b|^Well/i;D(c,rP);c.prototype.parse=function(f){f=f.split(/\r?\n/);for(var g=0,h,k=[],l={},m=!1,n=/[\s]+/,p=[],q=!0,r=null;g<f.length;){if(0!==f[g].trim().length&&"#"!==f[g].trim().charAt(0))if(-1!==f[g].indexOf("~"))l.name&&(k.push({name:l.name,data:l.data,numeric:l.numeric}),p=[]),h=f[g].substring(f[g].indexOf("~")+
1),m=h.match(a),l.name=h,l.data=[],l.numeric=[];else if(m){h=f[g].trim().split(n);if(0===p.length)for(var t=0;t<h.length;t++)l.numeric[t]=!0;for(t=0;t<h.length;t++)h[t]=h[t].trim(),0===h[t].length?h[t]=Number.NaN:isNaN(h[t])?l.numeric[t]=!1:h[t]=r&&+h[t]===r?Number.NaN:+h[t],l.data[t]||(l.data[t]=[]),l.data[t].push(h[t])}else h=/^([ ]*[^.^ ]*)[ ]*.([^ ]*)[ ]*(.*):\s*([^:]*)/,h=f[g].match(h),null===h||5>h.length?(rb("Malformed or unrecognized line at line "+(g+1)+": "+f[g]),q=!1):("NULL"===h[1].trim()&&
(r=+h[3]),l.data.push(new sP(h[1].trim(),h[2].trim(),h[3].trim(),h[4].trim())),"DLM"===h[1].trim().toUpperCase()&&("COMMA"===h[3].trim().toUpperCase()||"COMMA"===h[2].trim().toUpperCase()?n=",":"TAB"===h[3].trim().toUpperCase()||"TAB"===h[2].trim().toUpperCase()?n="\t":"SPACE"!==h[3].trim().toUpperCase()&&"SPACE"!==h[2].trim().toUpperCase()&&(q=!1)));g+=1}l.name&&k.push({name:l.name,data:l.data,numeric:p});this.nC=k;this.Tr=null;return q};c.prototype.tEa=function(){if(!this.Tr){this.Tr=[];for(var f,
g,h,k,l,m,n=0;n<this.nC.length;n++){var p=this.nC[n];f=h=g=k=null;if(p.name.match(d)||p.name.match(e))this.Tr.push(new wP(p));else if(!p.Z$)if(-1!==p.name.indexOf("_")){f=p.name.split(/[_\[]/)[0].trim();-1!==p.name.indexOf("[")&&(m=p.name.split(/[\[\]]/)[1]);for(l=n;l<this.nC.length;l++)-1<this.nC[l].name.indexOf(f)&&(!m||-1<this.nC[l].name.indexOf(m))&&(-1!==this.nC[l].name.split("_")[1].toUpperCase().indexOf("DATA")?(k=new xP(this.nC[l]),this.nC[l].Z$=!0):-1!==this.nC[l].name.split("_")[1].toUpperCase().indexOf("PARAMETER")?
(g=new wP(this.nC[l]),this.nC[l].Z$=!0):-1!==this.nC[l].name.split("_")[1].toUpperCase().indexOf("DEFINITION")?(h=new wP(this.nC[l]),this.nC[l].Z$=!0):rb("Unrecognized Section Type: "+this.nC[l].name));-1!==p.name.indexOf("[")&&(f+=m,m=null);(h||g)&&this.Tr.push(new tP(f,g,h,k))}else if(p.name&&0===p.name.toUpperCase().indexOf("CURVE")){for(l=0;l<this.nC.length;l++)this.nC[l].name.match(b)&&(f="Main Section",p.Z$=!0,this.nC[l].Z$=!0,k=new xP(this.nC[l]),h=new wP(p)),0===this.nC[l].name.toUpperCase().indexOf("PARAMETER")&&
(g=new wP(this.nC[l]));this.Tr.push(new tP(f,g,h,k))}}}return this.Tr};c.prototype.WE=function(){for(var f=[],g=this.tEa(),h=0;h<g.length;h++)g[h].afa||f.push(g[h]);return f};c.prototype.p4=function(){for(var f=[],g=this.tEa(),h=0;h<g.length;h++)g[h].afa&&f.push(g[h]);return f};return c}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJidWlsZFNlY3Rpb25zIjoidEVhIiwiZ2V0U2VjdGlvbnMiOiJXRSIsImdldFNlY3Rpb25Hcm91cHMiOiJwNCJ9fX0g");var KP=/*#__PURE__*/va(/*#__PURE__*/function(){function c(){}c.dW=function(a,b){var d=c.bvc(a);if(2===d)d=new yP;else if(3===d)d=new JP;else return null;!1!==b&&d.parse(a);return d};c.bvc=function(a){var b=a.indexOf("VERS",a.indexOf("~V"));a=a.substring(b,a.indexOf(":",b));return-1===b?-1:-1<a.indexOf("2.0")||-1<a.indexOf("2")?2:-1<a.indexOf("3.0")||-1<a.indexOf("3")?3:-1};return c}(),2,"eyJnZXRQYXJzZXIiOiJkVyIsImRldGVjdFR5cGUiOiJidmMifSAg");export {rP,sP,tP,uP,vP,wP,xP,yP,zP,AP,CP,BP,EP,FP,GP,HP,IP,JP,KP};