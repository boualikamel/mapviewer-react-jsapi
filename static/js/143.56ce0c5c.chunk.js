(this["webpackJsonpjsapi-create-react-app"]=this["webpackJsonpjsapi-create-react-app"]||[]).push([[143],{947:function(t,e,s){"use strict";s.r(e),s.d(e,"Blur",(function(){return o}));s(7),s(29),s(239);var r=s(286),i=(s(428),s(654));const a=[1,0],n=[0,1];class o{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(t,e,s){const{context:r}=t,{type:a,radius:n}=s;if(0===n)return;this._createOrResizeResources(t),this._quad||(this._quad=new i.a(r,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(t,e,n):this._radialBlur(t,e),o.unbind()}_gaussianBlur(t,e,s){const{context:r,state:i,painter:o,pixelRatio:u}=t,{size:l}=i,{materialManager:d}=o,c=this._programDesc,p=this._quad,h=[Math.round(u*l[0]),Math.round(u*l[1])],b=this._blurFBO,_=d.getProgram(t,c.gaussianBlur,[{name:"radius",value:Math.ceil(s)}]);r.bindProgram(_),r.setBlendingEnabled(!1),r.bindFramebuffer(b),r.bindTexture(e.colorTexture,4),_.setUniform1i("u_colorTexture",4),_.setUniform2fv("u_texSize",h),_.setUniform2fv("u_direction",a),_.setUniform1f("u_sigma",s),p.draw(),r.bindFramebuffer(e),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.bindTexture(b.colorTexture,5),_.setUniform1i("u_colorTexture",5),_.setUniform2fv("u_direction",n),p.draw(),r.setBlendingEnabled(!0),r.setBlendFunction(1,771),r.setStencilTestEnabled(!0)}_radialBlur(t,e){const{context:s,painter:r}=t,{materialManager:i}=r,a=this._programDesc,n=this._quad,o=this._blurFBO;s.bindFramebuffer(o);const u=i.getProgram(t,a.radialBlur);s.bindProgram(u),s.setBlendingEnabled(!1),s.bindTexture(e.colorTexture,4),u.setUniform1i("u_colorTexture",4),n.draw(),s.bindFramebuffer(e),s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setDepthWriteEnabled(!1),s.setDepthTestEnabled(!1),s.setBlendingEnabled(!0);const l=i.getProgram(t,a.blit);s.bindProgram(l),s.bindTexture(o.colorTexture,5),l.setUniform1i("u_texture",5),s.setBlendFunction(1,771),n.draw()}_createOrResizeResources(t){const{context:e,state:s,pixelRatio:i}=t,{size:a}=s,n=Math.round(i*a[0]),o=Math.round(i*a[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===o||(this._size[0]=n,this._size[1]=o,this._blurFBO?this._blurFBO.resize(n,o):this._blurFBO=new r.a(e,{colorTarget:0,depthStencilTarget:0,width:n,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:o}))}}}}]);