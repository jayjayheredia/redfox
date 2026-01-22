import{L as pl,_ as gl,C as _l,r as Ji,b as yl,F as El,c as Ut,g as qt,i as Tl,e as vl,S as Il,f as Al,h as wl,o as Rl,d as ys,a as oa}from"./firebase-config-DgPEMhyA.js";import"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";import"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wt,aa;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,I){for(var g=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)g[Ot-2]=arguments[Ot];return m.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];var I=T.g[3],g=m+(I^_&(E^I))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+y[1]+3905402710&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+y[5]+1200080426&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+y[9]+2336552879&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+y[13]+4254626195&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^I&(_^E))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+y[6]+3225465664&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+y[10]+38016083&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+y[14]+3275163606&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+y[2]+4243563512&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^I)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+y[8]+2272392833&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+y[4]+1272893353&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+y[0]+3936430074&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+y[12]+3873151461&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~I))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+y[7]+1126891415&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+y[3]+2399980690&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+y[15]+4264355552&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+y[11]+3174756917&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}n.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=_;)i(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<m;)if(y[E++]=T.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<m;)if(y[E++]=T[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function u(T,m){this.h=m;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;y&&I==m||(_[E]=I,y=!1)}this.g=_}var c={};function f(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return A;if(0>T)return b(d(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new u(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return b(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=A,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),g=parseInt(T.substring(E,E+I),m);8>I?(I=d(Math.pow(m,I)),y=y.j(I).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var A=f(0),R=f(1),S=f(16777216);r=u.prototype,r.m=function(){if(x(this))return-b(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(x(this))return"-"+b(this).toString(T);for(var m=d(Math.pow(T,6)),_=this,y="";;){var E=it(_,m).g;_=Q(_,E.j(m));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,D(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function x(T){return T.h==-1}r.l=function(T){return T=Q(this,T),x(T)?-1:D(T)?0:1};function b(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new u(_,~T.h).add(R)}r.abs=function(){return x(this)?b(this):this},r.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=m;E++){var I=y+(this.i(E)&65535)+(T.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,_[E]=g<<16|I}return new u(_,_[_.length-1]&-2147483648?-1:0)};function Q(T,m){return T.add(b(m))}r.j=function(T){if(D(this)||D(T))return A;if(x(this))return x(T)?b(this).j(b(T)):b(b(this).j(T));if(x(T))return b(this.j(b(T)));if(0>this.l(S)&&0>T.l(S))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,Ot=T.i(E)>>>16,Me=T.i(E)&65535;_[2*y+2*E]+=g*Me,B(_,2*y+2*E),_[2*y+2*E+1]+=I*Me,B(_,2*y+2*E+1),_[2*y+2*E+1]+=g*Ot,B(_,2*y+2*E+1),_[2*y+2*E+2]+=I*Ot,B(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new u(_,0)};function B(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function G(T,m){this.g=T,this.h=m}function it(T,m){if(D(m))throw Error("division by zero");if(D(T))return new G(A,A);if(x(T))return m=it(b(T),m),new G(b(m.g),b(m.h));if(x(m))return m=it(T,b(m)),new G(b(m.g),m.h);if(30<T.g.length){if(x(T)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=m;0>=y.l(T);)_=Mt(_),y=Mt(y);var E=at(_,1),I=at(y,1);for(y=at(y,2),_=at(_,2);!D(y);){var g=I.add(y);0>=g.l(T)&&(E=E.add(_),I=g),y=at(y,1),_=at(_,1)}return m=Q(T,E.j(m)),new G(E,m)}for(E=A;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=d(_),g=I.j(m);x(g)||0<g.l(T);)_-=y,I=d(_),g=I.j(m);D(I)&&(I=R),E=E.add(I),T=Q(T,g)}return new G(E,T)}r.A=function(T){return it(this,T).h},r.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new u(_,this.h&T.h)},r.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new u(_,this.h|T.h)},r.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new u(_,this.h^T.h)};function Mt(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(_,T.h)}function at(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,E=[],I=0;I<y;I++)E[I]=0<m?T.i(I+_)>>>m|T.i(I+_+1)<<32-m:T.i(I+_);return new u(E,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,aa=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=d,u.fromString=p,Wt=u}).apply(typeof Zi<"u"?Zi:typeof self<"u"?self:typeof window<"u"?window:{});var Un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ua,Je,la,Gn,ts,ca,ha,fa;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Un=="object"&&Un];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var h=0;h<s.length-1;h++){var v=s[h];if(!(v in l))break t;l=l[v]}s=s[s.length-1],h=l[s],a=a(h),a!=h&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,h=!1,v={next:function(){if(!h&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function f(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function d(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function p(s,a,l){return s.call.apply(s.bind,arguments)}function A(s,a,l){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),s.apply(a,v)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:A,R.apply(null,arguments)}function S(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function D(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(h,v,w){for(var C=Array(arguments.length-2),K=2;K<arguments.length;K++)C[K-2]=arguments[K];return a.prototype[v].apply(h,C)}}function x(s){const a=s.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=s[h];return l}return[]}function b(s,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(f(h)){const v=s.length||0,w=h.length||0;s.length=v+w;for(let C=0;C<w;C++)s[v+C]=h[C]}else s.push(h)}}class Q{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function B(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function it(s){return it[" "](s),s}it[" "]=function(){};var Mt=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function at(s,a,l){for(const h in s)a.call(l,s[h],h,s)}function T(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function m(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(l in h)s[l]=h[l];for(let w=0;w<_.length;w++)l=_[w],Object.prototype.hasOwnProperty.call(h,l)&&(s[l]=h[l])}}function E(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function I(s){c.setTimeout(()=>{throw s},0)}function g(){var s=Rr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Ot{constructor(){this.h=this.g=null}add(a,l){const h=Me.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var Me=new Q(()=>new xu,s=>s.reset());class xu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Oe,Le=!1,Rr=new Ot,Js=()=>{const s=c.Promise.resolve(void 0);Oe=()=>{s.then(Mu)}};var Mu=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){I(l)}var a=Me;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Le=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var Ou=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function Fe(s,a){if(ft.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Mt){t:{try{it(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Lu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Fe.aa.h.call(this)}}D(Fe,ft);var Lu={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Tn="closure_listenable_"+(1e6*Math.random()|0),Fu=0;function Uu(s,a,l,h,v){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=v,this.key=++Fu,this.da=this.fa=!1}function vn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function In(s){this.src=s,this.g={},this.h=0}In.prototype.add=function(s,a,l,h,v){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var C=Pr(s,a,h,v);return-1<C?(a=s[C],l||(a.fa=!1)):(a=new Uu(a,this.src,w,!!h,v),a.fa=l,s.push(a)),a};function Vr(s,a){var l=a.type;if(l in s.g){var h=s.g[l],v=Array.prototype.indexOf.call(h,a,void 0),w;(w=0<=v)&&Array.prototype.splice.call(h,v,1),w&&(vn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Pr(s,a,l,h){for(var v=0;v<s.length;++v){var w=s[v];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==h)return v}return-1}var Sr="closure_lm_"+(1e6*Math.random()|0),Cr={};function Zs(s,a,l,h,v){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Zs(s,a[w],l,h,v);return null}return l=ni(l),s&&s[Tn]?s.K(a,l,d(h)?!!h.capture:!1,v):qu(s,a,l,!1,h,v)}function qu(s,a,l,h,v,w){if(!a)throw Error("Invalid event type");var C=d(v)?!!v.capture:!!v,K=br(s);if(K||(s[Sr]=K=new In(s)),l=K.add(a,l,h,C,w),l.proxy)return l;if(h=ju(),l.proxy=h,h.src=s,h.listener=l,s.addEventListener)Ou||(v=C),v===void 0&&(v=!1),s.addEventListener(a.toString(),h,v);else if(s.attachEvent)s.attachEvent(ei(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function ju(){function s(l){return a.call(s.src,s.listener,l)}const a=Bu;return s}function ti(s,a,l,h,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)ti(s,a[w],l,h,v);else h=d(h)?!!h.capture:!!h,l=ni(l),s&&s[Tn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=Pr(w,l,h,v),-1<l&&(vn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=br(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Pr(a,l,h,v)),(l=-1<s?a[s]:null)&&Dr(l))}function Dr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Tn])Vr(a.i,s);else{var l=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(l,h,s.capture):a.detachEvent?a.detachEvent(ei(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=br(a))?(Vr(l,s),l.h==0&&(l.src=null,a[Sr]=null)):vn(s)}}}function ei(s){return s in Cr?Cr[s]:Cr[s]="on"+s}function Bu(s,a){if(s.da)s=!0;else{a=new Fe(a,this);var l=s.listener,h=s.ha||s.src;s.fa&&Dr(s),s=l.call(h,a)}return s}function br(s){return s=s[Sr],s instanceof In?s:null}var Nr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ni(s){return typeof s=="function"?s:(s[Nr]||(s[Nr]=function(a){return s.handleEvent(a)}),s[Nr])}function dt(){zt.call(this),this.i=new In(this),this.M=this,this.F=null}D(dt,zt),dt.prototype[Tn]=!0,dt.prototype.removeEventListener=function(s,a,l,h){ti(this,s,a,l,h)};function yt(s,a){var l,h=s.F;if(h)for(l=[];h;h=h.F)l.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new ft(a,s);else if(a instanceof ft)a.target=a.target||s;else{var v=a;a=new ft(h,s),y(a,v)}if(v=!0,l)for(var w=l.length-1;0<=w;w--){var C=a.g=l[w];v=An(C,h,!0,a)&&v}if(C=a.g=s,v=An(C,h,!0,a)&&v,v=An(C,h,!1,a)&&v,l)for(w=0;w<l.length;w++)C=a.g=l[w],v=An(C,h,!1,a)&&v}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],h=0;h<l.length;h++)vn(l[h]);delete s.g[a],s.h--}}this.F=null},dt.prototype.K=function(s,a,l,h){return this.i.add(String(s),a,!1,l,h)},dt.prototype.L=function(s,a,l,h){return this.i.add(String(s),a,!0,l,h)};function An(s,a,l,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,w=0;w<a.length;++w){var C=a[w];if(C&&!C.da&&C.capture==l){var K=C.listener,ut=C.ha||C.src;C.fa&&Vr(s.i,C),v=K.call(ut,h)!==!1&&v}}return v&&!h.defaultPrevented}function ri(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function si(s){s.g=ri(()=>{s.g=null,s.i&&(s.i=!1,si(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class zu extends zt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:si(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ue(s){zt.call(this),this.h=s,this.g={}}D(Ue,zt);var ii=[];function oi(s){at(s.g,function(a,l){this.g.hasOwnProperty(l)&&Dr(a)},s),s.g={}}Ue.prototype.N=function(){Ue.aa.N.call(this),oi(this)},Ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kr=c.JSON.stringify,$u=c.JSON.parse,Gu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function xr(){}xr.prototype.h=null;function ai(s){return s.h||(s.h=s.i())}function ui(){}var qe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mr(){ft.call(this,"d")}D(Mr,ft);function Or(){ft.call(this,"c")}D(Or,ft);var se={},li=null;function wn(){return li=li||new dt}se.La="serverreachability";function ci(s){ft.call(this,se.La,s)}D(ci,ft);function je(s){const a=wn();yt(a,new ci(a))}se.STAT_EVENT="statevent";function hi(s,a){ft.call(this,se.STAT_EVENT,s),this.stat=a}D(hi,ft);function Et(s){const a=wn();yt(a,new hi(a,s))}se.Ma="timingevent";function fi(s,a){ft.call(this,se.Ma,s),this.size=a}D(fi,ft);function Be(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function ze(){this.g=!0}ze.prototype.xa=function(){this.g=!1};function Ku(s,a,l,h,v,w){s.info(function(){if(s.g)if(w)for(var C="",K=w.split("&"),ut=0;ut<K.length;ut++){var z=K[ut].split("=");if(1<z.length){var mt=z[0];z=z[1];var pt=mt.split("_");C=2<=pt.length&&pt[1]=="type"?C+(mt+"="+z+"&"):C+(mt+"=redacted&")}}else C=null;else C=w;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+l+`
`+C})}function Qu(s,a,l,h,v,w,C){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+l+`
`+w+" "+C})}function me(s,a,l,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Hu(s,l)+(h?" "+h:"")})}function Wu(s,a){s.info(function(){return"TIMEOUT: "+a})}ze.prototype.info=function(){};function Hu(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var h=l[s];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return kr(l)}catch{return a}}var Rn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},di={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lr;function Vn(){}D(Vn,xr),Vn.prototype.g=function(){return new XMLHttpRequest},Vn.prototype.i=function(){return{}},Lr=new Vn;function $t(s,a,l,h){this.j=s,this.i=a,this.l=l,this.R=h||1,this.U=new Ue(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mi}function mi(){this.i=null,this.g="",this.h=!1}var pi={},Fr={};function Ur(s,a,l){s.L=1,s.v=Dn(Lt(a)),s.m=l,s.P=!0,gi(s,null)}function gi(s,a){s.F=Date.now(),Pn(s),s.A=Lt(s.v);var l=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),Di(l.i,"t",h),s.C=0,l=s.j.J,s.h=new mi,s.g=Wi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new zu(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,h=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(ii[0]=v.toString()),v=ii);for(var w=0;w<v.length;w++){var C=Zs(l,v[w],h||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),je(),Ku(s.i,s.u,s.A,s.l,s.R,s.m)}$t.prototype.ca=function(s){s=s.target;const a=this.M;a&&Ft(s)==3?a.j():this.Y(s)},$t.prototype.Y=function(s){try{if(s==this.g)t:{const pt=Ft(this.g);var a=this.g.Ba();const _e=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Li(this.g)))){this.J||pt!=4||a==7||(a==8||0>=_e?je(3):je(2)),qr(this);var l=this.g.Z();this.X=l;e:if(_i(this)){var h=Li(this.g);s="";var v=h.length,w=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ie(this),$e(this);var C="";break e}this.h.i=new c.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(w&&a==v-1)});h.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,Qu(this.i,this.u,this.A,this.l,this.R,pt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var K,ut=this.g;if((K=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(K)){var z=K;break e}}z=null}if(l=z)me(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jr(this,l);else{this.o=!1,this.s=3,Et(12),ie(this),$e(this);break t}}if(this.P){l=!0;let Rt;for(;!this.J&&this.C<C.length;)if(Rt=Xu(this,C),Rt==Fr){pt==4&&(this.s=4,Et(14),l=!1),me(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==pi){this.s=4,Et(15),me(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else me(this.i,this.l,Rt,null),jr(this,Rt);if(_i(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||C.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)me(this.i,this.l,C,"[Invalid Chunked Response]"),ie(this),$e(this);else if(0<C.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Qr(mt),mt.M=!0,Et(11))}}else me(this.i,this.l,C,null),jr(this,C);pt==4&&ie(this),this.o&&!this.J&&(pt==4?$i(this.j,this):(this.o=!1,Pn(this)))}else dl(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),ie(this),$e(this)}}}catch{}finally{}};function _i(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Xu(s,a){var l=s.C,h=a.indexOf(`
`,l);return h==-1?Fr:(l=Number(a.substring(l,h)),isNaN(l)?pi:(h+=1,h+l>a.length?Fr:(a=a.slice(h,h+l),s.C=h+l,a)))}$t.prototype.cancel=function(){this.J=!0,ie(this)};function Pn(s){s.S=Date.now()+s.I,yi(s,s.I)}function yi(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Be(R(s.ba,s),a)}function qr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}$t.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Wu(this.i,this.A),this.L!=2&&(je(),Et(17)),ie(this),this.s=2,$e(this)):yi(this,this.S-s)};function $e(s){s.j.G==0||s.J||$i(s.j,s)}function ie(s){qr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,oi(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function jr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Br(l.h,s))){if(!s.K&&Br(l.h,s)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)On(l),xn(l);else break t;Kr(l),Et(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Be(R(l.Za,l),6e3));if(1>=vi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ae(l,11)}else if((s.K||l.g==s)&&On(l),!B(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let z=v[a];if(l.T=z[0],z=z[1],l.G==2)if(z[0]=="c"){l.K=z[1],l.ia=z[2];const mt=z[3];mt!=null&&(l.la=mt,l.j.info("VER="+l.la));const pt=z[4];pt!=null&&(l.Aa=pt,l.j.info("SVER="+l.Aa));const _e=z[5];_e!=null&&typeof _e=="number"&&0<_e&&(h=1.5*_e,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const Rt=s.g;if(Rt){const Fn=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fn){var w=h.h;w.g||Fn.indexOf("spdy")==-1&&Fn.indexOf("quic")==-1&&Fn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(zr(w,w.h),w.h=null))}if(h.D){const Wr=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;Wr&&(h.ya=Wr,H(h.I,h.D,Wr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var C=s;if(h.qa=Qi(h,h.J?h.ia:null,h.W),C.K){Ii(h.h,C);var K=C,ut=h.L;ut&&(K.I=ut),K.B&&(qr(K),Pn(K)),h.g=C}else Bi(h);0<l.i.length&&Mn(l)}else z[0]!="stop"&&z[0]!="close"||ae(l,7);else l.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?ae(l,7):Gr(l):z[0]!="noop"&&l.l&&l.l.ta(z),l.v=0)}}je(4)}catch{}}var Yu=class{constructor(s,a){this.g=s,this.map=a}};function Ei(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ti(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function vi(s){return s.h?1:s.g?s.g.size:0}function Br(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function zr(s,a){s.g?s.g.add(a):s.h=a}function Ii(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Ei.prototype.cancel=function(){if(this.i=Ai(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ai(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return x(s.i)}function Ju(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(f(s)){for(var a=[],l=s.length,h=0;h<l;h++)a.push(s[h]);return a}a=[],l=0;for(h in s)a[l++]=s[h];return a}function Zu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(f(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const h in s)a[l++]=h;return a}}}function wi(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(f(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=Zu(s),h=Ju(s),v=h.length,w=0;w<v;w++)a.call(void 0,h[w],l&&l[w],s)}var Ri=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tl(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var h=s[l].indexOf("="),v=null;if(0<=h){var w=s[l].substring(0,h);v=s[l].substring(h+1)}else w=s[l];a(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function oe(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof oe){this.h=s.h,Sn(this,s.j),this.o=s.o,this.g=s.g,Cn(this,s.s),this.l=s.l;var a=s.i,l=new Qe;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Vi(this,l),this.m=s.m}else s&&(a=String(s).match(Ri))?(this.h=!1,Sn(this,a[1]||"",!0),this.o=Ge(a[2]||""),this.g=Ge(a[3]||"",!0),Cn(this,a[4]),this.l=Ge(a[5]||"",!0),Vi(this,a[6]||"",!0),this.m=Ge(a[7]||"")):(this.h=!1,this.i=new Qe(null,this.h))}oe.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Ke(a,Pi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Ke(a,Pi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Ke(l,l.charAt(0)=="/"?rl:nl,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Ke(l,il)),s.join("")};function Lt(s){return new oe(s)}function Sn(s,a,l){s.j=l?Ge(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Cn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Vi(s,a,l){a instanceof Qe?(s.i=a,ol(s.i,s.h)):(l||(a=Ke(a,sl)),s.i=new Qe(a,s.h))}function H(s,a,l){s.i.set(a,l)}function Dn(s){return H(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ge(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ke(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,el),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function el(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Pi=/[#\/\?@]/g,nl=/[#\?:]/g,rl=/[#\?]/g,sl=/[#\?@]/g,il=/#/g;function Qe(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Gt(s){s.g||(s.g=new Map,s.h=0,s.i&&tl(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=Qe.prototype,r.add=function(s,a){Gt(this),this.i=null,s=pe(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function Si(s,a){Gt(s),a=pe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Ci(s,a){return Gt(s),a=pe(s,a),s.g.has(a)}r.forEach=function(s,a){Gt(this),this.g.forEach(function(l,h){l.forEach(function(v){s.call(a,v,h,this)},this)},this)},r.na=function(){Gt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const v=s[h];for(let w=0;w<v.length;w++)l.push(a[h])}return l},r.V=function(s){Gt(this);let a=[];if(typeof s=="string")Ci(this,s)&&(a=a.concat(this.g.get(pe(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return Gt(this),this.i=null,s=pe(this,s),Ci(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Di(s,a,l){Si(s,a),0<l.length&&(s.i=null,s.g.set(pe(s,a),x(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const w=encodeURIComponent(String(h)),C=this.V(h);for(h=0;h<C.length;h++){var v=w;C[h]!==""&&(v+="="+encodeURIComponent(String(C[h]))),s.push(v)}}return this.i=s.join("&")};function pe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function ol(s,a){a&&!s.j&&(Gt(s),s.i=null,s.g.forEach(function(l,h){var v=h.toLowerCase();h!=v&&(Si(this,h),Di(this,v,l))},s)),s.j=a}function al(s,a){const l=new ze;if(c.Image){const h=new Image;h.onload=S(Kt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=S(Kt,l,"TestLoadImage: error",!1,a,h),h.onabort=S(Kt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=S(Kt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function ul(s,a){const l=new ze,h=new AbortController,v=setTimeout(()=>{h.abort(),Kt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(w=>{clearTimeout(v),w.ok?Kt(l,"TestPingServer: ok",!0,a):Kt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Kt(l,"TestPingServer: error",!1,a)})}function Kt(s,a,l,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(l)}catch{}}function ll(){this.g=new Gu}function cl(s,a,l){const h=l||"";try{wi(s,function(v,w){let C=v;d(v)&&(C=kr(v)),a.push(h+w+"="+encodeURIComponent(C))})}catch(v){throw a.push(h+"type="+encodeURIComponent("_badmap")),v}}function bn(s){this.l=s.Ub||null,this.j=s.eb||!1}D(bn,xr),bn.prototype.g=function(){return new Nn(this.l,this.j)},bn.prototype.i=function(s){return function(){return s}}({});function Nn(s,a){dt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Nn,dt),r=Nn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,He(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,We(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,He(this)),this.g&&(this.readyState=3,He(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function bi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?We(this):He(this),this.readyState==3&&bi(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,We(this))},r.Qa=function(s){this.g&&(this.response=s,We(this))},r.ga=function(){this.g&&We(this)};function We(s){s.readyState=4,s.l=null,s.j=null,s.v=null,He(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function He(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ni(s){let a="";return at(s,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function $r(s,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=Ni(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):H(s,a,l))}function J(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(J,dt);var hl=/^https?$/i,fl=["POST","PUT"];r=J.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lr.g(),this.v=this.o?ai(this.o):ai(Lr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){ki(this,w);return}if(s=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)l.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())l.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(fl,a,void 0))||h||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of l)this.g.setRequestHeader(w,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Oi(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){ki(this,w)}};function ki(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,xi(s),kn(s)}function xi(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,yt(this,"complete"),yt(this,"abort"),kn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kn(this,!0)),J.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Mi(this):this.bb())},r.bb=function(){Mi(this)};function Mi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Ft(s)!=4||s.Z()!=2)){if(s.u&&Ft(s)==4)ri(s.Ea,0,s);else if(yt(s,"readystatechange"),Ft(s)==4){s.h=!1;try{const C=s.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=C===0){var v=String(s.D).match(Ri)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),h=!hl.test(v?v.toLowerCase():"")}l=h}if(l)yt(s,"complete"),yt(s,"success");else{s.m=6;try{var w=2<Ft(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",xi(s)}}finally{kn(s)}}}}function kn(s,a){if(s.g){Oi(s);const l=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||yt(s,"ready");try{l.onreadystatechange=h}catch{}}}function Oi(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Ft(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),$u(a)}};function Li(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function dl(s){const a={};s=(s.g&&2<=Ft(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(B(s[h]))continue;var l=E(s[h]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[v]||[];a[v]=w,w.push(l)}T(a,function(h){return h.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xe(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Fi(s){this.Aa=0,this.i=[],this.j=new ze,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xe("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xe("baseRetryDelayMs",5e3,s),this.cb=Xe("retryDelaySeedMs",1e4,s),this.Wa=Xe("forwardChannelMaxRetries",2,s),this.wa=Xe("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ei(s&&s.concurrentRequestLimit),this.Da=new ll,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Fi.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,h){Et(0),this.W=s,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=Qi(this,null,this.W),Mn(this)};function Gr(s){if(Ui(s),s.G==3){var a=s.U++,l=Lt(s.I);if(H(l,"SID",s.K),H(l,"RID",a),H(l,"TYPE","terminate"),Ye(s,l),a=new $t(s,s.j,a),a.L=2,a.v=Dn(Lt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Wi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Pn(a)}Ki(s)}function xn(s){s.g&&(Qr(s),s.g.cancel(),s.g=null)}function Ui(s){xn(s),s.u&&(c.clearTimeout(s.u),s.u=null),On(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Mn(s){if(!Ti(s.h)&&!s.s){s.s=!0;var a=s.Ga;Oe||Js(),Le||(Oe(),Le=!0),Rr.add(a,s),s.B=0}}function ml(s,a){return vi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Be(R(s.Ga,s,a),Gi(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new $t(this,this.j,s);let w=this.o;if(this.S&&(w?(w=m(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=ji(this,v,a),l=Lt(this.I),H(l,"RID",s),H(l,"CVER",22),this.D&&H(l,"X-HTTP-Session-Id",this.D),Ye(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Ni(w)))+"&"+a:this.m&&$r(l,this.m,w)),zr(this.h,v),this.Ua&&H(l,"TYPE","init"),this.P?(H(l,"$req",a),H(l,"SID","null"),v.T=!0,Ur(v,l,null)):Ur(v,l,a),this.G=2}}else this.G==3&&(s?qi(this,s):this.i.length==0||Ti(this.h)||qi(this))};function qi(s,a){var l;a?l=a.l:l=s.U++;const h=Lt(s.I);H(h,"SID",s.K),H(h,"RID",l),H(h,"AID",s.T),Ye(s,h),s.m&&s.o&&$r(h,s.m,s.o),l=new $t(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=ji(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),zr(s.h,l),Ur(l,h,a)}function Ye(s,a){s.H&&at(s.H,function(l,h){H(a,h,l)}),s.l&&wi({},function(l,h){H(a,h,l)})}function ji(s,a,l){l=Math.min(s.i.length,l);var h=s.l?R(s.l.Na,s.l,s):null;t:{var v=s.i;let w=-1;for(;;){const C=["count="+l];w==-1?0<l?(w=v[0].g,C.push("ofs="+w)):w=0:C.push("ofs="+w);let K=!0;for(let ut=0;ut<l;ut++){let z=v[ut].g;const mt=v[ut].map;if(z-=w,0>z)w=Math.max(0,v[ut].g-100),K=!1;else try{cl(mt,C,"req"+z+"_")}catch{h&&h(mt)}}if(K){h=C.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,h}function Bi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Oe||Js(),Le||(Oe(),Le=!0),Rr.add(a,s),s.v=0}}function Kr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Be(R(s.Fa,s),Gi(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,zi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Be(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),xn(this),zi(this))};function Qr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function zi(s){s.g=new $t(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Lt(s.qa);H(a,"RID","rpc"),H(a,"SID",s.K),H(a,"AID",s.T),H(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&H(a,"TO",s.ja),H(a,"TYPE","xmlhttp"),Ye(s,a),s.m&&s.o&&$r(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Dn(Lt(a)),l.m=null,l.P=!0,gi(l,s)}r.Za=function(){this.C!=null&&(this.C=null,xn(this),Kr(this),Et(19))};function On(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function $i(s,a){var l=null;if(s.g==a){On(s),Qr(s),s.g=null;var h=2}else if(Br(s.h,a))l=a.D,Ii(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=s.B;h=wn(),yt(h,new fi(h,l)),Mn(s)}else Bi(s);else if(v=a.s,v==3||v==0&&0<a.X||!(h==1&&ml(s,a)||h==2&&Kr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),v){case 1:ae(s,5);break;case 4:ae(s,10);break;case 3:ae(s,6);break;default:ae(s,2)}}}function Gi(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function ae(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),h=s.Xa;const v=!h;h=new oe(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Sn(h,"https"),Dn(h),v?al(h.toString(),l):ul(h.toString(),l)}else Et(2);s.G=0,s.l&&s.l.sa(a),Ki(s),Ui(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Ki(s){if(s.G=0,s.ka=[],s.l){const a=Ai(s.h);(a.length!=0||s.i.length!=0)&&(b(s.ka,a),b(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function Qi(s,a,l){var h=l instanceof oe?Lt(l):new oe(l);if(h.g!="")a&&(h.g=a+"."+h.g),Cn(h,h.s);else{var v=c.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var w=new oe(null);h&&Sn(w,h),a&&(w.g=a),v&&Cn(w,v),l&&(w.l=l),h=w}return l=s.D,a=s.ya,l&&a&&H(h,l,a),H(h,"VER",s.la),Ye(s,h),h}function Wi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new J(new bn({eb:l})):new J(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hi(){}r=Hi.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ln(){}Ln.prototype.g=function(s,a){return new It(s,a)};function It(s,a){dt.call(this),this.g=new Fi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!B(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!B(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ge(this)}D(It,dt),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Gr(this.g)},It.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=kr(s),s=l);a.i.push(new Yu(a.Ya++,s)),a.G==3&&Mn(a)},It.prototype.N=function(){this.g.l=null,delete this.j,Gr(this.g),delete this.g,It.aa.N.call(this)};function Xi(s){Mr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}D(Xi,Mr);function Yi(){Or.call(this),this.status=1}D(Yi,Or);function ge(s){this.g=s}D(ge,Hi),ge.prototype.ua=function(){yt(this.g,"a")},ge.prototype.ta=function(s){yt(this.g,new Xi(s))},ge.prototype.sa=function(s){yt(this.g,new Yi)},ge.prototype.ra=function(){yt(this.g,"b")},Ln.prototype.createWebChannel=Ln.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,fa=function(){return new Ln},ha=function(){return wn()},ca=se,ts={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rn.NO_ERROR=0,Rn.TIMEOUT=8,Rn.HTTP_ERROR=6,Gn=Rn,di.COMPLETE="complete",la=di,ui.EventType=qe,qe.OPEN="a",qe.CLOSE="b",qe.ERROR="c",qe.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Je=ui,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,ua=J}).apply(typeof Un<"u"?Un:typeof self<"u"?self:typeof window<"u"?window:{});const to="@firebase/firestore",eo="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let De="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new pl("@firebase/firestore");function ye(){return le.logLevel}function N(r,...t){if(le.logLevel<=Ut.DEBUG){const e=t.map(Es);le.debug(`Firestore (${De}): ${r}`,...e)}}function jt(r,...t){if(le.logLevel<=Ut.ERROR){const e=t.map(Es);le.error(`Firestore (${De}): ${r}`,...e)}}function on(r,...t){if(le.logLevel<=Ut.WARN){const e=t.map(Es);le.warn(`Firestore (${De}): ${r}`,...e)}}function Es(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,da(r,n,e)}function da(r,t,e){let n=`FIRESTORE (${De}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw jt(n),new Error(n)}function $(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||da(t,i,n)}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends El{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Pl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Tt.UNAUTHENTICATED))}shutdown(){}}class Sl{constructor(t){this.t=t,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){$(this.o===void 0,42304);let n=this.i;const i=f=>this.i!==n?(n=this.i,e(f)):Promise.resolve();let o=new Ht;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ht,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},c=f=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ht)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?($(typeof n.accessToken=="string",31837,{l:n}),new Vl(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return $(t===null||typeof t=="string",2055,{h:t}),new Tt(t)}}class Cl{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Dl{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Cl(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class no{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bl{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yl(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){$(this.o===void 0,3512);const n=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new no(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?($(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new no(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Nl(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function U(r,t){return r<t?-1:r>t?1:0}function es(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const i=r.charAt(n),o=t.charAt(n);if(i!==o)return Hr(i)===Hr(o)?U(i,o):Hr(i)?1:-1}return U(r.length,t.length)}const kl=55296,xl=57343;function Hr(r){const t=r.charCodeAt(0);return t>=kl&&t<=xl}function Re(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="__name__";class St{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return St.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof St?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=St.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const n=St.isNumericId(t),i=St.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?St.extractNumericId(t).compare(St.extractNumericId(e)):es(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Wt.fromString(t.substring(4,t.length-2))}}class W extends St{construct(t,e,n){return new W(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new W(e)}static emptyPath(){return new W([])}}const Ml=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends St{construct(t,e,n){return new ct(t,e,n)}static isValidIdentifier(t){return Ml.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ro}static keyField(){return new ct([ro])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new k(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new k(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new k(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=f,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(n+=c,i++):(o(),i++)}if(o(),u)throw new k(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(W.fromString(t))}static fromName(t){return new M(W.fromString(t).popFirst(5))}static empty(){return new M(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new W(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(r,t,e){if(!e)throw new k(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Ol(r,t,e,n){if(t===!0&&n===!0)throw new k(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function so(r){if(!M.isDocumentKey(r))throw new k(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function io(r){if(M.isDocumentKey(r))throw new k(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function pa(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function ur(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O(12329,{type:typeof r})}function an(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new k(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ur(r);throw new k(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(r,t){const e={typeString:r};return t&&(e.value=t),e}function mn(r,t){if(!pa(r))throw new k(V.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const u=r[n];if(i&&typeof u!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new k(V.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=-62135596800,ao=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*ao);return new X(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<oo)throw new k(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ao}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(mn(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-oo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:nt("string",X._jsonSchemaVersion),seconds:nt("number"),nanoseconds:nt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new X(0,0))}static max(){return new L(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=-1;function Ll(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=L.fromTimestamp(n===1e9?new X(e+1,0):new X(e,n));return new Yt(i,M.empty(),t)}function Fl(r){return new Yt(r.readTime,r.key,un)}class Yt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Yt(L.min(),M.empty(),un)}static max(){return new Yt(L.max(),M.empty(),un)}}function Ul(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:U(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==ql)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,n)=>{e(t)})}static reject(t){return new P((e,n)=>{n(t)})}static waitFor(t){return new P((e,n)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},f=>n(f))}),u=!0,o===i&&e()})}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next(i=>i?P.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new P((n,i)=>{const o=t.length,u=new Array(o);let c=0;for(let f=0;f<o;f++){const d=f;e(t[d]).next(p=>{u[d]=p,++c,c===o&&n(u)},p=>i(p))}})}static doWhile(t,e){return new P((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function Bl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ne(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}lr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=-1;function cr(r){return r==null}function Yn(r){return r===0&&1/r==-1/0}function zl(r){return typeof r=="number"&&Number.isInteger(r)&&!Yn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="";function $l(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=uo(t)),t=Gl(r.get(e),t);return uo(t)}function Gl(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case ga:e+="";break;default:e+=o}}return e}function uo(r){return r+ga+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function re(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function _a(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qn(this.root,t,this.comparator,!0)}}class qn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new lt(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new co(this.data.getIterator())}getIteratorFrom(t){return new co(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class co{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Vt([])}unionWith(t){let e=new st(ct.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Vt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Re(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ya("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Kl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(r){if($(!!r,39018),typeof r=="string"){let t=0;const e=Kl.exec(r);if($(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Z(r.seconds),nanos:Z(r.nanos)}}function Z(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Zt(r){return typeof r=="string"?ht.fromBase64String(r):ht.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="server_timestamp",Ta="__type__",va="__previous_value__",Ia="__local_write_time__";function Is(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Ta])==null?void 0:n.stringValue)===Ea}function hr(r){const t=r.mapValue.fields[va];return Is(t)?hr(t):t}function ln(r){const t=Jt(r.mapValue.fields[Ia].timestampValue);return new X(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t,e,n,i,o,u,c,f,d,p){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=d,this.isUsingEmulator=p}}const ns="(default)";class cn{constructor(t,e){this.projectId=t,this.database=e||ns}static empty(){return new cn("","")}get isDefaultDatabase(){return this.database===ns}isEqual(t){return t instanceof cn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="__type__",Wl="__max__",jn={mapValue:{}},wa="__vector__",Jn="value";function te(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Is(r)?4:Xl(r)?9007199254740991:Hl(r)?10:11:O(28295,{value:r})}function xt(r,t){if(r===t)return!0;const e=te(r);if(e!==te(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return ln(r).isEqual(ln(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Jt(i.timestampValue),c=Jt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return Zt(i.bytesValue).isEqual(Zt(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return Z(i.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Z(i.integerValue)===Z(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=Z(i.doubleValue),c=Z(o.doubleValue);return u===c?Yn(u)===Yn(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return Re(r.arrayValue.values||[],t.arrayValue.values||[],xt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(lo(u)!==lo(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!xt(u[f],c[f])))return!1;return!0}(r,t);default:return O(52216,{left:r})}}function hn(r,t){return(r.values||[]).find(e=>xt(e,t))!==void 0}function Ve(r,t){if(r===t)return 0;const e=te(r),n=te(t);if(e!==n)return U(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=Z(o.integerValue||o.doubleValue),f=Z(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(r,t);case 3:return ho(r.timestampValue,t.timestampValue);case 4:return ho(ln(r),ln(t));case 5:return es(r.stringValue,t.stringValue);case 6:return function(o,u){const c=Zt(o),f=Zt(u);return c.compareTo(f)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),f=u.split("/");for(let d=0;d<c.length&&d<f.length;d++){const p=U(c[d],f[d]);if(p!==0)return p}return U(c.length,f.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=U(Z(o.latitude),Z(u.latitude));return c!==0?c:U(Z(o.longitude),Z(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return fo(r.arrayValue,t.arrayValue);case 10:return function(o,u){var R,S,D,x;const c=o.fields||{},f=u.fields||{},d=(R=c[Jn])==null?void 0:R.arrayValue,p=(S=f[Jn])==null?void 0:S.arrayValue,A=U(((D=d==null?void 0:d.values)==null?void 0:D.length)||0,((x=p==null?void 0:p.values)==null?void 0:x.length)||0);return A!==0?A:fo(d,p)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===jn.mapValue&&u===jn.mapValue)return 0;if(o===jn.mapValue)return 1;if(u===jn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),d=u.fields||{},p=Object.keys(d);f.sort(),p.sort();for(let A=0;A<f.length&&A<p.length;++A){const R=es(f[A],p[A]);if(R!==0)return R;const S=Ve(c[f[A]],d[p[A]]);if(S!==0)return S}return U(f.length,p.length)}(r.mapValue,t.mapValue);default:throw O(23264,{he:e})}}function ho(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return U(r,t);const e=Jt(r),n=Jt(t),i=U(e.seconds,n.seconds);return i!==0?i:U(e.nanos,n.nanos)}function fo(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Ve(e[i],n[i]);if(o)return o}return U(e.length,n.length)}function Pe(r){return rs(r)}function rs(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Jt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Zt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=rs(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${rs(e.fields[u])}`;return i+"}"}(r.mapValue):O(61005,{value:r})}function Kn(r){switch(te(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=hr(r);return t?16+Kn(t):16;case 5:return 2*r.stringValue.length;case 6:return Zt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+Kn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return re(n.fields,(o,u)=>{i+=o.length+Kn(u)}),i}(r.mapValue);default:throw O(13486,{value:r})}}function mo(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function ss(r){return!!r&&"integerValue"in r}function As(r){return!!r&&"arrayValue"in r}function po(r){return!!r&&"nullValue"in r}function go(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Qn(r){return!!r&&"mapValue"in r}function Hl(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Aa])==null?void 0:n.stringValue)===wa}function en(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return re(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=en(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=en(r.arrayValue.values[e]);return t}return{...r}}function Xl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Wl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Qn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=en(e)}setAll(t){let e=ct.emptyPath(),n={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,n,i),n={},i=[],e=c.popLast()}u?n[c.lastSegment()]=en(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());Qn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return xt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Qn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){re(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new At(en(this.value))}}function Ra(r){const t=[];return re(r.fields,(e,n)=>{const i=new ct([e]);if(Qn(n)){const o=Ra(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new Vt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,n,i,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),At.empty(),0)}static newFoundDocument(t,e,n,i){return new _t(t,1,e,L.min(),n,i,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),At.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e){this.position=t,this.inclusive=e}}function _o(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=M.comparator(M.fromName(u.referenceValue),e.key):n=Ve(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function yo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!xt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Yl(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{}class et extends Va{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Zl(t,e,n):e==="array-contains"?new nc(t,n):e==="in"?new rc(t,n):e==="not-in"?new sc(t,n):e==="array-contains-any"?new ic(t,n):new et(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new tc(t,n):new ec(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ve(e,this.value)):e!==null&&te(this.value)===te(e)&&this.matchesComparison(Ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pt extends Va{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Pt(t,e)}matches(t){return Pa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Pa(r){return r.op==="and"}function Sa(r){return Jl(r)&&Pa(r)}function Jl(r){for(const t of r.filters)if(t instanceof Pt)return!1;return!0}function is(r){if(r instanceof et)return r.field.canonicalString()+r.op.toString()+Pe(r.value);if(Sa(r))return r.filters.map(t=>is(t)).join(",");{const t=r.filters.map(e=>is(e)).join(",");return`${r.op}(${t})`}}function Ca(r,t){return r instanceof et?function(n,i){return i instanceof et&&n.op===i.op&&n.field.isEqual(i.field)&&xt(n.value,i.value)}(r,t):r instanceof Pt?function(n,i){return i instanceof Pt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,c)=>o&&Ca(u,i.filters[c]),!0):!1}(r,t):void O(19439)}function Da(r){return r instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Pe(e.value)}`}(r):r instanceof Pt?function(e){return e.op.toString()+" {"+e.getFilters().map(Da).join(" ,")+"}"}(r):"Filter"}class Zl extends et{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class tc extends et{constructor(t,e){super(t,"in",e),this.keys=ba("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ec extends et{constructor(t,e){super(t,"not-in",e),this.keys=ba("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ba(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class nc extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return As(e)&&hn(e.arrayValue,this.value)}}class rc extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&hn(this.value.arrayValue,e)}}class sc extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!hn(this.value.arrayValue,e)}}class ic extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!As(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>hn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,e=null,n=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.Te=null}}function Eo(r,t=null,e=[],n=[],i=null,o=null,u=null){return new oc(r,t,e,n,i,o,u)}function ws(r){const t=F(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>is(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),cr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Pe(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Pe(n)).join(",")),t.Te=e}return t.Te}function Rs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Yl(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Ca(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!yo(r.startAt,t.startAt)&&yo(r.endAt,t.endAt)}function os(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,e=null,n=[],i=[],o=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=f,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ac(r,t,e,n,i,o,u,c){return new pn(r,t,e,n,i,o,u,c)}function Na(r){return new pn(r)}function To(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ka(r){return r.collectionGroup!==null}function nn(r){const t=F(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new st(ct.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new tr(o,n))}),e.has(ct.keyField().canonicalString())||t.Ie.push(new tr(ct.keyField(),n))}return t.Ie}function Ct(r){const t=F(r);return t.Ee||(t.Ee=uc(t,nn(r))),t.Ee}function uc(r,t){if(r.limitType==="F")return Eo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new tr(i.field,o)});const e=r.endAt?new Zn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Zn(r.startAt.position,r.startAt.inclusive):null;return Eo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function as(r,t){const e=r.filters.concat([t]);return new pn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function us(r,t,e){return new pn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function fr(r,t){return Rs(Ct(r),Ct(t))&&r.limitType===t.limitType}function xa(r){return`${ws(Ct(r))}|lt:${r.limitType}`}function Ee(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Da(i)).join(", ")}]`),cr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Pe(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Pe(i)).join(",")),`Target(${n})`}(Ct(r))}; limitType=${r.limitType})`}function dr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of nn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,c,f){const d=_o(u,c,f);return u.inclusive?d<=0:d<0}(n.startAt,nn(n),i)||n.endAt&&!function(u,c,f){const d=_o(u,c,f);return u.inclusive?d>=0:d>0}(n.endAt,nn(n),i))}(r,t)}function lc(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ma(r){return(t,e)=>{let n=!1;for(const i of nn(r)){const o=cc(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function cc(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,c){const f=u.data.field(o),d=c.data.field(o);return f!==null&&d!==null?Ve(f,d):O(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){re(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return _a(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Y(M.comparator);function Bt(){return hc}const Oa=new Y(M.comparator);function Ze(...r){let t=Oa;for(const e of r)t=t.insert(e.key,e);return t}function La(r){let t=Oa;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ue(){return rn()}function Fa(){return rn()}function rn(){return new he(r=>r.toString(),(r,t)=>r.isEqual(t))}const fc=new Y(M.comparator),dc=new st(M.comparator);function q(...r){let t=dc;for(const e of r)t=t.add(e);return t}const mc=new st(U);function pc(){return mc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yn(t)?"-0":t}}function Ua(r){return{integerValue:""+r}}function gc(r,t){return zl(t)?Ua(t):Vs(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this._=void 0}}function _c(r,t,e){return r instanceof er?function(i,o){const u={fields:{[Ta]:{stringValue:Ea},[Ia]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Is(o)&&(o=hr(o)),o&&(u.fields[va]=o),{mapValue:u}}(e,t):r instanceof fn?ja(r,t):r instanceof dn?Ba(r,t):function(i,o){const u=qa(i,o),c=vo(u)+vo(i.Ae);return ss(u)&&ss(i.Ae)?Ua(c):Vs(i.serializer,c)}(r,t)}function yc(r,t,e){return r instanceof fn?ja(r,t):r instanceof dn?Ba(r,t):e}function qa(r,t){return r instanceof nr?function(n){return ss(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class er extends mr{}class fn extends mr{constructor(t){super(),this.elements=t}}function ja(r,t){const e=za(t);for(const n of r.elements)e.some(i=>xt(i,n))||e.push(n);return{arrayValue:{values:e}}}class dn extends mr{constructor(t){super(),this.elements=t}}function Ba(r,t){let e=za(t);for(const n of r.elements)e=e.filter(i=>!xt(i,n));return{arrayValue:{values:e}}}class nr extends mr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function vo(r){return Z(r.integerValue||r.doubleValue)}function za(r){return As(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Ec(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof fn&&i instanceof fn||n instanceof dn&&i instanceof dn?Re(n.elements,i.elements,xt):n instanceof nr&&i instanceof nr?xt(n.Ae,i.Ae):n instanceof er&&i instanceof er}(r.transform,t.transform)}class Tc{constructor(t,e){this.version=t,this.transformResults=e}}class Dt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Dt}static exists(t){return new Dt(void 0,t)}static updateTime(t){return new Dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Wn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class pr{}function $a(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Ps(r.key,Dt.none()):new gr(r.key,r.data,Dt.none());{const e=r.data,n=At.empty();let i=new st(ct.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new fe(r.key,n,new Vt(i.toArray()),Dt.none())}}function vc(r,t,e){r instanceof gr?function(i,o,u){const c=i.value.clone(),f=Ao(i.fieldTransforms,o,u.transformResults);c.setAll(f),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof fe?function(i,o,u){if(!Wn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Ao(i.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(Ga(i)),f.setAll(c),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function sn(r,t,e,n){return r instanceof gr?function(o,u,c,f){if(!Wn(o.precondition,u))return c;const d=o.value.clone(),p=wo(o.fieldTransforms,f,u);return d.setAll(p),u.convertToFoundDocument(u.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof fe?function(o,u,c,f){if(!Wn(o.precondition,u))return c;const d=wo(o.fieldTransforms,f,u),p=u.data;return p.setAll(Ga(o)),p.setAll(d),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,u,c){return Wn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function Ic(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=qa(n.transform,i||null);o!=null&&(e===null&&(e=At.empty()),e.set(n.field,o))}return e||null}function Io(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Re(n,i,(o,u)=>Ec(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class gr extends pr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fe extends pr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ga(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Ao(r,t,e){const n=new Map;$(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,c=t.data.field(o.field);n.set(o.field,yc(u,c,e[i]))}return n}function wo(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,_c(o,u,t))}return n}class Ps extends pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ac extends pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&vc(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=sn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=sn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Fa();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const f=$a(u,c);f!==null&&n.set(i.key,f),u.isValidDocument()||u.convertToNoDocument(L.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Re(this.mutations,t.mutations,(e,n)=>Io(e,n))&&Re(this.baseMutations,t.baseMutations,(e,n)=>Io(e,n))}}class Ss{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){$(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let i=function(){return fc}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new Ss(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,j;function Pc(r){switch(r){case V.OK:return O(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return O(15467,{code:r})}}function Ka(r){if(r===void 0)return jt("GRPC error has no .code"),V.UNKNOWN;switch(r){case tt.OK:return V.OK;case tt.CANCELLED:return V.CANCELLED;case tt.UNKNOWN:return V.UNKNOWN;case tt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case tt.INTERNAL:return V.INTERNAL;case tt.UNAVAILABLE:return V.UNAVAILABLE;case tt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case tt.NOT_FOUND:return V.NOT_FOUND;case tt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case tt.ABORTED:return V.ABORTED;case tt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case tt.DATA_LOSS:return V.DATA_LOSS;default:return O(39323,{code:r})}}(j=tt||(tt={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=new Wt([4294967295,4294967295],0);function Ro(r){const t=Sc().encode(r),e=new aa;return e.update(t),new Uint8Array(e.digest())}function Vo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Wt([e,n],0),new Wt([i,o],0)]}class Cs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new tn(`Invalid padding: ${e}`);if(n<0)throw new tn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new tn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new tn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Wt.fromNumber(this.ge)}ye(t,e,n){let i=t.add(e.multiply(Wt.fromNumber(n)));return i.compare(Cc)===1&&(i=new Wt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Ro(t),[n,i]=Vo(e);for(let o=0;o<this.hashCount;o++){const u=this.ye(n,i,o);if(!this.we(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Cs(o,i,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.ge===0)return;const e=Ro(t),[n,i]=Vo(e);for(let o=0;o<this.hashCount;o++){const u=this.ye(n,i,o);this.Se(u)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class tn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,gn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new _r(L.min(),i,new Y(U),Bt(),q())}}class gn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new gn(n,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e,n,i){this.be=t,this.removedTargetIds=e,this.key=n,this.De=i}}class Qa{constructor(t,e){this.targetId=t,this.Ce=e}}class Wa{constructor(t,e,n=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Po{constructor(){this.ve=0,this.Fe=So(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=q(),e=q(),n=q();return this.Fe.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:O(38017,{changeType:o})}}),new gn(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=So()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,$(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Dc{constructor(t){this.Ge=t,this.ze=new Map,this.je=Bt(),this.Je=Bn(),this.He=Bn(),this.Ye=new Y(U)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:O(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((n,i)=>{this.rt(i)&&e(i)})}st(t){const e=t.targetId,n=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(os(o))if(n===0){const u=new M(o.path);this.et(e,u,_t.newNoDocument(u,L.min()))}else $(n===1,20013,{expectedCount:n});else{const u=this._t(e);if(u!==n){const c=this.ut(t),f=c?this.ct(c,t,u):1;if(f!==0){this.it(e);const d=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=Zt(n).toUint8Array()}catch(f){if(f instanceof ya)return on("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{c=new Cs(u,i,o)}catch(f){return on(f instanceof tn?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return c.ge===0?null:c}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.Ge.ht(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.et(e,o,null),i++)}),i}Tt(t){const e=new Map;this.ze.forEach((o,u)=>{const c=this.ot(u);if(c){if(o.current&&os(c.target)){const f=new M(c.target.path);this.It(f).has(u)||this.Et(u,f)||this.et(u,f,_t.newNoDocument(f,t))}o.Be&&(e.set(u,o.ke()),o.qe())}});let n=q();this.He.forEach((o,u)=>{let c=!0;u.forEachWhile(f=>{const d=this.ot(f);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.je.forEach((o,u)=>u.setReadTime(t));const i=new _r(t,e,this.Ye,this.je,n);return this.je=Bt(),this.Je=Bn(),this.He=Bn(),this.Ye=new Y(U),i}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.Qe(e,1):i.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Po,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new st(U),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new st(U),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Po),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Bn(){return new Y(M.comparator)}function So(){return new Y(M.comparator)}const bc={asc:"ASCENDING",desc:"DESCENDING"},Nc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kc={and:"AND",or:"OR"};class xc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ls(r,t){return r.useProto3Json||cr(t)?t:{value:t}}function rr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ha(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Mc(r,t){return rr(r,t.toTimestamp())}function bt(r){return $(!!r,49232),L.fromTimestamp(function(e){const n=Jt(e);return new X(n.seconds,n.nanos)}(r))}function Ds(r,t){return cs(r,t).canonicalString()}function cs(r,t){const e=function(i){return new W(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Xa(r){const t=W.fromString(r);return $(eu(t),10190,{key:t.toString()}),t}function hs(r,t){return Ds(r.databaseId,t.path)}function Xr(r,t){const e=Xa(t);if(e.get(1)!==r.databaseId.projectId)throw new k(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new k(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(Ja(e))}function Ya(r,t){return Ds(r.databaseId,t)}function Oc(r){const t=Xa(r);return t.length===4?W.emptyPath():Ja(t)}function fs(r){return new W(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ja(r){return $(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Co(r,t,e){return{name:hs(r,t),fields:e.value.mapValue.fields}}function Lc(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?($(p===void 0||typeof p=="string",58123),ht.fromBase64String(p||"")):($(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),ht.fromUint8Array(p||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(d){const p=d.code===void 0?V.UNKNOWN:Ka(d.code);return new k(p,d.message||"")}(u);e=new Wa(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Xr(r,n.document.name),o=bt(n.document.updateTime),u=n.document.createTime?bt(n.document.createTime):L.min(),c=new At({mapValue:{fields:n.document.fields}}),f=_t.newFoundDocument(i,o,u,c),d=n.targetIds||[],p=n.removedTargetIds||[];e=new Hn(d,p,f.key,f)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Xr(r,n.document),o=n.readTime?bt(n.readTime):L.min(),u=_t.newNoDocument(i,o),c=n.removedTargetIds||[];e=new Hn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Xr(r,n.document),o=n.removedTargetIds||[];e=new Hn([],o,i,null)}else{if(!("filter"in t))return O(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new Vc(i,o),c=n.targetId;e=new Qa(c,u)}}return e}function Fc(r,t){let e;if(t instanceof gr)e={update:Co(r,t.key,t.value)};else if(t instanceof Ps)e={delete:hs(r,t.key)};else if(t instanceof fe)e={update:Co(r,t.key,t.data),updateMask:Qc(t.fieldMask)};else{if(!(t instanceof Ac))return O(16599,{Vt:t.type});e={verify:hs(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const c=u.transform;if(c instanceof er)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof fn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof dn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof nr)return{fieldPath:u.field.canonicalString(),increment:c.Ae};throw O(20930,{transform:u.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Mc(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O(27497)}(r,t.precondition)),e}function Uc(r,t){return r&&r.length>0?($(t!==void 0,14353),r.map(e=>function(i,o){let u=i.updateTime?bt(i.updateTime):bt(o);return u.isEqual(L.min())&&(u=bt(o)),new Tc(u,i.transformResults||[])}(e,t))):[]}function qc(r,t){return{documents:[Ya(r,t.path)]}}function jc(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ya(r,i);const o=function(d){if(d.length!==0)return tu(Pt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(d){if(d.length!==0)return d.map(p=>function(R){return{field:Te(R.field),direction:$c(R.dir)}}(p))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=ls(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:i}}function Bc(r){let t=Oc(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){$(n===1,65062);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(A){const R=Za(A);return R instanceof Pt&&Sa(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(R=>function(D){return new tr(ve(D.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(A){let R;return R=typeof A=="object"?A.value:A,cr(R)?null:R}(e.limit));let f=null;e.startAt&&(f=function(A){const R=!!A.before,S=A.values||[];return new Zn(S,R)}(e.startAt));let d=null;return e.endAt&&(d=function(A){const R=!A.before,S=A.values||[];return new Zn(S,R)}(e.endAt)),ac(t,i,u,o,c,"F",f,d)}function zc(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Za(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ve(e.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=ve(e.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ve(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ve(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(r):r.fieldFilter!==void 0?function(e){return et.create(ve(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Pt.create(e.compositeFilter.filters.map(n=>Za(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(e.compositeFilter.op))}(r):O(30097,{filter:r})}function $c(r){return bc[r]}function Gc(r){return Nc[r]}function Kc(r){return kc[r]}function Te(r){return{fieldPath:r.canonicalString()}}function ve(r){return ct.fromServerFormat(r.fieldPath)}function tu(r){return r instanceof et?function(e){if(e.op==="=="){if(go(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NAN"}};if(po(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(go(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NAN"}};if(po(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Te(e.field),op:Gc(e.op),value:e.value}}}(r):r instanceof Pt?function(e){const n=e.getFilters().map(i=>tu(i));return n.length===1?n[0]:{compositeFilter:{op:Kc(e.op),filters:n}}}(r):O(54877,{filter:r})}function Qc(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function eu(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e,n,i,o=L.min(),u=L.min(),c=ht.EMPTY_BYTE_STRING,f=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=f}withSequenceNumber(t){return new Qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t){this.yt=t}}function Hc(r){const t=Bc({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?us(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this.Cn=new Yc}addToCollectionParentIndex(t,e){return this.Cn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Yt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Yt.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Yc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new st(W.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new st(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nu=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(nu,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Se(0)}static cr(){return new Se(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="LruGarbageCollector",Jc=1048576;function No([r,t],[e,n]){const i=U(r,e);return i===0?U(t,n):i}class Zc{constructor(t){this.Ir=t,this.buffer=new st(No),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();No(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class th{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){N(bo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ne(e)?N(bo,"Ignoring IndexedDB error during garbage collection: ",e):await be(e)}await this.Vr(3e5)})}}class eh{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return P.resolve(lr.ce);const n=new Zc(e);return this.mr.forEachTarget(t,i=>n.Ar(i.sequenceNumber)).next(()=>this.mr.pr(t,i=>n.Ar(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Do)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Do):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,i,o,u,c,f,d;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,u=Date.now(),this.nthSequenceNumber(t,i))).next(A=>(n=A,c=Date.now(),this.removeTargets(t,n,e))).next(A=>(o=A,f=Date.now(),this.removeOrphanedDocuments(t,n))).next(A=>(d=Date.now(),ye()<=Ut.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-p}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(f-c)+`ms
	Removed ${A} documents in `+(d-f)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A})))}}function nh(r,t){return new eh(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.changes=new he(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&sn(n.mutation,i,Vt.empty(),X.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=q()){const i=ue();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=Ze();return o.forEach((c,f)=>{u=u.insert(c,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=ue();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,q()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,i){let o=Bt();const u=rn(),c=function(){return rn()}();return e.forEach((f,d)=>{const p=n.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof fe)?o=o.insert(d.key,d):p!==void 0?(u.set(d.key,p.mutation.getFieldMask()),sn(p.mutation,d,p.mutation.getFieldMask(),X.now())):u.set(d.key,Vt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((d,p)=>u.set(d,p)),e.forEach((d,p)=>c.set(d,new sh(p,u.get(d)??null))),c))}recalculateAndSaveOverlays(t,e){const n=rn();let i=new Y((u,c)=>u-c),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(f=>{const d=e.get(f);if(d===null)return;let p=n.get(f)||Vt.empty();p=c.applyToLocalView(d,p),n.set(f,p);const A=(i.get(c.batchId)||q()).add(f);i=i.insert(c.batchId,A)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),d=f.key,p=f.value,A=Fa();p.forEach(R=>{if(!o.has(R)){const S=$a(e.get(R),n.get(R));S!==null&&A.set(R,S),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,d,A))}return P.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ka(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):P.resolve(ue());let c=un,f=o;return u.next(d=>P.forEach(d,(p,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(t,p).next(R=>{f=f.insert(p,R)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,f,d,q())).next(p=>({batchId:c,changes:La(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let i=Ze();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=Ze();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,f=>{const d=function(A,R){return new pn(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(p=>{p.forEach((A,R)=>{u=u.insert(A,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((f,d)=>{const p=d.getKey();u.get(p)===null&&(u=u.insert(p,_t.newInvalidDocument(p)))});let c=Ze();return u.forEach((f,d)=>{const p=o.get(f);p!==void 0&&sn(p.mutation,d,Vt.empty(),X.now()),dr(e,d)&&(c=c.insert(f,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return P.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:bt(i.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(i){return{name:i.name,query:Hc(i.bundledQuery),readTime:bt(i.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.overlays=new Y(M.comparator),this.qr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ue();return P.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.St(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.qr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const i=ue(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,d=f.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&f.largestBatchId>n&&i.set(f.getKey(),f)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Y((d,p)=>d-p);const u=this.overlays.getIterator();for(;u.hasNext();){const d=u.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let p=o.get(d.largestBatchId);p===null&&(p=ue(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=ue(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return P.resolve(c)}St(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Rc(e,n));let o=this.qr.get(e);o===void 0&&(o=q(),this.qr.set(e,o)),this.qr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.Qr=new st(ot.$r),this.Ur=new st(ot.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new ot(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Gr(new ot(t,e))}zr(t,e){t.forEach(n=>this.removeReference(n,e))}jr(t){const e=new M(new W([])),n=new ot(e,t),i=new ot(e,t+1),o=[];return this.Ur.forEachInRange([n,i],u=>{this.Gr(u),o.push(u.key)}),o}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new M(new W([])),n=new ot(e,t),i=new ot(e,t+1);let o=q();return this.Ur.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new ot(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ot{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return M.comparator(t.key,e.key)||U(t.Yr,e.Yr)}static Kr(t,e){return U(t.Yr,e.Yr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new st(ot.$r)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new wc(o,e,n,i);this.mutationQueue.push(u);for(const c of i)this.Zr=this.Zr.add(new ot(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(u)}lookupMutationBatch(t,e){return P.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ei(n),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?vs:this.tr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ot(e,0),i=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([n,i],u=>{const c=this.Xr(u.Yr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st(U);return e.forEach(i=>{const o=new ot(i,0),u=new ot(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,u],c=>{n=n.add(c.Yr)})}),P.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const u=new ot(new M(o),0);let c=new st(U);return this.Zr.forEachWhile(f=>{const d=f.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(f.Yr)),!0)},u),P.resolve(this.ti(c))}ti(t){const e=[];return t.forEach(n=>{const i=this.Xr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){$(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return P.forEach(e.mutations,i=>{const o=new ot(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Zr=n})}ir(t){}containsKey(t,e){const n=new ot(e,0),i=this.Zr.firstAfterOrEqual(n);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t){this.ri=t,this.docs=function(){return new Y(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let n=Bt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))}),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Bt();const u=e.path,c=new M(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:d,value:{document:p}}=f.getNext();if(!u.isPrefixOf(d.path))break;d.path.length>u.length+1||Ul(Fl(p),n)<=0||(i.has(p.key)||dr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,i){O(9500)}ii(t,e){return P.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new hh(this)}getSize(t){return P.resolve(this.size)}}class hh extends rh{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(n)}),P.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t){this.persistence=t,this.si=new he(e=>ws(e),Rs),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.oi=0,this._i=new bs,this.targetCount=0,this.ai=Se.ur()}forEachTarget(t,e){return this.si.forEach((n,i)=>e(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),P.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Se(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Pr(e),P.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.si.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.si.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,e){this.ui={},this.overlays={},this.ci=new lr(0),this.li=!1,this.li=!0,this.hi=new uh,this.referenceDelegate=t(this),this.Pi=new fh(this),this.indexManager=new Xc,this.remoteDocumentCache=function(i){return new ch(i)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new Wc(e),this.Ii=new oh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ah,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new lh(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const i=new dh(this.ci.next());return this.referenceDelegate.Ei(),n(i).next(o=>this.referenceDelegate.di(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ai(t,e){return P.or(Object.values(this.ui).map(n=>()=>n.containsKey(t,e)))}}class dh extends jl{constructor(t){super(),this.currentSequenceNumber=t}}class Ns{constructor(t){this.persistence=t,this.Ri=new bs,this.Vi=null}static mi(t){return new Ns(t)}get fi(){if(this.Vi)return this.Vi;throw O(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(i=>this.fi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.fi.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,n=>{const i=M.fromPath(n);return this.gi(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return P.or([()=>P.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class sr{constructor(t,e){this.persistence=t,this.pi=new he(n=>$l(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=nh(this,e)}static mi(t,e){return new sr(t,e)}Ei(){}di(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}pr(t,e){return P.forEach(this.pi,(n,i)=>this.br(t,n,i).next(o=>o?P.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,u=>this.br(t,u,e).next(c=>{c||(n++,o.removeEntry(u,L.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),P.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Kn(t.data.value)),e}br(t,e,n){return P.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return P.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=i}static As(t,e){let n=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ks(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Tl()?8:Bl(vl())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ys(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ws(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new mh;return this.Ss(t,e,u).next(c=>{if(o.result=c,this.Vs)return this.bs(t,e,u,c.size)})}).next(()=>o.result)}bs(t,e,n,i){return n.documentReadCount<this.fs?(ye()<=Ut.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Ee(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(ye()<=Ut.DEBUG&&N("QueryEngine","Query:",Ee(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(ye()<=Ut.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Ee(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ct(e))):P.resolve())}ys(t,e){if(To(e))return P.resolve(null);let n=Ct(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=us(e,null,"F"),n=Ct(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=q(...o);return this.ps.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(f=>{const d=this.Ds(e,c);return this.Cs(e,d,u,f.readTime)?this.ys(t,us(e,null,"F")):this.vs(t,d,e,f)}))})))}ws(t,e,n,i){return To(e)||i.isEqual(L.min())?P.resolve(null):this.ps.getDocuments(t,n).next(o=>{const u=this.Ds(e,o);return this.Cs(e,u,n,i)?P.resolve(null):(ye()<=Ut.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ee(e)),this.vs(t,u,e,Ll(i,un)).next(c=>c))})}Ds(t,e){let n=new st(Ma(t));return e.forEach((i,o)=>{dr(t,o)&&(n=n.add(o))}),n}Cs(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,n){return ye()<=Ut.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Ee(e)),this.ps.getDocumentsMatchingQuery(t,e,Yt.min(),n)}vs(t,e,n,i){return this.ps.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="LocalStore",gh=3e8;class _h{constructor(t,e,n,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new Y(U),this.xs=new he(o=>ws(o),Rs),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ih(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function yh(r,t,e,n){return new _h(r,t,e,n)}async function su(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let f=q();for(const d of i){u.push(d.batchId);for(const p of d.mutations)f=f.add(p.key)}for(const d of o){c.push(d.batchId);for(const p of d.mutations)f=f.add(p.key)}return e.localDocuments.getDocuments(n,f).next(d=>({Ls:d,removedBatchIds:u,addedBatchIds:c}))})})}function Eh(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return function(c,f,d,p){const A=d.batch,R=A.keys();let S=P.resolve();return R.forEach(D=>{S=S.next(()=>p.getEntry(f,D)).next(x=>{const b=d.docVersions.get(D);$(b!==null,48541),x.version.compareTo(b)<0&&(A.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),p.addEntry(x)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(f,A))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let f=q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(f=f.add(c.batch.mutations[d].key));return f}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function iu(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function Th(r,t){const e=F(r),n=t.snapshotVersion;let i=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.Ns.newChangeBuffer({trackRemovals:!0});i=e.Ms;const c=[];t.targetChanges.forEach((p,A)=>{const R=i.get(A);if(!R)return;c.push(e.Pi.removeMatchingKeys(o,p.removedDocuments,A).next(()=>e.Pi.addMatchingKeys(o,p.addedDocuments,A)));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?S=S.withResumeToken(ht.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,n)),i=i.insert(A,S),function(x,b,Q){return x.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=gh?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0}(R,S,p)&&c.push(e.Pi.updateTargetData(o,S))});let f=Bt(),d=q();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(vh(o,u,t.documentUpdates).next(p=>{f=p.ks,d=p.qs})),!n.isEqual(L.min())){const p=e.Pi.getLastRemoteSnapshotVersion(o).next(A=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(p)}return P.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,f,d)).next(()=>f)}).then(o=>(e.Ms=i,o))}function vh(r,t,e){let n=q(),i=q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Bt();return e.forEach((c,f)=>{const d=o.get(c);f.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),f.isNoDocument()&&f.version.isEqual(L.min())?(t.removeEntry(c,f.readTime),u=u.insert(c,f)):!d.isValidDocument()||f.version.compareTo(d.version)>0||f.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(f),u=u.insert(c,f)):N(xs,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",f.version)}),{ks:u,qs:i}})}function Ih(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=vs),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Ah(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Pi.getTargetData(n,t).next(o=>o?(i=o,P.resolve(i)):e.Pi.allocateTargetId(n).next(u=>(i=new Qt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Ms.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n})}async function ds(r,t,e){const n=F(r),i=n.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Ne(u))throw u;N(xs,`Failed to update sequence numbers for target ${t}: ${u}`)}n.Ms=n.Ms.remove(t),n.xs.delete(i.target)}function ko(r,t,e){const n=F(r);let i=L.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",u=>function(f,d,p){const A=F(f),R=A.xs.get(p);return R!==void 0?P.resolve(A.Ms.get(R)):A.Pi.getTargetData(d,p)}(n,u,Ct(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(u,c.targetId).next(f=>{o=f})}).next(()=>n.Fs.getDocumentsMatchingQuery(u,t,e?i:L.min(),e?o:q())).next(c=>(wh(n,lc(t),c),{documents:c,Qs:o})))}function wh(r,t,e){let n=r.Os.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Os.set(t,n)}class xo{constructor(){this.activeTargetIds=pc()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Rh{constructor(){this.Mo=new xo,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new xo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="ConnectivityMonitor";class Oo{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){N(Mo,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){N(Mo,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn=null;function ms(){return zn===null?zn=function(){return 268435456+Math.round(2147483648*Math.random())}():zn++,"0x"+zn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="RestConnection",Ph={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Sh{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===ns?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(t,e,n,i,o){const u=ms(),c=this.zo(t,e.toUriEncodedString());N(Yr,`Sending RPC '${t}' ${u}:`,c,n);const f={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(f,i,o);const{host:d}=new URL(c),p=Al(d);return this.Jo(t,c,f,n,p).then(A=>(N(Yr,`Received RPC '${t}' ${u}: `,A),A),A=>{throw on(Yr,`RPC '${t}' ${u} failed with error: `,A,"url: ",c,"request:",n),A})}Ho(t,e,n,i,o,u){return this.Go(t,e,n,i,o)}jo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+De}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}zo(t,e){const n=Ph[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class Dh extends Sh{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,i,o){const u=ms();return new Promise((c,f)=>{const d=new ua;d.setWithCredentials(!0),d.listenOnce(la.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Gn.NO_ERROR:const A=d.getResponseJson();N(gt,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(A)),c(A);break;case Gn.TIMEOUT:N(gt,`RPC '${t}' ${u} timed out`),f(new k(V.DEADLINE_EXCEEDED,"Request time out"));break;case Gn.HTTP_ERROR:const R=d.getStatus();if(N(gt,`RPC '${t}' ${u} failed with status:`,R,"response text:",d.getResponseText()),R>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const D=S==null?void 0:S.error;if(D&&D.status&&D.message){const x=function(Q){const B=Q.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(B)>=0?B:V.UNKNOWN}(D.status);f(new k(x,D.message))}else f(new k(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else f(new k(V.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:t,streamId:u,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(gt,`RPC '${t}' ${u} completed.`)}});const p=JSON.stringify(i);N(gt,`RPC '${t}' ${u} sending request:`,i),d.send(e,"POST",p,n,15)})}T_(t,e,n){const i=ms(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=fa(),c=ha(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(f.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(f.useFetchStreams=!0),this.jo(f.initMessageHeaders,e,n),f.encodeInitMessageHeaders=!0;const p=o.join("");N(gt,`Creating RPC '${t}' stream ${i}: ${p}`,f);const A=u.createWebChannel(p,f);this.I_(A);let R=!1,S=!1;const D=new Ch({Yo:b=>{S?N(gt,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(R||(N(gt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),R=!0),N(gt,`RPC '${t}' stream ${i} sending:`,b),A.send(b))},Zo:()=>A.close()}),x=(b,Q,B)=>{b.listen(Q,G=>{try{B(G)}catch(it){setTimeout(()=>{throw it},0)}})};return x(A,Je.EventType.OPEN,()=>{S||(N(gt,`RPC '${t}' stream ${i} transport opened.`),D.o_())}),x(A,Je.EventType.CLOSE,()=>{S||(S=!0,N(gt,`RPC '${t}' stream ${i} transport closed`),D.a_(),this.E_(A))}),x(A,Je.EventType.ERROR,b=>{S||(S=!0,on(gt,`RPC '${t}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),D.a_(new k(V.UNAVAILABLE,"The operation could not be completed")))}),x(A,Je.EventType.MESSAGE,b=>{var Q;if(!S){const B=b.data[0];$(!!B,16349);const G=B,it=(G==null?void 0:G.error)||((Q=G[0])==null?void 0:Q.error);if(it){N(gt,`RPC '${t}' stream ${i} received error:`,it);const Mt=it.status;let at=function(_){const y=tt[_];if(y!==void 0)return Ka(y)}(Mt),T=it.message;at===void 0&&(at=V.INTERNAL,T="Unknown error status: "+Mt+" with message "+it.message),S=!0,D.a_(new k(at,T)),A.close()}else N(gt,`RPC '${t}' stream ${i} received:`,B),D.u_(B)}}),x(c,ca.STAT_EVENT,b=>{b.stat===ts.PROXY?N(gt,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===ts.NOPROXY&&N(gt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.__()},0),D}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function Jr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(r){return new xc(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-n);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="PersistentStream";class au{constructor(t,e,n,i,o,u,c,f){this.Mi=t,this.S_=n,this.b_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ou(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(jt(e.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.D_===e&&this.G_(n,i)},n=>{t(()=>{const i=new k(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)})})}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{n(()=>this.z_(i))}),this.stream.onMessage(i=>{n(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return N(Lo,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(N(Lo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bh extends au{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Lc(this.serializer,t),n=function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?bt(u.readTime):L.min()}(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=fs(this.serializer),e.addTarget=function(o,u){let c;const f=u.target;if(c=os(f)?{documents:qc(o,f)}:{query:jc(o,f).ft},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Ha(o,u.resumeToken);const d=ls(o,u.expectedCount);d!==null&&(c.expectedCount=d)}else if(u.snapshotVersion.compareTo(L.min())>0){c.readTime=rr(o,u.snapshotVersion.toTimestamp());const d=ls(o,u.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const n=zc(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=fs(this.serializer),e.removeTarget=t,this.q_(e)}}class Nh extends au{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return $(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,$(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){$(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Uc(t.writeResults,t.commitTime),n=bt(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=fs(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Fc(this.serializer,n))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{}class xh extends kh{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new k(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Go(t,cs(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(V.UNKNOWN,o.toString())})}Ho(t,e,n,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Ho(t,cs(e,n),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(V.UNKNOWN,u.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Mh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(jt(e),this.aa=!1):N("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="RemoteStore";class Oh{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(u=>{n.enqueueAndForget(async()=>{de(this)&&(N(ce,"Restarting streams for network reachability change."),await async function(f){const d=F(f);d.Ea.add(4),await _n(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Er(d)}(this))})}),this.Ra=new Mh(n,i)}}async function Er(r){if(de(r))for(const t of r.da)await t(!0)}async function _n(r){for(const t of r.da)await t(!1)}function uu(r,t){const e=F(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Fs(e)?Ls(e):ke(e).O_()&&Os(e,t))}function Ms(r,t){const e=F(r),n=ke(e);e.Ia.delete(t),n.O_()&&lu(e,t),e.Ia.size===0&&(n.O_()?n.L_():de(e)&&e.Ra.set("Unknown"))}function Os(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ke(r).Y_(t)}function lu(r,t){r.Va.Ue(t),ke(r).Z_(t)}function Ls(r){r.Va=new Dc({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),ke(r).start(),r.Ra.ua()}function Fs(r){return de(r)&&!ke(r).x_()&&r.Ia.size>0}function de(r){return F(r).Ea.size===0}function cu(r){r.Va=void 0}async function Lh(r){r.Ra.set("Online")}async function Fh(r){r.Ia.forEach((t,e)=>{Os(r,t)})}async function Uh(r,t){cu(r),Fs(r)?(r.Ra.ha(t),Ls(r)):r.Ra.set("Unknown")}async function qh(r,t,e){if(r.Ra.set("Online"),t instanceof Wa&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.Ia.delete(c),i.Va.removeTarget(c))}(r,t)}catch(n){N(ce,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ir(r,n)}else if(t instanceof Hn?r.Va.Ze(t):t instanceof Qa?r.Va.st(t):r.Va.tt(t),!e.isEqual(L.min()))try{const n=await iu(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.Va.Tt(u);return c.targetChanges.forEach((f,d)=>{if(f.resumeToken.approximateByteSize()>0){const p=o.Ia.get(d);p&&o.Ia.set(d,p.withResumeToken(f.resumeToken,u))}}),c.targetMismatches.forEach((f,d)=>{const p=o.Ia.get(f);if(!p)return;o.Ia.set(f,p.withResumeToken(ht.EMPTY_BYTE_STRING,p.snapshotVersion)),lu(o,f);const A=new Qt(p.target,f,d,p.sequenceNumber);Os(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){N(ce,"Failed to raise snapshot:",n),await ir(r,n)}}async function ir(r,t,e){if(!Ne(t))throw t;r.Ea.add(1),await _n(r),r.Ra.set("Offline"),e||(e=()=>iu(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N(ce,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await Er(r)})}function hu(r,t){return t().catch(e=>ir(r,e,t))}async function Tr(r){const t=F(r),e=ee(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:vs;for(;jh(t);)try{const i=await Ih(t.localStore,n);if(i===null){t.Ta.length===0&&e.L_();break}n=i.batchId,Bh(t,i)}catch(i){await ir(t,i)}fu(t)&&du(t)}function jh(r){return de(r)&&r.Ta.length<10}function Bh(r,t){r.Ta.push(t);const e=ee(r);e.O_()&&e.X_&&e.ea(t.mutations)}function fu(r){return de(r)&&!ee(r).x_()&&r.Ta.length>0}function du(r){ee(r).start()}async function zh(r){ee(r).ra()}async function $h(r){const t=ee(r);for(const e of r.Ta)t.ea(e.mutations)}async function Gh(r,t,e){const n=r.Ta.shift(),i=Ss.from(n,t,e);await hu(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Tr(r)}async function Kh(r,t){t&&ee(r).X_&&await async function(n,i){if(function(u){return Pc(u)&&u!==V.ABORTED}(i.code)){const o=n.Ta.shift();ee(n).B_(),await hu(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Tr(n)}}(r,t),fu(r)&&du(r)}async function Fo(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),N(ce,"RemoteStore received new credentials");const n=de(e);e.Ea.add(3),await _n(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Er(e)}async function Qh(r,t){const e=F(r);t?(e.Ea.delete(2),await Er(e)):t||(e.Ea.add(2),await _n(e),e.Ra.set("Unknown"))}function ke(r){return r.ma||(r.ma=function(e,n,i){const o=F(e);return o.sa(),new bh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Xo:Lh.bind(null,r),t_:Fh.bind(null,r),r_:Uh.bind(null,r),H_:qh.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),Fs(r)?Ls(r):r.Ra.set("Unknown")):(await r.ma.stop(),cu(r))})),r.ma}function ee(r){return r.fa||(r.fa=function(e,n,i){const o=F(e);return o.sa(),new Nh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:zh.bind(null,r),r_:Kh.bind(null,r),ta:$h.bind(null,r),na:Gh.bind(null,r)}),r.da.push(async t=>{t?(r.fa.B_(),await Tr(r)):(await r.fa.stop(),r.Ta.length>0&&(N(ce,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,c=new Us(t,e,u,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qs(r,t){if(jt("AsyncQueue",`${t}: ${r}`),Ne(r))return new k(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static emptySet(t){return new Ie(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=Ze(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ie)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ie;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.ga=new Y(M.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):O(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ce{constructor(t,e,n,i,o,u,c,f,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=f,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Ce(t,e,Ie.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&fr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class Hh{constructor(){this.queries=qo(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const i=F(e),o=i.queries;i.queries=qo(),o.forEach((u,c)=>{for(const f of c.Sa)f.onError(n)})})(this,new k(V.ABORTED,"Firestore shutting down"))}}function qo(){return new he(r=>xa(r),fr)}async function Xh(r,t){const e=F(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(n=2):(o=new Wh,n=t.Da()?0:1);try{switch(n){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=qs(u,`Initialization of query '${Ee(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&js(e)}async function Yh(r,t){const e=F(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.Sa.indexOf(t);u>=0&&(o.Sa.splice(u,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Jh(r,t){const e=F(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.Sa)c.Fa(i)&&(n=!0);u.wa=i}}n&&js(e)}function Zh(r,t,e){const n=F(r),i=n.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);n.queries.delete(t)}function js(r){r.Ca.forEach(t=>{t.next()})}var ps,jo;(jo=ps||(ps={})).Ma="default",jo.Cache="cache";class tf{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Ce(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Ce.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==ps.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t){this.key=t}}class pu{constructor(t){this.key=t}}class ef{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=q(),this.mutatedKeys=q(),this.eu=Ma(t),this.tu=new Ie(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new Uo,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const f=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,A)=>{const R=i.get(p),S=dr(this.query,A)?A:null,D=!!R&&this.mutatedKeys.has(R.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let b=!1;R&&S?R.data.isEqual(S.data)?D!==x&&(n.track({type:3,doc:S}),b=!0):this.su(R,S)||(n.track({type:2,doc:S}),b=!0,(f&&this.eu(S,f)>0||d&&this.eu(S,d)<0)&&(c=!0)):!R&&S?(n.track({type:0,doc:S}),b=!0):R&&!S&&(n.track({type:1,doc:R}),b=!0,(f||d)&&(c=!0)),b&&(S?(u=u.add(S),o=x?o.add(p):o.delete(p)):(u=u.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const p=this.query.limitType==="F"?u.last():u.first();u=u.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{tu:u,iu:n,Cs:c,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const u=t.iu.ya();u.sort((p,A)=>function(S,D){const x=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Rt:b})}};return x(S)-x(D)}(p.type,A.type)||this.eu(p.doc,A.doc)),this.ou(n),i=i??!1;const c=e&&!i?this._u():[],f=this.Xa.size===0&&this.current&&!i?1:0,d=f!==this.Za;return this.Za=f,u.length!==0||d?{snapshot:new Ce(this.query,t.tu,o,u,t.mutatedKeys,f===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Uo,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=q(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const e=[];return t.forEach(n=>{this.Xa.has(n)||e.push(new pu(n))}),this.Xa.forEach(n=>{t.has(n)||e.push(new mu(n))}),e}cu(t){this.Ya=t.Qs,this.Xa=q();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Ce.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Bs="SyncEngine";class nf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class rf{constructor(t){this.key=t,this.hu=!1}}class sf{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new he(c=>xa(c),fr),this.Iu=new Map,this.Eu=new Set,this.du=new Y(M.comparator),this.Au=new Map,this.Ru=new bs,this.Vu={},this.mu=new Map,this.fu=Se.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function of(r,t,e=!0){const n=vu(r);let i;const o=n.Tu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await gu(n,t,e,!0),i}async function af(r,t){const e=vu(r);await gu(e,t,!0,!1)}async function gu(r,t,e,n){const i=await Ah(r.localStore,Ct(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await uf(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&uu(r.remoteStore,i),c}async function uf(r,t,e,n,i){r.pu=(A,R,S)=>async function(x,b,Q,B){let G=b.view.ru(Q);G.Cs&&(G=await ko(x.localStore,b.query,!1).then(({documents:T})=>b.view.ru(T,G)));const it=B&&B.targetChanges.get(b.targetId),Mt=B&&B.targetMismatches.get(b.targetId)!=null,at=b.view.applyChanges(G,x.isPrimaryClient,it,Mt);return zo(x,b.targetId,at.au),at.snapshot}(r,A,R,S);const o=await ko(r.localStore,t,!0),u=new ef(t,o.Qs),c=u.ru(o.documents),f=gn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=u.applyChanges(c,r.isPrimaryClient,f);zo(r,e,d.au);const p=new nf(t,e,u);return r.Tu.set(t,p),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),d.snapshot}async function lf(r,t,e){const n=F(r),i=n.Tu.get(t),o=n.Iu.get(i.targetId);if(o.length>1)return n.Iu.set(i.targetId,o.filter(u=>!fr(u,t))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ds(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Ms(n.remoteStore,i.targetId),gs(n,i.targetId)}).catch(be)):(gs(n,i.targetId),await ds(n.localStore,i.targetId,!0))}async function cf(r,t){const e=F(r),n=e.Tu.get(t),i=e.Iu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ms(e.remoteStore,n.targetId))}async function hf(r,t,e){const n=yf(r);try{const i=await function(u,c){const f=F(u),d=X.now(),p=c.reduce((S,D)=>S.add(D.key),q());let A,R;return f.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=Bt(),x=q();return f.Ns.getEntries(S,p).next(b=>{D=b,D.forEach((Q,B)=>{B.isValidDocument()||(x=x.add(Q))})}).next(()=>f.localDocuments.getOverlayedDocuments(S,D)).next(b=>{A=b;const Q=[];for(const B of c){const G=Ic(B,A.get(B.key).overlayedDocument);G!=null&&Q.push(new fe(B.key,G,Ra(G.value.mapValue),Dt.exists(!0)))}return f.mutationQueue.addMutationBatch(S,d,Q,c)}).next(b=>{R=b;const Q=b.applyToLocalDocumentSet(A,x);return f.documentOverlayCache.saveOverlays(S,b.batchId,Q)})}).then(()=>({batchId:R.batchId,changes:La(A)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(u,c,f){let d=u.Vu[u.currentUser.toKey()];d||(d=new Y(U)),d=d.insert(c,f),u.Vu[u.currentUser.toKey()]=d}(n,i.batchId,e),await yn(n,i.changes),await Tr(n.remoteStore)}catch(i){const o=qs(i,"Failed to persist write");e.reject(o)}}async function _u(r,t){const e=F(r);try{const n=await Th(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Au.get(o);u&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.hu=!0:i.modifiedDocuments.size>0?$(u.hu,14607):i.removedDocuments.size>0&&($(u.hu,42227),u.hu=!1))}),await yn(e,n,t)}catch(n){await be(n)}}function Bo(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Tu.forEach((o,u)=>{const c=u.view.va(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const f=F(u);f.onlineState=c;let d=!1;f.queries.forEach((p,A)=>{for(const R of A.Sa)R.va(c)&&(d=!0)}),d&&js(f)}(n.eventManager,t),i.length&&n.Pu.H_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function ff(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Au.get(t),o=i&&i.key;if(o){let u=new Y(M.comparator);u=u.insert(o,_t.newNoDocument(o,L.min()));const c=q().add(o),f=new _r(L.min(),new Map,new Y(U),u,c);await _u(n,f),n.du=n.du.remove(o),n.Au.delete(t),zs(n)}else await ds(n.localStore,t,!1).then(()=>gs(n,t,e)).catch(be)}async function df(r,t){const e=F(r),n=t.batch.batchId;try{const i=await Eh(e.localStore,t);Eu(e,n,null),yu(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await yn(e,i)}catch(i){await be(i)}}async function mf(r,t,e){const n=F(r);try{const i=await function(u,c){const f=F(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return f.mutationQueue.lookupMutationBatch(d,c).next(A=>($(A!==null,37113),p=A.keys(),f.mutationQueue.removeMutationBatch(d,A))).next(()=>f.mutationQueue.performConsistencyCheck(d)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>f.localDocuments.getDocuments(d,p))})}(n.localStore,t);Eu(n,t,e),yu(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await yn(n,i)}catch(i){await be(i)}}function yu(r,t){(r.mu.get(t)||[]).forEach(e=>{e.resolve()}),r.mu.delete(t)}function Eu(r,t,e){const n=F(r);let i=n.Vu[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Vu[n.currentUser.toKey()]=i}}function gs(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(n=>{r.Ru.containsKey(n)||Tu(r,n)})}function Tu(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(Ms(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),zs(r))}function zo(r,t,e){for(const n of e)n instanceof mu?(r.Ru.addReference(n.key,t),pf(r,n)):n instanceof pu?(N(Bs,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||Tu(r,n.key)):O(19791,{wu:n})}function pf(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(N(Bs,"New document in limbo: "+e),r.Eu.add(n),zs(r))}function zs(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new M(W.fromString(t)),n=r.fu.next();r.Au.set(n,new rf(e)),r.du=r.du.insert(e,n),uu(r.remoteStore,new Qt(Ct(Na(e.path)),n,"TargetPurposeLimboResolution",lr.ce))}}async function yn(r,t,e){const n=F(r),i=[],o=[],u=[];n.Tu.isEmpty()||(n.Tu.forEach((c,f)=>{u.push(n.pu(f,t,e).then(d=>{var p;if((d||e)&&n.isPrimaryClient){const A=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(f.targetId))==null?void 0:p.current;n.sharedClientState.updateQueryState(f.targetId,A?"current":"not-current")}if(d){i.push(d);const A=ks.As(f.targetId,d);o.push(A)}}))}),await Promise.all(u),n.Pu.H_(i),await async function(f,d){const p=F(f);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>P.forEach(d,R=>P.forEach(R.Es,S=>p.persistence.referenceDelegate.addReference(A,R.targetId,S)).next(()=>P.forEach(R.ds,S=>p.persistence.referenceDelegate.removeReference(A,R.targetId,S)))))}catch(A){if(!Ne(A))throw A;N(xs,"Failed to update sequence numbers: "+A)}for(const A of d){const R=A.targetId;if(!A.fromCache){const S=p.Ms.get(R),D=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(D);p.Ms=p.Ms.insert(R,x)}}}(n.localStore,o))}async function gf(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){N(Bs,"User change. New user:",t.toKey());const n=await su(e.localStore,t);e.currentUser=t,function(o,u){o.mu.forEach(c=>{c.forEach(f=>{f.reject(new k(V.CANCELLED,u))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await yn(e,n.Ls)}}function _f(r,t){const e=F(r),n=e.Au.get(t);if(n&&n.hu)return q().add(n.key);{let i=q();const o=e.Iu.get(t);if(!o)return i;for(const u of o){const c=e.Tu.get(u);i=i.unionWith(c.view.nu)}return i}}function vu(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=_u.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_f.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ff.bind(null,t),t.Pu.H_=Jh.bind(null,t.eventManager),t.Pu.yu=Zh.bind(null,t.eventManager),t}function yf(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=df.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=mf.bind(null,t),t}class or{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=yr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return yh(this.persistence,new ph,t.initialUser,this.serializer)}Cu(t){return new ru(Ns.mi,this.serializer)}Du(t){return new Rh}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}or.provider={build:()=>new or};class Ef extends or{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){$(this.persistence.referenceDelegate instanceof sr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new th(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new ru(n=>sr.mi(n,e),this.serializer)}}class _s{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Bo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=gf.bind(null,this.syncEngine),await Qh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Hh}()}createDatastore(t){const e=yr(t.databaseInfo.databaseId),n=function(o){return new Dh(o)}(t.databaseInfo);return function(o,u,c,f){return new xh(o,u,c,f)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,c){return new Oh(n,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Bo(this.syncEngine,e,0),function(){return Oo.v()?new Oo:new Vh}())}createSyncEngine(t,e){return function(i,o,u,c,f,d,p){const A=new sf(i,o,u,c,f,d);return p&&(A.gu=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);N(ce,"RemoteStore shutting down."),o.Ea.add(5),await _n(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}_s.provider={build:()=>new _s};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="FirestoreClient";class vf{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Tt.UNAUTHENTICATED,this.clientId=Ts.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{N(ne,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(N(ne,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=qs(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Zr(r,t){r.asyncQueue.verifyOperationInProgress(),N(ne,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await su(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function $o(r,t){r.asyncQueue.verifyOperationInProgress();const e=await If(r);N(ne,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Fo(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Fo(t.remoteStore,i)),r._onlineComponents=t}async function If(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(ne,"Using user provided OfflineComponentProvider");try{await Zr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;on("Error using user provided cache. Falling back to memory cache: "+e),await Zr(r,new or)}}else N(ne,"Using default OfflineComponentProvider"),await Zr(r,new Ef(void 0));return r._offlineComponents}async function Iu(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(ne,"Using user provided OnlineComponentProvider"),await $o(r,r._uninitializedComponentsProvider._online)):(N(ne,"Using default OnlineComponentProvider"),await $o(r,new _s))),r._onlineComponents}function Af(r){return Iu(r).then(t=>t.syncEngine)}async function wf(r){const t=await Iu(r),e=t.eventManager;return e.onListen=of.bind(null,t.syncEngine),e.onUnlisten=lf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=af.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=cf.bind(null,t.syncEngine),e}function Rf(r,t,e={}){const n=new Ht;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,f,d){const p=new Tf({next:R=>{p.Nu(),u.enqueueAndForget(()=>Yh(o,A)),R.fromCache&&f.source==="server"?d.reject(new k(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(R)},error:R=>d.reject(R)}),A=new tf(c,p,{includeMetadataChanges:!0,qa:!0});return Xh(o,A)}(await wf(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="firestore.googleapis.com",Ko=!0;class Qo{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new k(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vf,this.ssl=Ko}else this.host=t.host,this.ssl=t.ssl??Ko;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=nu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Jc)throw new k(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ol("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Au(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class $s{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Pl;switch(n.type){case"firstParty":return new Dl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Go.get(e);n&&(N("ComponentProvider","Removing Datastore"),Go.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new xe(this.firestore,t,this._query)}}class rt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rt(this.firestore,t,this._key)}toJSON(){return{type:rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(mn(e,rt._jsonSchema))return new rt(t,n||null,new M(W.fromString(e.referencePath)))}}rt._jsonSchemaVersion="firestore/documentReference/1.0",rt._jsonSchema={type:nt("string",rt._jsonSchemaVersion),referencePath:nt("string")};class Xt extends xe{constructor(t,e,n){super(t,e,Na(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rt(this.firestore,null,new M(t))}withConverter(t){return new Xt(this.firestore,t,this._path)}}function Pf(r,t,...e){if(r=qt(r),ma("collection","path",t),r instanceof $s){const n=W.fromString(t,...e);return io(n),new Xt(r,null,n)}{if(!(r instanceof rt||r instanceof Xt))throw new k(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return io(n),new Xt(r.firestore,null,n)}}function wu(r,t,...e){if(r=qt(r),arguments.length===1&&(t=Ts.newId()),ma("doc","path",t),r instanceof $s){const n=W.fromString(t,...e);return so(n),new rt(r,null,new M(n))}{if(!(r instanceof rt||r instanceof Xt))throw new k(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return so(n),new rt(r.firestore,r instanceof Xt?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="AsyncQueue";class Ho{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ou(this,"async_queue_retry"),this._c=()=>{const n=Jr();n&&N(Wo,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=Jr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Jr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Ht;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Ne(t))throw t;N(Wo,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(n=>{throw this.nc=n,this.rc=!1,jt("INTERNAL UNHANDLED ERROR: ",Xo(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Us.createAndSchedule(this,t,e,n,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&O(47125,{Pc:Xo(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Xo(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class vr extends $s{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Ho,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ho(t),this._firestoreClient=void 0,await t}}}function Ru(r){if(r._terminated)throw new k(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Sf(r),r._firestoreClient}function Sf(r){var n,i,o;const t=r._freezeSettings(),e=function(c,f,d,p){return new Ql(c,f,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Au(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new vf(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&function(c){const f=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(f),_online:f}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new wt(ht.fromBase64String(t))}catch(e){throw new k(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new wt(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:wt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(mn(t,wt._jsonSchema))return wt.fromBase64String(t.bytes)}}wt._jsonSchemaVersion="firestore/bytes/1.0",wt._jsonSchema={type:nt("string",wt._jsonSchemaVersion),bytes:nt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nt._jsonSchemaVersion}}static fromJSON(t){if(mn(t,Nt._jsonSchema))return new Nt(t.latitude,t.longitude)}}Nt._jsonSchemaVersion="firestore/geoPoint/1.0",Nt._jsonSchema={type:nt("string",Nt._jsonSchemaVersion),latitude:nt("number"),longitude:nt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:kt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(mn(t,kt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new kt(t.vectorValues);throw new k(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kt._jsonSchemaVersion="firestore/vectorValue/1.0",kt._jsonSchema={type:nt("string",kt._jsonSchemaVersion),vectorValues:nt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=/^__.*__$/;class Vu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new fe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Pu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{Ac:r})}}class Ks{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Ks({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return ar(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Pu(this.Ac)&&Cf.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Df{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||yr(t)}Cc(t,e,n,i=!1){return new Ks({Ac:t,methodName:e,Dc:n,path:ct.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Su(r){const t=r._freezeSettings(),e=yr(r._databaseId);return new Df(r._databaseId,!!t.ignoreUndefinedProperties,e)}class Ar extends Gs{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ar}}function bf(r,t,e,n){const i=r.Cc(1,t,e);Du("Data must be an object, but it was:",i,n);const o=[],u=At.empty();re(n,(f,d)=>{const p=Qs(t,f,e);d=qt(d);const A=i.yc(p);if(d instanceof Ar)o.push(p);else{const R=En(d,A);R!=null&&(o.push(p),u.set(p,R))}});const c=new Vt(o);return new Vu(u,c,i.fieldTransforms)}function Nf(r,t,e,n,i,o){const u=r.Cc(1,t,e),c=[Yo(t,n,e)],f=[i];if(o.length%2!=0)throw new k(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)c.push(Yo(t,o[R])),f.push(o[R+1]);const d=[],p=At.empty();for(let R=c.length-1;R>=0;--R)if(!Of(d,c[R])){const S=c[R];let D=f[R];D=qt(D);const x=u.yc(S);if(D instanceof Ar)d.push(S);else{const b=En(D,x);b!=null&&(d.push(S),p.set(S,b))}}const A=new Vt(d);return new Vu(p,A,u.fieldTransforms)}function kf(r,t,e,n=!1){return En(e,r.Cc(n?4:3,t))}function En(r,t){if(Cu(r=qt(r)))return Du("Unsupported field value:",t,r),xf(r,t);if(r instanceof Gs)return function(n,i){if(!Pu(i.Ac))throw i.Sc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(n,i){const o=[];let u=0;for(const c of n){let f=En(c,i.wc(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=qt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return gc(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=X.fromDate(n);return{timestampValue:rr(i.serializer,o)}}if(n instanceof X){const o=new X(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:rr(i.serializer,o)}}if(n instanceof Nt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wt)return{bytesValue:Ha(i.serializer,n._byteString)};if(n instanceof rt){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.Sc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ds(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof kt)return function(u,c){return{mapValue:{fields:{[Aa]:{stringValue:wa},[Jn]:{arrayValue:{values:u.toArray().map(d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return Vs(c.serializer,d)})}}}}}}(n,i);throw i.Sc(`Unsupported field value: ${ur(n)}`)}(r,t)}function xf(r,t){const e={};return _a(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):re(r,(n,i)=>{const o=En(i,t.mc(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Cu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof X||r instanceof Nt||r instanceof wt||r instanceof rt||r instanceof Gs||r instanceof kt)}function Du(r,t,e){if(!Cu(e)||!pa(e)){const n=ur(e);throw n==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+n)}}function Yo(r,t,e){if((t=qt(t))instanceof Ir)return t._internalPath;if(typeof t=="string")return Qs(r,t);throw ar("Field path arguments must be of type string or ",r,!1,void 0,e)}const Mf=new RegExp("[~\\*/\\[\\]]");function Qs(r,t,e){if(t.search(Mf)>=0)throw ar(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Ir(...t.split("."))._internalPath}catch{throw ar(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ar(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${n}`),u&&(f+=` in document ${i}`),f+=")"),new k(V.INVALID_ARGUMENT,c+r+f)}function Of(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Lf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ws("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Lf extends bu{data(){return super.data()}}function Ws(r,t){return typeof t=="string"?Qs(r,t):t instanceof Ir?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hs{}class Uf extends Hs{}function Jo(r,t,...e){let n=[];t instanceof Hs&&n.push(t),n=n.concat(e),function(o){const u=o.filter(f=>f instanceof Xs).length,c=o.filter(f=>f instanceof wr).length;if(u>1||u>0&&c>0)throw new k(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class wr extends Uf{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new wr(t,e,n)}_apply(t){const e=this._parse(t);return Nu(t._query,e),new xe(t.firestore,t.converter,as(t._query,e))}_parse(t){const e=Su(t.firestore);return function(o,u,c,f,d,p,A){let R;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new k(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){ea(A,p);const D=[];for(const x of A)D.push(ta(f,o,x));R={arrayValue:{values:D}}}else R=ta(f,o,A)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||ea(A,p),R=kf(c,u,A,p==="in"||p==="not-in");return et.create(d,p,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Zo(r,t,e){const n=t,i=Ws("where",r);return wr._create(i,n,e)}class Xs extends Hs{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Xs(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Pt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let u=i;const c=o.getFlattenedFilters();for(const f of c)Nu(u,f),u=as(u,f)}(t._query,e),new xe(t.firestore,t.converter,as(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ta(r,t,e){if(typeof(e=qt(e))=="string"){if(e==="")throw new k(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ka(t)&&e.indexOf("/")!==-1)throw new k(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(W.fromString(e));if(!M.isDocumentKey(n))throw new k(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return mo(r,new M(n))}if(e instanceof rt)return mo(r,e._key);throw new k(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ur(e)}.`)}function ea(r,t){if(!Array.isArray(r)||r.length===0)throw new k(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Nu(r,t){const e=function(i,o){for(const u of i)for(const c of u.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new k(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class qf{convertValue(t,e="none"){switch(te(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return re(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var n,i,o;const e=(o=(i=(n=t.fields)==null?void 0:n[Jn].arrayValue)==null?void 0:i.values)==null?void 0:o.map(u=>Z(u.doubleValue));return new kt(e)}convertGeoPoint(t){return new Nt(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=hr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ln(t));default:return null}}convertTimestamp(t){const e=Jt(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=W.fromString(t);$(eu(n),9688,{name:t});const i=new cn(n.get(1),n.get(3)),o=new M(n.popFirst(5));return i.isEqual(e)||jt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}class $n{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ae extends bu{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Xn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ws("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ae._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ae._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ae._jsonSchema={type:nt("string",Ae._jsonSchemaVersion),bundleSource:nt("string","DocumentSnapshot"),bundleName:nt("string"),bundle:nt("string")};class Xn extends Ae{data(t={}){return super.data(t)}}class we{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new $n(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Xn(this._firestore,this._userDataWriter,n.key,n,new $n(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(c=>{const f=new Xn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new $n(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const f=new Xn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new $n(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return c.type!==0&&(d=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),p=u.indexOf(c.doc.key)),{type:jf(c.type),doc:f,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=we._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ts.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function jf(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:r})}}we._jsonSchemaVersion="firestore/querySnapshot/1.0",we._jsonSchema={type:nt("string",we._jsonSchemaVersion),bundleSource:nt("string","QuerySnapshot"),bundleName:nt("string"),bundle:nt("string")};class Bf extends qf{constructor(t){super(),this.firestore=t}convertBytes(t){return new wt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new rt(this.firestore,null,e)}}function na(r){r=an(r,xe);const t=an(r.firestore,vr),e=Ru(t),n=new Bf(t);return Ff(r._query),Rf(e,r._query).then(i=>new we(t,n,r,i))}function zf(r,t,e,...n){r=an(r,rt);const i=an(r.firestore,vr),o=Su(i);let u;return u=typeof(t=qt(t))=="string"||t instanceof Ir?Nf(o,"updateDoc",r._key,t,e,n):bf(o,"updateDoc",r._key,t),ku(i,[u.toMutation(r._key,Dt.exists(!0))])}function $f(r){return ku(an(r.firestore,vr),[new Ps(r._key,Dt.none())])}function ku(r,t){return function(n,i){const o=new Ht;return n.asyncQueue.enqueueAndForget(async()=>hf(await Af(n),i,o)),o.promise}(Ru(r),t)}(function(t,e=!0){(function(i){De=i})(Il),gl(new _l("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new vr(new Sl(n.getProvider("auth-internal")),new bl(u,n.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cn(d.options.projectId,p)}(u,i),u);return o={useFetchStreams:e,...o},c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ji(to,eo,t),Ji(to,eo,"esm2020")})();const ra=Pf(ys,"turnos"),sa=document.getElementById("turnos-pendientes"),ia=document.getElementById("turnos-aprobados");document.getElementById("logout-btn").addEventListener("click",async()=>{await wl(oa),window.location.href="login.html"});Rl(oa,r=>{r?Ys():window.location.href="login.html"});async function Ys(){const r=await na(Jo(ra,Zo("status","==","pendiente"))),t=await na(Jo(ra,Zo("status","==","aprobado")));sa.innerHTML="",ia.innerHTML="",r.forEach(e=>{const n=e.data(),i=e.id;sa.innerHTML+=`
          <div class="p-4 bg-white rounded shadow flex justify-between items-center">
            <span>${n.title} - ${n.start} - ${n.phone}</span>
            <div class="space-x-2">
              <button class="px-3 py-2 bg-green-500 text-white rounded" onclick="aprobarTurno('${i}')">Aprobar</button>
              <button class="px-3 py-2 bg-red-500 text-white rounded" onclick="eliminarTurno('${i}')">Eliminar</button>
            </div>
          </div>`}),t.forEach(e=>{const n=e.data(),i=e.id;ia.innerHTML+=`
          <div class="p-4 bg-white rounded shadow flex justify-between items-center">
            <span>${n.title} - ${n.start} - ${n.phone}</span>
            <button class="px-3 py-2 bg-red-500 text-white rounded" onclick="eliminarTurno('${i}')">Eliminar</button>
          </div>`})}window.aprobarTurno=async r=>{await zf(wu(ys,"turnos",r),{status:"aprobado"}),alert("Turno aprobado ✅"),Ys()};window.eliminarTurno=async r=>{await $f(wu(ys,"turnos",r)),alert("Turno eliminado ❌"),Ys()};
