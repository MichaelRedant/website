(function(){"use strict";var e={3952:function(e,t,n){var i=n(5471),a=n(2915),s=n(9555),r=function(){var e=this,t=e._self._c;return t(a.A,[t("HeaderComponent"),t(s.A,[t("router-view")],1)],1)},o=[],l=n(5840),c=n(4569),d=n(8232),v=n(3812),g=n(8748),m=n(4026),h=n(2932),p=n(2458),u=n(5),k=n(6702),f=function(){var e=this,t=e._self._c;return t(l.A,{class:{scrolled:e.isScrolled},attrs:{app:"",flat:""}},[t(c.A,{staticClass:"d-lg-none",on:{click:function(t){e.drawer=!e.drawer}}}),t(k.sw,{staticClass:"header-title fade-in"},[t("transition",{attrs:{name:"fade"}},[e.showNavImage?t(v.A,{ref:"navImage",staticClass:"nav-profile-img",attrs:{src:n(9914),alt:"Michaël Redant"}}):e._e()],1),e._v(" "+e._s(e.name)+" ")],1),t(u.A),t(d.A,{staticClass:"header-btn d-none d-lg-flex",class:{active:e.isActive("/")},attrs:{text:"",to:"/"}},[e._v("Home")]),t(d.A,{staticClass:"header-btn d-none d-lg-flex",class:{active:e.isActive("/about")},attrs:{text:"",to:"/about"}},[e._v("Over Michaël")]),t(d.A,{staticClass:"header-btn d-none d-lg-flex",class:{active:e.isActive("/education")},attrs:{text:"",to:"/education"}},[e._v("Opleidingen")]),t(d.A,{staticClass:"header-btn d-none d-lg-flex",class:{active:e.isActive("/skills")},attrs:{text:"",to:"/skills"}},[e._v("Skills")]),t(d.A,{staticClass:"header-btn d-none d-lg-flex",class:{active:e.isActive("/experience")},attrs:{text:"",to:"/experience"}},[e._v("Ervaring")]),t(d.A,{staticClass:"header-btn d-none d-lg-flex",class:{active:e.isActive("/engagement")},attrs:{text:"",to:"/engagement"}},[e._v("Sociaal Engagement")]),t(d.A,{staticClass:"header-btn d-none d-lg-flex",class:{active:e.isActive("/contact")},attrs:{text:"",to:"/contact"}},[e._v("Contact")]),t(p.A,{staticClass:"d-lg-none",attrs:{app:"",temporary:"",right:"",absolute:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(g.A,[t(m.A,{on:{click:function(t){return e.navigateTo("/")}}},[t(h.UZ,[e._v("Home")])],1),t(m.A,{on:{click:function(t){return e.navigateTo("/about")}}},[t(h.UZ,[e._v("Over Michaël")])],1),t(m.A,{on:{click:function(t){return e.navigateTo("/education")}}},[t(h.UZ,[e._v("Opleidingen")])],1),t(m.A,{on:{click:function(t){return e.navigateTo("/skills")}}},[t(h.UZ,[e._v("Skills")])],1),t(m.A,{on:{click:function(t){return e.navigateTo("/experience")}}},[t(h.UZ,[e._v("Ervaring")])],1),t(m.A,{on:{click:function(t){return e.navigateTo("/engagement")}}},[t(h.UZ,[e._v("Sociaal Engagement")])],1),t(m.A,{on:{click:function(t){return e.navigateTo("/contact")}}},[t(h.UZ,[e._v("Contact")])],1)],1)],1)],1)},b=[],A=(n(4114),{data(){return{name:"Michaël Redant",showNavImage:!1,isScrolled:!1,drawer:!1}},methods:{handleScroll(){this.isScrolled=window.scrollY>50},isActive(e){return this.$route.path===e},navigateTo(e){this.drawer=!1,this.$router.push(e)}},watch:{$route(e){this.showNavImage=!("/"===e.path||"/about"===e.path)}},mounted(){this.showNavImage=!("/"===this.$route.path||"/about"===this.$route.path),window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)}}),_=A,w=n(1656),C=(0,w.A)(_,f,b,!1,null,"3a3ac8ac",null),j=C.exports,y={name:"App",components:{HeaderComponent:j}},S=y,x=(0,w.A)(S,r,o,!1,null,null,null),O=x.exports,M=n(173),z=n(8047),B=n(1253),D=n(5137),P=n(9305),T=n(1231),I=n(793),E=n(2369),L=function(){var e=this,t=e._self._c;return t(I.A,{staticClass:"home-container"},[t(E.A,{attrs:{align:"center",justify:"center"}},[t(T.A,{staticClass:"text-center",attrs:{cols:"12",md:"8"}},[t("transition",{attrs:{name:"slide-fade"}},[e.showProfileImage?t(v.A,{ref:"profileImage",staticClass:"home-profile-img",attrs:{src:n(9914),alt:"Michaël Redant"}}):e._e()],1),t("h1",{staticClass:"home-title"},[e._v("Michaël Redant")]),t("h2",{staticClass:"home-subtitle"},[e._v("Marketeer, (Web)designer & Allround geek")]),t("p",{staticClass:"home-description"},[e._v(" Ik ben op zoek naar een uitdaging in marketing. Ik ben een toegewijde marketeer en webdesigner. Mijn passie ligt in digitale contentcreatie en ik ben voortdurend gefascineerd door de ontwikkelingen in technologie en marketing binnen het digitale tijdperk. ")]),t(d.A,{staticClass:"home-btn",attrs:{color:"primary"},on:{click:function(t){return e.navigateTo("about")}}},[e._v("Meer over mij")])],1)],1),t(E.A,{staticClass:"skills-row",attrs:{justify:"center"}},[t(T.A,{staticClass:"text-center",attrs:{cols:"12",md:"8"}},[t("h2",{staticClass:"skills-title"},[e._v("Vaardigheden")]),t(P.A,{staticClass:"skills-chip-group",attrs:{column:""}},e._l(e.marketingSkills,(function(n){return t(D.A,{key:n,staticClass:"skill-chip"},[e._v(e._s(n))])})),1),t(d.A,{staticClass:"link-to-skills",attrs:{text:"",color:"primary"},on:{click:function(t){return e.navigateTo("skills")}}},[e._v("Meer vaardigheden")])],1)],1),t(E.A,{attrs:{justify:"center"}},[t(T.A,{attrs:{cols:"12",md:"6"}},[t(z.A,{staticClass:"home-card"},[t(B.ri,[e._v("Sociaal Engagement")]),t(B.OQ,[t("p",[e._v("Lees meer over mijn betrokkenheid bij verschillende organisaties en mijn rol daarin.")]),t(d.A,{staticClass:"home-btn",attrs:{color:"primary"},on:{click:function(t){return e.navigateTo("engagement")}}},[e._v("Sociaal Engagement")])],1)],1)],1)],1),t(E.A,{staticClass:"contact-row",attrs:{justify:"center"}},[t(T.A,{attrs:{cols:"12",md:"6"}},[t(z.A,{staticClass:"home-card contact-card"},[t(B.ri,[e._v("Contact")]),t(B.OQ,[t("p",[e._v("Neem contact met mij op voor een interessante job aanbieding!")]),t(d.A,{staticClass:"home-btn",attrs:{color:"primary"},on:{click:function(t){return e.navigateTo("contact")}}},[e._v("Contacteer mij")])],1)],1)],1)],1)],1)},G=[],H={name:"HomePage",data(){return{showProfileImage:!0,marketingSkills:["Online Marketing","Content Creation","Social Media","SEO","Google Analytics","Google Ads","Meta Ads","Email Marketing","Brand Strategy"]}},methods:{navigateTo(e){setTimeout((()=>{this.$router.push({path:"/".concat(e)})}),300)}}},V=H,R=(0,w.A)(V,L,G,!1,null,"e5b27014",null),W=R.exports,U=n(6684),F=function(){var e=this,t=e._self._c;return t(I.A,{staticClass:"about-container"},[t(E.A,[t(T.A,{attrs:{cols:"12",md:"4"}},[t("transition",{attrs:{name:"slide-fade"}},[e.showNavImage?e._e():t(v.A,{staticClass:"profile-img",attrs:{src:n(9914),alt:"Michaël Redant"}})],1)],1),t(T.A,{attrs:{cols:"12",md:"8"}},[t(z.A,{staticClass:"about-card",attrs:{flat:""}},[t(B.ri,{staticClass:"headline"},[e._v("Over mij")]),t(B.OQ,[t("p",[e._v("Ik ben Michaël Redant, een toegewijde "),t("strong",[e._v("marketeer")]),e._v(" en met een bijberoep als freelance "),t("strong",[e._v("webdesigner/marketeer")]),e._v(" bij "),t("a",{attrs:{href:"https://xinudesign.be",target:"_blank"}},[e._v("Xinudesign")]),e._v(" en als 3D print service bedrijf bij "),t("a",{attrs:{href:"https://x3dprints.be",target:"_blank"}},[e._v("X3DPrints")]),e._v(". Mijn passie ligt in digitale contentcreatie en ik ben voortdurend gefascineerd door de ontwikkelingen in marketing binnen het digitale tijdperk, mede dankzij mijn expertise in de "),t("strong",[e._v("Adobe CreativeSuite")]),e._v(".")]),t("p",[e._v("Momenteel heb ik het voorrecht om te werken als marketeer bij "),t("strong",[e._v("Octopus Accountancy Software")]),e._v(", waar ik verantwoordelijk ben voor zowel online als offline marketingactiviteiten, gericht op accountants en ondernemers die met Octopus werken. Deze rol heeft me waardevolle ervaring gebracht in het creëren van boeiende en impactvolle visuele content. Mijn benadering van marketing is gefundeerd op creativiteit, resultaatgerichtheid en constante innovatie, en ik hecht grote waarde aan het opbouwen van duurzame merken en streef naar excellentie in elke campagne.")]),t("p",[e._v("Daarnaast heb ik mij verdiept in de boeiende wereld van kunstmatige intelligentie (AI) en custom GPT-modellen, waarbij ik de grenzen van traditionele marketingstrategieën heb verlegd. Mijn kennis op dit gebied stelt me in staat innovatieve en gepersonaliseerde marketingoplossingen te ontwikkelen, die aanzienlijk bijdragen aan de efficiëntie en effectiviteit van digitale campagnes. Door het inzetten van AI en aangepaste GPT-modellen ben ik in staat om data-gedreven inzichten te verwerven en de klantenervaring te personaliseren, wat resulteert in verbeterde klantbetrokkenheid en hogere conversieratio's. Deze competenties hebben me geholpen om marketinginitiatieven naar een nieuw niveau van innovatie en succes te tillen.")]),t("p",[e._v("Buiten mijn professionele leven, geniet ik van een rijk gezinsleven met mijn vrouw en dochter. Ik ben ook sociaal betrokken bij verschillende projecten, waaronder mijn rol binnen de "),t("strong",[e._v("Werkgroep Ondernemend Herzele")]),e._v(". Enkele jaren geleden had ik het voorrecht om voorzitter te zijn van de handelsvereniging van Aalst, "),t("strong",[e._v("District A")]),e._v(". Ik ben ook gepassioneerd door 3D-printen en dronevliegen. In mijn vrije tijd duik ik graag in de wereld van gaming en geniet ik van de avonturen in Dungeons & Dragons met mijn vrienden. Ik ben vastbesloten om een gezonde balans tussen werk en privé te handhaven, wat ik essentieel vind voor zowel persoonlijk welzijn als professioneel succes. Bovendien koester ik een diepgewortelde passie voor voortdurende persoonlijke en professionele ontwikkeling. Ik ben sterk overtuigd van het belang van levenslang leren, vooral in een snel evoluerend veld als marketing en technologie. Deze instelling drijft me om constant op de hoogte te blijven van de nieuwste trends, technieken en tools.")]),t("p",[e._v("Hartelijk dank voor je interesse in mijn verhaal!")])]),t(B.SL,{staticClass:"about-links"},[t(d.A,{attrs:{icon:"",href:"https://www.linkedin.com/in/michael-redant",target:"_blank"}},[t(U.A,[e._v("mdi-linkedin")])],1),t(d.A,{attrs:{icon:"",href:"https://www.instagram.com/m_redant/",target:"_blank"}},[t(U.A,[e._v("mdi-instagram")])],1),t(d.A,{attrs:{icon:"",href:"https://www.facebook.com/mredant1",target:"_blank"}},[t(U.A,[e._v("mdi-facebook")])],1),t(d.A,{attrs:{icon:"",href:"mailto:michael.redant2@telenet.be"}},[t(U.A,[e._v("mdi-email")])],1)],1)],1)],1)],1)],1)},N=[],Z={name:"AboutPage",data(){return{showNavImage:!1}},mounted(){this.showNavImage=!1}},X=Z,$=(0,w.A)(X,F,N,!1,null,"83b814a0",null),Q=$.exports,J=n(8557),q=n(4496),K=n(1616),Y=n(7452),ee=function(){var e=this,t=e._self._c;return t(I.A,{staticClass:"education-container"},[t(E.A,{attrs:{justify:"center"}},[t(T.A,{attrs:{cols:"12",md:"8"}},[t("h1",{staticClass:"education-title"},[e._v("Opleidingen")]),t(Y.A,e._l(e.educations,(function(n,i){return t(J.A,{key:i},[t(K.A,[t(U.A,{staticClass:"education-icon"},[e._v(e._s(n.icon))]),t("div",{staticClass:"education-text"},[t("span",{staticClass:"education-year"},[e._v(e._s(n.year))]),t("span",{staticClass:"education-degree"},[e._v(e._s(n.degree))])])],1),t(q.A,[t("div",{staticClass:"education-details"},[t("p",[t("strong",[e._v("School:")]),e._v(" "+e._s(n.school))]),t("p",[t("strong",[e._v("Beschrijving:")]),e._v(" "+e._s(n.description))])])])],1)})),1),t("h2",{staticClass:"certificates-title"},[e._v("Diploma's en Certificaten")]),t(Y.A,e._l(e.certificates,(function(n,i){return t(J.A,{key:i},[t(K.A,[t(U.A,{staticClass:"certificate-icon"},[e._v(e._s(n.icon))]),t("div",{staticClass:"certificate-text"},[t("span",{staticClass:"certificate-name"},[e._v(e._s(n.name))]),t("span",{staticClass:"certificate-issuer"},[e._v(e._s(n.issuer))])])],1),t(q.A,[t("div",{staticClass:"certificate-details"},[t("p",[t("strong",[e._v("Afgegeven op:")]),e._v(" "+e._s(n.date))]),n.reference?t("p",[t("strong",[e._v("Referentienummer:")]),e._v(" "+e._s(n.reference))]):e._e(),n.skills?t("p",[t("strong",[e._v("Vaardigheden:")]),e._v(" "+e._s(n.skills))]):e._e(),n.link?t("a",{attrs:{href:n.link,target:"_blank"}},[e._v("Certificaat weergeven")]):e._e()])])],1)})),1)],1)],1)],1)},te=[],ne={name:"EducationPage",data(){return{educations:[{year:"2018 - 2021",degree:"Graduaat Informatica",school:"Odisee",description:"Graduaat informatica - programmeren.",icon:"mdi-laptop"},{year:"2013 - 2016",degree:"Orthoptist - Optometrist",school:"Syntra",description:"Orthoptist - Optometrist, Optiek / Optica.",icon:"mdi-eye"},{year:"1999 - 2006",degree:"Verkoop / Vertegenwoordiging",school:"Handelsschool Aalst",description:"Handelsschool Aalst.",icon:"mdi-account-tie"}],certificates:[{icon:"mdi-google",name:"Google Ads-certificeringen",issuer:"Udemy",date:"okt. 2023",reference:"UC-3a9006f8-284f-4cad-bc9f-064ab83e18c2",skills:"Google Ads · Online marketing",link:"https://www.udemy.com/certificate/UC-3a9006f8-284f-4cad-bc9f-064ab83e18c2"},{icon:"mdi-google",name:"Google Ads Mastery Course",issuer:"Google",date:"mrt. 2023",reference:"M28 J7W CWV",skills:"Online marketing · Marketing op sociale media",link:"https://www.google.com/certificate/M28J7WCWV"},{icon:"mdi-laptop",name:"Graduaat Informatica",issuer:"Odisee",date:"jun. 2021",skills:"Front-end ontwikkeling · Node.js · Webdesign · HTML5 · JavaScript"},{icon:"mdi-eye",name:"Orthoptist - Optometrist",issuer:"Syntra Midden-Vlaanderen",date:"jul. 2017",skills:"Optometrie · Contactologie"},{icon:"mdi-currency-usd",name:"Kredietbemiddeling",issuer:"Febelfin",date:"jun. 2017"},{icon:"mdi-office-building",name:"Bedrijfsbeheer",issuer:"KTA Handelsschool Aalst",date:"jun. 2006"},{icon:"mdi-handshake",name:"Verkoop Vertegenwoordiging",issuer:"KTA Handelsschool Aalst",date:"jun. 2006"}]}}},ie=ne,ae=(0,w.A)(ie,ee,te,!1,null,"4d800fbb",null),se=ae.exports,re=n(8617),oe=n(464),le=function(){var e=this,t=e._self._c;return t(I.A,{staticClass:"skills-container"},[t(E.A,[t(T.A,{attrs:{cols:"12"}},[t(z.A,{staticClass:"skills-card",attrs:{flat:""}},[t(B.ri,{staticClass:"headline"},[e._v("Ik zoek deze skill:")]),t(B.OQ,[t("div",{staticClass:"search-container"},[t(oe.A,{attrs:{"append-icon":"mdi-magnify",label:"Zoek een vaardigheid...","single-line":"",clearable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchSkill.apply(null,arguments)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e.searchResult?t("div",{staticClass:"search-result"},[t(re.A,{attrs:{type:"info",dismissible:""},on:{input:e.clearSearchResult}},[e._v(e._s(e.searchResult))])],1):e._e(),t(Y.A,{attrs:{multiple:""}},e._l(e.filteredSkills,(function(n){return t(J.A,{key:n.title},[t(K.A,[e._v(" "+e._s(n.title)+" "),t(U.A,{staticClass:"expand-icon"},[e._v("mdi-chevron-down")])],1),t(q.A,[n.subsections?t("div",[t(Y.A,{attrs:{multiple:""}},e._l(n.subsections,(function(i){return t(J.A,{key:i.title},[t(K.A,[e._v(e._s(i.title))]),t(q.A,[t("div",{staticClass:"skills-list"},e._l(i.skills,(function(i){return t("div",{key:i.name,staticClass:"skill-item"},[t(D.A,{staticClass:"skill-chip",attrs:{color:"primary",outlined:""},on:{click:function(t){return e.toggleSkill(i)}}},[e._v(" "+e._s(i.name)+" "),"Nederlands"===i.name&&"Talen"===n.title?t(U.A,{staticClass:"gold-crown"},[e._v("mdi-crown")]):e._e()],1),t("transition",{attrs:{name:"fade"}},[e.selectedSkill===i?t("div",{staticClass:"skill-detail"},[t("SkillRating",{attrs:{skill:e.selectedSkill}})],1):e._e()])],1)})),0)])],1)})),1)],1):t("div",{staticClass:"skills-list"},e._l(n.skills,(function(i){return t("div",{key:i.name,staticClass:"skill-item"},[t(D.A,{staticClass:"skill-chip",attrs:{color:"primary",outlined:""},on:{click:function(t){return e.toggleSkill(i)}}},[e._v(" "+e._s(i.name)+" "),"Nederlands"===i.name&&"Talen"===n.title?t(U.A,{staticClass:"gold-crown"},[e._v("mdi-crown")]):e._e()],1),t("transition",{attrs:{name:"fade"}},[e.selectedSkill===i?t("div",{staticClass:"skill-detail"},[t("SkillRating",{attrs:{skill:e.selectedSkill}})],1):e._e()])],1)})),0)])],1)})),1)],1)],1)],1)],1)],1)},ce=[],de=n(9424),ve=n(9527),ge=function(){var e=this,t=e._self._c;return t("div",{staticClass:"skill-rating"},[t("div",{staticClass:"skill-header"},[t("h3",{staticClass:"skill-name"},[e._v(e._s(e.skill.name))]),t("span",{staticClass:"skill-level"},[e._v(e._s(e.skill.level)+"%")])]),t(ve.A,{staticClass:"skill-bar",attrs:{value:e.skill.level,height:"10",color:"primary"}}),t("div",{staticClass:"skill-description"},[e._v(e._s(e.skill.description))])],1)},me=[],he={name:"SkillRating",props:{skill:{type:Object,required:!0}}},pe=he,ue=(0,w.A)(pe,ge,me,!1,null,"968f3d56",null),ke=ue.exports,fe={name:"SkillsPage",components:{SkillRating:ke},data(){return{search:"",searchResult:null,selectedSkill:null,skillSections:[{title:"Talen",skills:[{name:"Nederlands",level:100,description:"Vloeiend, Moedertaal"},{name:"Engels",level:90,description:"Vloeiend"},{name:"Frans",level:70,description:"Basis"}]},{title:"Marketing",skills:[{name:"Online marketing",level:90,description:"Online marketing strategieën uitwerken"},{name:"Offline marketing",level:85,description:"Offline marketing strategieën uitwerken"},{name:"Google Analytics",level:75,description:"Analyseren van webverkeer met Google Analytics"},{name:"Content creation",level:85,description:"Creëren van content voor verschillende platforms"},{name:"Social media",level:85,description:"Beheren van social media campagnes"}]},{title:"Web Development",subsections:[{title:"CMS",skills:[{name:"Wordpress",level:95,description:"Beheersing van Wordpress CMS"},{name:"Craft",level:70,description:"Beheersing van Craft CMS"},{name:"Shopify",level:70,description:"Beheersing van Shopify CMS"},{name:"Squarespace",level:70,description:"Beheersing van Squarespace CMS"}]},{title:"Code",skills:[{name:"HTML",level:95,description:"Beheersing van HTML"},{name:"CSS",level:90,description:"Beheersing van CSS"},{name:"SASS",level:85,description:"Beheersing van SASS"},{name:"JS",level:75,description:"Beheersing van JavaScript"},{name:"Vue.js",level:75,description:"Beheersing van Vue.js framework"},{name:"Laravel",level:85,description:"Beheersing van Laravel framework"}]}]},{title:"Design",skills:[{name:"Webdesign",level:95,description:"Professioneel webdesign"},{name:"UI/UX",level:85,description:"Ontwerpen van UI/UX in Figma"},{name:"Graphic Design",level:85,description:"Grafisch ontwerp"}]},{title:"Software",subsections:[{title:"Adobe Creative Suite",skills:[{name:"Adobe Photoshop",level:90,description:"Beheersing van Adobe Photoshop"},{name:"Adobe Indesign",level:90,description:"Beheersing van Adobe Indesign"},{name:"Adobe Illustrator",level:75,description:"Beheersing van Adobe Illustrator"},{name:"Adobe Premiere Pro",level:75,description:"Beheersing van Adobe Premiere Pro"},{name:"Adobe Bridge",level:90,description:"Beheersing van Adobe Bridge"},{name:"Adobe Express",level:90,description:"Beheersing van Adobe Express"},{name:"Adobe After Effects",level:75,description:"Beheersing van Adobe After Effects"}]},{title:"Microsoft 365",skills:[{name:"Word",level:95,description:"Beheersing van Microsoft Word"},{name:"Power Point",level:95,description:"Beheersing van Microsoft Power Point"},{name:"Excel",level:85,description:"Beheersing van Microsoft Excel"},{name:"Outlook",level:95,description:"Beheersing van Microsoft Outlook"},{name:"Teams",level:95,description:"Beheersing van Microsoft Teams"},{name:"Tasks",level:80,description:"Beheersing van Microsoft Tasks"}]},{title:"Andere",skills:[{name:"Visual Studio Code",level:85,description:"Beheersing van Visual Studio Code"},{name:"Figma",level:80,description:"Beheersing van Figma"},{name:"Blender",level:65,description:"Beheersing van Blender"},{name:"Autodesk Fusion",level:75,description:"Beheersing van Autodesk Fusion"}]},{title:"AI",skills:[{name:"ChatGPT",level:95,description:"Beheersing van ChatGPT"},{name:"DallE",level:95,description:"Beheersing van DallE"},{name:"Adobe Firefly",level:90,description:"Beheersing van Adobe Firefly"},{name:"Microsoft Copilot",level:70,description:"Beheersing van Microsoft Copilot"}]}]}]}},computed:{filteredSkills(){if(!this.search)return this.skillSections;var e=[];for(var t of this.skillSections){var n=(0,de.A)((0,de.A)({},t),{},{skills:[],subsections:t.subsections?[]:null});if(t.subsections)for(var i of t.subsections){var a=(0,de.A)((0,de.A)({},i),{},{skills:i.skills.filter((e=>e.name.toLowerCase().includes(this.search.toLowerCase())))});a.skills.length&&n.subsections.push(a)}else n.skills=t.skills.filter((e=>e.name.toLowerCase().includes(this.search.toLowerCase())));(n.skills.length||n.subsections&&n.subsections.length)&&e.push(n)}return e}},methods:{toggleSkill(e){this.selectedSkill===e?this.selectedSkill=null:this.selectedSkill=e},searchSkill(){this.searchResult=null;var e=this.skillSections.some((e=>e.subsections?e.subsections.some((e=>e.skills.some((e=>e.name.toLowerCase().includes(this.search.toLowerCase()))))):e.skills.some((e=>e.name.toLowerCase().includes(this.search.toLowerCase())))));if(e){this.searchResult="Gevonden: ".concat(this.search);var t=document.querySelector('[data-skill="'.concat(this.search.toLowerCase(),'"]'));t&&t.scrollIntoView({behavior:"smooth"})}else this.searchResult="".concat(this.search," - zit niet in de skillset van Michaël.... yet")},clearSearchResult(){this.searchResult=null}}},be=fe,Ae=(0,w.A)(be,le,ce,!1,null,"1131361e",null),_e=Ae.exports,we=n(700),Ce=function(){var e=this,t=e._self._c;return t(I.A,{staticClass:"experience-container"},[t(E.A,e._l(e.experiences,(function(n){return t(T.A,{key:n.id,attrs:{cols:"12",md:"6",lg:"4"}},[t(z.A,{staticClass:"experience-card"},[t(B.ri,{staticClass:"headline"},[e._v(e._s(n.title))]),t(B.ZR,[e._v(e._s(n.company))]),t(B.OQ,[t("div",{staticClass:"experience-period"},[e._v(e._s(n.period))]),t(d.A,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.toggleDetails(n.id)}}},[e._v("Details")]),t(we.Qo,[e.showDetails[n.id]?t("div",{staticClass:"experience-details"},[t("p",[e._v(e._s(n.longDescription))])]):e._e()])],1)],1)],1)})),1)],1)},je=[],ye={name:"ExperiencePage",data(){return{showDetails:{},experiences:[{id:1,title:"Marketeer",company:"Octopus Accountancy Software",period:"2023-10 - heden",description:"Opzetten en beheren van marketingcampagnes zowel online als offline.",longDescription:"Als marketeer bij Octopus Accountancy Software ben ik verantwoordelijk voor het opzetten en beheren van marketingcampagnes zowel online als offline. Mijn taken omvatten het opmaken en beheren van de website, en het opmaken en beheren van SEM en SEO. Daarnaast werk ik nauw samen met het team om creatieve strategieën te ontwikkelen die de zichtbaarheid van het bedrijf vergroten en de betrokkenheid van klanten verhogen."},{id:2,title:"Freelance marketeer & webontwikkelaar",company:"Xinudesign",period:"2022-01 - heden",description:"Marketing, webdevelopment & Graphic Design. Zelfstandig in bijberoep.",longDescription:"In mijn rol als freelance marketeer en webontwikkelaar bij Xinudesign ben ik verantwoordelijk voor een breed scala aan marketing- en ontwikkelingsprojecten. Ik help bedrijven bij het opzetten van effectieve marketingstrategieën, het ontwikkelen van aantrekkelijke websites en het creëren van visueel aantrekkelijke grafische ontwerpen. Mijn werk heeft geleid tot een aanzienlijke verbetering van de online aanwezigheid en marketingprestaties van mijn klanten."},{id:3,title:"3D Print services",company:"X3DPrints",period:"2023-09 - heden",description:"Levering van 3D printdiensten.",longDescription:"Bij X3DPrints lever ik een breed scala aan 3D printdiensten, variërend van het ontwerpen van 3D-modellen tot het daadwerkelijk printen van fysieke objecten. Mijn diensten zijn gericht op zowel particuliere klanten als bedrijven die behoefte hebben aan snelle en nauwkeurige prototyping. Door gebruik te maken van geavanceerde 3D-printtechnologieën, ben ik in staat om hoogwaardige en gedetailleerde printoplossingen te bieden."},{id:4,title:"Franchise Optometrist",company:"GrandOptical Aalst",period:"2017-09 - 2023-10",description:"Opticien / Optometrist",longDescription:"Als franchise optometrist bij GrandOptical Aalst was ik verantwoordelijk voor het uitvoeren van oogonderzoeken, het voorschrijven van brillen en contactlenzen, en het bieden van uitgebreide oogzorgdiensten. Mijn rol omvatte ook het beheer van de dagelijkse operaties van de franchise, het trainen van nieuw personeel en het waarborgen van een uitstekende klantenservice. Mijn inzet heeft bijgedragen aan de groei en het succes van de franchise."},{id:5,title:"Opticien",company:"Hans Anders Gent",period:"2008-01 - 2017-09",description:"Optiekmedewerker",longDescription:"Bij Hans Anders Gent werkte ik als opticien en was ik verantwoordelijk voor het helpen van klanten bij het kiezen van de juiste brillen en contactlenzen, het uitvoeren van oogmetingen en het bieden van advies over oogzorg. Mijn rol vereiste een sterke focus op klanttevredenheid en het leveren van hoogwaardige service. Tijdens mijn tijd bij Hans Anders heb ik waardevolle ervaring opgedaan in de optiekbranche en heb ik een diep begrip ontwikkeld van klantbehoeften en -verwachtingen."}]}},methods:{toggleDetails(e){this.$set(this.showDetails,e,!this.showDetails[e])}}},Se=ye,xe=(0,w.A)(Se,Ce,je,!1,null,"021facf6",null),Oe=xe.exports,Me=function(){var e=this,t=e._self._c;return t(I.A,{staticClass:"contact-container"},[t(E.A,{attrs:{justify:"center"}},[t(T.A,{attrs:{cols:"12",md:"8"}},[t("h1",{staticClass:"contact-title"},[e._v("Contacteer mij")]),t("div",{staticClass:"contact-info"},[t("p",[e._v("Email: "),t("a",{attrs:{href:e.mailtoLink}},[e._v("michael@xinudesign.be")])]),t("p",[e._v("Telefoon: "),t("a",{attrs:{href:e.telLink}},[e._v("+32 0496.90.85.03")])]),t("div",{staticClass:"social-icons"},e._l(e.socialIcons,(function(n){return t("a",{key:n.link,attrs:{href:n.link,target:"_blank"}},[t(U.A,[e._v(e._s(n.name))])],1)})),0)])])],1)],1)},ze=[],Be={name:"ContactPage",data(){return{mailtoLink:"mailto:michael@xinudesign.be",telLink:"tel:+320496908503",socialIcons:[{name:"mdi-linkedin",link:"https://www.linkedin.com/in/michael-redant"},{name:"mdi-instagram",link:"https://www.instagram.com/m_redant/"},{name:"mdi-facebook",link:"https://www.facebook.com/mredant1"}]}}},De=Be,Pe=(0,w.A)(De,Me,ze,!1,null,"5af024b2",null),Te=Pe.exports,Ie=function(){var e=this,t=e._self._c;return t(I.A,{staticClass:"engagement-container"},[t(E.A,{attrs:{justify:"center"}},[t(T.A,{attrs:{cols:"12",md:"8"}},[t("h1",{staticClass:"engagement-title"},[e._v("Sociaal Engagement")]),t(Y.A,e._l(e.engagements,(function(n,i){return t(J.A,{key:i},[t(K.A,[t(U.A,{staticClass:"engagement-icon"},[e._v(e._s(n.icon))]),t("div",{staticClass:"engagement-text"},[t("span",{staticClass:"engagement-role"},[e._v(e._s(n.role))]),t("span",{staticClass:"engagement-period"},[e._v(e._s(n.period))])])],1),t(q.A,[t("div",{staticClass:"engagement-details"},[t("p",[e._v(e._s(n.description))])])])],1)})),1)],1)],1)],1)},Ee=[],Le={name:"EngagementPage",data(){return{engagements:[{role:"Voorzitter · nov. 2023 – heden",period:"Werkgroep Ondernemend Herzele",description:"De werkgroep heeft als doelstellingen het bevorderen van overleg en samenwerking onder de ondernemers van Herzele, het promoten van de lokale economie en het organiseren van activiteiten ter ondersteuning hiervan.",icon:"mdi-account-group"},{role:"Voorzitter · dec. 2018 - okt. 2022",period:"VZW District A",description:"De handelsvereniging van stad Aalst, met als doel het verenigen van de verschillende dekenijen van de binnenstad, helpen opzetten en organiseren van evenementen in Aalst. Het verbeteren van de winkelervaring in Aalst.",icon:"mdi-city"},{role:"Voorzitter · jul. 2018 - okt. 2022",period:"VZW Kattestraat Aalst",description:"Engageren voor verschillende activiteiten en sociale media voor de verenigde handelaars kattestraat in Aalst.",icon:"mdi-store"},{role:"Lid · okt. 2019 - okt. 2022",period:"Adviesraad Handel & Horeca stad Aalst",description:"Adviezen geven binnen de stad Aalst.",icon:"mdi-silverware"}]}}},Ge=Le,He=(0,w.A)(Ge,Ie,Ee,!1,null,"baefd9a4",null),Ve=He.exports;i.Ay.use(M.Ay);var Re=new M.Ay({mode:"history",routes:[{path:"/",name:"HomePage",component:W},{path:"/about",name:"AboutPage",component:Q},{path:"/education",name:"EducationPage",component:se},{path:"/skills",name:"SkillsPage",component:_e},{path:"/experience",name:"ExperiencePage",component:Oe},{path:"/contact",name:"ContactPage",component:Te},{path:"/engagement",name:"EngagementPage",component:Ve},{path:"*",redirect:"/"}]}),We=n(7365);i.Ay.use(We.A);var Ue=new We.A({icons:{iconfont:"mdi"}});i.Ay.config.productionTip=!1,new i.Ay({router:Re,vuetify:Ue,render:e=>e(O)}).$mount("#app")},9914:function(e,t,n){e.exports=n.p+"img/profile.6516bae6.jpeg"}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,s){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],s=e[d][2];for(var o=!0,l=0;l<i.length;l++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(o=!1,s<r&&(r=s));if(o){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,a,s]}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/CVwebsite/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,s,r=i[0],o=i[1],l=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(l)var d=l(n)}for(t&&t(i);c<r.length;c++)s=r[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},i=self["webpackChunkcv_website"]=self["webpackChunkcv_website"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(3952)}));i=n.O(i)})();
//# sourceMappingURL=app.c51a834a.js.map