(this.webpackJsonptempapp=this.webpackJsonptempapp||[]).push([[0],{56:function(e,t,s){},57:function(e,t,s){},89:function(e,t,s){"use strict";s.r(t);var r=s(0),c=s(1),n=s.n(c),i=s(20),a=s.n(i),o=(s(56),s(57),s(8)),l=s(19),h=s(14),d=s(15),j=s(12),p=s(17),u=s(16),b=s(94),O=s(95),m=s(96),v=s(104),g=s(97),x=s(98),f=s(91),y=s(92),S=s(93),k=function(e){Object(p.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(h.a)(this,s),(r=t.call(this,e)).onSubmit=r.onSubmit.bind(Object(j.a)(r)),r}return Object(d.a)(s,[{key:"onSubmit",value:function(e){switch(this.props.choice){case"movie":this.props.getMovieSearch(this.query.value);break;case"tv":this.props.getTVSearch(this.query.value);break;case"person":this.props.getPersonSearch(this.query.value)}this.props.history.push("/search/"+this.props.choice),e.preventDefault()}},{key:"render",value:function(){var e=this;return null!==this.props.choice?Object(r.jsxs)(f.a,{className:"form-inline my-2 my-lg-0",onSubmit:this.onSubmit,children:[Object(r.jsx)(y.a,{className:"mr-sm-2",type:"text",name:"query",id:"query",innerRef:function(t){return e.query=t},placeholder:"Search "+this.props.choice,"aria-label":"query"}),Object(r.jsx)(S.a,{className:"btn-success my-2 my-sm-0",type:"submit",value:"submit",children:"Search"})]}):Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"Select a category"})})}}]),s}(c.Component),N=function(e){Object(p.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(h.a)(this,s),(r=t.call(this,e)).state={isOpen:!1},r.toggle=r.toggle.bind(Object(j.a)(r)),r}return Object(d.a)(s,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(b.a,{color:"light",light:!0,expand:"md",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(O.a,{href:"/",children:"MovieApp"}),Object(r.jsx)(m.a,{onClick:this.toggle}),Object(r.jsx)(v.a,{isOpen:this.state.isOpen,navbar:!0,children:Object(r.jsxs)(g.a,{className:"mr-auto",navbar:!0,children:[Object(r.jsx)(x.a,{children:Object(r.jsx)(l.c,{className:"nav-link",to:"/home",children:"Home"})}),Object(r.jsx)(x.a,{children:Object(r.jsx)(l.c,{className:"nav-link",to:"/trending",children:"Trending"})}),Object(r.jsx)(x.a,{children:Object(r.jsx)(l.c,{className:"nav-link",to:"/search",children:"Search by Category"})})]})}),Object(r.jsx)(k,{choice:"movie",history:this.props.history,getMovieSearch:this.props.getMovieSearch})]})})})}}]),s}(c.Component),C=s(100),T=s(99),w=s(103),M=[{id:0,src:"./assets/images/battleship.jpg",alt:"Battleship",tagline:"The Battle for Earth Begins at Sea",overview:"When mankind beams a radio signal into space, a reply comes from \u2018Planet G\u2019, in the form of several alien crafts that splash down in the waters off Hawaii. Lieutenant Alex Hopper is a weapons officer assigned to the USS John Paul Jones, part of an international naval coalition which becomes the world's last hope for survival as they engage the hostile alien force of unimaginable strength. While taking on the invaders, Hopper must also try to live up to the potential that his brother, and his fianc\xe9e's father\u2014an Admiral\u2014expect of him.",date:"13/04/2012 (IN)",genres:"Thriller, Action, Adventure, Science Fiction"},{id:1,src:"./assets/images/AVA.jpg",alt:"AVA",tagline:"Kill. Or be killed.",overview:"A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",date:"25/09/2020 (US)",genres:"Action, Drama, Crime, Thriller"},{id:2,src:"./assets/images/Sweet Home.jpg",alt:"Sweet Home",tagline:"Series",overview:"Cha Hyun-Soo is a high school student. He is also a recluse and rarely leaves his room. He refuses to talk to his father, mother and younger sister. One day, his whole family, except for him, dies in a car accident. Cha Hyun-Soo is left all alone. He moves into a small apartment. At this time, a mysterious phenomenon of humans turning into monster occur all around the world. The residents of Cha Hyun-Soo's apartment building, including Pyeon Sang-Wook, fight against these monsters and try to survive.",date:"2020",genres:"Drama, Sci-Fi and Fantasy"}],P=function(e){Object(p.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(h.a)(this,s),(r=t.call(this,e)).state={activeslide:0,slide:M[0]},r.changeSlide=r.changeSlide.bind(Object(j.a)(r)),r}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.changeSlide()}},{key:"componentDidUpdate",value:function(){this.changeSlide()}},{key:"changeSlide",value:function(){var e=this;setTimeout((function(){var t=(e.state.activeslide+1)%M.length;e.setState({activeslide:t,slide:M[t]})}),6e3)}},{key:"render",value:function(){return Object(r.jsx)(T.a,{mode:"out-in",children:Object(r.jsx)(w.a,{addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},classNames:"mycarousel",timeout:500,children:Object(r.jsxs)(C.a,{className:"container",children:[Object(r.jsx)("div",{className:"col-md-4",children:Object(r.jsx)("img",{src:this.state.slide.src,width:"100%",alt:this.state.slide.alt})}),Object(r.jsxs)("div",{className:"col-md-8 d-flex flex-column justify-content-center",children:[Object(r.jsx)("h4",{children:this.state.slide.alt}),Object(r.jsx)("em",{children:this.state.slide.tagline}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h5",{children:"Overview"}),Object(r.jsx)("p",{children:this.state.slide.overview}),Object(r.jsx)("p",{className:"text-muted",children:this.state.slide.date}),Object(r.jsx)("p",{children:this.state.slide.genres})]})]})},this.state.activeslide)})}}]),s}(c.Component);var A=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{className:"mt-3",children:"Movies"}),Object(r.jsx)("div",{className:"container mt-5",children:Object(r.jsx)(P,{})})]})};var L=function(){return Object(r.jsx)("footer",{className:"footer mt-5 bg-light",children:Object(r.jsx)("div",{className:"container",style:{padding:"20px"},children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-4",children:Object(r.jsx)("p",{children:"MovieApp"})}),Object(r.jsx)("div",{className:"col-md-4",children:Object(r.jsxs)("ul",{style:{listStyleType:"none"},children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{className:"text-secondary",to:"/home",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{className:"text-secondary",to:"/categories",children:"Categories"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{className:"text-secondary",to:"/trending",children:"Trending"})})]})}),Object(r.jsx)("div",{className:"col-md-4",children:Object(r.jsxs)("ul",{style:{listStyleType:"none"},children:[Object(r.jsx)("li",{children:"Contact Us"}),Object(r.jsx)("li",{children:"Email"}),Object(r.jsx)("li",{children:"Facebook"})]})})]})})})},V=s(102),_=s(101);var H=function(){return Object(r.jsx)("div",{className:"container text-center",children:Object(r.jsx)(_.a,{color:"dark"})})},D="https://api.themoviedb.org/3/",E="https://image.tmdb.org/t/p/w500";var q=function(e){var t=e.movie;return Object(r.jsxs)("div",{children:[Object(r.jsxs)(V.a,{tag:"li",className:"mt-3",children:[Object(r.jsx)(V.a,{left:!0,children:Object(r.jsx)(V.a,{object:!0,src:E+t.poster_path,alt:t.title,width:"128px"})}),Object(r.jsxs)(V.a,{body:!0,className:"ml-5",children:[Object(r.jsx)(V.a,{heading:!0,children:t.title}),Object(r.jsx)("h6",{children:"Overview"}),Object(r.jsx)("p",{children:t.overview}),Object(r.jsxs)("h6",{children:["Date: ",Object(r.jsx)("span",{children:t.release_date})]}),Object(r.jsxs)("h6",{children:["Popularity: ",Object(r.jsx)("span",{children:t.popularity})]})]}),Object(r.jsx)("hr",{})]},t.id),Object(r.jsx)("hr",{})]})};var F=function(e){var t=e.tv;return Object(r.jsxs)("div",{children:[Object(r.jsxs)(V.a,{tag:"li",className:"mt-3",children:[Object(r.jsx)(V.a,{left:!0,children:Object(r.jsx)(V.a,{object:!0,src:E+t.poster_path,alt:t.original_name,width:"128px"})}),Object(r.jsxs)(V.a,{body:!0,className:"ml-5",children:[Object(r.jsx)(V.a,{heading:!0,children:t.original_name}),Object(r.jsx)("h6",{children:"Overview"}),Object(r.jsx)("p",{children:t.overview}),Object(r.jsxs)("h6",{children:["Popularity: ",Object(r.jsx)("span",{children:t.popularity})]})]}),Object(r.jsx)("hr",{})]},t.id),Object(r.jsx)("hr",{})]})};var I=function(e){var t=e.person;return Object(r.jsxs)("div",{children:[Object(r.jsxs)(V.a,{tag:"li",className:"mt-3",children:[Object(r.jsx)(V.a,{left:!0,children:Object(r.jsx)(V.a,{object:!0,src:E+t.profile_path,alt:t.name,width:"128px"})}),Object(r.jsxs)(V.a,{body:!0,className:"ml-5",children:[Object(r.jsx)(V.a,{heading:!0,children:t.name}),Object(r.jsx)("h6",{children:"Department"}),Object(r.jsx)("p",{children:t.known_for_department})]}),Object(r.jsx)("hr",{})]},t.id),Object(r.jsx)("hr",{})]})},R=function(e){Object(p.a)(s,e);var t=Object(u.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){if(this.props.loading)return Object(r.jsx)("div",{className:"container mt-5",children:Object(r.jsx)(H,{})});var e;switch(this.props.choice){case"movie":e=this.props.results.map((function(e){return Object(r.jsx)(q,{movie:e})}));break;case"tv":e=this.props.results.map((function(e){return Object(r.jsx)(F,{tv:e})}));break;case"person":e=this.props.results.map((function(e){return Object(r.jsx)(I,{person:e})}));break;default:e=""}return Object(r.jsxs)("div",{className:"container mt-5",children:[Object(r.jsx)("h1",{children:"Trending"}),Object(r.jsxs)("h3",{children:["Top ",this.props.choice," of the week"]}),Object(r.jsxs)("div",{className:"mt-3",children:[Object(r.jsx)(S.a,{color:"outline-dark",className:"mr-2",onClick:this.props.onMovieClick,active:"movie"===this.props.choice,children:"Movies"}),Object(r.jsx)(S.a,{color:"outline-dark",className:"mr-2",onClick:this.props.onTVClick,active:"tv"===this.props.choice,children:"TV Shows"}),Object(r.jsx)(S.a,{color:"outline-dark",className:"mr-2",onClick:this.props.onPersonClick,active:"person"===this.props.choice,children:"People"})]}),Object(r.jsx)(V.a,{list:!0,className:"mt-5",children:e})]})}}]),s}(c.Component);var B=function(e){var t=e.loading,s=e.err,c=e.results,n=e.choice;if(t)return Object(r.jsx)("div",{className:"container mt-5",children:Object(r.jsx)(H,{})});if(s)return Object(r.jsx)("div",{className:"container mt-5",children:s});var i=c.map((function(e){switch(n){case"movie":return Object(r.jsx)(q,{movie:e},e.id);case"tv":return Object(r.jsx)(F,{tv:e},e.id);case"person":return Object(r.jsx)(I,{person:e},e.id);default:return Object(r.jsx)("div",{})}}));return Object(r.jsxs)("div",{className:"container mt-5",children:[Object(r.jsx)("h2",{children:"Search Results"}),Object(r.jsx)(V.a,{list:!0,className:"mt-5",children:i})]})},U=function(e){Object(p.a)(s,e);var t=Object(u.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"container mt-5",children:[Object(r.jsx)("h1",{children:"Search By Category"}),Object(r.jsxs)("div",{className:"mt-3",children:[Object(r.jsx)(S.a,{color:"outline-dark",className:"mr-2",id:"movie",onClick:this.props.onClick,active:"movie"===this.props.choice,children:"Movie"}),Object(r.jsx)(S.a,{color:"outline-dark",className:"mr-2",id:"tv",onClick:this.props.onClick,active:"tv"===this.props.choice,children:"TV Show"}),Object(r.jsx)(S.a,{color:"outline-dark",className:"mr-2",id:"person",onClick:this.props.onClick,active:"person"===this.props.choice,children:"Person"})]}),Object(r.jsx)("div",{className:"container mt-5",children:Object(r.jsx)(k,{choice:this.props.choice,getMovieSearch:this.props.getMovieSearch,getTVSearch:this.props.getTVSearch,getPersonSearch:this.props.getPersonSearch,history:this.props.history})}),Object(r.jsx)("div",{className:"mt-5",children:Object(r.jsx)(B,{results:this.props.results,loading:this.props.isLoading,err:this.props.err,choice:this.props.choice})})]})}}]),s}(c.Component),G=s(28),J="ADD_RESULT",W="CHOICE_LOADING",K="CHOICE_FAILED",z="ADD_SEARCH",Q="SEARCH_LOADING",X="SEARCH_FAILED",Y="SEARCH_CHANGED",Z=s(23),$=s.n(Z),ee=function(){return{type:W}},te=function(e){return{type:J,payload:e}},se=function(e){return{type:K,payload:e}},re=function(){return{type:Q}},ce=function(e){return{type:z,payload:e}},ne=function(e){return{type:X,payload:e}},ie=function(e){Object(p.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(h.a)(this,s),(r=t.call(this,e)).state={trendchoice:null,searchchoice:null},r.setTrendingMovie=r.setTrendingMovie.bind(Object(j.a)(r)),r.setTrendingTV=r.setTrendingTV.bind(Object(j.a)(r)),r.setTrendingPerson=r.setTrendingPerson.bind(Object(j.a)(r)),r.onClick=r.onClick.bind(Object(j.a)(r)),r}return Object(d.a)(s,[{key:"setTrendingMovie",value:function(){this.setState({trendchoice:"movie"}),this.props.fetchMovies()}},{key:"setTrendingTV",value:function(){this.setState({trendchoice:"tv"}),this.props.fetchTV()}},{key:"setTrendingPerson",value:function(){this.setState({trendchoice:"person"}),this.props.fetchPerson()}},{key:"onClick",value:function(e){this.state.searchchoice!==e.target.id&&this.props.changeSearchOption(),this.setState({searchchoice:e.target.id}),this.props.history.push("/search/"+e.target.id)}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{getMovieSearch:this.props.getMovieSearch,history:this.props.history}),Object(r.jsxs)(o.d,{children:[Object(r.jsx)(o.b,{path:"/home",component:function(){return Object(r.jsx)(A,{})}}),Object(r.jsx)(o.b,{path:"/trending",component:function(){return Object(r.jsx)(R,{choice:e.state.trendchoice,results:e.props.trending.results,loading:e.props.trending.isLoading,onMovieClick:e.setTrendingMovie,onTVClick:e.setTrendingTV,onPersonClick:e.setTrendingPerson})}}),Object(r.jsx)(o.b,{exact:!0,path:"/search",component:function(){return Object(r.jsx)(U,{results:e.props.search.results,loading:e.props.search.isLoading,err:e.props.search.err,choice:null,onClick:e.onClick,getTVSearch:e.props.getTVSearch,getMovieSearch:e.props.getMovieSearch,getPersonSearch:e.props.getPersonSearch,history:e.props.history})}}),Object(r.jsx)(o.b,{path:"/search/movie",component:function(){return Object(r.jsx)(U,{results:e.props.search.results,loading:e.props.search.isLoading,err:e.props.search.err,choice:"movie",onClick:e.onClick,getTVSearch:e.props.getTVSearch,getMovieSearch:e.props.getMovieSearch,getPersonSearch:e.props.getPersonSearch,history:e.props.history})}}),Object(r.jsx)(o.b,{path:"/search/tv",component:function(){return Object(r.jsx)(U,{results:e.props.search.results,loading:e.props.search.isLoading,err:e.props.search.err,choice:"tv",onClick:e.onClick,getTVSearch:e.props.getTVSearch,getMovieSearch:e.props.getMovieSearch,getPersonSearch:e.props.getPersonSearch,history:e.props.history})}}),Object(r.jsx)(o.b,{path:"/search/person",component:function(){return Object(r.jsx)(U,{results:e.props.search.results,loading:e.props.search.isLoading,err:e.props.search.err,choice:"person",onClick:e.onClick,getTVSearch:e.props.getTVSearch,getMovieSearch:e.props.getMovieSearch,getPersonSearch:e.props.getPersonSearch,history:e.props.history})}}),Object(r.jsx)(o.a,{to:"/home"})]}),Object(r.jsx)(L,{})]})}}]),s}(c.Component),ae=Object(o.h)(Object(G.b)((function(e){return{trending:e.trending,search:e.search}}),(function(e){return{fetchMovies:function(){return e((function(e){return e(ee()),$.a.get(D+"trending/movies/week",{params:{api_key:"0075ac9def7d3aecd8c4080563e3bcd2"}}).then((function(t){return e(te(t.data.results))})).catch((function(t){return e(se(t.message))}))}))},fetchPerson:function(){return e((function(e){return e(ee()),$.a.get(D+"trending/person/week",{params:{api_key:"0075ac9def7d3aecd8c4080563e3bcd2"}}).then((function(t){return e(te(t.data.results))})).catch((function(t){return e(se(t.message))}))}))},fetchTV:function(){return e((function(e){return e(ee()),$.a.get(D+"trending/tv/week",{params:{api_key:"0075ac9def7d3aecd8c4080563e3bcd2"}}).then((function(t){return e(te(t.data.results))})).catch((function(t){return e(se(t.message))}))}))},getMovieSearch:function(t){return e((s=t,function(e){e(re()),$.a.get(D+"search/movie",{params:{api_key:"0075ac9def7d3aecd8c4080563e3bcd2",query:s}}).then((function(t){console.log(t.data.results),e(ce(t.data.results))})).catch((function(t){return e(ne(t.message))}))}));var s},getTVSearch:function(t){return e((s=t,function(e){e(re()),$.a.get(D+"search/tv",{params:{api_key:"0075ac9def7d3aecd8c4080563e3bcd2",query:s}}).then((function(t){console.log(t.data.results),e(ce(t.data.results))})).catch((function(t){return e(ne(t.message))}))}));var s},getPersonSearch:function(t){return e((s=t,function(e){e(re()),$.a.get(D+"search/person",{params:{api_key:"0075ac9def7d3aecd8c4080563e3bcd2",query:s}}).then((function(t){console.log(t.data.results),e(ce(t.data.results))})).catch((function(t){return e(ne(t.message))}))}));var s},changeSearchOption:function(){return e({type:Y})}}}))(ie)),oe=s(24),le=s(9),he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,err:null,results:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(le.a)(Object(le.a)({},e),{},{isLoading:!0,err:null,results:[]});case J:return Object(le.a)(Object(le.a)({},e),{},{isLoading:!1,err:null,results:t.payload});case K:return Object(le.a)(Object(le.a)({},e),{},{isLoading:!1,err:t.payload,results:[]});default:return e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{results:[],err:null,isLoading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(le.a)(Object(le.a)({},e),{},{results:[],err:null,isLoading:!0});case z:return Object(le.a)(Object(le.a)({},e),{},{results:t.payload,err:null,isLoading:!1});case X:return Object(le.a)(Object(le.a)({},e),{},{results:[],err:t.payload,isLoading:!1});case Y:return Object(le.a)(Object(le.a)({},e),{},{results:[],err:null,isLoading:!1});default:return e}},je=s(49),pe=Object(oe.d)(Object(oe.c)({trending:he,search:de}),Object(oe.a)(je.a));var ue=function(){var e=Object(o.g)();return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(G.a,{store:pe,children:Object(r.jsx)(l.a,{basename:"/MovieApp",children:Object(r.jsx)(ae,{history:e})})})})},be=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,105)).then((function(t){var s=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),r(e),c(e),n(e),i(e)}))};s(88);a.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(ue,{})}),document.getElementById("root")),be()}},[[89,1,2]]]);
//# sourceMappingURL=main.5cfcffb7.chunk.js.map