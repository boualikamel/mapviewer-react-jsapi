(this["webpackJsonptesting-ant-cra"]=this["webpackJsonptesting-ant-cra"]||[]).push([[91,154],{1102:function(n,t,e){"use strict";e.r(t),e.d(t,"registerFunctions",(function(){return f}));var r=e(642),c=e(899),u=e(25),i=e(569);function o(n,t,e,o,f,s){if(1===o.length){if(Object(r.u)(o[0]))return Object(u.t)(Object(c.a)(n,o[0],Object(r.c)(o[1],-1)));if(Object(r.v)(o[0]))return Object(u.t)(Object(c.a)(n,o[0].toArray(),Object(r.c)(o[1],-1)))}else if(2===o.length){if(Object(r.u)(o[0]))return Object(u.t)(Object(c.a)(n,o[0],Object(r.c)(o[1],-1)));if(Object(r.v)(o[0]))return Object(u.t)(Object(c.a)(n,o[0].toArray(),Object(r.c)(o[1],-1)));if(Object(r.K)(o[0]))return o[0].load().then((function(e){return a(i.WhereClause.create(o[1],e.getFieldsIndex()),s,f).then((function(e){return o[0].calculateStatistic(n,e,Object(r.c)(o[2],1e3),t.abortSignal)}))}))}else if(3===o.length&&Object(r.K)(o[0]))return o[0].load().then((function(e){return a(i.WhereClause.create(o[1],e.getFieldsIndex()),s,f).then((function(e){return o[0].calculateStatistic(n,e,Object(r.c)(o[2],1e3),t.abortSignal)}))}));return Object(u.t)(Object(c.a)(n,o,-1))}function a(n,t,e){try{var r=n.getVariables();if(r.length>0){for(var c=[],i=0;i<r.length;i++){var o={name:r[i]};c.push(t.evaluateIdentifier(e,o))}return Object(u.b)(c).then((function(t){for(var e={},c=0;c<r.length;c++)e[r[c]]=t[c];return n.parameters=e,n}))}return Object(u.t)(n)}catch(a){return Object(u.s)(a)}}function f(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return o("stdev",e,0,c,t,n)}))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return o("variance",e,0,c,t,n)}))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return o("mean",e,0,c,t,n)}))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return o("mean",e,0,c,t,n)}))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return o("sum",e,0,c,t,n)}))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return o("min",e,0,c,t,n)}))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return o("max",e,0,c,t,n)}))},n.functions.count=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(Object(r.J)(e,1,1),Object(r.K)(e[0]))return e[0].count(n.abortSignal);if(Object(r.u)(e[0])||Object(r.A)(e[0]))return e[0].length;if(Object(r.v)(e[0]))return e[0].length();throw new Error("Invalid Parameters for Count")}))})}},600:function(n,t,e){"use strict";(function(n){e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return c}));var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof n?n:"undefined"!=typeof self?self:{};function c(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function u(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}}).call(this,e(441))}}]);
//# sourceMappingURL=91.57411663.chunk.js.map