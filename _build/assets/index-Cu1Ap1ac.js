const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-UJwn3GnR.js","assets/create-theme-module-DELPPpDb.js","assets/Footer-DahKxp4s.js","assets/preload-helper-ug3pwPZ1.js","assets/index-DROED1tm.js","assets/canvasTexture-DzuKp8Mc.js","assets/index-D3EhOlsz.js","assets/index-B7tlVE7p.js"])))=>i.map(i=>d[i]);
import{a as nt,M as Ct,j as se,H as Zu,D as fn,S as $t,O as Ju,p as _t,w as We,A as $e,K as oi,P as Ie,z as ae,l as An,b as Tt,Q as xn,m as mt,R as Xt,t as Co,C as li,T as Qu,U as Rt,V as ut,y as ii,W as Rc,X as cn,Y as Wn,Z as ed,o as td,u as Pc,d as Dc,c as Yi,e as Lc,L as Ic,_ as nd,$ as id,N as rd,F as sd}from"./Footer-DahKxp4s.js";import{_ as Dr}from"./preload-helper-ug3pwPZ1.js";var tn=(i=>(i.AI="ai",i.Blockchain="blockchain",i.Software="software",i.Web="web",i))(tn||{});const ad="portfolio-theme",od=[{id:tn.AI,label:"IA",primary:"#00E5FF",secondary:"#10A37F",tertiary:"#8B5CF6",background:"#080012"},{id:tn.Blockchain,label:"Blockchain",primary:"#F7931A",secondary:"#00BFA5",tertiary:"#627EEA",background:"#0D1117"},{id:tn.Software,label:"Software",primary:"#00FF41",secondary:"#006622",tertiary:"#FFFFFF",background:"#000000"},{id:tn.Web,label:"Web",primary:"#0000EE",secondary:"#551A8B",tertiary:"#CC0000",background:"#F8F9FA"}];function ld(){return tn.AI}const[ys,cd]=nt(ld());Ct(()=>{typeof document<"u"&&(document.documentElement.setAttribute("data-theme",ys()),localStorage.setItem(ad,ys()))});function tl(i){cd(i)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="184",ud=0,nl=1,dd=2,ps=1,fd=2,xr=3,si=0,qt=1,On=2,wn=0,ji=1,Ra=2,il=3,rl=4,hd=5,gi=100,pd=101,md=102,gd=103,_d=104,xd=200,vd=201,Sd=202,Md=203,Pa=204,Da=205,bd=206,yd=207,Ed=208,Td=209,Ad=210,wd=211,Cd=212,Rd=213,Pd=214,La=0,Ia=1,Ua=2,Zi=3,Na=4,Fa=5,Oa=6,Ba=7,Uc=0,Dd=1,Ld=2,Cn=0,Nc=1,Fc=2,Oc=3,Po=4,Bc=5,zc=6,Vc=7,kc=300,Si=301,Ji=302,Ws=303,$s=304,Fs=306,za=1e3,Bn=1001,Va=1002,It=1003,Id=1004,Lr=1005,zt=1006,Xs=1007,xi=1008,ln=1009,Gc=1010,Hc=1011,Mr=1012,Do=1013,Rn=1014,gn=1015,nn=1016,Lo=1017,Io=1018,br=1020,Wc=35902,$c=35899,Xc=1021,qc=1022,_n=1023,Gn=1026,vi=1027,Uo=1028,No=1029,Mi=1030,Fo=1031,Oo=1033,ms=33776,gs=33777,_s=33778,xs=33779,ka=35840,Ga=35841,Ha=35842,Wa=35843,$a=36196,Xa=37492,qa=37496,Ya=37488,ja=37489,Es=37490,Ka=37491,Za=37808,Ja=37809,Qa=37810,eo=37811,to=37812,no=37813,io=37814,ro=37815,so=37816,ao=37817,oo=37818,lo=37819,co=37820,uo=37821,fo=36492,ho=36494,po=36495,mo=36283,go=36284,Ts=36285,_o=36286,Ud=3200,sl=0,Nd=1,ti="",Qt="srgb",As="srgb-linear",ws="linear",it="srgb",Ri=7680,al=519,Fd=512,Od=513,Bd=514,Bo=515,zd=516,Vd=517,zo=518,kd=519,xo=35044,vo="300 es",Tn=2e3,Cs=2001;function Gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hd(){const i=Rs("canvas");return i.style.display="block",i}const ol={};function Ps(...i){const e="THREE."+i.shift();console.log(e,...i)}function Yc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=Yc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Yc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function So(...i){const e=i.join(" ");e in ol||(ol[e]=!0,Ne(...i))}function Wd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const $d={[La]:Ia,[Ua]:Oa,[Na]:Ba,[Zi]:Fa,[Ia]:La,[Oa]:Ua,[Ba]:Na,[Fa]:Zi};class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vs=Math.PI/180,Mo=180/Math.PI;function ri(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Xd(i,e){return(i%e+e)%e}function qs(i,e,t){return(1-t)*i+t*e}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ue{static{Ue.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let u=n[r+0],l=n[r+1],f=n[r+2],d=n[r+3],c=s[a+0],h=s[a+1],g=s[a+2],S=s[a+3];if(d!==S||u!==c||l!==h||f!==g){let m=u*c+l*h+f*g+d*S;m<0&&(c=-c,h=-h,g=-g,S=-S,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),b=Math.sin(v);p=Math.sin(p*v)/b,o=Math.sin(o*v)/b,u=u*p+c*o,l=l*p+h*o,f=f*p+g*o,d=d*p+S*o}else{u=u*p+c*o,l=l*p+h*o,f=f*p+g*o,d=d*p+S*o;const v=1/Math.sqrt(u*u+l*l+f*f+d*d);u*=v,l*=v,f*=v,d*=v}}e[t]=u,e[t+1]=l,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],u=n[r+1],l=n[r+2],f=n[r+3],d=s[a],c=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+f*d+u*h-l*c,e[t+1]=u*g+f*c+l*d-o*h,e[t+2]=l*g+f*h+o*c-u*d,e[t+3]=f*g-o*d-u*c-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,u=Math.sin,l=o(n/2),f=o(r/2),d=o(s/2),c=u(n/2),h=u(r/2),g=u(s/2);switch(a){case"XYZ":this._x=c*f*d+l*h*g,this._y=l*h*d-c*f*g,this._z=l*f*g+c*h*d,this._w=l*f*d-c*h*g;break;case"YXZ":this._x=c*f*d+l*h*g,this._y=l*h*d-c*f*g,this._z=l*f*g-c*h*d,this._w=l*f*d+c*h*g;break;case"ZXY":this._x=c*f*d-l*h*g,this._y=l*h*d+c*f*g,this._z=l*f*g+c*h*d,this._w=l*f*d-c*h*g;break;case"ZYX":this._x=c*f*d-l*h*g,this._y=l*h*d+c*f*g,this._z=l*f*g-c*h*d,this._w=l*f*d+c*h*g;break;case"YZX":this._x=c*f*d+l*h*g,this._y=l*h*d+c*f*g,this._z=l*f*g-c*h*d,this._w=l*f*d-c*h*g;break;case"XZY":this._x=c*f*d-l*h*g,this._y=l*h*d-c*f*g,this._z=l*f*g+c*h*d,this._w=l*f*d+c*h*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],u=t[9],l=t[2],f=t[6],d=t[10],c=n+o+d;if(c>0){const h=.5/Math.sqrt(c+1);this._w=.25/h,this._x=(f-u)*h,this._y=(s-l)*h,this._z=(a-r)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(f-u)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+l)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-l)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(u+f)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-r)/h,this._x=(s+l)/h,this._y=(u+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,u=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+r*l-s*u,this._y=r*f+a*u+s*o-n*l,this._z=s*f+a*l+n*u-r*o,this._w=a*f-n*o-r*u-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let u=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);u=Math.sin(u*l)/f,t=Math.sin(t*l)/f,this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+a*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{static{N.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,u=e.w,l=2*(a*r-o*n),f=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+u*l+a*d-o*f,this.y=n+u*f+o*l-s*d,this.z=r+u*d+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,u=t.z;return this.x=r*u-s*o,this.y=s*a-n*u,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ys.copy(this).projectOnVector(e),this.sub(Ys)}reflect(e){return this.sub(Ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ys=new N,ll=new nr;class Be{static{Be.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,u,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,u,l)}set(e,t,n,r,s,a,o,u,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],u=n[6],l=n[1],f=n[4],d=n[7],c=n[2],h=n[5],g=n[8],S=r[0],m=r[3],p=r[6],v=r[1],b=r[4],y=r[7],C=r[2],E=r[5],P=r[8];return s[0]=a*S+o*v+u*C,s[3]=a*m+o*b+u*E,s[6]=a*p+o*y+u*P,s[1]=l*S+f*v+d*C,s[4]=l*m+f*b+d*E,s[7]=l*p+f*y+d*P,s[2]=c*S+h*v+g*C,s[5]=c*m+h*b+g*E,s[8]=c*p+h*y+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*s*f+n*o*u+r*s*l-r*a*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],l=e[7],f=e[8],d=f*a-o*l,c=o*u-f*s,h=l*s-a*u,g=t*d+n*c+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=d*S,e[1]=(r*l-f*n)*S,e[2]=(o*n-r*a)*S,e[3]=c*S,e[4]=(f*t-r*u)*S,e[5]=(r*s-o*t)*S,e[6]=h*S,e[7]=(n*u-l*t)*S,e[8]=(a*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const u=Math.cos(s),l=Math.sin(s);return this.set(n*u,n*l,-n*(u*a+l*o)+a+e,-r*l,r*u,-r*(-l*a+u*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(js.makeScale(e,t)),this}rotate(e){return this.premultiply(js.makeRotation(-e)),this}translate(e,t){return this.premultiply(js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const js=new Be,cl=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qd(){const i={enabled:!0,workingColorSpace:As,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=Vn(r.r),r.g=Vn(r.g),r.b=Vn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ti?ws:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return So("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return So("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[As]:{primaries:e,whitePoint:n,transfer:ws,toXYZ:cl,fromXYZ:ul,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:cl,fromXYZ:ul,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),i}const qe=qd();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class Yd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pi===void 0&&(Pi=Rs("canvas")),Pi.width=e.width,Pi.height=e.height;const r=Pi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Vn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jd=0;class Vo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ks(r[a].image)):s.push(Ks(r[a]))}else s=Ks(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ks(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let Kd=0;const Zs=new N;class kt extends yi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=Bn,r=Bn,s=zt,a=xi,o=_n,u=ln,l=kt.DEFAULT_ANISOTROPY,f=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=ri(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=u,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zs).x}get height(){return this.source.getSize(Zs).y}get depth(){return this.source.getSize(Zs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case za:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case za:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=kc;kt.DEFAULT_ANISOTROPY=1;class At{static{At.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,l=u[0],f=u[4],d=u[8],c=u[1],h=u[5],g=u[9],S=u[2],m=u[6],p=u[10];if(Math.abs(f-c)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+c)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,y=(h+1)/2,C=(p+1)/2,E=(f+c)/4,P=(d+S)/4,x=(g+m)/4;return b>y&&b>C?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=E/n,s=P/n):y>C?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=E/r,s=x/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=P/s,r=x/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(c-f)*(c-f));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-S)/v,this.z=(c-f)/v,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zd extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new kt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Vo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yt extends Zd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jc extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jd extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pt{static{pt.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,u,l,f,d,c,h,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,u,l,f,d,c,h,g,S,m)}set(e,t,n,r,s,a,o,u,l,f,d,c,h,g,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=u,p[2]=l,p[6]=f,p[10]=d,p[14]=c,p[3]=h,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),a=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),u=Math.cos(r),l=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const c=a*f,h=a*d,g=o*f,S=o*d;t[0]=u*f,t[4]=-u*d,t[8]=l,t[1]=h+g*l,t[5]=c-S*l,t[9]=-o*u,t[2]=S-c*l,t[6]=g+h*l,t[10]=a*u}else if(e.order==="YXZ"){const c=u*f,h=u*d,g=l*f,S=l*d;t[0]=c+S*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=h*o-g,t[6]=S+c*o,t[10]=a*u}else if(e.order==="ZXY"){const c=u*f,h=u*d,g=l*f,S=l*d;t[0]=c-S*o,t[4]=-a*d,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*f,t[9]=S-c*o,t[2]=-a*l,t[6]=o,t[10]=a*u}else if(e.order==="ZYX"){const c=a*f,h=a*d,g=o*f,S=o*d;t[0]=u*f,t[4]=g*l-h,t[8]=c*l+S,t[1]=u*d,t[5]=S*l+c,t[9]=h*l-g,t[2]=-l,t[6]=o*u,t[10]=a*u}else if(e.order==="YZX"){const c=a*u,h=a*l,g=o*u,S=o*l;t[0]=u*f,t[4]=S-c*d,t[8]=g*d+h,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=h*d+g,t[10]=c-S*d}else if(e.order==="XZY"){const c=a*u,h=a*l,g=o*u,S=o*l;t[0]=u*f,t[4]=-d,t[8]=l*f,t[1]=c*d+S,t[5]=a*f,t[9]=h*d-g,t[2]=g*d-h,t[6]=o*f,t[10]=S*d+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qd,e,ef)}lookAt(e,t,n){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Yn.crossVectors(n,Kt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Yn.crossVectors(n,Kt)),Yn.normalize(),Ir.crossVectors(Kt,Yn),r[0]=Yn.x,r[4]=Ir.x,r[8]=Kt.x,r[1]=Yn.y,r[5]=Ir.y,r[9]=Kt.y,r[2]=Yn.z,r[6]=Ir.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],u=n[8],l=n[12],f=n[1],d=n[5],c=n[9],h=n[13],g=n[2],S=n[6],m=n[10],p=n[14],v=n[3],b=n[7],y=n[11],C=n[15],E=r[0],P=r[4],x=r[8],A=r[12],R=r[1],w=r[5],L=r[9],H=r[13],W=r[2],U=r[6],B=r[10],V=r[14],j=r[3],ne=r[7],O=r[11],Q=r[15];return s[0]=a*E+o*R+u*W+l*j,s[4]=a*P+o*w+u*U+l*ne,s[8]=a*x+o*L+u*B+l*O,s[12]=a*A+o*H+u*V+l*Q,s[1]=f*E+d*R+c*W+h*j,s[5]=f*P+d*w+c*U+h*ne,s[9]=f*x+d*L+c*B+h*O,s[13]=f*A+d*H+c*V+h*Q,s[2]=g*E+S*R+m*W+p*j,s[6]=g*P+S*w+m*U+p*ne,s[10]=g*x+S*L+m*B+p*O,s[14]=g*A+S*H+m*V+p*Q,s[3]=v*E+b*R+y*W+C*j,s[7]=v*P+b*w+y*U+C*ne,s[11]=v*x+b*L+y*B+C*O,s[15]=v*A+b*H+y*V+C*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],u=e[9],l=e[13],f=e[2],d=e[6],c=e[10],h=e[14],g=e[3],S=e[7],m=e[11],p=e[15],v=u*h-l*c,b=o*h-l*d,y=o*c-u*d,C=a*h-l*f,E=a*c-u*f,P=a*d-o*f;return t*(S*v-m*b+p*y)-n*(g*v-m*C+p*E)+r*(g*b-S*C+p*P)-s*(g*y-S*E+m*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],l=e[7],f=e[8],d=e[9],c=e[10],h=e[11],g=e[12],S=e[13],m=e[14],p=e[15],v=t*o-n*a,b=t*u-r*a,y=t*l-s*a,C=n*u-r*o,E=n*l-s*o,P=r*l-s*u,x=f*S-d*g,A=f*m-c*g,R=f*p-h*g,w=d*m-c*S,L=d*p-h*S,H=c*p-h*m,W=v*H-b*L+y*w+C*R-E*A+P*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/W;return e[0]=(o*H-u*L+l*w)*U,e[1]=(r*L-n*H-s*w)*U,e[2]=(S*P-m*E+p*C)*U,e[3]=(c*E-d*P-h*C)*U,e[4]=(u*R-a*H-l*A)*U,e[5]=(t*H-r*R+s*A)*U,e[6]=(m*y-g*P-p*b)*U,e[7]=(f*P-c*y+h*b)*U,e[8]=(a*L-o*R+l*x)*U,e[9]=(n*R-t*L-s*x)*U,e[10]=(g*E-S*y+p*v)*U,e[11]=(d*y-f*E-h*v)*U,e[12]=(o*A-a*w-u*x)*U,e[13]=(t*w-n*A+r*x)*U,e[14]=(S*b-g*C-m*v)*U,e[15]=(f*C-d*b+c*v)*U,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,u=e.z,l=s*a,f=s*o;return this.set(l*a+n,l*o-r*u,l*u+r*o,0,l*o+r*u,f*o+n,f*u-r*a,0,l*u-r*o,f*u+r*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,u=t._w,l=s+s,f=a+a,d=o+o,c=s*l,h=s*f,g=s*d,S=a*f,m=a*d,p=o*d,v=u*l,b=u*f,y=u*d,C=n.x,E=n.y,P=n.z;return r[0]=(1-(S+p))*C,r[1]=(h+y)*C,r[2]=(g-b)*C,r[3]=0,r[4]=(h-y)*E,r[5]=(1-(c+p))*E,r[6]=(m+v)*E,r[7]=0,r[8]=(g+b)*P,r[9]=(m-v)*P,r[10]=(1-(c+S))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Di.set(r[0],r[1],r[2]).length();const o=Di.set(r[4],r[5],r[6]).length(),u=Di.set(r[8],r[9],r[10]).length();s<0&&(a=-a),hn.copy(this);const l=1/a,f=1/o,d=1/u;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=f,hn.elements[5]*=f,hn.elements[6]*=f,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,t.setFromRotationMatrix(hn),n.x=a,n.y=o,n.z=u,this}makePerspective(e,t,n,r,s,a,o=Tn,u=!1){const l=this.elements,f=2*s/(t-e),d=2*s/(n-r),c=(t+e)/(t-e),h=(n+r)/(n-r);let g,S;if(u)g=s/(a-s),S=a*s/(a-s);else if(o===Tn)g=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Cs)g=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Tn,u=!1){const l=this.elements,f=2/(t-e),d=2/(n-r),c=-(t+e)/(t-e),h=-(n+r)/(n-r);let g,S;if(u)g=1/(a-s),S=a/(a-s);else if(o===Tn)g=-2/(a-s),S=-(a+s)/(a-s);else if(o===Cs)g=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=c,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Di=new N,hn=new pt,Qd=new N(0,0,0),ef=new N(1,1,1),Yn=new N,Ir=new N,Kt=new N,dl=new pt,fl=new nr;class bi{constructor(e=0,t=0,n=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],u=r[1],l=r[5],f=r[9],d=r[2],c=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,h),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fl.setFromEuler(this),this.setFromQuaternion(fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tf=0;const hl=new N,Li=new nr,Dn=new pt,Ur=new N,rr=new N,nf=new N,rf=new nr,pl=new N(1,0,0),ml=new N(0,1,0),gl=new N(0,0,1),_l={type:"added"},sf={type:"removed"},Ii={type:"childadded",child:null},Js={type:"childremoved",child:null};class Gt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new N,t=new bi,n=new nr,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Be}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return hl.copy(e).applyQuaternion(this.quaternion),this.position.add(hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ur.copy(e):Ur.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(rr,Ur,this.up):Dn.lookAt(Ur,rr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Li.setFromRotationMatrix(Dn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_l),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sf),Js.child=e,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_l),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,nf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let l=0,f=u.length;l<f;l++){const d=u[l];s(e.shapes,d)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,l=this.material.length;u<l;u++)o.push(s(e.materials,this.material[u]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];r.animations.push(s(e.animations,u))}}if(t){const o=a(e.geometries),u=a(e.materials),l=a(e.textures),f=a(e.images),d=a(e.shapes),c=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),c.length>0&&(n.skeletons=c),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const u=[];for(const l in o){const f=o[l];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new N(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nr extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const af={type:"move"};class Qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),p=this._getHandJoint(l,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],c=f.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&c>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&c<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(af)))}return o!==null&&(o.visible=r!==null),u!==null&&(u.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function ea(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=qe.workingColorSpace){if(e=Xd(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ea(a,s,e+1/3),this.g=ea(a,s,e),this.b=ea(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function n(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=Zc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return qe.workingToColorSpace(Ot.copy(this),e),Math.round(Ye(Ot.r*255,0,255))*65536+Math.round(Ye(Ot.g*255,0,255))*256+Math.round(Ye(Ot.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Ot.copy(this),t);const n=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let u,l;const f=(o+a)/2;if(o===a)u=0,l=0;else{const d=a-o;switch(l=f<=.5?d/(a+o):d/(2-a-o),a){case n:u=(r-s)/d+(r<s?6:0);break;case r:u=(s-n)/d+2;break;case s:u=(n-r)/d+4;break}u/=6}return e.h=u,e.s=l,e.l=f,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Qt){qe.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,r=Ot.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Fr);const n=qs(jn.h,Fr.h,t),r=qs(jn.s,Fr.s,t),s=qs(jn.l,Fr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new je;je.NAMES=Zc;class of extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pn=new N,Ln=new N,ta=new N,In=new N,Ui=new N,Ni=new N,xl=new N,na=new N,ia=new N,ra=new N,sa=new At,aa=new At,oa=new At;class en{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){pn.subVectors(r,t),Ln.subVectors(n,t),ta.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Ln),u=pn.dot(ta),l=Ln.dot(Ln),f=Ln.dot(ta),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const c=1/d,h=(l*u-o*f)*c,g=(a*f-o*u)*c;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,r,s,a,o,u){return this.getBarycoord(e,t,n,r,In)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,In.x),u.addScaledVector(a,In.y),u.addScaledVector(o,In.z),u)}static getInterpolatedAttribute(e,t,n,r,s,a){return sa.setScalar(0),aa.setScalar(0),oa.setScalar(0),sa.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,n),oa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(sa,s.x),a.addScaledVector(aa,s.y),a.addScaledVector(oa,s.z),a}static isFrontFacing(e,t,n,r){return pn.subVectors(n,t),Ln.subVectors(e,t),pn.cross(Ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),pn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return en.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ui.subVectors(r,n),Ni.subVectors(s,n),na.subVectors(e,n);const u=Ui.dot(na),l=Ni.dot(na);if(u<=0&&l<=0)return t.copy(n);ia.subVectors(e,r);const f=Ui.dot(ia),d=Ni.dot(ia);if(f>=0&&d<=f)return t.copy(r);const c=u*d-f*l;if(c<=0&&u>=0&&f<=0)return a=u/(u-f),t.copy(n).addScaledVector(Ui,a);ra.subVectors(e,s);const h=Ui.dot(ra),g=Ni.dot(ra);if(g>=0&&h<=g)return t.copy(s);const S=h*l-u*g;if(S<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ni,o);const m=f*g-h*d;if(m<=0&&d-f>=0&&h-g>=0)return xl.subVectors(s,r),o=(d-f)/(d-f+(h-g)),t.copy(r).addScaledVector(xl,o);const p=1/(m+S+c);return a=S*p,o=c*p,t.copy(n).addScaledVector(Ui,a).addScaledVector(Ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ei{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Br.subVectors(this.max,sr),Fi.subVectors(e.a,sr),Oi.subVectors(e.b,sr),Bi.subVectors(e.c,sr),Kn.subVectors(Oi,Fi),Zn.subVectors(Bi,Oi),di.subVectors(Fi,Bi);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-di.z,di.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,di.z,0,-di.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-di.y,di.x,0];return!la(t,Fi,Oi,Bi,Br)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Fi,Oi,Bi,Br))?!1:(zr.crossVectors(Kn,Zn),t=[zr.x,zr.y,zr.z],la(t,Fi,Oi,Bi,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new N,new N,new N,new N,new N,new N,new N,new N],mn=new N,Or=new Ei,Fi=new N,Oi=new N,Bi=new N,Kn=new N,Zn=new N,di=new N,sr=new N,Br=new N,zr=new N,fi=new N;function la(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){fi.fromArray(i,s);const o=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),u=e.dot(fi),l=t.dot(fi),f=n.dot(fi);if(Math.max(-Math.max(u,l,f),Math.min(u,l,f))>o)return!1}return!0}const wt=new N,Vr=new Ue;let lf=0;class un extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xo,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Jc extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qc extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}const cf=new Ei,ar=new N,ca=new N;class Ti{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ar,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(ca)),this.expandByPoint(ar.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let uf=0;const sn=new pt,ua=new Gt,zi=new N,Zt=new Ei,or=new Ei,Lt=new N;class Ut extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gd(e)?Qc:Jc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(Zt.min,or.min),Zt.expandByPoint(Lt),Lt.addVectors(Zt.max,or.max),Zt.expandByPoint(Lt)):(Zt.expandByPoint(or.min),Zt.expandByPoint(or.max))}Zt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],u=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Lt.fromBufferAttribute(o,l),u&&(zi.fromBufferAttribute(e,l),Lt.add(zi)),r=Math.max(r,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],u=[];for(let x=0;x<n.count;x++)o[x]=new N,u[x]=new N;const l=new N,f=new N,d=new N,c=new Ue,h=new Ue,g=new Ue,S=new N,m=new N;function p(x,A,R){l.fromBufferAttribute(n,x),f.fromBufferAttribute(n,A),d.fromBufferAttribute(n,R),c.fromBufferAttribute(s,x),h.fromBufferAttribute(s,A),g.fromBufferAttribute(s,R),f.sub(l),d.sub(l),h.sub(c),g.sub(c);const w=1/(h.x*g.y-g.x*h.y);isFinite(w)&&(S.copy(f).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(w),m.copy(d).multiplyScalar(h.x).addScaledVector(f,-g.x).multiplyScalar(w),o[x].add(S),o[A].add(S),o[R].add(S),u[x].add(m),u[A].add(m),u[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,A=v.length;x<A;++x){const R=v[x],w=R.start,L=R.count;for(let H=w,W=w+L;H<W;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new N,y=new N,C=new N,E=new N;function P(x){C.fromBufferAttribute(r,x),E.copy(C);const A=o[x];b.copy(A),b.sub(C.multiplyScalar(C.dot(A))).normalize(),y.crossVectors(E,A);const w=y.dot(u[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,w)}for(let x=0,A=v.length;x<A;++x){const R=v[x],w=R.start,L=R.count;for(let H=w,W=w+L;H<W;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,h=n.count;c<h;c++)n.setXYZ(c,0,0,0);const r=new N,s=new N,a=new N,o=new N,u=new N,l=new N,f=new N,d=new N;if(e)for(let c=0,h=e.count;c<h;c+=3){const g=e.getX(c+0),S=e.getX(c+1),m=e.getX(c+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(n,g),u.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(f),u.add(f),l.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let c=0,h=t.count;c<h;c+=3)r.fromBufferAttribute(t,c+0),s.fromBufferAttribute(t,c+1),a.fromBufferAttribute(t,c+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),n.setXYZ(c+0,f.x,f.y,f.z),n.setXYZ(c+1,f.x,f.y,f.z),n.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,u){const l=o.array,f=o.itemSize,d=o.normalized,c=new l.constructor(u.length*f);let h=0,g=0;for(let S=0,m=u.length;S<m;S++){o.isInterleavedBufferAttribute?h=u[S]*o.data.stride+o.offset:h=u[S]*f;for(let p=0;p<f;p++)c[g++]=l[h++]}return new un(c,f,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,r=this.attributes;for(const o in r){const u=r[o],l=e(u,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const u=[],l=s[o];for(let f=0,d=l.length;f<d;f++){const c=l[f],h=e(c,n);u.push(h)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,u=a.length;o<u;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const l=n[u];e.data.attributes[u]=l.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],f=[];for(let d=0,c=l.length;d<c;d++){const h=l[d];f.push(h.toJSON(e.data))}f.length>0&&(r[u]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],d=s[l];for(let c=0,h=d.length;c<h;c++)f.push(d[c].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class df{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xo,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new N;class Ds{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ps("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ds(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ps("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ff=0;class Ai extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=ji,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=Da,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pa&&(n.blendSrc=this.blendSrc),this.blendDst!==Da&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const u=s[o];delete u.metadata,a.push(u)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hf extends Ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Vi;const lr=new N,ki=new N,Gi=new N,Hi=new Ue,cr=new Ue,eu=new pt,kr=new N,ur=new N,Gr=new N,vl=new Ue,da=new Ue,Sl=new Ue;class Bv extends Gt{constructor(e=new hf){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new Ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new df(t,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new Ds(n,3,0,!1)),Vi.setAttribute("uv",new Ds(n,2,3,!1))}this.geometry=Vi,this.material=e,this.center=new Ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),eu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Gi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Hr(kr.set(-.5,-.5,0),Gi,a,ki,r,s),Hr(ur.set(.5,-.5,0),Gi,a,ki,r,s),Hr(Gr.set(.5,.5,0),Gi,a,ki,r,s),vl.set(0,0),da.set(1,0),Sl.set(1,1);let o=e.ray.intersectTriangle(kr,ur,Gr,!1,lr);if(o===null&&(Hr(ur.set(-.5,.5,0),Gi,a,ki,r,s),da.set(0,1),o=e.ray.intersectTriangle(kr,Gr,ur,!1,lr),o===null))return;const u=e.ray.origin.distanceTo(lr);u<e.near||u>e.far||t.push({distance:u,point:lr.clone(),uv:en.getInterpolation(lr,kr,ur,Gr,vl,da,Sl,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Hr(i,e,t,n,r,s){Hi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(cr.x=s*Hi.x-r*Hi.y,cr.y=r*Hi.x+s*Hi.y):cr.copy(Hi),i.copy(e),i.x+=cr.x,i.y+=cr.y,i.applyMatrix4(eu)}const Nn=new N,fa=new N,Wr=new N,Jn=new N,ha=new N,$r=new N,pa=new N;class ko{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fa.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(fa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Wr),o=Jn.dot(this.direction),u=-Jn.dot(Wr),l=Jn.lengthSq(),f=Math.abs(1-a*a);let d,c,h,g;if(f>0)if(d=a*u-o,c=a*o-u,g=s*f,d>=0)if(c>=-g)if(c<=g){const S=1/f;d*=S,c*=S,h=d*(d+a*c+2*o)+c*(a*d+c+2*u)+l}else c=s,d=Math.max(0,-(a*c+o)),h=-d*d+c*(c+2*u)+l;else c=-s,d=Math.max(0,-(a*c+o)),h=-d*d+c*(c+2*u)+l;else c<=-g?(d=Math.max(0,-(-a*s+o)),c=d>0?-s:Math.min(Math.max(-s,-u),s),h=-d*d+c*(c+2*u)+l):c<=g?(d=0,c=Math.min(Math.max(-s,-u),s),h=c*(c+2*u)+l):(d=Math.max(0,-(a*s+o)),c=d>0?s:Math.min(Math.max(-s,-u),s),h=-d*d+c*(c+2*u)+l);else c=a>0?-s:s,d=Math.max(0,-(a*c+o)),h=-d*d+c*(c+2*u)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(fa).addScaledVector(Wr,c),h}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,u=n+a;return u<0?null:o<0?this.at(u,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,u;const l=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,c=this.origin;return l>=0?(n=(e.min.x-c.x)*l,r=(e.max.x-c.x)*l):(n=(e.max.x-c.x)*l,r=(e.min.x-c.x)*l),f>=0?(s=(e.min.y-c.y)*f,a=(e.max.y-c.y)*f):(s=(e.max.y-c.y)*f,a=(e.min.y-c.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-c.z)*d,u=(e.max.z-c.z)*d):(o=(e.max.z-c.z)*d,u=(e.min.z-c.z)*d),n>u||o>r)||((o>n||n!==n)&&(n=o),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,r,s){ha.subVectors(t,e),$r.subVectors(n,e),pa.crossVectors(ha,$r);let a=this.direction.dot(pa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const u=o*this.direction.dot($r.crossVectors(Jn,$r));if(u<0)return null;const l=o*this.direction.dot(ha.cross(Jn));if(l<0||u+l>a)return null;const f=-o*Jn.dot(pa);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Go extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ml=new pt,hi=new ko,Xr=new Ti,bl=new N,qr=new N,Yr=new N,jr=new N,ma=new N,Kr=new N,yl=new N,Zr=new N;class dn extends Gt{constructor(e=new Ut,t=new Go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Kr.set(0,0,0);for(let u=0,l=s.length;u<l;u++){const f=o[u],d=s[u];f!==0&&(ma.fromBufferAttribute(d,e),a?Kr.addScaledVector(ma,f):Kr.addScaledVector(ma.sub(t),f))}t.add(Kr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),hi.copy(e.ray).recast(e.near),!(Xr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Xr,bl)===null||hi.origin.distanceToSquared(bl)>(e.far-e.near)**2))&&(Ml.copy(s).invert(),hi.copy(e.ray).applyMatrix4(Ml),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,u=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,c=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=c.length;g<S;g++){const m=c[g],p=a[m.materialIndex],v=Math.max(m.start,h.start),b=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let y=v,C=b;y<C;y+=3){const E=o.getX(y),P=o.getX(y+1),x=o.getX(y+2);r=Jr(this,p,e,n,l,f,d,E,P,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),S=Math.min(o.count,h.start+h.count);for(let m=g,p=S;m<p;m+=3){const v=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);r=Jr(this,a,e,n,l,f,d,v,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let g=0,S=c.length;g<S;g++){const m=c[g],p=a[m.materialIndex],v=Math.max(m.start,h.start),b=Math.min(u.count,Math.min(m.start+m.count,h.start+h.count));for(let y=v,C=b;y<C;y+=3){const E=y,P=y+1,x=y+2;r=Jr(this,p,e,n,l,f,d,E,P,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),S=Math.min(u.count,h.start+h.count);for(let m=g,p=S;m<p;m+=3){const v=m,b=m+1,y=m+2;r=Jr(this,a,e,n,l,f,d,v,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function pf(i,e,t,n,r,s,a,o){let u;if(e.side===qt?u=n.intersectTriangle(a,s,r,!0,o):u=n.intersectTriangle(r,s,a,e.side===si,o),u===null)return null;Zr.copy(o),Zr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Zr);return l<t.near||l>t.far?null:{distance:l,point:Zr.clone(),object:i}}function Jr(i,e,t,n,r,s,a,o,u,l){i.getVertexPosition(o,qr),i.getVertexPosition(u,Yr),i.getVertexPosition(l,jr);const f=pf(i,e,t,n,qr,Yr,jr,yl);if(f){const d=new N;en.getBarycoord(yl,qr,Yr,jr,d),r&&(f.uv=en.getInterpolatedAttribute(r,o,u,l,d,new Ue)),s&&(f.uv1=en.getInterpolatedAttribute(s,o,u,l,d,new Ue)),a&&(f.normal=en.getInterpolatedAttribute(a,o,u,l,d,new N),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const c={a:o,b:u,c:l,normal:new N,materialIndex:0};en.getNormal(qr,Yr,jr,c.normal),f.face=c,f.barycoord=d}return f}class tu extends kt{constructor(e=null,t=1,n=1,r,s,a,o,u,l=It,f=It,d,c){super(null,a,o,u,l,f,r,s,d,c),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El extends un{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wi=new pt,Tl=new pt,Qr=[],Al=new Ei,mf=new pt,dr=new dn,fr=new Ti;class zv extends dn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,mf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Al.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Al)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),fr.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),e.ray.intersectsSphere(fr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Wi),Tl.multiplyMatrices(n,Wi),dr.matrixWorld=Tl,dr.raycast(e,Qr);for(let a=0,o=Qr.length;a<o;a++){const u=Qr[a];u.instanceId=s,u.object=this,t.push(u)}Qr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new tu(new Float32Array(r*this.count),r,this.count,Uo,gn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,u=r*e;return s[u]=o,s.set(n,u+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ga=new N,gf=new N,_f=new Be;class mi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ga.subVectors(n,t).cross(gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(ga),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_f.getNormalMatrix(e),r=this.coplanarPoint(ga).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Ti,xf=new Ue(.5,.5),es=new N;class nu{constructor(e=new mi,t=new mi,n=new mi,r=new mi,s=new mi,a=new mi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],u=s[2],l=s[3],f=s[4],d=s[5],c=s[6],h=s[7],g=s[8],S=s[9],m=s[10],p=s[11],v=s[12],b=s[13],y=s[14],C=s[15];if(r[0].setComponents(l-a,h-f,p-g,C-v).normalize(),r[1].setComponents(l+a,h+f,p+g,C+v).normalize(),r[2].setComponents(l+o,h+d,p+S,C+b).normalize(),r[3].setComponents(l-o,h-d,p-S,C-b).normalize(),n)r[4].setComponents(u,c,m,y).normalize(),r[5].setComponents(l-u,h-c,p-m,C-y).normalize();else if(r[4].setComponents(l-u,h-c,p-m,C-y).normalize(),t===Tn)r[5].setComponents(l+u,h+c,p+m,C+y).normalize();else if(t===Cs)r[5].setComponents(u,c,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const t=xf.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(es.x=r.normal.x>0?e.max.x:e.min.x,es.y=r.normal.y>0?e.max.y:e.min.y,es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vf extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ls=new N,Is=new N,wl=new pt,hr=new ko,ts=new Ti,_a=new N,Cl=new N;class Sf extends Gt{constructor(e=new Ut,t=new vf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ls.fromBufferAttribute(t,r-1),Is.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ls.distanceTo(Is);e.setAttribute("lineDistance",new xt(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(r),ts.radius+=s,e.ray.intersectsSphere(ts)===!1)return;wl.copy(r).invert(),hr.copy(e.ray).applyMatrix4(wl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=o*o,l=this.isLineSegments?2:1,f=n.index,c=n.attributes.position;if(f!==null){const h=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let S=h,m=g-1;S<m;S+=l){const p=f.getX(S),v=f.getX(S+1),b=ns(this,e,hr,u,p,v,S);b&&t.push(b)}if(this.isLineLoop){const S=f.getX(g-1),m=f.getX(h),p=ns(this,e,hr,u,S,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let S=h,m=g-1;S<m;S+=l){const p=ns(this,e,hr,u,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){const S=ns(this,e,hr,u,g-1,h,g-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ns(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Ls.fromBufferAttribute(o,r),Is.fromBufferAttribute(o,s),t.distanceSqToSegment(Ls,Is,_a,Cl)>n)return;_a.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(_a);if(!(l<e.near||l>e.far))return{distance:l,point:Cl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Rl=new N,Pl=new N;class Vv extends Sf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Rl.fromBufferAttribute(t,r),Pl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Rl.distanceTo(Pl);e.setAttribute("lineDistance",new xt(n,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mf extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dl=new pt,bo=new ko,is=new Ti,rs=new N;class kv extends Gt{constructor(e=new Ut,t=new Mf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(r),is.radius+=s,e.ray.intersectsSphere(is)===!1)return;Dl.copy(r).invert(),bo.copy(e.ray).applyMatrix4(Dl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=o*o,l=n.index,d=n.attributes.position;if(l!==null){const c=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let g=c,S=h;g<S;g++){const m=l.getX(g);rs.fromBufferAttribute(d,m),Ll(rs,m,u,r,e,t,this)}}else{const c=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let g=c,S=h;g<S;g++)rs.fromBufferAttribute(d,g),Ll(rs,g,u,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ll(i,e,t,n,r,s,a){const o=bo.distanceSqToPoint(i);if(o<t){const u=new N;bo.closestPointToPoint(i,u),u.applyMatrix4(n);const l=r.ray.origin.distanceTo(u);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class iu extends kt{constructor(e=[],t=Si,n,r,s,a,o,u,l,f){super(e,t,n,r,s,a,o,u,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gv extends kt{constructor(e,t,n,r,s,a,o,u,l){super(e,t,n,r,s,a,o,u,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qi extends kt{constructor(e,t,n=Rn,r,s,a,o=It,u=It,l,f=Gn,d=1){if(f!==Gn&&f!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const c={width:e,height:t,depth:d};super(c,r,s,a,o,u,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bf extends Qi{constructor(e,t=Rn,n=Si,r,s,a=It,o=It,u,l=Gn){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,n,r,s,a,o,u,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ru extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Er extends Ut{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],l=[],f=[],d=[];let c=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(d,2));function g(S,m,p,v,b,y,C,E,P,x,A){const R=y/P,w=C/x,L=y/2,H=C/2,W=E/2,U=P+1,B=x+1;let V=0,j=0;const ne=new N;for(let O=0;O<B;O++){const Q=O*w-H;for(let J=0;J<U;J++){const ve=J*R-L;ne[S]=ve*v,ne[m]=Q*b,ne[p]=W,l.push(ne.x,ne.y,ne.z),ne[S]=0,ne[m]=0,ne[p]=E>0?1:-1,f.push(ne.x,ne.y,ne.z),d.push(J/P),d.push(1-O/x),V+=1}}for(let O=0;O<x;O++)for(let Q=0;Q<P;Q++){const J=c+Q+U*O,ve=c+Q+U*(O+1),Te=c+(Q+1)+U*(O+1),he=c+(Q+1)+U*O;u.push(J,ve,he),u.push(ve,Te,he),j+=6}o.addGroup(h,j,A),h+=j,c+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ho extends Ut{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),f(),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(s.slice(),3)),this.setAttribute("uv",new xt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const b=new N,y=new N,C=new N;for(let E=0;E<t.length;E+=3)h(t[E+0],b),h(t[E+1],y),h(t[E+2],C),u(b,y,C,v)}function u(v,b,y,C){const E=C+1,P=[];for(let x=0;x<=E;x++){P[x]=[];const A=v.clone().lerp(y,x/E),R=b.clone().lerp(y,x/E),w=E-x;for(let L=0;L<=w;L++)L===0&&x===E?P[x][L]=A:P[x][L]=A.clone().lerp(R,L/w)}for(let x=0;x<E;x++)for(let A=0;A<2*(E-x)-1;A++){const R=Math.floor(A/2);A%2===0?(c(P[x][R+1]),c(P[x+1][R]),c(P[x][R])):(c(P[x][R+1]),c(P[x+1][R+1]),c(P[x+1][R]))}}function l(v){const b=new N;for(let y=0;y<s.length;y+=3)b.x=s[y+0],b.y=s[y+1],b.z=s[y+2],b.normalize().multiplyScalar(v),s[y+0]=b.x,s[y+1]=b.y,s[y+2]=b.z}function f(){const v=new N;for(let b=0;b<s.length;b+=3){v.x=s[b+0],v.y=s[b+1],v.z=s[b+2];const y=m(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;a.push(y,1-C)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){const b=a[v+0],y=a[v+2],C=a[v+4],E=Math.max(b,y,C),P=Math.min(b,y,C);E>.9&&P<.1&&(b<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function c(v){s.push(v.x,v.y,v.z)}function h(v,b){const y=v*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function g(){const v=new N,b=new N,y=new N,C=new N,E=new Ue,P=new Ue,x=new Ue;for(let A=0,R=0;A<s.length;A+=9,R+=6){v.set(s[A+0],s[A+1],s[A+2]),b.set(s[A+3],s[A+4],s[A+5]),y.set(s[A+6],s[A+7],s[A+8]),E.set(a[R+0],a[R+1]),P.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),C.copy(v).add(b).add(y).divideScalar(3);const w=m(C);S(E,R+0,v,w),S(P,R+2,b,w),S(x,R+4,y,w)}}function S(v,b,y,C){C<0&&v.x===1&&(a[b]=v.x-1),y.x===0&&y.z===0&&(a[b]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.vertices,e.indices,e.radius,e.detail)}}const ss=new N,as=new N,xa=new N,os=new en;class Hv extends Ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(vs*t),a=e.getIndex(),o=e.getAttribute("position"),u=a?a.count:o.count,l=[0,0,0],f=["a","b","c"],d=new Array(3),c={},h=[];for(let g=0;g<u;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:S,b:m,c:p}=os;if(S.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),os.getNormal(xa),d[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const b=(v+1)%3,y=d[v],C=d[b],E=os[f[v]],P=os[f[b]],x=`${y}_${C}`,A=`${C}_${y}`;A in c&&c[A]?(xa.dot(c[A].normal)<=s&&(h.push(E.x,E.y,E.z),h.push(P.x,P.y,P.z)),c[A]=null):x in c||(c[x]={index0:l[v],index1:l[b],normal:xa.clone()})}}for(const g in c)if(c[g]){const{index0:S,index1:m}=c[g];ss.fromBufferAttribute(o,S),as.fromBufferAttribute(o,m),h.push(ss.x,ss.y,ss.z),h.push(as.x,as.y,as.z)}this.setAttribute("position",new xt(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class su extends Ho{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new su(e.radius,e.detail)}}class Os extends Ut{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),u=Math.floor(r),l=o+1,f=u+1,d=e/o,c=t/u,h=[],g=[],S=[],m=[];for(let p=0;p<f;p++){const v=p*c-a;for(let b=0;b<l;b++){const y=b*d-s;g.push(y,-v,0),S.push(0,0,1),m.push(b/o),m.push(1-p/u)}}for(let p=0;p<u;p++)for(let v=0;v<o;v++){const b=v+l*p,y=v+l*(p+1),C=v+1+l*(p+1),E=v+1+l*p;h.push(b,y,E),h.push(y,C,E)}this.setIndex(h),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(S,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.widthSegments,e.heightSegments)}}class au extends Ut{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+o,Math.PI);let l=0;const f=[],d=new N,c=new N,h=[],g=[],S=[],m=[];for(let p=0;p<=n;p++){const v=[],b=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&u===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const E=C/t;d.x=-e*Math.cos(r+E*s)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(r+E*s)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),c.copy(d).normalize(),S.push(c.x,c.y,c.z),m.push(E+y,1-b),v.push(l++)}f.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const b=f[p][v+1],y=f[p][v],C=f[p+1][v],E=f[p+1][v+1];(p!==0||a>0)&&h.push(b,y,E),(p!==n-1||u<Math.PI)&&h.push(y,C,E)}this.setIndex(h),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(S,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ou extends Ut{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const u=[],l=[],f=[],d=[],c=new N,h=new N,g=new N;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let p=0;p<=r;p++){const v=p/r*s;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),l.push(h.x,h.y,h.z),c.x=e*Math.cos(v),c.y=e*Math.sin(v),g.subVectors(h,c).normalize(),f.push(g.x,g.y,g.z),d.push(p/r),d.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=r;m++){const p=(r+1)*S+m-1,v=(r+1)*(S-1)+m-1,b=(r+1)*(S-1)+m,y=(r+1)*S+m;u.push(p,v,y),u.push(v,b,y)}this.setIndex(u),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function er(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Il(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Il(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=er(i[t]);for(const r in n)e[r]=n[r]}return e}function Il(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function yf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Us={clone:er,merge:Wt};var Ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ef,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Af extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wf extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cf extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ls=new N,cs=new nr,Mn=new N;class cu extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ls,cs,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ls,cs,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ls,cs,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ls,cs,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new N,Ul=new Ue,Nl=new Ue;class on extends cu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,Nl),t.subVectors(Nl,Ul)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*n/l,r*=a.width/u,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wo extends cu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,u=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=-90,Xi=1;class Rf extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on($i,Xi,e,t);r.layers=this.layers,this.add(r);const s=new on($i,Xi,e,t);s.layers=this.layers,this.add(s);const a=new on($i,Xi,e,t);a.layers=this.layers,this.add(a);const o=new on($i,Xi,e,t);o.layers=this.layers,this.add(o);const u=new on($i,Xi,e,t);u.layers=this.layers,this.add(u);const l=new on($i,Xi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,u]=t;for(const l of t)this.remove(l);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,u,l,f]=this.children,d=e.getRenderTarget(),c=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,c,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pf extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Df{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Lf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Lf(){this._document.hidden===!1&&this.reset()}class uu{static{uu.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}}function Fl(i,e,t,n){const r=If(n);switch(t){case Xc:return i*e;case Uo:return i*e/r.components*r.byteLength;case No:return i*e/r.components*r.byteLength;case Mi:return i*e*2/r.components*r.byteLength;case Fo:return i*e*2/r.components*r.byteLength;case qc:return i*e*3/r.components*r.byteLength;case _n:return i*e*4/r.components*r.byteLength;case Oo:return i*e*4/r.components*r.byteLength;case ms:case gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _s:case xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:case Wa:return Math.max(i,16)*Math.max(e,8)/4;case ka:case Ha:return Math.max(i,8)*Math.max(e,8)/2;case $a:case Xa:case Ya:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qa:case Es:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fo:case ho:case po:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mo:case go:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ts:case _o:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function If(i){switch(i){case ln:case Gc:return{byteLength:1,components:1};case Mr:case Hc:case nn:return{byteLength:2,components:1};case Lo:case Io:return{byteLength:2,components:4};case Rn:case Do:case gn:return{byteLength:4,components:1};case Wc:case $c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);function du(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Uf(i){const e=new WeakMap;function t(o,u){const l=o.array,f=o.usage,d=l.byteLength,c=i.createBuffer();i.bindBuffer(u,c),i.bufferData(u,l,f),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:c,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,u,l){const f=u.array,d=u.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,f);else{d.sort((h,g)=>h.start-g.start);let c=0;for(let h=1;h<d.length;h++){const g=d[c],S=d[h];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++c,d[c]=S)}d.length=c+1;for(let h=0,g=d.length;h<g;h++){const S=d[h];i.bufferSubData(l,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);u&&(i.deleteBuffer(u.buffer),e.delete(o))}function a(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,u));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,u),l.version=o.version}}return{get:r,remove:s,update:a}}var Nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ff=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,th=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ih=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ah=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",fh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ph=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Th=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ah=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,wh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ch=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ph=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ih=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Oh=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Bh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$h=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,up=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,em=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,im=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,am=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Nf,alphahash_pars_fragment:Ff,alphamap_fragment:Of,alphamap_pars_fragment:Bf,alphatest_fragment:zf,alphatest_pars_fragment:Vf,aomap_fragment:kf,aomap_pars_fragment:Gf,batching_pars_vertex:Hf,batching_vertex:Wf,begin_vertex:$f,beginnormal_vertex:Xf,bsdfs:qf,iridescence_fragment:Yf,bumpmap_pars_fragment:jf,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:Jf,clipping_planes_vertex:Qf,color_fragment:eh,color_pars_fragment:th,color_pars_vertex:nh,color_vertex:ih,common:rh,cube_uv_reflection_fragment:sh,defaultnormal_vertex:ah,displacementmap_pars_vertex:oh,displacementmap_vertex:lh,emissivemap_fragment:ch,emissivemap_pars_fragment:uh,colorspace_fragment:dh,colorspace_pars_fragment:fh,envmap_fragment:hh,envmap_common_pars_fragment:ph,envmap_pars_fragment:mh,envmap_pars_vertex:gh,envmap_physical_pars_fragment:wh,envmap_vertex:_h,fog_vertex:xh,fog_pars_vertex:vh,fog_fragment:Sh,fog_pars_fragment:Mh,gradientmap_pars_fragment:bh,lightmap_pars_fragment:yh,lights_lambert_fragment:Eh,lights_lambert_pars_fragment:Th,lights_pars_begin:Ah,lights_toon_fragment:Ch,lights_toon_pars_fragment:Rh,lights_phong_fragment:Ph,lights_phong_pars_fragment:Dh,lights_physical_fragment:Lh,lights_physical_pars_fragment:Ih,lights_fragment_begin:Uh,lights_fragment_maps:Nh,lights_fragment_end:Fh,lightprobes_pars_fragment:Oh,logdepthbuf_fragment:Bh,logdepthbuf_pars_fragment:zh,logdepthbuf_pars_vertex:Vh,logdepthbuf_vertex:kh,map_fragment:Gh,map_pars_fragment:Hh,map_particle_fragment:Wh,map_particle_pars_fragment:$h,metalnessmap_fragment:Xh,metalnessmap_pars_fragment:qh,morphinstance_vertex:Yh,morphcolor_vertex:jh,morphnormal_vertex:Kh,morphtarget_pars_vertex:Zh,morphtarget_vertex:Jh,normal_fragment_begin:Qh,normal_fragment_maps:ep,normal_pars_fragment:tp,normal_pars_vertex:np,normal_vertex:ip,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:ap,clearcoat_pars_fragment:op,iridescence_pars_fragment:lp,opaque_fragment:cp,packing:up,premultiplied_alpha_fragment:dp,project_vertex:fp,dithering_fragment:hp,dithering_pars_fragment:pp,roughnessmap_fragment:mp,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:_p,shadowmap_pars_vertex:xp,shadowmap_vertex:vp,shadowmask_pars_fragment:Sp,skinbase_vertex:Mp,skinning_pars_vertex:bp,skinning_vertex:yp,skinnormal_vertex:Ep,specularmap_fragment:Tp,specularmap_pars_fragment:Ap,tonemapping_fragment:wp,tonemapping_pars_fragment:Cp,transmission_fragment:Rp,transmission_pars_fragment:Pp,uv_pars_fragment:Dp,uv_pars_vertex:Lp,uv_vertex:Ip,worldpos_vertex:Up,background_vert:Np,background_frag:Fp,backgroundCube_vert:Op,backgroundCube_frag:Bp,cube_vert:zp,cube_frag:Vp,depth_vert:kp,depth_frag:Gp,distance_vert:Hp,distance_frag:Wp,equirect_vert:$p,equirect_frag:Xp,linedashed_vert:qp,linedashed_frag:Yp,meshbasic_vert:jp,meshbasic_frag:Kp,meshlambert_vert:Zp,meshlambert_frag:Jp,meshmatcap_vert:Qp,meshmatcap_frag:em,meshnormal_vert:tm,meshnormal_frag:nm,meshphong_vert:im,meshphong_frag:rm,meshphysical_vert:sm,meshphysical_frag:am,meshtoon_vert:om,meshtoon_frag:lm,points_vert:cm,points_frag:um,shadow_vert:dm,shadow_frag:fm,sprite_vert:hm,sprite_frag:pm},me={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},yn={basic:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Wt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Wt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Wt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Wt([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Wt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Wt([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Wt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Wt([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Wt([me.common,me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Wt([me.lights,me.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};yn.physical={uniforms:Wt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const us={r:0,b:0,g:0},mm=new pt,fu=new Be;fu.set(-1,0,0,0,1,0,0,0,1);function gm(i,e,t,n,r,s){const a=new je(0);let o=r===!0?0:1,u,l,f=null,d=0,c=null;function h(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const y=v.backgroundBlurriness>0;b=e.get(b,y)}return b}function g(v){let b=!1;const y=h(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(v,b){const y=h(b);y&&(y.isCubeTexture||y.mapping===Fs)?(l===void 0&&(l=new dn(new Er(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:er(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(mm.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(fu),l.material.toneMapped=qe.getTransfer(y.colorSpace)!==it,(f!==y||d!==y.version||c!==i.toneMapping)&&(l.material.needsUpdate=!0,f=y,d=y.version,c=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new dn(new Os(2,2),new Vt({name:"BackgroundMaterial",uniforms:er(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=qe.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||c!==i.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,c=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function m(v,b){v.getRGB(us,lu(i)),t.buffers.color.setClear(us.r,us.g,us.b,b,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:S,dispose:p}}function _m(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null);let s=r,a=!1;function o(w,L,H,W,U){let B=!1;const V=d(w,W,H,L);s!==V&&(s=V,l(s.object)),B=h(w,W,H,U),B&&g(w,W,H,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(w,L,H,W),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function u(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function f(w){return i.deleteVertexArray(w)}function d(w,L,H,W){const U=W.wireframe===!0;let B=n[L.id];B===void 0&&(B={},n[L.id]=B);const V=w.isInstancedMesh===!0?w.id:0;let j=B[V];j===void 0&&(j={},B[V]=j);let ne=j[H.id];ne===void 0&&(ne={},j[H.id]=ne);let O=ne[U];return O===void 0&&(O=c(u()),ne[U]=O),O}function c(w){const L=[],H=[],W=[];for(let U=0;U<t;U++)L[U]=0,H[U]=0,W[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:W,object:w,attributes:{},index:null}}function h(w,L,H,W){const U=s.attributes,B=L.attributes;let V=0;const j=H.getAttributes();for(const ne in j)if(j[ne].location>=0){const Q=U[ne];let J=B[ne];if(J===void 0&&(ne==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),ne==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),Q===void 0||Q.attribute!==J||J&&Q.data!==J.data)return!0;V++}return s.attributesNum!==V||s.index!==W}function g(w,L,H,W){const U={},B=L.attributes;let V=0;const j=H.getAttributes();for(const ne in j)if(j[ne].location>=0){let Q=B[ne];Q===void 0&&(ne==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),ne==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor));const J={};J.attribute=Q,Q&&Q.data&&(J.data=Q.data),U[ne]=J,V++}s.attributes=U,s.attributesNum=V,s.index=W}function S(){const w=s.newAttributes;for(let L=0,H=w.length;L<H;L++)w[L]=0}function m(w){p(w,0)}function p(w,L){const H=s.newAttributes,W=s.enabledAttributes,U=s.attributeDivisors;H[w]=1,W[w]===0&&(i.enableVertexAttribArray(w),W[w]=1),U[w]!==L&&(i.vertexAttribDivisor(w,L),U[w]=L)}function v(){const w=s.newAttributes,L=s.enabledAttributes;for(let H=0,W=L.length;H<W;H++)L[H]!==w[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function b(w,L,H,W,U,B,V){V===!0?i.vertexAttribIPointer(w,L,H,U,B):i.vertexAttribPointer(w,L,H,W,U,B)}function y(w,L,H,W){S();const U=W.attributes,B=H.getAttributes(),V=L.defaultAttributeValues;for(const j in B){const ne=B[j];if(ne.location>=0){let O=U[j];if(O===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),O!==void 0){const Q=O.normalized,J=O.itemSize,ve=e.get(O);if(ve===void 0)continue;const Te=ve.buffer,he=ve.type,X=ve.bytesPerElement,te=he===i.INT||he===i.UNSIGNED_INT||O.gpuType===Do;if(O.isInterleavedBufferAttribute){const q=O.data,ge=q.stride,we=O.offset;if(q.isInstancedInterleavedBuffer){for(let Ae=0;Ae<ne.locationSize;Ae++)p(ne.location+Ae,q.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ae=0;Ae<ne.locationSize;Ae++)m(ne.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let Ae=0;Ae<ne.locationSize;Ae++)b(ne.location+Ae,J/ne.locationSize,he,Q,ge*X,(we+J/ne.locationSize*Ae)*X,te)}else{if(O.isInstancedBufferAttribute){for(let q=0;q<ne.locationSize;q++)p(ne.location+q,O.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let q=0;q<ne.locationSize;q++)m(ne.location+q);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let q=0;q<ne.locationSize;q++)b(ne.location+q,J/ne.locationSize,he,Q,J*X,J/ne.locationSize*q*X,te)}}else if(V!==void 0){const Q=V[j];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(ne.location,Q);break;case 3:i.vertexAttrib3fv(ne.location,Q);break;case 4:i.vertexAttrib4fv(ne.location,Q);break;default:i.vertexAttrib1fv(ne.location,Q)}}}}v()}function C(){A();for(const w in n){const L=n[w];for(const H in L){const W=L[H];for(const U in W){const B=W[U];for(const V in B)f(B[V].object),delete B[V];delete W[U]}}delete n[w]}}function E(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const H in L){const W=L[H];for(const U in W){const B=W[U];for(const V in B)f(B[V].object),delete B[V];delete W[U]}}delete n[w.id]}function P(w){for(const L in n){const H=n[L];for(const W in H){const U=H[W];if(U[w.id]===void 0)continue;const B=U[w.id];for(const V in B)f(B[V].object),delete B[V];delete U[w.id]}}}function x(w){for(const L in n){const H=n[L],W=w.isInstancedMesh===!0?w.id:0,U=H[W];if(U!==void 0){for(const B in U){const V=U[B];for(const j in V)f(V[j].object),delete V[j];delete U[B]}delete H[W],Object.keys(H).length===0&&delete n[L]}}}function A(){R(),a=!0,s!==r&&(s=r,l(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:m,disableUnusedAttributes:v}}function xm(i,e,t){let n;function r(u){n=u}function s(u,l){i.drawArrays(n,u,l),t.update(l,n,1)}function a(u,l,f){f!==0&&(i.drawArraysInstanced(n,u,l,f),t.update(l,n,f))}function o(u,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,l,0,f);let c=0;for(let h=0;h<f;h++)c+=l[h];t.update(c,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function vm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==_n&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const x=P===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ln&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==gn&&!x)}function u(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=u(l);f!==l&&(Ne("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const d=t.logarithmicDepthBuffer===!0,c=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&c===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:h,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:C,samples:E}}function Sm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new mi,o=new Be,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){const h=d.length!==0||c||n!==0||r;return r=c,n=d.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,c){t=f(d,c,0)},this.setState=function(d,c,h){const g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?f(null):l();else{const v=s?0:n,b=v*4;let y=p.clippingState||null;u.value=y,y=f(g,c,b,h);for(let C=0;C!==b;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,c,h,g){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=u.value,g!==!0||m===null){const p=h+S*4,v=c.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=h;b!==S;++b,y+=4)a.copy(d[b]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}u.value=m,u.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const ni=4,Ol=[.125,.215,.35,.446,.526,.582],_i=20,Mm=256,pr=new Wo,Bl=new je;let va=null,Sa=0,Ma=0,ba=!1;const bm=new N;class zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=bm}=s;va=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,r,u,o),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(va,Sa,Ma),this._renderer.xr.enabled=ba,e.scissorTest=!1,qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:nn,format:_n,colorSpace:As,depthBuffer:!1},r=Vl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ym(s)),this._blurMaterial=Tm(s,e,t),this._ggxMaterial=Em(s,e,t)}return r}_compileMaterial(e){const t=new dn(new Ut,e);this._renderer.compile(t,pr)}_sceneToCubeUV(e,t,n,r,s){const u=new on(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,c=d.autoClear,h=d.toneMapping;d.getClearColor(Bl),d.toneMapping=Cn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dn(new Er,new Go({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(Bl),p=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(u.up.set(0,l[b],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+f[b],s.y,s.z)):y===1?(u.up.set(0,0,l[b]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+f[b],s.z)):(u.up.set(0,l[b],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+f[b]));const C=this._cubeSize;qi(r,y*C,b>2?C:0,C,C),d.setRenderTarget(r),p&&d.render(S,u),d.render(e,u)}d.toneMapping=h,d.autoClear=c,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Si||e.mapping===Ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const u=this._cubeSize;qi(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,pr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const u=a.uniforms,l=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-f*f),c=0+l*1.25,h=d*c,{_lodMax:g}=this,S=this._sizeLods[n],m=3*S*(n>g-ni?n-g+ni:0),p=4*(this._cubeSize-S);u.envMap.value=e.texture,u.roughness.value=h,u.mipInt.value=g-t,qi(s,m,p,3*S,2*S),r.setRenderTarget(s),r.render(o,pr),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=g-n,qi(e,m,p,3*S,2*S),r.setRenderTarget(e),r.render(o,pr)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const u=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=l;const c=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*_i-1),S=s/g,m=isFinite(s)?1+Math.floor(f*S):_i;m>_i&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const p=[];let v=0;for(let P=0;P<_i;++P){const x=P/S,A=Math.exp(-x*x/2);p.push(A),P===0?v+=A:P<m&&(v+=2*A)}for(let P=0;P<p.length;P++)p[P]=p[P]/v;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=p,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:b}=this;c.dTheta.value=g,c.mipInt.value=b-n;const y=this._sizeLods[r],C=3*y*(r>b-ni?r-b+ni:0),E=4*(this._cubeSize-y);qi(t,C,E,3*y,2*y),u.setRenderTarget(t),u.render(d,pr)}}function ym(i){const e=[],t=[],n=[];let r=i;const s=i-ni+1+Ol.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let u=1/o;a>i-ni?u=Ol[a-i+ni-1]:a===0&&(u=0),t.push(u);const l=1/(o-2),f=-l,d=1+l,c=[f,f,d,f,d,d,f,f,d,d,f,d],h=6,g=6,S=3,m=2,p=1,v=new Float32Array(S*g*h),b=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let E=0;E<h;E++){const P=E%3*2/3-1,x=E>2?0:-1,A=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];v.set(A,S*g*E),b.set(c,m*g*E);const R=[E,E,E,E,E,E];y.set(R,p*g*E)}const C=new Ut;C.setAttribute("position",new un(v,S)),C.setAttribute("uv",new un(b,m)),C.setAttribute("faceIndex",new un(y,p)),n.push(new dn(C,null)),r>ni&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Vl(i,e,t){const n=new Yt(i,e,t);return n.texture.mapping=Fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Em(i,e,t){return new Vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Tm(i,e,t){const n=new Float32Array(_i),r=new N(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function kl(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Gl(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Bs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class hu extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new iu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Er(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:wn});s.uniforms.tEquirect.value=t;const a=new dn(r,s),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=zt),new Rf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Am(i){let e=new WeakMap,t=new WeakMap,n=null;function r(c,h=!1){return c==null?null:h?a(c):s(c)}function s(c){if(c&&c.isTexture){const h=c.mapping;if(h===Ws||h===$s)if(e.has(c)){const g=e.get(c).texture;return o(g,c.mapping)}else{const g=c.image;if(g&&g.height>0){const S=new hu(g.height);return S.fromEquirectangularTexture(i,c),e.set(c,S),c.addEventListener("dispose",l),o(S.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture){const h=c.mapping,g=h===Ws||h===$s,S=h===Si||h===Ji;if(g||S){let m=t.get(c);const p=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==p)return n===null&&(n=new zl(i)),m=g?n.fromEquirectangular(c,m):n.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,t.set(c,m),m.texture;if(m!==void 0)return m.texture;{const v=c.image;return g&&v&&v.height>0||S&&v&&u(v)?(n===null&&(n=new zl(i)),m=g?n.fromEquirectangular(c):n.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,t.set(c,m),c.addEventListener("dispose",f),m.texture):null}}}return c}function o(c,h){return h===Ws?c.mapping=Si:h===$s&&(c.mapping=Ji),c}function u(c){let h=0;const g=6;for(let S=0;S<g;S++)c[S]!==void 0&&h++;return h===g}function l(c){const h=c.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function f(c){const h=c.target;h.removeEventListener("dispose",f);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function wm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&So("WebGLRenderer: "+n+" extension not supported."),r}}}function Cm(i,e,t,n){const r={},s=new WeakMap;function a(d){const c=d.target;c.index!==null&&e.remove(c.index);for(const g in c.attributes)e.remove(c.attributes[g]);c.removeEventListener("dispose",a),delete r[c.id];const h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(d,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c}function u(d){const c=d.attributes;for(const h in c)e.update(c[h],i.ARRAY_BUFFER)}function l(d){const c=[],h=d.index,g=d.attributes.position;let S=0;if(g===void 0)return;if(h!==null){const v=h.array;S=h.version;for(let b=0,y=v.length;b<y;b+=3){const C=v[b+0],E=v[b+1],P=v[b+2];c.push(C,E,E,P,P,C)}}else{const v=g.array;S=g.version;for(let b=0,y=v.length/3-1;b<y;b+=3){const C=b+0,E=b+1,P=b+2;c.push(C,E,E,P,P,C)}}const m=new(g.count>=65535?Qc:Jc)(c,1);m.version=S;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function f(d){const c=s.get(d);if(c){const h=d.index;h!==null&&c.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:u,getWireframeAttribute:f}}function Rm(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function u(d,c){i.drawElements(n,c,s,d*a),t.update(c,n,1)}function l(d,c,h){h!==0&&(i.drawElementsInstanced(n,c,s,d*a,h),t.update(c,n,h))}function f(d,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,s,d,0,h);let S=0;for(let m=0;m<h;m++)S+=c[m];t.update(S,n,1)}this.setMode=r,this.setIndex=o,this.render=u,this.renderInstances=l,this.renderMultiDraw=f}function Pm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Dm(i,e,t){const n=new WeakMap,r=new At;function s(a,o,u){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let c=n.get(o);if(c===void 0||c.count!==d){let A=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",A)};c!==void 0&&c.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let b=0;h===!0&&(b=1),g===!0&&(b=2),S===!0&&(b=3);let y=o.attributes.position.count*b,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*C*4*d),P=new jc(E,y,C,d);P.type=gn,P.needsUpdate=!0;const x=b*4;for(let R=0;R<d;R++){const w=m[R],L=p[R],H=v[R],W=y*C*4*R;for(let U=0;U<w.count;U++){const B=U*x;h===!0&&(r.fromBufferAttribute(w,U),E[W+B+0]=r.x,E[W+B+1]=r.y,E[W+B+2]=r.z,E[W+B+3]=0),g===!0&&(r.fromBufferAttribute(L,U),E[W+B+4]=r.x,E[W+B+5]=r.y,E[W+B+6]=r.z,E[W+B+7]=0),S===!0&&(r.fromBufferAttribute(H,U),E[W+B+8]=r.x,E[W+B+9]=r.y,E[W+B+10]=r.z,E[W+B+11]=H.itemSize===4?r.w:1)}}c={count:d,texture:P,size:new Ue(y,C)},n.set(o,c),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let S=0;S<l.length;S++)h+=l[S];const g=o.morphTargetsRelative?1:1-h;u.getUniforms().setValue(i,"morphTargetBaseInfluence",g),u.getUniforms().setValue(i,"morphTargetInfluences",l)}u.getUniforms().setValue(i,"morphTargetsTexture",c.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:s}}function Lm(i,e,t,n,r){let s=new WeakMap;function a(l){const f=r.render.frame,d=l.geometry,c=e.get(l,d);if(s.get(c)!==f&&(e.update(c),s.set(c,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",u)===!1&&l.addEventListener("dispose",u),s.get(l)!==f&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==f&&(h.update(),s.set(h,f))}return c}function o(){s=new WeakMap}function u(l){const f=l.target;f.removeEventListener("dispose",u),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const Im={[Nc]:"LINEAR_TONE_MAPPING",[Fc]:"REINHARD_TONE_MAPPING",[Oc]:"CINEON_TONE_MAPPING",[Po]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[Vc]:"NEUTRAL_TONE_MAPPING",[Bc]:"CUSTOM_TONE_MAPPING"};function Um(i,e,t,n,r){const s=new Yt(e,t,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new Qi(e,t):void 0}),a=new Yt(e,t,{type:nn,depthBuffer:!1,stencilBuffer:!1}),o=new Ut;o.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new xt([0,2,0,0,2,0],2));const u=new Af({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new dn(o,u),f=new Wo(-1,1,1,-1,0,1);let d=null,c=null,h=!1,g,S=null,m=[],p=!1;this.setSize=function(v,b){s.setSize(v,b),a.setSize(v,b);for(let y=0;y<m.length;y++){const C=m[y];C.setSize&&C.setSize(v,b)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const b=s.width,y=s.height;for(let C=0;C<m.length;C++){const E=m[C];E.setSize&&E.setSize(b,y)}},this.begin=function(v,b){if(h||v.toneMapping===Cn&&m.length===0)return!1;if(S=b,b!==null){const y=b.width,C=b.height;(s.width!==y||s.height!==C)&&this.setSize(y,C)}return p===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=Cn,!0},this.hasRenderPass=function(){return p},this.end=function(v,b){v.toneMapping=g,h=!0;let y=s,C=a;for(let E=0;E<m.length;E++){const P=m[E];if(P.enabled!==!1&&(P.render(v,C,y,b),P.needsSwap!==!1)){const x=y;y=C,C=x}}if(d!==v.outputColorSpace||c!==v.toneMapping){d=v.outputColorSpace,c=v.toneMapping,u.defines={},qe.getTransfer(d)===it&&(u.defines.SRGB_TRANSFER="");const E=Im[c];E&&(u.defines[E]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(S),v.render(l,f),S=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),u.dispose()}}const pu=new kt,yo=new Qi(1,1),mu=new jc,gu=new Jd,_u=new iu,Hl=[],Wl=[],$l=new Float32Array(16),Xl=new Float32Array(9),ql=new Float32Array(4);function ir(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Hl[r];if(s===void 0&&(s=new Float32Array(r),Hl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zs(i,e){let t=Wl[e];t===void 0&&(t=new Int32Array(e),Wl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function zm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;ql.set(n),i.uniformMatrix2fv(this.addr,!1,ql),Dt(t,n)}}function Vm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Xl.set(n),i.uniformMatrix3fv(this.addr,!1,Xl),Dt(t,n)}}function km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;$l.set(n),i.uniformMatrix4fv(this.addr,!1,$l),Dt(t,n)}}function Gm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Xm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function Ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function Km(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(yo.compareFunction=t.isReversedDepthBuffer()?zo:Bo,s=yo):s=pu,t.setTexture2D(e||s,r)}function Zm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||gu,r)}function Jm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||_u,r)}function Qm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||mu,r)}function eg(i){switch(i){case 5126:return Nm;case 35664:return Fm;case 35665:return Om;case 35666:return Bm;case 35674:return zm;case 35675:return Vm;case 35676:return km;case 5124:case 35670:return Gm;case 35667:case 35671:return Hm;case 35668:case 35672:return Wm;case 35669:case 35673:return $m;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Qm}}function tg(i,e){i.uniform1fv(this.addr,e)}function ng(i,e){const t=ir(e,this.size,2);i.uniform2fv(this.addr,t)}function ig(i,e){const t=ir(e,this.size,3);i.uniform3fv(this.addr,t)}function rg(i,e){const t=ir(e,this.size,4);i.uniform4fv(this.addr,t)}function sg(i,e){const t=ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ag(i,e){const t=ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function og(i,e){const t=ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lg(i,e){i.uniform1iv(this.addr,e)}function cg(i,e){i.uniform2iv(this.addr,e)}function ug(i,e){i.uniform3iv(this.addr,e)}function dg(i,e){i.uniform4iv(this.addr,e)}function fg(i,e){i.uniform1uiv(this.addr,e)}function hg(i,e){i.uniform2uiv(this.addr,e)}function pg(i,e){i.uniform3uiv(this.addr,e)}function mg(i,e){i.uniform4uiv(this.addr,e)}function gg(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=yo:a=pu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function _g(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||gu,s[a])}function xg(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||_u,s[a])}function vg(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||mu,s[a])}function Sg(i){switch(i){case 5126:return tg;case 35664:return ng;case 35665:return ig;case 35666:return rg;case 35674:return sg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return hg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return vg}}class Mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eg(t.type)}}class bg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sg(t.type)}}class yg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function Yl(i,e){i.seq.push(e),i.map[e.id]=e}function Eg(i,e,t){const n=i.name,r=n.length;for(ya.lastIndex=0;;){const s=ya.exec(n),a=ya.lastIndex;let o=s[1];const u=s[2]==="]",l=s[3];if(u&&(o=o|0),l===void 0||l==="["&&a+2===r){Yl(t,l===void 0?new Mg(o,i,e):new bg(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new yg(o),Yl(t,d)),t=d}}}class Ss{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);Eg(o,u,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],u=n[o.id];u.needsUpdate!==!1&&o.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function jl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tg=37297;let Ag=0;function wg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Kl=new Be;function Cg(i){qe._getMatrix(Kl,qe.workingColorSpace,i);const e=`mat3( ${Kl.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case ws:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wg(i.getShaderSource(e),o)}else return s}function Rg(i,e){const t=Cg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Pg={[Nc]:"Linear",[Fc]:"Reinhard",[Oc]:"Cineon",[Po]:"ACESFilmic",[zc]:"AgX",[Vc]:"Neutral",[Bc]:"Custom"};function Dg(i,e){const t=Pg[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ds=new N;function Lg(){qe.getLuminanceCoefficients(ds);const i=ds.x.toFixed(4),e=ds.y.toFixed(4),t=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function Ug(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ng(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function vr(i){return i!==""}function Jl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ql(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(i){return i.replace(Fg,Bg)}const Og=new Map;function Bg(i,e){let t=Ge[e];if(t===void 0){const n=Og.get(e);if(n!==void 0)t=Ge[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Eo(t)}const zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(i){return i.replace(zg,Vg)}function Vg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const kg={[ps]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function Gg(i){return kg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hg={[Si]:"ENVMAP_TYPE_CUBE",[Ji]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE_UV"};function Wg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Hg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const $g={[Ji]:"ENVMAP_MODE_REFRACTION"};function Xg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$g[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qg={[Uc]:"ENVMAP_BLENDING_MULTIPLY",[Dd]:"ENVMAP_BLENDING_MIX",[Ld]:"ENVMAP_BLENDING_ADD"};function Yg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qg[i.combine]||"ENVMAP_BLENDING_NONE"}function jg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Kg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const u=Gg(t),l=Wg(t),f=Xg(t),d=Yg(t),c=jg(t),h=Ig(t),g=Ug(s),S=r.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(m=[tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Rg("linearToOutputTexel",t.outputColorSpace),Lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),a=Eo(a),a=Jl(a,t),a=Ql(a,t),o=Eo(o),o=Jl(o,t),o=Ql(o,t),a=ec(a),o=ec(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=v+m+a,y=v+p+o,C=jl(r,r.VERTEX_SHADER,b),E=jl(r,r.FRAGMENT_SHADER,y);r.attachShader(S,C),r.attachShader(S,E),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function P(w){if(i.debug.checkShaderErrors){const L=r.getProgramInfoLog(S)||"",H=r.getShaderInfoLog(C)||"",W=r.getShaderInfoLog(E)||"",U=L.trim(),B=H.trim(),V=W.trim();let j=!0,ne=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,C,E);else{const O=Zl(r,C,"vertex"),Q=Zl(r,E,"fragment");Ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+U+`
`+O+`
`+Q)}else U!==""?Ne("WebGLProgram: Program Info Log:",U):(B===""||V==="")&&(ne=!1);ne&&(w.diagnostics={runnable:j,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(C),r.deleteShader(E),x=new Ss(r,S),A=Ng(r,S)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(S,Tg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ag++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=E,this}let Zg=0;class Jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qg(e),t.set(e,n)),n}}class Qg{constructor(e){this.id=Zg++,this.code=e,this.usedTimes=0}}function e_(i){return i===Mi||i===Es||i===Ts}function t_(i,e,t,n,r,s){const a=new Kc,o=new Jg,u=new Set,l=[],f=new Map,d=n.logarithmicDepthBuffer;let c=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return u.add(x),x===0?"uv":`uv${x}`}function S(x,A,R,w,L,H){const W=w.fog,U=L.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||B,V),ne=j&&j.mapping===Fs?j.image.height:null,O=h[x.type];x.precision!==null&&(c=n.getMaxPrecision(x.precision),c!==x.precision&&Ne("WebGLProgram.getParameters:",x.precision,"not supported, using",c,"instead."));const Q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=Q!==void 0?Q.length:0;let ve=0;U.morphAttributes.position!==void 0&&(ve=1),U.morphAttributes.normal!==void 0&&(ve=2),U.morphAttributes.color!==void 0&&(ve=3);let Te,he,X,te;if(O){const ze=yn[O];Te=ze.vertexShader,he=ze.fragmentShader}else Te=x.vertexShader,he=x.fragmentShader,o.update(x),X=o.getVertexShaderID(x),te=o.getFragmentShaderID(x);const q=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),we=L.isInstancedMesh===!0,Ae=L.isBatchedMesh===!0,Je=!!x.map,Fe=!!x.matcap,Ke=!!j,tt=!!x.aoMap,Le=!!x.lightMap,dt=!!x.bumpMap,rt=!!x.normalMap,vt=!!x.displacementMap,I=!!x.emissiveMap,gt=!!x.metalnessMap,Xe=!!x.roughnessMap,ft=x.anisotropy>0,pe=x.clearcoat>0,St=x.dispersion>0,T=x.iridescence>0,_=x.sheen>0,z=x.transmission>0,Z=ft&&!!x.anisotropyMap,re=pe&&!!x.clearcoatMap,oe=pe&&!!x.clearcoatNormalMap,fe=pe&&!!x.clearcoatRoughnessMap,Y=T&&!!x.iridescenceMap,ee=T&&!!x.iridescenceThicknessMap,Se=_&&!!x.sheenColorMap,ye=_&&!!x.sheenRoughnessMap,ue=!!x.specularMap,le=!!x.specularColorMap,Oe=!!x.specularIntensityMap,ke=z&&!!x.transmissionMap,et=z&&!!x.thicknessMap,D=!!x.gradientMap,ce=!!x.alphaMap,K=x.alphaTest>0,Me=!!x.alphaHash,de=!!x.extensions;let ie=Cn;x.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ie=i.toneMapping);const Re={shaderID:O,shaderType:x.type,shaderName:x.name,vertexShader:Te,fragmentShader:he,defines:x.defines,customVertexShaderID:X,customFragmentShaderID:te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:c,batching:Ae,batchingColor:Ae&&L._colorsTexture!==null,instancing:we,instancingColor:we&&L.instanceColor!==null,instancingMorph:we&&L.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Je,matcap:Fe,envMap:Ke,envMapMode:Ke&&j.mapping,envMapCubeUVHeight:ne,aoMap:tt,lightMap:Le,bumpMap:dt,normalMap:rt,displacementMap:vt,emissiveMap:I,normalMapObjectSpace:rt&&x.normalMapType===Nd,normalMapTangentSpace:rt&&x.normalMapType===sl,packedNormalMap:rt&&x.normalMapType===sl&&e_(x.normalMap.format),metalnessMap:gt,roughnessMap:Xe,anisotropy:ft,anisotropyMap:Z,clearcoat:pe,clearcoatMap:re,clearcoatNormalMap:oe,clearcoatRoughnessMap:fe,dispersion:St,iridescence:T,iridescenceMap:Y,iridescenceThicknessMap:ee,sheen:_,sheenColorMap:Se,sheenRoughnessMap:ye,specularMap:ue,specularColorMap:le,specularIntensityMap:Oe,transmission:z,transmissionMap:ke,thicknessMap:et,gradientMap:D,opaque:x.transparent===!1&&x.blending===ji&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:K,alphaHash:Me,combine:x.combine,mapUv:Je&&g(x.map.channel),aoMapUv:tt&&g(x.aoMap.channel),lightMapUv:Le&&g(x.lightMap.channel),bumpMapUv:dt&&g(x.bumpMap.channel),normalMapUv:rt&&g(x.normalMap.channel),displacementMapUv:vt&&g(x.displacementMap.channel),emissiveMapUv:I&&g(x.emissiveMap.channel),metalnessMapUv:gt&&g(x.metalnessMap.channel),roughnessMapUv:Xe&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:re&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(x.sheenRoughnessMap.channel),specularMapUv:ue&&g(x.specularMap.channel),specularColorMapUv:le&&g(x.specularColorMap.channel),specularIntensityMapUv:Oe&&g(x.specularIntensityMap.channel),transmissionMapUv:ke&&g(x.transmissionMap.channel),thicknessMapUv:et&&g(x.thicknessMap.channel),alphaMapUv:ce&&g(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(rt||ft),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Je||ce),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:L.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Je&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:I&&x.emissiveMap.isVideoTexture===!0&&qe.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===On,flipSided:x.side===qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:de&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Re.vertexUv1s=u.has(1),Re.vertexUv2s=u.has(2),Re.vertexUv3s=u.has(3),u.clear(),Re}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(A,x),v(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function b(x){const A=h[x.type];let R;if(A){const w=yn[A];R=Us.clone(w.uniforms)}else R=x.uniforms;return R}function y(x,A){let R=f.get(A);return R!==void 0?++R.usedTimes:(R=new Kg(i,A,x,r),l.push(R),f.set(A,R)),R}function C(x){if(--x.usedTimes===0){const A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),f.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function P(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:b,acquireProgram:y,releaseProgram:C,releaseShaderCache:E,programs:l,dispose:P}}function n_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,u){i.get(a)[o]=u}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function i_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function nc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ic(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(c){let h=0;return c.isInstancedMesh&&(h+=2),c.isSkinnedMesh&&(h+=1),h}function o(c,h,g,S,m,p){let v=i[e];return v===void 0?(v={id:c.id,object:c,geometry:h,material:g,materialVariant:a(c),groupOrder:S,renderOrder:c.renderOrder,z:m,group:p},i[e]=v):(v.id=c.id,v.object=c,v.geometry=h,v.material=g,v.materialVariant=a(c),v.groupOrder=S,v.renderOrder=c.renderOrder,v.z=m,v.group=p),e++,v}function u(c,h,g,S,m,p){const v=o(c,h,g,S,m,p);g.transmission>0?n.push(v):g.transparent===!0?r.push(v):t.push(v)}function l(c,h,g,S,m,p){const v=o(c,h,g,S,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function f(c,h){t.length>1&&t.sort(c||i_),n.length>1&&n.sort(h||nc),r.length>1&&r.sort(h||nc)}function d(){for(let c=e,h=i.length;c<h;c++){const g=i[c];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:u,unshift:l,finish:d,sort:f}}function r_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ic,i.set(n,[a])):r>=s.length?(a=new ic,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function s_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new je};break;case"SpotLight":t={position:new N,direction:new N,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function a_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let o_=0;function l_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function c_(i){const e=new s_,t=a_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,s=new pt,a=new pt;function o(l){let f=0,d=0,c=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let h=0,g=0,S=0,m=0,p=0,v=0,b=0,y=0,C=0,E=0,P=0;l.sort(l_);for(let A=0,R=l.length;A<R;A++){const w=l[A],L=w.color,H=w.intensity,W=w.distance;let U=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Mi?U=w.shadow.map.texture:U=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)f+=L.r*H,d+=L.g*H,c+=L.b*H;else if(w.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(w.sh.coefficients[B],H);P++}else if(w.isDirectionalLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const V=w.shadow,j=t.get(w);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.directionalShadow[h]=j,n.directionalShadowMap[h]=U,n.directionalShadowMatrix[h]=w.shadow.matrix,v++}n.directional[h]=B,h++}else if(w.isSpotLight){const B=e.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(L).multiplyScalar(H),B.distance=W,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,n.spot[S]=B;const V=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,V.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[S]=V.matrix,w.castShadow){const j=t.get(w);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=U,y++}S++}else if(w.isRectAreaLight){const B=e.get(w);B.color.copy(L).multiplyScalar(H),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=B,m++}else if(w.isPointLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){const V=w.shadow,j=t.get(w);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=w.shadow.matrix,b++}n.point[g]=B,g++}else if(w.isHemisphereLight){const B=e.get(w);B.skyColor.copy(w.color).multiplyScalar(H),B.groundColor.copy(w.groundColor).multiplyScalar(H),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=c;const x=n.hash;(x.directionalLength!==h||x.pointLength!==g||x.spotLength!==S||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==v||x.numPointShadows!==b||x.numSpotShadows!==y||x.numSpotMaps!==C||x.numLightProbes!==P)&&(n.directional.length=h,n.spot.length=S,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,x.directionalLength=h,x.pointLength=g,x.spotLength=S,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=v,x.numPointShadows=b,x.numSpotShadows=y,x.numSpotMaps=C,x.numLightProbes=P,n.version=o_++)}function u(l,f){let d=0,c=0,h=0,g=0,S=0;const m=f.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const b=l[p];if(b.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(b.isSpotLight){const y=n.spot[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const y=n.point[c];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),c++}else if(b.isHemisphereLight){const y=n.hemi[S];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:o,setupView:u,state:n}}function rc(i){const e=new c_(i),t=[],n=[],r=[];function s(c){d.camera=c,t.length=0,n.length=0,r.length=0}function a(c){t.push(c)}function o(c){n.push(c)}function u(c){r.push(c)}function l(){e.setup(t)}function f(c){e.setupView(t,c)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:u}}function u_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new rc(i),e.set(r,[o])):s>=a.length?(o=new rc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const d_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,h_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],p_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],sc=new pt,mr=new N,Ea=new N;function m_(i,e,t){let n=new nu;const r=new Ue,s=new Ue,a=new At,o=new wf,u=new Cf,l={},f=t.maxTextureSize,d={[si]:qt,[qt]:si,[On]:On},c=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:d_,fragmentShader:f_}),h=c.clone();h.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new dn(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ps;let p=this.type;this.render=function(E,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===fd&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ps);const A=i.getRenderTarget(),R=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),L=i.state;L.setBlending(wn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const H=p!==this.type;H&&P.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(U=>U.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,U=E.length;W<U;W++){const B=E[W],V=B.shadow;if(V===void 0){Ne("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const j=V.getFrameExtents();r.multiply(j),s.copy(V.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/j.x),r.x=s.x*j.x,V.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/j.y),r.y=s.y*j.y,V.mapSize.y=s.y));const ne=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ne,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===xr){if(B.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Yt(r.x,r.y,{format:Mi,type:nn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new Qi(r.x,r.y,gn),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=Gn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=It,V.map.depthTexture.magFilter=It}else B.isPointLight?(V.map=new hu(r.x),V.map.depthTexture=new bf(r.x,Rn)):(V.map=new Yt(r.x,r.y),V.map.depthTexture=new Qi(r.x,r.y,Rn)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=Gn,this.type===ps?(V.map.depthTexture.compareFunction=ne?zo:Bo,V.map.depthTexture.minFilter=zt,V.map.depthTexture.magFilter=zt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=It,V.map.depthTexture.magFilter=It);V.camera.updateProjectionMatrix()}const O=V.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<O;Q++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(V.map),i.clear());const J=V.getViewport(Q);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),L.viewport(a)}if(B.isPointLight){const J=V.camera,ve=V.matrix,Te=B.distance||J.far;Te!==J.far&&(J.far=Te,J.updateProjectionMatrix()),mr.setFromMatrixPosition(B.matrixWorld),J.position.copy(mr),Ea.copy(J.position),Ea.add(h_[Q]),J.up.copy(p_[Q]),J.lookAt(Ea),J.updateMatrixWorld(),ve.makeTranslation(-mr.x,-mr.y,-mr.z),sc.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V._frustum.setFromProjectionMatrix(sc,J.coordinateSystem,J.reversedDepth)}else V.updateMatrices(B);n=V.getFrustum(),y(P,x,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===xr&&v(V,x),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,R,w)};function v(E,P){const x=e.update(S);c.defines.VSM_SAMPLES!==E.blurSamples&&(c.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,c.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yt(r.x,r.y,{format:Mi,type:nn})),c.uniforms.shadow_pass.value=E.map.depthTexture,c.uniforms.resolution.value=E.mapSize,c.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,x,c,S,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,x,h,S,null)}function b(E,P,x,A){let R=null;const w=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)R=w;else if(R=x.isPointLight===!0?u:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const L=R.uuid,H=P.uuid;let W=l[L];W===void 0&&(W={},l[L]=W);let U=W[H];U===void 0&&(U=R.clone(),W[H]=U,P.addEventListener("dispose",C)),R=U}if(R.visible=P.visible,R.wireframe=P.wireframe,A===xr?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:d[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const L=i.properties.get(R);L.light=x}return R}function y(E,P,x,A,R){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===xr)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const H=e.update(E),W=E.material;if(Array.isArray(W)){const U=H.groups;for(let B=0,V=U.length;B<V;B++){const j=U[B],ne=W[j.materialIndex];if(ne&&ne.visible){const O=b(E,ne,A,R);E.onBeforeShadow(i,E,P,x,H,O,j),i.renderBufferDirect(x,null,H,O,E,j),E.onAfterShadow(i,E,P,x,H,O,j)}}}else if(W.visible){const U=b(E,W,A,R);E.onBeforeShadow(i,E,P,x,H,U,null),i.renderBufferDirect(x,null,H,U,E,null),E.onAfterShadow(i,E,P,x,H,U,null)}}const L=E.children;for(let H=0,W=L.length;H<W;H++)y(L[H],P,x,A,R)}function C(E){E.target.removeEventListener("dispose",C);for(const x in l){const A=l[x],R=E.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function g_(i,e){function t(){let D=!1;const ce=new At;let K=null;const Me=new At(0,0,0,0);return{setMask:function(de){K!==de&&!D&&(i.colorMask(de,de,de,de),K=de)},setLocked:function(de){D=de},setClear:function(de,ie,Re,ze,bt){bt===!0&&(de*=ze,ie*=ze,Re*=ze),ce.set(de,ie,Re,ze),Me.equals(ce)===!1&&(i.clearColor(de,ie,Re,ze),Me.copy(ce))},reset:function(){D=!1,K=null,Me.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,K=null,Me=null,de=null;return{setReversed:function(ie){if(ce!==ie){const Re=e.get("EXT_clip_control");ie?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=ie;const ze=de;de=null,this.setClear(ze)}},getReversed:function(){return ce},setTest:function(ie){ie?q(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(ie){K!==ie&&!D&&(i.depthMask(ie),K=ie)},setFunc:function(ie){if(ce&&(ie=$d[ie]),Me!==ie){switch(ie){case La:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Ua:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case Na:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=ie}},setLocked:function(ie){D=ie},setClear:function(ie){de!==ie&&(de=ie,ce&&(ie=1-ie),i.clearDepth(ie))},reset:function(){D=!1,K=null,Me=null,de=null,ce=!1}}}function r(){let D=!1,ce=null,K=null,Me=null,de=null,ie=null,Re=null,ze=null,bt=null;return{setTest:function(st){D||(st?q(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(st){ce!==st&&!D&&(i.stencilMask(st),ce=st)},setFunc:function(st,Pn,vn){(K!==st||Me!==Pn||de!==vn)&&(i.stencilFunc(st,Pn,vn),K=st,Me=Pn,de=vn)},setOp:function(st,Pn,vn){(ie!==st||Re!==Pn||ze!==vn)&&(i.stencilOp(st,Pn,vn),ie=st,Re=Pn,ze=vn)},setLocked:function(st){D=st},setClear:function(st){bt!==st&&(i.clearStencil(st),bt=st)},reset:function(){D=!1,ce=null,K=null,Me=null,de=null,ie=null,Re=null,ze=null,bt=null}}}const s=new t,a=new n,o=new r,u=new WeakMap,l=new WeakMap;let f={},d={},c={},h=new WeakMap,g=[],S=null,m=!1,p=null,v=null,b=null,y=null,C=null,E=null,P=null,x=new je(0,0,0),A=0,R=!1,w=null,L=null,H=null,W=null,U=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ne)[1]),V=j>=1):ne.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),V=j>=2);let O=null,Q={};const J=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Te=new At().fromArray(J),he=new At().fromArray(ve);function X(D,ce,K,Me){const de=new Uint8Array(4),ie=i.createTexture();i.bindTexture(D,ie),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<K;Re++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ce+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return ie}const te={};te[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(i.DEPTH_TEST),a.setFunc(Zi),dt(!1),rt(nl),q(i.CULL_FACE),tt(wn);function q(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function ge(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function we(D,ce){return c[D]!==ce?(i.bindFramebuffer(D,ce),c[D]=ce,D===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ae(D,ce){let K=g,Me=!1;if(D){K=h.get(ce),K===void 0&&(K=[],h.set(ce,K));const de=D.textures;if(K.length!==de.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Re=de.length;ie<Re;ie++)K[ie]=i.COLOR_ATTACHMENT0+ie;K.length=de.length,Me=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,Me=!0);Me&&i.drawBuffers(K)}function Je(D){return S!==D?(i.useProgram(D),S=D,!0):!1}const Fe={[gi]:i.FUNC_ADD,[pd]:i.FUNC_SUBTRACT,[md]:i.FUNC_REVERSE_SUBTRACT};Fe[gd]=i.MIN,Fe[_d]=i.MAX;const Ke={[xd]:i.ZERO,[vd]:i.ONE,[Sd]:i.SRC_COLOR,[Pa]:i.SRC_ALPHA,[Ad]:i.SRC_ALPHA_SATURATE,[Ed]:i.DST_COLOR,[bd]:i.DST_ALPHA,[Md]:i.ONE_MINUS_SRC_COLOR,[Da]:i.ONE_MINUS_SRC_ALPHA,[Td]:i.ONE_MINUS_DST_COLOR,[yd]:i.ONE_MINUS_DST_ALPHA,[wd]:i.CONSTANT_COLOR,[Cd]:i.ONE_MINUS_CONSTANT_COLOR,[Rd]:i.CONSTANT_ALPHA,[Pd]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(D,ce,K,Me,de,ie,Re,ze,bt,st){if(D===wn){m===!0&&(ge(i.BLEND),m=!1);return}if(m===!1&&(q(i.BLEND),m=!0),D!==hd){if(D!==p||st!==R){if((v!==gi||C!==gi)&&(i.blendEquation(i.FUNC_ADD),v=gi,C=gi),st)switch(D){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ra:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",D);break}else switch(D){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ra:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case il:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",D);break}b=null,y=null,E=null,P=null,x.set(0,0,0),A=0,p=D,R=st}return}de=de||ce,ie=ie||K,Re=Re||Me,(ce!==v||de!==C)&&(i.blendEquationSeparate(Fe[ce],Fe[de]),v=ce,C=de),(K!==b||Me!==y||ie!==E||Re!==P)&&(i.blendFuncSeparate(Ke[K],Ke[Me],Ke[ie],Ke[Re]),b=K,y=Me,E=ie,P=Re),(ze.equals(x)===!1||bt!==A)&&(i.blendColor(ze.r,ze.g,ze.b,bt),x.copy(ze),A=bt),p=D,R=!1}function Le(D,ce){D.side===On?ge(i.CULL_FACE):q(i.CULL_FACE);let K=D.side===qt;ce&&(K=!K),dt(K),D.blending===ji&&D.transparent===!1?tt(wn):tt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const Me=D.stencilWrite;o.setTest(Me),Me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),I(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(D){w!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),w=D)}function rt(D){D!==ud?(q(i.CULL_FACE),D!==L&&(D===nl?i.cullFace(i.BACK):D===dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),L=D}function vt(D){D!==H&&(V&&i.lineWidth(D),H=D)}function I(D,ce,K){D?(q(i.POLYGON_OFFSET_FILL),(W!==ce||U!==K)&&(W=ce,U=K,a.getReversed()&&(ce=-ce),i.polygonOffset(ce,K))):ge(i.POLYGON_OFFSET_FILL)}function gt(D){D?q(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function Xe(D){D===void 0&&(D=i.TEXTURE0+B-1),O!==D&&(i.activeTexture(D),O=D)}function ft(D,ce,K){K===void 0&&(O===null?K=i.TEXTURE0+B-1:K=O);let Me=Q[K];Me===void 0&&(Me={type:void 0,texture:void 0},Q[K]=Me),(Me.type!==D||Me.texture!==ce)&&(O!==K&&(i.activeTexture(K),O=K),i.bindTexture(D,ce||te[D]),Me.type=D,Me.texture=ce)}function pe(){const D=Q[O];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function St(){try{i.compressedTexImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function _(){try{i.texSubImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function z(){try{i.texSubImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function oe(){try{i.texStorage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function fe(){try{i.texStorage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function Y(){try{i.texImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function ee(){try{i.texImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function Se(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function ye(D,ce){d[D]!==ce&&(i.pixelStorei(D,ce),d[D]=ce)}function ue(D){Te.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Te.copy(D))}function le(D){he.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),he.copy(D))}function Oe(D,ce){let K=l.get(ce);K===void 0&&(K=new WeakMap,l.set(ce,K));let Me=K.get(D);Me===void 0&&(Me=i.getUniformBlockIndex(ce,D.name),K.set(D,Me))}function ke(D,ce){const Me=l.get(ce).get(D);u.get(ce)!==Me&&(i.uniformBlockBinding(ce,Me,D.__bindingPointIndex),u.set(ce,Me))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},d={},O=null,Q={},c={},h=new WeakMap,g=[],S=null,m=!1,p=null,v=null,b=null,y=null,C=null,E=null,P=null,x=new je(0,0,0),A=0,R=!1,w=null,L=null,H=null,W=null,U=null,Te.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:q,disable:ge,bindFramebuffer:we,drawBuffers:Ae,useProgram:Je,setBlending:tt,setMaterial:Le,setFlipSided:dt,setCullFace:rt,setLineWidth:vt,setPolygonOffset:I,setScissorTest:gt,activeTexture:Xe,bindTexture:ft,unbindTexture:pe,compressedTexImage2D:St,compressedTexImage3D:T,texImage2D:Y,texImage3D:ee,pixelStorei:ye,getParameter:Se,updateUBOMapping:Oe,uniformBlockBinding:ke,texStorage2D:oe,texStorage3D:fe,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:Z,compressedTexSubImage3D:re,scissor:ue,viewport:le,reset:et}}function __(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,f=new WeakMap,d=new Set;let c;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,_){return g?new OffscreenCanvas(T,_):Rs("canvas")}function m(T,_,z){let Z=1;const re=St(T);if((re.width>z||re.height>z)&&(Z=z/Math.max(re.width,re.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const oe=Math.floor(Z*re.width),fe=Math.floor(Z*re.height);c===void 0&&(c=S(oe,fe));const Y=_?S(oe,fe):c;return Y.width=oe,Y.height=fe,Y.getContext("2d").drawImage(T,0,0,oe,fe),Ne("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+oe+"x"+fe+")."),Y}else return"data"in T&&Ne("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),T;return T}function p(T){return T.generateMipmaps}function v(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,_,z,Z,re,oe=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let fe;Z&&(fe=e.get("EXT_texture_norm16"),fe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8),z===i.UNSIGNED_SHORT&&fe&&(Y=fe.R16_EXT),z===i.SHORT&&fe&&(Y=fe.R16_SNORM_EXT)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),_===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8),z===i.UNSIGNED_SHORT&&fe&&(Y=fe.RG16_EXT),z===i.SHORT&&fe&&(Y=fe.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_SHORT&&fe&&(Y=fe.RGB16_EXT),z===i.SHORT&&fe&&(Y=fe.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){const ee=oe?ws:qe.getTransfer(re);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=ee===it?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&fe&&(Y=fe.RGBA16_EXT),z===i.SHORT&&fe&&(Y=fe.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function C(T,_){let z;return T?_===null||_===Rn||_===br?z=i.DEPTH24_STENCIL8:_===gn?z=i.DEPTH32F_STENCIL8:_===Mr&&(z=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Rn||_===br?z=i.DEPTH_COMPONENT24:_===gn?z=i.DEPTH_COMPONENT32F:_===Mr&&(z=i.DEPTH_COMPONENT16),z}function E(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==It&&T.minFilter!==zt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function P(T){const _=T.target;_.removeEventListener("dispose",P),A(_),_.isVideoTexture&&f.delete(_),_.isHTMLTexture&&d.delete(_)}function x(T){const _=T.target;_.removeEventListener("dispose",x),w(_)}function A(T){const _=n.get(T);if(_.__webglInit===void 0)return;const z=T.source,Z=h.get(z);if(Z){const re=Z[_.__cacheKey];re.usedTimes--,re.usedTimes===0&&R(T),Object.keys(Z).length===0&&h.delete(z)}n.remove(T)}function R(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const z=T.source,Z=h.get(z);delete Z[_.__cacheKey],a.memory.textures--}function w(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let re=0;re<_.__webglFramebuffer[Z].length;re++)i.deleteFramebuffer(_.__webglFramebuffer[Z][re]);else i.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=T.textures;for(let Z=0,re=z.length;Z<re;Z++){const oe=n.get(z[Z]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(z[Z])}n.remove(T)}let L=0;function H(){L=0}function W(){return L}function U(T){L=T}function B(){const T=L;return T>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),L+=1,T}function V(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function j(T,_){const z=n.get(T);if(T.isVideoTexture&&ft(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){const Z=T.image;if(Z===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(z,T,_);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function ne(T,_){const z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ge(z,T,_);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function O(T,_){const z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ge(z,T,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function Q(T,_){const z=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&z.__version!==T.version){we(z,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}const J={[za]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},ve={[It]:i.NEAREST,[Id]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[Xs]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},Te={[Fd]:i.NEVER,[kd]:i.ALWAYS,[Od]:i.LESS,[Bo]:i.LEQUAL,[Bd]:i.EQUAL,[zo]:i.GEQUAL,[zd]:i.GREATER,[Vd]:i.NOTEQUAL};function he(T,_){if(_.type===gn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zt||_.magFilter===Xs||_.magFilter===Lr||_.magFilter===xi||_.minFilter===zt||_.minFilter===Xs||_.minFilter===Lr||_.minFilter===xi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,J[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,J[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,J[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ve[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===It||_.minFilter!==Lr&&_.minFilter!==xi||_.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function X(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",P));const Z=_.source;let re=h.get(Z);re===void 0&&(re={},h.set(Z,re));const oe=V(_);if(oe!==T.__cacheKey){re[oe]===void 0&&(re[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),re[oe].usedTimes++;const fe=re[T.__cacheKey];fe!==void 0&&(re[T.__cacheKey].usedTimes--,fe.usedTimes===0&&R(_)),T.__cacheKey=oe,T.__webglTexture=re[oe].texture}return z}function te(T,_,z){return Math.floor(Math.floor(T/z)/_)}function q(T,_,z,Z){const oe=T.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,Z,_.data);else{oe.sort((ye,ue)=>ye.start-ue.start);let fe=0;for(let ye=1;ye<oe.length;ye++){const ue=oe[fe],le=oe[ye],Oe=ue.start+ue.count,ke=te(le.start,_.width,4),et=te(ue.start,_.width,4);le.start<=Oe+1&&ke===et&&te(le.start+le.count-1,_.width,4)===ke?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++fe,oe[fe]=le)}oe.length=fe+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ye=0,ue=oe.length;ye<ue;ye++){const le=oe[ye],Oe=Math.floor(le.start/4),ke=Math.ceil(le.count/4),et=Oe%_.width,D=Math.floor(Oe/_.width),ce=ke,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,et),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,et,D,ce,K,z,Z,_.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function ge(T,_,z){let Z=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=i.TEXTURE_3D);const re=X(T,_),oe=_.source;t.bindTexture(Z,T.__webglTexture,i.TEXTURE0+z);const fe=n.get(oe);if(oe.version!==fe.__version||re===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const K=qe.getPrimaries(qe.workingColorSpace),Me=_.colorSpace===ti?null:qe.getPrimaries(_.colorSpace),de=_.colorSpace===ti||K===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ee=m(_.image,!1,r.maxTextureSize);ee=pe(_,ee);const Se=s.convert(_.format,_.colorSpace),ye=s.convert(_.type);let ue=y(_.internalFormat,Se,ye,_.normalized,_.colorSpace,_.isVideoTexture);he(Z,_);let le;const Oe=_.mipmaps,ke=_.isVideoTexture!==!0,et=fe.__version===void 0||re===!0,D=oe.dataReady,ce=E(_,ee);if(_.isDepthTexture)ue=C(_.format===vi,_.type),et&&(ke?t.texStorage2D(i.TEXTURE_2D,1,ue,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ue,ee.width,ee.height,0,Se,ye,null));else if(_.isDataTexture)if(Oe.length>0){ke&&et&&t.texStorage2D(i.TEXTURE_2D,ce,ue,Oe[0].width,Oe[0].height);for(let K=0,Me=Oe.length;K<Me;K++)le=Oe[K],ke?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,le.width,le.height,Se,ye,le.data):t.texImage2D(i.TEXTURE_2D,K,ue,le.width,le.height,0,Se,ye,le.data);_.generateMipmaps=!1}else ke?(et&&t.texStorage2D(i.TEXTURE_2D,ce,ue,ee.width,ee.height),D&&q(_,ee,Se,ye)):t.texImage2D(i.TEXTURE_2D,0,ue,ee.width,ee.height,0,Se,ye,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ke&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ue,Oe[0].width,Oe[0].height,ee.depth);for(let K=0,Me=Oe.length;K<Me;K++)if(le=Oe[K],_.format!==_n)if(Se!==null)if(ke){if(D)if(_.layerUpdates.size>0){const de=Fl(le.width,le.height,_.format,_.type);for(const ie of _.layerUpdates){const Re=le.data.subarray(ie*de/le.data.BYTES_PER_ELEMENT,(ie+1)*de/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ie,le.width,le.height,1,Se,Re)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,le.width,le.height,ee.depth,Se,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ue,le.width,le.height,ee.depth,0,le.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,le.width,le.height,ee.depth,Se,ye,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,ue,le.width,le.height,ee.depth,0,Se,ye,le.data)}else{ke&&et&&t.texStorage2D(i.TEXTURE_2D,ce,ue,Oe[0].width,Oe[0].height);for(let K=0,Me=Oe.length;K<Me;K++)le=Oe[K],_.format!==_n?Se!==null?ke?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,le.width,le.height,Se,le.data):t.compressedTexImage2D(i.TEXTURE_2D,K,ue,le.width,le.height,0,le.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,le.width,le.height,Se,ye,le.data):t.texImage2D(i.TEXTURE_2D,K,ue,le.width,le.height,0,Se,ye,le.data)}else if(_.isDataArrayTexture)if(ke){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ue,ee.width,ee.height,ee.depth),D)if(_.layerUpdates.size>0){const K=Fl(ee.width,ee.height,_.format,_.type);for(const Me of _.layerUpdates){const de=ee.data.subarray(Me*K/ee.data.BYTES_PER_ELEMENT,(Me+1)*K/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Me,ee.width,ee.height,1,Se,ye,de)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Se,ye,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,ee.width,ee.height,ee.depth,0,Se,ye,ee.data);else if(_.isData3DTexture)ke?(et&&t.texStorage3D(i.TEXTURE_3D,ce,ue,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Se,ye,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ue,ee.width,ee.height,ee.depth,0,Se,ye,ee.data);else if(_.isFramebufferTexture){if(et)if(ke)t.texStorage2D(i.TEXTURE_2D,ce,ue,ee.width,ee.height);else{let K=ee.width,Me=ee.height;for(let de=0;de<ce;de++)t.texImage2D(i.TEXTURE_2D,de,ue,K,Me,0,Se,ye,null),K>>=1,Me>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),ee.parentNode!==K){K.appendChild(ee),d.add(_),K.onpaint=ze=>{const bt=ze.changedElements;for(const st of d)bt.includes(st.image)&&(st.needsUpdate=!0)},K.requestPaint();return}const Me=0,de=i.RGBA,ie=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Me,de,ie,Re,ee),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(ke&&et){const K=St(Oe[0]);t.texStorage2D(i.TEXTURE_2D,ce,ue,K.width,K.height)}for(let K=0,Me=Oe.length;K<Me;K++)le=Oe[K],ke?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Se,ye,le):t.texImage2D(i.TEXTURE_2D,K,ue,Se,ye,le);_.generateMipmaps=!1}else if(ke){if(et){const K=St(ee);t.texStorage2D(i.TEXTURE_2D,ce,ue,K.width,K.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,ye,ee)}else t.texImage2D(i.TEXTURE_2D,0,ue,Se,ye,ee);p(_)&&v(Z),fe.__version=oe.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function we(T,_,z){if(_.image.length!==6)return;const Z=X(T,_),re=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);const oe=n.get(re);if(re.version!==oe.__version||Z===!0){t.activeTexture(i.TEXTURE0+z);const fe=qe.getPrimaries(qe.workingColorSpace),Y=_.colorSpace===ti?null:qe.getPrimaries(_.colorSpace),ee=_.colorSpace===ti||fe===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const Se=_.isCompressedTexture||_.image[0].isCompressedTexture,ye=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let ie=0;ie<6;ie++)!Se&&!ye?ue[ie]=m(_.image[ie],!0,r.maxCubemapSize):ue[ie]=ye?_.image[ie].image:_.image[ie],ue[ie]=pe(_,ue[ie]);const le=ue[0],Oe=s.convert(_.format,_.colorSpace),ke=s.convert(_.type),et=y(_.internalFormat,Oe,ke,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,ce=oe.__version===void 0||Z===!0,K=re.dataReady;let Me=E(_,le);he(i.TEXTURE_CUBE_MAP,_);let de;if(Se){D&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,et,le.width,le.height);for(let ie=0;ie<6;ie++){de=ue[ie].mipmaps;for(let Re=0;Re<de.length;Re++){const ze=de[Re];_.format!==_n?Oe!==null?D?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,ze.width,ze.height,Oe,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,et,ze.width,ze.height,0,ze.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,ze.width,ze.height,Oe,ke,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,et,ze.width,ze.height,0,Oe,ke,ze.data)}}}else{if(de=_.mipmaps,D&&ce){de.length>0&&Me++;const ie=St(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,et,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ye){D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ue[ie].width,ue[ie].height,Oe,ke,ue[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,et,ue[ie].width,ue[ie].height,0,Oe,ke,ue[ie].data);for(let Re=0;Re<de.length;Re++){const bt=de[Re].image[ie].image;D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,bt.width,bt.height,Oe,ke,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,et,bt.width,bt.height,0,Oe,ke,bt.data)}}else{D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Oe,ke,ue[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,et,Oe,ke,ue[ie]);for(let Re=0;Re<de.length;Re++){const ze=de[Re];D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,Oe,ke,ze.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,et,Oe,ke,ze.image[ie])}}}p(_)&&v(i.TEXTURE_CUBE_MAP),oe.__version=re.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Ae(T,_,z,Z,re,oe){const fe=s.convert(z.format,z.colorSpace),Y=s.convert(z.type),ee=y(z.internalFormat,fe,Y,z.normalized,z.colorSpace),Se=n.get(_),ye=n.get(z);if(ye.__renderTarget=_,!Se.__hasExternalTextures){const ue=Math.max(1,_.width>>oe),le=Math.max(1,_.height>>oe);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,oe,ee,ue,le,_.depth,0,fe,Y,null):t.texImage2D(re,oe,ee,ue,le,0,fe,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,re,ye.__webglTexture,0,gt(_)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,re,ye.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(T,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const Z=_.depthTexture,re=Z&&Z.isDepthTexture?Z.type:null,oe=C(_.stencilBuffer,re),fe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(_),oe,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(_),oe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,oe,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,T)}else{const Z=_.textures;for(let re=0;re<Z.length;re++){const oe=Z[re],fe=s.convert(oe.format,oe.colorSpace),Y=s.convert(oe.type),ee=y(oe.internalFormat,fe,Y,oe.normalized,oe.colorSpace);Xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(_),ee,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(_),ee,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ee,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(T,_,z){const Z=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(_.depthTexture);if(re.__renderTarget=_,(!re.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z){if(re.__webglInit===void 0&&(re.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),re.__webglTexture===void 0){re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),he(i.TEXTURE_CUBE_MAP,_.depthTexture);const Se=s.convert(_.depthTexture.format),ye=s.convert(_.depthTexture.type);let ue;_.depthTexture.format===Gn?ue=i.DEPTH_COMPONENT24:_.depthTexture.format===vi&&(ue=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ue,_.width,_.height,0,Se,ye,null)}}else j(_.depthTexture,0);const oe=re.__webglTexture,fe=gt(_),Y=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ee=_.depthTexture.format===vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Gn)Xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Y,oe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Y,oe,0);else if(_.depthTexture.format===vi)Xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Y,oe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Y,oe,0);else throw new Error("Unknown depthTexture format")}function Ke(T){const _=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const re=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",re)};Z.addEventListener("dispose",re),_.__depthDisposeCallback=re}_.__boundDepthTexture=Z}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let Z=0;Z<6;Z++)Fe(_.__webglFramebuffer[Z],T,Z);else{const Z=T.texture.mipmaps;Z&&Z.length>0?Fe(_.__webglFramebuffer[0],T,0):Fe(_.__webglFramebuffer,T,0)}else if(z){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=i.createRenderbuffer(),Je(_.__webglDepthbuffer[Z],T,!1);else{const re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,oe)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Je(_.__webglDepthbuffer,T,!1);else{const re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(T,_,z){const Z=n.get(T);_!==void 0&&Ae(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ke(T)}function Le(T){const _=T.texture,z=n.get(T),Z=n.get(_);T.addEventListener("dispose",x);const re=T.textures,oe=T.isWebGLCubeRenderTarget===!0,fe=re.length>1;if(fe||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=_.version,a.memory.textures++),oe){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let ee=0;ee<_.mipmaps.length;ee++)z.__webglFramebuffer[Y][ee]=i.createFramebuffer()}else z.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)z.__webglFramebuffer[Y]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(fe)for(let Y=0,ee=re.length;Y<ee;Y++){const Se=n.get(re[Y]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Xe(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<re.length;Y++){const ee=re[Y];z.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);const Se=s.convert(ee.format,ee.colorSpace),ye=s.convert(ee.type),ue=y(ee.internalFormat,Se,ye,ee.normalized,ee.colorSpace,T.isXRRenderTarget===!0),le=gt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ue,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),he(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)Ae(z.__webglFramebuffer[Y][ee],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ee);else Ae(z.__webglFramebuffer[Y],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let Y=0,ee=re.length;Y<ee;Y++){const Se=re[Y],ye=n.get(Se);let ue=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ye.__webglTexture),he(ue,Se),Ae(z.__webglFramebuffer,T,Se,i.COLOR_ATTACHMENT0+Y,ue,0),p(Se)&&v(ue)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,Z.__webglTexture),he(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)Ae(z.__webglFramebuffer[ee],T,_,i.COLOR_ATTACHMENT0,Y,ee);else Ae(z.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,Y,0);p(_)&&v(Y),t.unbindTexture()}T.depthBuffer&&Ke(T)}function dt(T){const _=T.textures;for(let z=0,Z=_.length;z<Z;z++){const re=_[z];if(p(re)){const oe=b(T),fe=n.get(re).__webglTexture;t.bindTexture(oe,fe),v(oe),t.unbindTexture()}}}const rt=[],vt=[];function I(T){if(T.samples>0){if(Xe(T)===!1){const _=T.textures,z=T.width,Z=T.height;let re=i.COLOR_BUFFER_BIT;const oe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(T),Y=_.length>1;if(Y)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ee=T.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Se]);const ye=n.get(_[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,re,i.NEAREST),u===!0&&(rt.length=0,vt.length=0,rt.push(i.COLOR_ATTACHMENT0+Se),T.depthBuffer&&T.resolveDepthBuffer===!1&&(rt.push(oe),vt.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Se]);const ye=n.get(_[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&u){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function gt(T){return Math.min(r.maxSamples,T.samples)}function Xe(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ft(T){const _=a.render.frame;f.get(T)!==_&&(f.set(T,_),T.update())}function pe(T,_){const z=T.colorSpace,Z=T.format,re=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==As&&z!==ti&&(qe.getTransfer(z)===it?(Z!==_n||re!==ln)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",z)),_}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.getTextureUnits=W,this.setTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=ne,this.setTexture3D=O,this.setTextureCube=Q,this.rebindTextures=tt,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function x_(i,e){function t(n,r=ti){let s;const a=qe.getTransfer(r);if(n===ln)return i.UNSIGNED_BYTE;if(n===Lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Io)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gc)return i.BYTE;if(n===Hc)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===Do)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===Xc)return i.ALPHA;if(n===qc)return i.RGB;if(n===_n)return i.RGBA;if(n===Gn)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===Uo)return i.RED;if(n===No)return i.RED_INTEGER;if(n===Mi)return i.RG;if(n===Fo)return i.RG_INTEGER;if(n===Oo)return i.RGBA_INTEGER;if(n===ms||n===gs||n===_s||n===xs)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===Ga||n===Ha||n===Wa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ka)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Xa||n===qa||n===Ya||n===ja||n===Es||n===Ka)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===$a||n===Xa)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ya)return s.COMPRESSED_R11_EAC;if(n===ja)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Es)return s.COMPRESSED_RG11_EAC;if(n===Ka)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Za||n===Ja||n===Qa||n===eo||n===to||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===lo||n===co||n===uo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Za)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===to)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===no)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===io)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ro)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===so)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ao)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===co)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===ho||n===po)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===fo)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ho)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===po)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mo||n===go||n===Ts||n===_o)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===mo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===go)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ts)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_o)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class M_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ru(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vt({vertexShader:v_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new Os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b_ extends yi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",u=1,l=null,f=null,d=null,c=null,h=null,g=null;const S=typeof XRWebGLBinding<"u",m=new M_,p={},v=t.getContextAttributes();let b=null,y=null;const C=[],E=[],P=new Ue;let x=null;const A=new on;A.viewport=new At;const R=new on;R.viewport=new At;const w=[A,R],L=new Pf;let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=C[X];return te===void 0&&(te=new Qs,C[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=C[X];return te===void 0&&(te=new Qs,C[X]=te),te.getGripSpace()},this.getHand=function(X){let te=C[X];return te===void 0&&(te=new Qs,C[X]=te),te.getHandSpace()};function U(X){const te=E.indexOf(X.inputSource);if(te===-1)return;const q=C[te];q!==void 0&&(q.update(X.inputSource,X.frame,l||a),q.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",V);for(let X=0;X<C.length;X++){const te=E[X];te!==null&&(E[X]=null,C[X].disconnect(te))}H=null,W=null,m.reset();for(const X in p)delete p[X];e.setRenderTarget(b),h=null,c=null,d=null,r=null,y=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return c!==null?c:h},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",B),r.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,ge=null,we=null;v.depth&&(we=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=v.stencil?vi:Gn,ge=v.stencil?br:Rn);const Ae={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};d=this.getBinding(),c=d.createProjectionLayer(Ae),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),y=new Yt(c.textureWidth,c.textureHeight,{format:_n,type:ln,depthTexture:new Qi(c.textureWidth,c.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{const q={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Yt(h.framebufferWidth,h.framebufferHeight,{format:_n,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(u),l=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(X){for(let te=0;te<X.removed.length;te++){const q=X.removed[te],ge=E.indexOf(q);ge>=0&&(E[ge]=null,C[ge].disconnect(q))}for(let te=0;te<X.added.length;te++){const q=X.added[te];let ge=E.indexOf(q);if(ge===-1){for(let Ae=0;Ae<C.length;Ae++)if(Ae>=E.length){E.push(q),ge=Ae;break}else if(E[Ae]===null){E[Ae]=q,ge=Ae;break}if(ge===-1)break}const we=C[ge];we&&we.connect(q)}}const j=new N,ne=new N;function O(X,te,q){j.setFromMatrixPosition(te.matrixWorld),ne.setFromMatrixPosition(q.matrixWorld);const ge=j.distanceTo(ne),we=te.projectionMatrix.elements,Ae=q.projectionMatrix.elements,Je=we[14]/(we[10]-1),Fe=we[14]/(we[10]+1),Ke=(we[9]+1)/we[5],tt=(we[9]-1)/we[5],Le=(we[8]-1)/we[0],dt=(Ae[8]+1)/Ae[0],rt=Je*Le,vt=Je*dt,I=ge/(-Le+dt),gt=I*-Le;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(gt),X.translateZ(I),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),we[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Xe=Je+I,ft=Fe+I,pe=rt-gt,St=vt+(ge-gt),T=Ke*Fe/ft*Xe,_=tt*Fe/ft*Xe;X.projectionMatrix.makePerspective(pe,St,T,_,Xe,ft),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Q(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let te=X.near,q=X.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(q=m.depthFar)),L.near=R.near=A.near=te,L.far=R.far=A.far=q,(H!==L.near||W!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),H=L.near,W=L.far),L.layers.mask=X.layers.mask|6,A.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;const ge=X.parent,we=L.cameras;Q(L,ge);for(let Ae=0;Ae<we.length;Ae++)Q(we[Ae],ge);we.length===2?O(L,A,R):L.projectionMatrix.copy(A.projectionMatrix),J(X,L,ge)};function J(X,te,q){q===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(q.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Mo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(c===null&&h===null))return u},this.setFoveation=function(X){u=X,c!==null&&(c.fixedFoveation=X),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(X){return p[X]};let ve=null;function Te(X,te){if(f=te.getViewerPose(l||a),g=te,f!==null){const q=f.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let ge=!1;q.length!==L.cameras.length&&(L.cameras.length=0,ge=!0);for(let Fe=0;Fe<q.length;Fe++){const Ke=q[Fe];let tt=null;if(h!==null)tt=h.getViewport(Ke);else{const dt=d.getViewSubImage(c,Ke);tt=dt.viewport,Fe===0&&(e.setRenderTargetTextures(y,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(y))}let Le=w[Fe];Le===void 0&&(Le=new on,Le.layers.enable(Fe),Le.viewport=new At,w[Fe]=Le),Le.matrix.fromArray(Ke.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Ke.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(tt.x,tt.y,tt.width,tt.height),Fe===0&&(L.matrix.copy(Le.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ge===!0&&L.cameras.push(Le)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const Fe=d.getDepthInformation(q[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,r.renderState)}if(we&&we.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let Fe=0;Fe<q.length;Fe++){const Ke=q[Fe].camera;if(Ke){let tt=p[Ke];tt||(tt=new ru,p[Ke]=tt);const Le=d.getCameraImage(Ke);tt.sourceTexture=Le}}}}for(let q=0;q<C.length;q++){const ge=E[q],we=C[q];ge!==null&&we!==void 0&&we.update(ge,te,l||a)}ve&&ve(X,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const he=new du;he.setAnimationLoop(Te),this.setAnimationLoop=function(X){ve=X},this.dispose=function(){}}}const y_=new pt,xu=new Be;xu.set(-1,0,0,0,1,0,0,0,1);function E_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,b,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),c(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),S(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?u(m,p,v,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),b=v.envMap,y=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(y_.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(xu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function u(m,p,v,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function c(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function T_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(v,b){const y=b.program;n.uniformBlockBinding(v,y)}function l(v,b){let y=r[v.id];y===void 0&&(g(v),y=f(v),r[v.id]=y,v.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(v,C);const E=e.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}function f(v){const b=d();v.__bindingPointIndex=b;const y=i.createBuffer(),C=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){const b=r[v.id],y=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,P=y.length;E<P;E++){const x=Array.isArray(y[E])?y[E]:[y[E]];for(let A=0,R=x.length;A<R;A++){const w=x[A];if(h(w,E,A,C)===!0){const L=w.__offset,H=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let U=0;U<H.length;U++){const B=H[U],V=S(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,L+W,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):ArrayBuffer.isView(B)?w.__data.set(new B.constructor(B.buffer,B.byteOffset,w.__data.length)):(B.toArray(w.__data,W),W+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,b,y,C){const E=v.value,P=b+"_"+y;if(C[P]===void 0)return typeof E=="number"||typeof E=="boolean"?C[P]=E:ArrayBuffer.isView(E)?C[P]=E.slice():C[P]=E.clone(),!0;{const x=C[P];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return C[P]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(x.equals(E)===!1)return x.copy(E),!0}}return!1}function g(v){const b=v.uniforms;let y=0;const C=16;for(let P=0,x=b.length;P<x;P++){const A=Array.isArray(b[P])?b[P]:[b[P]];for(let R=0,w=A.length;R<w;R++){const L=A[R],H=Array.isArray(L.value)?L.value:[L.value];for(let W=0,U=H.length;W<U;W++){const B=H[W],V=S(B),j=y%C,ne=j%V.boundary,O=j+ne;y+=ne,O!==0&&C-O<V.storage&&(y+=C-O),L.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=V.storage}}}const E=y%C;return E>0&&(y+=C-E),v.__size=y,v.__cache={},this}function S(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:u,update:l,dispose:p}}const A_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function w_(){return bn===null&&(bn=new tu(A_,16,16,Mi,nn),bn.name="DFG_LUT",bn.minFilter=zt,bn.magFilter=zt,bn.wrapS=Bn,bn.wrapT=Bn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class C_{constructor(e={}){const{canvas:t=Hd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:c=!1,outputBufferType:h=ln}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const S=h,m=new Set([Oo,Fo,No]),p=new Set([ln,Rn,Mr,br,Lo,Io]),v=new Uint32Array(4),b=new Int32Array(4),y=new N;let C=null,E=null;const P=[],x=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let w=!1,L=null;this._outputColorSpace=Qt;let H=0,W=0,U=null,B=-1,V=null;const j=new At,ne=new At;let O=null;const Q=new je(0);let J=0,ve=t.width,Te=t.height,he=1,X=null,te=null;const q=new At(0,0,ve,Te),ge=new At(0,0,ve,Te);let we=!1;const Ae=new nu;let Je=!1,Fe=!1;const Ke=new pt,tt=new N,Le=new At,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function vt(){return U===null?he:1}let I=n;function gt(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ro}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",ze,!1),I===null){const F="webgl2";if(I=gt(F,M),I===null)throw gt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ze("WebGLRenderer: "+M.message),M}let Xe,ft,pe,St,T,_,z,Z,re,oe,fe,Y,ee,Se,ye,ue,le,Oe,ke,et,D,ce,K;function Me(){Xe=new wm(I),Xe.init(),D=new x_(I,Xe),ft=new vm(I,Xe,e,D),pe=new g_(I,Xe),ft.reversedDepthBuffer&&c&&pe.buffers.depth.setReversed(!0),St=new Pm(I),T=new n_,_=new __(I,Xe,pe,T,ft,D,St),z=new Am(R),Z=new Uf(I),ce=new _m(I,Z),re=new Cm(I,Z,St,ce),oe=new Lm(I,re,Z,ce,St),Oe=new Dm(I,ft,_),ye=new Sm(T),fe=new t_(R,z,Xe,ft,ce,ye),Y=new E_(R,T),ee=new r_,Se=new u_(Xe),le=new gm(R,z,pe,oe,g,u),ue=new m_(R,oe,ft),K=new T_(I,St,ft,pe),ke=new xm(I,Xe,St),et=new Rm(I,Xe,St),St.programs=fe.programs,R.capabilities=ft,R.extensions=Xe,R.properties=T,R.renderLists=ee,R.shadowMap=ue,R.state=pe,R.info=St}Me(),S!==ln&&(A=new Um(S,t.width,t.height,r,s));const de=new b_(R,I);this.xr=de,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Xe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Xe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(M){M!==void 0&&(he=M,this.setSize(ve,Te,!1))},this.getSize=function(M){return M.set(ve,Te)},this.setSize=function(M,F,$=!0){if(de.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=M,Te=F,t.width=Math.floor(M*he),t.height=Math.floor(F*he),$===!0&&(t.style.width=M+"px",t.style.height=F+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(ve*he,Te*he).floor()},this.setDrawingBufferSize=function(M,F,$){ve=M,Te=F,he=$,t.width=Math.floor(M*$),t.height=Math.floor(F*$),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(S===ln){Ze("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Ne("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(j)},this.getViewport=function(M){return M.copy(q)},this.setViewport=function(M,F,$,k){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,F,$,k),pe.viewport(j.copy(q).multiplyScalar(he).round())},this.getScissor=function(M){return M.copy(ge)},this.setScissor=function(M,F,$,k){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,F,$,k),pe.scissor(ne.copy(ge).multiplyScalar(he).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(M){pe.setScissorTest(we=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){te=M},this.getClearColor=function(M){return M.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,$=!0){let k=0;if(M){let G=!1;if(U!==null){const xe=U.texture.format;G=m.has(xe)}if(G){const xe=U.texture.type,Ee=p.has(xe),_e=le.getClearColor(),Ce=le.getClearAlpha(),Pe=_e.r,Ve=_e.g,He=_e.b;Ee?(v[0]=Pe,v[1]=Ve,v[2]=He,v[3]=Ce,I.clearBufferuiv(I.COLOR,0,v)):(b[0]=Pe,b[1]=Ve,b[2]=He,b[3]=Ce,I.clearBufferiv(I.COLOR,0,b))}else k|=I.COLOR_BUFFER_BIT}F&&(k|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),L=M},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),le.dispose(),ee.dispose(),Se.dispose(),T.dispose(),z.dispose(),oe.dispose(),ce.dispose(),K.dispose(),fe.dispose(),de.dispose(),de.removeEventListener("sessionstart",qo),de.removeEventListener("sessionend",Yo),ui.stop()};function ie(M){M.preventDefault(),Ps("WebGLRenderer: Context Lost."),w=!0}function Re(){Ps("WebGLRenderer: Context Restored."),w=!1;const M=St.autoReset,F=ue.enabled,$=ue.autoUpdate,k=ue.needsUpdate,G=ue.type;Me(),St.autoReset=M,ue.enabled=F,ue.autoUpdate=$,ue.needsUpdate=k,ue.type=G}function ze(M){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function bt(M){const F=M.target;F.removeEventListener("dispose",bt),st(F)}function st(M){Pn(M),T.remove(M)}function Pn(M){const F=T.get(M).programs;F!==void 0&&(F.forEach(function($){fe.releaseProgram($)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,$,k,G,xe){F===null&&(F=dt);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,_e=$u(M,F,$,k,G);pe.setMaterial(k,Ee);let Ce=$.index,Pe=1;if(k.wireframe===!0){if(Ce=re.getWireframeAttribute($),Ce===void 0)return;Pe=2}const Ve=$.drawRange,He=$.attributes.position;let De=Ve.start*Pe,at=(Ve.start+Ve.count)*Pe;xe!==null&&(De=Math.max(De,xe.start*Pe),at=Math.min(at,(xe.start+xe.count)*Pe)),Ce!==null?(De=Math.max(De,0),at=Math.min(at,Ce.count)):He!=null&&(De=Math.max(De,0),at=Math.min(at,He.count));const yt=at-De;if(yt<0||yt===1/0)return;ce.setup(G,k,_e,$,Ce);let Mt,lt=ke;if(Ce!==null&&(Mt=Z.get(Ce),lt=et,lt.setIndex(Mt)),G.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*vt()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(G.isLine){let Nt=k.linewidth;Nt===void 0&&(Nt=1),pe.setLineWidth(Nt*vt()),G.isLineSegments?lt.setMode(I.LINES):G.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else G.isPoints?lt.setMode(I.POINTS):G.isSprite&&lt.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Nt=G._multiDrawStarts,be=G._multiDrawCounts,jt=G._multiDrawCount,Qe=Ce?Z.get(Ce).bytesPerElement:1,rn=T.get(k).currentProgram.getUniforms();for(let Sn=0;Sn<jt;Sn++)rn.setValue(I,"_gl_DrawID",Sn),lt.render(Nt[Sn]/Qe,be[Sn])}else if(G.isInstancedMesh)lt.renderInstances(De,yt,G.count);else if($.isInstancedBufferGeometry){const Nt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,be=Math.min($.instanceCount,Nt);lt.renderInstances(De,yt,be)}else lt.render(De,yt)};function vn(M,F,$){M.transparent===!0&&M.side===On&&M.forceSinglePass===!1?(M.side=qt,M.needsUpdate=!0,Pr(M,F,$),M.side=si,M.needsUpdate=!0,Pr(M,F,$),M.side=On):Pr(M,F,$)}this.compile=function(M,F,$=null){$===null&&($=M),E=Se.get($),E.init(F),x.push(E),$.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),M!==$&&M.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();const k=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const xe=G.material;if(xe)if(Array.isArray(xe))for(let Ee=0;Ee<xe.length;Ee++){const _e=xe[Ee];vn(_e,$,G),k.add(_e)}else vn(xe,$,G),k.add(xe)}),E=x.pop(),k},this.compileAsync=function(M,F,$=null){const k=this.compile(M,F,$);return new Promise(G=>{function xe(){if(k.forEach(function(Ee){T.get(Ee).currentProgram.isReady()&&k.delete(Ee)}),k.size===0){G(M);return}setTimeout(xe,10)}Xe.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Gs=null;function Hu(M){Gs&&Gs(M)}function qo(){ui.stop()}function Yo(){ui.start()}const ui=new du;ui.setAnimationLoop(Hu),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(M){Gs=M,de.setAnimationLoop(M),M===null?ui.stop():ui.start()},de.addEventListener("sessionstart",qo),de.addEventListener("sessionend",Yo),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;L!==null&&L.renderStart(M,F);const $=de.enabled===!0&&de.isPresenting===!0,k=A!==null&&(U===null||$)&&A.begin(R,U);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(F),F=de.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,F,U),E=Se.get(M,x.length),E.init(F),E.state.textureUnits=_.getTextureUnits(),x.push(E),Ke.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ae.setFromProjectionMatrix(Ke,Tn,F.reversedDepth),Fe=this.localClippingEnabled,Je=ye.init(this.clippingPlanes,Fe),C=ee.get(M,P.length),C.init(),P.push(C),de.enabled===!0&&de.isPresenting===!0){const Ee=R.xr.getDepthSensingMesh();Ee!==null&&Hs(Ee,F,-1/0,R.sortObjects)}Hs(M,F,0,R.sortObjects),C.finish(),R.sortObjects===!0&&C.sort(X,te),rt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,rt&&le.addToRenderList(C,M),this.info.render.frame++,Je===!0&&ye.beginShadows();const G=E.state.shadowsArray;if(ue.render(G,M,F),Je===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&A.hasRenderPass())===!1){const Ee=C.opaque,_e=C.transmissive;if(E.setupLights(),F.isArrayCamera){const Ce=F.cameras;if(_e.length>0)for(let Pe=0,Ve=Ce.length;Pe<Ve;Pe++){const He=Ce[Pe];Ko(Ee,_e,M,He)}rt&&le.render(M);for(let Pe=0,Ve=Ce.length;Pe<Ve;Pe++){const He=Ce[Pe];jo(C,M,He,He.viewport)}}else _e.length>0&&Ko(Ee,_e,M,F),rt&&le.render(M),jo(C,M,F)}U!==null&&W===0&&(_.updateMultisampleRenderTarget(U),_.updateRenderTargetMipmap(U)),k&&A.end(R),M.isScene===!0&&M.onAfterRender(R,M,F),ce.resetDefaultState(),B=-1,V=null,x.pop(),x.length>0?(E=x[x.length-1],_.setTextureUnits(E.state.textureUnits),Je===!0&&ye.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?C=P[P.length-1]:C=null,L!==null&&L.renderEnd()};function Hs(M,F,$,k){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ae.intersectsSprite(M)){k&&Le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ke);const Ee=oe.update(M),_e=M.material;_e.visible&&C.push(M,Ee,_e,$,Le.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ae.intersectsObject(M))){const Ee=oe.update(M),_e=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Le.copy(M.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Le.copy(Ee.boundingSphere.center)),Le.applyMatrix4(M.matrixWorld).applyMatrix4(Ke)),Array.isArray(_e)){const Ce=Ee.groups;for(let Pe=0,Ve=Ce.length;Pe<Ve;Pe++){const He=Ce[Pe],De=_e[He.materialIndex];De&&De.visible&&C.push(M,Ee,De,$,Le.z,He)}}else _e.visible&&C.push(M,Ee,_e,$,Le.z,null)}}const xe=M.children;for(let Ee=0,_e=xe.length;Ee<_e;Ee++)Hs(xe[Ee],F,$,k)}function jo(M,F,$,k){const{opaque:G,transmissive:xe,transparent:Ee}=M;E.setupLightsView($),Je===!0&&ye.setGlobalState(R.clippingPlanes,$),k&&pe.viewport(j.copy(k)),G.length>0&&Rr(G,F,$),xe.length>0&&Rr(xe,F,$),Ee.length>0&&Rr(Ee,F,$),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Ko(M,F,$,k){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){const De=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new Yt(1,1,{generateMipmaps:!0,type:De?nn:ln,minFilter:xi,samples:Math.max(4,ft.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const xe=E.state.transmissionRenderTarget[k.id],Ee=k.viewport||j;xe.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);const _e=R.getRenderTarget(),Ce=R.getActiveCubeFace(),Pe=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(Q),J=R.getClearAlpha(),J<1&&R.setClearColor(16777215,.5),R.clear(),rt&&le.render($);const Ve=R.toneMapping;R.toneMapping=Cn;const He=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),Je===!0&&ye.setGlobalState(R.clippingPlanes,k),Rr(M,$,k),_.updateMultisampleRenderTarget(xe),_.updateRenderTargetMipmap(xe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let at=0,yt=F.length;at<yt;at++){const Mt=F[at],{object:lt,geometry:Nt,material:be,group:jt}=Mt;if(be.side===On&&lt.layers.test(k.layers)){const Qe=be.side;be.side=qt,be.needsUpdate=!0,Zo(lt,$,k,Nt,be,jt),be.side=Qe,be.needsUpdate=!0,De=!0}}De===!0&&(_.updateMultisampleRenderTarget(xe),_.updateRenderTargetMipmap(xe))}R.setRenderTarget(_e,Ce,Pe),R.setClearColor(Q,J),He!==void 0&&(k.viewport=He),R.toneMapping=Ve}function Rr(M,F,$){const k=F.isScene===!0?F.overrideMaterial:null;for(let G=0,xe=M.length;G<xe;G++){const Ee=M[G],{object:_e,geometry:Ce,group:Pe}=Ee;let Ve=Ee.material;Ve.allowOverride===!0&&k!==null&&(Ve=k),_e.layers.test($.layers)&&Zo(_e,F,$,Ce,Ve,Pe)}}function Zo(M,F,$,k,G,xe){M.onBeforeRender(R,F,$,k,G,xe),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(R,F,$,k,M,xe),G.transparent===!0&&G.side===On&&G.forceSinglePass===!1?(G.side=qt,G.needsUpdate=!0,R.renderBufferDirect($,F,k,G,M,xe),G.side=si,G.needsUpdate=!0,R.renderBufferDirect($,F,k,G,M,xe),G.side=On):R.renderBufferDirect($,F,k,G,M,xe),M.onAfterRender(R,F,$,k,G,xe)}function Pr(M,F,$){F.isScene!==!0&&(F=dt);const k=T.get(M),G=E.state.lights,xe=E.state.shadowsArray,Ee=G.state.version,_e=fe.getParameters(M,G.state,xe,F,$,E.state.lightProbeGridArray),Ce=fe.getProgramCacheKey(_e);let Pe=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;const Ve=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=z.get(M.envMap||k.environment,Ve),k.envMapRotation=k.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Pe===void 0&&(M.addEventListener("dispose",bt),Pe=new Map,k.programs=Pe);let He=Pe.get(Ce);if(He!==void 0){if(k.currentProgram===He&&k.lightsStateVersion===Ee)return Qo(M,_e),He}else _e.uniforms=fe.getUniforms(M),L!==null&&M.isNodeMaterial&&L.build(M,$,_e),M.onBeforeCompile(_e,R),He=fe.acquireProgram(_e,Ce),Pe.set(Ce,He),k.uniforms=_e.uniforms;const De=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=ye.uniform),Qo(M,_e),k.needsLights=qu(M),k.lightsStateVersion=Ee,k.needsLights&&(De.ambientLightColor.value=G.state.ambient,De.lightProbe.value=G.state.probe,De.directionalLights.value=G.state.directional,De.directionalLightShadows.value=G.state.directionalShadow,De.spotLights.value=G.state.spot,De.spotLightShadows.value=G.state.spotShadow,De.rectAreaLights.value=G.state.rectArea,De.ltc_1.value=G.state.rectAreaLTC1,De.ltc_2.value=G.state.rectAreaLTC2,De.pointLights.value=G.state.point,De.pointLightShadows.value=G.state.pointShadow,De.hemisphereLights.value=G.state.hemi,De.directionalShadowMatrix.value=G.state.directionalShadowMatrix,De.spotLightMatrix.value=G.state.spotLightMatrix,De.spotLightMap.value=G.state.spotLightMap,De.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=He,k.uniformsList=null,He}function Jo(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Ss.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Qo(M,F){const $=T.get(M);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Wu(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let $=0,k=M.length;$<k;$++){const G=M[$];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function $u(M,F,$,k,G){F.isScene!==!0&&(F=dt),_.resetTextureUnits();const xe=F.fog,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,_e=U===null?R.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:qe.workingColorSpace,Ce=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Pe=z.get(k.envMap||Ee,Ce),Ve=k.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,He=!!$.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),De=!!$.morphAttributes.position,at=!!$.morphAttributes.normal,yt=!!$.morphAttributes.color;let Mt=Cn;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Mt=R.toneMapping);const lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Nt=lt!==void 0?lt.length:0,be=T.get(k),jt=E.state.lights;if(Je===!0&&(Fe===!0||M!==V)){const ht=M===V&&k.id===B;ye.setState(k,M,ht)}let Qe=!1;k.version===be.__version?(be.needsLights&&be.lightsStateVersion!==jt.state.version||be.outputColorSpace!==_e||G.isBatchedMesh&&be.batching===!1||!G.isBatchedMesh&&be.batching===!0||G.isBatchedMesh&&be.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&be.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&be.instancing===!1||!G.isInstancedMesh&&be.instancing===!0||G.isSkinnedMesh&&be.skinning===!1||!G.isSkinnedMesh&&be.skinning===!0||G.isInstancedMesh&&be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&be.instancingMorph===!1&&G.morphTexture!==null||be.envMap!==Pe||k.fog===!0&&be.fog!==xe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ye.numPlanes||be.numIntersection!==ye.numIntersection)||be.vertexAlphas!==Ve||be.vertexTangents!==He||be.morphTargets!==De||be.morphNormals!==at||be.morphColors!==yt||be.toneMapping!==Mt||be.morphTargetsCount!==Nt||!!be.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,be.__version=k.version);let rn=be.currentProgram;Qe===!0&&(rn=Pr(k,F,G),L&&k.isNodeMaterial&&L.onUpdateProgram(k,rn,be));let Sn=!1,$n=!1,wi=!1;const ct=rn.getUniforms(),Et=be.uniforms;if(pe.useProgram(rn.program)&&(Sn=!0,$n=!0,wi=!0),k.id!==B&&(B=k.id,$n=!0),be.needsLights){const ht=Wu(E.state.lightProbeGridArray,G);be.lightProbeGrid!==ht&&(be.lightProbeGrid=ht,$n=!0)}if(Sn||V!==M){pe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ct.setValue(I,"projectionMatrix",M.projectionMatrix),ct.setValue(I,"viewMatrix",M.matrixWorldInverse);const qn=ct.map.cameraPosition;qn!==void 0&&qn.setValue(I,tt.setFromMatrixPosition(M.matrixWorld)),ft.logarithmicDepthBuffer&&ct.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ct.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),V!==M&&(V=M,$n=!0,wi=!0)}if(be.needsLights&&(jt.state.directionalShadowMap.length>0&&ct.setValue(I,"directionalShadowMap",jt.state.directionalShadowMap,_),jt.state.spotShadowMap.length>0&&ct.setValue(I,"spotShadowMap",jt.state.spotShadowMap,_),jt.state.pointShadowMap.length>0&&ct.setValue(I,"pointShadowMap",jt.state.pointShadowMap,_)),G.isSkinnedMesh){ct.setOptional(I,G,"bindMatrix"),ct.setOptional(I,G,"bindMatrixInverse");const ht=G.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),ct.setValue(I,"boneTexture",ht.boneTexture,_))}G.isBatchedMesh&&(ct.setOptional(I,G,"batchingTexture"),ct.setValue(I,"batchingTexture",G._matricesTexture,_),ct.setOptional(I,G,"batchingIdTexture"),ct.setValue(I,"batchingIdTexture",G._indirectTexture,_),ct.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&ct.setValue(I,"batchingColorTexture",G._colorsTexture,_));const Xn=$.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&Oe.update(G,$,rn),($n||be.receiveShadow!==G.receiveShadow)&&(be.receiveShadow=G.receiveShadow,ct.setValue(I,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(Et.envMapIntensity.value=F.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=w_()),$n){if(ct.setValue(I,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&Xu(Et,wi),xe&&k.fog===!0&&Y.refreshFogUniforms(Et,xe),Y.refreshMaterialUniforms(Et,k,he,Te,E.state.transmissionRenderTarget[M.id]),be.needsLights&&be.lightProbeGrid){const ht=be.lightProbeGrid;Et.probesSH.value=ht.texture,Et.probesMin.value.copy(ht.boundingBox.min),Et.probesMax.value.copy(ht.boundingBox.max),Et.probesResolution.value.copy(ht.resolution)}Ss.upload(I,Jo(be),Et,_)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ss.upload(I,Jo(be),Et,_),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ct.setValue(I,"center",G.center),ct.setValue(I,"modelViewMatrix",G.modelViewMatrix),ct.setValue(I,"normalMatrix",G.normalMatrix),ct.setValue(I,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){const ht=k.uniformsGroups;for(let qn=0,Ci=ht.length;qn<Ci;qn++){const el=ht[qn];K.update(el,rn),K.bind(el,rn)}}return rn}function Xu(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function qu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,F,$){const k=T.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),T.get(M.texture).__webglTexture=F,T.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:$,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const $=T.get(M);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0};const Yu=I.createFramebuffer();this.setRenderTarget=function(M,F=0,$=0){U=M,H=F,W=$;let k=null,G=!1,xe=!1;if(M){const _e=T.get(M);if(_e.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(I.FRAMEBUFFER,_e.__webglFramebuffer),j.copy(M.viewport),ne.copy(M.scissor),O=M.scissorTest,pe.viewport(j),pe.scissor(ne),pe.setScissorTest(O),B=-1;return}else if(_e.__webglFramebuffer===void 0)_.setupRenderTarget(M);else if(_e.__hasExternalTextures)_.rebindTextures(M,T.get(M.texture).__webglTexture,T.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ve=M.depthTexture;if(_e.__boundDepthTexture!==Ve){if(Ve!==null&&T.has(Ve)&&(M.width!==Ve.image.width||M.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(xe=!0);const Pe=T.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?k=Pe[F][$]:k=Pe[F],G=!0):M.samples>0&&_.useMultisampledRTT(M)===!1?k=T.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?k=Pe[$]:k=Pe,j.copy(M.viewport),ne.copy(M.scissor),O=M.scissorTest}else j.copy(q).multiplyScalar(he).floor(),ne.copy(ge).multiplyScalar(he).floor(),O=we;if($!==0&&(k=Yu),pe.bindFramebuffer(I.FRAMEBUFFER,k)&&pe.drawBuffers(M,k),pe.viewport(j),pe.scissor(ne),pe.setScissorTest(O),G){const _e=T.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,$)}else if(xe){const _e=F;for(let Ce=0;Ce<M.textures.length;Ce++){const Pe=T.get(M.textures[Ce]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ce,Pe.__webglTexture,$,_e)}}else if(M!==null&&$!==0){const _e=T.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_e.__webglTexture,$)}B=-1},this.readRenderTargetPixels=function(M,F,$,k,G,xe,Ee,_e=0){if(!(M&&M.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=T.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){pe.bindFramebuffer(I.FRAMEBUFFER,Ce);try{const Pe=M.textures[_e],Ve=Pe.format,He=Pe.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_e),!ft.textureFormatReadable(Ve)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(He)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-k&&$>=0&&$<=M.height-G&&I.readPixels(F,$,k,G,D.convert(Ve),D.convert(He),xe)}finally{const Pe=U!==null?T.get(U).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(M,F,$,k,G,xe,Ee,_e=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=T.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce)if(F>=0&&F<=M.width-k&&$>=0&&$<=M.height-G){pe.bindFramebuffer(I.FRAMEBUFFER,Ce);const Pe=M.textures[_e],Ve=Pe.format,He=Pe.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_e),!ft.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.bufferData(I.PIXEL_PACK_BUFFER,xe.byteLength,I.STREAM_READ),I.readPixels(F,$,k,G,D.convert(Ve),D.convert(He),0);const at=U!==null?T.get(U).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,at);const yt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Wd(I,yt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xe),I.deleteBuffer(De),I.deleteSync(yt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,$=0){const k=Math.pow(2,-$),G=Math.floor(M.image.width*k),xe=Math.floor(M.image.height*k),Ee=F!==null?F.x:0,_e=F!==null?F.y:0;_.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,Ee,_e,G,xe),pe.unbindTexture()};const ju=I.createFramebuffer(),Ku=I.createFramebuffer();this.copyTextureToTexture=function(M,F,$=null,k=null,G=0,xe=0){let Ee,_e,Ce,Pe,Ve,He,De,at,yt;const Mt=M.isCompressedTexture?M.mipmaps[xe]:M.image;if($!==null)Ee=$.max.x-$.min.x,_e=$.max.y-$.min.y,Ce=$.isBox3?$.max.z-$.min.z:1,Pe=$.min.x,Ve=$.min.y,He=$.isBox3?$.min.z:0;else{const Et=Math.pow(2,-G);Ee=Math.floor(Mt.width*Et),_e=Math.floor(Mt.height*Et),M.isDataArrayTexture?Ce=Mt.depth:M.isData3DTexture?Ce=Math.floor(Mt.depth*Et):Ce=1,Pe=0,Ve=0,He=0}k!==null?(De=k.x,at=k.y,yt=k.z):(De=0,at=0,yt=0);const lt=D.convert(F.format),Nt=D.convert(F.type);let be;F.isData3DTexture?(_.setTexture3D(F,0),be=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(_.setTexture2DArray(F,0),be=I.TEXTURE_2D_ARRAY):(_.setTexture2D(F,0),be=I.TEXTURE_2D),pe.activeTexture(I.TEXTURE0),pe.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),pe.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),pe.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const jt=pe.getParameter(I.UNPACK_ROW_LENGTH),Qe=pe.getParameter(I.UNPACK_IMAGE_HEIGHT),rn=pe.getParameter(I.UNPACK_SKIP_PIXELS),Sn=pe.getParameter(I.UNPACK_SKIP_ROWS),$n=pe.getParameter(I.UNPACK_SKIP_IMAGES);pe.pixelStorei(I.UNPACK_ROW_LENGTH,Mt.width),pe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt.height),pe.pixelStorei(I.UNPACK_SKIP_PIXELS,Pe),pe.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),pe.pixelStorei(I.UNPACK_SKIP_IMAGES,He);const wi=M.isDataArrayTexture||M.isData3DTexture,ct=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const Et=T.get(M),Xn=T.get(F),ht=T.get(Et.__renderTarget),qn=T.get(Xn.__renderTarget);pe.bindFramebuffer(I.READ_FRAMEBUFFER,ht.__webglFramebuffer),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Ci=0;Ci<Ce;Ci++)wi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,T.get(M).__webglTexture,G,He+Ci),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,T.get(F).__webglTexture,xe,yt+Ci)),I.blitFramebuffer(Pe,Ve,Ee,_e,De,at,Ee,_e,I.DEPTH_BUFFER_BIT,I.NEAREST);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||T.has(M)){const Et=T.get(M),Xn=T.get(F);pe.bindFramebuffer(I.READ_FRAMEBUFFER,ju),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ku);for(let ht=0;ht<Ce;ht++)wi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Et.__webglTexture,G,He+ht):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Et.__webglTexture,G),ct?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xn.__webglTexture,xe,yt+ht):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xn.__webglTexture,xe),G!==0?I.blitFramebuffer(Pe,Ve,Ee,_e,De,at,Ee,_e,I.COLOR_BUFFER_BIT,I.NEAREST):ct?I.copyTexSubImage3D(be,xe,De,at,yt+ht,Pe,Ve,Ee,_e):I.copyTexSubImage2D(be,xe,De,at,Pe,Ve,Ee,_e);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ct?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(be,xe,De,at,yt,Ee,_e,Ce,lt,Nt,Mt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(be,xe,De,at,yt,Ee,_e,Ce,lt,Mt.data):I.texSubImage3D(be,xe,De,at,yt,Ee,_e,Ce,lt,Nt,Mt):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xe,De,at,Ee,_e,lt,Nt,Mt.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xe,De,at,Mt.width,Mt.height,lt,Mt.data):I.texSubImage2D(I.TEXTURE_2D,xe,De,at,Ee,_e,lt,Nt,Mt);pe.pixelStorei(I.UNPACK_ROW_LENGTH,jt),pe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),pe.pixelStorei(I.UNPACK_SKIP_PIXELS,rn),pe.pixelStorei(I.UNPACK_SKIP_ROWS,Sn),pe.pixelStorei(I.UNPACK_SKIP_IMAGES,$n),xe===0&&F.generateMipmaps&&I.generateMipmap(be),pe.unbindTexture()},this.initRenderTarget=function(M){T.get(M).__webglFramebuffer===void 0&&_.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?_.setTextureCube(M,0):M.isData3DTexture?_.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?_.setTexture2DArray(M,0):_.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){H=0,W=0,U=null,pe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const Ms={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Tr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const R_=new Wo(-1,1,1,-1,0,1);class P_ extends Ut{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}}const D_=new P_;class vu{constructor(e){this._mesh=new dn(D_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,R_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class To extends Tr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Us.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new vu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ac extends Tr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class L_ extends Tr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class I_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ue);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new To(Ms),this.copyPass.material.blending=wn,this.timer=new Df}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),u=this.renderer.state.buffers.stencil;u.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),u.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ac!==void 0&&(a instanceof ac?n=!0:a instanceof L_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class U_ extends Tr{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new je}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const N_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new je(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class tr extends Tr{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(s,a,{type:nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new Yt(s,a,{type:nn});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const c=new Yt(s,a,{type:nn});c.texture.name="UnrealBloomPass.v"+f,c.texture.generateMipmaps=!1,this.renderTargetsVertical.push(c),s=Math.round(s/2),a=Math.round(a/2)}const o=N_;this.highPassUniforms=Us.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const u=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(u[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ue(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Us.clone(Ms.uniforms),this.blendMaterial=new Vt({uniforms:this.copyUniforms,vertexShader:Ms.vertexShader,fragmentShader:Ms.fragmentShader,premultipliedAlpha:!0,blending:Ra,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new je,this._oldClearAlpha=1,this._basic=new Go,this._fsQuad=new vu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ue(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let u=0;u<this.nMips;u++)this._fsQuad.material=this.separableBlurMaterials[u],this.separableBlurMaterials[u].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[u].uniforms.direction.value=tr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[u]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[u].uniforms.colorTexture.value=this.renderTargetsHorizontal[u].texture,this.separableBlurMaterials[u].uniforms.direction.value=tr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[u]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[u];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new Vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}tr.BlurDirectionX=new Ue(1,0);tr.BlurDirectionY=new Ue(0,1);const F_={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ue(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},O_=(i,e,t)=>Math.max(e,Math.min(t,i)),Wv=i=>O_(i,0,1),oc=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;let bs=42;const B_=i=>{bs=i},z_=()=>(bs=bs*16807%2147483647,(bs-1)/2147483646),$v=(i,e)=>i+z_()*(e-i),Xv=i=>Array.from({length:i},(e,t)=>t),V_=800,lc=V_/2,k_=i=>{const e={phase:0,current:null,next:null,timer:0};return Object.freeze({transition:(o,u)=>{e.phase!==0&&e.next&&(e.next.setOpacity(0),i(e.next)),e.phase=1,e.next=u,e.timer=0,u.setOpacity(0),o&&o.setOpacity(1)},update:o=>{if(e.phase!==0){if(e.timer+=o,e.phase===1){const u=Math.min(e.timer/lc,1),l=oc(u);e.current&&(e.current.setOpacity(1-l),e.current.dissolve&&e.current.dissolve(l)),u>=1&&(e.current&&i(e.current),e.current=e.next,e.next=null,e.phase=2,e.timer=0,e.current&&e.current.setOpacity(0))}else if(e.phase===2){const u=Math.min(e.timer/lc,1),l=oc(u);e.current&&(e.current.setOpacity(l),e.current.entrance&&e.current.entrance(e.timer)),u>=1&&(e.phase=0,e.timer=0)}}},isTransitioning:()=>e.phase!==0,getActive:()=>e.current,forceScene:o=>{e.phase!==0&&e.next&&(e.next.setOpacity(0),i(e.next),e.next=null),e.current&&i(e.current),e.current=o,e.phase=0,e.timer=0,o.setOpacity(1)}})},G_={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new Ue},uScanlineIntensity:{value:.15},uVignetteStrength:{value:.35},uChromaticStrength:{value:.003}},vertexShader:`out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,fragmentShader:`in vec2 vUv;
uniform sampler2D tDiffuse;
uniform float uTime;
uniform vec2 uResolution;
uniform float uScanlineIntensity;
uniform float uVignetteStrength;
uniform float uChromaticStrength;
out vec4 fragColor;

void main() {
  vec4 tex = texture(tDiffuse, vUv);

  // Scanlines
  float scanlineY = gl_FragCoord.y - uTime * 30.0;
  float scanline = sin(scanlineY * 1.0) * uScanlineIntensity + (1.0 - uScanlineIntensity);

  // Vignette
  vec2 uvCenter = vUv - 0.5;
  float vignette = 1.0 - length(uvCenter) * uVignetteStrength;

  // Chromatic aberration at edges
  float edgeDist = length(uvCenter) * 2.0;
  float chromaShift = edgeDist * uChromaticStrength;
  float r = texture(tDiffuse, vUv + vec2(chromaShift, 0.0)).r;

  vec3 result = vec3(r, tex.g, tex.b) * scanline * vignette;
  fragColor = vec4(result, tex.a);
}`},H_=(i,e)=>{const t=new C_({alpha:!0,powerPreference:"high-performance"});t.setPixelRatio(e.pixelRatio),t.setSize(i.clientWidth,i.clientHeight),t.outputColorSpace=Qt,t.toneMapping=Po,t.toneMappingExposure=1.2,i.appendChild(t.domElement);let n=!1;const r=O=>{O.preventDefault(),n=!0},s=()=>{if(n=!1,!w)return;const O=A.getActive();O&&x(O);const Q=P(w);Q&&A.forceScene(Q)};t.domElement.addEventListener("webglcontextlost",r),t.domElement.addEventListener("webglcontextrestored",s);const a=new of;a.background=null;const o=new on(55,i.clientWidth/i.clientHeight,.1,100);o.position.set(0,0,12),o.lookAt(0,0,0);const u=new U_(a,o),l=Math.floor(i.clientWidth*e.bloomResolutionScale)||1,f=Math.floor(i.clientHeight*e.bloomResolutionScale)||1,d=new tr(new Ue(l,f),1,.4,.85);d.threshold=.1,d.strength=.8,d.radius=.5;const c=new To(G_);c.renderToScreen=!1,c.material.glslVersion=vo;const h=new I_(t);h.addPass(u);const g=e.tier!=="low";e.bloomEnabled&&h.addPass(d),e.scanlineEnabled&&h.addPass(c);let S=null;g&&(S=new To(F_),S.uniforms.resolution.value.set(1/(i.clientWidth*t.getPixelRatio()),1/(i.clientHeight*t.getPixelRatio())),h.addPass(S),S.renderToScreen=!0);let m=0,p=0,v=!1,b=null,y=0;const C=new N,E={value:.8},P=O=>{B_(42);const Q={width:t.domElement.clientWidth,height:t.domElement.clientHeight,colorScheme:O.colorScheme,softwarePlanes:e.softwarePlanes,camera:o},J=O.createScene(Q);return J.getObjects().forEach(Te=>a.add(Te)),J},x=O=>{O.getObjects().forEach(Q=>a.remove(Q)),O.dispose()},A=k_(x),R=O=>{d.strength=O.bloomStrength,d.radius=O.bloomRadius,d.threshold=O.bloomThreshold,E.value=O.bloomStrength,c.uniforms.uScanlineIntensity.value=O.scanlineIntensity,c.uniforms.uVignetteStrength.value=O.vignetteStrength,c.uniforms.uChromaticStrength.value=O.chromaticStrength};let w=null;const L=O=>{if(v||w?.sceneKind===O.sceneKind)return;w=O,b=O.cameraPreset,y=O.cameraPreset.initialAngle,R(O.postPreset),o&&(o.fov=O.cameraPreset.fov,o.updateProjectionMatrix());const Q=P(O);if(!Q)return;const J=A.getActive();A.transition(J,Q)},H=O=>{if(!b)return;const J=A.getActive()?.getCameraState?.();if(J){const te=Math.min(J.lerpFactor*O*.06,1);o.position.lerp(J.position,te),o.lookAt(J.lookAt);return}const ve=b;ve.autoRotate&&(y+=ve.orbitSpeed*O*.001);const Te=Math.sin(y*ve.heightFrequency)*ve.heightAmplitude,he=Math.sin(y)*ve.orbitRadius,X=Math.cos(y)*ve.orbitRadius;C.set(he,Te,X),o.position.lerp(C,.03),o.lookAt(0,0,0)},W=new Set(["INPUT","TEXTAREA","SELECT"]),U=new Set(["checkbox","radio","button","submit","reset","range","color"]),B=O=>{const Q=O.target,J=Q?.tagName;if(J&&W.has(J))if(J==="INPUT"){const Te=Q.type?.toLowerCase();if(!U.has(Te))return}else return;if(Q?.isContentEditable||O.key.length!==1)return;const ve=A.getActive();ve?.onKeyPress&&ve.onKeyPress(O.key)};window.addEventListener("keydown",B);const V=()=>{const O=i.clientWidth,Q=i.clientHeight;o.aspect=O/Q,o.updateProjectionMatrix(),t.setSize(O,Q),h.setSize(O,Q),e.bloomEnabled&&e.bloomResolutionScale>0&&d.setSize(Math.floor(O*e.bloomResolutionScale),Math.floor(Q*e.bloomResolutionScale)),c.uniforms.uResolution.value.set(O,Q),g&&S&&S.uniforms.resolution.value.set(1/(O*t.getPixelRatio()),1/(Q*t.getPixelRatio()))};window.addEventListener("resize",V,{passive:!0});const j=O=>{if(m=requestAnimationFrame(j),n)return;const Q=p===0?16:Math.min(O-p,50);p=O,H(Q),A.update(Q);const J=A.getActive();if(J&&(J.update(O*.001,Q*.001,null),J.getDensity)){const ve=J.getDensity(),Te=w?.postPreset.bloomStrength??.8,he=Te*.5+ve*Te;E.value+=(he-E.value)*.03,d.strength=E.value}g?(c.uniforms.uTime.value=O*.001,h.render()):t.render(a,o)};return m=requestAnimationFrame(j),Object.freeze({setTheme:L,dispose:()=>{v=!0,cancelAnimationFrame(m);const O=A.getActive();O&&x(O),window.removeEventListener("resize",V),window.removeEventListener("keydown",B),t.domElement.removeEventListener("webglcontextlost",r),t.domElement.removeEventListener("webglcontextrestored",s),t.dispose(),t.domElement.parentNode===i&&i.removeChild(t.domElement)},resize:V})},W_=()=>{const i=document.createElement("canvas"),e=i.getContext("webgl2");if(i.remove(),!e)return Object.freeze({isIntegrated:!0,isAppleGpu:!1,renderer:"unknown",webgl2Available:!1});const t=e.getExtension("WEBGL_debug_renderer_info"),n=t?(e.getParameter(t.UNMASKED_RENDERER_WEBGL)??"").toLowerCase():"",r=/intel.*(hd|uhd|iris|gma)|mali|adreno|powervr/i.test(n),s=/apple (m[1-9]|gpu)/i.test(n);return Object.freeze({isIntegrated:r,isAppleGpu:s,renderer:n,webgl2Available:!0})},cc=()=>{const i=navigator.deviceMemory;return i!==void 0&&i<4},$_=()=>{const i=W_();return!i.webgl2Available||i.isIntegrated&&cc()||i.isAppleGpu&&cc()?Object.freeze({tier:"low",pixelRatio:1,bloomEnabled:!1,bloomResolutionScale:0,scanlineEnabled:!1,softwarePlanes:1}):i.isIntegrated||i.isAppleGpu?Object.freeze({tier:"medium",pixelRatio:1.5,bloomEnabled:!0,bloomResolutionScale:.5,scanlineEnabled:!0,softwarePlanes:2}):Object.freeze({tier:"high",pixelRatio:Math.min(window.devicePixelRatio,2),bloomEnabled:!0,bloomResolutionScale:1,scanlineEnabled:!0,softwarePlanes:3})},X_=Object.freeze({[tn.AI]:()=>Dr(()=>import("./index-UJwn3GnR.js"),__vite__mapDeps([0,1,2,3])).then(i=>i.default),[tn.Blockchain]:()=>Dr(()=>import("./index-DROED1tm.js"),__vite__mapDeps([4,5,1,2,3])).then(i=>i.default),[tn.Software]:()=>Dr(()=>import("./index-D3EhOlsz.js"),__vite__mapDeps([6,5,1,2,3])).then(i=>i.default),[tn.Web]:()=>Dr(()=>import("./index-B7tlVE7p.js"),__vite__mapDeps([7,5,1,2,3])).then(i=>i.default)}),Ta=new Map;async function q_(i){const e=Ta.get(i);if(e)return e;const t=X_[i];if(!t)return null;const n=t().catch(r=>(Ta.delete(i),console.error(`[theme] Failed to load theme "${i}":`,r),null));return Ta.set(i,n),n}var Y_=$e('<div class="absolute inset-0 w-full h-full overflow-hidden"style=position:absolute;top:0;left:0;z-index:1>');function j_(){let i,e;const[t]=Ju(()=>ys(),async n=>q_(n));return fn(()=>{const n=i;if(!n)return;const r=$_();e=H_(n,r)}),Ct(()=>{const n=t();n&&e&&e.setTheme(n)}),_t(()=>{e?.dispose(),e=void 0}),(()=>{var n=We(Y_),r=i;return typeof r=="function"?oi(r,n):i=n,n})()}function K_(){const[i,e]=nt(!1);return fn(()=>e(!0)),se($t,{get when(){return i()},get children(){return se(j_,{})}})}function Z_(){return se(Zu,{fallback:()=>null,get children(){return se(K_,{})}})}var J_=$e("<span><!$><!/><!$><!/>"),Q_=$e("<span class=animate-pulse>|");function e0(i){const[e,t]=nt(""),[n,r]=nt(!0);return fn(()=>{let s=0;const a=i.text;if(a.length===0){r(!1);return}const o=setInterval(()=>{s++,t(a.substring(0,s)),s>=a.length&&(r(!1),clearInterval(o))},i.speed||80);_t(()=>clearInterval(o))}),(()=>{var s=We(J_),a=s.firstChild,[o,u]=Ie(a.nextSibling),l=o.nextSibling,[f,d]=Ie(l.nextSibling);return ae(s,e,o,u),ae(s,(()=>{var c=An(()=>!!n());return()=>c()&&We(Q_)})(),f,d),Tt(()=>xn(s,i.class)),s})()}var t0=$e("<span><!$><!/><span class=animate-pulse>|");function n0(i){const[e,t]=nt(""),[n,r]=nt(0),[s,a]=nt(0),[o,u]=nt(0);return fn(()=>{const l=i.titles.map(c=>c.toUpperCase());if(l.length===0)return;const f=i.speed||80,d=setInterval(()=>{const c=l[s()];if(n()===0){const h=c.substring(0,e().length+1);t(h),h===c&&(r(1),u(Math.ceil((i.pauseMs||2e3)/f)))}else if(n()===1)o()<=0?r(2):u(h=>h-1);else{const h=e().substring(0,e().length-1);t(h),h.length===0&&(r(0),a(g=>(g+1)%l.length))}},f);_t(()=>clearInterval(d))}),(()=>{var l=We(t0),f=l.firstChild,[d,c]=Ie(f.nextSibling);return d.nextSibling,ae(l,e,d,c),Tt(()=>xn(l,i.class)),l})()}var i0=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],r0=i=>se(Xt,mt(i,{iconNode:i0,name:"brain"})),s0=r0,a0=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],o0=i=>se(Xt,mt(i,{iconNode:a0,name:"blocks"})),l0=o0,c0=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],u0=i=>se(Xt,mt(i,{iconNode:c0,name:"terminal"})),Su=u0,d0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],f0=i=>se(Xt,mt(i,{iconNode:d0,name:"globe"})),h0=f0,p0=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],m0=i=>se(Xt,mt(i,{iconNode:p0,name:"palette"})),g0=m0,_0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],x0=i=>se(Xt,mt(i,{iconNode:_0,name:"check"})),v0=x0,S0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],M0=i=>se(Xt,mt(i,{iconNode:S0,name:"chevron-down"})),b0=M0,y0=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],E0=i=>se(Xt,mt(i,{iconNode:y0,name:"linkedin"})),Mu=E0,T0=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],A0=i=>se(Xt,mt(i,{iconNode:T0,name:"mail"})),bu=A0,w0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],C0=i=>se(Xt,mt(i,{iconNode:w0,name:"external-link"})),$o=C0,R0=$e('<p class="text-text-muted text-xs font-mono mb-3 flex items-center justify-center gap-2"><!$><!/><span>'),P0=$e('<section id=home class="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg"><!$><!/><div class="relative z-10 text-center px-6 max-w-4xl mx-auto bg-bg/25 backdrop-blur-[2px] rounded-2xl py-8"><div class="mb-6 inline-block"><span class="font-mono text-xs text-accent-primary border border-accent-primary/30 px-3 py-1 rounded-full bg-accent-primary/5">&lt;AI_Engineer /&gt;</span></div><h1 class="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-4 tracking-tight"></h1><div class="h-12 md:h-16 flex items-center justify-center mb-8"></div><p class="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"></p><div class=mb-10><!$><!/><div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto"></div></div><div class="flex items-center justify-center gap-6 mb-12"></div><button class="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent-primary transition-colors animate-bounce"aria-label="Scroll down">'),D0=$e('<span class="absolute top-1 right-1 w-4 h-4 rounded-full bg-accent-primary flex items-center justify-center">'),L0=$e('<button class="relative flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 active:scale-95"><!$><!/><!$><!/><span class="text-xs font-mono font-bold"></span><div class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full border border-text-muted/20"></span><span class="w-2.5 h-2.5 rounded-full border border-text-muted/20"></span><span class="w-2.5 h-2.5 rounded-full border border-text-muted/20"></span><span class="w-2.5 h-2.5 rounded-full border border-text-muted/20"></span></div><!$><!/>'),I0=$e('<span class="text-[10px] leading-tight text-text-muted">'),U0=$e('<a class="p-3 rounded-full border border-border hover:border-accent-primary hover:text-accent-primary hover:shadow-glow-primary transition-all">');function N0(){const{sharedData:i,messages:e,t}=li(),n=()=>i()?.basic_info?.name||"",r=()=>e()?.hero?.titles||i()?.basic_info?.titles||[],s=()=>t("hero.subtitle",""),a=()=>{document.getElementById("about")?.scrollIntoView({behavior:"smooth"})},o=(f,d)=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),tl(d))},u={github:Rc,linkedin:Mu,gmail:bu},l=()=>i()?.basic_info?.social||[];return(()=>{var f=We(P0),d=f.firstChild,[c,h]=Ie(d.nextSibling),g=c.nextSibling,S=g.firstChild,m=S.nextSibling,p=m.nextSibling,v=p.nextSibling,b=v.nextSibling,y=b.firstChild,[C,E]=Ie(y.nextSibling),P=C.nextSibling,x=b.nextSibling,A=x.nextSibling;return ae(f,se(Z_,{}),c,h),ae(m,se($t,{get when(){return n()},get children(){return se(e0,{get text(){return n()},class:"text-text"})}})),ae(p,se($t,{get when(){return r().length>0},get children(){return se(n0,{get titles(){return r()},class:"font-mono text-lg md:text-2xl text-accent-secondary"})}})),ae(v,s),ae(b,se($t,{get when(){return e()},get children(){var R=We(R0),w=R.firstChild,[L,H]=Ie(w.nextSibling),W=L.nextSibling;return ae(R,se(g0,{size:14}),L,H),ae(W,()=>t("hero.themes_label","Explorar temas")),R}}),C,E),ae(P,()=>od.map(R=>{const w=()=>ys()===R.id;return(()=>{var L=We(L0),H=L.firstChild,[W,U]=Ie(H.nextSibling),B=W.nextSibling,[V,j]=Ie(B.nextSibling),ne=V.nextSibling,O=ne.nextSibling,Q=O.firstChild,J=Q.nextSibling,ve=J.nextSibling,Te=ve.nextSibling,he=O.nextSibling,[X,te]=Ie(he.nextSibling);return L.$$keydown=q=>o(q,R.id),L.$$click=()=>tl(R.id),ae(L,se($t,{get when(){return w()},get children(){var q=We(D0);return ae(q,se(v0,{size:10,class:"text-bg"})),q}}),W,U),ae(L,(()=>{var q=An(()=>R.id===tn.AI);return()=>q()?se(s0,{size:24}):An(()=>R.id===tn.Blockchain)()?se(l0,{size:24}):An(()=>R.id===tn.Software)()?se(Su,{size:24}):se(h0,{size:24})})(),V,j),ae(ne,()=>R.label),ae(L,se($t,{get when(){return t(`hero.themes_${R.id}`,"")},children:q=>(()=>{var ge=We(I0);return ae(ge,q),ge})()}),X,te),Tt(q=>{var ge={"text-accent-primary bg-accent-primary/10 border-2 border-accent-primary/50 shadow-[var(--shadow-glow-primary)] scale-105":w(),"text-text-secondary bg-surface/30 border border-border hover:border-accent-primary/40 hover:bg-surface/50 hover:scale-[1.02]":!w()},we=w(),Ae=`${R.label} — ${t(`hero.themes_${R.id}`,"")}`,Je=R.primary,Fe=R.secondary,Ke=R.tertiary,tt=R.background;return q.e=Qu(L,ge,q.e),we!==q.t&&Rt(L,"aria-pressed",q.t=we),Ae!==q.a&&Rt(L,"aria-label",q.a=Ae),Je!==q.o&&ut(Q,"background-color",q.o=Je),Fe!==q.i&&ut(J,"background-color",q.i=Fe),Ke!==q.n&&ut(ve,"background-color",q.n=Ke),tt!==q.s&&ut(Te,"background-color",q.s=tt),q},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),ii(),L})()})),ae(x,()=>l().map(R=>{const w=u[R.name]||$o,L=R.url.startsWith("mailto:");return(()=>{var H=We(U0);return Rt(H,"target",L?void 0:"_blank"),Rt(H,"rel",L?void 0:"noopener noreferrer"),ae(H,se(w,{size:20})),Tt(W=>{var U=R.url,B=R.name;return U!==W.e&&Rt(H,"href",W.e=U),B!==W.t&&Rt(H,"aria-label",W.t=B),W},{e:void 0,t:void 0}),H})()})),A.$$click=a,ae(A,se(b0,{size:32})),ii(),f})()}Co(["click","keydown"]);var F0=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],O0=i=>se(Xt,mt(i,{iconNode:F0,name:"code"})),B0=O0,z0=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],V0=i=>se(Xt,mt(i,{iconNode:z0,name:"database"})),k0=V0,G0=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],H0=i=>se(Xt,mt(i,{iconNode:G0,name:"cpu"})),W0=H0,$0=$e('<section id=about class="py-section bg-bg relative"><div class="max-w-6xl mx-auto px-6"><h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-text"><span class=text-accent-primary>&gt;</span> <!$><!/></h2><div class="grid md:grid-cols-[280px_1fr] gap-12 items-start"><div class="flex justify-center md:justify-start"><div class="bg-surface p-3 rounded-2xl shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-300 border border-border"style="transition:opacity 0.6s ease-out, transform 0.6s ease-out"><img alt="Gustavo M Camargo"class="w-64 h-64 object-cover rounded-xl mb-4"loading=lazy><div class="flex justify-center gap-4 text-accent-primary"><!$><!/><!$><!/><!$><!/><!$><!/></div></div></div><div class="bg-surface rounded-2xl overflow-hidden shadow-xl border border-border"style="transition:opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s"><div class="flex gap-2 px-5 py-4 bg-black/40 border-b border-border"><span class="w-3 h-3 rounded-full bg-accent-red"></span><span class="w-3 h-3 rounded-full bg-accent-quaternary"></span><span class="w-3 h-3 rounded-full bg-accent-primary"></span><span class="ml-3 font-mono text-xs text-text-muted">gustavo@portfolio ~ neofetch</span></div><div class="p-6 md:p-8"><p class="font-mono text-lg font-semibold text-accent-primary mb-4"><!$><!/> :)</p><p class="text-text-secondary leading-relaxed text-sm md:text-base whitespace-pre-line">',!0,!1,!1);function X0(){const{sharedData:i,t:e}=li(),[t,n]=nt(!1);let r;fn(()=>{const o=new IntersectionObserver(([u])=>{u.isIntersecting&&n(!0)},{threshold:.2});r&&o.observe(r),_t(()=>o.disconnect())});const s=()=>{const o=i()?.basic_info?.image;return o?`/images/${o}`:""},a=()=>e("basic_info.section_name.about","Sobre Mim");return(()=>{var o=We($0),u=o.firstChild,l=u.firstChild,f=l.firstChild,d=f.nextSibling,c=d.nextSibling,[h,g]=Ie(c.nextSibling),S=l.nextSibling,m=S.firstChild,p=m.firstChild,v=p.firstChild,b=v.nextSibling,y=b.firstChild,[C,E]=Ie(y.nextSibling),P=C.nextSibling,[x,A]=Ie(P.nextSibling),R=x.nextSibling,[w,L]=Ie(R.nextSibling),H=w.nextSibling,[W,U]=Ie(H.nextSibling),B=m.nextSibling,V=B.firstChild,j=V.nextSibling,ne=j.firstChild,O=ne.firstChild,[Q,J]=Ie(O.nextSibling);Q.nextSibling;var ve=ne.nextSibling,Te=r;return typeof Te=="function"?oi(Te,o):r=o,ae(l,a,h,g),ae(b,se(B0,{size:28}),C,E),ae(b,se(Su,{size:28}),x,A),ae(b,se(k0,{size:28}),w,L),ae(b,se(W0,{size:28}),W,U),ae(ne,()=>e("basic_info.description_header"),Q,J),ae(ve,()=>e("basic_info.description")),Tt(he=>{var X=t()?1:0,te=t()?"translateY(0) rotate(-2deg)":"translateY(30px) rotate(-2deg)",q=s(),ge=t()?1:0,we=t()?"translateY(0)":"translateY(30px)";return X!==he.e&&ut(p,"opacity",he.e=X),te!==he.t&&ut(p,"transform",he.t=te),q!==he.a&&Rt(v,"src",he.a=q),ge!==he.o&&ut(B,"opacity",he.o=ge),we!==he.i&&ut(B,"transform",he.i=we),he},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),o})()}var q0=$e('<section id=stats class="py-16 bg-surface border-y border-border"><div class="max-w-6xl mx-auto px-6"><div class="grid grid-cols-2 md:grid-cols-4 gap-8">'),Y0=$e('<div class=text-center><div class="text-4xl md:text-5xl font-bold font-display text-accent-primary mb-2"><!$><!/><!$><!/></div><div class="text-sm text-text-muted font-medium uppercase tracking-wider">');function j0(){const{t:i}=li(),[e,t]=nt(!1),[n,r]=nt([0,0,0,0]);let s;const a=()=>[{label:i("stats.projects","Projetos"),value:10,suffix:"+"},{label:i("stats.years","Anos Exp."),value:5,suffix:""},{label:i("stats.languages","Linguagens"),value:8,suffix:""},{label:i("stats.deploys","Deploys"),value:50,suffix:"+"}];return fn(()=>{const o=a(),u=2e3;let l=0;const f=(c,h)=>{const g=c-h,S=Math.min(g/u,1),m=1-Math.pow(1-S,3);r(o.map(p=>Math.floor(p.value*m))),S<1&&(l=requestAnimationFrame(p=>f(p,h)))},d=new IntersectionObserver(([c])=>{if(c.isIntersecting){t(!0),d.disconnect();const h=performance.now();l=requestAnimationFrame(g=>f(g,h))}},{threshold:.3});s&&d.observe(s),_t(()=>{d.disconnect(),l&&cancelAnimationFrame(l)})}),(()=>{var o=We(q0),u=o.firstChild,l=u.firstChild,f=s;return typeof f=="function"?oi(f,o):s=o,ae(l,se(cn,{get each(){return a()},children:(d,c)=>(()=>{var h=We(Y0),g=h.firstChild,S=g.firstChild,[m,p]=Ie(S.nextSibling),v=m.nextSibling,[b,y]=Ie(v.nextSibling),C=g.nextSibling;return ae(g,()=>n()[c()],m,p),ae(g,()=>d.suffix,b,y),ae(C,()=>d.label),Tt(E=>{var P=e()?1:0,x=e()?"translateY(0)":"translateY(20px)",A=`opacity 0.5s ease-out ${c()*.1}s, transform 0.5s ease-out ${c()*.1}s`;return P!==E.e&&ut(h,"opacity",E.e=P),x!==E.t&&ut(h,"transform",E.t=x),A!==E.a&&ut(h,"transition",E.a=A),E},{e:void 0,t:void 0,a:void 0}),h})()})),o})()}var K0=$e('<section id=skills class="py-section bg-bg relative"><div class="max-w-6xl mx-auto px-6"><h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-text"><span class=text-accent-tertiary>&gt;</span> <!$><!/></h2><div class="grid md:grid-cols-3 gap-10">'),Z0=$e('<div class="bg-surface rounded-2xl p-6 border border-border"><h3 class="text-accent-secondary font-mono text-sm uppercase tracking-wider mb-6"></h3><div class=space-y-4>'),J0=$e('<div><div class="flex items-center justify-between mb-1"><div class="flex items-center gap-3"><i></i><span class="text-sm font-medium text-text"></span></div><span class="text-xs font-mono text-text-muted"><!$><!/>%</span></div><div class="h-2 bg-surface-elevated rounded-full overflow-hidden"><div class="h-full rounded-full bg-accent-primary transition-all duration-1000 ease-out">');const uc={languages:0,frameworks:1,data:2};function Q0(){const{sharedData:i,messages:e,t}=li(),[n,r]=nt(!1);let s;fn(()=>{const f=new IntersectionObserver(([d])=>{d.isIntersecting&&r(!0)},{threshold:.1});s&&f.observe(s),_t(()=>f.disconnect())});const a=()=>i()?.skills?.icons||[],o=()=>t("basic_info.section_name.skills",""),u=()=>e()?.skills_categories,l=()=>{const f=a(),d=new Map;for(const h of f){const g=h.category||"other";d.has(g)||d.set(g,[]);const S=d.get(g);S&&S.push(h)}const c=[];for(const[h,g]of d)c.push({key:h,name:u()?.[h]||h,skills:g});return c.sort((h,g)=>(uc[h.key]??99)-(uc[g.key]??99)),c};return(()=>{var f=We(K0),d=f.firstChild,c=d.firstChild,h=c.firstChild,g=h.nextSibling,S=g.nextSibling,[m,p]=Ie(S.nextSibling),v=c.nextSibling,b=s;return typeof b=="function"?oi(b,f):s=f,ae(c,o,m,p),ae(v,se(cn,{get each(){return l()},children:(y,C)=>(()=>{var E=We(Z0),P=E.firstChild,x=P.nextSibling;return ae(P,()=>y.name),ae(x,se(cn,{get each(){return y.skills},children:(A,R)=>(()=>{var w=We(J0),L=w.firstChild,H=L.firstChild,W=H.firstChild,U=W.nextSibling,B=H.nextSibling,V=B.firstChild,[j,ne]=Ie(V.nextSibling);j.nextSibling;var O=L.nextSibling,Q=O.firstChild;return ae(U,()=>A.name),ae(B,()=>A.level,j,ne),Tt(J=>{var ve=n()?1:0,Te=n()?"translateX(0)":"translateX(-10px)",he=`opacity 0.4s ease-out ${C()*.15+R()*.05}s, transform 0.4s ease-out ${C()*.15+R()*.05}s`,X=`${A.class} text-lg text-text-secondary`,te=n()?`${A.level}%`:"0%",q=`${C()*.15+R()*.05}s`;return ve!==J.e&&ut(w,"opacity",J.e=ve),Te!==J.t&&ut(w,"transform",J.t=Te),he!==J.a&&ut(w,"transition",J.a=he),X!==J.o&&xn(W,J.o=X),te!==J.i&&ut(Q,"width",J.i=te),q!==J.n&&ut(Q,"transition-delay",J.n=q),J},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),w})()})),Tt(A=>{var R=n()?1:0,w=n()?"translateY(0)":"translateY(30px)",L=`opacity 0.6s ease-out ${C()*.15}s, transform 0.6s ease-out ${C()*.15}s`;return R!==A.e&&ut(E,"opacity",A.e=R),w!==A.t&&ut(E,"transform",A.t=w),L!==A.a&&ut(E,"transition",A.a=L),A},{e:void 0,t:void 0,a:void 0}),E})()})),f})()}var ex=$e('<section id=experience class="py-section bg-surface relative"><div class="max-w-4xl mx-auto px-6"><h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-text"><span class=text-accent-secondary>&gt;</span> <!$><!/></h2><div class=relative><div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px"></div><!$><!/>'),tx=$e('<ul class="mb-3 space-y-1">'),nx=$e('<div><div class="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-primary border-2 border-bg -translate-x-1/2 mt-2 shadow-glow-primary"></div><div><div class="bg-bg rounded-xl p-6 border border-border hover:border-accent-primary/50 transition-colors"><div class="flex items-center gap-3 mb-2 md:justify-start"><i></i><div><h3 class="font-semibold text-text"></h3><p class="text-accent-secondary text-sm"></p></div></div><p class="text-xs font-mono text-text-muted mb-3"></p><!$><!/><div class="flex flex-wrap gap-2"><!$><!/><!$><!/>'),ix=$e('<li class="text-xs text-text-secondary leading-relaxed flex items-start gap-1.5"><span class="text-accent-primary mt-0.5 shrink-0">▹</span><span>'),rx=$e('<span class="px-2 py-0.5 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-medium">'),sx=$e('<span class="px-2 py-0.5 rounded-full bg-surface-elevated text-text-muted text-xs">');function ax(){const{messages:i,t:e}=li(),[t,n]=nt(!1);let r;fn(()=>{const o=new IntersectionObserver(([u])=>{u.isIntersecting&&n(!0)},{threshold:.1});r&&o.observe(r),_t(()=>o.disconnect())});const s=()=>i()?.experience||[],a=()=>e("basic_info.section_name.experience","");return(()=>{var o=We(ex),u=o.firstChild,l=u.firstChild,f=l.firstChild,d=f.nextSibling,c=d.nextSibling,[h,g]=Ie(c.nextSibling),S=l.nextSibling,m=S.firstChild,p=m.nextSibling,[v,b]=Ie(p.nextSibling),y=r;return typeof y=="function"?oi(y,o):r=o,ae(l,a,h,g),ae(S,se(cn,{get each(){return s()},children:(C,E)=>(()=>{var P=We(nx),x=P.firstChild,A=x.nextSibling,R=A.firstChild,w=R.firstChild,L=w.firstChild,H=L.nextSibling,W=H.firstChild,U=W.nextSibling,B=w.nextSibling,V=B.nextSibling,[j,ne]=Ie(V.nextSibling),O=j.nextSibling,Q=O.firstChild,[J,ve]=Ie(Q.nextSibling),Te=J.nextSibling,[he,X]=Ie(Te.nextSibling);return ae(W,()=>C.title),ae(U,()=>C.company),ae(B,()=>C.years),ae(R,se($t,{get when(){return C.highlights},get children(){var te=We(tx);return ae(te,se(cn,{get each(){return C.highlights},children:q=>(()=>{var ge=We(ix),we=ge.firstChild,Ae=we.nextSibling;return ae(Ae,q),ge})()})),te}}),j,ne),ae(O,se(cn,{get each(){return C.mainTech},children:te=>(()=>{var q=We(rx);return ae(q,te),q})()}),J,ve),ae(O,se(cn,{get each(){return C.technologies},children:te=>(()=>{var q=We(sx);return ae(q,te),q})()}),he,X),Tt(te=>{var q=`relative flex items-start gap-6 mb-12 ${E()%2===0?"md:flex-row":"md:flex-row-reverse"}`,ge=t()?1:0,we=t()?"translateY(0)":"translateY(20px)",Ae=`opacity 0.5s ease-out ${E()*.12}s, transform 0.5s ease-out ${E()*.12}s`,Je=`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${E()%2===0?"md:pr-8 md:text-right":"md:pl-8 md:text-left"}`,Fe=`${C.icon} text-2xl text-accent-primary`;return q!==te.e&&xn(P,te.e=q),ge!==te.t&&ut(P,"opacity",te.t=ge),we!==te.a&&ut(P,"transform",te.a=we),Ae!==te.o&&ut(P,"transition",te.o=Ae),Je!==te.i&&xn(A,te.i=Je),Fe!==te.n&&xn(L,te.n=Fe),te},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),P})()}),v,b),o})()}function ox(i){return(...e)=>{for(const t of i)t&&t(...e)}}const kn=i=>typeof i=="function"&&!i.length?i():i;function lx(i,...e){return typeof i=="function"?i(...e):i}const cx=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function dc(i){const e={};let t;for(;t=cx.exec(i);)e[t[1]]=t[2];return e}function ux(i,e){if(typeof i=="string"){if(typeof e=="string")return`${i};${e}`;i=dc(i)}else typeof e=="string"&&(e=dc(e));return{...i,...e}}function Ar(...i){return ox(i)}function fc(i,e){const t=[...i],n=t.indexOf(e);return n!==-1&&t.splice(n,1),t}function dx(i){return Object.prototype.toString.call(i)==="[object String]"}function fx(i){return typeof i=="function"}function hx(i){return e=>`${i()}-${e}`}function zn(i,e){return i?i===e||i.contains(e):!1}function Sr(i,e=!1){const{activeElement:t}=ai(i);if(!t?.nodeName)return null;if(yu(t)&&t.contentDocument)return Sr(t.contentDocument.body,e);if(e){const n=t.getAttribute("aria-activedescendant");if(n){const r=ai(t).getElementById(n);if(r)return r}}return t}function ai(i){return i?i.ownerDocument||i:document}function yu(i){return i.tagName==="IFRAME"}var Eu=(i=>(i.Escape="Escape",i.Enter="Enter",i.Tab="Tab",i.Space=" ",i.ArrowDown="ArrowDown",i.ArrowLeft="ArrowLeft",i.ArrowRight="ArrowRight",i.ArrowUp="ArrowUp",i.End="End",i.Home="Home",i.PageDown="PageDown",i.PageUp="PageUp",i))(Eu||{});function px(i){return typeof window<"u"&&window.navigator!=null?i.test(window.navigator.userAgentData?.platform||window.navigator.platform):!1}function mx(){return px(/^Mac/i)}function Vs(i,e){return e&&(fx(e)?e(i):e[0](e[1],i)),i?.defaultPrevented}function hc(i){return e=>{for(const t of i)Vs(e,t)}}function gx(i){return mx()?i.metaKey&&!i.ctrlKey:i.ctrlKey&&!i.metaKey}function Fn(i){if(i)if(_x())i.focus({preventScroll:!0});else{const e=xx(i);i.focus(),vx(e)}}var fs=null;function _x(){if(fs==null){fs=!1;try{document.createElement("div").focus({get preventScroll(){return fs=!0,!0}})}catch{}}return fs}function xx(i){let e=i.parentNode;const t=[],n=document.scrollingElement||document.documentElement;for(;e instanceof HTMLElement&&e!==n;)(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&t.push({element:e,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft}),e=e.parentNode;return n instanceof HTMLElement&&t.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),t}function vx(i){for(const{element:e,scrollTop:t,scrollLeft:n}of i)e.scrollTop=t,e.scrollLeft=n}var Sx=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],Tu=`${Sx.join(":not([hidden]),")},[tabindex]:not([disabled]):not([hidden])`;function Au(i,e){const n=Array.from(i.querySelectorAll(Tu)).filter(pc);return e&&pc(i)&&n.unshift(i),n.forEach((r,s)=>{if(yu(r)&&r.contentDocument){const a=r.contentDocument.body,o=Au(a,!1);n.splice(s,1,...o)}}),n}function pc(i){return wu(i)&&!Mx(i)}function wu(i){return i.matches(Tu)&&Cu(i)}function Mx(i){return Number.parseInt(i.getAttribute("tabindex")||"0",10)<0}function Cu(i,e){return i.nodeName!=="#comment"&&bx(i)&&yx(i,e)&&(!i.parentElement||Cu(i.parentElement,i))}function bx(i){if(!(i instanceof HTMLElement)&&!(i instanceof SVGElement))return!1;const{display:e,visibility:t}=i.style;let n=e!=="none"&&t!=="hidden"&&t!=="collapse";if(n){if(!i.ownerDocument.defaultView)return n;const{getComputedStyle:r}=i.ownerDocument.defaultView,{display:s,visibility:a}=r(i);n=s!=="none"&&a!=="hidden"&&a!=="collapse"}return n}function yx(i,e){return!i.hasAttribute("hidden")&&(i.nodeName==="DETAILS"&&e&&e.nodeName!=="SUMMARY"?i.hasAttribute("open"):!0)}function Ex(){}function wr(i,e){return mt(i,e)}var gr=new Map,mc=new Set;function gc(){if(typeof window>"u")return;const i=t=>{if(!t.target)return;let n=gr.get(t.target);n||(n=new Set,gr.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)},e=t=>{if(!t.target)return;const n=gr.get(t.target);if(n&&(n.delete(t.propertyName),n.size===0&&(t.target.removeEventListener("transitioncancel",e),gr.delete(t.target)),gr.size===0)){for(const r of mc)r();mc.clear()}};document.body.addEventListener("transitionrun",i),document.body.addEventListener("transitionend",e)}typeof document<"u"&&(document.readyState!=="loading"?gc():document.addEventListener("DOMContentLoaded",gc));var Tx={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"},Ns="data-kb-top-layer",Ru,Ao=!1,Hn=[];function yr(i){return Hn.findIndex(e=>e.node===i)}function Ax(i){return Hn[yr(i)]}function wx(i){return Hn[Hn.length-1].node===i}function Pu(){return Hn.filter(i=>i.isPointerBlocking)}function Cx(){return[...Pu()].slice(-1)[0]}function Xo(){return Pu().length>0}function Du(i){const e=yr(Cx()?.node);return yr(i)<e}function Rx(i){Hn.push(i)}function Px(i){const e=yr(i);e<0||Hn.splice(e,1)}function Dx(){for(const{node:i}of Hn)i.style.pointerEvents=Du(i)?"none":"auto"}function Lx(i){if(Xo()&&!Ao){const e=ai(i);Ru=document.body.style.pointerEvents,e.body.style.pointerEvents="none",Ao=!0}}function Ix(i){if(Xo())return;const e=ai(i);e.body.style.pointerEvents=Ru,e.body.style.length===0&&e.body.removeAttribute("style"),Ao=!1}var Jt={layers:Hn,isTopMostLayer:wx,hasPointerBlockingLayer:Xo,isBelowPointerBlockingLayer:Du,addLayer:Rx,removeLayer:Px,indexOf:yr,find:Ax,assignPointerEventToLayers:Dx,disableBodyPointerEvents:Lx,restoreBodyPointerEvents:Ix},Aa="focusScope.autoFocusOnMount",wa="focusScope.autoFocusOnUnmount",_c={bubbles:!1,cancelable:!0},xc={stack:[],active(){return this.stack[0]},add(i){i!==this.active()&&this.active()?.pause(),this.stack=fc(this.stack,i),this.stack.unshift(i)},remove(i){this.stack=fc(this.stack,i),this.active()?.resume()}};function Ux(i,e){const[t,n]=nt(!1),r={pause(){n(!0)},resume(){n(!1)}};let s=null;const a=g=>i.onMountAutoFocus?.(g),o=g=>i.onUnmountAutoFocus?.(g),u=()=>ai(e()),l=()=>{const g=u().createElement("span");return g.setAttribute("data-focus-trap",""),g.tabIndex=0,Object.assign(g.style,Tx),g},f=()=>{const g=e();return g?Au(g,!0).filter(S=>!S.hasAttribute("data-focus-trap")):[]},d=()=>{const g=f();return g.length>0?g[0]:null},c=()=>{const g=f();return g.length>0?g[g.length-1]:null},h=()=>{const g=e();if(!g)return!1;const S=Sr(g);return!S||zn(g,S)?!1:wu(S)};Ct(()=>{const g=e();if(!g)return;xc.add(r);const S=Sr(g);if(!zn(g,S)){const p=new CustomEvent(Aa,_c);g.addEventListener(Aa,a),g.dispatchEvent(p),p.defaultPrevented||setTimeout(()=>{Fn(d()),Sr(g)===S&&Fn(g)},0)}_t(()=>{g.removeEventListener(Aa,a),setTimeout(()=>{const p=new CustomEvent(wa,_c);h()&&p.preventDefault(),g.addEventListener(wa,o),g.dispatchEvent(p),p.defaultPrevented||Fn(S??u().body),g.removeEventListener(wa,o),xc.remove(r)},0)})}),Ct(()=>{const g=e();if(!g||!kn(i.trapFocus)||t())return;const S=p=>{const v=p.target;v?.closest(`[${Ns}]`)||(zn(g,v)?s=v:Fn(s))},m=p=>{const b=p.relatedTarget??Sr(g);b?.closest(`[${Ns}]`)||zn(g,b)||Fn(s)};u().addEventListener("focusin",S),u().addEventListener("focusout",m),_t(()=>{u().removeEventListener("focusin",S),u().removeEventListener("focusout",m)})}),Ct(()=>{const g=e();if(!g||!kn(i.trapFocus)||t())return;const S=l();g.insertAdjacentElement("afterbegin",S);const m=l();g.insertAdjacentElement("beforeend",m);function p(b){const y=d(),C=c();b.relatedTarget===y?Fn(C):Fn(y)}S.addEventListener("focusin",p),m.addEventListener("focusin",p);const v=new MutationObserver(b=>{for(const y of b)y.previousSibling===m&&(m.remove(),g.insertAdjacentElement("beforeend",m)),y.nextSibling===S&&(S.remove(),g.insertAdjacentElement("afterbegin",S))});v.observe(g,{childList:!0,subtree:!1}),_t(()=>{S.removeEventListener("focusin",p),m.removeEventListener("focusin",p),S.remove(),m.remove(),v.disconnect()})})}var Nx="data-live-announcer";function Fx(i){Ct(()=>{kn(i.isDisabled)||_t(Ox(kn(i.targets),kn(i.root)))})}var _r=new WeakMap,an=[];function Ox(i,e=document.body){const t=new Set(i),n=new Set,r=u=>{for(const c of u.querySelectorAll(`[${Nx}], [${Ns}]`))t.add(c);const l=c=>{if(t.has(c)||c.parentElement&&n.has(c.parentElement)&&c.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(const h of t)if(c.contains(h))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},f=document.createTreeWalker(u,NodeFilter.SHOW_ELEMENT,{acceptNode:l}),d=l(u);if(d===NodeFilter.FILTER_ACCEPT&&s(u),d!==NodeFilter.FILTER_REJECT){let c=f.nextNode();for(;c!=null;)s(c),c=f.nextNode()}},s=u=>{const l=_r.get(u)??0;u.getAttribute("aria-hidden")==="true"&&l===0||(l===0&&u.setAttribute("aria-hidden","true"),n.add(u),_r.set(u,l+1))};an.length&&an[an.length-1].disconnect(),r(e);const a=new MutationObserver(u=>{for(const l of u)if(!(l.type!=="childList"||l.addedNodes.length===0)&&![...t,...n].some(f=>f.contains(l.target))){for(const f of l.removedNodes)f instanceof Element&&(t.delete(f),n.delete(f));for(const f of l.addedNodes)(f instanceof HTMLElement||f instanceof SVGElement)&&(f.dataset.liveAnnouncer==="true"||f.dataset.reactAriaTopLayer==="true")?t.add(f):f instanceof Element&&r(f)}});a.observe(e,{childList:!0,subtree:!0});const o={observe(){a.observe(e,{childList:!0,subtree:!0})},disconnect(){a.disconnect()}};return an.push(o),()=>{a.disconnect();for(const u of n){const l=_r.get(u);if(l==null)return;l===1?(u.removeAttribute("aria-hidden"),_r.delete(u)):_r.set(u,l-1)}o===an[an.length-1]?(an.pop(),an.length&&an[an.length-1].observe()):an.splice(an.indexOf(o),1)}}var vc="interactOutside.pointerDownOutside",Sc="interactOutside.focusOutside";function Bx(i,e){let t,n=Ex;const r=()=>ai(e()),s=d=>i.onPointerDownOutside?.(d),a=d=>i.onFocusOutside?.(d),o=d=>i.onInteractOutside?.(d),u=d=>{const c=d.target;return!(c instanceof Element)||c.closest(`[${Ns}]`)||!zn(r(),c)||zn(e(),c)?!1:!i.shouldExcludeElement?.(c)},l=d=>{function c(){const h=e(),g=d.target;if(!h||!g||!u(d))return;const S=hc([s,o]);g.addEventListener(vc,S,{once:!0});const m=new CustomEvent(vc,{bubbles:!1,cancelable:!0,detail:{originalEvent:d,isContextMenu:d.button===2||gx(d)&&d.button===0}});g.dispatchEvent(m)}d.pointerType==="touch"?(r().removeEventListener("click",c),n=c,r().addEventListener("click",c,{once:!0})):c()},f=d=>{const c=e(),h=d.target;if(!c||!h||!u(d))return;const g=hc([a,o]);h.addEventListener(Sc,g,{once:!0});const S=new CustomEvent(Sc,{bubbles:!1,cancelable:!0,detail:{originalEvent:d,isContextMenu:!1}});h.dispatchEvent(S)};Ct(()=>{kn(i.isDisabled)||(t=window.setTimeout(()=>{r().addEventListener("pointerdown",l,!0)},0),r().addEventListener("focusin",f,!0),_t(()=>{window.clearTimeout(t),r().removeEventListener("click",n),r().removeEventListener("pointerdown",l,!0),r().removeEventListener("focusin",f,!0)}))})}function zx(i){const e=t=>{t.key===Eu.Escape&&i.onEscapeKeyDown?.(t)};Ct(()=>{if(kn(i.isDisabled))return;const t=i.ownerDocument?.()??ai();t.addEventListener("keydown",e),_t(()=>{t.removeEventListener("keydown",e)})})}function Cr(i){const[e,t]=Wn(i,["as"]);if(!e.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return se(ed,mt(t,{get component(){return e.as}}))}var Lu=Dc();function Vx(){return Pc(Lu)}function kx(i){let e;const t=Vx(),[n,r]=Wn(i,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),s=new Set([]),a=d=>{s.add(d);const c=t?.registerNestedLayer(d);return()=>{s.delete(d),c?.()}};Bx({shouldExcludeElement:d=>e?n.excludedElements?.some(c=>zn(c(),d))||[...s].some(c=>zn(c,d)):!1,onPointerDownOutside:d=>{!e||Jt.isBelowPointerBlockingLayer(e)||!n.bypassTopMostLayerCheck&&!Jt.isTopMostLayer(e)||(n.onPointerDownOutside?.(d),n.onInteractOutside?.(d),d.defaultPrevented||n.onDismiss?.())},onFocusOutside:d=>{n.onFocusOutside?.(d),n.onInteractOutside?.(d),d.defaultPrevented||n.onDismiss?.()}},()=>e),zx({ownerDocument:()=>ai(e),onEscapeKeyDown:d=>{!e||!Jt.isTopMostLayer(e)||(n.onEscapeKeyDown?.(d),!d.defaultPrevented&&n.onDismiss&&(d.preventDefault(),n.onDismiss()))}}),fn(()=>{if(!e)return;Jt.addLayer({node:e,isPointerBlocking:n.disableOutsidePointerEvents,dismiss:n.onDismiss});const d=t?.registerNestedLayer(e);Jt.assignPointerEventToLayers(),Jt.disableBodyPointerEvents(e),_t(()=>{e&&(Jt.removeLayer(e),d?.(),Jt.assignPointerEventToLayers(),Jt.restoreBodyPointerEvents(e))})}),Ct(td([()=>e,()=>n.disableOutsidePointerEvents],([d,c])=>{if(!d)return;const h=Jt.find(d);h&&h.isPointerBlocking!==c&&(h.isPointerBlocking=c,Jt.assignPointerEventToLayers()),c&&Jt.disableBodyPointerEvents(d),_t(()=>{Jt.restoreBodyPointerEvents(d)})},{defer:!0}));const f={registerNestedLayer:a};return se(Lu.Provider,{value:f,get children(){return se(Cr,mt({as:"div",ref(d){var c=Ar(h=>e=h,n.ref);typeof c=="function"&&c(d)}},r))}})}function Gx(i){const[e,t]=nt(i.defaultValue?.()),n=Yi(()=>i.value?.()!==void 0),r=Yi(()=>n()?i.value?.():e());return[r,a=>{Lc(()=>{const o=lx(a,r());return Object.is(o,r())||(n()||t(o),i.onChange?.(o)),o})}]}function Hx(i){const[e,t]=Gx(i);return[()=>e()??!1,t]}function Wx(i={}){const[e,t]=Hx({value:()=>kn(i.open),defaultValue:()=>!!kn(i.defaultOpen),onChange:a=>i.onOpenChange?.(a)}),n=()=>{t(!0)},r=()=>{t(!1)};return{isOpen:e,setIsOpen:t,open:n,close:r,toggle:()=>{e()?r():n()}}}function $x(i,e){const[t,n]=nt(Mc(e?.()));return Ct(()=>{n(i()?.tagName.toLowerCase()||Mc(e?.()))}),t}function Mc(i){return dx(i)?i:void 0}var Xx=Object.defineProperty,Iu=(i,e)=>{for(var t in e)Xx(i,t,{get:e[t],enumerable:!0})},qx={};Iu(qx,{Button:()=>Kx,Root:()=>ks});var Yx=["button","color","file","image","reset","submit"];function jx(i){const e=i.tagName.toLowerCase();return e==="button"?!0:e==="input"&&i.type?Yx.indexOf(i.type)!==-1:!1}function ks(i){let e;const t=wr({type:"button"},i),[n,r]=Wn(t,["ref","type","disabled"]),s=$x(()=>e,()=>"button"),a=Yi(()=>{const l=s();return l==null?!1:jx({tagName:l,type:n.type})}),o=Yi(()=>s()==="input"),u=Yi(()=>s()==="a"&&e?.getAttribute("href")!=null);return se(Cr,mt({as:"button",ref(l){var f=Ar(d=>e=d,n.ref);typeof f=="function"&&f(l)},get type(){return An(()=>!!(a()||o()))()?n.type:void 0},get role(){return!a()&&!u()?"button":void 0},get tabIndex(){return!a()&&!u()&&!n.disabled?0:void 0},get disabled(){return An(()=>!!(a()||o()))()?n.disabled:void 0},get"aria-disabled"(){return!a()&&!o()&&n.disabled?!0:void 0},get"data-disabled"(){return n.disabled?"":void 0}},r))}var Kx=ks;function Ca(i){return e=>(i(e),()=>i(void 0))}var Bt=i=>typeof i=="function"?i():i,wo=(i,e)=>{if(i.contains(e))return!0;let t=e;for(;t;){if(t===i)return!0;t=t._$host??t.parentElement}return!1},hs=new Map,Zx=i=>{Ct(()=>{const e=Bt(i.style)??{},t=Bt(i.properties)??[],n={};for(const s in e)n[s]=i.element.style[s];const r=hs.get(i.key);r?r.activeCount++:hs.set(i.key,{activeCount:1,originalStyles:n,properties:t.map(s=>s.key)}),Object.assign(i.element.style,i.style);for(const s of t)i.element.style.setProperty(s.key,s.value);_t(()=>{const s=hs.get(i.key);if(s){if(s.activeCount!==1){s.activeCount--;return}hs.delete(i.key);for(const[a,o]of Object.entries(s.originalStyles))i.element.style[a]=o;for(const a of s.properties)i.element.style.removeProperty(a);i.element.style.length===0&&i.element.removeAttribute("style"),i.cleanup?.()}})})},bc=Zx,Jx=(i,e)=>{switch(e){case"x":return[i.clientWidth,i.scrollLeft,i.scrollWidth];case"y":return[i.clientHeight,i.scrollTop,i.scrollHeight]}},Qx=(i,e)=>{const t=getComputedStyle(i),n=e==="x"?t.overflowX:t.overflowY;return n==="auto"||n==="scroll"||i.tagName==="HTML"&&n==="visible"},ev=(i,e,t)=>{const n=e==="x"&&window.getComputedStyle(i).direction==="rtl"?-1:1;let r=i,s=0,a=0,o=!1;do{const[u,l,f]=Jx(r,e),d=f-u-n*l;(l!==0||d!==0)&&Qx(r,e)&&(s+=d,a+=l),r===(t??document.documentElement)?o=!0:r=r._$host??r.parentElement}while(r&&!o);return[s,a]},[yc,Ec]=nt([]),tv=i=>yc().indexOf(i)===yc().length-1,nv=i=>{const e=mt({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},i),t=Ic();let n=[0,0],r=null,s=null;Ct(()=>{Bt(e.enabled)&&(Ec(l=>[...l,t]),_t(()=>{Ec(l=>l.filter(f=>f!==t))}))}),Ct(()=>{if(!Bt(e.enabled)||!Bt(e.hideScrollbar))return;const{body:l}=document,f=window.innerWidth-l.offsetWidth;if(Bt(e.preventScrollbarShift)){const d={overflow:"hidden"},c=[];f>0&&(Bt(e.preventScrollbarShiftMode)==="padding"?d.paddingRight=`calc(${window.getComputedStyle(l).paddingRight} + ${f}px)`:d.marginRight=`calc(${window.getComputedStyle(l).marginRight} + ${f}px)`,c.push({key:"--scrollbar-width",value:`${f}px`}));const h=window.scrollY,g=window.scrollX;bc({key:"prevent-scroll",element:l,style:d,properties:c,cleanup:()=>{Bt(e.restoreScrollPosition)&&f>0&&window.scrollTo(g,h)}})}else bc({key:"prevent-scroll",element:l,style:{overflow:"hidden"}})}),Ct(()=>{!tv(t)||!Bt(e.enabled)||(document.addEventListener("wheel",o,{passive:!1}),document.addEventListener("touchstart",a,{passive:!1}),document.addEventListener("touchmove",u,{passive:!1}),_t(()=>{document.removeEventListener("wheel",o),document.removeEventListener("touchstart",a),document.removeEventListener("touchmove",u)}))});const a=l=>{n=Tc(l),r=null,s=null},o=l=>{const f=l.target,d=Bt(e.element),c=iv(l),h=Math.abs(c[0])>Math.abs(c[1])?"x":"y",g=h==="x"?c[0]:c[1],S=Ac(f,h,g,d);let m;d&&wo(d,f)?m=!S:m=!0,m&&l.cancelable&&l.preventDefault()},u=l=>{const f=Bt(e.element),d=l.target;let c;if(l.touches.length===2)c=!Bt(e.allowPinchZoom);else{if(r==null||s===null){const h=Tc(l).map((S,m)=>n[m]-S),g=Math.abs(h[0])>Math.abs(h[1])?"x":"y";r=g,s=g==="x"?h[0]:h[1]}if(d.type==="range")c=!1;else{const h=Ac(d,r,s,f);f&&wo(f,d)?c=!h:c=!0}}c&&l.cancelable&&l.preventDefault()}},iv=i=>[i.deltaX,i.deltaY],Tc=i=>i.changedTouches[0]?[i.changedTouches[0].clientX,i.changedTouches[0].clientY]:[0,0],Ac=(i,e,t,n)=>{const r=n!==null&&wo(n,i),[s,a]=ev(i,e,r?n:void 0);return!(t>0&&Math.abs(s)<=1||t<0&&Math.abs(a)<1)},rv=nv,sv=rv,av=i=>{const e=Yi(()=>{const a=Bt(i.element);if(a)return getComputedStyle(a)}),t=()=>e()?.animationName??"none",[n,r]=nt(Bt(i.show)?"present":"hidden");let s="none";return Ct(a=>{const o=Bt(i.show);return Lc(()=>{if(a===o)return o;const u=s,l=t();o?r("present"):l==="none"||e()?.display==="none"?r("hidden"):r(a===!0&&u!==l?"hiding":"hidden")}),o}),Ct(()=>{const a=Bt(i.element);if(!a)return;const o=l=>{l.target===a&&(s=t())},u=l=>{const d=t().includes(l.animationName);l.target===a&&d&&n()==="hiding"&&r("hidden")};a.addEventListener("animationstart",o),a.addEventListener("animationcancel",u),a.addEventListener("animationend",u),_t(()=>{a.removeEventListener("animationstart",o),a.removeEventListener("animationcancel",u),a.removeEventListener("animationend",u)})}),{present:()=>n()==="present"||n()==="hiding",state:n,setState:r}},ov=av,wc=ov,lv={};Iu(lv,{CloseButton:()=>Nu,Content:()=>Fu,Description:()=>Ou,Dialog:()=>ei,Overlay:()=>Bu,Portal:()=>zu,Root:()=>Vu,Title:()=>ku,Trigger:()=>Gu,useDialogContext:()=>ci});var Uu=Dc();function ci(){const i=Pc(Uu);if(i===void 0)throw new Error("[kobalte]: `useDialogContext` must be used within a `Dialog` component");return i}function Nu(i){const e=ci(),[t,n]=Wn(i,["aria-label","onClick"]);return se(ks,mt({get"aria-label"(){return t["aria-label"]||e.translations().dismiss},onClick:s=>{Vs(s,t.onClick),e.close()}},n))}function Fu(i){let e;const t=ci(),n=wr({id:t.generateId("content")},i),[r,s]=Wn(n,["ref","onOpenAutoFocus","onCloseAutoFocus","onPointerDownOutside","onFocusOutside","onInteractOutside"]);let a=!1,o=!1;const u=c=>{r.onPointerDownOutside?.(c),t.modal()&&c.detail.isContextMenu&&c.preventDefault()},l=c=>{r.onFocusOutside?.(c),t.modal()&&c.preventDefault()},f=c=>{r.onInteractOutside?.(c),!t.modal()&&(c.defaultPrevented||(a=!0,c.detail.originalEvent.type==="pointerdown"&&(o=!0)),zn(t.triggerRef(),c.target)&&c.preventDefault(),c.detail.originalEvent.type==="focusin"&&o&&c.preventDefault())},d=c=>{r.onCloseAutoFocus?.(c),t.modal()?(c.preventDefault(),Fn(t.triggerRef())):(c.defaultPrevented||(a||Fn(t.triggerRef()),c.preventDefault()),a=!1,o=!1)};return Fx({isDisabled:()=>!(t.isOpen()&&t.modal()),targets:()=>e?[e]:[]}),sv({element:()=>e??null,enabled:()=>t.contentPresent()&&t.preventScroll()}),Ux({trapFocus:()=>t.isOpen()&&t.modal(),onMountAutoFocus:r.onOpenAutoFocus,onUnmountAutoFocus:d},()=>e),Ct(()=>_t(t.registerContentId(s.id))),se($t,{get when(){return t.contentPresent()},get children(){return se(kx,mt({ref(c){var h=Ar(g=>{t.setContentRef(g),e=g},r.ref);typeof h=="function"&&h(c)},role:"dialog",tabIndex:-1,get disableOutsidePointerEvents(){return An(()=>!!t.modal())()&&t.isOpen()},get excludedElements(){return[t.triggerRef]},get"aria-labelledby"(){return t.titleId()},get"aria-describedby"(){return t.descriptionId()},get"data-expanded"(){return t.isOpen()?"":void 0},get"data-closed"(){return t.isOpen()?void 0:""},onPointerDownOutside:u,onFocusOutside:l,onInteractOutside:f,get onDismiss(){return t.close}},s))}})}function Ou(i){const e=ci(),t=wr({id:e.generateId("description")},i),[n,r]=Wn(t,["id"]);return Ct(()=>_t(e.registerDescriptionId(n.id))),se(Cr,mt({as:"p",get id(){return n.id}},r))}function Bu(i){const e=ci(),[t,n]=Wn(i,["ref","style","onPointerDown"]),r=s=>{Vs(s,t.onPointerDown),s.target===s.currentTarget&&s.preventDefault()};return se($t,{get when(){return e.overlayPresent()},get children(){return se(Cr,mt({as:"div",ref(s){var a=Ar(e.setOverlayRef,t.ref);typeof a=="function"&&a(s)},get style(){return ux({"pointer-events":"auto"},t.style)},get"data-expanded"(){return e.isOpen()?"":void 0},get"data-closed"(){return e.isOpen()?void 0:""},onPointerDown:r},n))}})}function zu(i){const e=ci();return se($t,{get when(){return e.contentPresent()||e.overlayPresent()},get children(){return se(nd,i)}})}var Cc={dismiss:"Dismiss"};function Vu(i){const e=`dialog-${Ic()}`,t=wr({id:e,modal:!0,translations:Cc},i),[n,r]=nt(),[s,a]=nt(),[o,u]=nt(),[l,f]=nt(),[d,c]=nt(),[h,g]=nt(),S=Wx({open:()=>t.open,defaultOpen:()=>t.defaultOpen,onOpenChange:y=>t.onOpenChange?.(y)}),m=()=>t.forceMount||S.isOpen(),{present:p}=wc({show:m,element:()=>l()??null}),{present:v}=wc({show:m,element:()=>d()??null}),b={translations:()=>t.translations??Cc,isOpen:S.isOpen,modal:()=>t.modal??!0,preventScroll:()=>t.preventScroll??b.modal(),contentId:n,titleId:s,descriptionId:o,triggerRef:h,overlayRef:l,setOverlayRef:f,contentRef:d,setContentRef:c,overlayPresent:p,contentPresent:v,close:S.close,toggle:S.toggle,setTriggerRef:g,generateId:hx(()=>t.id),registerContentId:Ca(r),registerTitleId:Ca(a),registerDescriptionId:Ca(u)};return se(Uu.Provider,{value:b,get children(){return t.children}})}function ku(i){const e=ci(),t=wr({id:e.generateId("title")},i),[n,r]=Wn(t,["id"]);return Ct(()=>_t(e.registerTitleId(n.id))),se(Cr,mt({as:"h2",get id(){return n.id}},r))}function Gu(i){const e=ci(),[t,n]=Wn(i,["ref","onClick"]);return se(ks,mt({ref(s){var a=Ar(e.setTriggerRef,t.ref);typeof a=="function"&&a(s)},"aria-haspopup":"dialog",get"aria-expanded"(){return e.isOpen()},get"aria-controls"(){return An(()=>!!e.isOpen())()?e.contentId():void 0},get"data-expanded"(){return e.isOpen()?"":void 0},get"data-closed"(){return e.isOpen()?void 0:""},onClick:s=>{Vs(s,t.onClick),e.toggle()}},n))}var ei=Object.assign(Vu,{CloseButton:Nu,Content:Fu,Description:Ou,Overlay:Bu,Portal:zu,Title:ku,Trigger:Gu}),cv=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],uv=i=>se(Xt,mt(i,{iconNode:cv,name:"chevron-left"})),dv=uv,fv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],hv=i=>se(Xt,mt(i,{iconNode:fv,name:"chevron-right"})),pv=hv,mv=$e('<button class="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">'),gv=$e('<button class="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">'),_v=$e('<div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">'),xv=$e('<p class="text-sm text-text-muted font-mono mb-4"><span class=text-accent-primary><!$><!/>:</span> <!$><!/><!$><!/>'),vv=$e('<div class=mb-6><h3 class="text-sm font-medium text-text-muted uppercase tracking-wider mb-3"></h3><div class="flex flex-wrap gap-3">'),Sv=$e('<a target=_blank rel="noopener noreferrer"class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-primary text-white font-medium text-sm hover:bg-accent-primary/90 transition-colors"><!$><!/><!$><!/>'),Mv=$e('<div class="p-6 md:p-8"><!$><!/><!$><!/><div class="relative aspect-video rounded-xl overflow-hidden mb-6 bg-surface-elevated"><img class="w-full h-full object-cover"><!$><!/></div><h2 class="text-2xl font-bold font-display text-text mb-2"></h2><!$><!/><p class="text-text-secondary leading-relaxed mb-6"></p><!$><!/><!$><!/>'),bv=$e("<button>"),yv=$e('<span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-border text-sm text-text-secondary"><i></i><!$><!/>');function Ev(i){const{messages:e,t}=li(),[n,r]=nt(0),s=()=>t("projects_modal.prev_image","Previous image"),a=()=>t("projects_modal.next_image","Next image"),o=c=>`${t("projects_modal.image","Image")} ${c+1}`,u=()=>(i.project?.images?.length??0)>1,l=c=>{c||r(0),i.onOpenChange(c)},f=()=>{const c=i.project?.images?.length??0;c<=1||r(h=>h===0?c-1:h-1)},d=()=>{const c=i.project?.images?.length??0;c<=1||r(h=>h===c-1?0:h+1)};return se($t,{get when(){return i.project},children:c=>se(ei,{get open(){return i.open},onOpenChange:l,modal:!0,get children(){return se(ei.Portal,{get children(){return[se(ei.Overlay,{class:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[expanded]:animate-in data-[expanded]:fade-in duration-200"}),se(ei.Content,{class:"fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface border border-border shadow-2xl data-[expanded]:animate-in data-[expanded]:fade-in data-[expanded]:zoom-in-95 duration-200",get children(){return[se(ei.CloseButton,{class:"absolute top-4 right-4 z-10 p-2 rounded-full bg-surface-elevated border border-border text-text-secondary hover:text-text hover:border-border-strong transition-colors",get children(){return se(id,{size:20})}}),(()=>{var h=We(Mv),g=h.firstChild,[S,m]=Ie(g.nextSibling),p=S.nextSibling,[v,b]=Ie(p.nextSibling),y=v.nextSibling,C=y.firstChild,E=C.nextSibling,[P,x]=Ie(E.nextSibling),A=y.nextSibling,R=A.nextSibling,[w,L]=Ie(R.nextSibling),H=w.nextSibling,W=H.nextSibling,[U,B]=Ie(W.nextSibling),V=U.nextSibling,[j,ne]=Ie(V.nextSibling);return ae(h,se(ei.Title,{class:"sr-only",get children(){return c().title}}),S,m),ae(h,se(ei.Description,{class:"sr-only",get children(){return c().description}}),v,b),ae(y,se($t,{get when(){return u()},get children(){return[(()=>{var O=We(mv);return O.$$click=f,ae(O,se(dv,{size:20})),Tt(()=>Rt(O,"aria-label",s())),ii(),O})(),(()=>{var O=We(gv);return O.$$click=d,ae(O,se(pv,{size:20})),Tt(()=>Rt(O,"aria-label",a())),ii(),O})(),(()=>{var O=We(_v);return ae(O,se(cn,{get each(){return c().images},children:(Q,J)=>(()=>{var ve=We(bv);return ve.$$click=()=>r(J()),Tt(Te=>{var he=`w-2 h-2 rounded-full transition-all ${J()===n()?"bg-accent-secondary w-4":"bg-white/50 hover:bg-white/80"}`,X=o(J());return he!==Te.e&&xn(ve,Te.e=he),X!==Te.t&&Rt(ve,"aria-label",Te.t=X),Te},{e:void 0,t:void 0}),ii(),ve})()})),O})()]}}),P,x),ae(A,()=>c().title),ae(h,se($t,{get when(){return e()},get children(){var O=We(xv),Q=O.firstChild,J=Q.firstChild,[ve,Te]=Ie(J.nextSibling);ve.nextSibling;var he=Q.nextSibling,X=he.nextSibling,[te,q]=Ie(X.nextSibling),ge=te.nextSibling,[we,Ae]=Ie(ge.nextSibling);return ae(Q,()=>t("projects_modal.period"),ve,Te),ae(O,()=>c().startDate,te,q),ae(O,(()=>{var Je=An(()=>!!c().endDate);return()=>Je()?` - ${c().endDate}`:""})(),we,Ae),O}}),w,L),ae(H,()=>c().description),ae(h,se($t,{get when(){return(c().technologies?.length??0)>0},get children(){var O=We(vv),Q=O.firstChild,J=Q.nextSibling;return ae(Q,()=>t("projects_modal.technologies")),ae(J,se(cn,{get each(){return c().technologies},children:ve=>(()=>{var Te=We(yv),he=Te.firstChild,X=he.nextSibling,[te,q]=Ie(X.nextSibling);return ae(Te,()=>ve.name,te,q),Tt(ge=>{var we=ve.name,Ae=`${ve.class} text-base`;return we!==ge.e&&Rt(Te,"title",ge.e=we),Ae!==ge.t&&xn(he,ge.t=Ae),ge},{e:void 0,t:void 0}),Te})()})),O}}),U,B),ae(h,se($t,{get when(){return c().url},get children(){var O=We(Sv),Q=O.firstChild,[J,ve]=Ie(Q.nextSibling),Te=J.nextSibling,[he,X]=Ie(Te.nextSibling);return ae(O,se($o,{size:16}),J,ve),ae(O,()=>t("projects_modal.view_project","Ver projeto"),he,X),Tt(()=>Rt(O,"href",c().url)),O}}),j,ne),Tt(O=>{var Q=`/${c().images?.[n()]}`,J=c().title;return Q!==O.e&&Rt(C,"src",O.e=Q),J!==O.t&&Rt(C,"alt",O.t=J),O},{e:void 0,t:void 0}),h})()]}})]}})}})})}Co(["click"]);var Tv=$e('<section id=projects class="py-section bg-bg relative"><div class="max-w-6xl mx-auto px-6"><h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-12 text-text"><span class=text-accent-quaternary>&gt;</span> <!$><!/></h2><div class="flex flex-wrap justify-center gap-2 mb-12"><button></button><!$><!/></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">'),Av=$e("<button>"),wv=$e('<article class="group bg-surface rounded-2xl overflow-hidden border border-border hover:border-accent-secondary/50 transition-all hover:-translate-y-1 hover:shadow-glow-secondary/10 cursor-pointer"><div class="relative aspect-video overflow-hidden bg-surface-elevated"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"loading=lazy><div class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"><span class="px-4 py-2 rounded-full border border-white text-white text-sm font-medium"></span></div></div><div class=p-5><h3 class="font-semibold text-text mb-1 group-hover:text-accent-secondary transition-colors"></h3><p class="text-xs text-text-muted font-mono mb-3"><!$><!/><!$><!/></p><p class="text-sm text-text-secondary line-clamp-2 mb-4"></p><div class="flex flex-wrap gap-2">',!0,!1,!1),Cv=$e("<span class=text-lg><i>");function Rv(){const{messages:i,language:e,t}=li(),[n,r]=nt(!1),[s,a]=nt("all"),[o,u]=nt(null),[l,f]=nt(!1),d=b=>{u(b),f(!0)};let c;fn(()=>{const b=new IntersectionObserver(([y])=>{y.isIntersecting&&r(!0)},{threshold:.1});c&&b.observe(c),_t(()=>b.disconnect())}),Ct(()=>{e(),u(null),f(!1)});const h=()=>i()?.projects||[],g=()=>t("basic_info.section_name.projects",""),S=()=>t("projects_filter.all","Todos"),m=()=>t("projects_filter.view_project","Ver projeto"),p=()=>{const b=new Set;return h().forEach(y=>{y.technologies?.forEach(C=>b.add(C.name))}),Array.from(b).sort()},v=()=>s()==="all"?h():h().filter(b=>b.technologies?.some(y=>y.name===s()));return[(()=>{var b=We(Tv),y=b.firstChild,C=y.firstChild,E=C.firstChild,P=E.nextSibling,x=P.nextSibling,[A,R]=Ie(x.nextSibling),w=C.nextSibling,L=w.firstChild,H=L.nextSibling,[W,U]=Ie(H.nextSibling),B=w.nextSibling,V=c;return typeof V=="function"?oi(V,b):c=b,ae(C,g,A,R),L.$$click=()=>a("all"),ae(L,S),ae(w,se(cn,{get each(){return p()},children:j=>(()=>{var ne=We(Av);return ne.$$click=()=>a(j),ae(ne,j),Tt(()=>xn(ne,`px-4 py-2 rounded-full text-sm font-medium transition-all ${s()===j?"bg-accent-primary text-bg":"bg-surface text-text-secondary border border-border hover:border-accent-primary hover:text-accent-primary"}`)),ii(),ne})()}),W,U),ae(B,se(cn,{get each(){return v()},children:(j,ne)=>(()=>{var O=We(wv),Q=O.firstChild,J=Q.firstChild,ve=J.nextSibling,Te=ve.firstChild,he=Q.nextSibling,X=he.firstChild,te=X.nextSibling,q=te.firstChild,[ge,we]=Ie(q.nextSibling),Ae=ge.nextSibling,[Je,Fe]=Ie(Ae.nextSibling),Ke=te.nextSibling,tt=Ke.nextSibling;return O.$$click=()=>d(j),ae(Te,m),ae(X,()=>j.title),ae(te,()=>j.startDate,ge,we),ae(te,(()=>{var Le=An(()=>!!j.endDate);return()=>Le()?` - ${j.endDate}`:""})(),Je,Fe),ae(Ke,()=>j.description),ae(tt,se(cn,{get each(){return j.technologies?.slice(0,4)},children:Le=>(()=>{var dt=We(Cv),rt=dt.firstChild;return Tt(vt=>{var I=Le.name,gt=Le.class;return I!==vt.e&&Rt(dt,"title",vt.e=I),gt!==vt.t&&xn(rt,vt.t=gt),vt},{e:void 0,t:void 0}),dt})()})),Tt(Le=>{var dt=n()?1:0,rt=n()?"translateY(0)":"translateY(20px)",vt=`opacity 0.5s ease-out ${ne()*.08}s, transform 0.5s ease-out ${ne()*.08}s`,I=j.images?.[0],gt=j.title;return dt!==Le.e&&ut(O,"opacity",Le.e=dt),rt!==Le.t&&ut(O,"transform",Le.t=rt),vt!==Le.a&&ut(O,"transition",Le.a=vt),I!==Le.o&&Rt(J,"src",Le.o=I),gt!==Le.i&&Rt(J,"alt",Le.i=gt),Le},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),ii(),O})()})),Tt(()=>xn(L,`px-4 py-2 rounded-full text-sm font-medium transition-all ${s()==="all"?"bg-accent-primary text-bg":"bg-surface text-text-secondary border border-border hover:border-accent-primary hover:text-accent-primary"}`)),ii(),b})(),se(Ev,{get project(){return o()},get open(){return l()},onOpenChange:f})]}Co(["click"]);var Pv=$e('<section id=contact class="py-section bg-surface relative"><div class="max-w-4xl mx-auto px-6 text-center"><h2 class="text-3xl md:text-4xl font-bold font-display mb-6 text-text"><span class=text-accent-primary>&gt;</span> <!$><!/></h2><p class="text-text-secondary mb-12 max-w-xl mx-auto"></p><div class="flex flex-wrap justify-center gap-6"style="transition:opacity 0.6s ease-out, transform 0.6s ease-out">'),Dv=$e('<a target=_blank rel="noopener noreferrer"class="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-bg border border-border min-w-[140px] hover:border-accent-primary hover:shadow-glow-primary transition-all hover:-translate-y-1"><!$><!/><span class="text-sm font-medium text-text-secondary group-hover:text-text capitalize">');function Lv(){const{sharedData:i,t:e}=li(),[t,n]=nt(!1);let r;fn(()=>{const l=new IntersectionObserver(([f])=>{f.isIntersecting&&n(!0)},{threshold:.3});r&&l.observe(r),_t(()=>l.disconnect())});const s=()=>e("basic_info.section_name.contact",""),a=()=>e("contact_message.paragraph",""),o=()=>i()?.basic_info?.social||[],u={github:Rc,gmail:bu,linkedin:Mu};return(()=>{var l=We(Pv),f=l.firstChild,d=f.firstChild,c=d.firstChild,h=c.nextSibling,g=h.nextSibling,[S,m]=Ie(g.nextSibling),p=d.nextSibling,v=p.nextSibling,b=r;return typeof b=="function"?oi(b,l):r=l,ae(d,s,S,m),ae(p,a),ae(v,()=>o().map(y=>{const C=u[y.name]||$o;return(()=>{var E=We(Dv),P=E.firstChild,[x,A]=Ie(P.nextSibling),R=x.nextSibling;return ae(E,se(C,{size:28,class:"text-text-secondary group-hover:text-accent-primary transition-colors"}),x,A),ae(R,()=>y.name),Tt(w=>{var L=y.url,H=y.name;return L!==w.e&&Rt(E,"href",w.e=L),H!==w.t&&Rt(E,"aria-label",w.t=H),w},{e:void 0,t:void 0}),E})()})),Tt(y=>{var C=t()?1:0,E=t()?"translateY(0)":"translateY(20px)";return C!==y.e&&ut(v,"opacity",y.e=C),E!==y.t&&ut(v,"transform",y.t=E),y},{e:void 0,t:void 0}),l})()}var Iv=$e('<div class="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent"><div class="h-full bg-accent-primary origin-left shadow-glow-primary"style=transform:scaleX(0)>');function Uv(){let i;return fn(()=>{const e=i;if(!e)return;const t=()=>{const n=window.scrollY,r=document.documentElement.scrollHeight-window.innerHeight,s=r>0?n/r:0;e.style.transform=`scaleX(${s})`};window.addEventListener("scroll",t,{passive:!0}),_t(()=>window.removeEventListener("scroll",t))}),(()=>{var e=We(Iv),t=e.firstChild,n=i;return typeof n=="function"?oi(n,t):i=t,e})()}var Nv=$e('<main id=main class="bg-bg min-h-screen"><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/>');function qv(){return(()=>{var i=We(Nv),e=i.firstChild,[t,n]=Ie(e.nextSibling),r=t.nextSibling,[s,a]=Ie(r.nextSibling),o=s.nextSibling,[u,l]=Ie(o.nextSibling),f=u.nextSibling,[d,c]=Ie(f.nextSibling),h=d.nextSibling,[g,S]=Ie(h.nextSibling),m=g.nextSibling,[p,v]=Ie(m.nextSibling),b=p.nextSibling,[y,C]=Ie(b.nextSibling),E=y.nextSibling,[P,x]=Ie(E.nextSibling),A=P.nextSibling,[R,w]=Ie(A.nextSibling),L=R.nextSibling,[H,W]=Ie(L.nextSibling);return ae(i,se(Uv,{}),t,n),ae(i,se(rd,{}),s,a),ae(i,se(N0,{}),u,l),ae(i,se(X0,{}),d,c),ae(i,se(j0,{}),g,S),ae(i,se(Q0,{}),p,v),ae(i,se(ax,{}),y,C),ae(i,se(Rv,{}),P,x),ae(i,se(Lv,{}),R,w),ae(i,se(sd,{}),H,W),i})()}export{Ra as A,Ut as B,je as C,On as D,Hv as E,nu as F,Nr as G,qv as H,su as I,vf as L,Go as M,Gt as O,Mf as P,tn as S,ou as T,N as V,zv as a,un as b,Vv as c,kv as d,dn as e,Er as f,Sf as g,z_ as h,Wv as i,Xv as j,au as k,hf as l,Bv as m,Gv as n,Os as o,pt as p,zt as q,$v as r};
