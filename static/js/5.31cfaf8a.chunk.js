(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[5],{190:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(16),c=a(14),r=a(52),i=a(1),s=function(){return Object(i.jsx)(r.a,{icon:c.x})},o=function(e){var t=e.stars,a=e.colored,c=void 0!==a&&a;return Object(i.jsx)("span",{className:c?"text-5star":"",children:t?Object(n.a)(Array(t).keys()).map((function(e,t){return Object(i.jsx)(s,{},t)})):null})}},191:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(205),c=a(110),r=a(16),i=a(11),s=a(4),o=a(21),l=a(43),d=a(109),u=a(98),j=a(35),b=a(79),h=a(42),f=a(36),O=a(198),v=a(12),m=a(9),p=a(44),x=function e(){if(Object(o.a)(this,e),this instanceof e)throw Error("A static class cannot be instantiated.")};x.getElementalName=function(e){return b.a[e].name},x.getLevelString=function(e){return"".concat(e.level,"/").concat(j.a[e.ascension])},x.getTalentFieldValue=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return e[t]?Object(m.f)(e[t],a):n},x.hasOverride=function(e,t){return"finalHP"===t?x.hasOverride(e,"hp")||x.hasOverride(e,"hp_")||x.hasOverride(e,"characterHP"):"finalDEF"===t?x.hasOverride(e,"def")||x.hasOverride(e,"def_")||x.hasOverride(e,"characterDEF"):"finalATK"===t?x.hasOverride(e,"atk")||x.hasOverride(e,"atk_")||x.hasOverride(e,"characterATK"):!!(null===e||void 0===e?void 0:e.baseStatOverrides)&&t in e.baseStatOverrides},x.getBaseStatValue=function(e,t,a,n){return"enemyLevel"===n?e.level:n.includes("enemyRes_")?10:n in j.b?j.b[n]:0},x.getStatValueWithOverride=function(e,t,a,n){var c,r;return x.hasOverride(e,n)?null!==(c=null===(r=e.baseStatOverrides)||void 0===r?void 0:r[n])&&void 0!==c?c:0:x.getBaseStatValue(e,t,a,n)},x.calculateBuild=function(e,t,a,n){var c,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;e.artifacts?c=Object.fromEntries(e.artifacts.map((function(e,t){return[t,e]}))):e.equippedArtifacts&&(c=Object.fromEntries(Object.entries(e.equippedArtifacts).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return[a,h.a._getArt(n)]}))));var i=x.createInitialStats(e,t,a);return i.mainStatAssumptionLevel=r,x.calculateBuildwithArtifact(i,c,n)},x.calculateBuildwithArtifact=function(e,t,a){var n,c=l.a.setToSlots(t),r=d.a.setEffectsStats(a,e,c),o=Object(m.d)(e);Object.values(t).forEach((function(e){e&&(o[e.mainStatKey]=(o[e.mainStatKey]||0)+l.a.mainStatValue(e.mainStatKey,e.numStars,Math.max(Math.min(o.mainStatAssumptionLevel,4*e.numStars),e.level)),e.substats.forEach((function(e){return e&&e.key&&(o[e.key]=(o[e.key]||0)+e.value)})))})),Object(p.a)(o,r),u.a.parseConditionalValues({artifact:null===o||void 0===o||null===(n=o.conditionalValues)||void 0===n?void 0:n.artifact},(function(e,t,a){var n,r,i=Object(s.a)(a,3),l=i[1],d=i[2];if(!(parseInt(d)>(null!==(n=null===c||void 0===c||null===(r=c[l])||void 0===r?void 0:r.length)&&void 0!==n?n:0))){var j=u.a.resolve(e,o,t).stats;Object(p.a)(o,j)}})),o.equippedArtifacts=Object.fromEntries(Object.entries(t).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return[a,null===n||void 0===n?void 0:n.id]}))),o.setToSlots=c;var j=Object(O.a)(o,null===o||void 0===o?void 0:o.modifiers),b=Object(f.c)(j,o),h=b.initialStats;return(0,b.formula)(h),Object(i.a)(Object(i.a)({},o),h)},x.createInitialStats=function(e,t,a){var o,l,d,b=e=Object(m.d)(e),h=b.characterKey,f=b.elementKey,O=b.level,g=b.ascension,y=b.hitMode,S=b.infusionAura,E=b.reactionMode,w=b.talentLevelKeys,_=b.constellation,N=b.equippedArtifacts,k=b.conditionalValues,A=void 0===k?{}:k,K=b.weapon,T=["enemyLevel"].concat(Object(r.a)(Object.keys(j.b))),V=Object.fromEntries(T.map((function(n){return[n,x.getStatValueWithOverride(e,t,a,n)]})));V.characterHP=t.getBase("hp",O,g),V.characterDEF=t.getBase("def",O,g),V.characterATK=t.getBase("atk",O,g),V.characterLevel=O,V.characterEle=null!==(o=null!==(l=t.elementKey)&&void 0!==l?l:f)&&void 0!==o?o:"anemo",V.characterKey=h,V.hitMode=y,V.infusionAura=S,V.reactionMode=E,V.conditionalValues=A,V.weaponType=t.weaponTypeKey,V.tlvl=w,V.constellation=_,V.ascension=g,V.weapon=Object(m.d)(K),V.equippedArtifacts=N,["physical"].concat(Object(r.a)(v.d)).forEach((function(n){var c="".concat(n,"_enemyRes_");V[c]=x.getStatValueWithOverride(e,t,a,c),c="".concat(n,"_enemyImmunity"),V[c]=x.getStatValueWithOverride(e,t,a,c)}));var C=(null===(d=e)||void 0===d?void 0:d.baseStatOverrides)||{};Object.entries(C).forEach((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];V.hasOwnProperty(a)||(V[a]=n)}));var M=t.getSpecializedStat(g);if(M){var B=t.getSpecializedStatVal(g);Object(p.a)(V,Object(c.a)({},M,B))}for(var F in t.getTalentStatsAll(V,V.characterEle).forEach((function(e){return Object(p.a)(V,e)})),V.tlvl){var I;V.tlvl[F]+=null!==(I=V["".concat(F,"Boost")])&&void 0!==I?I:0}var L=a.getMainStatValue(K.level,K.ascension);V.weaponATK=L;var W=a.getSubStatKey();W&&Object(p.a)(V,Object(c.a)({},W,a.getSubStatValue(K.level,K.ascension))),Object(p.a)(V,a.stats(V));A.artifact;var z=A.weapon,D=Object(n.a)(A,["artifact","weapon"]);return u.a.parseConditionalValues(Object(i.a)(Object(i.a)({},K.key&&{weapon:Object(c.a)({},K.key,null===z||void 0===z?void 0:z[K.key])}),D),(function(e,t,a){if(("character"!==a[0]||"talents"!==a[3]||a[4]===f)&&u.a.canShow(e,V)){var n=u.a.resolve(e,V,t).stats;Object(p.a)(V,n)}})),V},x.getDisplayStatKeys=function(e,t){var a=t.characterSheet,n=t.weaponSheet,c=t.artifactSheets,r=e.characterEle,o=["finalHP","finalATK","finalDEF","eleMas","critRate_","critDMG_","heal_","enerRech_","".concat(r,"_dmg_")];a.isAutoElemental||o.push("physical_dmg_");var l=Object(m.d)(f.a[r]),d=a.weaponTypeKey;l.includes("shattered_hit")||"claymore"!==d||l.push("shattered_hit");var j={},b=a.getTalent(r),h=function(t,a){return t.forEach((function(t){var n;t.formula&&(null===t||void 0===t||null===(n=t.canShow)||void 0===n?void 0:n.call(t,e))&&(j[a]||(j[a]=[]),j[a].push(t.formula.keys))}))},O=function(t,a){if(t.conditional&&u.a.canShow(t.conditional,e)){var n=u.a.resolve(t.conditional,e,null).fields;n&&h(n,a)}t.fields&&h(t.fields,a)};b&&Object.entries(b.sheets).forEach((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1].sections;"normal"!==a&&"charged"!==a&&"plunging"!==a||(a="auto"),n.forEach((function(e){return O(e,"talentKey_".concat(a))}))}));var v="weapon_".concat(e.weapon.key);return n.document&&n.document.map((function(e){return O(e,v)})),e.setToSlots&&Object.entries(e.setToSlots).map((function(e){var t=Object(s.a)(e,2);return[t[0],t[1].length]})).forEach((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1],r=c[a];r&&Object.entries(r.setEffects).forEach((function(e){var t=Object(s.a)(e,2),c=t[0],r=t[1].document;n<parseInt(c)||r&&r.map((function(e){return O(e,"artifact_".concat(a,"_").concat(c))}))}))})),Object(i.a)(Object(i.a)({basicKeys:o},j),{},{transReactions:l})}},194:function(e,t,a){"use strict";var n={elements:{anemo:a.p+"static/media/Element_Anemo.f809fde3.png",cryo:a.p+"static/media/Element_Cryo.019d72f9.png",dendro:a.p+"static/media/Element_Dendro.8ee0f26d.png",electro:a.p+"static/media/Element_Electro.342332ac.png",geo:a.p+"static/media/Element_Geo.b7e865c6.png",hydro:a.p+"static/media/Element_Hydro.f2f8bd8a.png",pyro:a.p+"static/media/Element_Pyro.f65c2e38.png"},weaponTypes:{bow:a.p+"static/media/Weapon-class-bow-icon.b8e7b5ca.png",catalyst:a.p+"static/media/Weapon-class-catalyst-icon.2cbef800.png",claymore:a.p+"static/media/Weapon-class-claymore-icon.17418b20.png",polearm:a.p+"static/media/Weapon-class-polearm-icon.a4e7fffc.png",sword:a.p+"static/media/Weapon-class-sword-icon.4470b487.png"},resin:{fragile:a.p+"static/media/Item_Fragile_Resin.f9ec8223.png",condensed:a.p+"static/media/Item_Condensed_Resin.1cecf64a.png"},exp_books:{advice:a.p+"static/media/Item_Wanderer's_Advice.58c62cf7.png",wit:a.p+"static/media/Item_Hero's_Wit.a79e36d0.png",experience:a.p+"static/media/Item_Adventurer's_Experience.92b5d195.png"}};t.a=n},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(4),c=a(16),r=a(68),i=a(36);function s(e){var t=new Set;return e(new Proxy({},{get:function(e,a,n){t.add(a.toString())}})),Object(c.a)(t)}var o=Object.freeze(Object.fromEntries(Object.entries(i.b).map((function(e){var t=Object(n.a)(e,2);return[t[0],s(t[1])]}))));function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.keys(i.d),n=new Set,r=[new Set,new Set];return a.forEach((function(a){return d(e,a,t,r,n)})),r.flatMap((function(e){return Object(c.a)(e)}))}function d(e,t,a,n,c){var s,l;c.has(t)||(c.add(t),null===(s=o[t])||void 0===s||s.forEach((function(t){return d(e,t,a,n,c)})),(null!==(l=a[t])&&void 0!==l?l:[]).forEach((function(t){return r.a.getCurrent(t,e)[1].forEach((function(t){return d(e,t,a,n,c)}))})),n[Object(i.e)(t)].add(t))}},205:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}a.d(t,"a",(function(){return n}))},213:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(4),c=a(14),r=a(52),i=a(0),s=a(503),o=a(27),l=a(61),d=a(30),u=a(57),j=a(187),b=a(9),h=a(1);function f(e){var t,a,f=e.pageKey,O=void 0===f?"":f,v=e.text,m=void 0===v?"":v,p=e.modalTitle,x=void 0===p?"":p,g=e.children,y=Object(i.useState)(null===(t=null===(a=Object(b.l)("infoShown"))||void 0===a?void 0:a[O])||void 0===t||t),S=Object(n.a)(y,2),E=S[0],w=S[1],_=Object(i.useState)(Array.isArray(m)?Object(b.g)(m):m),N=Object(n.a)(_,1)[0],k=function(){var e,t=null!==(e=Object(b.l)("infoShown"))&&void 0!==e?e:{};t[O]=!1,Object(b.p)("infoShown",t),w(!1)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(s.a,{show:E,onHide:function(){return k()},size:"xl",variant:"success",contentClassName:"bg-transparent",children:Object(h.jsxs)(o.a,{bg:"darkcontent",text:"lightfont",children:[Object(h.jsx)(o.a.Header,{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(d.a,{children:Object(h.jsx)(o.a.Title,{children:x})}),Object(h.jsx)(d.a,{xs:"auto",children:Object(h.jsx)(u.a,{variant:"danger",onClick:function(){return k()},children:Object(h.jsx)(r.a,{icon:c.z})})})]})}),Object(h.jsx)(o.a.Body,{children:Object(h.jsx)(i.Suspense,{fallback:Object(h.jsxs)("h3",{className:"text-center",children:["Loading... ",Object(h.jsx)(j.a,{animation:"border",variant:"primary"})]}),children:g})}),Object(h.jsx)(o.a.Footer,{children:Object(h.jsx)(u.a,{variant:"danger",onClick:function(){return k()},children:Object(h.jsx)("span",{children:"Close"})})})]})}),Object(h.jsx)(o.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(h.jsx)(o.a.Body,{className:"pl-2 py-0 pr-0",children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(d.a,{children:Object(h.jsx)("small",{children:N})}),Object(h.jsx)(d.a,{xs:"auto",children:Object(h.jsx)(u.a,{size:"sm",variant:"info",className:"m-0 py-1",onClick:function(){return w(!0)},children:Object(h.jsx)(r.a,{icon:c.r})})})]})})})]})}},269:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var n=a(16),c=a(4),r=a(14),i=a(52),s=a(0),o=a(200),l=a(152),d=a(57),u=a(27),j=a(30),b=a(61),h=a(48),f=a(109),O=a(194),v=a(190),m=a(115),p=a(42),x=a(24),g=a(78),y=a(113),S=a(191),E=a(112),w=a(1);function _(e){var t,a=e.characterKey,_=e.onEdit,N=e.onDelete,k=e.cardClassName,A=void 0===k?"":k,K=e.bg,T=void 0===K?"":K,V=e.header,C=e.footer,M=void 0!==C&&C,B=Object(s.useState)(void 0),F=Object(c.a)(B,2),I=F[0],L=F[1];Object(s.useEffect)((function(){return a?p.a.followChar(a,L):void 0}),[a,L]);var W=Object(g.b)(f.a.getAll(),[]),z=I,D=Object(g.b)(E.b.get(a),[a]),H=Object(g.b)(z&&y.a.get(z.weapon.key),[z]),P=Object(s.useMemo)((function(){return z&&D&&H&&W&&S.a.calculateBuild(z,D,H,W)}),[z,D,H,W]);if(!z||!D||!H||!P)return null;var R=z.weapon,q=z.constellation,U=R.level,G=R.ascension,J=P.tlvl,Q=D.name,X=P.characterEle,Y=D.weaponTypeKey,Z=null===H||void 0===H?void 0:H.name,$=H.getMainStatValue(U,G).toFixed(x.b.fixedUnit("atk")),ee=H.getSubStatKey(),te=H.getSubStatValue(U,G).toFixed(x.b.fixedUnit(ee)),ae=y.a.getLevelString(R),ne=null===H||void 0===H?void 0:H.passiveName;return Object(w.jsxs)(u.a,{className:A,bg:T||"darkcontent",text:"lightfont",children:[Object(w.jsx)(u.a.Header,{className:"pr-2",children:Object(w.jsxs)(b.a,{className:"no-gutters",children:[Object(w.jsx)(j.a,{children:V||Object(w.jsx)("h5",{children:Object(w.jsx)("b",{children:Q})})}),Object(w.jsx)(j.a,{xs:"auto",children:Object(w.jsxs)("span",{className:"float-right align-top ml-1",children:[_&&Object(w.jsx)(d.a,{variant:"primary",size:"sm",className:"mr-1",onClick:function(){return _(a)},children:Object(w.jsx)(i.a,{icon:r.h})}),N&&Object(w.jsx)(d.a,{variant:"danger",size:"sm",onClick:function(){return N(a)},children:Object(w.jsx)(i.a,{icon:r.C})})]})})]})}),Object(w.jsxs)(u.a.Body,{onClick:function(){return null===_||void 0===_?void 0:_(a)},className:_?"cursor-pointer":"",children:[Object(w.jsxs)(b.a,{children:[Object(w.jsx)(j.a,{xs:"auto",className:"pr-0",children:Object(w.jsx)(o.a,{src:D.thumbImg,className:"thumb-big grad-".concat(D.star,"star p-0"),thumbnail:!0})}),Object(w.jsxs)(j.a,{children:[Object(w.jsxs)("h5",{className:"mb-0",children:["Lv. ",S.a.getLevelString(z)," ","C".concat(q)]}),Object(w.jsxs)("h6",{className:"mb-0",children:[Object(w.jsx)(l.a,{variant:"secondary",children:Object(w.jsx)("strong",{className:"mx-1",children:J.auto+1})})," ",Object(w.jsx)(l.a,{variant:"secondary",children:Object(w.jsx)("strong",{className:"mx-1",children:J.skill+1})})," ",Object(w.jsx)(l.a,{variant:"secondary",children:Object(w.jsx)("strong",{className:"mx-1",children:J.burst+1})})]}),Object(w.jsx)("h6",{className:"mb-0",children:Object(w.jsx)(v.a,{stars:D.star,colored:!0})}),Object(w.jsxs)("h4",{className:"mb-0",children:[Object(w.jsx)(o.a,{src:O.a.elements[X],className:"inline-icon"})," ",Object(w.jsx)(o.a,{src:null===(t=O.a.weaponTypes)||void 0===t?void 0:t[Y],className:"inline-icon"})]})]})]}),Object(w.jsx)(b.a,{className:"mb-2",children:Object(w.jsxs)(j.a,{children:[Object(w.jsxs)("h6",{className:"mb-0",children:[Z,ne&&Object(w.jsx)(l.a,{variant:"info",className:"ml-1",children:R.refineIndex+1})," ",ae]}),Object(w.jsxs)("span",{children:["ATK: ",$,"  ",ne&&Object(w.jsxs)("span",{children:[x.b.getStatName(ee),": ",te,x.b.getStatUnit(ee)]})]})]})}),Object(w.jsx)(b.a,{children:Object(w.jsx)(j.a,{children:W&&Object.entries(f.a.setEffects(W,P.setToSlots)).map((function(e){var t,a=Object(c.a)(e,2),r=a[0],i=a[1],s=null!==(t=null===W||void 0===W?void 0:W[r].name)&&void 0!==t?t:"",o=Math.max.apply(Math,Object(n.a)(i));return Object(w.jsx)("h5",{children:Object(w.jsxs)(l.a,{variant:"secondary",children:[s," ",Object(w.jsx)(l.a,{variant:"success",children:o})]})},r)}))})}),Object(w.jsx)(b.a,{children:["finalHP","finalATK","finalDEF","eleMas","critRate_","critDMG_","enerRech_"].map((function(e){var t=x.b.getStatUnit(e),a=P[e];return Object(w.jsxs)(j.a,{xs:12,children:[Object(w.jsxs)("h6",{className:"d-inline",children:[Object(m.a)(e)," ",x.b.getStatName(e)]}),Object(w.jsx)("span",{className:"float-right",children:(null===a||void 0===a?void 0:a.toFixed(x.b.fixedUnit(e)))+t})]},e)}))})]}),M&&Object(w.jsx)(u.a.Footer,{children:Object(w.jsx)(d.a,{as:h.b,to:{pathname:"/build",characterKey:a},children:"Generate Builds"})})]})}}}]);
//# sourceMappingURL=5.31cfaf8a.chunk.js.map