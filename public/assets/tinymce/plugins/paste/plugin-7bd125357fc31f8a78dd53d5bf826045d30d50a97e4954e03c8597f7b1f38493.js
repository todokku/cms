!function(){var e={},t=function(t){for(var n=e[t],i=n.deps,o=n.defn,a=i.length,s=new Array(a),u=0;u<a;++u)s[u]=r(i[u]);var l=o.apply(null,s);if(void 0===l)throw"module ["+t+"] returned undefined";n.instance=l},n=function(t,n,r){if("string"!=typeof t)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+t;if(void 0===r)throw"no definition function for "+t;e[t]={deps:n,defn:r,instance:void 0}},r=function(n){var r=e[n];if(void 0===r)throw"module ["+n+"] was undefined";return void 0===r.instance&&t(n),r.instance},i=function(e,t){for(var n=e.length,i=new Array(n),o=0;o<n;++o)i[o]=r(e[o]);t.apply(null,i)};({}).bolt={module:{api:{define:n,require:i,demand:r}}};var o=n,a=function(e,t){o(e,[],function(){return t})};o("1",[],function(){var e=function(t){var n=t,r=function(){return n};return{get:r,set:function(e){n=e},clone:function(){return e(r())}}};return e}),a("c",tinymce.util.Tools.resolve),o("2",["c"],function(e){return e("tinymce.PluginManager")}),a("d",window),o("3",["d","2"],function(e,t){return{hasProPlugin:function(n){return!(!/(^|[ ,])powerpaste([, ]|$)/.test(n.settings.plugins)||!t.get("powerpaste")||("undefined"!=typeof e.console&&e.console.log&&e.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),0))}}}),o("4",[],function(){return{get:function(e,t){return{clipboard:e,quirks:t}}}}),o("l",[],function(){return{firePastePreProcess:function(e,t,n,r){return e.fire("PastePreProcess",{content:t,internal:n,wordContent:r})},firePastePostProcess:function(e,t,n,r){return e.fire("PastePostProcess",{node:t,internal:n,wordContent:r})},firePastePlainTextToggle:function(e,t){return e.fire("PastePlainTextToggle",{state:t})},firePaste:function(e,t){return e.fire("paste",{ieFake:t})}}}),o("m",[],function(){return{shouldPlainTextInform:function(e){return e.getParam("paste_plaintext_inform",!0)},shouldBlockDrop:function(e){return e.getParam("paste_block_drop",!1)},shouldPasteDataImages:function(e){return e.getParam("paste_data_images",!1)},shouldFilterDrop:function(e){return e.getParam("paste_filter_drop",!0)},getPreProcess:function(e){return e.getParam("paste_preprocess")},getPostProcess:function(e){return e.getParam("paste_postprocess")},getWebkitStyles:function(e){return e.getParam("paste_webkit_styles")},shouldRemoveWebKitStyles:function(e){return e.getParam("paste_remove_styles_if_webkit",!0)},shouldMergeFormats:function(e){return e.getParam("paste_merge_formats",!0)},isSmartPasteEnabled:function(e){return e.getParam("smart_paste",!0)},isPasteAsTextEnabled:function(e){return e.getParam("paste_as_text",!1)},getRetainStyleProps:function(e){return e.getParam("paste_retain_style_properties")},getWordValidElements:function(e){return e.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody")},shouldConvertWordFakeLists:function(e){return e.getParam("paste_convert_word_fake_lists",!0)},shouldUseDefaultFilters:function(e){return e.getParam("paste_enable_default_filters",!0)}}}),o("e",["l","m"],function(e,t){var n=function(e,n){return!1===n.get()&&t.shouldPlainTextInform(e)},r=function(e,t){e.notificationManager.open({text:e.translate(t),type:"info"})};return{togglePlainTextPaste:function(t,i,o){"text"===i.pasteFormat?(i.pasteFormat="html",e.firePastePlainTextToggle(t,!1)):(i.pasteFormat="text",e.firePastePlainTextToggle(t,!0),n(t,o)&&(r(t,"Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off."),o.set(!0))),t.focus()}}}),o("5",["e"],function(e){return{register:function(t,n,r){t.addCommand("mceTogglePlainTextPaste",function(){e.togglePlainTextPaste(t,n,r)}),t.addCommand("mceInsertClipboardContent",function(e,t){t.content&&n.pasteHtml(t.content,t.internal),t.text&&n.pasteText(t.text)})}}}),a("f",Image),a("g",navigator),o("h",["c"],function(e){return e("tinymce.Env")}),o("i",["c"],function(e){return e("tinymce.util.Delay")}),o("j",["c"],function(e){return e("tinymce.util.Tools")}),o("k",["c"],function(e){return e("tinymce.util.VK")}),o("n",[],function(){var e="x-tinymce/html",t="<!-- "+e+" -->";return{mark:function(e){return t+e},unmark:function(e){return e.replace(t,"")},isMarked:function(e){return-1!==e.indexOf(t)},internalHtmlMime:function(){return e}}}),o("x",["c"],function(e){return e("tinymce.html.Entities")}),o("o",["j","x"],function(e,t){var n=function(e){return!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(e)},r=function(e){return e.replace(/\r?\n/g,"<br>")},i=function(e,n){var r,i=[],o="<"+e;if("object"==typeof n){for(r in n)n.hasOwnProperty(r)&&i.push(r+'="'+t.encodeAllRaw(n[r])+'"');i.length&&(o+=" "+i.join(" "))}return o+">"},o=function(t,n,r){var o=t.split(/\n\n/),a=i(n,r),s="</"+n+">",u=e.map(o,function(e){return e.split(/\n/).join("<br />")}),l=function(e){return a+e+s};return 1===u.length?u[0]:e.map(u,l).join("")};return{isPlainText:n,convert:function(e,t,n){return t?o(e,t,n):r(e)},toBRs:r,toBlockElements:o}}),o("p",["j","h"],function(e,t){return function(n){var r,i="%MCEPASTEBIN%",o=function(){function e(e){var t,n,i,o=e.startContainer;if(t=e.getClientRects(),t.length)return t[0];if(e.collapsed&&1===o.nodeType){for(i=o.childNodes[r.startOffset];i&&3===i.nodeType&&!i.data.length;)i=i.nextSibling;if(i)return"BR"===i.tagName&&(n=s.doc.createTextNode("\ufeff"),i.parentNode.insertBefore(n,i),e=s.createRng(),e.setStartBefore(n),e.setEndAfter(n),t=e.getClientRects(),s.remove(n)),t.length?t[0]:void 0}}var o,a,s=n.dom,u=n.getBody(),l=n.dom.getViewPort(n.getWin()),c=l.y,f=20;if(r=n.selection.getRng(),n.inline&&(a=n.selection.getScrollContainer())&&a.scrollTop>0&&(c=a.scrollTop),r.getClientRects){var d=e(r);if(d)f=c+(d.top-s.getPos(u).y);else{f=c;var m=r.startContainer;m&&(3===m.nodeType&&m.parentNode!==u&&(m=m.parentNode),1===m.nodeType&&(f=s.getPos(m,a||u).y))}}o=n.dom.add(n.getBody(),"div",{id:"mcepastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: absolute; top: "+f+"px; width: 10px; height: 10px; overflow: hidden; opacity: 0"},i),(t.ie||t.gecko)&&s.setStyle(o,"left","rtl"===s.getStyle(u,"direction",!0)?65535:-65535),s.bind(o,"beforedeactivate focusin focusout",function(e){e.stopPropagation()}),o.focus(),n.selection.select(o,!0)},a=function(){if(s()){for(var e;e=n.dom.get("mcepastebin");)n.dom.remove(e),n.dom.unbind(e);r&&n.selection.setRng(r)}r=null},s=function(){return n.dom.get("mcepastebin")},u=function(){var t,r,i,o,a,s=function(e,t){e.appendChild(t),n.dom.remove(t,!0)};for(r=e.grep(n.getBody().childNodes,function(e){return"mcepastebin"===e.id}),t=r.shift(),e.each(r,function(e){s(t,e)}),o=n.dom.select("div[id=mcepastebin]",t),i=o.length-1;i>=0;i--)a=n.dom.create("div"),t.insertBefore(a,o[i]),s(a,o[i]);return t?t.innerHTML:""},l=function(){return r},c=function(e){return e===i},f=function(e){return e&&"mcepastebin"===e.id};return{create:o,remove:a,getEl:s,getHtml:u,getLastRng:l,isDefault:function(){var e=s();return f(e)&&c(e.innerHTML)},isDefaultContent:c}}}),o("y",["c"],function(e){return e("tinymce.html.DomParser")}),o("z",["c"],function(e){return e("tinymce.html.Node")}),o("10",["c"],function(e){return e("tinymce.html.Schema")}),o("11",["c"],function(e){return e("tinymce.html.Serializer")}),o("s",["g","y","10","j"],function(e,t,n,r){function i(e,t){return r.each(t,function(t){e=t.constructor===RegExp?e.replace(t,""):e.replace(t[0],t[1])}),e}function o(e){function o(e){var t=e.name,n=e;if("br"===t)return void(u+="\n");if(l[t]&&(u+=" "),c[t])return void(u+=" ");if(3===e.type&&(u+=e.value),!e.shortEnded&&(e=e.firstChild))do{o(e)}while(e=e.next);f[t]&&n.next&&(u+="\n","p"===t&&(u+="\n"))}var a=new n,s=new t({},a),u="",l=a.getShortEndedElements(),c=r.makeMap("script noscript style textarea video audio iframe object"," "),f=a.getBlockElements();return e=i(e,[/<!\[[^\]]+\]>/g]),o(s.parse(e)),u}function a(e){function t(e,t,n){return t||n?"\xa0":" "}return e=i(e,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,t],/<br class="Apple-interchange-newline">/g,/<br>$/i])}function s(e){var t=0;return function(){return e+t++}}return{filter:i,innerText:o,trimHtml:a,createIdGenerator:s,isMsEdge:function(){return-1!==e.userAgent.indexOf(" Edge/")}}}),o("v",["y","z","10","11","j","m","s"],function(e,t,n,r,i,o,a){function s(e){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(e)||/class="OutlineElement/.test(e)||/id="?docs\-internal\-guid\-/.test(e)}function u(e){var t,n;return n=[/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],e=e.replace(/^[\u00a0 ]+/,""),i.each(n,function(n){if(n.test(e))return t=!0,!1}),t}function l(e){return/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(e)}function c(e){function n(e){var t="";if(3===e.type)return e.value;if(e=e.firstChild)do{t+=n(e)}while(e=e.next);return t}function r(e,t){if(3===e.type&&t.test(e.value))return e.value=e.value.replace(t,""),!1;if(e=e.firstChild)do{if(!r(e,t))return!1}while(e=e.next);return!0}function i(e){if(e._listIgnore)return void e.remove();if(e=e.firstChild)do{i(e)}while(e=e.next)}function o(e,n,o){var u=e._listLevel||c;u!==c&&(u<c?a&&(a=a.parent.parent):(s=a,a=null)),a&&a.name===n?a.append(e):(s=s||a,a=new t(n,1),o>1&&a.attr("start",""+o),e.wrap(a)),e.name="li",u>c&&s&&s.lastChild.append(a),c=u,i(e),r(e,/^\u00a0+/),r(e,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),r(e,/^\u00a0+/)}for(var a,s,c=1,f=[],d=e.firstChild;void 0!==d&&null!==d;)if(f.push(d),null!==(d=d.walk()))for(;void 0!==d&&d.parent!==e;)d=d.walk();for(var m=0;m<f.length;m++)if(e=f[m],"p"===e.name&&e.firstChild){var p=n(e);if(l(p)){o(e,"ul");continue}if(u(p)){var g=/([0-9]+)\./.exec(p),v=1;g&&(v=parseInt(g[1],10)),o(e,"ol",v);continue}if(e._listLevel){o(e,"ul",1);continue}a=null}else s=a,a=null}function f(e,n,r,a){var s,u={},l=e.dom.parseStyle(a);return i.each(l,function(t,i){switch(i){case"mso-list":s=/\w+ \w+([0-9]+)/i.exec(a),s&&(r._listLevel=parseInt(s[1],10)),/Ignore/i.test(t)&&r.firstChild&&(r._listIgnore=!0,r.firstChild._listIgnore=!0);break;case"horiz-align":i="text-align";break;case"vert-align":i="vertical-align";break;case"font-color":case"mso-foreground":i="color";break;case"mso-background":case"mso-highlight":i="background";break;case"font-weight":case"font-style":return void("normal"!==t&&(u[i]=t));case"mso-element":if(/^(comment|comment-list)$/i.test(t))return void r.remove()}return 0===i.indexOf("mso-comment")?void r.remove():void(0!==i.indexOf("mso-")&&("all"===o.getRetainStyleProps(e)||n&&n[i])&&(u[i]=t))}),/(bold)/i.test(u["font-weight"])&&(delete u["font-weight"],r.wrap(new t("b",1))),/(italic)/i.test(u["font-style"])&&(delete u["font-style"],r.wrap(new t("i",1))),(u=e.dom.serializeStyle(u,r.name))||null}var d=function(t,s){var u,l;u=o.getRetainStyleProps(t),u&&(l=i.makeMap(u.split(/[, ]/))),s=a.filter(s,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,"\xa0"],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(e,t){return t.length>0?t.replace(/./," ").slice(Math.floor(t.length/2)).split("").join("\xa0"):""}]]);var d=o.getWordValidElements(t),m=new n({valid_elements:d,valid_children:"-li[p]"});i.each(m.elements,function(e){e.attributes["class"]||(e.attributes["class"]={},e.attributesOrder.push("class")),e.attributes.style||(e.attributes.style={},e.attributesOrder.push("style"))});var p=new e({},m);p.addAttributeFilter("style",function(e){for(var n,r=e.length;r--;)n=e[r],n.attr("style",f(t,l,n,n.attr("style"))),"span"===n.name&&n.parent&&!n.attributes.length&&n.unwrap()}),p.addAttributeFilter("class",function(e){for(var t,n,r=e.length;r--;)t=e[r],n=t.attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&t.remove(),t.attr("class",null)}),p.addNodeFilter("del",function(e){for(var t=e.length;t--;)e[t].remove()}),p.addNodeFilter("a",function(e){for(var t,n,r,i=e.length;i--;)if(t=e[i],n=t.attr("href"),r=t.attr("name"),n&&-1!==n.indexOf("#_msocom_"))t.remove();else if(n&&0===n.indexOf("file://")&&(n=n.split("#")[1])&&(n="#"+n),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){t.unwrap();continue}t.attr({href:n,name:r})}else t.unwrap()});var g=p.parse(s);return o.shouldConvertWordFakeLists(t)&&c(g),s=new r({validate:t.settings.validate},m).serialize(g)};return{preProcess:function(e,t){return o.shouldUseDefaultFilters(e)?d(e,t):t},isWordContent:s}}),o("q",["l","v"],function(e,t){var n=function(e,t){return{content:e,cancelled:t}},r=function(t,r,i,o){var a=t.dom.create("div",{style:"display:none"},r),s=e.firePastePostProcess(t,a,i,o);return n(s.node.innerHTML,s.isDefaultPrevented())},i=function(t,i,o,a){var s=e.firePastePreProcess(t,i,o,a);return t.hasEventListeners("PastePostProcess")&&!s.isDefaultPrevented()?r(t,s.content,o,a):n(s.content,s.isDefaultPrevented())};return{process:function(e,n,r){var o=t.isWordContent(n),a=o?t.preProcess(e,n):n;return i(e,a,r,o)}}}),o("r",["j","m"],function(e,t){var n=function(e){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(e)},r=function(e){return n(e)&&/.(gif|jpe?g|png)$/.test(e)},i=function(e,t,n){return e.undoManager.extra(function(){n(e,t)},function(){e.insertContent('<img src="'+t+'">')}),!0},o=function(e,t,n){return e.undoManager.extra(function(){n(e,t)},function(){e.execCommand("mceInsertLink",!1,t)}),!0},a=function(e,t,r){return!(!1!==e.selection.isCollapsed()||!n(t))&&o(e,t,r)},s=function(e,t,n){return!!r(t)&&i(e,t,n)},u=function(e,n){return e.insertContent(n,{merge:t.shouldMergeFormats(e),paste:!0}),!0},l=function(t,n){e.each([a,s,u],function(e){return!0!==e(t,n,u)})};return{isImageUrl:r,isAbsoluteUrl:n,insertContent:function(e,n){!1===t.isSmartPasteEnabled(e)?u(e,n):l(e,n)}}}),o("6",["f","g","d","h","i","j","k","l","m","n","o","p","q","r","s"],function(e,t,n,r,i,o,a,s,u,l,c,f,d,m,p){return function(g){function v(e,t){var n=t||l.isMarked(e),r=d.process(g,l.unmark(e),n);!1===r.cancelled&&m.insertContent(g,r.content)}function h(e){e=g.dom.encode(e).replace(/\r\n/g,"\n"),e=c.convert(e,g.settings.forced_root_block,g.settings.forced_root_block_attrs),v(e,!1)}function P(e){var t={};if(e){if(e.getData){var n=e.getData("Text");n&&n.length>0&&-1===n.indexOf(A)&&(t["text/plain"]=n)}if(e.types)for(var r=0;r<e.types.length;r++){var i=e.types[r];try{t[i]=e.getData(i)}catch(e){t[i]=""}}}return t}function y(e){var t=P(e.clipboardData||g.getDoc().dataTransfer);return p.isMsEdge()?o.extend(t,{"text/html":""}):t}function b(e){return k(e,"text/html")||k(e,"text/plain")}function x(e){var t;return t=e.indexOf(","),-1!==t?e.substr(t+1):null}function w(e,t){return!e.images_dataimg_filter||e.images_dataimg_filter(t)}function C(e){var t=e.match(/([\s\S]+?)\.(?:jpeg|jpg|png|gif)$/i);return t?g.dom.encode(t[1]):null}function _(t,n,r){t&&(g.selection.setRng(t),t=null);var i=n.result,o=x(i),a=O(),s=g.settings.images_reuse_filename&&r.name?C(r.name):a,u=new e;if(u.src=i,w(g.settings,u)){var l,c,f=g.editorUpload.blobCache;c=f.findFirst(function(e){return e.base64()===o}),c?l=c:(l=f.create(a,r,o,s),f.add(l)),v('<img src="'+l.blobUri()+'">',!1)}else v('<img src="'+i+'">',!1)}function T(e,t){function r(r){var i,o,a,s=!1;if(r)for(i=0;i<r.length;i++)if(o=r[i],/^image\/(jpeg|png|gif|bmp)$/.test(o.type)){var u=o.getAsFile?o.getAsFile():o;a=new n.FileReader,a.onload=_.bind(null,t,a,u),a.readAsDataURL(u),e.preventDefault(),s=!0}return s}var i=e.clipboardData||e.dataTransfer;if(g.settings.paste_data_images&&i)return r(i.items)||r(i.files)}function D(e){var n=e.clipboardData;return-1!==t.userAgent.indexOf("Android")&&n&&n.items&&0===n.items.length}function k(e,t){return t in e&&e[t].length>0}function R(e){return a.metaKeyPressed(e)&&86===e.keyCode||e.shiftKey&&45===e.keyCode}function E(){function e(e,t,n,r){var i,o;return k(e,"text/html")?i=e["text/html"]:(i=I.getHtml(),r=r||l.isMarked(i),I.isDefaultContent(i)&&(n=!0)),i=p.trimHtml(i),I.remove(),o=!1===r&&c.isPlainText(i),i.length&&!o||(n=!0),n&&(i=k(e,"text/plain")&&o?e["text/plain"]:p.innerText(i)),I.isDefaultContent(i)?void(t||g.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents.")):void(n?h(i):v(i,r))}g.on("keydown",function(e){function n(e){R(e)&&!e.isDefaultPrevented()&&I.remove()}if(R(e)&&!e.isDefaultPrevented()){if((F=e.shiftKey&&86===e.keyCode)&&r.webkit&&-1!==t.userAgent.indexOf("Version/"))return;if(e.stopImmediatePropagation(),S=(new Date).getTime(),r.ie&&F)return e.preventDefault(),void s.firePaste(g,!0);I.remove(),I.create(),g.once("keyup",n),g.once("paste",function(){g.off("keyup",n)})}});var n=function(){return I.getLastRng()||g.selection.getRng()};g.on("paste",function(t){var o=(new Date).getTime(),a=y(t),s=(new Date).getTime()-o,u=(new Date).getTime()-S-s<1e3,c="text"===M.pasteFormat||F,f=k(a,l.internalHtmlMime());return F=!1,t.isDefaultPrevented()||D(t)?void I.remove():!b(a)&&T(t,n())?void I.remove():(u||t.preventDefault(),!r.ie||u&&!t.ieFake||k(a,"text/html")||(I.create(),g.dom.bind(I.getEl(),"paste",function(e){e.stopPropagation()}),g.getDoc().execCommand("Paste",!1,null),a["text/html"]=I.getHtml()),void(k(a,"text/html")?(t.preventDefault(),f||(f=l.isMarked(a["text/html"])),e(a,u,c,f)):i.setEditorTimeout(g,function(){e(a,u,c,f)},0)))})}var F,M=this,S=0,I=new f(g),A="data:text/mce-internal,",O=p.createIdGenerator("mceclip");M.pasteFormat=u.isPasteAsTextEnabled(g)?"text":"html",M.pasteHtml=v,M.pasteText=h,M.pasteImageData=T,M.getDataTransferItems=P,M.hasHtmlOrText=b,M.hasContentType=k,g.on("preInit",function(){E(),g.parser.addNodeFilter("img",function(e,t,n){function i(e){return e.data&&!0===e.data.paste}function o(e){e.attr("data-mce-object")||l===r.transparentSrc||e.remove()}function a(e){return 0===e.indexOf("webkit-fake-url")}function s(e){return 0===e.indexOf("data:")}if(!g.settings.paste_data_images&&i(n))for(var u=e.length;u--;){var l=e[u].attributes.map.src;l&&(a(l)?o(e[u]):!g.settings.allow_html_data_urls&&s(l)&&o(e[u]))}})})}}),a("t",setTimeout),o("7",["t","h","n","s"],function(e,t,n,r){var i=function(){},o=function(e){return!1===t.iOS&&void 0!==e&&"function"==typeof e.setData&&!0!==r.isMsEdge()},a=function(e,t,r){if(!o(e))return!1;try{return e.clearData(),e.setData("text/html",t),e.setData("text/plain",r),e.setData(n.internalHtmlMime(),t),!0}catch(e){return!1}},s=function(e,t,n,r){a(e.clipboardData,t.html,t.text)?(e.preventDefault(),r()):n(t.html,r)},u=function(t){return function(r,i){var o=n.mark(r),a=t.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),s=t.dom.create("div",{contenteditable:"true"},o);t.dom.setStyles(a,{position:"fixed",left:"-3000px",width:"1000px",overflow:"hidden"}),a.appendChild(s),t.dom.add(t.getBody(),a);var u=t.selection.getRng();s.focus();var l=t.dom.createRng();l.selectNodeContents(s),t.selection.setRng(l),e(function(){a.parentNode.removeChild(a),t.selection.setRng(u),i()},0)}},l=function(e){return{html:e.selection.getContent({contextual:!0}),text:e.selection.getContent({format:"text"})}},c=function(t){return function(n){!1===t.selection.isCollapsed()&&s(n,l(t),u(t),function(){e(function(){t.execCommand("Delete")},0)})}},f=function(e){return function(t){!1===e.selection.isCollapsed()&&s(t,l(e),u(e),i)}};return{register:function(e){e.on("cut",c(e)),e.on("copy",f(e))}}}),o("u",["c"],function(e){return e("tinymce.dom.RangeUtils")}),o("8",["u","i","m","n","s"],function(e,t,n,r,i){var o=function(t,n){return e.getCaretRangeFromPoint(n.clientX,n.clientY,t.getDoc())},a=function(e){var t=e["text/plain"];return!!t&&0===t.indexOf("file://")},s=function(e,t){e.focus(),e.selection.setRng(t)};return{setup:function(e,u,l){n.shouldBlockDrop(e)&&e.on("dragend dragover draggesture dragdrop drop drag",function(e){e.preventDefault(),e.stopPropagation()}),n.shouldPasteDataImages(e)||e.on("drop",function(e){var t=e.dataTransfer;t&&t.files&&t.files.length>0&&e.preventDefault()}),e.on("drop",function(c){var f,d;if(d=o(e,c),!c.isDefaultPrevented()&&!l.get()){f=u.getDataTransferItems(c.dataTransfer);var m=u.hasContentType(f,r.internalHtmlMime());if((u.hasHtmlOrText(f)&&!a(f)||!u.pasteImageData(c,d))&&d&&n.shouldFilterDrop(e)){var p=f["mce-internal"]||f["text/html"]||f["text/plain"];p&&(c.preventDefault(),t.setEditorTimeout(e,function(){e.undoManager.transact(function(){f["mce-internal"]&&e.execCommand("Delete"),s(e,d),p=i.trimHtml(p),f["text/html"]?u.pasteHtml(p,m):u.pasteText(p)})}))}}}),e.on("dragstart",function(){l.set(!0)}),e.on("dragover dragend",function(t){n.shouldPasteDataImages(e)&&!1===l.get()&&(t.preventDefault(),s(e,o(e,t))),"dragend"===t.type&&l.set(!1)})}}}),o("9",["m"],function(e){return{setup:function(t){var n=t.plugins.paste,r=e.getPreProcess(t);r&&t.on("PastePreProcess",function(e){r.call(n,n,e)});var i=e.getPostProcess(t);i&&t.on("PastePostProcess",function(e){i.call(n,n,e)})}}}),o("a",["h","j","m","s","v"],function(e,t,n,r,i){function o(e,t){e.on("PastePreProcess",function(n){n.content=t(e,n.content,n.internal,n.wordContent)})}function a(e,t){e.on("PastePostProcess",function(n){t(e,n.node)})}function s(e,n){if(!i.isWordContent(n))return n;var o=[];t.each(e.schema.getBlockElements(),function(e,t){o.push(t)});var a=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+o.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g");return n=r.filter(n,[[a,"$1"]]),n=r.filter(n,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function u(e,t,r,i){if(i||r)return t;var o=n.getWebkitStyles(e);if(!1===n.shouldRemoveWebKitStyles(e)||"all"===o)return t;if(o&&(o=o.split(/[, ]/)),o){var a=e.dom,s=e.selection.getNode();t=t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,function(e,t,n,r){var i=a.parseStyle(a.decode(n),"span"),u={};if("none"===o)return t+r;for(var l=0;l<o.length;l++){var c=i[o[l]],f=a.getStyle(s,o[l],!0);/color/.test(o[l])&&(c=a.toHex(c),f=a.toHex(f)),f!==c&&(u[o[l]]=c)}return u=a.serializeStyle(u,"span"),u?t+' style="'+u+'"'+r:t+r})}else t=t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3");return t=t.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,function(e,t,n,r){return t+' style="'+n+'"'+r})}function l(e,t){e.$("a",t).find("font,u").each(function(t,n){e.dom.remove(n,!0)})}return{setup:function(t){e.webkit&&o(t,u),e.ie&&(o(t,s),a(t,l))}}}),a("12",Array),a("13",Error),o("w",["12","13"],function(e,t){var n=function(){},r=function(e,t){return function(){return e(t.apply(null,arguments))}},i=function(e){return function(){return e}},o=function(e){return e},a=function(e,t){return e===t},s=function(t){for(var n=new e(arguments.length-1),r=1;r<arguments.length;r++)n[r-1]=arguments[r];return function(){for(var r=new e(arguments.length),i=0;i<r.length;i++)r[i]=arguments[i];var o=n.concat(r);return t.apply(null,o)}};return{noop:n,compose:r,constant:i,identity:o,tripleEquals:a,curry:s,not:function(e){return function(){return!e.apply(null,arguments)}},die:function(e){return function(){throw new t(e)}},apply:function(e){return e()},call:function(e){e()},never:i(!1),always:i(!0)}}),o("b",["w"],function(e){var t=function(e,t,n){var r=n.control;r.active("text"===t.pasteFormat),e.on("PastePlainTextToggle",function(e){r.active(e.state)})};return{register:function(n,r){var i=e.curry(t,n,r);n.addButton("pastetext",{icon:"pastetext",tooltip:"Paste as text",cmd:"mceTogglePlainTextPaste",onPostRender:i}),n.addMenuItem("pastetext",{text:"Paste as text",selectable:!0,active:r.pasteFormat,cmd:"mceTogglePlainTextPaste",onPostRender:i})}}}),o("0",["1","2","3","4","5","6","7","8","9","a","b"],function(e,t,n,r,i,o,a,s,u,l,c){var f=e(!1);return t.add("paste",function(t){var d=new o(t),m=l.setup(t),p=e(!1);return!1===n.hasProPlugin(t)&&(c.register(t,d),i.register(t,d,f),u.setup(t),a.register(t),s.setup(t,d,p)),r.get(d,m)}),function(){}}),r("0")()}();