(this["webpackJsonpmy-pokemons-list"]=this["webpackJsonpmy-pokemons-list"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(1),o=s.n(r),i=s(7),a=s.n(i),p=s(2),c=s(3),u=s(5),m=s(4),l=(s(14),s(15),s(16),function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(){return Object(p.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){var e=this.props.pokemon.types.map((function(e,t){return Object(n.jsx)("li",{className:"pokeType",children:e},t)}));return Object(n.jsxs)("section",{className:"pokeCard--sec",children:[Object(n.jsx)("img",{className:"pokeImg",src:this.props.pokemon.url,alt:this.props.pokemon.name}),Object(n.jsx)("h2",{className:"pokeName",children:this.props.pokemon.name}),Object(n.jsx)("ul",{className:"typeList",children:e})]})}}]),s}(o.a.Component)),h=function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(){return Object(p.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){var e=this.props.list.map((function(e){return Object(n.jsx)("li",{className:"pokeCard",children:Object(n.jsx)(l,{pokemon:e})},e.id)}));return Object(n.jsxs)("main",{className:"main",children:[Object(n.jsx)("h1",{children:"Mi lista de pokemon"}),Object(n.jsx)("ul",{className:"pokeList",children:e})]})}}]),s}(o.a.Component),b=s(8),k=function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(){var e;return Object(p.a)(this,s),(e=t.call(this)).state={pokemons:b},e}return Object(c.a)(s,[{key:"render",value:function(){return Object(n.jsx)(h,{list:this.state.pokemons})}}]),s}(o.a.Component);a.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.ea0ed1ea.chunk.js.map