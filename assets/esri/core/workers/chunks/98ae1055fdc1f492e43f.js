self.webpackChunkRemoteClient([8],{283:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return u})),r.d(t,"contentToBlob",(function(){return f})),r.d(t,"fetchResources",(function(){return c})),r.d(t,"getSiblingOfSameType",(function(){return m})),r.d(t,"getSiblingOfSameTypeI",(function(){return h})),r.d(t,"removeAllResources",(function(){return l})),r.d(t,"removeResource",(function(){return i})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return p}));var n=r(1),a=r(14),o=r(24),s=r(55);async function c(e,t={},r){await e.load(r);const a=Object(o.w)(e.itemUrl,"resources"),{start:s=1,num:c=10,sortOrder:u="asc",sortField:i="created"}=t,l={query:{start:s,num:c,sortOrder:u,sortField:i},signal:Object(n.e)(r,"signal")},d=await e.portal._request(a,l);return{total:d.total,nextStart:d.nextStart,resources:d.resources.map(({created:t,size:r,resource:n})=>({created:new Date(t),size:r,resource:e.resourceFromPath(n)}))}}async function u(e,t,r,s){if(!e.hasPath())throw new a.a(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");await e.portalItem.load(s);const c=Object(o.w)(e.portalItem.userItemUrl,"add"===t?"addResources":"updateResources"),[u,i]=d(e.path),l=await f(r),p=new FormData;return u&&"."!==u&&p.append("resourcesPrefix",u),p.append("fileName",i),p.append("file",l,i),p.append("f","json"),Object(n.g)(s)&&s.access&&p.append("access",s.access),await e.portalItem.portal._request(c,{method:"post",body:p,signal:Object(n.e)(s,"signal")}),e}async function i(e,t,r){if(!t.hasPath())throw new a.a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const s=Object(o.w)(e.userItemUrl,"removeResources");await e.portal._request(s,{method:"post",query:{resource:t.path},signal:Object(n.e)(r,"signal")}),t.portalItem=null}async function l(e,t){await e.load(t);const r=Object(o.w)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:Object(n.e)(t,"signal")})}function d(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e){const[t,r]=function(e){const t=Object(o.m)(e);return Object(n.f)(t)?[e,""]:[e.slice(0,e.length-t.length-1),"."+t]}(e),[a,s]=d(t);return[a,s,r]}async function f(e){return e instanceof Blob?e:(await Object(s.default)(e.url,{responseType:"blob"})).data}function m(e,t){if(!e.hasPath())return null;const[r,,n]=p(e.path);return e.portalItem.resourceFromPath(Object(o.w)(r,t+n))}function h(e,t){if(!e.hasPath())return null;const[r,,n]=p(e.path);return e.portalItem.resourceFromPath(Object(o.w)(r,t+n))}}});