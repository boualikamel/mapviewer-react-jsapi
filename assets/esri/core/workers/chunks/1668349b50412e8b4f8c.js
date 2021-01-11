self.webpackChunkRemoteClient([156],{555:function(n,e,t){"use strict";t.r(e),t.d(e,"registerFunctions",(function(){return u}));var o=t(107),r=t(198),a=t(87),c=t(235);function i(n){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?r.a.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:a.l[n.field.type],codedValues:n.domain.codedValues.map(n=>({name:n.name,code:n.code}))}):r.a.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:a.l[n.field.type],min:n.domain.min,max:n.domain.max}):null}function u(n){"async"===n.mode&&(n.functions.domain=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(Object(o.J)(t,2,3),t[0]instanceof c.a)return i(t[0].fullDomain(Object(o.x)(t[1]),void 0===t[2]?void 0:Object(o.N)(t[2])));if(Object(o.K)(t[0]))return t[0]._ensureLoaded().then(()=>i(Object(o.k)(Object(o.x)(t[1]),t[0],null,void 0===t[2]?void 0:Object(o.N)(t[2]))));throw new Error("Invalid Parameter")}))},n.functions.subtypes=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(Object(o.J)(t,1,1),t[0]instanceof c.a){const n=t[0].subtypes();return n?r.a.convertObjectToArcadeDictionary(n):null}if(Object(o.K)(t[0]))return t[0]._ensureLoaded().then(()=>{const n=t[0].subtypes();return n?r.a.convertObjectToArcadeDictionary(n):null});throw new Error("Invalid Parameter")}))},n.functions.domainname=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(Object(o.J)(t,2,4),t[0]instanceof c.a)return t[0].domainValueLookup(Object(o.x)(t[1]),t[2],void 0===t[3]?void 0:Object(o.N)(t[3]));if(Object(o.K)(t[0]))return t[0]._ensureLoaded().then(()=>{const n=Object(o.k)(Object(o.x)(t[1]),t[0],null,void 0===t[3]?void 0:Object(o.N)(t[3]));return Object(o.l)(n,t[2])});throw new Error("Invalid Parameter")}))},n.signatures.push({name:"domainname",min:"2",max:"4"}),n.functions.domaincode=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(Object(o.J)(t,2,4),t[0]instanceof c.a)return t[0].domainCodeLookup(Object(o.x)(t[1]),t[2],void 0===t[3]?void 0:Object(o.N)(t[3]));if(Object(o.K)(t[0]))return t[0]._ensureLoaded().then(()=>{const n=Object(o.k)(Object(o.x)(t[1]),t[0],null,void 0===t[3]?void 0:Object(o.N)(t[3]));return Object(o.o)(n,t[2])});throw new Error("Invalid Parameter")}))},n.signatures.push({name:"domaincode",min:"2",max:"4"})),n.functions.text=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(Object(o.J)(t,1,2),!Object(o.K)(t[0]))return Object(o.b)(t[0],t[1]);{const e=Object(o.O)(t[1],"");if(""===e)return t[0].castToText();if("schema"===e.toLowerCase())return t[0].convertToText("schema",n.abortSignal);if("featureset"===e.toLowerCase())return t[0].convertToText("featureset",n.abortSignal)}}))},n.functions.gdbversion=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(Object(o.J)(t,1,1),t[0]instanceof c.a)return t[0].gdbVersion();if(Object(o.K)(t[0]))return t[0].load().then(n=>n.gdbVersion);throw new Error("Invalid Parameter")}))},n.functions.schema=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(Object(o.J)(t,1,1),Object(o.K)(t[0]))return t[0].load().then(()=>r.a.convertObjectToArcadeDictionary(t[0].schema()));if(t[0]instanceof c.a){const n=t[0].schema();return n?r.a.convertObjectToArcadeDictionary(n):null}throw new Error("Invalid Parameter")}))}}}});