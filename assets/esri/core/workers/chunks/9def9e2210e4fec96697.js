(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[799],{29079:(e,t,r)=>{"use strict";r.d(t,{d:()=>y,s:()=>f,t:()=>d});var s=r(19153);function f(e,t,r){return e[0]=t,e[1]=r,e}function n(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e}function u(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e}function i(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e}function y(e,t){const r=t[0]-e[0],s=t[1]-e[1];return Math.sqrt(r*r+s*s)}function c(e,t){const r=t[0]-e[0],s=t[1]-e[1];return r*r+s*s}function h(e){const t=e[0],r=e[1];return Math.sqrt(t*t+r*r)}function o(e){const t=e[0],r=e[1];return t*t+r*r}function d(e,t,r){const s=t[0],f=t[1];return e[0]=r[0]*s+r[2]*f+r[4],e[1]=r[1]*s+r[3]*f+r[5],e}const a=h,l=n,p=u,b=i,B=y,T=c,E=o;Object.freeze({__proto__:null,copy:function(e,t){return e[0]=t[0],e[1]=t[1],e},set:f,add:function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e},subtract:n,multiply:u,divide:i,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e},min:function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e},max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e},scale:function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e},scaleAndAdd:function(e,t,r,s){return e[0]=t[0]+r[0]*s,e[1]=t[1]+r[1]*s,e},distance:y,squaredDistance:c,length:h,squaredLength:o,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e},normalize:function(e,t){const r=t[0],s=t[1];let f=r*r+s*s;return f>0&&(f=1/Math.sqrt(f),e[0]=t[0]*f,e[1]=t[1]*f),e},dot:function(e,t){return e[0]*t[0]+e[1]*t[1]},cross:function(e,t,r){const s=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=s,e},lerp:function(e,t,r,s){const f=t[0],n=t[1];return e[0]=f+s*(r[0]-f),e[1]=n+s*(r[1]-n),e},random:function(e,t){t=t||1;const r=2*(0,s.R)()*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e},transformMat2:function(e,t,r){const s=t[0],f=t[1];return e[0]=r[0]*s+r[2]*f,e[1]=r[1]*s+r[3]*f,e},transformMat2d:d,transformMat3:function(e,t,r){const s=t[0],f=t[1];return e[0]=r[0]*s+r[3]*f+r[6],e[1]=r[1]*s+r[4]*f+r[7],e},transformMat4:function(e,t,r){const s=t[0],f=t[1];return e[0]=r[0]*s+r[4]*f+r[12],e[1]=r[1]*s+r[5]*f+r[13],e},rotate:function(e,t,r,s){const f=t[0]-r[0],n=t[1]-r[1],u=Math.sin(s),i=Math.cos(s);return e[0]=f*i-n*u+r[0],e[1]=f*u+n*i+r[1],e},angle:function(e,t){const r=e[0],s=e[1],f=t[0],n=t[1];let u=r*r+s*s;u>0&&(u=1/Math.sqrt(u));let i=f*f+n*n;i>0&&(i=1/Math.sqrt(i));const y=(r*f+s*n)*u*i;return y>1?0:y<-1?Math.PI:Math.acos(y)},str:function(e){return"vec2("+e[0]+", "+e[1]+")"},exactEquals:function(e,t){return e[0]===t[0]&&e[1]===t[1]},equals:function(e,t){const r=e[0],f=e[1],n=t[0],u=t[1];return Math.abs(r-n)<=s.E*Math.max(1,Math.abs(r),Math.abs(n))&&Math.abs(f-u)<=s.E*Math.max(1,Math.abs(f),Math.abs(u))},len:a,sub:l,mul:p,div:b,dist:B,sqrDist:T,sqrLen:E})},326:(e,t,r)=>{"use strict";r.d(t,{a:()=>u,b:()=>h,c:()=>f,d:()=>b,e:()=>a,f:()=>l,g:()=>T,h:()=>E,l:()=>B,n:()=>p,s:()=>n});var s=r(19153);function f(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function n(e,t,r,s,f){return e[0]=t,e[1]=r,e[2]=s,e[3]=f,e}function u(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function i(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function y(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e}function c(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e}function h(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function o(e,t){const r=t[0]-e[0],s=t[1]-e[1],f=t[2]-e[2],n=t[3]-e[3];return Math.sqrt(r*r+s*s+f*f+n*n)}function d(e,t){const r=t[0]-e[0],s=t[1]-e[1],f=t[2]-e[2],n=t[3]-e[3];return r*r+s*s+f*f+n*n}function a(e){const t=e[0],r=e[1],s=e[2],f=e[3];return Math.sqrt(t*t+r*r+s*s+f*f)}function l(e){const t=e[0],r=e[1],s=e[2],f=e[3];return t*t+r*r+s*s+f*f}function p(e,t){const r=t[0],s=t[1],f=t[2],n=t[3];let u=r*r+s*s+f*f+n*n;return u>0&&(u=1/Math.sqrt(u),e[0]=r*u,e[1]=s*u,e[2]=f*u,e[3]=n*u),e}function b(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function B(e,t,r,s){const f=t[0],n=t[1],u=t[2],i=t[3];return e[0]=f+s*(r[0]-f),e[1]=n+s*(r[1]-n),e[2]=u+s*(r[2]-u),e[3]=i+s*(r[3]-i),e}function T(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function E(e,t){const r=e[0],f=e[1],n=e[2],u=e[3],i=t[0],y=t[1],c=t[2],h=t[3];return Math.abs(r-i)<=s.E*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(f-y)<=s.E*Math.max(1,Math.abs(f),Math.abs(y))&&Math.abs(n-c)<=s.E*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(u-h)<=s.E*Math.max(1,Math.abs(u),Math.abs(h))}const m=i,M=y,A=c,O=o,S=d,g=a,L=l;Object.freeze({__proto__:null,copy:f,set:n,add:u,subtract:i,multiply:y,divide:c,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},min:function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e},max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:h,scaleAndAdd:function(e,t,r,s){return e[0]=t[0]+r[0]*s,e[1]=t[1]+r[1]*s,e[2]=t[2]+r[2]*s,e[3]=t[3]+r[3]*s,e},distance:o,squaredDistance:d,length:a,squaredLength:l,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},normalize:p,dot:b,lerp:B,random:function(e,t){let r,f,n,u,i,y;t=t||1;do{r=2*(0,s.R)()-1,f=2*(0,s.R)()-1,i=r*r+f*f}while(i>=1);do{n=2*(0,s.R)()-1,u=2*(0,s.R)()-1,y=n*n+u*u}while(y>=1);const c=Math.sqrt((1-i)/y);return e[0]=t*r,e[1]=t*f,e[2]=t*n*c,e[3]=t*u*c,e},transformMat4:function(e,t,r){const s=t[0],f=t[1],n=t[2],u=t[3];return e[0]=r[0]*s+r[4]*f+r[8]*n+r[12]*u,e[1]=r[1]*s+r[5]*f+r[9]*n+r[13]*u,e[2]=r[2]*s+r[6]*f+r[10]*n+r[14]*u,e[3]=r[3]*s+r[7]*f+r[11]*n+r[15]*u,e},transformQuat:function(e,t,r){const s=t[0],f=t[1],n=t[2],u=r[0],i=r[1],y=r[2],c=r[3],h=c*s+i*n-y*f,o=c*f+y*s-u*n,d=c*n+u*f-i*s,a=-u*s-i*f-y*n;return e[0]=h*c+a*-u+o*-y-d*-i,e[1]=o*c+a*-i+d*-u-h*-y,e[2]=d*c+a*-y+h*-i-o*-u,e[3]=t[3],e},str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},exactEquals:T,equals:E,sub:m,mul:M,div:A,dist:O,sqrDist:S,len:g,sqrLen:L})},50799:(e,t,r)=>{"use strict";r.d(t,{ly:()=>d,oS:()=>m,o7:()=>V,Jj:()=>j,Hz:()=>v,gK:()=>b,ey:()=>B,bj:()=>T,O1:()=>E,av:()=>_,Nu:()=>P,D_:()=>S,Eu:()=>a,q6:()=>M,or:()=>z,wA:()=>G,Vs:()=>F,TS:()=>x,qt:()=>N,xA:()=>g,ct:()=>l,fP:()=>A,n1:()=>k,PP:()=>H,P_:()=>I,mw:()=>C,G5:()=>Y,ne:()=>L,ek:()=>p,Cd:()=>O,zO:()=>D,TN:()=>J,ir:()=>U,v6:()=>R,hu:()=>q,mc:()=>w});class s{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=9;const n=this.TypedArrayConstructor;void 0===s&&(s=9*n.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,u):new n(t,u,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let n=e*this.typedBufferStride,u=r*t.typedBufferStride;for(let e=0;e<9;++e)s[n++]=f[u++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=9;class f{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=16;const n=this.TypedArrayConstructor;void 0===s&&(s=16*n.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,u):new n(t,u,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let n=e*this.typedBufferStride,u=r*t.typedBufferStride;for(let e=0;e<16;++e)s[n++]=f[u++]}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=16;class n{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=1;const n=this.TypedArrayConstructor;void 0===s&&(s=n.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,u):new n(t,u,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=1;var u=r(29079);class i{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=2;const n=this.TypedArrayConstructor;void 0===s&&(s=2*n.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,u):new n(t,u,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,u.s)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let n=e*this.typedBufferStride,u=r*t.typedBufferStride;s[n++]=f[u++],s[n]=f[u]}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=2;var y=r(10188);class c{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=3;const n=this.TypedArrayConstructor;void 0===s&&(s=3*n.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,u):new n(t,u,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,y.s)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=s}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let n=e*this.typedBufferStride,u=r*t.typedBufferStride;s[n++]=f[u++],s[n++]=f[u++],s[n]=f[u]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=3;var h=r(326);class o{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=4;const n=this.TypedArrayConstructor;void 0===s&&(s=4*n.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,u):new n(t,u,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,h.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s,f){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=s,this.typedBuffer[e]=f}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let n=e*this.typedBufferStride,u=r*t.typedBufferStride;s[n++]=f[u++],s[n++]=f[u++],s[n++]=f[u++],s[n]=f[u]}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=4;class d extends n{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f32";class a extends i{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(a,e,t)}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f32";class l extends c{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(l,e,t)}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class p extends o{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class b extends s{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f32";class B extends s{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f64";class T extends f{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f32";class E extends f{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class m extends n{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class M extends i{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="f64";class A extends c{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class O extends o{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="f64";class S extends n{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class g extends i{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="u8";class L extends c{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class w extends o{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class _ extends n{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u16";class x extends i{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class C extends c{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class R extends o{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u16";class P extends n{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u32";class N extends i{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class Y extends c{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="u32";class q extends o{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="u32";class v extends n{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="i8";class F extends i{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="i8";class I extends c{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i8";class U extends o{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i8";class V extends n{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i16";class z extends i{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class k extends c{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class D extends o{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i16";class j extends n{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i32";class G extends i{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class H extends c{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32";class J extends o{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(J,e,t)}static fromTypedArray(e,t){return new J(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}J.ElementType="i32"}}]);