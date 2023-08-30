import{r as i,aa as ge,ab as ze,ac as _e,ad as ue,ae as Oe,R as K,K as Ae,af as Ke,A as X,F as ee,G as C,j as F,w as be,y as te,E as Re,x as Xe,H as Ye}from"./index-f269b19c.js";import{u as ce,a as Ge}from"./useIsFocusVisible-38102f88.js";const We=typeof window<"u"?i.useLayoutEffect:i.useEffect,He=We;function W(t){const e=i.useRef(t);return He(()=>{e.current=t}),i.useCallback((...s)=>(0,e.current)(...s),[])}var Tt=ze(function(t,e){var s=t.styles,l=ge([s],void 0,i.useContext(_e)),r=i.useRef();return ue(function(){var n=e.key+"-global",o=new e.sheet.constructor({key:n,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),c=!1,u=document.querySelector('style[data-emotion="'+n+" "+l.name+'"]');return e.sheet.tags.length&&(o.before=e.sheet.tags[0]),u!==null&&(c=!0,u.setAttribute("data-emotion",n),o.hydrate([u])),r.current=[o,c],function(){o.flush()}},[e]),ue(function(){var n=r.current,o=n[0],c=n[1];if(c){n[1]=!1;return}if(l.next!==void 0&&Oe(e,l.next,!0),o.tags.length){var u=o.tags[o.tags.length-1].nextElementSibling;o.before=u,o.flush()}e.insert("",l,o,!1)},[e,l.name]),null});function qe(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];return ge(e)}var ne=function(){var e=qe.apply(void 0,arguments),s="animation-"+e.name;return{name:s,styles:"@keyframes "+s+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const pe=K.createContext(null);function oe(t,e){var s=function(n){return e&&i.isValidElement(n)?e(n):n},l=Object.create(null);return t&&i.Children.map(t,function(r){return r}).forEach(function(r){l[r.key]=s(r)}),l}function Je(t,e){t=t||{},e=e||{};function s(d){return d in e?e[d]:t[d]}var l=Object.create(null),r=[];for(var n in t)n in e?r.length&&(l[n]=r,r=[]):r.push(n);var o,c={};for(var u in e){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=s(p)}c[u]=s(u)}for(o=0;o<r.length;o++)c[r[o]]=s(r[o]);return c}function $(t,e,s){return s[e]!=null?s[e]:t.props[e]}function Qe(t,e){return oe(t.children,function(s){return i.cloneElement(s,{onExited:e.bind(null,s),in:!0,appear:$(s,"appear",t),enter:$(s,"enter",t),exit:$(s,"exit",t)})})}function Ze(t,e,s){var l=oe(t.children),r=Je(e,l);return Object.keys(r).forEach(function(n){var o=r[n];if(i.isValidElement(o)){var c=n in e,u=n in l,p=e[n],d=i.isValidElement(p)&&!p.props.in;u&&(!c||d)?r[n]=i.cloneElement(o,{onExited:s.bind(null,o),in:!0,exit:$(o,"exit",t),enter:$(o,"enter",t)}):!u&&c&&!d?r[n]=i.cloneElement(o,{in:!1}):u&&c&&i.isValidElement(p)&&(r[n]=i.cloneElement(o,{onExited:s.bind(null,o),in:p.props.in,exit:$(o,"exit",t),enter:$(o,"enter",t)}))}}),r}var et=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},tt={component:"div",childFactory:function(e){return e}},se=function(t){Ae(e,t);function e(l,r){var n;n=t.call(this,l,r)||this;var o=n.handleExited.bind(Ke(n));return n.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},n}var s=e.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(r,n){var o=n.children,c=n.handleExited,u=n.firstRender;return{children:u?Qe(r,c):Ze(r,o,c),firstRender:!1}},s.handleExited=function(r,n){var o=oe(this.props.children);r.key in o||(r.props.onExited&&r.props.onExited(n),this.mounted&&this.setState(function(c){var u=X({},c.children);return delete u[r.key],{children:u}}))},s.render=function(){var r=this.props,n=r.component,o=r.childFactory,c=ee(r,["component","childFactory"]),u=this.state.contextValue,p=et(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,n===null?K.createElement(pe.Provider,{value:u},p):K.createElement(pe.Provider,{value:u},K.createElement(n,c,p))},e}(K.Component);se.propTypes={};se.defaultProps=tt;const nt=se;function ot(t){const{className:e,classes:s,pulsate:l=!1,rippleX:r,rippleY:n,rippleSize:o,in:c,onExited:u,timeout:p}=t,[d,b]=i.useState(!1),g=C(e,s.ripple,s.rippleVisible,l&&s.ripplePulsate),T={width:o,height:o,top:-(o/2)+n,left:-(o/2)+r},h=C(s.child,d&&s.childLeaving,l&&s.childPulsate);return!c&&!d&&b(!0),i.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),F.jsx("span",{className:g,style:T,children:F.jsx("span",{className:h})})}const st=be("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=st,rt=["center","classes","className"];let H=t=>t,fe,de,he,me;const Z=550,it=80,at=ne(fe||(fe=H`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),lt=ne(de||(de=H`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ut=ne(he||(he=H`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ct=te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),pt=te(ot,{name:"MuiTouchRipple",slot:"Ripple"})(me||(me=H`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,at,Z,({theme:t})=>t.transitions.easing.easeInOut,m.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,m.child,m.childLeaving,lt,Z,({theme:t})=>t.transitions.easing.easeInOut,m.childPulsate,ut,({theme:t})=>t.transitions.easing.easeInOut),ft=i.forwardRef(function(e,s){const l=Re({props:e,name:"MuiTouchRipple"}),{center:r=!1,classes:n={},className:o}=l,c=ee(l,rt),[u,p]=i.useState([]),d=i.useRef(0),b=i.useRef(null);i.useEffect(()=>{b.current&&(b.current(),b.current=null)},[u]);const g=i.useRef(!1),T=i.useRef(0),h=i.useRef(null),R=i.useRef(null);i.useEffect(()=>()=>{T.current&&clearTimeout(T.current)},[]);const U=i.useCallback(f=>{const{pulsate:y,rippleX:E,rippleY:w,rippleSize:j,cb:_}=f;p(x=>[...x,F.jsx(pt,{classes:{ripple:C(n.ripple,m.ripple),rippleVisible:C(n.rippleVisible,m.rippleVisible),ripplePulsate:C(n.ripplePulsate,m.ripplePulsate),child:C(n.child,m.child),childLeaving:C(n.childLeaving,m.childLeaving),childPulsate:C(n.childPulsate,m.childPulsate)},timeout:Z,pulsate:y,rippleX:E,rippleY:w,rippleSize:j},d.current)]),d.current+=1,b.current=_},[n]),N=i.useCallback((f={},y={},E=()=>{})=>{const{pulsate:w=!1,center:j=r||y.pulsate,fakeElement:_=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&g.current){g.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(g.current=!0);const x=_?null:R.current,B=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,P,k;if(j||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(B.width/2),P=Math.round(B.height/2);else{const{clientX:L,clientY:S}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(L-B.left),P=Math.round(S-B.top)}if(j)k=Math.sqrt((2*B.width**2+B.height**2)/3),k%2===0&&(k+=1);else{const L=Math.max(Math.abs((x?x.clientWidth:0)-v),v)*2+2,S=Math.max(Math.abs((x?x.clientHeight:0)-P),P)*2+2;k=Math.sqrt(L**2+S**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:w,rippleX:v,rippleY:P,rippleSize:k,cb:E})},T.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},it)):U({pulsate:w,rippleX:v,rippleY:P,rippleSize:k,cb:E})},[r,U]),z=i.useCallback(()=>{N({},{pulsate:!0})},[N]),I=i.useCallback((f,y)=>{if(clearTimeout(T.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,T.current=setTimeout(()=>{I(f,y)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),b.current=y},[]);return i.useImperativeHandle(s,()=>({pulsate:z,start:N,stop:I}),[z,N,I]),F.jsx(ct,X({className:C(m.root,n.root,o),ref:R},c,{children:F.jsx(nt,{component:null,exit:!0,children:u})}))}),dt=ft;function ht(t){return Xe("MuiButtonBase",t)}const mt=be("MuiButtonBase",["root","disabled","focusVisible"]),gt=mt,bt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Rt=t=>{const{disabled:e,focusVisible:s,focusVisibleClassName:l,classes:r}=t,o=Ye({root:["root",e&&"disabled",s&&"focusVisible"]},ht,r);return s&&l&&(o.root+=` ${l}`),o},yt=te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${gt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Et=i.forwardRef(function(e,s){const l=Re({props:e,name:"MuiButtonBase"}),{action:r,centerRipple:n=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:b=!1,focusRipple:g=!1,LinkComponent:T="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:N,onFocus:z,onFocusVisible:I,onKeyDown:f,onKeyUp:y,onMouseDown:E,onMouseLeave:w,onMouseUp:j,onTouchEnd:_,onTouchMove:x,onTouchStart:B,tabIndex:v=0,TouchRippleProps:P,touchRippleRef:k,type:L}=l,S=ee(l,bt),O=i.useRef(null),M=i.useRef(null),ye=ce(M,k),{isFocusVisibleRef:re,onFocus:Ee,onBlur:xe,ref:Me}=Ge(),[D,Y]=i.useState(!1);p&&D&&Y(!1),i.useImperativeHandle(r,()=>({focusVisible:()=>{Y(!0),O.current.focus()}}),[]);const[q,Ce]=i.useState(!1);i.useEffect(()=>{Ce(!0)},[]);const Te=q&&!d&&!p;i.useEffect(()=>{D&&g&&!d&&q&&M.current.pulsate()},[d,g,D,q]);function V(a,ae,Ue=b){return W(le=>(ae&&ae(le),!Ue&&M.current&&M.current[a](le),!0))}const ve=V("start",E),Se=V("stop",U),Ve=V("stop",N),Be=V("stop",j),Pe=V("stop",a=>{D&&a.preventDefault(),w&&w(a)}),ke=V("start",B),we=V("stop",_),Le=V("stop",x),De=V("stop",a=>{xe(a),re.current===!1&&Y(!1),h&&h(a)},!1),$e=W(a=>{O.current||(O.current=a.currentTarget),Ee(a),re.current===!0&&(Y(!0),I&&I(a)),z&&z(a)}),J=()=>{const a=O.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},Q=i.useRef(!1),Fe=W(a=>{g&&!Q.current&&D&&M.current&&a.key===" "&&(Q.current=!0,M.current.stop(a,()=>{M.current.start(a)})),a.target===a.currentTarget&&J()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&J()&&a.key==="Enter"&&!p&&(a.preventDefault(),R&&R(a))}),Ne=W(a=>{g&&a.key===" "&&M.current&&D&&!a.defaultPrevented&&(Q.current=!1,M.current.stop(a,()=>{M.current.pulsate(a)})),y&&y(a),R&&a.target===a.currentTarget&&J()&&a.key===" "&&!a.defaultPrevented&&R(a)});let G=u;G==="button"&&(S.href||S.to)&&(G=T);const A={};G==="button"?(A.type=L===void 0?"button":L,A.disabled=p):(!S.href&&!S.to&&(A.role="button"),p&&(A["aria-disabled"]=p));const Ie=ce(s,Me,O),ie=X({},l,{centerRipple:n,component:u,disabled:p,disableRipple:d,disableTouchRipple:b,focusRipple:g,tabIndex:v,focusVisible:D}),je=Rt(ie);return F.jsxs(yt,X({as:G,className:C(je.root,c),ownerState:ie,onBlur:De,onClick:R,onContextMenu:Se,onFocus:$e,onKeyDown:Fe,onKeyUp:Ne,onMouseDown:ve,onMouseLeave:Pe,onMouseUp:Be,onDragLeave:Ve,onTouchEnd:we,onTouchMove:Le,onTouchStart:ke,ref:Ie,tabIndex:p?-1:v,type:L},A,S,{children:[o,Te?F.jsx(dt,X({ref:ye,center:n},P)):null]}))}),vt=Et;export{vt as B,Tt as G,pe as T,W as a,qe as c,ne as k,He as u};
