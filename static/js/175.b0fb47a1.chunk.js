(this["webpackJsonptesting-ant-cra"]=this["webpackJsonptesting-ant-cra"]||[]).push([[175],{1204:function(e,r,t){"use strict";t.r(r);var a=t(4),n=t(5),i=t(6),o=t(7),c=t(0),s=t(1),l=(t(13),t(16),t(12),t(9)),u=t(8),p=t.n(u),b=t(11),y=t(14),f=t(60),O=t(884),j=t(367),v=t(945),d=t(105),B=(t(90),t(114)),g=t(24),h=t(10),m=t(34),P=t(44),k=t(885),A=t(82),S=t(55),R=t(120),w=t(129);function J(e){return e.features.map((function(r){var t=P.a.fromJSON(e.spatialReference),a=B.a.fromJSON(r);return Object(h.r)(a.geometry).spatialReference=t,a}))}function N(e){return e.features.map((function(r){return r.geometry.spatialReference=e.spatialReference,Object(A.a)(r.geometry)}))}var C=function(e){Object(i.a)(t,e);var r=Object(o.a)(t);function t(e){var n;return Object(a.a)(this,t),(n=r.call(this,e)).facilities=null,n.messages=null,n.pointBarriers=null,n.polylineBarriers=null,n.polygonBarriers=null,n.serviceAreaPolylines=null,n.serviceAreaPolygons=null,n}return Object(n.a)(t,[{key:"readFacilities",value:function(e){return N(e)}},{key:"readPointBarriers",value:function(e,r){return N(r.barriers)}},{key:"readPolylineBarriers",value:function(e){return N(e)}},{key:"readPolygonBarriers",value:function(e){return N(e)}},{key:"readIncidents",value:function(e,r){return J(r.saPolylines)}},{key:"readServiceAreaPolygons",value:function(e,r){return J(r.saPolygons)}}]),t}(g.a);Object(c.a)([Object(s.b)({type:[S.a]})],C.prototype,"facilities",void 0),Object(c.a)([Object(m.a)("facilities")],C.prototype,"readFacilities",null),Object(c.a)([Object(s.b)({type:[k.a]})],C.prototype,"messages",void 0),Object(c.a)([Object(s.b)({type:[S.a]})],C.prototype,"pointBarriers",void 0),Object(c.a)([Object(m.a)("pointBarriers",["barriers"])],C.prototype,"readPointBarriers",null),Object(c.a)([Object(s.b)({type:[R.a]})],C.prototype,"polylineBarriers",void 0),Object(c.a)([Object(m.a)("polylineBarriers")],C.prototype,"readPolylineBarriers",null),Object(c.a)([Object(s.b)({type:[w.a]})],C.prototype,"polygonBarriers",void 0),Object(c.a)([Object(m.a)("polygonBarriers")],C.prototype,"readPolygonBarriers",null),Object(c.a)([Object(s.b)({type:[B.a]})],C.prototype,"serviceAreaPolylines",void 0),Object(c.a)([Object(m.a)("serviceAreaPolylines",["saPolylines"])],C.prototype,"readIncidents",null),Object(c.a)([Object(s.b)({type:[B.a]})],C.prototype,"serviceAreaPolygons",void 0),Object(c.a)([Object(m.a)("serviceAreaPolygons",["saPolygons"])],C.prototype,"readServiceAreaPolygons",null);var q=C=Object(c.a)([Object(l.a)("esri.rest.support.ServiceAreaSolveResult")],C),F=Object(O.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});function I(){return(I=Object(y.a)(p.a.mark((function e(r,t,a){var n,i,o,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],i=[],o={},c={},s=Object(d.c)(r),e.abrupt("return",(t.facilities&&t.facilities.features&&Object(v.a)(t.facilities.features,i,"facilities.features",o),t.pointBarriers&&t.pointBarriers.features&&Object(v.a)(t.pointBarriers.features,i,"pointBarriers.features",o),t.polylineBarriers&&t.polylineBarriers.features&&Object(v.a)(t.polylineBarriers.features,i,"polylineBarriers.features",o),t.polygonBarriers&&t.polygonBarriers.features&&Object(v.a)(t.polygonBarriers.features,i,"polygonBarriers.features",o),Object(j.a)(i).then((function(e){for(var r in o){var t=o[r];n.push(r),c[r]=e.slice(t[0],t[1])}return Object(v.e)(c,n)?Object(v.c)(s.path).catch((function(){return{dontCheck:!0}})):Promise.resolve({dontCheck:!0})})).then((function(e){("dontCheck"in e?e.dontCheck:e.hasZ)||Object(v.b)(c,n);var r=function(e){c[e].forEach((function(r,a){t.get(e)[a].geometry=r}))};for(var i in c)r(i);var o={query:Object(b.a)(Object(b.a)({},s.query),{},{f:"json"},F.toQueryParams(t))};return a&&(o=Object(b.a)(Object(b.a)({},a),o)),Object(f.default)("".concat(s.path,"/solveServiceArea"),o)})).then((function(e){return q.fromJSON(e.data)}))));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(e){Object(i.a)(t,e);var r=Object(o.a)(t);function t(e){var n;return Object(a.a)(this,t),(n=r.call(this,e)).url=null,n}return Object(n.a)(t,[{key:"solve",value:function(e,r){return function(e,r,t){return I.apply(this,arguments)}(this.url,e,r)}}]),t}(t(475).a);Object(c.a)([Object(s.b)()],x.prototype,"url",void 0);var E=x=Object(c.a)([Object(l.a)("esri.tasks.ServiceAreaTask")],x);r.default=E}}]);
//# sourceMappingURL=175.b0fb47a1.chunk.js.map