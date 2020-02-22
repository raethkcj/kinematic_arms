(this.webpackJsonpkinematic_arms=this.webpackJsonpkinematic_arms||[]).push([[0],{24:function(e,t,n){},36:function(e,t,n){e.exports=n(86)},40:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),r=n(35),l=n.n(r),o=(n(40),n(23)),s=n(14),c=n(9),u=n(10),h=n(12),d=n(11),m=n(13),p=(n(24),n(7)),g=n(22);window.JOINT_WIDTH=12;var k=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.origin.point({x:0,y:0}),t=this.props.origin.point({x:0,y:-window.JOINT_WIDTH/2}),n=this.props.origin.point({x:0,y:+window.JOINT_WIDTH/2}),a=this.props.origin.point({x:this.props.length,y:-window.JOINT_WIDTH/2}),r=this.props.origin.point({x:this.props.length,y:+window.JOINT_WIDTH/2});return i.a.createElement(p.Group,null,i.a.createElement(p.Shape,{sceneFunc:function(e,i){e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(a.x,a.y),e.lineTo(r.x,r.y),e.lineTo(n.x,n.y),e.closePath(),e.fillStrokeShape(i)},fill:this.props.fill}),i.a.createElement(p.Circle,{x:e.x,y:e.y,radius:window.JOINT_WIDTH/2,fill:"black"}))}}]),t}(i.a.Component),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).updateDimensions=function(){n.setState({width:Math.min(document.querySelector("html").clientWidth,500)})},n.state={width:0},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"linksList",value:function(){var e=this,t=new g.Transform,n=this.state.width/2;return t.translate(n,n),this.props.links.map((function(n,a){if(a>0){var r=e.props.links[a-1];t=t.copy().translate(r.length,0)}return t=t.copy().rotate(n.angle),i.a.createElement(k,{key:a,origin:t,length:n.length,fill:n.color})}))}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){return i.a.createElement(p.Stage,{width:this.state.width,height:this.state.width},i.a.createElement(p.Layer,null,this.linksList()))}}]),t}(i.a.Component);function v(e){return i.a.createElement("div",{className:"column"},e.links.map((function(t,n){return i.a.createElement("fieldset",{key:n},i.a.createElement("legend",null,"Link ",n+1),i.a.createElement("div",{className:"row"},i.a.createElement("label",{className:"row"},"Angle",i.a.createElement("input",{type:"range",min:-180,max:180,onChange:e.handleAngleInput,"data-index":n,defaultValue:t.angle*(180/Math.PI)})),i.a.createElement("label",{className:"row"},"Length",i.a.createElement("input",{type:"range",min:10,max:100,onChange:e.handleLengthInput,"data-index":n,defaultValue:t.length}))))})))}var w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).addLink=function(){n.state.links.length<10&&n.setState((function(e){return{links:[].concat(Object(s.a)(e.links),[n.newLink()])}}))},n.removeLink=function(){n.state.links.length>1&&n.setState((function(e){return{links:e.links.slice(0,-1)}}))},n.handleAngleInput=function(e){var t=e.target.value*(Math.PI/180),a=parseInt(e.target.dataset.index);n.setState((function(e){var n=e.links;return{links:[].concat(Object(s.a)(n.slice(0,a)),[Object(o.a)({},n[a],{angle:t})],Object(s.a)(n.slice(a+1)))}}))},n.handleLengthInput=function(e){var t=e.target.value,a=parseInt(e.target.dataset.index);n.setState((function(e){var n=e.links;return{links:[].concat(Object(s.a)(n.slice(0,a)),[Object(o.a)({},n[a],{length:t})],Object(s.a)(n.slice(a+1)))}}))},n.canvasRef=i.a.createRef(),n.state={links:Array.from({length:3},(function(){return n.newLink()}))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"newLink",value:function(){return{length:this.randomLength(),angle:this.randomAngle(),color:this.randomColor()}}},{key:"randomLength",value:function(){return Math.floor(70*Math.random()+30)}},{key:"randomAngle",value:function(){return(Math.floor(180*Math.random())-90)*(Math.PI/180)}},{key:"randomColor",value:function(){return"hsl("+360*Math.random()+",100%,50%)"}},{key:"render",value:function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"column"},i.a.createElement(f,{links:this.state.links}),i.a.createElement("div",{className:"row"},i.a.createElement("button",{onClick:this.addLink},"Add Link"),i.a.createElement("button",{onClick:this.removeLink},"Remove Last Link"))),i.a.createElement(v,{links:this.state.links,handleAngleInput:this.handleAngleInput,handleLengthInput:this.handleLengthInput}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.75e11215.chunk.js.map