(this["webpackJsonpjsapi-create-react-app"]=this["webpackJsonpjsapi-create-react-app"]||[]).push([[38],{674:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var r,a=o(20),i=o(298);function n(e){e.fragment.include(i.a),e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("shadowMapNum","int"),e.fragment.uniforms.add("shadowMapDistance","vec4"),e.fragment.uniforms.add("shadowMapMatrix","mat4",4),e.fragment.uniforms.add("depthHalfPixelSz","float"),e.fragment.code.add(a.a`
    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      float halfPixelSize = depthHalfPixelSz;
      vec4 distance = shadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      if (i >= shadowMapNum) { return 0.0; }

      mat4 mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;

      // vertex completely outside? -> no shadow
      vec3 lvpos = 0.5 * lv.xyz + vec3(0.5);
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;

      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s10 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s11 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s01 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }
  `)}(r=n||(n={})).bindUniforms=function(e,t,o){t.shadowMappingEnabled&&(t.shadowMap.bind(e,o),t.shadowMap.bindView(e,t.origin))},r.bindViewCustomOrigin=function(e,t,o){t.shadowMappingEnabled&&t.shadowMap.bindView(e,o)},r.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}},675:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r=o(20);function a(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(r.a`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(r.a`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===t.attributeTextureCoordinates&&e.vertex.code.add(r.a`
      void forwardTextureCoordinates() {}
    `)}},677:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var r=o(20);function a(e){const t=r.a`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function i(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(r.a`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(a),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(r.a`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.a`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}},689:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var r,a=o(15),i=o(20),n=o(476),s=o(740);function c(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(s.a,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[i.a`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,i.a`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?i.a`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,i.a`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,i.a`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangets?i.a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:i.a``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),2===t.output&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4])}(r=c||(c={})).Uniforms=class{},r.bindCustomOrigin=function(e,t){Object(n.b)(t,l,d,3),e.setUniform3fv("viewOriginHi",l),e.setUniform3fv("viewOriginLo",d)};const l=Object(a.e)(),d=Object(a.e)()},690:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var r=o(20),a=o(53),i=o(806);Object(a.c)(0,.6,.2);function n(e,t){const o=e.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&e.include(i.a,t),2!==t.pbrMode?(0===t.pbrMode&&o.code.add(r.a`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(o.uniforms.add("emissionFactor","vec3"),o.uniforms.add("mrrFactors","vec3"),o.code.add(r.a`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(o.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texMetallicRoughnessSize","vec2"),o.code.add(r.a`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(o.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texEmissionSize","vec2"),o.code.add(r.a`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(o.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texOcclusionSize","vec2"),o.code.add(r.a`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):o.code.add(r.a`
      float getBakedOcclusion() { return 1.0; }
      `),o.code.add(r.a`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):o.code.add(r.a`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}(n||(n={})).bindUniforms=function(e,t,o=!1){o||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},691:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r=o(20);function a(e){e.attributes.add("position","vec3"),e.vertex.code.add(r.a`
    vec3 positionModel() { return position; }
  `)}},692:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r=o(20);function a(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add("ssaoTex","sampler2D"),o.uniforms.add("viewportPixelSz","vec4"),o.code.add(r.a`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):o.code.add(r.a`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}},695:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var r=o(20),a=o(467);function i(e){const t=e.fragment.code;t.add(r.a`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(r.a`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(r.a`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function n(e,t){const o=e.fragment.code;e.include(a.a),3===t.pbrMode||4===t.pbrMode?(o.add(r.a`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),o.add(r.a`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),o.add(r.a`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),o.add(r.a`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),o.add(r.a`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(i),o.add(r.a`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),o.add(r.a`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),o.add(r.a`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),o.add(r.a`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),o.add(r.a`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),o.add(r.a`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}},717:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r=o(20);function a(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(r.a`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("uCameraNearFar","vec2"),e.vertex.code.add(r.a`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);
      }
    `)):e.vertex.code.add(r.a`
      void forwardLinearDepth() {}
    `)}},718:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r=o(20);function a(e){e.vertex.code.add(r.a`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}},719:function(e,t,o){"use strict";o.d(t,"a",(function(){return f}));var r=o(20),a=o(457),i=o(167),n=o(202),s=o(290),c=o(201),l=o(369),d=o(675),u=o(677),m=o(779);function f(e,t){const o=e.vertex.code,f=e.fragment.code;1!==t.output&&3!==t.output||(e.include(a.a,{linearDepth:!0}),e.include(d.a,t),e.include(s.a,t),e.include(l.a,t),e.include(i.a,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(r.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(c.a,t),f.add(r.a`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?r.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(a.a,{linearDepth:!1}),e.include(u.a,t),e.include(m.a,t),e.include(d.a,t),e.include(s.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),o.add(r.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?r.a`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(i.a,t),e.include(c.a,t),f.add(r.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?r.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?r.a`
            vec3 normal = screenDerivativeNormal(vPositionView);`:r.a`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(a.a,{linearDepth:!1}),e.include(d.a,t),e.include(s.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(r.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(i.a,t),e.include(c.a,t),e.include(n.a),f.add(r.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?r.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},720:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var r=o(20),a=o(293);function i(e){e.include(a.a),e.code.add(r.a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r.a.int(1)}) {
        return allMixed;
      }
      else if (mode == ${r.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${r.a.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${r.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${r.a.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},729:function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var r=o(20),a=o(467),i=o(674),n=o(695),s=o(692);function c(e,t){const o=e.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(o.uniforms.add("lightingAmbientSH0","vec3"),o.code.add(r.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===a?(o.uniforms.add("lightingAmbientSH_R","vec4"),o.uniforms.add("lightingAmbientSH_G","vec4"),o.uniforms.add("lightingAmbientSH_B","vec4"),o.code.add(r.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===a&&(o.uniforms.add("lightingAmbientSH0","vec3"),o.uniforms.add("lightingAmbientSH_R1","vec4"),o.uniforms.add("lightingAmbientSH_G1","vec4"),o.uniforms.add("lightingAmbientSH_B1","vec4"),o.uniforms.add("lightingAmbientSH_R2","vec4"),o.uniforms.add("lightingAmbientSH_G2","vec4"),o.uniforms.add("lightingAmbientSH_B2","vec4"),o.code.add(r.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||o.code.add(r.a`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}function l(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(r.a`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}function d(e,t){const o=e.fragment;e.include(l),e.include(s.a,t),0!==t.pbrMode&&e.include(n.a,t),e.include(c,t),t.receiveShadows&&e.include(i.a,t),o.uniforms.add("lightingGlobalFactor","float"),o.uniforms.add("ambientBoostFactor","float"),e.include(a.a),o.code.add(r.a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.useOldSceneLightInterface?o.code.add(r.a`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(1===t.viewingMode?o.code.add(r.a`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):o.code.add(r.a`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),o.code.add(r.a`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===t.pbrMode||4===t.pbrMode?o.code.add(r.a`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==t.pbrMode&&2!==t.pbrMode||(o.code.add(r.a`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),o.code.add(r.a`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),o.code.add(r.a`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),o.code.add(r.a`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),o.code.add(r.a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?r.a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:r.a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}},740:function(e,t,o){"use strict";o.d(t,"a",(function(){return v})),o.d(t,"b",(function(){return b}));var r=o(7),a=o(20),i=o(2),n=(o(29),o(15)),s=o(200),c=o(16),l=o(114),d=o(179),u=o(476),m=o(286);o(428);class f{constructor(e){this.context=e,this._doublePrecisionRequiresObfuscation=null}get doublePrecisionRequiresObfuscation(){if(Object(i.h)(this._doublePrecisionRequiresObfuscation)){const e=h(this.context,!1),t=h(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let p=null;function h(e,t){const o=new m.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),r=l.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),a=new d.a(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:r}),i=Object(n.g)(5633261.287538229,2626832.878767164,1434988.0495278358),f=Object(n.g)(5633271.46742708,2626873.6381334523,1434963.231608387),p=function(o,r){const a=new s.a(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),i=new Float32Array(6);Object(u.a)(o,i,3);const n=new Float32Array(6);return Object(u.a)(r,n,3),e.bindProgram(a),a.setUniform3f("u_highA",i[0],i[2],i[4]),a.setUniform3f("u_lowA",i[1],i[3],i[5]),a.setUniform3f("u_highB",n[0],n[2],n[4]),a.setUniform3f("u_lowB",n[1],n[3],n[5]),a}(i,f),h=e.getBoundFramebufferObject(),{x:v,y:b,width:g,height:x}=e.getViewport();e.bindFramebuffer(o),e.setViewport(0,0,1,1),e.bindVAO(a),e.drawArrays(5,0,4);const y=new Uint8Array(4);o.readPixels(0,0,1,1,6408,5121,y),p.dispose(),a.dispose(!1),r.dispose(),o.dispose(),e.setViewport(v,b,g,x),e.bindFramebuffer(h);const O=(i[2]-f[2])/25,w=Object(c.i)(y);return Math.abs(O-w)}function v({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(a.a`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `):e.add(a.a`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function b(e){return!!Object(r.a)("force-double-precision-obfuscation")||(t=e,(Object(i.h)(p)||p.context!==t)&&(p=new f(t)),p).doublePrecisionRequiresObfuscation;var t}},741:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var r=o(20);function a(e){e.vertex.code.add(r.a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.a.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.a.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.a.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.a.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function i(e,t){t.symbolColor?(e.include(a),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(r.a`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):e.vertex.code.add(r.a`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}},770:function(e,t,o){"use strict";o.d(t,"a",(function(){return R})),o.d(t,"b",(function(){return j}));var r=o(20),a=o(457),i=o(199),n=o(167),s=o(290),c=o(201),l=o(459),d=o(458),u=o(674),m=o(717),f=o(695),p=o(689),h=o(675),v=o(690),b=o(718),g=o(677),x=o(691),y=o(741),O=o(779),w=o(719),C=o(798),T=o(692),S=o(729),M=o(799),A=o(800),_=o(720);function j(e){const t=new i.a,o=t.vertex.code,j=t.fragment.code;return t.include(A.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(x.a),t.varyings.add("vpos","vec3"),t.include(s.a,e),t.include(p.a,e),t.include(l.a,e),0!==e.output&&7!==e.output||(t.include(g.a,e),t.include(a.a,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(b.a),t.include(C.a,e),t.include(O.a,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(h.a,e),t.include(m.a,e),t.include(y.a,e),t.include(d.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),o.add(r.a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${r.a.float(c.c)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?r.a`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(n.a,e),t.include(c.a,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(_.a),j.add(r.a`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?r.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:r.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?r.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(n.a,e),t.include(S.a,e),t.include(T.a,e),t.include(c.a,e),e.receiveShadows&&t.include(u.a,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(v.a,e),t.include(f.a,e),t.fragment.include(_.a),t.include(M.a,e),j.add(r.a`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?r.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:r.a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?r.a`
        vec3 normal = screenDerivativeNormal(localvpos);`:r.a`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?r.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?r.a`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?r.a`vec3 normalGround = normalize(vpos + localOrigin);`:r.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:r.a``}
        ${1===e.pbrMode||2===e.pbrMode?r.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(w.a,e),t}var R=Object.freeze({__proto__:null,build:j})},771:function(e,t,o){"use strict";o.d(t,"a",(function(){return M})),o.d(t,"b",(function(){return S}));var r=o(20),a=o(457),i=o(199),n=o(167),s=o(290),c=o(201),l=o(459),d=o(458),u=o(674),m=o(717),f=o(695),p=o(689),h=o(675),v=o(690),b=o(718),g=o(677),x=o(691),y=o(741),O=o(719),w=o(692),C=o(729),T=o(720);function S(e){const t=new i.a,o=t.vertex.code,S=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(x.a),t.varyings.add("vpos","vec3"),t.include(s.a,e),t.include(p.a,e),t.include(l.a,e),0!==e.output&&7!==e.output||(t.include(g.a,e),t.include(a.a,{linearDepth:!1}),e.offsetBackfaces&&t.include(b.a),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),t.include(h.a,e),t.include(m.a,e),t.include(y.a,e),t.include(d.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),o.add(r.a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${r.a.float(c.c)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(n.a,e),t.include(c.a,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(T.a),S.add(r.a`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?r.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:r.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?r.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(n.a,e),t.include(C.a,e),t.include(w.a,e),t.include(c.a,e),e.receiveShadows&&t.include(u.a,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(v.a,e),t.include(f.a,e),t.fragment.include(T.a),S.add(r.a`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?r.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:r.a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?r.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${r.a`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?r.a`vec3 normalGround = normalize(vpos + localOrigin);`:r.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:r.a``}
        ${1===e.pbrMode||2===e.pbrMode?r.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(O.a,e),t}var M=Object.freeze({__proto__:null,build:S})},779:function(e,t,o){"use strict";o.d(t,"a",(function(){return m}));var r,a=o(20),i=o(677),n=o(15),s=o(225),c=o(88),l=o(740),d=o(691);function u(e,t){e.include(d.a),e.vertex.include(l.a,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(a.a`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(a.a`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}function m(e,t){0===t.normalType||1===t.normalType?(e.include(i.a,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(a.a`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===t.normalType?(e.include(u,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(a.a`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?a.a`normalize(vPositionWorldCameraRelative);`:a.a`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(a.a`
      void forwardNormal() {}
    `)}(r=u||(u={})).ModelTransform=class{constructor(){this.worldFromModel_RS=Object(s.a)(),this.worldFromModel_TH=Object(n.e)(),this.worldFromModel_TL=Object(n.e)()}},r.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=Object(n.e)(),this.worldFromView_TL=Object(n.e)(),this.viewFromCameraRelative_RS=Object(s.a)(),this.projFromView=Object(c.b)()}},r.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},r.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)},(m||(m={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},798:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var r=o(20),a=o(806);function i(e,t){const o=e.fragment;o.uniforms.add("normalTexture","sampler2D"),o.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?o.code.add(r.a`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):o.code.add(r.a`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(r.a`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==t.attributeTextureCoordinates&&(e.include(a.a,t),o.code.add(r.a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},799:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r=o(20);function a(e,t){const o=e.fragment;o.code.add(r.a`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===t.doubleSidedMode?o.code.add(r.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===t.doubleSidedMode?o.code.add(r.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):o.code.add(r.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}},800:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));o(7);var r=o(20);function a(e,t){r.a`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}},806:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var r=o(20),a=o(675);function i(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.a`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      vec2 dUVdx = dFdx(textureCoordinates) * atlasScale;
      vec2 dUVdy = dFdy(textureCoordinates) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}function n(e,t){e.include(a.a,t),e.fragment.code.add(r.a`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(r.a`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===t.attributeTextureCoordinates&&(e.include(i),e.fragment.code.add(r.a`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}},956:function(e,t,o){"use strict";o.r(t),o.d(t,"fetch",(function(){return xt})),o.d(t,"gltfToEngineResources",(function(){return Ot})),o.d(t,"parseUrl",(function(){return yt}));var r=o(2),a=o(15),i=o(4),n=o(58),s=o(405),c=o(225),l=o(88),d=o(121),u=o(80),m=o(6);const f=m.a.getLogger("esri.views.3d.support.buffer.math");function p(e,t,o){if(e.count!==t.count)return void f.error("source and destination buffers need to have the same number of elements");const r=e.count,a=o[0],i=o[1],n=o[2],s=o[4],c=o[5],l=o[6],d=o[8],u=o[9],m=o[10],p=o[12],h=o[13],v=o[14],b=e.typedBuffer,g=e.typedBufferStride,x=t.typedBuffer,y=t.typedBufferStride;for(let f=0;f<r;f++){const e=f*g,t=f*y,o=x[t],r=x[t+1],O=x[t+2];b[e]=a*o+s*r+d*O+p,b[e+1]=i*o+c*r+u*O+h,b[e+2]=n*o+l*r+m*O+v}}function h(e,t,o){if(e.count!==t.count)return void f.error("source and destination buffers need to have the same number of elements");const r=e.count,a=o[0],i=o[1],n=o[2],s=o[3],c=o[4],l=o[5],d=o[6],u=o[7],m=o[8],p=e.typedBuffer,h=e.typedBufferStride,v=t.typedBuffer,b=t.typedBufferStride;for(let f=0;f<r;f++){const e=f*h,t=f*b,o=v[t],r=v[t+1],g=v[t+2];p[e]=a*o+s*r+d*g,p[e+1]=i*o+c*r+u*g,p[e+2]=n*o+l*r+m*g}}function v(e,t,o){const r=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<r;c++){const e=c*i,t=c*s;a[e]=o*n[t],a[e+1]=o*n[t+1],a[e+2]=o*n[t+2]}}Object.freeze({__proto__:null,transformMat4:p,transformMat3:h,scale:v,shiftRight:function(e,t,o){const r=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<r;c++){const e=c*i,t=c*s;a[e]=n[t]>>o,a[e+1]=n[t+1]>>o,a[e+2]=n[t+2]>>o}}});var b=o(132),g=o(118),x=o(140),y=o(170),O=o(247),w=o(83),C=(o(59),o(430)),T=o(53),S=(o(484),o(485));o(40),o(387);const M=new class{constructor(e=0){this.offset=e,this.sphere=Object(S.a)(),this.tmpVertex=Object(a.e)()}applyToVertex(e,t,o){const r=this.objectTransform.transform;let a=r[0]*e+r[4]*t+r[8]*o+r[12],i=r[1]*e+r[5]*t+r[9]*o+r[13],n=r[2]*e+r[6]*t+r[10]*o+r[14];const s=this.offset/Math.sqrt(a*a+i*i+n*n);a+=a*s,i+=i*s,n+=n*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*a+c[4]*i+c[8]*n+c[12],this.tmpVertex[1]=c[1]*a+c[5]*i+c[9]*n+c[13],this.tmpVertex[2]=c[2]*a+c[6]*i+c[10]*n+c[14],this.tmpVertex}applyToMinMax(e,t){const o=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*o,e[1]+=e[1]*o,e[2]+=e[2]*o;const r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*r,t[1]+=t[1]*r,t[2]+=t[2]*r}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const o=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*o,e[4]+=e[4]*o,e[5]+=e[5]*o,e}applyToBoundingSphere(e,t){const o=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),r=this.offset/o;return this.sphere.center[0]=t[0]+t[0]*r,this.sphere.center[1]=t[1]+t[1]*r,this.sphere.center[2]=t[2]+t[2]*r,this.sphere.radius=e+e*this.offset/o,this.sphere}};new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=Object(a.e)(),this.mbs=Object(w.c)(),this.obb={center:Object(a.e)(),halfSize:Object(T.b)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,o){const r=e,a=t,i=o+this.componentLocalOriginLength,n=this.offset/Math.sqrt(r*r+a*a+i*i);return this.tmpVertex[0]=e+r*n,this.tmpVertex[1]=t+a*n,this.tmpVertex[2]=o+i*n,this.tmpVertex}applyToAabb(e){const t=e[0],o=e[1],r=e[2]+this.componentLocalOriginLength,a=e[3],i=e[4],n=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+o*o+r*r);e[0]+=t*s,e[1]+=o*s,e[2]+=r*s;const c=this.offset/Math.sqrt(a*a+i*i+n*n);return e[3]+=a*c,e[4]+=i*c,e[5]+=n*c,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),o=this.offset/t;return this.mbs[0]=e[0]+e[0]*o,this.mbs[1]=e[1]+e[1]*o,this.mbs[2]=e[2]+e[2]*o,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,o=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*o,this.obb.center[1]=t[1]+t[1]*o,this.obb.center[2]=t[2]+t[2]*o,Object(i.r)(this.obb.halfSize,e.halfSize,e.quaternion),Object(i.c)(this.obb.halfSize,this.obb.halfSize,e.center);const r=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*r,this.obb.halfSize[1]+=this.obb.halfSize[1]*r,this.obb.halfSize[2]+=this.obb.halfSize[2]*r,Object(i.g)(this.obb.halfSize,this.obb.halfSize,e.center),Object(C.a)(A,e.quaternion),Object(i.r)(this.obb.halfSize,this.obb.halfSize,A),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}};new class{constructor(e=0){this.offset=e,this.tmpVertex=Object(a.e)()}applyToVertex(e,t,o){const r=e+this.localOrigin[0],a=t+this.localOrigin[1],i=o+this.localOrigin[2],n=this.offset/Math.sqrt(r*r+a*a+i*i);return this.tmpVertex[0]=e+r*n,this.tmpVertex[1]=t+a*n,this.tmpVertex[2]=o+i*n,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],o=e[1]+this.localOrigin[1],r=e[2]+this.localOrigin[2],a=e[3]+this.localOrigin[0],i=e[4]+this.localOrigin[1],n=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+o*o+r*r);e[0]+=t*s,e[1]+=o*s,e[2]+=r*s;const c=this.offset/Math.sqrt(a*a+i*i+n*n);return e[3]+=a*c,e[4]+=i*c,e[5]+=n*c,e}};Object(a.e)(),Object(a.e)(),Object(w.c)();const A=Object(O.a)();var _=o(509),j=o(157),R=o(230),P=o(258),L=o(201),B=o(131),I=o(0),F=o(203),N=o(206),E=o(48),D=o(204),z=o(200),V=o(75),U=o(190),G=o(167),H=o(202),q=o(290),k=o(459),$=o(136),W=o(674),X=o(740),J=o(689),Q=o(690),K=o(770);class Y extends N.a{initializeProgram(e){const t=Y.shader.get(),o=this.configuration,r=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:o.usePBR?o.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:o.hasMetalnessAndRoughnessTexture,hasEmissionTexture:o.hasEmissionTexture,hasOcclusionTexture:o.hasOcclusionTexture,hasNormalTexture:o.hasNormalTexture,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:o.normalsTypeDerivate?3:0,doubleSidedMode:o.doubleSidedMode,vertexTangets:o.vertexTangents,attributeTextureCoordinates:o.hasMetalnessAndRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture||o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(X.b)(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1});return new z.a(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),D.a)}bindPass(e,t,o){U.a.bindProjectionMatrix(this.program,o.camera.projectionMatrix);const r=this.configuration.output;7===r&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",j.b[t.colorMixMode])),0===r?(o.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",j.b[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&Q.a.bindUniforms(this.program,t,this.configuration.isSchematic)):1===r||3===r?this.program.setUniform2fv("nearFar",o.camera.nearFar):4===r&&H.a.bindOutputHighlight(e,this.program,o),q.a.bindUniformsForSymbols(this.program,t),k.a.bindUniforms(this.program,t,o),Object(j.a)(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(a.g)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;U.a.bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&U.a.bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&J.a.bindCustomOrigin(this.program,t),G.a.bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&W.a.bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const o=this.configuration,r=3===e,a=2===e;return Object(V.d)({blending:0!==o.output&&7!==o.output||!o.transparent?null:r?B.f:Object(B.a)(e),culling:Z(o),depthTest:{func:Object(B.b)(e)},depthWrite:r||a?o.writeDepth&&V.c:null,colorWrite:V.b,stencilWrite:o.sceneHasOcludees?$.h:null,stencilTest:o.sceneHasOcludees?t?$.d:$.c:null,polygonOffset:r||a?null:Object(B.g)(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}Y.shader=new F.a(K.a,(()=>o.e(153).then(o.bind(null,953))));const Z=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class ee extends E.a{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3}}Object(I.a)([Object(E.b)({count:8})],ee.prototype,"output",void 0),Object(I.a)([Object(E.b)({count:4})],ee.prototype,"alphaDiscardMode",void 0),Object(I.a)([Object(E.b)({count:3})],ee.prototype,"doubleSidedMode",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"isSchematic",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"vertexColors",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"offsetBackfaces",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"symbolColors",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"vvSize",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"vvColor",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"verticalOffset",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"receiveShadows",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"slicePlaneEnabled",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"sliceHighlightDisabled",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"receiveAmbientOcclusion",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"screenSizePerspective",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"textureAlphaPremultiplied",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"hasColorTexture",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"usePBR",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"hasEmissionTexture",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"hasOcclusionTexture",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"hasNormalTexture",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"instanced",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"instancedColor",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"instancedDoublePrecision",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"vertexTangents",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"normalsTypeDerivate",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"writeDepth",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"sceneHasOcludees",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"transparent",void 0),Object(I.a)([Object(E.b)()],ee.prototype,"enableOffset",void 0),Object(I.a)([Object(E.b)({count:3})],ee.prototype,"cullFace",void 0),Object(I.a)([Object(E.b)({count:4})],ee.prototype,"transparencyPassType",void 0);var te=o(771);class oe extends Y{initializeProgram(e){const t=oe.shader.get(),o=this.configuration,r=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:o.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(X.b)(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1});return new z.a(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),D.a)}}oe.shader=new F.a(te.a,(()=>o.e(150).then(o.bind(null,954))));class re extends R.a{constructor(e,t){super(t,e,ne),this.supportsEdges=!0,this.techniqueConfig=new ee,this.vertexBufferLayout=re.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?re.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,o=e.vertexColors,r=e.symbolColors,a=!!t&&t.indexOf("color")>-1,i=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return o&&(a||i||r)?!!n||s:o?n?c:s:a||i||r?!!n||s:n?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<B.e),this.techniqueConfig}intersect(e,t,o,a,n,s,c){if(null!==this.params.verticalOffset){const e=a.camera;Object(i.s)(fe,o[12],o[13],o[14]);let t=null;switch(a.viewingMode){case 1:t=Object(i.o)(ue,fe);break;case 2:t=Object(i.h)(ue,de)}let r=0;if(null!==this.params.verticalOffset){const o=Object(i.g)(pe,fe,e.eye),a=Object(i.m)(o),n=Object(i.b)(o,o,1/a);let s=null;this.params.screenSizePerspective&&(s=Object(i.e)(t,n)),r+=Object(j.f)(e,a,this.params.verticalOffset,s,this.params.screenSizePerspective)}Object(i.b)(t,t,r),Object(i.t)(me,t,a.transform.inverseRotation),n=Object(i.g)(ce,n,me),s=Object(i.g)(le,s,me)}Object(j.d)(e,t,a,n,s,function(e){return Object(r.i)(e)?(M.offset=e,M):null}(a.verticalOffset),c)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new ae(e)}createBufferWriter(){return new se(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=Object(y.a)().vec3f("position").vec3f("normal");return e.vertexTangents&&o.vec4f("tangent"),t&&o.vec2f("uv0"),e.vertexColors&&o.vec4u8("color"),e.symbolColors&&o.vec4u8("symbolColor"),o}static getInstanceBufferLayout(e){let t=Object(y.a)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class ae extends _.a{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(oe,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(Y,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const ie=2.1,ne={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(c.a)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:L.b,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...R.b};class se{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.position.length}write(e,t,o,r){Object(P.c)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,o,r)}}const ce=Object(a.e)(),le=Object(a.e)(),de=Object(a.g)(0,0,1),ue=Object(a.e)(),me=Object(a.e)(),fe=Object(a.e)(),pe=Object(a.e)();var he=o(300),ve=o(13),be=o(5),ge=o(9),xe=o(47),ye=o(224);class Oe{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return Object(be.u)(e)?(Object(ge.w)(t),Object(be.j)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,o){if(Object(r.h)(this.streamDataRequester))return(await Object(xe.default)(t,{responseType:we[e]})).data;const a=await Object(ye.c)(this.streamDataRequester.request(t,e,o));if(!0===a.ok)return a.value;throw Object(ge.v)(a.error),new ve.a("",`Request for resource failed: ${a.error}`)}}const we={image:"image",binary:"array-buffer",json:"json"};var Ce=o(475);function Te(e,t,o){const r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let c=(o&&o.dstIndex?o.dstIndex:0)*a,l=(o&&o.srcIndex?o.srcIndex:0)*n;for(let d=0;d<s;++d)r[c]=i[l],r[c+1]=i[l+1],c+=a,l+=n}function Se(e,t,o){const r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let c=(o&&o.dstIndex?o.dstIndex:0)*a,l=(o&&o.srcIndex?o.srcIndex:0)*n;if(Object(Ce.b)(t.elementType)){const e=Object(Ce.d)(t.elementType);if(Object(Ce.c)(t.elementType))for(let t=0;t<s;++t)r[c]=Math.max(i[l]/e,-1),r[c+1]=Math.max(i[l+1]/e,-1),c+=a,l+=n;else for(let t=0;t<s;++t)r[c]=i[l]/e,r[c+1]=i[l+1]/e,c+=a,l+=n}else Te(e,t,o);return e}Object.freeze({__proto__:null,copy:Te,normalizeIntegerBuffer:Se});function Me(e,t,o){const r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let c=(o&&o.dstIndex?o.dstIndex:0)*a,l=(o&&o.srcIndex?o.srcIndex:0)*n;for(let d=0;d<s;++d)r[c]=i[l],r[c+1]=i[l+1],r[c+2]=i[l+2],c+=a,l+=n}Object.freeze({__proto__:null,copy:Me});function Ae(e,t,o){const r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let c=(o&&o.dstIndex?o.dstIndex:0)*a,l=(o&&o.srcIndex?o.srcIndex:0)*n;for(let d=0;d<s;++d)r[c]=i[l],r[c+1]=i[l+1],r[c+2]=i[l+2],r[c+3]=i[l+3],c+=a,l+=n}function _e(e,t,o,r,a,i){const n=e.typedBuffer,s=e.typedBufferStride,c=i?i.count:e.count;let l=(i&&i.dstIndex?i.dstIndex:0)*s;for(let d=0;d<c;++d)n[l]=t,n[l+1]=o,n[l+2]=r,n[l+3]=a,l+=s}Object.freeze({__proto__:null,copy:Ae,fill:_e});Object.freeze({__proto__:null,copy:function(e,t,o){const r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let c=(o&&o.dstIndex?o.dstIndex:0)*a,l=(o&&o.srcIndex?o.srcIndex:0)*n;for(let d=0;d<s;++d){for(let e=0;e<9;++e)r[c+e]=i[l+e];c+=a,l+=n}}});Object.freeze({__proto__:null,copy:function(e,t,o){const r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let c=(o&&o.dstIndex?o.dstIndex:0)*a,l=(o&&o.srcIndex?o.srcIndex:0)*n;for(let d=0;d<s;++d){for(let e=0;e<16;++e)r[c+e]=i[l+e];c+=a,l+=n}}});function je(e,t){const o=e.count;t||(t=new e.TypedArrayConstructor(o));for(let r=0;r<o;r++)t[r]=e.get(r);return t}Object.freeze({__proto__:null,copy:function(e,t,o){const r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let c=(o&&o.dstIndex?o.dstIndex:0)*a,l=(o&&o.srcIndex?o.srcIndex:0)*n;for(let d=0;d<s;++d)r[c]=i[l],c+=a,l+=n},makeDense:je});function Re(e,t){return new e(new ArrayBuffer(t*e.ElementCount*Object(Ce.a)(e.ElementType)))}const Pe=m.a.getLogger("esri.views.3d.glTF");var Le=o(168);class Be{constructor(e,t,o=""){this.major=e,this.minor=t,this._context=o}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",o=this._context&&this._context+" ";throw new ve.a(t+"unsupported-version",`Required major ${o}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new Be(this.major,this.minor,this._context)}static parse(e,t=""){const[o,r]=e.split("."),a=/^\s*\d+\s*$/;if(!o||!o.match||!o.match(a))throw new ve.a((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!r||!r.match||!r.match(a))throw new ve.a((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const i=parseInt(o,10),n=parseInt(r,10);return new Be(i,n,t)}}class Ie{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const Fe={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Ne={pbrMetallicRoughness:Fe,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Ee={ESRI_externalColorMixMode:"tint"},De=(e={})=>{const t={...Fe,...e.pbrMetallicRoughness},o=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Object(Le.a)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...Ee,...e.extras});return{...Ne,...e,pbrMetallicRoughness:t,extras:o}},ze={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};const Ve=1179937895;class Ue{constructor(e,t,o,r,a){this.context=e,this.errorContext=t,this.uri=o,this.json=r,this.glbBuffer=a,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,o;return e.replace(/^(.*\/)?([^/]*)$/,((e,r,a)=>(t=r||"",o=a||"",""))),{dirPart:t,filePart:o}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==r.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==r.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==r.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,o,r){if(Object(be.u)(o)){const r=Object(be.i)(o);if("model/gltf-binary"!==r.mediaType)try{const a=JSON.parse(r.isBase64?atob(r.data):r.data);return new Ue(e,t,o,a)}catch{}const a=Object(be.j)(o);if(Ue.isGLBData(a))return this.fromGLBData(e,t,o,a)}if(o.endsWith(".gltf")){const a=await e.loadJSON(o,r);return new Ue(e,t,o,a)}const a=await e.loadBinary(o,r);if(Ue.isGLBData(a))return this.fromGLBData(e,t,o,a);const i=await e.loadJSON(o,r);return new Ue(e,t,o,i)}static isGLBData(e){const t=new Ie(e);return t.remainingBytes()>=4&&t.readUint32()===Ve}static async fromGLBData(e,t,o,r){const a=await Ue.parseGLBData(t,r);return new Ue(e,t,o,a.json,a.binaryData)}static async parseGLBData(e,t){const o=new Ie(t);e.assert(o.remainingBytes()>=12,"GLB binary data is insufficiently large.");const r=o.readUint32(),a=o.readUint32(),i=o.readUint32();e.assert(r===Ve,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=i,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==a,"An unsupported GLB container version was detected. Only version 2 is supported.");let n,s,c=0;for(;o.remainingBytes()>=8;){const t=o.readUint32(),r=o.readUint32();0===c?(e.assert(1313821514===r,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),n=await We(o.readUint8Array(t))):1===c?(e.errorUnsupportedIf(5130562!==r,"Second GLB chunk expected to be BIN."),s=o.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),c+=1}return n||e.error("No GLB JSON chunk detected."),{json:n,binaryData:s}}async getBuffer(e,t){const o=this.json.buffers[e],r=this.errorContext;if(null==o.uri)return r.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let a=this.bufferCache.get(e);if(!a){const i=await this.context.loadBinary(this.resolveUri(o.uri),t);a=new Uint8Array(i),this.bufferCache.set(e,a),r.assert(a.byteLength===o.byteLength,"Buffer byte lengths should match.")}return a}async getAccessor(e,t){const o=this.json.accessors[e],r=this.errorContext;r.errorUnsupportedIf(null==o.bufferView,"Some accessor does not specify a bufferView."),r.errorUnsupportedIf(o.type in["MAT2","MAT3","MAT4"],`AttributeType ${o.type} is not supported`);const a=this.json.bufferViews[o.bufferView],i=await this.getBuffer(a.buffer,t),n=ke[o.type],s=$e[o.componentType],c=n*s,l=a.byteStride||c;return{raw:i.buffer,byteStride:l,byteOffset:i.byteOffset+(a.byteOffset||0)+(o.byteOffset||0),entryCount:o.count,isDenselyPacked:l===c,componentCount:n,componentByteSize:s,componentType:o.componentType,min:o.min,max:o.max,normalized:!!o.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const o=await this.getAccessor(e.indices,t);if(o.isDenselyPacked)switch(o.componentType){case 5121:return new Uint8Array(o.raw,o.byteOffset,o.entryCount);case 5123:return new Uint16Array(o.raw,o.byteOffset,o.entryCount);case 5125:return new Uint32Array(o.raw,o.byteOffset,o.entryCount)}else switch(o.componentType){case 5121:return je(this.wrapAccessor(u.l,o));case 5123:return je(this.wrapAccessor(u.j,o));case 5125:return je(this.wrapAccessor(u.k,o))}}async getPositionData(e,t){const o=this.errorContext;o.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const r=await this.getAccessor(e.attributes.POSITION,t);return o.errorUnsupportedIf(5126!==r.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+Xe[r.componentType]),o.errorUnsupportedIf(3!==r.componentCount,"POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this.wrapAccessor(u.u,r)}async getNormalData(e,t){const o=this.errorContext;o.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const r=await this.getAccessor(e.attributes.NORMAL,t);return o.errorUnsupportedIf(5126!==r.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+Xe[r.componentType]),o.errorUnsupportedIf(3!==r.componentCount,"NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this.wrapAccessor(u.u,r)}async getTangentData(e,t){const o=this.errorContext;o.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const r=await this.getAccessor(e.attributes.TANGENT,t);return o.errorUnsupportedIf(5126!==r.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+Xe[r.componentType]),o.errorUnsupportedIf(4!==r.componentCount,"TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed()),new u.C(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(e,t){const o=this.errorContext;o.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(e.attributes.TEXCOORD_0,t);return o.errorUnsupportedIf(2!==r.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed()),5126===r.componentType?this.wrapAccessor(u.m,r):(o.errorUnsupportedIf(!r.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new u.q(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new u.t(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new u.o(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new u.r(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new u.s(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new u.m(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void Object(Le.a)(e.componentType)}}(r))}async getVertexColors(e,t){const o=this.errorContext;o.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const r=await this.getAccessor(e.attributes.COLOR_0,t);if(o.errorUnsupportedIf(4!==r.componentCount&&3!==r.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed()),4===r.componentCount){if(5126===r.componentType)return this.wrapAccessor(u.C,r);if(5121===r.componentType)return this.wrapAccessor(u.J,r);if(5123===r.componentType)return this.wrapAccessor(u.H,r)}else if(3===r.componentCount){if(5126===r.componentType)return this.wrapAccessor(u.u,r);if(5121===r.componentType)return this.wrapAccessor(u.B,r);if(5123===r.componentType)return this.wrapAccessor(u.z,r)}o.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+Xe[r.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t){const o=this.errorContext;let r=this.materialCache.get(e.material);if(!r){const a=null!=e.material?De(this.json.materials[e.material]):De(),i=a.pbrMetallicRoughness,n=this.hasVertexColors(e);let s,c,l,d,u;i.baseColorTexture&&(o.errorUnsupportedIf(0!==(i.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),s=await this.getTexture(i.baseColorTexture.index,t)),a.normalTexture&&(0!==(a.normalTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):c=await this.getTexture(a.normalTexture.index,t)),a.occlusionTexture&&(0!==(a.occlusionTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):l=await this.getTexture(a.occlusionTexture.index,t)),a.emissiveTexture&&(0!==(a.emissiveTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):d=await this.getTexture(a.emissiveTexture.index,t)),i.metallicRoughnessTexture&&(0!==(i.metallicRoughnessTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):u=await this.getTexture(i.metallicRoughnessTexture.index,t));const m=null!=e.material?e.material:-1;r={alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,color:i.baseColorFactor,doubleSided:!!a.doubleSided,colorTexture:s,normalTexture:c,name:a.name,id:m,occlusionTexture:l,emissiveTexture:d,emissiveFactor:a.emissiveFactor,metallicFactor:i.metallicFactor,roughnessFactor:i.roughnessFactor,metallicRoughnessTexture:u,vertexColors:n,ESRI_externalColorMixMode:a.extras.ESRI_externalColorMixMode}}return r}async getTexture(e,t){const o=this.errorContext,r=this.json.textures[e],a=(e=>({...ze,...e}))(null!=r.sampler?this.json.samplers[r.sampler]:{});o.errorUnsupportedIf(null==r.source,"Source is expected to be defined for a texture.");const i=this.json.images[r.source];let n=this.textureCache.get(e);if(!n){let r;if(i.uri)r=await this.context.loadImage(this.resolveUri(i.uri),t);else{o.errorUnsupportedIf(null==i.bufferView,"Image bufferView must be defined."),o.errorUnsupportedIf(null==i.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[i.bufferView],a=await this.getBuffer(e.buffer,t);o.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),r=await async function(e,t){return Object(ge.c)(((o,r)=>{const a=new Blob([e],{type:t}),i=URL.createObjectURL(a),n=new Image;n.addEventListener("load",(()=>{URL.revokeObjectURL(i),"decode"in n?n.decode().then((()=>o(n)),(()=>o(n))):o(n)})),n.addEventListener("error",(e=>{URL.revokeObjectURL(i),r(e)})),n.src=i}))}(new Uint8Array(a.buffer,a.byteOffset+(e.byteOffset||0),e.byteLength),i.mimeType)}n={data:r,wrapS:a.wrapS,wrapT:a.wrapT,minFilter:a.minFilter,name:i.name,id:e},this.textureCache.set(e,n)}return n}getNodeTransform(e){if(void 0===e)return He;let t=this.nodeTransformCache.get(e);if(!t){const o=this.getNodeTransform(this.getNodeParent(e)),r=this.json.nodes[e];r.matrix?t=Object(n.j)(Object(l.b)(),o,r.matrix):r.translation||r.rotation||r.scale?(t=Object(l.c)(o),r.translation&&Object(n.m)(t,t,r.translation),r.rotation&&(qe[3]=Object(C.b)(qe,r.rotation),Object(n.k)(t,t,qe[3],qe)),r.scale&&Object(n.l)(t,t,r.scale)):t=o,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return Object(be.y)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=Be.parse(this.json.asset.version,"glTF");Ge.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}}const Ge=new Be(2,0,"glTF"),He=Object(n.i)(Object(l.b)(),Math.PI/2),qe=Object(O.a)(),ke={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},$e={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function We(e){return Object(ge.c)(((t,o)=>{const r=new Blob([e]),a=new FileReader;a.onload=()=>{const e=a.result;t(JSON.parse(e))},a.onerror=e=>{o(e)},a.readAsText(r)}))}const Xe={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let Je=0;function Qe(e){const t=e.json;let o=null;return t.nodes.forEach((e=>{const t=e.extras;Object(r.i)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(o=t)})),o}function Ke(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function Ye(e,t,o){const r=t=>{const r=`${o}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(r)){const o=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:Ze(t.wrapS),t:Ze(t.wrapT)},mipmap:tt.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(r,o)}return r},a=`${o}_mat_${t.id}_${t.name}`;if(!e.materials.has(a)){const o=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?r(t.colorTexture):void 0,textureNormal:t.normalTexture?r(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?r(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?r(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?r(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(a,o)}return a}function Ze(e){if(33071===e||33648===e||10497===e)return e;et.error(`Unexpected TextureSampler WrapMode: ${e}`)}const et=new class{error(e){throw new ve.a("gltf-loader-error",e)}errorUnsupported(e){throw new ve.a("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){Pe.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},tt=[9987,9985],ot=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];var rt=o(79),at=o(187);function it(e){return"number"==typeof e?(t=e,Object(at.d)(t)):Object(rt.i)(e)||Object(rt.k)(e)?new Uint32Array(e):e;var t}var nt=o(14),st=o(479);const ct=m.a.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function lt(e){throw new ve.a("",`Request for object resource failed: ${e}`)}function dt(e){const t=e.params,o=t.topology;let r=!0;switch(t.vertexAttributes||(ct.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(ct.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(ct.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(ct.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),r=!1)}}else ct.warn("Indexed geometries must specify faces"),r=!1;break}default:ct.warn(`Unsupported topology '${o}'`),r=!1}e.params.material||(ct.warn("Geometry requires material"),r=!1);const a=e.params.vertexAttributes;for(const i in a)a[i].values||(ct.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function ut(e){const t=Object(b.c)();return e.forEach((e=>{const o=e.boundingInfo;Object(b.h)(t,o.getBBMin()),Object(b.h)(t,o.getBBMax())})),t}async function mt(e,t){const o=[];for(const n in e){const a=e[n],i=a.images[0].data;if(!i){ct.warn("Externally referenced texture data is not yet supported");continue}const s=a.encoding+";base64,"+i,c="/textureDefinitions/"+n,l={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},d=Object(r.i)(t)&&t.disableTextures?Object(ge.u)(null):Object(st.a)(s,t);o.push(d.then((e=>({refId:c,image:e,params:l,alphaChannelUsage:"rgba"===a.channels?a.alphaChannelUsage||"transparency":"none"}))))}const a=await Object(ge.b)(o),i={};for(const r of a)i[r.refId]=r;return i}function ft(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function pt(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}function ht(e){const t=new Uint32Array(e);for(let o=0;o<e;o++)t[o]=o;return t}const vt=new Be(1,2,"wosr");function bt(e,t,o){if(e.count!==t.count)return void f.error("source and destination buffers need to have the same number of elements");const r=e.count,a=o[0],i=o[1],n=o[2],s=o[3],c=o[4],l=o[5],d=o[6],u=o[7],m=o[8],p=e.typedBuffer,h=e.typedBufferStride,v=t.typedBuffer,b=t.typedBufferStride;for(let f=0;f<r;f++){const e=f*h,t=f*b,o=v[t],r=v[t+1],g=v[t+2],x=v[t+3];p[e]=a*o+s*r+d*g,p[e+1]=i*o+c*r+u*g,p[e+2]=n*o+l*r+m*g,p[e+3]=x}}function gt(e,t,o){const r=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<r;c++){const e=c*i,t=c*s;a[e]=o*n[t],a[e+1]=o*n[t+1],a[e+2]=o*n[t+2],a[e+3]=o*n[t+3]}}Object.freeze({__proto__:null,transformMat4:function(e,t,o){if(e.count!==t.count)return void f.error("source and destination buffers need to have the same number of elements");const r=e.count,a=o[0],i=o[1],n=o[2],s=o[3],c=o[4],l=o[5],d=o[6],u=o[7],m=o[8],p=o[9],h=o[10],v=o[11],b=o[12],g=o[13],x=o[14],y=o[15],O=e.typedBuffer,w=e.typedBufferStride,C=t.typedBuffer,T=t.typedBufferStride;for(let f=0;f<r;f++){const e=f*w,t=f*T,o=C[t],r=C[t+1],S=C[t+2],M=C[t+3];O[e]=a*o+c*r+m*S+b*M,O[e+1]=i*o+l*r+p*S+g*M,O[e+2]=n*o+d*r+h*S+x*M,O[e+3]=s*o+u*r+v*S+y*M}},transformMat3:bt,scale:gt,shiftRight:function(e,t,o){const r=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<r;c++){const e=c*i,t=c*s;a[e]=n[t]>>o,a[e+1]=n[t+1]>>o,a[e+2]=n[t+2]>>o,a[e+3]=n[t+3]>>o}}});async function xt(e,t){const o=yt(Object(s.a)(e));if("wosr"===o.fileType){const e=await(t.cache?t.cache.loadWOSR(o.url,t):async function(e,t){const o=await async function(e,t){const o=Object(r.i)(t)&&t.streamDataRequester;if(o)return async function(e,t,o){const r=await Object(ye.c)(t.request(e,"json",o));return!0===r.ok?r.value:(Object(ge.v)(r.error),void lt(r.error.details.url))}(e,o,t);const a=await Object(ye.c)(Object(xe.default)(e,Object(r.o)(t)));return!0===a.ok?a.value.data:(Object(ge.v)(a.error),void lt(a.error))}(e,t);return{resource:o,textures:await mt(o.textureDefinitions,t)}}(o.url,t)),i=function(e,t){const o=[],i=[],n=[],s=[],c=e.resource,l=Be.parse(c.version||"1.0","wosr");vt.validate(l);const d=c.model.name,u=c.model.geometries,m=c.materialDefinitions,f=e.textures;let p=0;const h=new Map;for(let v=0;v<u.length;v++){const e=u[v];if(!dt(e))continue;const c=pt(e),l=e.params.vertexAttributes,b={};for(const t in l){const e=l[t],o=e.values;b[t]={data:o,size:e.valuesPerElement}}const y={};if("PerAttributeArray"===e.params.topology){const e=ht(b.position.data.length/b.position.size);for(const t in b)y[t]=e}else{const t=e.params.faces;for(const e in t)y[e]=new Uint32Array(t[e].values)}const O=f&&f[c.texture];if(O&&!h.has(c.texture)){const{image:e,params:t}=O,o=new he.a(e,d,t);s.push(o),h.set(c.texture,o)}const w=h.get(c.texture),C=w?w.id:void 0;let T=n[c.material]?n[c.material][c.texture]:null;if(!T){const e=m[c.material.substring(c.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=O&&O.alphaChannelUsage,i=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,s={ambient:Object(a.f)(e.diffuse),diffuse:Object(a.f)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:O?ft(O.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:C,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};Object(r.i)(t)&&t.materialParamsMixin&&Object(nt.d)(s,t.materialParamsMixin),T=new re(s,d),n[c.material]||(n[c.material]={}),n[c.material][c.texture]=T}i.push(T);const S=new x.a(new g.a(b,y),d);p+=y.position?y.position.length:0,o.push(S)}return{name:d,stageResources:{textures:s,materials:i,geometries:o},pivotOffset:c.model.pivotOffset,boundingBox:ut(o),numberOfVertices:p,lodThreshold:null}}(e,t);return{lods:[i],referenceBoundingBox:i.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const c=await(t.cache?t.cache.loadGLTF(o.url,t):async function(e,t,o={}){const a=await Ue.load(e,et,t,o),i="gltf_"+Je++,n={lods:[],materials:new Map,textures:new Map,meta:Qe(a)},s=!(!a.json.asset.extras||"symbolResource"!==a.json.asset.extras.ESRI_type);return await async function(e,t){const o=e.json,r=o.scenes[o.scene||0].nodes,a=r.length>1;for(const n of r){const e=o.nodes[n],t=[i(n,0)];if(Ke(e)&&!a){const o=e.extensions.MSFT_lod.ids;t.push(...o.map(((e,t)=>i(e,t+1))))}await Object(ge.b)(t)}async function i(r,a){const n=o.nodes[r],s=e.getNodeTransform(r);if(et.warnUnsupportedIf(null!=n.weights,"Morph targets are not supported."),null!=n.mesh){const e=o.meshes[n.mesh];for(const o of e.primitives)await t(o,s,a,e.name)}for(const e of n.children||[])await i(e,a)}}(a,(async(e,t,s,c)=>{const d=void 0!==e.mode?e.mode:4,u=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(d);if(Object(r.h)(u))return void et.warnUnsupported("Unsupported primitive mode ("+ot[d]+"). Skipping primitive.");if(!a.hasPositions(e))return void et.warn("Skipping primitive without POSITION vertex attribute.");const m=await a.getMaterial(e,o),f={transform:Object(l.c)(t),attributes:{position:await a.getPositionData(e,o),normal:null,texCoord0:null,color:null,tangent:null},indices:await a.getIndexData(e,o),primitiveType:u,material:Ye(n,m,i)};a.hasNormals(e)&&(f.attributes.normal=await a.getNormalData(e,o)),a.hasTangents(e)&&(f.attributes.tangent=await a.getTangentData(e,o)),a.hasTextureCoordinates(e)&&(f.attributes.texCoord0=await a.getTextureCoordinates(e,o)),a.hasVertexColors(e)&&(f.attributes.color=await a.getVertexColors(e,o));let p=null;Object(r.i)(n.meta)&&Object(r.i)(n.meta.ESRI_lod)&&"screenSpaceRadius"===n.meta.ESRI_lod.metric&&(p=n.meta.ESRI_lod.thresholds[s]),n.lods[s]=n.lods[s]||{parts:[],name:c,lodThreshold:p},n.lods[s].parts.push(f)})),{model:n,meta:{isEsriSymbolResource:s,uri:a.uri},customMeta:{}}}(new Oe(t.streamDataRequester),o.url,t)),d=Object(r.g)(c.model.meta,"ESRI_proxyEllipsoid");c.meta.isEsriSymbolResource&&Object(r.i)(d)&&-1!==c.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let o=0;o<e.model.lods.length;++o){const s=e.model.lods[o];e.customMeta.esriTreeRendering=!0;for(const c of s.parts){const s=c.attributes.normal;if(Object(r.h)(s))return;const d=c.attributes.position,m=d.count,f=Object(a.e)(),p=Object(a.e)(),h=Object(a.e)(),v=Re(u.J,m),b=Re(u.u,m),g=Object(n.a)(Object(l.b)(),c.transform);for(let r=0;r<m;r++){d.getVec(r,p),s.getVec(r,f),Object(i.j)(p,p,c.transform),Object(i.g)(h,p,t.center),Object(i.a)(h,h,t.radius);const a=h[2],n=Object(i.m)(h),l=Math.min(.45+.55*n*n,1);Object(i.a)(h,h,t.radius),Object(i.j)(h,h,g),Object(i.o)(h,h),o+1!==e.model.lods.length&&e.model.lods.length>1&&Object(i.f)(h,h,f,a>-1?.2:Math.min(-4*a-3.8,1)),b.setVec(r,h),v.set(r,0,255*l),v.set(r,1,255*l),v.set(r,2,255*l),v.set(r,3,255)}c.attributes.normal=b,c.attributes.color=v}}}(c,d);const m=c.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:c.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:!0,isSchematic:!1,mrrFactors:[0,1,.5]},f={...t.materialParamsMixin,treeRendering:c.customMeta.esriTreeRendering};if(null!=o.specifiedLodIndex){const e=Ot(c,m,f,o.specifiedLodIndex);let t=e[0].boundingBox;return 0!==o.specifiedLodIndex&&(t=Ot(c,m,f,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}}const p=Ot(c,m,f);return{lods:p,referenceBoundingBox:p[0].boundingBox,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}}function yt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Ot(e,t,o,a){const i=e.model,n=Object(c.a)(),s=new Array,l=new Map,m=new Map;return i.lods.forEach(((e,c)=>{if(void 0!==a&&c!==a)return;let f=0;const y={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(r.i)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(b.c)()};s.push(y),e.parts.forEach((a=>{const s=a.material+(a.attributes.normal?"_normal":"")+(a.attributes.color?"_color":"")+(a.attributes.texCoord0?"_texCoord0":"")+(a.attributes.tangent?"_tangent":""),c=i.materials.get(a.material),O=Object(r.i)(a.attributes.texCoord0),w=Object(r.i)(a.attributes.normal);if(!l.has(s)){if(O){if(Object(r.i)(c.textureColor)&&!m.has(c.textureColor)){const e=i.textures.get(c.textureColor),t={...e.parameters,preMultiplyAlpha:!0};m.set(c.textureColor,new he.a(e.data,c.textureColor,t))}if(Object(r.i)(c.textureNormal)&&!m.has(c.textureNormal)){const e=i.textures.get(c.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};m.set(c.textureNormal,new he.a(e.data,c.textureNormal,t))}if(Object(r.i)(c.textureOcclusion)&&!m.has(c.textureOcclusion)){const e=i.textures.get(c.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};m.set(c.textureOcclusion,new he.a(e.data,c.textureOcclusion,t))}if(Object(r.i)(c.textureEmissive)&&!m.has(c.textureEmissive)){const e=i.textures.get(c.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};m.set(c.textureEmissive,new he.a(e.data,c.textureEmissive,t))}if(Object(r.i)(c.textureMetallicRoughness)&&!m.has(c.textureMetallicRoughness)){const e=i.textures.get(c.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};m.set(c.textureMetallicRoughness,new he.a(e.data,c.textureMetallicRoughness,t))}}const e=Math.pow(c.color[0],1/ie),n=Math.pow(c.color[1],1/ie),d=Math.pow(c.color[2],1/ie),u=Math.pow(c.emissiveFactor[0],1/ie),f=Math.pow(c.emissiveFactor[1],1/ie),p=Math.pow(c.emissiveFactor[2],1/ie);l.set(s,new re({...t,transparent:"BLEND"===c.alphaMode,textureAlphaMode:wt(c.alphaMode),textureAlphaCutoff:c.alphaCutoff,diffuse:[e,n,d],ambient:[e,n,d],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?0:2,vertexColors:!!a.attributes.color,vertexTangents:!!a.attributes.tangent,normals:w?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(r.i)(c.textureColor)&&O?m.get(c.textureColor).id:void 0,colorMixMode:c.colorMixMode,normalTextureId:Object(r.i)(c.textureNormal)&&O?m.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:Object(r.i)(c.textureOcclusion)&&O?m.get(c.textureOcclusion).id:void 0,emissiveTextureId:Object(r.i)(c.textureEmissive)&&O?m.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(r.i)(c.textureMetallicRoughness)&&O?m.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[u,f,p],mrrFactors:[c.metallicFactor,c.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...o},s))}const C=function(e,t){switch(t){case 4:return it(e);case 5:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint32Array(0);const o=t-2,r=new Uint32Array(3*o);if("number"==typeof e){let e=0;for(let t=0;t<o;t+=1)t%2==0?(r[e++]=t,r[e++]=t+1,r[e++]=t+2):(r[e++]=t+1,r[e++]=t,r[e++]=t+2)}else{let t=0;for(let a=0;a<o;a+=1)if(a%2==0){const o=e[a],i=e[a+1],n=e[a+2];r[t++]=o,r[t++]=i,r[t++]=n}else{const o=e[a+1],i=e[a],n=e[a+2];r[t++]=o,r[t++]=i,r[t++]=n}}return r}(e);case 6:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint32Array(0);const o=t-2,r=new Uint32Array(3*o);if("number"==typeof e){let e=0;for(let t=0;t<o;++t)r[e++]=0,r[e++]=t+1,r[e++]=t+2;return r}{const t=e[0];let a=e[1],i=0;for(let n=0;n<o;++n){const o=e[n+2];r[i++]=t,r[i++]=a,r[i++]=o,a=o}return r}}(e)}}(a.indices||a.attributes.position.count,a.primitiveType),T={},S={},M=a.attributes.position.count,A=Re(u.u,M);if(p(A,a.attributes.position,a.transform),S.position={data:A.typedBuffer,size:A.elementCount},T.position=C,Object(r.i)(a.attributes.normal)){const e=Re(u.u,M);Object(d.h)(n,a.transform),h(e,a.attributes.normal,n),S.normal={data:e.typedBuffer,size:e.elementCount},T.normal=C}if(Object(r.i)(a.attributes.tangent)){const e=Re(u.C,M);Object(d.h)(n,a.transform),bt(e,a.attributes.tangent,n),S.tangent={data:e.typedBuffer,size:e.elementCount},T.tangent=C}if(Object(r.i)(a.attributes.texCoord0)){const e=Re(u.m,M);Se(e,a.attributes.texCoord0),S.uv0={data:e.typedBuffer,size:e.elementCount},T.uv0=C}if(Object(r.i)(a.attributes.color)){const e=Re(u.J,M);if(4===a.attributes.color.elementCount)a.attributes.color instanceof u.C?gt(e,a.attributes.color,255):a.attributes.color instanceof u.J?Ae(e,a.attributes.color):a.attributes.color instanceof u.H&&gt(e,a.attributes.color,1/256);else{_e(e,255,255,255,255);const t=new u.B(e.buffer,0,4);a.attributes.color instanceof u.u?v(t,a.attributes.color,255):a.attributes.color instanceof u.B?Me(t,a.attributes.color):a.attributes.color instanceof u.z&&v(t,a.attributes.color,1/256)}S.color={data:e.typedBuffer,size:e.elementCount},T.color=C}const _=new x.a(new g.a(S,T),`gltf_${e.name}_${f++}`);y.stageResources.geometries.push(_),y.stageResources.materials.push(l.get(s)),O&&(Object(r.i)(c.textureColor)&&y.stageResources.textures.push(m.get(c.textureColor)),Object(r.i)(c.textureNormal)&&y.stageResources.textures.push(m.get(c.textureNormal)),Object(r.i)(c.textureOcclusion)&&y.stageResources.textures.push(m.get(c.textureOcclusion)),Object(r.i)(c.textureEmissive)&&y.stageResources.textures.push(m.get(c.textureEmissive)),Object(r.i)(c.textureMetallicRoughness)&&y.stageResources.textures.push(m.get(c.textureMetallicRoughness))),y.numberOfVertices+=M;const j=_.boundingInfo;Object(b.h)(y.boundingBox,j.getBBMin()),Object(b.h)(y.boundingBox,j.getBBMax())}))})),s}function wt(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}}}]);