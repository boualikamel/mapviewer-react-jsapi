self.webpackChunkRemoteClient([53],{115:function(e,t,n){"use strict";var i=n(18),r=(n(7),n(3),n(4),n(20)),s=n(54),a=n(53),o=n(19),u=(n(24),n(34),n(35),n(50));const l=new s.a({inherited:"inherited",codedValue:"coded-value",range:"range"});let d=class extends u.a{constructor(e){super(e),this.name=null,this.type=null}};Object(i.a)([Object(r.b)({type:String,json:{write:!0}})],d.prototype,"name",void 0),Object(i.a)([Object(a.a)(l)],d.prototype,"type",void 0),d=Object(i.a)([Object(o.a)("esri.layers.support.Domain")],d);var c=d;t.a=c},116:function(e,t,n){"use strict";var i,r=n(18),s=(n(7),n(3),n(4),n(20),n(53)),a=n(19),o=(n(24),n(34),n(35),n(115));let u=i=class extends o.a{constructor(e){super(e),this.type="inherited"}clone(){return new i}};Object(r.a)([Object(s.a)({inherited:"inherited"})],u.prototype,"type",void 0),u=i=Object(r.a)([Object(a.a)("esri.layers.support.InheritedDomain")],u);var l=u;t.a=l},117:function(e,t,n){"use strict";var i,r=n(18),s=(n(7),n(3),n(4),n(20)),a=n(53),o=n(19),u=(n(24),n(34),n(35),n(115));let l=i=class extends u.a{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new i({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};Object(r.a)([Object(s.b)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,n){t[n]=[this.minValue||0,e]}}}})],l.prototype,"maxValue",void 0),Object(r.a)([Object(s.b)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,n){t[n]=[e,this.maxValue||0]}}}})],l.prototype,"minValue",void 0),Object(r.a)([Object(a.a)({range:"range"})],l.prototype,"type",void 0),l=i=Object(r.a)([Object(o.a)("esri.layers.support.RangeDomain")],l);var d=l;t.a=d},120:function(e,t,n){"use strict";var i,r=n(18),s=(n(7),n(5)),a=(n(3),n(4),n(20)),o=n(53),u=n(19),l=(n(24),n(34),n(35),n(50));let d=i=class extends l.a{constructor(e){super(e),this.name=null,this.code=null}clone(){return new i({name:this.name,code:this.code})}};Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],d.prototype,"name",void 0),Object(r.a)([Object(a.b)({type:[String,Number],json:{write:!0}})],d.prototype,"code",void 0),d=i=Object(r.a)([Object(u.a)("esri.layers.support.CodedValue")],d);var c,f=d,h=n(115);let y=c=class extends h.a{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const n=String(e);this.codedValues.some(e=>(String(e.code)===n&&(t=e.name),!!t))}return t}clone(){return new c({codedValues:Object(s.a)(this.codedValues),name:this.name})}};Object(r.a)([Object(a.b)({type:[f],json:{write:!0}})],y.prototype,"codedValues",void 0),Object(r.a)([Object(o.a)({codedValue:"coded-value"})],y.prototype,"type",void 0),y=c=Object(r.a)([Object(u.a)("esri.layers.support.CodedValueDomain")],y);var m=y;t.a=m},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return l}));n(7);var i,r,s=n(115),a=n(120),o=n(116),u=n(117);function l(e,t){switch(e.type){case"range":{const n="range"in e?e.range[0]:e.minValue,r="range"in e?e.range[1]:e.maxValue;if(+t<n||+t>r)return i.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every(e=>null==e||e.code!==t))return i.INVALID_CODED_VALUE}return null}(r=i||(i={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",r.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value";const d={key:"type",base:s.a,typeMap:{range:u.a,"coded-value":a.a,inherited:o.a}};function c(e){if(e&&"range"===e.type)return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}}function f(e){if(!e||!e.type)return null;switch(e.type){case"range":return u.a.fromJSON(e);case"codedValue":return a.a.fromJSON(e);case"inherited":return o.a.fromJSON(e)}return null}},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return o}));var i=n(1),r=n(2),s=n(56);n(59);let a;async function o(){return a||(a=(async()=>{const e=await Promise.all([n.e(14),n.e(78)]).then(n.bind(null,482));return await e.arcade.load(),{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),a}const u=(e,t,n)=>c.create(e,t,n,null,["$feature"]),l=(e,t,n)=>c.create(e,t,n,null,["$feature","$view"]),d=(e,t,n,i)=>c.create(e,t,n,i,["$feature","$view"]);class c{constructor(e,t,n,i,r,s,a,o){this.script=e,this.evaluate=r,this.fields=a,this._syntaxTree=i,this._arcade=t,this._arcadeDictionary=n,this._arcadeFeature=s,this._spatialReference=o,this._referencesGeometry=t.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,t,n,a,u,l){const{arcade:d,Feature:f,Dictionary:h}=await o(),y=s.a.fromJSON(t),m=d.parseScript(e,l),p=u.reduce((e,t)=>({...e,[t]:null}),{});let b=null;Object(i.g)(a)&&(b=new h(a),b.immutable=!0,p.$config=null);const g=d.scriptUsesGeometryEngine(m)&&d.enableGeometrySupport(),_=d.scriptUsesFeatureSet(m)&&d.enableFeatureSetSupport(),I=d.scriptIsAsync(m)&&d.enableAsyncSupport(),j={vars:p,spatialReference:y,useAsync:!!I},F=new h;F.immutable=!1,F.setField("scale",0);const O=d.compileScript(m,j);return await Object(r.b)([g,_,I]),new c(e,d,h,m,e=>("$view"in e&&e.$view&&(F.setField("scale",e.$view.scale),e.$view=F),b&&(e.$config=b),O({vars:e,spatialReference:y})),new f,n,y)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}repurposeAdapter(e){return this._arcadeFeature.repurposeFromAdapter(e,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(e){return this._arcade.extractFieldLiterals(this._syntaxTree,e)}}},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=new(n(54).a)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},370:function(e,t,n){"use strict";var i=n(1),r=n(3),s=n(14),a=n(88),o=n(114),u=n(104),l=n(194),d=n(7),c=n(315);const f={minX:0,minY:0,maxX:0,maxY:0};class h{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=Object(c.a)(9,Object(d.a)("csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach((n,i)=>{e[t++]=i}),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(e=>this._idByBounds.has(e))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex();for(const n of function(e,t){return f.minX=t[0],f.minY=t[1],f.maxX=t[2],f.maxY=t[3],e.search(f)}(this._index,e))t(this._idByBounds.get(n))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}var y=n(175),m=n(130),p=n(316);const b={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new y.a(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=Object(p.a)(new m.a,e.geometry,t.hasZ,t.hasM)),e.centroid)};t.a=class{constructor(e){this.geometryInfo=e,this._boundsStore=new h,this._featuresById=new Map,this._markedIds=new Set,this.events=new a.a,this.featureAdapter=b}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(o.c)(o.a);return this._featuresById.forEach(t=>{const n=this._boundsStore.get(t.objectId);n&&(e[0]=Math.min(n[0],e[0]),e[1]=Math.min(n[1],e[1]),e[2]=Math.max(n[2],e[2]),e[3]=Math.max(n[3],e[3]))}),e}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,n){for(const i of e){const e=this._boundsStore.get(i.objectId);e&&t(Object(l.h)(n,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,e=>{t(this._featuresById.get(e))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))}),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void r.a.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.a("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let a;if(this._markedIds.add(t),n?(e.displayId=n.displayId,a=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(i.g)(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);a=Object(u.o)(a||Object(o.c)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,a),this._featuresById.set(t,e)}_remove(e){return Object(i.g)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return y}));var i=n(78),r=n(71);class s{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new s,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function o(e){return new a(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function l(e){return new u(e)}const d=new Set;function c(e,t,n,i,s=!1,a){d.clear();for(const t in i){const u=e.get(t);if(!u)continue;const l=i[t],c=f(u,l);if(c!==l&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:u,originalValue:l,sanitizedValue:c}}),d.add(u.name),u&&(s||u.editable)){const e=Object(r.o)(u,c);if(e)return o(Object(r.p)(e,u,c));n[u.name]=c}}for(const e of t)if(!d.has(e.name))return o(`missing required field "${e.name}"`);return null}function f(e,t){let n=t;return"string"==typeof t&&Object(r.l)(e)?n=parseFloat(t):null!=t&&Object(r.m)(e)&&"string"!=typeof t&&(n=String(t)),Object(r.n)(n)}let h;function y(e,t){if(!e||!Object(i.i)(t))return e;if("rings"in e||"paths"in e){if(!h)throw new TypeError("geometry engine not loaded");return h.simplify(t,e)}return e}async function m(e,t){!Object(i.i)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return h||(h=await Promise.all([n.e(7),n.e(22)]).then(n.bind(null,509)),h)}()}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(20),r=n(54);function s(e,t={ignoreUnknown:!0}){const n=e instanceof r.a?e:new r.a(e,t),s={type:null!=t&&t.ignoreUnknown?n.apiValues:String,readOnly:null==t?void 0:t.readOnly,json:{type:n.jsonValues,read:(null==t||!t.readOnly)&&{reader:n.read},write:{writer:n.write}}};return void 0!==(null==t?void 0:t.default)&&(s.json.default=t.default),Object(i.b)(s)}},545:function(e,t,n){"use strict";n.r(t);var i=n(14),r=n(2),s=n(78),a=n(61),o=n(71),u=n(245),l=n(104),d=n(142),c=n(259),f=n(339),h=n(370),y=n(423),m=n(450);const p=s.a,b={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:s.a},g={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function _(e){return Object(a.f)(e)?null!=e.z:!!e.hasZ}function I(e){return Object(a.f)(e)?null!=e.m:!!e.hasM}t.default=class{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:n}=e,r=this._inferLayerProperties(n,e.fields),s=e.fields||[],a=null!=e.hasM?e.hasM:r.hasM,l=null!=e.hasZ?e.hasZ:r.hasZ,m=!e.spatialReference&&!r.spatialReference,_=m?p:e.spatialReference||r.spatialReference,I=m?b:null,j=e.geometryType||r.geometryType,F=!j;let O=e.objectIdField||r.objectIdField,v=e.timeInfo;if(!F&&(m&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!j))throw new i.a("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!O)throw new i.a("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&O!==r.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${O}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),O=r.objectIdField),O&&!r.objectIdField){let e=null;s.some(t=>t.name===O&&(e=t,!0))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):s.unshift({alias:O,name:O,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of s){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new i.a("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===O&&(e.type="esriFieldTypeOID"),-1===u.a.jsonValues.indexOf(e.type))throw new i.a("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const x={};this._requiredFields=[];for(const e of s)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=Object(o.j)(e);e.nullable||void 0!==t?x[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new d.a(s),this._createDefaultAttributes=Object(f.a)(x,O),v){if(v.startTimeField){const e=this._fieldsIndex.get(v.startTimeField);e?(v.startTimeField=e.name,e.type="esriFieldTypeDate"):v.startTimeField=null}if(v.endTimeField){const e=this._fieldsIndex.get(v.endTimeField);e?(v.endTimeField=e.name,e.type="esriFieldTypeDate"):v.endTimeField=null}if(v.trackIdField){const e=this._fieldsIndex.get(v.trackIdField);e?v.trackIdField=e.name:(v.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:v}}))}v.startTimeField||v.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:v}}),v=null)}const T={warnings:t,featureErrors:[],layerDefinition:{...g,drawingInfo:Object(f.c)(j),templates:Object(f.b)(x),extent:I,geometryType:j,objectIdField:O,fields:s,hasZ:!!l,hasM:!!a,timeInfo:v},assignedObjectIds:{}};if(this._queryEngine=new y.a({fields:s,geometryType:j,hasM:a,hasZ:l,objectIdField:O,spatialReference:_,featureStore:new h.a({geometryType:j,hasM:a,hasZ:l}),timeInfo:v}),!n||!n.length)return this._nextObjectId=1,T;const w=n.reduce((e,t)=>{const n=t.attributes&&t.attributes[O];return null==n||isNaN(n)||!isFinite(n)?e:Math.max(e,n)},0);return this._nextObjectId=1+w,await Object(c.a)(n,_),this._loadInitialFeatures(T,n)}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Object(r.b)([Object(m.c)(t,n),Object(c.a)(e.adds,t),Object(c.a)(e.updates,t)]),this._applyEdits(e)}async queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}_inferLayerProperties(e,t){let n,i,r=null,s=null,o=null;for(const t of e){const e=t.geometry;if(e&&(r||(r=Object(a.c)(e)),s||(s=e.spatialReference),null==n&&(n=_(e)),null==i&&(i=I(e)),r&&s&&null!=n&&null!=i))break}if(t&&t.length){let e=null;t.some(t=>{const n="esriFieldTypeOID"===t.type,i=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,n||i})&&(o=e.name)}return{geometryType:r,spatialReference:s,objectIdField:o,hasM:i,hasZ:n}}_loadInitialFeatures(e,t){const{geometryType:n,hasM:i,hasZ:r,objectIdField:s,spatialReference:o,featureStore:u}=this._queryEngine,d=[];for(const i of t){if(null!=i.uid&&(e.assignedObjectIds[i.uid]=-1),i.geometry&&n!==Object(a.c)(i.geometry)){e.featureErrors.push(Object(m.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=Object(m.d)(this._fieldsIndex,this._requiredFields,t,i.attributes,!0,e.warnings);r?e.featureErrors.push(r):(this._assignObjectId(t,i.attributes,!0),i.attributes=t,null!=i.uid&&(e.assignedObjectIds[i.uid]=i.attributes[s]),i.geometry&&(i.geometry=Object(c.b)(i.geometry,i.geometry.spatialReference,o)),d.push(i))}if(u.addMany(Object(l.c)([],d,n,r,i,s)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:n}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}_applyEdits(e){const{adds:t,updates:n,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),n&&n.length&&this._applyUpdateEdits(r,n),i&&i.length){for(const e of i)r.deleteResults.push(Object(m.b)(e));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:r,hasZ:s,objectIdField:o,spatialReference:u,featureStore:d}=this._queryEngine,f=[];for(const r of t){if(r.geometry&&i!==Object(a.c)(r.geometry)){n.push(Object(m.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=Object(m.d)(this._fieldsIndex,this._requiredFields,t,r.attributes);if(s)n.push(s);else{if(this._assignObjectId(t,r.attributes),r.attributes=t,null!=r.uid){const t=r.attributes[o];e.uidToObjectId[r.uid]=t}r.geometry&&(r.geometry=Object(c.b)(Object(m.e)(r.geometry,u),r.geometry.spatialReference,u)),f.push(r),n.push(Object(m.b)(r.attributes[o]))}}d.addMany(Object(l.c)([],f,i,s,r,o))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:i,hasZ:r,objectIdField:s,spatialReference:o,featureStore:u}=this._queryEngine;for(const d of t){const{attributes:t,geometry:f}=d,h=t&&t[s];if(null==h){e.push(Object(m.a)(`Identifier field ${s} missing`));continue}if(!u.has(h)){e.push(Object(m.a)(`Feature with object id ${h} missing`));continue}const y=Object(l.f)(u.getFeature(h),n,r,i);if(f){if(n!==Object(a.c)(f)){e.push(Object(m.a)("Incorrect geometry type."));continue}y.geometry=Object(c.b)(Object(m.e)(f,o),f.spatialReference,o)}if(t){const n=Object(m.d)(this._fieldsIndex,this._requiredFields,y.attributes,t);if(n){e.push(n);continue}}u.add(Object(l.a)(y,n,r,i,s)),e.push(Object(m.b)(h))}}_assignObjectId(e,t,n=!1){const i=this._queryEngine.objectIdField;n&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return U})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return _})),n.d(t,"i",(function(){return p})),n.d(t,"j",(function(){return j})),n.d(t,"k",(function(){return b})),n.d(t,"l",(function(){return B})),n.d(t,"m",(function(){return D})),n.d(t,"n",(function(){return M})),n.d(t,"o",(function(){return L})),n.d(t,"p",(function(){return G}));var i=n(9),r=n(1),s=(n(14),n(2),n(143)),a=n(182);const o=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],u=["field","normalizationField"];function l(e,t){if(null!=e&&null!=t)for(const n of Array.isArray(e)?e:[e])if(d(o,n,t),"visualVariables"in n&&n.visualVariables)for(const e of n.visualVariables)d(u,e,t)}function d(e,t,n){if(e)for(const r of e){const e=Object(i.b)(r,t),s=e&&"function"!=typeof e&&p(n,e);s&&Object(i.c)(r,s.name,t)}}function c(e,t){if(null!=e&&null!=t)if("startField"in e){const n=p(t,e.startField),i=p(t,e.endField);e.startField=n&&n.name||null,e.endField=i&&i.name||null}else{const n=p(t,e.startTimeField),i=p(t,e.endTimeField);e.startTimeField=n&&n.name||null,e.endTimeField=i&&i.name||null}}const f=new Set;function h(e,t){return e&&t?(f.clear(),y(f,e,t),Array.from(f).sort()):[]}function y(e,t,n){if(n)if(t&&t.length)if(n.includes("*"))for(const{name:n}of t)e.add(n);else for(const i of n)m(e,t,i);else{if(n.includes("*"))return e.clear(),void e.add("*");for(const t of n)e.add(t)}}function m(e,t,n){if(t&&t.length){const i=p(t,n);i&&e.add(i.name)}else"string"==typeof n&&e.add(n)}function p(e,t){if("string"!=typeof t)return null;if(null!=e){t=t.toLowerCase();for(const n of e)if(n&&n.name.toLowerCase()===t)return n}return null}function b(e,t){if(!e||!t||"string"!=typeof t)return!1;t=t.toLowerCase();for(const n of e)if(n&&n.name.toLowerCase()===t)return!0;return!1}async function g(e,t,n){if(!n)return;const{arcadeUtils:i}=await Object(a.e)(),r=i.extractFieldNames(n);for(const n of r)m(e,t,n)}function _({displayField:e,fields:t}){return e||(t&&t.length?I(t,"name-or-title")||I(t,"unique-identifier")||I(t,"type-or-category")||function(e){for(const t of e){if(!t||!t.name)continue;const e=t.name.toLowerCase();if(e.indexOf("name")>-1||e.indexOf("title")>-1)return t.name}return null}(t):null)}function I(e,t){for(const n of e)if(n&&n.valueType&&n.valueType===t)return n.name;return null}function j(e){const t=e.defaultValue;return void 0!==t&&S(e,t)?t:e.nullable?null:void 0}function F(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function O(e){return null===e||F(e)}const v="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function x(e){return null===e||v(e)}function T(e){return null!=e&&"string"==typeof e}function w(e){return null===e||T(e)}function E(){return!0}function S(e,t){let n;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":n=e.nullable?x:v;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":n=e.nullable?O:F;break;case"string":case"esriFieldTypeString":n=e.nullable?w:T;break;default:n=E}return 1===arguments.length?n:n(t)}const V=new Set(["integer","small-integer","single","double","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function B(e){return null!=e&&V.has(e.type)}function D(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}var R,A;function M(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function L(e,t){return e.nullable&&null===t?null:B(e)&&!function(e,t){const n="string"==typeof e?N(e):e;return!!n&&(n.isInteger?v(t)&&t>=n.min&&t<=n.max:t>=n.min&&t<=n.max)}(e.type,Number(t))?R.OUT_OF_RANGE:S(e,t)?e.domain?Object(s.e)(e.domain,t):null:A.INVALID_TYPE}function N(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return q;case"esriFieldTypeInteger":case"integer":return $;case"esriFieldTypeSingle":case"single":return C;case"esriFieldTypeDouble":case"double":return k}}(R||(R={})).OUT_OF_RANGE="numeric-range-validation-error::out-of-range",function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(A||(A={}));const q={min:-32768,max:32767,isInteger:!0},$={min:-2147483648,max:2147483647,isInteger:!0},C={min:-34e37,max:12e37,isInteger:!1},k={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function G(e,t,n){switch(e){case s.a.INVALID_CODED_VALUE:return`Value ${n} is not in the coded domain - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case s.a.VALUE_OUT_OF_RANGE:return`Value ${n} is out of the range of valid values - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case A.INVALID_TYPE:return`Value ${n} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`;case R.OUT_OF_RANGE:{const{min:e,max:i}=N(t.type);return`Value ${n} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${i}`}}}function U(e,t){return!function(e,t,n){if(!t||!t.attributes||!e){if(Object(r.g)(n))for(const t of e)n.add(t);return!0}const i=t.attributes;let s=!1;for(const t of e)if(!(t in i)){if(s=!0,!Object(r.g)(n))break;n.add(t)}return s}(e,t,null)}}});