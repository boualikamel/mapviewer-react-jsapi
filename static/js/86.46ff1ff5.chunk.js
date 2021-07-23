(this["webpackJsonptesting-ant-cra"]=this["webpackJsonptesting-ant-cra"]||[]).push([[86],{1017:function(e,t,r){"use strict";r.r(t);var n=r(15),o=r(8),i=r.n(o),a=r(14),s=r(11),u=r(4),c=r(5),l=r(47),p=r(46),d=r(6),y=r(7),b=r(0),f=(r(90),r(1)),O=r(13),h=(r(16),r(12),r(34)),v=r(9),j=r(270),m=r(103),g=r(10),w=r(372),S=r(145),k=r(53),F=function(e){Object(d.a)(r,e);var t=Object(y.a)(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e)).type="csv",n}return Object(c.a)(r,[{key:"load",value:function(e){var t=Object(g.k)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}},{key:"destroy",value:function(){var e;null==(e=this._connection)||e.close(),this._connection=null}},{key:"openPorts",value:function(){var e=this;return this.load().then((function(){return e._connection.openPorts()}))}},{key:"queryFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then((function(){return t._connection.invoke("queryFeatures",e?e.toJSON():null,r)})).then((function(e){return S.default.fromJSON(e)}))}},{key:"queryFeaturesJSON",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then((function(){return t._connection.invoke("queryFeatures",e?e.toJSON():null,r)}))}},{key:"queryFeatureCount",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then((function(){return t._connection.invoke("queryFeatureCount",e?e.toJSON():null,r)}))}},{key:"queryObjectIds",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then((function(){return t._connection.invoke("queryObjectIds",e?e.toJSON():null,r)}))}},{key:"queryExtent",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then((function(){return t._connection.invoke("queryExtent",e?e.toJSON():null,r)})).then((function(e){return{count:e.count,extent:k.a.fromJSON(e.extent)}}))}},{key:"querySnapping",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(r).then((function(){return t._connection.invoke("querySnapping",e,r)}))}},{key:"_startWorker",value:function(){var e=Object(a.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.b)("CSVSourceWorker",{strategy:Object(O.a)("feature-layers-workers")?"dedicated":"local",signal:t});case 2:return this._connection=e.sent,e.next=5,this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((function(e){return e.toJSON()})),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:t});case 5:r=e.sent,this.locationInfo=r.locationInfo,this.sourceJSON=r.layerDefinition,this.columnDelimiter=r.columnDelimiter;case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(m.a);Object(b.a)([Object(f.b)()],F.prototype,"type",void 0),Object(b.a)([Object(f.b)()],F.prototype,"url",void 0),Object(b.a)([Object(f.b)()],F.prototype,"delimiter",void 0),Object(b.a)([Object(f.b)()],F.prototype,"fields",void 0),Object(b.a)([Object(f.b)()],F.prototype,"latitudeField",void 0),Object(b.a)([Object(f.b)()],F.prototype,"longitudeField",void 0),Object(b.a)([Object(f.b)()],F.prototype,"spatialReference",void 0),Object(b.a)([Object(f.b)()],F.prototype,"timeInfo",void 0),Object(b.a)([Object(f.b)()],F.prototype,"locationInfo",void 0),Object(b.a)([Object(f.b)()],F.prototype,"sourceJSON",void 0),Object(b.a)([Object(f.b)()],F.prototype,"columnDelimiter",void 0);var I=F=Object(b.a)([Object(v.a)("esri.layers.graphics.sources.CSVSource")],F),q=r(692),R=r(98),C=r(96),D=r(44),x=function(e){Object(d.a)(r,e);var t=Object(y.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).capabilities=Object(q.a)(!1,!1),e.delimiter=null,e.editingEnabled=!1,e.fields=null,e.latitudeField=null,e.customParameters=null,e.locationType="coordinates",e.longitudeField=null,e.operationalLayerType="CSV",e.outFields=["*"],e.path=null,e.portalItem=null,e.spatialReference=D.a.WGS84,e.source=null,e.type="csv",e}return Object(c.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(s.a)({url:e},t):e}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"readWebMapLabelsVisible",value:function(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}},{key:"url",set:function(e){this._set("url",e)}},{key:"createGraphicsSource",value:function(){var e=Object(a.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new I({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url}),this._set("source",r),e.next=4,r.load({signal:t});case 4:return this.read({locationInfo:r.locationInfo,columnDelimiter:r.columnDelimiter},{origin:"service",url:this.parsedUrl}),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(R.a.from(e)||r.createQuery())})).then((function(e){if(null!=e&&e.features){var t,o=Object(n.a)(e.features);try{for(o.s();!(t=o.n()).done;){var i=t.value;i.layer=i.sourceLayer=r}}catch(a){o.e(a)}finally{o.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryObjectIds(R.a.from(e)||r.createQuery())}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatureCount(R.a.from(e)||r.createQuery())}))}},{key:"queryExtent",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryExtent(R.a.from(e)||r.createQuery())}))}},{key:"write",value:function(e,t){return Object(l.a)(Object(p.a)(r.prototype),"write",this).call(this,e,Object(s.a)(Object(s.a)({},t),{},{writeLayerSchema:!0}))}},{key:"_verifyFields",value:function(){}},{key:"_verifySource",value:function(){}},{key:"_hasMemorySource",value:function(){return!1}}]),r}(j.default);Object(b.a)([Object(f.b)({readOnly:!0,json:{read:!1,write:!1}})],x.prototype,"capabilities",void 0),Object(b.a)([Object(f.b)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],x.prototype,"delimiter",void 0),Object(b.a)([Object(f.b)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],x.prototype,"editingEnabled",void 0),Object(b.a)([Object(f.b)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],x.prototype,"fields",void 0),Object(b.a)([Object(f.b)({type:Boolean,readOnly:!0})],x.prototype,"isTable",null),Object(b.a)([Object(h.a)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],x.prototype,"readWebMapLabelsVisible",null),Object(b.a)([Object(f.b)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],x.prototype,"latitudeField",void 0),Object(b.a)([Object(f.b)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],x.prototype,"customParameters",void 0),Object(b.a)([Object(f.b)({type:["show","hide"]})],x.prototype,"listMode",void 0),Object(b.a)([Object(f.b)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],x.prototype,"locationType",void 0),Object(b.a)([Object(f.b)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],x.prototype,"longitudeField",void 0),Object(b.a)([Object(f.b)({type:["CSV"]})],x.prototype,"operationalLayerType",void 0),Object(b.a)([Object(f.b)()],x.prototype,"outFields",void 0),Object(b.a)([Object(f.b)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],x.prototype,"path",void 0),Object(b.a)([Object(f.b)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],x.prototype,"portalItem",void 0),Object(b.a)([Object(f.b)({json:{read:!1},cast:null,type:I,readOnly:!0})],x.prototype,"source",void 0),Object(b.a)([Object(f.b)({json:{read:!1},value:"csv",readOnly:!0})],x.prototype,"type",void 0),Object(b.a)([Object(f.b)({json:{read:C.d,write:{isRequired:!0,ignoreOrigin:!0,writer:C.f}}})],x.prototype,"url",null);var N=x=Object(b.a)([Object(v.a)("esri.layers.CSVLayer")],x);t.default=N},692:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return c}));var n=r(19),o=r(11),i=r(13),a=r(23),s=r(699),u=r(245);function c(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?u.a:"esriGeometryPolyline"===e?u.c:u.b}}}function l(e,t){if(Object(i.a)("csp-restrictions"))return function(){return Object(o.a)(Object(n.a)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var a in e)r+="this".concat(a.indexOf(".")?'["'.concat(a,'"]'):".".concat(a)," = ").concat(JSON.stringify(e[a]),";");var s=new Function(r);return function(){return new s}}catch(u){return function(){return Object(o.a)(Object(n.a)({},t,null),e)}}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:Object(a.a)(e)}}]}function d(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:s.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},699:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);
//# sourceMappingURL=86.46ff1ff5.chunk.js.map