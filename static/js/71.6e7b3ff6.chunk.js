(this["webpackJsonpjsapi-create-react-app"]=this["webpackJsonpjsapi-create-react-app"]||[]).push([[71],{703:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return O}));var s=r(14),l=r(74),i=r(5),a=r(30),o=r(267),n=r(198),u=r(91),b=r(47),c=r(268),y=r(240),p=r(132);const f={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(e){const t=e.folders||[],r=t.slice(),l=new Map,i=new Map,a=new Map,o=new Map,n=new Map,u={esriGeometryPoint:i,esriGeometryPolyline:a,esriGeometryPolygon:o};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const t=Object(s.a)(e);t.featureSet.features=[];const r=e.featureSet.geometryType;l.set(r,t);const n=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?j(i,n,e.featureSet.features):"esriGeometryPolyline"===r?j(a,n,e.featureSet.features):"esriGeometryPolygon"===r&&j(o,n,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{n.set(e.id,e)})),t.forEach((t=>{t.networkLinkIds.forEach((s=>{const l=function(e,t,r){const s=function(e,t){let r;return t.some((t=>t.id===e&&(r=t,!0))),r}(e,r);return s&&(s.parentFolderId=t,s.networkLink=s),s}(s,t.id,e.networkLinks);l&&r.push(l)}))})),r.forEach((e=>{e.featureInfos&&(e.points=Object(s.a)(l.get("esriGeometryPoint")),e.polylines=Object(s.a)(l.get("esriGeometryPolyline")),e.polygons=Object(s.a)(l.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map((t=>{switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const r=u[t.type].get(t.id);r&&e[f[t.type]].featureSet.features.push(r);break}case"GroundOverlay":{const r=n.get(t.id);r&&e.mapImages.push(r);break}}})),e.fullExtent=v([e]))}));const b=v(r);return{folders:t,sublayers:r,extent:b}}function h(e,t,r,s){const a=u.b&&u.b.findCredential(e);e=Object(i.e)(e,{token:a&&a.token});const o=l.a.kmlServiceUrl;return Object(b.default)(o,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:s})}function O(e,t,r=null,s=[]){const l=[],i={},a=t.sublayers,o=t.folders.map((e=>e.id));return a.forEach((t=>{const a=new e;if(r?a.read(t,r):a.read(t),s.length&&o.indexOf(a.id)>-1&&(a.visible=-1!==s.indexOf(a.id)),i[t.id]=a,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=i[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(a)}else l.unshift(a)})),l}function j(e,t,r){r.forEach((r=>{e.set(r.attributes[t],r)}))}async function m(e){const t=y.default.fromJSON(e.featureSet).features,r=e.layerDefinition,s=Object(c.a)(r.drawingInfo.renderer),l=n.a.fromJSON(e.popupInfo),i=[];for(const a of t){const e=await s.getSymbolAsync(a);a.symbol=e,a.popupTemplate=l,a.visible=!0,i.push(a)}return i}function v(e){const t=Object(p.b)(),r=Object(p.b)(p.a);for(const s of e){if(s.polygons&&s.polygons.featureSet&&s.polygons.featureSet.features)for(const e of s.polygons.featureSet.features)Object(o.b)(t,e.geometry),Object(p.e)(r,t);if(s.polylines&&s.polylines.featureSet&&s.polylines.featureSet.features)for(const e of s.polylines.featureSet.features)Object(o.b)(t,e.geometry),Object(p.e)(r,t);if(s.points&&s.points.featureSet&&s.points.featureSet.features)for(const e of s.points.featureSet.features)Object(o.b)(t,e.geometry),Object(p.e)(r,t);if(s.mapImages)for(const e of s.mapImages)Object(o.b)(t,e.extent),Object(p.e)(r,t)}return Object(p.d)(r,p.a)?null:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:a.a.WGS84}}},733:function(e,t,r){"use strict";r.r(t);var s,l=r(0),i=(r(7),r(2)),a=(r(6),r(10)),o=r(1),n=r(21),u=r(3),b=r(23),c=r(5),y=(r(11),r(12),r(9)),p=r(30),f=r(46),d=(r(69),r(27)),h=r(181),O=r(148),j=r(165),m=r(106),v=r(196),g=r(242),S=r(195),w=r(287),E=r(241),k=r(703),x=r(42),_=r(17),I=r(70),G=r(100),L=r(19);let P=s=class extends(I.a.EventedMixin(Object(_.b)(G.a))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){Object(L.i)(this,"networkLink").then((()=>Object(L.k)(this,"visible"))).then((()=>this.load()))}load(e){if(!this.networkLink)return;const t=Object(i.i)(e)?e.signal:null,r=this._fetchService(this._get("networkLink").href,t).then((e=>{const t=Object(k.a)(e.sublayers);this.fullExtent=f.a.fromJSON(t),this.sourceJSON=e;const r=Object(a.m)(d.a.ofType(s),Object(k.e)(s,e));this.sublayers?this.sublayers.addMany(r):this.sublayers=r,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(r),Object(y.u)(this)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))]),this._set("sublayers",e)}castSublayers(e){return Object(a.m)(d.a.ofType(s),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}_fetchService(e,t){return Object(k.b)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>Object(k.d)(e.data)))}};Object(l.a)([Object(o.b)()],P.prototype,"description",void 0),Object(l.a)([Object(o.b)()],P.prototype,"id",void 0),Object(l.a)([Object(o.b)({readOnly:!0,value:null})],P.prototype,"networkLink",void 0),Object(l.a)([Object(o.b)({json:{write:{allowNull:!0}}})],P.prototype,"parent",void 0),Object(l.a)([Object(o.b)({value:null,json:{write:{allowNull:!0}}})],P.prototype,"sublayers",null),Object(l.a)([Object(x.a)("sublayers")],P.prototype,"castSublayers",null),Object(l.a)([Object(o.b)({value:null,json:{read:{source:"name"}}})],P.prototype,"title",void 0),Object(l.a)([Object(o.b)({value:!0})],P.prototype,"visible",null),Object(l.a)([Object(n.a)("visible",["visibility"])],P.prototype,"readVisible",null),Object(l.a)([Object(o.b)()],P.prototype,"sourceJSON",void 0),Object(l.a)([Object(o.b)({value:null})],P.prototype,"layer",null),Object(l.a)([Object(o.b)({type:f.a})],P.prototype,"fullExtent",void 0),P=s=Object(l.a)([Object(u.a)("esri.layers.support.KMLSublayer")],P);var F=P;const M=["kml","xml"];let N=class extends(Object(g.a)(Object(w.a)(Object(E.a)(Object(v.a)(Object(S.a)(Object(j.a)(O.a))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new h.a({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=p.a.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.watch("sublayers",((e,t)=>{t&&t.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),!0),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return Object(k.e)(F,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],s=e.toArray();for(;s.length;){const e=s[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&s.push(...e.sublayers.toArray())),s.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(c.k)(this.url,M)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=Object(i.i)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).then((()=>this._fetchService(t)))),Object(y.u)(this)}async _fetchService(e){const t=await Object(y.u)().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:Object(k.b)(this.url,this.outSpatialReference,this.refreshInterval,e))),r=Object(k.d)(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const s of r.sublayers.items)t(s),s.visible&&s.fullExtent&&(e?e.union(s.fullExtent):e=s.fullExtent.clone())};return t(this),e}};Object(l.a)([Object(o.b)({readOnly:!0})],N.prototype,"allSublayers",void 0),Object(l.a)([Object(o.b)({type:p.a})],N.prototype,"outSpatialReference",void 0),Object(l.a)([Object(o.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],N.prototype,"path",void 0),Object(l.a)([Object(o.b)({readOnly:!0,json:{read:!1,write:!1}})],N.prototype,"legendEnabled",void 0),Object(l.a)([Object(o.b)({type:["show","hide","hide-children"]})],N.prototype,"listMode",void 0),Object(l.a)([Object(o.b)({type:["KML"]})],N.prototype,"operationalLayerType",void 0),Object(l.a)([Object(o.b)({type:d.a.ofType(F),json:{write:{ignoreOrigin:!0}}})],N.prototype,"sublayers",void 0),Object(l.a)([Object(n.a)(["web-map","portal-item"],"sublayers",["visibleFolders"])],N.prototype,"readSublayersFromItemOrWebMap",null),Object(l.a)([Object(n.a)("service","sublayers",["sublayers"])],N.prototype,"readSublayers",null),Object(l.a)([Object(b.a)("sublayers")],N.prototype,"writeSublayers",null),Object(l.a)([Object(o.b)({readOnly:!0,json:{read:!1}})],N.prototype,"type",void 0),Object(l.a)([Object(o.b)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}},dependsOn:["url","parsedUrl"]})],N.prototype,"title",null),Object(l.a)([Object(o.b)(m.j)],N.prototype,"url",void 0),Object(l.a)([Object(o.b)({readOnly:!0,dependsOn:["sublayers"]})],N.prototype,"visibleSublayers",null),Object(l.a)([Object(o.b)({type:f.a})],N.prototype,"extent",void 0),Object(l.a)([Object(o.b)({dependsOn:["extent"]})],N.prototype,"fullExtent",null),N=Object(l.a)([Object(u.a)("esri.layers.KMLLayer")],N);var C=N;t.default=C}}]);