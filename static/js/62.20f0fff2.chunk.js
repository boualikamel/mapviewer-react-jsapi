(this["webpackJsonpjsapi-create-react-app"]=this["webpackJsonpjsapi-create-react-app"]||[]).push([[62],{693:function(e,t,i){"use strict";var s=i(2),n=i(6),r=i(13),a=i(70),d=i(82),o=i(426),u=i(132),l=i(7),c=i(582);const h={minX:0,minY:0,maxX:0,maxY:0};class f{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=Object(c.a)(9,Object(l.a)("csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((i,s)=>{e[t++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex();for(const i of function(e,t){return h.minX=t[0],h.minY=t[1],h.maxX=t[2],h.maxY=t[3],e.search(h)}(this._index,e))t(this._idByBounds.get(i))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}var y=i(223),b=i(147),m=i(606);const p={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new y.a(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=Object(m.a)(new b.a,e.geometry,t.hasZ,t.hasM)),e.centroid)};t.a=class{constructor(e){this.geometryInfo=e,this._boundsStore=new f,this._featuresById=new Map,this._markedIds=new Set,this.events=new a.a,this.featureAdapter=p}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(d.f)(d.a);return this._featuresById.forEach((t=>{const i=this._boundsStore.get(t.objectId);i&&(e[0]=Math.min(i[0],e[0]),e[1]=Math.min(i[1],e[1]),e[2]=Math.max(i[2],e[2]),e[3]=Math.max(i[3],e[3]))})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,i){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t(Object(u.i)(i,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,i)=>{this._markedIds.has(i)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void n.a.getLogger("esri.layers.graphics.data.FeatureStore").error(new r.a("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(t);let a;if(this._markedIds.add(t),i?(e.displayId=i.displayId,a=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(s.i)(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);a=Object(o.r)(a||Object(d.f)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,a),this._featuresById.set(t,e)}_remove(e){return Object(s.i)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},752:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return u})),i.d(t,"c",(function(){return b})),i.d(t,"d",(function(){return c})),i.d(t,"e",(function(){return y}));var s=i(34),n=i(56);class r{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new r,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function d(e){return new a(e)}class o{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function u(e){return new o(e)}const l=new Set;function c(e,t,i,s,r=!1,a){l.clear();for(const o in s){const t=e.get(o);if(!t)continue;const u=s[o],c=h(t,u);if(c!==u&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:t,originalValue:u,sanitizedValue:c}}),l.add(t.name),t&&(r||t.editable)){const e=Object(n.v)(t,c);if(e)return d(Object(n.w)(e,t,c));i[t.name]=c}}for(const n of t)if(!l.has(n.name))return d(`missing required field "${n.name}"`);return null}function h(e,t){let i=t;return"string"==typeof t&&Object(n.r)(e)?i=parseFloat(t):null!=t&&Object(n.s)(e)&&"string"!=typeof t&&(i=String(t)),Object(n.t)(i)}let f;function y(e,t){if(!e||!Object(s.i)(t))return e;if("rings"in e||"paths"in e){if(!f)throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function b(e,t){!Object(s.i)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return f||(f=await i.e(23).then(i.bind(null,797)),f)}()}},861:function(e,t,i){"use strict";i.r(t);var s=i(13),n=i(9),r=i(34),a=i(63),d=i(56),o=i(466),u=i(426),l=i(356),c=i(598),h=i(669),f=i(693),y=i(726),b=i(752);const m=r.a,p={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:r.a},g={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function _(e){return Object(a.f)(e)?null!=e.z:!!e.hasZ}function I(e){return Object(a.f)(e)?null!=e.m:!!e.hasM}t.default=class{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,n=this._inferLayerProperties(i,e.fields),r=e.fields||[],a=null!=e.hasM?e.hasM:n.hasM,u=null!=e.hasZ?e.hasZ:n.hasZ,b=!e.spatialReference&&!n.spatialReference,_=b?m:e.spatialReference||n.spatialReference,I=b?p:null,j=e.geometryType||n.geometryType,O=!j;let F=e.objectIdField||n.objectIdField,x=e.timeInfo;if(!O&&(b&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!j))throw new s.a("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!F)throw new s.a("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&F!==n.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${F}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),F=n.objectIdField),F&&!n.objectIdField){let e=null;r.some((t=>t.name===F&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:F,name:F,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const d of r){if(null==d.name&&(d.name=d.alias),null==d.alias&&(d.alias=d.name),!d.name)throw new s.a("feature-layer:invalid-field-name","field name is missing",{field:d});if(d.name===F&&(d.type="esriFieldTypeOID"),-1===o.a.jsonValues.indexOf(d.type))throw new s.a("feature-layer:invalid-field-type",`invalid type for field "${d.name}"`,{field:d})}const v={};this._requiredFields=[];for(const s of r)if("esriFieldTypeOID"!==s.type&&"esriFieldTypeGlobalID"!==s.type){s.editable=null==s.editable||!!s.editable,s.nullable=null==s.nullable||!!s.nullable;const e=Object(d.o)(s);s.nullable||void 0!==e?v[s.name]=e:this._requiredFields.push(s)}if(this._fieldsIndex=new l.a(r),this._createDefaultAttributes=Object(h.a)(v,F),x){if(x.startTimeField){const e=this._fieldsIndex.get(x.startTimeField);e?(x.startTimeField=e.name,e.type="esriFieldTypeDate"):x.startTimeField=null}if(x.endTimeField){const e=this._fieldsIndex.get(x.endTimeField);e?(x.endTimeField=e.name,e.type="esriFieldTypeDate"):x.endTimeField=null}if(x.trackIdField){const e=this._fieldsIndex.get(x.trackIdField);e?x.trackIdField=e.name:(x.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:x}}))}x.startTimeField||x.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:x}}),x=null)}const B={warnings:t,featureErrors:[],layerDefinition:{...g,drawingInfo:Object(h.c)(j),templates:Object(h.b)(v),extent:I,geometryType:j,objectIdField:F,fields:r,hasZ:!!u,hasM:!!a,timeInfo:x},assignedObjectIds:{}};if(this._queryEngine=new y.a({fields:r,geometryType:j,hasM:a,hasZ:u,objectIdField:F,spatialReference:_,featureStore:new f.a({geometryType:j,hasM:a,hasZ:u}),timeInfo:x}),!i||!i.length)return this._nextObjectId=1,B;const E=i.reduce(((e,t)=>{const i=t.attributes&&t.attributes[F];return null==i||isNaN(i)||!isFinite(i)?e:Math.max(e,i)}),0);return this._nextObjectId=1+E,await Object(c.a)(i,_),this._loadInitialFeatures(B,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Object(n.b)([Object(b.c)(t,i),Object(c.a)(e.adds,t),Object(c.a)(e.updates,t)]),this._applyEdits(e)}async queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}_inferLayerProperties(e,t){let i,s,n=null,r=null,d=null;for(const o of e){const e=o.geometry;if(e&&(n||(n=Object(a.c)(e)),r||(r=e.spatialReference),null==i&&(i=_(e)),null==s&&(s=I(e)),n&&r&&null!=i&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(d=e.name)}return{geometryType:n,spatialReference:r,objectIdField:d,hasM:s,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:r,spatialReference:d,featureStore:o}=this._queryEngine,l=[];for(const u of t){if(null!=u.uid&&(e.assignedObjectIds[u.uid]=-1),u.geometry&&i!==Object(a.c)(u.geometry)){e.featureErrors.push(Object(b.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=Object(b.d)(this._fieldsIndex,this._requiredFields,t,u.attributes,!0,e.warnings);s?e.featureErrors.push(s):(this._assignObjectId(t,u.attributes,!0),u.attributes=t,null!=u.uid&&(e.assignedObjectIds[u.uid]=u.attributes[r]),u.geometry&&(u.geometry=Object(c.b)(u.geometry,u.geometry.spatialReference,d)),l.push(u))}if(o.addMany(Object(u.c)([],l,i,n,s,r)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push(Object(b.b)(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:n,hasZ:r,objectIdField:d,spatialReference:o,featureStore:l}=this._queryEngine,h=[];for(const u of t){if(u.geometry&&s!==Object(a.c)(u.geometry)){i.push(Object(b.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=Object(b.d)(this._fieldsIndex,this._requiredFields,t,u.attributes);if(n)i.push(n);else{if(this._assignObjectId(t,u.attributes),u.attributes=t,null!=u.uid){const t=u.attributes[d];e.uidToObjectId[u.uid]=t}u.geometry&&(u.geometry=Object(c.b)(Object(b.e)(u.geometry,o),u.geometry.spatialReference,o)),h.push(u),i.push(Object(b.b)(u.attributes[d]))}}l.addMany(Object(u.c)([],h,s,r,n,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:r,spatialReference:d,featureStore:o}=this._queryEngine;for(const l of t){const{attributes:t,geometry:h}=l,f=t&&t[r];if(null==f){e.push(Object(b.a)(`Identifier field ${r} missing`));continue}if(!o.has(f)){e.push(Object(b.a)(`Feature with object id ${f} missing`));continue}const y=Object(u.i)(o.getFeature(f),i,n,s);if(h){if(i!==Object(a.c)(h)){e.push(Object(b.a)("Incorrect geometry type."));continue}y.geometry=Object(c.b)(Object(b.e)(h,d),h.spatialReference,d)}if(t){const i=Object(b.d)(this._fieldsIndex,this._requiredFields,y.attributes,t);if(i){e.push(i);continue}}o.add(Object(u.a)(y,i,n,s,r)),e.push(Object(b.b)(f))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}}}]);