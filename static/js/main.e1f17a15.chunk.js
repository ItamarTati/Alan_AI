(this.webpackJsonpalan_ai=this.webpackJsonpalan_ai||[]).push([[0],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),l=a.n(r),o=(a(88),a(36)),c=a(37),s=a(169),m=a(168),d=a(164),u=a(160),f=Object(u.a)({card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"},container:{padding:"0 5%",width:"100%",margin:0}}),p=a(170),g=a(162),h=a(163),b=a(165),y=a(166),x=a(167),w=a(73),E=a.n(w),v=Object(u.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),j=function(e){var t=e.article,a=t.description,r=t.publishedAt,l=t.source,c=t.title,s=t.url,m=t.urlToImage,u=e.index,f=e.activeArticle,w=v(),j=Object(n.useState)([]),C=Object(o.a)(j,2),N=C[0],O=C[1];return Object(n.useEffect)((function(){window.scroll(0,0),O((function(e){return Array(20).fill().map((function(t,a){return e[a]||Object(n.createRef)()}))}))}),[]),Object(n.useEffect)((function(){var e;u===f&&N[f]&&(e=N[f],window.scroll(0,e.current.offsetTop-50))}),[u,f,N]),i.a.createElement(p.a,{ref:N[u],className:E()(w.card,f===u?w.activeCard:null)},i.a.createElement(g.a,{href:s,target:"_blank"},i.a.createElement(h.a,{className:w.media,image:m||"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"}),i.a.createElement("div",{className:w.details},i.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"h2"},new Date(r).toDateString()),i.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"h2"},l.name)),i.a.createElement(d.a,{className:w.title,gutterBottom:!0,variant:"h5",component:"h2"},c),i.a.createElement(b.a,null,i.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},a))),i.a.createElement(y.a,{className:w.cardActions},i.a.createElement(x.a,{size:"small",color:"primary",href:""},"Learn More"),i.a.createElement(d.a,{variant:"h5",color:"textSecondary",component:"h2"},u+1)))},C=[{color:"#00838f",title:"Latest News",text:"Give me the latest news"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}],N=function(e){var t=e.articles,a=e.activeArticle,n=f();return t.length?i.a.createElement(s.a,{in:!0},i.a.createElement(m.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},t.map((function(e,t){return i.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"}},i.a.createElement(j,{key:"news",article:e,activeArticle:a,index:t}))})))):i.a.createElement(s.a,{in:!0},i.a.createElement(m.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},C.map((function(e){return i.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:n.infoCard},i.a.createElement("div",{className:n.card,style:{backgroundColor:e.color}},i.a.createElement(d.a,{variant:"h5",component:"h5"},e.title),e.info?i.a.createElement(d.a,{variant:"h6",component:"h6"},i.a.createElement("strong",null,e.title.split(" ")[2]),": ",i.a.createElement("br",null),e.info):null,i.a.createElement(d.a,{variant:"h6",component:"h6"},"Try saying: ",i.a.createElement("br",null)," ",i.a.createElement("i",null,e.text))))}))))},O=a(75),k=a.n(O),A=a(25),S=Object(u.a)((function(e){return{footer:Object(A.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(A.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(A.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(A.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(A.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),B=a(76),T=a.n(B),D=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=S(),s=Object(n.useState)(-1),m=Object(o.a)(s,2),d=m[0],u=m[1];return Object(n.useEffect)((function(){c({key:"c14ffd86f37efd1f70092413640945c92e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.articles,n=e.number;if("newHeadlines"===t)r(a),u(-1);else if("highlight"===t)u((function(e){return e+1}));else if("open"===t){var i=n.length>2?k()(n,{fuzzy:!0}):n,l=a[i-1];i>20?c().playText("Please try that again..."):l?(window.open(l.url,"_blank"),c().playText("Opening..., if article is not opening, please make sure your browser isn't blocking redirects...")):c().playText("Please try that again...")}}})}),[]),i.a.createElement("div",null,i.a.createElement("div",{className:l.logoContainer},i.a.createElement("img",{src:T.a,className:l.alanLogo,alt:"alan logo"})),i.a.createElement(N,{key:"news",articles:a,activeArticle:d}))};l.a.render(i.a.createElement(D,null),document.getElementById("root"))},76:function(e,t,a){e.exports=a.p+"static/media/alan-logo.3ad53d6d.jpeg"},83:function(e,t,a){e.exports=a(146)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.e1f17a15.chunk.js.map