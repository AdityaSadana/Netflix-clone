(this["webpackJsonpmovie-destination"]=this["webpackJsonpmovie-destination"]||[]).push([[0],{22:function(e,t,a){e.exports=a(64)},27:function(e,t,a){},28:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),o=a.n(r),i=(a(27),a(28),a(4)),s=a.n(i),l=a(5),u=a(3),m=a(17),d=a.n(m).a.create({baseURL:"https://api.themoviedb.org/3"}),v=a(18),f=a(21),h=a.n(f);a(61);var p=function(e){var t=e.title,a=e.fetchUrl,r=e.isLargeRow,o=Object(n.useState)([]),i=Object(u.a)(o,2),m=i[0],f=i[1],p=Object(n.useState)(""),g=Object(u.a)(p,2),b=g[0],w=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(a);case 2:return t=e.sent,f(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,t),c.a.createElement("div",{className:"row_posters"},m.map((function(e){return c.a.createElement("img",{onClick:function(){return function(e){b?w(""):h()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);w(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},key:e.id,className:"row_poster ".concat(r&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(r?e.poster_path:e.backdrop_path),alt:e.name})}))),b&&c.a.createElement(v.a,{videoId:b,opts:{height:"300px",width:"100%",playerVars:{autoplay:1}}}))},g="36cc7013b919abeeead7347d957f8f60",b={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};a(62);var w=function(){var e,t,a=Object(n.useState)([]),r=Object(u.a)(a,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(b.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(o),c.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(o.backdrop_path,'")'),backgroundPosition:"center center"}},c.a.createElement("div",{className:"banner_contents"},c.a.createElement("h1",{className:"banner_title"},(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)),c.a.createElement("div",{className:"banner_buttons"},c.a.createElement("button",{className:"banner_button"},"Play"),c.a.createElement("button",{className:"banner_button"},"My List")),c.a.createElement("h1",{className:"banner_description"},(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),c.a.createElement("div",{className:"banner_fadeBottom"}))};a(63);var E=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?r(!0):r(!1)})),function(){window.remoteEventListener("scroll")}}),[]),c.a.createElement("div",{className:"nav ".concat(a&&"nav_black")},c.a.createElement("img",{className:"nav_logo",src:"https://assets.brand.microsites.netflix.io/assets/df87ee0c-c4ea-11e7-8d40-066b49664af6_cm_800w.png?v=16",alt:"Netflix"}),c.a.createElement("img",{className:"nav_avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Avatar"}))};var _=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E,null),c.a.createElement(w,null),c.a.createElement(p,{title:"NETFLIX ORIGINALS",fetchUrl:b.fetchNetflixOriginals,isLargeRow:!0}),c.a.createElement(p,{title:"Trending Now",fetchUrl:b.fetchTrending}),c.a.createElement(p,{title:"Top Rated",fetchUrl:b.fetchTopRated}),c.a.createElement(p,{title:"Action Movies",fetchUrl:b.fetchActionMovies}),c.a.createElement(p,{title:"Comedy Movies",fetchUrl:b.fetchComedyMovies}),c.a.createElement(p,{title:"Horror Movies",fetchUrl:b.fetchHorrorMovies}),c.a.createElement(p,{title:"Romantic Movies",fetchUrl:b.fetchRomanceMovies}),c.a.createElement(p,{title:"Documentaries",fetchUrl:b.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.be96b8d1.chunk.js.map