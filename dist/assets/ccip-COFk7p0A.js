import{B as p,g as m,s as y,d as w,i as k,c as O,a as E,e as L,H as h,b as x}from"./index-Dtcf11Pz.js";class M extends p{constructor({callbackSelector:s,cause:e,data:n,extraData:c,sender:u,urls:t}){var i;super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],(i=e.metaMessages)!=null&&i.length?"":[],"Offchain Gateway Call:",t&&["  Gateway URL(s):",...t.map(f=>`    ${m(f)}`)],`  Sender: ${u}`,`  Data: ${n}`,`  Callback selector: ${s}`,`  Extra data: ${c}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class R extends p{constructor({result:s,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${m(e)}`,`Response: ${y(s)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class $ extends p{constructor({sender:s,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${s}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}const j="0x556f1830",S={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function v(o,{blockNumber:s,blockTag:e,data:n,to:c}){const{args:u}=w({data:n,abi:[S]}),[t,i,f,a,r]=u,{ccipRead:d}=o,b=d&&typeof(d==null?void 0:d.request)=="function"?d.request:q;try{if(!k(c,t))throw new $({sender:t,to:c});const l=await b({data:f,sender:t,urls:i}),{data:g}=await O(o,{blockNumber:s,blockTag:e,data:E([a,L([{type:"bytes"},{type:"bytes"}],[l,r])]),to:c});return g}catch(l){throw new M({callbackSelector:a,cause:l,data:n,extraData:r,sender:t,urls:i})}}async function q({data:o,sender:s,urls:e}){var c;let n=new Error("An unknown error occurred.");for(let u=0;u<e.length;u++){const t=e[u],i=t.includes("{data}")?"GET":"POST",f=i==="POST"?{data:o,sender:s}:void 0;try{const a=await fetch(t.replace("{sender}",s).replace("{data}",o),{body:JSON.stringify(f),method:i});let r;if((c=a.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?r=(await a.json()).data:r=await a.text(),!a.ok){n=new h({body:f,details:r!=null&&r.error?y(r.error):a.statusText,headers:a.headers,status:a.status,url:t});continue}if(!x(r)){n=new R({result:r,url:t});continue}return r}catch(a){n=new h({body:f,details:a.message,url:t})}}throw n}export{q as ccipRequest,v as offchainLookup,S as offchainLookupAbiItem,j as offchainLookupSignature};
