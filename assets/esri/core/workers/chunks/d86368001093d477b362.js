self.webpackChunkRemoteClient([71],{109:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return a}));var n=r(7),o=r(24);const s="4.18",a={request:(e,t)=>Promise.resolve().then(r.bind(null,55)).then(({default:r})=>{const n=e.options||{};return n.responseType="array-buffer",n.signal=null==t?void 0:t.signal,r(e.url,n)}).then(e=>({result:{data:e.data,ssl:e.ssl},transferList:[e.data]}))};let i;function c(e){i=e}function u(e){const t=i&&i.findCredential(e);return t&&t.token?Object(o.d)(e,"token",t.token):e}Object(n.a)("host-webworker")||(Object(n.a)("edge")||Object(n.a)("trident"))&&console.warn("Deprecated browser - see http://esriurl.com/oldbrowser")},113:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(16),o=r(24);r(55);function s(e){return Object(o.w)(n.a.assetsPath,e)}},379:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(7),o=r(1),s=r(2);function a(e,t,r=!1,a){return Object(s.c)((c,u)=>{if(Object(s.m)(a))return void u(i());let l=()=>{b(),u(new Error("Unable to load "+t))},f=()=>{const t=e;b(),c(t)},d=()=>{if(!e)return;const t=e;b(),t.src="",u(i())};const b=()=>{Object(n.a)("esri-image-decode")||(e.removeEventListener("error",l),e.removeEventListener("load",f)),l=null,f=null,e=null,Object(o.g)(a)&&a.removeEventListener("abort",d),d=null,r&&URL.revokeObjectURL(t)};Object(o.g)(a)&&a.addEventListener("abort",d),Object(n.a)("esri-image-decode")?e.decode().then(f,l):(e.addEventListener("error",l),e.addEventListener("load",f))})}function i(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}},55:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(7),s=r(5),a=r(16),i=r(1),c=r(14),u=r(24),l=r(2),f=r(109),d=r(379);async function b(e,t){const s=Object(u.t)(e),d=Object(u.s)(e);d||s||(e=Object(u.A)(e));const y={url:e,requestOptions:{...Object(i.m)(t)}};let O=Object(u.k)(e);if(O){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,n;try{n=await e.before(t)}catch(e){r=j("request:interceptor",e,t)}if((n instanceof Error||n instanceof c.a)&&(r=j("request:interceptor",n,t)),r)throw e.error&&e.error(r),r;return n}}(O,y);if(null!=e)return{data:e,getHeader:g,requestOptions:y.requestOptions,url:y.url};O.after||O.error||(O=null)}if(e=y.url,"image"===(t=y.requestOptions).responseType){if(Object(o.a)("host-webworker")||Object(o.a)("host-node"))throw j("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),y)}else if(s)throw j("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),y);if("head"===t.method){if(t.body)throw j("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),y);if(s||d)throw j("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),y)}if(await async function(){Object(o.a)("host-webworker")?h||(h=await r.e(197).then(r.bind(null,506))):b._abortableFetch||(b._abortableFetch=n.a.fetch.bind(n.a))}(),h)return h.execute(e,t);const w=Object(l.d)();Object(l.p)(t,()=>w.abort());const L={controller:w,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:O,params:y,redoRequest:!1,useIdentity:m.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},k=await async function(e){let t,r;await async function(e){const t=e.params.url,r=e.params.requestOptions,o=e.controller.signal,s=r.body;let i=null,c=null,d=null;p&&"HTMLFormElement"in n.a&&(s instanceof FormData?i=s:s instanceof HTMLFormElement&&(c=s,i=new FormData(c))),"string"==typeof s&&(d=s),e.fetchOptions={cache:r.cacheBust&&!b._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:o},(i||d)&&(e.fetchOptions.body=i||d),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query&&r.query.token||i&&i.get&&i.get("token")||c&&c.elements.token);const h=Object(u.l)(t,!0);if(h&&!e.hasToken&&a.a.apiKey&&h.endsWith(".arcgis.com")&&"js.arcgis.com"!==h&&"jsdev.arcgis.com"!==h&&"jsqa.arcgis.com"!==h&&(r.query||(r.query={}),r.query.token=a.a.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!T(t)&&!Object(l.m)(o)){let n;"immediate"===r.authMode?(await E(),n=await f.b.getCredential(t,{signal:o}),e.credential=n):"no-prompt"===r.authMode?(await E(),n=await f.b.getCredential(t,{prompt:!1,signal:o}).catch(()=>{}),e.credential=n):f.b&&(n=f.b.findCredential(t)),n&&(e.credentialToken=n.token,e.useSSL=!!n.ssl)}}(e);try{do{[t,r]=await v(e)}while(!await q(e,t,r))}catch(r){const n=j("request:server",r,e.params,t);throw n.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(n),n}const o=e.params.url;if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(o)&&!e.hasToken&&!e.credentialToken&&r&&r.user&&r.user.username&&!Object(u.v)(o)){const e=Object(u.l)(o,!0);e&&m.trustedServers.push(e)}const s=e.credential;if(s&&f.b){const e=f.b.findServerInfo(s.server);let t=e&&e.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=f.b.findCredential(t,s.userId);e&&-1===f.b._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:r,getHeader:t?e=>t.headers.get(e):g,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(L);return O&&O.after&&O.after(k),k}let h;const m=a.a.request,p="FormData"in n.a,y=[499,498,403,401],O=["COM_0056","COM_0057","SB_0008"],w=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],g=()=>null;function j(e,t,r,n){let o="Error";const a={url:r.url,requestOptions:r.requestOptions,getHeader:g,ssl:!1};if(t instanceof c.a)return t.details?(t.details=Object(s.a)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=a,t;if(t){const e=n&&(e=>n.headers.get(e)),r=n&&n.status,s=t.message;s&&(o=s),e&&(a.getHeader=e),a.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,a.subCode=t.subcode,a.messageCode=t.messageCode,"string"==typeof t.details?a.messages=[t.details]:a.messages=t.details}return Object(l.l)(t)?Object(l.e)():new c.a(e,o,a)}async function E(){f.b||await Promise.all([r.e(13),r.e(35)]).then(r.bind(null,529))}function T(e){return w.some(t=>t.test(e))}async function v(e){let t=e.params.url;const r=e.params.requestOptions,n=e.fetchOptions,s=Object(u.s)(t)||Object(u.t)(t),a=r.responseType||"json",i=s?0:null!=r.timeout?r.timeout:m.timeout;let c=!1;if(!s){e.useSSL&&(t=Object(u.G)(t)),r.cacheBust&&"default"===n.cache&&(t=Object(u.d)(t,"request.preventCache",Date.now()));let s={...r.query};e.credentialToken&&(s.token=e.credentialToken);let a=Object(u.B)(s);Object(o.a)("esri-url-encodes-apostrophe")&&(a=a.replace(/'/g,"%27"));const i=t.length+1+a.length;let l;c="post"===r.method||!!r.body||i>m.maxUrlLength;const d=r.useProxy||!!Object(u.n)(t);if(d){const e=Object(u.o)(t);l=e.path,!c&&l.length+1+i>m.maxUrlLength&&(c=!0),e.query&&(s={...e.query,...s})}if("HEAD"===n.method&&(c||d)){if(c){if(i>m.maxUrlLength)throw j("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw j("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(d)throw j("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(c?(n.method="POST",r.body?t=Object(u.e)(t,s):(n.body=Object(u.B)(s),n.headers["Content-Type"]="application/x-www-form-urlencoded")):t=Object(u.e)(t,s),d&&(e.useProxy=!0,t=`${l}?${t}`),s.token&&p&&n.body instanceof FormData){const e=n.body;e.set?e.set("token",s.token):e.append("token",s.token)}if(r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(Object(u.v)(t))e.withCredentials=!0;else if(f.b){const r=f.b.findServerInfo(t);r&&r.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(n.credentials="include")}let d,h,y=0,O=!1;i>0&&(y=setTimeout(()=>{O=!0,e.controller.abort()},i));try{if("image"!==r.responseType||"default"!==n.cache||"GET"!==n.method||c||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!s&&!e.useProxy&&m.proxyUrl&&!function(e){const t=Object(u.l)(e);return!t||t.endsWith(".arcgis.com")||-1!==b._corsServers.indexOf(t)||Object(u.v)(t)}(t)){if(d=await b._abortableFetch(t,n),e.useProxy||function(e){if(Object(u.s)(e)||Object(u.t)(e))return;const t=Object(u.l)(e);t&&-1===b._corsServers.indexOf(t)&&b._corsServers.push(t)}(t),d.ok&&"HEAD"!==n.method){switch(a){case"array-buffer":h=await d.arrayBuffer();break;case"blob":case"image":h=await d.blob();break;default:h=await d.text()}if(y&&(clearTimeout(y),y=0),"json"===a||"xml"===a||"document"===a)if(h)switch(a){case"json":h=JSON.parse(h);break;case"xml":h=L(h,"application/xml");break;case"document":h=L(h,"text/html")}else h=null;if(h){if("array-buffer"===a||"blob"===a){const e=d.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(e)&&h["blob"===a?"size":"byteLength"]<=750)try{const e=await new Response(h).json();e.error&&(h=e)}catch{}}"image"===a&&h instanceof Blob&&(h=await k(URL.createObjectURL(h),e,!0))}}}else h=await k(t,e)}catch(n){if("AbortError"===n.name){if(O)throw new Error("Timeout exceeded");throw Object(l.e)("Request canceled")}if(!(!d&&n instanceof TypeError&&m.proxyUrl)||r.body||"post"===r.method||"head"===r.method||e.useProxy)throw n;e.redoRequest=!0,Object(u.c)({proxyUrl:m.proxyUrl,urlPrefix:Object(u.D)(Object(u.H)(t).path)})}finally{y&&clearTimeout(y)}return[d,h]}function L(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function q(e,t,r){var n;if(e.redoRequest)return e.redoRequest=!1,!1;if(!t)return!0;if(!t.ok)throw new Error(`Unable to load ${t.url} status: ${t.status}`);let o,a,i,c;r&&r.error&&(o=Object(s.d)(new Error,r.error)),o&&(a=Number(o.code),i=o.hasOwnProperty("subcode")?Number(o.subcode):null,c=o.messageCode,c=c&&c.toUpperCase());const u=e.params.requestOptions.authMode,l=String(null==(n=e.params.requestOptions.query)?void 0:n.token);if(403===a&&(4===i||o.message&&o.message.toLowerCase().indexOf("ssl")>-1&&-1===o.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(e.useIdentity&&("no-prompt"!==u||498===a)&&-1!==y.indexOf(a)&&!T(e.params.url)&&!l.startsWith("AAPK")&&(403!==a||-1===O.indexOf(c)&&(null==i||2===i&&e.credentialToken))){await E();try{const t=await f.b.getCredential(e.params.url,{error:j("request:server",o,e.params),prompt:"no-prompt"!==u,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===u)return e.credential=null,e.credentialToken=null,!1;o=t}}if(o)throw o;return!0}function k(e,t,r=!1){const n=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.src=e,Object(d.a)(o,e,r,n)}b._abortableFetch=null,b._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"],t.default=b},676:function(e,t,r){"use strict";r.r(t),r.d(t,"destroyContext",(function(){return p})),r.d(t,"dracoDecompressPointCloudData",(function(){return d})),r.d(t,"filterObbsForModifications",(function(){return b})),r.d(t,"filterObbsForModificationsSync",(function(){return g})),r.d(t,"initialize",(function(){return T})),r.d(t,"interpretObbModificationResults",(function(){return w})),r.d(t,"process",(function(){return f})),r.d(t,"setLegacySchema",(function(){return m})),r.d(t,"setModifications",(function(){return h})),r.d(t,"setModificationsSync",(function(){return y})),r.d(t,"test",(function(){return v}));var n=r(13),o=r(1),s=r(2),a=r(113);function i(e){return Object(a.a)("esri/libs/i3s/"+e)}let c,u,l;async function f(e){await T();const t=[e.geometryBuffer];return{result:O(e,t),transferList:t}}async function d(e){var t;await T();const r=[e.geometryBuffer],{geometryBuffer:o}=e,s=o.byteLength,a=l._malloc(s),i=new Uint8Array(l.HEAPU8.buffer,a,s);i.set(new Uint8Array(o));const c=l.dracoDecompressPointCloudData(a,i.byteLength);if(l._free(a),c.error.length>0)throw"i3s.wasm: "+c.error;const u=(null==(t=c.featureIds)?void 0:t.length)>0?Object(n.m)(c.featureIds):null,f=Object(n.m)(c.positions);return u&&r.push(u.buffer),r.push(f.buffer),{result:{positions:f,featureIds:u},transferList:r}}async function b(e){await T(),g(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function h(e){await T(),y(e)}async function m(e){await T(),l.setLegacySchema(e.context,e.jsonSchema)}function p(e){j(e)}function y(e){const t=e.modifications,r=l._malloc(8*t.length),n=new Float64Array(l.HEAPU8.buffer,r,t.length);for(let e=0;e<t.length;++e)n[e]=t[e];l.setModifications(e.context,r,t.length,e.isGeodetic),l._free(r)}function O(e,t){if(!l)return null;const{context:r,localOrigin:s,globalTrafo:a,mbs:i,obb:c,elevationOffset:u,geometryBuffer:f,geometryDescriptor:d,indexToVertexProjector:b,vertexToRenderProjector:h}=e,m=l._malloc(f.byteLength),p=l._malloc(33*Float64Array.BYTES_PER_ELEMENT),y=new Uint8Array(l.HEAPU8.buffer,m,f.byteLength);y.set(new Uint8Array(f));const O=new Float64Array(l.HEAPU8.buffer,p,33);E(O,s);let w=O.byteOffset+3*O.BYTES_PER_ELEMENT,g=new Float64Array(O.buffer,w);E(g,a),w+=16*O.BYTES_PER_ELEMENT,g=new Float64Array(O.buffer,w),E(g,i),w+=4*O.BYTES_PER_ELEMENT,Object(o.g)(c)&&(g=new Float64Array(O.buffer,w),E(g,c.center),w+=3*O.BYTES_PER_ELEMENT,g=new Float64Array(O.buffer,w),E(g,c.halfSize),w+=3*O.BYTES_PER_ELEMENT,g=new Float64Array(O.buffer,w),E(g,c.quaternion));const j=d,T={isDraco:!1,isLegacy:!1,color:e.layouts.some(e=>e.some(e=>"color"===e.name)),normal:e.needNormals&&e.layouts.some(e=>e.some(e=>"normalCompressed"===e.name)),uv0:e.layouts.some(e=>e.some(e=>"uv0"===e.name)),uvRegion:e.layouts.some(e=>e.some(e=>"uvRegion"===e.name)),featureIndex:j.featureIndex},v=l.process(r,!!e.obb,m,y.byteLength,j,T,p,u,b,h,e.normalReferenceFrame);if(l._free(p),l._free(m),v.error.length>0)throw"i3s.wasm: "+v.error;if(v.discarded)return null;const L=v.componentOffsets.length>0?Object(n.m)(v.componentOffsets):null,q=v.featureIds.length>0?Object(n.m)(v.featureIds):null,k=Object(n.m)(v.interleavedVertedData).buffer,S=1===v.indicesType?Object(n.m)(new Uint16Array(v.indices.buffer,v.indices.byteOffset,v.indices.byteLength/2)):Object(n.m)(new Uint32Array(v.indices.buffer,v.indices.byteOffset,v.indices.byteLength/4)),x=Object(n.m)(v.positions),_=1===v.positionIndicesType?Object(n.m)(new Uint16Array(v.positionIndices.buffer,v.positionIndices.byteOffset,v.positionIndices.byteLength/2)):Object(n.m)(new Uint32Array(v.positionIndices.buffer,v.positionIndices.byteOffset,v.positionIndices.byteLength/4)),C={layout:e.layouts[0],interleavedVertexData:k,indices:S,hasColors:v.hasColors,hasModifications:v.hasModifications,positionData:{data:x,indices:_}};return q&&t.push(q.buffer),L&&t.push(L.buffer),t.push(k),t.push(S.buffer),t.push(x.buffer),t.push(_.buffer),{componentOffsets:L,featureIds:q,transformedGeometry:C,obb:v.obb}}function w(e){return 0===e?0:1===e?1:2===e?2:3}function g(e){const{context:t,buffer:r}=e,n=l._malloc(r.byteLength),o=r.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(l.HEAPU8.buffer,n,o),a=new Float64Array(r);s.set(a),l.filterOBBs(t,n,o),a.set(s),l._free(n)}function j(e){l&&l.destroy(e)}function E(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}function T(){return l?Object(s.s)():(u||(u=(c||(c=Object(s.c)(e=>r.e(79).then(r.bind(null,549)).then((function(e){return e.i})).then(({default:t})=>{const r=t({locateFile:i,onRuntimeInitialized:()=>e(r)});delete r.then})).catch(e=>Object(s.r)(e))),c).then(e=>{l=e,u=null})),u)}const v={transform:O,destroy:j}}});