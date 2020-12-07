jQuery(document).ready(function(){
	if(jQuery('.preflopmaindiv').length > 0)
	{	// alert("Jquery works");
		jQuery('.clickablehead, .mobclickablehead').click(function(){
			var obj = jQuery(this);
			var sel = obj.attr('selecteddiv');
			var newsel = obj.attr('activecls');
			jQuery('.mobclickablehead, .clickablehead, .contentobj').removeClass('active');
			jQuery(newsel).addClass('active');
			jQuery(sel).addClass('active');
		});
		
		jQuery('a.has-child').click(function(){
			var obj = jQuery(this);
			obj.toggleClass('uparrow');
			obj.next().toggleClass('active');
		});
		jQuery('.preflopmaindiv .contentobj ul li a span').click(function(){
			var obj = jQuery(this);
			var t1 = obj.attr('data-attr-title');
			var src1 = obj.attr('data-attr-src');
			jQuery("#modalclick").click();
			jQuery("#preflop-modal-title").html(t1);
			jQuery("#preflop-modal-image").attr({'src':src1});
		});
		jQuery('.preflopmaindiv .contentobj ul li a.viewcall').click(function(){
			var obj = jQuery(this);
			obj.find('span').click();
		});
	}
});