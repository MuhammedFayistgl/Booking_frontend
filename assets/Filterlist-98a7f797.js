import{f as R,e as S,s as _,i as c,k as $,r as A,l as F,m as T,j as t,n as U,o as B,B as o,d as E,b as I,a as M}from"./index-8b56be35.js";import{k as b,c as x}from"./ButtonBase-6d461b80.js";import{R as z}from"./Rating-21700821.js";import{b as y}from"./index-33bdd58e.js";import{T as L}from"./Typography-6af892cb.js";import"./useIsFocusVisible-44ffdc27.js";function P(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function X(e){return parseFloat(e)}function D(e){return R("MuiSkeleton",e)}S("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const O=["animation","className","component","height","style","variant","width"];let d=e=>e,m,f,j,v;const W=e=>{const{classes:s,variant:a,animation:i,hasChildren:n,width:h,height:l}=e;return B({root:["root",a,i,n&&"withChildren",n&&!h&&"fitContent",n&&!l&&"heightAuto"]},D,s)},H=b(m||(m=d`
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
`)),V=_("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:a}=e;return[s.root,s[a.variant],a.animation!==!1&&s[a.animation],a.hasChildren&&s.withChildren,a.hasChildren&&!a.width&&s.fitContent,a.hasChildren&&!a.height&&s.heightAuto]}})(({theme:e,ownerState:s})=>{const a=P(e.shape.borderRadius)||"px",i=X(e.shape.borderRadius);return c({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:$(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},s.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${a}/${Math.round(i/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},s.variant==="circular"&&{borderRadius:"50%"},s.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},s.hasChildren&&{"& > *":{visibility:"hidden"}},s.hasChildren&&!s.width&&{maxWidth:"fit-content"},s.hasChildren&&!s.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&x(j||(j=d`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),H),({ownerState:e,theme:s})=>e.animation==="wave"&&x(v||(v=d`
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
    `),K,(s.vars||s).palette.action.hover)),q=A.forwardRef(function(s,a){const i=F({props:s,name:"MuiSkeleton"}),{animation:n="pulse",className:h,component:l="span",height:u,style:C,variant:k="text",width:w}=i,g=T(i,O),p=c({},i,{animation:n,component:l,variant:k,hasChildren:!!g.children}),N=W(p);return t.jsx(V,c({as:l,ref:a,className:U(N.root,h),ownerState:p},g,{style:c({width:w,height:u},C)}))}),r=q,G=()=>t.jsx(t.Fragment,{children:t.jsxs(o,{sx:{display:"flex",gap:2},children:[t.jsx(r,{height:200,width:170}),t.jsxs(o,{width:200,children:[t.jsx(r,{height:30,width:"100%"}),t.jsx(r,{height:20,width:"60%"})]}),t.jsxs(o,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-around"},width:200,children:[t.jsxs(o,{children:[t.jsx(r,{height:20,width:"100%"}),t.jsx(r,{height:20,width:"100%"}),t.jsx(r,{height:20,width:"100%"})]}),t.jsx(o,{children:t.jsx(r,{height:20,width:"100%"})})]})]})});const J=({itm:e})=>t.jsxs("div",{className:"star-rate",children:[e.rating===5&&t.jsx("span",{style:{color:"green"},children:"Excellent"}),e.rating===4&&t.jsx("span",{style:{color:"green"},children:"Excellent"}),e.rating===3&&t.jsx("span",{style:{color:"#ffc107"},children:"good"}),e.rating===2&&t.jsx("span",{style:{color:"red"},children:"Avarage"}),e.rating===1&&t.jsx("span",{style:{color:"red"},children:"Avarage"}),t.jsx("div",{className:"stars",children:t.jsx(z,{name:"read-only",value:e.rating,readOnly:!0})})]}),Q=({itm:e,style:s})=>t.jsx(t.Fragment,{children:t.jsx(y.LazyLoadImage,{src:e.profilImg,className:s?"img-siz-dcrs":"siImg",alt:"image",effect:"blur"},e._id)}),Y=y.trackWindowScroll(Q),Z=({itm:e,style:s})=>{const a=E();return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"searchItem",children:[t.jsx(Y,{itm:e,style:s}),t.jsxs("div",{className:"siDesc",onClick:()=>{a(`/hotel/${e._id}`,{state:e})},children:[t.jsx("h1",{className:s?"NameFountsiz":"siTitle",children:e.name}),t.jsxs("h6",{children:[e.place," "]})]}),t.jsxs("div",{className:"siDetails",children:[t.jsxs("div",{className:"siRating",children:[t.jsx(J,{itm:e}),t.jsx(L,{children:`${e.rating}.9`})]}),t.jsxs("div",{className:"siDetailTexts",children:[t.jsx("span",{className:"siPrice",children:e.amount}),t.jsx("span",{className:"siTaxOp",children:"Includes taxes and fees"}),t.jsx("button",{className:s?"siCheckButton-foint-siz":"siCheckButton",children:"See availability"})]})]})]})})},re=({style:e})=>{const s=I(i=>i.HotelSlice.allHotals.data),{params:a}=M();return t.jsx(t.Fragment,{children:s?s==null?void 0:s.filter(i=>i.category==a).map((i,n)=>t.jsx(Z,{itm:i,style:e},n)):t.jsx(G,{})})};export{re as default};
