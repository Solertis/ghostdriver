function(){return function(){var d=this;var aa=window;function e(a,w){for(var c=0,b=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),q=String(w).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),D=Math.max(b.length,q.length),x=0;0==c&&x<D;x++){var ea=b[x]||"",fa=q[x]||"",ga=RegExp("(\\d*)(\\D*)","g"),ha=RegExp("(\\d*)(\\D*)","g");do{var f=ga.exec(ea)||["","",""],g=ha.exec(fa)||["","",""];if(0==f[0].length&&0==g[0].length)break;c=((0==f[1].length?0:parseInt(f[1],10))<(0==g[1].length?0:parseInt(g[1],10))?-1:(0==f[1].length?0:parseInt(f[1],10))>
(0==g[1].length?0:parseInt(g[1],10))?1:0)||((0==f[2].length)<(0==g[2].length)?-1:(0==f[2].length)>(0==g[2].length)?1:0)||(f[2]<g[2]?-1:f[2]>g[2]?1:0)}while(0==c)}return c};var h,k,l,m;function n(){return d.navigator?d.navigator.userAgent:null}m=l=k=h=!1;var p;if(p=n()){var ba=d.navigator;h=0==p.indexOf("Opera");k=!h&&-1!=p.indexOf("MSIE");l=!h&&-1!=p.indexOf("WebKit");m=!h&&!l&&"Gecko"==ba.product}var r=h,s=k,t=m,u=l;function v(){var a=d.document;return a?a.documentMode:void 0}var y;
a:{var z="",A;if(r&&d.opera)var B=d.opera.version,z="function"==typeof B?B():B;else if(t?A=/rv\:([^\);]+)(\)|;)/:s?A=/MSIE\s+([^\);]+)(\)|;)/:u&&(A=/WebKit\/(\S+)/),A)var C=A.exec(n()),z=C?C[1]:"";if(s){var E=v();if(E>parseFloat(z)){y=String(E);break a}}y=z}var F={};function G(a){F[a]||(F[a]=0<=e(y,a))}var H=d.document,I=H&&s?v()||("CSS1Compat"==H.compatMode?parseInt(y,10):5):void 0;var J,K,L,M,N,O,P;P=O=N=M=L=K=J=!1;var Q=n();Q&&(-1!=Q.indexOf("Firefox")?J=!0:-1!=Q.indexOf("Camino")?K=!0:-1!=Q.indexOf("iPhone")||-1!=Q.indexOf("iPod")?L=!0:-1!=Q.indexOf("iPad")?M=!0:-1!=Q.indexOf("Android")?N=!0:-1!=Q.indexOf("Chrome")?O=!0:-1!=Q.indexOf("Safari")&&(P=!0));var ca=J,da=K,ia=L,ja=M,R=N,ka=O,la=P;function S(a){return(a=a.exec(n()))?a[1]:""}var ma=function(){if(ca)return S(/Firefox\/([0-9.]+)/);if(s||r)return y;if(ka)return S(/Chrome\/([0-9.]+)/);if(la)return S(/Version\/([0-9.]+)/);if(ia||ja){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(n());if(a)return a[1]+"."+a[2]}else{if(R)return(a=S(/Android\s+([0-9.]+)/))?a:S(/Version\/([0-9.]+)/);if(da)return S(/Camino\/([0-9.]+)/)}return""}();var T,U;function na(a){V?U(a):R?e(oa,a):e(ma,a)}var V=function(){if(!t)return!1;var a=d.Components;if(!a)return!1;try{if(!a.classes)return!1}catch(w){return!1}var c=a.classes,a=a.interfaces,b=c["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),c=c["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo),q=c.platformVersion,D=c.version;T=function(a){b.a(q,""+a)};U=function(a){b.a(D,""+a)};return!0}(),W;
if(R){var pa=/Android\s+([0-9\.]+)/.exec(n());W=pa?pa[1]:"0"}else W="0";var oa=W;R&&na(2.3);if(t||s){var X;if(X=s)X=s&&9<=I;X||t&&G("1.9.1")}s&&G("9");s&&(V?T(10):s?e(I,10):G(10));R&&na(4);r||u&&(V?T("533"):s?e(I,"533"):G("533"));function qa(a,w){var c=w||aa,b;try{b=c.frameElement}catch(q){b=null}b?(b.style.minHeight="0px",b.style.minWidth="0px",b.width=a.width+"px",b.style.width=a.width+"px",b.height=a.height+"px",b.style.height=a.height+"px"):c.resizeTo(a.width,a.height)}var Y=["_"],Z=d;Y[0]in Z||!Z.execScript||Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)Y.length||void 0===qa?Z=Z[$]?Z[$]:Z[$]={}:Z[$]=qa;; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}
