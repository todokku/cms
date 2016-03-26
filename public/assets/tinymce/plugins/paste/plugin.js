!function(a,b){"use strict";function c(a,b){for(var c,d=[],f=0;f<a.length;++f){if(c=g[a[f]]||e(a[f]),!c)throw"module definition dependecy not found: "+a[f];d.push(c)}b.apply(null,d)}function d(a,d,e){if("string"!=typeof a)throw"invalid module definition, module id must be defined and be a string";if(d===b)throw"invalid module definition, dependencies must be specified";if(e===b)throw"invalid module definition, definition function must be specified";c(d,function(){g[a]=e.apply(null,arguments)})}function e(b){for(var c=a,d=b.split(/[.\/]/),e=0;e<d.length;++e){if(!c[d[e]])return;c=c[d[e]]}return c}function f(c){var d,e,f,h,i;for(d=0;d<c.length;d++){e=a,f=c[d],h=f.split(/[.\/]/);for(var j=0;j<h.length-1;++j)e[h[j]]===b&&(e[h[j]]={}),e=e[h[j]];e[h[h.length-1]]=g[f]}if(a.AMDLC_TESTS){i=a.privateModules||{};for(f in g)i[f]=g[f];for(d=0;d<c.length;d++)delete i[c[d]];a.privateModules=i}}var g={};d("tinymce/pasteplugin/Utils",["tinymce/util/Tools","tinymce/html/DomParser","tinymce/html/Schema"],function(a,b,c){function d(b,c){return a.each(c,function(a){b=a.constructor==RegExp?b.replace(a,""):b.replace(a[0],a[1])}),b}function e(e){function f(a){var b=a.name,c=a;if("br"===b)return void(i+="\n");if(j[b]&&(i+=" "),k[b])return void(i+=" ");if(3==a.type&&(i+=a.value),!a.shortEnded&&(a=a.firstChild))do f(a);while(a=a.next);l[b]&&c.next&&(i+="\n","p"==b&&(i+="\n"))}var g=new c,h=new b({},g),i="",j=g.getShortEndedElements(),k=a.makeMap("script noscript style textarea video audio iframe object"," "),l=g.getBlockElements();return e=d(e,[/<!\[[^\]]+\]>/g]),f(h.parse(e)),i}function f(a){function b(a,b,c){return b||c?"\xa0":" "}return a=d(a,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/g,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,b],/<br class="Apple-interchange-newline">/g,/<br>$/i])}function g(a){var b=0;return function(){return a+b++}}return{filter:d,innerText:e,trimHtml:f,createIdGenerator:g}}),d("tinymce/pasteplugin/Clipboard",["tinymce/Env","tinymce/dom/RangeUtils","tinymce/util/VK","tinymce/pasteplugin/Utils","tinymce/util/Delay"],function(a,b,c,d,e){return function(f){function g(a){var b,c=f.dom;if(b=f.fire("BeforePastePreProcess",{content:a}),b=f.fire("PastePreProcess",b),a=b.content,!b.isDefaultPrevented()){if(f.hasEventListeners("PastePostProcess")&&!b.isDefaultPrevented()){var d=c.add(f.getBody(),"div",{style:"display:none"},a);b=f.fire("PastePostProcess",{node:d}),c.remove(d),a=b.node.innerHTML}b.isDefaultPrevented()||f.insertContent(a,{merge:f.settings.paste_merge_formats!==!1,data:{paste:!0}})}}function h(a){a=f.dom.encode(a).replace(/\r\n/g,"\n");var b,c=f.dom.getParent(f.selection.getStart(),f.dom.isBlock),e=f.settings.forced_root_block;e&&(b=f.dom.createHTML(e,f.settings.forced_root_block_attrs),b=b.substr(0,b.length-3)+">"),c&&/^(PRE|DIV)$/.test(c.nodeName)||!e?a=d.filter(a,[[/\n/g,"<br>"]]):(a=d.filter(a,[[/\n\n/g,"</p>"+b],[/^(.*<\/p>)(<p>)$/,b+"$1"],[/\n/g,"<br />"]]),-1!=a.indexOf("<p>")&&(a=b+a)),g(a)}function i(){function b(a){var b,c,e,f=a.startContainer;if(b=a.getClientRects(),b.length)return b[0];if(a.collapsed&&1==f.nodeType){for(e=f.childNodes[v.startOffset];e&&3==e.nodeType&&!e.data.length;)e=e.nextSibling;if(e)return"BR"==e.tagName&&(c=d.doc.createTextNode("\ufeff"),e.parentNode.insertBefore(c,e),a=d.createRng(),a.setStartBefore(c),a.setEndAfter(c),b=a.getClientRects(),d.remove(c)),b.length?b[0]:void 0}}var c,d=f.dom,e=f.getBody(),g=f.dom.getViewPort(f.getWin()),h=g.y,i=20;if(v=f.selection.getRng(),f.inline&&(c=f.selection.getScrollContainer(),c&&c.scrollTop>0&&(h=c.scrollTop)),v.getClientRects){var j=b(v);if(j)i=h+(j.top-d.getPos(e).y);else{i=h;var k=v.startContainer;k&&(3==k.nodeType&&k.parentNode!=e&&(k=k.parentNode),1==k.nodeType&&(i=d.getPos(k,c||e).y))}}u=d.add(f.getBody(),"div",{id:"mcepastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: absolute; top: "+i+"px;width: 10px; height: 10px; overflow: hidden; opacity: 0"},A),(a.ie||a.gecko)&&d.setStyle(u,"left","rtl"==d.getStyle(e,"direction",!0)?65535:-65535),d.bind(u,"beforedeactivate focusin focusout",function(a){a.stopPropagation()}),u.focus(),f.selection.select(u,!0)}function j(){if(u){for(var a;a=f.dom.get("mcepastebin");)f.dom.remove(a),f.dom.unbind(a);v&&f.selection.setRng(v)}u=v=null}function k(){var a,b,c,d,e="";for(a=f.dom.select("div[id=mcepastebin]"),b=0;b<a.length;b++)c=a[b],c.firstChild&&"mcepastebin"==c.firstChild.id&&(c=c.firstChild),d=c.innerHTML,e!=A&&(e+=d);return e}function l(a){var b={};if(a){if(a.getData){var c=a.getData("Text");c&&c.length>0&&-1==c.indexOf(B)&&(b["text/plain"]=c)}if(a.types)for(var d=0;d<a.types.length;d++){var e=a.types[d];b[e]=a.getData(e)}}return b}function m(a){return l(a.clipboardData||f.getDoc().dataTransfer)}function n(a){return r(a,"text/html")||r(a,"text/plain")}function o(a,b){function c(a){var b;return b=a.indexOf(","),-1!==b?a.substr(b+1):null}function d(d){function e(a,d){b&&(f.selection.setRng(b),b=null);var e=f.editorUpload.blobCache,h=e.create(C(),d,c(a.result));e.add(h),g('<img src="'+h.blobUri()+'">')}var h,i,j,k=!1;if(d)for(h=0;h<d.length;h++)if(i=d[h],/^image\/(jpeg|png|gif|bmp)$/.test(i.type)){var l=i.getAsFile?i.getAsFile():i;j=new FileReader,j.onload=e.bind(null,j,l),j.readAsDataURL(l),a.preventDefault(),k=!0}return k}var e=a.clipboardData||a.dataTransfer;return f.settings.paste_data_images&&e?d(e.items)||d(e.files):void 0}function p(a){var b=a.clipboardData;return-1!=navigator.userAgent.indexOf("Android")&&b&&b.items&&0===b.items.length}function q(a){return b.getCaretRangeFromPoint(a.clientX,a.clientY,f.getDoc())}function r(a,b){return b in a&&a[b].length>0}function s(a){return c.metaKeyPressed(a)&&86==a.keyCode||a.shiftKey&&45==a.keyCode}function t(){function b(a,b,c){var e;return r(a,"text/html")?e=a["text/html"]:(e=k(),e==A&&(c=!0)),e=d.trimHtml(e),u&&u.firstChild&&"mcepastebin"===u.firstChild.id&&(c=!0),j(),e.length||(c=!0),c&&(e=r(a,"text/plain")&&-1==e.indexOf("</p>")?a["text/plain"]:d.innerText(e)),e==A?void(b||f.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents.")):void(c?h(e):g(e))}f.on("keydown",function(b){function c(a){s(a)&&!a.isDefaultPrevented()&&j()}if(s(b)&&!b.isDefaultPrevented()){if(w=b.shiftKey&&86==b.keyCode,w&&a.webkit&&-1!=navigator.userAgent.indexOf("Version/"))return;if(b.stopImmediatePropagation(),y=(new Date).getTime(),a.ie&&w)return b.preventDefault(),void f.fire("paste",{ieFake:!0});j(),i(),f.once("keyup",c),f.once("paste",function(){f.off("keyup",c)})}});var c=function(){return v||f.selection.getRng()};f.on("paste",function(d){var g=(new Date).getTime(),h=m(d),l=(new Date).getTime()-g,q=(new Date).getTime()-y-l<1e3,s="text"==x.pasteFormat||w;return w=!1,d.isDefaultPrevented()||p(d)?void j():!n(h)&&o(d,c())?void j():(q||d.preventDefault(),!a.ie||q&&!d.ieFake||(i(),f.dom.bind(u,"paste",function(a){a.stopPropagation()}),f.getDoc().execCommand("Paste",!1,null),h["text/html"]=k()),void(r(h,"text/html")?(d.preventDefault(),b(h,q,s)):e.setEditorTimeout(f,function(){b(h,q,s)},0)))}),f.on("dragstart dragend",function(a){z="dragstart"==a.type}),f.on("drop",function(a){var b,c;if(c=q(a),!a.isDefaultPrevented()&&!z&&(b=l(a.dataTransfer),(n(b)||!o(a,c))&&c&&f.settings.paste_filter_drop!==!1)){var e=b["mce-internal"]||b["text/html"]||b["text/plain"];e&&(a.preventDefault(),f.undoManager.transact(function(){b["mce-internal"]&&f.execCommand("Delete"),f.selection.setRng(c),e=d.trimHtml(e),b["text/html"]?g(e):h(e)}))}}),f.on("dragover dragend",function(a){f.settings.paste_data_images&&a.preventDefault()})}var u,v,w,x=this,y=0,z=!1,A="%MCEPASTEBIN%",B="data:text/mce-internal,",C=d.createIdGenerator("mceclip");x.pasteHtml=g,x.pasteText=h,f.on("preInit",function(){t(),f.parser.addNodeFilter("img",function(b,c,d){function e(a){return a.data&&a.data.paste===!0}function g(b){b.attr("data-mce-object")||k===a.transparentSrc||b.remove()}function h(a){return 0===a.indexOf("webkit-fake-url")}function i(a){return 0===a.indexOf("data:")}if(!f.settings.paste_data_images&&e(d))for(var j=b.length;j--;){var k=b[j].attributes.map.src;k&&(h(k)?g(b[j]):!f.settings.allow_html_data_urls&&i(k)&&g(b[j]))}})})}}),d("tinymce/pasteplugin/WordFilter",["tinymce/util/Tools","tinymce/html/DomParser","tinymce/html/Schema","tinymce/html/Serializer","tinymce/html/Node","tinymce/pasteplugin/Utils"],function(a,b,c,d,e,f){function g(a){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(a)||/class="OutlineElement/.test(a)||/id="?docs\-internal\-guid\-/.test(a)}function h(b){var c,d;return d=[/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],b=b.replace(/^[\u00a0 ]+/,""),a.each(d,function(a){return a.test(b)?(c=!0,!1):void 0}),c}function i(a){return/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(a)}function j(j){var k=j.settings;j.on("BeforePastePreProcess",function(l){function m(a){function b(a){var c="";if(3===a.type)return a.value;if(a=a.firstChild)do c+=b(a);while(a=a.next);return c}function c(a,b){if(3===a.type&&b.test(a.value))return a.value=a.value.replace(b,""),!1;if(a=a.firstChild)do if(!c(a,b))return!1;while(a=a.next);return!0}function d(a){if(a._listIgnore)return void a.remove();if(a=a.firstChild)do d(a);while(a=a.next)}function f(a,b,f){var h=a._listLevel||k;h!=k&&(k>h?g&&(g=g.parent.parent):(j=g,g=null)),g&&g.name==b?g.append(a):(j=j||g,g=new e(b,1),f>1&&g.attr("start",""+f),a.wrap(g)),a.name="li",h>k&&j&&j.lastChild.append(g),k=h,d(a),c(a,/^\u00a0+/),c(a,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),c(a,/^\u00a0+/)}for(var g,j,k=1,l=[],m=a.firstChild;"undefined"!=typeof m&&null!==m;)if(l.push(m),m=m.walk(),null!==m)for(;"undefined"!=typeof m&&m.parent!==a;)m=m.walk();for(var n=0;n<l.length;n++)if(a=l[n],"p"==a.name&&a.firstChild){var o=b(a);if(i(o)){f(a,"ul");continue}if(h(o)){var p=/([0-9]+)\./.exec(o),q=1;p&&(q=parseInt(p[1],10)),f(a,"ol",q);continue}if(a._listLevel){f(a,"ul",1);continue}g=null}else j=g,g=null}function n(b,c){var d,f={},g=j.dom.parseStyle(c);return a.each(g,function(a,e){switch(e){case"mso-list":d=/\w+ \w+([0-9]+)/i.exec(c),d&&(b._listLevel=parseInt(d[1],10)),/Ignore/i.test(a)&&b.firstChild&&(b._listIgnore=!0,b.firstChild._listIgnore=!0);break;case"horiz-align":e="text-align";break;case"vert-align":e="vertical-align";break;case"font-color":case"mso-foreground":e="color";break;case"mso-background":case"mso-highlight":e="background";break;case"font-weight":case"font-style":return void("normal"!=a&&(f[e]=a));case"mso-element":if(/^(comment|comment-list)$/i.test(a))return void b.remove()}return 0===e.indexOf("mso-comment")?void b.remove():void(0!==e.indexOf("mso-")&&("all"==o||p&&p[e])&&(f[e]=a))}),/(bold)/i.test(f["font-weight"])&&(delete f["font-weight"],b.wrap(new e("b",1))),/(italic)/i.test(f["font-style"])&&(delete f["font-style"],b.wrap(new e("i",1))),f=j.dom.serializeStyle(f,b.name),f?f:null}var o,p,q=l.content;if(q=q.replace(/<b[^>]+id="?docs-internal-[^>]*>/gi,""),q=q.replace(/<br class="?Apple-interchange-newline"?>/gi,""),o=k.paste_retain_style_properties,o&&(p=a.makeMap(o.split(/[, ]/))),k.paste_enable_default_filters!==!1&&g(l.content)){l.wordContent=!0,q=f.filter(q,[/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,"\xa0"],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(a,b){return b.length>0?b.replace(/./," ").slice(Math.floor(b.length/2)).split("").join("\xa0"):""}]]);var r=k.paste_word_valid_elements;r||(r="-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody");var s=new c({valid_elements:r,valid_children:"-li[p]"});a.each(s.elements,function(a){a.attributes["class"]||(a.attributes["class"]={},a.attributesOrder.push("class")),a.attributes.style||(a.attributes.style={},a.attributesOrder.push("style"))});var t=new b({},s);t.addAttributeFilter("style",function(a){for(var b,c=a.length;c--;)b=a[c],b.attr("style",n(b,b.attr("style"))),"span"==b.name&&b.parent&&!b.attributes.length&&b.unwrap()}),t.addAttributeFilter("class",function(a){for(var b,c,d=a.length;d--;)b=a[d],c=b.attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(c)&&b.remove(),b.attr("class",null)}),t.addNodeFilter("del",function(a){for(var b=a.length;b--;)a[b].remove()}),t.addNodeFilter("a",function(a){for(var b,c,d,e=a.length;e--;)if(b=a[e],c=b.attr("href"),d=b.attr("name"),c&&-1!=c.indexOf("#_msocom_"))b.remove();else if(c&&0===c.indexOf("file://")&&(c=c.split("#")[1],c&&(c="#"+c)),c||d){if(d&&!/^_?(?:toc|edn|ftn)/i.test(d)){b.unwrap();continue}b.attr({href:c,name:d})}else b.unwrap()});var u=t.parse(q);k.paste_convert_word_fake_lists!==!1&&m(u),l.content=new d({validate:k.validate},s).serialize(u)}})}return j.isWordContent=g,j}),d("tinymce/pasteplugin/Quirks",["tinymce/Env","tinymce/util/Tools","tinymce/pasteplugin/WordFilter","tinymce/pasteplugin/Utils"],function(a,b,c,d){return function(e){function f(a){e.on("BeforePastePreProcess",function(b){b.content=a(b.content)})}function g(a){if(!c.isWordContent(a))return a;var f=[];b.each(e.schema.getBlockElements(),function(a,b){f.push(b)});var g=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+f.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g");return a=d.filter(a,[[g,"$1"]]),a=d.filter(a,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function h(a){if(c.isWordContent(a))return a;var b=e.settings.paste_webkit_styles;if(e.settings.paste_remove_styles_if_webkit===!1||"all"==b)return a;if(b&&(b=b.split(/[, ]/)),b){var d=e.dom,f=e.selection.getNode();a=a.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,function(a,c,e,g){var h=d.parseStyle(e,"span"),i={};if("none"===b)return c+g;for(var j=0;j<b.length;j++){var k=h[b[j]],l=d.getStyle(f,b[j],!0);/color/.test(b[j])&&(k=d.toHex(k),l=d.toHex(l)),l!=k&&(i[b[j]]=k)}return i=d.serializeStyle(i,"span"),i?c+' style="'+i+'"'+g:c+g})}else a=a.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3");return a=a.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,function(a,b,c,d){return b+' style="'+c+'"'+d})}a.webkit&&f(h),a.ie&&f(g)}}),d("tinymce/pasteplugin/Plugin",["tinymce/PluginManager","tinymce/pasteplugin/Clipboard","tinymce/pasteplugin/WordFilter","tinymce/pasteplugin/Quirks"],function(a,b,c,d){var e;a.add("paste",function(a){function f(){return e||a.settings.paste_plaintext_inform===!1}function g(){if("text"==h.pasteFormat)this.active(!1),h.pasteFormat="html",a.fire("PastePlainTextToggle",{state:!1});else if(h.pasteFormat="text",this.active(!0),!f()){var b=a.translate("Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.");a.notificationManager.open({text:b,type:"info"}),e=!0,a.fire("PastePlainTextToggle",{state:!0})}a.focus()}var h,i=this,j=a.settings;i.clipboard=h=new b(a),i.quirks=new d(a),i.wordFilter=new c(a),a.settings.paste_as_text&&(i.clipboard.pasteFormat="text"),j.paste_preprocess&&a.on("PastePreProcess",function(a){j.paste_preprocess.call(i,i,a)}),j.paste_postprocess&&a.on("PastePostProcess",function(a){j.paste_postprocess.call(i,i,a)}),a.addCommand("mceInsertClipboardContent",function(a,b){b.content&&i.clipboard.pasteHtml(b.content),b.text&&i.clipboard.pasteText(b.text)}),a.paste_block_drop&&a.on("dragend dragover draggesture dragdrop drop drag",function(a){a.preventDefault(),a.stopPropagation()}),a.settings.paste_data_images||a.on("drop",function(a){var b=a.dataTransfer;b&&b.files&&b.files.length>0&&a.preventDefault()}),a.addButton("pastetext",{icon:"pastetext",tooltip:"Paste as text",onclick:g,active:"text"==i.clipboard.pasteFormat}),a.addMenuItem("pastetext",{text:"Paste as text",selectable:!0,active:h.pasteFormat,onclick:g})})}),f(["tinymce/pasteplugin/Utils"])}(this);