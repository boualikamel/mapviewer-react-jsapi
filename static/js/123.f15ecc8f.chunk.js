(this["webpackJsonpjsapi-create-react-app"]=this["webpackJsonpjsapi-create-react-app"]||[]).push([[123],{551:function(e,t,s){"use strict";s.r(t),s.d(t,"execute",(function(){return o}));var r=s(41),a=s(13);let n;function o(e,t={}){let s=t.responseType;s?"json"!==s&&"text"!==s&&"blob"!==s&&"array-buffer"!==s&&(s="text"):s="json";const o=t&&t.signal;return delete t.signal,r.a.invokeStaticMessage("request",{url:e,options:t},{signal:o}).then((r=>{const o=r.data;let c,u,i,l;if(o&&!("json"!==s&&"text"!==s&&"blob"!==s||(c=new Blob([o]),"json"!==s&&"text"!==s||(n||(n=new FileReaderSync),u=n.readAsText(c),"json"!==s)))){try{i=JSON.parse(u||null)}catch(r){const s={...r,url:e,requestOptions:t};throw new a.a("request:server",r.message,s)}if(i.error){const s={...i.error,url:e,requestOptions:t};throw new a.a("request:server",i.error.message,s)}}switch(s){case"json":l=i;break;case"text":l=u;break;case"blob":l=c;break;default:l=o}return{data:l,requestOptions:t,ssl:r.ssl,url:e}}))}}}]);