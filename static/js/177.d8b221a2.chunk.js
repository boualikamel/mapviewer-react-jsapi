(this["webpackJsonptesting-ant-cra"]=this["webpackJsonptesting-ant-cra"]||[]).push([[177],{1093:function(e,t,i){"use strict";i.r(t),i.d(t,"Blur",(function(){return l}));var r=i(4),s=i(5),a=(i(144),i(440)),n=(i(13),i(102),i(338),i(539),i(143),i(266),i(734)),u=[1,0],o=[0,1],l=function(){function e(){Object(r.a)(this,e),this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}return Object(s.a)(e,[{key:"dispose",value:function(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}},{key:"draw",value:function(e,t,i){var r=e.context,s=i.type,a=i.radius;if(0!==a){this._createOrResizeResources(e),this._quad||(this._quad=new n.a(r,[-1,-1,1,-1,-1,1,1,1]));var u=this._quad;u.bind(),"blur"===s?this._gaussianBlur(e,t,a):this._radialBlur(e,t),u.unbind()}}},{key:"_gaussianBlur",value:function(e,t,i){var r=e.context,s=e.state,a=e.painter,n=e.pixelRatio,l=s.size,d=a.materialManager,c=this._programDesc,h=this._quad,p=[Math.round(n*l[0]),Math.round(n*l[1])],b=this._blurFBO,_=d.getProgram(e,c.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);r.useProgram(_),r.setBlendingEnabled(!1),r.bindFramebuffer(b),r.bindTexture(t.colorTexture,4),_.setUniform1i("u_colorTexture",4),_.setUniform2fv("u_texSize",p),_.setUniform2fv("u_direction",u),_.setUniform1f("u_sigma",i),h.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.bindTexture(b.colorTexture,5),_.setUniform1i("u_colorTexture",5),_.setUniform2fv("u_direction",o),h.draw(),r.setBlendingEnabled(!0),r.setBlendFunction(1,771),r.setStencilTestEnabled(!0)}},{key:"_radialBlur",value:function(e,t){var i=e.context,r=e.painter.materialManager,s=this._programDesc,a=this._quad,n=this._blurFBO;i.bindFramebuffer(n);var u=r.getProgram(e,s.radialBlur);i.useProgram(u),i.setBlendingEnabled(!1),i.bindTexture(t.colorTexture,4),u.setUniform1i("u_colorTexture",4),a.draw(),i.bindFramebuffer(t),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setBlendingEnabled(!0);var o=r.getProgram(e,s.blit);i.useProgram(o),i.bindTexture(n.colorTexture,5),o.setUniform1i("u_texture",5),i.setBlendFunction(1,771),a.draw()}},{key:"_createOrResizeResources",value:function(e){var t=e.context,i=e.state,r=e.pixelRatio,s=i.size,n=Math.round(r*s[0]),u=Math.round(r*s[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===u||(this._size[0]=n,this._size[1]=u,this._blurFBO?this._blurFBO.resize(n,u):this._blurFBO=new a.a(t,{colorTarget:0,depthStencilTarget:0,width:n,height:u},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:u}))}}]),e}()}}]);
//# sourceMappingURL=177.d8b221a2.chunk.js.map