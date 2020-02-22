(this.webpackJsonpkinematic_arms=this.webpackJsonpkinematic_arms||[]).push([[0],{24:function(e,n,t){},36:function(e,n,t){e.exports=t(86)},40:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var a=t(4),i=t.n(a),r=t(35),l=t.n(r),o=(t(40),t(23)),c=t(14),s=t(9),u=t(10),h=t(12),m=t(11),d=t(13),p=(t(24),t(7)),g=t(22);window.JOINT_WIDTH=12;var f=function(e){function n(){return Object(s.a)(this,n),Object(h.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props.origin.point({x:0,y:0}),n=this.props.origin.point({x:0,y:-window.JOINT_WIDTH/2}),t=this.props.origin.point({x:0,y:+window.JOINT_WIDTH/2}),a=this.props.origin.point({x:this.props.length,y:-window.JOINT_WIDTH/2}),r=this.props.origin.point({x:this.props.length,y:+window.JOINT_WIDTH/2});return i.a.createElement(p.Group,null,i.a.createElement(p.Shape,{sceneFunc:function(e,i){e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(a.x,a.y),e.lineTo(r.x,r.y),e.lineTo(t.x,t.y),e.closePath(),e.fillStrokeShape(i)},fill:this.props.fill}),i.a.createElement(p.Circle,{x:e.x,y:e.y,radius:window.JOINT_WIDTH/2,fill:"black"}))}}]),n}(i.a.Component),k=function(e){function n(){return Object(s.a)(this,n),Object(h.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(u.a)(n,[{key:"linksList",value:function(){var e=this,n=new g.Transform;return n.translate(250,250),this.props.links.map((function(t,a){if(a>0){var r=e.props.links[a-1];n=n.copy().translate(r.length,0)}return n=n.copy().rotate(t.angle),i.a.createElement(f,{key:a,origin:n,length:t.length,fill:t.color})}))}},{key:"render",value:function(){return i.a.createElement(p.Stage,{width:500,height:500},i.a.createElement(p.Layer,null,this.linksList()))}}]),n}(i.a.Component);function v(e){return i.a.createElement("div",{className:"column"},e.links.map((function(n,t){return i.a.createElement("form",{className:"column sliders",key:t},i.a.createElement("label",null,"Arm ",t),i.a.createElement("div",{className:"row"},i.a.createElement("label",{for:"angle"+t},"Angle"),i.a.createElement("input",{type:"range",min:-180,max:180,onChange:e.handleAngleInput,"data-index":t,defaultValue:n.angle*(180/Math.PI),id:"angle"+t}),i.a.createElement("label",{for:"length"+t},"Length"),i.a.createElement("input",{type:"range",min:10,max:100,onChange:e.handleLengthInput,"data-index":t,defaultValue:n.length,id:"length"+t})))})))}var b=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(h.a)(this,Object(m.a)(n).call(this,e))).addLink=function(){t.state.links.length<10&&t.setState((function(e){return{links:[].concat(Object(c.a)(e.links),[t.newLink()])}}))},t.removeLink=function(){t.state.links.length>1&&t.setState((function(e){return{links:e.links.slice(0,-1)}}))},t.handleAngleInput=function(e){var n=e.target.value*(Math.PI/180),a=parseInt(e.target.dataset.index);t.setState((function(e){var t=e.links;return{links:[].concat(Object(c.a)(t.slice(0,a)),[Object(o.a)({},t[a],{angle:n})],Object(c.a)(t.slice(a+1)))}}))},t.handleLengthInput=function(e){var n=e.target.value,a=parseInt(e.target.dataset.index);t.setState((function(e){var t=e.links;return{links:[].concat(Object(c.a)(t.slice(0,a)),[Object(o.a)({},t[a],{length:n})],Object(c.a)(t.slice(a+1)))}}))},t.canvasRef=i.a.createRef(),t.state={links:Array.from({length:3},(function(){return t.newLink()}))},t}return Object(d.a)(n,e),Object(u.a)(n,[{key:"newLink",value:function(){return{length:this.randomLength(),angle:this.randomAngle(),color:this.randomColor()}}},{key:"randomLength",value:function(){return Math.floor(70*Math.random()+30)}},{key:"randomAngle",value:function(){return(Math.floor(180*Math.random())-90)*(Math.PI/180)}},{key:"randomColor",value:function(){return"hsl("+360*Math.random()+",100%,50%)"}},{key:"render",value:function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"column"},i.a.createElement(k,{links:this.state.links}),i.a.createElement("div",{className:"row"},i.a.createElement("button",{onClick:this.addLink},"Add Link"),i.a.createElement("button",{onClick:this.removeLink},"Remove Last Link"))),i.a.createElement(v,{links:this.state.links,handleAngleInput:this.handleAngleInput,handleLengthInput:this.handleLengthInput}))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.65fd1a3c.chunk.js.map