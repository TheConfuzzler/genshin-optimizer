(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[3],{128:function(n,e,t){"use strict";t.r(e);var r=t(9),a=t(276),i=t(277),u=t(278),c=t(279),o=t(280),f=t(281),d=t(282),l=t(283),b=t(284),s=t(285),h=t(286),m=t(287),g=t(288),p=t(289),v=t(290),w=t(291),y=t(292),x=t(293),O=t(294),j=t(295),I=t(296),_=t(297),P=t(298),H=t(299),k=t(300),S=t(301),T=t(302),A=t(303),q=t(304),z=t(305),B={anemo:A.b,geo:q.b,electro:z.b},F=t(306),D=t(307),K=t(308),C=t(309),J=t(310),M=t(311),R=t(312),E={albedo:a.b,amber:i.b,barbara:u.b,beidou:c.b,bennett:o.b,chongyun:f.b,diluc:d.b,diona:l.b,eula:b.b,fischl:s.b,ganyu:h.b,hutao:m.b,jean:g.b,kaedeharakazuha:p.b,kaeya:v.b,kamisatoayaka:w.b,keqing:y.b,klee:x.b,lisa:O.b,mona:j.b,ningguang:I.b,noelle:_.b,qiqi:P.b,razor:H.b,rosaria:k.b,sucrose:S.b,tartaglia:T.b,traveler:B,venti:F.b,xiao:D.b,xiangling:K.b,xingqiu:C.b,xinyan:J.b,yanfei:M.b,zhongli:R.b},G=t(11),V=t(228),W=t(229),L=t(230),N=t(231),Q=t(232),U=t(233),X=t(234),Y=t(235),Z=t(236),$=t(237),nn=t(238),en=t(239),tn=t(240),rn=t(241),an=t(242),un=t(243),cn=t(244),on=t(245),fn=t(246),dn=t(247),ln=t(248),bn=t(249),sn=t(250),hn=t(251),mn=t(252),gn=t(253),pn=t(254),vn=t(255),wn={AquilaFavonia:V.b,FilletBlade:W.b,PrimordialJadeCutter:L.b,SkywardBlade:N.b,SwordOfDescension:Q.a,TheBlackSword:U.b,TheFlute:X.b,TravelersHandySword:Y.b},yn={CrescentPike:Z.b,DragonspineSpear:$.b,Halberd:nn.b,SkywardSpine:en.b,StaffOfHoma:tn.b},xn={EyeOfPerception:dn.b,Frostbearer:ln.b,OtherworldlyStory:bn.b,PrototypeMalice:sn.b,SkywardAtlas:hn.b},On={DebateClub:rn.b,PrototypeAminus:an.b,SkywardPride:un.b,SnowTombedStarsilver:cn.b,TheBell:on.b,WhiteIronGreatsword:fn.b},jn={Messenger:mn.b,RecurveBow:gn.b,SkywardHarp:pn.a,TheViridescentHunt:vn.b},In=Object(G.a)(Object(G.a)(Object(G.a)(Object(G.a)(Object(G.a)({},wn),jn),yn),xn),On),_n=t(256),Pn=t(257),Hn=t(258),kn={character:E,weapon:In,artifact:{Adventurer:_n.a,EmblemOfSeveredFate:Pn.a,TravelingDoctor:Hn.a}};Object(r.c)(kn,[],(function(n){return"function"===typeof n}),(function(n,e){return n.keys=e}));e.default=kn},228:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={heal:[100,115,130,145,160],dmg:[200,230,260,290,320]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")},heal:function(n){var e=a.heal[n.weapon.refineIndex]/100;return[function(n){return e*n.finalATK*n.heal_multi},["finalATK","heal_multi"]]}};e.b=i},229:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={dmg:[240,280,320,360,400]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")}};e.b=i},230:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={hp_atk:[1.2,1.5,1.8,2.1,2.4]},a={bonus:function(n){return[function(e){return e.finalHP*r.hp_atk[n.weapon.refineIndex]/100},["finalHP"]]}};e.b=a},231:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={dmg:[20,25,30,35,40]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")}};e.b=i},232:function(n,e,t){"use strict";var r=t(188),a={dmg:function(n){return Object(r.a)(200,n,"physical")}};e.a=a},233:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={dmg_:[20,25,30,35,40],heal:[60,70,80,90,100]},a={regen:function(n){var e=r.heal[n.weapon.refineIndex]/100;return[function(n){return e*n.finalATK*n.heal_multi},["finalATK","heal_multi"]]}};e.b=a},234:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={vals:[100,125,150,175,200]},i={dmg:function(n){return Object(r.a)(a.vals[n.weapon.refineIndex],n,"physical")}};e.b=i},235:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={heal:[1,1.25,1.5,1.75,2]},a={heal:function(n){var e=r.heal[n.weapon.refineIndex]/100;return[function(n){return e*n.finalHP*n.heal_multi},["finalHP","heal_multi"]]}};e.b=a},236:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={dmg:[20,25,30,35,40]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")}};e.b=i},237:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={dmg:[80,95,110,125,140],dmgc:[200,240,280,320,360]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")},dmgc:function(n){return Object(r.a)(a.dmgc[n.weapon.refineIndex],n,"physical")}};e.b=i},238:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={dmg:[160,200,240,280,320]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")}};e.b=i},239:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={dmg:[40,55,70,85,100]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")}};e.b=i},240:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={hp_atk:[.8,1,1.2,1.4,1.6],hp_atk_add:[1,1.2,1.4,1.6,1.8]},a={esj:function(n){return[function(e){return e.finalHP*r.hp_atk[n.weapon.refineIndex]/100},["finalHP"]]},esjadd:function(n){return[function(e){return e.finalHP*r.hp_atk_add[n.weapon.refineIndex]/100},["finalHP"]]}};e.b=a},241:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={dmg:[60,75,90,105,120]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")}};e.b=i},242:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={dmg:[240,300,360,420,480]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")}};e.b=i},243:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={dmg:[80,100,120,140,160]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")}};e.b=i},244:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={dmg:[80,95,110,125,140],dmgc:[200,240,280,320,360]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")},dmgc:function(n){return Object(r.a)(a.dmgc[n.weapon.refineIndex],n,"physical")}};e.b=i},245:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={shield:[20,23,26,29,32]},a={shield:function(n){var e=r.shield[n.weapon.refineIndex]/100;return[function(n){return e*n.finalHP*(1+n.powShield_/100)*1.5},["finalHP","powShield_"]]}};e.b=a},246:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={heal:[8,10,12,14,16]},a={heal:function(n){var e=r.heal[n.weapon.refineIndex]/100;return[function(n){return e*n.finalHP*n.heal_multi},["finalHP","heal_multi"]]}};e.b=a},247:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={dmg:[240,270,300,330,360]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")}};e.b=i},248:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={dmg:[80,95,110,125,140],dmgc:[200,240,280,320,360]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")},dmgc:function(n){return Object(r.a)(a.dmgc[n.weapon.refineIndex],n,"physical")}};e.b=i},249:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={heal:[1,1.25,1.5,1.75,2]},a={heal:function(n){var e=r.heal[n.weapon.refineIndex]/100;return[function(n){return e*n.finalHP*n.heal_multi},["finalHP","heal_multi"]]}};e.b=a},250:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={heal:[4,4.5,5,5.5,6]},a={heal:function(n){var e=r.heal[n.weapon.refineIndex]/100;return[function(n){return e*n.finalHP*n.heal_multi},["finalHP","heal_multi"]]}};e.b=a},251:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={dmg:[160,200,240,280,320]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")}};e.b=i},252:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={dmg:[100,125,150,175,200]},i={dmg:function(n){return Object(r.a)(a.dmg[n.weapon.refineIndex],n,"physical")}};e.b=i},253:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={heal:[8,10,12,14,16]},a={heal:function(n){var e=r.heal[n.weapon.refineIndex]/100;return[function(n){return e*n.finalHP*n.heal_multi},["finalHP","heal_multi"]]}};e.b=a},254:function(n,e,t){"use strict";var r=t(188),a={dmg:function(n){return Object(r.a)(125,n,"physical")}};e.a=a},255:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(188),a={vals:[40,50,60,70,80]},i={dmg:function(n){return Object(r.a)(a.vals[n.weapon.refineIndex],n,"physical")}};e.b=i},256:function(n,e,t){"use strict";var r=t(188),a={regen:function(n){return Object(r.b)(30,"finalHP")}};e.a=a},257:function(n,e,t){"use strict";var r={s4:function(n){return[function(n){return.25*Math.min(n.enerRech_,300)},["enerRech_"]]}};e.a=r},258:function(n,e,t){"use strict";var r=t(188),a={regen:function(n){return Object(r.b)(30,"finalHP")}};e.a=a}}]);
//# sourceMappingURL=3.a86b12e6.chunk.js.map