(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,i){"use strict";(function(t){i.d(e,"a",function(){return C}),i.d(e,"b",function(){return T});var n=i(84),o=i(15),r=i(8),s="undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},a="[object AsyncFunction]",h="[object Function]",p="[object GeneratorFunction]",l="[object Null]",c="[object Proxy]",d="[object Undefined]",u="object"==typeof s&&s&&s.Object===Object&&s,f="object"==typeof self&&self&&self.Object===Object&&self,y=u||f||Function("return this")(),_=Object.prototype,m=_.hasOwnProperty,P=_.toString,b=y.Symbol,g=b?b.toStringTag:void 0;function w(t){return null==t?void 0===t?d:l:g&&g in Object(t)?function(t){var e=m.call(t,g),i=t[g];try{t[g]=void 0}catch(o){}var n=P.call(t);e?t[g]=i:delete t[g];return n}(t):function(t){return P.call(t)}(t)}var S=function(t){if(!function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}(t))return!1;var e=w(t);return e==h||e==p||e==a||e==c},v=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},A=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),O=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e},k=function(t){function e(){var t,i,n;v(this,e);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return i=n=O(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(r))),n.addedNotExistedPatterns=function(t,e){var i=n.props.leaflet.map;e&&(S(e)?t.forEach(function(t){var n=e(t.feature);n.fillPattern&&!i.hasPattern(n.fillPattern)&&(i.once("patternadd",function(e){var i=e.pattern;setTimeout(function(){return t.setStyle({fillPattern:i})},0)}),i.addPattern(n.fillPattern))}):e.fillPattern&&n.addPatternToLayer(e.fillPattern,n))},n.addPatternToLayer=function(t,e){var i=n.props.leaflet.map;i.hasPattern(t)?e.setStyle({fillPattern:t}):(i.once("patternadd",function(t){var i=t.pattern;setTimeout(function(){return e.setStyle({fillPattern:i})},0)}),i.addPattern(t))},O(n,i)}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n["a"]),A(e,[{key:"createLeafletElement",value:function(t){var e=this,i=new r.GeoJSON(t.data,this.getOptions(t));return i.once("add",function(i){e.addedNotExistedPatterns(i.target.getLayers(),t.style)}),i}},{key:"updateLeafletElement",value:function(t,e){S(e.style)?(this.addedNotExistedPatterns(this.leafletElement.getLayers(),e.style),this.setStyle(e.style)):(t.style.fillPattern!==e.style.fillPattern&&this.addPatternToLayer(e.style.fillPattern,this),this.setStyleIfChanged(t,e))}}]),e}(),C=Object(o.b)(k),E=function(t){return t.options.key||x.stamp(t)},x=window.L;!function(t,e,i){x.Pattern=x.Class.extend({includes:x.Evented.prototype||x.Mixin.Events,options:{x:0,y:0,width:8,height:8,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",key:""},_addShapes:x.Util.falseFn,_update:x.Util.falseFn,initialize:function(t){if(this._shapes={},!t.key)throw Error("Should define a unique option key");x.setOptions(this,t)},onAdd:function(t){for(var e in this._map=t.target?t.target:t,this._map._initDefRoot,this._map._initDefRoot(),this._initDom(),this._shapes)this._shapes[e].onAdd(this);this._addShapes(),this._addDom(),this.redraw(),this.getEvents&&this._map.on(this.getEvents(),this),this.fire("add"),this._map.fire("patternadd",{pattern:this})},onRemove:function(){this._removeDom()},redraw:function(){if(this._map)for(var t in this._update(),this._shapes)this._shapes[t].redraw();return this},setStyle:function(t){return x.setOptions(this,t),this._map&&(this._updateStyle(),this.redraw()),this},addTo:function(t){return t.addPattern(this),this},remove:function(){return this.removeFrom(this._map)},removeFrom:function(t){return t&&t.removePattern(this),this}}),x.Map.addInitHook(function(){this._patterns={}}),x.Map.include({addPattern:function(t){var e=E(t);return this._patterns[e]?t:(this._patterns[e]=t,this.whenReady(t.onAdd,t),this)},removePattern:function(t){var e=E(t);return this._patterns[e]?(this._loaded&&t.onRemove(this),t.getEvents&&this.off(t.getEvents(),t),delete this._patterns[e],this._loaded&&(this.fire("patternremove",{pattern:t}),t.fire("remove")),t._map=null,this):this},hasPattern:function(t){return!!t&&E(t)in this._patterns}}),x.Pattern.SVG_NS="http://www.w3.org/2000/svg",x.Pattern=x.Pattern.extend({_createElement:function(t){return e.createElementNS(x.Pattern.SVG_NS,t)},_initDom:function(){this._dom=this._createElement("pattern"),this.options.className&&x.DomUtil.addClass(this._dom,this.options.className),this._updateStyle()},_addDom:function(){this._map._defRoot.appendChild(this._dom)},_removeDom:function(){x.DomUtil.remove(this._dom)},_updateStyle:function(){var t=this._dom,e=this.options;if(t){if(t.setAttribute("id",E(this)),t.setAttribute("x",e.x),t.setAttribute("y",e.y),t.setAttribute("width",e.width),t.setAttribute("height",e.height),t.setAttribute("patternUnits",e.patternUnits),t.setAttribute("patternContentUnits",e.patternContentUnits),e.patternTransform||e.angle){var i=e.patternTransform?e.patternTransform+" ":"";i+=e.angle?"rotate("+e.angle+") ":"",t.setAttribute("patternTransform",i)}else t.removeAttribute("patternTransform");for(var n in this._shapes)this._shapes[n]._updateStyle()}}}),x.Map.include({_initDefRoot:function(){if(!this._defRoot)if("function"===typeof this.getRenderer){var t=this.getRenderer(this);this._defRoot=x.Pattern.prototype._createElement("defs"),t._container.appendChild(this._defRoot)}else this._pathRoot||this._initPathRoot(),this._defRoot=x.Pattern.prototype._createElement("defs"),this._pathRoot.appendChild(this._defRoot)}}),x.SVG?x.SVG.include({_superUpdateStyle:x.SVG.prototype._updateStyle,_updateStyle:function(t){this._superUpdateStyle(t),t.options.fill&&t.options.fillPattern&&t._path.setAttribute("fill","url(#"+E(t.options.fillPattern)+")")}}):x.Path.include({_superUpdateStyle:x.Path.prototype._updateStyle,_updateStyle:function(){this._superUpdateStyle(),this.options.fill&&this.options.fillPattern&&this._path.setAttribute("fill","url(#"+E(this.options.fillPattern)+")")}}),x.StripePattern=x.Pattern.extend({options:{weight:4,spaceWeight:4,color:"#000000",spaceColor:"#ffffff",opacity:1,spaceOpacity:0},_addShapes:function(){this._stripe=new x.PatternPath({stroke:!0,weight:this.options.weight,color:this.options.color,opacity:this.options.opacity}),this._space=new x.PatternPath({stroke:!0,weight:this.options.spaceWeight,color:this.options.spaceColor,opacity:this.options.spaceOpacity}),this.addShape(this._stripe),this.addShape(this._space),this._update()},_update:function(){this._stripe.options.d="M0 "+this._stripe.options.weight/2+" H "+this.options.width,this._space.options.d="M0 "+(this._stripe.options.weight+this._space.options.weight/2)+" H "+this.options.width},setStyle:x.Pattern.prototype.setStyle}),x.stripePattern=function(t){return new x.StripePattern(t)},x.PatternShape=x.Class.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",fillOpacity:.2,fillRule:"evenodd"},initialize:function(t){x.setOptions(this,t)},onAdd:function(t){this._pattern=t,this._pattern._dom&&(this._initDom(),this._addDom())},addTo:function(t){return t.addShape(this),this},redraw:function(){return this._pattern&&this._updateShape(),this},setStyle:function(t){return x.setOptions(this,t),this._pattern&&this._updateStyle(),this},setShape:function(t){this.options=x.extend({},this.options,t),this._updateShape()}}),x.Pattern.include({addShape:function(t){var e=E(t);if(this._shapes[e])return t;this._shapes[e]=t,t.onAdd(this)}}),x.PatternShape.SVG_NS="http://www.w3.org/2000/svg",x.PatternShape=x.PatternShape.extend({_createElement:function(t){return e.createElementNS(x.PatternShape.SVG_NS,t)},_initDom:x.Util.falseFn,_updateShape:x.Util.falseFn,_initDomElement:function(t){this._dom=this._createElement(t),this.options.className&&x.DomUtil.addClass(this._dom,this.options.className),this._updateStyle()},_addDom:function(){this._pattern._dom.appendChild(this._dom)},_updateStyle:function(){var t=this._dom,e=this.options;t&&(e.stroke?(t.setAttribute("stroke",e.color),t.setAttribute("stroke-opacity",e.opacity),t.setAttribute("stroke-width",e.weight),t.setAttribute("stroke-linecap",e.lineCap),t.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?t.setAttribute("stroke-dasharray",e.dashArray):t.removeAttribute("stroke-dasharray"),e.dashOffset?t.setAttribute("stroke-dashoffset",e.dashOffset):t.removeAttribute("stroke-dashoffset")):t.setAttribute("stroke","none"),e.fill?(e.fillPattern?t.setAttribute("fill","url(#"+E(e.fillPattern)+")"):t.setAttribute("fill",e.fillColor||e.color),t.setAttribute("fill-opacity",e.fillOpacity),t.setAttribute("fill-rule",e.fillRule||"evenodd")):t.setAttribute("fill","none"),t.setAttribute("pointer-events",e.pointerEvents||(e.interactive?"visiblePainted":"none")))}}),x.PatternPath=x.PatternShape.extend({_initDom:function(){this._initDomElement("path")},_updateShape:function(){this._dom&&this._dom.setAttribute("d",this.options.d)}}),x.PatternCircle=x.PatternShape.extend({options:{x:0,y:0,radius:0},_initDom:function(){this._initDomElement("circle")},_updateShape:function(){this._dom&&(this._dom.setAttribute("cx",this.options.x),this._dom.setAttribute("cy",this.options.y),this._dom.setAttribute("r",this.options.radius))}}),x.PatternRect=x.PatternShape.extend({options:{x:0,y:0,width:10,height:10},_initDom:function(){this._initDomElement("rect")},_updateShape:function(){this._dom&&(this._dom.setAttribute("x",this.options.x),this._dom.setAttribute("y",this.options.y),this._dom.setAttribute("width",this.options.width),this._dom.setAttribute("height",this.options.height),this.options.rx&&this._dom.setAttribute("rx",this.options.rx),this.options.ry&&this._dom.setAttribute("ry",this.options.ry))}}),x.CheckerBoardPattern=x.Pattern.extend({options:{color:"#000000",fillOpacity:1},_addShapes:function(){this._shape1=new x.PatternRect({stroke:!1,fillOpacity:this.options.fillOpacity,color:this.options.color,fill:this.options.color,x:0,y:0,width:this.options.width/2,height:this.options.height/2}),this._shape2=new x.PatternRect({stroke:!1,fillOpacity:this.options.fillOpacity,color:this.options.color,fill:this.options.color,x:this.options.width/2,y:this.options.height/2,width:this.options.width/2,height:this.options.height/2}),this.addShape(this._shape1),this.addShape(this._shape2),this._update()},_update:function(){},setStyle:x.Pattern.prototype.setStyle})}(window,document);var j=window.L,R=window.L,D=function(t,e){var i=new e(t),n=new R.Pattern(t);return n.addShape(i),n},L=window.L,F=window.L,U=window.L,N=window.L,T={StripePattern:function(t){return new j.StripePattern(t)},CirclePattern:function(t){return D(t,L.PatternCircle)},RectPattern:function(t){return D(t,F.PatternRect)},PathPattern:function(t){return D(t,U.PatternPath)},CheckerBoardPattern:function(t){return new N.CheckerBoardPattern(t)}}}).call(this,i(60))},64:function(t){t.exports={type:"FeatureCollection",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[{type:"Feature",properties:{style:"circle",name:"Parc de la Colline"},geometry:{type:"Polygon",coordinates:[[[-72.35720634789077,47.72858763003908],[-71.86027854004486,47.52764829163817],[-72.37075892446839,47.539848426151735],[-72.35720634789077,47.72858763003908]]]}},{type:"Feature",properties:{style:"circle",name:"Centre Paul-\xc9tienne Simard"},geometry:{type:"Polygon",coordinates:[[[-72.35720634789077,48.0134409002133],[-72.23975068421811,48.0134409002133],[-72.25330326079572,47.8560560008885],[-72.02742698450211,47.8560560008885],[-72.03646203555387,48.0134409002133],[-71.90545379530359,48.01646283861713],[-71.89190121872596,47.801464984333364],[-72.36172387341665,47.810567474765456],[-72.35720634789077,48.0134409002133]]]}},{type:"Feature",properties:{style:"rect",name:"Loisirs Rivi\xe8re du Moulin"},geometry:{type:"Polygon",coordinates:[[[-72.19457542895938,48.33278115872843],[-72.01839193345037,48.33278115872843],[-71.84672596346724,48.25162852527669],[-71.9506290505623,48.10703864474009],[-72.20361048001112,48.10703864474009],[-72.39786407762362,48.22153926126905],[-72.19457542895938,48.33278115872843]]]}},{type:"Feature",properties:{style:"rect",name:"L'\xc9toile-du-Nord"},geometry:{type:"Polygon",coordinates:[[[-71.58922700849254,47.649521925935176],[-71.52598165113034,47.734664642855655],[-71.48532392139748,47.64952192593517],[-71.29558784931088,47.6373473322767],[-71.46273629376812,47.58557365277731],[-71.39045588535417,47.47576605259922],[-71.53501670218209,47.55204572235724],[-71.70216514663935,47.491030857179695],[-71.61633216164776,47.59166733426485],[-71.78799813163091,47.65560815876191],[-71.58922700849254,47.649521925935176]]]}},{type:"Feature",properties:{style:"stripe",name:"Loisirs Lavoie et St-Jean-Baptiste"},geometry:{type:"Polygon",coordinates:[[[-71.72927029979458,48.01041878470011],[-71.291070323785,48.0043740223378],[-71.291070323785,47.7771838776939],[-71.72927029979458,47.786290622064854],[-71.72927029979458,48.01041878470011]]]}},{type:"Feature",properties:{style:"stripe",name:"Loisirs Diamant"},geometry:{type:"Polygon",coordinates:[[[-71.6931300955876,48.341790157179155],[-71.28655279825912,48.34479280289303],[-71.44918371719052,48.224548983994914],[-71.27751774720737,48.07082744644634],[-71.75185792742393,48.08591854428757],[-71.50791154902684,48.21551928490868],[-71.6931300955876,48.341790157179155]]]}},{type:"Feature",properties:{style:"path",name:"Sydenham"},geometry:{type:"Polygon",coordinates:[[[-71.05164147091378,47.710352336655504],[-70.91159817961176,47.710352336655504],[-70.92515075618937,47.619080121567436],[-70.71282705647337,47.61603496573444],[-70.72186210752511,47.44827822618499],[-70.85738787330129,47.44827822618499],[-70.85287034777541,47.55204572235725],[-71.05615899643963,47.55204572235725],[-71.05164147091378,47.710352336655504]]]}},{type:"Feature",properties:{style:"path",name:"Saint-Luc"},geometry:{type:"Polygon",coordinates:[[[-71.11036930275012,47.798430466372736],[-70.90256312856002,47.983211774835986],[-70.69927447989578,47.789325849015306],[-71.11036930275012,47.798430466372736]]]}},{type:"Feature",properties:{style:"checkerboard",name:"Loisirs du Fjord du Saguenay"},geometry:{type:"Polygon",coordinates:[[[-70.98839611355157,48.32977780546792],[-70.81221261804258,48.32977780546792],[-70.80769509251668,48.20949860065613],[-70.6315115970077,48.20949860065615],[-70.63602912253357,48.0798826363496],[-71.14650950695709,48.08290067885033],[-71.15102703248297,48.21250903126998],[-70.98387858802569,48.20949860065613],[-70.98839611355157,48.32977780546792]]]}}]}},71:function(t,e,i){t.exports=i(82)},76:function(t,e,i){},82:function(t,e,i){"use strict";i.r(e);var n=i(14),o=i.n(n),r=i(58),s=i.n(r),a=(i(76),i(61)),h=i(62),p=i(68),l=i(63),c=i(69),d=i(85),u=i(83),f=i(86),y=i(64),_=i(25),m=d.a.BaseLayer,P=d.a.Overlay,b=function(t){function e(){var t,i;Object(a.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(i=Object(p.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={selectedColor:"red"},i.toggleButtonHandler=function(){return i.setState({selectedColor:"red"!==i.state.selectedColor?"red":"green"})},i.getFillPattern=function(t){var e=i.state.selectedColor;switch(t.properties.style){case"checkerboard":return _.b.CheckerBoardPattern({key:"checkerboard"+e,color:e,width:20,height:20});case"circle":return _.b.CirclePattern({x:7,y:7,radius:5,fill:!0,width:15,height:15,color:e,key:"circle"+e});case"rect":return _.b.RectPattern({width:40,height:40,rx:10,ry:10,fill:!0,color:e,key:"rect"+e});case"stripe":return _.b.StripePattern({key:"stripe"+e,color:e});case"path":return _.b.PathPattern({d:"M10 0 L7 20 L25 20 Z",fill:!0,key:"path"+e,width:25,height:25,x:5,y:5,color:e})}},i}return Object(c.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this,e=this.state.selectedColor;return o.a.createElement(u.a,{center:[48.01041878470011,-71.72927029979458],zoom:9,style:{height:"100vh"}},o.a.createElement(d.a,{position:"topright"},o.a.createElement(m,{checked:!0,name:"OpenStreetMap"},o.a.createElement(f.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})),o.a.createElement(P,{checked:!0,name:"Patterns"},o.a.createElement(_.a,{data:y,style:function(i){return{color:e,fillPattern:t.getFillPattern(i)}}}))),o.a.createElement("button",{style:{position:"fixed",right:10,top:70,zIndex:1001},onClick:this.toggleButtonHandler},"Change color"))}}]),e}(o.a.Component);s.a.render(o.a.createElement(b,null),document.getElementById("root"))}},[[71,2,1]]]);
//# sourceMappingURL=main.2d40a99f.chunk.js.map