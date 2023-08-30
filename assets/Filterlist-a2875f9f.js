import{x as R,w as S,y as $,A as c,D as _,r as A,E as F,F as I,j as t,G as U,H as T,B as o,s as B,b as E,a as M}from"./index-f269b19c.js";import{k as b,c as x}from"./ButtonBase-475096d7.js";import{R as L}from"./Rating-30a020c4.js";import{b as y,I as z}from"./env-5f5d7495.js";import{T as D}from"./Typography-b472ff3e.js";import"./useIsFocusVisible-38102f88.js";function P(s){return String(s).match(/[\d.\-+]*\s*(.*)/)[1]||""}function X(s){return parseFloat(s)}function H(s){return R("MuiSkeleton",s)}S("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const O=["animation","className","component","height","style","variant","width"];let d=s=>s,m,f,j,v;const W=s=>{const{classes:e,variant:a,animation:i,hasChildren:r,width:h,height:l}=s;return T({root:["root",a,i,r&&"withChildren",r&&!h&&"fitContent",r&&!l&&"heightAuto"]},H,e)},G=b(m||(m=d`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),K=b(f||(f=d`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),V=$("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:a}=s;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:s,ownerState:e})=>{const a=P(s.shape.borderRadius)||"px",i=X(s.shape.borderRadius);return c({display:"block",backgroundColor:s.vars?s.vars.palette.Skeleton.bg:_(s.palette.text.primary,s.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${a}/${Math.round(i/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(s.vars||s).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:s})=>s.animation==="pulse"&&x(j||(j=d`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),G),({ownerState:s,theme:e})=>s.animation==="wave"&&x(v||(v=d`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),K,(e.vars||e).palette.action.hover)),q=A.forwardRef(function(e,a){const i=F({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:h,component:l="span",height:u,style:C,variant:k="text",width:w}=i,g=I(i,O),p=c({},i,{animation:r,component:l,variant:k,hasChildren:!!g.children}),N=W(p);return t.jsx(V,c({as:l,ref:a,className:U(N.root,h),ownerState:p},g,{style:c({width:w,height:u},C)}))}),n=q,J=()=>t.jsx(t.Fragment,{children:t.jsxs(o,{sx:{display:"flex",gap:2},children:[t.jsx(n,{height:200,width:170}),t.jsxs(o,{width:200,children:[t.jsx(n,{height:30,width:"100%"}),t.jsx(n,{height:20,width:"60%"})]}),t.jsxs(o,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-around"},width:200,children:[t.jsxs(o,{children:[t.jsx(n,{height:20,width:"100%"}),t.jsx(n,{height:20,width:"100%"}),t.jsx(n,{height:20,width:"100%"})]}),t.jsx(o,{children:t.jsx(n,{height:20,width:"100%"})})]})]})});const Q=({itm:s})=>t.jsxs("div",{className:"star-rate",children:[s.rating===5&&t.jsx("span",{style:{color:"green"},children:"Excellent"}),s.rating===4&&t.jsx("span",{style:{color:"green"},children:"Excellent"}),s.rating===3&&t.jsx("span",{style:{color:"#ffc107"},children:"good"}),s.rating===2&&t.jsx("span",{style:{color:"red"},children:"Avarage"}),s.rating===1&&t.jsx("span",{style:{color:"red"},children:"Avarage"}),t.jsx("div",{className:"stars",children:t.jsx(L,{name:"read-only",value:s.rating,readOnly:!0})})]}),Y=({itm:s,style:e})=>(console.log("itm",s.profilImg.split("/")[3]),t.jsx(t.Fragment,{children:t.jsx(y.LazyLoadImage,{src:`${z}${s.profilImg.split("/")[3]}`,className:e?"img-siz-dcrs":"siImg",alt:"image",effect:"blur"},s._id)})),Z=y.trackWindowScroll(Y),ss=({itm:s,style:e})=>{const a=B();return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"searchItem",children:[t.jsx(Z,{itm:s,style:e}),t.jsxs("div",{className:"siDesc",onClick:()=>{a(`/hotel/${s._id}`,{state:s})},children:[t.jsx("h1",{className:e?"NameFountsiz":"siTitle",children:s.name}),t.jsxs("h6",{children:[s.place," "]})]}),t.jsxs("div",{className:"siDetails",children:[t.jsxs("div",{className:"siRating",children:[t.jsx(Q,{itm:s}),t.jsx(D,{children:`${s.rating}.9`})]}),t.jsxs("div",{className:"siDetailTexts",children:[t.jsx("span",{className:"siPrice",children:s.amount}),t.jsx("span",{className:"siTaxOp",children:"Includes taxes and fees"}),t.jsx("button",{className:e?"siCheckButton-foint-siz":"siCheckButton",children:"See availability"})]})]})]})})},os=({style:s})=>{const e=E(i=>i.HotelSlice.allHotals.data),{params:a}=M();return t.jsx(t.Fragment,{children:e?e==null?void 0:e.filter(i=>i.category==a).map((i,r)=>t.jsx(ss,{itm:i,style:s},r)):t.jsx(J,{})})};export{os as default};
