self.webpackChunkRemoteClient([54],{105:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return s}));var i=r(2);function a(e,t,r){return Object(i.i)(e.map((e,i)=>t.apply(r,[e,i])))}function n(e,t,r){return Object(i.i)(e.map((e,i)=>t.apply(r,[e,i]))).then(e=>e.map(e=>e.value))}function s(e){return e.then(e=>({ok:!0,value:e})).catch(e=>({ok:!1,error:e}))}},128:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(18),a=(r(7),r(3),r(4),r(20)),n=r(19);r(24),r(34),r(35);const s=e=>{let t=class extends e{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return Object(i.a)([Object(a.b)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{default:"normal",read:!0,write:!0}}}})],t.prototype,"blendMode",void 0),Object(i.a)([Object(a.b)()],t.prototype,"effect",void 0),t=Object(i.a)([Object(n.a)("esri.layers.mixins.BlendLayer")],t),t}},140:function(e,t,r){"use strict";var i,a=r(18),n=(r(7),r(1)),s=(r(3),r(4),r(20)),o=r(54),l=r(52),c=r(19),u=r(51),d=(r(24),r(34),r(35),r(50)),p=r(71);let y=i=class extends d.a{async collectRequiredFields(e,t){return Object(p.a)(e,t,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}};Object(a.a)([Object(s.b)({type:String,json:{write:!0}})],y.prototype,"expression",void 0),Object(a.a)([Object(s.b)({type:String,json:{write:!0}})],y.prototype,"title",void 0),y=i=Object(a.a)([Object(c.a)("esri.layers.support.FeatureExpressionInfo")],y);var b=y,f=r(73);const h=function(){const e=Object.keys(f.a);return e.sort(),e}();var m;const v=Object(o.b)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),O=new o.a({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let j=m=class extends d.a{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,i){t[r]=e.write(null,i),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){return this._isOverridden("mode")?this._get("mode"):Object(n.g)(this.offset)||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new m({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};Object(a.a)([Object(s.b)({type:b,json:{write:!0}})],j.prototype,"featureExpressionInfo",void 0),Object(a.a)([Object(l.a)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],j.prototype,"readFeatureExpressionInfo",null),Object(a.a)([Object(u.a)("featureExpressionInfo",{featureExpressionInfo:{type:b},"featureExpression.value":{type:[0]}})],j.prototype,"writeFeatureExpressionInfo",null),Object(a.a)([Object(s.b)({type:v.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:v.jsonValues,read:v.read,write:{writer:v.write,isRequired:!0}}})],j.prototype,"mode",null),Object(a.a)([Object(s.b)({type:Number,json:{write:!0}})],j.prototype,"offset",void 0),Object(a.a)([Object(s.b)({type:h,json:{type:String,read:O.read,write:O.write}})],j.prototype,"unit",null),j=m=Object(a.a)([Object(c.a)("esri.layers.support.ElevationInfo")],j);var g=j;t.a=g},172:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l}));var i=r(1),a=r(58),n=r(77),s=r(105);async function o(e,t){return await e.load(),l(e,t)}async function l(e,t){const r=[],o=(...e)=>{for(const t of e)Object(i.f)(t)||(Array.isArray(t)?o(...t):a.a.isCollection(t)?t.forEach(e=>o(e)):n.a.isLoadable(t)&&r.push(t))};t(o);let l=null;if(await Object(s.b)(r,async e=>{var t;!1!==(await Object(s.c)((t=e,"loadAll"in t&&"function"==typeof t.loadAll?e.loadAll():e.load()))).ok||l||(l=e)}),l)throw l.loadError;return e}},250:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var i=r(5),a=r(9),n=r(1),s=r(31),o=r(14);const l=new Set(["bing-maps","open-street-map","tile","unknown","unsupported","vector-tile","web-tile"]),c=new Set(["csv","feature","geo-rss","group","kml","tile","unknown","unsupported","vector-tile","web-tile"]);function u(e){return!("feature"!==e.type||e.url||!e.source||"memory"!==e.source.type)}function d(e,t){if(t.restrictedWebMapWriting){const r=function(e){return"basemap"===e.layerContainerType?l:"operational-layers"===e.layerContainerType?c:null}(t);return!Object(n.g)(r)||r.has(e.type)&&!u(e)}return!0}function p(e,t,r){if(!("write"in e)||!e.write)return r&&r.messages&&r.messages.push(new o.a("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,{layer:e})),null;if(d(e,r)){const t={};return e.write(t,r)?t:null}return Object(n.g)(t)&&function(e,t){if(function(e,t){if(u(e)){const r=Object(a.b)("featureCollection.layers",t),i=r&&r[0]&&r[0].layerDefinition;i&&("maxScale"in e&&(i.maxScale=Object(s.b)(e.maxScale)),"minScale"in e&&(i.minScale=Object(s.b)(e.minScale)))}else"group"!==e.type&&("maxScale"in e&&(t.maxScale=Object(s.b)(e.maxScale)),"minScale"in e&&(t.minScale=Object(s.b)(e.minScale)))}(e,t),"blendMode"in e&&(t.blendMode=e.blendMode,"normal"===t.blendMode&&delete t.blendMode),t.opacity=Object(s.b)(e.opacity),t.title=e.title||"Layer",t.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type)if(u(e)){const r=t.featureCollection;r&&(r.showLegend=e.legendEnabled)}else t.showLegend=e.legendEnabled}(e,t=Object(i.a)(t)),t}},305:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var i=r(18),a=(r(7),r(3)),n=(r(4),r(20)),s=r(19),o=(r(24),r(34),r(35),r(2)),l=r(58),c=r(147),u=r(83);function d(e){return e&&"group"===e.type}function p(e,t,r){let i,a;if(e)for(let n=0,s=e.length;n<s;n++){if(i=e.getItemAt(n),i[t]===r)return i;if(d(i)&&(a=p(i.layers,t,r),a))return a}}const y=a.a.getLogger("esri.support.LayersMixin"),b=e=>{let t=class extends e{constructor(...e){super(...e),this.layers=new l.a;const t=e=>{e.parent=this,this.layerAdded(e),"elevation"!==e.type&&"base-elevation"!==e.type||y.error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`)},r=e=>{e.parent=null,this.layerRemoved(e)};this.layers.on("before-add",e=>{var t;(t=e.item).parent&&"remove"in t.parent&&t.parent.remove(t)}),this.layers.on("after-add",e=>t(e.item)),this.layers.on("after-remove",e=>r(e.item))}destroy(){const e=this.layers.removeAll();for(const t of e)this.layerRemoved(t),t.destroy();this.layers.destroy()}set layers(e){this._set("layers",Object(c.b)(e,this._get("layers")))}add(e,t){const r=this.layers;t=r.getNextIndex(t),e instanceof u.a?e.parent===this?this.reorder(e,t):r.add(e,t):Object(o.n)(e)?e.then(e=>{this.destroyed||this.add(e,t)}):y.error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")}addMany(e,t){const r=this.layers;t=r.getNextIndex(t),e.slice().forEach(e=>{e.parent!==this?(r.add(e,t),t+=1):this.reorder(e,t)})}findLayerById(e){return p(this.layers,"id",e)}findLayerByUid(e){return p(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,t){return this.layers.reorder(e,t)}layerAdded(e){}layerRemoved(e){}};return Object(i.a)([Object(n.b)()],t.prototype,"layers",null),t=Object(i.a)([Object(s.a)("esri.support.LayersMixin")],t),t}},306:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var i=r(18),a=(r(7),r(3)),n=(r(4),r(20)),s=r(19),o=(r(24),r(34),r(35),r(58)),l=r(147);const c=a.a.getLogger("esri.support.TablesMixin");function u(e){return e&&"group"===e.type}function d(e,t,r){if(e)for(let i=0,a=e.length;i<a;i++){const a=e.getItemAt(i);if(a[t]===r)return a;if(u(a)){const e=d(a.tables,t,r);if(e)return e}}}const p=e=>{let t=class extends e{constructor(...e){super(...e),this.tables=new o.a,this.tables.on("after-add",e=>{const t=e.item;t.parent&&t.parent!==this&&"tables"in t.parent&&t.parent.tables.remove(t),t.parent=this,"feature"!==t.type&&c.error(`Layer 'title:${t.title}, id:${t.id}' of type '${t.type}' is not supported as a table and will therefore be ignored.`)}),this.tables.on("after-remove",e=>{e.item.parent=null})}destroy(){const e=this.tables.removeAll();for(const t of e)t.destroy();this.tables.destroy()}set tables(e){this._set("tables",Object(l.b)(e,this._get("tables")))}findTableById(e){return d(this.tables,"id",e)}findTableByUid(e){return d(this.tables,"uid",e)}};return Object(i.a)([Object(n.b)()],t.prototype,"tables",null),t=Object(i.a)([Object(s.a)("esri.support.TablesMixin")],t),t}},330:function(e,t,r){"use strict";r.r(t);var i=r(18),a=(r(7),r(1)),n=(r(3),r(4),r(6)),s=r(20),o=r(19),l=r(51),c=(r(24),r(34),r(35),r(2)),u=r(172),d=r(250),p=r(83),y=r(305),b=r(306),f=r(84),h=r(128),m=r(98),v=r(95);let O=class extends(Object(h.a)(Object(m.a)(Object(v.a)(Object(b.a)(Object(y.a)(Object(f.a)(p.a))))))){constructor(e){super(e),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this)}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}_writeLayers(e,t,r,i){const n=[];if(!e)return n;e.forEach(e=>{const t=Object(d.a)(e,i.webmap?i.webmap.getLayerJSONFromResourceInfo(e):null,i);Object(a.g)(t)&&t.layerType&&n.push(t)}),t.layers=n}set portalItem(e){this._set("portalItem",e)}set visibilityMode(e){const t=this._get("visibilityMode")!==e;this._set("visibilityMode",e),t&&this._enforceVisibility(e,this.visible)}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e)),Object(c.s)(this)}loadAll(){return Object(u.a)(this,e=>{e(this.layers)})}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this._visibilityHandles[e.uid]=e.watch("visible",this._visibilityWatcher,!0)}layerRemoved(e){const t=this._visibilityHandles[e.uid];t&&(t.remove(),delete this._visibilityHandles[e.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(t=>{t!==e&&(t.visible=!1)})}_enforceVisibility(e,t){if(!Object(n.a)(this).initialized)return;const r=this.layers;let i=r.find(e=>e.visible);switch(e){case"exclusive":r.length&&!i&&(i=r.getItemAt(0),i.visible=!0),this._turnOffOtherLayers(i);break;case"inherited":r.forEach(e=>{e.visible=t})}}_visibleWatcher(e){"inherited"===this.visibilityMode&&this.layers.forEach(t=>{t.visible=e})}_visibilityWatcher(e,t,r,i){const a=i;switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(a):this._isAnyLayerVisible()||(a.visible=!0);break;case"inherited":a.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};Object(i.a)([Object(s.b)()],O.prototype,"fullExtent",void 0),Object(i.a)([Object(s.b)({json:{read:!1,write:{ignoreOrigin:!0}}})],O.prototype,"layers",void 0),Object(i.a)([Object(l.a)("layers")],O.prototype,"_writeLayers",null),Object(i.a)([Object(s.b)({type:["GroupLayer"]})],O.prototype,"operationalLayerType",void 0),Object(i.a)([Object(s.b)({json:{origins:{"web-document":{read:!1,write:!1}}}})],O.prototype,"portalItem",null),Object(i.a)([Object(s.b)()],O.prototype,"spatialReference",void 0),Object(i.a)([Object(s.b)({json:{read:!1},readOnly:!0,value:"group"})],O.prototype,"type",void 0),Object(i.a)([Object(s.b)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],O.prototype,"visibilityMode",null),O=Object(i.a)([Object(o.a)("esri.layers.GroupLayer")],O);var j=O;t.default=j},72:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return h})),r.d(t,"f",(function(){return m})),r.d(t,"g",(function(){return u})),r.d(t,"h",(function(){return f})),r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return p}));var i=r(6),a=r(89),n=r(86),s=r(156),o=r(93),l=r(140);const c={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader(e,t){if(null!=t.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return t.screenSizePerspective;Object(i.a)(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer(e,t,r,i){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||Object(n.a)(this,"screenSizePerspectiveEnabled",{},i))&&(t[r]=e)}}}}}},u={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},d={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},p={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:a.f}}},y={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},b={value:null,type:l.a,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function f(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const h={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},m={...h,json:{...h.json,origins:{"web-document":{...h.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?Object(s.b)(t.layerDefinition.drawingInfo.transparency):void 0:Object(s.b)(t.drawingInfo.transparency)}}},v={type:o.a,dependsOn:["view.timeExtent","layer.timeExtent","layer.timeInfo","layer.timeOffset","layer.timeOffset.value","layer.timeOffset.unit","layer.useViewTime"],readOnly:!0,get(){var e,t;if(null==(e=this.layer)||!e.timeInfo)return null;const r=null==(t=this.view)?void 0:t.timeExtent,i=this.layer.timeExtent,a=this.layer.useViewTime?r&&i?r.intersection(i):r||i:i;if(!a||a.isEmpty)return a;const n=this.layer.timeOffset,s=n?a.offset(-n.value,n.unit):a,o=this._get("timeExtent");return s.equals(o)?o:s}}},73:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(92),a=r(67);const n={inches:Object(a.a)(1,"meters","inches"),feet:Object(a.a)(1,"meters","feet"),"us-feet":Object(a.a)(1,"meters","us-feet"),yards:Object(a.a)(1,"meters","yards"),miles:Object(a.a)(1,"meters","miles"),"nautical-miles":Object(a.a)(1,"meters","nautical-miles"),millimeters:Object(a.a)(1,"meters","millimeters"),centimeters:Object(a.a)(1,"meters","centimeters"),decimeters:Object(a.a)(1,"meters","decimeters"),meters:Object(a.a)(1,"meters","meters"),kilometers:Object(a.a)(1,"meters","kilometers"),"decimal-degrees":1/Object(a.g)(1,"meters",i.a.radius)}},95:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var i=r(18),a=(r(7),r(3)),n=(r(4),r(20)),s=r(52),o=r(19),l=r(51),c=r(14),u=r(24),d=(r(34),r(35),r(2)),p=r(75),y=r(97);const b=a.a.getLogger("esri.layers.mixins.PortalLayer"),f=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]}}destroy(){var e;null==(e=this.portalItem)||e.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new y.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(72).then(r.bind(null,208));return Object(d.u)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw b.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||p.a.getDefault());return r&&i&&!Object(u.q)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new c.a("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return Object(i.a)([Object(n.b)({type:y.default})],t.prototype,"portalItem",null),Object(i.a)([Object(s.a)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),Object(i.a)([Object(l.a)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),Object(i.a)([Object(n.b)()],t.prototype,"resourceReferences",void 0),t=Object(i.a)([Object(o.a)("esri.layers.mixins.PortalLayer")],t),t}},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var i=r(18),a=(r(7),r(3),r(4),r(20)),n=r(19),s=r(51),o=r(14),l=(r(24),r(34),r(35),r(121)),c=r(86);const u={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,ArcGISFeatureLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,VectorTileLayer:!0,WFS:!0,SubtypeGroupLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}};var d=r(72);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.title=null}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&Object(c.a)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r,i){!e||i&&"tables"===i.layerContainerType||(t.layerType=e)}writeTitle(e,t){t.title=e||"Layer"}read(e,t){t&&(t.layer=this),Object(l.b)(this,e,t=>super.read(e,t),t)}write(e,t){if(t&&t.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=u[e];let i=r&&r[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),!i)return t.messages&&t.messages.push(new o.a("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter(e=>e instanceof o.a&&"web-document-write:property-required"===e.name).length;return!this.url&&i?null:r}beforeSave(){}};return Object(i.a)([Object(a.b)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),Object(i.a)([Object(a.b)({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"listMode",void 0),Object(i.a)([Object(s.a)("listMode")],t.prototype,"writeListMode",null),Object(i.a)([Object(a.b)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),Object(i.a)([Object(s.a)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),Object(i.a)([Object(a.b)(d.e)],t.prototype,"opacity",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,allowNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),Object(i.a)([Object(s.a)("title")],t.prototype,"writeTitle",null),Object(i.a)([Object(a.b)({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],t.prototype,"visible",void 0),t=Object(i.a)([Object(n.a)("esri.layers.mixins.OperationalLayer")],t),t}}});