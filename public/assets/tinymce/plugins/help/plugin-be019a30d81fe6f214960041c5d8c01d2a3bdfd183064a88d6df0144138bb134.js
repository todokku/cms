!function(){var n={},t=function(t){for(var e=n[t],o=e.deps,i=e.defn,u=o.length,a=new Array(u),c=0;c<u;++c)a[c]=r(o[c]);var l=i.apply(null,a);if(void 0===l)throw"module ["+t+"] returned undefined";e.instance=l},e=function(t,e,r){if("string"!=typeof t)throw"module id must be a string";if(void 0===e)throw"no dependencies for "+t;if(void 0===r)throw"no definition function for "+t;n[t]={deps:e,defn:r,instance:void 0}},r=function(e){var r=n[e];if(void 0===r)throw"module ["+e+"] was undefined";return void 0===r.instance&&t(e),r.instance},o=function(n,t){for(var e=n.length,o=new Array(e),i=0;i<e;++i)o[i]=r(n[i]);t.apply(null,o)};({}).bolt={module:{api:{define:e,require:o,demand:r}}};var i=e,u=function(n,t){i(n,[],function(){return t})};u("5",tinymce.util.Tools.resolve),i("1",["5"],function(n){return n("tinymce.PluginManager")}),i("6",["5"],function(n){return n("tinymce.EditorManager")}),u("i",Array),u("j",Error),i("d",["i","j"],function(n,t){var e=function(n){return function(){return n}};return{noop:function(){},noarg:function(n){return function(){return n()}},compose:function(n,t){return function(){return n(t.apply(null,arguments))}},constant:e,identity:function(n){return n},tripleEquals:function(n,t){return n===t},curry:function(t){for(var e=new n(arguments.length-1),r=1;r<arguments.length;r++)e[r-1]=arguments[r];return function(){for(var r=new n(arguments.length),o=0;o<r.length;o++)r[o]=arguments[o];var i=e.concat(r);return t.apply(null,i)}},not:function(n){return function(){return!n.apply(null,arguments)}},die:function(n){return function(){throw new t(n)}},apply:function(n){return n()},call:function(n){n()},never:e(!1),always:e(!0)}}),u("m",Object),i("h",["d","m"],function(n,t){var e,r,o,i,u=n.never,a=n.always,c=function(){return l},l=(i={fold:function(n){return n()},is:u,isSome:u,isNone:a,getOr:o=function(n){return n},getOrThunk:r=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},or:o,orThunk:r,map:c,ap:c,each:function(){},bind:c,flatten:c,exists:u,forall:a,filter:c,equals:e=function(n){return n.isNone()},equals_:e,toArray:function(){return[]},toString:n.constant("none()")},t.freeze&&t.freeze(i),i),f=function(n){var t=function(){return n},e=function(){return o},r=function(t){return t(n)},o={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:a,isNone:u,getOr:t,getOrThunk:t,getOrDie:t,or:e,orThunk:e,map:function(t){return f(t(n))},ap:function(t){return t.fold(c,function(t){return f(t(n))})},each:function(t){t(n)},bind:r,flatten:t,exists:r,forall:r,filter:function(t){return t(n)?o:l},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(u,function(t){return e(n,t)})},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return o};return{some:f,none:c,from:function(n){return null===n||void 0===n?l:f(n)}}}),u("k",String),i("a",["h","i","j","k"],function(n,t,e,r){var o,i=void 0===(o=t.prototype.indexOf)?function(n,t){return w(n,t)}:function(n,t){return o.call(n,t)},u=function(t,e){var r=i(t,e);return-1===r?n.none():n.some(r)},a=function(n,t){return i(n,t)>-1},c=function(n,t){return b(n,t).isSome()},l=function(n,t){for(var e=[],r=0;r<n;r++)e.push(t(r));return e},f=function(n,t){for(var e=[],r=0;r<n.length;r+=t){var o=n.slice(r,r+t);e.push(o)}return e},s=function(n,e){for(var r=n.length,o=new t(r),i=0;i<r;i++){var u=n[i];o[i]=e(u,i,n)}return o},d=function(n,t){for(var e=0,r=n.length;e<r;e++){t(n[e],e,n)}},m=function(n,t){for(var e=n.length-1;e>=0;e--){t(n[e],e,n)}},h=function(n,t){for(var e=[],r=[],o=0,i=n.length;o<i;o++){var u=n[o];(t(u,o,n)?e:r).push(u)}return{pass:e,fail:r}},p=function(n,t){for(var e=[],r=0,o=n.length;r<o;r++){var i=n[r];t(i,r,n)&&e.push(i)}return e},g=function(n,t){if(0===n.length)return[];for(var e=t(n[0]),r=[],o=[],i=0,u=n.length;i<u;i++){var a=n[i],c=t(a);c!==e&&(r.push(o),o=[]),e=c,o.push(a)}return 0!==o.length&&r.push(o),r},y=function(n,t,e){return m(n,function(n){e=t(e,n)}),e},v=function(n,t,e){return d(n,function(n){e=t(e,n)}),e},k=function(t,e){for(var r=0,o=t.length;r<o;r++){var i=t[r];if(e(i,r,t))return n.some(i)}return n.none()},b=function(t,e){for(var r=0,o=t.length;r<o;r++){if(e(t[r],r,t))return n.some(r)}return n.none()},w=function(n,t){for(var e=0,r=n.length;e<r;++e)if(n[e]===t)return e;return-1},x=t.prototype.push,T=function(n){for(var r=[],o=0,i=n.length;o<i;++o){if(!t.prototype.isPrototypeOf(n[o]))throw new e("Arr.flatten item "+o+" was not an array, input: "+n);x.apply(r,n[o])}return r},C=function(n,t){var e=s(n,t);return T(e)},S=function(n,t){for(var e=0,r=n.length;e<r;++e){if(!0!==t(n[e],e,n))return!1}return!0},A=function(n,t){return n.length===t.length&&S(n,function(n,e){return n===t[e]})},P=t.prototype.slice;return{map:s,each:d,eachr:m,partition:h,filter:p,groupBy:g,indexOf:u,foldr:y,foldl:v,find:k,findIndex:b,flatten:T,bind:C,forall:S,exists:c,contains:a,equal:A,reverse:function(n){var t=P.call(n,0);return t.reverse(),t},chunk:f,difference:function(n,t){return p(n,function(n){return!a(t,n)})},mapToObject:function(n,t){for(var e={},o=0,i=n.length;o<i;o++){var u=n[o];e[r(u)]=t(u,o)}return e},pure:function(n){return[n]},sort:function(n,t){var e=P.call(n,0);return e.sort(t),e},range:l,head:function(t){return 0===t.length?n.none():n.some(t[0])},last:function(t){return 0===t.length?n.none():n.some(t[t.length-1])}}}),i("b",["5"],function(n){return n("tinymce.util.I18n")}),i("l",["5"],function(n){return n("tinymce.Env")}),i("c",["l"],function(n){var t=n.mac?"\u2318":"Ctrl",e=n.mac?"Ctrl + Alt":"Shift + Alt";return{shortcuts:[{shortcut:t+" + B",action:"Bold"},{shortcut:t+" + I",action:"Italic"},{shortcut:t+" + U",action:"Underline"},{shortcut:t+" + A",action:"Select all"},{shortcut:t+" + Y or "+t+" + Shift + Z",action:"Redo"},{shortcut:t+" + Z",action:"Undo"},{shortcut:e+" + 1",action:"Header 1"},{shortcut:e+" + 2",action:"Header 2"},{shortcut:e+" + 3",action:"Header 3"},{shortcut:e+" + 4",action:"Header 4"},{shortcut:e+" + 5",action:"Header 5"},{shortcut:e+" + 6",action:"Header 6"},{shortcut:e+" + 7",action:"Paragraph"},{shortcut:e+" + 8",action:"Div"},{shortcut:e+" + 9",action:"Address"},{shortcut:"Alt + F9",action:"Focus to menubar"},{shortcut:"Alt + F10",action:"Focus to toolbar"},{shortcut:"Alt + F11",action:"Focus to element path"},{shortcut:"Ctrl + Shift + P > Ctrl + Shift + P",action:"Focus to contextual toolbar"},{shortcut:t+" + K",action:"Insert link (if link plugin activated)"},{shortcut:t+" + S",action:"Save (if save plugin activated)"},{shortcut:t+" + F",action:"Find (if searchreplace plugin activated)"}]}}),i("7",["a","b","c"],function(n,t,e){return{makeTab:function(){var r=function(n){return'aria-label="Action: '+n.action+", Shortcut: "+n.shortcut.replace(/Ctrl/g,"Control")+'"'},o=n.map(e.shortcuts,function(n){return'<tr data-mce-tabstop="1" tabindex="-1" '+r(n)+"><td>"+t.translate(n.action)+"</td><td>"+n.shortcut+"</td></tr>"}).join("");return{title:"Handy Shortcuts",type:"container",style:"overflow-y: auto; overflow-x: hidden; max-height: 250px",items:[{type:"container",html:'<div><table class="mce-table-striped"><thead><th>'+t.translate("Action")+"</th><th>"+t.translate("Shortcut")+"</th></thead>"+o+"</table></div>"}]}}}}),i("e",["h","m"],function(n,t){var e,r=void 0===(e=t.keys)?function(n){var t=[];for(var e in n)n.hasOwnProperty(e)&&t.push(e);return t}:e,o=function(n,t){for(var e=r(n),o=0,i=e.length;o<i;o++){var u=e[o];t(n[u],u,n)}},i=function(n,t){return u(n,function(n,e,r){return{k:e,v:t(n,e,r)}})},u=function(n,t){var e={};return o(n,function(r,o){var i=t(r,o,n);e[i.k]=i.v}),e},a=function(n,t){var e=[];return o(n,function(n,r){e.push(t(n,r))}),e},c=function(n){return a(n,function(n){return n})};return{bifilter:function(n,t){var e={},r={};return o(n,function(n,o){(t(n,o)?e:r)[o]=n}),{t:e,f:r}},each:o,map:i,mapToArray:a,tupleMap:u,find:function(t,e){for(var o=r(t),i=0,u=o.length;i<u;i++){var a=o[i],c=t[a];if(e(c,a,t))return n.some(c)}return n.none()},keys:r,values:c,size:function(n){return c(n).length}}}),i("n",[],function(){return{addToStart:function(n,t){return t+n},addToEnd:function(n,t){return n+t},removeFromStart:function(n,t){return n.substring(t)},removeFromEnd:function(n,t){return n.substring(0,n.length-t)}}}),i("o",["h","j"],function(n){return{first:function(n,t){return n.substr(0,t)},last:function(n,t){return n.substr(n.length-t,n.length)},head:function(t){return""===t?n.none():n.some(t.substr(0,1))},tail:function(t){return""===t?n.none():n.some(t.substring(1))}}}),i("f",["n","o","j"],function(n,t){var e=function(n,t,e){return""===t||!(n.length<t.length)&&n.substr(e,e+t.length)===t},r=function(t,e){return a(t,e)?n.removeFromStart(t,e.length):t},o=function(t,e){return c(t,e)?n.removeFromEnd(t,e.length):t},i=function(t,e){return a(t,e)?t:n.addToStart(t,e)},u=function(t,e){return c(t,e)?t:n.addToEnd(t,e)},a=function(n,t){return e(n,t,0)},c=function(n,t){return e(n,t,n.length-t.length)};return{supplant:function(n,t){var e=function(n){var t=typeof n;return"string"===t||"number"===t};return n.replace(/\${([^{}]*)}/g,function(n,r){var o=t[r];return e(o)?o:n})},startsWith:a,removeLeading:r,removeTrailing:o,ensureLeading:i,ensureTrailing:u,endsWith:c,contains:function(n,t){return-1!==n.indexOf(t)},trim:function(n){return n.replace(/^\s+|\s+$/g,"")},lTrim:function(n){return n.replace(/^\s+/g,"")},rTrim:function(n){return n.replace(/\s+$/g,"")},capitalize:function(n){return t.head(n).bind(function(e){return t.tail(n).map(function(n){return e.toUpperCase()+n})}).getOr(n)}}}),i("g",[],function(){return{urls:[{key:"advlist",name:"Advanced List"},{key:"anchor",name:"Anchor"},{key:"autolink",name:"Autolink"},{key:"autoresize",name:"Autoresize"},{key:"autosave",name:"Autosave"},{key:"bbcode",name:"BBCode"},{key:"charmap",name:"Character Map"},{key:"code",name:"Code"},{key:"codesample",name:"Code Sample"},{key:"colorpicker",name:"Color Picker"},{key:"compat3x",name:"3.x Compatibility"},{key:"contextmenu",name:"Context Menu"},{key:"directionality",name:"Directionality"},{key:"emoticons",name:"Emoticons"},{key:"fullpage",name:"Full Page"},{key:"fullscreen",name:"Full Screen"},{key:"help",name:"Help"},{key:"hr",name:"Horizontal Rule"},{key:"image",name:"Image"},{key:"imagetools",name:"Image Tools"},{key:"importcss",name:"Import CSS"},{key:"insertdatetime",name:"Insert Date/Time"},{key:"legacyoutput",name:"Legacy Output"},{key:"link",name:"Link"},{key:"lists",name:"Lists"},{key:"media",name:"Media"},{key:"nonbreaking",name:"Nonbreaking"},{key:"noneditable",name:"Noneditable"},{key:"pagebreak",name:"Page Break"},{key:"paste",name:"Paste"},{key:"preview",name:"Preview"},{key:"print",name:"Print"},{key:"save",name:"Save"},{key:"searchreplace",name:"Search and Replace"},{key:"spellchecker",name:"Spell Checker"},{key:"tabfocus",name:"Tab Focus"},{key:"table",name:"Table"},{key:"template",name:"Template"},{key:"textcolor",name:"Text Color"},{key:"textpattern",name:"Text Pattern"},{key:"toc",name:"Table of Contents"},{key:"visualblocks",name:"Visual Blocks"},{key:"visualchars",name:"Visual Characters"},{key:"wordcount",name:"Word Count"}]}}),i("8",["a","d","e","f","6","b","g"],function(n,t,e,r,o,i,u){var a=t.curry(r.supplant,'<a href="${url}" target="_blank" rel="noopener">${name}</a>'),c=function(t,e){return n.find(u.urls,function(n){return n.key===e}).fold(function(){var n=t.plugins[e].getMetadata;return"function"==typeof n?a(n()):e},function(n){return a({name:n.name,url:"https://www.tinymce.com/docs/plugins/"+n.key})})},l=function(r){var o=e.keys(r.plugins);return void 0===r.settings.forced_plugins?o:n.filter(o,t.not(t.curry(n.contains,r.settings.forced_plugins)))},f=function(t){var e=l(t),r=n.map(e,function(n){return"<li>"+c(t,n)+"</li>"}),o=r.length,u=r.join("");return"<p><b>"+i.translate(["Plugins installed ({0}):",o])+"</b></p><ul>"+u+"</ul>"},s=function(n){return{type:"container",html:'<div style="overflow-y: auto; overflow-x: hidden; max-height: 230px; height: 230px;" data-mce-tabstop="1" tabindex="-1">'+f(n)+"</div>",flex:1}},d=function(){return{type:"container",html:'<div style="padding: 10px; background: #e3e7f4; height: 100%;" data-mce-tabstop="1" tabindex="-1"><p><b>'+i.translate("Premium plugins:")+'</b></p><ul><li>PowerPaste</li><li>Spell Checker Pro</li><li>Accessibility Checker</li><li>Advanced Code Editor</li><li>Enhanced Media Embed</li><li>Link Checker</li></ul><br /><p style="float: right;"><a href="https://www.tinymce.com/pricing/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" target="_blank">'+i.translate("Learn more...")+"</a></p></div>",flex:1}};return{makeTab:function(n){return{title:"Plugins",type:"container",style:"overflow-y: auto; overflow-x: hidden;",layout:"flex",padding:10,spacing:10,items:[s(n),d()]}}}}),i("9",["6","b"],function(n,t){var e=function(n,t){return 0===n.indexOf("@")?"X.X.X":n+"."+t};return{makeRow:function(){var r='<a href="https://www.tinymce.com/docs/changelog/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" target="_blank">TinyMCE '+e(n.majorVersion,n.minorVersion)+"</a>";return[{type:"label",html:t.translate(["You are using {0}",r])},{type:"spacer",flex:1},{text:"Close",onclick:function(){this.parent().parent().close()}}]}}}),i("4",["6","7","8","9"],function(n,t,e,r){return{open:function(n,o){return function(){n.windowManager.open({title:"Help",bodyType:"tabpanel",layout:"flex",body:[t.makeTab(),e.makeTab(n,o)],buttons:r.makeRow(),onPostRender:function(){this.getEl("title").innerHTML='<img src="'+o+'/img/logo.png" alt="TinyMCE Logo" style="display: inline-block; width: 200px; height: 50px">'}})}}}}),i("2",["4"],function(n){return{register:function(t,e){t.addCommand("mceHelp",n.open(t,e))}}}),i("3",["4"],function(n){return{register:function(t,e){t.addButton("help",{icon:"help",onclick:n.open(t,e)}),t.addMenuItem("Help",{text:"Help",icon:"help",context:"help",onclick:n.open(t,e)})}}}),i("0",["1","2","3","4"],function(n,t,e){return n.add("help",function(n,r){e.register(n,r),t.register(n,r),n.shortcuts.add("Alt+0","Open help dialog","mceHelp")}),function(){}}),r("0")()}();