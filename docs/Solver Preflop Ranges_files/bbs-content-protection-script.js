window.onload = function() {

	disableSelection(document.body)

}

function disableSelection(target){

if (typeof target.onselectstart!="undefined")

	target.onselectstart=function(){return false}

else if (typeof target.style.MozUserSelect!="undefined")

	target.style.MozUserSelect="none"

else

	target.onmousedown=function(){return false}

	target.style.cursor = "default"

}


document.ondragstart=function(){return false};


document.oncontextmenu = function(e){

alert("Right Clicks are not allowed on the Membership Pages.\n\nWindows:\n Ctrl + left click opens links in a new tab.\n\n On Mac:\n ⌘-click: Opens a link in a new tab.\n ⌘-Shift-click: Opens a link in a new tab and makes it the active tab.");

var t = e || window.event;

var elm = t.target || t.srcElement;

if(elm.nodeName == "A" || elm.type == 'text' || elm.type == 'password') 

	return true;

	return false;

}


window.addEventListener("keydown",function (e) {

    if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 67 || e.which == 70 || e.which == 80 || e.which == 83 || e.which == 85)) {

        e.preventDefault();

		}

	})

        document.keypress = function(e) {

        if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 67 || e.which == 70 || e.which == 80 || e.which == 83 || e.which == 85)) {

		}

		return false;

	};


window.addEventListener("keydown",function (e) {

    if (e.ctrlKey && (e.which == 16 || e.which == 73 || e.which == 74)) {

        e.preventDefault();

		}

	})

        document.keypress = function(e) {

        if (e.ctrlKey && (e.which == 16 || e.which == 73 || e.which == 74)) {

		}

		return false;

	};

document.onkeydown = function (e) {

    if (e.which == 17 || e.which == 18 || e.which == 91 || e.which == 93 || e.which == 123 || e.which == 224) {

       return false;

    }

}


window.addEventListener("keyup",kdown,false);

	function kdown(e) {

	var prtsc = e.keyCode||e.charCode;

		if (prtsc == 44) /*alert("Get the hell out of here !"),*/ window.location.replace('http://google.com/');//the alert message can be changed here

	}



jQuery(function ($) {var t="https://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif",e=!0,o=new Image;o.src=t,$("img").live("mouseenter touchstart",function(){var o=$(this);if(!o.hasClass("Overlay")&&(e||o.hasClass("protectMe"))){var i=o.offset(),n=$('<img class="Overlay" src="'+t+'" width="'+o.width()+'" height="'+o.height()+'" />').css({position:"absolute",zIndex:9999999,left:i.left,top:i.top}).appendTo("body").bind("mouseleave",function(){setTimeout(function(){n.remove()},0,$(this))});"ontouchstart"in window&&$(document).one("touchend",function(){setTimeout(function(){n.remove()},0,n)})}})});



// vPaul - Added 11/20/17
// Fix for bug noticed where you could right click on New Play & Explain thumbnails and get the context menu.
var element = jQuery('div'),
    elementTitle = element.attr('title');

element.bind('contextmenu', function(event) {
	
    event.preventDefault();

    element.attr({
        title: ''
    });
    var menu = jQuery('#BBSMenu');
    console.log(event)
    if (menu.length == 0) {
        menu = jQuery('<div id="BBSMenu" />').css({
            position: 'absolute',
            top: event.clientY,
            left: event.clientX
        }).html(' ').hide().insertAfter(this);
    } else {
             menu.css({top: event.clientY,
            left: event.clientX
        })
     }

    menu.fadeIn(400);

});
// END vPaul - Added 11/20/17 


//$(function(){var t="http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif",e=!0,o=new Image;o.src=t,$("img").live("mouseenter touchstart",function(){var o=$(this);if(!o.hasClass("Overlay")&&(e||o.hasClass("protectMe"))){var i=o.offset(),n=$('<img class="Overlay" src="../../../upswing-content-copy-protection/assets/js/'+t+'" width="'+o.width()+'" height="'+o.height()+'" />').css({position:"absolute",zIndex:9999999,left:i.left,top:i.top}).appendTo("body").bind("mouseleave",function(){setTimeout(function(){n.remove()},0,$(this))});"ontouchstart"in window&&$(document).one("touchend",function(){setTimeout(function(){n.remove()},0,n)})}})});

