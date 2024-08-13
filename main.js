(()=>{var e={208:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,":root {\n    --background-color: #57474c;\n    --header-color: #3b3033;\n    --secondary-bg-color: hsl(0, 0%, 100%);\n    --light-text: #FFF;\n    --delete-color: rgb(169, 6, 6);\n}\n\nhtml {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Alata', sans-serif;\n    font-size: 16px;\n}\n\nbody {\n    margin: 0px;\n}\n\n#container {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 80px 1fr 40px;\n    grid-template-columns: 1fr 3fr;\n}\n\nheader {\n    background-color: var(--header-color);\n    color: var(--light-text);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n}\n\nmain {\n    grid-column: 1 / 3;\n    grid-row: 2 / 3;\n    display: flex;\n\n    background-color: var(--background-color);\n    color: var(--light-text);\n}\n\nfooter {\n    background-color: var(--header-color);\n    color: var(--light-text);\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nbutton {\n    padding: 10px 25px;\n    border: 0;\n    border-radius: 5px;\n    background-color: var(--background-color);\n    font-weight: bold;\n    color: #FFF;\n    cursor: pointer;\n}\n\n#projects {\n    flex: 1;\n    background-color: var(--secondary-bg-color);\n    padding: 25px;\n    color: #000;\n}\n\n#project-list {\n    padding-bottom: 25px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project {\n    background-color: var(--background-color);\n    color: var(--secondary-bg-color);\n    font-size: 1.3rem;\n    font-weight: bold;\n    padding: 15px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n\n}\n\n.project.selected {\n    background-color: #0f3f83;\n}\n\n.project button {\n    color: var(--background-color);\n    background-color: var(--secondary-bg-color);\n}\n\n.project-info {\n    display: inline-block;\n}\n\n.project-buttons {\n    display: inline-block;\n    display: flex;\n    gap: 10px;\n}\n\n.project-create-menu {}\n\n.add-project {\n    margin-top: 10px;\n    background-color: var(--header-color);\n}\n\n#project-create-menu {}\n\n#project-create-menu form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#todos {\n    flex: 4;\n    padding: 25px;\n\n}\n\n#todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    padding-bottom: 25px;\n}\n\n.todo {\n    background-color: var(--secondary-bg-color);\n    color: #000;\n    padding: 20px;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    cursor: pointer;\n    transition: max-height 0.5s linear;\n    overflow: hidden;\n}\n\n.todo * {}\n\n.todo-basic {\n    display: flex;\n    justify-content: space-between;\n    gap: 25px;\n\n}\n\n.todo-title {\n    font-weight: bold;\n    font-size: 1.2em;\n}\n\n.todo-info {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    flex: 5;\n}\n\n.todo-details {\n    max-height: 0;\n    transition: max-height 0.5s linear, padding 0.3s ease-in-out;\n    display: flex;\n    justify-content: space-between;\n}\n\n.todo.expanded .todo-details {\n    max-height: 1000px;\n    padding: 10px;\n}\n\n.todo-buttons {\n    display: flex;\n    gap: 20px;\n}\n\nbutton.todo-delete,\nbutton.project-delete {\n    background-color: rgb(169, 6, 6);\n}\n\nbutton.project-delete {\n    color: #FFF;\n}\n\nbutton.add-todo {\n    color: var(--background-color);\n    background-color: var(--secondary-bg-color);\n    ;\n}\n\n.project-create-menu {}\n\n.add-todo {\n    margin-top: 10px;\n}\n\n#todo-create-menu {\n    display: initial;\n    background-color: var(--secondary-bg-color);\n    padding: 25px;\n}\n\n#todo-create-menu form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#todo-create-menu button {\n    background-color: var(--background-color);\n    color: #FFF;\n    width: 100px;\n}\n\n#todo-create {\n    background-color: #FFF;\n    color: var(--background-color);\n}\n\n/* Basic button styling */\n.checkmark-btn {\n    background-color: #4CAF50;\n    /* Green background */\n    border: none;\n    /* Remove borders */\n    color: white;\n    /* White text color */\n    padding: 10px 20px;\n    /* Some padding */\n    text-align: center;\n    /* Center the text */\n    text-decoration: none;\n    /* Remove underline */\n    display: inline-block;\n    /* Make the button inline-block */\n    font-size: 16px;\n    /* Increase font size */\n    margin: 4px 2px;\n    /* Some margin */\n    cursor: pointer;\n    /* Pointer cursor on hover */\n    border-radius: 50%;\n    /* Make the button round */\n    position: relative;\n    /* For positioning the checkmark */\n    width: 50px;\n    /* Fixed width */\n    height: 50px;\n    /* Fixed height */\n}\n\n/* Styling the checkmark */\n.checkmark-btn::before {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 8px;\n    height: 16px;\n    border: solid white;\n    border-width: 0 4px 4px 0;\n    transform: translate(-50%, -50%) rotate(45deg);\n    /* Corrected rotation */\n}\n\n/* Hover effect */\n.checkmark-btn:hover {\n    background-color: #45a049;\n    /* Darker green */\n}\n\n\n/* Styling for unchecked version */\n.unchecked {\n    background-color: #ccc;\n    /* Gray background for unchecked */\n}\n\n/* Ensure the unchecked version has no checkmark */\n.unchecked::before {\n    content: none;\n    /* Remove the checkmark */\n}\n\n/* Hover effect for both states */\n.checkmark-btn:hover {\n    background-color: #45a049;\n    /* Darker green */\n}\n\n.unchecked:hover {\n    background-color: #aaa;\n    /* Darker gray on hover */\n}",""]);const c=i},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var h=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)t[h].references++,t[h].updater(m);else{var p=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:p,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},797:e=>{var t="undefined"!=typeof process&&process.pid?process.pid.toString(36):"";function n(){var e=Date.now(),t=n.last||e;return n.last=e>t?e:t+1}e.exports=e.exports.default=function(e,r){return(e||"")+""+t+n().toString(36)+(r||"")},e.exports.process=function(e,r){return(e||"")+t+n().toString(36)+(r||"")},e.exports.time=function(e,t){return(e||"")+n().toString(36)+(t||"")}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(797),t=n.n(e);const r=class{constructor(e,n,r,o,a,i,c){this.id=null===e?t()():e,this.title=n,this.description=r,this.checked=o,this.dueDate=a,this.priority=i,this.projectId=c}},o=class{constructor(e,n,r){this.id=null===e?t()():e,this.title=n,this.description=r}},a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function i(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const c={date:i({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:i({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:i({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function d(e){return(t,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,o=n?.width?String(n.width):t;r=e.formattingValues[o]||e.formattingValues[t]}else{const t=e.defaultWidth,o=n?.width?String(n.width):e.defaultWidth;r=e.values[o]||e.values[t]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const u={ordinalNumber:(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:d({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:d({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:d({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:d({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:d({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function l(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(o);if(!a)return null;const i=a[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(c)?function(e){for(let t=0;t<e.length;t++)if(e[t].test(i))return t}(c):function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t].test(i))return t}(c);let d;return d=e.valueCallback?e.valueCallback(s):s,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:t.slice(i.length)}}}const h={ordinalNumber:(m={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{const n=e.match(m.matchPattern);if(!n)return null;const r=n[0],o=e.match(m.parsePattern);if(!o)return null;let a=m.valueCallback?m.valueCallback(o[0]):o[0];return a=t.valueCallback?t.valueCallback(a):a,{value:a,rest:e.slice(r.length)}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var m;const p={code:"en-US",formatDistance:(e,t,n)=>{let r;const o=a[e];return r="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:c,formatRelative:(e,t,n,r)=>s[e],localize:u,match:h,options:{weekStartsOn:0,firstWeekContainsDate:1}};let f={};function g(){return f}Math.pow(10,8);const b=6048e5,y=864e5;function v(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}function w(e){const t=v(e);return t.setHours(0,0,0,0),t}function x(e){const t=v(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function k(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function M(e){const t=v(e);return function(e,t){const n=w(e),r=w(t),o=+n-x(n),a=+r-x(r);return Math.round((o-a)/y)}(t,function(e){const t=v(e),n=k(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}(t))+1}function j(e,t){const n=g(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=v(e),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function P(e){return j(e,{weekStartsOn:1})}function T(e){const t=v(e),n=t.getFullYear(),r=k(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=P(r),a=k(e,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const i=P(a);return t.getTime()>=o.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function S(e){const t=v(e),n=+P(t)-+function(e){const t=T(e),n=k(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),P(n)}(t);return Math.round(n/b)+1}function E(e,t){const n=v(e),r=n.getFullYear(),o=g(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=k(e,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const c=j(i,t),s=k(e,0);s.setFullYear(r,0,a),s.setHours(0,0,0,0);const d=j(s,t);return n.getTime()>=c.getTime()?r+1:n.getTime()>=d.getTime()?r:r-1}function C(e,t){const n=v(e),r=+j(n,t)-+function(e,t){const n=g(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=E(e,t),a=k(e,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),j(a,t)}(n,t);return Math.round(r/b)+1}function D(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}const N={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return D("yy"===t?r%100:r,t.length)},M(e,t){const n=e.getMonth();return"M"===t?String(n+1):D(n+1,2)},d:(e,t)=>D(e.getDate(),t.length),a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(e,t)=>D(e.getHours()%12||12,t.length),H:(e,t)=>D(e.getHours(),t.length),m:(e,t)=>D(e.getMinutes(),t.length),s:(e,t)=>D(e.getSeconds(),t.length),S(e,t){const n=t.length,r=e.getMilliseconds();return D(Math.trunc(r*Math.pow(10,n-3)),t.length)}},W={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){const t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:"year"})}return N.y(e,t)},Y:function(e,t,n,r){const o=E(e,r),a=o>0?o:1-o;return"YY"===t?D(a%100,2):"Yo"===t?n.ordinalNumber(a,{unit:"year"}):D(a,t.length)},R:function(e,t){return D(T(e),t.length)},u:function(e,t){return D(e.getFullYear(),t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return D(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return D(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return N.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return D(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=C(e,r);return"wo"===t?n.ordinalNumber(o,{unit:"week"}):D(o,t.length)},I:function(e,t,n){const r=S(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):D(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getDate(),{unit:"date"}):N.d(e,t)},D:function(e,t,n){const r=M(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):D(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return D(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return D(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=0===r?7:r;switch(t){case"i":return String(o);case"ii":return D(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(o=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(o=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return N.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getHours(),{unit:"hour"}):N.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):D(r,t.length)},k:function(e,t,n){let r=e.getHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):D(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):N.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getSeconds(),{unit:"second"}):N.s(e,t)},S:function(e,t){return N.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return q(r);case"XXXX":case"XX":return L(r);default:return L(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return q(r);case"xxxx":case"xx":return L(r);default:return L(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+F(r,":");default:return"GMT"+L(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+F(r,":");default:return"GMT"+L(r,":")}},t:function(e,t,n){return D(Math.trunc(e.getTime()/1e3),t.length)},T:function(e,t,n){return D(e.getTime(),t.length)}};function F(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),a=r%60;return 0===a?n+String(o):n+String(o)+t+D(a,2)}function q(e,t){return e%60==0?(e>0?"-":"+")+D(Math.abs(e)/60,2):L(e,t)}function L(e,t=""){const n=e>0?"-":"+",r=Math.abs(e);return n+D(Math.trunc(r/60),2)+t+D(r%60,2)}const O=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},H=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},Y={p:H,P:(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return O(e,t);let a;switch(r){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;default:a=t.dateTime({width:"full"})}return a.replace("{{date}}",O(r,t)).replace("{{time}}",H(o,t))}},A=/^D+$/,z=/^Y+$/,I=["D","DD","YY","YYYY"];function G(e){if(!(t=e,t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)||"number"==typeof e))return!1;var t;const n=v(e);return!isNaN(Number(n))}const Q=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,B=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,X=/^'([^]*?)'?$/,J=/''/g,$=/[a-zA-Z]/;function R(e,t,n){const r=g(),o=n?.locale??r.locale??p,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=v(e);if(!G(c))throw new RangeError("Invalid time value");let s=t.match(B).map((e=>{const t=e[0];return"p"===t||"P"===t?(0,Y[t])(e,o.formatLong):e})).join("").match(Q).map((e=>{if("''"===e)return{isToken:!1,value:"'"};const t=e[0];if("'"===t)return{isToken:!1,value:U(e)};if(W[t])return{isToken:!0,value:e};if(t.match($))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}}));o.localize.preprocessor&&(s=o.localize.preprocessor(c,s));const d={firstWeekContainsDate:a,weekStartsOn:i,locale:o};return s.map((r=>{if(!r.isToken)return r.value;const a=r.value;return(!n?.useAdditionalWeekYearTokens&&function(e){return z.test(e)}(a)||!n?.useAdditionalDayOfYearTokens&&function(e){return A.test(e)}(a))&&function(e,t,n){const r=function(e,t,n){const r="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,n);if(console.warn(r),I.includes(e))throw new RangeError(r)}(a,t,String(e)),(0,W[a[0]])(c,a,o.localize,d)})).join("")}function U(e){const t=e.match(X);return t?t[1].replace(J,"'"):e}var V=n(72),K=n.n(V),Z=n(825),_=n.n(Z),ee=n(659),te=n.n(ee),ne=n(56),re=n.n(ne),oe=n(540),ae=n.n(oe),ie=n(113),ce=n.n(ie),se=n(208),de={};de.styleTagTransform=ce(),de.setAttributes=re(),de.insert=te().bind(null,"head"),de.domAPI=_(),de.insertStyleElement=ae(),K()(se.A,de),se.A&&se.A.locals&&se.A.locals;const ue=new class{constructor(){this.loadTodos()}getTodos(e){return this.todos.filter((t=>t.projectId==e))}createTodo(e,t,n,o,a){this.todos.push(new r(null,e,t,!1,n,o,a))}updateTodo(e,t,n,r,o,a){const i=this.todos.find((t=>t.id===e));i.title=t,i.description=n,i.date=r,i.priority=o}toggleTodo(e){const t=this.todos[e];t.checked=!t.checked}deleteTodo(e){this.todos=this.todos.filter((t=>t.id!=e)),this.saveTodos()}saveTodos(){try{localStorage.setItem("todos",JSON.stringify(this.todos))}catch(e){console.error("Failed to save todos:",e)}}loadTodos(){const e=JSON.parse(localStorage.getItem("todos"))||[];this.todos=e.map((e=>new r(e.id,e.title,e.description,e.checked,e.dueDate,e.priority,e.projectId)))}},le=new class{constructor(){this.loadProjects(),0===this.projects.length&&(this.createProject("Default","The default project"),this.saveProjects()),this.setCurrentProject(null)}setCurrentProject(e){this.currentProject=null===e?this.projects[0].id:e}getProjects(){return this.projects}createProject(e,t){const n=new o(null,e,t);this.projects.push(n),this.setCurrentProject(n.id)}updateProject(e,t,n){const r=this.projects.find((t=>t.id===e));r.title=t,r.description=n}deleteProject(e){this.projects=this.projects.filter((t=>t.id!=e)),this.saveProjects()}saveProjects(){try{localStorage.setItem("projects",JSON.stringify(this.projects))}catch(e){console.error("Failed to save projects:",e)}}loadProjects(){const e=JSON.parse(localStorage.getItem("projects"))||[];this.projects=e.map((e=>new o(e.id,e.title,e.description)))}},he=document.querySelector(".add-project"),me=document.querySelector(".add-todo"),pe=new class{constructor(e,t){this.projectManager=e,this.todoManager=t}reloadTodos(){const e=document.querySelector("#todo-list");e.innerHTML="",this.todoManager.getTodos(this.projectManager.currentProject).map(((t,n)=>{const r=document.createElement("div");r.className="todo",r.dataset.index=n;const o=document.createElement("div");o.className="todo-basic";const a=document.createElement("button");1==t.checked?a.className="checkmark-btn":a.className="checkmark-btn unchecked",a.addEventListener("click",(e=>{e.stopPropagation(),this.todoManager.toggleTodo(n),this.todoManager.saveTodos(),this.reloadTodos()})),o.append(a);const i=document.createElement("div");i.className="todo-info";const c=document.createElement("div");c.innerHTML=t.title,c.className="todo-title",i.append(c);const s=document.createElement("div");s.innerHTML=R(t.dueDate,"MM/dd/yyyy"),s.className="todo-date",i.append(s),o.append(i);const d=document.createElement("div");d.className="todo-buttons";const u=document.createElement("button");u.innerHTML="Edit",u.className="todo-edit",u.addEventListener("click",(e=>{e.stopPropagation(),this.addTodoDCreationMenu(t)})),d.append(u);const l=document.createElement("button");l.innerHTML="Delete",l.className="todo-delete",l.addEventListener("click",(e=>{e.stopPropagation(),l.parentElement.parentElement.parentElement.remove(),this.todoManager.deleteTodo(t.id)})),d.append(l),o.append(d),r.appendChild(o);const h=document.createElement("div");h.className="todo-details";const m=document.createElement("p");m.className="todo-description",m.textContent=t.description,h.append(m);const p=document.createElement("p");p.className="todo-priority",p.textContent=`Priority: ${t.priority}`,h.append(p),r.appendChild(h),r.addEventListener("click",(e=>{r.classList.toggle("expanded")})),e.appendChild(r)}))}reloadProjects(){const e=document.querySelector("#project-list");e.innerHTML="",this.projectManager.getProjects().map((t=>{const n=document.createElement("div");n.className="project",n.dataset.id=t.id,this.projectManager.currentProject===t.id&&n.classList.add("selected");const r=document.createElement("div");r.className="project-info";const o=document.createElement("div");o.innerHTML=t.title,o.className="project-title",r.append(o),n.append(r);const a=document.createElement("div");a.className="project-buttons";const i=document.createElement("button");i.innerHTML="Edit",i.className="project-edit",a.append(i),i.addEventListener("click",(e=>{e.stopPropagation(),this.addProjectCreationMenu(t)}));const c=document.createElement("button");c.innerHTML="Delete",c.className="project-delete",c.addEventListener("click",(e=>{e.stopPropagation(),c.parentElement.parentElement.remove();const n=t.id;this.projectManager.deleteProject(n)})),a.append(c),n.append(a),n.addEventListener("click",(()=>{t.id!==this.projectManager.currentProject&&(this.projectManager.setCurrentProject(t.id),n.classList.toggle("selected"),this.reloadProjects(),this.reloadTodos())})),e.appendChild(n)}))}addProjectCreationMenu(e){const t=document.createElement("div");t.id="project-create-menu";const n=document.createElement("form");n.id="project-create-form";const r=document.createElement("input");r.type="text",r.id="project-name",r.name="task",r.placeholder="Name:",r.required=!0;const o=document.createElement("input");o.type="text",o.id="project-description",o.name="description",o.placeholder="Description",o.required=!0;const a=document.createElement("button");a.type="submit",a.id="project-create",a.textContent="Save",null==e?(r.value="",o.value=""):(r.value=e.title,o.value=e.description),n.appendChild(r),n.appendChild(o),n.appendChild(a),n.addEventListener("submit",(t=>{t.preventDefault();const r=document.querySelector("#project-name"),o=document.querySelector("#project-description"),a=r.value,i=o.value;null==e?this.projectManager.createProject(a,i):this.projectManager.updateProject(e.id,a,i),r.value="",o.value="",n.style.display="none",this.projectManager.saveProjects(),this.reloadProjects(),this.reloadTodos()})),t.appendChild(n),document.querySelector("#project-list").appendChild(t)}addTodoDCreationMenu(e){const t=document.createElement("div");t.id="todo-create-menu";const n=document.createElement("form");n.id="todo-create-form";const r=document.createElement("input");r.type="text",r.id="todo-name",r.name="task",r.placeholder="Name:",r.required=!0;const o=document.createElement("input");o.type="text",o.id="todo-description",o.name="description",o.placeholder="Description",o.required=!0;const a=document.createElement("input");a.type="date",a.id="todo-date",a.name="date",a.placeholder="Due date:",a.required=!0;const i=document.createElement("input");i.type="text",i.id="todo-priority",i.name="priority",i.placeholder="Priority",i.required=!0,null==e?(r.value="",o.value="",a.value="",i.value=""):null!==e&&(r.value=e.title,o.value=e.description,a.value=R(e.dueDate,"MM/dd/yyyy"),i.value=e.priority),n.addEventListener("submit",(t=>{t.preventDefault();const c=r.value,s=o.value,d=a.value,u=i.value;null==e?this.todoManager.createTodo(c,s,d,u,this.projectManager.currentProject):this.todoManager.updateTodo(e.id,c,s,d,u,null),r.value="",o.value="",a.value="",i.value="",n.style.display="none",this.todoManager.saveTodos(),this.reloadTodos()}));const c=document.createElement("button");c.type="submit",c.id="todo-create",c.textContent="Save",n.appendChild(r),n.appendChild(o),n.appendChild(a),n.appendChild(i),n.appendChild(c),t.appendChild(n),document.querySelector("#todo-list").appendChild(t)}}(le,ue);he.addEventListener("click",(e=>{pe.addProjectCreationMenu()})),me.addEventListener("click",(e=>{pe.addTodoDCreationMenu()})),pe.reloadProjects(),pe.reloadTodos()})()})();