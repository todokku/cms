!function(){var t={},e=function(e){for(var n=t[e],o=n.deps,r=n.defn,a=o.length,l=new Array(a),u=0;u<a;++u)l[u]=i(o[u]);var s=r.apply(null,l);if(void 0===s)throw"module ["+e+"] returned undefined";n.instance=s},n=function(e,n,i){if("string"!=typeof e)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+e;if(void 0===i)throw"no definition function for "+e;t[e]={deps:n,defn:i,instance:void 0}},i=function(n){var i=t[n];if(void 0===i)throw"module ["+n+"] was undefined";return void 0===i.instance&&e(n),i.instance},o=function(t,e){for(var n=t.length,o=new Array(n),r=0;r<n;++r)o[r]=i(t[r]);e.apply(null,o)};({}).bolt={module:{api:{define:n,require:o,demand:i}}};var r=n,a=function(t,e){r(t,[],function(){return e})};a("6",tinymce.util.Tools.resolve),r("1",["6"],function(t){return t("tinymce.PluginManager")}),r("7",["6"],function(t){return t("tinymce.util.VK")}),r("8",[],function(){var t=function(t){return t.target_list},e=function(t){return t.rel_list},n=function(t){return t.link_class_list};return{assumeExternalTargets:function(t){return"boolean"==typeof t.link_assume_external_targets&&t.link_assume_external_targets},hasContextToolbar:function(t){return"boolean"==typeof t.link_context_toolbar&&t.link_context_toolbar},getLinkList:function(t){return t.link_list},hasDefaultLinkTarget:function(t){return"string"==typeof t.default_link_target},getDefaultLinkTarget:function(t){return t.default_link_target},getTargetList:t,setTargetList:function(t,e){t.settings.target_list=e},shouldShowTargetList:function(e){return!1!==t(e)},getRelList:e,hasRelList:function(t){return void 0!==e(t)},getLinkClassList:n,hasLinkClassList:function(t){return void 0!==n(t)},shouldShowLinkTitle:function(t){return!1!==t.link_title},allowUnsafeLinkTarget:function(t){return"boolean"==typeof t.allow_unsafe_link_target&&t.allow_unsafe_link_target}}}),a("c",document),a("d",window),r("e",["6"],function(t){return t("tinymce.dom.DOMUtils")}),r("f",["6"],function(t){return t("tinymce.Env")}),r("9",["c","d","e","f"],function(t,e,n,i){var o=function(e,n){t.body.appendChild(e),e.dispatchEvent(n),t.body.removeChild(e)};return{open:function(r){if(!i.ie||i.ie>10){var a=t.createElement("a");a.target="_blank",a.href=r,a.rel="noreferrer noopener";var l=t.createEvent("MouseEvents");l.initMouseEvent("click",!0,!0,e,0,0,0,0,0,!1,!1,!1,!1,0,null),o(a,l)}else{var u=e.open("","_blank");if(u){u.opener=null;var s=u.document;s.open(),s.write('<meta http-equiv="refresh" content="0; url='+n.DOM.encode(r)+'">'),s.close()}}}}}),a("g",RegExp),r("h",["6"],function(t){return t("tinymce.util.Tools")}),r("a",["g","h","8"],function(t,e,n){var i=function(t,n){var i=["noopener"],o=t?t.split(/\s+/):[],r=function(t){return e.trim(t.sort().join(" "))},a=function(t){return(t=l(t)).length?t.concat(i):i},l=function(t){return t.filter(function(t){return-1===e.inArray(i,t)})};return(o=n?a(o):l(o)).length?r(o):null},o=function(t){return t.replace(/\uFEFF/g,"")},r=function(t,e){return e=e||t.selection.getStart(),l(e)?t.dom.select("a[href]",e)[0]:t.dom.getParent(e,"a[href]")},a=function(t){return t&&"A"===t.nodeName&&t.href},l=function(t){return t&&"FIGURE"===t.nodeName&&/\bimage\b/i.test(t.className)},u=function(t,e){return function(o){t.undoManager.transact(function(){var a=t.selection.getNode(),u=r(t,a),s={href:o.href,target:o.target?o.target:null,rel:o.rel?o.rel:null,"class":o["class"]?o["class"]:null,title:o.title?o.title:null};n.hasRelList(t.settings)||!1!==n.allowUnsafeLinkTarget(t.settings)||(s.rel=i(s.rel,"_blank"===s.target)),o.href===e.href&&(e.attach(),e={}),u?(t.focus(),o.hasOwnProperty("text")&&("innerText"in u?u.innerText=o.text:u.textContent=o.text),t.dom.setAttribs(u,s),t.selection.select(u),t.undoManager.add()):l(a)?f(t,a,s):o.hasOwnProperty("text")?t.insertContent(t.dom.createHTML("a",s,t.dom.encode(o.text))):t.execCommand("mceInsertLink",!1,s)})}},s=function(t){return function(){t.undoManager.transact(function(){var e=t.selection.getNode();l(e)?c(t,e):t.execCommand("unlink")})}},c=function(t,e){var n,i;(i=t.dom.select("img",e)[0])&&(n=t.dom.getParents(i,"a[href]",e)[0])&&(n.parentNode.insertBefore(i,n),t.dom.remove(n))},f=function(t,e,n){var i,o;(o=t.dom.select("img",e)[0])&&(i=t.dom.create("a",n),o.parentNode.insertBefore(i,o),i.appendChild(o))};return{link:u,unlink:s,isLink:a,hasLinks:function(t){return e.grep(t,a).length>0},isOnlyTextSelected:function(t){return!(/</.test(t)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(t)||-1===t.indexOf("href=")))},getAnchorElement:r,getAnchorText:function(t,e){var n=e?e.innerText||e.textContent:t.getContent({format:"text"});return o(n)},toggleTargetRules:i}}),r("i",["6"],function(t){return t("tinymce.util.Delay")}),r("j",["6"],function(t){return t("tinymce.util.XHR")}),r("b",["i","h","j","8","a"],function(t,e,n,i,o){var r={},a=function(t,e){var o=i.getLinkList(t.settings);"string"==typeof o?n.send({url:o,success:function(n){e(t,JSON.parse(n))}}):"function"==typeof o?o(function(n){e(t,n)}):e(t,o)},l=function(t,n,i){var o=function(t,i){return i=i||[],e.each(t,function(t){var e={text:t.text||t.title};t.menu?e.menu=o(t.menu):(e.value=t.value,n&&n(e)),i.push(e)}),i};return o(t,i||[])},u=function(e,n,i){var o=e.selection.getRng();t.setEditorTimeout(e,function(){e.windowManager.confirm(n,function(t){e.selection.setRng(o),i(t)})})},s=function(t,n){var a,s,c,f,d,g,h,v,p,m,k,x={},b=t.selection,L=t.dom,y=function(t){var e=c.find("#text");(!e.value()||t.lastControl&&e.value()===t.lastControl.text())&&e.value(t.control.text()),c.find("#href").value(t.control.value())},T=function(n){var i=[];if(e.each(t.dom.select("a:not([href])"),function(t){var e=t.name||t.id;e&&i.push({text:e,value:"#"+e,selected:-1!==n.indexOf("#"+e)})}),i.length)return i.unshift({text:"None",value:""}),{name:"anchor",type:"listbox",label:"Anchors",values:i,onselect:y}},w=function(){s||!f||x.text||this.parent().parent().find("#text")[0].value(this.value())},C=function(n){var i=n.meta||{};g&&g.value(t.convertURL(this.value(),"href")),e.each(n.meta,function(t,e){var n=c.find("#"+e);"text"===e?0===s.length&&(n.value(t),x.text=t):n.value(t)}),i.attach&&(r={href:this.value(),attach:i.attach}),i.text||w.call(this)},_=function(t){t.meta=c.toJSON()};f=o.isOnlyTextSelected(b.getContent()),a=o.getAnchorElement(t),x.text=s=o.getAnchorText(t.selection,a),x.href=a?L.getAttrib(a,"href"):"",a?x.target=L.getAttrib(a,"target"):i.hasDefaultLinkTarget(t.settings)&&(x.target=i.getDefaultLinkTarget(t.settings)),(k=L.getAttrib(a,"rel"))&&(x.rel=k),(k=L.getAttrib(a,"class"))&&(x["class"]=k),(k=L.getAttrib(a,"title"))&&(x.title=k),f&&(d={name:"text",type:"textbox",size:40,label:"Text to display",onchange:function(){x.text=this.value()}}),n&&(g={type:"listbox",label:"Link list",values:l(n,function(e){e.value=t.convertURL(e.value||e.url,"href")},[{text:"None",value:""}]),onselect:y,value:t.convertURL(x.href,"href"),onPostRender:function(){g=this}}),i.shouldShowTargetList(t.settings)&&(void 0===i.getTargetList(t.settings)&&i.setTargetList(t,[{text:"None",value:""},{text:"New window",value:"_blank"}]),v={name:"target",type:"listbox",label:"Target",values:l(i.getTargetList(t.settings))}),i.hasRelList(t.settings)&&(h={name:"rel",type:"listbox",label:"Rel",values:l(i.getRelList(t.settings),function(e){!1===i.allowUnsafeLinkTarget(t.settings)&&(e.value=o.toggleTargetRules(e.value,"_blank"===x.target))})}),i.hasLinkClassList(t.settings)&&(p={name:"class",type:"listbox",label:"Class",values:l(i.getLinkClassList(t.settings),function(e){e.value&&(e.textStyle=function(){return t.formatter.getCssText({inline:"a",classes:[e.value]})})})}),i.shouldShowLinkTitle(t.settings)&&(m={name:"title",type:"textbox",label:"Title",value:x.title}),c=t.windowManager.open({title:"Insert link",data:x,body:[{name:"href",type:"filepicker",filetype:"file",size:40,autofocus:!0,label:"Url",onchange:C,onkeyup:w,onbeforecall:_},d,m,T(x.href),g,h,v,p],onSubmit:function(n){var a=i.assumeExternalTargets(t.settings),l=o.link(t,r),c=o.unlink(t),d=e.extend({},x,n.data),g=d.href;return g?(f&&d.text!==s||delete d.text,g.indexOf("@")>0&&-1===g.indexOf("//")&&-1===g.indexOf("mailto:")?void u(t,"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",function(t){t&&(d.href="mailto:"+g),l(d)}):!0===a&&!/^\w+:/i.test(g)||!1===a&&/^\s*www[\.|\d\.]/i.test(g)?void u(t,"The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(t){t&&(d.href="http://"+g),l(d)}):void l(d)):void c()}})};return{open:function(t){a(t,s)}}}),r("3",["7","8","9","a","b"],function(t,e,n,i,o){var r=function(t,e){return t.dom.getParent(e,"a[href]")},a=function(t){return r(t,t.selection.getStart())},l=function(t){var e=t.getAttribute("data-mce-href");return e||t.getAttribute("href")},u=function(t){var e=t.plugins.contextmenu;return!!e&&e.isContextMenuVisible()},s=function(t){return!0===t.altKey&&!1===t.shiftKey&&!1===t.ctrlKey&&!1===t.metaKey},c=function(t,e){if(e){var i=l(e);if(/^#/.test(i)){var o=t.$(i);o.length&&t.selection.scrollIntoView(o[0],!0)}else n.open(e.href)}};return{openDialog:function(t){return function(){o.open(t)}},gotoSelectedLink:function(t){return function(){c(t,a(t))}},leftClickedOnAHref:function(t){return function(n){var o,r,a;return!!(e.hasContextToolbar(t.settings)&&!u(t)&&i.isLink(n)&&(o=t.selection,r=o.getRng(),3===(a=r.startContainer).nodeType&&o.isCollapsed()&&r.startOffset>0&&r.startOffset<a.data.length))}},setupGotoLinks:function(e){e.on("click",function(n){var i=r(e,n.target);i&&t.metaKeyPressed(n)&&(n.preventDefault(),c(e,i))}),e.on("keydown",function(t){var n=a(e);n&&13===t.keyCode&&s(t)&&(t.preventDefault(),c(e,n))})},toggleActiveState:function(t){return function(){var e=this;t.on("nodechange",function(n){e.active(!t.readonly&&!!i.getAnchorElement(t,n.element))})}},toggleViewLinkState:function(t){return function(){var e=this,n=function(t){i.hasLinks(t.parents)?e.show():e.hide()};i.hasLinks(t.dom.getParents(t.selection.getStart()))||e.hide(),t.on("nodechange",n),e.on("remove",function(){t.off("nodechange",n)})}}}}),r("2",["3"],function(t){return{register:function(e){e.addCommand("mceLink",t.openDialog(e))}}}),r("4",["3"],function(t){return{setup:function(e){e.addShortcut("Meta+K","",t.openDialog(e))}}}),r("5",["3","a"],function(t,e){return{setupButtons:function(n){n.addButton("link",{icon:"link",tooltip:"Insert/edit link",onclick:t.openDialog(n),onpostrender:t.toggleActiveState(n)}),n.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onclick:e.unlink(n),onpostrender:t.toggleActiveState(n)}),n.addContextToolbar&&n.addButton("openlink",{icon:"newtab",tooltip:"Open link",onclick:t.gotoSelectedLink(n)})},setupMenuItems:function(e){e.addMenuItem("openlink",{text:"Open link",icon:"newtab",onclick:t.gotoSelectedLink(e),onPostRender:t.toggleViewLinkState(e),prependToContext:!0}),e.addMenuItem("link",{icon:"link",text:"Link",shortcut:"Meta+K",onclick:t.openDialog(e),stateSelector:"a[href]",context:"insert",prependToContext:!0})},setupContextToolbars:function(e){e.addContextToolbar&&e.addContextToolbar(t.leftClickedOnAHref(e),"openlink | link unlink")}}}),r("0",["1","2","3","4","5"],function(t,e,n,i,o){return t.add("link",function(t){o.setupButtons(t),o.setupMenuItems(t),o.setupContextToolbars(t),n.setupGotoLinks(t),e.register(t),i.setup(t)}),function(){}}),i("0")()}();