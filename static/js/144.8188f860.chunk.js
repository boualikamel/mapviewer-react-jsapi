(this["webpackJsonpjsapi-create-react-app"]=this["webpackJsonpjsapi-create-react-app"]||[]).push([[144],{946:function(e,t,s){"use strict";s.r(t),s.d(t,"Colorize",(function(){return a}));s(7),s(239);var i=s(77),r=(s(286),s(428),s(654));class a{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:{a_position:0}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,s){const{width:i,height:r}=t;this._createOrResizeResources(e,i,r);const{context:a,painter:n}=e,{materialManager:o}=n,c=this._programDesc,h=this._quad,p=s.colorMatrix;h.bind();const l=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,i,r,0,0,l),a.setBlendingEnabled(!1),a.setStencilTestEnabled(!1);const u=o.getProgram(e,c);a.bindProgram(u),a.bindTexture(l,2),u.setUniformMatrix4fv("u_coefficients",p),u.setUniform1i("u_colorTexture",2),h.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0),h.unbind()}_createOrResizeResources(e,t,s){const{context:a}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===s||(this._size[0]=t,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(t,s):this._layerFBOTexture=new i.a(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:t,height:s}),this._quad||(this._quad=new r.a(a,[-1,-1,1,-1,-1,1,1,1])))}}}}]);