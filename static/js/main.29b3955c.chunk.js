(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=n(1),l=n(2),s=n(4),u=n(3),d=n(5),f=(n(16),n(9)),m=n(8),h=n.n(m),v=function(e){var t=e.name,n=e.value;return o.a.createElement("div",{className:"table-row"},o.a.createElement("p",null,t),o.a.createElement("p",null,n.toFixed(2)))},p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},n.renderHeader=function(){var e=n.state.data;return console.log(e),o.a.createElement("div",{className:"App-header"},o.a.createElement("h2",null,"Base currency: ",e.base),o.a.createElement("h3",null,"Latest update: ",e.date))},n.renderTable=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"table-row"},o.a.createElement("h4",null,"Currency"),o.a.createElement("h4",null,"Amount in base")),Object.entries(n.state.data.rates).map(function(e){var t=Object(f.a)(e,2),n=t[0],a=t[1];return("USD"===n||"UAH"===n)&&o.a.createElement(v,{key:n,name:n,value:a})}))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("http://data.fixer.io/api/latest?access_key=81ce1d0236d5f975b89bc55f4a2a7b97&format=1").then(function(e){return e.json()}).then(function(t){return setTimeout(function(){localStorage.setItem("data",JSON.stringify(t)),e.setState({data:t})},1e3)}).catch(function(t){return e.setState({data:localStorage.getItem("data")})}),navigator.onLine||this.setState({data:localStorage.getItem("data")})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.data?o.a.createElement("div",null,this.renderHeader(),this.renderTable()):o.a.createElement("div",{className:"App-header"},o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),o.a.createElement("h2",null,"Loading...")))}}]),t}(o.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(p,null)}}]),t}(a.Component),w=(n(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function b(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/test",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/test","/service-worker.js");w?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):b(e)})}}()},8:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.29b3955c.chunk.js.map