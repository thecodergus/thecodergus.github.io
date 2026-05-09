const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9HhTpfYv.js","assets/create-theme-module-DELPPpDb.js","assets/I18nErrorBanner-CNMRvU7u.js","assets/preload-helper-ug3pwPZ1.js","assets/index-CXY6RLYB.js","assets/canvasTexture-D56OoBSM.js","assets/index-qqr-NOv9.js","assets/index-BP_aDJhZ.js"])))=>i.map(i=>d[i]);
import{h as ft,Q as Ct,c as ne,K as Qn,E as oi,S as $t,R as Ju,o as At,y as $e,B as Xe,P as li,O as Le,A as ae,t as Tn,e as Et,T as _n,q as pt,M as Xt,U as Qu,x as Do,D as ci,V as ed,W as St,X as ct,z as ii,Y as cn,Z as Hn,_ as td,i as nd,u as Dc,b as Lc,f as Ki,j as Ic,d as Uc,$ as id,a0 as rd,N as sd,F as ad,I as od}from"./I18nErrorBanner-CNMRvU7u.js";import{_ as Ur}from"./preload-helper-ug3pwPZ1.js";var tn=(i=>(i.AI="ai",i.Blockchain="blockchain",i.Software="software",i.Web="web",i))(tn||{});const ld="portfolio-theme",cd=[{id:tn.AI,label:"IA",primary:"#00E5FF",secondary:"#10A37F",tertiary:"#8B5CF6",background:"#080012"},{id:tn.Blockchain,label:"Blockchain",primary:"#F7931A",secondary:"#00BFA5",tertiary:"#627EEA",background:"#0D1117"},{id:tn.Software,label:"Software",primary:"#00FF41",secondary:"#006622",tertiary:"#FFFFFF",background:"#000000"},{id:tn.Web,label:"Web",primary:"#0000EE",secondary:"#551A8B",tertiary:"#CC0000",background:"#F8F9FA"}];function ud(){return tn.AI}const[As,dd]=ft(ud());Ct(()=>{typeof document<"u"&&(document.documentElement.setAttribute("data-theme",As()),localStorage.setItem(ld,As()))});function il(i){dd(i)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lo="184",fd=0,rl=1,hd=2,_s=1,pd=2,Sr=3,si=0,qt=1,Fn=2,An=0,Zi=1,La=2,sl=3,al=4,md=5,xi=100,gd=101,_d=102,xd=103,vd=104,Sd=200,Md=201,bd=202,yd=203,Ia=204,Ua=205,Ed=206,Td=207,Ad=208,wd=209,Cd=210,Rd=211,Pd=212,Dd=213,Ld=214,Na=0,Fa=1,Oa=2,Qi=3,Ba=4,za=5,Va=6,ka=7,Nc=0,Id=1,Ud=2,wn=0,Fc=1,Oc=2,Bc=3,Io=4,zc=5,Vc=6,kc=7,Gc=300,bi=301,er=302,qs=303,Ys=304,zs=306,Ga=1e3,On=1001,Ha=1002,It=1003,Nd=1004,Nr=1005,zt=1006,js=1007,Si=1008,ln=1009,Hc=1010,Wc=1011,yr=1012,Uo=1013,Cn=1014,mn=1015,nn=1016,No=1017,Fo=1018,Er=1020,$c=35902,Xc=35899,qc=1021,Yc=1022,gn=1023,kn=1026,Mi=1027,Oo=1028,Bo=1029,yi=1030,zo=1031,Vo=1033,xs=33776,vs=33777,Ss=33778,Ms=33779,Wa=35840,$a=35841,Xa=35842,qa=35843,Ya=36196,ja=37492,Ka=37496,Za=37488,Ja=37489,ws=37490,Qa=37491,eo=37808,to=37809,no=37810,io=37811,ro=37812,so=37813,ao=37814,oo=37815,lo=37816,co=37817,uo=37818,fo=37819,ho=37820,po=37821,mo=36492,go=36494,_o=36495,xo=36283,vo=36284,Cs=36285,So=36286,Fd=3200,ol=0,Od=1,ti="",Qt="srgb",Rs="srgb-linear",Ps="linear",it="srgb",Di=7680,ll=519,Bd=512,zd=513,Vd=514,ko=515,kd=516,Gd=517,Go=518,Hd=519,Mo=35044,bo="300 es",En=2e3,Ds=2001;function Wd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $d(){const i=Ls("canvas");return i.style.display="block",i}const cl={};function Is(...i){const e="THREE."+i.shift();console.log(e,...i)}function jc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ue(...i){i=jc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=jc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function yo(...i){const e=i.join(" ");e in cl||(cl[e]=!0,Ue(...i))}function Xd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const qd={[Na]:Fa,[Oa]:Va,[Ba]:ka,[Qi]:za,[Fa]:Na,[Va]:Oa,[ka]:Ba,[za]:Qi};class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bs=Math.PI/180,Eo=180/Math.PI;function ri(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function Yd(i,e){return(i%e+e)%e}function Ks(i,e,t){return(1-t)*i+t*e}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ie{static{Ie.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let u=n[r+0],l=n[r+1],f=n[r+2],d=n[r+3],c=s[a+0],h=s[a+1],g=s[a+2],S=s[a+3];if(d!==S||u!==c||l!==h||f!==g){let m=u*c+l*h+f*g+d*S;m<0&&(c=-c,h=-h,g=-g,S=-S,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);p=Math.sin(p*v)/y,o=Math.sin(o*v)/y,u=u*p+c*o,l=l*p+h*o,f=f*p+g*o,d=d*p+S*o}else{u=u*p+c*o,l=l*p+h*o,f=f*p+g*o,d=d*p+S*o;const v=1/Math.sqrt(u*u+l*l+f*f+d*d);u*=v,l*=v,f*=v,d*=v}}e[t]=u,e[t+1]=l,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],u=n[r+1],l=n[r+2],f=n[r+3],d=s[a],c=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+f*d+u*h-l*c,e[t+1]=u*g+f*c+l*d-o*h,e[t+2]=l*g+f*h+o*c-u*d,e[t+3]=f*g-o*d-u*c-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,u=Math.sin,l=o(n/2),f=o(r/2),d=o(s/2),c=u(n/2),h=u(r/2),g=u(s/2);switch(a){case"XYZ":this._x=c*f*d+l*h*g,this._y=l*h*d-c*f*g,this._z=l*f*g+c*h*d,this._w=l*f*d-c*h*g;break;case"YXZ":this._x=c*f*d+l*h*g,this._y=l*h*d-c*f*g,this._z=l*f*g-c*h*d,this._w=l*f*d+c*h*g;break;case"ZXY":this._x=c*f*d-l*h*g,this._y=l*h*d+c*f*g,this._z=l*f*g+c*h*d,this._w=l*f*d-c*h*g;break;case"ZYX":this._x=c*f*d-l*h*g,this._y=l*h*d+c*f*g,this._z=l*f*g-c*h*d,this._w=l*f*d+c*h*g;break;case"YZX":this._x=c*f*d+l*h*g,this._y=l*h*d+c*f*g,this._z=l*f*g-c*h*d,this._w=l*f*d-c*h*g;break;case"XZY":this._x=c*f*d-l*h*g,this._y=l*h*d-c*f*g,this._z=l*f*g+c*h*d,this._w=l*f*d+c*h*g;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],u=t[9],l=t[2],f=t[6],d=t[10],c=n+o+d;if(c>0){const h=.5/Math.sqrt(c+1);this._w=.25/h,this._x=(f-u)*h,this._y=(s-l)*h,this._z=(a-r)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(f-u)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+l)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-l)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(u+f)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-r)/h,this._x=(s+l)/h,this._y=(u+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,u=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+r*l-s*u,this._y=r*f+a*u+s*o-n*l,this._z=s*f+a*l+n*u-r*o,this._w=a*f-n*o-r*u-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let u=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);u=Math.sin(u*l)/f,t=Math.sin(t*l)/f,this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+a*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{static{U.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,u=e.w,l=2*(a*r-o*n),f=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+u*l+a*d-o*f,this.y=n+u*f+o*l-s*d,this.z=r+u*d+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,u=t.z;return this.x=r*u-s*o,this.y=s*a-n*u,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zs.copy(this).projectOnVector(e),this.sub(Zs)}reflect(e){return this.sub(Zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zs=new U,ul=new rr;class Be{static{Be.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,u,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,u,l)}set(e,t,n,r,s,a,o,u,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],u=n[6],l=n[1],f=n[4],d=n[7],c=n[2],h=n[5],g=n[8],S=r[0],m=r[3],p=r[6],v=r[1],y=r[4],b=r[7],C=r[2],T=r[5],R=r[8];return s[0]=a*S+o*v+u*C,s[3]=a*m+o*y+u*T,s[6]=a*p+o*b+u*R,s[1]=l*S+f*v+d*C,s[4]=l*m+f*y+d*T,s[7]=l*p+f*b+d*R,s[2]=c*S+h*v+g*C,s[5]=c*m+h*y+g*T,s[8]=c*p+h*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*s*f+n*o*u+r*s*l-r*a*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],l=e[7],f=e[8],d=f*a-o*l,c=o*u-f*s,h=l*s-a*u,g=t*d+n*c+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=d*S,e[1]=(r*l-f*n)*S,e[2]=(o*n-r*a)*S,e[3]=c*S,e[4]=(f*t-r*u)*S,e[5]=(r*s-o*t)*S,e[6]=h*S,e[7]=(n*u-l*t)*S,e[8]=(a*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const u=Math.cos(s),l=Math.sin(s);return this.set(n*u,n*l,-n*(u*a+l*o)+a+e,-r*l,r*u,-r*(-l*a+u*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new Be,dl=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fl=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jd(){const i={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=zn(r.r),r.g=zn(r.g),r.b=zn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=Ji(r.r),r.g=Ji(r.g),r.b=Ji(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ti?Ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rs]:{primaries:e,whitePoint:n,transfer:Ps,toXYZ:dl,fromXYZ:fl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:dl,fromXYZ:fl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),i}const Ye=jd();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Li;class Kd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Li===void 0&&(Li=Ls("canvas")),Li.width=e.width,Li.height=e.height;const r=Li.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Li}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zd=0;class Ho{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qs(r[a].image)):s.push(Qs(r[a]))}else s=Qs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let Jd=0;const ea=new U;class kt extends Ti{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=On,r=On,s=zt,a=Si,o=gn,u=ln,l=kt.DEFAULT_ANISOTROPY,f=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ri(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=u,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ga:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ga:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Gc;kt.DEFAULT_ANISOTROPY=1;class Tt{static{Tt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,l=u[0],f=u[4],d=u[8],c=u[1],h=u[5],g=u[9],S=u[2],m=u[6],p=u[10];if(Math.abs(f-c)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+c)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,b=(h+1)/2,C=(p+1)/2,T=(f+c)/4,R=(d+S)/4,x=(g+m)/4;return y>b&&y>C?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=T/n,s=R/n):b>C?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=T/r,s=x/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=R/s,r=x/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(c-f)*(c-f));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-S)/v,this.z=(c-f)/v,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qd extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new kt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ho(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yt extends Qd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kc extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ef extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ht{static{ht.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,u,l,f,d,c,h,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,u,l,f,d,c,h,g,S,m)}set(e,t,n,r,s,a,o,u,l,f,d,c,h,g,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=u,p[2]=l,p[6]=f,p[10]=d,p[14]=c,p[3]=h,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),a=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),u=Math.cos(r),l=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const c=a*f,h=a*d,g=o*f,S=o*d;t[0]=u*f,t[4]=-u*d,t[8]=l,t[1]=h+g*l,t[5]=c-S*l,t[9]=-o*u,t[2]=S-c*l,t[6]=g+h*l,t[10]=a*u}else if(e.order==="YXZ"){const c=u*f,h=u*d,g=l*f,S=l*d;t[0]=c+S*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=h*o-g,t[6]=S+c*o,t[10]=a*u}else if(e.order==="ZXY"){const c=u*f,h=u*d,g=l*f,S=l*d;t[0]=c-S*o,t[4]=-a*d,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*f,t[9]=S-c*o,t[2]=-a*l,t[6]=o,t[10]=a*u}else if(e.order==="ZYX"){const c=a*f,h=a*d,g=o*f,S=o*d;t[0]=u*f,t[4]=g*l-h,t[8]=c*l+S,t[1]=u*d,t[5]=S*l+c,t[9]=h*l-g,t[2]=-l,t[6]=o*u,t[10]=a*u}else if(e.order==="YZX"){const c=a*u,h=a*l,g=o*u,S=o*l;t[0]=u*f,t[4]=S-c*d,t[8]=g*d+h,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=h*d+g,t[10]=c-S*d}else if(e.order==="XZY"){const c=a*u,h=a*l,g=o*u,S=o*l;t[0]=u*f,t[4]=-d,t[8]=l*f,t[1]=c*d+S,t[5]=a*f,t[9]=h*d-g,t[2]=g*d-h,t[6]=o*f,t[10]=S*d+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tf,e,nf)}lookAt(e,t,n){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),qn.crossVectors(n,Kt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),qn.crossVectors(n,Kt)),qn.normalize(),Fr.crossVectors(Kt,qn),r[0]=qn.x,r[4]=Fr.x,r[8]=Kt.x,r[1]=qn.y,r[5]=Fr.y,r[9]=Kt.y,r[2]=qn.z,r[6]=Fr.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],u=n[8],l=n[12],f=n[1],d=n[5],c=n[9],h=n[13],g=n[2],S=n[6],m=n[10],p=n[14],v=n[3],y=n[7],b=n[11],C=n[15],T=r[0],R=r[4],x=r[8],E=r[12],P=r[1],w=r[5],N=r[9],W=r[13],X=r[2],L=r[6],V=r[10],O=r[14],K=r[3],Q=r[7],B=r[11],q=r[15];return s[0]=a*T+o*P+u*X+l*K,s[4]=a*R+o*w+u*L+l*Q,s[8]=a*x+o*N+u*V+l*B,s[12]=a*E+o*W+u*O+l*q,s[1]=f*T+d*P+c*X+h*K,s[5]=f*R+d*w+c*L+h*Q,s[9]=f*x+d*N+c*V+h*B,s[13]=f*E+d*W+c*O+h*q,s[2]=g*T+S*P+m*X+p*K,s[6]=g*R+S*w+m*L+p*Q,s[10]=g*x+S*N+m*V+p*B,s[14]=g*E+S*W+m*O+p*q,s[3]=v*T+y*P+b*X+C*K,s[7]=v*R+y*w+b*L+C*Q,s[11]=v*x+y*N+b*V+C*B,s[15]=v*E+y*W+b*O+C*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],u=e[9],l=e[13],f=e[2],d=e[6],c=e[10],h=e[14],g=e[3],S=e[7],m=e[11],p=e[15],v=u*h-l*c,y=o*h-l*d,b=o*c-u*d,C=a*h-l*f,T=a*c-u*f,R=a*d-o*f;return t*(S*v-m*y+p*b)-n*(g*v-m*C+p*T)+r*(g*y-S*C+p*R)-s*(g*b-S*T+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],l=e[7],f=e[8],d=e[9],c=e[10],h=e[11],g=e[12],S=e[13],m=e[14],p=e[15],v=t*o-n*a,y=t*u-r*a,b=t*l-s*a,C=n*u-r*o,T=n*l-s*o,R=r*l-s*u,x=f*S-d*g,E=f*m-c*g,P=f*p-h*g,w=d*m-c*S,N=d*p-h*S,W=c*p-h*m,X=v*W-y*N+b*w+C*P-T*E+R*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/X;return e[0]=(o*W-u*N+l*w)*L,e[1]=(r*N-n*W-s*w)*L,e[2]=(S*R-m*T+p*C)*L,e[3]=(c*T-d*R-h*C)*L,e[4]=(u*P-a*W-l*E)*L,e[5]=(t*W-r*P+s*E)*L,e[6]=(m*b-g*R-p*y)*L,e[7]=(f*R-c*b+h*y)*L,e[8]=(a*N-o*P+l*x)*L,e[9]=(n*P-t*N-s*x)*L,e[10]=(g*T-S*b+p*v)*L,e[11]=(d*b-f*T-h*v)*L,e[12]=(o*E-a*w-u*x)*L,e[13]=(t*w-n*E+r*x)*L,e[14]=(S*y-g*C-m*v)*L,e[15]=(f*C-d*y+c*v)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,u=e.z,l=s*a,f=s*o;return this.set(l*a+n,l*o-r*u,l*u+r*o,0,l*o+r*u,f*o+n,f*u-r*a,0,l*u-r*o,f*u+r*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,u=t._w,l=s+s,f=a+a,d=o+o,c=s*l,h=s*f,g=s*d,S=a*f,m=a*d,p=o*d,v=u*l,y=u*f,b=u*d,C=n.x,T=n.y,R=n.z;return r[0]=(1-(S+p))*C,r[1]=(h+b)*C,r[2]=(g-y)*C,r[3]=0,r[4]=(h-b)*T,r[5]=(1-(c+p))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+y)*R,r[9]=(m-v)*R,r[10]=(1-(c+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ii.set(r[0],r[1],r[2]).length();const o=Ii.set(r[4],r[5],r[6]).length(),u=Ii.set(r[8],r[9],r[10]).length();s<0&&(a=-a),fn.copy(this);const l=1/a,f=1/o,d=1/u;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=f,fn.elements[5]*=f,fn.elements[6]*=f,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=u,this}makePerspective(e,t,n,r,s,a,o=En,u=!1){const l=this.elements,f=2*s/(t-e),d=2*s/(n-r),c=(t+e)/(t-e),h=(n+r)/(n-r);let g,S;if(u)g=s/(a-s),S=a*s/(a-s);else if(o===En)g=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Ds)g=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=En,u=!1){const l=this.elements,f=2/(t-e),d=2/(n-r),c=-(t+e)/(t-e),h=-(n+r)/(n-r);let g,S;if(u)g=1/(a-s),S=a/(a-s);else if(o===En)g=-2/(a-s),S=-(a+s)/(a-s);else if(o===Ds)g=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=c,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ii=new U,fn=new ht,tf=new U(0,0,0),nf=new U(1,1,1),qn=new U,Fr=new U,Kt=new U,hl=new ht,pl=new rr;class Ei{constructor(e=0,t=0,n=0,r=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],u=r[1],l=r[5],f=r[9],d=r[2],c=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,h),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pl.setFromEuler(this),this.setFromQuaternion(pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Zc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rf=0;const ml=new U,Ui=new rr,Pn=new ht,Or=new U,ar=new U,sf=new U,af=new rr,gl=new U(1,0,0),_l=new U(0,1,0),xl=new U(0,0,1),vl={type:"added"},of={type:"removed"},Ni={type:"childadded",child:null},ta={type:"childremoved",child:null};class Gt extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new U,t=new Ei,n=new rr,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Be}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(gl,e)}rotateY(e){return this.rotateOnAxis(_l,e)}rotateZ(e){return this.rotateOnAxis(xl,e)}translateOnAxis(e,t){return ml.copy(e).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gl,e)}translateY(e){return this.translateOnAxis(_l,e)}translateZ(e){return this.translateOnAxis(xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Or.copy(e):Or.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ar,Or,this.up):Pn.lookAt(Or,ar,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Ui.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vl),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(of),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vl),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let l=0,f=u.length;l<f;l++){const d=u[l];s(e.shapes,d)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,l=this.material.length;u<l;u++)o.push(s(e.materials,this.material[u]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];r.animations.push(s(e.animations,u))}}if(t){const o=a(e.geometries),u=a(e.materials),l=a(e.textures),f=a(e.images),d=a(e.shapes),c=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),c.length>0&&(n.skeletons=c),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const u=[];for(const l in o){const f=o[l];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new U(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Br extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lf={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),p=this._getHandJoint(l,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],c=f.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&c>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&c<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lf)))}return o!==null&&(o.visible=r!==null),u!==null&&(u.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Br;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},zr={h:0,s:0,l:0};function ia(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=Yd(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ia(a,s,e+1/3),this.g=ia(a,s,e),this.b=ia(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function n(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=Jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Ye.workingToColorSpace(Ot.copy(this),e),Math.round(je(Ot.r*255,0,255))*65536+Math.round(je(Ot.g*255,0,255))*256+Math.round(je(Ot.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Ot.copy(this),t);const n=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let u,l;const f=(o+a)/2;if(o===a)u=0,l=0;else{const d=a-o;switch(l=f<=.5?d/(a+o):d/(2-a-o),a){case n:u=(r-s)/d+(r<s?6:0);break;case r:u=(s-n)/d+2;break;case s:u=(n-r)/d+4;break}u/=6}return e.h=u,e.s=l,e.l=f,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Qt){Ye.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,r=Ot.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(zr);const n=Ks(Yn.h,zr.h,t),r=Ks(Yn.s,zr.s,t),s=Ks(Yn.l,zr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ke;Ke.NAMES=Jc;class cf extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hn=new U,Dn=new U,ra=new U,Ln=new U,Fi=new U,Oi=new U,Sl=new U,sa=new U,aa=new U,oa=new U,la=new Tt,ca=new Tt,ua=new Tt;class en{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){hn.subVectors(r,t),Dn.subVectors(n,t),ra.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(Dn),u=hn.dot(ra),l=Dn.dot(Dn),f=Dn.dot(ra),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const c=1/d,h=(l*u-o*f)*c,g=(a*f-o*u)*c;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,r,s,a,o,u){return this.getBarycoord(e,t,n,r,Ln)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Ln.x),u.addScaledVector(a,Ln.y),u.addScaledVector(o,Ln.z),u)}static getInterpolatedAttribute(e,t,n,r,s,a){return la.setScalar(0),ca.setScalar(0),ua.setScalar(0),la.fromBufferAttribute(e,t),ca.fromBufferAttribute(e,n),ua.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(la,s.x),a.addScaledVector(ca,s.y),a.addScaledVector(ua,s.z),a}static isFrontFacing(e,t,n,r){return hn.subVectors(n,t),Dn.subVectors(e,t),hn.cross(Dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),hn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return en.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Fi.subVectors(r,n),Oi.subVectors(s,n),sa.subVectors(e,n);const u=Fi.dot(sa),l=Oi.dot(sa);if(u<=0&&l<=0)return t.copy(n);aa.subVectors(e,r);const f=Fi.dot(aa),d=Oi.dot(aa);if(f>=0&&d<=f)return t.copy(r);const c=u*d-f*l;if(c<=0&&u>=0&&f<=0)return a=u/(u-f),t.copy(n).addScaledVector(Fi,a);oa.subVectors(e,s);const h=Fi.dot(oa),g=Oi.dot(oa);if(g>=0&&h<=g)return t.copy(s);const S=h*l-u*g;if(S<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Oi,o);const m=f*g-h*d;if(m<=0&&d-f>=0&&h-g>=0)return Sl.subVectors(s,r),o=(d-f)/(d-f+(h-g)),t.copy(r).addScaledVector(Sl,o);const p=1/(m+S+c);return a=S*p,o=c*p,t.copy(n).addScaledVector(Fi,a).addScaledVector(Oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ai{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),kr.subVectors(this.max,or),Bi.subVectors(e.a,or),zi.subVectors(e.b,or),Vi.subVectors(e.c,or),jn.subVectors(zi,Bi),Kn.subVectors(Vi,zi),fi.subVectors(Bi,Vi);let t=[0,-jn.z,jn.y,0,-Kn.z,Kn.y,0,-fi.z,fi.y,jn.z,0,-jn.x,Kn.z,0,-Kn.x,fi.z,0,-fi.x,-jn.y,jn.x,0,-Kn.y,Kn.x,0,-fi.y,fi.x,0];return!da(t,Bi,zi,Vi,kr)||(t=[1,0,0,0,1,0,0,0,1],!da(t,Bi,zi,Vi,kr))?!1:(Gr.crossVectors(jn,Kn),t=[Gr.x,Gr.y,Gr.z],da(t,Bi,zi,Vi,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const In=[new U,new U,new U,new U,new U,new U,new U,new U],pn=new U,Vr=new Ai,Bi=new U,zi=new U,Vi=new U,jn=new U,Kn=new U,fi=new U,or=new U,kr=new U,Gr=new U,hi=new U;function da(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){hi.fromArray(i,s);const o=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),u=e.dot(hi),l=t.dot(hi),f=n.dot(hi);if(Math.max(-Math.max(u,l,f),Math.min(u,l,f))>o)return!1}return!0}const wt=new U,Hr=new Ie;let uf=0;class un extends Ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mo,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Qc extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eu extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}const df=new Ai,lr=new U,fa=new U;class wi{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):df.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(lr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(fa)),this.expandByPoint(lr.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ff=0;const sn=new ht,ha=new Gt,ki=new U,Zt=new Ai,cr=new Ai,Lt=new U;class Ut extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?eu:Qc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(Zt.min,cr.min),Zt.expandByPoint(Lt),Lt.addVectors(Zt.max,cr.max),Zt.expandByPoint(Lt)):(Zt.expandByPoint(cr.min),Zt.expandByPoint(cr.max))}Zt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],u=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Lt.fromBufferAttribute(o,l),u&&(ki.fromBufferAttribute(e,l),Lt.add(ki)),r=Math.max(r,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],u=[];for(let x=0;x<n.count;x++)o[x]=new U,u[x]=new U;const l=new U,f=new U,d=new U,c=new Ie,h=new Ie,g=new Ie,S=new U,m=new U;function p(x,E,P){l.fromBufferAttribute(n,x),f.fromBufferAttribute(n,E),d.fromBufferAttribute(n,P),c.fromBufferAttribute(s,x),h.fromBufferAttribute(s,E),g.fromBufferAttribute(s,P),f.sub(l),d.sub(l),h.sub(c),g.sub(c);const w=1/(h.x*g.y-g.x*h.y);isFinite(w)&&(S.copy(f).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(w),m.copy(d).multiplyScalar(h.x).addScaledVector(f,-g.x).multiplyScalar(w),o[x].add(S),o[E].add(S),o[P].add(S),u[x].add(m),u[E].add(m),u[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,E=v.length;x<E;++x){const P=v[x],w=P.start,N=P.count;for(let W=w,X=w+N;W<X;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const y=new U,b=new U,C=new U,T=new U;function R(x){C.fromBufferAttribute(r,x),T.copy(C);const E=o[x];y.copy(E),y.sub(C.multiplyScalar(C.dot(E))).normalize(),b.crossVectors(T,E);const w=b.dot(u[x])<0?-1:1;a.setXYZW(x,y.x,y.y,y.z,w)}for(let x=0,E=v.length;x<E;++x){const P=v[x],w=P.start,N=P.count;for(let W=w,X=w+N;W<X;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,h=n.count;c<h;c++)n.setXYZ(c,0,0,0);const r=new U,s=new U,a=new U,o=new U,u=new U,l=new U,f=new U,d=new U;if(e)for(let c=0,h=e.count;c<h;c+=3){const g=e.getX(c+0),S=e.getX(c+1),m=e.getX(c+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(n,g),u.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(f),u.add(f),l.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let c=0,h=t.count;c<h;c+=3)r.fromBufferAttribute(t,c+0),s.fromBufferAttribute(t,c+1),a.fromBufferAttribute(t,c+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),n.setXYZ(c+0,f.x,f.y,f.z),n.setXYZ(c+1,f.x,f.y,f.z),n.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,u){const l=o.array,f=o.itemSize,d=o.normalized,c=new l.constructor(u.length*f);let h=0,g=0;for(let S=0,m=u.length;S<m;S++){o.isInterleavedBufferAttribute?h=u[S]*o.data.stride+o.offset:h=u[S]*f;for(let p=0;p<f;p++)c[g++]=l[h++]}return new un(c,f,d)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,r=this.attributes;for(const o in r){const u=r[o],l=e(u,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const u=[],l=s[o];for(let f=0,d=l.length;f<d;f++){const c=l[f],h=e(c,n);u.push(h)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,u=a.length;o<u;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const l=n[u];e.data.attributes[u]=l.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],f=[];for(let d=0,c=l.length;d<c;d++){const h=l[d];f.push(h.toJSON(e.data))}f.length>0&&(r[u]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],d=s[l];for(let c=0,h=d.length;c<h;c++)f.push(d[c].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mo,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new U;class Us{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Is("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Us(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Is("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let pf=0;class Ci extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Zi,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Ua,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const u=s[o];delete u.metadata,a.push(u)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mf extends Ci{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gi;const ur=new U,Hi=new U,Wi=new U,$i=new Ie,dr=new Ie,tu=new ht,Wr=new U,fr=new U,$r=new U,Ml=new Ie,pa=new Ie,bl=new Ie;class Hv extends Gt{constructor(e=new mf){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new Ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hf(t,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new Us(n,3,0,!1)),Gi.setAttribute("uv",new Us(n,2,3,!1))}this.geometry=Gi,this.material=e,this.center=new Ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),tu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Wi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Xr(Wr.set(-.5,-.5,0),Wi,a,Hi,r,s),Xr(fr.set(.5,-.5,0),Wi,a,Hi,r,s),Xr($r.set(.5,.5,0),Wi,a,Hi,r,s),Ml.set(0,0),pa.set(1,0),bl.set(1,1);let o=e.ray.intersectTriangle(Wr,fr,$r,!1,ur);if(o===null&&(Xr(fr.set(-.5,.5,0),Wi,a,Hi,r,s),pa.set(0,1),o=e.ray.intersectTriangle(Wr,$r,fr,!1,ur),o===null))return;const u=e.ray.origin.distanceTo(ur);u<e.near||u>e.far||t.push({distance:u,point:ur.clone(),uv:en.getInterpolation(ur,Wr,fr,$r,Ml,pa,bl,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Xr(i,e,t,n,r,s){$i.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(dr.x=s*$i.x-r*$i.y,dr.y=r*$i.x+s*$i.y):dr.copy($i),i.copy(e),i.x+=dr.x,i.y+=dr.y,i.applyMatrix4(tu)}const Un=new U,ma=new U,qr=new U,Zn=new U,ga=new U,Yr=new U,_a=new U;class Wo{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ma.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(ma);const s=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=Zn.dot(this.direction),u=-Zn.dot(qr),l=Zn.lengthSq(),f=Math.abs(1-a*a);let d,c,h,g;if(f>0)if(d=a*u-o,c=a*o-u,g=s*f,d>=0)if(c>=-g)if(c<=g){const S=1/f;d*=S,c*=S,h=d*(d+a*c+2*o)+c*(a*d+c+2*u)+l}else c=s,d=Math.max(0,-(a*c+o)),h=-d*d+c*(c+2*u)+l;else c=-s,d=Math.max(0,-(a*c+o)),h=-d*d+c*(c+2*u)+l;else c<=-g?(d=Math.max(0,-(-a*s+o)),c=d>0?-s:Math.min(Math.max(-s,-u),s),h=-d*d+c*(c+2*u)+l):c<=g?(d=0,c=Math.min(Math.max(-s,-u),s),h=c*(c+2*u)+l):(d=Math.max(0,-(a*s+o)),c=d>0?s:Math.min(Math.max(-s,-u),s),h=-d*d+c*(c+2*u)+l);else c=a>0?-s:s,d=Math.max(0,-(a*c+o)),h=-d*d+c*(c+2*u)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ma).addScaledVector(qr,c),h}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),r=Un.dot(Un)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,u=n+a;return u<0?null:o<0?this.at(u,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,u;const l=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,c=this.origin;return l>=0?(n=(e.min.x-c.x)*l,r=(e.max.x-c.x)*l):(n=(e.max.x-c.x)*l,r=(e.min.x-c.x)*l),f>=0?(s=(e.min.y-c.y)*f,a=(e.max.y-c.y)*f):(s=(e.max.y-c.y)*f,a=(e.min.y-c.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-c.z)*d,u=(e.max.z-c.z)*d):(o=(e.max.z-c.z)*d,u=(e.min.z-c.z)*d),n>u||o>r)||((o>n||n!==n)&&(n=o),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,r,s){ga.subVectors(t,e),Yr.subVectors(n,e),_a.crossVectors(ga,Yr);let a=this.direction.dot(_a),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);const u=o*this.direction.dot(Yr.crossVectors(Zn,Yr));if(u<0)return null;const l=o*this.direction.dot(ga.cross(Zn));if(l<0||u+l>a)return null;const f=-o*Zn.dot(_a);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $o extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yl=new ht,pi=new Wo,jr=new wi,El=new U,Kr=new U,Zr=new U,Jr=new U,xa=new U,Qr=new U,Tl=new U,es=new U;class dn extends Gt{constructor(e=new Ut,t=new $o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Qr.set(0,0,0);for(let u=0,l=s.length;u<l;u++){const f=o[u],d=s[u];f!==0&&(xa.fromBufferAttribute(d,e),a?Qr.addScaledVector(xa,f):Qr.addScaledVector(xa.sub(t),f))}t.add(Qr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),pi.copy(e.ray).recast(e.near),!(jr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(jr,El)===null||pi.origin.distanceToSquared(El)>(e.far-e.near)**2))&&(yl.copy(s).invert(),pi.copy(e.ray).applyMatrix4(yl),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,u=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,c=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=c.length;g<S;g++){const m=c[g],p=a[m.materialIndex],v=Math.max(m.start,h.start),y=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let b=v,C=y;b<C;b+=3){const T=o.getX(b),R=o.getX(b+1),x=o.getX(b+2);r=ts(this,p,e,n,l,f,d,T,R,x),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),S=Math.min(o.count,h.start+h.count);for(let m=g,p=S;m<p;m+=3){const v=o.getX(m),y=o.getX(m+1),b=o.getX(m+2);r=ts(this,a,e,n,l,f,d,v,y,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let g=0,S=c.length;g<S;g++){const m=c[g],p=a[m.materialIndex],v=Math.max(m.start,h.start),y=Math.min(u.count,Math.min(m.start+m.count,h.start+h.count));for(let b=v,C=y;b<C;b+=3){const T=b,R=b+1,x=b+2;r=ts(this,p,e,n,l,f,d,T,R,x),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),S=Math.min(u.count,h.start+h.count);for(let m=g,p=S;m<p;m+=3){const v=m,y=m+1,b=m+2;r=ts(this,a,e,n,l,f,d,v,y,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function gf(i,e,t,n,r,s,a,o){let u;if(e.side===qt?u=n.intersectTriangle(a,s,r,!0,o):u=n.intersectTriangle(r,s,a,e.side===si,o),u===null)return null;es.copy(o),es.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(es);return l<t.near||l>t.far?null:{distance:l,point:es.clone(),object:i}}function ts(i,e,t,n,r,s,a,o,u,l){i.getVertexPosition(o,Kr),i.getVertexPosition(u,Zr),i.getVertexPosition(l,Jr);const f=gf(i,e,t,n,Kr,Zr,Jr,Tl);if(f){const d=new U;en.getBarycoord(Tl,Kr,Zr,Jr,d),r&&(f.uv=en.getInterpolatedAttribute(r,o,u,l,d,new Ie)),s&&(f.uv1=en.getInterpolatedAttribute(s,o,u,l,d,new Ie)),a&&(f.normal=en.getInterpolatedAttribute(a,o,u,l,d,new U),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const c={a:o,b:u,c:l,normal:new U,materialIndex:0};en.getNormal(Kr,Zr,Jr,c.normal),f.face=c,f.barycoord=d}return f}class nu extends kt{constructor(e=null,t=1,n=1,r,s,a,o,u,l=It,f=It,d,c){super(null,a,o,u,l,f,r,s,d,c),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al extends un{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xi=new ht,wl=new ht,ns=[],Cl=new Ai,_f=new ht,hr=new dn,pr=new wi;class Wv extends dn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Al(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,_f)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),Cl.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union(Cl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),pr.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Xi),wl.multiplyMatrices(n,Xi),hr.matrixWorld=wl,hr.raycast(e,ns);for(let a=0,o=ns.length;a<o;a++){const u=ns[a];u.instanceId=s,u.object=this,t.push(u)}ns.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Al(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new nu(new Float32Array(r*this.count),r,this.count,Oo,mn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,u=r*e;return s[u]=o,s.set(n,u+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const va=new U,xf=new U,vf=new Be;class _i{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=va.subVectors(n,t).cross(xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(va),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vf.getNormalMatrix(e),r=this.coplanarPoint(va).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new wi,Sf=new Ie(.5,.5),is=new U;class iu{constructor(e=new _i,t=new _i,n=new _i,r=new _i,s=new _i,a=new _i){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],u=s[2],l=s[3],f=s[4],d=s[5],c=s[6],h=s[7],g=s[8],S=s[9],m=s[10],p=s[11],v=s[12],y=s[13],b=s[14],C=s[15];if(r[0].setComponents(l-a,h-f,p-g,C-v).normalize(),r[1].setComponents(l+a,h+f,p+g,C+v).normalize(),r[2].setComponents(l+o,h+d,p+S,C+y).normalize(),r[3].setComponents(l-o,h-d,p-S,C-y).normalize(),n)r[4].setComponents(u,c,m,b).normalize(),r[5].setComponents(l-u,h-c,p-m,C-b).normalize();else if(r[4].setComponents(l-u,h-c,p-m,C-b).normalize(),t===En)r[5].setComponents(l+u,h+c,p+m,C+b).normalize();else if(t===Ds)r[5].setComponents(u,c,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);const t=Sf.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(is.x=r.normal.x>0?e.max.x:e.min.x,is.y=r.normal.y>0?e.max.y:e.min.y,is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mf extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ns=new U,Fs=new U,Rl=new ht,mr=new Wo,rs=new wi,Sa=new U,Pl=new U;class bf extends Gt{constructor(e=new Ut,t=new Mf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ns.fromBufferAttribute(t,r-1),Fs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ns.distanceTo(Fs);e.setAttribute("lineDistance",new gt(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),rs.radius+=s,e.ray.intersectsSphere(rs)===!1)return;Rl.copy(r).invert(),mr.copy(e.ray).applyMatrix4(Rl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=o*o,l=this.isLineSegments?2:1,f=n.index,c=n.attributes.position;if(f!==null){const h=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let S=h,m=g-1;S<m;S+=l){const p=f.getX(S),v=f.getX(S+1),y=ss(this,e,mr,u,p,v,S);y&&t.push(y)}if(this.isLineLoop){const S=f.getX(g-1),m=f.getX(h),p=ss(this,e,mr,u,S,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let S=h,m=g-1;S<m;S+=l){const p=ss(this,e,mr,u,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){const S=ss(this,e,mr,u,g-1,h,g-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ss(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Ns.fromBufferAttribute(o,r),Fs.fromBufferAttribute(o,s),t.distanceSqToSegment(Ns,Fs,Sa,Pl)>n)return;Sa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Sa);if(!(l<e.near||l>e.far))return{distance:l,point:Pl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Dl=new U,Ll=new U;class $v extends bf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Dl.fromBufferAttribute(t,r),Ll.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Dl.distanceTo(Ll);e.setAttribute("lineDistance",new gt(n,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yf extends Ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Il=new ht,To=new Wo,as=new wi,os=new U;class Xv extends Gt{constructor(e=new Ut,t=new yf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(r),as.radius+=s,e.ray.intersectsSphere(as)===!1)return;Il.copy(r).invert(),To.copy(e.ray).applyMatrix4(Il);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=o*o,l=n.index,d=n.attributes.position;if(l!==null){const c=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let g=c,S=h;g<S;g++){const m=l.getX(g);os.fromBufferAttribute(d,m),Ul(os,m,u,r,e,t,this)}}else{const c=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let g=c,S=h;g<S;g++)os.fromBufferAttribute(d,g),Ul(os,g,u,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ul(i,e,t,n,r,s,a){const o=To.distanceSqToPoint(i);if(o<t){const u=new U;To.closestPointToPoint(i,u),u.applyMatrix4(n);const l=r.ray.origin.distanceTo(u);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ru extends kt{constructor(e=[],t=bi,n,r,s,a,o,u,l,f){super(e,t,n,r,s,a,o,u,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qv extends kt{constructor(e,t,n,r,s,a,o,u,l){super(e,t,n,r,s,a,o,u,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tr extends kt{constructor(e,t,n=Cn,r,s,a,o=It,u=It,l,f=kn,d=1){if(f!==kn&&f!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const c={width:e,height:t,depth:d};super(c,r,s,a,o,u,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ef extends tr{constructor(e,t=Cn,n=bi,r,s,a=It,o=It,u,l=kn){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,n,r,s,a,o,u,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class su extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ar extends Ut{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],l=[],f=[],d=[];let c=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(d,2));function g(S,m,p,v,y,b,C,T,R,x,E){const P=b/R,w=C/x,N=b/2,W=C/2,X=T/2,L=R+1,V=x+1;let O=0,K=0;const Q=new U;for(let B=0;B<V;B++){const q=B*w-W;for(let ie=0;ie<L;ie++){const ve=ie*P-N;Q[S]=ve*v,Q[m]=q*y,Q[p]=X,l.push(Q.x,Q.y,Q.z),Q[S]=0,Q[m]=0,Q[p]=T>0?1:-1,f.push(Q.x,Q.y,Q.z),d.push(ie/R),d.push(1-B/x),O+=1}}for(let B=0;B<x;B++)for(let q=0;q<R;q++){const ie=c+q+L*B,ve=c+q+L*(B+1),ge=c+(q+1)+L*(B+1),be=c+(q+1)+L*B;u.push(ie,ve,be),u.push(ve,ge,be),K+=6}o.addGroup(h,K,E),h+=K,c+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xo extends Ut{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),f(),this.setAttribute("position",new gt(s,3)),this.setAttribute("normal",new gt(s.slice(),3)),this.setAttribute("uv",new gt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new U,b=new U,C=new U;for(let T=0;T<t.length;T+=3)h(t[T+0],y),h(t[T+1],b),h(t[T+2],C),u(y,b,C,v)}function u(v,y,b,C){const T=C+1,R=[];for(let x=0;x<=T;x++){R[x]=[];const E=v.clone().lerp(b,x/T),P=y.clone().lerp(b,x/T),w=T-x;for(let N=0;N<=w;N++)N===0&&x===T?R[x][N]=E:R[x][N]=E.clone().lerp(P,N/w)}for(let x=0;x<T;x++)for(let E=0;E<2*(T-x)-1;E++){const P=Math.floor(E/2);E%2===0?(c(R[x][P+1]),c(R[x+1][P]),c(R[x][P])):(c(R[x][P+1]),c(R[x+1][P+1]),c(R[x+1][P]))}}function l(v){const y=new U;for(let b=0;b<s.length;b+=3)y.x=s[b+0],y.y=s[b+1],y.z=s[b+2],y.normalize().multiplyScalar(v),s[b+0]=y.x,s[b+1]=y.y,s[b+2]=y.z}function f(){const v=new U;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const b=m(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;a.push(b,1-C)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){const y=a[v+0],b=a[v+2],C=a[v+4],T=Math.max(y,b,C),R=Math.min(y,b,C);T>.9&&R<.1&&(y<.2&&(a[v+0]+=1),b<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function c(v){s.push(v.x,v.y,v.z)}function h(v,y){const b=v*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function g(){const v=new U,y=new U,b=new U,C=new U,T=new Ie,R=new Ie,x=new Ie;for(let E=0,P=0;E<s.length;E+=9,P+=6){v.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),b.set(s[E+6],s[E+7],s[E+8]),T.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),C.copy(v).add(y).add(b).divideScalar(3);const w=m(C);S(T,P+0,v,w),S(R,P+2,y,w),S(x,P+4,b,w)}}function S(v,y,b,C){C<0&&v.x===1&&(a[y]=v.x-1),b.x===0&&b.z===0&&(a[y]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.vertices,e.indices,e.radius,e.detail)}}const ls=new U,cs=new U,Ma=new U,us=new en;class Yv extends Ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(bs*t),a=e.getIndex(),o=e.getAttribute("position"),u=a?a.count:o.count,l=[0,0,0],f=["a","b","c"],d=new Array(3),c={},h=[];for(let g=0;g<u;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:S,b:m,c:p}=us;if(S.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),us.getNormal(Ma),d[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const y=(v+1)%3,b=d[v],C=d[y],T=us[f[v]],R=us[f[y]],x=`${b}_${C}`,E=`${C}_${b}`;E in c&&c[E]?(Ma.dot(c[E].normal)<=s&&(h.push(T.x,T.y,T.z),h.push(R.x,R.y,R.z)),c[E]=null):x in c||(c[x]={index0:l[v],index1:l[y],normal:Ma.clone()})}}for(const g in c)if(c[g]){const{index0:S,index1:m}=c[g];ls.fromBufferAttribute(o,S),cs.fromBufferAttribute(o,m),h.push(ls.x,ls.y,ls.z),h.push(cs.x,cs.y,cs.z)}this.setAttribute("position",new gt(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class au extends Xo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new au(e.radius,e.detail)}}class Vs extends Ut{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),u=Math.floor(r),l=o+1,f=u+1,d=e/o,c=t/u,h=[],g=[],S=[],m=[];for(let p=0;p<f;p++){const v=p*c-a;for(let y=0;y<l;y++){const b=y*d-s;g.push(b,-v,0),S.push(0,0,1),m.push(y/o),m.push(1-p/u)}}for(let p=0;p<u;p++)for(let v=0;v<o;v++){const y=v+l*p,b=v+l*(p+1),C=v+1+l*(p+1),T=v+1+l*p;h.push(y,b,T),h.push(b,C,T)}this.setIndex(h),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(S,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}class ou extends Ut{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+o,Math.PI);let l=0;const f=[],d=new U,c=new U,h=[],g=[],S=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let b=0;p===0&&a===0?b=.5/t:p===n&&u===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const T=C/t;d.x=-e*Math.cos(r+T*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(r+T*s)*Math.sin(a+y*o),g.push(d.x,d.y,d.z),c.copy(d).normalize(),S.push(c.x,c.y,c.z),m.push(T+b,1-y),v.push(l++)}f.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=f[p][v+1],b=f[p][v],C=f[p+1][v],T=f[p+1][v+1];(p!==0||a>0)&&h.push(y,b,T),(p!==n-1||u<Math.PI)&&h.push(b,C,T)}this.setIndex(h),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(S,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lu extends Ut{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const u=[],l=[],f=[],d=[],c=new U,h=new U,g=new U;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let p=0;p<=r;p++){const v=p/r*s;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),l.push(h.x,h.y,h.z),c.x=e*Math.cos(v),c.y=e*Math.sin(v),g.subVectors(h,c).normalize(),f.push(g.x,g.y,g.z),d.push(p/r),d.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=r;m++){const p=(r+1)*S+m-1,v=(r+1)*(S-1)+m-1,y=(r+1)*(S-1)+m,b=(r+1)*S+m;u.push(p,v,b),u.push(v,y,b)}this.setIndex(u),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function nr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Nl(r))r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Nl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=nr(i[t]);for(const r in n)e[r]=n[r]}return e}function Nl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Tf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Os={clone:nr,merge:Wt};var Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=Tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cf extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rf extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pf extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ds=new U,fs=new rr,Sn=new U;class uu extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ds,fs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ds,fs,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ds,fs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ds,fs,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new U,Fl=new Ie,Ol=new Ie;class on extends uu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Fl,Ol),t.subVectors(Ol,Fl)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*n/l,r*=a.width/u,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class qo extends uu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,u=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qi=-90,Yi=1;class Df extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(qi,Yi,e,t);r.layers=this.layers,this.add(r);const s=new on(qi,Yi,e,t);s.layers=this.layers,this.add(s);const a=new on(qi,Yi,e,t);a.layers=this.layers,this.add(a);const o=new on(qi,Yi,e,t);o.layers=this.layers,this.add(o);const u=new on(qi,Yi,e,t);u.layers=this.layers,this.add(u);const l=new on(qi,Yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,u]=t;for(const l of t)this.remove(l);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,u,l,f]=this.children,d=e.getRenderTarget(),c=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,c,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lf extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class If{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Uf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Uf(){this._document.hidden===!1&&this.reset()}class du{static{du.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}}function Bl(i,e,t,n){const r=Nf(n);switch(t){case qc:return i*e;case Oo:return i*e/r.components*r.byteLength;case Bo:return i*e/r.components*r.byteLength;case yi:return i*e*2/r.components*r.byteLength;case zo:return i*e*2/r.components*r.byteLength;case Yc:return i*e*3/r.components*r.byteLength;case gn:return i*e*4/r.components*r.byteLength;case Vo:return i*e*4/r.components*r.byteLength;case xs:case vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ss:case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $a:case qa:return Math.max(i,16)*Math.max(e,8)/4;case Wa:case Xa:return Math.max(i,8)*Math.max(e,8)/2;case Ya:case ja:case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ka:case ws:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ao:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mo:case go:case _o:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xo:case vo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cs:case So:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nf(i){switch(i){case ln:case Hc:return{byteLength:1,components:1};case yr:case Wc:case nn:return{byteLength:2,components:1};case No:case Fo:return{byteLength:2,components:4};case Cn:case Uo:case mn:return{byteLength:4,components:1};case $c:case Xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);function fu(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ff(i){const e=new WeakMap;function t(o,u){const l=o.array,f=o.usage,d=l.byteLength,c=i.createBuffer();i.bindBuffer(u,c),i.bufferData(u,l,f),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:c,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,u,l){const f=u.array,d=u.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,f);else{d.sort((h,g)=>h.start-g.start);let c=0;for(let h=1;h<d.length;h++){const g=d[c],S=d[h];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++c,d[c]=S)}d.length=c+1;for(let h=0,g=d.length;h<g;h++){const S=d[h];i.bufferSubData(l,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);u&&(i.deleteBuffer(u.buffer),e.delete(o))}function a(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,u));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,u),l.version=o.version}}return{get:r,remove:s,update:a}}var Of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bf=`#ifdef USE_ALPHAHASH
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
#endif`,zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hf=`#ifdef USE_AOMAP
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
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$f=`#ifdef USE_BATCHING
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
#endif`,Xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Zf=`#ifdef USE_BUMPMAP
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ih=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ah=`#define PI 3.141592653589793
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
} // validated`,oh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lh=`vec3 transformedNormal = objectNormal;
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
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
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
#endif`,xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vh=`#ifdef USE_ENVMAP
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
#endif`,Sh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eh=`#ifdef USE_GRADIENTMAP
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
}`,Th=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ah=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ch=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Rh=`#ifdef USE_ENVMAP
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
#endif`,Ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uh=`PhysicalMaterial material;
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
#endif`,Nh=`uniform sampler2D dfgLUT;
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
}`,Fh=`
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
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zh=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Vh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$h=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qh=`#if defined( USE_POINTS_UV )
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
#endif`,Yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qh=`#ifdef USE_MORPHTARGETS
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
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
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
#endif`,op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bp=`float getShadowMask() {
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
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,Tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bp=`uniform sampler2D t2D;
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`#include <common>
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
}`,Wp=`#if DEPTH_PACKING == 3200
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
}`,$p=`#define DISTANCE
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
}`,Xp=`#define DISTANCE
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Qp=`#define LAMBERT
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
}`,em=`#define LAMBERT
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
}`,tm=`#define MATCAP
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
}`,nm=`#define MATCAP
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
}`,im=`#define NORMAL
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
}`,rm=`#define NORMAL
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
}`,sm=`#define PHONG
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
}`,am=`#define PHONG
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
}`,om=`#define STANDARD
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
}`,lm=`#define STANDARD
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
}`,cm=`#define TOON
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
}`,um=`#define TOON
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
}`,dm=`uniform float size;
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
}`,fm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,pm=`uniform vec3 color;
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
}`,mm=`uniform float rotation;
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
}`,gm=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Of,alphahash_pars_fragment:Bf,alphamap_fragment:zf,alphamap_pars_fragment:Vf,alphatest_fragment:kf,alphatest_pars_fragment:Gf,aomap_fragment:Hf,aomap_pars_fragment:Wf,batching_pars_vertex:$f,batching_vertex:Xf,begin_vertex:qf,beginnormal_vertex:Yf,bsdfs:jf,iridescence_fragment:Kf,bumpmap_pars_fragment:Zf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:eh,clipping_planes_vertex:th,color_fragment:nh,color_pars_fragment:ih,color_pars_vertex:rh,color_vertex:sh,common:ah,cube_uv_reflection_fragment:oh,defaultnormal_vertex:lh,displacementmap_pars_vertex:ch,displacementmap_vertex:uh,emissivemap_fragment:dh,emissivemap_pars_fragment:fh,colorspace_fragment:hh,colorspace_pars_fragment:ph,envmap_fragment:mh,envmap_common_pars_fragment:gh,envmap_pars_fragment:_h,envmap_pars_vertex:xh,envmap_physical_pars_fragment:Rh,envmap_vertex:vh,fog_vertex:Sh,fog_pars_vertex:Mh,fog_fragment:bh,fog_pars_fragment:yh,gradientmap_pars_fragment:Eh,lightmap_pars_fragment:Th,lights_lambert_fragment:Ah,lights_lambert_pars_fragment:wh,lights_pars_begin:Ch,lights_toon_fragment:Ph,lights_toon_pars_fragment:Dh,lights_phong_fragment:Lh,lights_phong_pars_fragment:Ih,lights_physical_fragment:Uh,lights_physical_pars_fragment:Nh,lights_fragment_begin:Fh,lights_fragment_maps:Oh,lights_fragment_end:Bh,lightprobes_pars_fragment:zh,logdepthbuf_fragment:Vh,logdepthbuf_pars_fragment:kh,logdepthbuf_pars_vertex:Gh,logdepthbuf_vertex:Hh,map_fragment:Wh,map_pars_fragment:$h,map_particle_fragment:Xh,map_particle_pars_fragment:qh,metalnessmap_fragment:Yh,metalnessmap_pars_fragment:jh,morphinstance_vertex:Kh,morphcolor_vertex:Zh,morphnormal_vertex:Jh,morphtarget_pars_vertex:Qh,morphtarget_vertex:ep,normal_fragment_begin:tp,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:rp,normal_vertex:sp,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:up,opaque_fragment:dp,packing:fp,premultiplied_alpha_fragment:hp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:xp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:Sp,shadowmap_vertex:Mp,shadowmask_pars_fragment:bp,skinbase_vertex:yp,skinning_pars_vertex:Ep,skinning_vertex:Tp,skinnormal_vertex:Ap,specularmap_fragment:wp,specularmap_pars_fragment:Cp,tonemapping_fragment:Rp,tonemapping_pars_fragment:Pp,transmission_fragment:Dp,transmission_pars_fragment:Lp,uv_pars_fragment:Ip,uv_pars_vertex:Up,uv_vertex:Np,worldpos_vertex:Fp,background_vert:Op,background_frag:Bp,backgroundCube_vert:zp,backgroundCube_frag:Vp,cube_vert:kp,cube_frag:Gp,depth_vert:Hp,depth_frag:Wp,distance_vert:$p,distance_frag:Xp,equirect_vert:qp,equirect_frag:Yp,linedashed_vert:jp,linedashed_frag:Kp,meshbasic_vert:Zp,meshbasic_frag:Jp,meshlambert_vert:Qp,meshlambert_frag:em,meshmatcap_vert:tm,meshmatcap_frag:nm,meshnormal_vert:im,meshnormal_frag:rm,meshphong_vert:sm,meshphong_frag:am,meshphysical_vert:om,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:um,points_vert:dm,points_frag:fm,shadow_vert:hm,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},pe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},bn={basic:{uniforms:Wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Wt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Wt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Wt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Wt([pe.points,pe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Wt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Wt([pe.common,pe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Wt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Wt([pe.sprite,pe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Wt([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Wt([pe.lights,pe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};bn.physical={uniforms:Wt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const hs={r:0,b:0,g:0},_m=new ht,hu=new Be;hu.set(-1,0,0,0,1,0,0,0,1);function xm(i,e,t,n,r,s){const a=new Ke(0);let o=r===!0?0:1,u,l,f=null,d=0,c=null;function h(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const b=v.backgroundBlurriness>0;y=e.get(y,b)}return y}function g(v){let y=!1;const b=h(v);b===null?m(a,o):b&&b.isColor&&(m(b,1),y=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(v,y){const b=h(y);b&&(b.isCubeTexture||b.mapping===zs)?(l===void 0&&(l=new dn(new Ar(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:nr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(y.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(hu),l.material.toneMapped=Ye.getTransfer(b.colorSpace)!==it,(f!==b||d!==b.version||c!==i.toneMapping)&&(l.material.needsUpdate=!0,f=b,d=b.version,c=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new dn(new Vs(2,2),new Vt({name:"BackgroundMaterial",uniforms:nr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(b.colorSpace)!==it,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||c!==i.toneMapping)&&(u.material.needsUpdate=!0,f=b,d=b.version,c=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function m(v,y){v.getRGB(hs,cu(i)),t.buffers.color.setClear(hs.r,hs.g,hs.b,y,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:S,dispose:p}}function vm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null);let s=r,a=!1;function o(w,N,W,X,L){let V=!1;const O=d(w,X,W,N);s!==O&&(s=O,l(s.object)),V=h(w,X,W,L),V&&g(w,X,W,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(w,N,W,X),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function u(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function f(w){return i.deleteVertexArray(w)}function d(w,N,W,X){const L=X.wireframe===!0;let V=n[N.id];V===void 0&&(V={},n[N.id]=V);const O=w.isInstancedMesh===!0?w.id:0;let K=V[O];K===void 0&&(K={},V[O]=K);let Q=K[W.id];Q===void 0&&(Q={},K[W.id]=Q);let B=Q[L];return B===void 0&&(B=c(u()),Q[L]=B),B}function c(w){const N=[],W=[],X=[];for(let L=0;L<t;L++)N[L]=0,W[L]=0,X[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:X,object:w,attributes:{},index:null}}function h(w,N,W,X){const L=s.attributes,V=N.attributes;let O=0;const K=W.getAttributes();for(const Q in K)if(K[Q].location>=0){const q=L[Q];let ie=V[Q];if(ie===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor)),q===void 0||q.attribute!==ie||ie&&q.data!==ie.data)return!0;O++}return s.attributesNum!==O||s.index!==X}function g(w,N,W,X){const L={},V=N.attributes;let O=0;const K=W.getAttributes();for(const Q in K)if(K[Q].location>=0){let q=V[Q];q===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(q=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(q=w.instanceColor));const ie={};ie.attribute=q,q&&q.data&&(ie.data=q.data),L[Q]=ie,O++}s.attributes=L,s.attributesNum=O,s.index=X}function S(){const w=s.newAttributes;for(let N=0,W=w.length;N<W;N++)w[N]=0}function m(w){p(w,0)}function p(w,N){const W=s.newAttributes,X=s.enabledAttributes,L=s.attributeDivisors;W[w]=1,X[w]===0&&(i.enableVertexAttribArray(w),X[w]=1),L[w]!==N&&(i.vertexAttribDivisor(w,N),L[w]=N)}function v(){const w=s.newAttributes,N=s.enabledAttributes;for(let W=0,X=N.length;W<X;W++)N[W]!==w[W]&&(i.disableVertexAttribArray(W),N[W]=0)}function y(w,N,W,X,L,V,O){O===!0?i.vertexAttribIPointer(w,N,W,L,V):i.vertexAttribPointer(w,N,W,X,L,V)}function b(w,N,W,X){S();const L=X.attributes,V=W.getAttributes(),O=N.defaultAttributeValues;for(const K in V){const Q=V[K];if(Q.location>=0){let B=L[K];if(B===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(B=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(B=w.instanceColor)),B!==void 0){const q=B.normalized,ie=B.itemSize,ve=e.get(B);if(ve===void 0)continue;const ge=ve.buffer,be=ve.type,k=ve.bytesPerElement,j=be===i.INT||be===i.UNSIGNED_INT||B.gpuType===Uo;if(B.isInterleavedBufferAttribute){const te=B.data,_e=te.stride,Ce=B.offset;if(te.isInstancedInterleavedBuffer){for(let Ae=0;Ae<Q.locationSize;Ae++)p(Q.location+Ae,te.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ae=0;Ae<Q.locationSize;Ae++)m(Q.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Ae=0;Ae<Q.locationSize;Ae++)y(Q.location+Ae,ie/Q.locationSize,be,q,_e*k,(Ce+ie/Q.locationSize*Ae)*k,j)}else{if(B.isInstancedBufferAttribute){for(let te=0;te<Q.locationSize;te++)p(Q.location+te,B.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let te=0;te<Q.locationSize;te++)m(Q.location+te);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let te=0;te<Q.locationSize;te++)y(Q.location+te,ie/Q.locationSize,be,q,ie*k,ie/Q.locationSize*te*k,j)}}else if(O!==void 0){const q=O[K];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(Q.location,q);break;case 3:i.vertexAttrib3fv(Q.location,q);break;case 4:i.vertexAttrib4fv(Q.location,q);break;default:i.vertexAttrib1fv(Q.location,q)}}}}v()}function C(){E();for(const w in n){const N=n[w];for(const W in N){const X=N[W];for(const L in X){const V=X[L];for(const O in V)f(V[O].object),delete V[O];delete X[L]}}delete n[w]}}function T(w){if(n[w.id]===void 0)return;const N=n[w.id];for(const W in N){const X=N[W];for(const L in X){const V=X[L];for(const O in V)f(V[O].object),delete V[O];delete X[L]}}delete n[w.id]}function R(w){for(const N in n){const W=n[N];for(const X in W){const L=W[X];if(L[w.id]===void 0)continue;const V=L[w.id];for(const O in V)f(V[O].object),delete V[O];delete L[w.id]}}}function x(w){for(const N in n){const W=n[N],X=w.isInstancedMesh===!0?w.id:0,L=W[X];if(L!==void 0){for(const V in L){const O=L[V];for(const K in O)f(O[K].object),delete O[K];delete L[V]}delete W[X],Object.keys(W).length===0&&delete n[N]}}}function E(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:v}}function Sm(i,e,t){let n;function r(u){n=u}function s(u,l){i.drawArrays(n,u,l),t.update(l,n,1)}function a(u,l,f){f!==0&&(i.drawArraysInstanced(n,u,l,f),t.update(l,n,f))}function o(u,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,l,0,f);let c=0;for(let h=0;h<f;h++)c+=l[h];t.update(c,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Mm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==gn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==mn&&!x)}function u(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=u(l);f!==l&&(Ue("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const d=t.logarithmicDepthBuffer===!0,c=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&c===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:h,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:C,samples:T}}function bm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new _i,o=new Be,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){const h=d.length!==0||c||n!==0||r;return r=c,n=d.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,c){t=f(d,c,0)},this.setState=function(d,c,h){const g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?f(null):l();else{const v=s?0:n,y=v*4;let b=p.clippingState||null;u.value=b,b=f(g,c,y,h);for(let C=0;C!==y;++C)b[C]=t[C];p.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,c,h,g){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=u.value,g!==!0||m===null){const p=h+S*4,v=c.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=h;y!==S;++y,b+=4)a.copy(d[y]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}u.value=m,u.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const ni=4,zl=[.125,.215,.35,.446,.526,.582],vi=20,ym=256,gr=new qo,Vl=new Ke;let ba=null,ya=0,Ea=0,Ta=!1;const Em=new U;class kl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Em}=s;ba=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,r,u,o),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,ya,Ea),this._renderer.xr.enabled=Ta,e.scissorTest=!1,ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:nn,format:gn,colorSpace:Rs,depthBuffer:!1},r=Gl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Tm(s)),this._blurMaterial=wm(s,e,t),this._ggxMaterial=Am(s,e,t)}return r}_compileMaterial(e){const t=new dn(new Ut,e);this._renderer.compile(t,gr)}_sceneToCubeUV(e,t,n,r,s){const u=new on(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,c=d.autoClear,h=d.toneMapping;d.getClearColor(Vl),d.toneMapping=wn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dn(new Ar,new $o({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(Vl),p=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(u.up.set(0,l[y],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+f[y],s.y,s.z)):b===1?(u.up.set(0,0,l[y]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+f[y],s.z)):(u.up.set(0,l[y],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+f[y]));const C=this._cubeSize;ji(r,b*C,y>2?C:0,C,C),d.setRenderTarget(r),p&&d.render(S,u),d.render(e,u)}d.toneMapping=h,d.autoClear=c,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===bi||e.mapping===er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const u=this._cubeSize;ji(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,gr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const u=a.uniforms,l=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-f*f),c=0+l*1.25,h=d*c,{_lodMax:g}=this,S=this._sizeLods[n],m=3*S*(n>g-ni?n-g+ni:0),p=4*(this._cubeSize-S);u.envMap.value=e.texture,u.roughness.value=h,u.mipInt.value=g-t,ji(s,m,p,3*S,2*S),r.setRenderTarget(s),r.render(o,gr),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=g-n,ji(e,m,p,3*S,2*S),r.setRenderTarget(e),r.render(o,gr)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const u=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=l;const c=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*vi-1),S=s/g,m=isFinite(s)?1+Math.floor(f*S):vi;m>vi&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const p=[];let v=0;for(let R=0;R<vi;++R){const x=R/S,E=Math.exp(-x*x/2);p.push(E),R===0?v+=E:R<m&&(v+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=p,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:y}=this;c.dTheta.value=g,c.mipInt.value=y-n;const b=this._sizeLods[r],C=3*b*(r>y-ni?r-y+ni:0),T=4*(this._cubeSize-b);ji(t,C,T,3*b,2*b),u.setRenderTarget(t),u.render(d,gr)}}function Tm(i){const e=[],t=[],n=[];let r=i;const s=i-ni+1+zl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let u=1/o;a>i-ni?u=zl[a-i+ni-1]:a===0&&(u=0),t.push(u);const l=1/(o-2),f=-l,d=1+l,c=[f,f,d,f,d,d,f,f,d,d,f,d],h=6,g=6,S=3,m=2,p=1,v=new Float32Array(S*g*h),y=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let T=0;T<h;T++){const R=T%3*2/3-1,x=T>2?0:-1,E=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];v.set(E,S*g*T),y.set(c,m*g*T);const P=[T,T,T,T,T,T];b.set(P,p*g*T)}const C=new Ut;C.setAttribute("position",new un(v,S)),C.setAttribute("uv",new un(y,m)),C.setAttribute("faceIndex",new un(b,p)),n.push(new dn(C,null)),r>ni&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Gl(i,e,t){const n=new Yt(i,e,t);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ji(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Am(i,e,t){return new Vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ym,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ks(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function wm(i,e,t){const n=new Float32Array(vi),r=new U(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ks(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Hl(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ks(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Wl(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ks(){return`

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
	`}class pu extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ru(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ar(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:An});s.uniforms.tEquirect.value=t;const a=new dn(r,s),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=zt),new Df(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Cm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(c,h=!1){return c==null?null:h?a(c):s(c)}function s(c){if(c&&c.isTexture){const h=c.mapping;if(h===qs||h===Ys)if(e.has(c)){const g=e.get(c).texture;return o(g,c.mapping)}else{const g=c.image;if(g&&g.height>0){const S=new pu(g.height);return S.fromEquirectangularTexture(i,c),e.set(c,S),c.addEventListener("dispose",l),o(S.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture){const h=c.mapping,g=h===qs||h===Ys,S=h===bi||h===er;if(g||S){let m=t.get(c);const p=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==p)return n===null&&(n=new kl(i)),m=g?n.fromEquirectangular(c,m):n.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,t.set(c,m),m.texture;if(m!==void 0)return m.texture;{const v=c.image;return g&&v&&v.height>0||S&&v&&u(v)?(n===null&&(n=new kl(i)),m=g?n.fromEquirectangular(c):n.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,t.set(c,m),c.addEventListener("dispose",f),m.texture):null}}}return c}function o(c,h){return h===qs?c.mapping=bi:h===Ys&&(c.mapping=er),c}function u(c){let h=0;const g=6;for(let S=0;S<g;S++)c[S]!==void 0&&h++;return h===g}function l(c){const h=c.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function f(c){const h=c.target;h.removeEventListener("dispose",f);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Rm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&yo("WebGLRenderer: "+n+" extension not supported."),r}}}function Pm(i,e,t,n){const r={},s=new WeakMap;function a(d){const c=d.target;c.index!==null&&e.remove(c.index);for(const g in c.attributes)e.remove(c.attributes[g]);c.removeEventListener("dispose",a),delete r[c.id];const h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(d,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c}function u(d){const c=d.attributes;for(const h in c)e.update(c[h],i.ARRAY_BUFFER)}function l(d){const c=[],h=d.index,g=d.attributes.position;let S=0;if(g===void 0)return;if(h!==null){const v=h.array;S=h.version;for(let y=0,b=v.length;y<b;y+=3){const C=v[y+0],T=v[y+1],R=v[y+2];c.push(C,T,T,R,R,C)}}else{const v=g.array;S=g.version;for(let y=0,b=v.length/3-1;y<b;y+=3){const C=y+0,T=y+1,R=y+2;c.push(C,T,T,R,R,C)}}const m=new(g.count>=65535?eu:Qc)(c,1);m.version=S;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function f(d){const c=s.get(d);if(c){const h=d.index;h!==null&&c.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:u,getWireframeAttribute:f}}function Dm(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function u(d,c){i.drawElements(n,c,s,d*a),t.update(c,n,1)}function l(d,c,h){h!==0&&(i.drawElementsInstanced(n,c,s,d*a,h),t.update(c,n,h))}function f(d,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,s,d,0,h);let S=0;for(let m=0;m<h;m++)S+=c[m];t.update(S,n,1)}this.setMode=r,this.setIndex=o,this.render=u,this.renderInstances=l,this.renderMultiDraw=f}function Lm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Im(i,e,t){const n=new WeakMap,r=new Tt;function s(a,o,u){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let c=n.get(o);if(c===void 0||c.count!==d){let E=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",E)};c!==void 0&&c.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;h===!0&&(y=1),g===!0&&(y=2),S===!0&&(y=3);let b=o.attributes.position.count*y,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*C*4*d),R=new Kc(T,b,C,d);R.type=mn,R.needsUpdate=!0;const x=y*4;for(let P=0;P<d;P++){const w=m[P],N=p[P],W=v[P],X=b*C*4*P;for(let L=0;L<w.count;L++){const V=L*x;h===!0&&(r.fromBufferAttribute(w,L),T[X+V+0]=r.x,T[X+V+1]=r.y,T[X+V+2]=r.z,T[X+V+3]=0),g===!0&&(r.fromBufferAttribute(N,L),T[X+V+4]=r.x,T[X+V+5]=r.y,T[X+V+6]=r.z,T[X+V+7]=0),S===!0&&(r.fromBufferAttribute(W,L),T[X+V+8]=r.x,T[X+V+9]=r.y,T[X+V+10]=r.z,T[X+V+11]=W.itemSize===4?r.w:1)}}c={count:d,texture:R,size:new Ie(b,C)},n.set(o,c),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let S=0;S<l.length;S++)h+=l[S];const g=o.morphTargetsRelative?1:1-h;u.getUniforms().setValue(i,"morphTargetBaseInfluence",g),u.getUniforms().setValue(i,"morphTargetInfluences",l)}u.getUniforms().setValue(i,"morphTargetsTexture",c.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:s}}function Um(i,e,t,n,r){let s=new WeakMap;function a(l){const f=r.render.frame,d=l.geometry,c=e.get(l,d);if(s.get(c)!==f&&(e.update(c),s.set(c,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",u)===!1&&l.addEventListener("dispose",u),s.get(l)!==f&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==f&&(h.update(),s.set(h,f))}return c}function o(){s=new WeakMap}function u(l){const f=l.target;f.removeEventListener("dispose",u),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const Nm={[Fc]:"LINEAR_TONE_MAPPING",[Oc]:"REINHARD_TONE_MAPPING",[Bc]:"CINEON_TONE_MAPPING",[Io]:"ACES_FILMIC_TONE_MAPPING",[Vc]:"AGX_TONE_MAPPING",[kc]:"NEUTRAL_TONE_MAPPING",[zc]:"CUSTOM_TONE_MAPPING"};function Fm(i,e,t,n,r){const s=new Yt(e,t,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new tr(e,t):void 0}),a=new Yt(e,t,{type:nn,depthBuffer:!1,stencilBuffer:!1}),o=new Ut;o.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new gt([0,2,0,0,2,0],2));const u=new Cf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new dn(o,u),f=new qo(-1,1,1,-1,0,1);let d=null,c=null,h=!1,g,S=null,m=[],p=!1;this.setSize=function(v,y){s.setSize(v,y),a.setSize(v,y);for(let b=0;b<m.length;b++){const C=m[b];C.setSize&&C.setSize(v,y)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const y=s.width,b=s.height;for(let C=0;C<m.length;C++){const T=m[C];T.setSize&&T.setSize(y,b)}},this.begin=function(v,y){if(h||v.toneMapping===wn&&m.length===0)return!1;if(S=y,y!==null){const b=y.width,C=y.height;(s.width!==b||s.height!==C)&&this.setSize(b,C)}return p===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=wn,!0},this.hasRenderPass=function(){return p},this.end=function(v,y){v.toneMapping=g,h=!0;let b=s,C=a;for(let T=0;T<m.length;T++){const R=m[T];if(R.enabled!==!1&&(R.render(v,C,b,y),R.needsSwap!==!1)){const x=b;b=C,C=x}}if(d!==v.outputColorSpace||c!==v.toneMapping){d=v.outputColorSpace,c=v.toneMapping,u.defines={},Ye.getTransfer(d)===it&&(u.defines.SRGB_TRANSFER="");const T=Nm[c];T&&(u.defines[T]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(S),v.render(l,f),S=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),u.dispose()}}const mu=new kt,Ao=new tr(1,1),gu=new Kc,_u=new ef,xu=new ru,$l=[],Xl=[],ql=new Float32Array(16),Yl=new Float32Array(9),jl=new Float32Array(4);function sr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=$l[r];if(s===void 0&&(s=new Float32Array(r),$l[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gs(i,e){let t=Xl[e];t===void 0&&(t=new Int32Array(e),Xl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Om(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),Dt(t,n)}}function Gm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Yl.set(n),i.uniformMatrix3fv(this.addr,!1,Yl),Dt(t,n)}}function Hm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;ql.set(n),i.uniformMatrix4fv(this.addr,!1,ql),Dt(t,n)}}function Wm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Ym(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function Jm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ao.compareFunction=t.isReversedDepthBuffer()?Go:ko,s=Ao):s=mu,t.setTexture2D(e||s,r)}function Qm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||_u,r)}function eg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||xu,r)}function tg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||gu,r)}function ng(i){switch(i){case 5126:return Om;case 35664:return Bm;case 35665:return zm;case 35666:return Vm;case 35674:return km;case 35675:return Gm;case 35676:return Hm;case 5124:case 35670:return Wm;case 35667:case 35671:return $m;case 35668:case 35672:return Xm;case 35669:case 35673:return qm;case 5125:return Ym;case 36294:return jm;case 36295:return Km;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return tg}}function ig(i,e){i.uniform1fv(this.addr,e)}function rg(i,e){const t=sr(e,this.size,2);i.uniform2fv(this.addr,t)}function sg(i,e){const t=sr(e,this.size,3);i.uniform3fv(this.addr,t)}function ag(i,e){const t=sr(e,this.size,4);i.uniform4fv(this.addr,t)}function og(i,e){const t=sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function lg(i,e){const t=sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cg(i,e){const t=sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ug(i,e){i.uniform1iv(this.addr,e)}function dg(i,e){i.uniform2iv(this.addr,e)}function fg(i,e){i.uniform3iv(this.addr,e)}function hg(i,e){i.uniform4iv(this.addr,e)}function pg(i,e){i.uniform1uiv(this.addr,e)}function mg(i,e){i.uniform2uiv(this.addr,e)}function gg(i,e){i.uniform3uiv(this.addr,e)}function _g(i,e){i.uniform4uiv(this.addr,e)}function xg(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ao:a=mu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function vg(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||_u,s[a])}function Sg(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||xu,s[a])}function Mg(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||gu,s[a])}function bg(i){switch(i){case 5126:return ig;case 35664:return rg;case 35665:return sg;case 35666:return ag;case 35674:return og;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return hg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Mg}}class yg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ng(t.type)}}class Eg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bg(t.type)}}class Tg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Kl(i,e){i.seq.push(e),i.map[e.id]=e}function Ag(i,e,t){const n=i.name,r=n.length;for(Aa.lastIndex=0;;){const s=Aa.exec(n),a=Aa.lastIndex;let o=s[1];const u=s[2]==="]",l=s[3];if(u&&(o=o|0),l===void 0||l==="["&&a+2===r){Kl(t,l===void 0?new yg(o,i,e):new Eg(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Tg(o),Kl(t,d)),t=d}}}class ys{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);Ag(o,u,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],u=n[o.id];u.needsUpdate!==!1&&o.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Zl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wg=37297;let Cg=0;function Rg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Jl=new Be;function Pg(i){Ye._getMatrix(Jl,Ye.workingColorSpace,i);const e=`mat3( ${Jl.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Ps:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ql(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Rg(i.getShaderSource(e),o)}else return s}function Dg(i,e){const t=Pg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Lg={[Fc]:"Linear",[Oc]:"Reinhard",[Bc]:"Cineon",[Io]:"ACESFilmic",[Vc]:"AgX",[kc]:"Neutral",[zc]:"Custom"};function Ig(i,e){const t=Lg[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ps=new U;function Ug(){Ye.getLuminanceCoefficients(ps);const i=ps.x.toFixed(4),e=ps.y.toFixed(4),t=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ng(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function Fg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Og(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Mr(i){return i!==""}function ec(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(i){return i.replace(Bg,Vg)}const zg=new Map;function Vg(i,e){let t=He[e];if(t===void 0){const n=zg.get(e);if(n!==void 0)t=He[n],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wo(t)}const kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(i){return i.replace(kg,Gg)}function Gg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ic(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Hg={[_s]:"SHADOWMAP_TYPE_PCF",[Sr]:"SHADOWMAP_TYPE_VSM"};function Wg(i){return Hg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $g={[bi]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE_UV"};function Xg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$g[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const qg={[er]:"ENVMAP_MODE_REFRACTION"};function Yg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jg={[Nc]:"ENVMAP_BLENDING_MULTIPLY",[Id]:"ENVMAP_BLENDING_MIX",[Ud]:"ENVMAP_BLENDING_ADD"};function Kg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":jg[i.combine]||"ENVMAP_BLENDING_NONE"}function Zg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const u=Wg(t),l=Xg(t),f=Yg(t),d=Kg(t),c=Zg(t),h=Ng(t),g=Fg(s),S=r.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(m=[ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?He.tonemapping_pars_fragment:"",t.toneMapping!==wn?Ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Dg("linearToOutputTexel",t.outputColorSpace),Ug(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),a=wo(a),a=ec(a,t),a=tc(a,t),o=wo(o),o=ec(o,t),o=tc(o,t),a=nc(a),o=nc(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+a,b=v+p+o,C=Zl(r,r.VERTEX_SHADER,y),T=Zl(r,r.FRAGMENT_SHADER,b);r.attachShader(S,C),r.attachShader(S,T),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(w){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(S)||"",W=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(T)||"",L=N.trim(),V=W.trim(),O=X.trim();let K=!0,Q=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,C,T);else{const B=Ql(r,C,"vertex"),q=Ql(r,T,"fragment");Ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+L+`
`+B+`
`+q)}else L!==""?Ue("WebGLProgram: Program Info Log:",L):(V===""||O==="")&&(Q=!1);Q&&(w.diagnostics={runnable:K,programLog:L,vertexShader:{log:V,prefix:m},fragmentShader:{log:O,prefix:p}})}r.deleteShader(C),r.deleteShader(T),x=new ys(r,S),E=Og(r,S)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(S,wg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cg++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=T,this}let Qg=0;class e_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new t_(e),t.set(e,n)),n}}class t_{constructor(e){this.id=Qg++,this.code=e,this.usedTimes=0}}function n_(i){return i===yi||i===ws||i===Cs}function i_(i,e,t,n,r,s){const a=new Zc,o=new e_,u=new Set,l=[],f=new Map,d=n.logarithmicDepthBuffer;let c=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return u.add(x),x===0?"uv":`uv${x}`}function S(x,E,P,w,N,W){const X=w.fog,L=N.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=e.get(x.envMap||V,O),Q=K&&K.mapping===zs?K.image.height:null,B=h[x.type];x.precision!==null&&(c=n.getMaxPrecision(x.precision),c!==x.precision&&Ue("WebGLProgram.getParameters:",x.precision,"not supported, using",c,"instead."));const q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ie=q!==void 0?q.length:0;let ve=0;L.morphAttributes.position!==void 0&&(ve=1),L.morphAttributes.normal!==void 0&&(ve=2),L.morphAttributes.color!==void 0&&(ve=3);let ge,be,k,j;if(B){const Ve=bn[B];ge=Ve.vertexShader,be=Ve.fragmentShader}else ge=x.vertexShader,be=x.fragmentShader,o.update(x),k=o.getVertexShaderID(x),j=o.getFragmentShaderID(x);const te=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Ce=N.isInstancedMesh===!0,Ae=N.isBatchedMesh===!0,Je=!!x.map,ze=!!x.matcap,Qe=!!K,Ne=!!x.aoMap,Fe=!!x.lightMap,mt=!!x.bumpMap,tt=!!x.normalMap,Rt=!!x.displacementMap,I=!!x.emissiveMap,_t=!!x.metalnessMap,qe=!!x.roughnessMap,ut=x.anisotropy>0,he=x.clearcoat>0,xt=x.dispersion>0,A=x.iridescence>0,_=x.sheen>0,z=x.transmission>0,J=ut&&!!x.anisotropyMap,se=he&&!!x.clearcoatMap,oe=he&&!!x.clearcoatNormalMap,fe=he&&!!x.clearcoatRoughnessMap,Y=A&&!!x.iridescenceMap,ee=A&&!!x.iridescenceThicknessMap,Se=_&&!!x.sheenColorMap,Ee=_&&!!x.sheenRoughnessMap,ue=!!x.specularMap,le=!!x.specularColorMap,Oe=!!x.specularIntensityMap,Ge=z&&!!x.transmissionMap,nt=z&&!!x.thicknessMap,D=!!x.gradientMap,ce=!!x.alphaMap,Z=x.alphaTest>0,Me=!!x.alphaHash,de=!!x.extensions;let re=wn;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(re=i.toneMapping);const Re={shaderID:B,shaderType:x.type,shaderName:x.name,vertexShader:ge,fragmentShader:be,defines:x.defines,customVertexShaderID:k,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:c,batching:Ae,batchingColor:Ae&&N._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Je,matcap:ze,envMap:Qe,envMapMode:Qe&&K.mapping,envMapCubeUVHeight:Q,aoMap:Ne,lightMap:Fe,bumpMap:mt,normalMap:tt,displacementMap:Rt,emissiveMap:I,normalMapObjectSpace:tt&&x.normalMapType===Od,normalMapTangentSpace:tt&&x.normalMapType===ol,packedNormalMap:tt&&x.normalMapType===ol&&n_(x.normalMap.format),metalnessMap:_t,roughnessMap:qe,anisotropy:ut,anisotropyMap:J,clearcoat:he,clearcoatMap:se,clearcoatNormalMap:oe,clearcoatRoughnessMap:fe,dispersion:xt,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:ee,sheen:_,sheenColorMap:Se,sheenRoughnessMap:Ee,specularMap:ue,specularColorMap:le,specularIntensityMap:Oe,transmission:z,transmissionMap:Ge,thicknessMap:nt,gradientMap:D,opaque:x.transparent===!1&&x.blending===Zi&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:Z,alphaHash:Me,combine:x.combine,mapUv:Je&&g(x.map.channel),aoMapUv:Ne&&g(x.aoMap.channel),lightMapUv:Fe&&g(x.lightMap.channel),bumpMapUv:mt&&g(x.bumpMap.channel),normalMapUv:tt&&g(x.normalMap.channel),displacementMapUv:Rt&&g(x.displacementMap.channel),emissiveMapUv:I&&g(x.emissiveMap.channel),metalnessMapUv:_t&&g(x.metalnessMap.channel),roughnessMapUv:qe&&g(x.roughnessMap.channel),anisotropyMapUv:J&&g(x.anisotropyMap.channel),clearcoatMapUv:se&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(x.sheenRoughnessMap.channel),specularMapUv:ue&&g(x.specularMap.channel),specularColorMapUv:le&&g(x.specularColorMap.channel),specularIntensityMapUv:Oe&&g(x.specularIntensityMap.channel),transmissionMapUv:Ge&&g(x.transmissionMap.channel),thicknessMapUv:nt&&g(x.thicknessMap.channel),alphaMapUv:ce&&g(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(tt||ut),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(Je||ce),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&tt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ve,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:Je&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:I&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Fn,flipSided:x.side===qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:de&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Re.vertexUv1s=u.has(1),Re.vertexUv2s=u.has(2),Re.vertexUv3s=u.has(3),u.clear(),Re}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(E,x),v(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function y(x){const E=h[x.type];let P;if(E){const w=bn[E];P=Os.clone(w.uniforms)}else P=x.uniforms;return P}function b(x,E){let P=f.get(E);return P!==void 0?++P.usedTimes:(P=new Jg(i,E,x,r),l.push(P),f.set(E,P)),P}function C(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),f.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:y,acquireProgram:b,releaseProgram:C,releaseShaderCache:T,programs:l,dispose:R}}function r_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,u){i.get(a)[o]=u}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function s_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function rc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(c){let h=0;return c.isInstancedMesh&&(h+=2),c.isSkinnedMesh&&(h+=1),h}function o(c,h,g,S,m,p){let v=i[e];return v===void 0?(v={id:c.id,object:c,geometry:h,material:g,materialVariant:a(c),groupOrder:S,renderOrder:c.renderOrder,z:m,group:p},i[e]=v):(v.id=c.id,v.object=c,v.geometry=h,v.material=g,v.materialVariant=a(c),v.groupOrder=S,v.renderOrder=c.renderOrder,v.z=m,v.group=p),e++,v}function u(c,h,g,S,m,p){const v=o(c,h,g,S,m,p);g.transmission>0?n.push(v):g.transparent===!0?r.push(v):t.push(v)}function l(c,h,g,S,m,p){const v=o(c,h,g,S,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function f(c,h){t.length>1&&t.sort(c||s_),n.length>1&&n.sort(h||rc),r.length>1&&r.sort(h||rc)}function d(){for(let c=e,h=i.length;c<h;c++){const g=i[c];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:u,unshift:l,finish:d,sort:f}}function a_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new sc,i.set(n,[a])):r>=s.length?(a=new sc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function o_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ke};break;case"SpotLight":t={position:new U,direction:new U,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function l_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let c_=0;function u_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function d_(i){const e=new o_,t=l_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const r=new U,s=new ht,a=new ht;function o(l){let f=0,d=0,c=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let h=0,g=0,S=0,m=0,p=0,v=0,y=0,b=0,C=0,T=0,R=0;l.sort(u_);for(let E=0,P=l.length;E<P;E++){const w=l[E],N=w.color,W=w.intensity,X=w.distance;let L=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===yi?L=w.shadow.map.texture:L=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)f+=N.r*W,d+=N.g*W,c+=N.b*W;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],W);R++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const O=w.shadow,K=t.get(w);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,n.directionalShadow[h]=K,n.directionalShadowMap[h]=L,n.directionalShadowMatrix[h]=w.shadow.matrix,v++}n.directional[h]=V,h++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(N).multiplyScalar(W),V.distance=X,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[S]=V;const O=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,O.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[S]=O.matrix,w.castShadow){const K=t.get(w);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,n.spotShadow[S]=K,n.spotShadowMap[S]=L,b++}S++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(N).multiplyScalar(W),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=V,m++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const O=w.shadow,K=t.get(w);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,K.shadowCameraNear=O.camera.near,K.shadowCameraFar=O.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=L,n.pointShadowMatrix[g]=w.shadow.matrix,y++}n.point[g]=V,g++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(W),V.groundColor.copy(w.groundColor).multiplyScalar(W),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=c;const x=n.hash;(x.directionalLength!==h||x.pointLength!==g||x.spotLength!==S||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==b||x.numSpotMaps!==C||x.numLightProbes!==R)&&(n.directional.length=h,n.spot.length=S,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,x.directionalLength=h,x.pointLength=g,x.spotLength=S,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=b,x.numSpotMaps=C,x.numLightProbes=R,n.version=c_++)}function u(l,f){let d=0,c=0,h=0,g=0,S=0;const m=f.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(y.isSpotLight){const b=n.spot[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=n.point[c];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),c++}else if(y.isHemisphereLight){const b=n.hemi[S];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),S++}}}return{setup:o,setupView:u,state:n}}function ac(i){const e=new d_(i),t=[],n=[],r=[];function s(c){d.camera=c,t.length=0,n.length=0,r.length=0}function a(c){t.push(c)}function o(c){n.push(c)}function u(c){r.push(c)}function l(){e.setup(t)}function f(c){e.setupView(t,c)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:u}}function f_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ac(i),e.set(r,[o])):s>=a.length?(o=new ac(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const h_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
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
}`,m_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],g_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],oc=new ht,_r=new U,wa=new U;function __(i,e,t){let n=new iu;const r=new Ie,s=new Ie,a=new Tt,o=new Rf,u=new Pf,l={},f=t.maxTextureSize,d={[si]:qt,[qt]:si,[Fn]:Fn},c=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:h_,fragmentShader:p_}),h=c.clone();h.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new dn(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let p=this.type;this.render=function(T,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===pd&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_s);const E=i.getRenderTarget(),P=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),N=i.state;N.setBlending(An),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const W=p!==this.type;W&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(L=>L.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,L=T.length;X<L;X++){const V=T[X],O=V.shadow;if(O===void 0){Ue("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const K=O.getFrameExtents();r.multiply(K),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/K.x),r.x=s.x*K.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/K.y),r.y=s.y*K.y,O.mapSize.y=s.y));const Q=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Q,O.map===null||W===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Sr){if(V.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Yt(r.x,r.y,{format:yi,type:nn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new tr(r.x,r.y,mn),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=kn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=It,O.map.depthTexture.magFilter=It}else V.isPointLight?(O.map=new pu(r.x),O.map.depthTexture=new Ef(r.x,Cn)):(O.map=new Yt(r.x,r.y),O.map.depthTexture=new tr(r.x,r.y,Cn)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=kn,this.type===_s?(O.map.depthTexture.compareFunction=Q?Go:ko,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=It,O.map.depthTexture.magFilter=It);O.camera.updateProjectionMatrix()}const B=O.map.isWebGLCubeRenderTarget?6:1;for(let q=0;q<B;q++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,q),i.clear();else{q===0&&(i.setRenderTarget(O.map),i.clear());const ie=O.getViewport(q);a.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),N.viewport(a)}if(V.isPointLight){const ie=O.camera,ve=O.matrix,ge=V.distance||ie.far;ge!==ie.far&&(ie.far=ge,ie.updateProjectionMatrix()),_r.setFromMatrixPosition(V.matrixWorld),ie.position.copy(_r),wa.copy(ie.position),wa.add(m_[q]),ie.up.copy(g_[q]),ie.lookAt(wa),ie.updateMatrixWorld(),ve.makeTranslation(-_r.x,-_r.y,-_r.z),oc.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),O._frustum.setFromProjectionMatrix(oc,ie.coordinateSystem,ie.reversedDepth)}else O.updateMatrices(V);n=O.getFrustum(),b(R,x,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===Sr&&v(O,x),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,P,w)};function v(T,R){const x=e.update(S);c.defines.VSM_SAMPLES!==T.blurSamples&&(c.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,c.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Yt(r.x,r.y,{format:yi,type:nn})),c.uniforms.shadow_pass.value=T.map.depthTexture,c.uniforms.resolution.value=T.mapSize,c.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,x,c,S,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,x,h,S,null)}function y(T,R,x,E){let P=null;const w=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)P=w;else if(P=x.isPointLight===!0?u:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=P.uuid,W=R.uuid;let X=l[N];X===void 0&&(X={},l[N]=X);let L=X[W];L===void 0&&(L=P.clone(),X[W]=L,R.addEventListener("dispose",C)),P=L}if(P.visible=R.visible,P.wireframe=R.wireframe,E===Sr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const N=i.properties.get(P);N.light=x}return P}function b(T,R,x,E,P){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Sr)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const W=e.update(T),X=T.material;if(Array.isArray(X)){const L=W.groups;for(let V=0,O=L.length;V<O;V++){const K=L[V],Q=X[K.materialIndex];if(Q&&Q.visible){const B=y(T,Q,E,P);T.onBeforeShadow(i,T,R,x,W,B,K),i.renderBufferDirect(x,null,W,B,T,K),T.onAfterShadow(i,T,R,x,W,B,K)}}}else if(X.visible){const L=y(T,X,E,P);T.onBeforeShadow(i,T,R,x,W,L,null),i.renderBufferDirect(x,null,W,L,T,null),T.onAfterShadow(i,T,R,x,W,L,null)}}const N=T.children;for(let W=0,X=N.length;W<X;W++)b(N[W],R,x,E,P)}function C(T){T.target.removeEventListener("dispose",C);for(const x in l){const E=l[x],P=T.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function x_(i,e){function t(){let D=!1;const ce=new Tt;let Z=null;const Me=new Tt(0,0,0,0);return{setMask:function(de){Z!==de&&!D&&(i.colorMask(de,de,de,de),Z=de)},setLocked:function(de){D=de},setClear:function(de,re,Re,Ve,Mt){Mt===!0&&(de*=Ve,re*=Ve,Re*=Ve),ce.set(de,re,Re,Ve),Me.equals(ce)===!1&&(i.clearColor(de,re,Re,Ve),Me.copy(ce))},reset:function(){D=!1,Z=null,Me.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,Z=null,Me=null,de=null;return{setReversed:function(re){if(ce!==re){const Re=e.get("EXT_clip_control");re?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=re;const Ve=de;de=null,this.setClear(Ve)}},getReversed:function(){return ce},setTest:function(re){re?te(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(re){Z!==re&&!D&&(i.depthMask(re),Z=re)},setFunc:function(re){if(ce&&(re=qd[re]),Me!==re){switch(re){case Na:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=re}},setLocked:function(re){D=re},setClear:function(re){de!==re&&(de=re,ce&&(re=1-re),i.clearDepth(re))},reset:function(){D=!1,Z=null,Me=null,de=null,ce=!1}}}function r(){let D=!1,ce=null,Z=null,Me=null,de=null,re=null,Re=null,Ve=null,Mt=null;return{setTest:function(rt){D||(rt?te(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(rt){ce!==rt&&!D&&(i.stencilMask(rt),ce=rt)},setFunc:function(rt,Rn,xn){(Z!==rt||Me!==Rn||de!==xn)&&(i.stencilFunc(rt,Rn,xn),Z=rt,Me=Rn,de=xn)},setOp:function(rt,Rn,xn){(re!==rt||Re!==Rn||Ve!==xn)&&(i.stencilOp(rt,Rn,xn),re=rt,Re=Rn,Ve=xn)},setLocked:function(rt){D=rt},setClear:function(rt){Mt!==rt&&(i.clearStencil(rt),Mt=rt)},reset:function(){D=!1,ce=null,Z=null,Me=null,de=null,re=null,Re=null,Ve=null,Mt=null}}}const s=new t,a=new n,o=new r,u=new WeakMap,l=new WeakMap;let f={},d={},c={},h=new WeakMap,g=[],S=null,m=!1,p=null,v=null,y=null,b=null,C=null,T=null,R=null,x=new Ke(0,0,0),E=0,P=!1,w=null,N=null,W=null,X=null,L=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),O=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),O=K>=2);let B=null,q={};const ie=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),ge=new Tt().fromArray(ie),be=new Tt().fromArray(ve);function k(D,ce,Z,Me){const de=new Uint8Array(4),re=i.createTexture();i.bindTexture(D,re),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<Z;Re++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ce+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return re}const j={};j[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(Qi),mt(!1),tt(rl),te(i.CULL_FACE),Ne(An);function te(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function _e(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function Ce(D,ce){return c[D]!==ce?(i.bindFramebuffer(D,ce),c[D]=ce,D===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ae(D,ce){let Z=g,Me=!1;if(D){Z=h.get(ce),Z===void 0&&(Z=[],h.set(ce,Z));const de=D.textures;if(Z.length!==de.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Re=de.length;re<Re;re++)Z[re]=i.COLOR_ATTACHMENT0+re;Z.length=de.length,Me=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,Me=!0);Me&&i.drawBuffers(Z)}function Je(D){return S!==D?(i.useProgram(D),S=D,!0):!1}const ze={[xi]:i.FUNC_ADD,[gd]:i.FUNC_SUBTRACT,[_d]:i.FUNC_REVERSE_SUBTRACT};ze[xd]=i.MIN,ze[vd]=i.MAX;const Qe={[Sd]:i.ZERO,[Md]:i.ONE,[bd]:i.SRC_COLOR,[Ia]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Ad]:i.DST_COLOR,[Ed]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[Ua]:i.ONE_MINUS_SRC_ALPHA,[wd]:i.ONE_MINUS_DST_COLOR,[Td]:i.ONE_MINUS_DST_ALPHA,[Rd]:i.CONSTANT_COLOR,[Pd]:i.ONE_MINUS_CONSTANT_COLOR,[Dd]:i.CONSTANT_ALPHA,[Ld]:i.ONE_MINUS_CONSTANT_ALPHA};function Ne(D,ce,Z,Me,de,re,Re,Ve,Mt,rt){if(D===An){m===!0&&(_e(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),D!==md){if(D!==p||rt!==P){if((v!==xi||C!==xi)&&(i.blendEquation(i.FUNC_ADD),v=xi,C=xi),rt)switch(D){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",D);break}else switch(D){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sl:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case al:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",D);break}y=null,b=null,T=null,R=null,x.set(0,0,0),E=0,p=D,P=rt}return}de=de||ce,re=re||Z,Re=Re||Me,(ce!==v||de!==C)&&(i.blendEquationSeparate(ze[ce],ze[de]),v=ce,C=de),(Z!==y||Me!==b||re!==T||Re!==R)&&(i.blendFuncSeparate(Qe[Z],Qe[Me],Qe[re],Qe[Re]),y=Z,b=Me,T=re,R=Re),(Ve.equals(x)===!1||Mt!==E)&&(i.blendColor(Ve.r,Ve.g,Ve.b,Mt),x.copy(Ve),E=Mt),p=D,P=!1}function Fe(D,ce){D.side===Fn?_e(i.CULL_FACE):te(i.CULL_FACE);let Z=D.side===qt;ce&&(Z=!Z),mt(Z),D.blending===Zi&&D.transparent===!1?Ne(An):Ne(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const Me=D.stencilWrite;o.setTest(Me),Me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),I(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(D){w!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),w=D)}function tt(D){D!==fd?(te(i.CULL_FACE),D!==N&&(D===rl?i.cullFace(i.BACK):D===hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),N=D}function Rt(D){D!==W&&(O&&i.lineWidth(D),W=D)}function I(D,ce,Z){D?(te(i.POLYGON_OFFSET_FILL),(X!==ce||L!==Z)&&(X=ce,L=Z,a.getReversed()&&(ce=-ce),i.polygonOffset(ce,Z))):_e(i.POLYGON_OFFSET_FILL)}function _t(D){D?te(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function qe(D){D===void 0&&(D=i.TEXTURE0+V-1),B!==D&&(i.activeTexture(D),B=D)}function ut(D,ce,Z){Z===void 0&&(B===null?Z=i.TEXTURE0+V-1:Z=B);let Me=q[Z];Me===void 0&&(Me={type:void 0,texture:void 0},q[Z]=Me),(Me.type!==D||Me.texture!==ce)&&(B!==Z&&(i.activeTexture(Z),B=Z),i.bindTexture(D,ce||j[D]),Me.type=D,Me.texture=ce)}function he(){const D=q[B];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function xt(){try{i.compressedTexImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function _(){try{i.texSubImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function z(){try{i.texSubImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function se(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function oe(){try{i.texStorage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function fe(){try{i.texStorage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function Y(){try{i.texImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function ee(){try{i.texImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function Se(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function Ee(D,ce){d[D]!==ce&&(i.pixelStorei(D,ce),d[D]=ce)}function ue(D){ge.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ge.copy(D))}function le(D){be.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),be.copy(D))}function Oe(D,ce){let Z=l.get(ce);Z===void 0&&(Z=new WeakMap,l.set(ce,Z));let Me=Z.get(D);Me===void 0&&(Me=i.getUniformBlockIndex(ce,D.name),Z.set(D,Me))}function Ge(D,ce){const Me=l.get(ce).get(D);u.get(ce)!==Me&&(i.uniformBlockBinding(ce,Me,D.__bindingPointIndex),u.set(ce,Me))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},d={},B=null,q={},c={},h=new WeakMap,g=[],S=null,m=!1,p=null,v=null,y=null,b=null,C=null,T=null,R=null,x=new Ke(0,0,0),E=0,P=!1,w=null,N=null,W=null,X=null,L=null,ge.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:_e,bindFramebuffer:Ce,drawBuffers:Ae,useProgram:Je,setBlending:Ne,setMaterial:Fe,setFlipSided:mt,setCullFace:tt,setLineWidth:Rt,setPolygonOffset:I,setScissorTest:_t,activeTexture:qe,bindTexture:ut,unbindTexture:he,compressedTexImage2D:xt,compressedTexImage3D:A,texImage2D:Y,texImage3D:ee,pixelStorei:Ee,getParameter:Se,updateUBOMapping:Oe,uniformBlockBinding:Ge,texStorage2D:oe,texStorage3D:fe,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:J,compressedTexSubImage3D:se,scissor:ue,viewport:le,reset:nt}}function v_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,f=new WeakMap,d=new Set;let c;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,_){return g?new OffscreenCanvas(A,_):Ls("canvas")}function m(A,_,z){let J=1;const se=xt(A);if((se.width>z||se.height>z)&&(J=z/Math.max(se.width,se.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const oe=Math.floor(J*se.width),fe=Math.floor(J*se.height);c===void 0&&(c=S(oe,fe));const Y=_?S(oe,fe):c;return Y.width=oe,Y.height=fe,Y.getContext("2d").drawImage(A,0,0,oe,fe),Ue("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+oe+"x"+fe+")."),Y}else return"data"in A&&Ue("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function p(A){return A.generateMipmaps}function v(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,_,z,J,se,oe=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe;J&&(fe=e.get("EXT_texture_norm16"),fe||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8),z===i.UNSIGNED_SHORT&&fe&&(Y=fe.R16_EXT),z===i.SHORT&&fe&&(Y=fe.R16_SNORM_EXT)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),_===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8),z===i.UNSIGNED_SHORT&&fe&&(Y=fe.RG16_EXT),z===i.SHORT&&fe&&(Y=fe.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_SHORT&&fe&&(Y=fe.RGB16_EXT),z===i.SHORT&&fe&&(Y=fe.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){const ee=oe?Ps:Ye.getTransfer(se);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=ee===it?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&fe&&(Y=fe.RGBA16_EXT),z===i.SHORT&&fe&&(Y=fe.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function C(A,_){let z;return A?_===null||_===Cn||_===Er?z=i.DEPTH24_STENCIL8:_===mn?z=i.DEPTH32F_STENCIL8:_===yr&&(z=i.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Cn||_===Er?z=i.DEPTH_COMPONENT24:_===mn?z=i.DEPTH_COMPONENT32F:_===yr&&(z=i.DEPTH_COMPONENT16),z}function T(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==It&&A.minFilter!==zt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),E(_),_.isVideoTexture&&f.delete(_),_.isHTMLTexture&&d.delete(_)}function x(A){const _=A.target;_.removeEventListener("dispose",x),w(_)}function E(A){const _=n.get(A);if(_.__webglInit===void 0)return;const z=A.source,J=h.get(z);if(J){const se=J[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&P(A),Object.keys(J).length===0&&h.delete(z)}n.remove(A)}function P(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const z=A.source,J=h.get(z);delete J[_.__cacheKey],a.memory.textures--}function w(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let se=0;se<_.__webglFramebuffer[J].length;se++)i.deleteFramebuffer(_.__webglFramebuffer[J][se]);else i.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)i.deleteFramebuffer(_.__webglFramebuffer[J]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=A.textures;for(let J=0,se=z.length;J<se;J++){const oe=n.get(z[J]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(A)}let N=0;function W(){N=0}function X(){return N}function L(A){N=A}function V(){const A=N;return A>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),N+=1,A}function O(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function K(A,_){const z=n.get(A);if(A.isVideoTexture&&ut(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const J=A.image;if(J===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(z,A,_);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function Q(A,_){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){_e(z,A,_);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function B(A,_){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){_e(z,A,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function q(A,_){const z=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){Ce(z,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}const ie={[Ga]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},ve={[It]:i.NEAREST,[Nd]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[js]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},ge={[Bd]:i.NEVER,[Hd]:i.ALWAYS,[zd]:i.LESS,[ko]:i.LEQUAL,[Vd]:i.EQUAL,[Go]:i.GEQUAL,[kd]:i.GREATER,[Gd]:i.NOTEQUAL};function be(A,_){if(_.type===mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zt||_.magFilter===js||_.magFilter===Nr||_.magFilter===Si||_.minFilter===zt||_.minFilter===js||_.minFilter===Nr||_.minFilter===Si)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ie[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ie[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ie[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ve[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===It||_.minFilter!==Nr&&_.minFilter!==Si||_.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function k(A,_){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const J=_.source;let se=h.get(J);se===void 0&&(se={},h.set(J,se));const oe=O(_);if(oe!==A.__cacheKey){se[oe]===void 0&&(se[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),se[oe].usedTimes++;const fe=se[A.__cacheKey];fe!==void 0&&(se[A.__cacheKey].usedTimes--,fe.usedTimes===0&&P(_)),A.__cacheKey=oe,A.__webglTexture=se[oe].texture}return z}function j(A,_,z){return Math.floor(Math.floor(A/z)/_)}function te(A,_,z,J){const oe=A.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,J,_.data);else{oe.sort((Ee,ue)=>Ee.start-ue.start);let fe=0;for(let Ee=1;Ee<oe.length;Ee++){const ue=oe[fe],le=oe[Ee],Oe=ue.start+ue.count,Ge=j(le.start,_.width,4),nt=j(ue.start,_.width,4);le.start<=Oe+1&&Ge===nt&&j(le.start+le.count-1,_.width,4)===Ge?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++fe,oe[fe]=le)}oe.length=fe+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ee=0,ue=oe.length;Ee<ue;Ee++){const le=oe[Ee],Oe=Math.floor(le.start/4),Ge=Math.ceil(le.count/4),nt=Oe%_.width,D=Math.floor(Oe/_.width),ce=Ge,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,nt,D,ce,Z,z,J,_.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function _e(A,_,z){let J=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=i.TEXTURE_3D);const se=k(A,_),oe=_.source;t.bindTexture(J,A.__webglTexture,i.TEXTURE0+z);const fe=n.get(oe);if(oe.version!==fe.__version||se===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Z=Ye.getPrimaries(Ye.workingColorSpace),Me=_.colorSpace===ti?null:Ye.getPrimaries(_.colorSpace),de=_.colorSpace===ti||Z===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ee=m(_.image,!1,r.maxTextureSize);ee=he(_,ee);const Se=s.convert(_.format,_.colorSpace),Ee=s.convert(_.type);let ue=b(_.internalFormat,Se,Ee,_.normalized,_.colorSpace,_.isVideoTexture);be(J,_);let le;const Oe=_.mipmaps,Ge=_.isVideoTexture!==!0,nt=fe.__version===void 0||se===!0,D=oe.dataReady,ce=T(_,ee);if(_.isDepthTexture)ue=C(_.format===Mi,_.type),nt&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,ue,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ue,ee.width,ee.height,0,Se,Ee,null));else if(_.isDataTexture)if(Oe.length>0){Ge&&nt&&t.texStorage2D(i.TEXTURE_2D,ce,ue,Oe[0].width,Oe[0].height);for(let Z=0,Me=Oe.length;Z<Me;Z++)le=Oe[Z],Ge?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,le.width,le.height,Se,Ee,le.data):t.texImage2D(i.TEXTURE_2D,Z,ue,le.width,le.height,0,Se,Ee,le.data);_.generateMipmaps=!1}else Ge?(nt&&t.texStorage2D(i.TEXTURE_2D,ce,ue,ee.width,ee.height),D&&te(_,ee,Se,Ee)):t.texImage2D(i.TEXTURE_2D,0,ue,ee.width,ee.height,0,Se,Ee,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ue,Oe[0].width,Oe[0].height,ee.depth);for(let Z=0,Me=Oe.length;Z<Me;Z++)if(le=Oe[Z],_.format!==gn)if(Se!==null)if(Ge){if(D)if(_.layerUpdates.size>0){const de=Bl(le.width,le.height,_.format,_.type);for(const re of _.layerUpdates){const Re=le.data.subarray(re*de/le.data.BYTES_PER_ELEMENT,(re+1)*de/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,re,le.width,le.height,1,Se,Re)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,ee.depth,Se,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ue,le.width,le.height,ee.depth,0,le.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,ee.depth,Se,Ee,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,ue,le.width,le.height,ee.depth,0,Se,Ee,le.data)}else{Ge&&nt&&t.texStorage2D(i.TEXTURE_2D,ce,ue,Oe[0].width,Oe[0].height);for(let Z=0,Me=Oe.length;Z<Me;Z++)le=Oe[Z],_.format!==gn?Se!==null?Ge?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,le.width,le.height,Se,le.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,ue,le.width,le.height,0,le.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,le.width,le.height,Se,Ee,le.data):t.texImage2D(i.TEXTURE_2D,Z,ue,le.width,le.height,0,Se,Ee,le.data)}else if(_.isDataArrayTexture)if(Ge){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ue,ee.width,ee.height,ee.depth),D)if(_.layerUpdates.size>0){const Z=Bl(ee.width,ee.height,_.format,_.type);for(const Me of _.layerUpdates){const de=ee.data.subarray(Me*Z/ee.data.BYTES_PER_ELEMENT,(Me+1)*Z/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Me,ee.width,ee.height,1,Se,Ee,de)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Se,Ee,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,ee.width,ee.height,ee.depth,0,Se,Ee,ee.data);else if(_.isData3DTexture)Ge?(nt&&t.texStorage3D(i.TEXTURE_3D,ce,ue,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Se,Ee,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ue,ee.width,ee.height,ee.depth,0,Se,Ee,ee.data);else if(_.isFramebufferTexture){if(nt)if(Ge)t.texStorage2D(i.TEXTURE_2D,ce,ue,ee.width,ee.height);else{let Z=ee.width,Me=ee.height;for(let de=0;de<ce;de++)t.texImage2D(i.TEXTURE_2D,de,ue,Z,Me,0,Se,Ee,null),Z>>=1,Me>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),ee.parentNode!==Z){Z.appendChild(ee),d.add(_),Z.onpaint=Ve=>{const Mt=Ve.changedElements;for(const rt of d)Mt.includes(rt.image)&&(rt.needsUpdate=!0)},Z.requestPaint();return}const Me=0,de=i.RGBA,re=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Me,de,re,Re,ee),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ge&&nt){const Z=xt(Oe[0]);t.texStorage2D(i.TEXTURE_2D,ce,ue,Z.width,Z.height)}for(let Z=0,Me=Oe.length;Z<Me;Z++)le=Oe[Z],Ge?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Se,Ee,le):t.texImage2D(i.TEXTURE_2D,Z,ue,Se,Ee,le);_.generateMipmaps=!1}else if(Ge){if(nt){const Z=xt(ee);t.texStorage2D(i.TEXTURE_2D,ce,ue,Z.width,Z.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Ee,ee)}else t.texImage2D(i.TEXTURE_2D,0,ue,Se,Ee,ee);p(_)&&v(J),fe.__version=oe.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ce(A,_,z){if(_.image.length!==6)return;const J=k(A,_),se=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const oe=n.get(se);if(se.version!==oe.__version||J===!0){t.activeTexture(i.TEXTURE0+z);const fe=Ye.getPrimaries(Ye.workingColorSpace),Y=_.colorSpace===ti?null:Ye.getPrimaries(_.colorSpace),ee=_.colorSpace===ti||fe===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const Se=_.isCompressedTexture||_.image[0].isCompressedTexture,Ee=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let re=0;re<6;re++)!Se&&!Ee?ue[re]=m(_.image[re],!0,r.maxCubemapSize):ue[re]=Ee?_.image[re].image:_.image[re],ue[re]=he(_,ue[re]);const le=ue[0],Oe=s.convert(_.format,_.colorSpace),Ge=s.convert(_.type),nt=b(_.internalFormat,Oe,Ge,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,ce=oe.__version===void 0||J===!0,Z=se.dataReady;let Me=T(_,le);be(i.TEXTURE_CUBE_MAP,_);let de;if(Se){D&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,nt,le.width,le.height);for(let re=0;re<6;re++){de=ue[re].mipmaps;for(let Re=0;Re<de.length;Re++){const Ve=de[Re];_.format!==gn?Oe!==null?D?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,Ve.width,Ve.height,Oe,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,nt,Ve.width,Ve.height,0,Ve.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,Ve.width,Ve.height,Oe,Ge,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,nt,Ve.width,Ve.height,0,Oe,Ge,Ve.data)}}}else{if(de=_.mipmaps,D&&ce){de.length>0&&Me++;const re=xt(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,nt,re.width,re.height)}for(let re=0;re<6;re++)if(Ee){D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ue[re].width,ue[re].height,Oe,Ge,ue[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,nt,ue[re].width,ue[re].height,0,Oe,Ge,ue[re].data);for(let Re=0;Re<de.length;Re++){const Mt=de[Re].image[re].image;D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,Mt.width,Mt.height,Oe,Ge,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,nt,Mt.width,Mt.height,0,Oe,Ge,Mt.data)}}else{D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Oe,Ge,ue[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,nt,Oe,Ge,ue[re]);for(let Re=0;Re<de.length;Re++){const Ve=de[Re];D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,Oe,Ge,Ve.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,nt,Oe,Ge,Ve.image[re])}}}p(_)&&v(i.TEXTURE_CUBE_MAP),oe.__version=se.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ae(A,_,z,J,se,oe){const fe=s.convert(z.format,z.colorSpace),Y=s.convert(z.type),ee=b(z.internalFormat,fe,Y,z.normalized,z.colorSpace),Se=n.get(_),Ee=n.get(z);if(Ee.__renderTarget=_,!Se.__hasExternalTextures){const ue=Math.max(1,_.width>>oe),le=Math.max(1,_.height>>oe);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,oe,ee,ue,le,_.depth,0,fe,Y,null):t.texImage2D(se,oe,ee,ue,le,0,fe,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),qe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,se,Ee.__webglTexture,0,_t(_)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,se,Ee.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(A,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const J=_.depthTexture,se=J&&J.isDepthTexture?J.type:null,oe=C(_.stencilBuffer,se),fe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;qe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(_),oe,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(_),oe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,oe,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,A)}else{const J=_.textures;for(let se=0;se<J.length;se++){const oe=J[se],fe=s.convert(oe.format,oe.colorSpace),Y=s.convert(oe.type),ee=b(oe.internalFormat,fe,Y,oe.normalized,oe.colorSpace);qe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(_),ee,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(_),ee,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ee,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(A,_,z){const J=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(_.depthTexture);if(se.__renderTarget=_,(!se.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J){if(se.__webglInit===void 0&&(se.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),se.__webglTexture===void 0){se.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),be(i.TEXTURE_CUBE_MAP,_.depthTexture);const Se=s.convert(_.depthTexture.format),Ee=s.convert(_.depthTexture.type);let ue;_.depthTexture.format===kn?ue=i.DEPTH_COMPONENT24:_.depthTexture.format===Mi&&(ue=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ue,_.width,_.height,0,Se,Ee,null)}}else K(_.depthTexture,0);const oe=se.__webglTexture,fe=_t(_),Y=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ee=_.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===kn)qe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Y,oe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Y,oe,0);else if(_.depthTexture.format===Mi)qe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Y,oe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Y,oe,0);else throw new Error("Unknown depthTexture format")}function Qe(A){const _=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){const se=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",se)};J.addEventListener("dispose",se),_.__depthDisposeCallback=se}_.__boundDepthTexture=J}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let J=0;J<6;J++)ze(_.__webglFramebuffer[J],A,J);else{const J=A.texture.mipmaps;J&&J.length>0?ze(_.__webglFramebuffer[0],A,0):ze(_.__webglFramebuffer,A,0)}else if(z){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=i.createRenderbuffer(),Je(_.__webglDepthbuffer[J],A,!1);else{const se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,oe)}}else{const J=A.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Je(_.__webglDepthbuffer,A,!1);else{const se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(A,_,z){const J=n.get(A);_!==void 0&&Ae(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Qe(A)}function Fe(A){const _=A.texture,z=n.get(A),J=n.get(_);A.addEventListener("dispose",x);const se=A.textures,oe=A.isWebGLCubeRenderTarget===!0,fe=se.length>1;if(fe||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=_.version,a.memory.textures++),oe){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let ee=0;ee<_.mipmaps.length;ee++)z.__webglFramebuffer[Y][ee]=i.createFramebuffer()}else z.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)z.__webglFramebuffer[Y]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(fe)for(let Y=0,ee=se.length;Y<ee;Y++){const Se=n.get(se[Y]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&qe(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<se.length;Y++){const ee=se[Y];z.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);const Se=s.convert(ee.format,ee.colorSpace),Ee=s.convert(ee.type),ue=b(ee.internalFormat,Se,Ee,ee.normalized,ee.colorSpace,A.isXRRenderTarget===!0),le=_t(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ue,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),be(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)Ae(z.__webglFramebuffer[Y][ee],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ee);else Ae(z.__webglFramebuffer[Y],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let Y=0,ee=se.length;Y<ee;Y++){const Se=se[Y],Ee=n.get(Se);let ue=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ee.__webglTexture),be(ue,Se),Ae(z.__webglFramebuffer,A,Se,i.COLOR_ATTACHMENT0+Y,ue,0),p(Se)&&v(ue)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,J.__webglTexture),be(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)Ae(z.__webglFramebuffer[ee],A,_,i.COLOR_ATTACHMENT0,Y,ee);else Ae(z.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,Y,0);p(_)&&v(Y),t.unbindTexture()}A.depthBuffer&&Qe(A)}function mt(A){const _=A.textures;for(let z=0,J=_.length;z<J;z++){const se=_[z];if(p(se)){const oe=y(A),fe=n.get(se).__webglTexture;t.bindTexture(oe,fe),v(oe),t.unbindTexture()}}}const tt=[],Rt=[];function I(A){if(A.samples>0){if(qe(A)===!1){const _=A.textures,z=A.width,J=A.height;let se=i.COLOR_BUFFER_BIT;const oe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(A),Y=_.length>1;if(Y)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ee=A.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Se]);const Ee=n.get(_[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,se,i.NEAREST),u===!0&&(tt.length=0,Rt.length=0,tt.push(i.COLOR_ATTACHMENT0+Se),A.depthBuffer&&A.resolveDepthBuffer===!1&&(tt.push(oe),Rt.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Se]);const Ee=n.get(_[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&u){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function _t(A){return Math.min(r.maxSamples,A.samples)}function qe(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ut(A){const _=a.render.frame;f.get(A)!==_&&(f.set(A,_),A.update())}function he(A,_){const z=A.colorSpace,J=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Rs&&z!==ti&&(Ye.getTransfer(z)===it?(J!==gn||se!==ln)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",z)),_}function xt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.getTextureUnits=X,this.setTextureUnits=L,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=Ne,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function S_(i,e){function t(n,r=ti){let s;const a=Ye.getTransfer(r);if(n===ln)return i.UNSIGNED_BYTE;if(n===No)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hc)return i.BYTE;if(n===Wc)return i.SHORT;if(n===yr)return i.UNSIGNED_SHORT;if(n===Uo)return i.INT;if(n===Cn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===qc)return i.ALPHA;if(n===Yc)return i.RGB;if(n===gn)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===Bo)return i.RED_INTEGER;if(n===yi)return i.RG;if(n===zo)return i.RG_INTEGER;if(n===Vo)return i.RGBA_INTEGER;if(n===xs||n===vs||n===Ss||n===Ms)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===$a||n===Xa||n===qa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Wa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===ja||n===Ka||n===Za||n===Ja||n===ws||n===Qa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ya||n===ja)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ka)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Za)return s.COMPRESSED_R11_EAC;if(n===Ja)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ws)return s.COMPRESSED_RG11_EAC;if(n===Qa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===eo||n===to||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===lo||n===co||n===uo||n===fo||n===ho||n===po)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===eo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ro)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ao)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ho)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===go||n===_o)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===mo)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===go)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xo||n===vo||n===Cs||n===So)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b_=`
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

}`;class y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new su(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vt({vertexShader:M_,fragmentShader:b_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E_ extends Ti{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",u=1,l=null,f=null,d=null,c=null,h=null,g=null;const S=typeof XRWebGLBinding<"u",m=new y_,p={},v=t.getContextAttributes();let y=null,b=null;const C=[],T=[],R=new Ie;let x=null;const E=new on;E.viewport=new Tt;const P=new on;P.viewport=new Tt;const w=[E,P],N=new Lf;let W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=C[k];return j===void 0&&(j=new na,C[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=C[k];return j===void 0&&(j=new na,C[k]=j),j.getGripSpace()},this.getHand=function(k){let j=C[k];return j===void 0&&(j=new na,C[k]=j),j.getHandSpace()};function L(k){const j=T.indexOf(k.inputSource);if(j===-1)return;const te=C[j];te!==void 0&&(te.update(k.inputSource,k.frame,l||a),te.dispatchEvent({type:k.type,data:k.inputSource}))}function V(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",O);for(let k=0;k<C.length;k++){const j=T[k];j!==null&&(T[k]=null,C[k].disconnect(j))}W=null,X=null,m.reset();for(const k in p)delete p[k];e.setRenderTarget(y),h=null,c=null,d=null,r=null,b=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return c!==null?c:h},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",V),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,_e=null,Ce=null;v.depth&&(Ce=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=v.stencil?Mi:kn,_e=v.stencil?Er:Cn);const Ae={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};d=this.getBinding(),c=d.createProjectionLayer(Ae),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),b=new Yt(c.textureWidth,c.textureHeight,{format:gn,type:ln,depthTexture:new tr(c.textureWidth,c.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{const te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Yt(h.framebufferWidth,h.framebufferHeight,{format:gn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(u),l=null,a=await r.requestReferenceSpace(o),be.setContext(r),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(k){for(let j=0;j<k.removed.length;j++){const te=k.removed[j],_e=T.indexOf(te);_e>=0&&(T[_e]=null,C[_e].disconnect(te))}for(let j=0;j<k.added.length;j++){const te=k.added[j];let _e=T.indexOf(te);if(_e===-1){for(let Ae=0;Ae<C.length;Ae++)if(Ae>=T.length){T.push(te),_e=Ae;break}else if(T[Ae]===null){T[Ae]=te,_e=Ae;break}if(_e===-1)break}const Ce=C[_e];Ce&&Ce.connect(te)}}const K=new U,Q=new U;function B(k,j,te){K.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(te.matrixWorld);const _e=K.distanceTo(Q),Ce=j.projectionMatrix.elements,Ae=te.projectionMatrix.elements,Je=Ce[14]/(Ce[10]-1),ze=Ce[14]/(Ce[10]+1),Qe=(Ce[9]+1)/Ce[5],Ne=(Ce[9]-1)/Ce[5],Fe=(Ce[8]-1)/Ce[0],mt=(Ae[8]+1)/Ae[0],tt=Je*Fe,Rt=Je*mt,I=_e/(-Fe+mt),_t=I*-Fe;if(j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(_t),k.translateZ(I),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Ce[10]===-1)k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const qe=Je+I,ut=ze+I,he=tt-_t,xt=Rt+(_e-_t),A=Qe*ze/ut*qe,_=Ne*ze/ut*qe;k.projectionMatrix.makePerspective(he,xt,A,_,qe,ut),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function q(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let j=k.near,te=k.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(te=m.depthFar)),N.near=P.near=E.near=j,N.far=P.far=E.far=te,(W!==N.near||X!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),W=N.near,X=N.far),N.layers.mask=k.layers.mask|6,E.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;const _e=k.parent,Ce=N.cameras;q(N,_e);for(let Ae=0;Ae<Ce.length;Ae++)q(Ce[Ae],_e);Ce.length===2?B(N,E,P):N.projectionMatrix.copy(E.projectionMatrix),ie(k,N,_e)};function ie(k,j,te){te===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(te.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Eo*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(c===null&&h===null))return u},this.setFoveation=function(k){u=k,c!==null&&(c.fixedFoveation=k),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(k){return p[k]};let ve=null;function ge(k,j){if(f=j.getViewerPose(l||a),g=j,f!==null){const te=f.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let _e=!1;te.length!==N.cameras.length&&(N.cameras.length=0,_e=!0);for(let ze=0;ze<te.length;ze++){const Qe=te[ze];let Ne=null;if(h!==null)Ne=h.getViewport(Qe);else{const mt=d.getViewSubImage(c,Qe);Ne=mt.viewport,ze===0&&(e.setRenderTargetTextures(b,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(b))}let Fe=w[ze];Fe===void 0&&(Fe=new on,Fe.layers.enable(ze),Fe.viewport=new Tt,w[ze]=Fe),Fe.matrix.fromArray(Qe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Qe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ze===0&&(N.matrix.copy(Fe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),_e===!0&&N.cameras.push(Fe)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const ze=d.getDepthInformation(te[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,r.renderState)}if(Ce&&Ce.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let ze=0;ze<te.length;ze++){const Qe=te[ze].camera;if(Qe){let Ne=p[Qe];Ne||(Ne=new su,p[Qe]=Ne);const Fe=d.getCameraImage(Qe);Ne.sourceTexture=Fe}}}}for(let te=0;te<C.length;te++){const _e=T[te],Ce=C[te];_e!==null&&Ce!==void 0&&Ce.update(_e,j,l||a)}ve&&ve(k,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const be=new fu;be.setAnimationLoop(ge),this.setAnimationLoop=function(k){ve=k},this.dispose=function(){}}}const T_=new ht,vu=new Be;vu.set(-1,0,0,0,1,0,0,0,1);function A_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,y,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),c(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),S(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?u(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,b=v.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(b)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(vu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function u(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function c(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function w_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(v,y){const b=y.program;n.uniformBlockBinding(v,b)}function l(v,y){let b=r[v.id];b===void 0&&(g(v),b=f(v),r[v.id]=b,v.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(v,C);const T=e.render.frame;s[v.id]!==T&&(c(v),s[v.id]=T)}function f(v){const y=d();v.__bindingPointIndex=y;const b=i.createBuffer(),C=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){const y=r[v.id],b=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,R=b.length;T<R;T++){const x=Array.isArray(b[T])?b[T]:[b[T]];for(let E=0,P=x.length;E<P;E++){const w=x[E];if(h(w,T,E,C)===!0){const N=w.__offset,W=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let L=0;L<W.length;L++){const V=W[L],O=S(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,N+X,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):ArrayBuffer.isView(V)?w.__data.set(new V.constructor(V.buffer,V.byteOffset,w.__data.length)):(V.toArray(w.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,y,b,C){const T=v.value,R=y+"_"+b;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:ArrayBuffer.isView(T)?C[R]=T.slice():C[R]=T.clone(),!0;{const x=C[R];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return C[R]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function g(v){const y=v.uniforms;let b=0;const C=16;for(let R=0,x=y.length;R<x;R++){const E=Array.isArray(y[R])?y[R]:[y[R]];for(let P=0,w=E.length;P<w;P++){const N=E[P],W=Array.isArray(N.value)?N.value:[N.value];for(let X=0,L=W.length;X<L;X++){const V=W[X],O=S(V),K=b%C,Q=K%O.boundary,B=K+Q;b+=Q,B!==0&&C-B<O.storage&&(b+=C-B),N.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=O.storage}}}const T=b%C;return T>0&&(b+=C-T),v.__size=b,v.__cache={},this}function S(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:u,update:l,dispose:p}}const C_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mn=null;function R_(){return Mn===null&&(Mn=new nu(C_,16,16,yi,nn),Mn.name="DFG_LUT",Mn.minFilter=zt,Mn.magFilter=zt,Mn.wrapS=On,Mn.wrapT=On,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}class P_{constructor(e={}){const{canvas:t=$d(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:c=!1,outputBufferType:h=ln}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const S=h,m=new Set([Vo,zo,Bo]),p=new Set([ln,Cn,yr,Er,No,Fo]),v=new Uint32Array(4),y=new Int32Array(4),b=new U;let C=null,T=null;const R=[],x=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let w=!1,N=null;this._outputColorSpace=Qt;let W=0,X=0,L=null,V=-1,O=null;const K=new Tt,Q=new Tt;let B=null;const q=new Ke(0);let ie=0,ve=t.width,ge=t.height,be=1,k=null,j=null;const te=new Tt(0,0,ve,ge),_e=new Tt(0,0,ve,ge);let Ce=!1;const Ae=new iu;let Je=!1,ze=!1;const Qe=new ht,Ne=new U,Fe=new Tt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Rt(){return L===null?be:1}let I=n;function _t(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lo}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),I===null){const F="webgl2";if(I=_t(F,M),I===null)throw _t(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ze("WebGLRenderer: "+M.message),M}let qe,ut,he,xt,A,_,z,J,se,oe,fe,Y,ee,Se,Ee,ue,le,Oe,Ge,nt,D,ce,Z;function Me(){qe=new Rm(I),qe.init(),D=new S_(I,qe),ut=new Mm(I,qe,e,D),he=new x_(I,qe),ut.reversedDepthBuffer&&c&&he.buffers.depth.setReversed(!0),xt=new Lm(I),A=new r_,_=new v_(I,qe,he,A,ut,D,xt),z=new Cm(P),J=new Ff(I),ce=new vm(I,J),se=new Pm(I,J,xt,ce),oe=new Um(I,se,J,ce,xt),Oe=new Im(I,ut,_),Ee=new bm(A),fe=new i_(P,z,qe,ut,ce,Ee),Y=new A_(P,A),ee=new a_,Se=new f_(qe),le=new xm(P,z,he,oe,g,u),ue=new __(P,oe,ut),Z=new w_(I,xt,ut,he),Ge=new Sm(I,qe,xt),nt=new Dm(I,qe,xt),xt.programs=fe.programs,P.capabilities=ut,P.extensions=qe,P.properties=A,P.renderLists=ee,P.shadowMap=ue,P.state=he,P.info=xt}Me(),S!==ln&&(E=new Fm(S,t.width,t.height,r,s));const de=new E_(P,I);this.xr=de,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=qe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=qe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(M){M!==void 0&&(be=M,this.setSize(ve,ge,!1))},this.getSize=function(M){return M.set(ve,ge)},this.setSize=function(M,F,$=!0){if(de.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=M,ge=F,t.width=Math.floor(M*be),t.height=Math.floor(F*be),$===!0&&(t.style.width=M+"px",t.style.height=F+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(ve*be,ge*be).floor()},this.setDrawingBufferSize=function(M,F,$){ve=M,ge=F,be=$,t.width=Math.floor(M*$),t.height=Math.floor(F*$),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(S===ln){Ze("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Ue("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(K)},this.getViewport=function(M){return M.copy(te)},this.setViewport=function(M,F,$,G){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,F,$,G),he.viewport(K.copy(te).multiplyScalar(be).round())},this.getScissor=function(M){return M.copy(_e)},this.setScissor=function(M,F,$,G){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,F,$,G),he.scissor(Q.copy(_e).multiplyScalar(be).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(M){he.setScissorTest(Ce=M)},this.setOpaqueSort=function(M){k=M},this.setTransparentSort=function(M){j=M},this.getClearColor=function(M){return M.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,$=!0){let G=0;if(M){let H=!1;if(L!==null){const xe=L.texture.format;H=m.has(xe)}if(H){const xe=L.texture.type,Te=p.has(xe),me=le.getClearColor(),we=le.getClearAlpha(),Pe=me.r,ke=me.g,We=me.b;Te?(v[0]=Pe,v[1]=ke,v[2]=We,v[3]=we,I.clearBufferuiv(I.COLOR,0,v)):(y[0]=Pe,y[1]=ke,y[2]=We,y[3]=we,I.clearBufferiv(I.COLOR,0,y))}else G|=I.COLOR_BUFFER_BIT}F&&(G|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),N=M},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),le.dispose(),ee.dispose(),Se.dispose(),A.dispose(),z.dispose(),oe.dispose(),ce.dispose(),Z.dispose(),fe.dispose(),de.dispose(),de.removeEventListener("sessionstart",jo),de.removeEventListener("sessionend",Ko),di.stop()};function re(M){M.preventDefault(),Is("WebGLRenderer: Context Lost."),w=!0}function Re(){Is("WebGLRenderer: Context Restored."),w=!1;const M=xt.autoReset,F=ue.enabled,$=ue.autoUpdate,G=ue.needsUpdate,H=ue.type;Me(),xt.autoReset=M,ue.enabled=F,ue.autoUpdate=$,ue.needsUpdate=G,ue.type=H}function Ve(M){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Mt(M){const F=M.target;F.removeEventListener("dispose",Mt),rt(F)}function rt(M){Rn(M),A.remove(M)}function Rn(M){const F=A.get(M).programs;F!==void 0&&(F.forEach(function($){fe.releaseProgram($)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,$,G,H,xe){F===null&&(F=mt);const Te=H.isMesh&&H.matrixWorld.determinant()<0,me=Xu(M,F,$,G,H);he.setMaterial(G,Te);let we=$.index,Pe=1;if(G.wireframe===!0){if(we=se.getWireframeAttribute($),we===void 0)return;Pe=2}const ke=$.drawRange,We=$.attributes.position;let De=ke.start*Pe,st=(ke.start+ke.count)*Pe;xe!==null&&(De=Math.max(De,xe.start*Pe),st=Math.min(st,(xe.start+xe.count)*Pe)),we!==null?(De=Math.max(De,0),st=Math.min(st,we.count)):We!=null&&(De=Math.max(De,0),st=Math.min(st,We.count));const bt=st-De;if(bt<0||bt===1/0)return;ce.setup(H,G,me,$,we);let vt,ot=Ge;if(we!==null&&(vt=J.get(we),ot=nt,ot.setIndex(vt)),H.isMesh)G.wireframe===!0?(he.setLineWidth(G.wireframeLinewidth*Rt()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(H.isLine){let Nt=G.linewidth;Nt===void 0&&(Nt=1),he.setLineWidth(Nt*Rt()),H.isLineSegments?ot.setMode(I.LINES):H.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else H.isPoints?ot.setMode(I.POINTS):H.isSprite&&ot.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))ot.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Nt=H._multiDrawStarts,ye=H._multiDrawCounts,jt=H._multiDrawCount,et=we?J.get(we).bytesPerElement:1,rn=A.get(G).currentProgram.getUniforms();for(let vn=0;vn<jt;vn++)rn.setValue(I,"_gl_DrawID",vn),ot.render(Nt[vn]/et,ye[vn])}else if(H.isInstancedMesh)ot.renderInstances(De,bt,H.count);else if($.isInstancedBufferGeometry){const Nt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ye=Math.min($.instanceCount,Nt);ot.renderInstances(De,bt,ye)}else ot.render(De,bt)};function xn(M,F,$){M.transparent===!0&&M.side===Fn&&M.forceSinglePass===!1?(M.side=qt,M.needsUpdate=!0,Ir(M,F,$),M.side=si,M.needsUpdate=!0,Ir(M,F,$),M.side=Fn):Ir(M,F,$)}this.compile=function(M,F,$=null){$===null&&($=M),T=Se.get($),T.init(F),x.push(T),$.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),M!==$&&M.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const G=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const xe=H.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const me=xe[Te];xn(me,$,H),G.add(me)}else xn(xe,$,H),G.add(xe)}),T=x.pop(),G},this.compileAsync=function(M,F,$=null){const G=this.compile(M,F,$);return new Promise(H=>{function xe(){if(G.forEach(function(Te){A.get(Te).currentProgram.isReady()&&G.delete(Te)}),G.size===0){H(M);return}setTimeout(xe,10)}qe.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let $s=null;function Wu(M){$s&&$s(M)}function jo(){di.stop()}function Ko(){di.start()}const di=new fu;di.setAnimationLoop(Wu),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(M){$s=M,de.setAnimationLoop(M),M===null?di.stop():di.start()},de.addEventListener("sessionstart",jo),de.addEventListener("sessionend",Ko),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;N!==null&&N.renderStart(M,F);const $=de.enabled===!0&&de.isPresenting===!0,G=E!==null&&(L===null||$)&&E.begin(P,L);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(F),F=de.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,F,L),T=Se.get(M,x.length),T.init(F),T.state.textureUnits=_.getTextureUnits(),x.push(T),Qe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ae.setFromProjectionMatrix(Qe,En,F.reversedDepth),ze=this.localClippingEnabled,Je=Ee.init(this.clippingPlanes,ze),C=ee.get(M,R.length),C.init(),R.push(C),de.enabled===!0&&de.isPresenting===!0){const Te=P.xr.getDepthSensingMesh();Te!==null&&Xs(Te,F,-1/0,P.sortObjects)}Xs(M,F,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(k,j),tt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,tt&&le.addToRenderList(C,M),this.info.render.frame++,Je===!0&&Ee.beginShadows();const H=T.state.shadowsArray;if(ue.render(H,M,F),Je===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&E.hasRenderPass())===!1){const Te=C.opaque,me=C.transmissive;if(T.setupLights(),F.isArrayCamera){const we=F.cameras;if(me.length>0)for(let Pe=0,ke=we.length;Pe<ke;Pe++){const We=we[Pe];Jo(Te,me,M,We)}tt&&le.render(M);for(let Pe=0,ke=we.length;Pe<ke;Pe++){const We=we[Pe];Zo(C,M,We,We.viewport)}}else me.length>0&&Jo(Te,me,M,F),tt&&le.render(M),Zo(C,M,F)}L!==null&&X===0&&(_.updateMultisampleRenderTarget(L),_.updateRenderTargetMipmap(L)),G&&E.end(P),M.isScene===!0&&M.onAfterRender(P,M,F),ce.resetDefaultState(),V=-1,O=null,x.pop(),x.length>0?(T=x[x.length-1],_.setTextureUnits(T.state.textureUnits),Je===!0&&Ee.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,N!==null&&N.renderEnd()};function Xs(M,F,$,G){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ae.intersectsSprite(M)){G&&Fe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Qe);const Te=oe.update(M),me=M.material;me.visible&&C.push(M,Te,me,$,Fe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ae.intersectsObject(M))){const Te=oe.update(M),me=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Fe.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Fe.copy(Te.boundingSphere.center)),Fe.applyMatrix4(M.matrixWorld).applyMatrix4(Qe)),Array.isArray(me)){const we=Te.groups;for(let Pe=0,ke=we.length;Pe<ke;Pe++){const We=we[Pe],De=me[We.materialIndex];De&&De.visible&&C.push(M,Te,De,$,Fe.z,We)}}else me.visible&&C.push(M,Te,me,$,Fe.z,null)}}const xe=M.children;for(let Te=0,me=xe.length;Te<me;Te++)Xs(xe[Te],F,$,G)}function Zo(M,F,$,G){const{opaque:H,transmissive:xe,transparent:Te}=M;T.setupLightsView($),Je===!0&&Ee.setGlobalState(P.clippingPlanes,$),G&&he.viewport(K.copy(G)),H.length>0&&Lr(H,F,$),xe.length>0&&Lr(xe,F,$),Te.length>0&&Lr(Te,F,$),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Jo(M,F,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const De=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Yt(1,1,{generateMipmaps:!0,type:De?nn:ln,minFilter:Si,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const xe=T.state.transmissionRenderTarget[G.id],Te=G.viewport||K;xe.setSize(Te.z*P.transmissionResolutionScale,Te.w*P.transmissionResolutionScale);const me=P.getRenderTarget(),we=P.getActiveCubeFace(),Pe=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(q),ie=P.getClearAlpha(),ie<1&&P.setClearColor(16777215,.5),P.clear(),tt&&le.render($);const ke=P.toneMapping;P.toneMapping=wn;const We=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),Je===!0&&Ee.setGlobalState(P.clippingPlanes,G),Lr(M,$,G),_.updateMultisampleRenderTarget(xe),_.updateRenderTargetMipmap(xe),qe.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let st=0,bt=F.length;st<bt;st++){const vt=F[st],{object:ot,geometry:Nt,material:ye,group:jt}=vt;if(ye.side===Fn&&ot.layers.test(G.layers)){const et=ye.side;ye.side=qt,ye.needsUpdate=!0,Qo(ot,$,G,Nt,ye,jt),ye.side=et,ye.needsUpdate=!0,De=!0}}De===!0&&(_.updateMultisampleRenderTarget(xe),_.updateRenderTargetMipmap(xe))}P.setRenderTarget(me,we,Pe),P.setClearColor(q,ie),We!==void 0&&(G.viewport=We),P.toneMapping=ke}function Lr(M,F,$){const G=F.isScene===!0?F.overrideMaterial:null;for(let H=0,xe=M.length;H<xe;H++){const Te=M[H],{object:me,geometry:we,group:Pe}=Te;let ke=Te.material;ke.allowOverride===!0&&G!==null&&(ke=G),me.layers.test($.layers)&&Qo(me,F,$,we,ke,Pe)}}function Qo(M,F,$,G,H,xe){M.onBeforeRender(P,F,$,G,H,xe),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(P,F,$,G,M,xe),H.transparent===!0&&H.side===Fn&&H.forceSinglePass===!1?(H.side=qt,H.needsUpdate=!0,P.renderBufferDirect($,F,G,H,M,xe),H.side=si,H.needsUpdate=!0,P.renderBufferDirect($,F,G,H,M,xe),H.side=Fn):P.renderBufferDirect($,F,G,H,M,xe),M.onAfterRender(P,F,$,G,H,xe)}function Ir(M,F,$){F.isScene!==!0&&(F=mt);const G=A.get(M),H=T.state.lights,xe=T.state.shadowsArray,Te=H.state.version,me=fe.getParameters(M,H.state,xe,F,$,T.state.lightProbeGridArray),we=fe.getProgramCacheKey(me);let Pe=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;const ke=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=z.get(M.envMap||G.environment,ke),G.envMapRotation=G.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Pe===void 0&&(M.addEventListener("dispose",Mt),Pe=new Map,G.programs=Pe);let We=Pe.get(we);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===Te)return tl(M,me),We}else me.uniforms=fe.getUniforms(M),N!==null&&M.isNodeMaterial&&N.build(M,$,me),M.onBeforeCompile(me,P),We=fe.acquireProgram(me,we),Pe.set(we,We),G.uniforms=me.uniforms;const De=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=Ee.uniform),tl(M,me),G.needsLights=Yu(M),G.lightsStateVersion=Te,G.needsLights&&(De.ambientLightColor.value=H.state.ambient,De.lightProbe.value=H.state.probe,De.directionalLights.value=H.state.directional,De.directionalLightShadows.value=H.state.directionalShadow,De.spotLights.value=H.state.spot,De.spotLightShadows.value=H.state.spotShadow,De.rectAreaLights.value=H.state.rectArea,De.ltc_1.value=H.state.rectAreaLTC1,De.ltc_2.value=H.state.rectAreaLTC2,De.pointLights.value=H.state.point,De.pointLightShadows.value=H.state.pointShadow,De.hemisphereLights.value=H.state.hemi,De.directionalShadowMatrix.value=H.state.directionalShadowMatrix,De.spotLightMatrix.value=H.state.spotLightMatrix,De.spotLightMap.value=H.state.spotLightMap,De.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=We,G.uniformsList=null,We}function el(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=ys.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function tl(M,F){const $=A.get(M);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function $u(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(F.matrixWorld);for(let $=0,G=M.length;$<G;$++){const H=M[$];if(H.texture!==null&&H.boundingBox.containsPoint(b))return H}return null}function Xu(M,F,$,G,H){F.isScene!==!0&&(F=mt),_.resetTextureUnits();const xe=F.fog,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,me=L===null?P.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ye.workingColorSpace,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Pe=z.get(G.envMap||Te,we),ke=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,We=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!$.morphAttributes.position,st=!!$.morphAttributes.normal,bt=!!$.morphAttributes.color;let vt=wn;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(vt=P.toneMapping);const ot=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Nt=ot!==void 0?ot.length:0,ye=A.get(G),jt=T.state.lights;if(Je===!0&&(ze===!0||M!==O)){const dt=M===O&&G.id===V;Ee.setState(G,M,dt)}let et=!1;G.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==jt.state.version||ye.outputColorSpace!==me||H.isBatchedMesh&&ye.batching===!1||!H.isBatchedMesh&&ye.batching===!0||H.isBatchedMesh&&ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ye.instancing===!1||!H.isInstancedMesh&&ye.instancing===!0||H.isSkinnedMesh&&ye.skinning===!1||!H.isSkinnedMesh&&ye.skinning===!0||H.isInstancedMesh&&ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ye.instancingMorph===!1&&H.morphTexture!==null||ye.envMap!==Pe||G.fog===!0&&ye.fog!==xe||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Ee.numPlanes||ye.numIntersection!==Ee.numIntersection)||ye.vertexAlphas!==ke||ye.vertexTangents!==We||ye.morphTargets!==De||ye.morphNormals!==st||ye.morphColors!==bt||ye.toneMapping!==vt||ye.morphTargetsCount!==Nt||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,ye.__version=G.version);let rn=ye.currentProgram;et===!0&&(rn=Ir(G,F,H),N&&G.isNodeMaterial&&N.onUpdateProgram(G,rn,ye));let vn=!1,Wn=!1,Ri=!1;const lt=rn.getUniforms(),yt=ye.uniforms;if(he.useProgram(rn.program)&&(vn=!0,Wn=!0,Ri=!0),G.id!==V&&(V=G.id,Wn=!0),ye.needsLights){const dt=$u(T.state.lightProbeGridArray,H);ye.lightProbeGrid!==dt&&(ye.lightProbeGrid=dt,Wn=!0)}if(vn||O!==M){he.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),lt.setValue(I,"projectionMatrix",M.projectionMatrix),lt.setValue(I,"viewMatrix",M.matrixWorldInverse);const Xn=lt.map.cameraPosition;Xn!==void 0&&Xn.setValue(I,Ne.setFromMatrixPosition(M.matrixWorld)),ut.logarithmicDepthBuffer&&lt.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&lt.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),O!==M&&(O=M,Wn=!0,Ri=!0)}if(ye.needsLights&&(jt.state.directionalShadowMap.length>0&&lt.setValue(I,"directionalShadowMap",jt.state.directionalShadowMap,_),jt.state.spotShadowMap.length>0&&lt.setValue(I,"spotShadowMap",jt.state.spotShadowMap,_),jt.state.pointShadowMap.length>0&&lt.setValue(I,"pointShadowMap",jt.state.pointShadowMap,_)),H.isSkinnedMesh){lt.setOptional(I,H,"bindMatrix"),lt.setOptional(I,H,"bindMatrixInverse");const dt=H.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),lt.setValue(I,"boneTexture",dt.boneTexture,_))}H.isBatchedMesh&&(lt.setOptional(I,H,"batchingTexture"),lt.setValue(I,"batchingTexture",H._matricesTexture,_),lt.setOptional(I,H,"batchingIdTexture"),lt.setValue(I,"batchingIdTexture",H._indirectTexture,_),lt.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&lt.setValue(I,"batchingColorTexture",H._colorsTexture,_));const $n=$.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&Oe.update(H,$,rn),(Wn||ye.receiveShadow!==H.receiveShadow)&&(ye.receiveShadow=H.receiveShadow,lt.setValue(I,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(yt.envMapIntensity.value=F.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=R_()),Wn){if(lt.setValue(I,"toneMappingExposure",P.toneMappingExposure),ye.needsLights&&qu(yt,Ri),xe&&G.fog===!0&&Y.refreshFogUniforms(yt,xe),Y.refreshMaterialUniforms(yt,G,be,ge,T.state.transmissionRenderTarget[M.id]),ye.needsLights&&ye.lightProbeGrid){const dt=ye.lightProbeGrid;yt.probesSH.value=dt.texture,yt.probesMin.value.copy(dt.boundingBox.min),yt.probesMax.value.copy(dt.boundingBox.max),yt.probesResolution.value.copy(dt.resolution)}ys.upload(I,el(ye),yt,_)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ys.upload(I,el(ye),yt,_),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&lt.setValue(I,"center",H.center),lt.setValue(I,"modelViewMatrix",H.modelViewMatrix),lt.setValue(I,"normalMatrix",H.normalMatrix),lt.setValue(I,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const dt=G.uniformsGroups;for(let Xn=0,Pi=dt.length;Xn<Pi;Xn++){const nl=dt[Xn];Z.update(nl,rn),Z.bind(nl,rn)}}return rn}function qu(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Yu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,F,$){const G=A.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),A.get(M.texture).__webglTexture=F,A.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const $=A.get(M);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0};const ju=I.createFramebuffer();this.setRenderTarget=function(M,F=0,$=0){L=M,W=F,X=$;let G=null,H=!1,xe=!1;if(M){const me=A.get(M);if(me.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(I.FRAMEBUFFER,me.__webglFramebuffer),K.copy(M.viewport),Q.copy(M.scissor),B=M.scissorTest,he.viewport(K),he.scissor(Q),he.setScissorTest(B),V=-1;return}else if(me.__webglFramebuffer===void 0)_.setupRenderTarget(M);else if(me.__hasExternalTextures)_.rebindTextures(M,A.get(M.texture).__webglTexture,A.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ke=M.depthTexture;if(me.__boundDepthTexture!==ke){if(ke!==null&&A.has(ke)&&(M.width!==ke.image.width||M.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(M)}}const we=M.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);const Pe=A.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?G=Pe[F][$]:G=Pe[F],H=!0):M.samples>0&&_.useMultisampledRTT(M)===!1?G=A.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?G=Pe[$]:G=Pe,K.copy(M.viewport),Q.copy(M.scissor),B=M.scissorTest}else K.copy(te).multiplyScalar(be).floor(),Q.copy(_e).multiplyScalar(be).floor(),B=Ce;if($!==0&&(G=ju),he.bindFramebuffer(I.FRAMEBUFFER,G)&&he.drawBuffers(M,G),he.viewport(K),he.scissor(Q),he.setScissorTest(B),H){const me=A.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,$)}else if(xe){const me=F;for(let we=0;we<M.textures.length;we++){const Pe=A.get(M.textures[we]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+we,Pe.__webglTexture,$,me)}}else if(M!==null&&$!==0){const me=A.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,$)}V=-1},this.readRenderTargetPixels=function(M,F,$,G,H,xe,Te,me=0){if(!(M&&M.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=A.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){he.bindFramebuffer(I.FRAMEBUFFER,we);try{const Pe=M.textures[me],ke=Pe.format,We=Pe.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!ut.textureFormatReadable(ke)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(We)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-G&&$>=0&&$<=M.height-H&&I.readPixels(F,$,G,H,D.convert(ke),D.convert(We),xe)}finally{const Pe=L!==null?A.get(L).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(M,F,$,G,H,xe,Te,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=A.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we)if(F>=0&&F<=M.width-G&&$>=0&&$<=M.height-H){he.bindFramebuffer(I.FRAMEBUFFER,we);const Pe=M.textures[me],ke=Pe.format,We=Pe.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!ut.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.bufferData(I.PIXEL_PACK_BUFFER,xe.byteLength,I.STREAM_READ),I.readPixels(F,$,G,H,D.convert(ke),D.convert(We),0);const st=L!==null?A.get(L).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,st);const bt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Xd(I,bt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xe),I.deleteBuffer(De),I.deleteSync(bt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,$=0){const G=Math.pow(2,-$),H=Math.floor(M.image.width*G),xe=Math.floor(M.image.height*G),Te=F!==null?F.x:0,me=F!==null?F.y:0;_.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,Te,me,H,xe),he.unbindTexture()};const Ku=I.createFramebuffer(),Zu=I.createFramebuffer();this.copyTextureToTexture=function(M,F,$=null,G=null,H=0,xe=0){let Te,me,we,Pe,ke,We,De,st,bt;const vt=M.isCompressedTexture?M.mipmaps[xe]:M.image;if($!==null)Te=$.max.x-$.min.x,me=$.max.y-$.min.y,we=$.isBox3?$.max.z-$.min.z:1,Pe=$.min.x,ke=$.min.y,We=$.isBox3?$.min.z:0;else{const yt=Math.pow(2,-H);Te=Math.floor(vt.width*yt),me=Math.floor(vt.height*yt),M.isDataArrayTexture?we=vt.depth:M.isData3DTexture?we=Math.floor(vt.depth*yt):we=1,Pe=0,ke=0,We=0}G!==null?(De=G.x,st=G.y,bt=G.z):(De=0,st=0,bt=0);const ot=D.convert(F.format),Nt=D.convert(F.type);let ye;F.isData3DTexture?(_.setTexture3D(F,0),ye=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(_.setTexture2DArray(F,0),ye=I.TEXTURE_2D_ARRAY):(_.setTexture2D(F,0),ye=I.TEXTURE_2D),he.activeTexture(I.TEXTURE0),he.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),he.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),he.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const jt=he.getParameter(I.UNPACK_ROW_LENGTH),et=he.getParameter(I.UNPACK_IMAGE_HEIGHT),rn=he.getParameter(I.UNPACK_SKIP_PIXELS),vn=he.getParameter(I.UNPACK_SKIP_ROWS),Wn=he.getParameter(I.UNPACK_SKIP_IMAGES);he.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),he.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),he.pixelStorei(I.UNPACK_SKIP_PIXELS,Pe),he.pixelStorei(I.UNPACK_SKIP_ROWS,ke),he.pixelStorei(I.UNPACK_SKIP_IMAGES,We);const Ri=M.isDataArrayTexture||M.isData3DTexture,lt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const yt=A.get(M),$n=A.get(F),dt=A.get(yt.__renderTarget),Xn=A.get($n.__renderTarget);he.bindFramebuffer(I.READ_FRAMEBUFFER,dt.__webglFramebuffer),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let Pi=0;Pi<we;Pi++)Ri&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,A.get(M).__webglTexture,H,We+Pi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,A.get(F).__webglTexture,xe,bt+Pi)),I.blitFramebuffer(Pe,ke,Te,me,De,st,Te,me,I.DEPTH_BUFFER_BIT,I.NEAREST);he.bindFramebuffer(I.READ_FRAMEBUFFER,null),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||A.has(M)){const yt=A.get(M),$n=A.get(F);he.bindFramebuffer(I.READ_FRAMEBUFFER,Ku),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,Zu);for(let dt=0;dt<we;dt++)Ri?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.__webglTexture,H,We+dt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yt.__webglTexture,H),lt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$n.__webglTexture,xe,bt+dt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$n.__webglTexture,xe),H!==0?I.blitFramebuffer(Pe,ke,Te,me,De,st,Te,me,I.COLOR_BUFFER_BIT,I.NEAREST):lt?I.copyTexSubImage3D(ye,xe,De,st,bt+dt,Pe,ke,Te,me):I.copyTexSubImage2D(ye,xe,De,st,Pe,ke,Te,me);he.bindFramebuffer(I.READ_FRAMEBUFFER,null),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else lt?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(ye,xe,De,st,bt,Te,me,we,ot,Nt,vt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(ye,xe,De,st,bt,Te,me,we,ot,vt.data):I.texSubImage3D(ye,xe,De,st,bt,Te,me,we,ot,Nt,vt):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xe,De,st,Te,me,ot,Nt,vt.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xe,De,st,vt.width,vt.height,ot,vt.data):I.texSubImage2D(I.TEXTURE_2D,xe,De,st,Te,me,ot,Nt,vt);he.pixelStorei(I.UNPACK_ROW_LENGTH,jt),he.pixelStorei(I.UNPACK_IMAGE_HEIGHT,et),he.pixelStorei(I.UNPACK_SKIP_PIXELS,rn),he.pixelStorei(I.UNPACK_SKIP_ROWS,vn),he.pixelStorei(I.UNPACK_SKIP_IMAGES,Wn),xe===0&&F.generateMipmaps&&I.generateMipmap(ye),he.unbindTexture()},this.initRenderTarget=function(M){A.get(M).__webglFramebuffer===void 0&&_.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?_.setTextureCube(M,0):M.isData3DTexture?_.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?_.setTexture2DArray(M,0):_.setTexture2D(M,0),he.unbindTexture()},this.resetState=function(){W=0,X=0,L=null,he.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const Es={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class wr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const D_=new qo(-1,1,1,-1,0,1);class L_ extends Ut{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}}const I_=new L_;class Su{constructor(e){this._mesh=new dn(I_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,D_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Co extends wr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Os.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Su(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class lc extends wr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class U_ extends wr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class N_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ie);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Co(Es),this.copyPass.material.blending=An,this.timer=new If}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),u=this.renderer.state.buffers.stencil;u.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),u.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}lc!==void 0&&(a instanceof lc?n=!0:a instanceof U_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class F_ extends wr{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ke}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const O_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ir extends wr{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256),this.clearColor=new Ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(s,a,{type:nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new Yt(s,a,{type:nn});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const c=new Yt(s,a,{type:nn});c.texture.name="UnrealBloomPass.v"+f,c.texture.generateMipmaps=!1,this.renderTargetsVertical.push(c),s=Math.round(s/2),a=Math.round(a/2)}const o=O_;this.highPassUniforms=Os.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const u=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(u[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ie(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Os.clone(Es.uniforms),this.blendMaterial=new Vt({uniforms:this.copyUniforms,vertexShader:Es.vertexShader,fragmentShader:Es.fragmentShader,premultipliedAlpha:!0,blending:La,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ke,this._oldClearAlpha=1,this._basic=new $o,this._fsQuad=new Su(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ie(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let u=0;u<this.nMips;u++)this._fsQuad.material=this.separableBlurMaterials[u],this.separableBlurMaterials[u].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[u].uniforms.direction.value=ir.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[u]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[u].uniforms.colorTexture.value=this.renderTargetsHorizontal[u].texture,this.separableBlurMaterials[u].uniforms.direction.value=ir.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[u]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[u];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new Vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}}ir.BlurDirectionX=new Ie(1,0);ir.BlurDirectionY=new Ie(0,1);const B_={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ie(1/1024,1/512)}},vertexShader:`

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

		}`},z_=(i,e,t)=>Math.max(e,Math.min(t,i)),jv=i=>z_(i,0,1),cc=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;let Ts=42;const V_=i=>{Ts=i},k_=()=>(Ts=Ts*16807%2147483647,(Ts-1)/2147483646),Kv=(i,e)=>i+k_()*(e-i),Zv=i=>Array.from({length:i},(e,t)=>t),G_=800,uc=G_/2,H_=i=>{const e={phase:0,current:null,next:null,timer:0};return Object.freeze({transition:(o,u)=>{e.phase!==0&&e.next&&(e.next.setOpacity(0),i(e.next)),e.phase=1,e.next=u,e.timer=0,u.setOpacity(0),o&&o.setOpacity(1)},update:o=>{if(e.phase!==0){if(e.timer+=o,e.phase===1){const u=Math.min(e.timer/uc,1),l=cc(u);e.current&&(e.current.setOpacity(1-l),e.current.dissolve&&e.current.dissolve(l)),u>=1&&(e.current&&i(e.current),e.current=e.next,e.next=null,e.phase=2,e.timer=0,e.current&&e.current.setOpacity(0))}else if(e.phase===2){const u=Math.min(e.timer/uc,1),l=cc(u);e.current&&(e.current.setOpacity(l),e.current.entrance&&e.current.entrance(e.timer)),u>=1&&(e.phase=0,e.timer=0)}}},isTransitioning:()=>e.phase!==0,getActive:()=>e.current,forceScene:o=>{e.phase!==0&&e.next&&(e.next.setOpacity(0),i(e.next),e.next=null),e.current&&i(e.current),e.current=o,e.phase=0,e.timer=0,o.setOpacity(1)}})},W_={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new Ie},uScanlineIntensity:{value:.15},uVignetteStrength:{value:.35},uChromaticStrength:{value:.003}},vertexShader:`out vec2 vUv;
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
}`},$_=(i,e)=>{const t=new P_({alpha:!0,powerPreference:"high-performance"});t.setPixelRatio(e.pixelRatio),t.setSize(i.clientWidth,i.clientHeight),t.outputColorSpace=Qt,t.toneMapping=Io,t.toneMappingExposure=1.2,i.appendChild(t.domElement);let n=!1;const r=B=>{B.preventDefault(),n=!0},s=()=>{if(n=!1,!w)return;const B=E.getActive();B&&x(B);const q=R(w);q&&E.forceScene(q)};t.domElement.addEventListener("webglcontextlost",r),t.domElement.addEventListener("webglcontextrestored",s);const a=new cf;a.background=null;const o=new on(55,i.clientWidth/i.clientHeight,.1,100);o.position.set(0,0,12),o.lookAt(0,0,0);const u=new F_(a,o),l=Math.floor(i.clientWidth*e.bloomResolutionScale)||1,f=Math.floor(i.clientHeight*e.bloomResolutionScale)||1,d=new ir(new Ie(l,f),1,.4,.85);d.threshold=.1,d.strength=.8,d.radius=.5;const c=new Co(W_);c.renderToScreen=!1,c.material.glslVersion=bo;const h=new N_(t);h.addPass(u);const g=e.tier!=="low";e.bloomEnabled&&h.addPass(d),e.scanlineEnabled&&h.addPass(c);let S=null;g&&(S=new Co(B_),S.uniforms.resolution.value.set(1/(i.clientWidth*t.getPixelRatio()),1/(i.clientHeight*t.getPixelRatio())),h.addPass(S),S.renderToScreen=!0);let m=0,p=0,v=!1,y=null,b=0;const C=new U,T={value:.8},R=B=>{V_(42);const q={width:t.domElement.clientWidth,height:t.domElement.clientHeight,colorScheme:B.colorScheme,softwarePlanes:e.softwarePlanes,camera:o},ie=B.createScene(q);return ie.getObjects().forEach(ge=>a.add(ge)),ie},x=B=>{B.getObjects().forEach(q=>a.remove(q)),B.dispose()},E=H_(x),P=B=>{d.strength=B.bloomStrength,d.radius=B.bloomRadius,d.threshold=B.bloomThreshold,T.value=B.bloomStrength,c.uniforms.uScanlineIntensity.value=B.scanlineIntensity,c.uniforms.uVignetteStrength.value=B.vignetteStrength,c.uniforms.uChromaticStrength.value=B.chromaticStrength};let w=null;const N=B=>{if(v||w?.sceneKind===B.sceneKind)return;w=B,y=B.cameraPreset,b=B.cameraPreset.initialAngle,P(B.postPreset),o&&(o.fov=B.cameraPreset.fov,o.updateProjectionMatrix());const q=R(B);if(!q)return;const ie=E.getActive();E.transition(ie,q)},W=B=>{if(!y)return;const ie=E.getActive()?.getCameraState?.();if(ie){const j=Math.min(ie.lerpFactor*B*.06,1);o.position.lerp(ie.position,j),o.lookAt(ie.lookAt);return}const ve=y;ve.autoRotate&&(b+=ve.orbitSpeed*B*.001);const ge=Math.sin(b*ve.heightFrequency)*ve.heightAmplitude,be=Math.sin(b)*ve.orbitRadius,k=Math.cos(b)*ve.orbitRadius;C.set(be,ge,k),o.position.lerp(C,.03),o.lookAt(0,0,0)},X=new Set(["INPUT","TEXTAREA","SELECT"]),L=new Set(["checkbox","radio","button","submit","reset","range","color"]),V=B=>{const q=B.target,ie=q?.tagName;if(ie&&X.has(ie))if(ie==="INPUT"){const ge=q.type?.toLowerCase();if(!L.has(ge))return}else return;if(q?.isContentEditable||B.key.length!==1)return;const ve=E.getActive();ve?.onKeyPress&&ve.onKeyPress(B.key)};window.addEventListener("keydown",V);const O=()=>{const B=i.clientWidth,q=i.clientHeight;o.aspect=B/q,o.updateProjectionMatrix(),t.setSize(B,q),h.setSize(B,q),e.bloomEnabled&&e.bloomResolutionScale>0&&d.setSize(Math.floor(B*e.bloomResolutionScale),Math.floor(q*e.bloomResolutionScale)),c.uniforms.uResolution.value.set(B,q),g&&S&&S.uniforms.resolution.value.set(1/(B*t.getPixelRatio()),1/(q*t.getPixelRatio()))};window.addEventListener("resize",O,{passive:!0});const K=B=>{if(m=requestAnimationFrame(K),n)return;const q=p===0?16:Math.min(B-p,50);p=B,W(q),E.update(q);const ie=E.getActive();if(ie&&(ie.update(B*.001,q*.001,null),ie.getDensity)){const ve=ie.getDensity(),ge=w?.postPreset.bloomStrength??.8,be=ge*.5+ve*ge;T.value+=(be-T.value)*.03,d.strength=T.value}g?(c.uniforms.uTime.value=B*.001,h.render()):t.render(a,o)};return m=requestAnimationFrame(K),Object.freeze({setTheme:N,dispose:()=>{v=!0,cancelAnimationFrame(m);const B=E.getActive();B&&x(B),window.removeEventListener("resize",O),window.removeEventListener("keydown",V),t.domElement.removeEventListener("webglcontextlost",r),t.domElement.removeEventListener("webglcontextrestored",s),t.dispose(),t.domElement.parentNode===i&&i.removeChild(t.domElement)},resize:O})},X_=()=>{const i=document.createElement("canvas"),e=i.getContext("webgl2");if(i.remove(),!e)return Object.freeze({isIntegrated:!0,isAppleGpu:!1,renderer:"unknown",webgl2Available:!1});const t=e.getExtension("WEBGL_debug_renderer_info"),n=t?(e.getParameter(t.UNMASKED_RENDERER_WEBGL)??"").toLowerCase():"",r=/intel.*(hd|uhd|iris|gma)|mali|adreno|powervr/i.test(n),s=/apple (m[1-9]|gpu)/i.test(n);return Object.freeze({isIntegrated:r,isAppleGpu:s,renderer:n,webgl2Available:!0})},dc=()=>{const i=navigator.deviceMemory;return i!==void 0&&i<4},q_=()=>{const i=X_();return!i.webgl2Available||i.isIntegrated&&dc()||i.isAppleGpu&&dc()?Object.freeze({tier:"low",pixelRatio:1,bloomEnabled:!1,bloomResolutionScale:0,scanlineEnabled:!1,softwarePlanes:1}):i.isIntegrated||i.isAppleGpu?Object.freeze({tier:"medium",pixelRatio:1.5,bloomEnabled:!0,bloomResolutionScale:.5,scanlineEnabled:!0,softwarePlanes:2}):Object.freeze({tier:"high",pixelRatio:Math.min(window.devicePixelRatio,2),bloomEnabled:!0,bloomResolutionScale:1,scanlineEnabled:!0,softwarePlanes:3})},Y_=Object.freeze({[tn.AI]:()=>Ur(()=>import("./index-9HhTpfYv.js"),__vite__mapDeps([0,1,2,3])).then(i=>i.default),[tn.Blockchain]:()=>Ur(()=>import("./index-CXY6RLYB.js"),__vite__mapDeps([4,5,1,2,3])).then(i=>i.default),[tn.Software]:()=>Ur(()=>import("./index-qqr-NOv9.js"),__vite__mapDeps([6,5,1,2,3])).then(i=>i.default),[tn.Web]:()=>Ur(()=>import("./index-BP_aDJhZ.js"),__vite__mapDeps([7,5,1,2,3])).then(i=>i.default)}),Ca=new Map;async function j_(i){const e=Ca.get(i);if(e)return e;const t=Y_[i];if(!t)return null;const n=t().catch(r=>(Ca.delete(i),console.error(`[theme] Failed to load theme "${i}":`,r),null));return Ca.set(i,n),n}var K_=Xe('<div class="absolute inset-0 w-full h-full overflow-hidden"style=position:absolute;top:0;left:0;z-index:1>');function Z_(){let i,e;const[t]=Ju(()=>As(),async n=>j_(n));return oi(()=>{const n=i;if(!n)return;const r=q_();e=$_(n,r)}),Ct(()=>{const n=t();n&&e&&e.setTheme(n)}),At(()=>{e?.dispose(),e=void 0}),(()=>{var n=$e(K_),r=i;return typeof r=="function"?li(r,n):i=n,n})()}function J_(){const[i,e]=ft(!1);return oi(()=>e(!0)),ne($t,{get when(){return i()},get children(){return ne(Z_,{})}})}function Q_(){return ne(Qn,{fallback:()=>null,get children(){return ne(J_,{})}})}var e0=Xe("<span><!$><!/><!$><!/>"),t0=Xe("<span class=animate-pulse aria-hidden=true>|");function n0(i){const[e,t]=ft(""),[n,r]=ft(!0);return oi(()=>{let s=0;const a=i.text;if(a.length===0){r(!1);return}const o=setInterval(()=>{s++,t(a.substring(0,s)),s>=a.length&&(r(!1),clearInterval(o))},i.speed||80);At(()=>clearInterval(o))}),(()=>{var s=$e(e0),a=s.firstChild,[o,u]=Le(a.nextSibling),l=o.nextSibling,[f,d]=Le(l.nextSibling);return ae(s,e,o,u),ae(s,(()=>{var c=Tn(()=>!!n());return()=>c()&&$e(t0)})(),f,d),Et(()=>_n(s,i.class)),s})()}var i0=Xe("<span><!$><!/><span class=animate-pulse aria-hidden=true>|");function r0(i){const[e,t]=ft(""),[n,r]=ft(0),[s,a]=ft(0),[o,u]=ft(0);return oi(()=>{const l=i.titles.map(c=>c.toUpperCase());if(l.length===0)return;const f=i.speed||80,d=setInterval(()=>{const c=l[s()];if(n()===0){const h=c.substring(0,e().length+1);t(h),h===c&&(r(1),u(Math.ceil((i.pauseMs||2e3)/f)))}else if(n()===1)o()<=0?r(2):u(h=>h-1);else{const h=e().substring(0,e().length-1);t(h),h.length===0&&(r(0),a(g=>(g+1)%l.length))}},f);At(()=>clearInterval(d))}),(()=>{var l=$e(i0),f=l.firstChild,[d,c]=Le(f.nextSibling);return d.nextSibling,ae(l,e,d,c),Et(()=>_n(l,i.class)),l})()}var s0=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],a0=i=>ne(Xt,pt(i,{iconNode:s0,name:"linkedin"})),o0=a0,l0=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],c0=i=>ne(Xt,pt(i,{iconNode:l0,name:"mail"})),u0=c0,d0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],f0=i=>ne(Xt,pt(i,{iconNode:d0,name:"external-link"})),Mu=f0;const h0={github:Qu,linkedin:o0,gmail:u0};function bu(i){return h0[i]??Mu}var p0=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],m0=i=>ne(Xt,pt(i,{iconNode:p0,name:"brain"})),g0=m0,_0=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],x0=i=>ne(Xt,pt(i,{iconNode:_0,name:"blocks"})),v0=x0,S0=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],M0=i=>ne(Xt,pt(i,{iconNode:S0,name:"terminal"})),yu=M0,b0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],y0=i=>ne(Xt,pt(i,{iconNode:b0,name:"globe"})),E0=y0,T0=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],A0=i=>ne(Xt,pt(i,{iconNode:T0,name:"palette"})),w0=A0,C0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],R0=i=>ne(Xt,pt(i,{iconNode:C0,name:"check"})),P0=R0,D0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],L0=i=>ne(Xt,pt(i,{iconNode:D0,name:"chevron-down"})),I0=L0,U0=Xe('<p class="text-text-muted text-xs font-mono mb-3 flex items-center justify-center gap-2"><!$><!/><span>'),N0=Xe('<section id=home class="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg"><!$><!/><div class="relative z-10 text-center px-6 max-w-4xl mx-auto bg-bg/25 backdrop-blur-[2px] rounded-2xl py-8"><div class="mb-6 inline-block"><span class="font-mono text-xs text-accent-primary border border-accent-primary/30 px-3 py-1 rounded-full bg-accent-primary/5">&lt;AI_Engineer /&gt;</span></div><h1 class="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-4 tracking-tight"></h1><div class="h-12 md:h-16 flex items-center justify-center mb-8"></div><p class="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"></p><div class=mb-10><!$><!/><div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto"></div></div><div class="flex items-center justify-center gap-6 mb-12"></div><button class="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent-primary transition-colors animate-bounce"aria-label="Scroll down">'),F0=Xe('<span class="absolute top-1 right-1 w-4 h-4 rounded-full bg-accent-primary flex items-center justify-center">'),O0=Xe('<button class="relative flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 active:scale-95"><!$><!/><!$><!/><span class="text-xs font-mono font-bold"></span><div class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full border border-text-muted/20"></span><span class="w-2.5 h-2.5 rounded-full border border-text-muted/20"></span><span class="w-2.5 h-2.5 rounded-full border border-text-muted/20"></span><span class="w-2.5 h-2.5 rounded-full border border-text-muted/20"></span></div><!$><!/>'),B0=Xe('<span class="text-[10px] leading-tight text-text-muted">'),z0=Xe('<a class="p-3 rounded-full border border-border hover:border-accent-primary hover:text-accent-primary hover:shadow-glow-primary transition-all">');function V0(){const{sharedData:i,messages:e,t}=ci(),n=()=>i()?.basic_info?.name||"",r=()=>e()?.hero?.titles||i()?.basic_info?.titles||[],s=()=>t("hero.subtitle",""),a=()=>{document.getElementById("about")?.scrollIntoView({behavior:"smooth"})},o=(l,f)=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),il(f))},u=()=>i()?.basic_info?.social||[];return(()=>{var l=$e(N0),f=l.firstChild,[d,c]=Le(f.nextSibling),h=d.nextSibling,g=h.firstChild,S=g.nextSibling,m=S.nextSibling,p=m.nextSibling,v=p.nextSibling,y=v.firstChild,[b,C]=Le(y.nextSibling),T=b.nextSibling,R=v.nextSibling,x=R.nextSibling;return ae(l,ne(Q_,{}),d,c),ae(S,ne($t,{get when(){return n()},get children(){return ne(n0,{get text(){return n()},class:"text-text"})}})),ae(m,ne($t,{get when(){return r().length>0},get children(){return ne(r0,{get titles(){return r()},class:"font-mono text-lg md:text-2xl text-accent-secondary"})}})),ae(p,s),ae(v,ne($t,{get when(){return e()},get children(){var E=$e(U0),P=E.firstChild,[w,N]=Le(P.nextSibling),W=w.nextSibling;return ae(E,ne(w0,{size:14}),w,N),ae(W,()=>t("hero.themes_label","Explorar temas")),E}}),b,C),ae(T,()=>cd.map(E=>{const P=()=>As()===E.id;return(()=>{var w=$e(O0),N=w.firstChild,[W,X]=Le(N.nextSibling),L=W.nextSibling,[V,O]=Le(L.nextSibling),K=V.nextSibling,Q=K.nextSibling,B=Q.firstChild,q=B.nextSibling,ie=q.nextSibling,ve=ie.nextSibling,ge=Q.nextSibling,[be,k]=Le(ge.nextSibling);return w.$$keydown=j=>o(j,E.id),w.$$click=()=>il(E.id),ae(w,ne($t,{get when(){return P()},get children(){var j=$e(F0);return ae(j,ne(P0,{size:10,class:"text-bg"})),j}}),W,X),ae(w,(()=>{var j=Tn(()=>E.id===tn.AI);return()=>j()?ne(g0,{size:24}):Tn(()=>E.id===tn.Blockchain)()?ne(v0,{size:24}):Tn(()=>E.id===tn.Software)()?ne(yu,{size:24}):ne(E0,{size:24})})(),V,O),ae(K,()=>E.label),ae(w,ne($t,{get when(){return t(`hero.themes_${E.id}`,"")},children:j=>(()=>{var te=$e(B0);return ae(te,j),te})()}),be,k),Et(j=>{var te={"text-accent-primary bg-accent-primary/10 border-2 border-accent-primary/50 shadow-[var(--shadow-glow-primary)] scale-105":P(),"text-text-secondary bg-surface/30 border border-border hover:border-accent-primary/40 hover:bg-surface/50 hover:scale-[1.02]":!P()},_e=P(),Ce=`${E.label} — ${t(`hero.themes_${E.id}`,"")}`,Ae=E.primary,Je=E.secondary,ze=E.tertiary,Qe=E.background;return j.e=ed(w,te,j.e),_e!==j.t&&St(w,"aria-pressed",j.t=_e),Ce!==j.a&&St(w,"aria-label",j.a=Ce),Ae!==j.o&&ct(B,"background-color",j.o=Ae),Je!==j.i&&ct(q,"background-color",j.i=Je),ze!==j.n&&ct(ie,"background-color",j.n=ze),Qe!==j.s&&ct(ve,"background-color",j.s=Qe),j},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),ii(),w})()})),ae(R,()=>u().map(E=>{const P=bu(E.name),w=E.url.startsWith("mailto:");return(()=>{var N=$e(z0);return St(N,"target",w?void 0:"_blank"),St(N,"rel",w?void 0:"noopener noreferrer"),ae(N,ne(P,{size:20})),Et(W=>{var X=E.url,L=E.name;return X!==W.e&&St(N,"href",W.e=X),L!==W.t&&St(N,"aria-label",W.t=L),W},{e:void 0,t:void 0}),N})()})),x.$$click=a,ae(x,ne(I0,{size:32})),ii(),l})()}Do(["click","keydown"]);function Cr(i,e){const[t,n]=ft(!1);return oi(()=>{const r=i();if(!r)return;const s=new IntersectionObserver(([a])=>{a.isIntersecting&&n(!0)},{threshold:e??.1});s.observe(r),At(()=>s.disconnect())}),t}var k0=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],G0=i=>ne(Xt,pt(i,{iconNode:k0,name:"code"})),H0=G0,W0=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],$0=i=>ne(Xt,pt(i,{iconNode:W0,name:"database"})),X0=$0,q0=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Y0=i=>ne(Xt,pt(i,{iconNode:q0,name:"cpu"})),j0=Y0,K0=Xe('<section id=about class="py-section bg-bg relative"><div class="max-w-6xl mx-auto px-6"><h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-text"><span class=text-accent-primary>&gt;</span> <!$><!/></h2><div class="grid md:grid-cols-[280px_1fr] gap-12 items-start"><div class="flex justify-center md:justify-start"><div class="bg-surface p-3 rounded-2xl shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-300 border border-border"style="transition:opacity 0.6s ease-out, transform 0.6s ease-out"><img alt="Gustavo M Camargo"class="w-64 h-64 object-cover rounded-xl mb-4"loading=lazy><div class="flex justify-center gap-4 text-accent-primary"aria-hidden=true><!$><!/><!$><!/><!$><!/><!$><!/></div></div></div><div class="bg-surface rounded-2xl overflow-hidden shadow-xl border border-border"style="transition:opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s"><div class="flex gap-2 px-5 py-4 bg-black/40 border-b border-border"><span class="w-3 h-3 rounded-full bg-accent-red"></span><span class="w-3 h-3 rounded-full bg-accent-quaternary"></span><span class="w-3 h-3 rounded-full bg-accent-primary"></span><span class="ml-3 font-mono text-xs text-text-muted">gustavo@portfolio ~ neofetch</span></div><div class="p-6 md:p-8"><p class="font-mono text-lg font-semibold text-accent-primary mb-4"><!$><!/> :)</p><p class="text-text-secondary leading-relaxed text-sm md:text-base whitespace-pre-line">',!0,!1,!1);function Z0(){const{sharedData:i,t:e}=ci();let t;const n=Cr(()=>t,.2),r=()=>{const a=i()?.basic_info?.image;return a?`/images/${a}`:""},s=()=>e("basic_info.section_name.about","Sobre Mim");return(()=>{var a=$e(K0),o=a.firstChild,u=o.firstChild,l=u.firstChild,f=l.nextSibling,d=f.nextSibling,[c,h]=Le(d.nextSibling),g=u.nextSibling,S=g.firstChild,m=S.firstChild,p=m.firstChild,v=p.nextSibling,y=v.firstChild,[b,C]=Le(y.nextSibling),T=b.nextSibling,[R,x]=Le(T.nextSibling),E=R.nextSibling,[P,w]=Le(E.nextSibling),N=P.nextSibling,[W,X]=Le(N.nextSibling),L=S.nextSibling,V=L.firstChild,O=V.nextSibling,K=O.firstChild,Q=K.firstChild,[B,q]=Le(Q.nextSibling);B.nextSibling;var ie=K.nextSibling,ve=t;return typeof ve=="function"?li(ve,a):t=a,ae(u,s,c,h),ae(v,ne(H0,{size:28}),b,C),ae(v,ne(yu,{size:28}),R,x),ae(v,ne(X0,{size:28}),P,w),ae(v,ne(j0,{size:28}),W,X),ae(K,()=>e("basic_info.description_header"),B,q),ae(ie,()=>e("basic_info.description")),Et(ge=>{var be=n()?1:0,k=n()?"translateY(0) rotate(-2deg)":"translateY(30px) rotate(-2deg)",j=r(),te=n()?1:0,_e=n()?"translateY(0)":"translateY(30px)";return be!==ge.e&&ct(m,"opacity",ge.e=be),k!==ge.t&&ct(m,"transform",ge.t=k),j!==ge.a&&St(p,"src",ge.a=j),te!==ge.o&&ct(L,"opacity",ge.o=te),_e!==ge.i&&ct(L,"transform",ge.i=_e),ge},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),a})()}var J0=Xe('<section id=stats class="py-16 bg-surface border-y border-border"><div class="max-w-6xl mx-auto px-6"><div class="grid grid-cols-2 md:grid-cols-4 gap-8">'),Q0=Xe('<div class=text-center><div class="text-4xl md:text-5xl font-bold font-display text-accent-primary mb-2"aria-live=polite><!$><!/><!$><!/></div><div class="text-sm text-text-muted font-medium uppercase tracking-wider">');function ex(){const{t:i}=ci(),[e,t]=ft(!1),[n,r]=ft([0,0,0,0]);let s;const a=()=>[{label:i("stats.projects","Projetos"),value:10,suffix:"+"},{label:i("stats.years","Anos Exp."),value:5,suffix:""},{label:i("stats.languages","Linguagens"),value:8,suffix:""},{label:i("stats.deploys","Deploys"),value:50,suffix:"+"}];return oi(()=>{const o=a(),u=2e3;let l=0;const f=(c,h)=>{const g=c-h,S=Math.min(g/u,1),m=1-Math.pow(1-S,3);r(o.map(p=>Math.floor(p.value*m))),S<1&&(l=requestAnimationFrame(p=>f(p,h)))},d=new IntersectionObserver(([c])=>{if(c.isIntersecting){t(!0),d.disconnect();const h=performance.now();l=requestAnimationFrame(g=>f(g,h))}},{threshold:.3});s&&d.observe(s),At(()=>{d.disconnect(),l&&cancelAnimationFrame(l)})}),(()=>{var o=$e(J0),u=o.firstChild,l=u.firstChild,f=s;return typeof f=="function"?li(f,o):s=o,ae(l,ne(cn,{get each(){return a()},children:(d,c)=>(()=>{var h=$e(Q0),g=h.firstChild,S=g.firstChild,[m,p]=Le(S.nextSibling),v=m.nextSibling,[y,b]=Le(v.nextSibling),C=g.nextSibling;return ae(g,()=>n()[c()],m,p),ae(g,()=>d.suffix,y,b),ae(C,()=>d.label),Et(T=>{var R=e()?1:0,x=e()?"translateY(0)":"translateY(20px)",E=`opacity 0.5s ease-out ${c()*.1}s, transform 0.5s ease-out ${c()*.1}s`;return R!==T.e&&ct(h,"opacity",T.e=R),x!==T.t&&ct(h,"transform",T.t=x),E!==T.a&&ct(h,"transition",T.a=E),T},{e:void 0,t:void 0,a:void 0}),h})()})),o})()}var tx=Xe('<section id=skills class="py-section bg-bg relative"><div class="max-w-6xl mx-auto px-6"><h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-text"><span class=text-accent-tertiary>&gt;</span> <!$><!/></h2><div class="grid md:grid-cols-3 gap-10">'),nx=Xe('<div class="bg-surface rounded-2xl p-6 border border-border"><h3 class="text-accent-secondary font-mono text-sm uppercase tracking-wider mb-6"></h3><div class=space-y-4>'),ix=Xe('<div><div class="flex items-center justify-between mb-1"><div class="flex items-center gap-3"><i aria-hidden=true></i><span class="text-sm font-medium text-text"></span></div><span class="text-xs font-mono text-text-muted"><!$><!/>%</span></div><div class="h-2 bg-surface-elevated rounded-full overflow-hidden"role=progressbar aria-valuemin=0 aria-valuemax=100><div class="h-full rounded-full bg-accent-primary transition-all duration-1000 ease-out">');const fc={languages:0,frameworks:1,data:2};function rx(){const{sharedData:i,messages:e,t}=ci();let n;const r=Cr(()=>n,.1),s=()=>i()?.skills?.icons||[],a=()=>t("basic_info.section_name.skills",""),o=()=>e()?.skills_categories,u=()=>{const l=s(),f=new Map;for(const c of l){const h=c.category||"other";f.has(h)||f.set(h,[]);const g=f.get(h);g&&g.push(c)}const d=[];for(const[c,h]of f)d.push({key:c,name:o()?.[c]||c,skills:h});return d.sort((c,h)=>(fc[c.key]??99)-(fc[h.key]??99)),d};return(()=>{var l=$e(tx),f=l.firstChild,d=f.firstChild,c=d.firstChild,h=c.nextSibling,g=h.nextSibling,[S,m]=Le(g.nextSibling),p=d.nextSibling,v=n;return typeof v=="function"?li(v,l):n=l,ae(d,a,S,m),ae(p,ne(cn,{get each(){return u()},children:(y,b)=>(()=>{var C=$e(nx),T=C.firstChild,R=T.nextSibling;return ae(T,()=>y.name),ae(R,ne(cn,{get each(){return y.skills},children:(x,E)=>(()=>{var P=$e(ix),w=P.firstChild,N=w.firstChild,W=N.firstChild,X=W.nextSibling,L=N.nextSibling,V=L.firstChild,[O,K]=Le(V.nextSibling);O.nextSibling;var Q=w.nextSibling,B=Q.firstChild;return ae(X,()=>x.name),ae(L,()=>x.level,O,K),Et(q=>{var ie=r()?1:0,ve=r()?"translateX(0)":"translateX(-10px)",ge=`opacity 0.4s ease-out ${b()*.15+E()*.05}s, transform 0.4s ease-out ${b()*.15+E()*.05}s`,be=`${x.class} text-lg text-text-secondary`,k=x.level,j=`${x.name}: ${x.level}%`,te=r()?`${x.level}%`:"0%",_e=`${b()*.15+E()*.05}s`;return ie!==q.e&&ct(P,"opacity",q.e=ie),ve!==q.t&&ct(P,"transform",q.t=ve),ge!==q.a&&ct(P,"transition",q.a=ge),be!==q.o&&_n(W,q.o=be),k!==q.i&&St(Q,"aria-valuenow",q.i=k),j!==q.n&&St(Q,"aria-label",q.n=j),te!==q.s&&ct(B,"width",q.s=te),_e!==q.h&&ct(B,"transition-delay",q.h=_e),q},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),P})()})),Et(x=>{var E=r()?1:0,P=r()?"translateY(0)":"translateY(30px)",w=`opacity 0.6s ease-out ${b()*.15}s, transform 0.6s ease-out ${b()*.15}s`;return E!==x.e&&ct(C,"opacity",x.e=E),P!==x.t&&ct(C,"transform",x.t=P),w!==x.a&&ct(C,"transition",x.a=w),x},{e:void 0,t:void 0,a:void 0}),C})()})),l})()}var sx=Xe('<section id=experience class="py-section bg-surface relative"><div class="max-w-4xl mx-auto px-6"><h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-text"><span class=text-accent-secondary>&gt;</span> <!$><!/></h2><div class=relative><div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px"></div><!$><!/>'),ax=Xe('<ul class="mb-3 space-y-1">'),ox=Xe('<div><div class="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-primary border-2 border-bg -translate-x-1/2 mt-2 shadow-glow-primary"></div><div><div class="bg-bg rounded-xl p-6 border border-border hover:border-accent-primary/50 transition-colors"><div class="flex items-center gap-3 mb-2 md:justify-start"><i aria-hidden=true></i><div><h3 class="font-semibold text-text"></h3><p class="text-accent-secondary text-sm"></p></div></div><p class="text-xs font-mono text-text-muted mb-3"></p><!$><!/><div class="flex flex-wrap gap-2"><!$><!/><!$><!/>'),lx=Xe('<li class="text-xs text-text-secondary leading-relaxed flex items-start gap-1.5"><span class="text-accent-primary mt-0.5 shrink-0">▹</span><span>'),cx=Xe('<span class="px-2 py-0.5 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-medium">'),ux=Xe('<span class="px-2 py-0.5 rounded-full bg-surface-elevated text-text-muted text-xs">');function dx(){const{messages:i,t:e}=ci();let t;const n=Cr(()=>t,.1),r=()=>i()?.experience||[],s=()=>e("basic_info.section_name.experience","");return(()=>{var a=$e(sx),o=a.firstChild,u=o.firstChild,l=u.firstChild,f=l.nextSibling,d=f.nextSibling,[c,h]=Le(d.nextSibling),g=u.nextSibling,S=g.firstChild,m=S.nextSibling,[p,v]=Le(m.nextSibling),y=t;return typeof y=="function"?li(y,a):t=a,ae(u,s,c,h),ae(g,ne(cn,{get each(){return r()},children:(b,C)=>(()=>{var T=$e(ox),R=T.firstChild,x=R.nextSibling,E=x.firstChild,P=E.firstChild,w=P.firstChild,N=w.nextSibling,W=N.firstChild,X=W.nextSibling,L=P.nextSibling,V=L.nextSibling,[O,K]=Le(V.nextSibling),Q=O.nextSibling,B=Q.firstChild,[q,ie]=Le(B.nextSibling),ve=q.nextSibling,[ge,be]=Le(ve.nextSibling);return ae(W,()=>b.title),ae(X,()=>b.company),ae(L,()=>b.years),ae(E,ne($t,{get when(){return b.highlights},get children(){var k=$e(ax);return ae(k,ne(cn,{get each(){return b.highlights},children:j=>(()=>{var te=$e(lx),_e=te.firstChild,Ce=_e.nextSibling;return ae(Ce,j),te})()})),k}}),O,K),ae(Q,ne(cn,{get each(){return b.mainTech},children:k=>(()=>{var j=$e(cx);return ae(j,k),j})()}),q,ie),ae(Q,ne(cn,{get each(){return b.technologies},children:k=>(()=>{var j=$e(ux);return ae(j,k),j})()}),ge,be),Et(k=>{var j=`relative flex items-start gap-6 mb-12 ${C()%2===0?"md:flex-row":"md:flex-row-reverse"}`,te=n()?1:0,_e=n()?"translateY(0)":"translateY(20px)",Ce=`opacity 0.5s ease-out ${C()*.12}s, transform 0.5s ease-out ${C()*.12}s`,Ae=`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${C()%2===0?"md:pr-8 md:text-right":"md:pl-8 md:text-left"}`,Je=`${b.icon} text-2xl text-accent-primary`;return j!==k.e&&_n(T,k.e=j),te!==k.t&&ct(T,"opacity",k.t=te),_e!==k.a&&ct(T,"transform",k.a=_e),Ce!==k.o&&ct(T,"transition",k.o=Ce),Ae!==k.i&&_n(x,k.i=Ae),Je!==k.n&&_n(w,k.n=Je),k},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),T})()}),p,v),a})()}function fx(i){return(...e)=>{for(const t of i)t&&t(...e)}}const Vn=i=>typeof i=="function"&&!i.length?i():i;function hx(i,...e){return typeof i=="function"?i(...e):i}const px=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function hc(i){const e={};let t;for(;t=px.exec(i);)e[t[1]]=t[2];return e}function mx(i,e){if(typeof i=="string"){if(typeof e=="string")return`${i};${e}`;i=hc(i)}else typeof e=="string"&&(e=hc(e));return{...i,...e}}function Rr(...i){return fx(i)}function pc(i,e){const t=[...i],n=t.indexOf(e);return n!==-1&&t.splice(n,1),t}function gx(i){return Object.prototype.toString.call(i)==="[object String]"}function _x(i){return typeof i=="function"}function xx(i){return e=>`${i()}-${e}`}function Bn(i,e){return i?i===e||i.contains(e):!1}function br(i,e=!1){const{activeElement:t}=ai(i);if(!t?.nodeName)return null;if(Eu(t)&&t.contentDocument)return br(t.contentDocument.body,e);if(e){const n=t.getAttribute("aria-activedescendant");if(n){const r=ai(t).getElementById(n);if(r)return r}}return t}function ai(i){return i?i.ownerDocument||i:document}function Eu(i){return i.tagName==="IFRAME"}var Tu=(i=>(i.Escape="Escape",i.Enter="Enter",i.Tab="Tab",i.Space=" ",i.ArrowDown="ArrowDown",i.ArrowLeft="ArrowLeft",i.ArrowRight="ArrowRight",i.ArrowUp="ArrowUp",i.End="End",i.Home="Home",i.PageDown="PageDown",i.PageUp="PageUp",i))(Tu||{});function vx(i){return typeof window<"u"&&window.navigator!=null?i.test(window.navigator.userAgentData?.platform||window.navigator.platform):!1}function Sx(){return vx(/^Mac/i)}function Hs(i,e){return e&&(_x(e)?e(i):e[0](e[1],i)),i?.defaultPrevented}function mc(i){return e=>{for(const t of i)Hs(e,t)}}function Mx(i){return Sx()?i.metaKey&&!i.ctrlKey:i.ctrlKey&&!i.metaKey}function Nn(i){if(i)if(bx())i.focus({preventScroll:!0});else{const e=yx(i);i.focus(),Ex(e)}}var ms=null;function bx(){if(ms==null){ms=!1;try{document.createElement("div").focus({get preventScroll(){return ms=!0,!0}})}catch{}}return ms}function yx(i){let e=i.parentNode;const t=[],n=document.scrollingElement||document.documentElement;for(;e instanceof HTMLElement&&e!==n;)(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&t.push({element:e,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft}),e=e.parentNode;return n instanceof HTMLElement&&t.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),t}function Ex(i){for(const{element:e,scrollTop:t,scrollLeft:n}of i)e.scrollTop=t,e.scrollLeft=n}var Tx=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],Au=`${Tx.join(":not([hidden]),")},[tabindex]:not([disabled]):not([hidden])`;function wu(i,e){const n=Array.from(i.querySelectorAll(Au)).filter(gc);return e&&gc(i)&&n.unshift(i),n.forEach((r,s)=>{if(Eu(r)&&r.contentDocument){const a=r.contentDocument.body,o=wu(a,!1);n.splice(s,1,...o)}}),n}function gc(i){return Cu(i)&&!Ax(i)}function Cu(i){return i.matches(Au)&&Ru(i)}function Ax(i){return Number.parseInt(i.getAttribute("tabindex")||"0",10)<0}function Ru(i,e){return i.nodeName!=="#comment"&&wx(i)&&Cx(i,e)&&(!i.parentElement||Ru(i.parentElement,i))}function wx(i){if(!(i instanceof HTMLElement)&&!(i instanceof SVGElement))return!1;const{display:e,visibility:t}=i.style;let n=e!=="none"&&t!=="hidden"&&t!=="collapse";if(n){if(!i.ownerDocument.defaultView)return n;const{getComputedStyle:r}=i.ownerDocument.defaultView,{display:s,visibility:a}=r(i);n=s!=="none"&&a!=="hidden"&&a!=="collapse"}return n}function Cx(i,e){return!i.hasAttribute("hidden")&&(i.nodeName==="DETAILS"&&e&&e.nodeName!=="SUMMARY"?i.hasAttribute("open"):!0)}function Rx(){}function Pr(i,e){return pt(i,e)}var xr=new Map,_c=new Set;function xc(){if(typeof window>"u")return;const i=t=>{if(!t.target)return;let n=xr.get(t.target);n||(n=new Set,xr.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)},e=t=>{if(!t.target)return;const n=xr.get(t.target);if(n&&(n.delete(t.propertyName),n.size===0&&(t.target.removeEventListener("transitioncancel",e),xr.delete(t.target)),xr.size===0)){for(const r of _c)r();_c.clear()}};document.body.addEventListener("transitionrun",i),document.body.addEventListener("transitionend",e)}typeof document<"u"&&(document.readyState!=="loading"?xc():document.addEventListener("DOMContentLoaded",xc));var Px={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"},Bs="data-kb-top-layer",Pu,Ro=!1,Gn=[];function Tr(i){return Gn.findIndex(e=>e.node===i)}function Dx(i){return Gn[Tr(i)]}function Lx(i){return Gn[Gn.length-1].node===i}function Du(){return Gn.filter(i=>i.isPointerBlocking)}function Ix(){return[...Du()].slice(-1)[0]}function Yo(){return Du().length>0}function Lu(i){const e=Tr(Ix()?.node);return Tr(i)<e}function Ux(i){Gn.push(i)}function Nx(i){const e=Tr(i);e<0||Gn.splice(e,1)}function Fx(){for(const{node:i}of Gn)i.style.pointerEvents=Lu(i)?"none":"auto"}function Ox(i){if(Yo()&&!Ro){const e=ai(i);Pu=document.body.style.pointerEvents,e.body.style.pointerEvents="none",Ro=!0}}function Bx(i){if(Yo())return;const e=ai(i);e.body.style.pointerEvents=Pu,e.body.style.length===0&&e.body.removeAttribute("style"),Ro=!1}var Jt={layers:Gn,isTopMostLayer:Lx,hasPointerBlockingLayer:Yo,isBelowPointerBlockingLayer:Lu,addLayer:Ux,removeLayer:Nx,indexOf:Tr,find:Dx,assignPointerEventToLayers:Fx,disableBodyPointerEvents:Ox,restoreBodyPointerEvents:Bx},Ra="focusScope.autoFocusOnMount",Pa="focusScope.autoFocusOnUnmount",vc={bubbles:!1,cancelable:!0},Sc={stack:[],active(){return this.stack[0]},add(i){i!==this.active()&&this.active()?.pause(),this.stack=pc(this.stack,i),this.stack.unshift(i)},remove(i){this.stack=pc(this.stack,i),this.active()?.resume()}};function zx(i,e){const[t,n]=ft(!1),r={pause(){n(!0)},resume(){n(!1)}};let s=null;const a=g=>i.onMountAutoFocus?.(g),o=g=>i.onUnmountAutoFocus?.(g),u=()=>ai(e()),l=()=>{const g=u().createElement("span");return g.setAttribute("data-focus-trap",""),g.tabIndex=0,Object.assign(g.style,Px),g},f=()=>{const g=e();return g?wu(g,!0).filter(S=>!S.hasAttribute("data-focus-trap")):[]},d=()=>{const g=f();return g.length>0?g[0]:null},c=()=>{const g=f();return g.length>0?g[g.length-1]:null},h=()=>{const g=e();if(!g)return!1;const S=br(g);return!S||Bn(g,S)?!1:Cu(S)};Ct(()=>{const g=e();if(!g)return;Sc.add(r);const S=br(g);if(!Bn(g,S)){const p=new CustomEvent(Ra,vc);g.addEventListener(Ra,a),g.dispatchEvent(p),p.defaultPrevented||setTimeout(()=>{Nn(d()),br(g)===S&&Nn(g)},0)}At(()=>{g.removeEventListener(Ra,a),setTimeout(()=>{const p=new CustomEvent(Pa,vc);h()&&p.preventDefault(),g.addEventListener(Pa,o),g.dispatchEvent(p),p.defaultPrevented||Nn(S??u().body),g.removeEventListener(Pa,o),Sc.remove(r)},0)})}),Ct(()=>{const g=e();if(!g||!Vn(i.trapFocus)||t())return;const S=p=>{const v=p.target;v?.closest(`[${Bs}]`)||(Bn(g,v)?s=v:Nn(s))},m=p=>{const y=p.relatedTarget??br(g);y?.closest(`[${Bs}]`)||Bn(g,y)||Nn(s)};u().addEventListener("focusin",S),u().addEventListener("focusout",m),At(()=>{u().removeEventListener("focusin",S),u().removeEventListener("focusout",m)})}),Ct(()=>{const g=e();if(!g||!Vn(i.trapFocus)||t())return;const S=l();g.insertAdjacentElement("afterbegin",S);const m=l();g.insertAdjacentElement("beforeend",m);function p(y){const b=d(),C=c();y.relatedTarget===b?Nn(C):Nn(b)}S.addEventListener("focusin",p),m.addEventListener("focusin",p);const v=new MutationObserver(y=>{for(const b of y)b.previousSibling===m&&(m.remove(),g.insertAdjacentElement("beforeend",m)),b.nextSibling===S&&(S.remove(),g.insertAdjacentElement("afterbegin",S))});v.observe(g,{childList:!0,subtree:!1}),At(()=>{S.removeEventListener("focusin",p),m.removeEventListener("focusin",p),S.remove(),m.remove(),v.disconnect()})})}var Vx="data-live-announcer";function kx(i){Ct(()=>{Vn(i.isDisabled)||At(Gx(Vn(i.targets),Vn(i.root)))})}var vr=new WeakMap,an=[];function Gx(i,e=document.body){const t=new Set(i),n=new Set,r=u=>{for(const c of u.querySelectorAll(`[${Vx}], [${Bs}]`))t.add(c);const l=c=>{if(t.has(c)||c.parentElement&&n.has(c.parentElement)&&c.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(const h of t)if(c.contains(h))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},f=document.createTreeWalker(u,NodeFilter.SHOW_ELEMENT,{acceptNode:l}),d=l(u);if(d===NodeFilter.FILTER_ACCEPT&&s(u),d!==NodeFilter.FILTER_REJECT){let c=f.nextNode();for(;c!=null;)s(c),c=f.nextNode()}},s=u=>{const l=vr.get(u)??0;u.getAttribute("aria-hidden")==="true"&&l===0||(l===0&&u.setAttribute("aria-hidden","true"),n.add(u),vr.set(u,l+1))};an.length&&an[an.length-1].disconnect(),r(e);const a=new MutationObserver(u=>{for(const l of u)if(!(l.type!=="childList"||l.addedNodes.length===0)&&![...t,...n].some(f=>f.contains(l.target))){for(const f of l.removedNodes)f instanceof Element&&(t.delete(f),n.delete(f));for(const f of l.addedNodes)(f instanceof HTMLElement||f instanceof SVGElement)&&(f.dataset.liveAnnouncer==="true"||f.dataset.reactAriaTopLayer==="true")?t.add(f):f instanceof Element&&r(f)}});a.observe(e,{childList:!0,subtree:!0});const o={observe(){a.observe(e,{childList:!0,subtree:!0})},disconnect(){a.disconnect()}};return an.push(o),()=>{a.disconnect();for(const u of n){const l=vr.get(u);if(l==null)return;l===1?(u.removeAttribute("aria-hidden"),vr.delete(u)):vr.set(u,l-1)}o===an[an.length-1]?(an.pop(),an.length&&an[an.length-1].observe()):an.splice(an.indexOf(o),1)}}var Mc="interactOutside.pointerDownOutside",bc="interactOutside.focusOutside";function Hx(i,e){let t,n=Rx;const r=()=>ai(e()),s=d=>i.onPointerDownOutside?.(d),a=d=>i.onFocusOutside?.(d),o=d=>i.onInteractOutside?.(d),u=d=>{const c=d.target;return!(c instanceof Element)||c.closest(`[${Bs}]`)||!Bn(r(),c)||Bn(e(),c)?!1:!i.shouldExcludeElement?.(c)},l=d=>{function c(){const h=e(),g=d.target;if(!h||!g||!u(d))return;const S=mc([s,o]);g.addEventListener(Mc,S,{once:!0});const m=new CustomEvent(Mc,{bubbles:!1,cancelable:!0,detail:{originalEvent:d,isContextMenu:d.button===2||Mx(d)&&d.button===0}});g.dispatchEvent(m)}d.pointerType==="touch"?(r().removeEventListener("click",c),n=c,r().addEventListener("click",c,{once:!0})):c()},f=d=>{const c=e(),h=d.target;if(!c||!h||!u(d))return;const g=mc([a,o]);h.addEventListener(bc,g,{once:!0});const S=new CustomEvent(bc,{bubbles:!1,cancelable:!0,detail:{originalEvent:d,isContextMenu:!1}});h.dispatchEvent(S)};Ct(()=>{Vn(i.isDisabled)||(t=window.setTimeout(()=>{r().addEventListener("pointerdown",l,!0)},0),r().addEventListener("focusin",f,!0),At(()=>{window.clearTimeout(t),r().removeEventListener("click",n),r().removeEventListener("pointerdown",l,!0),r().removeEventListener("focusin",f,!0)}))})}function Wx(i){const e=t=>{t.key===Tu.Escape&&i.onEscapeKeyDown?.(t)};Ct(()=>{if(Vn(i.isDisabled))return;const t=i.ownerDocument?.()??ai();t.addEventListener("keydown",e),At(()=>{t.removeEventListener("keydown",e)})})}function Dr(i){const[e,t]=Hn(i,["as"]);if(!e.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return ne(td,pt(t,{get component(){return e.as}}))}var Iu=Lc();function $x(){return Dc(Iu)}function Xx(i){let e;const t=$x(),[n,r]=Hn(i,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),s=new Set([]),a=d=>{s.add(d);const c=t?.registerNestedLayer(d);return()=>{s.delete(d),c?.()}};Hx({shouldExcludeElement:d=>e?n.excludedElements?.some(c=>Bn(c(),d))||[...s].some(c=>Bn(c,d)):!1,onPointerDownOutside:d=>{!e||Jt.isBelowPointerBlockingLayer(e)||!n.bypassTopMostLayerCheck&&!Jt.isTopMostLayer(e)||(n.onPointerDownOutside?.(d),n.onInteractOutside?.(d),d.defaultPrevented||n.onDismiss?.())},onFocusOutside:d=>{n.onFocusOutside?.(d),n.onInteractOutside?.(d),d.defaultPrevented||n.onDismiss?.()}},()=>e),Wx({ownerDocument:()=>ai(e),onEscapeKeyDown:d=>{!e||!Jt.isTopMostLayer(e)||(n.onEscapeKeyDown?.(d),!d.defaultPrevented&&n.onDismiss&&(d.preventDefault(),n.onDismiss()))}}),oi(()=>{if(!e)return;Jt.addLayer({node:e,isPointerBlocking:n.disableOutsidePointerEvents,dismiss:n.onDismiss});const d=t?.registerNestedLayer(e);Jt.assignPointerEventToLayers(),Jt.disableBodyPointerEvents(e),At(()=>{e&&(Jt.removeLayer(e),d?.(),Jt.assignPointerEventToLayers(),Jt.restoreBodyPointerEvents(e))})}),Ct(nd([()=>e,()=>n.disableOutsidePointerEvents],([d,c])=>{if(!d)return;const h=Jt.find(d);h&&h.isPointerBlocking!==c&&(h.isPointerBlocking=c,Jt.assignPointerEventToLayers()),c&&Jt.disableBodyPointerEvents(d),At(()=>{Jt.restoreBodyPointerEvents(d)})},{defer:!0}));const f={registerNestedLayer:a};return ne(Iu.Provider,{value:f,get children(){return ne(Dr,pt({as:"div",ref(d){var c=Rr(h=>e=h,n.ref);typeof c=="function"&&c(d)}},r))}})}function qx(i){const[e,t]=ft(i.defaultValue?.()),n=Ki(()=>i.value?.()!==void 0),r=Ki(()=>n()?i.value?.():e());return[r,a=>{Ic(()=>{const o=hx(a,r());return Object.is(o,r())||(n()||t(o),i.onChange?.(o)),o})}]}function Yx(i){const[e,t]=qx(i);return[()=>e()??!1,t]}function jx(i={}){const[e,t]=Yx({value:()=>Vn(i.open),defaultValue:()=>!!Vn(i.defaultOpen),onChange:a=>i.onOpenChange?.(a)}),n=()=>{t(!0)},r=()=>{t(!1)};return{isOpen:e,setIsOpen:t,open:n,close:r,toggle:()=>{e()?r():n()}}}function Kx(i,e){const[t,n]=ft(yc(e?.()));return Ct(()=>{n(i()?.tagName.toLowerCase()||yc(e?.()))}),t}function yc(i){return gx(i)?i:void 0}var Zx=Object.defineProperty,Uu=(i,e)=>{for(var t in e)Zx(i,t,{get:e[t],enumerable:!0})},Jx={};Uu(Jx,{Button:()=>tv,Root:()=>Ws});var Qx=["button","color","file","image","reset","submit"];function ev(i){const e=i.tagName.toLowerCase();return e==="button"?!0:e==="input"&&i.type?Qx.indexOf(i.type)!==-1:!1}function Ws(i){let e;const t=Pr({type:"button"},i),[n,r]=Hn(t,["ref","type","disabled"]),s=Kx(()=>e,()=>"button"),a=Ki(()=>{const l=s();return l==null?!1:ev({tagName:l,type:n.type})}),o=Ki(()=>s()==="input"),u=Ki(()=>s()==="a"&&e?.getAttribute("href")!=null);return ne(Dr,pt({as:"button",ref(l){var f=Rr(d=>e=d,n.ref);typeof f=="function"&&f(l)},get type(){return Tn(()=>!!(a()||o()))()?n.type:void 0},get role(){return!a()&&!u()?"button":void 0},get tabIndex(){return!a()&&!u()&&!n.disabled?0:void 0},get disabled(){return Tn(()=>!!(a()||o()))()?n.disabled:void 0},get"aria-disabled"(){return!a()&&!o()&&n.disabled?!0:void 0},get"data-disabled"(){return n.disabled?"":void 0}},r))}var tv=Ws;function Da(i){return e=>(i(e),()=>i(void 0))}var Bt=i=>typeof i=="function"?i():i,Po=(i,e)=>{if(i.contains(e))return!0;let t=e;for(;t;){if(t===i)return!0;t=t._$host??t.parentElement}return!1},gs=new Map,nv=i=>{Ct(()=>{const e=Bt(i.style)??{},t=Bt(i.properties)??[],n={};for(const s in e)n[s]=i.element.style[s];const r=gs.get(i.key);r?r.activeCount++:gs.set(i.key,{activeCount:1,originalStyles:n,properties:t.map(s=>s.key)}),Object.assign(i.element.style,i.style);for(const s of t)i.element.style.setProperty(s.key,s.value);At(()=>{const s=gs.get(i.key);if(s){if(s.activeCount!==1){s.activeCount--;return}gs.delete(i.key);for(const[a,o]of Object.entries(s.originalStyles))i.element.style[a]=o;for(const a of s.properties)i.element.style.removeProperty(a);i.element.style.length===0&&i.element.removeAttribute("style"),i.cleanup?.()}})})},Ec=nv,iv=(i,e)=>{switch(e){case"x":return[i.clientWidth,i.scrollLeft,i.scrollWidth];case"y":return[i.clientHeight,i.scrollTop,i.scrollHeight]}},rv=(i,e)=>{const t=getComputedStyle(i),n=e==="x"?t.overflowX:t.overflowY;return n==="auto"||n==="scroll"||i.tagName==="HTML"&&n==="visible"},sv=(i,e,t)=>{const n=e==="x"&&window.getComputedStyle(i).direction==="rtl"?-1:1;let r=i,s=0,a=0,o=!1;do{const[u,l,f]=iv(r,e),d=f-u-n*l;(l!==0||d!==0)&&rv(r,e)&&(s+=d,a+=l),r===(t??document.documentElement)?o=!0:r=r._$host??r.parentElement}while(r&&!o);return[s,a]},[Tc,Ac]=ft([]),av=i=>Tc().indexOf(i)===Tc().length-1,ov=i=>{const e=pt({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},i),t=Uc();let n=[0,0],r=null,s=null;Ct(()=>{Bt(e.enabled)&&(Ac(l=>[...l,t]),At(()=>{Ac(l=>l.filter(f=>f!==t))}))}),Ct(()=>{if(!Bt(e.enabled)||!Bt(e.hideScrollbar))return;const{body:l}=document,f=window.innerWidth-l.offsetWidth;if(Bt(e.preventScrollbarShift)){const d={overflow:"hidden"},c=[];f>0&&(Bt(e.preventScrollbarShiftMode)==="padding"?d.paddingRight=`calc(${window.getComputedStyle(l).paddingRight} + ${f}px)`:d.marginRight=`calc(${window.getComputedStyle(l).marginRight} + ${f}px)`,c.push({key:"--scrollbar-width",value:`${f}px`}));const h=window.scrollY,g=window.scrollX;Ec({key:"prevent-scroll",element:l,style:d,properties:c,cleanup:()=>{Bt(e.restoreScrollPosition)&&f>0&&window.scrollTo(g,h)}})}else Ec({key:"prevent-scroll",element:l,style:{overflow:"hidden"}})}),Ct(()=>{!av(t)||!Bt(e.enabled)||(document.addEventListener("wheel",o,{passive:!1}),document.addEventListener("touchstart",a,{passive:!1}),document.addEventListener("touchmove",u,{passive:!1}),At(()=>{document.removeEventListener("wheel",o),document.removeEventListener("touchstart",a),document.removeEventListener("touchmove",u)}))});const a=l=>{n=wc(l),r=null,s=null},o=l=>{const f=l.target,d=Bt(e.element),c=lv(l),h=Math.abs(c[0])>Math.abs(c[1])?"x":"y",g=h==="x"?c[0]:c[1],S=Cc(f,h,g,d);let m;d&&Po(d,f)?m=!S:m=!0,m&&l.cancelable&&l.preventDefault()},u=l=>{const f=Bt(e.element),d=l.target;let c;if(l.touches.length===2)c=!Bt(e.allowPinchZoom);else{if(r==null||s===null){const h=wc(l).map((S,m)=>n[m]-S),g=Math.abs(h[0])>Math.abs(h[1])?"x":"y";r=g,s=g==="x"?h[0]:h[1]}if(d.type==="range")c=!1;else{const h=Cc(d,r,s,f);f&&Po(f,d)?c=!h:c=!0}}c&&l.cancelable&&l.preventDefault()}},lv=i=>[i.deltaX,i.deltaY],wc=i=>i.changedTouches[0]?[i.changedTouches[0].clientX,i.changedTouches[0].clientY]:[0,0],Cc=(i,e,t,n)=>{const r=n!==null&&Po(n,i),[s,a]=sv(i,e,r?n:void 0);return!(t>0&&Math.abs(s)<=1||t<0&&Math.abs(a)<1)},cv=ov,uv=cv,dv=i=>{const e=Ki(()=>{const a=Bt(i.element);if(a)return getComputedStyle(a)}),t=()=>e()?.animationName??"none",[n,r]=ft(Bt(i.show)?"present":"hidden");let s="none";return Ct(a=>{const o=Bt(i.show);return Ic(()=>{if(a===o)return o;const u=s,l=t();o?r("present"):l==="none"||e()?.display==="none"?r("hidden"):r(a===!0&&u!==l?"hiding":"hidden")}),o}),Ct(()=>{const a=Bt(i.element);if(!a)return;const o=l=>{l.target===a&&(s=t())},u=l=>{const d=t().includes(l.animationName);l.target===a&&d&&n()==="hiding"&&r("hidden")};a.addEventListener("animationstart",o),a.addEventListener("animationcancel",u),a.addEventListener("animationend",u),At(()=>{a.removeEventListener("animationstart",o),a.removeEventListener("animationcancel",u),a.removeEventListener("animationend",u)})}),{present:()=>n()==="present"||n()==="hiding",state:n,setState:r}},fv=dv,Rc=fv,hv={};Uu(hv,{CloseButton:()=>Fu,Content:()=>Ou,Description:()=>Bu,Dialog:()=>ei,Overlay:()=>zu,Portal:()=>Vu,Root:()=>ku,Title:()=>Gu,Trigger:()=>Hu,useDialogContext:()=>ui});var Nu=Lc();function ui(){const i=Dc(Nu);if(i===void 0)throw new Error("[kobalte]: `useDialogContext` must be used within a `Dialog` component");return i}function Fu(i){const e=ui(),[t,n]=Hn(i,["aria-label","onClick"]);return ne(Ws,pt({get"aria-label"(){return t["aria-label"]||e.translations().dismiss},onClick:s=>{Hs(s,t.onClick),e.close()}},n))}function Ou(i){let e;const t=ui(),n=Pr({id:t.generateId("content")},i),[r,s]=Hn(n,["ref","onOpenAutoFocus","onCloseAutoFocus","onPointerDownOutside","onFocusOutside","onInteractOutside"]);let a=!1,o=!1;const u=c=>{r.onPointerDownOutside?.(c),t.modal()&&c.detail.isContextMenu&&c.preventDefault()},l=c=>{r.onFocusOutside?.(c),t.modal()&&c.preventDefault()},f=c=>{r.onInteractOutside?.(c),!t.modal()&&(c.defaultPrevented||(a=!0,c.detail.originalEvent.type==="pointerdown"&&(o=!0)),Bn(t.triggerRef(),c.target)&&c.preventDefault(),c.detail.originalEvent.type==="focusin"&&o&&c.preventDefault())},d=c=>{r.onCloseAutoFocus?.(c),t.modal()?(c.preventDefault(),Nn(t.triggerRef())):(c.defaultPrevented||(a||Nn(t.triggerRef()),c.preventDefault()),a=!1,o=!1)};return kx({isDisabled:()=>!(t.isOpen()&&t.modal()),targets:()=>e?[e]:[]}),uv({element:()=>e??null,enabled:()=>t.contentPresent()&&t.preventScroll()}),zx({trapFocus:()=>t.isOpen()&&t.modal(),onMountAutoFocus:r.onOpenAutoFocus,onUnmountAutoFocus:d},()=>e),Ct(()=>At(t.registerContentId(s.id))),ne($t,{get when(){return t.contentPresent()},get children(){return ne(Xx,pt({ref(c){var h=Rr(g=>{t.setContentRef(g),e=g},r.ref);typeof h=="function"&&h(c)},role:"dialog",tabIndex:-1,get disableOutsidePointerEvents(){return Tn(()=>!!t.modal())()&&t.isOpen()},get excludedElements(){return[t.triggerRef]},get"aria-labelledby"(){return t.titleId()},get"aria-describedby"(){return t.descriptionId()},get"data-expanded"(){return t.isOpen()?"":void 0},get"data-closed"(){return t.isOpen()?void 0:""},onPointerDownOutside:u,onFocusOutside:l,onInteractOutside:f,get onDismiss(){return t.close}},s))}})}function Bu(i){const e=ui(),t=Pr({id:e.generateId("description")},i),[n,r]=Hn(t,["id"]);return Ct(()=>At(e.registerDescriptionId(n.id))),ne(Dr,pt({as:"p",get id(){return n.id}},r))}function zu(i){const e=ui(),[t,n]=Hn(i,["ref","style","onPointerDown"]),r=s=>{Hs(s,t.onPointerDown),s.target===s.currentTarget&&s.preventDefault()};return ne($t,{get when(){return e.overlayPresent()},get children(){return ne(Dr,pt({as:"div",ref(s){var a=Rr(e.setOverlayRef,t.ref);typeof a=="function"&&a(s)},get style(){return mx({"pointer-events":"auto"},t.style)},get"data-expanded"(){return e.isOpen()?"":void 0},get"data-closed"(){return e.isOpen()?void 0:""},onPointerDown:r},n))}})}function Vu(i){const e=ui();return ne($t,{get when(){return e.contentPresent()||e.overlayPresent()},get children(){return ne(id,i)}})}var Pc={dismiss:"Dismiss"};function ku(i){const e=`dialog-${Uc()}`,t=Pr({id:e,modal:!0,translations:Pc},i),[n,r]=ft(),[s,a]=ft(),[o,u]=ft(),[l,f]=ft(),[d,c]=ft(),[h,g]=ft(),S=jx({open:()=>t.open,defaultOpen:()=>t.defaultOpen,onOpenChange:b=>t.onOpenChange?.(b)}),m=()=>t.forceMount||S.isOpen(),{present:p}=Rc({show:m,element:()=>l()??null}),{present:v}=Rc({show:m,element:()=>d()??null}),y={translations:()=>t.translations??Pc,isOpen:S.isOpen,modal:()=>t.modal??!0,preventScroll:()=>t.preventScroll??y.modal(),contentId:n,titleId:s,descriptionId:o,triggerRef:h,overlayRef:l,setOverlayRef:f,contentRef:d,setContentRef:c,overlayPresent:p,contentPresent:v,close:S.close,toggle:S.toggle,setTriggerRef:g,generateId:xx(()=>t.id),registerContentId:Da(r),registerTitleId:Da(a),registerDescriptionId:Da(u)};return ne(Nu.Provider,{value:y,get children(){return t.children}})}function Gu(i){const e=ui(),t=Pr({id:e.generateId("title")},i),[n,r]=Hn(t,["id"]);return Ct(()=>At(e.registerTitleId(n.id))),ne(Dr,pt({as:"h2",get id(){return n.id}},r))}function Hu(i){const e=ui(),[t,n]=Hn(i,["ref","onClick"]);return ne(Ws,pt({ref(s){var a=Rr(e.setTriggerRef,t.ref);typeof a=="function"&&a(s)},"aria-haspopup":"dialog",get"aria-expanded"(){return e.isOpen()},get"aria-controls"(){return Tn(()=>!!e.isOpen())()?e.contentId():void 0},get"data-expanded"(){return e.isOpen()?"":void 0},get"data-closed"(){return e.isOpen()?void 0:""},onClick:s=>{Hs(s,t.onClick),e.toggle()}},n))}var ei=Object.assign(ku,{CloseButton:Fu,Content:Ou,Description:Bu,Overlay:zu,Portal:Vu,Title:Gu,Trigger:Hu}),pv=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],mv=i=>ne(Xt,pt(i,{iconNode:pv,name:"chevron-left"})),gv=mv,_v=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],xv=i=>ne(Xt,pt(i,{iconNode:_v,name:"chevron-right"})),vv=xv,Sv=Xe('<button class="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">'),Mv=Xe('<button class="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">'),bv=Xe('<div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">'),yv=Xe('<p class="text-sm text-text-muted font-mono mb-4"><span class=text-accent-primary><!$><!/>:</span> <!$><!/><!$><!/>'),Ev=Xe('<div class=mb-6><h3 class="text-sm font-medium text-text-muted uppercase tracking-wider mb-3"></h3><div class="flex flex-wrap gap-3">'),Tv=Xe('<a target=_blank rel="noopener noreferrer"class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-primary text-white font-medium text-sm hover:bg-accent-primary/90 transition-colors"><!$><!/><!$><!/>'),Av=Xe('<div class="p-6 md:p-8"><!$><!/><!$><!/><div class="relative aspect-video rounded-xl overflow-hidden mb-6 bg-surface-elevated"><img loading=lazy class="w-full h-full object-cover"><!$><!/></div><h2 class="text-2xl font-bold font-display text-text mb-2"></h2><!$><!/><p class="text-text-secondary leading-relaxed mb-6"></p><!$><!/><!$><!/>',!0,!1,!1),wv=Xe("<button>"),Cv=Xe('<span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-border text-sm text-text-secondary"><i aria-hidden=true></i><!$><!/>');function Rv(i){const{messages:e,t}=ci(),[n,r]=ft(0),s=()=>t("projects_modal.prev_image","Previous image"),a=()=>t("projects_modal.next_image","Next image"),o=c=>`${t("projects_modal.image","Image")} ${c+1}`,u=()=>(i.project?.images?.length??0)>1,l=c=>{c||r(0),i.onOpenChange(c)},f=()=>{const c=i.project?.images?.length??0;c<=1||r(h=>h===0?c-1:h-1)},d=()=>{const c=i.project?.images?.length??0;c<=1||r(h=>h===c-1?0:h+1)};return ne($t,{get when(){return i.project},children:c=>ne(ei,{get open(){return i.open},onOpenChange:l,modal:!0,get children(){return ne(ei.Portal,{get children(){return[ne(ei.Overlay,{class:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[expanded]:animate-in data-[expanded]:fade-in duration-200"}),ne(ei.Content,{class:"fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface border border-border shadow-2xl data-[expanded]:animate-in data-[expanded]:fade-in data-[expanded]:zoom-in-95 duration-200",get children(){return[ne(ei.CloseButton,{class:"absolute top-4 right-4 z-10 p-2 rounded-full bg-surface-elevated border border-border text-text-secondary hover:text-text hover:border-border-strong transition-colors",get children(){return ne(rd,{size:20})}}),(()=>{var h=$e(Av),g=h.firstChild,[S,m]=Le(g.nextSibling),p=S.nextSibling,[v,y]=Le(p.nextSibling),b=v.nextSibling,C=b.firstChild,T=C.nextSibling,[R,x]=Le(T.nextSibling),E=b.nextSibling,P=E.nextSibling,[w,N]=Le(P.nextSibling),W=w.nextSibling,X=W.nextSibling,[L,V]=Le(X.nextSibling),O=L.nextSibling,[K,Q]=Le(O.nextSibling);return ae(h,ne(ei.Title,{class:"sr-only",get children(){return c().title}}),S,m),ae(h,ne(ei.Description,{class:"sr-only",get children(){return c().description}}),v,y),ae(b,ne($t,{get when(){return u()},get children(){return[(()=>{var B=$e(Sv);return B.$$click=f,ae(B,ne(gv,{size:20})),Et(()=>St(B,"aria-label",s())),ii(),B})(),(()=>{var B=$e(Mv);return B.$$click=d,ae(B,ne(vv,{size:20})),Et(()=>St(B,"aria-label",a())),ii(),B})(),(()=>{var B=$e(bv);return ae(B,ne(cn,{get each(){return c().images},children:(q,ie)=>(()=>{var ve=$e(wv);return ve.$$click=()=>r(ie()),Et(ge=>{var be=`w-2 h-2 rounded-full transition-all ${ie()===n()?"bg-accent-secondary w-4":"bg-white/50 hover:bg-white/80"}`,k=o(ie());return be!==ge.e&&_n(ve,ge.e=be),k!==ge.t&&St(ve,"aria-label",ge.t=k),ge},{e:void 0,t:void 0}),ii(),ve})()})),B})()]}}),R,x),ae(E,()=>c().title),ae(h,ne($t,{get when(){return e()},get children(){var B=$e(yv),q=B.firstChild,ie=q.firstChild,[ve,ge]=Le(ie.nextSibling);ve.nextSibling;var be=q.nextSibling,k=be.nextSibling,[j,te]=Le(k.nextSibling),_e=j.nextSibling,[Ce,Ae]=Le(_e.nextSibling);return ae(q,()=>t("projects_modal.period"),ve,ge),ae(B,()=>c().startDate,j,te),ae(B,(()=>{var Je=Tn(()=>!!c().endDate);return()=>Je()?` - ${c().endDate}`:""})(),Ce,Ae),B}}),w,N),ae(W,()=>c().description),ae(h,ne($t,{get when(){return(c().technologies?.length??0)>0},get children(){var B=$e(Ev),q=B.firstChild,ie=q.nextSibling;return ae(q,()=>t("projects_modal.technologies")),ae(ie,ne(cn,{get each(){return c().technologies},children:ve=>(()=>{var ge=$e(Cv),be=ge.firstChild,k=be.nextSibling,[j,te]=Le(k.nextSibling);return ae(ge,()=>ve.name,j,te),Et(_e=>{var Ce=ve.name,Ae=`${ve.class} text-base`;return Ce!==_e.e&&St(ge,"title",_e.e=Ce),Ae!==_e.t&&_n(be,_e.t=Ae),_e},{e:void 0,t:void 0}),ge})()})),B}}),L,V),ae(h,ne($t,{get when(){return c().url},get children(){var B=$e(Tv),q=B.firstChild,[ie,ve]=Le(q.nextSibling),ge=ie.nextSibling,[be,k]=Le(ge.nextSibling);return ae(B,ne(Mu,{size:16}),ie,ve),ae(B,()=>t("projects_modal.view_project","Ver projeto"),be,k),Et(()=>St(B,"href",c().url)),B}}),K,Q),Et(B=>{var q=`/${c().images?.[n()]}`,ie=c().title;return q!==B.e&&St(C,"src",B.e=q),ie!==B.t&&St(C,"alt",B.t=ie),B},{e:void 0,t:void 0}),h})()]}})]}})}})})}Do(["click"]);var Pv=Xe('<section id=projects class="py-section bg-bg relative"><div class="max-w-6xl mx-auto px-6"><h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-12 text-text"><span class=text-accent-quaternary>&gt;</span> <!$><!/></h2><div class="flex flex-wrap justify-center gap-2 mb-12"><button></button><!$><!/></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">'),Dv=Xe("<button>"),Lv=Xe('<article class="group bg-surface rounded-2xl overflow-hidden border border-border hover:border-accent-secondary/50 transition-all hover:-translate-y-1 hover:shadow-glow-secondary/10 cursor-pointer"role=button tabindex=0><div class="relative aspect-video overflow-hidden bg-surface-elevated"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"loading=lazy><div class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"><span class="px-4 py-2 rounded-full border border-white text-white text-sm font-medium"></span></div></div><div class=p-5><h3 class="font-semibold text-text mb-1 group-hover:text-accent-secondary transition-colors"></h3><p class="text-xs text-text-muted font-mono mb-3"><!$><!/><!$><!/></p><p class="text-sm text-text-secondary line-clamp-2 mb-4"></p><div class="flex flex-wrap gap-2">',!0,!1,!1),Iv=Xe("<span class=text-lg><i aria-hidden=true>");function Uv(){const{messages:i,language:e,t}=ci(),[n,r]=ft("all"),[s,a]=ft(null),[o,u]=ft(!1),l=v=>{a(v),u(!0)};let f;const d=Cr(()=>f,.1);Ct(()=>{e(),a(null),u(!1)});const c=()=>i()?.projects||[],h=()=>t("basic_info.section_name.projects",""),g=()=>t("projects_filter.all","Todos"),S=()=>t("projects_filter.view_project","Ver projeto"),m=()=>{const v=new Set;return c().forEach(y=>{y.technologies?.forEach(b=>v.add(b.name))}),Array.from(v).sort()},p=()=>n()==="all"?c():c().filter(v=>v.technologies?.some(y=>y.name===n()));return[(()=>{var v=$e(Pv),y=v.firstChild,b=y.firstChild,C=b.firstChild,T=C.nextSibling,R=T.nextSibling,[x,E]=Le(R.nextSibling),P=b.nextSibling,w=P.firstChild,N=w.nextSibling,[W,X]=Le(N.nextSibling),L=P.nextSibling,V=f;return typeof V=="function"?li(V,v):f=v,ae(b,h,x,E),w.$$click=()=>r("all"),ae(w,g),ae(P,ne(cn,{get each(){return m()},children:O=>(()=>{var K=$e(Dv);return K.$$click=()=>r(O),ae(K,O),Et(()=>_n(K,`px-4 py-2 rounded-full text-sm font-medium transition-all ${n()===O?"bg-accent-primary text-bg":"bg-surface text-text-secondary border border-border hover:border-accent-primary hover:text-accent-primary"}`)),ii(),K})()}),W,X),ae(L,ne(cn,{get each(){return p()},children:(O,K)=>(()=>{var Q=$e(Lv),B=Q.firstChild,q=B.firstChild,ie=q.nextSibling,ve=ie.firstChild,ge=B.nextSibling,be=ge.firstChild,k=be.nextSibling,j=k.firstChild,[te,_e]=Le(j.nextSibling),Ce=te.nextSibling,[Ae,Je]=Le(Ce.nextSibling),ze=k.nextSibling,Qe=ze.nextSibling;return Q.$$keydown=Ne=>{(Ne.key==="Enter"||Ne.key===" ")&&(Ne.preventDefault(),l(O))},Q.$$click=()=>l(O),ae(ve,S),ae(be,()=>O.title),ae(k,()=>O.startDate,te,_e),ae(k,(()=>{var Ne=Tn(()=>!!O.endDate);return()=>Ne()?` - ${O.endDate}`:""})(),Ae,Je),ae(ze,()=>O.description),ae(Qe,ne(cn,{get each(){return O.technologies?.slice(0,4)},children:Ne=>(()=>{var Fe=$e(Iv),mt=Fe.firstChild;return Et(tt=>{var Rt=Ne.name,I=Ne.class;return Rt!==tt.e&&St(Fe,"title",tt.e=Rt),I!==tt.t&&_n(mt,tt.t=I),tt},{e:void 0,t:void 0}),Fe})()})),Et(Ne=>{var Fe=`${S()}: ${O.title}`,mt=d()?1:0,tt=d()?"translateY(0)":"translateY(20px)",Rt=`opacity 0.5s ease-out ${K()*.08}s, transform 0.5s ease-out ${K()*.08}s`,I=O.images?.[0],_t=O.title;return Fe!==Ne.e&&St(Q,"aria-label",Ne.e=Fe),mt!==Ne.t&&ct(Q,"opacity",Ne.t=mt),tt!==Ne.a&&ct(Q,"transform",Ne.a=tt),Rt!==Ne.o&&ct(Q,"transition",Ne.o=Rt),I!==Ne.i&&St(q,"src",Ne.i=I),_t!==Ne.n&&St(q,"alt",Ne.n=_t),Ne},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),ii(),Q})()})),Et(()=>_n(w,`px-4 py-2 rounded-full text-sm font-medium transition-all ${n()==="all"?"bg-accent-primary text-bg":"bg-surface text-text-secondary border border-border hover:border-accent-primary hover:text-accent-primary"}`)),ii(),v})(),ne(Rv,{get project(){return s()},get open(){return o()},onOpenChange:u})]}Do(["click","keydown"]);var Nv=Xe('<section id=contact class="py-section bg-surface relative"><div class="max-w-4xl mx-auto px-6 text-center"><h2 class="text-3xl md:text-4xl font-bold font-display mb-6 text-text"><span class=text-accent-primary>&gt;</span> <!$><!/></h2><p class="text-text-secondary mb-12 max-w-xl mx-auto"></p><div class="flex flex-wrap justify-center gap-6"style="transition:opacity 0.6s ease-out, transform 0.6s ease-out">'),Fv=Xe('<a target=_blank rel="noopener noreferrer"class="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-bg border border-border min-w-[140px] hover:border-accent-primary hover:shadow-glow-primary transition-all hover:-translate-y-1"><!$><!/><span class="text-sm font-medium text-text-secondary group-hover:text-text capitalize">');function Ov(){const{sharedData:i,t:e}=ci();let t;const n=Cr(()=>t,.3),r=()=>e("basic_info.section_name.contact",""),s=()=>e("contact_message.paragraph",""),a=()=>i()?.basic_info?.social||[];return(()=>{var o=$e(Nv),u=o.firstChild,l=u.firstChild,f=l.firstChild,d=f.nextSibling,c=d.nextSibling,[h,g]=Le(c.nextSibling),S=l.nextSibling,m=S.nextSibling,p=t;return typeof p=="function"?li(p,o):t=o,ae(l,r,h,g),ae(S,s),ae(m,()=>a().map(v=>{const y=bu(v.name);return(()=>{var b=$e(Fv),C=b.firstChild,[T,R]=Le(C.nextSibling),x=T.nextSibling;return ae(b,ne(y,{size:28,class:"text-text-secondary group-hover:text-accent-primary transition-colors"}),T,R),ae(x,()=>v.name),Et(E=>{var P=v.url,w=v.name;return P!==E.e&&St(b,"href",E.e=P),w!==E.t&&St(b,"aria-label",E.t=w),E},{e:void 0,t:void 0}),b})()})),Et(v=>{var y=n()?1:0,b=n()?"translateY(0)":"translateY(20px)";return y!==v.e&&ct(m,"opacity",v.e=y),b!==v.t&&ct(m,"transform",v.t=b),v},{e:void 0,t:void 0}),o})()}var Bv=Xe('<div class="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent"><div class="h-full bg-accent-primary origin-left shadow-glow-primary"style=transform:scaleX(0)>');function zv(){let i;return oi(()=>{const e=i;if(!e)return;const t=()=>{const n=window.scrollY,r=document.documentElement.scrollHeight-window.innerHeight,s=r>0?n/r:0;e.style.transform=`scaleX(${s})`};window.addEventListener("scroll",t,{passive:!0}),At(()=>window.removeEventListener("scroll",t))}),(()=>{var e=$e(Bv),t=e.firstChild,n=i;return typeof n=="function"?li(n,t):i=t,e})()}var Vv=Xe('<main id=main class="bg-bg min-h-screen"><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/>');function gi(){return null}function Jv(){return(()=>{var i=$e(Vv),e=i.firstChild,[t,n]=Le(e.nextSibling),r=t.nextSibling,[s,a]=Le(r.nextSibling),o=s.nextSibling,[u,l]=Le(o.nextSibling),f=u.nextSibling,[d,c]=Le(f.nextSibling),h=d.nextSibling,[g,S]=Le(h.nextSibling),m=g.nextSibling,[p,v]=Le(m.nextSibling),y=p.nextSibling,[b,C]=Le(y.nextSibling),T=b.nextSibling,[R,x]=Le(T.nextSibling),E=R.nextSibling,[P,w]=Le(E.nextSibling),N=P.nextSibling,[W,X]=Le(N.nextSibling),L=W.nextSibling,[V,O]=Le(L.nextSibling);return ae(i,ne(zv,{}),t,n),ae(i,ne(sd,{}),s,a),ae(i,ne(Qn,{fallback:gi,get children(){return ne(V0,{})}}),u,l),ae(i,ne(Qn,{fallback:gi,get children(){return ne(Z0,{})}}),d,c),ae(i,ne(Qn,{fallback:gi,get children(){return ne(ex,{})}}),g,S),ae(i,ne(Qn,{fallback:gi,get children(){return ne(rx,{})}}),p,v),ae(i,ne(Qn,{fallback:gi,get children(){return ne(dx,{})}}),b,C),ae(i,ne(Qn,{fallback:gi,get children(){return ne(Uv,{})}}),R,x),ae(i,ne(Qn,{fallback:gi,get children(){return ne(Ov,{})}}),P,w),ae(i,ne(ad,{}),W,X),ae(i,ne(od,{}),V,O),i})()}export{La as A,Ut as B,Ke as C,Fn as D,Yv as E,iu as F,Br as G,Jv as H,au as I,Mf as L,$o as M,Gt as O,yf as P,tn as S,lu as T,U as V,Wv as a,un as b,$v as c,Xv as d,dn as e,Ar as f,bf as g,k_ as h,jv as i,Zv as j,ou as k,mf as l,Hv as m,qv as n,Vs as o,ht as p,zt as q,Kv as r};
