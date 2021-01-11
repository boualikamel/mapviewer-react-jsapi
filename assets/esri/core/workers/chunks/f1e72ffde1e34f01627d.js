self.webpackChunkRemoteClient([78],{122:function(t,e,n){"use strict";var i,r=n(18),a=(n(7),n(3),n(4)),o=n(20),s=n(54),u=n(53),l=n(52),d=n(19),c=(n(24),n(34),n(35),n(50)),p=n(143),h=n(245);const m=new s.a({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let y=i=class extends c.a{constructor(t){super(t),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null}readDescription(t,{description:e}){let n;try{n=JSON.parse(e)}catch(t){}return n?n.value:null}readValueType(t,{description:e}){let n;try{n=JSON.parse(e)}catch(t){}return n?m.fromJSON(n.fieldValueType):null}clone(){return new i({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};Object(r.a)([Object(o.b)({type:String,json:{write:!0}})],y.prototype,"alias",void 0),Object(r.a)([Object(o.b)({type:[String,Number],json:{write:{allowNull:!0}}})],y.prototype,"defaultValue",void 0),Object(r.a)([Object(o.b)()],y.prototype,"description",void 0),Object(r.a)([Object(l.a)("description")],y.prototype,"readDescription",null),Object(r.a)([Object(o.b)({types:p.d,json:{read:{reader:p.b},write:!0}})],y.prototype,"domain",void 0),Object(r.a)([Object(o.b)({type:Boolean,json:{write:!0}})],y.prototype,"editable",void 0),Object(r.a)([Object(o.b)({type:a.a,json:{write:!0}})],y.prototype,"length",void 0),Object(r.a)([Object(o.b)({type:String,json:{write:!0}})],y.prototype,"name",void 0),Object(r.a)([Object(o.b)({type:Boolean,json:{write:!0}})],y.prototype,"nullable",void 0),Object(r.a)([Object(u.a)(h.a)],y.prototype,"type",void 0),Object(r.a)([Object(o.b)()],y.prototype,"valueType",void 0),Object(r.a)([Object(l.a)("valueType",["description"])],y.prototype,"readValueType",null),y=i=Object(r.a)([Object(d.a)("esri.layers.support.Field")],y);var b=y;e.a=b},385:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(61),r=(n(59),n(130)),a=n(104),o=n(316);let s=0;class u{constructor(t){this.type="FeatureSetReader",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._xmin=-1,this._xmax=0,this._ymin=0,this._ymax=0,this._joined=[],this.instance=t}static createInstance(){return s++,s=s>65535?0:s,s}get _hasFilter(){return-1!==this._xmin}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(t){return this.getComputedNumericAtIndex(0)}setComputedNumeric(t,e){return this.setComputedNumericAtIndex(e,0)}getComputedString(t){return this.getComputedStringAtIndex(0)}setComputedString(t,e){return this.setComputedStringAtIndex(0,e)}getComputedNumericAtIndex(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)}setComputedNumericAtIndex(t,e){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,e)}getComputedStringAtIndex(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)}setComputedStringAtIndex(t,e){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,e)}transform(t,e){const n=this.copy();return n._tx=t,n._ty=e,n}extent(t,e,n,i){const r=this.copy();return r._xmin=t,r._xmax=n,r._ymin=e,r._ymax=i,r}hasFilter(){return this._hasFilter}readAttribute(t,e=!1){const n=this._readAttribute(t,e);if(void 0!==n)return n;for(const n of this._joined){n.setIndex(this.getIndex());const i=n._readAttribute(t,e);if(void 0!==i)return i}}readAttributes(){return this._readAttributes()}joinAttributes(t){this._joined.push(t)}readArcadeFeature(){return this}geometry(){const t=this.readHydratedGeometry(),e=Object(a.h)(t,this.geometryType,this.hasZ,this.hasM),n=Object(i.a)(e);return n.spatialReference=this._arcadeSpatialReference,n}field(t){return this.readAttribute(t,!0)}hasField(t){return!0}setField(t,e){}keys(){return[]}castToText(){return""}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;const e=this.getQuantizationTransform();return Object(o.a)(new r.a,t,this.hasM,this.hasZ,e)}copyInto(t){t.seen=this.seen,t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._xmin=this._xmin,t._xmax=this._xmax,t._ymin=this._ymin,t._ymax=this._ymax}}},63:function(t,e,n){"use strict";n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return h}));var i,r,a,o=n(0);let s,u;const l=null!=(i=null==(r=o.a.esriConfig)?void 0:r.locale)?i:null==(a=o.a.dojoConfig)?void 0:a.locale;function d(){var t,e;return null!=(t=null!=l?l:null==(e=o.a.navigator)?void 0:e.language)?t:"en"}function c(){return void 0===u&&(u=d()),u}const p=[];function h(t){return p.push(t),{remove(){p.splice(p.indexOf(t),1)}}}const m=[];function y(t){return m.push(t),{remove(){p.splice(m.indexOf(t),1)}}}function b(){var t;const e=null!=(t=s)?t:d();u!==e&&(u=e,[...m].forEach(t=>{t.call(null,e)}),[...p].forEach(t=>{t.call(null,e)}))}null==o.a.addEventListener||o.a.addEventListener("languagechange",b)},96:function(t,e,n){"use strict";function i(t){return t&&"esri.renderers.visualVariables.SizeVariable"===t.declaredClass}function r(t){return null!=t&&!isNaN(t)&&isFinite(t)}function a(t){return t.valueExpression?"expression":t.field&&"string"==typeof t.field?"field":"unknown"}function o(t,e){const n=e||a(t),i=t.valueUnit||"unknown";return"unknown"===n?"constant":t.stops?"stops":null!=t.minSize&&null!=t.maxSize&&null!=t.minDataValue&&null!=t.maxDataValue?"clamped-linear":"unknown"===i?null!=t.minSize&&null!=t.minDataValue?t.minSize&&t.minDataValue?"proportional":"additive":"identity":"real-world-size"}n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return r}))}});