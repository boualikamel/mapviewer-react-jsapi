(this["webpackJsonpjsapi-create-react-app"]=this["webpackJsonpjsapi-create-react-app"]||[]).push([[6],{641:function(t,e,i){"use strict";i.d(e,"a",(function(){return U})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return c})),i.d(e,"e",(function(){return h})),i.d(e,"f",(function(){return o})),i.d(e,"g",(function(){return l})),i.d(e,"h",(function(){return u})),i.d(e,"i",(function(){return d})),i.d(e,"j",(function(){return m})),i.d(e,"k",(function(){return p})),i.d(e,"l",(function(){return g})),i.d(e,"m",(function(){return v})),i.d(e,"n",(function(){return f}));var n=i(644);const s=function(t){return t&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0};function l(t,e){if(!e||!s(t))return t;const i=t.pixels.length;return e&&e.some((t=>t>=i))||1===i&&1===e.length&&0===e[0]?t:i!==e.length||e.some(((t,e)=>t!==e))?new n.a({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((e=>t.pixels[e])),statistics:t.statistics&&e.map((e=>t.statistics[e]))}):t}function r(t){if(!t)return;const e=t.colormap;if(!e||0===e.length)return;const i=e.sort(((t,e)=>t[0]-e[0]));let n=0;i[0][0]<0&&(n=i[0][0]);const s=Math.max(256,i[i.length-1][0]-n+1),l=new Uint8Array(4*s),r=[];let a,o=0,h=0;const c=5===i[0].length;if(s>65536)return i.forEach((t=>{r[t[0]-n]=c?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:r,offset:n,alphaSpecified:c};if(t.fillUnspecified)for(a=i[h],o=a[0]-n;o<s;o++)l[4*o]=a[1],l[4*o+1]=a[2],l[4*o+2]=a[3],l[4*o+3]=c?a[4]:255,o===a[0]-n&&(a=h===i.length-1?a:i[++h]);else for(o=0;o<i.length;o++)a=i[o],h=4*(a[0]-n),l[h]=a[1],l[h+1]=a[2],l[h+2]=a[3],l[h+3]=c?a[4]:255;return{indexedColormap:l,offset:n,alphaSpecified:c}}function a(t,e){if(!s(t))return t;if(!e&&(e.indexedColormap||e.indexed2DColormap))return t;const i=t.clone(),n=i.pixels;let l=i.mask;const r=i.width*i.height;if(1!==n.length)return t;const{indexedColormap:a,indexed2DColormap:o,offset:h,alphaSpecified:c}=e,f=a.length-1;let u=0;const p=n[0],x=new Uint8Array(p.length),m=new Uint8Array(p.length),d=new Uint8Array(p.length);let g,y=0;if(a)if(l)for(u=0;u<r;u++)l[u]&&(y=4*(p[u]-h),y<h||y>f?l[u]=0:(x[u]=a[y],m[u]=a[y+1],d[u]=a[y+2],l[u]=a[y+3]));else{for(l=new Uint8Array(r),u=0;u<r;u++)y=4*(p[u]-h),y<h||y>f?l[u]=0:(x[u]=a[y],m[u]=a[y+1],d[u]=a[y+2],l[u]=a[y+3]);i.mask=l}else if(l)for(u=0;u<r;u++)l[u]&&(g=o[p[u]],x[u]=g[0],m[u]=g[1],d[u]=g[2],l[u]=g[3]);else{for(l=new Uint8Array(r),u=0;u<r;u++)g=o[p[u]],x[u]=g[0],m[u]=g[1],d[u]=g[2],l[u]=g[3];i.mask=l}return i.pixels=[x,m,d],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=c,i}function o(t){if(!s(t))return null;t.statistics||t.updateStatistics();const{pixels:e,mask:i,pixelType:n,statistics:l}=t,r=t.width*t.height,a=e.length;let o,h,c,f,u;const p=[],x=[];let m,d,g,y,w,k,A,M,b,v;const U=256;for(f=0;f<a;f++){if(m=new Uint32Array(U),g=e[f],"u8"===n)if(o=-.5,h=255.5,i)for(u=0;u<r;u++)i[u]&&m[g[u]]++;else for(u=0;u<r;u++)m[g[u]]++;else{if(o=l[f].minValue,h=l[f].maxValue,c=(h-o)/U,d=new Uint32Array(257),i)for(u=0;u<r;u++)i[u]&&d[Math.floor((g[u]-o)/c)]++;else for(u=0;u<r;u++)d[Math.floor((g[u]-o)/c)]++;for(u=0;u<255;u++)m[u]=d[u];m[255]=d[255]+d[256]}for(p.push({min:o,max:h,size:U,counts:m}),y=0,w=0,M=0,u=0;u<U;u++)y+=m[u],w+=u*m[u];for(b=w/y,u=0;u<U;u++)M+=m[u]*Math.pow(u-b,2);v=Math.sqrt(M/(y-1)),c=(h-o)/U,k=(b+.5)*c+o,A=v*c,x.push({min:o,max:h,avg:k,stddev:A})}return{statistics:x,histograms:p}}function h(t){const e=[];for(let i=0;i<t.length;i++){const{min:n,max:s,size:l,counts:r}=t[i];let a=0,o=0;for(let t=0;t<l;t++)a+=r[t],o+=t*r[t];const h=o/a;let c=0;for(let t=0;t<l;t++)c+=r[t]*Math.pow(t-h,2);const f=(s-n)/l,u=(h+.5)*f+n,p=Math.sqrt(c/(a-1))*f;e.push({min:n,max:s,avg:u,stddev:p})}return e}function c(t){const{minCutOff:e,maxCutOff:i,gamma:n,pixelType:s}=t,l=t.outMin||0,r=t.outMax||255;if(-1===["u8","u16","s8","s16"].indexOf(s))return null;const a=e.length;let o,h,c=0;"s8"===s?c=-127:"s16"===s&&(c=-32767);let f=256;["u16","s16"].indexOf(s)>-1&&(f=65536);const u=[],p=[],x=r-l;for(o=0;o<a;o++)p[o]=i[o]-e[o],u[o]=x/(i[o]-e[o]);const m=n&&n.length>=a,d=[];if(m)for(o=0;o<a;o++)n[o]>1?n[o]>2?d[o]=6.5+Math.pow(n[o]-2,2.5):d[o]=6.5+100*Math.pow(2-n[o],4):d[o]=1;let g;const y=[];let w,k,A;if(m)for(o=0;o<a;o++){for(A=[],h=0;h<f;h++)w=h+c,g=(w-e[o])/p[o],k=1,n[o]>1&&(k-=Math.pow(1/x,g*d[o])),w<i[o]&&w>e[o]?A[h]=Math.floor(k*x*Math.pow(g,1/n[o]))+l:w>=i[o]?A[h]=r:A[h]=l;y[o]=A}else for(o=0;o<a;o++){for(A=[],h=0;h<f;h++)w=h+c,w<=e[o]?A[h]=l:w>=i[o]?A[h]=r:A[h]=Math.floor((w-e[o])/p[o]*x)+l;y[o]=A}if(null!=t.contrastOffset){const e=function(t,e){const i=Math.min(Math.max(t,-100),100),n=Math.min(Math.max(e,-100),100),s=255;let l,r;const a=new Uint8Array(256);for(l=0;l<256;l++)i>0&&i<100?r=(200*l-25500+510*n)/(2*(100-i))+128:i<=0&&i>-100?r=(200*l-25500+510*n)*(100+i)/2e4+128:100===i?(r=200*l-25500+256*(100-i)+510*n,r=r>0?s:0):-100===i&&(r=128),a[l]=r>s?s:r<0?0:r;return a}(t.contrastOffset,t.brightnessOffset);for(o=0;o<a;o++)for(A=y[o],h=0;h<f;h++)A[h]=e[A[h]]}return{lut:y,offset:c}}function f(t,e){if(!s(t))return null;const i=t.clone(),{pixels:n,mask:l}=i,{minCutOff:r,maxCutOff:a,gamma:o}=e,h=e.outMin||0,c=e.outMax||255,f=i.width*i.height,u=n.length;let p,x,m,d,g;const y=c-h,w=[],k=[];for(p=0;p<u;p++)k[p]=a[p]-r[p],w[p]=y/(a[p]-r[p]);const A=o&&o.length>=u,M=[];if(A)for(p=0;p<u;p++)o[p]>1?o[p]>2?M[p]=6.5+Math.pow(o[p]-2,2.5):M[p]=6.5+100*Math.pow(2-o[p],4):M[p]=1;if(A)if(null!=l){for(x=0;x<f;x++)if(l[x])for(p=0;p<u;p++)m=n[p][x],g=(m-r[p])/k[p],d=1,o[p]>1&&(d-=Math.pow(1/y,g*M[p])),m<a[p]&&m>r[p]?n[p][x]=Math.floor(d*y*Math.pow(g,1/o[p]))+h:m>=a[p]?n[p][x]=c:n[p][x]=h}else for(x=0;x<f;x++)for(p=0;p<u;p++)m=n[p][x],g=(m-r[p])/k[p],d=1,o[p]>1&&(d-=Math.pow(1/y,g*M[p])),m<a[p]&&m>r[p]?n[p][x]=Math.floor(d*y*Math.pow(g,1/o[p]))+h:m>=a[p]?n[p][x]=c:n[p][x]=h;else if(null!=l){for(x=0;x<f;x++)if(l[x])for(p=0;p<u;p++)m=n[p][x],m<a[p]&&m>r[p]?n[p][x]=Math.floor((m-r[p])/k[p]*y)+h:m>=a[p]?n[p][x]=c:n[p][x]=h}else for(x=0;x<f;x++)for(p=0;p<u;p++)m=n[p][x],m<a[p]&&m>r[p]?n[p][x]=Math.floor((m-r[p])/k[p]*y)+h:m>=a[p]?n[p][x]=c:n[p][x]=h;return i.pixelType="u8",i.updateStatistics(),i}function u(t,e){if(!s(t))return null;const{pixels:i,mask:l}=t,r=t.width*t.height,a=i.length;let o=e.lut;const{offset:h}=e;let c,f;o&&1===o[0].length&&(o=i.map((()=>o)));const u=[];let p,x,m;if(h)if(null==l)for(c=0;c<a;c++){for(p=i[c],x=o[c],m=new Uint8Array(r),f=0;f<r;f++)m[f]=x[p[f]-h];u.push(m)}else for(c=0;c<a;c++){for(p=i[c],x=o[c],m=new Uint8Array(r),f=0;f<r;f++)l[f]&&(m[f]=x[p[f]-h]);u.push(m)}else if(null==l)for(c=0;c<a;c++){for(p=i[c],x=o[c],m=new Uint8Array(r),f=0;f<r;f++)m[f]=x[p[f]];u.push(m)}else for(c=0;c<a;c++){for(p=i[c],x=o[c],m=new Uint8Array(r),f=0;f<r;f++)l[f]&&(m[f]=x[p[f]]);u.push(m)}const d=new n.a({width:t.width,height:t.height,pixels:u,mask:l,pixelType:"u8"});return d.updateStatistics(),d}function p(t,e){if(!s(t))return null;const i=t.clone(),{pixels:n}=i,l=i.width*i.height,r=e.length,a=Math.floor(r/2),o=e[Math.floor(a)],h=n[0];let c,f,u,p,x,m,d=!1;const g=new Uint8Array(l),y=new Uint8Array(l),w=new Uint8Array(l);let k=i.mask;const A=4===e[0].mappedColor.length;for(k||(k=new Uint8Array(l),k.fill(A?255:1),i.mask=k),x=0;x<l;x++)if(k[x]){for(c=h[x],d=!1,m=a,f=o,u=0,p=r-1;p-u>1;){if(c===f.value){d=!0;break}c>f.value?u=m:p=m,m=Math.floor((u+p)/2),f=e[Math.floor(m)]}d||(c===e[u].value?(f=e[u],d=!0):c===e[p].value?(f=e[p],d=!0):c<e[u].value?(d=!1,f=null):c>e[u].value&&(c<e[p].value?(f=e[u],d=!0):p===r-1?(d=!1,f=null):(f=e[p],d=!0))),d?(g[x]=f.mappedColor[0],y[x]=f.mappedColor[1],w[x]=f.mappedColor[2],k[x]=f.mappedColor[3]):g[x]=y[x]=w[x]=k[x]=0}return i.pixels=[g,y,w],i.mask=k,i.pixelType="u8",i.maskIsAlpha=A,i}function x(t,e,i,n,s,l,r,a){return{xmin:s<=i*t?0:s<i*t+t?s-i*t:t,ymin:l<=n*e?0:l<n*e+e?l-n*e:e,xmax:s+r<=i*t?0:s+r<i*t+t?s+r-i*t:t,ymax:l+a<=n*e?0:l+a<n*e+e?l+a-n*e:e}}function m(t,e){if(!t||0===t.length)return null;const i=t.filter((t=>t.pixelBlock))[0];if(!i)return null;const n=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,s=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,l=.01*Math.min(n,s),r=t.sort(((t,e)=>Math.abs(t.extent.ymax-e.extent.ymax)>l?e.extent.ymax-t.extent.ymax:Math.abs(t.extent.xmin-e.extent.xmin)>l?t.extent.xmin-e.extent.xmin:0)),a=Math.min.apply(null,r.map((t=>t.extent.xmin))),o=Math.min.apply(null,r.map((t=>t.extent.ymin))),h=Math.max.apply(null,r.map((t=>t.extent.xmax))),c=Math.max.apply(null,r.map((t=>t.extent.ymax))),f={x:Math.round((e.xmin-a)/n),y:Math.round((c-e.ymax)/s)},u={width:Math.round((h-a)/n),height:Math.round((c-o)/s)},p={width:Math.round((e.xmax-e.xmin)/n),height:Math.round((e.ymax-e.ymin)/s)};return Math.round(u.width/i.pixelBlock.width)*Math.round(u.height/i.pixelBlock.height)!==r.length||f.x<0||f.y<0||u.width<p.width||u.height<p.height?null:{extent:e,pixelBlock:d(r.map((t=>t.pixelBlock)),u,f,p)}}function d(t,e,i,l){const r=t.filter((t=>s(t)))[0];if(null==r)return null;const a=l?l.width:e.width,o=l?l.height:e.height,h=r.width,c=r.height,f=e.width/h,u=e.height/c,p=i?i.x:0,m=i?i.y:0,d=r.pixelType,g=n.a.getPixelArrayConstructor(d),y=r.pixels.length,w=[];let k,A,M,b,v,U,B,T,j,C,O,P,F;for(U=0;U<y;U++){for(A=new g(a*o),B=0;B<u;B++)for(T=0;T<f;T++)if(M=t[B*f+T],M)for(k=M.pixels[U],O=x(h,c,T,B,p,m,a,o),j=O.ymin;j<O.ymax;j++)for(b=(B*c+j-m)*a+(T*h-p),v=j*h,C=O.xmin;C<O.xmax;C++)A[b+C]=k[v+C];w.push(A)}if(t.some((t=>null==t||t.mask&&t.mask.length>0)))for(P=new Uint8Array(a*o),B=0;B<u;B++)for(T=0;T<f;T++)if(M=t[B*f+T],F=M?M.mask:null,O=x(h,c,T,B,p,m,a,o),F)for(j=O.ymin;j<O.ymax;j++)for(b=(B*c+j-m)*a+(T*h-p),v=j*h,C=O.xmin;C<O.xmax;C++)P[b+C]=F[v+C];else if(M)for(j=O.ymin;j<O.ymax;j++)for(b=(B*c+j-m)*a+(T*h-p),v=j*h,C=O.xmin;C<O.xmax;C++)P[b+C]=1;else for(j=O.ymin;j<O.ymax;j++)for(b=(B*c+j-m)*a+(T*h-p),v=j*h,C=O.xmin;C<O.xmax;C++)P[b+C]=0;const G=new n.a({width:a,height:o,pixels:w,pixelType:d,mask:P});return G.updateStatistics(),G}function g(t,e,i){if(!s(t))return null;const{width:n,height:l}=t,r=e.x,a=e.y,o=i.width+r,h=i.height+a;if(r<0||a<0||o>n||h>l)return t;if(0===r&&0===a&&o===n&&h===l)return t;t.mask||(t.mask=new Uint8Array(n*l));const c=t.mask;for(let s=0;s<l;s++){const t=s*n;for(let e=0;e<n;e++)c[t+e]=s<a||s>=h||e<r||e>=o?0:1}return t.updateStatistics(),t}function y(t){if(!s(t))return null;const e=t.clone(),{width:i,height:n,pixels:l,mask:r}=t,a=l[0],o=e.pixels[0];for(let s=2;s<n-1;s++){const t=new Map;for(let n=s-2;n<s+2;n++)for(let e=0;e<4;e++){const s=n*i+e;A(t,a[s],r?r[s]:1)}o[s*i]=w(t),o[s*i+1]=o[s*i+2]=o[s*i];let e=3;for(;e<i-1;e++){let n=(s-2)*i+e+1;A(t,a[n],r?r[n]:1),n=(s-1)*i+e+1,A(t,a[n],r?r[n]:1),n=s*i+e+1,A(t,a[n],r?r[n]:1),n=(s+1)*i+e+1,A(t,a[n],r?r[n]:1),n=(s-2)*i+e-3,k(t,a[n],r?r[n]:1),n=(s-1)*i+e-3,k(t,a[n],r?r[n]:1),n=s*i+e-3,k(t,a[n],r?r[n]:1),n=(s+1)*i+e-3,k(t,a[n],r?r[n]:1),o[s*i+e]=w(t)}o[s*i+e+1]=o[s*i+e]}for(let s=0;s<i;s++)o[s]=o[i+s]=o[2*i+s],o[(n-1)*i+s]=o[(n-2)*i+s];return e.updateStatistics(),e}function w(t){if(0===t.size)return 0;let e=0,i=-1,n=0;const s=t.keys();let l=s.next();for(;!l.done;)n=t.get(l.value),n>e&&(i=l.value,e=n),l=s.next();return i}function k(t,e,i){if(0===i)return;const n=t.get(e);1===n?t.delete(e):t.set(e,n-1)}function A(t,e,i){0!==i&&t.set(e,t.has(e)?t.get(e)+1:1)}function M(t,e,i){let{x:l,y:r}=e;const{width:a,height:o}=i;if(0===l&&0===r&&o===t.height&&a===t.width)return t;const{width:h,height:c}=t,f=Math.max(0,r),u=Math.max(0,l),p=Math.min(l+a,h),x=Math.min(r+o,c);if(p<0||x<0||!s(t))return null;l=Math.max(0,-l),r=Math.max(0,-r);const{pixels:m,mask:d}=t,g=a*o,y=m.length,w=[];for(let s=0;s<y;s++){const e=m[s],i=n.a.createEmptyBand(t.pixelType,g);for(let t=f;t<x;t++){const n=t*h;let s=(t+r-f)*a+l;for(let t=u;t<p;t++)i[s++]=e[n+t]}w.push(i)}const k=new Uint8Array(g);for(let n=f;n<x;n++){const t=n*h;let e=(n+r-f)*a+l;for(let i=u;i<p;i++)k[e++]=d?d[t+i]:1}const A=new n.a({width:i.width,height:i.height,pixelType:t.pixelType,pixels:w,mask:k});return A.updateStatistics(),A}function b(t,e=!0){if(!s(t))return null;const{pixels:i,width:l,height:r,mask:a,pixelType:o}=t,h=[],c=Math.round(l/2),f=Math.round(r/2),u=r-1,p=l-1;for(let s=0;s<i.length;s++){const t=i[s],a=n.a.createEmptyBand(o,c*f);let x=0;for(let i=0;i<r;i+=2)for(let n=0;n<l;n+=2){const s=t[i*l+n];if(e){const e=n===p?s:t[i*l+n+1],r=i===u?s:t[i*l+n+l],o=n===p?r:i===u?e:t[i*l+n+l+1];a[x++]=(s+e+r+o)/4}else a[x++]=s}h.push(a)}let x=null;if(a){x=new Uint8Array(c*f);let t=0;for(let i=0;i<r;i+=2)for(let n=0;n<l;n+=2){const s=a[i*l+n];if(e){const e=n===p?s:a[i*l+n+1],r=i===u?s:a[i*l+n+l],o=n===p?r:i===u?e:a[i*l+n+l+1];x[t++]=s*e*r*o?1:0}else x[t++]=s}}return new n.a({width:c,height:f,pixelType:o,pixels:h,mask:x})}function v(t,e,i){if(!s(t))return null;const{width:n,height:l}=e;let{width:r,height:a}=t;const o=new Map,h={x:0,y:0},c=null==i?1:1+i;let f=t;for(let s=0;s<c;s++){const t=Math.ceil(r/n),i=Math.ceil(a/l);for(let r=0;r<i;r++){h.y=r*l;for(let i=0;i<t;i++){h.x=i*n;const t=M(f,h,e);o.set(`${s}/${r}/${i}`,t)}}s<c-1&&(f=b(f)),r=Math.round(r/2),a=Math.round(a/2)}return o}function U(t,e,i,l,r="nearest"){if(!s(t))return null;"majority"===r&&(t=y(t));const{pixels:a,mask:o,pixelType:h}=t,c=t.width,f=t.height,u=n.a.getPixelArrayConstructor(h),p=a.length,{width:x,height:m}=e,d=l.cols,g=l.rows,w=Math.ceil(x/d),k=Math.ceil(m/g);let A,M,b,v,U,B,T,j=!1;for(let n=0;n<i.length;n+=3)-1===i[n]&&-1===i[n+1]&&-1===i[n+2]&&(j=!0);const C=new Float32Array(x*m),O=new Float32Array(x*m);let P,F,G=0;const I="majority"===r?0:.5;for(let n=0;n<k;n++)for(let t=0;t<w;t++){A=12*(n*w+t),M=i[A],b=i[A+1],v=i[A+2],U=i[A+3],B=i[A+4],T=i[A+5];for(let e=0;e<g;e++){G=(n*g+e)*x+t*d,F=(e+.5)/g;for(let t=0;t<e;t++)P=(t+.5)/d,C[G+t]=Math.round((M*P+b*F+v)*c-I),O[G+t]=Math.round((U*P+B*F+T)*f-I)}A+=6,M=i[A],b=i[A+1],v=i[A+2],U=i[A+3],B=i[A+4],T=i[A+5];for(let e=0;e<g;e++){G=(n*g+e)*x+t*d,F=(e+.5)/g;for(let t=e;t<d;t++)P=(t+.5)/d,C[G+t]=Math.round((M*P+b*F+v)*c-I),O[G+t]=Math.round((U*P+B*F+T)*f-I)}}const R=(t,e)=>{for(let i=0;i<m;i++){A=i*x;for(let i=0;i<x;i++)C[A]<0||O[A]<0?t[A]=0:t[A]=e[C[A]+O[A]*c],A++}},S=[];let V;for(let n=0;n<p;n++)V=new u(x*m),R(V,a[n]),S.push(V);const _=new n.a({width:x,height:m,pixelType:h,pixels:S});if(o)_.mask=new Uint8Array(x*m),R(_.mask,o);else if(j){_.mask=new Uint8Array(x*m);for(let t=0;t<x*m;t++)_.mask[t]=C[t]<0||O[t]<0?0:1}return _.updateStatistics(),_}},644:function(t,e,i){"use strict";var n,s=i(0),l=(i(7),i(14)),r=i(2),a=i(6),o=i(1),h=i(42),c=i(3),f=i(13),u=(i(5),i(11),i(12),i(17));const p=a.a.getLogger("esri.layers.support.PixelBlock");let x=n=class extends u.a{constructor(t){super(t),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.pixels=null,this.statistics=null}static createEmptyBand(t,e){return new(n.getPixelArrayConstructor(t))(e)}static getPixelArrayConstructor(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"u32":e=Uint32Array;break;case"f32":e=Float32Array;break;case"f64":e=Float64Array;break;case"c64":case"c128":case"unknown":e=Float32Array}return e}castPixelType(t){if(!t)return"f32";let e=t.toLowerCase();return["u1","u2","u4"].indexOf(e)>-1?e="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(e)&&(e="f32"),e}getPlaneCount(){return this.pixels&&this.pixels.length}addData(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new f.a("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})}getAsRGBA(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}getAsRGBAFloat(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}updateStatistics(){this.statistics=this.pixels.map((t=>this._calculateBandStatistics(t,this.mask)));const t=this.mask;let e=0;if(t)for(let i=0;i<t.length;i++)t[i]&&e++;else e=this.width*this.height;this.validPixelCount=e}clamp(t){if(!t||"f64"===t||"f32"===t)return;let e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}const[i,s]=e,l=this.pixels,r=this.width*this.height,a=l.length;let o,h,c;const f=[];for(let u=0;u<a;u++){c=n.createEmptyBand(t,r),o=l[u];for(let t=0;t<r;t++)h=o[t],c[t]=h>s?s:h<i?i:h;f.push(c)}this.pixels=f,this.pixelType=t}extractBands(t){if(Object(r.h)(t)||0===t.length||null==this.pixels||0===this.pixels.length)return this;const e=this.pixels.length,i=t.some((t=>t>=this.pixels.length)),s=e===t.length&&!t.some(((t,e)=>t!==e));return i||s?this:new n({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((t=>this.pixels[t])),statistics:this.statistics&&t.map((t=>this.statistics[t]))})}clone(){const t=new n({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let e;this.mask&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0));const i=n.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const n=this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=n?this.pixels[e].slice(0,this.pixels[e].length):new i(this.pixels[e])}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=Object(l.a)(this.statistics[e]);return t}_fillFrom8Bit(t){const{mask:e,maskIsAlpha:i,pixels:n}=this;if(!t||!n||!n.length)return void p.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let s,l,r,a;s=l=r=n[0],n.length>=3?(l=n[1],r=n[2]):2===n.length&&(l=n[1]);const o=new Uint32Array(t),h=this.width*this.height;if(s.length===h)if(e&&e.length===h)if(i)for(a=0;a<h;a++)e[a]&&(o[a]=e[a]<<24|r[a]<<16|l[a]<<8|s[a]);else for(a=0;a<h;a++)e[a]&&(o[a]=255<<24|r[a]<<16|l[a]<<8|s[a]);else for(a=0;a<h;a++)o[a]=255<<24|r[a]<<16|l[a]<<8|s[a];else p.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(t){const{pixels:e,mask:i,statistics:n}=this;if(!t||!e||!e.length)return void p.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const s=this.pixelType;let l=1,r=0,a=1;if(n&&n.length>0)r=n.map((t=>t.minValue)).reduce(((t,e)=>Math.min(t,e))),a=n.map((t=>t.maxValue-t.minValue)).reduce(((t,e)=>Math.max(t,e))),l=255/a;else{let t=255;"s8"===s?(r=-128,t=127):"u16"===s?t=65535:"s16"===s?(r=-32768,t=32767):"u32"===s?t=4294967295:"s32"===s?(r=-2147483648,t=2147483647):"f32"===s?(r=-34e38,t=34e38):"f64"===s&&(r=-Number.MAX_VALUE,t=Number.MAX_VALUE),l=255/(t-r)}const o=new Uint32Array(t),h=this.width*this.height;let c,f,u,x,m;if(c=f=u=e[0],c.length!==h)return p.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(f=e[1],e.length>=3&&(u=e[2]),i&&i.length===h)for(x=0;x<h;x++)i[x]&&(o[x]=255<<24|(u[x]-r)*l<<16|(f[x]-r)*l<<8|(c[x]-r)*l);else for(x=0;x<h;x++)o[x]=255<<24|(u[x]-r)*l<<16|(f[x]-r)*l<<8|(c[x]-r)*l;else if(i&&i.length===h)for(x=0;x<h;x++)m=(c[x]-r)*l,i[x]&&(o[x]=255<<24|m<<16|m<<8|m);else for(x=0;x<h;x++)m=(c[x]-r)*l,o[x]=255<<24|m<<16|m<<8|m}_fillFrom32Bit(t){const{pixels:e,mask:i}=this;if(!t||!e||!e.length)return p.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let n,s,l,r;n=s=l=e[0],e.length>=3?(s=e[1],l=e[2]):2===e.length&&(s=e[1]);const a=this.width*this.height;if(n.length!==a)return p.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let o=0;if(i&&i.length===a)for(r=0;r<a;r++)t[o++]=n[r],t[o++]=s[r],t[o++]=l[r],t[o++]=1&i[r];else for(r=0;r<a;r++)t[o++]=n[r],t[o++]=s[r],t[o++]=l[r],t[o++]=1}_calculateBandStatistics(t,e){let i=1/0,n=-1/0;const s=t.length;let l,r=0;if(e)for(l=0;l<s;l++)e[l]&&(r=t[l],i=r<i?r:i,n=r>n?r:n);else for(l=0;l<s;l++)r=t[l],i=r<i?r:i,n=r>n?r:n;return{minValue:i,maxValue:n}}};Object(s.a)([Object(o.b)({json:{write:!0}})],x.prototype,"width",void 0),Object(s.a)([Object(o.b)({json:{write:!0}})],x.prototype,"height",void 0),Object(s.a)([Object(o.b)({json:{write:!0}})],x.prototype,"pixelType",void 0),Object(s.a)([Object(h.a)("pixelType")],x.prototype,"castPixelType",null),Object(s.a)([Object(o.b)({json:{write:!0}})],x.prototype,"validPixelCount",void 0),Object(s.a)([Object(o.b)({json:{write:!0}})],x.prototype,"mask",void 0),Object(s.a)([Object(o.b)({json:{write:!0}})],x.prototype,"maskIsAlpha",void 0),Object(s.a)([Object(o.b)({json:{write:!0}})],x.prototype,"pixels",void 0),Object(s.a)([Object(o.b)({json:{write:!0}})],x.prototype,"statistics",void 0),x=n=Object(s.a)([Object(c.a)("esri.layers.support.PixelBlock")],x);var m=x;e.a=m}}]);