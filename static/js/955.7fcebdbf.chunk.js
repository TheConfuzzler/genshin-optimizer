"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[955,678],{70867:function(e,t,n){n.d(t,{mY:function(){return E},N5:function(){return M},Y4:function(){return H},mW:function(){return O}});var r=n(29439),a=n(1413),i=n(45987),o=n(13967),u=n(94198),l=n(58165),s=n(81918),c=n(90493),f=n(68870),d=n(79834),p=n(72791),y=n(22020),g=n(31148),m=n(72828),x=n(79406),v=n(42320),h=n(50765),Z=n(24351),b=n(23786),j=n(57064),K=n(49900),k=n(80184);function A(e){var t=e.value,n=e.image,r=void 0===n?"":n,i=e.text,o=e.theme,u=e.isSelected,l=e.addlElement,s=e.props;return(0,k.jsxs)(b.Z,(0,a.Z)((0,a.Z)({value:t},s),{},{children:[(0,k.jsx)(j.Z,{children:r}),(0,k.jsx)(K.Z,{primaryTypographyProps:{style:{fontWeight:u?o.typography.fontWeightMedium:o.typography.fontWeightRegular}},children:i}),l&&l]}),t)}var S=n(68244),L=n(10157),w=n(75545),C=["allArtifactKeysWithGrouper","selectedArtifactKeys","setArtifactKeys","getName","getImage","label"],I=["artSetKeys","setArtSetKeys"],W=["mainStatKeys","setMainStatKeys"],P=["substatKeys","setSubstatKeys"],N=["allArtifactKeysWithGrouper","selectedArtifactKey","setArtifactKey","getName","getImage","label","disable","showDefault","defaultText","defaultIcon"],_=["artSetKey","setArtSetKey","label"];function G(e){var t=e.allArtifactKeysWithGrouper,n=e.selectedArtifactKeys,r=e.setArtifactKeys,c=e.getName,f=e.getImage,d=e.label,y=(0,i.Z)(e,C),g=(0,o.Z)(),m=(0,p.useMemo)((function(){return t.map((function(e){var t=e.key,n=e.grouper;return{key:t,label:c(t),grouper:n}}))}),[t,c]);return(0,k.jsx)(u.Z,(0,a.Z)({autoHighlight:!0,multiple:!0,disableCloseOnSelect:!0,options:m,value:n.map((function(e){return{key:e,label:c(e)}})),onChange:function(e,t){r(t.map((function(e){return e.key})))},getOptionLabel:function(e){return e.label},isOptionEqualToValue:function(e,t){return e.key===t.key},renderInput:function(e){return(0,k.jsx)(l.Z,(0,a.Z)((0,a.Z)({},e),{},{label:d,variant:"filled",InputLabelProps:{style:{color:g.palette.text.primary}},color:n.length?"success":"primary",type:"search"}))},renderOption:function(e,t){return(0,k.jsx)(A,{value:t.key,image:f(t.key),text:t.label,theme:g,isSelected:n.includes(t.key),props:e},t.key)},renderTags:function(e,t){return e.map((function(e,n){var r=Z.Kj.find((function(t){return e.key==="".concat(t,"_dmg_")})),i=r||void 0;return(0,p.createElement)(s.Z,(0,a.Z)((0,a.Z)({},t({index:n})),{},{key:e.key,icon:f(e.key),label:e.label,color:i}))}))}},y))}function M(e){var t=e.artSetKeys,n=e.setArtSetKeys,o=(0,i.Z)(e,I),u=(0,v.Z)((function(){return g.y.getAll}),[]),l=(0,y.$)(["artifact","artifactNames_gen"]).t;if(!u)return null;var s=Object.entries(g.y.setKeysByRarities(u)).flatMap((function(e){var t=(0,r.Z)(e,2),n=t[0];return t[1].map((function(e){return{key:e,grouper:+n}}))})).sort(z);return(0,k.jsx)(G,(0,a.Z)({allArtifactKeysWithGrouper:s,selectedArtifactKeys:t,setArtifactKeys:n,getName:function(e){return u(e).nameRaw},getImage:function(e){return u(e).defIcon},label:l("artifact:autocompleteLabels.sets"),groupBy:function(e){var t,n;return null!==(t=null===(n=e.grouper)||void 0===n?void 0:n.toString())&&void 0!==t?t:""},renderGroup:function(e){return e.group&&(0,k.jsxs)(c.Z,{component:f.Z,children:[(0,k.jsxs)(d.Z,{sx:{top:"-1em"},children:[e.group," ",(0,k.jsx)(L.q,{stars:+e.group})]},"".concat(e.group,"Header")),e.children]},e.group)}},o))}function E(e){var t=e.mainStatKeys,n=e.setMainStatKeys,r=(0,i.Z)(e,W),o=(0,y.$)("artifact").t;return(0,k.jsx)(G,(0,a.Z)({allArtifactKeysWithGrouper:h.r.map((function(e){return{key:e}})),selectedArtifactKeys:t,setArtifactKeys:n,getName:function(e){return x.ZP.getArtStr(e)},getImage:function(e){return w.Z[e]},label:o("autocompleteLabels.mainStats")},r))}function O(e){var t=e.substatKeys,n=e.setSubstatKeys,r=(0,i.Z)(e,P),o=(0,y.$)("artifact").t;return(0,k.jsx)(G,(0,a.Z)({allArtifactKeysWithGrouper:h._.map((function(e){return{key:e}})),selectedArtifactKeys:t,setArtifactKeys:n,getName:function(e){return x.ZP.getArtStr(e)},getImage:function(e){return w.Z[e]},label:o("autocompleteLabels.substats")},r))}function T(e){var t=e.allArtifactKeysWithGrouper,n=e.selectedArtifactKey,r=e.setArtifactKey,l=e.getName,s=e.getImage,c=e.label,f=e.disable,d=void 0===f?function(){return!1}:f,y=e.showDefault,g=void 0!==y&&y,m=e.defaultText,x=void 0===m?"":m,v=(e.defaultIcon,(0,i.Z)(e,N)),h=(0,o.Z)(),Z=(0,p.useMemo)((function(){return(g?[{key:"",label:x}]:[]).concat(t.map((function(e){var t=e.key,n=e.grouper;return{key:t,label:l(t),grouper:n}})))}),[t,l,x,g]);return(0,k.jsx)(u.Z,(0,a.Z)({autoHighlight:!0,options:Z,clearIcon:n?void 0:"",value:{key:n,label:l(n)},onChange:function(e,t,n){return("change"!==e.type||"clear"!==n)&&r(t?t.key:"")},getOptionLabel:function(e){return e.label?e.label:x},isOptionEqualToValue:function(e,t){return e.key===t.key},getOptionDisabled:function(e){return d(e.key)},renderInput:function(e){return(0,k.jsx)(S.Z,(0,a.Z)((0,a.Z)({},e),{},{label:c,startAdornment:s(n),hasValue:!!n}))},renderOption:function(e,t){return(0,k.jsx)(A,{value:t.key,image:s(t.key),text:t.label,theme:h,isSelected:n===t.key,props:e},t.key)}},v))}function H(e){var t=e.artSetKey,n=e.setArtSetKey,o=e.label,u=void 0===o?"":o,l=(0,i.Z)(e,_),s=(0,v.Z)((function(){return g.y.getAll}),[]),p=(0,y.$)(["artifact","artifactNames_gen"]).t;if(u=u||p("artifact:autocompleteLabels.set"),!s)return null;var m=Object.entries(g.y.setKeysByRarities(s)).flatMap((function(e){var t=(0,r.Z)(e,2),n=t[0];return t[1].map((function(e){return{key:e,grouper:+n}}))})).sort(z);return(0,k.jsx)(T,(0,a.Z)({allArtifactKeysWithGrouper:m,selectedArtifactKey:t,setArtifactKey:n,getName:function(e){return e&&s(e).nameRaw},getImage:function(e){return e?s(e).defIcon:(0,k.jsx)(k.Fragment,{})},label:u,groupBy:function(e){var t,n;return null!==(t=null===(n=e.grouper)||void 0===n?void 0:n.toString())&&void 0!==t?t:""},renderGroup:function(e){return e.group&&(0,k.jsxs)(c.Z,{component:f.Z,children:[(0,k.jsxs)(d.Z,{sx:{top:"-1em"},children:[e.group," ",(0,k.jsx)(L.q,{stars:+e.group})]},"".concat(e.group,"Header")),e.children]},e.group)}},l))}function z(e,t){if(e.grouper>t.grouper)return-1;if(e.grouper<t.grouper)return 1;var n=m.Z.t("artifactNames_gen:".concat(e.key)),r=m.Z.t("artifactNames_gen:".concat(t.key));return n<r?-1:n>r?1:0}},47955:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var r,a,i,o,u=n(93433),l=n(53174),s=n(54483),c=n(62002),f=n(40117),d=n(61889),p=n(90388),y=n(68870),g=n(22020),m=n(76899),x=n(24351),v=n(75308),h=n(91839),Z=n(10157),b=n(70867),j=n(21977),K=n(30168),k=n(63204),A=n(73576),S=n(47047),L=n(72791),w=n(947),C=n(90288),I=n(31096),W=n(69210),P=n(42320),N=n(2380),_=n(84082),G=n(80184);function M(e){var t=e.location,n=e.setLocation,l=(0,g.$)(["ui","artifact","charNames_gen"]).t,s=(0,L.useContext)(I.t).database,c=(0,W.Z)(s),f=(0,P.Z)((function(){return w.Z.getAll}),[]),d=(0,L.useCallback)((function(e){return l("charNames_gen:".concat((0,x.LP)(s.chars.LocationToCharacterKey(e),c)))}),[s,c,l]),p=(0,L.useCallback)((function(e){var t;switch(e){case"":return(0,G.jsx)(G.Fragment,{});case"Inventory":return(0,G.jsx)(k.Z,{});case"Equipped":return(0,G.jsx)(A.Z,{});default:return f?(0,G.jsx)(N.Z,{src:null===(t=f(s.chars.LocationToCharacterKey(e),c))||void 0===t?void 0:t.thumbImgSide,sx:{pr:1}}):(0,G.jsx)(G.Fragment,{})}}),[s,c,f]),y=(0,L.useCallback)((function(e){return"Traveler"===e?x._0.some((function(e){return s.states.getWithInit("charMeta_".concat(e),C.Bm).favorite})):!!e&&s.states.getWithInit("charMeta_".concat(e),C.Bm).favorite}),[s]),m=(0,L.useMemo)((function(){return[{key:"",label:l(r||(r=(0,K.Z)(["artifact:filterLocation.any"])))},{key:"Equipped",label:l(a||(a=(0,K.Z)(["artifact:filterLocation.currentlyEquipped"])))},{key:"Inventory",label:l(i||(i=(0,K.Z)(["artifact:filterLocation.inventory"])))}].concat((0,u.Z)(x.xB.map((function(e){return{key:e,label:d(e),favorite:y(e)}})).sort((function(e,t){return e.favorite&&!t.favorite?-1:!e.favorite&&t.favorite?1:e.label.localeCompare(t.label)}))))}),[l,d,y]);return(0,G.jsx)(L.Suspense,{fallback:(0,G.jsx)(S.Z,{variant:"text",width:100}),children:(0,G.jsx)(_.Z,{size:"small",options:m,valueKey:t,onChange:n,toImg:p,clearKey:"",label:l(o||(o=(0,K.Z)(["artifact:filterLocation.location"])))})})}var E=n(95614),O=["excluded","included"],T=["locked","unlocked"],H=(0,v.X)((0,u.Z)(x.En)),z=(0,v.X)((0,u.Z)(x.eV)),B=(0,v.X)([].concat(O)),q=(0,v.X)([].concat(T));function D(e){var t=e.filterOption,n=e.filterOptionDispatch,r=e.disableSlotFilter,a=void 0!==r&&r,i=(0,g.$)(["artifact","ui"]).t,o=t.artSetKeys,u=void 0===o?[]:o,v=t.mainStatKeys,K=void 0===v?[]:v,k=t.rarity,A=void 0===k?[]:k,S=t.slotKeys,L=void 0===S?[]:S,w=t.levelLow,C=t.levelHigh,I=t.substats,W=void 0===I?[]:I,P=t.location,N=void 0===P?"":P,_=t.exclusion,D=void 0===_?[].concat(O):_,R=t.locked,$=void 0===R?[].concat(T):R;return(0,G.jsxs)(d.ZP,{container:!0,spacing:1,children:[(0,G.jsxs)(d.ZP,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[(0,G.jsx)(h.Z,{fullWidth:!0,value:A,size:"small",children:x.En.map((function(e){return(0,G.jsx)(p.Z,{value:e,onClick:function(){return n({rarity:H(A,e)})},children:(0,G.jsx)(Z.q,{stars:e})},e)}))}),(0,G.jsx)(h.Z,{fullWidth:!0,value:L,size:"small",disabled:a,children:x.eV.map((function(e){return(0,G.jsx)(p.Z,{value:e,onClick:function(){return n({slotKeys:z(L,e)})},children:(0,E.Ir)(e)},e)}))}),(0,G.jsxs)(y.Z,{display:"flex",gap:1,children:[(0,G.jsx)(h.Z,{fullWidth:!0,value:D,size:"small",children:O.map((function(e,t){return(0,G.jsxs)(p.Z,{value:e,sx:{display:"flex",gap:1},onClick:function(){return n({exclusion:B(D,e)})},children:[(0,G.jsx)(s.G,{icon:t?l.Stf:l.gPx}),(0,G.jsx)(m.c,{i18nKey:"exclusion.".concat(e),t:i})]},e)}))}),(0,G.jsx)(h.Z,{fullWidth:!0,value:$,size:"small",children:T.map((function(e,t){return(0,G.jsxs)(p.Z,{value:e,sx:{display:"flex",gap:1},onClick:function(){return n({locked:q($,e)})},children:[t?(0,G.jsx)(c.Z,{}):(0,G.jsx)(f.Z,{}),(0,G.jsx)(m.c,{i18nKey:"ui:".concat(e),t:i})]},e)}))})]}),(0,G.jsx)(j.Z,{showLevelText:!0,levelLow:w,levelHigh:C,setLow:function(e){return n({levelLow:e})},setHigh:function(e){return n({levelHigh:e})},setBoth:function(e,t){return n({levelLow:e,levelHigh:t})}}),(0,G.jsx)(d.ZP,{container:!0,display:"flex",gap:1,children:(0,G.jsx)(d.ZP,{item:!0,flexGrow:1,children:(0,G.jsx)(M,{location:N,setLocation:function(e){return n({location:e})}})})})]}),(0,G.jsxs)(d.ZP,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[(0,G.jsx)(b.N5,{artSetKeys:u,setArtSetKeys:function(e){return n({artSetKeys:e})}}),(0,G.jsx)(b.mY,{mainStatKeys:K,setMainStatKeys:function(e){return n({mainStatKeys:e})}}),(0,G.jsx)(b.mW,{substatKeys:W,setSubstatKeys:function(e){return n({substats:e})}})]})]})}},21977:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(29439),a=n(57621),i=n(10889),o=n(72791),u=n(60393),l=n(10600),s=n(80184);function c(e){var t=e.levelLow,n=e.levelHigh,c=e.setLow,f=e.setHigh,d=e.setBoth,p=e.dark,y=void 0!==p&&p,g=e.disabled,m=void 0!==g&&g,x=e.showLevelText,v=void 0!==x&&x,h=(0,o.useState)(t),Z=(0,r.Z)(h,2),b=Z[0],j=Z[1],K=(0,o.useState)(n),k=(0,r.Z)(K,2),A=k[0],S=k[1],L=(0,o.useCallback)((function(e,t){if("number"==typeof t)throw new TypeError;var n=(0,r.Z)(t,2),a=n[0],i=n[1];j(a),S(i)}),[j,S]);return(0,o.useEffect)((function(){return j(t)}),[j,t]),(0,o.useEffect)((function(){return S(n)}),[S,n]),(0,s.jsxs)(a.Z,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:y?"contentDark.main":"contentLight.main"},children:[(0,s.jsx)(l.ZP,{value:b,onChange:function(e){return c((0,u.uZ)(e,0,n))},sx:{px:1,pl:v?2:void 0,width:v?100:50},inputProps:{sx:{textAlign:"center"}},startAdornment:v?"Level: ":void 0,disabled:m}),(0,s.jsx)(i.ZP,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:function(){return"Arifact Level Range"},value:[b,A],onChange:L,onChangeCommitted:function(e,t){return d(t[0],t[1])},valueLabelDisplay:"auto",min:0,max:20,step:1,marks:!0,disabled:m}),(0,s.jsx)(l.ZP,{value:A,onChange:function(e){return f((0,u.uZ)(e,t,20))},sx:{px:1,width:50},inputProps:{sx:{textAlign:"center"}},disabled:m})]})}},75308:function(e,t,n){n.d(t,{X:function(){return i}});var r=n(93433),a=n(60393);function i(e){return function(t,n){var i=t.length;return i===e.length?[n]:1===i&&t[0]===n?(0,r.Z)(e):(0,r.Z)(new Set((0,a.nh)(t,n)))}}},73576:function(e,t,n){var r=n(74223),a=n(80184);t.Z=(0,r.Z)([(0,a.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,a.jsx)("path",{d:"M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"PersonSearch")}}]);
//# sourceMappingURL=955.7fcebdbf.chunk.js.map