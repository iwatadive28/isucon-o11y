import{t as H,s as T,v as y,_ as a,E as v,F as k,J as R,aC as q,K as h,N as J,j as C,aD as _,O as S,P as D}from"./index-700240b0.js";function U(o){return T("MuiFormControl",o)}const E=H("MuiFormControl",["root","error","disabled","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","sizeSm","sizeMd","sizeLg","horizontal","vertical"]),P=E,I=H("MuiSwitch",["root","checked","disabled","action","input","thumb","track","focusVisible","readOnly","colorPrimary","colorDanger","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantOutlined","variantSoft","variantSolid","startDecorator","endDecorator"]),O=I,A=["id","className","component","disabled","required","error","color","size","orientation","slots","slotProps"],V=o=>{const{disabled:r,error:l,size:e,color:s,orientation:i}=o,c={root:["root",i,r&&"disabled",l&&"error",s&&`color${S(s)}`,e&&`size${S(e)}`]};return D(c,U,{})},G=y("div",{name:"JoyFormControl",slot:"Root",overridesResolver:(o,r)=>r.root})(({theme:o,ownerState:r})=>{var l,e,s;return a({"--unstable_RadioGroup-margin":"0.5rem 0","--FormLabel-alignSelf":r.orientation==="horizontal"?"align-items":"flex-start","--FormLabel-asteriskColor":o.vars.palette.danger[500]},r.size==="sm"&&{"--FormLabel-fontSize":o.vars.fontSize.xs,"--FormLabel-lineHeight":o.vars.lineHeight.xl,"--FormLabel-margin":r.orientation==="horizontal"?"0 0.5rem 0 0":"0 0 0.25rem 0","--FormHelperText-fontSize":o.vars.fontSize.xs,"--FormHelperText-lineHeight":o.vars.lineHeight.xl},r.size==="md"&&{"--FormLabel-fontSize":o.vars.fontSize.sm,"--FormLabel-lineHeight":o.vars.lineHeight.sm,"--FormLabel-margin":r.orientation==="horizontal"?"0 0.75rem 0 0":"0 0 0.375rem 0","--FormHelperText-fontSize":o.vars.fontSize.sm,"--FormHelperText-lineHeight":o.vars.lineHeight.sm},r.size==="lg"&&{"--FormLabel-fontSize":o.vars.fontSize.md,"--FormLabel-lineHeight":o.vars.lineHeight.md,"--FormLabel-margin":r.orientation==="horizontal"?"0 1rem 0 0":"0 0 0.5rem 0","--FormHelperText-fontSize":o.vars.fontSize.sm,"--FormHelperText-lineHeight":o.vars.lineHeight.sm},r.color&&{"--FormHelperText-color":(l=o.vars.palette[r.color])==null?void 0:l[500]},{"--FormHelperText-margin":"0.375rem 0 0 0",[`&.${P.error}`]:{"--FormHelperText-color":o.vars.palette.danger[500]},[`&.${P.disabled}`]:{"--FormLabel-color":(e=o.variants.plainDisabled)==null||(e=e[r.color||"neutral"])==null?void 0:e.color,"--FormHelperText-color":(s=o.variants.plainDisabled)==null||(s=s[r.color||"neutral"])==null?void 0:s.color},display:"flex",position:"relative",flexDirection:r.orientation==="horizontal"?"row":"column"},r.orientation==="horizontal"&&{[`& > label ~ .${O.root}`]:{"--unstable_Switch-margin":"0 0 0 auto"}})}),K=v.forwardRef(function(r,l){const e=k({props:r,name:"JoyFormControl"}),{id:s,className:i,component:c="div",disabled:m=!1,required:d=!1,error:p=!1,color:u,size:t="md",orientation:F="vertical",slots:b={},slotProps:f={}}=e,g=R(e,A),n=q(s),[x,L]=v.useState(null),z=a({},e,{id:n,component:c,color:u,disabled:m,error:p,required:d,size:t,orientation:F});let $;const M=V(z),[j,N]=h("root",{ref:l,className:J(M.root,i),elementType:G,externalForwardedProps:a({},g,{component:c,slots:b,slotProps:f}),ownerState:z}),W=v.useMemo(()=>({disabled:m,required:d,error:p,color:u,size:t,htmlFor:n,labelId:`${n}-label`,"aria-describedby":x?`${n}-helper-text`:void 0,setHelperText:L,registerEffect:$}),[u,m,p,x,n,$,d,t]);return C.jsx(_.Provider,{value:W,children:C.jsx(j,a({},N))})}),ro=K;function w(o){return T("MuiFormLabel",o)}H("MuiFormLabel",["root","asterisk"]);const B=["children","component","slots","slotProps"],Q=()=>D({root:["root"],asterisk:["asterisk"]},w,{}),X=y("label",{name:"JoyFormLabel",slot:"Root",overridesResolver:(o,r)=>r.root})(({theme:o})=>({"--Icon-fontSize":"calc(var(--FormLabel-lineHeight) * 1em)",WebkitTapHighlightColor:"transparent",alignSelf:"var(--FormLabel-alignSelf)",display:"flex",gap:"2px",alignItems:"center",flexWrap:"wrap",userSelect:"none",fontFamily:o.vars.fontFamily.body,fontSize:`var(--FormLabel-fontSize, ${o.vars.fontSize.sm})`,fontWeight:o.vars.fontWeight.md,lineHeight:`var(--FormLabel-lineHeight, ${o.vars.lineHeight.sm})`,color:`var(--FormLabel-color, ${o.vars.palette.text.primary})`,margin:"var(--FormLabel-margin, 0px)"})),Y=y("span",{name:"JoyFormLabel",slot:"Asterisk",overridesResolver:(o,r)=>r.asterisk})({color:"var(--FormLabel-asteriskColor)"}),Z=v.forwardRef(function(r,l){var e,s;const i=k({props:r,name:"JoyFormLabel"}),{children:c,component:m="label",slots:d={},slotProps:p={}}=i,u=R(i,B),t=v.useContext(_),F=(e=(s=r.required)!=null?s:t==null?void 0:t.required)!=null?e:!1,b=a({},i,{required:F}),f=Q(),g=a({},u,{component:m,slots:d,slotProps:p}),[n,x]=h("root",{additionalProps:{htmlFor:t==null?void 0:t.htmlFor,id:t==null?void 0:t.labelId},ref:l,className:f.root,elementType:X,externalForwardedProps:g,ownerState:b}),[L,z]=h("asterisk",{additionalProps:{"aria-hidden":!0},className:f.asterisk,elementType:Y,externalForwardedProps:g,ownerState:b});return C.jsxs(n,a({},x,{children:[c,F&&C.jsxs(L,a({},z,{children:[" ","*"]}))]}))}),eo=Z;export{ro as F,eo as a};
