/*
 FitVids 1.1

 Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 Released under the WTFPL license - http://sam.zoy.org/wtfpl/

*/
(function(c){c.fn.fitVids=function(f){var d={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var h=document.head||document.getElementsByTagName("head")[0],g=document.createElement("div");g.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';
h.appendChild(g.childNodes[1])}f&&c.extend(d,f);return this.each(function(){var b='iframe[src*="player.vimeo.com"] iframe[src*="youtube.com"] iframe[src*="youtube-nocookie.com"] iframe[src*="kickstarter.com"][src*="video.html"] object embed'.split(" ");d.customSelector&&b.push(d.customSelector);var e=".fitvidsignore";d.ignore&&(e=e+", "+d.ignore);b=c(this).find(b.join(","));b=b.not("object object");b=b.not(e);b.each(function(){var a=c(this);if(!(0<a.parents(e).length||"embed"===this.tagName.toLowerCase()&&
a.parent("object").length||a.parent(".fluid-width-video-wrapper").length)){a.css("height")||a.css("width")||!isNaN(a.attr("height"))&&!isNaN(a.attr("width"))||(a.attr("height",9),a.attr("width",16));var b="object"===this.tagName.toLowerCase()||a.attr("height")&&!isNaN(parseInt(a.attr("height"),10))?parseInt(a.attr("height"),10):a.height(),d=isNaN(parseInt(a.attr("width"),10))?a.width():parseInt(a.attr("width"),10);b/=d;a.attr("name")||(a.attr("name","fitvid"+c.fn.fitVids._count),c.fn.fitVids._count++);
a.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*b+"%");a.removeAttr("height").removeAttr("width")}})})};c.fn.fitVids._count=0})(window.jQuery||window.Zepto);

$("#blankstrap-content").fitVids();