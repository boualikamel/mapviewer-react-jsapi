(this["webpackJsonptesting-ant-cra"]=this["webpackJsonptesting-ant-cra"]||[]).push([[160],{977:function(e,t,r){"use strict";r.r(t);var o=r(8),a=r.n(o),i=r(14),n=r(11),l=r(4),c=r(5),s=r(6),p=r(7),u=r(0),b=r(88),y=r(60),j=(r(61),r(10)),O=r(237),d=r(25),v=r(32),f=r(1),S=(r(13),r(16),r(12),r(34)),h=r(9),m=r(166),g=r(239),k=r(297),C=r(296),R=r(298),w=r(238),x=r(106),F=r(93),M=r(115),G=r(249),J=r(156),L=r(139),_=["atom","xml"],E={base:F.a,key:"type",typeMap:{"simple-line":M.a},errorContext:"symbol"},P={base:F.a,key:"type",typeMap:{"picture-marker":G.a,"simple-marker":J.a},errorContext:"symbol"},T={base:F.a,key:"type",typeMap:{"simple-fill":L.a},errorContext:"symbol"},A=function(e){Object(s.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(l.a)(this,r);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).description=null,e.legendEnabled=!0,e.lineSymbol=null,e.pointSymbol=null,e.polygonSymbol=null,e.operationalLayerType="GeoRSS",e.outSpatialReference=null,e.url=null,e.type="geo-rss",e}return Object(c.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(n.a)({url:e},t):e}},{key:"title",get:function(){var e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(v.k)(this.url,_)||"GeoRSS":e||""},set:function(e){this._set("title",e)}},{key:"readFeatureCollections",value:function(e,t){return t.featureCollection.layers.forEach((function(e){var t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline&&-1!==t.outline.style.indexOf("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers}},{key:"load",value:function(e){var t=this,r=Object(j.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(d.u).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"_fetchService",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.default)(b.a.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:t});case 2:r=e.sent,o=r.data,this.read(o,{origin:"service"});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(Object(g.a)(Object(R.a)(Object(k.a)(Object(C.a)(Object(w.a)(Object(O.a)(m.a)))))));Object(u.a)([Object(f.b)()],A.prototype,"description",void 0),Object(u.a)([Object(f.b)({json:{origins:{service:{read:{source:"name",reader:function(e){return e||void 0}}}}}})],A.prototype,"title",null),Object(u.a)([Object(f.b)()],A.prototype,"featureCollections",void 0),Object(u.a)([Object(S.a)("service","featureCollections",["featureCollection.layers"])],A.prototype,"readFeatureCollections",null),Object(u.a)([Object(f.b)(x.c)],A.prototype,"id",void 0),Object(u.a)([Object(f.b)(x.e)],A.prototype,"legendEnabled",void 0),Object(u.a)([Object(f.b)({types:E,json:{write:!0}})],A.prototype,"lineSymbol",void 0),Object(u.a)([Object(f.b)({type:["show","hide"]})],A.prototype,"listMode",void 0),Object(u.a)([Object(f.b)({types:P,json:{write:!0}})],A.prototype,"pointSymbol",void 0),Object(u.a)([Object(f.b)({types:T,json:{write:!0}})],A.prototype,"polygonSymbol",void 0),Object(u.a)([Object(f.b)({type:["GeoRSS"]})],A.prototype,"operationalLayerType",void 0),Object(u.a)([Object(f.b)()],A.prototype,"outSpatialReference",void 0),Object(u.a)([Object(f.b)(x.n)],A.prototype,"url",void 0),Object(u.a)([Object(f.b)({readOnly:!0,json:{read:!1},value:"geo-rss"})],A.prototype,"type",void 0);var N=A=Object(u.a)([Object(h.a)("esri.layers.GeoRSSLayer")],A);t.default=N}}]);
//# sourceMappingURL=160.789f0dcb.chunk.js.map