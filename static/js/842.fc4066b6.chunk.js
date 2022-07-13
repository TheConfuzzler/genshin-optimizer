"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[842],{15678:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(93433),i=t(61889),a=t(90388),l=t(68870),c=t(79406),o=t(50765),s=t(91839),u=t(75545),f=t(80184);function d(e){var n=e.selectedKeys,t=e.onChange,d=o._.slice(0,6),x=o._.slice(6),h=n.filter((function(e){return d.includes(e)})),v=n.filter((function(e){return x.includes(e)}));return(0,f.jsxs)(i.ZP,{container:!0,spacing:1,children:[(0,f.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,f.jsx)(s.Z,{fullWidth:!0,value:h,onChange:function(e,n){return t([].concat((0,r.Z)(v),(0,r.Z)(n)))},sx:{height:"100%"},children:d.map((function(e){return(0,f.jsx)(a.Z,{size:"small",value:e,children:(0,f.jsxs)(l.Z,{display:"flex",gap:1,alignItems:"center",children:[u.ZP[e],c.ZP.getArtStr(e)]})},e)}))})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,f.jsx)(s.Z,{fullWidth:!0,value:v,onChange:function(e,n){return t([].concat((0,r.Z)(h),(0,r.Z)(n)))},sx:{height:"100%"},children:x.map((function(e){return(0,f.jsx)(a.Z,{size:"small",value:e,children:(0,f.jsxs)(l.Z,{display:"flex",gap:1,alignItems:"center",children:[u.ZP[e],c.ZP.getArtStr(e)]})},e)}))})})]})}},10600:function(e,n,t){t.d(n,{CC:function(){return v},ZP:function(){return Z},el:function(){return x}});var r=t(29439),i=t(1413),a=t(45987),l=t(66934),c=t(4834),o=t(24518),s=t(72791),u=t(80184),f=["children","disableRipple","disableFocusRipple","disableTouchRipple"],d=["value","onChange","disabled","float"],x=(0,l.ZP)(c.ZP)((function(e){var n=e.theme;return{backgroundColor:n.palette.primary.main,transition:"all 0.5s ease","&:hover":{backgroundColor:n.palette.primary.dark},"&.Mui-focused":{backgroundColor:n.palette.primary.dark},"&.Mui-disabled":{backgroundColor:n.palette.primary.dark}}})),h=(0,l.ZP)(o.Z)((function(e){return{backgroundColor:e.theme.palette.primary.main,padding:0,overflow:"hidden",div:{width:"100%",height:"100%"}}}));function v(e){var n=e.children,t=(e.disableRipple,e.disableFocusRipple,e.disableTouchRipple,(0,a.Z)(e,f));return(0,u.jsx)(h,(0,i.Z)((0,i.Z)({disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},t),{},{children:n}))}function Z(e){var n=e.value,t=void 0===n?0:n,l=e.onChange,c=e.disabled,o=void 0!==c&&c,f=e.float,h=void 0!==f&&f,v=(0,a.Z)(e,d),Z=(0,s.useState)(t),y=(0,r.Z)(Z,2),p=y[0],m=y[1],j=(0,s.useState)(!1),g=(0,r.Z)(j,2),b=g[0],k=g[1],C=(0,s.useMemo)((function(){return h?parseFloat:parseInt}),[h]),w=(0,s.useCallback)((function(){l(p),k(!1)}),[l,p,k]),E=(0,s.useCallback)((function(){k(!0)}),[k]);(0,s.useEffect)((function(){return m(t)}),[t,m]);var S=(0,s.useCallback)((function(e){return m(C(e.target.value)||0)}),[m,C]),K=(0,s.useCallback)((function(e){return"Enter"===e.key&&w()}),[w]);return(0,u.jsx)(x,(0,i.Z)({value:b&&!p?"":p,"aria-label":"custom-input",type:"number",inputProps:{step:h?.1:1},onChange:S,onBlur:w,onFocus:E,disabled:o,onKeyDown:K},v))}},55221:function(e,n,t){var r=t(1413),i=t(45987),a=t(53174),l=t(54483),c=t(68870),o=t(96106),s=t(80184),u=["className"];n.Z=function(e){var n=e.className,t=(0,i.Z)(e,u);return(0,s.jsx)(o.Z,(0,r.Z)((0,r.Z)({placement:"top"},t),{},{className:n,children:(0,s.jsx)(c.Z,{component:"span",sx:{cursor:"help"},children:(0,s.jsx)(l.G,{icon:a.sqG})})}))}},901:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(29439),i=t(25617),a=t(60393),l=t(80184);function c(e){var n=e.value,t=e.max,c=void 0===t?1:t,o=e.valid,s="number"===typeof n?["roll".concat((0,a.uZ)(Math.floor(n/c*10)-4,1,6)),n.toFixed()+"%"]:["secondary",n],u=(0,r.Z)(s,2),f=u[0],d=u[1];return n>c&&(o=!1),o||(f="error"),(0,l.jsx)(i.Z,{color:f,children:d})}},43696:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(1413),i=t(29439),a=t(53174),l=t(54483),c=t(2199),o=t(23786),s=t(24518),u=t(72791),f=t(79406),d=t(10600),x=t(33890),h=t(80184);function v(e){var n=e.statKeys,t=e.statFilters,a=e.setStatFilters,l=e.disabled,c=void 0!==l&&l,o=(0,u.useMemo)((function(){return n.filter((function(e){return!Object.keys(t).some((function(n){return n===e}))}))}),[n,t]),s=(0,u.useCallback)((function(e,n){if(n)a(Object.fromEntries(Object.entries(t).map((function(t){var r=(0,i.Z)(t,2),a=r[0],l=r[1];return[a===n?e:a,l]}))));else{var l=(0,r.Z)({},t);l[e]=0,a((0,r.Z)({},l))}}),[t,a]),f=(0,u.useCallback)((function(e,n){var i=(0,r.Z)({},t);i[e]=n,a((0,r.Z)({},i))}),[t,a]),d=(0,u.useCallback)((function(e){var n=(0,r.Z)({},t);delete n[e],a((0,r.Z)({},n))}),[t,a]);return(0,h.jsxs)(h.Fragment,{children:[Object.entries(t).map((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];return(0,h.jsx)(Z,{statKey:t,statKeys:o,disabled:c,value:r,setValue:f,setKey:s,delKey:d},t)})),(0,h.jsx)(Z,{statKeys:o,setValue:f,setKey:s,delKey:d,disabled:c})]})}function Z(e){var n=e.statKey,t=e.statKeys,r=void 0===t?[]:t,i=e.value,v=void 0===i?0:i,Z=e.delKey,y=e.setKey,p=e.setValue,m=e.disabled,j=void 0!==m&&m,g="%"===f.ZP.unit(n),b=(0,u.useCallback)((function(e){return n&&p(n,e)}),[p,n]);return(0,h.jsxs)(c.Z,{sx:{width:"100%"},children:[(0,h.jsx)(x.Z,{title:n?(0,h.jsx)(f._J,{statKey:n}):"New Stat",disabled:j,color:n?"success":"secondary",children:r.map((function(e){return(0,h.jsx)(o.Z,{onClick:function(){return y(e,n)},children:(0,h.jsx)(f._J,{statKey:e})},e)}))}),(0,h.jsx)(d.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,h.jsx)(d.ZP,{disabled:!n||j,float:g,value:v,placeholder:"Stat Value",onChange:b,sx:{px:2},inputProps:{sx:{textAlign:"right"}},endAdornment:f.ZP.unit(n)})}),!!n&&(0,h.jsx)(s.Z,{color:"error",onClick:function(){return Z(n)},disabled:j,children:(0,h.jsx)(l.G,{icon:a.I7k})})]})}},72838:function(e,n,t){t.d(n,{N:function(){return X},Z:function(){return Q}});var r,i,a,l,c=t(93433),o=t(30168),s=t(29439),u=t(53174),f=t(54483),d=t(40117),x=t(62002),h=t(63204),v=t(66647),Z=t(68870),y=t(47047),p=t(20890),m=t(13400),j=t(81918),g=t(39504),b=t(2199),k=t(40165),C=t(24518),w=t(72791),E=t(22020),S=t(95614),K=t(71310),P=t(31038),M=t(40020),_=t(91702),A=t(20005),G=t(55221),O=t(25617),R=t(10157),V=t(75545),I=t(98620),F=t(31148),N=t(7618),z=t(79406),D=t(63372),B=t(42320),T=t(50765),q=t(60393),W=t(901),H=t(80184),L=(0,w.lazy)((function(){return Promise.all([t.e(788),t.e(535)]).then(t.bind(t,66585))})),J=new Set(T._);function Q(e){var n,t,c,q=e.artifactId,Q=e.artifactObj,X=e.onClick,$=e.onDelete,Y=e.mainStatAssumptionLevel,ee=void 0===Y?0:Y,ne=e.effFilter,te=void 0===ne?J:ne,re=e.editor,ie=void 0!==re&&re,ae=e.canExclude,le=void 0!==ae&&ae,ce=e.canEquip,oe=void 0!==ce&&ce,se=e.extraButtons,ue=(0,E.$)(["artifact","ui"]).t,fe=(0,w.useContext)(N.t).database,de=(0,D.Z)(q),xe=(0,B.Z)((function(){var e;return F.y.get(null===(e=null!==Q&&void 0!==Q?Q:de)||void 0===e?void 0:e.setKey)}),[Q,de]),he=!Q,ve=(0,w.useState)(!1),Ze=(0,s.Z)(ve,2),ye=Ze[0],pe=Ze[1],me=(0,w.useCallback)((function(){return pe(!1)}),[pe]),je=(0,w.useCallback)((function(){return he&&pe(!0)}),[he,pe]),ge=(0,w.useCallback)((function(e){return(0,H.jsx)(v.Z,{onClick:function(){return q&&(null===X||void 0===X?void 0:X(q))},sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})}),[X,q]),be=(0,w.useCallback)((function(e){return(0,H.jsx)(Z.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})}),[]),ke=null!==Q&&void 0!==Q?Q:de,Ce=(0,w.useMemo)((function(){if(!ke)return{currentEfficiency:0,maxEfficiency:0,currentEfficiency_:0,maxEfficiency_:0};var e=I.Z.getArtifactEfficiency(ke,te),n=e.currentEfficiency,t=e.maxEfficiency,r=I.Z.getArtifactEfficiency(ke,new Set(T._));return{currentEfficiency:n,maxEfficiency:t,currentEfficiency_:r.currentEfficiency,maxEfficiency_:r.maxEfficiency}}),[ke,te]),we=Ce.currentEfficiency,Ee=Ce.maxEfficiency,Se=Ce.currentEfficiency_,Ke=Ce.maxEfficiency_;if(!ke)return null;var Pe=ke.id,Me=ke.lock,_e=ke.slotKey,Ae=ke.rarity,Ge=ke.level,Oe=ke.mainStatKey,Re=ke.substats,Ve=ke.exclude,Ie=ke.location,Fe=void 0===Ie?"":Ie,Ne=Math.max(Math.min(ee,4*Ae),Ge),ze=z.ZP.unit(Oe),De="roll"+(Math.floor(Math.max(Ge,0)/4)+1),Be=0!==Ee,Te=null===xe||void 0===xe?void 0:xe.getSlotName(_e),qe=null===xe||void 0===xe?void 0:xe.getSlotDesc(_e),We=qe&&(0,H.jsx)(G.Z,{title:(0,H.jsxs)(Z.Z,{children:[(0,H.jsx)(w.Suspense,{fallback:(0,H.jsx)(y.Z,{variant:"text",width:100}),children:(0,H.jsx)(p.Z,{variant:"h6",children:Te})}),(0,H.jsx)(p.Z,{children:qe})]})}),He=null===xe||void 0===xe?void 0:xe.setEffects,Le=xe&&He&&(0,H.jsx)(G.Z,{title:(0,H.jsx)("span",{children:Object.keys(He).map((function(e){return(0,H.jsxs)("span",{children:[(0,H.jsx)(p.Z,{variant:"h6",children:(0,H.jsx)(O.Z,{color:"success",children:ue("artifact:setEffectNum",{setNum:e})})}),(0,H.jsx)(p.Z,{children:xe.setEffectDesc(e)})]},e)}))})});return(0,H.jsxs)(w.Suspense,{fallback:(0,H.jsx)(y.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:[ie&&(0,H.jsx)(w.Suspense,{fallback:!1,children:(0,H.jsx)(L,{artifactIdToEdit:ye?q:"",cancelEdit:me})}),(0,H.jsxs)(K.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,H.jsxs)(A.Z,{condition:!!X,wrapper:ge,falseWrapper:be,children:[(0,H.jsxs)(Z.Z,{className:"grad-".concat(Ae,"star"),sx:{position:"relative",width:"100%"},children:[!X&&(0,H.jsx)(m.Z,{color:"primary",disabled:!he,onClick:function(){return fe.arts.set(Pe,{lock:!Me})},sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:Me?(0,H.jsx)(d.Z,{}):(0,H.jsx)(x.Z,{})}),(0,H.jsxs)(Z.Z,{sx:{pt:2,px:2,position:"relative",zIndex:1},children:[(0,H.jsxs)(Z.Z,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[(0,H.jsx)(j.Z,{size:"small",label:(0,H.jsx)("strong",{children:" +".concat(Ge)}),color:De}),!Te&&(0,H.jsx)(y.Z,{variant:"text",width:100}),Te&&(0,H.jsx)(p.Z,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:(0,H.jsx)("strong",{children:Te})}),!We&&(0,H.jsx)(y.Z,{width:10}),We]}),(0,H.jsx)(p.Z,{color:"text.secondary",variant:"body2",children:(0,H.jsx)(S.ZP,{slotKey:_e})}),(0,H.jsx)(p.Z,{variant:"h6",color:"".concat(z.ZP.getVariant(Oe),".main"),children:(0,H.jsxs)("span",{children:[V.ZP[Oe]," ",z.ZP.get(Oe)]})}),(0,H.jsx)(p.Z,{variant:"h5",children:(0,H.jsx)("strong",{children:(0,H.jsxs)(_.Z,{color:Ne!==Ge?"warning":void 0,children:[(0,z.qs)(null!==(n=I.Z.mainStatValue(Oe,Ae,Ne))&&void 0!==n?n:0,z.ZP.unit(Oe)),ze]})})}),(0,H.jsx)(R.t,{stars:Ae,colored:!0})]}),(0,H.jsx)(Z.Z,{sx:{height:"100%",position:"absolute",right:0,top:0},children:(0,H.jsx)(Z.Z,{component:"img",src:null!==(t=null===xe||void 0===xe?void 0:xe.slotIcons[_e])&&void 0!==t?t:"",width:"auto",height:"100%",sx:{float:"right"}})})]}),(0,H.jsxs)(g.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column",pt:1,pb:0,width:"100%"},children:[Re.map((function(e){return!!e.value&&(0,H.jsx)(U,{stat:e,effFilter:te,rarity:Ae},e.key)})),(0,H.jsxs)(Z.Z,{sx:{display:"flex",my:1,gap:1},children:[(0,H.jsx)(p.Z,{color:"text.secondary",component:"span",variant:"caption",sx:{flexGrow:1},children:ue(r||(r=(0,o.Z)(["artifact:editor.curSubEff"])))}),(0,H.jsx)(W.Z,{value:we,max:900,valid:Be}),we!==Se&&(0,H.jsx)(p.Z,{component:"span",variant:"caption",children:"/"}),we!==Se&&(0,H.jsx)(W.Z,{value:Se,max:900,valid:Be})]}),we!==Ee&&(0,H.jsxs)(Z.Z,{sx:{display:"flex",mb:1,gap:1},children:[(0,H.jsx)(p.Z,{color:"text.secondary",component:"span",variant:"caption",sx:{flexGrow:1},children:ue(i||(i=(0,o.Z)(["artifact:editor.maxSubEff"])))}),(0,H.jsx)(W.Z,{value:Ee,max:900,valid:Be}),Ee!==Ke&&(0,H.jsx)(p.Z,{component:"span",variant:"caption",children:"/"}),Ee!==Ke&&(0,H.jsx)(W.Z,{value:Ke,max:900,valid:Be})]}),(0,H.jsx)(Z.Z,{flexGrow:1}),void 0!==ke.probability&&ke.probability>=0&&(0,H.jsxs)("strong",{children:["Probability: ",(100*ke.probability).toFixed(2),"%"]}),(0,H.jsxs)(p.Z,{color:"success.main",children:[null!==(c=null===xe||void 0===xe?void 0:xe.name)&&void 0!==c?c:"Artifact Set"," ",Le]})]})]}),(0,H.jsxs)(Z.Z,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[he&&oe?(0,H.jsx)(P.Z,{sx:{flexGrow:1},size:"small",showDefault:!0,defaultIcon:(0,H.jsx)(h.Z,{}),defaultText:ue("ui:inventory"),value:Fe,onChange:function(e){return fe.arts.set(q,{location:e})}}):(0,H.jsx)(M.Z,{location:Fe}),he&&(0,H.jsxs)(b.Z,{sx:{height:"100%"},children:[ie&&(0,H.jsx)(k.Z,{title:(0,H.jsx)(p.Z,{children:ue(a||(a=(0,o.Z)(["artifact:edit"])))}),placement:"top",arrow:!0,children:(0,H.jsx)(C.Z,{color:"info",size:"small",onClick:je,children:(0,H.jsx)(f.G,{icon:u.Xcf,className:"fa-fw"})})}),le&&(0,H.jsx)(k.Z,{title:(0,H.jsxs)(Z.Z,{children:[(0,H.jsx)(p.Z,{children:ue(l||(l=(0,o.Z)(["artifact:excludeArtifactTip"])))}),(0,H.jsx)(p.Z,{children:(0,H.jsx)(_.Z,{color:Ve?"error":"success",children:ue("artifact:".concat(Ve?"excluded":"included"))})})]}),placement:"top",arrow:!0,children:(0,H.jsx)(C.Z,{onClick:function(){return fe.arts.set(Pe,{exclude:!Ve})},color:Ve?"error":"success",size:"small",children:(0,H.jsx)(f.G,{icon:Ve?u.gPx:u.Stf,className:"fa-fw"})})}),!!$&&(0,H.jsx)(C.Z,{color:"error",size:"small",onClick:function(){return $(Pe)},disabled:Me,children:(0,H.jsx)(f.G,{icon:u.I7k,className:"fa-fw"})}),se]})]})]})]})}function U(e){var n,t,r,i=e.stat,a=e.effFilter,l=e.rarity,o=null!==(n=null===(t=i.rolls)||void 0===t?void 0:t.length)&&void 0!==n?n:0,s=i.key?I.Z.maxSubstatValues(i.key):0,u=(0,w.useMemo)((function(){return i.key?I.Z.getSubstatRollData(i.key,l):[]}),[i.key,l]),f=7-u.length,d="roll".concat((0,q.uZ)(o,1,6)),x=null!==(r=i.efficiency)&&void 0!==r?r:0,h=i.key&&a.has(i.key),v=(0,q.V2)(.5+x/500*.5),y=z.ZP.getStr(i.key),m=z.ZP.unit(i.key),j=(0,w.useMemo)((function(){return(0,H.jsx)(Z.Z,{display:"flex",gap:.25,height:"1.3em",sx:{opacity:h?1:.3},children:(0,c.Z)(i.rolls).sort().map((function(e,n){return(0,H.jsx)(X,{value:100*e/s,color:"roll".concat((0,q.uZ)(f+u.indexOf(e),1,6),".main")},"".concat(n).concat(e))}))})}),[h,i.rolls,s,u,f]);return(0,H.jsxs)(Z.Z,{display:"flex",gap:1,alignContent:"center",children:[(0,H.jsxs)(p.Z,{sx:{flexGrow:1},color:o?"".concat(d,".main"):"error.main",component:"span",children:[V.ZP[i.key]," ",y,"+".concat((0,z.qs)(i.value,z.ZP.unit(i.key))).concat(m)]}),j,(0,H.jsxs)(p.Z,{sx:{opacity:v,minWidth:40,textAlign:"right"},children:[x.toFixed(),"%"]})]})}function X(e){var n=e.color,t=void 0===n?"red":n,r=e.value,i=void 0===r?50:r;return(0,H.jsx)(Z.Z,{sx:{width:7,height:"100%",bgcolor:t,overflow:"hidden",borderRadius:1,display:"inline-block"},children:(0,H.jsx)(Z.Z,{sx:{width:10,height:"".concat(100-(0,q.uZ)(i,0,100),"%"),bgcolor:"gray"}})})}},44824:function(e,n,t){t.d(n,{Af:function(){return u},EM:function(){return x},OQ:function(){return o},bq:function(){return s},sZ:function(){return f},x3:function(){return d}});var r=t(37762),i=t(93433),a=t(24351),l=t(98620),c=t(44217),o=["rarity","level","artsetkey","efficiency","mefficiency","probability"],s=["probability"];function u(){return{artSetKeys:[],rarity:(0,i.Z)(a.En),levelLow:0,levelHigh:20,slotKeys:(0,i.Z)(a.eV),mainStatKeys:[],substats:[],location:"",exclusion:["excluded","included"],locked:["locked","unlocked"]}}var f=function(){return{filterOption:u(),ascending:!1,sortType:o[0]}};function d(e,n){return{rarity:{getValue:function(e){var n;return null!==(n=e.rarity)&&void 0!==n?n:0},tieBreaker:"level"},level:{getValue:function(e){var n;return null!==(n=e.level)&&void 0!==n?n:0},tieBreaker:"artsetkey"},artsetkey:{getValue:function(e){var n;return null!==(n=e.setKey)&&void 0!==n?n:""},tieBreaker:"level"},efficiency:{getValue:function(n){return l.Z.getArtifactEfficiency(n,e).currentEfficiency}},mefficiency:{getValue:function(n){return l.Z.getArtifactEfficiency(n,e).maxEfficiency}},probability:{getValue:function(e){if(!Object.keys(n).length)return 0;var t=e.probability;return void 0===t?(0,c.B)(e,n):t}}}}function x(){return{exclusion:function(e,n){return!(!n.includes("included")&&!e.exclude)&&!(!n.includes("excluded")&&e.exclude)},locked:function(e,n){return!(!n.includes("locked")&&e.lock)&&!(!n.includes("unlocked")&&!e.lock)},location:function(e,n){return!n||("Inventory"===n&&!e.location||(!("Equipped"!==n||!e.location)||n===e.location))},artSetKeys:function(e,n){return!n.length||n.includes(e.setKey)},slotKeys:function(e,n){return n.includes(e.slotKey)},mainStatKeys:function(e,n){return!n.length||n.includes(e.mainStatKey)},levelLow:function(e,n){return n<=e.level},levelHigh:function(e,n){return n>=e.level},rarity:function(e,n){return n.includes(e.rarity)},substats:function(e,n){var t,i=(0,r.Z)(n);try{var a=function(){var n=t.value;if(n&&!e.substats.some((function(e){return e.key===n})))return{v:!1}};for(i.s();!(t=i.n()).done;){var l=a();if("object"===typeof l)return l.v}}catch(c){i.e(c)}finally{i.f()}return!0}}}},44217:function(e,n,t){t.d(n,{B:function(){return g}});var r=t(29439),i=t(37762),a=t(4942),l=t(1413),c=t(93433),o=t(60393),s=t(98620),u=t(12354),f=[3,4,6],d={hp:6,atk:6,def:6,hp_:4,atk_:4,def_:4,eleMas:4,enerRech_:4,critRate_:3,critDMG_:3},x={};function h(e,n,t,r){if(5!==e.length)for(var i=0,s=f;i<s.length;i++){var u=s[i];n[u]>0&&h([].concat((0,c.Z)(e),[u]),(0,l.Z)((0,l.Z)({},n),{},(0,a.Z)({},u,n[u]-u)),t-u,r*n[u]/t)}else(0,o.SR)(x,e,r)}h([0],{3:6,4:20,6:18},44,1),h([3],{3:3,4:20,6:18},41,1),h([4],{3:6,4:16,6:18},40,1),h([6],{3:6,4:20,6:12},38,1);for(var v=Array(6).fill(0).map((function(e,n){for(var t=[1],r=0,i=1;++r<=n;)i*=n-r+1,i/=r,t.push(i);return t})),Z=[[1]],y=function(){var e=Z[Z.length-1],n=Array(e.length+3).fill(0);e.forEach((function(e,t){for(var r=0,i=[0,1,2,3];r<i.length;r++){n[t+i[r]]+=e}})),Z.push(n.map((function(e){return e/4})))};Z.length<6;)y();for(var p=function(){var e=j[m],n=e.reduce((function(e,n){return e+n}));e.forEach((function(e,t,r){r[t]=n,n-=e}))},m=0,j=Z;m<j.length;m++)p();function g(e,n){if(e.rarity<=2)return NaN;var t=e.rarity,c=e.level,h=e.substats,y=(0,l.Z)({},n),p=new Set(Object.keys(y)),m=0,j=e.mainStatKey;if(j in y){var g=4*t;if(u[t][j][g]<y[j])return 0;delete y[j],p.delete(j)}var b,k=(0,i.Z)(h);try{for(k.s();!(b=k.n()).done;){var C=b.value,w=C.key,E=C.value;w?p.has(w)&&(p.delete(w),y[w]>E?y[w]-=E:delete y[w]):m+=1}}catch(I){k.e(I)}finally{k.f()}if(m+=4-h.length,p.size>m||Object.keys(y).length>4)return 0;for(var S=s.Z.rollsRemaining(c,t)-m,K=0,P=Object.entries(y);K<P.length;K++){var M=(0,r.Z)(P[K],2),_=M[0],A=M[1];y[_]=Math.max(Math.ceil(10*A/s.Z.maxSubstatValues(_,t)),1)}var G=0,O=Object.entries(y).map((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1],a=p.has(t)?1:0,l=Math.ceil(i/10)-a;return G+=l,{target:i,filler:a,minUpgrade:l}})).reverse();if(G>S)return 0;var R=(0,a.Z)({},S,1),V=S-G;return O.forEach((function(e,n){for(var t,i,a,l=e.target,c=e.filler,o=e.minUpgrade,s={},u=o;u<=o+V;u++)for(var f=l-7*(u+c),d=f>0?Z[u+c][f]:1,x=0,h=Object.entries(R);x<h.length;x++){var y,p=(0,r.Z)(h[x],2),m=p[0],j=p[1],g=parseInt(m);if(!(g<u)){var b=(i=u,a=4-n,v[t=g][i]*Math.pow(a-1,t-i)/Math.pow(a,t)),k=g-u;s[k]=(null!==(y=s[k])&&void 0!==y?y:0)+j*d*b}}R=s})),function(e,n,t){var r,a,l=null!==(r=d[e])&&void 0!==r?r:0,c=0,s={3:2,4:5,6:3},u=x[l],h=(0,i.Z)(n);try{for(h.s();!(a=h.n()).done;){var Z=a.value.key;if(Z){var y=d[Z];u=u[y],s[y]-=1}}}catch(I){h.e(I)}finally{h.f()}l&&(s[l]-=1);var p,m={3:0,4:0,6:0},j=(0,i.Z)(t);try{for(j.s();!(p=j.n()).done;){var g=p.value;m[d[g]]+=1}}catch(I){j.e(I)}finally{j.f()}var b=0;(0,o.Q1)(u,[],(function(e){return"number"===typeof e}),(function(e,n){b+=e;var t,r={3:0,4:0,6:0},a=(0,i.Z)(n);try{for(a.s();!(t=a.n()).done;){r[t.value]+=1}}catch(I){a.e(I)}finally{a.f()}var l,o=e,s=(0,i.Z)(f);try{for(s.s();!(l=s.n()).done;){var u=l.value,d=r[u],x=m[u];if(d<x)return;o*=v[d][x]}}catch(I){s.e(I)}finally{s.f()}c+=o}));var k,C=(0,i.Z)(f);try{for(C.s();!(k=C.n()).done;){var w=k.value;c/=v[s[w]][m[w]]}}catch(I){C.e(I)}finally{C.f()}return c/b}(e.mainStatKey,h,p)*Object.values(R).reduce((function(e,n){return e+n}))}},63372:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(29439),i=t(72791),a=t(7618);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,i.useContext)(a.t),t=n.database,l=(0,i.useState)(t.arts.get(e)),c=(0,r.Z)(l,2),o=c[0],s=c[1];return(0,i.useEffect)((function(){return s(t.arts.get(e))}),[t,e]),(0,i.useEffect)((function(){return e?t.arts.follow(e,s):void 0}),[e,s,t]),o}}}]);
//# sourceMappingURL=842.fc4066b6.chunk.js.map