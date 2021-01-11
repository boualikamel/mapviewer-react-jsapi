(this["webpackJsonpjsapi-create-react-app"]=this["webpackJsonpjsapi-create-react-app"]||[]).push([[53],{658:function(e,t,r){"use strict";var s=r(0),a=(r(7),r(6),r(10),r(1)),o=r(36),i=r(3),n=(r(5),r(11),r(12),r(17));const l=new o.a({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let c=class extends n.a{constructor(e){super(e),this.description=null,this.type=null}};Object(s.a)([Object(a.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(s.a)([Object(a.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(i.a)("esri.tasks.support.GPMessage")],c);var p=c;t.a=p},683:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));class s{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach((e=>{const s=this._options[e];if(s){const a="boolean"!=typeof s&&s.name?s.name:e,o="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=o&&(r[a]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(o)?o.join(","):"object"==typeof o?JSON.stringify(o):o)}else r[e]=t[e]}),this),r}}function a(e){return new s(e)}},684:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r(0),a=(r(7),r(72)),o=r(2),i=(r(6),r(10),r(1),r(3)),n=r(13),l=r(5),c=(r(11),r(12),r(47)),p=r(454);const u=e=>{let t=class extends e{async getServiceDescription(){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),this._serviceDescriptionPromise}async _fetchServiceDescription(){if(!this.url||!this.parsedUrl)throw new n.a("network-service:missing-url","Url to Network service is missing");const e=this.url,{data:t}=await Object(c.default)(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let a=0;a<t.supportedTravelModes.length;a++)t.supportedTravelModes[a].id||(t.supportedTravelModes[a].id=t.supportedTravelModes[a].itemId);const r=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:t,defaultTravelMode:r}}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:t,defaultTravelMode:r}}catch(e){throw new n.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e):async function(e){const{data:t}=await Object(c.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:r}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),s=Object(a.b)("helperServices.routingUtilities.url",r);if(!s)return{supportedTravelModes:[],defaultTravelMode:null};const o=Object(l.I)(e),i=/\/solveClosestFacility$/.test(o.path)?"Route":/\/solveClosestFacility$/.test(o.path)?"ClosestFacility":"ServiceAreas",n=await Object(c.default)(s+("/"===s[s.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:i}}),p=[];let u=null;if(n&&n.data&&n.data.results&&n.data.results.length){const e=n.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);p.push(t)}}else"defaultTravelMode"===t.paramName&&(u=t.value)}return{supportedTravelModes:p,defaultTravelMode:u}}(e),{defaultTravelMode:s,supportedTravelModes:o}=await r;return t.defaultTravelMode=s,t.supportedTravelModes=o,t}_isInputGeometryZAware(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(o.i)(e)&&e.hasZ)return!0}return!1}_dropZValuesOffInputGeometry(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}};return t=Object(s.a)([Object(i.a)("esri.tasks.mixins.NAServiceDescription")],t),t};let d=class extends(u(p.a)){};d=Object(s.a)([Object(i.a)("esri.tasks.mixins.NAServiceDescription")],d)},685:function(e,t,r){"use strict";var s=r(0),a=(r(7),r(6),r(10),r(1)),o=r(36),i=r(3),n=(r(5),r(11),r(12),r(658));const l=new o.a({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let c=class extends n.a{constructor(e){super(e),this.type=null}};Object(s.a)([Object(a.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(i.a)("esri.tasks.support.NAMessage")],c);var p=c;t.a=p},980:function(e,t,r){"use strict";r.r(t);var s=r(0),a=(r(7),r(6),r(10),r(1)),o=r(3),i=(r(5),r(11),r(12),r(9)),n=r(47),l=r(449),c=r(454),p=r(683),u=r(684),d=r(2),f=r(21),y=r(17),b=r(30),v=r(33),h=r(86),j=r(95),O=r(63),g=(r(69),r(98)),m=r(685);function M(e){return e.features.map((t=>{const r=b.a.fromJSON(e.spatialReference),s=g.a.fromJSON(t);return Object(d.o)(s.geometry).spatialReference=r,s}))}function T(e){return e.features.map((t=>(t.geometry.spatialReference=e.spatialReference,Object(O.a)(t.geometry))))}let w=class extends y.a{constructor(e){super(e),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(e){return T(e)}readPointBarriers(e,t){return T(t.barriers)}readPolylineBarriers(e){return T(e)}readPolygonBarriers(e){return T(e)}readIncidents(e,t){return M(t.saPolylines)}readServiceAreaPolygons(e,t){return M(t.saPolygons)}};Object(s.a)([Object(a.b)({type:[v.a]})],w.prototype,"facilities",void 0),Object(s.a)([Object(f.a)("facilities")],w.prototype,"readFacilities",null),Object(s.a)([Object(a.b)({type:[m.a]})],w.prototype,"messages",void 0),Object(s.a)([Object(a.b)({type:[v.a]})],w.prototype,"pointBarriers",void 0),Object(s.a)([Object(f.a)("pointBarriers",["barriers"])],w.prototype,"readPointBarriers",null),Object(s.a)([Object(a.b)({type:[j.a]})],w.prototype,"polylineBarriers",void 0),Object(s.a)([Object(f.a)("polylineBarriers")],w.prototype,"readPolylineBarriers",null),Object(s.a)([Object(a.b)({type:[h.a]})],w.prototype,"polygonBarriers",void 0),Object(s.a)([Object(f.a)("polygonBarriers")],w.prototype,"readPolygonBarriers",null),Object(s.a)([Object(a.b)({type:[g.a]})],w.prototype,"serviceAreaPolylines",void 0),Object(s.a)([Object(f.a)("serviceAreaPolylines",["saPolylines"])],w.prototype,"readIncidents",null),Object(s.a)([Object(a.b)({type:[g.a]})],w.prototype,"serviceAreaPolygons",void 0),Object(s.a)([Object(f.a)("serviceAreaPolygons",["saPolygons"])],w.prototype,"readServiceAreaPolygons",null),w=Object(s.a)([Object(o.a)("esri.tasks.support.ServiceAreaSolveResult")],w);var B=w;const S=Object(p.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});let P=class extends(Object(u.a)(c.a)){constructor(e){super(e),this.url=null}solve(e,t){const r=[],s=[],a={},o={};return e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,s,"facilities.features",a),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,s,"pointBarriers.features",a),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,s,"polylineBarriers.features",a),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,s,"polygonBarriers.features",a),Object(l.a)(s).then((e=>{for(const t in a){const s=a[t];r.push(t),o[t]=e.slice(s[0],s[1])}return this._isInputGeometryZAware(o,r)?this.getServiceDescription():Object(i.u)({dontCheck:!0})})).then((s=>{("dontCheck"in s?s.dontCheck:s.hasZ)||this._dropZValuesOffInputGeometry(o,r);for(const t in o)o[t].forEach(((r,s)=>{e.get(t)[s].geometry=r}));let a={query:{...this.parsedUrl.query,f:"json",...S.toQueryParams(e)}};return(this.requestOptions||t)&&(a={...this.requestOptions,...t,...a}),Object(n.default)(`${this.parsedUrl.path}/solveServiceArea`,a)})).then((e=>B.fromJSON(e.data)))}_collectGeometries(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}};Object(s.a)([Object(a.b)()],P.prototype,"url",void 0),P=Object(s.a)([Object(o.a)("esri.tasks.ServiceAreaTask")],P);var A=P;t.default=A}}]);