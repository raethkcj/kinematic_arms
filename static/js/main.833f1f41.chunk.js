(this.webpackJsonpkinematic_arms=this.webpackJsonpkinematic_arms||[]).push([[0],{24:function(t,e,n){},36:function(t,e,n){t.exports=n(86)},40:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),l=n(35),r=n.n(l),o=(n(40),n(18)),s=n(14),c=n(8),u=n(9),h=n(11),p=n(10),m=n(12),d=(n(24),n(16)),g=n(7);window.JOINT_WIDTH=12;var f=function(t){function e(){return Object(c.a)(this,e),Object(h.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.origin.point({x:0,y:0}),e=this.props.origin.point({x:0,y:-window.JOINT_WIDTH/2}),n=this.props.origin.point({x:0,y:+window.JOINT_WIDTH/2}),a=this.props.origin.point({x:this.props.length,y:-window.JOINT_WIDTH/2}),l=this.props.origin.point({x:this.props.length,y:+window.JOINT_WIDTH/2});return i.a.createElement(g.Group,null,i.a.createElement(g.Shape,{sceneFunc:function(t,i){t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(a.x,a.y),t.lineTo(l.x,l.y),t.lineTo(n.x,n.y),t.closePath(),t.fillStrokeShape(i)},fill:this.props.fill}),i.a.createElement(g.Circle,{x:t.x,y:t.y,radius:window.JOINT_WIDTH/2,fill:"black"}))}}]),e}(i.a.Component),k=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(h.a)(this,Object(p.a)(e).call(this,t))).bloop=i.a.createRef(),n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.bloop.current.to({scaleX:2,scaleY:2,opacity:0,duration:.2})}},{key:"render",value:function(){return i.a.createElement(g.Group,null,i.a.createElement(g.Circle,{ref:this.bloop,x:this.props.goal.x,y:this.props.goal.y,fill:"red",opacity:.5,radius:6}),i.a.createElement(g.Circle,{x:this.props.goal.x,y:this.props.goal.y,fill:"red",radius:5}))}}]),e}(i.a.Component),v=function(t){function e(){return Object(c.a)(this,e),Object(h.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"linksList",value:function(){var t=this,e=new d.Transform,n=this.props.width/2;return e.translate(n,n),this.props.links.map((function(n,a){if(a>0){var l=t.props.links[a-1];e=e.copy().translate(l.length,0)}return e=e.copy().rotate(n.angle),i.a.createElement(f,{key:a,origin:e,length:n.length,fill:n.color})}))}},{key:"render",value:function(){var t=this.props.goal?i.a.createElement(k,{goal:this.props.goal}):null;return i.a.createElement(g.Stage,{width:this.props.width,height:this.props.width,onClick:this.props.onClick},i.a.createElement(g.Layer,null,t,this.linksList()))}}]),e}(i.a.Component);var y=function(t){return i.a.createElement("div",{className:"column"},t.links.map((function(e,n){return i.a.createElement("fieldset",{key:n},i.a.createElement("legend",null,"Link ",n+1),i.a.createElement("div",{className:"row"},i.a.createElement("label",{className:"row"},"Angle",i.a.createElement("input",{type:"range",min:-180,max:180,onChange:t.handleAngleInput,"data-index":n,value:e.angle*(180/Math.PI)})),i.a.createElement("label",{className:"row"},"Length",i.a.createElement("input",{type:"range",min:10,max:100,onChange:t.handleLengthInput,"data-index":n,value:e.length}))))})))},b=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(h.a)(this,Object(p.a)(e).call(this,t))).updateDimensions=function(){n.setState({width:Math.min(document.querySelector("html").clientWidth,500)})},n.addLink=function(){n.state.links.length<10&&n.setState((function(t){return{links:[].concat(Object(s.a)(t.links),[n.newLink()])}}))},n.removeLink=function(){n.state.links.length>1&&n.setState((function(t){return{links:t.links.slice(0,-1)}}))},n.handleAngleInput=function(t){var e=parseInt(t.target.dataset.index),a=t.target.value*(Math.PI/180);n.setAngle(e,a)},n.handleLengthInput=function(t){var e=t.target.value,a=parseInt(t.target.dataset.index);n.setState((function(t){var n=t.links;return{links:[].concat(Object(s.a)(n.slice(0,a)),[Object(o.a)({},n[a],{length:e})],Object(s.a)(n.slice(a+1)))}}))},n.handleClick=function(t){"number"===typeof n.state.timeoutID&&(clearTimeout(n.state.timeoutID),n.setState({goal:void 0,timeoutID:void 0}));var e=t.target.getStage().getPointerPosition();n.setState({goal:e});var a=n.calculateDistance(n.state.links),i=Number.MAX_VALUE,l=setTimeout(n.inverseKinStep(a,i),0);n.setState({timeoutID:l})},n.inverseKinStep=function(t,e){if(t>3&&e>.5){var a=Array(n.state.links.length).fill(0),i=Array(n.state.links.length).fill(0),l=n.state.links.map((function(t){return Object(o.a)({},t)}));l.forEach((function(t,e){t.angle+=Math.PI/180;var r=n.calculateDistance(l);t.angle-=Math.PI/180*2;var o=r-n.calculateDistance(l);if(a[e]*o<0){var s=n.state.links[e].angle-Math.PI/180*(i[e]*a[e])/(o-a[e]);t.angle=s,n.setAngle(e,s),i[e]=0}else i[e]+=o;a[e]=o;var c=n.state.links[e].angle-i[e]*(Math.PI/180);t.angle=c,n.setAngle(e,c)})),t=n.calculateDistance(n.state.links),e=i.reduce((function(t,e){return Math.max(t,Math.abs(e))}));var r=setTimeout((function(){return n.inverseKinStep(t,e)}),15);n.setState({timeoutID:r})}else n.setState({goal:void 0,timeoutID:void 0})},n.canvasRef=i.a.createRef(),n.state={width:0,links:Array.from({length:3},(function(){return n.newLink()})),goal:void 0,timeoutID:void 0},n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"newLink",value:function(){return{length:this.randomLength(),angle:this.randomAngle(),color:this.randomColor()}}},{key:"randomLength",value:function(){return Math.floor(70*Math.random()+30)}},{key:"randomAngle",value:function(){return(Math.floor(180*Math.random())-90)*(Math.PI/180)}},{key:"randomColor",value:function(){return"hsl("+360*Math.random()+",100%,50%)"}},{key:"setAngle",value:function(t,e){e<-Math.PI&&(e=2*Math.PI-e),e>Math.PI&&(e-=2*Math.PI),this.setState((function(n){var a=n.links;return{links:[].concat(Object(s.a)(a.slice(0,t)),[Object(o.a)({},a[t],{angle:e})],Object(s.a)(a.slice(t+1)))}}))}},{key:"calculateDistance",value:function(t){var e=new d.Transform,n=this.state.width/2;e.translate(n,n),t.forEach((function(t){e.rotate(t.angle),e.translate(t.length,0)}));var a=e.point({x:0,y:0});return Math.hypot(this.state.goal.x-a.x,this.state.goal.y-a.y)}},{key:"render",value:function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"column"},i.a.createElement(v,{width:this.state.width,links:this.state.links,goal:this.state.goal,onClick:this.handleClick}),i.a.createElement("div",{className:"row"},i.a.createElement("button",{onClick:this.addLink},"Add Link"),i.a.createElement("button",{onClick:this.removeLink},"Remove Last Link"))),i.a.createElement(y,{links:this.state.links,handleAngleInput:this.handleAngleInput,handleLengthInput:this.handleLengthInput}))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.833f1f41.chunk.js.map