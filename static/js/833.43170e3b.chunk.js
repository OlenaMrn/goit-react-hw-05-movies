"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[833],{3757:function(e,t,n){n.d(t,{Df:function(){return l},M1:function(){return f},Pg:function(){return v},tx:function(){return d},zi:function(){return m}});var r=n(5861),c=n(4687),a=n.n(c),i="https://api.themoviedb.org/3/",s="cd645533d11f1e46be7243753c49caff";function o(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Error occurred while fetching movies");case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return o("".concat(i,"/trending/movie/day?api_key=").concat(s))}function v(e){return o("".concat(i,"/movie/").concat(e,"?api_key=").concat(s))}function d(e){return o("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s))}function f(e){return o("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s))}function m(e){return o("".concat(i,"/search/movie?query=").concat(e,"&api_key=").concat(s))}},974:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(5861),c=n(9439),a=n(4687),i=n.n(a),s=n(2791),o=n(7689),u=n(1087),l=n(3757),v="MovieDetails_movieTitle__qwoTW",d="MovieDetails_cardWrap__e8fJs",f="MovieDetails_movieInfo__XAfDM",m="MovieDetails_movieVote__tmYpG",p="MovieDetails_movieImg__dR5Cx",_="MovieDetails_movieImgWrap__PMjPN",h="MovieDetails_movieText__Iyrlb",x="MovieDetails_adLink__mKUkE",j="MovieDetails_back__X8E6B",k="MovieDetails_icon__3Fjif",w=n(5880),b=n.p+"static/media/NoPoster.0957e216d613603bb56c.webp",g=n(184),N=function(){var e,t=(0,o.UO)().movieId,n=(0,s.useState)(null),a=(0,c.Z)(n,2),N=a[0],D=a[1],M=(0,o.TH)(),y=(0,s.useRef)((null===(e=M.state)||void 0===e?void 0:e.from)||"/");(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Pg)(t);case 3:n=e.sent,D(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);return(0,g.jsx)("div",{children:N&&(0,g.jsxs)("div",{children:[(0,g.jsx)(u.rU,{to:y.current,state:{from:M},children:(0,g.jsx)("div",{className:j,children:(0,g.jsx)("span",{className:k,children:(0,g.jsx)(w.ucp,{})})})}),(0,g.jsxs)("div",{className:d,children:[(0,g.jsx)("h3",{className:v,children:N.title}),(0,g.jsxs)("div",{className:_,children:[(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(N.poster_path),alt:N.title,className:p,onError:function(e){e.target.src=b}}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:h,children:N.overview}),(0,g.jsxs)("p",{className:f,children:["Release Date: ",N.release_date]}),(0,g.jsxs)("div",{className:f,children:[(0,g.jsx)("p",{className:m,children:"Genres:"})," ",N.genres.map((function(e){return e.name})).join(", ")]}),(0,g.jsxs)("p",{className:m,children:["User Score: ",N.vote_average]})]})]})]}),(0,g.jsx)(u.rU,{to:"/movies/".concat(t,"/cast"),className:x,children:"Cast"}),(0,g.jsx)(u.rU,{to:"/movies/".concat(t,"/review"),className:x,children:"Review"}),(0,g.jsx)(s.Suspense,{fallback:(0,g.jsx)("div",{children:"Loading subpage..."}),children:(0,g.jsx)(o.j3,{})})]})})}}}]);
//# sourceMappingURL=833.43170e3b.chunk.js.map