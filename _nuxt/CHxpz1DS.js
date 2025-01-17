import{d as y,y as h,C as d,i as o,c as f,z as t,w as k,e as w,H as I,f as i,n as c,B as C,aw as x,b2 as B,ad as z,a8 as V}from"./BQj4iQgA.js";import{r as N}from"./noupgp-w.js";import"./BmlbPuZL.js";const P={slots:{base:["group relative block px-4 py-3 rounded-[calc(var(--ui-radius)*1.5)] text-sm/6 my-5 last:mb-0 [&_code]:text-xs/5 [&_code]:bg-[var(--ui-bg)] [&_pre]:bg-[var(--ui-bg)] [&>div]:my-2.5 [&_ul]:my-2.5 [&_ol]:my-2.5 [&>*]:last:!mb-0 [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:my-0","transition-colors"],icon:["size-4 shrink-0 align-sub me-1.5","transition-colors"],externalIcon:["size-4 align-top absolute right-2 top-2 pointer-events-none","transition-colors"]},variants:{color:{primary:{base:"border border-[var(--ui-primary)]/25 bg-[var(--ui-primary)]/10 text-[var(--ui-color-primary-600)] dark:text-[var(--ui-color-primary-300)] [&_a]:text-[var(--ui-primary)] [&_a]:hover:border-[var(--ui-primary)] [&_code]:text-[var(--ui-color-primary-600)] dark:[&_code]:text-[var(--ui-color-primary-300)] [&_code]:border-[var(--ui-primary)]/25 [&_a]:hover:[&>code]:border-[var(--ui-primary)] [&_a]:hover:[&>code]:text-[var(--ui-primary)] [&>ul]:marker:text-[var(--ui-primary)]/50",icon:"text-[var(--ui-primary)]",externalIcon:"text-[var(--ui-color-primary-600)] dark:text-[var(--ui-color-primary-300)]"},secondary:{base:"border border-[var(--ui-secondary)]/25 bg-[var(--ui-secondary)]/10 text-[var(--ui-color-secondary-600)] dark:text-[var(--ui-color-secondary-300)] [&_a]:text-[var(--ui-secondary)] [&_a]:hover:border-[var(--ui-secondary)] [&_code]:text-[var(--ui-color-secondary-600)] dark:[&_code]:text-[var(--ui-color-secondary-300)] [&_code]:border-[var(--ui-secondary)]/25 [&_a]:hover:[&>code]:border-[var(--ui-secondary)] [&_a]:hover:[&>code]:text-[var(--ui-secondary)] [&>ul]:marker:text-[var(--ui-secondary)]/50",icon:"text-[var(--ui-secondary)]",externalIcon:"text-[var(--ui-color-secondary-600)] dark:text-[var(--ui-color-secondary-300)]"},success:{base:"border border-[var(--ui-success)]/25 bg-[var(--ui-success)]/10 text-[var(--ui-color-success-600)] dark:text-[var(--ui-color-success-300)] [&_a]:text-[var(--ui-success)] [&_a]:hover:border-[var(--ui-success)] [&_code]:text-[var(--ui-color-success-600)] dark:[&_code]:text-[var(--ui-color-success-300)] [&_code]:border-[var(--ui-success)]/25 [&_a]:hover:[&>code]:border-[var(--ui-success)] [&_a]:hover:[&>code]:text-[var(--ui-success)] [&>ul]:marker:text-[var(--ui-success)]/50",icon:"text-[var(--ui-success)]",externalIcon:"text-[var(--ui-color-success-600)] dark:text-[var(--ui-color-success-300)]"},info:{base:"border border-[var(--ui-info)]/25 bg-[var(--ui-info)]/10 text-[var(--ui-color-info-600)] dark:text-[var(--ui-color-info-300)] [&_a]:text-[var(--ui-info)] [&_a]:hover:border-[var(--ui-info)] [&_code]:text-[var(--ui-color-info-600)] dark:[&_code]:text-[var(--ui-color-info-300)] [&_code]:border-[var(--ui-info)]/25 [&_a]:hover:[&>code]:border-[var(--ui-info)] [&_a]:hover:[&>code]:text-[var(--ui-info)] [&>ul]:marker:text-[var(--ui-info)]/50",icon:"text-[var(--ui-info)]",externalIcon:"text-[var(--ui-color-info-600)] dark:text-[var(--ui-color-info-300)]"},warning:{base:"border border-[var(--ui-warning)]/25 bg-[var(--ui-warning)]/10 text-[var(--ui-color-warning-600)] dark:text-[var(--ui-color-warning-300)] [&_a]:text-[var(--ui-warning)] [&_a]:hover:border-[var(--ui-warning)] [&_code]:text-[var(--ui-color-warning-600)] dark:[&_code]:text-[var(--ui-color-warning-300)] [&_code]:border-[var(--ui-warning)]/25 [&_a]:hover:[&>code]:border-[var(--ui-warning)] [&_a]:hover:[&>code]:text-[var(--ui-warning)] [&>ul]:marker:text-[var(--ui-warning)]/50",icon:"text-[var(--ui-warning)]",externalIcon:"text-[var(--ui-color-warning-600)] dark:text-[var(--ui-color-warning-300)]"},error:{base:"border border-[var(--ui-error)]/25 bg-[var(--ui-error)]/10 text-[var(--ui-color-error-600)] dark:text-[var(--ui-color-error-300)] [&_a]:text-[var(--ui-error)] [&_a]:hover:border-[var(--ui-error)] [&_code]:text-[var(--ui-color-error-600)] dark:[&_code]:text-[var(--ui-color-error-300)] [&_code]:border-[var(--ui-error)]/25 [&_a]:hover:[&>code]:border-[var(--ui-error)] [&_a]:hover:[&>code]:text-[var(--ui-error)] [&>ul]:marker:text-[var(--ui-error)]/50",icon:"text-[var(--ui-error)]",externalIcon:"text-[var(--ui-color-error-600)] dark:text-[var(--ui-color-error-300)]"},neutral:{base:"border border-[var(--ui-border-muted)] bg-[var(--ui-bg-muted)] text-[var(--ui-text)]",icon:"text-[var(--ui-text-highlighted)]",externalIcon:"text-[var(--ui-text-dimmed)]"}},to:{true:"border-dashed"}},compoundVariants:[{color:"primary",to:!0,class:{base:"hover:border-[var(--ui-primary)]",externalIcon:"group-hover:text-[var(--ui-primary)]"}},{color:"secondary",to:!0,class:{base:"hover:border-[var(--ui-secondary)]",externalIcon:"group-hover:text-[var(--ui-secondary)]"}},{color:"success",to:!0,class:{base:"hover:border-[var(--ui-success)]",externalIcon:"group-hover:text-[var(--ui-success)]"}},{color:"info",to:!0,class:{base:"hover:border-[var(--ui-info)]",externalIcon:"group-hover:text-[var(--ui-info)]"}},{color:"warning",to:!0,class:{base:"hover:border-[var(--ui-warning)]",externalIcon:"group-hover:text-[var(--ui-warning)]"}},{color:"error",to:!0,class:{base:"hover:border-[var(--ui-error)]",externalIcon:"group-hover:text-[var(--ui-error)]"}},{color:"neutral",to:!0,class:{base:"hover:border-[var(--ui-border-inverted)]",externalIcon:"group-hover:text-[var(--ui-text-highlighted)]"}}],defaultVariants:{color:"neutral"}},A=V;var b,p;const U=x({extend:x(P),...((p=(b=A.uiPro)==null?void 0:b.prose)==null?void 0:p.callout)||{}}),$=y({inheritAttrs:!1,__name:"Callout",props:{to:{},target:{},icon:{},color:{},class:{},ui:{}},setup(_){const r=_,m=h(),a=d(()=>U({color:r.color,to:!!r.to})),n=d(()=>r.target||(r.to&&typeof r.to=="string"&&r.to.startsWith("http")?"_blank":void 0));return(e,s)=>{var v,l;const g=B,u=z;return o(),f("div",{class:c(a.value.base({class:r.class}))},[e.to?(o(),t(g,I({key:0},{to:e.to,target:n.value,...e.$attrs},{class:"focus:outline-none",tabindex:"-1"}),{default:k(()=>s[0]||(s[0]=[w("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16)):i("",!0),e.icon?(o(),t(u,{key:1,name:e.icon,class:c(a.value.icon({class:(v=r.ui)==null?void 0:v.icon}))},null,8,["name","class"])):i("",!0),e.to&&n.value==="_blank"?(o(),t(u,{key:2,name:C(m).ui.icons.external,class:c(a.value.externalIcon({class:(l=r.ui)==null?void 0:l.externalIcon}))},null,8,["name","class"])):i("",!0),N(e.$slots,"default",{mdcUnwrap:"p"})],2)}}}),L=Object.assign($,{__name:"ProseCallout"});export{L as default};
