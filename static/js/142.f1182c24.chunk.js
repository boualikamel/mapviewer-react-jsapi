(this["webpackJsonptesting-ant-cra"]=this["webpackJsonptesting-ant-cra"]||[]).push([[142],{1212:function(e,t,a){"use strict";a.r(t);var r=a(11),i=a(8),n=a.n(i),s=a(14),o=a(4),u=a(5),c=a(6),l=a(7),h=a(0),p=a(22),y=a(12),b=a(25),m=a(1),v=(a(13),a(16),a(9)),f=a(53),d=a(754),g=a(627),O=a(793),j=a(611),w=a(375),x=a(106),k=a(911),P=function(e){var t=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"initialize",value:function(){this.exportImageParameters=new k.a({layer:this.layer})}},{key:"destroy",value:function(){this.exportImageParameters.destroy(),this.exportImageParameters=null}},{key:"exportImageVersion",get:function(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}},{key:"fetchPopupFeatures",value:function(e){var t=this.layer;if(!e)return Promise.reject(new p.a("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));var a=t.popupEnabled;if(!a)return Promise.reject(new p.a("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:a}));var r=this.createFetchPopupFeaturesQuery(e);if(!r)return Promise.resolve([]);var i=r.extent,n=r.width,s=r.height,o=r.x,u=r.y;if(!(i&&n&&s))throw new p.a("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:n,height:s});var c=t.fetchFeatureInfo(i,n,s,o,u);return Promise.resolve(c?[c]:[])}}]),a}(e);return Object(h.a)([Object(m.b)()],t.prototype,"exportImageParameters",void 0),Object(h.a)([Object(m.b)({readOnly:!0})],t.prototype,"exportImageVersion",null),Object(h.a)([Object(m.b)()],t.prototype,"layer",void 0),Object(h.a)([Object(m.b)(x.a)],t.prototype,"timeExtent",void 0),t=Object(h.a)([Object(v.a)("esri.layers.mixins.WMSLayerView")],t)},S=y.a.getLogger("esri.views.2d.layers.WMSLayerView2D"),I=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"initialize",value:function(){var e=this.layer,t=this.view;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Promise.reject(new p.a("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))}},{key:"hitTest",value:function(){return null}},{key:"update",value:function(e){this.strategy.update(e).catch((function(e){Object(b.m)(e)||S.error(e)}))}},{key:"attach",value:function(){var e=this,t=this.layer,a=t.imageMaxHeight,r=t.imageMaxWidth;this._bitmapContainer=new d.a,this.container.addChild(this._bitmapContainer),this.strategy=new O.a({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:a,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(function(){return e.requestUpdate()})),"exportImageVersion")}},{key:"detach",value:function(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"createFetchPopupFeaturesQuery",value:function(e){var t=this.view,a=this._bitmapContainer,r=e.x,i=e.y,n=t.spatialReference,s=null,o=0,u=0;if(a.children.some((function(e){var t=e.width,a=e.height,c=e.resolution,l=e.x,h=e.y,p=l+c*t,y=h-c*a;return r>=l&&r<=p&&i<=h&&i>=y&&(s=new f.a({xmin:l,ymin:y,xmax:p,ymax:h,spatialReference:n}),o=t,u=a,!0)})),!s)return null;var c=s.width/o,l=Math.round((r-s.xmin)/c),h=Math.round((s.ymax-i)/c);return{extent:s,width:o,height:u,x:l,y:h}}},{key:"doRefresh",value:function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}},{key:"fetchImage",value:function(e,t,a,i){return this.layer.fetchImage(e,t,a,Object(r.a)({timeExtent:this.timeExtent,timestamp:this.refreshTimestamp},i))}}]),a}(P(Object(w.a)(Object(g.a)(j.a))));Object(h.a)([Object(m.b)()],I.prototype,"strategy",void 0),Object(h.a)([Object(m.b)()],I.prototype,"updating",void 0);var M=I=Object(h.a)([Object(v.a)("esri.views.2d.layers.WMSLayerView2D")],I);t.default=M},911:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var r=a(4),i=a(5),n=a(6),s=a(7),o=a(0),u=a(36),c=a(113),l=a(1),h=(a(13),a(16),a(12),a(9)),p={visible:"visibleSublayers"},y=function(e){Object(n.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).scale=0,i}return Object(i.a)(a,[{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(p[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join(",")}},{key:"version",get:function(){this.commitProperty("layers");var e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this.layer,t=this.scale,a=null==e?void 0:e.sublayers,r=[];return null==a||a.forEach((function e(a){var i=a.minScale,n=a.maxScale,s=a.sublayers;a.visible&&(0===t||(0===i||t<=i)&&(0===n||t>=n))&&(s?s.forEach(e):r.unshift(a))})),r}},{key:"toJSON",value:function(){var e=this.layer,t=this.layers;return{format:e.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:e.imageTransparency,version:e.version,layers:t}}}]),a}(Object(c.b)(u.a));Object(o.a)([Object(l.b)()],y.prototype,"layer",null),Object(o.a)([Object(l.b)({readOnly:!0})],y.prototype,"layers",null),Object(o.a)([Object(l.b)({type:Number})],y.prototype,"scale",void 0),Object(o.a)([Object(l.b)({readOnly:!0})],y.prototype,"version",null),Object(o.a)([Object(l.b)({readOnly:!0})],y.prototype,"visibleSublayers",null),y=Object(o.a)([Object(h.a)("esri.layers.support.ExportWMSImageParameters")],y)}}]);
//# sourceMappingURL=142.f1182c24.chunk.js.map